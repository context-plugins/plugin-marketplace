<!-- Generated file — do not edit; regenerated with the SDK. -->

# TimePeriods — operations

Accessor: `client.timePeriods` · Source: `src/resources/time-periods.ts` · 2 operations · Request and error types: namespace `TimePeriods`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTimePeriod

- **Signature**: `getTimePeriod(request: TimePeriods.GetTimePeriodRequest, options?: RequestOptions): ApiPromise<TimePeriodsResponse, TimePeriods.GetTimePeriodError>`
- **Wire**: `GET /time_periods/{time_period_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TimePeriodsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `TimePeriods.GetTimePeriodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TimePeriods.GetTimePeriodRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `timePeriodGid` | `path` | `time_period_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimePeriodsResponse` | `timePeriodsResponseSchema` | `src/models/time-periods-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getTimePeriods

- **Signature**: `getTimePeriods(request: TimePeriods.GetTimePeriodsRequest, options?: RequestOptions): ApiPromise<TimePeriodsResponse1, TimePeriods.GetTimePeriodsError>`
- **Wire**: `GET /time_periods`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TimePeriodsResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `TimePeriods.GetTimePeriodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TimePeriods.GetTimePeriodsRequest` (7):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `workspace` | `query` | — | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `startOn` | `query` | `start_on` | `string` (date) | no | — |
| `endOn` | `query` | `end_on` | `string` (date) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimePeriodsResponse1` | `timePeriodsResponse1Schema` | `src/models/time-periods-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

