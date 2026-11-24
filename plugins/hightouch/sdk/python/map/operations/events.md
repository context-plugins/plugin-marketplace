<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `hightouch/apis/events.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.events.create_contract

- **Route**: `POST /events/contracts`
- **Auth**: `bearer_auth`
- **Signature**: `def create_contract(body: EventContractCreate | EventContractCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EventsContractsResponse1`
- **Returns (raw)**: `ApiResult[EventsContractsResponse1, CreateContractErrorBody]`
- **Error**: `CreateContractErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `EventContractCreate` | `hightouch/models/event_contract_create.py` |
| `EventContractCreateDict` | `hightouch/models/event_contract_create.py` |
| `EventsContractsResponse1` | `hightouch/models/unions/events_contracts_response1.py` |
| `CreateContractErrorBody` | `hightouch/errors/create_contract_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.events.create_domain

- **Route**: `POST /events/domains`
- **Auth**: `bearer_auth`
- **Signature**: `def create_domain(body: EventDomainCreate | EventDomainCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EventsDomainsResponse1`
- **Returns (raw)**: `ApiResult[EventsDomainsResponse1, CreateDomainErrorBody]`
- **Error**: `CreateDomainErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `EventDomainCreate` | `hightouch/models/event_domain_create.py` |
| `EventDomainCreateDict` | `hightouch/models/event_domain_create.py` |
| `EventsDomainsResponse1` | `hightouch/models/unions/events_domains_response1.py` |
| `CreateDomainErrorBody` | `hightouch/errors/create_domain_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.events.get_contract

- **Route**: `GET /events/contracts/{contractId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_contract(contract_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contract_id`
- **Params**: `contract_id` — path `contractId`
- **Returns (parsed)**: `EventsContractsResponse1`
- **Returns (raw)**: `ApiResult[EventsContractsResponse1, GetContractErrorBody]`
- **Error**: `GetContractErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `EventsContractsResponse1` | `hightouch/models/unions/events_contracts_response1.py` |
| `GetContractErrorBody` | `hightouch/errors/get_contract_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.events.get_domain

- **Route**: `GET /events/domains/{domainId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_domain(domain_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_id`
- **Params**: `domain_id` — path `domainId`
- **Returns (parsed)**: `EventsDomainsResponse1`
- **Returns (raw)**: `ApiResult[EventsDomainsResponse1, GetDomainErrorBody]`
- **Error**: `GetDomainErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `EventsDomainsResponse1` | `hightouch/models/unions/events_domains_response1.py` |
| `GetDomainErrorBody` | `hightouch/errors/get_domain_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.events.list_contracts

- **Route**: `GET /events/contracts`
- **Auth**: `bearer_auth`
- **Signature**: `def list_contracts(*, name: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `offset` — query · `limit` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `EventsContractsResponse`
- **Returns (raw)**: `ApiResult[EventsContractsResponse, ListContractsErrorBody]`
- **Error**: `ListContractsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByHightouchEventsApiOrStr` | `hightouch/models/enums/order_by_hightouch_events_api.py` |
| `EventsContractsResponse` | `hightouch/models/events_contracts_response.py` |
| `ListContractsErrorBody` | `hightouch/errors/list_contracts_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.events.list_domains

- **Route**: `GET /events/domains`
- **Auth**: `bearer_auth`
- **Signature**: `def list_domains(*, name: str | None = None, source: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `source` — query · `offset` — query · `limit` — query · `order_by` — query `orderBy`
- **Returns (parsed)**: `EventsDomainsResponse`
- **Returns (raw)**: `ApiResult[EventsDomainsResponse, ListDomainsErrorBody]`
- **Error**: `ListDomainsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByHightouchEventsApiOrStr` | `hightouch/models/enums/order_by_hightouch_events_api.py` |
| `EventsDomainsResponse` | `hightouch/models/events_domains_response.py` |
| `ListDomainsErrorBody` | `hightouch/errors/list_domains_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.events.update_contract

- **Route**: `PATCH /events/contracts/{contractId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_contract(contract_id: str, body: EventContractUpdate | EventContractUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contract_id`, `body`
- **Params**: `contract_id` — path `contractId` · `body` — JSON body
- **Returns (parsed)**: `EventsContractsResponse11`
- **Returns (raw)**: `ApiResult[EventsContractsResponse11, UpdateContractErrorBody]`
- **Error**: `UpdateContractErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `EventContractUpdate` | `hightouch/models/event_contract_update.py` |
| `EventContractUpdateDict` | `hightouch/models/event_contract_update.py` |
| `EventsContractsResponse11` | `hightouch/models/unions/events_contracts_response11.py` |
| `UpdateContractErrorBody` | `hightouch/errors/update_contract_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.events.update_domain

- **Route**: `PATCH /events/domains/{domainId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_domain(domain_id: str, body: EventDomainUpdate | EventDomainUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_id`, `body`
- **Params**: `domain_id` — path `domainId` · `body` — JSON body
- **Returns (parsed)**: `EventsDomainsResponse1`
- **Returns (raw)**: `ApiResult[EventsDomainsResponse1, UpdateDomainErrorBody]`
- **Error**: `UpdateDomainErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `EventDomainUpdate` | `hightouch/models/event_domain_update.py` |
| `EventDomainUpdateDict` | `hightouch/models/event_domain_update.py` |
| `EventsDomainsResponse1` | `hightouch/models/unions/events_domains_response1.py` |
| `UpdateDomainErrorBody` | `hightouch/errors/update_domain_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

