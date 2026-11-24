<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostTrade — operations

Accessor: `client.postTrade` · Source: `src/resources/post-trade.ts` · 1 operation · Request and error types: namespace `PostTrade`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTradesByDateRange

- **Signature**: `getTradesByDateRange(request: PostTrade.GetTradesByDateRangeRequest, options?: RequestOptions): ApiPromise<TradeHistoryResponse, PostTrade.GetTradesByDateRangeError>`
- **Wire**: `GET /v2/charges/historical-trades`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TradeHistoryResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `PostTrade.GetTradesByDateRangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostTrade.GetTradesByDateRangeRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `startDate` | `query` | `start_date` | `string` | yes |
| `endDate` | `query` | `end_date` | `string` | yes |
| `pageNumber` | `query` | `page_number` | `number` | yes |
| `pageSize` | `query` | `page_size` | `number` | yes |
| `segment` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TradeHistoryResponse` | `tradeHistoryResponseSchema` | `src/models/trade-history-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

