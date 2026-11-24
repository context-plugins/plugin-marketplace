<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignalsApi — operations

Accessor: `client.signals_api` · Source: `lusha/apis/signals_api.py` · 13 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signals_api.get_company_signal_filter_values

- **Route**: `GET /v3/companies/signals/filters/{filterType}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_signal_filter_values(filter_type: FilterTypeLushaSignalsApiOrStr, *, query: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `filter_type`
- **Params**: `filter_type` — path `filterType` · `query` — query
- **Returns (parsed)**: `FilterValuesResponse`
- **Returns (raw)**: `ApiResult[FilterValuesResponse, GetCompanySignalFilterValuesErrorBody]`
- **Error**: `GetCompanySignalFilterValuesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FilterTypeLushaSignalsApiOrStr` | `lusha/models/enums/filter_type_lusha_signals_api.py` |
| `FilterValuesResponse` | `lusha/models/filter_values_response.py` |
| `GetCompanySignalFilterValuesErrorBody` | `lusha/errors/get_company_signal_filter_values_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_company_signal_filters

- **Route**: `GET /v3/companies/signals/filters`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_signal_filters(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `FilterTypesDiscoveryResponse`
- **Returns (raw)**: `ApiResult[FilterTypesDiscoveryResponse, GetCompanySignalFiltersErrorBody]`
- **Error**: `GetCompanySignalFiltersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FilterTypesDiscoveryResponse` | `lusha/models/filter_types_discovery_response.py` |
| `GetCompanySignalFiltersErrorBody` | `lusha/errors/get_company_signal_filters_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_company_signal_scores

- **Route**: `POST /v3/companies/signal-score`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_signal_scores(body: V3SignalScoreCompaniesRequest | V3SignalScoreCompaniesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3SignalScoreCompaniesResponse`
- **Returns (raw)**: `ApiResult[V3SignalScoreCompaniesResponse, GetCompanySignalScoresErrorBody]`
- **Error**: `GetCompanySignalScoresErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3SignalScoreCompaniesRequest` | `lusha/models/v3_signal_score_companies_request.py` |
| `V3SignalScoreCompaniesRequestDict` | `lusha/models/v3_signal_score_companies_request.py` |
| `V3SignalScoreCompaniesResponse` | `lusha/models/v3_signal_score_companies_response.py` |
| `GetCompanySignalScoresErrorBody` | `lusha/errors/get_company_signal_scores_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_company_signal_types

- **Route**: `GET /v3/companies/signals/types`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_signal_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `CompanySignalTypesResponse`
- **Returns (raw)**: `ApiResult[CompanySignalTypesResponse, GetCompanySignalTypesErrorBody]`
- **Error**: `GetCompanySignalTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanySignalTypesResponse` | `lusha/models/company_signal_types_response.py` |
| `GetCompanySignalTypesErrorBody` | `lusha/errors/get_company_signal_types_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_company_signals

- **Route**: `POST /v3/companies/signals`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_signals(body: V3CompanySignalsRequest | V3CompanySignalsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3CompanySignalsResponse`
- **Returns (raw)**: `ApiResult[V3CompanySignalsResponse, GetCompanySignalsErrorBody]`
- **Error**: `GetCompanySignalsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3CompanySignalsRequest` | `lusha/models/v3_company_signals_request.py` |
| `V3CompanySignalsRequestDict` | `lusha/models/v3_company_signals_request.py` |
| `V3CompanySignalsResponse` | `lusha/models/v3_company_signals_response.py` |
| `GetCompanySignalsErrorBody` | `lusha/errors/get_company_signals_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_company_signals_by_id

- **Route**: `POST /api/signals/companies`
- **Auth**: `api_key_auth`
- **Signature**: `def get_company_signals_by_id(body: CompanySignalsByIdRequest | CompanySignalsByIdRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CompanySignalsByIdResponse`
- **Returns (raw)**: `ApiResult[CompanySignalsByIdResponse, GetCompanySignalsByIdErrorBody]`
- **Error**: `GetCompanySignalsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanySignalsByIdRequest` | `lusha/models/company_signals_by_id_request.py` |
| `CompanySignalsByIdRequestDict` | `lusha/models/company_signals_by_id_request.py` |
| `CompanySignalsByIdResponse` | `lusha/models/company_signals_by_id_response.py` |
| `GetCompanySignalsByIdErrorBody` | `lusha/errors/get_company_signals_by_id_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_contact_signal_scores

- **Route**: `POST /v3/contacts/signal-score`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_signal_scores(body: V3SignalScoreContactsRequest | V3SignalScoreContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3SignalScoreContactsResponse`
- **Returns (raw)**: `ApiResult[V3SignalScoreContactsResponse, GetContactSignalScoresErrorBody]`
- **Error**: `GetContactSignalScoresErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3SignalScoreContactsRequest` | `lusha/models/v3_signal_score_contacts_request.py` |
| `V3SignalScoreContactsRequestDict` | `lusha/models/v3_signal_score_contacts_request.py` |
| `V3SignalScoreContactsResponse` | `lusha/models/v3_signal_score_contacts_response.py` |
| `GetContactSignalScoresErrorBody` | `lusha/errors/get_contact_signal_scores_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_contact_signal_types

- **Route**: `GET /v3/contacts/signals/types`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_signal_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ContactSignalTypesResponse`
- **Returns (raw)**: `ApiResult[ContactSignalTypesResponse, GetContactSignalTypesErrorBody]`
- **Error**: `GetContactSignalTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactSignalTypesResponse` | `lusha/models/contact_signal_types_response.py` |
| `GetContactSignalTypesErrorBody` | `lusha/errors/get_contact_signal_types_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_contact_signals

- **Route**: `POST /v3/contacts/signals`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_signals(body: V3ContactSignalsRequest | V3ContactSignalsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V3ContactSignalsResponse`
- **Returns (raw)**: `ApiResult[V3ContactSignalsResponse, GetContactSignalsErrorBody]`
- **Error**: `GetContactSignalsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V3ContactSignalsRequest` | `lusha/models/v3_contact_signals_request.py` |
| `V3ContactSignalsRequestDict` | `lusha/models/v3_contact_signals_request.py` |
| `V3ContactSignalsResponse` | `lusha/models/v3_contact_signals_response.py` |
| `GetContactSignalsErrorBody` | `lusha/errors/get_contact_signals_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_contact_signals_by_id

- **Route**: `POST /api/signals/contacts`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_signals_by_id(body: ContactSignalsByIdRequest | ContactSignalsByIdRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContactSignalsByIdResponse`
- **Returns (raw)**: `ApiResult[ContactSignalsByIdResponse, GetContactSignalsByIdErrorBody]`
- **Error**: `GetContactSignalsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactSignalsByIdRequest` | `lusha/models/contact_signals_by_id_request.py` |
| `ContactSignalsByIdRequestDict` | `lusha/models/contact_signals_by_id_request.py` |
| `ContactSignalsByIdResponse` | `lusha/models/contact_signals_by_id_response.py` |
| `GetContactSignalsByIdErrorBody` | `lusha/errors/get_contact_signals_by_id_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.get_signal_options

- **Route**: `GET /api/signals/filters/{objectType}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_signal_options(object_type: ObjectTypeOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `object_type`
- **Params**: `object_type` — path `objectType`
- **Returns (parsed)**: `ApiSignalsFiltersResponse`
- **Returns (raw)**: `ApiResult[ApiSignalsFiltersResponse, GetSignalOptionsErrorBody]`
- **Error**: `GetSignalOptionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ObjectTypeOrStr` | `lusha/models/enums/object_type.py` |
| `ApiSignalsFiltersResponse` | `lusha/models/api_signals_filters_response.py` |
| `GetSignalOptionsErrorBody` | `lusha/errors/get_signal_options_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.search_company_signals

- **Route**: `POST /api/signals/companies/search`
- **Auth**: `api_key_auth`
- **Signature**: `def search_company_signals(body: CompanySignalsSearchRequest | CompanySignalsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CompanySignalsByIdResponse`
- **Returns (raw)**: `ApiResult[CompanySignalsByIdResponse, SearchCompanySignalsErrorBody]`
- **Error**: `SearchCompanySignalsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompanySignalsSearchRequest` | `lusha/models/company_signals_search_request.py` |
| `CompanySignalsSearchRequestDict` | `lusha/models/company_signals_search_request.py` |
| `CompanySignalsByIdResponse` | `lusha/models/company_signals_by_id_response.py` |
| `SearchCompanySignalsErrorBody` | `lusha/errors/search_company_signals_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

### client.signals_api.search_contact_signals

- **Route**: `POST /api/signals/contacts/search`
- **Auth**: `api_key_auth`
- **Signature**: `def search_contact_signals(body: ContactSignalsSearchRequest | ContactSignalsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContactSignalsSearchResponse`
- **Returns (raw)**: `ApiResult[ContactSignalsSearchResponse, SearchContactSignalsErrorBody]`
- **Error**: `SearchContactSignalsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactSignalsSearchRequest` | `lusha/models/contact_signals_search_request.py` |
| `ContactSignalsSearchRequestDict` | `lusha/models/contact_signals_search_request.py` |
| `ContactSignalsSearchResponse` | `lusha/models/contact_signals_search_response.py` |
| `SearchContactSignalsErrorBody` | `lusha/errors/search_contact_signals_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

