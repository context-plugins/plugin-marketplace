<!-- Generated file — do not edit; regenerated with the SDK. -->

# Instruments — operations

Accessor: `client.instruments` · Source: `src/resources/instruments.ts` · 1 operation · Request and error types: namespace `Instruments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchInstrument

- **Signature**: `searchInstrument(request: Instruments.SearchInstrumentRequest, options?: RequestOptions): ApiPromise<SearchInstrumentResponse, Instruments.SearchInstrumentError>`
- **Wire**: `GET /v2/instruments/search`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchInstrumentResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Instruments.SearchInstrumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Instruments.SearchInstrumentRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes | — |
| `exchanges` | `query` | — | `string` | no | — |
| `segments` | `query` | — | `string` | no | — |
| `instrumentTypes` | `query` | `instrument_types` | `string` | no | — |
| `expiry` | `query` | — | `string` | no | — |
| `atmOffset` | `query` | `atm_offset` | `number` | no | — |
| `pageNumber` | `query` | `page_number` | `number` | no | `1` |
| `records` | `query` | — | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchInstrumentResponse` | `searchInstrumentResponseSchema` | `src/models/search-instrument-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

