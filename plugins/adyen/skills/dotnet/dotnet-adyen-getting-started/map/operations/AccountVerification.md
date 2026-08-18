<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountVerification — operations

Accessor: `client.AccountVerification` · Source: `Api/AccountVerification.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccountVerificationReportsCode
- **Server group**: `Default21`
- **Signature**: `GetAccountVerificationReportsCode(string code, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AccountVerificationReportResponse`
- **Error**: `SdkException<GetAccountVerificationReportsCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 404, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AccountVerificationReportResponse` | `Models/AccountVerificationReportResponse.cs` |
| `GetAccountVerificationReportsCodeError` | `Errors/GetAccountVerificationReportsCodeError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostAccountVerificationRoutes
- **Server group**: `Default21`
- **Signature**: `PostAccountVerificationRoutes(AccountVerificationRoutesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AccountVerificationRoutesResponse`
- **Error**: `SdkException<PostAccountVerificationRoutesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AccountVerificationRoutesRequest` | `Models/AccountVerificationRoutesRequest.cs` |
| `AccountVerificationRoutesResponse` | `Models/AccountVerificationRoutesResponse.cs` |
| `PostAccountVerificationRoutesError` | `Errors/PostAccountVerificationRoutesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

