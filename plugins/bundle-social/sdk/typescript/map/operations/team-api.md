<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamApi — operations

Accessor: `client.teamApi` · Source: `src/resources/team-api.ts` · 5 operations · Request and error types: namespace `TeamApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### teamCreateTeam

- **Signature**: `teamCreateTeam(request?: TeamApi.TeamCreateTeamRequest, options?: RequestOptions): ApiPromise<ApiV1TeamResponse1, TeamApi.TeamCreateTeamError>`
- **Wire**: `POST /api/v1/team/`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TeamResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `TeamApi.TeamCreateTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Team400Error1"` [400] `ApiV1Team400Error1` · `"apiV1Team401Error1"` [401] `ApiV1Team401Error1` · `"apiV1Team403Error1"` [403] `ApiV1Team403Error1` · `"apiV1Team404Error21"` [404] `ApiV1Team404Error21` · `"apiV1Team429Error1"` [429] `ApiV1Team429Error1` · `"apiV1Team500Error1"` [500] `ApiV1Team500Error1` · `"apiV1Team502Error1"` [502] `ApiV1Team502Error1` · `"apiV1Team503Error1"` [503] `ApiV1Team503Error1` · `"apiV1Team504Error1"` [504] `ApiV1Team504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamApi.TeamCreateTeamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1TeamRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TeamRequest1` | `apiV1TeamRequest1Schema` | `src/models/api-v1-team-request1.ts` |
| `ApiV1TeamResponse1` | `apiV1TeamResponse1Schema` | `src/models/api-v1-team-response1.ts` |
| `ApiV1Team400Error1` | `apiV1Team400Error1Schema` | `src/models/api-v1-team400-error1.ts` |
| `ApiV1Team401Error1` | `apiV1Team401Error1Schema` | `src/models/api-v1-team401-error1.ts` |
| `ApiV1Team403Error1` | `apiV1Team403Error1Schema` | `src/models/api-v1-team403-error1.ts` |
| `ApiV1Team404Error21` | `apiV1Team404Error21Schema` | `src/models/api-v1-team404-error21.ts` |
| `ApiV1Team429Error1` | `apiV1Team429Error1Schema` | `src/models/api-v1-team429-error1.ts` |
| `ApiV1Team500Error1` | `apiV1Team500Error1Schema` | `src/models/api-v1-team500-error1.ts` |
| `ApiV1Team502Error1` | `apiV1Team502Error1Schema` | `src/models/api-v1-team502-error1.ts` |
| `ApiV1Team503Error1` | `apiV1Team503Error1Schema` | `src/models/api-v1-team503-error1.ts` |
| `ApiV1Team504Error1` | `apiV1Team504Error1Schema` | `src/models/api-v1-team504-error1.ts` |

### teamDeleteTeam

- **Signature**: `teamDeleteTeam(request: TeamApi.TeamDeleteTeamRequest, options?: RequestOptions): ApiPromise<ApiV1TeamResponse1, TeamApi.TeamDeleteTeamError>`
- **Wire**: `DELETE /api/v1/team/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TeamResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `TeamApi.TeamDeleteTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Team400Error1"` [400] `ApiV1Team400Error1` · `"apiV1Team401Error1"` [401] `ApiV1Team401Error1` · `"apiV1Team403Error1"` [403] `ApiV1Team403Error1` · `"apiV1Team404Error21"` [404] `ApiV1Team404Error21` · `"apiV1Team429Error1"` [429] `ApiV1Team429Error1` · `"apiV1Team500Error1"` [500] `ApiV1Team500Error1` · `"apiV1Team502Error1"` [502] `ApiV1Team502Error1` · `"apiV1Team503Error1"` [503] `ApiV1Team503Error1` · `"apiV1Team504Error1"` [504] `ApiV1Team504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamApi.TeamDeleteTeamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TeamResponse1` | `apiV1TeamResponse1Schema` | `src/models/api-v1-team-response1.ts` |
| `ApiV1Team400Error1` | `apiV1Team400Error1Schema` | `src/models/api-v1-team400-error1.ts` |
| `ApiV1Team401Error1` | `apiV1Team401Error1Schema` | `src/models/api-v1-team401-error1.ts` |
| `ApiV1Team403Error1` | `apiV1Team403Error1Schema` | `src/models/api-v1-team403-error1.ts` |
| `ApiV1Team404Error21` | `apiV1Team404Error21Schema` | `src/models/api-v1-team404-error21.ts` |
| `ApiV1Team429Error1` | `apiV1Team429Error1Schema` | `src/models/api-v1-team429-error1.ts` |
| `ApiV1Team500Error1` | `apiV1Team500Error1Schema` | `src/models/api-v1-team500-error1.ts` |
| `ApiV1Team502Error1` | `apiV1Team502Error1Schema` | `src/models/api-v1-team502-error1.ts` |
| `ApiV1Team503Error1` | `apiV1Team503Error1Schema` | `src/models/api-v1-team503-error1.ts` |
| `ApiV1Team504Error1` | `apiV1Team504Error1Schema` | `src/models/api-v1-team504-error1.ts` |

