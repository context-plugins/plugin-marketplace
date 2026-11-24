<!-- Generated file — do not edit; regenerated with the SDK. -->

# VehicleHistory — operations

Accessor: `client.vehicleHistory` · Source: `src/resources/vehicle-history.ts` · 1 operation · Request and error types: namespace `VehicleHistory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVehicleHistory

- **Signature**: `getVehicleHistory(request: VehicleHistory.GetVehicleHistoryRequest, options?: RequestOptions): ApiPromise<VehicleHistoryResponse, VehicleHistory.GetVehicleHistoryError>`
- **Wire**: `GET /vehicles/{slugVin}/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VehicleHistoryResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `VehicleHistory.GetVehicleHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VehicleHistory.GetVehicleHistoryRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `slugVin` | `path` | — | `string` | yes | — |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `cursor` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `VehicleHistoryResponse` | `vehicleHistoryResponseSchema` | `src/models/vehicle-history-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

