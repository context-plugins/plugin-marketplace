<!-- Generated file — do not edit; regenerated with the SDK. -->

# HouseholdContacts — operations

Accessor: `client.householdContacts` · Source: `src/resources/household-contacts.ts` · 4 operations · Request and error types: namespace `HouseholdContacts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### householdsContactsDestroy

- **Signature**: `householdsContactsDestroy(request: HouseholdContacts.HouseholdsContactsDestroyRequest, options?: RequestOptions): ApiPromise<AppHttpResourcesApiHouseholdResource, HouseholdContacts.HouseholdsContactsDestroyError>`
- **Wire**: `DELETE /v1/households/{household}/contacts/{contact}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `HouseholdContacts.HouseholdsContactsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HouseholdContacts.HouseholdsContactsDestroyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `household` | `path` | `number` | yes |
| `contact` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppHttpResourcesApiHouseholdResource` | `appHttpResourcesApiHouseholdResourceSchema` | `src/models/app-http-resources-api-household-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### householdsContactsIndex

- **Signature**: `householdsContactsIndex(request: HouseholdContacts.HouseholdsContactsIndexRequest, options?: RequestOptions): ApiPromise<V1HouseholdsContactsResponse, HouseholdContacts.HouseholdsContactsIndexError>`
- **Wire**: `GET /v1/households/{household}/contacts`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1HouseholdsContactsResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `HouseholdContacts.HouseholdsContactsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HouseholdContacts.HouseholdsContactsIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `household` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HouseholdsContactsResponse` | `v1HouseholdsContactsResponseSchema` | `src/models/v1-households-contacts-response.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### householdsContactsShow

- **Signature**: `householdsContactsShow(request: HouseholdContacts.HouseholdsContactsShowRequest, options?: RequestOptions): ApiPromise<ContactResource, HouseholdContacts.HouseholdsContactsShowError>`
- **Wire**: `GET /v1/households/{household}/contacts/{contact}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ContactResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `HouseholdContacts.HouseholdsContactsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HouseholdContacts.HouseholdsContactsShowRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `household` | `path` | `number` | yes |
| `contact` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactResource` | `contactResourceSchema` | `src/models/contact-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### householdsContactsStore

- **Signature**: `householdsContactsStore(request: HouseholdContacts.HouseholdsContactsStoreRequest, options?: RequestOptions): ApiPromise<AppHttpResourcesApiHouseholdResource, HouseholdContacts.HouseholdsContactsStoreError>`
- **Wire**: `POST /v1/households/{household}/contacts`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `HouseholdContacts.HouseholdsContactsStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HouseholdContacts.HouseholdsContactsStoreRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `household` | `path` | `number` | yes |
| `body` | `body` | `V1HouseholdsContactsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HouseholdsContactsRequest` | `v1HouseholdsContactsRequestSchema` | `src/models/v1-households-contacts-request.ts` |
| `AppHttpResourcesApiHouseholdResource` | `appHttpResourcesApiHouseholdResourceSchema` | `src/models/app-http-resources-api-household-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

