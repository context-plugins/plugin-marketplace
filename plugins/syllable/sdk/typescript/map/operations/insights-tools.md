<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsTools — operations

Accessor: `client.insightsTools` · Source: `src/resources/insights-tools.ts` · 7 operations · Request and error types: namespace `InsightsTools`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `syllable-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### insightToolGetById

- **Signature**: `insightToolGetById(request: InsightsTools.InsightToolGetByIdRequest, options?: RequestOptions): ApiPromise<InsightToolResponse, InsightsTools.InsightToolGetByIdError>`
- **Wire**: `GET /api/v1/insights/tool-configurations/{tool_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightToolResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsTools.InsightToolGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsTools.InsightToolGetByIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `toolId` | `path` | `tool_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightToolResponse` | `insightToolResponseSchema` | `src/models/insight-tool-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightToolGetDefinitions

- **Signature**: `insightToolGetDefinitions(options?: RequestOptions): ApiPromise<InsightToolDefinition[], ApiError>`
- **Wire**: `GET /api/v1/insights/tool-definitions`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightToolDefinition[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SyllableSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightToolDefinition` | `insightToolDefinitionSchema` | `src/models/insight-tool-definition.ts` |

### insightToolList

- **Signature**: `insightToolList(request: InsightsTools.InsightToolListRequest, options?: RequestOptions): ApiPromise<ListResponseInsightToolResponse, InsightsTools.InsightToolListError>`
- **Wire**: `GET /api/v1/insights/tool-configurations`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseInsightToolResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsTools.InsightToolListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsTools.InsightToolListRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `Page` | no | — |
| `limit` | `query` | — | `number` | no | `25` |
| `searchFields` | `query` | `search_fields` | `InsightToolProperties[]` | no | — |
| `searchFieldValues` | `query` | `search_field_values` | `string[]` | no | — |
| `orderBy` | `query` | `order_by` | `OrderBy311` | no | — |
| `orderByDirection` | `query` | `order_by_direction` | `OrderByDirection1` | no | — |
| `fields` | `query` | — | `Fields13` | no | — |
| `startDatetime` | `query` | `start_datetime` | `StartDatetime3` | no | — |
| `endDatetime` | `query` | `end_datetime` | `EndDatetime3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Page` | `pageSchema` | `src/models/unions/page.ts` |
| `InsightToolProperties` | `insightToolPropertiesSchema` | `src/models/insight-tool-properties.ts` |
| `OrderBy311` | `orderBy311Schema` | `src/models/unions/order-by311.ts` |
| `OrderByDirection1` | `orderByDirection1Schema` | `src/models/unions/order-by-direction1.ts` |
| `Fields13` | `fields13Schema` | `src/models/unions/fields13.ts` |
| `StartDatetime3` | `startDatetime3Schema` | `src/models/unions/start-datetime3.ts` |
| `EndDatetime3` | `endDatetime3Schema` | `src/models/unions/end-datetime3.ts` |
| `ListResponseInsightToolResponse` | `listResponseInsightToolResponseSchema` | `src/models/list-response-insight-tool-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsToolCreate

- **Signature**: `insightsToolCreate(request: InsightsTools.InsightsToolCreateRequest, options?: RequestOptions): ApiPromise<InsightToolResponse, InsightsTools.InsightsToolCreateError>`
- **Wire**: `POST /api/v1/insights/tool-configurations`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightToolResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsTools.InsightsToolCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsTools.InsightsToolCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightToolInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightToolInput` | `insightToolInputSchema` | `src/models/insight-tool-input.ts` |
| `InsightToolResponse` | `insightToolResponseSchema` | `src/models/insight-tool-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsToolDelete

- **Signature**: `insightsToolDelete(request: InsightsTools.InsightsToolDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, InsightsTools.InsightsToolDeleteError>`
- **Wire**: `DELETE /api/v1/insights/tool-configurations/{tool_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsTools.InsightsToolDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error412"` [412] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsTools.InsightsToolDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `toolId` | `path` | `tool_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsToolTest

- **Signature**: `insightsToolTest(request: InsightsTools.InsightsToolTestRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, InsightsTools.InsightsToolTestError>`
- **Wire**: `POST /api/v1/insights/tools-test`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsTools.InsightsToolTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"error502"` [502] no body · `"error504"` [504] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsTools.InsightsToolTestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightToolTestInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightToolTestInput` | `insightToolTestInputSchema` | `src/models/insight-tool-test-input.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### insightsToolUpdate

- **Signature**: `insightsToolUpdate(request: InsightsTools.InsightsToolUpdateRequest, options?: RequestOptions): ApiPromise<InsightToolResponse, InsightsTools.InsightsToolUpdateError>`
- **Wire**: `PUT /api/v1/insights/tool-configurations/{tool_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightToolResponse`
- **Error**: `SyllableSdkError` with `kind: "api"`, an instance of `InsightsTools.InsightsToolUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error412"` [412] no body · `"error500"` [500] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InsightsTools.InsightsToolUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `toolId` | `path` | `tool_id` | `number` | yes |
| `body` | `body` | — | `InsightToolInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightToolInput` | `insightToolInputSchema` | `src/models/insight-tool-input.ts` |
| `InsightToolResponse` | `insightToolResponseSchema` | `src/models/insight-tool-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

