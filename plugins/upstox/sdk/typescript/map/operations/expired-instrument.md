<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExpiredInstrument — operations

Accessor: `client.expiredInstrument` · Source: `src/resources/expired-instrument.ts` · 4 operations · Request and error types: namespace `ExpiredInstrument`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getExpiredFutureContracts

- **Signature**: `getExpiredFutureContracts(request: ExpiredInstrument.GetExpiredFutureContractsRequest, options?: RequestOptions): ApiPromise<GetExpiredFuturesContractResponse, ExpiredInstrument.GetExpiredFutureContractsError>`
- **Wire**: `GET /v2/expired-instruments/future/contract`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetExpiredFuturesContractResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `ExpiredInstrument.GetExpiredFutureContractsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExpiredInstrument.GetExpiredFutureContractsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |
| `expiryDate` | `query` | `expiry_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetExpiredFuturesContractResponse` | `getExpiredFuturesContractResponseSchema` | `src/models/get-expired-futures-contract-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getExpiredHistoricalCandleData

- **Signature**: `getExpiredHistoricalCandleData(request: ExpiredInstrument.GetExpiredHistoricalCandleDataRequest, options?: RequestOptions): ApiPromise<GetHistoricalCandleResponse, ExpiredInstrument.GetExpiredHistoricalCandleDataError>`
- **Wire**: `GET /v2/expired-instruments/historical-candle/{expired_instrument_key}/{interval}/{to_date}/{from_date}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetHistoricalCandleResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `ExpiredInstrument.GetExpiredHistoricalCandleDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExpiredInstrument.GetExpiredHistoricalCandleDataRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `expiredInstrumentKey` | `path` | `expired_instrument_key` | `string` | yes |
| `interval` | `path` | — | `string` | yes |
| `toDate` | `path` | `to_date` | `string` | yes |
| `fromDate` | `path` | `from_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetHistoricalCandleResponse` | `getHistoricalCandleResponseSchema` | `src/models/get-historical-candle-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getExpiredOptionContracts

- **Signature**: `getExpiredOptionContracts(request: ExpiredInstrument.GetExpiredOptionContractsRequest, options?: RequestOptions): ApiPromise<GetOptionContractResponse, ExpiredInstrument.GetExpiredOptionContractsError>`
- **Wire**: `GET /v2/expired-instruments/option/contract`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOptionContractResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `ExpiredInstrument.GetExpiredOptionContractsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExpiredInstrument.GetExpiredOptionContractsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |
| `expiryDate` | `query` | `expiry_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOptionContractResponse` | `getOptionContractResponseSchema` | `src/models/get-option-contract-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getExpiriesResponse

- **Signature**: `getExpiriesResponse(request: ExpiredInstrument.GetExpiriesResponseRequest, options?: RequestOptions): ApiPromise<GetExpiriesResponse, ExpiredInstrument.GetExpiriesResponseError>`
- **Wire**: `GET /v2/expired-instruments/expiries`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetExpiriesResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `ExpiredInstrument.GetExpiriesResponseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExpiredInstrument.GetExpiriesResponseRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetExpiriesResponse` | `getExpiriesResponseSchema` | `src/models/get-expiries-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

