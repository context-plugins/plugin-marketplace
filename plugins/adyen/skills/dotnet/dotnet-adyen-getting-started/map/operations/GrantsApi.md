<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantsApi — operations

Accessor: `client.GrantsApi` · Source: `Api/GrantsApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGrants2
- **Server group**: `Default15`
- **Signature**: `GetGrants2(string counterpartyAccountHolderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `counterpartyAccountHolderId` ← `counterpartyAccountHolderId`
- **Returns**: `Grants`
- **Error**: `SdkException<GetGrants2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Grants` | `Models/Grants.cs` |
| `GetGrants2Error` | `Errors/GetGrants2Error.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetGrantsGrantId
- **Server group**: `Default15`
- **Signature**: `GetGrantsGrantId(string grantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Grant`
- **Error**: `SdkException<GetGrantsGrantIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Grant` | `Models/Grant.cs` |
| `GetGrantsGrantIdError` | `Errors/GetGrantsGrantIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetGrantsGrantIdDisbursements
- **Server group**: `Default15`
- **Signature**: `GetGrantsGrantIdDisbursements(string grantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Disbursements`
- **Error**: `SdkException<GetGrantsGrantIdDisbursementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Disbursements` | `Models/Disbursements.cs` |
| `GetGrantsGrantIdDisbursementsError` | `Errors/GetGrantsGrantIdDisbursementsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetGrantsGrantIdDisbursementsDisbursementId
- **Server group**: `Default15`
- **Signature**: `GetGrantsGrantIdDisbursementsDisbursementId(string grantId, string disbursementId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Disbursement`
- **Error**: `SdkException<GetGrantsGrantIdDisbursementsDisbursementIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Disbursement` | `Models/Disbursement.cs` |
| `GetGrantsGrantIdDisbursementsDisbursementIdError` | `Errors/GetGrantsGrantIdDisbursementsDisbursementIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchGrantsGrantIdDisbursementsDisbursementId
- **Server group**: `Default15`
- **Signature**: `PatchGrantsGrantIdDisbursementsDisbursementId(string grantId, string disbursementId, DisbursementInfoUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Disbursement`
- **Error**: `SdkException<PatchGrantsGrantIdDisbursementsDisbursementIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisbursementInfoUpdate` | `Models/DisbursementInfoUpdate.cs` |
| `Disbursement` | `Models/Disbursement.cs` |
| `PatchGrantsGrantIdDisbursementsDisbursementIdError` | `Errors/PatchGrantsGrantIdDisbursementsDisbursementIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostGrants2
- **Server group**: `Default15`
- **Signature**: `PostGrants2(CapitalGrantInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Grant`
- **Error**: `SdkException<PostGrants2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CapitalGrantInfo` | `Models/CapitalGrantInfo.cs` |
| `Grant` | `Models/Grant.cs` |
| `PostGrants2Error` | `Errors/PostGrants2Error.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

