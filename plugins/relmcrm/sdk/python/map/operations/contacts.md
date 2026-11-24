<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.contacts` · Source: `relm_crm/apis/contacts.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contacts.create_contact

- **Route**: `POST /contacts`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_contact(body: ContactInput | ContactInputDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `Contact`
- **Returns (raw)**: `ApiResult[Contact, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ContactInput` | `relm_crm/models/contact_input.py` |
| `ContactInputDict` | `relm_crm/models/contact_input.py` |
| `Contact` | `relm_crm/models/contact.py` |

### client.contacts.delete_contact

- **Route**: `DELETE /contacts/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def delete_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Deleted`
- **Returns (raw)**: `ApiResult[Deleted, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deleted` | `relm_crm/models/deleted.py` |

### client.contacts.get_contact

- **Route**: `GET /contacts/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Contact`
- **Returns (raw)**: `ApiResult[Contact, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Contact` | `relm_crm/models/contact.py` |

### client.contacts.list_contacts

- **Route**: `GET /contacts`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_contacts(*, limit: int | None = 25, cursor: str | None = None, include_deleted: bool | None = None, q: str | None = None, email: str | None = None, company_id: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `include_deleted` — query · `q` — query · `email` — query · `company_id` — query · `type_` — query `type`
- **Returns (parsed)**: `ContactList`
- **Returns (raw)**: `ApiResult[ContactList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ContactList` | `relm_crm/models/contact_list.py` |

### client.contacts.restore_contact

- **Route**: `POST /contacts/{id}/restore`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def restore_contact(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Contact`
- **Returns (raw)**: `ApiResult[Contact, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Contact` | `relm_crm/models/contact.py` |

### client.contacts.update_contact

- **Route**: `PATCH /contacts/{id}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def update_contact(id_: str, body: ContactInput | ContactInputDict, *, if_match: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `Contact`
- **Returns (raw)**: `ApiResult[Contact, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ContactInput` | `relm_crm/models/contact_input.py` |
| `ContactInputDict` | `relm_crm/models/contact_input.py` |
| `Contact` | `relm_crm/models/contact.py` |

