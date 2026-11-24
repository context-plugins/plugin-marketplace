<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactApi — operations

Accessor: `client.contact_api` · Source: `flow_account/apis/contact_api.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.contact_api.contact_create

- **Route**: `POST /api/{culture}/contacts`
- **Auth**: `bearer`
- **Signature**: `def contact_create(culture: str, body: ContactResult | ContactResultDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`, `body`
- **Params**: `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ContactResult` | `flow_account/models/contact_result.py` |
| `ContactResultDict` | `flow_account/models/contact_result.py` |

### client.contact_api.contact_get_contact_list

- **Route**: `GET /api/{culture}/contacts`
- **Auth**: `bearer`
- **Signature**: `def contact_get_contact_list(id_: int | None, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.contact_api.contact_get_contact_list2

- **Route**: `GET /api/{culture}/contacts/{id}`
- **Auth**: `bearer`
- **Signature**: `def contact_get_contact_list2(id_: int | None, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.contact_api.contact_remove_contact

- **Route**: `DELETE /api/{culture}/contacts/{id}`
- **Auth**: `bearer`
- **Signature**: `def contact_remove_contact(id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`
- **Params**: `id_` — path `id` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.contact_api.contact_search

- **Route**: `GET /api/{culture}/contacts/search`
- **Auth**: `bearer`
- **Signature**: `def contact_search(culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `culture`
- **Params**: `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

### client.contact_api.contact_update

- **Route**: `PUT /api/{culture}/contacts/{id}`
- **Auth**: `bearer`
- **Signature**: `def contact_update(id_: int, culture: str, body: ContactResult | ContactResultDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `culture`, `body`
- **Params**: `id_` — path `id` · `culture` — path · `body` — JSON body
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ContactResult` | `flow_account/models/contact_result.py` |
| `ContactResultDict` | `flow_account/models/contact_result.py` |

### client.contact_api.contact_upload_contact_qr_code

- **Route**: `POST /api/{culture}/contacts/{contactId}/update-contact-qrcode`
- **Auth**: `bearer`
- **Signature**: `def contact_upload_contact_qr_code(contact_id: int, culture: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact_id`, `culture`
- **Params**: `contact_id` — path `contactId` · `culture` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RawError]`
- **Error**: `RawError` — **Case B**

