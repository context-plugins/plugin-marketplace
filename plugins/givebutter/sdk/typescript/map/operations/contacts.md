<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contacts — operations

Accessor: `client.contacts` · Source: `src/resources/contacts.ts` · 6 operations · Request and error types: namespace `Contacts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### contactRestore

- **Signature**: `contactRestore(request: Contacts.ContactRestoreRequest, options?: RequestOptions): ApiPromise<ContactResource, Contacts.ContactRestoreError>`
- **Wire**: `PATCH /v1/contacts/{contact}/restore`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Contacts.ContactRestoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.ContactRestoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactResource` | `contactResourceSchema` | `src/models/contact-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### contactsDestroy

- **Signature**: `contactsDestroy(request: Contacts.ContactsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, Contacts.ContactsDestroyError>`
- **Wire**: `DELETE /v1/contacts/{contact}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Contacts.ContactsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.ContactsDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### contactsIndex

- **Signature**: `contactsIndex(request?: Contacts.ContactsIndexRequest, options?: RequestOptions): ApiPromise<V1ContactsResponse, Contacts.ContactsIndexError>`
- **Wire**: `GET /v1/contacts`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ContactsResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Contacts.ContactsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.ContactsIndexRequest` (16):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `ContactType` | no |
| `createdAfter` | `query` | `Date` (date-time) | no |
| `createdBefore` | `query` | `Date` (date-time) | no |
| `updatedAfter` | `query` | `Date` (date-time) | no |
| `updatedBefore` | `query` | `Date` (date-time) | no |
| `totalContributionsMin` | `query` | `number` | no |
| `totalContributionsMax` | `query` | `number` | no |
| `recurringContributionsMin` | `query` | `number` | no |
| `recurringContributionsMax` | `query` | `number` | no |
| `tags` | `query` | `string` | no |
| `sortBy` | `query` | `SortBy` | no |
| `sortByDesc` | `query` | `SortByDesc` | no |
| `email` | `query` | `string` | no |
| `primaryEmail` | `query` | `string` | no |
| `firstName` | `query` | `string` | no |
| `lastName` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactType` | `contactTypeSchema` | `src/models/contact-type.ts` |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `SortByDesc` | `sortByDescSchema` | `src/models/sort-by-desc.ts` |
| `V1ContactsResponse` | `v1ContactsResponseSchema` | `src/models/v1-contacts-response.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### contactsShow

- **Signature**: `contactsShow(request: Contacts.ContactsShowRequest, options?: RequestOptions): ApiPromise<ContactResource, Contacts.ContactsShowError>`
- **Wire**: `GET /v1/contacts/{contact}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Contacts.ContactsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.ContactsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactResource` | `contactResourceSchema` | `src/models/contact-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### contactsStore

- **Signature**: `contactsStore(request?: Contacts.ContactsStoreRequest, options?: RequestOptions): ApiPromise<ContactResource, Contacts.ContactsStoreError>`
- **Wire**: `POST /v1/contacts`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Contacts.ContactsStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.ContactsStoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ContactsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ContactsRequest` | `v1ContactsRequestSchema` | `src/models/v1-contacts-request.ts` |
| `ContactResource` | `contactResourceSchema` | `src/models/contact-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### contactsUpdate

- **Signature**: `contactsUpdate(request: Contacts.ContactsUpdateRequest, options?: RequestOptions): ApiPromise<ContactResource, Contacts.ContactsUpdateError>`
- **Wire**: `PUT /v1/contacts/{contact}`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Contacts.ContactsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contacts.ContactsUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `body` | `body` | `UpdateContactRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateContactRequest` | `updateContactRequestSchema` | `src/models/update-contact-request.ts` |
| `ContactResource` | `contactResourceSchema` | `src/models/contact-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

