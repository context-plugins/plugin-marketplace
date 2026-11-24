<!-- Generated file — do not edit; regenerated with the SDK. -->

# Partners — operations

Accessor: `client.Partners` · Source: `src/Applike/Api/Partners.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostManagementV1Partners

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1Partners(PostManagementV1PartnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListPartnersResponse`
- **Error**: `ApiException<PostManagementV1PartnersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1PartnersRequest` | `src/Applike/Requests/Partners/PostManagementV1PartnersRequest.cs` |
| `ListPartnersRequest` | `src/Applike/Models/ListPartnersRequest.cs` |
| `ListPartnersResponse` | `src/Applike/Models/ListPartnersResponse.cs` |
| `PostManagementV1PartnersError` | `src/Applike/Errors/PostManagementV1PartnersError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

