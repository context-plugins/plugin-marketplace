<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shipping — operations

Accessor: `client.shipping` · Source: `src/resources/shipping.ts` · 2 operations · Request and error types: namespace `Shipping`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAuctionToPortShipping

- **Signature**: `getAuctionToPortShipping(request?: Shipping.GetAuctionToPortShippingRequest, options?: RequestOptions): ApiPromise<ShippingResponse, Shipping.GetAuctionToPortShippingError>`
- **Wire**: `GET /shipping/auction-to-port`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShippingResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `Shipping.GetAuctionToPortShippingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.GetAuctionToPortShippingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vin` | `query` | — | `string` | no |
| `lotNumber` | `query` | `lot_number` | `string` | no |
| `ports` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShippingResponse` | `shippingResponseSchema` | `src/models/shipping-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### getVehicleShipping

- **Signature**: `getVehicleShipping(request: Shipping.GetVehicleShippingRequest, options?: RequestOptions): ApiPromise<ShippingResponse, Shipping.GetVehicleShippingError>`
- **Wire**: `GET /vehicles/{slugVin}/shipping`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ShippingResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `Shipping.GetVehicleShippingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Shipping.GetVehicleShippingRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slugVin` | `path` | `string` | yes |
| `ports` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ShippingResponse` | `shippingResponseSchema` | `src/models/shipping-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

