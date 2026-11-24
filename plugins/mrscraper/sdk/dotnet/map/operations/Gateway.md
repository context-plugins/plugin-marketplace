<!-- Generated file — do not edit; regenerated with the SDK. -->

# Gateway — operations

Accessor: `client.Gateway` · Source: `src/MrScraper/Api/Gateway.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRoot

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `GetRoot(GetRootRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Url`
- **Query params (wire ← C#)**: `url` ← `Url`, `token` ← `Token`, `async` ← `Async`, `beta` ← `Beta`, `detectedJson` ← `DetectedJson`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRootRequest` | `src/MrScraper/Requests/Gateway/GetRootRequest.cs` |

### PostRoot

- **Server group**: `DefaultScraperServiceGatewayAuthApi`
- **Auth**: `options.ApiKey` OR `options.BearerAuth`
- **Signature**: `PostRoot(PostRootRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `async` ← `Async`, `beta` ← `Beta`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostRootRequest` | `src/MrScraper/Requests/Gateway/PostRootRequest.cs` |
| `GatewayRequestBody` | `src/MrScraper/Models/GatewayRequestBody.cs` |

