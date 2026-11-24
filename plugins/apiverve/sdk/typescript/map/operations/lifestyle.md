<!-- Generated file — do not edit; regenerated with the SDK. -->

# Lifestyle — operations

Accessor: `client.lifestyle` · Source: `src/resources/lifestyle.ts` · 3 operations · Request and error types: namespace `Lifestyle`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### duedatecalculator

- **Signature**: `duedatecalculator(request: Lifestyle.DuedatecalculatorRequest, options?: RequestOptions): ApiPromise<V1DuedatecalculatorResponse, Lifestyle.DuedatecalculatorError>`
- **Wire**: `GET /v1/duedatecalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DuedatecalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Lifestyle.DuedatecalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lifestyle.DuedatecalculatorRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `lastPeriod` | `query` | `last_period` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DuedatecalculatorResponse` | `v1DuedatecalculatorResponseSchema` | `src/models/v1-duedatecalculator-response.ts` |

### menstrualcycle

- **Signature**: `menstrualcycle(request: Lifestyle.MenstrualcycleRequest, options?: RequestOptions): ApiPromise<V1MenstrualcycleResponse, Lifestyle.MenstrualcycleError>`
- **Wire**: `GET /v1/menstrualcycle`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MenstrualcycleResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Lifestyle.MenstrualcycleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lifestyle.MenstrualcycleRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `lastPeriod` | `query` | `last_period` | `string` | yes |
| `cycleLength` | `query` | `cycle_length` | `number` | no |
| `periodLength` | `query` | `period_length` | `number` | no |
| `cycles` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MenstrualcycleResponse` | `v1MenstrualcycleResponseSchema` | `src/models/v1-menstrualcycle-response.ts` |

### ovulationcalculator

- **Signature**: `ovulationcalculator(request: Lifestyle.OvulationcalculatorRequest, options?: RequestOptions): ApiPromise<V1OvulationcalculatorResponse, Lifestyle.OvulationcalculatorError>`
- **Wire**: `GET /v1/ovulationcalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1OvulationcalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Lifestyle.OvulationcalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Lifestyle.OvulationcalculatorRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `lastPeriod` | `query` | `last_period` | `string` | yes |
| `cycleLength` | `query` | `cycle_length` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OvulationcalculatorResponse` | `v1OvulationcalculatorResponseSchema` | `src/models/v1-ovulationcalculator-response.ts` |

