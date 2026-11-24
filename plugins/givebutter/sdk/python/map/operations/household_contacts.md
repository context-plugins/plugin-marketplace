<!-- Generated file — do not edit; regenerated with the SDK. -->

# HouseholdContacts — operations

Accessor: `client.household_contacts` · Source: `givebutter/apis/household_contacts.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.household_contacts.households_contacts_destroy

- **Route**: `DELETE /v1/households/{household}/contacts/{contact}`
- **Auth**: `http`
- **Signature**: `def households_contacts_destroy(household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `household`, `contact`
- **Params**: `household` — path · `contact` — path
- **Returns (parsed)**: `AppHttpResourcesApiHouseholdResource`
- **Returns (raw)**: `ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsContactsDestroyErrorBody]`
- **Error**: `HouseholdsContactsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppHttpResourcesApiHouseholdResource` | `givebutter/models/app_http_resources_api_household_resource.py` |
| `HouseholdsContactsDestroyErrorBody` | `givebutter/errors/households_contacts_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.household_contacts.households_contacts_index

- **Route**: `GET /v1/households/{household}/contacts`
- **Auth**: `http`
- **Signature**: `def households_contacts_index(household: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `household`
- **Params**: `household` — path
- **Returns (parsed)**: `V1HouseholdsContactsResponse`
- **Returns (raw)**: `ApiResult[V1HouseholdsContactsResponse, HouseholdsContactsIndexErrorBody]`
- **Error**: `HouseholdsContactsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1HouseholdsContactsResponse` | `givebutter/models/v1_households_contacts_response.py` |
| `HouseholdsContactsIndexErrorBody` | `givebutter/errors/households_contacts_index_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.household_contacts.households_contacts_show

- **Route**: `GET /v1/households/{household}/contacts/{contact}`
- **Auth**: `http`
- **Signature**: `def households_contacts_show(household: int, contact: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `household`, `contact`
- **Params**: `household` — path · `contact` — path
- **Returns (parsed)**: `ContactResource`
- **Returns (raw)**: `ApiResult[ContactResource, HouseholdsContactsShowErrorBody]`
- **Error**: `HouseholdsContactsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactResource` | `givebutter/models/contact_resource.py` |
| `HouseholdsContactsShowErrorBody` | `givebutter/errors/households_contacts_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.household_contacts.households_contacts_store

- **Route**: `POST /v1/households/{household}/contacts`
- **Auth**: `http`
- **Signature**: `def households_contacts_store(household: int, body: V1HouseholdsContactsRequest | V1HouseholdsContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `household`, `body`
- **Params**: `household` — path · `body` — JSON body
- **Returns (parsed)**: `AppHttpResourcesApiHouseholdResource`
- **Returns (raw)**: `ApiResult[AppHttpResourcesApiHouseholdResource, HouseholdsContactsStoreErrorBody]`
- **Error**: `HouseholdsContactsStoreErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1HouseholdsContactsRequest` | `givebutter/models/v1_households_contacts_request.py` |
| `V1HouseholdsContactsRequestDict` | `givebutter/models/v1_households_contacts_request.py` |
| `AppHttpResourcesApiHouseholdResource` | `givebutter/models/app_http_resources_api_household_resource.py` |
| `HouseholdsContactsStoreErrorBody` | `givebutter/errors/households_contacts_store_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