### teamGetList

- **Signature**: `teamGetList(request?: TeamApi.TeamGetListRequest, options?: RequestOptions): ApiPromise<ApiV1TeamResponse3, TeamApi.TeamGetListError>`
- **Wire**: `GET /api/v1/team/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1TeamResponse3`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `TeamApi.TeamGetListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Team400Error1"` [400] `ApiV1Team400Error1` · `"apiV1Team401Error1"` [401] `ApiV1Team401Error1` · `"apiV1Team403Error1"` [403] `ApiV1Team403Error1` · `"apiV1Team404Error21"` [404] `ApiV1Team404Error21` · `"apiV1Team429Error1"` [429] `ApiV1Team429Error1` · `"apiV1Team500Error1"` [500] `ApiV1Team500Error1` · `"apiV1Team502Error1"` [502] `ApiV1Team502Error1` · `"apiV1Team503Error1"` [503] `ApiV1Team503Error1` · `"apiV1Team504Error1"` [504] `ApiV1Team504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamApi.TeamGetListRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |
| `search` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TeamResponse3` | `apiV1TeamResponse3Schema` | `src/models/api-v1-team-response3.ts` |
| `ApiV1Team400Error1` | `apiV1Team400Error1Schema` | `src/models/api-v1-team400-error1.ts` |
| `ApiV1Team401Error1` | `apiV1Team401Error1Schema` | `src/models/api-v1-team401-error1.ts` |
| `ApiV1Team403Error1` | `apiV1Team403Error1Schema` | `src/models/api-v1-team403-error1.ts` |
| `ApiV1Team404Error21` | `apiV1Team404Error21Schema` | `src/models/api-v1-team404-error21.ts` |
| `ApiV1Team429Error1` | `apiV1Team429Error1Schema` | `src/models/api-v1-team429-error1.ts` |
| `ApiV1Team500Error1` | `apiV1Team500Error1Schema` | `src/models/api-v1-team500-error1.ts` |
| `ApiV1Team502Error1` | `apiV1Team502Error1Schema` | `src/models/api-v1-team502-error1.ts` |
| `ApiV1Team503Error1` | `apiV1Team503Error1Schema` | `src/models/api-v1-team503-error1.ts` |
| `ApiV1Team504Error1` | `apiV1Team504Error1Schema` | `src/models/api-v1-team504-error1.ts` |

### teamGetTeam

