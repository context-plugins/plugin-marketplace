<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `src/resources/insights.ts` · 1 operation · Request and error types: namespace `Insights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getFormInsights

- **Signature**: `getFormInsights(request: Insights.GetFormInsightsRequest, options?: RequestOptions): ApiPromise<FormInsights, Insights.GetFormInsightsError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/insights`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FormInsights`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Insights.GetFormInsightsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Insights.GetFormInsightsRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `range` | `query` | `Range` | no |
| `q` | `query` | `string` | no |
| `source` | `query` | `string` | no |
| `respondent` | `query` | `string` | no |
| `where` | `query` | `string[]` | no |
| `by` | `query` | `string` | no |
| `op` | `query` | `Op` | no |
| `eq` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Range` | `rangeSchema` | `src/models/range.ts` |
| `Op` | `opSchema` | `src/models/op.ts` |
| `FormInsights` | `formInsightsSchema` | `src/models/form-insights.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

