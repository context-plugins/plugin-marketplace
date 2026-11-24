<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlTools — operations

Accessor: `client.urlTools` · Source: `src/resources/url-tools.ts` · 1 operation · Request and error types: namespace `UrlTools`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVehicleDetailsFromUrl

- **Signature**: `getVehicleDetailsFromUrl(request: UrlTools.GetVehicleDetailsFromUrlRequest, options?: RequestOptions): ApiPromise<VehicleDetailsResponse, UrlTools.GetVehicleDetailsFromUrlError>`
- **Wire**: `GET /vehicles/urltodetails`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VehicleDetailsResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `UrlTools.GetVehicleDetailsFromUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UrlTools.GetVehicleDetailsFromUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `url` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VehicleDetailsResponse` | `vehicleDetailsResponseSchema` | `src/models/vehicle-details-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

