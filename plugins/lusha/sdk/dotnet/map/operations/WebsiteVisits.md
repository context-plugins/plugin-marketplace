<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebsiteVisits — operations

Accessor: `client.WebsiteVisits` · Source: `src/Lusha/Api/WebsiteVisits.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetWebsiteVisits

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetWebsiteVisits(GetWebsiteVisitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WebsiteVisitsResponse`
- **Error**: `ApiException<GetWebsiteVisitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 402, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWebsiteVisitsRequest` | `src/Lusha/Requests/WebsiteVisits/GetWebsiteVisitsRequest.cs` |
| `WebsiteVisitsRequest` | `src/Lusha/Models/WebsiteVisitsRequest.cs` |
| `WebsiteVisitsResponse` | `src/Lusha/Models/WebsiteVisitsResponse.cs` |
| `GetWebsiteVisitsError` | `src/Lusha/Errors/GetWebsiteVisitsError.cs` |
| `ErrorResponseModel` | `src/Lusha/Models/ErrorResponseModel.cs` |

