<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vehicles — operations

Accessor: `client.Vehicles` · Source: `src/Apibara/Api/Vehicles.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetVehicleDetails

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetVehicleDetails(GetVehicleDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SlugVin`
- **Query params (wire ← C#)**: `include` ← `Include`
- **Returns**: `VehicleDetailsResponse`
- **Error**: `ApiException<GetVehicleDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVehicleDetailsRequest` | `src/Apibara/Requests/Vehicles/GetVehicleDetailsRequest.cs` |
| `VehicleDetailsResponse` | `src/Apibara/Models/VehicleDetailsResponse.cs` |
| `GetVehicleDetailsError` | `src/Apibara/Errors/GetVehicleDetailsError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

### ListAuctionVehicles

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListAuctionVehicles(ListAuctionVehiclesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `s` ← `S`, `lot_status` ← `LotStatus`, `lot_sub_status` ← `LotSubStatus`, `upcoming` ← `Upcoming`, `auction_date_pending` ← `AuctionDatePending`, `updated_within_minutes` ← `UpdatedWithinMinutes`, `price_min` ← `PriceMin`, `price_max` ← `PriceMax`, `year_from` ← `YearFrom`, `year_to` ← `YearTo`, `auction_type` ← `AuctionType`, `platform` ← `Platform`, `type` ← `Type`, `body_style` ← `BodyStyle`, `body_type` ← `BodyType`, `make` ← `Make`, `series` ← `Series`, `model` ← `Model`, `generation_id` ← `GenerationId`, `generation` ← `Generation`, `color` ← `Color`, `vin_prefix` ← `VinPrefix`, `fuel_type` ← `FuelType`, `odometer_from` ← `OdometerFrom`, `odometer_to` ← `OdometerTo`, `engine_size_from` ← `EngineSizeFrom`, `engine_size_to` ← `EngineSizeTo`, `engine_type` ← `EngineType`, `transmission` ← `Transmission`, `cylinders` ← `Cylinders`, `drive_type` ← `DriveType`, `run_cond` ← `RunCond`, `damage` ← `Damage`, `has_key` ← `HasKey`, `cursor` ← `Cursor`, `zip` ← `Zip`, `radius` ← `Radius`, `units` ← `Units`, `per_page` ← `PerPage`, `include_total` ← `IncludeTotal`, `facility_id` ← `FacilityId`, `loc_state` ← `LocState`, `office_name` ← `OfficeName`, `auction_date_from` ← `AuctionDateFrom`, `auction_date_to` ← `AuctionDateTo`, `today_only` ← `TodayOnly`, `sale_document_pending` ← `SaleDocumentPending`, `sale_document_type` ← `SaleDocumentType`, `seller_type` ← `SellerType`, `has_shipping_price` ← `HasShippingPrice`
- **Returns**: `VehicleListResponse`
- **Error**: `ApiException<ListAuctionVehiclesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401, 429, 500] · `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [403, 404, 422, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListAuctionVehiclesRequest` | `src/Apibara/Requests/Vehicles/ListAuctionVehiclesRequest.cs` |
| `LotStatus` | `src/Apibara/Models/Enums/LotStatus.cs` |
| `LotSubStatus` | `src/Apibara/Models/Enums/LotSubStatus.cs` |
| `Upcoming` | `src/Apibara/Models/Enums/Upcoming.cs` |
| `AuctionType` | `src/Apibara/Models/Enums/AuctionType.cs` |
| `Platform` | `src/Apibara/Models/Enums/Platform.cs` |
| `Type1` | `src/Apibara/Models/AnyOf/Type1.cs` |
| `BodyStyle` | `src/Apibara/Models/AnyOf/BodyStyle.cs` |
| `BodyType` | `src/Apibara/Models/AnyOf/BodyType.cs` |
| `Series` | `src/Apibara/Models/AnyOf/Series.cs` |
| `GenerationId` | `src/Apibara/Models/AnyOf/GenerationId.cs` |
| `Generation` | `src/Apibara/Models/AnyOf/Generation.cs` |
| `VinPrefix` | `src/Apibara/Models/AnyOf/VinPrefix.cs` |
| `FuelType` | `src/Apibara/Models/Enums/FuelType.cs` |
| `EngineType1` | `src/Apibara/Models/AnyOf/EngineType1.cs` |
| `Transmission` | `src/Apibara/Models/Enums/Transmission.cs` |
| `DriveType` | `src/Apibara/Models/Enums/DriveType.cs` |
| `RunCond1` | `src/Apibara/Models/AnyOf/RunCond1.cs` |
| `Damage` | `src/Apibara/Models/Enums/Damage.cs` |
| `HasKey` | `src/Apibara/Models/Enums/HasKey.cs` |
| `Units` | `src/Apibara/Models/Enums/Units.cs` |
| `LocState` | `src/Apibara/Models/AnyOf/LocState.cs` |
| `SellerType` | `src/Apibara/Models/Enums/SellerType.cs` |
| `VehicleListResponse` | `src/Apibara/Models/VehicleListResponse.cs` |
| `ListAuctionVehiclesError` | `src/Apibara/Errors/ListAuctionVehiclesError.cs` |
| `ApiErrorModel` | `src/Apibara/Models/ApiErrorModel.cs` |

