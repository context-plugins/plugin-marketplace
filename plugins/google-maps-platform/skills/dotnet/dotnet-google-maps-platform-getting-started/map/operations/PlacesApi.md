# PlacesApi — operations

Accessor: `client.PlacesApi` · Source: `Api/PlacesApi.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Autocomplete
- **HTTP**: `GET /maps/api/place/autocomplete/json` (Default (www))
- **Notes**: The Place Autocomplete service is a web service that returns place predictions in response to an HTTP request. The request specifies a textual search string and optional geographic bounds. The service can be used to provide autocomplete functionality for text-based geographic searches, by returning places such as businesses, addresses and points of interest as a user types. &lt;div class="note"&gt;Note: You can use Place Autocomplete even without a map. If you do show a map, it must be a Google map. When you display predictions from the Place Autocomplete service without a map, you must include the 'Powered by Google' logo.&lt;/div&gt; The Place Autocomplete service can match on full words and substrings, resolving place names, addresses, and plus codes. Applications can therefore send queries as the user types, to provide on-the-fly place predictions. The returned predictions are designed to be presented to the user to aid them in selecting the desired place. You can send a Place Details request for more information about any of the places which are returned.
- **Signature**: `Autocomplete(string input, double radius, string? sessiontoken, string? components, bool? strictbounds, double? offset, string? origin, string? location, string? locationbias, string? locationrestriction, string? types, Language1? language, Region1? region, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`sessiontoken` … `region`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `input` ← `input`, `radius` ← `radius`, `sessiontoken` ← `sessiontoken`, `components` ← `components`, `strictbounds` ← `strictbounds`, `offset` ← `offset`, `origin` ← `origin`, `location` ← `location`, `locationbias` ← `locationbias`, `locationrestriction` ← `locationrestriction`, `types` ← `types`, `language` ← `language`, `region` ← `region`
- **Returns**: `PlacesAutocompleteResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FindPlaceFromText
- **HTTP**: `GET /maps/api/place/findplacefromtext/json` (Default (www))
- **Notes**: A Find Place request takes a text input and returns a place. The input can be any kind of Places text data, such as a name, address, or phone number. The request must be a string. A Find Place request using non-string data such as a lat/lng coordinate or plus code generates an error. &lt;div class="note"&gt;Note: If you omit the fields parameter from a Find Place request, only the place_id for the result will be returned.&lt;/div&gt;
- **Signature**: `FindPlaceFromText(string input, Inputtype1 inputtype, IReadOnlyList<string>? fields, string? locationbias, Language1? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fields` — nullable, no default → **must pass explicitly**
  - `locationbias` — nullable, no default → **must pass explicitly**
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `input` ← `input`, `inputtype` ← `inputtype`, `fields` ← `fields`, `locationbias` ← `locationbias`, `language` ← `language`
- **Returns**: `PlacesFindPlaceFromTextResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NearbySearch
- **HTTP**: `GET /maps/api/place/nearbysearch/json` (Default (www))
- **Notes**: A Nearby Search lets you search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching for.
- **Signature**: `NearbySearch(string location, double radius, string? keyword, Maxprice1? maxprice, Minprice1? minprice, string? name, bool? opennow, string? pagetoken, Rankby1? rankby, string? type, Language1? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`keyword` … `language`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location` ← `location`, `radius` ← `radius`, `keyword` ← `keyword`, `maxprice` ← `maxprice`, `minprice` ← `minprice`, `name` ← `name`, `opennow` ← `opennow`, `pagetoken` ← `pagetoken`, `rankby` ← `rankby`, `type` ← `type`, `language` ← `language`
- **Returns**: `PlacesTextSearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlaceDetails
- **HTTP**: `GET /maps/api/place/details/json` (Default (www))
- **Notes**: The Places API is a service that returns information about places using HTTP requests. Places are defined within this API as establishments, geographic locations, or prominent points of interest.
- **Signature**: `PlaceDetails(string placeId, IReadOnlyList<string>? fields, string? sessiontoken, Language1? language, Region1? region, string? reviewsSort, bool? reviewsNoTranslations, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`fields` … `reviewsNoTranslations`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `place_id` ← `placeId`, `fields` ← `fields`, `sessiontoken` ← `sessiontoken`, `language` ← `language`, `region` ← `region`, `reviews_sort` ← `reviewsSort`, `reviews_no_translations` ← `reviewsNoTranslations`
- **Returns**: `PlacesDetailsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PlacePhoto
- **HTTP**: `GET /maps/api/place/photo` (Default (www))
- **Notes**: The Place Photo service, part of the Places API, is a read- only API that allows you to add high quality photographic content to your application. The Place Photo service gives you access to the millions of photos stored in the Places database. When you get place information using a Place Details request, photo references will be returned for relevant photographic content. Find Place, Nearby Search, and Text Search requests also return a single photo reference per place, when relevant. Using the Photo service you can then access the referenced photos and resize the image to the optimal size for your application. Photos returned by the Photo service are sourced from a variety of locations, including business owners and user contributed photos. In most cases, these photos can be used without attribution, or will have the required attribution included as a part of the image. However, if the returned photo element includes a value in the html_attributions field, you will have to include the additional attribution in your application wherever you display the image.
- **Signature**: `PlacePhoto(string photoReference, double? maxheight, double? maxwidth, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `maxheight` — nullable, no default → **must pass explicitly**
  - `maxwidth` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `photo_reference` ← `photoReference`, `maxheight` ← `maxheight`, `maxwidth` ← `maxwidth`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### QueryAutocomplete
- **HTTP**: `GET /maps/api/place/queryautocomplete/json` (Default (www))
- **Notes**: The Query Autocomplete service can be used to provide a query prediction for text-based geographic searches, by returning suggested queries as you type. The Query Autocomplete service allows you to add on-the-fly geographic query predictions to your application. Instead of searching for a specific location, a user can type in a categorical search, such as "pizza near New York" and the service responds with a list of suggested queries matching the string. As the Query Autocomplete service can match on both full words and substrings, applications can send queries as the user types to provide on-the-fly predictions.
- **Signature**: `QueryAutocomplete(string input, double radius, double? offset, string? location, Language1? language, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `location` — nullable, no default → **must pass explicitly**
  - `language` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `input` ← `input`, `radius` ← `radius`, `offset` ← `offset`, `location` ← `location`, `language` ← `language`
- **Returns**: `PlacesQueryAutocompleteResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TextSearch
- **HTTP**: `GET /maps/api/place/textsearch/json` (Default (www))
- **Notes**: The Google Places API Text Search Service is a web service that returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". The service responds with a list of places matching the text string and any location bias that has been set. The service is especially useful for making ambiguous address queries in an automated system, and non-address components of the string may match businesses as well as addresses. Examples of ambiguous address queries are incomplete addresses, poorly formatted addresses, or a request that includes non-address components such as business names. The search response will include a list of places. You can send a Place Details request for more information about any of the places in the response.
- **Signature**: `TextSearch(string query, double radius, string? location, Maxprice1? maxprice, Minprice1? minprice, bool? opennow, string? pagetoken, string? type, Language1? language, Region1? region, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`location` … `region`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `radius` ← `radius`, `location` ← `location`, `maxprice` ← `maxprice`, `minprice` ← `minprice`, `opennow` ← `opennow`, `pagetoken` ← `pagetoken`, `type` ← `type`, `language` ← `language`, `region` ← `region`
- **Returns**: `PlacesTextSearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
