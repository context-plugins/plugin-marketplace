<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `src/resources/news.ts` · 1 operation · Request and error types: namespace `News`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getNews

- **Signature**: `getNews(request: News.GetNewsRequest, options?: RequestOptions): ApiPromise<GetNewsResponse, News.GetNewsError>`
- **Wire**: `GET /v2/news`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetNewsResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `News.GetNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse8"` [401] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetNewsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `category` | `query` | — | `string` | yes | — |
| `instrumentKeys` | `query` | `instrument_keys` | `string` | no | — |
| `pageNumber` | `query` | `page_number` | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetNewsResponse` | `getNewsResponseSchema` | `src/models/get-news-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

