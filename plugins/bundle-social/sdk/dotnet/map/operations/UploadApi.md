<!-- Generated file — do not edit; regenerated with the SDK. -->

# UploadApi — operations

Accessor: `client.UploadApi` · Source: `src/BundleSocial/Api/UploadApi.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UploadAbortMultipartUpload

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadAbortMultipartUpload(UploadAbortMultipartUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1UploadMultipartAbortResponse`
- **Error**: `ApiException<UploadAbortMultipartUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1UploadMultipartAbort400Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort400Error1? value)` [400] · `TryGetApiV1UploadMultipartAbort401Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort401Error1? value)` [401] · `TryGetApiV1UploadMultipartAbort403Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort403Error1? value)` [403] · `TryGetApiV1UploadMultipartAbort404Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort404Error1? value)` [404] · `TryGetApiV1UploadMultipartAbort429Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort429Error1? value)` [429] · `TryGetApiV1UploadMultipartAbort500Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort500Error1? value)` [500] · `TryGetApiV1UploadMultipartAbort502Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort502Error1? value)` [502] · `TryGetApiV1UploadMultipartAbort503Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort503Error1? value)` [503] · `TryGetApiV1UploadMultipartAbort504Error1([NotNullWhen(true)] out ApiV1UploadMultipartAbort504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadAbortMultipartUploadRequest` | `src/BundleSocial/Requests/UploadApi/UploadAbortMultipartUploadRequest.cs` |
| `ApiV1UploadMultipartAbortRequest` | `src/BundleSocial/Models/ApiV1UploadMultipartAbortRequest.cs` |
| `ApiV1UploadMultipartAbortResponse` | `src/BundleSocial/Models/ApiV1UploadMultipartAbortResponse.cs` |
| `UploadAbortMultipartUploadError` | `src/BundleSocial/Errors/UploadAbortMultipartUploadError.cs` |
| `ApiV1UploadMultipartAbort400Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort400Error1.cs` |
| `ApiV1UploadMultipartAbort401Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort401Error1.cs` |
| `ApiV1UploadMultipartAbort403Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort403Error1.cs` |
| `ApiV1UploadMultipartAbort404Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort404Error1.cs` |
| `ApiV1UploadMultipartAbort429Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort429Error1.cs` |
| `ApiV1UploadMultipartAbort500Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort500Error1.cs` |
| `ApiV1UploadMultipartAbort502Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort502Error1.cs` |
| `ApiV1UploadMultipartAbort503Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort503Error1.cs` |
| `ApiV1UploadMultipartAbort504Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartAbort504Error1.cs` |

