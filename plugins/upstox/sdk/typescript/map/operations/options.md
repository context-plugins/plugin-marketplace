<!-- Generated file — do not edit; regenerated with the SDK. -->

# Options — operations

Accessor: `client.options` · Source: `src/resources/options.ts` · 2 operations · Request and error types: namespace `Options`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `upstox`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getOptionContracts

- **Signature**: `getOptionContracts(request: Options.GetOptionContractsRequest, options?: RequestOptions): ApiPromise<GetOptionContractResponse, Options.GetOptionContractsError>`
- **Wire**: `GET /v2/option/contract`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOptionContractResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Options.GetOptionContractsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Options.GetOptionContractsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |
| `expiryDate` | `query` | `expiry_date` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOptionContractResponse` | `getOptionContractResponseSchema` | `src/models/get-option-contract-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

### getPutCallOptionChain

- **Signature**: `getPutCallOptionChain(request: Options.GetPutCallOptionChainRequest, options?: RequestOptions): ApiPromise<GetOptionChainResponse, Options.GetPutCallOptionChainError>`
- **Wire**: `GET /v2/option/chain`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetOptionChainResponse`
- **Error**: `UpstoxError` with `kind: "api"`, an instance of `Options.GetPutCallOptionChainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiGatewayErrorResponse"` [405] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse2"` [400] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse3"` [500] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse4"` [403] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse5"` [423] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse6"` [422] `ApiGatewayErrorResponse` · `"apiGatewayErrorResponse7"` [429] `ApiGatewayErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Options.GetPutCallOptionChainRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `instrumentKey` | `query` | `instrument_key` | `string` | yes |
| `expiryDate` | `query` | `expiry_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOptionChainResponse` | `getOptionChainResponseSchema` | `src/models/get-option-chain-response.ts` |
| `ApiGatewayErrorResponse` | `apiGatewayErrorResponseSchema` | `src/models/api-gateway-error-response.ts` |

