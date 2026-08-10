## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
  integrity="sha384-5xdYoZ0Lt6Jw8GFfRP91J0jaOVUq7DGI1J5wIyNi0D+eHVdfUwHR4gW6kPsw489E"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/go.min.js"
  integrity="sha384-HdearVH8cyfzwBIQOjL/6dSEmZxQ5rJRezN7spps8E7iu+R6utS8c2ab0AgBNFfH"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-rFCBWxbZHxZD51qKR2cdayIcKUSHS3p1PWPIs1kjgsP7lu9ZP32ah/2DoQUm/rTg /es/languages/cpp.js
sha384-+1Koxl0St78gEZW5CpFK+dbLp7yNsfwLzzQUsSGimV4k/RVJUz6YvqtsqtdbJyKf /es/languages/cpp.min.js
sha384-2P4mzPjIYmPuF0LdW1jpx1VKc6cx2l3smcGqNNHRj2jIvGGsiAUGklcbWkDt10Hh /es/languages/matlab.js
sha384-1V+EHXAHVnBm9cEy3kpZDOO8LI9tOkHylYgT6gQdG5QRJVA8lIlLt/eQqfhiEPnr /es/languages/matlab.min.js
sha384-Cmq5lORXzyHraasLNqmfchH07JRXyEmjDF+j6tSggoXjYHwtgX/ySW6kkRytM5uu /es/languages/python.js
sha384-ZV5sgX70bBgLkDR5Mtox5UsbJedBc39hRKPdvTw6miK4lSkE/wv94cLY2iyZb/sB /es/languages/python.min.js
sha384-Z5Ja/rxBluJ4iPYwJYn2numfw2XFmlp3qLL1aJ1SZqyTjKWwMh9yWfpNCOqf3vAm /languages/cpp.js
sha384-B711MHXDqRvH/pKkxJk84RyRt9g0qyAJFsu2XukZKoCdnEiBmA6Aq9fO23ZCS7qk /languages/cpp.min.js
sha384-+IiDNSrq9hiDOlzPG1CxaS5ojDqswYZmy3eN4ChCbwEk2UpQwQLk+xkaVjs99yzx /languages/matlab.js
sha384-lq1I9kuTT+eCtMpqcUeHyTatwv3ccB90NXm1b3I7ju0ueJKdD4rdRNMSGvhJpKBg /languages/matlab.min.js
sha384-ueSSFZFqg7cVD0dpEqIk9EefJiJUYan0PH6I8u/p+bNLLx7dMs4J2keMaFXqCN8P /languages/python.js
sha384-eXRt+aAa2ig1yFVDQCLis8k9s/1dikTcigj+/R07yNdIxc8BAG/b1uHDyEW3of17 /languages/python.min.js
sha384-YO0MKUWsVU30wYaaGUg6gYe/TnE9NjY8BvXcAQc1Lb/w7KSNRN4dLhhLDJqz6mBV /highlight.js
sha384-oBeKnmp1IIq/+HQUUmMfwDwuGaVK2FR0FiBEGXoSofBQoX8EV4aeS8PZ9qdFAABa /highlight.min.js
```

