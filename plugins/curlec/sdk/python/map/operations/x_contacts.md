<!-- Generated file — do not edit; regenerated with the SDK. -->

# XContacts — operations

Accessor: `client.x_contacts` · Source: `curlec/apis/x_contacts.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.x_contacts.create_contact

- **Route**: `POST /contacts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_contact(body: ContactsRequest | ContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `XContact`
- **Returns (raw)**: `ApiResult[XContact, CreateContactErrorBody]`
- **Error**: `CreateContactErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactsRequest` | `curlec/models/contacts_request.py` |
| `ContactsRequestDict` | `curlec/models/contacts_request.py` |
| `XContact` | `curlec/models/x_contact.py` |
| `CreateContactErrorBody` | `curlec/errors/create_contact_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_contacts.fetch_contact

- **Route**: `GET /contacts/{contact_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_contact(contact_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact_id`
- **Params**: `contact_id` — path
- **Returns (parsed)**: `XContact`
- **Returns (raw)**: `ApiResult[XContact, FetchContactErrorBody]`
- **Error**: `FetchContactErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XContact` | `curlec/models/x_contact.py` |
| `FetchContactErrorBody` | `curlec/errors/fetch_contact_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_contacts.list_contacts

- **Route**: `GET /contacts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_contacts(*, name: str | None = None, email: str | None = None, contact: str | None = None, reference_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `email` — query · `contact` — query · `reference_id` — query · `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `ContactsResponse`
- **Returns (raw)**: `ApiResult[ContactsResponse, ListContactsErrorBody]`
- **Error**: `ListContactsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactsResponse` | `curlec/models/contacts_response.py` |
| `ListContactsErrorBody` | `curlec/errors/list_contacts_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_contacts.update_contact

- **Route**: `PATCH /contacts/{contact_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_contact(contact_id: str, body: ContactsRequest1 | ContactsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact_id`, `body`
- **Params**: `contact_id` — path · `body` — JSON body
- **Returns (parsed)**: `XContact`
- **Returns (raw)**: `ApiResult[XContact, UpdateContactErrorBody]`
- **Error**: `UpdateContactErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactsRequest1` | `curlec/models/contacts_request1.py` |
| `ContactsRequest1Dict` | `curlec/models/contacts_request1.py` |
| `XContact` | `curlec/models/x_contact.py` |
| `UpdateContactErrorBody` | `curlec/errors/update_contact_error.py` |
| `Error` | `curlec/models/error.py` |

