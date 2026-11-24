<!-- Generated file — do not edit; regenerated with the SDK. -->

# Websocket — operations

Accessor: `client.websocket` · Source: `src/resources/websocket.ts` · 4 operations · Request and error types: namespace `Websocket`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMarketDataFeed

- **Signature**: `getMarketDataFeed(options?: RequestOptions): ApiPromise<undefined, Websocket.GetMarketDataFeedError>`
- **Wire**: `GET /v2/feed/market-data-feed`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Websocket.GetMarketDataFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"error302"` [302] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getMarketDataFeedAuthorize

- **Signature**: `getMarketDataFeedAuthorize(options?: RequestOptions): ApiPromise<WebsocketAuthRedirectResponse, Websocket.GetMarketDataFeedAuthorizeError>`
- **Wire**: `GET /v2/feed/market-data-feed/authorize`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebsocketAuthRedirectResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Websocket.GetMarketDataFeedAuthorizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `WebsocketAuthRedirectResponse` | `websocketAuthRedirectResponseSchema` | `src/models/websocket-auth-redirect-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getPortfolioStreamFeed

- **Signature**: `getPortfolioStreamFeed(request?: Websocket.GetPortfolioStreamFeedRequest, options?: RequestOptions): ApiPromise<undefined, Websocket.GetPortfolioStreamFeedError>`
- **Wire**: `GET /v2/feed/portfolio-stream-feed`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Websocket.GetPortfolioStreamFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"error302"` [302] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Websocket.GetPortfolioStreamFeedRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `updateTypes` | `query` | `update_types` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getPortfolioStreamFeedAuthorize

- **Signature**: `getPortfolioStreamFeedAuthorize(request?: Websocket.GetPortfolioStreamFeedAuthorizeRequest, options?: RequestOptions): ApiPromise<WebsocketAuthRedirectResponse, Websocket.GetPortfolioStreamFeedAuthorizeError>`
- **Wire**: `GET /v2/feed/portfolio-stream-feed/authorize`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WebsocketAuthRedirectResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Websocket.GetPortfolioStreamFeedAuthorizeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Websocket.GetPortfolioStreamFeedAuthorizeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `updateTypes` | `query` | `update_types` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebsocketAuthRedirectResponse` | `websocketAuthRedirectResponseSchema` | `src/models/websocket-auth-redirect-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

