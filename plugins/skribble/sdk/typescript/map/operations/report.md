<!-- Generated file — do not edit; regenerated with the SDK. -->

# Report — operations

Accessor: `client.report` · Source: `src/resources/report.ts` · 1 operation · Request and error types: namespace `Report`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getActivitiesSignaturesByBusiness

- **Server**: `defaultSkribbleReportApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getActivitiesSignaturesByBusiness(request: Report.GetActivitiesSignaturesByBusinessRequest, options?: RequestOptions): ApiPromise<ActivitiesSignaturesByBusinessResponse, Report.GetActivitiesSignaturesByBusinessError>`
- **Wire**: `GET /activities/signatures`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ActivitiesSignaturesByBusinessResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `Report.GetActivitiesSignaturesByBusinessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Report.GetActivitiesSignaturesByBusinessRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `startDate` | `query` | `start_date` | `string` (date) | yes | — |
| `endDate` | `query` | `end_date` | `string` (date) | yes | — |
| `page` | `query` | — | `number` | no | `1` |
| `size` | `query` | — | `number` | no | `25` |
| `sort` | `query` | — | `Sort` | no | `Sort.Desc` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `ActivitiesSignaturesByBusinessResponse` | `activitiesSignaturesByBusinessResponseSchema` | `src/models/activities-signatures-by-business-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

