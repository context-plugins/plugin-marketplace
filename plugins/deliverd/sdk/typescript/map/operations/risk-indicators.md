<!-- Generated file — do not edit; regenerated with the SDK. -->

# RiskIndicators — operations

Accessor: `client.riskIndicators` · Source: `src/resources/risk-indicators.ts` · 2 operations · Request and error types: namespace `RiskIndicators`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1RiskIndicators

- **Signature**: `getApiV1RiskIndicators(request?: RiskIndicators.GetApiV1RiskIndicatorsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, RiskIndicators.GetApiV1RiskIndicatorsError>`
- **Wire**: `GET /api/v1/risk-indicators`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `RiskIndicators.GetApiV1RiskIndicatorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskIndicators.GetApiV1RiskIndicatorsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `period` | `query` | `string` | no |

### postApiV1RiskIndicatorsByKeyReadings

- **Signature**: `postApiV1RiskIndicatorsByKeyReadings(request: RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError>`
- **Wire**: `POST /api/v1/risk-indicators/{key}/readings`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `ApiV1RiskIndicatorsReadingsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1RiskIndicatorsReadingsRequest` | `apiV1RiskIndicatorsReadingsRequestSchema` | `src/models/api-v1-risk-indicators-readings-request.ts` |

