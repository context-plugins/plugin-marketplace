<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactApi — operations

Accessor: `client.contactApi` · Source: `src/resources/contact-api.ts` · 7 operations · Request types: namespace `ContactApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### contactCreate

- **Signature**: `contactCreate(request: ContactApi.ContactCreateRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /api/{culture}/contacts`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ContactApi.ContactCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `ContactResult` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactResult` | `contactResultSchema` | `src/models/contact-result.ts` |

### contactGetContactList

- **Signature**: `contactGetContactList(request: ContactApi.ContactGetContactListRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /api/{culture}/contacts`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ContactApi.ContactGetContactListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### contactGetContactList2

- **Signature**: `contactGetContactList2(request: ContactApi.ContactGetContactList2Request, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /api/{culture}/contacts/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ContactApi.ContactGetContactList2Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### contactRemoveContact

- **Signature**: `contactRemoveContact(request: ContactApi.ContactRemoveContactRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /api/{culture}/contacts/{id}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ContactApi.ContactRemoveContactRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

### contactSearch

- **Signature**: `contactSearch(request: ContactApi.ContactSearchRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /api/{culture}/contacts/search`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ContactApi.ContactSearchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

### contactUpdate

- **Signature**: `contactUpdate(request: ContactApi.ContactUpdateRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `PUT /api/{culture}/contacts/{id}`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ContactApi.ContactUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `ContactResult` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactResult` | `contactResultSchema` | `src/models/contact-result.ts` |

### contactUploadContactQrCode

- **Signature**: `contactUploadContactQrCode(request: ContactApi.ContactUploadContactQrCodeRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /api/{culture}/contacts/{contactId}/update-contact-qrcode`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ContactApi.ContactUploadContactQrCodeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contactId` | `path` | `number` | yes |
| `culture` | `path` | `string` | yes |

