<!-- Generated file — do not edit; regenerated with the SDK. -->

# Domains — operations

Accessor: `client.Domains` · Source: `src/CodeQr/Api/Domains.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDomain

- **Auth**: `options.Token`
- **Signature**: `CreateDomain(CreateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DomainSchema`
- **Error**: `ApiException<CreateDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDomainRequest` | `src/CodeQr/Requests/Domains/CreateDomainRequest.cs` |
| `DomainsRequest` | `src/CodeQr/Models/DomainsRequest.cs` |
| `DomainSchema` | `src/CodeQr/Models/DomainSchema.cs` |
| `CreateDomainError` | `src/CodeQr/Errors/CreateDomainError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### DeleteDomain

- **Auth**: `options.Token`
- **Signature**: `DeleteDomain(DeleteDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`
- **Returns**: `DomainsResponse`
- **Error**: `ApiException<DeleteDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDomainRequest` | `src/CodeQr/Requests/Domains/DeleteDomainRequest.cs` |
| `DomainsResponse` | `src/CodeQr/Models/DomainsResponse.cs` |
| `DeleteDomainError` | `src/CodeQr/Errors/DeleteDomainError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### ListDomains

- **Auth**: `options.Token`
- **Signature**: `ListDomains(ListDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `archived` ← `Archived`, `search` ← `Search`, `page` ← `Page`, `pageSize` ← `PageSize`
- **Returns**: `IReadOnlyList<DomainSchema>`
- **Error**: `ApiException<ListDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDomainsRequest` | `src/CodeQr/Requests/Domains/ListDomainsRequest.cs` |
| `DomainSchema` | `src/CodeQr/Models/DomainSchema.cs` |
| `ListDomainsError` | `src/CodeQr/Errors/ListDomainsError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

### UpdateDomain

- **Auth**: `options.Token`
- **Signature**: `UpdateDomain(UpdateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`
- **Returns**: `DomainSchema`
- **Error**: `ApiException<UpdateDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetM4001([NotNullWhen(true)] out M4001? value)` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDomainRequest` | `src/CodeQr/Requests/Domains/UpdateDomainRequest.cs` |
| `DomainsRequest1` | `src/CodeQr/Models/DomainsRequest1.cs` |
| `DomainSchema` | `src/CodeQr/Models/DomainSchema.cs` |
| `UpdateDomainError` | `src/CodeQr/Errors/UpdateDomainError.cs` |
| `M4001` | `src/CodeQr/Models/M4001.cs` |

