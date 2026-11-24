<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillingTransfer — operations

Accessor: `client.BillingTransfer` · Source: `src/DoiT/Api/BillingTransfer.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateBillingTransferEndCustomerMappings

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateBillingTransferEndCustomerMappings(CreateBillingTransferEndCustomerMappingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EndCustomerMappingBatchResult`
- **Error**: `ApiException<CreateBillingTransferEndCustomerMappingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetBillingTransferProblemDetails([NotNullWhen(true)] out BillingTransferProblemDetails? value)` [403, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBillingTransferEndCustomerMappingsRequest` | `src/DoiT/Requests/BillingTransfer/CreateBillingTransferEndCustomerMappingsRequest.cs` |
| `EndCustomerMappingBatchCreate` | `src/DoiT/Models/EndCustomerMappingBatchCreate.cs` |
| `EndCustomerMappingBatchResult` | `src/DoiT/Models/EndCustomerMappingBatchResult.cs` |
| `CreateBillingTransferEndCustomerMappingsError` | `src/DoiT/Errors/CreateBillingTransferEndCustomerMappingsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `BillingTransferProblemDetails` | `src/DoiT/Models/BillingTransferProblemDetails.cs` |

### CreateBillingTransferResellerHandshakes

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateBillingTransferResellerHandshakes(CreateBillingTransferResellerHandshakesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdempotencyKey`, `Body`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `ResellerHandshakeBatchResult`
- **Error**: `ApiException<CreateBillingTransferResellerHandshakesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetBillingTransferProblemDetails([NotNullWhen(true)] out BillingTransferProblemDetails? value)` [403, 422, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBillingTransferResellerHandshakesRequest` | `src/DoiT/Requests/BillingTransfer/CreateBillingTransferResellerHandshakesRequest.cs` |
| `ResellerHandshakeBatchCreate` | `src/DoiT/Models/ResellerHandshakeBatchCreate.cs` |
| `ResellerHandshakeBatchResult` | `src/DoiT/Models/ResellerHandshakeBatchResult.cs` |
| `CreateBillingTransferResellerHandshakesError` | `src/DoiT/Errors/CreateBillingTransferResellerHandshakesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `BillingTransferProblemDetails` | `src/DoiT/Models/BillingTransferProblemDetails.cs` |

### GetBillingTransferProgramManagementAccountsStatus

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetBillingTransferProgramManagementAccountsStatus(GetBillingTransferProgramManagementAccountsStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ProgramManagementAccountsStatusResponse`
- **Error**: `ApiException<GetBillingTransferProgramManagementAccountsStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBillingTransferProgramManagementAccountsStatusRequest` | `src/DoiT/Requests/BillingTransfer/GetBillingTransferProgramManagementAccountsStatusRequest.cs` |
| `ProgramManagementAccountsStatusResponse` | `src/DoiT/Models/ProgramManagementAccountsStatusResponse.cs` |
| `GetBillingTransferProgramManagementAccountsStatusError` | `src/DoiT/Errors/GetBillingTransferProgramManagementAccountsStatusError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListBillingTransferEndCustomers

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListBillingTransferEndCustomers(ListBillingTransferEndCustomersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DpmaId`, `ResellerPmaAccountId`
- **Query params (wire ← C#)**: `dpmaId` ← `DpmaId`, `resellerPmaAccountId` ← `ResellerPmaAccountId`, `includeRevoked` ← `IncludeRevoked`
- **Returns**: `ListEndCustomersResponse`
- **Error**: `ApiException<ListBillingTransferEndCustomersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetBillingTransferProblemDetails([NotNullWhen(true)] out BillingTransferProblemDetails? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillingTransferEndCustomersRequest` | `src/DoiT/Requests/BillingTransfer/ListBillingTransferEndCustomersRequest.cs` |
| `ListEndCustomersResponse` | `src/DoiT/Models/ListEndCustomersResponse.cs` |
| `ListBillingTransferEndCustomersError` | `src/DoiT/Errors/ListBillingTransferEndCustomersError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `BillingTransferProblemDetails` | `src/DoiT/Models/BillingTransferProblemDetails.cs` |

### ListBillingTransferEndCustomersByReseller

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListBillingTransferEndCustomersByReseller(ListBillingTransferEndCustomersByResellerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResellerPmaAccountId`
- **Query params (wire ← C#)**: `includeRevoked` ← `IncludeRevoked`
- **Returns**: `ListEndCustomersResponse`
- **Error**: `ApiException<ListBillingTransferEndCustomersByResellerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetBillingTransferProblemDetails([NotNullWhen(true)] out BillingTransferProblemDetails? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillingTransferEndCustomersByResellerRequest` | `src/DoiT/Requests/BillingTransfer/ListBillingTransferEndCustomersByResellerRequest.cs` |
| `ListEndCustomersResponse` | `src/DoiT/Models/ListEndCustomersResponse.cs` |
| `ListBillingTransferEndCustomersByResellerError` | `src/DoiT/Errors/ListBillingTransferEndCustomersByResellerError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `BillingTransferProblemDetails` | `src/DoiT/Models/BillingTransferProblemDetails.cs` |

### ListBillingTransferProgramManagementAccounts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListBillingTransferProgramManagementAccounts(ListBillingTransferProgramManagementAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`
- **Returns**: `ProgramManagementAccountList`
- **Error**: `ApiException<ListBillingTransferProgramManagementAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillingTransferProgramManagementAccountsRequest` | `src/DoiT/Requests/BillingTransfer/ListBillingTransferProgramManagementAccountsRequest.cs` |
| `ProgramManagementAccountList` | `src/DoiT/Models/ProgramManagementAccountList.cs` |
| `ListBillingTransferProgramManagementAccountsError` | `src/DoiT/Errors/ListBillingTransferProgramManagementAccountsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListBillingTransferResellerAccounts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListBillingTransferResellerAccounts(ListBillingTransferResellerAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListResellerAccountsResponse`
- **Error**: `ApiException<ListBillingTransferResellerAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetBillingTransferProblemDetails([NotNullWhen(true)] out BillingTransferProblemDetails? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillingTransferResellerAccountsRequest` | `src/DoiT/Requests/BillingTransfer/ListBillingTransferResellerAccountsRequest.cs` |
| `ListResellerAccountsResponse` | `src/DoiT/Models/ListResellerAccountsResponse.cs` |
| `ListBillingTransferResellerAccountsError` | `src/DoiT/Errors/ListBillingTransferResellerAccountsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `BillingTransferProblemDetails` | `src/DoiT/Models/BillingTransferProblemDetails.cs` |

### ListBillingTransferResellerAccountsWithTenants

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListBillingTransferResellerAccountsWithTenants(ListBillingTransferResellerAccountsWithTenantsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `includeRevoked` ← `IncludeRevoked`
- **Returns**: `ListResellerAccountsWithTenantsResponse`
- **Error**: `ApiException<ListBillingTransferResellerAccountsWithTenantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetBillingTransferProblemDetails([NotNullWhen(true)] out BillingTransferProblemDetails? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListBillingTransferResellerAccountsWithTenantsRequest` | `src/DoiT/Requests/BillingTransfer/ListBillingTransferResellerAccountsWithTenantsRequest.cs` |
| `ListResellerAccountsWithTenantsResponse` | `src/DoiT/Models/ListResellerAccountsWithTenantsResponse.cs` |
| `ListBillingTransferResellerAccountsWithTenantsError` | `src/DoiT/Errors/ListBillingTransferResellerAccountsWithTenantsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |
| `BillingTransferProblemDetails` | `src/DoiT/Models/BillingTransferProblemDetails.cs` |

