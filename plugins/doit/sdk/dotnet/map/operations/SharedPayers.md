<!-- Generated file — do not edit; regenerated with the SDK. -->

# SharedPayers — operations

Accessor: `client.SharedPayers` · Source: `src/DoiT/Api/SharedPayers.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListSharedPayerAccountMappings

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListSharedPayerAccountMappings(ListSharedPayerAccountMappingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Query params (wire ← C#)**: `managementAccount` ← `ManagementAccount`
- **Returns**: `SharedPayerAccountMappingList`
- **Error**: `ApiException<ListSharedPayerAccountMappingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSharedPayerAccountMappingsRequest` | `src/DoiT/Requests/SharedPayers/ListSharedPayerAccountMappingsRequest.cs` |
| `SharedPayerAccountMappingList` | `src/DoiT/Models/SharedPayerAccountMappingList.cs` |
| `ListSharedPayerAccountMappingsError` | `src/DoiT/Errors/ListSharedPayerAccountMappingsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListSharedPayerManagementAccounts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListSharedPayerManagementAccounts(ListSharedPayerManagementAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `SharedPayerManagementAccountList`
- **Error**: `ApiException<ListSharedPayerManagementAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSharedPayerManagementAccountsRequest` | `src/DoiT/Requests/SharedPayers/ListSharedPayerManagementAccountsRequest.cs` |
| `SharedPayerManagementAccountList` | `src/DoiT/Models/SharedPayerManagementAccountList.cs` |
| `ListSharedPayerManagementAccountsError` | `src/DoiT/Errors/ListSharedPayerManagementAccountsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListSharedPayers

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListSharedPayers(ListSharedPayersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `SharedPayerList`
- **Error**: `ApiException<ListSharedPayersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSharedPayersRequest` | `src/DoiT/Requests/SharedPayers/ListSharedPayersRequest.cs` |
| `SharedPayerList` | `src/DoiT/Models/SharedPayerList.cs` |
| `ListSharedPayersError` | `src/DoiT/Errors/ListSharedPayersError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ReassignSharedPayerAccount

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ReassignSharedPayerAccount(ReassignSharedPayerAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `AssetId`, `Body`
- **Returns**: `SharedPayerAccountReassignResult`
- **Error**: `ApiException<ReassignSharedPayerAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReassignSharedPayerAccountRequest` | `src/DoiT/Requests/SharedPayers/ReassignSharedPayerAccountRequest.cs` |
| `SharedPayerAccountReassignRequest` | `src/DoiT/Models/SharedPayerAccountReassignRequest.cs` |
| `SharedPayerAccountReassignResult` | `src/DoiT/Models/SharedPayerAccountReassignResult.cs` |
| `ReassignSharedPayerAccountError` | `src/DoiT/Errors/ReassignSharedPayerAccountError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

