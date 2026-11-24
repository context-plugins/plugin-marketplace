<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.News` · Source: `src/Upstox/Api/News.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetNews

- **Auth**: `options.Oauth2`
- **Signature**: `GetNews(GetNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Category`
- **Query params (wire ← C#)**: `category` ← `Category`, `instrument_keys` ← `InstrumentKeys`, `page_number` ← `PageNumber`, `page_size` ← `PageSize`
- **Returns**: `GetNewsResponse`
- **Error**: `ApiException<GetNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetNewsRequest` | `src/Upstox/Requests/News/GetNewsRequest.cs` |
| `GetNewsResponse` | `src/Upstox/Models/GetNewsResponse.cs` |
| `GetNewsError` | `src/Upstox/Errors/GetNewsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

