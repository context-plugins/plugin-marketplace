<!-- Generated file — do not edit; regenerated with the SDK. -->

# Endpoints — operations

Accessor: `client.endpoints` · Source: `src/resources/endpoints.ts` · 1 operation · Request and error types: namespace `Endpoints`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dope-security`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchEndpoints

- **Signature**: `searchEndpoints(request?: Endpoints.SearchEndpointsRequest, options?: RequestOptions): ApiPromise<EndpointsSearchResponse, Endpoints.SearchEndpointsError>`
- **Wire**: `GET /endpoints/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EndpointsSearchResponse`
- **Error**: `DopeSecurityError` with `kind: "api"`, an instance of `Endpoints.SearchEndpointsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errors"` [400] `Errors` · `"errors2"` [403] `Errors` · `"errors3"` [500] `Errors` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Endpoints.SearchEndpointsRequest` (13):

| Field | Channel | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | `string` | no | — | — |
| `emailId` | `query` | `string` | no | — | — |
| `deviceName` | `query` | `string` | no | — | — |
| `userId` | `query` | `string` | no | — | — |
| `osVersion` | `query` | `string` | no | — | — |
| `status` | `query` | `Status[]` | no | — | `csv` |
| `debugState` | `query` | `DebugState[]` | no | — | `csv` |
| `fallbackMode` | `query` | `FallbackMode` | no | — | — |
| `locationId` | `query` | `string` | no | — | — |
| `agentVersion` | `query` | `string` | no | — | — |
| `first` | `query` | `number` | no | `50` | — |
| `after` | `query` | `string` | no | — | — |
| `order` | `query` | `Order` | no | — | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status` | `statusSchema` | `src/models/status.ts` |
| `DebugState` | `debugStateSchema` | `src/models/debug-state.ts` |
| `FallbackMode` | `fallbackModeSchema` | `src/models/fallback-mode.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `EndpointsSearchResponse` | `endpointsSearchResponseSchema` | `src/models/endpoints-search-response.ts` |
| `Errors` | `errorsSchema` | `src/models/errors.ts` |

