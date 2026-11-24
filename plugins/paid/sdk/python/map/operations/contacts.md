<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.contacts` · Source: `paid/apis/contacts.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.contacts.create_contact

- **Route**: `POST /contacts/`
- **Server**: `default`
- **Signature**: `def create_contact(authorization: str, *, body: CreateContactRequest | CreateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Contact1`
- **Returns (raw)**: `ApiResult[Contact1, CreateContactErrorBody]`
- **Error**: `CreateContactErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateContactRequest` | `paid/models/create_contact_request.py` |
| `CreateContactRequestDict` | `paid/models/create_contact_request.py` |
| `Contact1` | `paid/models/contact1.py` |
| `CreateContactErrorBody` | `paid/errors/create_contact_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.contacts.create2

- **Route**: `POST /contacts`
- **Server**: `default`
- **Signature**: `def create2(authorization: str, *, body: ContactCreate | ContactCreateDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Contact`
- **Returns (raw)**: `ApiResult[Contact, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ContactCreate` | `paid/models/contact_create.py` |
| `ContactCreateDict` | `paid/models/contact_create.py` |
| `Contact` | `paid/models/contact.py` |

### client.contacts.delete_by_external_id2

- **Route**: `DELETE /contacts/external/{externalId}`
- **Server**: `default`
- **Signature**: `def delete_by_external_id2(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.contacts.delete_contact_by_id

- **Route**: `DELETE /contacts/{id}`
- **Server**: `default`
- **Signature**: `def delete_contact_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteContactByIdErrorBody]`
- **Error**: `DeleteContactByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteContactByIdErrorBody` | `paid/errors/delete_contact_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.contacts.delete2

- **Route**: `DELETE /contacts/{contactId}`
- **Server**: `default`
- **Signature**: `def delete2(contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact_id`, `authorization`
- **Params**: `contact_id` — path `contactId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.contacts.get_by_external_id2

- **Route**: `GET /contacts/external/{externalId}`
- **Server**: `default`
- **Signature**: `def get_by_external_id2(external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Contact`
- **Returns (raw)**: `ApiResult[Contact, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Contact` | `paid/models/contact.py` |

### client.contacts.get_contact_by_id

- **Route**: `GET /contacts/{id}`
- **Server**: `default`
- **Signature**: `def get_contact_by_id(id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Contact1`
- **Returns (raw)**: `ApiResult[Contact1, GetContactByIdErrorBody]`
- **Error**: `GetContactByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Contact1` | `paid/models/contact1.py` |
| `GetContactByIdErrorBody` | `paid/errors/get_contact_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.contacts.get2

- **Route**: `GET /contacts/{contactId}`
- **Server**: `default`
- **Signature**: `def get2(contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `contact_id`, `authorization`
- **Params**: `contact_id` — path `contactId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `Contact`
- **Returns (raw)**: `ApiResult[Contact, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Contact` | `paid/models/contact.py` |

### client.contacts.list_contacts

- **Route**: `GET /contacts/`
- **Server**: `default`
- **Signature**: `def list_contacts(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `ContactListResponse`
- **Returns (raw)**: `ApiResult[ContactListResponse, ListContactsErrorBody]`
- **Error**: `ListContactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactListResponse` | `paid/models/contact_list_response.py` |
| `ListContactsErrorBody` | `paid/errors/list_contacts_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.contacts.list2

- **Route**: `GET /contacts`
- **Server**: `default`
- **Signature**: `def list2(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `list[Contact]`
- **Returns (raw)**: `ApiResult[list[Contact], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Contact` | `paid/models/contact.py` |

### client.contacts.update_contact_by_external_id

- **Route**: `PUT /contacts/external/{externalId}`
- **Server**: `default`
- **Signature**: `def update_contact_by_external_id(external_id: str, authorization: str, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `external_id`, `authorization`
- **Params**: `external_id` — path `externalId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Contact1`
- **Returns (raw)**: `ApiResult[Contact1, UpdateContactByExternalIdErrorBody]`
- **Error**: `UpdateContactByExternalIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateContactRequest` | `paid/models/update_contact_request.py` |
| `UpdateContactRequestDict` | `paid/models/update_contact_request.py` |
| `Contact1` | `paid/models/contact1.py` |
| `UpdateContactByExternalIdErrorBody` | `paid/errors/update_contact_by_external_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.contacts.update_contact_by_id

- **Route**: `PUT /contacts/{id}`
- **Server**: `default`
- **Signature**: `def update_contact_by_id(id_: str, authorization: str, *, body: UpdateContactRequest | UpdateContactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Contact1`
- **Returns (raw)**: `ApiResult[Contact1, UpdateContactByIdErrorBody]`
- **Error**: `UpdateContactByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateContactRequest` | `paid/models/update_contact_request.py` |
| `UpdateContactRequestDict` | `paid/models/update_contact_request.py` |
| `Contact1` | `paid/models/contact1.py` |
| `UpdateContactByIdErrorBody` | `paid/errors/update_contact_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

