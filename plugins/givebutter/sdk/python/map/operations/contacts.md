<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.contacts` · Source: `givebutter/apis/contacts.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contacts.contact_restore

- **Route**: `PATCH /v1/contacts/{contact}/restore`
- **Auth**: `http`
- **Signature**: `def contact_restore(contact: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`
- **Params**: `contact` — path
- **Returns (parsed)**: `ContactResource`
- **Returns (raw)**: `ApiResult[ContactResource, ContactRestoreErrorBody]`
- **Error**: `ContactRestoreErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactResource` | `givebutter/models/contact_resource.py` |
| `ContactRestoreErrorBody` | `givebutter/errors/contact_restore_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.contacts.contacts_destroy

- **Route**: `DELETE /v1/contacts/{contact}`
- **Auth**: `http`
- **Signature**: `def contacts_destroy(contact: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`
- **Params**: `contact` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ContactsDestroyErrorBody]`
- **Error**: `ContactsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactsDestroyErrorBody` | `givebutter/errors/contacts_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.contacts.contacts_index

- **Route**: `GET /v1/contacts`
- **Auth**: `http`
- **Signature**: `def contacts_index(*, type_: ContactTypeOrStr | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, updated_after: RFC3339DateTime | None = None, updated_before: RFC3339DateTime | None = None, total_contributions_min: float | None = None, total_contributions_max: float | None = None, recurring_contributions_min: float | None = None, recurring_contributions_max: float | None = None, tags: str | None = None, sort_by: SortByOrStr | None = None, sort_by_desc: SortByDescOrStr | None = None, email: str | None = None, primary_email: str | None = None, first_name: str | None = None, last_name: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `type_` — query `type` · `created_after` — query `createdAfter` · `created_before` — query `createdBefore` · `updated_after` — query `updatedAfter` · `updated_before` — query `updatedBefore` · `total_contributions_min` — query `totalContributionsMin` · `total_contributions_max` — query `totalContributionsMax` · `recurring_contributions_min` — query `recurringContributionsMin` · `recurring_contributions_max` — query `recurringContributionsMax` · `tags` — query · `sort_by` — query `sortBy` · `sort_by_desc` — query `sortByDesc` · `email` — query · `primary_email` — query `primaryEmail` · `first_name` — query `firstName` · `last_name` — query `lastName`
- **Returns (parsed)**: `V1ContactsResponse`
- **Returns (raw)**: `ApiResult[V1ContactsResponse, ContactsIndexErrorBody]`
- **Error**: `ContactsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactTypeOrStr` | `givebutter/models/enums/contact_type.py` |
| `SortByOrStr` | `givebutter/models/enums/sort_by.py` |
| `SortByDescOrStr` | `givebutter/models/enums/sort_by_desc.py` |
| `V1ContactsResponse` | `givebutter/models/v1_contacts_response.py` |
| `ContactsIndexErrorBody` | `givebutter/errors/contacts_index_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.contacts.contacts_show

- **Route**: `GET /v1/contacts/{contact}`
- **Auth**: `http`
- **Signature**: `def contacts_show(contact: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`
- **Params**: `contact` — path
- **Returns (parsed)**: `ContactResource`
- **Returns (raw)**: `ApiResult[ContactResource, ContactsShowErrorBody]`
- **Error**: `ContactsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactResource` | `givebutter/models/contact_resource.py` |
| `ContactsShowErrorBody` | `givebutter/errors/contacts_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

### client.contacts.contacts_store

- **Route**: `POST /v1/contacts`
- **Auth**: `http`
- **Signature**: `def contacts_store(*, body: V1ContactsRequest | V1ContactsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContactResource`
- **Returns (raw)**: `ApiResult[ContactResource, ContactsStoreErrorBody]`
- **Error**: `ContactsStoreErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ContactsRequest` | `givebutter/models/v1_contacts_request.py` |
| `V1ContactsRequestDict` | `givebutter/models/v1_contacts_request.py` |
| `ContactResource` | `givebutter/models/contact_resource.py` |
| `ContactsStoreErrorBody` | `givebutter/errors/contacts_store_error.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.contacts.contacts_update

- **Route**: `PUT /v1/contacts/{contact}`
- **Auth**: `http`
- **Signature**: `def contacts_update(contact: int, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`
- **Params**: `contact` — path · `body` — JSON body
- **Returns (parsed)**: `ContactResource`
- **Returns (raw)**: `ApiResult[ContactResource, ContactsUpdateErrorBody]`
- **Error**: `ContactsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateContactRequest` | `givebutter/models/update_contact_request.py` |
| `UpdateContactRequestDict` | `givebutter/models/update_contact_request.py` |
| `ContactResource` | `givebutter/models/contact_resource.py` |
| `ContactsUpdateErrorBody` | `givebutter/errors/contacts_update_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

