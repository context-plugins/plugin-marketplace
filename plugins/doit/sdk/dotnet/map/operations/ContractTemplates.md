<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContractTemplates — operations

Accessor: `client.ContractTemplates` · Source: `src/DoiT/Api/ContractTemplates.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveContractTemplate

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ArchiveContractTemplate(ArchiveContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TemplateId`
- **Returns**: `ContractTemplateResponse`
- **Error**: `ApiException<ArchiveContractTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveContractTemplateRequest` | `src/DoiT/Requests/ContractTemplates/ArchiveContractTemplateRequest.cs` |
| `ContractTemplateResponse` | `src/DoiT/Models/ContractTemplateResponse.cs` |
| `ArchiveContractTemplateError` | `src/DoiT/Errors/ArchiveContractTemplateError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### AssignContractTemplate

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AssignContractTemplate(AssignContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TemplateId`, `Body`
- **Returns**: `AssignContractTemplateResponse`
- **Error**: `ApiException<AssignContractTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssignContractTemplateRequest` | `src/DoiT/Requests/ContractTemplates/AssignContractTemplateRequest.cs` |
| `AssignContractTemplateInput` | `src/DoiT/Models/AssignContractTemplateInput.cs` |
| `AssignContractTemplateResponse` | `src/DoiT/Models/AssignContractTemplateResponse.cs` |
| `AssignContractTemplateError` | `src/DoiT/Errors/AssignContractTemplateError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CreateContractTemplate

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateContractTemplate(CreateContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ContractTemplateResponse`
- **Error**: `ApiException<CreateContractTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContractTemplateRequest` | `src/DoiT/Requests/ContractTemplates/CreateContractTemplateRequest.cs` |
| `ContractTemplateInput` | `src/DoiT/Models/ContractTemplateInput.cs` |
| `ContractTemplateResponse` | `src/DoiT/Models/ContractTemplateResponse.cs` |
| `CreateContractTemplateError` | `src/DoiT/Errors/CreateContractTemplateError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetContractTemplate

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetContractTemplate(GetContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TemplateId`
- **Returns**: `ContractTemplateResponse`
- **Error**: `ApiException<GetContractTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContractTemplateRequest` | `src/DoiT/Requests/ContractTemplates/GetContractTemplateRequest.cs` |
| `ContractTemplateResponse` | `src/DoiT/Models/ContractTemplateResponse.cs` |
| `GetContractTemplateError` | `src/DoiT/Errors/GetContractTemplateError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListContractTemplates

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListContractTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ContractTemplateResponse>`
- **Error**: `ApiException<ListContractTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContractTemplateResponse` | `src/DoiT/Models/ContractTemplateResponse.cs` |
| `ListContractTemplatesError` | `src/DoiT/Errors/ListContractTemplatesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateContractTemplate

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateContractTemplate(UpdateContractTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TemplateId`, `Body`
- **Returns**: `ContractTemplateResponse`
- **Error**: `ApiException<UpdateContractTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContractTemplateRequest` | `src/DoiT/Requests/ContractTemplates/UpdateContractTemplateRequest.cs` |
| `ContractTemplateInput` | `src/DoiT/Models/ContractTemplateInput.cs` |
| `ContractTemplateResponse` | `src/DoiT/Models/ContractTemplateResponse.cs` |
| `UpdateContractTemplateError` | `src/DoiT/Errors/UpdateContractTemplateError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

