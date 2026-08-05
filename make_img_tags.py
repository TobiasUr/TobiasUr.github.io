#!/usr/bin/env python3
"""
Generate <img> tags for every photo in a local folder, with a custom
starting number for the "Photography #" alt text.

Usage:
    python make_img_tags.py <local_folder> <base_url> <start_number>

Example:
    python make_img_tags.py ./photos https://pub-62bbeee194df44df80128065886ae438.r2.dev 5

- <local_folder>   : the folder ON YOUR COMPUTER containing the photos
                      (used only to read the filenames, in order)
- <base_url>        : the base URL/folder used to build the links
                      (src -> base_url/small/filename, data-full -> base_url/filename)
- <start_number>    : the number the "Photography #" alt text should start at
"""

import sys
import os

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp"}


def get_photo_filenames(folder):
    files = [
        f for f in os.listdir(folder)
        if os.path.isfile(os.path.join(folder, f))
        and os.path.splitext(f)[1].lower() in IMAGE_EXTENSIONS
    ]
    files.sort()  # alphabetical/numeric-ish order; adjust if you want a different order
    return files


def make_img_tag(base, filename, number):
    base = base.rstrip("/")
    full_url = f"{base}/{filename}"
    small_url = f"{base}/small/{filename}"
    alt = f"Photography {number}"
    return f'<img src="{small_url}" data-full="{full_url}" alt="{alt}">'


def main():
    if len(sys.argv) != 4:
        print("Usage: python make_img_tags.py <local_folder> <base_url> <start_number>")
        sys.exit(1)

    folder = sys.argv[1]
    base_url = sys.argv[2]

    try:
        start_number = int(sys.argv[3])
    except ValueError:
        print("Error: <start_number> must be an integer.")
        sys.exit(1)

    if not os.path.isdir(folder):
        print(f"Error: '{folder}' is not a valid folder.")
        sys.exit(1)

    photos = get_photo_filenames(folder)

    if not photos:
        print(f"No image files found in '{folder}'.")
        sys.exit(0)

    tags = [
        make_img_tag(base_url, photo, start_number + i)
        for i, photo in enumerate(photos)
    ]

    print("\n".join(tags))


if __name__ == "__main__":
    main()