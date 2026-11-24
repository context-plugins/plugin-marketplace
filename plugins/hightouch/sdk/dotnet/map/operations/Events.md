<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/Hightouch/Api/Events.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateContract

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateContract(CreateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EventsContractsResponse1`
- **Error**: `ApiException<CreateContractError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateContractRequest` | `src/Hightouch/Requests/Events/CreateContractRequest.cs` |
| `EventContractCreate` | `src/Hightouch/Models/EventContractCreate.cs` |
| `EventsContractsResponse1` | `src/Hightouch/Models/AnyOf/EventsContractsResponse1.cs` |
| `CreateContractError` | `src/Hightouch/Errors/CreateContractError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### CreateDomain

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateDomain(CreateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EventsDomainsResponse1`
- **Error**: `ApiException<CreateDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDomainRequest` | `src/Hightouch/Requests/Events/CreateDomainRequest.cs` |
| `EventDomainCreate` | `src/Hightouch/Models/EventDomainCreate.cs` |
| `EventsDomainsResponse1` | `src/Hightouch/Models/AnyOf/EventsDomainsResponse1.cs` |
| `CreateDomainError` | `src/Hightouch/Errors/CreateDomainError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### GetContract

- **Auth**: `options.BearerAuth`
- **Signature**: `GetContract(GetContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContractId`
- **Returns**: `EventsContractsResponse1`
- **Error**: `ApiException<GetContractError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContractRequest` | `src/Hightouch/Requests/Events/GetContractRequest.cs` |
| `EventsContractsResponse1` | `src/Hightouch/Models/AnyOf/EventsContractsResponse1.cs` |
| `GetContractError` | `src/Hightouch/Errors/GetContractError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### GetDomain

- **Auth**: `options.BearerAuth`
- **Signature**: `GetDomain(GetDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainId`
- **Returns**: `EventsDomainsResponse1`
- **Error**: `ApiException<GetDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDomainRequest` | `src/Hightouch/Requests/Events/GetDomainRequest.cs` |
| `EventsDomainsResponse1` | `src/Hightouch/Models/AnyOf/EventsDomainsResponse1.cs` |
| `GetDomainError` | `src/Hightouch/Errors/GetDomainError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### ListContracts

- **Auth**: `options.BearerAuth`
- **Signature**: `ListContracts(ListContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `offset` ← `Offset`, `limit` ← `Limit`, `orderBy` ← `OrderBy`
- **Returns**: `EventsContractsResponse`
- **Error**: `ApiException<ListContractsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListContractsRequest` | `src/Hightouch/Requests/Events/ListContractsRequest.cs` |
| `OrderByHightouchEventsApi` | `src/Hightouch/Models/Enums/OrderByHightouchEventsApi.cs` |
| `EventsContractsResponse` | `src/Hightouch/Models/EventsContractsResponse.cs` |
| `ListContractsError` | `src/Hightouch/Errors/ListContractsError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### ListDomains

- **Auth**: `options.BearerAuth`
- **Signature**: `ListDomains(ListDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `source` ← `Source`, `offset` ← `Offset`, `limit` ← `Limit`, `orderBy` ← `OrderBy`
- **Returns**: `EventsDomainsResponse`
- **Error**: `ApiException<ListDomainsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDomainsRequest` | `src/Hightouch/Requests/Events/ListDomainsRequest.cs` |
| `OrderByHightouchEventsApi` | `src/Hightouch/Models/Enums/OrderByHightouchEventsApi.cs` |
| `EventsDomainsResponse` | `src/Hightouch/Models/EventsDomainsResponse.cs` |
| `ListDomainsError` | `src/Hightouch/Errors/ListDomainsError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### UpdateContract

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateContract(UpdateContractRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ContractId`, `Body`
- **Returns**: `EventsContractsResponse11`
- **Error**: `ApiException<UpdateContractError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateContractRequest` | `src/Hightouch/Requests/Events/UpdateContractRequest.cs` |
| `EventContractUpdate` | `src/Hightouch/Models/EventContractUpdate.cs` |
| `EventsContractsResponse11` | `src/Hightouch/Models/AnyOf/EventsContractsResponse11.cs` |
| `UpdateContractError` | `src/Hightouch/Errors/UpdateContractError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

### UpdateDomain

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateDomain(UpdateDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DomainId`, `Body`
- **Returns**: `EventsDomainsResponse1`
- **Error**: `ApiException<UpdateDomainError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 403, 404] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDomainRequest` | `src/Hightouch/Requests/Events/UpdateDomainRequest.cs` |
| `EventDomainUpdate` | `src/Hightouch/Models/EventDomainUpdate.cs` |
| `EventsDomainsResponse1` | `src/Hightouch/Models/AnyOf/EventsDomainsResponse1.cs` |
| `UpdateDomainError` | `src/Hightouch/Errors/UpdateDomainError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |
| `InternalServerError` | `src/Hightouch/Models/Enums/InternalServerError.cs` |

