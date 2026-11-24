<!-- Generated file — do not edit; regenerated with the SDK. -->

# Households — operations

Accessor: `client.households` · Source: `givebutter/apis/households.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.households.households_destroy

- **Route**: `DELETE /v1/households/{household}`
- **Auth**: `http`
- **Signature**: `def households_destroy(household: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `household`
- **Params**: `household` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, HouseholdsDestroyErrorBody]`
- **Error**: `HouseholdsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HouseholdsDestroyErrorBody` | `givebutter/errors/households_destroy_error.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.households.households_index

- **Route**: `GET /v1/households`
- **Auth**: `http`
- **Signature**: `def households_index(*, head_contact_id: str | None = None, contacts: str | None = None, query: str | None = None, sort_by: str | None = None, sort_by_desc: str | None = None, page: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `head_contact_id` — query `headContactId` · `contacts` — query · `query` — query · `sort_by` — query `sortBy` · `sort_by_desc` — query `sortByDesc` · `page` — query
- **Returns (parsed)**: `list[HouseholdResource]`
- **Returns (raw)**: `ApiResult[list[HouseholdResource], HouseholdsIndexErrorBody]`
- **Error**: `HouseholdsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HouseholdResource` | `givebutter/models/household_resource.py` |
| `HouseholdsIndexErrorBody` | `givebutter/errors/households_index_error.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.households.households_show

- **Route**: `GET /v1/households/{household}`
- **Auth**: `http`
- **Signature**: `def households_show(household: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `household`
- **Params**: `household` — path
- **Returns (parsed)**: `AppHttpResourcesApiHouseholdResource`
- **Returns (raw)**: `ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsShowErrorBody]`
- **Error**: `HouseholdsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppHttpResourcesApiHouseholdResource` | `givebutter/models/app_http_resources_api_household_resource.py` |
| `HouseholdsShowErrorBody` | `givebutter/errors/households_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.households.households_store

- **Route**: `POST /v1/households`
- **Auth**: `http`
- **Signature**: `def households_store(body: HouseholdStoreRequest | HouseholdStoreRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AppHttpResourcesApiHouseholdResource`
- **Returns (raw)**: `ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsStoreErrorBody]`
- **Error**: `HouseholdsStoreErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HouseholdStoreRequest` | `givebutter/models/household_store_request.py` |
| `HouseholdStoreRequestDict` | `givebutter/models/household_store_request.py` |
| `AppHttpResourcesApiHouseholdResource` | `givebutter/models/app_http_resources_api_household_resource.py` |
| `HouseholdsStoreErrorBody` | `givebutter/errors/households_store_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.households.households_update

- **Route**: `PUT /v1/households/{household}`
- **Auth**: `http`
- **Signature**: `def households_update(household: int, *, body: HouseholdUpdateRequest | HouseholdUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `household`
- **Params**: `household` — path · `body` — JSON body
- **Returns (parsed)**: `AppHttpResourcesApiHouseholdResource`
- **Returns (raw)**: `ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsUpdateErrorBody]`
- **Error**: `HouseholdsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HouseholdUpdateRequest` | `givebutter/models/household_update_request.py` |
| `HouseholdUpdateRequestDict` | `givebutter/models/household_update_request.py` |
| `AppHttpResourcesApiHouseholdResource` | `givebutter/models/app_http_resources_api_household_resource.py` |
| `HouseholdsUpdateErrorBody` | `givebutter/errors/households_update_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

