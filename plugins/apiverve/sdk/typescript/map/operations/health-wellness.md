<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthWellness — operations

Accessor: `client.healthWellness` · Source: `src/resources/health-wellness.ts` · 2 operations · Request and error types: namespace `HealthWellness`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bmicalculator

- **Signature**: `bmicalculator(request: HealthWellness.BmicalculatorRequest, options?: RequestOptions): ApiPromise<V1BmicalculatorResponse, HealthWellness.BmicalculatorError>`
- **Wire**: `GET /v1/bmicalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BmicalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `HealthWellness.BmicalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HealthWellness.BmicalculatorRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `weight` | `query` | `number` | yes |
| `height` | `query` | `number` | yes |
| `unit` | `query` | `string` | yes |
| `age` | `query` | `number` | no |
| `gender` | `query` | `string` | no |
| `activityLevel` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BmicalculatorResponse` | `v1BmicalculatorResponseSchema` | `src/models/v1-bmicalculator-response.ts` |

### exercises

- **Signature**: `exercises(request: HealthWellness.ExercisesRequest, options?: RequestOptions): ApiPromise<V1ExercisesResponse, HealthWellness.ExercisesError>`
- **Wire**: `GET /v1/exercises`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ExercisesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `HealthWellness.ExercisesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HealthWellness.ExercisesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `muscle` | `query` | `string` | yes |
| `name` | `query` | `string` | no |
| `equipment` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ExercisesResponse` | `v1ExercisesResponseSchema` | `src/models/v1-exercises-response.ts` |

