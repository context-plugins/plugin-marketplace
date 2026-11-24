<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerService — operations

Accessor: `client.PartnerService` · Source: `src/Semrush/Api/PartnerService.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostApisV4AppCenterV2PartnerViewerStatus

- **Auth**: `options.JwtIssuerToken`
- **Signature**: `PostApisV4AppCenterV2PartnerViewerStatus(PostApisV4AppCenterV2PartnerViewerStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ViewerStatusResponse`
- **Error**: `ApiException<PostApisV4AppCenterV2PartnerViewerStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetString([NotNullWhen(true)] out string? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApisV4AppCenterV2PartnerViewerStatusRequest` | `src/Semrush/Requests/PartnerService/PostApisV4AppCenterV2PartnerViewerStatusRequest.cs` |
| `ViewerStatusRequest` | `src/Semrush/Models/ViewerStatusRequest.cs` |
| `ViewerStatusResponse` | `src/Semrush/Models/ViewerStatusResponse.cs` |
| `PostApisV4AppCenterV2PartnerViewerStatusError` | `src/Semrush/Errors/PostApisV4AppCenterV2PartnerViewerStatusError.cs` |

