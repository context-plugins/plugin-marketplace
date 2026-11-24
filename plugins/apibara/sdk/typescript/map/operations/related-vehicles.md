<!-- Generated file — do not edit; regenerated with the SDK. -->

# RelatedVehicles — operations

Accessor: `client.relatedVehicles` · Source: `src/resources/related-vehicles.ts` · 1 operation · Request and error types: namespace `RelatedVehicles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRelatedVehicles

- **Signature**: `getRelatedVehicles(request: RelatedVehicles.GetRelatedVehiclesRequest, options?: RequestOptions): ApiPromise<VehicleListResponse, RelatedVehicles.GetRelatedVehiclesError>`
- **Wire**: `GET /vehicles/{slugVin}/related`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VehicleListResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `RelatedVehicles.GetRelatedVehiclesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `RelatedVehicles.GetRelatedVehiclesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slugVin` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VehicleListResponse` | `vehicleListResponseSchema` | `src/models/vehicle-list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

