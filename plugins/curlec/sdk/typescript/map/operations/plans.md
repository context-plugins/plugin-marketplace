<!-- Generated file — do not edit; regenerated with the SDK. -->

# Plans — operations

Accessor: `client.plans` · Source: `src/resources/plans.ts` · 3 operations · Request and error types: namespace `Plans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPlan

- **Signature**: `createPlan(request: Plans.CreatePlanRequest, options?: RequestOptions): ApiPromise<Plan, Plans.CreatePlanError>`
- **Wire**: `POST /plans`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Plan`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Plans.CreatePlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.CreatePlanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlansRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlansRequest` | `plansRequestSchema` | `src/models/plans-request.ts` |
| `Plan` | `planSchema` | `src/models/plan.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchPlan

- **Signature**: `fetchPlan(request: Plans.FetchPlanRequest, options?: RequestOptions): ApiPromise<Plan, Plans.FetchPlanError>`
- **Wire**: `GET /plans/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Plan`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Plans.FetchPlanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.FetchPlanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Plan` | `planSchema` | `src/models/plan.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listPlans

- **Signature**: `listPlans(request?: Plans.ListPlansRequest, options?: RequestOptions): ApiPromise<PlansResponse, Plans.ListPlansError>`
- **Wire**: `GET /plans`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlansResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Plans.ListPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.ListPlansRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlansResponse` | `plansResponseSchema` | `src/models/plans-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

