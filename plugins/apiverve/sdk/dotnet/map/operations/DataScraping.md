<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataScraping — operations

Accessor: `client.DataScraping` · Source: `src/ApiVerve/Api/DataScraping.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Contactextractor

- **Auth**: `options.ApiKey`
- **Signature**: `Contactextractor(ContactextractorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ContactextractorResponse`
- **Error**: `ApiException<ContactextractorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContactextractorRequest` | `src/ApiVerve/Requests/DataScraping/ContactextractorRequest.cs` |
| `V1ContactextractorRequest` | `src/ApiVerve/Models/V1ContactextractorRequest.cs` |
| `V1ContactextractorResponse` | `src/ApiVerve/Models/V1ContactextractorResponse.cs` |
| `ContactextractorError` | `src/ApiVerve/Errors/ContactextractorError.cs` |

### Linkscraper

- **Auth**: `options.ApiKey`
- **Signature**: `Linkscraper(LinkscraperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1LinkscraperResponse`
- **Error**: `ApiException<LinkscraperError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LinkscraperRequest` | `src/ApiVerve/Requests/DataScraping/LinkscraperRequest.cs` |
| `V1LinkscraperRequest` | `src/ApiVerve/Models/V1LinkscraperRequest.cs` |
| `V1LinkscraperResponse` | `src/ApiVerve/Models/V1LinkscraperResponse.cs` |
| `LinkscraperError` | `src/ApiVerve/Errors/LinkscraperError.cs` |

### Seoscraper

- **Auth**: `options.ApiKey`
- **Signature**: `Seoscraper(SeoscraperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SeoscraperResponse`
- **Error**: `ApiException<SeoscraperError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SeoscraperRequest` | `src/ApiVerve/Requests/DataScraping/SeoscraperRequest.cs` |
| `V1SeoscraperRequest` | `src/ApiVerve/Models/V1SeoscraperRequest.cs` |
| `V1SeoscraperResponse` | `src/ApiVerve/Models/V1SeoscraperResponse.cs` |
| `SeoscraperError` | `src/ApiVerve/Errors/SeoscraperError.cs` |

### Webimagescraper

- **Auth**: `options.ApiKey`
- **Signature**: `Webimagescraper(WebimagescraperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WebimagescraperResponse`
- **Error**: `ApiException<WebimagescraperError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebimagescraperRequest` | `src/ApiVerve/Requests/DataScraping/WebimagescraperRequest.cs` |
| `V1WebimagescraperRequest` | `src/ApiVerve/Models/V1WebimagescraperRequest.cs` |
| `V1WebimagescraperResponse` | `src/ApiVerve/Models/V1WebimagescraperResponse.cs` |
| `WebimagescraperError` | `src/ApiVerve/Errors/WebimagescraperError.cs` |

### Webscreenshots

- **Auth**: `options.ApiKey`
- **Signature**: `Webscreenshots(WebscreenshotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WebscreenshotsResponse`
- **Error**: `ApiException<WebscreenshotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebscreenshotsRequest` | `src/ApiVerve/Requests/DataScraping/WebscreenshotsRequest.cs` |
| `V1WebscreenshotsRequest` | `src/ApiVerve/Models/V1WebscreenshotsRequest.cs` |
| `V1WebscreenshotsResponse` | `src/ApiVerve/Models/V1WebscreenshotsResponse.cs` |
| `WebscreenshotsError` | `src/ApiVerve/Errors/WebscreenshotsError.cs` |

