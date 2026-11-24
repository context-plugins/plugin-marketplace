<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contracts — operations

Accessor: `client.Contracts` · Source: `src/DoiT/Api/Contracts.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ActivateContract

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ActivateContract(ActivateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContractId`
- **Returns**: `ContractLifecycleResponse`
- **Error**: `ApiException<ActivateContractError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ActivateContractRequest` | `src/DoiT/Requests/Contracts/ActivateContractRequest.cs` |
| `ContractLifecycleResponse` | `src/DoiT/Models/ContractLifecycleResponse.cs` |
| `ActivateContractError` | `src/DoiT/Errors/ActivateContractError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CancelContract

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CancelContract(CancelContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContractId`
- **Returns**: `ContractLifecycleResponse`
- **Error**: `ApiException<CancelContractError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelContractRequest` | `src/DoiT/Requests/Contracts/CancelContractRequest.cs` |
| `CustomersContractsCancelRequest` | `src/DoiT/Models/CustomersContractsCancelRequest.cs` |
| `ContractLifecycleResponse` | `src/DoiT/Models/ContractLifecycleResponse.cs` |
| `CancelContractError` | `src/DoiT/Errors/CancelContractError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CreateContract

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateContract(CreateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `Body`
- **Returns**: `CreateContractResponse`
- **Error**: `ApiException<CreateContractError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContractRequest` | `src/DoiT/Requests/Contracts/CreateContractRequest.cs` |
| `MtsContractCreateInput` | `src/DoiT/Models/MtsContractCreateInput.cs` |
| `CreateContractResponse` | `src/DoiT/Models/CreateContractResponse.cs` |
| `CreateContractError` | `src/DoiT/Errors/CreateContractError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetContract

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetContract(GetContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContractId`
- **Returns**: `MtsContractDetailResponse`
- **Error**: `ApiException<GetContractError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContractRequest` | `src/DoiT/Requests/Contracts/GetContractRequest.cs` |
| `MtsContractDetailResponse` | `src/DoiT/Models/MtsContractDetailResponse.cs` |
| `GetContractError` | `src/DoiT/Errors/GetContractError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListContracts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListContracts(ListContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`
- **Returns**: `IReadOnlyList<MtsContractResponse>`
- **Error**: `ApiException<ListContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContractsRequest` | `src/DoiT/Requests/Contracts/ListContractsRequest.cs` |
| `MtsContractResponse` | `src/DoiT/Models/MtsContractResponse.cs` |
| `ListContractsError` | `src/DoiT/Errors/ListContractsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateContract

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateContract(UpdateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomerId`, `ContractId`, `Body`
- **Returns**: `CreateContractResponse`
- **Error**: `ApiException<UpdateContractError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContractRequest` | `src/DoiT/Requests/Contracts/UpdateContractRequest.cs` |
| `MtsContractInput` | `src/DoiT/Models/MtsContractInput.cs` |
| `CreateContractResponse` | `src/DoiT/Models/CreateContractResponse.cs` |
| `UpdateContractError` | `src/DoiT/Errors/UpdateContractError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

