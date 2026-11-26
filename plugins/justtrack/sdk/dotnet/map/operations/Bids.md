<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bids — operations

Accessor: `client.Bids` · Source: `src/Justtrack/Api/Bids.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostManagementV1Bids

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1Bids(PostManagementV1BidsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListBidsResponse`
- **Error**: `ApiException<PostManagementV1BidsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1BidsRequest` | `src/Justtrack/Requests/Bids/PostManagementV1BidsRequest.cs` |
| `ListBidsRequest` | `src/Justtrack/Models/ListBidsRequest.cs` |
| `ListBidsResponse` | `src/Justtrack/Models/ListBidsResponse.cs` |
| `PostManagementV1BidsError` | `src/Justtrack/Errors/PostManagementV1BidsError.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

### PostManagementV1BidsUpload

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1BidsUpload(PostManagementV1BidsUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<PostManagementV1BidsUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetUploadBidsInvalidBidResponse([NotNullWhen(true)] out UploadBidsInvalidBidResponse? value)` [400] · `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1BidsUploadRequest` | `src/Justtrack/Requests/Bids/PostManagementV1BidsUploadRequest.cs` |
| `UploadBidInput` | `src/Justtrack/Models/UploadBidInput.cs` |
| `PostManagementV1BidsUploadError` | `src/Justtrack/Errors/PostManagementV1BidsUploadError.cs` |
| `UploadBidsInvalidBidResponse` | `src/Justtrack/Models/UploadBidsInvalidBidResponse.cs` |
| `ErrorResponseModel` | `src/Justtrack/Models/ErrorResponseModel.cs` |

