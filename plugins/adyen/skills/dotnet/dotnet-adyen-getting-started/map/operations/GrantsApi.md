# GrantsApi — operations

Accessor: `client.GrantsApi` · Source: `Api/GrantsApi.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetGrantsGrantId
- **HTTP**: `GET /grants/{grantId}` (Default15 (balanceplatform-api-test))
- **Notes**: Returns the details of the specified grant.
- **Signature**: `GetGrantsGrantId(string grantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Grant`
- **Error**: `SdkException<GetGrantsGrantIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantsGrantIdDisbursements
- **HTTP**: `GET /grants/{grantId}/disbursements` (Default15 (balanceplatform-api-test))
- **Notes**: Returns the disbursements of a specified grant.
- **Signature**: `GetGrantsGrantIdDisbursements(string grantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Disbursements`
- **Error**: `SdkException<GetGrantsGrantIdDisbursementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantsGrantIdDisbursementsDisbursementId
- **HTTP**: `GET /grants/{grantId}/disbursements/{disbursementId}` (Default15 (balanceplatform-api-test))
- **Notes**: Returns the details of a disbursement specified in the path.
- **Signature**: `GetGrantsGrantIdDisbursementsDisbursementId(string grantId, string disbursementId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Disbursement`
- **Error**: `SdkException<GetGrantsGrantIdDisbursementsDisbursementIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrants2
- **HTTP**: `GET /grants` (Default15 (balanceplatform-api-test))
- **Notes**: Returns a list of all the grants of a specific account holder.
- **Signature**: `GetGrants2(string counterpartyAccountHolderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `counterpartyAccountHolderId` ← `counterpartyAccountHolderId`
- **Returns**: `Grants`
- **Error**: `SdkException<GetGrants2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchGrantsGrantIdDisbursementsDisbursementId
- **HTTP**: `PATCH /grants/{grantId}/disbursements/{disbursementId}` (Default15 (balanceplatform-api-test))
- **Notes**: Update the percentage of your user's net income that is deducted for repaying the grant.
- **Signature**: `PatchGrantsGrantIdDisbursementsDisbursementId(string grantId, string disbursementId, DisbursementInfoUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Disbursement`
- **Error**: `SdkException<PatchGrantsGrantIdDisbursementsDisbursementIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGrants2
- **HTTP**: `POST /grants` (Default15 (balanceplatform-api-test))
- **Notes**: Make a request for a grant on behalf of an account holder.
- **Signature**: `PostGrants2(CapitalGrantInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Grant`
- **Error**: `SdkException<PostGrants2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
