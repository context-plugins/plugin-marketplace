<!-- Generated file — do not edit; regenerated with the SDK. -->

# TradeProfitAndLoss — operations

Accessor: `client.tradeProfitAndLoss` · Source: `src/resources/trade-profit-and-loss.ts` · 3 operations · Request and error types: namespace `TradeProfitAndLoss`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProfitAndLossCharges

- **Signature**: `getProfitAndLossCharges(request: TradeProfitAndLoss.GetProfitAndLossChargesRequest, options?: RequestOptions): ApiPromise<GetProfitAndLossChargesResponse, TradeProfitAndLoss.GetProfitAndLossChargesError>`
- **Wire**: `GET /v2/trade/profit-loss/charges`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetProfitAndLossChargesResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `TradeProfitAndLoss.GetProfitAndLossChargesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeProfitAndLoss.GetProfitAndLossChargesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `segment` | `query` | — | `string` | yes |
| `financialYear` | `query` | `financial_year` | `string` | yes |
| `fromDate` | `query` | `from_date` | `string` | no |
| `toDate` | `query` | `to_date` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetProfitAndLossChargesResponse` | `getProfitAndLossChargesResponseSchema` | `src/models/get-profit-and-loss-charges-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getTradeWiseProfitAndLossData

- **Signature**: `getTradeWiseProfitAndLossData(request: TradeProfitAndLoss.GetTradeWiseProfitAndLossDataRequest, options?: RequestOptions): ApiPromise<GetTradeWiseProfitAndLossDataResponse, TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError>`
- **Wire**: `GET /v2/trade/profit-loss/data`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTradeWiseProfitAndLossDataResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeProfitAndLoss.GetTradeWiseProfitAndLossDataRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `segment` | `query` | — | `string` | yes |
| `financialYear` | `query` | `financial_year` | `string` | yes |
| `pageNumber` | `query` | `page_number` | `number` | yes |
| `pageSize` | `query` | `page_size` | `number` | yes |
| `fromDate` | `query` | `from_date` | `string` | no |
| `toDate` | `query` | `to_date` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTradeWiseProfitAndLossDataResponse` | `getTradeWiseProfitAndLossDataResponseSchema` | `src/models/get-trade-wise-profit-and-loss-data-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getTradeWiseProfitAndLossMetaData

- **Signature**: `getTradeWiseProfitAndLossMetaData(request: TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataRequest, options?: RequestOptions): ApiPromise<GetTradeWiseProfitAndLossMetaDataResponse, TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError>`
- **Wire**: `GET /v2/trade/profit-loss/metadata`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTradeWiseProfitAndLossMetaDataResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `segment` | `query` | — | `string` | yes |
| `financialYear` | `query` | `financial_year` | `string` | yes |
| `fromDate` | `query` | `from_date` | `string` | no |
| `toDate` | `query` | `to_date` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTradeWiseProfitAndLossMetaDataResponse` | `getTradeWiseProfitAndLossMetaDataResponseSchema` | `src/models/get-trade-wise-profit-and-loss-meta-data-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

