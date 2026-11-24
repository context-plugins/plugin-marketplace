<!-- Generated file — do not edit; regenerated with the SDK. -->

# RecurringPlans — operations

Accessor: `client.recurringPlans` · Source: `src/resources/recurring-plans.ts` · 2 operations · Request and error types: namespace `RecurringPlans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `givebutter`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### plansIndex

- **Signature**: `plansIndex(request?: RecurringPlans.PlansIndexRequest, options?: RequestOptions): ApiPromise<V1PlansResponse, RecurringPlans.PlansIndexError>`
- **Wire**: `GET /v1/plans`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PlansResponse`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `RecurringPlans.PlansIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationException1"` [422] `ValidationException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringPlans.PlansIndexRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contacts` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PlansResponse` | `v1PlansResponseSchema` | `src/models/v1-plans-response.ts` |
| `ValidationException1` | `validationException1Schema` | `src/models/validation-exception1.ts` |

### plansShow

- **Signature**: `plansShow(request: RecurringPlans.PlansShowRequest, options?: RequestOptions): ApiPromise<RecurringPlanResource, RecurringPlans.PlansShowError>`
- **Wire**: `GET /v1/plans/{plan}`
- **Auth**: `http`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RecurringPlanResource`
- **Error**: `GivebutterError` with `kind: "api"`, an instance of `RecurringPlans.PlansShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authorizationException1"` [403] `AuthorizationException1` · `"modelNotFoundException1"` [404] `ModelNotFoundException1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RecurringPlans.PlansShowRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `plan` | `path` | — | `string` | yes |
| `firstName` | `query` | `first_name` | `string` | no |
| `lastName` | `query` | `last_name` | `string` | no |
| `email` | `query` | — | `string` | no |
| `amount` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecurringPlanResource` | `recurringPlanResourceSchema` | `src/models/recurring-plan-resource.ts` |
| `AuthorizationException1` | `authorizationException1Schema` | `src/models/authorization-exception1.ts` |
| `ModelNotFoundException1` | `modelNotFoundException1Schema` | `src/models/model-not-found-exception1.ts` |

