<!-- Generated file — do not edit; regenerated with the SDK. -->

# Fundamentals — operations

Accessor: `client.fundamentals` · Source: `src/resources/fundamentals.ts` · 8 operations · Request and error types: namespace `Fundamentals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBalanceSheet

- **Signature**: `getBalanceSheet(request: Fundamentals.GetBalanceSheetRequest, options?: RequestOptions): ApiPromise<BalanceSheetResponse, Fundamentals.GetBalanceSheetError>`
- **Wire**: `GET /v2/fundamentals/{isin}/balance-sheet`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BalanceSheetResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Fundamentals.GetBalanceSheetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fundamentals.GetBalanceSheetRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `isin` | `path` | `string` | yes | — |
| `type` | `query` | `string` | no | `"consolidated"` |
| `fs` | `query` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `BalanceSheetResponse` | `balanceSheetResponseSchema` | `src/models/balance-sheet-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getCashFlow

- **Signature**: `getCashFlow(request: Fundamentals.GetCashFlowRequest, options?: RequestOptions): ApiPromise<CashFlowResponse, Fundamentals.GetCashFlowError>`
- **Wire**: `GET /v2/fundamentals/{isin}/cash-flow`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CashFlowResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Fundamentals.GetCashFlowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fundamentals.GetCashFlowRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `isin` | `path` | `string` | yes | — |
| `type` | `query` | `string` | no | `"consolidated"` |
| `fs` | `query` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CashFlowResponse` | `cashFlowResponseSchema` | `src/models/cash-flow-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getCompanyProfile

- **Signature**: `getCompanyProfile(request: Fundamentals.GetCompanyProfileRequest, options?: RequestOptions): ApiPromise<CompanyProfileResponse, Fundamentals.GetCompanyProfileError>`
- **Wire**: `GET /v2/fundamentals/{isin}/profile`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanyProfileResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Fundamentals.GetCompanyProfileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fundamentals.GetCompanyProfileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanyProfileResponse` | `companyProfileResponseSchema` | `src/models/company-profile-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getCompetitors

- **Signature**: `getCompetitors(request: Fundamentals.GetCompetitorsRequest, options?: RequestOptions): ApiPromise<CompetitorsResponse, Fundamentals.GetCompetitorsError>`
- **Wire**: `GET /v2/fundamentals/{instrument_key}/competitors`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompetitorsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Fundamentals.GetCompetitorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fundamentals.GetCompetitorsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `path` | `instrument_key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompetitorsResponse` | `competitorsResponseSchema` | `src/models/competitors-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getCorporateActions

- **Signature**: `getCorporateActions(request: Fundamentals.GetCorporateActionsRequest, options?: RequestOptions): ApiPromise<CorporateActionsResponse, Fundamentals.GetCorporateActionsError>`
- **Wire**: `GET /v2/fundamentals/{isin}/corporate-actions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CorporateActionsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Fundamentals.GetCorporateActionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fundamentals.GetCorporateActionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CorporateActionsResponse` | `corporateActionsResponseSchema` | `src/models/corporate-actions-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getIncomeStatement

- **Signature**: `getIncomeStatement(request: Fundamentals.GetIncomeStatementRequest, options?: RequestOptions): ApiPromise<IncomeStatementResponse, Fundamentals.GetIncomeStatementError>`
- **Wire**: `GET /v2/fundamentals/{isin}/income-statement`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IncomeStatementResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Fundamentals.GetIncomeStatementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fundamentals.GetIncomeStatementRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `isin` | `path` | — | `string` | yes | — |
| `type` | `query` | — | `string` | no | `"consolidated"` |
| `timePeriod` | `query` | `time_period` | `string` | no | `"yearly"` |
| `fs` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomeStatementResponse` | `incomeStatementResponseSchema` | `src/models/income-statement-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getKeyRatios

- **Signature**: `getKeyRatios(request: Fundamentals.GetKeyRatiosRequest, options?: RequestOptions): ApiPromise<KeyRatiosResponse, Fundamentals.GetKeyRatiosError>`
- **Wire**: `GET /v2/fundamentals/{isin}/key-ratios`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KeyRatiosResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Fundamentals.GetKeyRatiosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fundamentals.GetKeyRatiosRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `KeyRatiosResponse` | `keyRatiosResponseSchema` | `src/models/key-ratios-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getShareHoldings

- **Signature**: `getShareHoldings(request: Fundamentals.GetShareHoldingsRequest, options?: RequestOptions): ApiPromise<ShareHoldingsResponse, Fundamentals.GetShareHoldingsError>`
- **Wire**: `GET /v2/fundamentals/{isin}/share-holdings`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShareHoldingsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Fundamentals.GetShareHoldingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Fundamentals.GetShareHoldingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `isin` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShareHoldingsResponse` | `shareHoldingsResponseSchema` | `src/models/share-holdings-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