- **Signature**: `teamGetTeam(request: TeamApi.TeamGetTeamRequest, options?: RequestOptions): ApiPromise<ApiV1TeamResponse, TeamApi.TeamGetTeamError>`
- **Wire**: `GET /api/v1/team/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1TeamResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `TeamApi.TeamGetTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Team400Error1"` [400] `ApiV1Team400Error1` · `"apiV1Team401Error1"` [401] `ApiV1Team401Error1` · `"apiV1Team403Error1"` [403] `ApiV1Team403Error1` · `"apiV1Team404Error1"` [404] `ApiV1Team404Error1` · `"apiV1Team429Error1"` [429] `ApiV1Team429Error1` · `"apiV1Team500Error1"` [500] `ApiV1Team500Error1` · `"apiV1Team502Error1"` [502] `ApiV1Team502Error1` · `"apiV1Team503Error1"` [503] `ApiV1Team503Error1` · `"apiV1Team504Error1"` [504] `ApiV1Team504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamApi.TeamGetTeamRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TeamResponse` | `apiV1TeamResponseSchema` | `src/models/api-v1-team-response.ts` |
| `ApiV1Team400Error1` | `apiV1Team400Error1Schema` | `src/models/api-v1-team400-error1.ts` |
| `ApiV1Team401Error1` | `apiV1Team401Error1Schema` | `src/models/api-v1-team401-error1.ts` |
| `ApiV1Team403Error1` | `apiV1Team403Error1Schema` | `src/models/api-v1-team403-error1.ts` |
| `ApiV1Team404Error1` | `apiV1Team404Error1Schema` | `src/models/api-v1-team404-error1.ts` |
| `ApiV1Team429Error1` | `apiV1Team429Error1Schema` | `src/models/api-v1-team429-error1.ts` |
| `ApiV1Team500Error1` | `apiV1Team500Error1Schema` | `src/models/api-v1-team500-error1.ts` |
| `ApiV1Team502Error1` | `apiV1Team502Error1Schema` | `src/models/api-v1-team502-error1.ts` |
| `ApiV1Team503Error1` | `apiV1Team503Error1Schema` | `src/models/api-v1-team503-error1.ts` |
| `ApiV1Team504Error1` | `apiV1Team504Error1Schema` | `src/models/api-v1-team504-error1.ts` |

### teamUpdateTeam

- **Signature**: `teamUpdateTeam(request: TeamApi.TeamUpdateTeamRequest, options?: RequestOptions): ApiPromise<ApiV1TeamResponse1, TeamApi.TeamUpdateTeamError>`
- **Wire**: `PATCH /api/v1/team/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1TeamResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `TeamApi.TeamUpdateTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Team400Error1"` [400] `ApiV1Team400Error1` · `"apiV1Team401Error1"` [401] `ApiV1Team401Error1` · `"apiV1Team403Error1"` [403] `ApiV1Team403Error1` · `"apiV1Team404Error21"` [404] `ApiV1Team404Error21` · `"apiV1Team429Error1"` [429] `ApiV1Team429Error1` · `"apiV1Team500Error1"` [500] `ApiV1Team500Error1` · `"apiV1Team502Error1"` [502] `ApiV1Team502Error1` · `"apiV1Team503Error1"` [503] `ApiV1Team503Error1` · `"apiV1Team504Error1"` [504] `ApiV1Team504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TeamApi.TeamUpdateTeamRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1TeamRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1TeamRequest` | `apiV1TeamRequestSchema` | `src/models/api-v1-team-request.ts` |
| `ApiV1TeamResponse1` | `apiV1TeamResponse1Schema` | `src/models/api-v1-team-response1.ts` |
| `ApiV1Team400Error1` | `apiV1Team400Error1Schema` | `src/models/api-v1-team400-error1.ts` |
| `ApiV1Team401Error1` | `apiV1Team401Error1Schema` | `src/models/api-v1-team401-error1.ts` |
| `ApiV1Team403Error1` | `apiV1Team403Error1Schema` | `src/models/api-v1-team403-error1.ts` |
| `ApiV1Team404Error21` | `apiV1Team404Error21Schema` | `src/models/api-v1-team404-error21.ts` |
| `ApiV1Team429Error1` | `apiV1Team429Error1Schema` | `src/models/api-v1-team429-error1.ts` |
| `ApiV1Team500Error1` | `apiV1Team500Error1Schema` | `src/models/api-v1-team500-error1.ts` |
| `ApiV1Team502Error1` | `apiV1Team502Error1Schema` | `src/models/api-v1-team502-error1.ts` |
| `ApiV1Team503Error1` | `apiV1Team503Error1Schema` | `src/models/api-v1-team503-error1.ts` |
| `ApiV1Team504Error1` | `apiV1Team504Error1Schema` | `src/models/api-v1-team504-error1.ts` |

