<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoalRelationships — operations

Accessor: `client.goalRelationships` · Source: `src/resources/goal-relationships.ts` · 5 operations · Request and error types: namespace `GoalRelationships`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addSupportingRelationship

- **Signature**: `addSupportingRelationship(request: GoalRelationships.AddSupportingRelationshipRequest, options?: RequestOptions): ApiPromise<GoalsAddSupportingRelationshipResponse, GoalRelationships.AddSupportingRelationshipError>`
- **Wire**: `POST /goals/{goal_gid}/addSupportingRelationship`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsAddSupportingRelationshipResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `GoalRelationships.AddSupportingRelationshipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoalRelationships.AddSupportingRelationshipRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `GoalsAddSupportingRelationshipRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsAddSupportingRelationshipRequest` | `goalsAddSupportingRelationshipRequestSchema` | `src/models/goals-add-supporting-relationship-request.ts` |
| `GoalsAddSupportingRelationshipResponse` | `goalsAddSupportingRelationshipResponseSchema` | `src/models/goals-add-supporting-relationship-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getGoalRelationship

- **Signature**: `getGoalRelationship(request: GoalRelationships.GetGoalRelationshipRequest, options?: RequestOptions): ApiPromise<GoalRelationshipsResponse, GoalRelationships.GetGoalRelationshipError>`
- **Wire**: `GET /goal_relationships/{goal_relationship_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoalRelationshipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `GoalRelationships.GetGoalRelationshipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoalRelationships.GetGoalRelationshipRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalRelationshipGid` | `path` | `goal_relationship_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalRelationshipsResponse` | `goalRelationshipsResponseSchema` | `src/models/goal-relationships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getGoalRelationships

- **Signature**: `getGoalRelationships(request: GoalRelationships.GetGoalRelationshipsRequest, options?: RequestOptions): ApiPromise<GoalRelationshipsResponse2, GoalRelationships.GetGoalRelationshipsError>`
- **Wire**: `GET /goal_relationships`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoalRelationshipsResponse2`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `GoalRelationships.GetGoalRelationshipsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoalRelationships.GetGoalRelationshipsRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `supportedGoal` | `query` | `supported_goal` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `resourceSubtype` | `query` | `resource_subtype` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalRelationshipsResponse2` | `goalRelationshipsResponse2Schema` | `src/models/goal-relationships-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### removeSupportingRelationship

- **Signature**: `removeSupportingRelationship(request: GoalRelationships.RemoveSupportingRelationshipRequest, options?: RequestOptions): ApiPromise<GoalsRemoveSupportingRelationshipResponse, GoalRelationships.RemoveSupportingRelationshipError>`
- **Wire**: `POST /goals/{goal_gid}/removeSupportingRelationship`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalsRemoveSupportingRelationshipResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `GoalRelationships.RemoveSupportingRelationshipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoalRelationships.RemoveSupportingRelationshipRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalGid` | `path` | `goal_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `GoalsRemoveSupportingRelationshipRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalsRemoveSupportingRelationshipRequest` | `goalsRemoveSupportingRelationshipRequestSchema` | `src/models/goals-remove-supporting-relationship-request.ts` |
| `GoalsRemoveSupportingRelationshipResponse` | `goalsRemoveSupportingRelationshipResponseSchema` | `src/models/goals-remove-supporting-relationship-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateGoalRelationship

- **Signature**: `updateGoalRelationship(request: GoalRelationships.UpdateGoalRelationshipRequest, options?: RequestOptions): ApiPromise<GoalRelationshipsResponse, GoalRelationships.UpdateGoalRelationshipError>`
- **Wire**: `PUT /goal_relationships/{goal_relationship_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoalRelationshipsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `GoalRelationships.UpdateGoalRelationshipError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GoalRelationships.UpdateGoalRelationshipRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `goalRelationshipGid` | `path` | `goal_relationship_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `GoalRelationshipsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoalRelationshipsRequest` | `goalRelationshipsRequestSchema` | `src/models/goal-relationships-request.ts` |
| `GoalRelationshipsResponse` | `goalRelationshipsResponseSchema` | `src/models/goal-relationships-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

