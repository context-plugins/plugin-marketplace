<!-- Generated file — do not edit; regenerated with the SDK. -->

# GrantAccounts — operations

Accessor: `client.GrantAccounts` · Source: `Api/GrantAccounts.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGrantAccountsId
- **Server group**: `Default13`
- **Signature**: `GetGrantAccountsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CapitalGrantAccount`
- **Error**: `SdkException<GetGrantAccountsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CapitalGrantAccount` | `Models/CapitalGrantAccount.cs` |
| `GetGrantAccountsIdError` | `Errors/GetGrantAccountsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetGrantAccountsId1
- **Server group**: `Default15`
- **Signature**: `GetGrantAccountsId1(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GrantAccount`
- **Error**: `SdkException<GetGrantAccountsId1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GrantAccount` | `Models/GrantAccount.cs` |
| `GetGrantAccountsId1Error` | `Errors/GetGrantAccountsId1Error.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

