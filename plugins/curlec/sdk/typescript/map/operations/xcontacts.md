<!-- Generated file — do not edit; regenerated with the SDK. -->

# XContacts — operations

Accessor: `client.xContacts` · Source: `src/resources/xcontacts.ts` · 4 operations · Request and error types: namespace `XContacts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createContact

- **Signature**: `createContact(request: XContacts.CreateContactRequest, options?: RequestOptions): ApiPromise<XContact, XContacts.CreateContactError>`
- **Wire**: `POST /contacts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `XContact`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XContacts.CreateContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XContacts.CreateContactRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactsRequest` | `contactsRequestSchema` | `src/models/contacts-request.ts` |
| `XContact` | `xContactSchema` | `src/models/xcontact.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchContact

- **Signature**: `fetchContact(request: XContacts.FetchContactRequest, options?: RequestOptions): ApiPromise<XContact, XContacts.FetchContactError>`
- **Wire**: `GET /contacts/{contact_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `XContact`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XContacts.FetchContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XContacts.FetchContactRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contactId` | `path` | `contact_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XContact` | `xContactSchema` | `src/models/xcontact.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listContacts

- **Signature**: `listContacts(request?: XContacts.ListContactsRequest, options?: RequestOptions): ApiPromise<ContactsResponse, XContacts.ListContactsError>`
- **Wire**: `GET /contacts`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XContacts.ListContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XContacts.ListContactsRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `name` | `query` | — | `string` | no | — |
| `email` | `query` | — | `string` | no | — |
| `contact` | `query` | — | `string` | no | — |
| `referenceId` | `query` | `reference_id` | `string` | no | — |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactsResponse` | `contactsResponseSchema` | `src/models/contacts-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateContact

- **Signature**: `updateContact(request: XContacts.UpdateContactRequest, options?: RequestOptions): ApiPromise<XContact, XContacts.UpdateContactError>`
- **Wire**: `PATCH /contacts/{contact_id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `XContact`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `XContacts.UpdateContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `XContacts.UpdateContactRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contactId` | `path` | `contact_id` | `string` | yes |
| `body` | `body` | — | `ContactsRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactsRequest1` | `contactsRequest1Schema` | `src/models/contacts-request1.ts` |
| `XContact` | `xContactSchema` | `src/models/xcontact.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

