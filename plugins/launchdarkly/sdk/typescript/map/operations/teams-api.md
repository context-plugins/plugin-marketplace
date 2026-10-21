<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamsApi — operations

Accessor: `client.teamsApi` · Source: `src/resources/teams-api.ts` · 8 operations · Request and error types: namespace `TeamsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `launch-darkly-rest-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteTeam

- **Signature**: `deleteTeam(request: TeamsApi.DeleteTeamRequest, options?: RequestOptions): ApiPromise<undefined, TeamsApi.DeleteTeamError>`
- **Wire**: `DELETE /api/v2/teams/{teamKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsApi.DeleteTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsApi.DeleteTeamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamKey` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getTeam

- **Signature**: `getTeam(request: TeamsApi.GetTeamRequest, options?: RequestOptions): ApiPromise<Team, TeamsApi.GetTeamError>`
- **Wire**: `GET /api/v2/teams/{teamKey}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsApi.GetTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsApi.GetTeamRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamKey` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Team` | `teamSchema` | `src/models/team.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getTeamMaintainers

- **Signature**: `getTeamMaintainers(request: TeamsApi.GetTeamMaintainersRequest, options?: RequestOptions): ApiPromise<TeamMaintainers, TeamsApi.GetTeamMaintainersError>`
- **Wire**: `GET /api/v2/teams/{teamKey}/maintainers`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamMaintainers`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsApi.GetTeamMaintainersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsApi.GetTeamMaintainersRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamKey` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamMaintainers` | `teamMaintainersSchema` | `src/models/team-maintainers.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getTeamRoles

- **Signature**: `getTeamRoles(request: TeamsApi.GetTeamRolesRequest, options?: RequestOptions): ApiPromise<TeamCustomRoles, TeamsApi.GetTeamRolesError>`
- **Wire**: `GET /api/v2/teams/{teamKey}/roles`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamCustomRoles`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsApi.GetTeamRolesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"forbiddenErrorRep"` [403] `ForbiddenErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsApi.GetTeamRolesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamKey` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamCustomRoles` | `teamCustomRolesSchema` | `src/models/team-custom-roles.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `ForbiddenErrorRep` | `forbiddenErrorRepSchema` | `src/models/forbidden-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### getTeams

- **Signature**: `getTeams(request: TeamsApi.GetTeamsRequest, options?: RequestOptions): ApiPromise<Teams, TeamsApi.GetTeamsError>`
- **Wire**: `GET /api/v2/teams`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Teams`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsApi.GetTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsApi.GetTeamsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |
| `filter` | `query` | `string` | no |
| `expand` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Teams` | `teamsSchema` | `src/models/teams.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### patchTeam

- **Signature**: `patchTeam(request: TeamsApi.PatchTeamRequest, options?: RequestOptions): ApiPromise<Team, TeamsApi.PatchTeamError>`
- **Wire**: `PATCH /api/v2/teams/{teamKey}`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Team`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsApi.PatchTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"notFoundErrorRep"` [404] `NotFoundErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"statusConflictErrorRep"` [409] `StatusConflictErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsApi.PatchTeamRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamKey` | `path` | `string` | yes |
| `expand` | `query` | `string` | no |
| `body` | `body` | `TeamPatchInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamPatchInput` | `teamPatchInputSchema` | `src/models/team-patch-input.ts` |
| `Team` | `teamSchema` | `src/models/team.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `NotFoundErrorRep` | `notFoundErrorRepSchema` | `src/models/not-found-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `StatusConflictErrorRep` | `statusConflictErrorRepSchema` | `src/models/status-conflict-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postTeam

- **Signature**: `postTeam(request: TeamsApi.PostTeamRequest, options?: RequestOptions): ApiPromise<Team, TeamsApi.PostTeamError>`
- **Wire**: `POST /api/v2/teams`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Team`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsApi.PostTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsApi.PostTeamRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `expand` | `query` | `string` | no |
| `body` | `body` | `TeamPostInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamPostInput` | `teamPostInputSchema` | `src/models/team-post-input.ts` |
| `Team` | `teamSchema` | `src/models/team.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

### postTeamMembers

- **Signature**: `postTeamMembers(request: TeamsApi.PostTeamMembersRequest, options?: RequestOptions): ApiPromise<TeamImportsRep, TeamsApi.PostTeamMembersError>`
- **Wire**: `POST /api/v2/teams/{teamKey}/members`
- **Auth**: `apiKey`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TeamImportsRep`
- **Error**: `LaunchDarklyRestApiError` with `kind: "api"`, an instance of `TeamsApi.PostTeamMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"invalidRequestErrorRep"` [400] `InvalidRequestErrorRep` · `"unauthorizedErrorRep"` [401] `UnauthorizedErrorRep` · `"methodNotAllowedErrorRep"` [405] `MethodNotAllowedErrorRep` · `"rateLimitedErrorRep"` [429] `RateLimitedErrorRep` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamsApi.PostTeamMembersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `teamKey` | `path` | `string` | yes |
| `file` | `form` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TeamImportsRep` | `teamImportsRepSchema` | `src/models/team-imports-rep.ts` |
| `InvalidRequestErrorRep` | `invalidRequestErrorRepSchema` | `src/models/invalid-request-error-rep.ts` |
| `UnauthorizedErrorRep` | `unauthorizedErrorRepSchema` | `src/models/unauthorized-error-rep.ts` |
| `MethodNotAllowedErrorRep` | `methodNotAllowedErrorRepSchema` | `src/models/method-not-allowed-error-rep.ts` |
| `RateLimitedErrorRep` | `rateLimitedErrorRepSchema` | `src/models/rate-limited-error-rep.ts` |

