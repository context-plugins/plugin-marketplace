<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.contacts` · Source: `src/resources/contacts.ts` · 6 operations · Request types: namespace `Contacts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createContact

- **Signature**: `createContact(request: Contacts.CreateContactRequest, options?: RequestOptions): ApiPromise<Contact, ApiError>`
- **Wire**: `POST /contacts`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Contact`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.CreateContactRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `ContactInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactInput` | `contactInputSchema` | `src/models/contact-input.ts` |
| `Contact` | `contactSchema` | `src/models/contact.ts` |

### deleteContact

- **Signature**: `deleteContact(request: Contacts.DeleteContactRequest, options?: RequestOptions): ApiPromise<Deleted, ApiError>`
- **Wire**: `DELETE /contacts/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Deleted`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.DeleteContactRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Deleted` | `deletedSchema` | `src/models/deleted.ts` |

### getContact

- **Signature**: `getContact(request: Contacts.GetContactRequest, options?: RequestOptions): ApiPromise<Contact, ApiError>`
- **Wire**: `GET /contacts/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Contact`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.GetContactRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Contact` | `contactSchema` | `src/models/contact.ts` |

### listContacts

- **Signature**: `listContacts(request?: Contacts.ListContactsRequest, options?: RequestOptions): ApiPromise<ContactList, ApiError>`
- **Wire**: `GET /contacts`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactList`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.ListContactsRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `25` |
| `cursor` | `query` | — | `string` | no | — |
| `includeDeleted` | `query` | `include_deleted` | `boolean` | no | — |
| `q` | `query` | — | `string` | no | — |
| `email` | `query` | — | `string` | no | — |
| `companyId` | `query` | `company_id` | `string` | no | — |
| `type` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactList` | `contactListSchema` | `src/models/contact-list.ts` |

### restoreContact

- **Signature**: `restoreContact(request: Contacts.RestoreContactRequest, options?: RequestOptions): ApiPromise<Contact, ApiError>`
- **Wire**: `POST /contacts/{id}/restore`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Contact`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.RestoreContactRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Contact` | `contactSchema` | `src/models/contact.ts` |

### updateContact

- **Signature**: `updateContact(request: Contacts.UpdateContactRequest, options?: RequestOptions): ApiPromise<Contact, ApiError>`
- **Wire**: `PATCH /contacts/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Contact`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Contacts.UpdateContactRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `body` | `body` | — | `ContactInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactInput` | `contactInputSchema` | `src/models/contact-input.ts` |
| `Contact` | `contactSchema` | `src/models/contact.ts` |

