# DeviceCredentialManagement — operations

Accessor: `client.DeviceCredentialManagement` · Source: `Api/DeviceCredentialManagement.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DropCredentials
- **HTTP**: `POST /credentials/drop` (HyperPreciseCredentials (thingspace))
- **Signature**: `DropCredentials(CredentialsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DropResponse`
- **Error**: `SdkException<DropCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GenerateCredentials
- **HTTP**: `POST /credentials/generate` (HyperPreciseCredentials (thingspace))
- **Signature**: `GenerateCredentials(CredentialsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateResponse`
- **Error**: `SdkException<GenerateCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ResetCredentials
- **HTTP**: `POST /credentials/reset` (HyperPreciseCredentials (thingspace))
- **Signature**: `ResetCredentials(CredentialsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateResponse`
- **Error**: `SdkException<ResetCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCredentials
- **HTTP**: `POST /credentials/retrieve` (HyperPreciseCredentials (thingspace))
- **Signature**: `RetrieveCredentials(CredentialsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveResponse`
- **Error**: `SdkException<RetrieveCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400] · `TryGetNoContent(out RawError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
