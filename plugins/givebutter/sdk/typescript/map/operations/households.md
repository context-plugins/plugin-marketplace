<!-- Generated file — do not edit; regenerated with the SDK. -->

# Households — operations

Accessor: `client.households` · Source: `src/resources/households.ts` · 5 operations · Request and error types: namespace `Households`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### householdsDestroy

- **Signature**: `householdsDestroy(request: Households.HouseholdsDestroyRequest, options?: RequestOptions): ApiPromise<undefined, Households.HouseholdsDestroyError>`
- **Wire**: `DELETE /v1/households/{household}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Households.HouseholdsDestroyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Households.HouseholdsDestroyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `household` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### householdsIndex

- **Signature**: `householdsIndex(request?: Households.HouseholdsIndexRequest, options?: RequestOptions): ApiPromise<HouseholdResource[], Households.HouseholdsIndexError>`
- **Wire**: `GET /v1/households`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `HouseholdResource[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Households.HouseholdsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Households.HouseholdsIndexRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `headContactId` | `query` | `string` | no | — |
| `contacts` | `query` | `string` | no | — |
| `query` | `query` | `string` | no | — |
| `sortBy` | `query` | `string` | no | — |
| `sortByDesc` | `query` | `string` | no | — |
| `page` | `query` | `string` | no | `"1"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `HouseholdResource` | `householdResourceSchema` | `src/models/household-resource.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### householdsShow

- **Signature**: `householdsShow(request: Households.HouseholdsShowRequest, options?: RequestOptions): ApiPromise<AppHttpResourcesApiHouseholdResource, Households.HouseholdsShowError>`
- **Wire**: `GET /v1/households/{household}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Households.HouseholdsShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Households.HouseholdsShowRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `household` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppHttpResourcesApiHouseholdResource` | `appHttpResourcesApiHouseholdResourceSchema` | `src/models/app-http-resources-api-household-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

### householdsStore

- **Signature**: `householdsStore(request: Households.HouseholdsStoreRequest, options?: RequestOptions): ApiPromise<AppHttpResourcesApiHouseholdResource, Households.HouseholdsStoreError>`
- **Wire**: `POST /v1/households`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Households.HouseholdsStoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Households.HouseholdsStoreRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `HouseholdStoreRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HouseholdStoreRequest` | `householdStoreRequestSchema` | `src/models/household-store-request.ts` |
| `AppHttpResourcesApiHouseholdResource` | `appHttpResourcesApiHouseholdResourceSchema` | `src/models/app-http-resources-api-household-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### householdsUpdate

- **Signature**: `householdsUpdate(request: Households.HouseholdsUpdateRequest, options?: RequestOptions): ApiPromise<AppHttpResourcesApiHouseholdResource, Households.HouseholdsUpdateError>`
- **Wire**: `PUT /v1/households/{household}`
- **Auth**: `http`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AppHttpResourcesApiHouseholdResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `Households.HouseholdsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Households.HouseholdsUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `household` | `path` | `number` | yes |
| `body` | `body` | `HouseholdUpdateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HouseholdUpdateRequest` | `householdUpdateRequestSchema` | `src/models/household-update-request.ts` |
| `AppHttpResourcesApiHouseholdResource` | `appHttpResourcesApiHouseholdResourceSchema` | `src/models/app-http-resources-api-household-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

