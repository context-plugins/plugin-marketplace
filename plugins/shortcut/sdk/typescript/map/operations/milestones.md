<!-- Generated file — do not edit; regenerated with the SDK. -->

# Milestones — operations

Accessor: `client.milestones` · Source: `src/resources/milestones.ts` · 6 operations · Request and error types: namespace `Milestones`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMilestone

- **Signature**: `createMilestone(request: Milestones.CreateMilestoneRequest, options?: RequestOptions): ApiPromise<Milestone, Milestones.CreateMilestoneError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /api/v3/milestones`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Milestone`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Milestones.CreateMilestoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"unusableEntitlementError"` [403] `UnusableEntitlementError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Milestones.CreateMilestoneRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateMilestone` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMilestone` | `createMilestoneSchema` | `src/models/create-milestone.ts` |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |
| `UnusableEntitlementError` | `unusableEntitlementErrorSchema` | `src/models/unusable-entitlement-error.ts` |

### deleteMilestone

- **Signature**: `deleteMilestone(request: Milestones.DeleteMilestoneRequest, options?: RequestOptions): ApiPromise<undefined, Milestones.DeleteMilestoneError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /api/v3/milestones/{milestone-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Milestones.DeleteMilestoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Milestones.DeleteMilestoneRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `milestonePublicId` | `path` | `milestone-public-id` | `number` | yes |

### getMilestone

- **Signature**: `getMilestone(request: Milestones.GetMilestoneRequest, options?: RequestOptions): ApiPromise<Milestone, Milestones.GetMilestoneError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v3/milestones/{milestone-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Milestone`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Milestones.GetMilestoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Milestones.GetMilestoneRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `milestonePublicId` | `path` | `milestone-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |

### listMilestoneEpics

- **Signature**: `listMilestoneEpics(request: Milestones.ListMilestoneEpicsRequest, options?: RequestOptions): ApiPromise<EpicSlim[], Milestones.ListMilestoneEpicsError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v3/milestones/{milestone-public-id}/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Milestones.ListMilestoneEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Milestones.ListMilestoneEpicsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `milestonePublicId` | `path` | `milestone-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EpicSlim` | `epicSlimSchema` | `src/models/epic-slim.ts` |

### listMilestones

- **Signature**: `listMilestones(options?: RequestOptions): ApiPromise<Milestone[], Milestones.ListMilestonesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /api/v3/milestones`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Milestone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Milestones.ListMilestonesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |

### updateMilestone

- **Signature**: `updateMilestone(request: Milestones.UpdateMilestoneRequest, options?: RequestOptions): ApiPromise<Milestone, Milestones.UpdateMilestoneError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /api/v3/milestones/{milestone-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Milestone`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Milestones.UpdateMilestoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Milestones.UpdateMilestoneRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `milestonePublicId` | `path` | `milestone-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateMilestone` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMilestone` | `updateMilestoneSchema` | `src/models/update-milestone.ts` |
| `Milestone` | `milestoneSchema` | `src/models/milestone.ts` |

