<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskChecks — operations

Accessor: `client.riskChecks` · Source: `src/resources/risk-checks.ts` · 3 operations · Request and error types: namespace `RiskChecks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### numbersRiskChecksCreate

- **Signature**: `numbersRiskChecksCreate(request: RiskChecks.NumbersRiskChecksCreateRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersRiskChecksResponse1, RiskChecks.NumbersRiskChecksCreateError>`
- **Wire**: `POST /api/v2/numbers/risk_checks`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2NumbersRiskChecksResponse1`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `RiskChecks.NumbersRiskChecksCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersRiskChecks401Error1"` [401] `ApiV2NumbersRiskChecks401Error1` · `"apiV2NumbersRiskChecks403Error1"` [403] `ApiV2NumbersRiskChecks403Error1` · `"apiV2NumbersRiskChecksResponse21"` [422] `ApiV2NumbersRiskChecksResponse21` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskChecks.NumbersRiskChecksCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV2NumbersRiskChecksRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2NumbersRiskChecksRequest` | `apiV2NumbersRiskChecksRequestSchema` | `src/models/api-v2-numbers-risk-checks-request.ts` |
| `ApiV2NumbersRiskChecksResponse1` | `apiV2NumbersRiskChecksResponse1Schema` | `src/models/api-v2-numbers-risk-checks-response1.ts` |
| `ApiV2NumbersRiskChecks401Error1` | `apiV2NumbersRiskChecks401Error1Schema` | `src/models/api-v2-numbers-risk-checks401-error1.ts` |
| `ApiV2NumbersRiskChecks403Error1` | `apiV2NumbersRiskChecks403Error1Schema` | `src/models/api-v2-numbers-risk-checks403-error1.ts` |
| `ApiV2NumbersRiskChecksResponse21` | `apiV2NumbersRiskChecksResponse21Schema` | `src/models/unions/api-v2-numbers-risk-checks-response21.ts` |

### numbersRiskChecksIndex

- **Signature**: `numbersRiskChecksIndex(request?: RiskChecks.NumbersRiskChecksIndexRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersRiskChecksResponse, RiskChecks.NumbersRiskChecksIndexError>`
- **Wire**: `GET /api/v2/numbers/risk_checks`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersRiskChecksResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `RiskChecks.NumbersRiskChecksIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersRiskChecks401Error1"` [401] `ApiV2NumbersRiskChecks401Error1` · `"apiV2NumbersRiskChecks403Error1"` [403] `ApiV2NumbersRiskChecks403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskChecks.NumbersRiskChecksIndexRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `taskIds` | `query` | `task_ids` | `string` | no | — |
| `status` | `query` | — | `StatusDidlogicComRiskChecksApi` | no | — |
| `createdAtFrom` | `query` | `created_at_from` | `string` (date) | no | — |
| `createdAtTo` | `query` | `created_at_to` | `string` (date) | no | — |
| `processedAtFrom` | `query` | `processed_at_from` | `string` (date) | no | — |
| `processedAtTo` | `query` | `processed_at_to` | `string` (date) | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | — |
| `order` | `query` | — | `Order` | no | `Order.Desc` |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDidlogicComRiskChecksApi` | `statusDidlogicComRiskChecksApiSchema` | `src/models/status-didlogic-com-risk-checks-api.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `ApiV2NumbersRiskChecksResponse` | `apiV2NumbersRiskChecksResponseSchema` | `src/models/api-v2-numbers-risk-checks-response.ts` |
| `ApiV2NumbersRiskChecks401Error1` | `apiV2NumbersRiskChecks401Error1Schema` | `src/models/api-v2-numbers-risk-checks401-error1.ts` |
| `ApiV2NumbersRiskChecks403Error1` | `apiV2NumbersRiskChecks403Error1Schema` | `src/models/api-v2-numbers-risk-checks403-error1.ts` |

### numbersRiskChecksLogs

- **Signature**: `numbersRiskChecksLogs(request?: RiskChecks.NumbersRiskChecksLogsRequest, options?: RequestOptions): ApiPromise<ApiV2NumbersRiskChecksLogsResponse, RiskChecks.NumbersRiskChecksLogsError>`
- **Wire**: `GET /api/v2/numbers/risk_checks/logs`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2NumbersRiskChecksLogsResponse`
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `RiskChecks.NumbersRiskChecksLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV2NumbersRiskChecksLogs401Error1"` [401] `ApiV2NumbersRiskChecksLogs401Error1` · `"apiV2NumbersRiskChecksLogs403Error1"` [403] `ApiV2NumbersRiskChecksLogs403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskChecks.NumbersRiskChecksLogsRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `ids` | `query` | — | `string` | no | — |
| `taskIds` | `query` | `task_ids` | `number` | no | — |
| `number` | `query` | — | `string` | no | — |
| `status` | `query` | — | `StatusDidlogicComRiskChecksApi` | no | — |
| `riskLevel` | `query` | `risk_level` | `RiskLevel` | no | — |
| `createdAtFrom` | `query` | `created_at_from` | `string` (date) | no | — |
| `createdAtTo` | `query` | `created_at_to` | `string` (date) | no | — |
| `processedAtFrom` | `query` | `processed_at_from` | `string` (date) | no | — |
| `processedAtTo` | `query` | `processed_at_to` | `string` (date) | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | — |
| `order` | `query` | — | `Order` | no | `Order.Desc` |
| `page` | `query` | — | `number` | no | `1` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusDidlogicComRiskChecksApi` | `statusDidlogicComRiskChecksApiSchema` | `src/models/status-didlogic-com-risk-checks-api.ts` |
| `RiskLevel` | `riskLevelSchema` | `src/models/risk-level.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `ApiV2NumbersRiskChecksLogsResponse` | `apiV2NumbersRiskChecksLogsResponseSchema` | `src/models/api-v2-numbers-risk-checks-logs-response.ts` |
| `ApiV2NumbersRiskChecksLogs401Error1` | `apiV2NumbersRiskChecksLogs401Error1Schema` | `src/models/api-v2-numbers-risk-checks-logs401-error1.ts` |
| `ApiV2NumbersRiskChecksLogs403Error1` | `apiV2NumbersRiskChecksLogs403Error1Schema` | `src/models/api-v2-numbers-risk-checks-logs403-error1.ts` |