### UploadCompleteMultipartUpload

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadCompleteMultipartUpload(UploadCompleteMultipartUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1UploadMultipartCompleteResponse`
- **Error**: `ApiException<UploadCompleteMultipartUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1UploadMultipartComplete400Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete400Error1? value)` [400] · `TryGetApiV1UploadMultipartComplete401Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete401Error1? value)` [401] · `TryGetApiV1UploadMultipartComplete403Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete403Error1? value)` [403] · `TryGetApiV1UploadMultipartComplete404Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete404Error1? value)` [404] · `TryGetApiV1UploadMultipartComplete429Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete429Error1? value)` [429] · `TryGetApiV1UploadMultipartComplete500Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete500Error1? value)` [500] · `TryGetApiV1UploadMultipartComplete502Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete502Error1? value)` [502] · `TryGetApiV1UploadMultipartComplete503Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete503Error1? value)` [503] · `TryGetApiV1UploadMultipartComplete504Error1([NotNullWhen(true)] out ApiV1UploadMultipartComplete504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadCompleteMultipartUploadRequest` | `src/BundleSocial/Requests/UploadApi/UploadCompleteMultipartUploadRequest.cs` |
| `ApiV1UploadMultipartCompleteRequest` | `src/BundleSocial/Models/ApiV1UploadMultipartCompleteRequest.cs` |
| `ApiV1UploadMultipartCompleteResponse` | `src/BundleSocial/Models/ApiV1UploadMultipartCompleteResponse.cs` |
| `UploadCompleteMultipartUploadError` | `src/BundleSocial/Errors/UploadCompleteMultipartUploadError.cs` |
| `ApiV1UploadMultipartComplete400Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete400Error1.cs` |
| `ApiV1UploadMultipartComplete401Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete401Error1.cs` |
| `ApiV1UploadMultipartComplete403Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete403Error1.cs` |
| `ApiV1UploadMultipartComplete404Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete404Error1.cs` |
| `ApiV1UploadMultipartComplete429Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete429Error1.cs` |
| `ApiV1UploadMultipartComplete500Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete500Error1.cs` |
| `ApiV1UploadMultipartComplete502Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete502Error1.cs` |
| `ApiV1UploadMultipartComplete503Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete503Error1.cs` |
| `ApiV1UploadMultipartComplete504Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartComplete504Error1.cs` |

### UploadCreate

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadCreate(UploadCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1UploadResponse1`
- **Error**: `ApiException<UploadCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Upload400Error1([NotNullWhen(true)] out ApiV1Upload400Error1? value)` [400] · `TryGetApiV1Upload401Error1([NotNullWhen(true)] out ApiV1Upload401Error1? value)` [401] · `TryGetApiV1Upload403Error1([NotNullWhen(true)] out ApiV1Upload403Error1? value)` [403] · `TryGetApiV1Upload404Error1([NotNullWhen(true)] out ApiV1Upload404Error1? value)` [404] · `TryGetApiV1Upload429Error1([NotNullWhen(true)] out ApiV1Upload429Error1? value)` [429] · `TryGetApiV1Upload500Error1([NotNullWhen(true)] out ApiV1Upload500Error1? value)` [500] · `TryGetApiV1Upload502Error1([NotNullWhen(true)] out ApiV1Upload502Error1? value)` [502] · `TryGetApiV1Upload503Error1([NotNullWhen(true)] out ApiV1Upload503Error1? value)` [503] · `TryGetApiV1Upload504Error1([NotNullWhen(true)] out ApiV1Upload504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadCreateRequest` | `src/BundleSocial/Requests/UploadApi/UploadCreateRequest.cs` |
| `ApiV1UploadResponse1` | `src/BundleSocial/Models/ApiV1UploadResponse1.cs` |
| `UploadCreateError` | `src/BundleSocial/Errors/UploadCreateError.cs` |
| `ApiV1Upload400Error1` | `src/BundleSocial/Models/ApiV1Upload400Error1.cs` |
| `ApiV1Upload401Error1` | `src/BundleSocial/Models/ApiV1Upload401Error1.cs` |
| `ApiV1Upload403Error1` | `src/BundleSocial/Models/ApiV1Upload403Error1.cs` |
| `ApiV1Upload404Error1` | `src/BundleSocial/Models/ApiV1Upload404Error1.cs` |
| `ApiV1Upload429Error1` | `src/BundleSocial/Models/ApiV1Upload429Error1.cs` |
| `ApiV1Upload500Error1` | `src/BundleSocial/Models/ApiV1Upload500Error1.cs` |
| `ApiV1Upload502Error1` | `src/BundleSocial/Models/ApiV1Upload502Error1.cs` |
| `ApiV1Upload503Error1` | `src/BundleSocial/Models/ApiV1Upload503Error1.cs` |
| `ApiV1Upload504Error1` | `src/BundleSocial/Models/ApiV1Upload504Error1.cs` |

### UploadCreateFromUrl

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadCreateFromUrl(UploadCreateFromUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1UploadFromUrlResponse`
- **Error**: `ApiException<UploadCreateFromUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1UploadFromUrl400Error1([NotNullWhen(true)] out ApiV1UploadFromUrl400Error1? value)` [400] · `TryGetApiV1UploadFromUrl401Error1([NotNullWhen(true)] out ApiV1UploadFromUrl401Error1? value)` [401] · `TryGetApiV1UploadFromUrl403Error1([NotNullWhen(true)] out ApiV1UploadFromUrl403Error1? value)` [403] · `TryGetApiV1UploadFromUrl404Error1([NotNullWhen(true)] out ApiV1UploadFromUrl404Error1? value)` [404] · `TryGetApiV1UploadFromUrl429Error1([NotNullWhen(true)] out ApiV1UploadFromUrl429Error1? value)` [429] · `TryGetApiV1UploadFromUrl500Error1([NotNullWhen(true)] out ApiV1UploadFromUrl500Error1? value)` [500] · `TryGetApiV1UploadFromUrl502Error1([NotNullWhen(true)] out ApiV1UploadFromUrl502Error1? value)` [502] · `TryGetApiV1UploadFromUrl503Error1([NotNullWhen(true)] out ApiV1UploadFromUrl503Error1? value)` [503] · `TryGetApiV1UploadFromUrl504Error1([NotNullWhen(true)] out ApiV1UploadFromUrl504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadCreateFromUrlRequest` | `src/BundleSocial/Requests/UploadApi/UploadCreateFromUrlRequest.cs` |
| `ApiV1UploadFromUrlRequest` | `src/BundleSocial/Models/ApiV1UploadFromUrlRequest.cs` |
| `ApiV1UploadFromUrlResponse` | `src/BundleSocial/Models/ApiV1UploadFromUrlResponse.cs` |
| `UploadCreateFromUrlError` | `src/BundleSocial/Errors/UploadCreateFromUrlError.cs` |
| `ApiV1UploadFromUrl400Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl400Error1.cs` |
| `ApiV1UploadFromUrl401Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl401Error1.cs` |
| `ApiV1UploadFromUrl403Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl403Error1.cs` |
| `ApiV1UploadFromUrl404Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl404Error1.cs` |
| `ApiV1UploadFromUrl429Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl429Error1.cs` |
| `ApiV1UploadFromUrl500Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl500Error1.cs` |
| `ApiV1UploadFromUrl502Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl502Error1.cs` |
| `ApiV1UploadFromUrl503Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl503Error1.cs` |
| `ApiV1UploadFromUrl504Error1` | `src/BundleSocial/Models/ApiV1UploadFromUrl504Error1.cs` |

### UploadDelete

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadDelete(UploadDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1UploadResponse1`
- **Error**: `ApiException<UploadDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Upload400Error1([NotNullWhen(true)] out ApiV1Upload400Error1? value)` [400] · `TryGetApiV1Upload401Error1([NotNullWhen(true)] out ApiV1Upload401Error1? value)` [401] · `TryGetApiV1Upload403Error1([NotNullWhen(true)] out ApiV1Upload403Error1? value)` [403] · `TryGetApiV1Upload404Error1([NotNullWhen(true)] out ApiV1Upload404Error1? value)` [404] · `TryGetApiV1Upload429Error1([NotNullWhen(true)] out ApiV1Upload429Error1? value)` [429] · `TryGetApiV1Upload500Error1([NotNullWhen(true)] out ApiV1Upload500Error1? value)` [500] · `TryGetApiV1Upload502Error1([NotNullWhen(true)] out ApiV1Upload502Error1? value)` [502] · `TryGetApiV1Upload503Error1([NotNullWhen(true)] out ApiV1Upload503Error1? value)` [503] · `TryGetApiV1Upload504Error1([NotNullWhen(true)] out ApiV1Upload504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadDeleteRequest` | `src/BundleSocial/Requests/UploadApi/UploadDeleteRequest.cs` |
| `ApiV1UploadResponse1` | `src/BundleSocial/Models/ApiV1UploadResponse1.cs` |
| `UploadDeleteError` | `src/BundleSocial/Errors/UploadDeleteError.cs` |
| `ApiV1Upload400Error1` | `src/BundleSocial/Models/ApiV1Upload400Error1.cs` |
| `ApiV1Upload401Error1` | `src/BundleSocial/Models/ApiV1Upload401Error1.cs` |
| `ApiV1Upload403Error1` | `src/BundleSocial/Models/ApiV1Upload403Error1.cs` |
| `ApiV1Upload404Error1` | `src/BundleSocial/Models/ApiV1Upload404Error1.cs` |
| `ApiV1Upload429Error1` | `src/BundleSocial/Models/ApiV1Upload429Error1.cs` |
| `ApiV1Upload500Error1` | `src/BundleSocial/Models/ApiV1Upload500Error1.cs` |
| `ApiV1Upload502Error1` | `src/BundleSocial/Models/ApiV1Upload502Error1.cs` |
| `ApiV1Upload503Error1` | `src/BundleSocial/Models/ApiV1Upload503Error1.cs` |
| `ApiV1Upload504Error1` | `src/BundleSocial/Models/ApiV1Upload504Error1.cs` |

### UploadDeleteMany

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadDeleteMany(UploadDeleteManyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ApiV1UploadResponse1>`
- **Error**: `ApiException<UploadDeleteManyError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Upload400Error1([NotNullWhen(true)] out ApiV1Upload400Error1? value)` [400] · `TryGetApiV1Upload401Error1([NotNullWhen(true)] out ApiV1Upload401Error1? value)` [401] · `TryGetApiV1Upload403Error1([NotNullWhen(true)] out ApiV1Upload403Error1? value)` [403] · `TryGetApiV1Upload404Error1([NotNullWhen(true)] out ApiV1Upload404Error1? value)` [404] · `TryGetApiV1Upload429Error1([NotNullWhen(true)] out ApiV1Upload429Error1? value)` [429] · `TryGetApiV1Upload500Error1([NotNullWhen(true)] out ApiV1Upload500Error1? value)` [500] · `TryGetApiV1Upload502Error1([NotNullWhen(true)] out ApiV1Upload502Error1? value)` [502] · `TryGetApiV1Upload503Error1([NotNullWhen(true)] out ApiV1Upload503Error1? value)` [503] · `TryGetApiV1Upload504Error1([NotNullWhen(true)] out ApiV1Upload504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadDeleteManyRequest` | `src/BundleSocial/Requests/UploadApi/UploadDeleteManyRequest.cs` |
| `ApiV1UploadRequest` | `src/BundleSocial/Models/ApiV1UploadRequest.cs` |
| `ApiV1UploadResponse1` | `src/BundleSocial/Models/ApiV1UploadResponse1.cs` |
| `UploadDeleteManyError` | `src/BundleSocial/Errors/UploadDeleteManyError.cs` |
| `ApiV1Upload400Error1` | `src/BundleSocial/Models/ApiV1Upload400Error1.cs` |
| `ApiV1Upload401Error1` | `src/BundleSocial/Models/ApiV1Upload401Error1.cs` |
| `ApiV1Upload403Error1` | `src/BundleSocial/Models/ApiV1Upload403Error1.cs` |
| `ApiV1Upload404Error1` | `src/BundleSocial/Models/ApiV1Upload404Error1.cs` |
| `ApiV1Upload429Error1` | `src/BundleSocial/Models/ApiV1Upload429Error1.cs` |
| `ApiV1Upload500Error1` | `src/BundleSocial/Models/ApiV1Upload500Error1.cs` |
| `ApiV1Upload502Error1` | `src/BundleSocial/Models/ApiV1Upload502Error1.cs` |
| `ApiV1Upload503Error1` | `src/BundleSocial/Models/ApiV1Upload503Error1.cs` |
| `ApiV1Upload504Error1` | `src/BundleSocial/Models/ApiV1Upload504Error1.cs` |

### UploadFinalizeLargeUpload

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadFinalizeLargeUpload(UploadFinalizeLargeUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1UploadFinalizeResponse`
- **Error**: `ApiException<UploadFinalizeLargeUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1UploadFinalize400Error1([NotNullWhen(true)] out ApiV1UploadFinalize400Error1? value)` [400] · `TryGetApiV1UploadFinalize401Error1([NotNullWhen(true)] out ApiV1UploadFinalize401Error1? value)` [401] · `TryGetApiV1UploadFinalize403Error1([NotNullWhen(true)] out ApiV1UploadFinalize403Error1? value)` [403] · `TryGetApiV1UploadFinalize404Error1([NotNullWhen(true)] out ApiV1UploadFinalize404Error1? value)` [404] · `TryGetApiV1UploadFinalize429Error1([NotNullWhen(true)] out ApiV1UploadFinalize429Error1? value)` [429] · `TryGetApiV1UploadFinalize500Error1([NotNullWhen(true)] out ApiV1UploadFinalize500Error1? value)` [500] · `TryGetApiV1UploadFinalize502Error1([NotNullWhen(true)] out ApiV1UploadFinalize502Error1? value)` [502] · `TryGetApiV1UploadFinalize503Error1([NotNullWhen(true)] out ApiV1UploadFinalize503Error1? value)` [503] · `TryGetApiV1UploadFinalize504Error1([NotNullWhen(true)] out ApiV1UploadFinalize504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadFinalizeLargeUploadRequest` | `src/BundleSocial/Requests/UploadApi/UploadFinalizeLargeUploadRequest.cs` |
| `ApiV1UploadFinalizeRequest` | `src/BundleSocial/Models/ApiV1UploadFinalizeRequest.cs` |
| `ApiV1UploadFinalizeResponse` | `src/BundleSocial/Models/ApiV1UploadFinalizeResponse.cs` |
| `UploadFinalizeLargeUploadError` | `src/BundleSocial/Errors/UploadFinalizeLargeUploadError.cs` |
| `ApiV1UploadFinalize400Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize400Error1.cs` |
| `ApiV1UploadFinalize401Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize401Error1.cs` |
| `ApiV1UploadFinalize403Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize403Error1.cs` |
| `ApiV1UploadFinalize404Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize404Error1.cs` |
| `ApiV1UploadFinalize429Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize429Error1.cs` |
| `ApiV1UploadFinalize500Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize500Error1.cs` |
| `ApiV1UploadFinalize502Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize502Error1.cs` |
| `ApiV1UploadFinalize503Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize503Error1.cs` |
| `ApiV1UploadFinalize504Error1` | `src/BundleSocial/Models/ApiV1UploadFinalize504Error1.cs` |

### UploadGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadGet(UploadGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1UploadResponse`
- **Error**: `ApiException<UploadGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Upload400Error1([NotNullWhen(true)] out ApiV1Upload400Error1? value)` [400] · `TryGetApiV1Upload401Error1([NotNullWhen(true)] out ApiV1Upload401Error1? value)` [401] · `TryGetApiV1Upload403Error1([NotNullWhen(true)] out ApiV1Upload403Error1? value)` [403] · `TryGetApiV1Upload404Error1([NotNullWhen(true)] out ApiV1Upload404Error1? value)` [404] · `TryGetApiV1Upload429Error1([NotNullWhen(true)] out ApiV1Upload429Error1? value)` [429] · `TryGetApiV1Upload500Error1([NotNullWhen(true)] out ApiV1Upload500Error1? value)` [500] · `TryGetApiV1Upload502Error1([NotNullWhen(true)] out ApiV1Upload502Error1? value)` [502] · `TryGetApiV1Upload503Error1([NotNullWhen(true)] out ApiV1Upload503Error1? value)` [503] · `TryGetApiV1Upload504Error1([NotNullWhen(true)] out ApiV1Upload504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadGetRequest` | `src/BundleSocial/Requests/UploadApi/UploadGetRequest.cs` |
| `ApiV1UploadResponse` | `src/BundleSocial/Models/ApiV1UploadResponse.cs` |
| `UploadGetError` | `src/BundleSocial/Errors/UploadGetError.cs` |
| `ApiV1Upload400Error1` | `src/BundleSocial/Models/ApiV1Upload400Error1.cs` |
| `ApiV1Upload401Error1` | `src/BundleSocial/Models/ApiV1Upload401Error1.cs` |
| `ApiV1Upload403Error1` | `src/BundleSocial/Models/ApiV1Upload403Error1.cs` |
| `ApiV1Upload404Error1` | `src/BundleSocial/Models/ApiV1Upload404Error1.cs` |
| `ApiV1Upload429Error1` | `src/BundleSocial/Models/ApiV1Upload429Error1.cs` |
| `ApiV1Upload500Error1` | `src/BundleSocial/Models/ApiV1Upload500Error1.cs` |
| `ApiV1Upload502Error1` | `src/BundleSocial/Models/ApiV1Upload502Error1.cs` |
| `ApiV1Upload503Error1` | `src/BundleSocial/Models/ApiV1Upload503Error1.cs` |
| `ApiV1Upload504Error1` | `src/BundleSocial/Models/ApiV1Upload504Error1.cs` |

### UploadGetList

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadGetList(UploadGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `teamId` ← `TeamId`, `type` ← `Type`, `types` ← `Types`, `status` ← `Status`, `ids` ← `Ids`, `urls` ← `Urls`, `limit` ← `Limit`, `includePosts` ← `IncludePosts`, `offset` ← `Offset`
- **Returns**: `IReadOnlyList<ApiV1UploadResponse>`
- **Error**: `ApiException<UploadGetListError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1Upload400Error1([NotNullWhen(true)] out ApiV1Upload400Error1? value)` [400] · `TryGetApiV1Upload401Error1([NotNullWhen(true)] out ApiV1Upload401Error1? value)` [401] · `TryGetApiV1Upload403Error1([NotNullWhen(true)] out ApiV1Upload403Error1? value)` [403] · `TryGetApiV1Upload404Error1([NotNullWhen(true)] out ApiV1Upload404Error1? value)` [404] · `TryGetApiV1Upload429Error1([NotNullWhen(true)] out ApiV1Upload429Error1? value)` [429] · `TryGetApiV1Upload500Error1([NotNullWhen(true)] out ApiV1Upload500Error1? value)` [500] · `TryGetApiV1Upload502Error1([NotNullWhen(true)] out ApiV1Upload502Error1? value)` [502] · `TryGetApiV1Upload503Error1([NotNullWhen(true)] out ApiV1Upload503Error1? value)` [503] · `TryGetApiV1Upload504Error1([NotNullWhen(true)] out ApiV1Upload504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadGetListRequest` | `src/BundleSocial/Requests/UploadApi/UploadGetListRequest.cs` |
| `TypeBundleSocialUploadApi` | `src/BundleSocial/Models/Enums/TypeBundleSocialUploadApi.cs` |
| `StatusBundleSocialUploadApi` | `src/BundleSocial/Models/Enums/StatusBundleSocialUploadApi.cs` |
| `IncludePosts2` | `src/BundleSocial/Models/AnyOf/IncludePosts2.cs` |
| `ApiV1UploadResponse` | `src/BundleSocial/Models/ApiV1UploadResponse.cs` |
| `UploadGetListError` | `src/BundleSocial/Errors/UploadGetListError.cs` |
| `ApiV1Upload400Error1` | `src/BundleSocial/Models/ApiV1Upload400Error1.cs` |
| `ApiV1Upload401Error1` | `src/BundleSocial/Models/ApiV1Upload401Error1.cs` |
| `ApiV1Upload403Error1` | `src/BundleSocial/Models/ApiV1Upload403Error1.cs` |
| `ApiV1Upload404Error1` | `src/BundleSocial/Models/ApiV1Upload404Error1.cs` |
| `ApiV1Upload429Error1` | `src/BundleSocial/Models/ApiV1Upload429Error1.cs` |
| `ApiV1Upload500Error1` | `src/BundleSocial/Models/ApiV1Upload500Error1.cs` |
| `ApiV1Upload502Error1` | `src/BundleSocial/Models/ApiV1Upload502Error1.cs` |
| `ApiV1Upload503Error1` | `src/BundleSocial/Models/ApiV1Upload503Error1.cs` |
| `ApiV1Upload504Error1` | `src/BundleSocial/Models/ApiV1Upload504Error1.cs` |

### UploadInitLargeUpload

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadInitLargeUpload(UploadInitLargeUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1UploadInitResponse`
- **Error**: `ApiException<UploadInitLargeUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1UploadInit400Error1([NotNullWhen(true)] out ApiV1UploadInit400Error1? value)` [400] · `TryGetApiV1UploadInit401Error1([NotNullWhen(true)] out ApiV1UploadInit401Error1? value)` [401] · `TryGetApiV1UploadInit403Error1([NotNullWhen(true)] out ApiV1UploadInit403Error1? value)` [403] · `TryGetApiV1UploadInit404Error1([NotNullWhen(true)] out ApiV1UploadInit404Error1? value)` [404] · `TryGetApiV1UploadInit429Error1([NotNullWhen(true)] out ApiV1UploadInit429Error1? value)` [429] · `TryGetApiV1UploadInit500Error1([NotNullWhen(true)] out ApiV1UploadInit500Error1? value)` [500] · `TryGetApiV1UploadInit502Error1([NotNullWhen(true)] out ApiV1UploadInit502Error1? value)` [502] · `TryGetApiV1UploadInit503Error1([NotNullWhen(true)] out ApiV1UploadInit503Error1? value)` [503] · `TryGetApiV1UploadInit504Error1([NotNullWhen(true)] out ApiV1UploadInit504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadInitLargeUploadRequest` | `src/BundleSocial/Requests/UploadApi/UploadInitLargeUploadRequest.cs` |
| `ApiV1UploadInitRequest` | `src/BundleSocial/Models/ApiV1UploadInitRequest.cs` |
| `ApiV1UploadInitResponse` | `src/BundleSocial/Models/ApiV1UploadInitResponse.cs` |
| `UploadInitLargeUploadError` | `src/BundleSocial/Errors/UploadInitLargeUploadError.cs` |
| `ApiV1UploadInit400Error1` | `src/BundleSocial/Models/ApiV1UploadInit400Error1.cs` |
| `ApiV1UploadInit401Error1` | `src/BundleSocial/Models/ApiV1UploadInit401Error1.cs` |
| `ApiV1UploadInit403Error1` | `src/BundleSocial/Models/ApiV1UploadInit403Error1.cs` |
| `ApiV1UploadInit404Error1` | `src/BundleSocial/Models/ApiV1UploadInit404Error1.cs` |
| `ApiV1UploadInit429Error1` | `src/BundleSocial/Models/ApiV1UploadInit429Error1.cs` |
| `ApiV1UploadInit500Error1` | `src/BundleSocial/Models/ApiV1UploadInit500Error1.cs` |
| `ApiV1UploadInit502Error1` | `src/BundleSocial/Models/ApiV1UploadInit502Error1.cs` |
| `ApiV1UploadInit503Error1` | `src/BundleSocial/Models/ApiV1UploadInit503Error1.cs` |
| `ApiV1UploadInit504Error1` | `src/BundleSocial/Models/ApiV1UploadInit504Error1.cs` |

### UploadInitMultipartUpload

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadInitMultipartUpload(UploadInitMultipartUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1UploadMultipartInitResponse`
- **Error**: `ApiException<UploadInitMultipartUploadError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1UploadMultipartInit400Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit400Error1? value)` [400] · `TryGetApiV1UploadMultipartInit401Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit401Error1? value)` [401] · `TryGetApiV1UploadMultipartInit403Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit403Error1? value)` [403] · `TryGetApiV1UploadMultipartInit404Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit404Error1? value)` [404] · `TryGetApiV1UploadMultipartInit429Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit429Error1? value)` [429] · `TryGetApiV1UploadMultipartInit500Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit500Error1? value)` [500] · `TryGetApiV1UploadMultipartInit502Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit502Error1? value)` [502] · `TryGetApiV1UploadMultipartInit503Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit503Error1? value)` [503] · `TryGetApiV1UploadMultipartInit504Error1([NotNullWhen(true)] out ApiV1UploadMultipartInit504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadInitMultipartUploadRequest` | `src/BundleSocial/Requests/UploadApi/UploadInitMultipartUploadRequest.cs` |
| `ApiV1UploadMultipartInitRequest` | `src/BundleSocial/Models/ApiV1UploadMultipartInitRequest.cs` |
| `ApiV1UploadMultipartInitResponse` | `src/BundleSocial/Models/ApiV1UploadMultipartInitResponse.cs` |
| `UploadInitMultipartUploadError` | `src/BundleSocial/Errors/UploadInitMultipartUploadError.cs` |
| `ApiV1UploadMultipartInit400Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit400Error1.cs` |
| `ApiV1UploadMultipartInit401Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit401Error1.cs` |
| `ApiV1UploadMultipartInit403Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit403Error1.cs` |
| `ApiV1UploadMultipartInit404Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit404Error1.cs` |
| `ApiV1UploadMultipartInit429Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit429Error1.cs` |
| `ApiV1UploadMultipartInit500Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit500Error1.cs` |
| `ApiV1UploadMultipartInit502Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit502Error1.cs` |
| `ApiV1UploadMultipartInit503Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit503Error1.cs` |
| `ApiV1UploadMultipartInit504Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartInit504Error1.cs` |

### UploadSignMultipartParts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UploadSignMultipartParts(UploadSignMultipartPartsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1UploadMultipartSignResponse`
- **Error**: `ApiException<UploadSignMultipartPartsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1UploadMultipartSign400Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign400Error1? value)` [400] · `TryGetApiV1UploadMultipartSign401Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign401Error1? value)` [401] · `TryGetApiV1UploadMultipartSign403Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign403Error1? value)` [403] · `TryGetApiV1UploadMultipartSign404Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign404Error1? value)` [404] · `TryGetApiV1UploadMultipartSign429Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign429Error1? value)` [429] · `TryGetApiV1UploadMultipartSign500Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign500Error1? value)` [500] · `TryGetApiV1UploadMultipartSign502Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign502Error1? value)` [502] · `TryGetApiV1UploadMultipartSign503Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign503Error1? value)` [503] · `TryGetApiV1UploadMultipartSign504Error1([NotNullWhen(true)] out ApiV1UploadMultipartSign504Error1? value)` [504] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadSignMultipartPartsRequest` | `src/BundleSocial/Requests/UploadApi/UploadSignMultipartPartsRequest.cs` |
| `ApiV1UploadMultipartSignRequest` | `src/BundleSocial/Models/ApiV1UploadMultipartSignRequest.cs` |
| `ApiV1UploadMultipartSignResponse` | `src/BundleSocial/Models/ApiV1UploadMultipartSignResponse.cs` |
| `UploadSignMultipartPartsError` | `src/BundleSocial/Errors/UploadSignMultipartPartsError.cs` |
| `ApiV1UploadMultipartSign400Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign400Error1.cs` |
| `ApiV1UploadMultipartSign401Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign401Error1.cs` |
| `ApiV1UploadMultipartSign403Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign403Error1.cs` |
| `ApiV1UploadMultipartSign404Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign404Error1.cs` |
| `ApiV1UploadMultipartSign429Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign429Error1.cs` |
| `ApiV1UploadMultipartSign500Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign500Error1.cs` |
| `ApiV1UploadMultipartSign502Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign502Error1.cs` |
| `ApiV1UploadMultipartSign503Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign503Error1.cs` |
| `ApiV1UploadMultipartSign504Error1` | `src/BundleSocial/Models/ApiV1UploadMultipartSign504Error1.cs` |

