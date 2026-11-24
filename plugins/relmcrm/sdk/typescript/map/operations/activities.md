<!-- Generated file — do not edit; regenerated with the SDK. -->

# Activities — operations

Accessor: `client.activities` · Source: `src/resources/activities.ts` · 6 operations · Request types: namespace `Activities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `relm-crm`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createActivity

- **Signature**: `createActivity(request: Activities.CreateActivityRequest, options?: RequestOptions): ApiPromise<Activity, ApiError>`
- **Wire**: `POST /activities`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Activity`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Activities.CreateActivityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `ActivityInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActivityInput` | `activityInputSchema` | `src/models/activity-input.ts` |
| `Activity` | `activitySchema` | `src/models/activity.ts` |

### deleteActivity

- **Signature**: `deleteActivity(request: Activities.DeleteActivityRequest, options?: RequestOptions): ApiPromise<Deleted, ApiError>`
- **Wire**: `DELETE /activities/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Deleted`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Activities.DeleteActivityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Deleted` | `deletedSchema` | `src/models/deleted.ts` |

### getActivity

- **Signature**: `getActivity(request: Activities.GetActivityRequest, options?: RequestOptions): ApiPromise<Activity, ApiError>`
- **Wire**: `GET /activities/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Activity`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Activities.GetActivityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Activity` | `activitySchema` | `src/models/activity.ts` |

### listActivities

- **Signature**: `listActivities(request?: Activities.ListActivitiesRequest, options?: RequestOptions): ApiPromise<ActivityList, ApiError>`
- **Wire**: `GET /activities`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ActivityList`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Activities.ListActivitiesRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `25` |
| `cursor` | `query` | — | `string` | no | — |
| `includeDeleted` | `query` | `include_deleted` | `boolean` | no | — |
| `contactId` | `query` | `contact_id` | `string` | no | — |
| `dealId` | `query` | `deal_id` | `string` | no | — |
| `type` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActivityList` | `activityListSchema` | `src/models/activity-list.ts` |

### restoreActivity

- **Signature**: `restoreActivity(request: Activities.RestoreActivityRequest, options?: RequestOptions): ApiPromise<Activity, ApiError>`
- **Wire**: `POST /activities/{id}/restore`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Activity`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Activities.RestoreActivityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Activity` | `activitySchema` | `src/models/activity.ts` |

### updateActivity

- **Signature**: `updateActivity(request: Activities.UpdateActivityRequest, options?: RequestOptions): ApiPromise<Activity, ApiError>`
- **Wire**: `PATCH /activities/{id}`
- **Auth**: any of `bearerAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Activity`
- **Error**: `RelmCrmError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Activities.UpdateActivityRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `body` | `body` | — | `ActivityInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActivityInput` | `activityInputSchema` | `src/models/activity-input.ts` |
| `Activity` | `activitySchema` | `src/models/activity.ts` |

