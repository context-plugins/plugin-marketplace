<!-- Generated file — do not edit; regenerated with the SDK. -->

# Objectives — operations

Accessor: `client.objectives` · Source: `src/resources/objectives.ts` · 9 operations · Request and error types: namespace `Objectives`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createObjective

- **Signature**: `createObjective(request: Objectives.CreateObjectiveRequest, options?: RequestOptions): ApiPromise<Objective, Objectives.CreateObjectiveError>`
- **Wire**: `POST /api/v3/objectives`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Objective`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.CreateObjectiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"unusableEntitlementError"` [403] `UnusableEntitlementError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objectives.CreateObjectiveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateObjective` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateObjective` | `createObjectiveSchema` | `src/models/create-objective.ts` |
| `Objective` | `objectiveSchema` | `src/models/objective.ts` |
| `UnusableEntitlementError` | `unusableEntitlementErrorSchema` | `src/models/unusable-entitlement-error.ts` |

### createObjectiveHealth

- **Signature**: `createObjectiveHealth(request: Objectives.CreateObjectiveHealthRequest, options?: RequestOptions): ApiPromise<Health, Objectives.CreateObjectiveHealthError>`
- **Wire**: `POST /api/v3/objectives/{objective-public-id}/health`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Health`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.CreateObjectiveHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objectives.CreateObjectiveHealthRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |
| `body` | `body` | — | `CreateObjectiveHealth` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateObjectiveHealth` | `createObjectiveHealthSchema` | `src/models/create-objective-health.ts` |
| `Health` | `healthSchema` | `src/models/health.ts` |

### deleteObjective

- **Signature**: `deleteObjective(request: Objectives.DeleteObjectiveRequest, options?: RequestOptions): ApiPromise<undefined, Objectives.DeleteObjectiveError>`
- **Wire**: `DELETE /api/v3/objectives/{objective-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.DeleteObjectiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objectives.DeleteObjectiveRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

### getObjective

- **Signature**: `getObjective(request: Objectives.GetObjectiveRequest, options?: RequestOptions): ApiPromise<Objective, Objectives.GetObjectiveError>`
- **Wire**: `GET /api/v3/objectives/{objective-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Objective`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.GetObjectiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objectives.GetObjectiveRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Objective` | `objectiveSchema` | `src/models/objective.ts` |

### getObjectiveHealth

- **Signature**: `getObjectiveHealth(request: Objectives.GetObjectiveHealthRequest, options?: RequestOptions): ApiPromise<Health, Objectives.GetObjectiveHealthError>`
- **Wire**: `GET /api/v3/objectives/{objective-public-id}/health`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.GetObjectiveHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objectives.GetObjectiveHealthRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |

### listObjectiveEpics

- **Signature**: `listObjectiveEpics(request: Objectives.ListObjectiveEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], Objectives.ListObjectiveEpicsError>`
- **Wire**: `GET /api/v3/objectives/{objective-public-id}/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.ListObjectiveEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objectives.ListObjectiveEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |

### listObjectiveHealths

- **Signature**: `listObjectiveHealths(request: Objectives.ListObjectiveHealthsRequest, options?: RequestOptions): ApiPromise<Health[], Objectives.ListObjectiveHealthsError>`
- **Wire**: `GET /api/v3/objectives/{objective-public-id}/health-history`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.ListObjectiveHealthsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objectives.ListObjectiveHealthsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |

### listObjectives

- **Signature**: `listObjectives(options?: RequestOptions): ApiPromise<Objective[], Objectives.ListObjectivesError>`
- **Wire**: `GET /api/v3/objectives`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Objective[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.ListObjectivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Objective` | `objectiveSchema` | `src/models/objective.ts` |

### updateObjective

- **Signature**: `updateObjective(request: Objectives.UpdateObjectiveRequest, options?: RequestOptions): ApiPromise<Objective, Objectives.UpdateObjectiveError>`
- **Wire**: `PUT /api/v3/objectives/{objective-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Objective`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Objectives.UpdateObjectiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Objectives.UpdateObjectiveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectivePublicId` | `path` | `objective-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateObjective` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateObjective` | `updateObjectiveSchema` | `src/models/update-objective.ts` |
| `Objective` | `objectiveSchema` | `src/models/objective.ts` |

