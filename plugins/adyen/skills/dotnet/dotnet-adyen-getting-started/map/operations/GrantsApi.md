# GrantsApi — operations

Accessor: `client.GrantsApi` · Source: `Api/GrantsApi.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetGrants
- **HTTP**: `GET /grants` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of all the grants of a specific account holder.
- **Signature**: `GetGrants(string counterpartyAccountHolderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `counterpartyAccountHolderId` ← `counterpartyAccountHolderId`
- **Returns**: `Grants`
- **Error**: `SdkException<GetGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGrants404Error1(out Grants404Error1)` [404] · `TryGetGrants422Error1(out Grants422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantsGrantId
- **HTTP**: `GET /grants/{grantId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the specified grant.
- **Signature**: `GetGrantsGrantId(string grantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Grant`
- **Error**: `SdkException<GetGrantsGrantIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetGrants404Error1(out Grants404Error1)` [404] · `TryGetGrants422Error1(out Grants422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantsGrantIdDisbursements
- **HTTP**: `GET /grants/{grantId}/disbursements` (Default (balanceplatform-api-test))
- **Notes**: Returns the disbursements of a specified grant.
- **Signature**: `GetGrantsGrantIdDisbursements(string grantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Disbursements`
- **Error**: `SdkException<GetGrantsGrantIdDisbursementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGrantsDisbursements404Error1(out GrantsDisbursements404Error1)` [404] · `TryGetGrantsDisbursements422Error1(out GrantsDisbursements422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGrantsGrantIdDisbursementsDisbursementId
- **HTTP**: `GET /grants/{grantId}/disbursements/{disbursementId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of a disbursement specified in the path.
- **Signature**: `GetGrantsGrantIdDisbursementsDisbursementId(string grantId, string disbursementId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Disbursement`
- **Error**: `SdkException<GetGrantsGrantIdDisbursementsDisbursementIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetGrantsDisbursements404Error1(out GrantsDisbursements404Error1)` [404] · `TryGetGrantsDisbursements422Error1(out GrantsDisbursements422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchGrantsGrantIdDisbursementsDisbursementId
- **HTTP**: `PATCH /grants/{grantId}/disbursements/{disbursementId}` (Default (balanceplatform-api-test))
- **Notes**: Update the percentage of your user's net income that is deducted for repaying the grant.
- **Signature**: `PatchGrantsGrantIdDisbursementsDisbursementId(string grantId, string disbursementId, DisbursementInfoUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Disbursement`
- **Error**: `SdkException<PatchGrantsGrantIdDisbursementsDisbursementIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetGrantsDisbursements404Error1(out GrantsDisbursements404Error1)` [404] · `TryGetGrantsDisbursements422Error1(out GrantsDisbursements422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostGrants
- **HTTP**: `POST /grants` (Default (balanceplatform-api-test))
- **Notes**: Make a request for a grant on behalf of an account holder.
- **Signature**: `PostGrants(GrantInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Grant`
- **Error**: `SdkException<PostGrantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGrants422Error1(out Grants422Error1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
