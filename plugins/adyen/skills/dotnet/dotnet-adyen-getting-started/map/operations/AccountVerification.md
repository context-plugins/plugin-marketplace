# AccountVerification — operations

Accessor: `client.AccountVerification` · Source: `Api/AccountVerification.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountVerificationReportsCode
- **HTTP**: `GET /accountVerification/reports/{code}` (Default (balanceplatform-api-test))
- **Notes**: Get the account verification report using a unique code from a successful open banking connection. This report provides identity verification and bank account details.
- **Signature**: `GetAccountVerificationReportsCode(string code, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountVerificationReportResponse`
- **Error**: `SdkException<GetAccountVerificationReportsCodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountVerificationReports400Error1(out AccountVerificationReports400Error1)` [400] · `TryGetAccountVerificationReports401Error1(out AccountVerificationReports401Error1)` [401] · `TryGetAccountVerificationReports404Error1(out AccountVerificationReports404Error1)` [404] · `TryGetAccountVerificationReports422Error1(out AccountVerificationReports422Error1)` [422] · `TryGetAccountVerificationReports429Error1(out AccountVerificationReports429Error1)` [429] · `TryGetAccountVerificationReports500Error1(out AccountVerificationReports500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAccountVerificationRoutes
- **HTTP**: `POST /accountVerification/routes` (Default (balanceplatform-api-test))
- **Notes**: Create a list of routes for verifying bank accounts of third-party individuals. Successful connections generate a unique code used for requesting bank reports and verifying identity.
- **Signature**: `PostAccountVerificationRoutes(AccountVerificationRoutesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AccountVerificationRoutesResponse`
- **Error**: `SdkException<PostAccountVerificationRoutesError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountVerificationRoutes400Error1(out AccountVerificationRoutes400Error1)` [400] · `TryGetAccountVerificationRoutes401Error1(out AccountVerificationRoutes401Error1)` [401] · `TryGetAccountVerificationRoutes422Error1(out AccountVerificationRoutes422Error1)` [422] · `TryGetAccountVerificationRoutes429Error1(out AccountVerificationRoutes429Error1)` [429] · `TryGetAccountVerificationRoutes500Error1(out AccountVerificationRoutes500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
