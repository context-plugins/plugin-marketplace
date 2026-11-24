<!-- Generated file — do not edit; regenerated with the SDK. -->

# VehicleAuction — operations

Accessor: `client.vehicleAuction` · Source: `src/resources/vehicle-auction.ts` · 1 operation · Request and error types: namespace `VehicleAuction`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVehicleSellerReserve

- **Signature**: `getVehicleSellerReserve(request: VehicleAuction.GetVehicleSellerReserveRequest, options?: RequestOptions): ApiPromise<VehiclesReserveResponse, VehicleAuction.GetVehicleSellerReserveError>`
- **Wire**: `GET /vehicles/{slugVin}/reserve`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VehiclesReserveResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `VehicleAuction.GetVehicleSellerReserveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VehicleAuction.GetVehicleSellerReserveRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slugVin` | `path` | — | `string` | yes | — |
| `includeEvents` | `query` | `include_events` | `boolean` | no | `false` |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `VehiclesReserveResponse` | `vehiclesReserveResponseSchema` | `src/models/vehicles-reserve-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

