<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsApi — operations

Accessor: `client.insightsApi` · Source: `src/resources/insights-api.ts` · 1 operation · Request and error types: namespace `InsightsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### insightsList

- **Signature**: `insightsList(request: InsightsApi.InsightsListRequest, options?: RequestOptions): ApiPromise<ListResponseInsightsOutput, InsightsApi.InsightsListError>`
- **Wire**: `GET /api/v1/insights/`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseInsightsOutput`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsApi.InsightsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsApi.InsightsListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `InsightsProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy8` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields8` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `InsightsProperties` | `insightsPropertiesSchema` | `src/models/insights-properties.ts` |
| `OrderBy8` | `orderBy8Schema` | `src/models/unions/order-by8.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields8` | `fields8Schema` | `src/models/unions/fields8.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseInsightsOutput` | `listResponseInsightsOutputSchema` | `src/models/list-response-insights-output.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

