<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactTags — operations

Accessor: `client.contactTags` · Source: `src/resources/contact-tags.ts` · 3 operations · Request and error types: namespace `ContactTags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### contactTagDestroy

- **Signature**: `contactTagDestroy(request: ContactTags.ContactTagDestroyRequest, options?: RequestOptions): ApiPromise<ContactResource, ContactTags.ContactTagDestroyError>`
- **Wire**: `POST /v1/contacts/{contact}/tags/remove`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `ContactTags.ContactTagDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"authorizationException1"` [403] `AuthorizationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactTags.ContactTagDestroyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `body` | `body` | `V1ContactsTagsRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ContactsTagsRemoveRequest` | `v1ContactsTagsRemoveRequestSchema` | `src/models/v1-contacts-tags-remove-request.ts` |
| `ContactResource` | `contactResourceSchema` | `src/models/contact-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |

### contactTagStore

- **Signature**: `contactTagStore(request: ContactTags.ContactTagStoreRequest, options?: RequestOptions): ApiPromise<ContactResource, ContactTags.ContactTagStoreError>`
- **Wire**: `POST /v1/contacts/{contact}/tags/add`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `ContactTags.ContactTagStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"authorizationException1"` [403] `AuthorizationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactTags.ContactTagStoreRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `body` | `body` | `V1ContactsTagsAddRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ContactsTagsAddRequest` | `v1ContactsTagsAddRequestSchema` | `src/models/v1-contacts-tags-add-request.ts` |
| `ContactResource` | `contactResourceSchema` | `src/models/contact-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |

### contactTagSync

- **Signature**: `contactTagSync(request: ContactTags.ContactTagSyncRequest, options?: RequestOptions): ApiPromise<ContactResource, ContactTags.ContactTagSyncError>`
- **Wire**: `POST /v1/contacts/{contact}/tags/sync`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `ContactTags.ContactTagSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"authorizationException1"` [403] `AuthorizationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactTags.ContactTagSyncRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `body` | `body` | `V1ContactsTagsSyncRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ContactsTagsSyncRequest` | `v1ContactsTagsSyncRequestSchema` | `src/models/v1-contacts-tags-sync-request.ts` |
| `ContactResource` | `contactResourceSchema` | `src/models/contact-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |

