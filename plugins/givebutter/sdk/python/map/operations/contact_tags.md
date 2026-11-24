<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactTags — operations

Accessor: `client.contact_tags` · Source: `givebutter/apis/contact_tags.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contact_tags.contact_tag_destroy

- **Route**: `POST /v1/contacts/{contact}/tags/remove`
- **Auth**: `http`
- **Signature**: `def contact_tag_destroy(contact: int, body: V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`, `body`
- **Params**: `contact` — path · `body` — JSON body
- **Returns (parsed)**: `ContactResource`
- **Returns (raw)**: `ApiResult[ContactResource, ContactTagDestroyErrorBody]`
- **Error**: `ContactTagDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ContactsTagsRemoveRequest` | `givebutter/models/v1_contacts_tags_remove_request.py` |
| `V1ContactsTagsRemoveRequestDict` | `givebutter/models/v1_contacts_tags_remove_request.py` |
| `ContactResource` | `givebutter/models/contact_resource.py` |
| `ContactTagDestroyErrorBody` | `givebutter/errors/contact_tag_destroy_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.contact_tags.contact_tag_store

- **Route**: `POST /v1/contacts/{contact}/tags/add`
- **Auth**: `http`
- **Signature**: `def contact_tag_store(contact: int, body: V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`, `body`
- **Params**: `contact` — path · `body` — JSON body
- **Returns (parsed)**: `ContactResource`
- **Returns (raw)**: `ApiResult[ContactResource, ContactTagStoreErrorBody]`
- **Error**: `ContactTagStoreErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ContactsTagsAddRequest` | `givebutter/models/v1_contacts_tags_add_request.py` |
| `V1ContactsTagsAddRequestDict` | `givebutter/models/v1_contacts_tags_add_request.py` |
| `ContactResource` | `givebutter/models/contact_resource.py` |
| `ContactTagStoreErrorBody` | `givebutter/errors/contact_tag_store_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

### client.contact_tags.contact_tag_sync

- **Route**: `POST /v1/contacts/{contact}/tags/sync`
- **Auth**: `http`
- **Signature**: `def contact_tag_sync(contact: int, body: V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact`, `body`
- **Params**: `contact` — path · `body` — JSON body
- **Returns (parsed)**: `ContactResource`
- **Returns (raw)**: `ApiResult[ContactResource, ContactTagSyncErrorBody]`
- **Error**: `ContactTagSyncErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `ValidationException1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ContactsTagsSyncRequest` | `givebutter/models/v1_contacts_tags_sync_request.py` |
| `V1ContactsTagsSyncRequestDict` | `givebutter/models/v1_contacts_tags_sync_request.py` |
| `ContactResource` | `givebutter/models/contact_resource.py` |
| `ContactTagSyncErrorBody` | `givebutter/errors/contact_tag_sync_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |
| `ValidationException1` | `givebutter/models/validation_exception1.py` |

