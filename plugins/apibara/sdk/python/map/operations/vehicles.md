<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vehicles — operations

Accessor: `client.vehicles` · Source: `apibara/apis/vehicles.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.vehicles.get_vehicle_details

- **Route**: `GET /vehicles/{slugVin}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_vehicle_details(slug_vin: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug_vin`
- **Params**: `slug_vin` — path `slugVin` · `include` — query
- **Returns (parsed)**: `VehicleDetailsResponse`
- **Returns (raw)**: `ApiResult[VehicleDetailsResponse, GetVehicleDetailsErrorBody]`
- **Error**: `GetVehicleDetailsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `VehicleDetailsResponse` | `apibara/models/vehicle_details_response.py` |
| `GetVehicleDetailsErrorBody` | `apibara/errors/get_vehicle_details_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

### client.vehicles.list_auction_vehicles

- **Route**: `GET /vehicles`
- **Auth**: `api_key_auth`
- **Signature**: `def list_auction_vehicles(*, s: str | None = None, lot_status: LotStatusOrStr | None = LotStatus.ALL, lot_sub_status: LotSubStatusOrStr | None = LotSubStatus.OPEN, upcoming: UpcomingOrStr | None = Upcoming.ALL, auction_date_pending: bool | None = None, updated_within_minutes: int | None = None, price_min: float | None = None, price_max: float | None = None, year_from: int | None = None, year_to: int | None = None, auction_type: AuctionTypeOrInt | None = AuctionType.VALUE_0, platform: PlatformOrStr | None = None, type_: Type1 | Type1Dict | None = None, body_style: BodyStyle | BodyStyleDict | None = None, body_type: BodyType | BodyTypeDict | None = None, make: str | None = None, series: Series | SeriesDict | None = None, model: str | None = None, generation_id: GenerationId | GenerationIdDict | None = None, generation: Generation | GenerationDict | None = None, color: list[str] | None = None, vin_prefix: VinPrefix | VinPrefixDict | None = None, fuel_type: list[FuelTypeOrStr] | None = None, odometer_from: float | None = None, odometer_to: float | None = None, engine_size_from: float | None = None, engine_size_to: float | None = None, engine_type: EngineType1 | EngineType1Dict | None = None, transmission: list[TransmissionOrStr] | None = None, cylinders: list[int] | None = None, drive_type: list[DriveTypeOrStr] | None = None, run_cond: RunCond1 | RunCond1Dict | None = None, damage: list[DamageOrStr] | None = None, has_key: HasKeyOrStr | None = None, cursor: str | None = None, zip_: str | None = None, radius: float | None = None, units: UnitsOrStr | None = Units.MI, per_page: int | None = 20, include_total: bool | None = False, facility_id: str | None = None, loc_state: LocState | LocStateDict | None = None, office_name: str | None = None, auction_date_from: Date | None = None, auction_date_to: Date | None = None, today_only: bool | None = False, sale_document_pending: bool | None = False, sale_document_type: str | None = None, seller_type: SellerTypeOrStr | None = None, has_shipping_price: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `s` — query · `lot_status` — query · `lot_sub_status` — query · `upcoming` — query · `auction_date_pending` — query · `updated_within_minutes` — query · `price_min` — query · `price_max` — query · `year_from` — query · `year_to` — query · `auction_type` — query · `platform` — query · `type_` — query `type` · `body_style` — query · `body_type` — query · `make` — query · `series` — query · `model` — query · `generation_id` — query · `generation` — query · `color` — query · `vin_prefix` — query · `fuel_type` — query · `odometer_from` — query · `odometer_to` — query · `engine_size_from` — query · `engine_size_to` — query · `engine_type` — query · `transmission` — query · `cylinders` — query · `drive_type` — query · `run_cond` — query · `damage` — query · `has_key` — query · `cursor` — query · `zip_` — query `zip` · `radius` — query · `units` — query · `per_page` — query · `include_total` — query · `facility_id` — query · `loc_state` — query · `office_name` — query · `auction_date_from` — query · `auction_date_to` — query · `today_only` — query · `sale_document_pending` — query · `sale_document_type` — query · `seller_type` — query · `has_shipping_price` — query
- **Returns (parsed)**: `VehicleListResponse`
- **Returns (raw)**: `ApiResult[VehicleListResponse, ListAuctionVehiclesErrorBody]`
- **Error**: `ListAuctionVehiclesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 404, 422, 503] · `RawError` [400, 401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `LotStatusOrStr` | `apibara/models/enums/lot_status.py` |
| `LotSubStatusOrStr` | `apibara/models/enums/lot_sub_status.py` |
| `UpcomingOrStr` | `apibara/models/enums/upcoming.py` |
| `AuctionTypeOrInt` | `apibara/models/enums/auction_type.py` |
| `PlatformOrStr` | `apibara/models/enums/platform.py` |
| `Type1` | `apibara/models/unions/type1.py` |
| `Type1Dict` | `apibara/models/unions/type1.py` |
| `BodyStyle` | `apibara/models/unions/body_style.py` |
| `BodyStyleDict` | `apibara/models/unions/body_style.py` |
| `BodyType` | `apibara/models/unions/body_type.py` |
| `BodyTypeDict` | `apibara/models/unions/body_type.py` |
| `Series` | `apibara/models/unions/series.py` |
| `SeriesDict` | `apibara/models/unions/series.py` |
| `GenerationId` | `apibara/models/unions/generation_id.py` |
| `GenerationIdDict` | `apibara/models/unions/generation_id.py` |
| `Generation` | `apibara/models/unions/generation.py` |
| `GenerationDict` | `apibara/models/unions/generation.py` |
| `VinPrefix` | `apibara/models/unions/vin_prefix.py` |
| `VinPrefixDict` | `apibara/models/unions/vin_prefix.py` |
| `FuelTypeOrStr` | `apibara/models/enums/fuel_type.py` |
| `EngineType1` | `apibara/models/unions/engine_type1.py` |
| `EngineType1Dict` | `apibara/models/unions/engine_type1.py` |
| `TransmissionOrStr` | `apibara/models/enums/transmission.py` |
| `DriveTypeOrStr` | `apibara/models/enums/drive_type.py` |
| `RunCond1` | `apibara/models/unions/run_cond1.py` |
| `RunCond1Dict` | `apibara/models/unions/run_cond1.py` |
| `DamageOrStr` | `apibara/models/enums/damage.py` |
| `HasKeyOrStr` | `apibara/models/enums/has_key.py` |
| `UnitsOrStr` | `apibara/models/enums/units.py` |
| `LocState` | `apibara/models/unions/loc_state.py` |
| `LocStateDict` | `apibara/models/unions/loc_state.py` |
| `SellerTypeOrStr` | `apibara/models/enums/seller_type.py` |
| `VehicleListResponse` | `apibara/models/vehicle_list_response.py` |
| `ListAuctionVehiclesErrorBody` | `apibara/errors/list_auction_vehicles_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

