# AccountVerification — operations

Accessor: `client.AccountVerification` · Source: `Api/AccountVerification.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountVerificationReportsCode
- **HTTP**: `GET /accountVerification/reports/{code}` (Default21 (obgateway-test))
- **Notes**: Get the account verification report using a unique code from a successful open banking connection. This report provides identity verification and bank account details.
- **Signature**: `GetAccountVerificationReportsCode(string code, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountVerificationReportResponse`
- **Error**: `SdkException<GetAccountVerificationReportsCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 404, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAccountVerificationRoutes
- **HTTP**: `POST /accountVerification/routes` (Default21 (obgateway-test))
- **Notes**: Create a list of routes for verifying bank accounts of third-party individuals. Successful connections generate a unique code used for requesting bank reports and verifying identity.
- **Signature**: `PostAccountVerificationRoutes(AccountVerificationRoutesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountVerificationRoutesResponse`
- **Error**: `SdkException<PostAccountVerificationRoutesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 422, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
