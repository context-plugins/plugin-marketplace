<!-- Generated file — do not edit; regenerated with the SDK. -->

# Images — operations

Accessor: `client.images` · Source: `cars_xe/apis/images.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.images.get_vehicle_images

- **Route**: `GET /images`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_vehicle_images(make: str, model: str, *, year: str | None = None, trim: str | None = None, color: str | None = None, transparent: bool | None = None, angle: AngleOrStr | None = None, photo_type: PhotoTypeOrStr | None = None, size: SizeOrStr | None = None, license_: LicenseOrStr | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `make`, `model`
- **Params**: `make` — query · `model` — query · `year` — query · `trim` — query · `color` — query · `transparent` — query · `angle` — query · `photo_type` — query `photoType` · `size` — query · `license_` — query `license` · `format_` — query `format`
- **Returns (parsed)**: `ImagesResponse`
- **Returns (raw)**: `ApiResult[ImagesResponse, GetVehicleImagesErrorBody]`
- **Error**: `GetVehicleImagesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AngleOrStr` | `cars_xe/models/enums/angle.py` |
| `PhotoTypeOrStr` | `cars_xe/models/enums/photo_type.py` |
| `SizeOrStr` | `cars_xe/models/enums/size.py` |
| `LicenseOrStr` | `cars_xe/models/enums/license.py` |
| `FormatOrStr` | `cars_xe/models/enums/format.py` |
| `ImagesResponse` | `cars_xe/models/images_response.py` |
| `GetVehicleImagesErrorBody` | `cars_xe/errors/get_vehicle_images_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

