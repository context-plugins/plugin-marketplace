<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bids — operations

Accessor: `client.Bids` · Source: `src/Applike/Api/Bids.cs` · 2 operations

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
| `PostManagementV1BidsRequest` | `src/Applike/Requests/Bids/PostManagementV1BidsRequest.cs` |
| `ListBidsRequest` | `src/Applike/Models/ListBidsRequest.cs` |
| `ListBidsResponse` | `src/Applike/Models/ListBidsResponse.cs` |
| `PostManagementV1BidsError` | `src/Applike/Errors/PostManagementV1BidsError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

### PostManagementV1BidsUpload

- **Server group**: `DefaultManagementAppPartnerConnectionApi`
- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostManagementV1BidsUpload(PostManagementV1BidsUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<PostManagementV1BidsUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetUploadBidsInvalidBidResponse([NotNullWhen(true)] out UploadBidsInvalidBidResponse? value)` [400] · `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostManagementV1BidsUploadRequest` | `src/Applike/Requests/Bids/PostManagementV1BidsUploadRequest.cs` |
| `UploadBidInput` | `src/Applike/Models/UploadBidInput.cs` |
| `PostManagementV1BidsUploadError` | `src/Applike/Errors/PostManagementV1BidsUploadError.cs` |
| `UploadBidsInvalidBidResponse` | `src/Applike/Models/UploadBidsInvalidBidResponse.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

