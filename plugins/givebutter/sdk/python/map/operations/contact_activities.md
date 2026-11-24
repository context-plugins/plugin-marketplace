<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactActivities — operations

Accessor: `client.contact_activities` · Source: `givebutter/apis/contact_activities.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contact_activities.contacts_activities_destroy

- **Route**: `DELETE /v1/contacts/{contact}/activities/{activity}`
- **Auth**: `http`
- **Signature**: `def contacts_activities_destroy(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`, `activity`
- **Params**: `contact` — path · `activity` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ContactsActivitiesDestroyErrorBody]`
- **Error**: `ContactsActivitiesDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactsActivitiesDestroyErrorBody` | `givebutter/errors/contacts_activities_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.contact_activities.contacts_activities_index

- **Route**: `GET /v1/contacts/{contact}/activities`
- **Auth**: `http`
- **Signature**: `def contacts_activities_index(contact: int, *, type_: ContactActivityTypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`
- **Params**: `contact` — path · `type_` — query `type`
- **Returns (parsed)**: `V1ContactsActivitiesResponse`
- **Returns (raw)**: `ApiResult[V1ContactsActivitiesResponse, ContactsActivitiesIndexErrorBody]`
- **Error**: `ContactsActivitiesIndexErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactActivityTypeEnumOrStr` | `givebutter/models/enums/contact_activity_type_enum.py` |
| `V1ContactsActivitiesResponse` | `givebutter/models/v1_contacts_activities_response.py` |
| `ContactsActivitiesIndexErrorBody` | `givebutter/errors/contacts_activities_index_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.contact_activities.contacts_activities_show

- **Route**: `GET /v1/contacts/{contact}/activities/{activity}`
- **Auth**: `http`
- **Signature**: `def contacts_activities_show(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`, `activity`
- **Params**: `contact` — path · `activity` — path
- **Returns (parsed)**: `ContactActivityResource`
- **Returns (raw)**: `ApiResult[ContactActivityResource, ContactsActivitiesShowErrorBody]`
- **Error**: `ContactsActivitiesShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactActivityResource` | `givebutter/models/contact_activity_resource.py` |
| `ContactsActivitiesShowErrorBody` | `givebutter/errors/contacts_activities_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.contact_activities.contacts_activities_store

- **Route**: `POST /v1/contacts/{contact}/activities`
- **Auth**: `http`
- **Signature**: `def contacts_activities_store(contact: int, body: StoreContactActivityRequest | StoreContactActivityRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`, `body`
- **Params**: `contact` — path · `body` — JSON body
- **Returns (parsed)**: `ContactActivityResource`
- **Returns (raw)**: `ApiResult[ContactActivityResource, ContactsActivitiesStoreErrorBody]`
- **Error**: `ContactsActivitiesStoreErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreContactActivityRequest` | `givebutter/models/store_contact_activity_request.py` |
| `StoreContactActivityRequestDict` | `givebutter/models/store_contact_activity_request.py` |
| `ContactActivityResource` | `givebutter/models/contact_activity_resource.py` |
| `ContactsActivitiesStoreErrorBody` | `givebutter/errors/contacts_activities_store_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.contact_activities.contacts_activities_update

- **Route**: `PUT /v1/contacts/{contact}/activities/{activity}`
- **Auth**: `http`
- **Signature**: `def contacts_activities_update(contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`, `activity`
- **Params**: `contact` — path · `activity` — path
- **Returns (parsed)**: `ContactActivityResource`
- **Returns (raw)**: `ApiResult[ContactActivityResource, ContactsActivitiesUpdateErrorBody]`
- **Error**: `ContactsActivitiesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactActivityResource` | `givebutter/models/contact_activity_resource.py` |
| `ContactsActivitiesUpdateErrorBody` | `givebutter/errors/contacts_activities_update_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

