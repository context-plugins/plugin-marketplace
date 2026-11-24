<!-- Generated file — do not edit; regenerated with the SDK. -->

# Overrides — operations

Accessor: `client.overrides` · Source: `src/resources/overrides.ts` · 6 operations · Request and error types: namespace `Overrides`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dev-cycle`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### overridesControllerDeleteOverridesForFeature

- **Signature**: `overridesControllerDeleteOverridesForFeature(request: Overrides.OverridesControllerDeleteOverridesForFeatureRequest, options?: RequestOptions): ApiPromise<undefined, Overrides.OverridesControllerDeleteOverridesForFeatureError>`
- **Wire**: `DELETE /v1/projects/{project}/features/{feature}/overrides/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Overrides.OverridesControllerDeleteOverridesForFeatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Overrides.OverridesControllerDeleteOverridesForFeatureRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `environment` | `query` | `string` | yes |

### overridesControllerDeleteOverridesForProject

- **Signature**: `overridesControllerDeleteOverridesForProject(request: Overrides.OverridesControllerDeleteOverridesForProjectRequest, options?: RequestOptions): ApiPromise<undefined, Overrides.OverridesControllerDeleteOverridesForProjectError>`
- **Wire**: `DELETE /v1/projects/{project}/overrides/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Overrides.OverridesControllerDeleteOverridesForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Overrides.OverridesControllerDeleteOverridesForProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |

### overridesControllerFindOne

- **Signature**: `overridesControllerFindOne(request: Overrides.OverridesControllerFindOneRequest, options?: RequestOptions): ApiPromise<OverrideResponse, Overrides.OverridesControllerFindOneError>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/overrides/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OverrideResponse`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Overrides.OverridesControllerFindOneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Overrides.OverridesControllerFindOneRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OverrideResponse` | `overrideResponseSchema` | `src/models/override-response.ts` |

### overridesControllerFindOverridesForFeature

- **Signature**: `overridesControllerFindOverridesForFeature(request: Overrides.OverridesControllerFindOverridesForFeatureRequest, options?: RequestOptions): ApiPromise<FeatureOverrides, Overrides.OverridesControllerFindOverridesForFeatureError>`
- **Wire**: `GET /v1/projects/{project}/features/{feature}/overrides`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FeatureOverrides`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Overrides.OverridesControllerFindOverridesForFeatureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Overrides.OverridesControllerFindOverridesForFeatureRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `addMetadata` | `query` | `boolean` | no |
| `environment` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FeatureOverrides` | `featureOverridesSchema` | `src/models/feature-overrides.ts` |

### overridesControllerFindOverridesForProject

- **Signature**: `overridesControllerFindOverridesForProject(request: Overrides.OverridesControllerFindOverridesForProjectRequest, options?: RequestOptions): ApiPromise<UserOverride[], Overrides.OverridesControllerFindOverridesForProjectError>`
- **Wire**: `GET /v1/projects/{project}/overrides/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserOverride[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Overrides.OverridesControllerFindOverridesForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Overrides.OverridesControllerFindOverridesForProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `project` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserOverride` | `userOverrideSchema` | `src/models/user-override.ts` |

### overridesControllerUpdateFeatureOverride

- **Signature**: `overridesControllerUpdateFeatureOverride(request: Overrides.OverridesControllerUpdateFeatureOverrideRequest, options?: RequestOptions): ApiPromise<Override, Overrides.OverridesControllerUpdateFeatureOverrideError>`
- **Wire**: `PUT /v1/projects/{project}/features/{feature}/overrides/current`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Override`
- **Error**: `DevCycleError` with `kind: "api"`, an instance of `Overrides.OverridesControllerUpdateFeatureOverrideError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestErrorResponse"` [400] `BadRequestErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Overrides.OverridesControllerUpdateFeatureOverrideRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `feature` | `path` | `string` | yes |
| `project` | `path` | `string` | yes |
| `body` | `body` | `UpdateOverrideDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateOverrideDto` | `updateOverrideDtoSchema` | `src/models/update-override-dto.ts` |
| `Override` | `overrideSchema` | `src/models/override.ts` |
| `BadRequestErrorResponse` | `badRequestErrorResponseSchema` | `src/models/bad-request-error-response.ts` |

