<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vehicles — operations

Accessor: `client.vehicles` · Source: `src/resources/vehicles.ts` · 2 operations · Request and error types: namespace `Vehicles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getVehicleDetails

- **Signature**: `getVehicleDetails(request: Vehicles.GetVehicleDetailsRequest, options?: RequestOptions): ApiPromise<VehicleDetailsResponse, Vehicles.GetVehicleDetailsError>`
- **Wire**: `GET /vehicles/{slugVin}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VehicleDetailsResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `Vehicles.GetVehicleDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vehicles.GetVehicleDetailsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slugVin` | `path` | `string` | yes |
| `include` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VehicleDetailsResponse` | `vehicleDetailsResponseSchema` | `src/models/vehicle-details-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listAuctionVehicles

- **Signature**: `listAuctionVehicles(request?: Vehicles.ListAuctionVehiclesRequest, options?: RequestOptions): ApiPromise<VehicleListResponse, Vehicles.ListAuctionVehiclesError>`
- **Wire**: `GET /vehicles`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VehicleListResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `Vehicles.ListAuctionVehiclesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"apiErrorModel"` [404] `ApiErrorModel` · `"error429"` [429] no body · `"error500"` [500] no body · `"apiErrorModel2"` [403] `ApiErrorModel` · `"apiErrorModel3"` [422] `ApiErrorModel` · `"apiErrorModel4"` [503] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Vehicles.ListAuctionVehiclesRequest` (50):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `s` | `query` | — | `string` | no | — |
| `lotStatus` | `query` | `lot_status` | `LotStatus` | no | `LotStatus.All` |
| `lotSubStatus` | `query` | `lot_sub_status` | `LotSubStatus` | no | `LotSubStatus.Open` |
| `upcoming` | `query` | — | `Upcoming` | no | `Upcoming.All` |
| `auctionDatePending` | `query` | `auction_date_pending` | `boolean` | no | — |
| `updatedWithinMinutes` | `query` | `updated_within_minutes` | `number` | no | — |
| `priceMin` | `query` | `price_min` | `number` | no | — |
| `priceMax` | `query` | `price_max` | `number` | no | — |
| `yearFrom` | `query` | `year_from` | `number` | no | — |
| `yearTo` | `query` | `year_to` | `number` | no | — |
| `auctionType` | `query` | `auction_type` | `AuctionType` | no | `AuctionType._0` |
| `platform` | `query` | — | `Platform` | no | — |
| `type` | `query` | — | `Type1` | no | — |
| `bodyStyle` | `query` | `body_style` | `BodyStyle` | no | — |
| `bodyType` | `query` | `body_type` | `BodyType` | no | — |
| `make` | `query` | — | `string` | no | — |
| `series` | `query` | — | `Series` | no | — |
| `model` | `query` | — | `string` | no | — |
| `generationId` | `query` | `generation_id` | `GenerationId` | no | — |
| `generation` | `query` | — | `Generation` | no | — |
| `color` | `query` | — | `string[]` | no | — |
| `vinPrefix` | `query` | `vin_prefix` | `VinPrefix` | no | — |
| `fuelType` | `query` | `fuel_type` | `FuelType[]` | no | — |
| `odometerFrom` | `query` | `odometer_from` | `number` | no | — |
| `odometerTo` | `query` | `odometer_to` | `number` | no | — |
| `engineSizeFrom` | `query` | `engine_size_from` | `number` | no | — |
| `engineSizeTo` | `query` | `engine_size_to` | `number` | no | — |
| `engineType` | `query` | `engine_type` | `EngineType1` | no | — |
| `transmission` | `query` | — | `Transmission[]` | no | — |
| `cylinders` | `query` | — | `number[]` | no | — |
| `driveType` | `query` | `drive_type` | `DriveType[]` | no | — |
| `runCond` | `query` | `run_cond` | `RunCond1` | no | — |
| `damage` | `query` | — | `Damage[]` | no | — |
| `hasKey` | `query` | `has_key` | `HasKey` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `zip` | `query` | — | `string` | no | — |
| `radius` | `query` | — | `number` | no | — |
| `units` | `query` | — | `Units` | no | `Units.Mi` |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `includeTotal` | `query` | `include_total` | `boolean` | no | `false` |
| `facilityId` | `query` | `facility_id` | `string` | no | — |
| `locState` | `query` | `loc_state` | `LocState` | no | — |
| `officeName` | `query` | `office_name` | `string` | no | — |
| `auctionDateFrom` | `query` | `auction_date_from` | `string` (date) | no | — |
| `auctionDateTo` | `query` | `auction_date_to` | `string` (date) | no | — |
| `todayOnly` | `query` | `today_only` | `boolean` | no | `false` |
| `saleDocumentPending` | `query` | `sale_document_pending` | `boolean` | no | `false` |
| `saleDocumentType` | `query` | `sale_document_type` | `string` | no | — |
| `sellerType` | `query` | `seller_type` | `SellerType` | no | — |
| `hasShippingPrice` | `query` | `has_shipping_price` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `LotStatus` | `lotStatusSchema` | `src/models/lot-status.ts` |
| `LotSubStatus` | `lotSubStatusSchema` | `src/models/lot-sub-status.ts` |
| `Upcoming` | `upcomingSchema` | `src/models/upcoming.ts` |
| `AuctionType` | `auctionTypeSchema` | `src/models/auction-type.ts` |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `Type1` | `type1Schema` | `src/models/unions/type1.ts` |
| `BodyStyle` | `bodyStyleSchema` | `src/models/unions/body-style.ts` |
| `BodyType` | `bodyTypeSchema` | `src/models/unions/body-type.ts` |
| `Series` | `seriesSchema` | `src/models/unions/series.ts` |
| `GenerationId` | `generationIdSchema` | `src/models/unions/generation-id.ts` |
| `Generation` | `generationSchema` | `src/models/unions/generation.ts` |
| `VinPrefix` | `vinPrefixSchema` | `src/models/unions/vin-prefix.ts` |
| `FuelType` | `fuelTypeSchema` | `src/models/fuel-type.ts` |
| `EngineType1` | `engineType1Schema` | `src/models/unions/engine-type1.ts` |
| `Transmission` | `transmissionSchema` | `src/models/transmission.ts` |
| `DriveType` | `driveTypeSchema` | `src/models/drive-type.ts` |
| `RunCond1` | `runCond1Schema` | `src/models/unions/run-cond1.ts` |
| `Damage` | `damageSchema` | `src/models/damage.ts` |
| `HasKey` | `hasKeySchema` | `src/models/has-key.ts` |
| `Units` | `unitsSchema` | `src/models/units.ts` |
| `LocState` | `locStateSchema` | `src/models/unions/loc-state.ts` |
| `SellerType` | `sellerTypeSchema` | `src/models/seller-type.ts` |
| `VehicleListResponse` | `vehicleListResponseSchema` | `src/models/vehicle-list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

