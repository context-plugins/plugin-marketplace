<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.Documents` · Source: `src/ApiVerve/Api/Documents.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Htmltopdf

- **Auth**: `options.ApiKey`
- **Signature**: `Htmltopdf(HtmltopdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1HtmltopdfResponse`
- **Error**: `ApiException<HtmltopdfError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HtmltopdfRequest` | `src/ApiVerve/Requests/Documents/HtmltopdfRequest.cs` |
| `V1HtmltopdfRequest` | `src/ApiVerve/Models/V1HtmltopdfRequest.cs` |
| `V1HtmltopdfResponse` | `src/ApiVerve/Models/V1HtmltopdfResponse.cs` |
| `HtmltopdfError` | `src/ApiVerve/Errors/HtmltopdfError.cs` |

### Invoicegenerator

- **Auth**: `options.ApiKey`
- **Signature**: `Invoicegenerator(InvoicegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1InvoicegeneratorResponse`
- **Error**: `ApiException<InvoicegeneratorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InvoicegeneratorRequest` | `src/ApiVerve/Requests/Documents/InvoicegeneratorRequest.cs` |
| `V1InvoicegeneratorRequest` | `src/ApiVerve/Models/V1InvoicegeneratorRequest.cs` |
| `V1InvoicegeneratorResponse` | `src/ApiVerve/Models/V1InvoicegeneratorResponse.cs` |
| `InvoicegeneratorError` | `src/ApiVerve/Errors/InvoicegeneratorError.cs` |

### Websitetopdf

- **Auth**: `options.ApiKey`
- **Signature**: `Websitetopdf(WebsitetopdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WebsitetopdfResponse`
- **Error**: `ApiException<WebsitetopdfError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebsitetopdfRequest` | `src/ApiVerve/Requests/Documents/WebsitetopdfRequest.cs` |
| `V1WebsitetopdfRequest` | `src/ApiVerve/Models/V1WebsitetopdfRequest.cs` |
| `V1WebsitetopdfResponse` | `src/ApiVerve/Models/V1WebsitetopdfResponse.cs` |
| `WebsitetopdfError` | `src/ApiVerve/Errors/WebsitetopdfError.cs` |

