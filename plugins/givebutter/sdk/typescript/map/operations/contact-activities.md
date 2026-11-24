<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactActivities — operations

Accessor: `client.contactActivities` · Source: `src/resources/contact-activities.ts` · 5 operations · Request and error types: namespace `ContactActivities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### contactsActivitiesDestroy

- **Signature**: `contactsActivitiesDestroy(request: ContactActivities.ContactsActivitiesDestroyRequest, options?: RequestOptions): ApiPromise<undefined, ContactActivities.ContactsActivitiesDestroyError>`
- **Wire**: `DELETE /v1/contacts/{contact}/activities/{activity}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `ContactActivities.ContactsActivitiesDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactActivities.ContactsActivitiesDestroyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `activity` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### contactsActivitiesIndex

- **Signature**: `contactsActivitiesIndex(request: ContactActivities.ContactsActivitiesIndexRequest, options?: RequestOptions): ApiPromise<V1ContactsActivitiesResponse, ContactActivities.ContactsActivitiesIndexError>`
- **Wire**: `GET /v1/contacts/{contact}/activities`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ContactsActivitiesResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `ContactActivities.ContactsActivitiesIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactActivities.ContactsActivitiesIndexRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `type` | `query` | `ContactActivityTypeEnum` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactActivityTypeEnum` | `contactActivityTypeEnumSchema` | `src/models/contact-activity-type-enum.ts` |
| `V1ContactsActivitiesResponse` | `v1ContactsActivitiesResponseSchema` | `src/models/v1-contacts-activities-response.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### contactsActivitiesShow

- **Signature**: `contactsActivitiesShow(request: ContactActivities.ContactsActivitiesShowRequest, options?: RequestOptions): ApiPromise<ContactActivityResource, ContactActivities.ContactsActivitiesShowError>`
- **Wire**: `GET /v1/contacts/{contact}/activities/{activity}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactActivityResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `ContactActivities.ContactsActivitiesShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactActivities.ContactsActivitiesShowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `activity` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactActivityResource` | `contactActivityResourceSchema` | `src/models/contact-activity-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### contactsActivitiesStore

- **Signature**: `contactsActivitiesStore(request: ContactActivities.ContactsActivitiesStoreRequest, options?: RequestOptions): ApiPromise<ContactActivityResource, ContactActivities.ContactsActivitiesStoreError>`
- **Wire**: `POST /v1/contacts/{contact}/activities`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactActivityResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `ContactActivities.ContactsActivitiesStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactActivities.ContactsActivitiesStoreRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `body` | `body` | `StoreContactActivityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreContactActivityRequest` | `storeContactActivityRequestSchema` | `src/models/store-contact-activity-request.ts` |
| `ContactActivityResource` | `contactActivityResourceSchema` | `src/models/contact-activity-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### contactsActivitiesUpdate

- **Signature**: `contactsActivitiesUpdate(request: ContactActivities.ContactsActivitiesUpdateRequest, options?: RequestOptions): ApiPromise<ContactActivityResource, ContactActivities.ContactsActivitiesUpdateError>`
- **Wire**: `PUT /v1/contacts/{contact}/activities/{activity}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ContactActivityResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `ContactActivities.ContactsActivitiesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"validationException1"` [422] `ValidationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ContactActivities.ContactsActivitiesUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contact` | `path` | `number` | yes |
| `activity` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactActivityResource` | `contactActivityResourceSchema` | `src/models/contact-activity-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

