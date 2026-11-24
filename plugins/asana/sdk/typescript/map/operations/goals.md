<!-- Generated file — do not edit; regenerated with the SDK. -->

# Goals — operations

Accessor: `client.goals` · Source: `src/resources/goals.ts` · 10 operations · Request and error types: namespace `Goals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addFollowers

- **Signature**: `addFollowers(request: Goals.AddFollowersRequestParams, options?: RequestOptions): ApiPromise<GoalsAddFollowersResponse, Goals.AddFollowersError>`
- **Wire**: `POST /goals/{goal_gid}/addFollowers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsAddFollowersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.AddFollowersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.AddFollowersRequestParams` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `GoalsAddFollowersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsAddFollowersRequest` | `goalsAddFollowersRequestSchema` | `src/models/goals-add-followers-request.ts` |
| `GoalsAddFollowersResponse` | `goalsAddFollowersResponseSchema` | `src/models/goals-add-followers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createGoal

- **Signature**: `createGoal(request: Goals.CreateGoalRequest, options?: RequestOptions): ApiPromise<GoalsResponse, Goals.CreateGoalError>`
- **Wire**: `POST /goals`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.CreateGoalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.CreateGoalRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `body` | `body` | — | `GoalsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsRequest` | `goalsRequestSchema` | `src/models/goals-request.ts` |
| `GoalsResponse` | `goalsResponseSchema` | `src/models/goals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createGoalMetric

- **Signature**: `createGoalMetric(request: Goals.CreateGoalMetricRequest, options?: RequestOptions): ApiPromise<GoalsSetMetricResponse, Goals.CreateGoalMetricError>`
- **Wire**: `POST /goals/{goal_gid}/setMetric`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsSetMetricResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.CreateGoalMetricError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.CreateGoalMetricRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `GoalsSetMetricRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsSetMetricRequest` | `goalsSetMetricRequestSchema` | `src/models/goals-set-metric-request.ts` |
| `GoalsSetMetricResponse` | `goalsSetMetricResponseSchema` | `src/models/goals-set-metric-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteGoal

- **Signature**: `deleteGoal(request: Goals.DeleteGoalRequest, options?: RequestOptions): ApiPromise<GoalsResponse2, Goals.DeleteGoalError>`
- **Wire**: `DELETE /goals/{goal_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsResponse2`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.DeleteGoalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.DeleteGoalRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsResponse2` | `goalsResponse2Schema` | `src/models/goals-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getGoal

- **Signature**: `getGoal(request: Goals.GetGoalRequest, options?: RequestOptions): ApiPromise<GoalsResponse, Goals.GetGoalError>`
- **Wire**: `GET /goals/{goal_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoalsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.GetGoalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.GetGoalRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsResponse` | `goalsResponseSchema` | `src/models/goals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getGoals

- **Signature**: `getGoals(request?: Goals.GetGoalsRequest, options?: RequestOptions): ApiPromise<GoalsResponse3, Goals.GetGoalsError>`
- **Wire**: `GET /goals`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoalsResponse3`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.GetGoalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.GetGoalsRequest` (10):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `portfolio` | `query` | — | `string` | no | — |
| `project` | `query` | — | `string` | no | — |
| `isWorkspaceLevel` | `query` | `is_workspace_level` | `boolean` | no | — |
| `team` | `query` | — | `string` | no | — |
| `workspace` | `query` | — | `string` | no | — |
| `timePeriods` | `query` | `time_periods` | `string[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsResponse3` | `goalsResponse3Schema` | `src/models/goals-response3.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getParentGoalsForGoal

- **Signature**: `getParentGoalsForGoal(request: Goals.GetParentGoalsForGoalRequest, options?: RequestOptions): ApiPromise<GoalsParentGoalsResponse, Goals.GetParentGoalsForGoalError>`
- **Wire**: `GET /goals/{goal_gid}/parentGoals`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoalsParentGoalsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.GetParentGoalsForGoalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.GetParentGoalsForGoalRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsParentGoalsResponse` | `goalsParentGoalsResponseSchema` | `src/models/goals-parent-goals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeFollowers

- **Signature**: `removeFollowers(request: Goals.RemoveFollowersRequestParams, options?: RequestOptions): ApiPromise<GoalsRemoveFollowersResponse, Goals.RemoveFollowersError>`
- **Wire**: `POST /goals/{goal_gid}/removeFollowers`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsRemoveFollowersResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.RemoveFollowersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.RemoveFollowersRequestParams` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `GoalsRemoveFollowersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsRemoveFollowersRequest` | `goalsRemoveFollowersRequestSchema` | `src/models/goals-remove-followers-request.ts` |
| `GoalsRemoveFollowersResponse` | `goalsRemoveFollowersResponseSchema` | `src/models/goals-remove-followers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateGoal

- **Signature**: `updateGoal(request: Goals.UpdateGoalRequest, options?: RequestOptions): ApiPromise<GoalsResponse, Goals.UpdateGoalError>`
- **Wire**: `PUT /goals/{goal_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.UpdateGoalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.UpdateGoalRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `GoalsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsRequest` | `goalsRequestSchema` | `src/models/goals-request.ts` |
| `GoalsResponse` | `goalsResponseSchema` | `src/models/goals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateGoalMetric

- **Signature**: `updateGoalMetric(request: Goals.UpdateGoalMetricRequest, options?: RequestOptions): ApiPromise<GoalsSetMetricCurrentValueResponse, Goals.UpdateGoalMetricError>`
- **Wire**: `POST /goals/{goal_gid}/setMetricCurrentValue`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsSetMetricCurrentValueResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Goals.UpdateGoalMetricError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Goals.UpdateGoalMetricRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `GoalsSetMetricCurrentValueRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsSetMetricCurrentValueRequest` | `goalsSetMetricCurrentValueRequestSchema` | `src/models/goals-set-metric-current-value-request.ts` |
| `GoalsSetMetricCurrentValueResponse` | `goalsSetMetricCurrentValueResponseSchema` | `src/models/goals-set-metric-current-value-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

