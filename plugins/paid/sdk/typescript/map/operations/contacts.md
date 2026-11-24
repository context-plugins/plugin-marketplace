<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.contacts` · Source: `src/resources/contacts.ts` · 12 operations · Request and error types: namespace `Contacts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createContact

- **Signature**: `createContact(request: Contacts.CreateContactRequestParams, options?: RequestOptions): ApiPromise<Contact1, Contacts.CreateContactError>`
- **Wire**: `POST /contacts/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Contact1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Contacts.CreateContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.CreateContactRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateContactRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateContactRequest` | `createContactRequestSchema` | `src/models/create-contact-request.ts` |
| `Contact1` | `contact1Schema` | `src/models/contact1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### create2

- **Signature**: `create2(request: Contacts.Create2Request, options?: RequestOptions): ApiPromise<Contact, ApiError>`
- **Wire**: `POST /contacts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Contact`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.Create2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `ContactCreate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactCreate` | `contactCreateSchema` | `src/models/contact-create.ts` |
| `Contact` | `contactSchema` | `src/models/contact.ts` |

### deleteByExternalId2

- **Signature**: `deleteByExternalId2(request: Contacts.DeleteByExternalId2Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /contacts/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.DeleteByExternalId2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### deleteContactById

- **Signature**: `deleteContactById(request: Contacts.DeleteContactByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Contacts.DeleteContactByIdError>`
- **Wire**: `DELETE /contacts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"`, an instance of `Contacts.DeleteContactByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.DeleteContactByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### delete2

- **Signature**: `delete2(request: Contacts.Delete2Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /contacts/{contactId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.Delete2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contactId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### getByExternalId2

- **Signature**: `getByExternalId2(request: Contacts.GetByExternalId2Request, options?: RequestOptions): ApiPromise<Contact, ApiError>`
- **Wire**: `GET /contacts/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Contact`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.GetByExternalId2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Contact` | `contactSchema` | `src/models/contact.ts` |

### getContactById

- **Signature**: `getContactById(request: Contacts.GetContactByIdRequest, options?: RequestOptions): ApiPromise<Contact1, Contacts.GetContactByIdError>`
- **Wire**: `GET /contacts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Contact1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Contacts.GetContactByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.GetContactByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Contact1` | `contact1Schema` | `src/models/contact1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### get2

- **Signature**: `get2(request: Contacts.Get2Request, options?: RequestOptions): ApiPromise<Contact, ApiError>`
- **Wire**: `GET /contacts/{contactId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Contact`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.Get2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contactId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Contact` | `contactSchema` | `src/models/contact.ts` |

### listContacts

- **Signature**: `listContacts(request: Contacts.ListContactsRequest, options?: RequestOptions): ApiPromise<ContactListResponse, Contacts.ListContactsError>`
- **Wire**: `GET /contacts/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Contacts.ListContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.ListContactsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactListResponse` | `contactListResponseSchema` | `src/models/contact-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### list2

- **Signature**: `list2(request: Contacts.List2Request, options?: RequestOptions): ApiPromise<Contact[], ApiError>`
- **Wire**: `GET /contacts`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Contact[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.List2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Contact` | `contactSchema` | `src/models/contact.ts` |

### updateContactByExternalId

- **Signature**: `updateContactByExternalId(request: Contacts.UpdateContactByExternalIdRequest, options?: RequestOptions): ApiPromise<Contact1, Contacts.UpdateContactByExternalIdError>`
- **Wire**: `PUT /contacts/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Contact1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Contacts.UpdateContactByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.UpdateContactByExternalIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateContactRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateContactRequest` | `updateContactRequestSchema` | `src/models/update-contact-request.ts` |
| `Contact1` | `contact1Schema` | `src/models/contact1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateContactById

- **Signature**: `updateContactById(request: Contacts.UpdateContactByIdRequest, options?: RequestOptions): ApiPromise<Contact1, Contacts.UpdateContactByIdError>`
- **Wire**: `PUT /contacts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Contact1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Contacts.UpdateContactByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.UpdateContactByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateContactRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateContactRequest` | `updateContactRequestSchema` | `src/models/update-contact-request.ts` |
| `Contact1` | `contact1Schema` | `src/models/contact1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

