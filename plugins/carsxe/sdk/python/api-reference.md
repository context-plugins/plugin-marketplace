# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CarsXeClient](cars_xe/client.py)

## AuthApi

> Source: [AuthApi](cars_xe/apis/auth_api.py)

<details>
<summary><code>def validate_key(key: str, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.auth_api.validate_key("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.auth_api.validate_key("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>str</code> | Your CarsXE API key |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- Validation result

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[RawError](cars_xe/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](cars_xe/apis/history.py)

<details>
<summary><code>def get_vehicle_history(vin: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> HistoryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a vehicle history report by VIN, including title, brand, junk/salvage and insurance records.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.history.get_vehicle_history("some example string")
    # TODO: Handle 'response' of type HistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVehicleHistoryErrorBody
```

**Async**

```python
try:
    response = await async_client.history.get_vehicle_history("some example string")
    # TODO: Handle 'response' of type HistoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVehicleHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str</code> | The 17 character long vehicle identification number. |
| <code>format_</code> | <code>[FormatOrStr](cars_xe/models/enums/format.py) \| None</code> | The format of the response. One of `json` or `xml`.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HistoryResponse](cars_xe/models/history_response.py)</code> -- History report retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetVehicleHistoryErrorBody](cars_xe/errors/get_vehicle_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Images

> Source: [Images](cars_xe/apis/images.py)

<details>
<summary><code>def get_vehicle_images(make: str, model: str, *, year: str | None = None, trim: str | None = None, color: str | None = None, transparent: bool | None = None, angle: AngleOrStr | None = None, photo_type: PhotoTypeOrStr | None = None, size: SizeOrStr | None = None, license_: LicenseOrStr | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ImagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve images of a vehicle by make, model and other filters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.images.get_vehicle_images("some example string", "some example string")
    # TODO: Handle 'response' of type ImagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVehicleImagesErrorBody
```

**Async**

```python
try:
    response = await async_client.images.get_vehicle_images("some example string", "some example string")
    # TODO: Handle 'response' of type ImagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVehicleImagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>make</code> | <code>str</code> | The vehicle make. |
| <code>model</code> | <code>str</code> | The vehicle model. |
| <code>year</code> | <code>str \| None</code> | The vehicle year.<br>**Default**: <code>None</code> |
| <code>trim</code> | <code>str \| None</code> | The vehicle trim.<br>**Default**: <code>None</code> |
| <code>color</code> | <code>str \| None</code> | The vehicle color.<br>**Default**: <code>None</code> |
| <code>transparent</code> | <code>bool \| None</code> | Prioritize images with transparent background. Defaults to `true`.<br>**Default**: <code>None</code> |
| <code>angle</code> | <code>[AngleOrStr](cars_xe/models/enums/angle.py) \| None</code> | The angle to show the car in.<br>**Default**: <code>None</code> |
| <code>photo_type</code> | <code>[PhotoTypeOrStr](cars_xe/models/enums/photo_type.py) \| None</code> | Request images of the interior, exterior or engine. Can only be used in conjunction with year, make, model and trim query params.<br>**Default**: <code>None</code> |
| <code>size</code> | <code>[SizeOrStr](cars_xe/models/enums/size.py) \| None</code> | Request images of a given size. Defaults to all sizes.<br>**Default**: <code>None</code> |
| <code>license_</code> | <code>[LicenseOrStr](cars_xe/models/enums/license.py) \| None</code> | Filter images by license type. Leave blank to return all images.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](cars_xe/models/enums/format.py) \| None</code> | The format of the response. One of `json` or `xml`.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImagesResponse](cars_xe/models/images_response.py)</code> -- Images retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetVehicleImagesErrorBody](cars_xe/errors/get_vehicle_images_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## LienTheft

> Source: [LienTheft](cars_xe/apis/lien_theft.py)

<details>
<summary><code>def get_lien_theft(vin: str, *, request_options: RequestOptionsOrDict | None = None) -> V1LienTheftResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check a VIN for active lien and theft records (US).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.lien_theft.get_lien_theft("some example string")
    # TODO: Handle 'response' of type V1LienTheftResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLienTheftErrorBody
```

**Async**

```python
try:
    response = await async_client.lien_theft.get_lien_theft("some example string")
    # TODO: Handle 'response' of type V1LienTheftResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLienTheftErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str</code> | The 17 character long vehicle identification number. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LienTheftResponse](cars_xe/models/v1_lien_theft_response.py)</code> -- Lien/theft data retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetLienTheftErrorBody](cars_xe/errors/get_lien_theft_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MarketValue

> Source: [MarketValue](cars_xe/apis/market_value.py)

<details>
<summary><code>def get_market_value(vin: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> MarketvalueResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the market value of a vehicle by VIN, including retail, trade-in and auction values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_value.get_market_value("some example string")
    # TODO: Handle 'response' of type MarketvalueResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketValueErrorBody
```

**Async**

```python
try:
    response = await async_client.market_value.get_market_value("some example string")
    # TODO: Handle 'response' of type MarketvalueResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketValueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str</code> | The 17 character long vehicle identification number. |
| <code>format_</code> | <code>[FormatOrStr](cars_xe/models/enums/format.py) \| None</code> | The format of the response. One of `json` or `xml`.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarketvalueResponse](cars_xe/models/marketvalue_response.py)</code> -- Market value retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetMarketValueErrorBody](cars_xe/errors/get_market_value_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_market_value_v2(vin: str, *, state: str | None = None, mileage: float | None = None, condition: ConditionOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V2MarketvalueResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed market values for a VIN, including wholesale, retail and trade-in values across condition tiers, with optional adjustments for US state, mileage and condition.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.market_value.get_market_value_v2("some example string")
    # TODO: Handle 'response' of type V2MarketvalueResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketValueV2ErrorBody
```

**Async**

```python
try:
    response = await async_client.market_value.get_market_value_v2("some example string")
    # TODO: Handle 'response' of type V2MarketvalueResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMarketValueV2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str</code> | The 17 character long vehicle identification number. |
| <code>state</code> | <code>str \| None</code> | The US state of the vehicle to get the market value for.<br>**Default**: <code>None</code> |
| <code>mileage</code> | <code>float \| None</code> | The current mileage of the vehicle used to adjust the market value. Must be a valid numeric value.<br>**Default**: <code>None</code> |
| <code>condition</code> | <code>[ConditionOrStr](cars_xe/models/enums/condition.py) \| None</code> | The overall condition of the vehicle.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2MarketvalueResponse](cars_xe/models/v2_marketvalue_response.py)</code> -- Market value retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetMarketValueV2ErrorBody](cars_xe/errors/get_market_value_v2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500, 503 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PlateDecoder

> Source: [PlateDecoder](cars_xe/apis/plate_decoder.py)

<details>
<summary><code>def decode_plate(plate: str, state: str, *, country: str | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> PlatedecoderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode a license plate into vehicle data. Internally proxies to the v2
plate decoder. The `state` parameter accepts a two-letter US state
code, Australian state, or one of the legacy country codes `BR`, `UK`,
`IR`, `IT`, `ES`, `IND`, `MX`, `NZ`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.plate_decoder.decode_plate("some example string", "some example string")
    # TODO: Handle 'response' of type PlatedecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DecodePlateErrorBody
```

**Async**

```python
try:
    response = await async_client.plate_decoder.decode_plate("some example string", "some example string")
    # TODO: Handle 'response' of type PlatedecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DecodePlateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plate</code> | <code>str</code> | The vehicle registration number or license plate number. |
| <code>state</code> | <code>str</code> | The two letter state code (US) such as `CA` or `NY`, Australian state, or Brazil `BR`, United Kingdom `UK`, Ireland `IR`, Italy `IT`, Spain `ES`, India `IND`, Mexico `MX`, New Zealand `NZ`. |
| <code>country</code> | <code>str \| None</code> | Country code, e.g. Australia `AU`. Optional for `US`.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](cars_xe/models/enums/format.py) \| None</code> | The format of the response. One of `json` or `xml`.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlatedecoderResponse](cars_xe/models/platedecoder_response.py)</code> -- Plate decoded.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[DecodePlateErrorBody](cars_xe/errors/decode_plate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 502, 504 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def decode_plate_v2(plate: str, *, country: str | None = None, state: str | None = None, district: str | None = None, require_vin: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V2PlatedecoderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode a license plate into vehicle data across 60+ supported
countries. `country` is an ISO 3166-1 alpha-2 code (optional for `US`).
`state` is required for `US`, `AU` and `CA`. For Pakistan (`PK`) a
`district` is also required for the Khyber-Pakhtunkhwa province.

For Spain (`ES`), set `require_vin=true` to always include a VIN.
Additional charges apply: when `require_vin=true`, the request is
billed 2x and usage counts 2x.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.plate_decoder.decode_plate_v2("some example string")
    # TODO: Handle 'response' of type V2PlatedecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DecodePlateV2ErrorBody
```

**Async**

```python
try:
    response = await async_client.plate_decoder.decode_plate_v2("some example string")
    # TODO: Handle 'response' of type V2PlatedecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DecodePlateV2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plate</code> | <code>str</code> | The vehicle registration number or license plate number. |
| <code>country</code> | <code>str \| None</code> | ISO 3166-1 alpha-2 country code such as `AU` for Australia or `ZA` for South Africa. Optional for `US`.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | The two letter state code (US) such as `CA` or `NY`, an Australian state (e.g. `NSW`, `VIC`), or a Canadian province (e.g. `ON`). Required only for `US`, `AU` and `CA`.<br>**Default**: <code>None</code> |
| <code>district</code> | <code>str \| None</code> | The district of the vehicle registration number. Required for Pakistan (`PK`) plates registered in the Khyber-Pakhtunkhwa province.<br>**Default**: <code>None</code> |
| <code>require_vin</code> | <code>bool \| None</code> | Only supported when `country=ES`. Set to `true` to always include a VIN. The request is billed 2x and usage counts 2x.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2PlatedecoderResponse](cars_xe/models/v2_platedecoder_response.py)</code> -- Plate decoded.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[DecodePlateV2ErrorBody](cars_xe/errors/decode_plate_v2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def decode_us_plate(plate: str, state: str, *, decode_vin: DecodeVinOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UsPlatedecoderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up a US vehicle by license plate number and state. Returns the
VIN, year, make, model, trim, engine, body style, transmission, drive
type, fuel type and exterior color. Optionally decodes the VIN to
include the full vehicle specifications object. Accepts plates from all
50 US states, the District of Columbia (DC) and Puerto Rico (PR).

This endpoint is **not** available on the free Sandbox tier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.plate_decoder.decode_us_plate("some example string", "some example string")
    # TODO: Handle 'response' of type V1UsPlatedecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DecodeUsPlateErrorBody
```

**Async**

```python
try:
    response = await async_client.plate_decoder.decode_us_plate("some example string", "some example string")
    # TODO: Handle 'response' of type V1UsPlatedecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DecodeUsPlateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plate</code> | <code>str</code> | The vehicle registration number or license plate number. |
| <code>state</code> | <code>str</code> | Two-letter abbreviation for one of the 50 US states, the District of Columbia (`DC`), or Puerto Rico (`PR`). |
| <code>decode_vin</code> | <code>[DecodeVinOrStr](cars_xe/models/enums/decode_vin.py) \| None</code> | Set to `true` or `1` to decode the resolved VIN and include a `vehicle_specs` object in the response (identical in shape to the Specifications endpoint response).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsPlatedecoderResponse](cars_xe/models/v1_us_platedecoder_response.py)</code> -- Plate decoded successfully.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[DecodeUsPlateErrorBody](cars_xe/errors/decode_us_plate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Recalls

> Source: [Recalls](cars_xe/apis/recalls.py)

<details>
<summary><code>def download_recalls_batch_results(batch_id: str, *, x_cars_xe_batch_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the results of a completed batch as CSV.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recalls.download_recalls_batch_results("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadRecallsBatchResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.recalls.download_recalls_batch_results("some example string")
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadRecallsBatchResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batch_id</code> | <code>str</code> | The batch ID returned from the submit endpoint. |
| <code>x_cars_xe_batch_token</code> | <code>str \| None</code> | Batch-scoped token returned by an x402 submit call. Use this instead of the key query parameter for status, results, and download requests.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- CSV results file.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[DownloadRecallsBatchResultsErrorBody](cars_xe/errors/download_recalls_batch_results_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](cars_xe/core/results.py)</code> |
| 401 | <code>[Error](cars_xe/models/error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_recalls_batch_results(batch_id: str, *, x_cars_xe_batch_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1RecallsBatchResultsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the per-VIN recall results of a completed batch as JSON.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recalls.get_recalls_batch_results("some example string")
    # TODO: Handle 'response' of type V1RecallsBatchResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecallsBatchResultsErrorBody
```

**Async**

```python
try:
    response = await async_client.recalls.get_recalls_batch_results("some example string")
    # TODO: Handle 'response' of type V1RecallsBatchResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecallsBatchResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batch_id</code> | <code>str</code> | The batch ID returned from the submit endpoint. |
| <code>x_cars_xe_batch_token</code> | <code>str \| None</code> | Batch-scoped token returned by an x402 submit call. Use this instead of the key query parameter for status, results, and download requests.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsBatchResultsResponse](cars_xe/models/v1_recalls_batch_results_response.py)</code> -- Batch results retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetRecallsBatchResultsErrorBody](cars_xe/errors/get_recalls_batch_results_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 409 | <code>[Error](cars_xe/models/error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_recalls_batch_status(batch_id: str, *, x_cars_xe_batch_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1RecallsBatchStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the processing status of a previously submitted batch.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recalls.get_recalls_batch_status("some example string")
    # TODO: Handle 'response' of type V1RecallsBatchStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecallsBatchStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.recalls.get_recalls_batch_status("some example string")
    # TODO: Handle 'response' of type V1RecallsBatchStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecallsBatchStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batch_id</code> | <code>str</code> | The batch ID returned from the submit endpoint. |
| <code>x_cars_xe_batch_token</code> | <code>str \| None</code> | Batch-scoped token returned by an x402 submit call. Use this instead of the key query parameter for status, results, and download requests.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsBatchStatusResponse](cars_xe/models/v1_recalls_batch_status_response.py)</code> -- Batch status retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetRecallsBatchStatusErrorBody](cars_xe/errors/get_recalls_batch_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](cars_xe/models/error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_recalls_by_ymm(year: str, make: str, model: str, *, request_options: RequestOptionsOrDict | None = None) -> V1RecallsYmmResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve open safety recalls for a vehicle by year, make, and model — no VIN required.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recalls.get_recalls_by_ymm("some example string", "some example string", "some example string")
    # TODO: Handle 'response' of type V1RecallsYmmResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecallsByYmmErrorBody
```

**Async**

```python
try:
    response = await async_client.recalls.get_recalls_by_ymm(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type V1RecallsYmmResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecallsByYmmErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>year</code> | <code>str</code> | The 4-digit model year (e.g. `2019`). |
| <code>make</code> | <code>str</code> | The vehicle manufacturer name (e.g. `Toyota`). Case-insensitive. |
| <code>model</code> | <code>str</code> | The vehicle model name (e.g. `Camry`). Case-insensitive. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsYmmResponse](cars_xe/models/v1_recalls_ymm_response.py)</code> -- Recall data retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetRecallsByYmmErrorBody](cars_xe/errors/get_recalls_by_ymm_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vehicle_recalls(vin: str, *, request_options: RequestOptionsOrDict | None = None) -> V1RecallsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve open safety recalls for a vehicle by VIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recalls.get_vehicle_recalls("some example string")
    # TODO: Handle 'response' of type V1RecallsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVehicleRecallsErrorBody
```

**Async**

```python
try:
    response = await async_client.recalls.get_vehicle_recalls("some example string")
    # TODO: Handle 'response' of type V1RecallsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVehicleRecallsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str</code> | The 17 character long vehicle identification number. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsResponse](cars_xe/models/v1_recalls_response.py)</code> -- Recall data retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetVehicleRecallsErrorBody](cars_xe/errors/get_vehicle_recalls_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def submit_recalls_batch(body: V1RecallsBatchSubmitRequest | V1RecallsBatchSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1RecallsBatchSubmitResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit up to 10,000 VINs for asynchronous recall processing. Provide
VINs as a JSON array (`vins`), inline CSV text (`csv`), or an HTTPS
link to a CSV file (`csvUrl`). Optionally provide a `webhookUrl` that
CarsXE will POST to when the batch finishes. Poll the status endpoint
or wait for the webhook, then fetch results.

x402 submissions must use the JSON `vins` array. The `csv` and `csvUrl`
forms require CarsXE API-key authentication.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recalls.submit_recalls_batch(
        V1RecallsBatchSubmitRequest(
            vins=["1HGBH41JXMN109186", "5YJSA1E26HF000001"], webhook_url="https://example.com/webhooks/carsxe-recalls"
        ),
    )
    # TODO: Handle 'response' of type V1RecallsBatchSubmitResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitRecallsBatchErrorBody
```

**Async**

```python
try:
    response = await async_client.recalls.submit_recalls_batch(
        V1RecallsBatchSubmitRequest(
            vins=["1HGBH41JXMN109186", "5YJSA1E26HF000001"], webhook_url="https://example.com/webhooks/carsxe-recalls"
        ),
    )
    # TODO: Handle 'response' of type V1RecallsBatchSubmitResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitRecallsBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1RecallsBatchSubmitRequest](cars_xe/models/v1_recalls_batch_submit_request.py) \| [V1RecallsBatchSubmitRequestDict](cars_xe/models/v1_recalls_batch_submit_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsBatchSubmitResponse](cars_xe/models/v1_recalls_batch_submit_response.py)</code> -- Batch accepted and queued for processing.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[SubmitRecallsBatchErrorBody](cars_xe/errors/submit_recalls_batch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 405, 500, 502 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Recognition

> Source: [Recognition](cars_xe/apis/recognition.py)

<details>
<summary><code>def recognize_plate(body: PlaterecognitionRequest | PlaterecognitionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PlaterecognitionResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract a license plate number from an image of a vehicle. Send a JSON body containing an `image_url` field with a URL to the image.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recognition.recognize_plate(
        PlaterecognitionRequest(image_url="https://example.com/car-photo.jpg")
    )
    # TODO: Handle 'response' of type PlaterecognitionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizePlateErrorBody
```

**Async**

```python
try:
    response = await async_client.recognition.recognize_plate(
        PlaterecognitionRequest(image_url="https://example.com/car-photo.jpg")
    )
    # TODO: Handle 'response' of type PlaterecognitionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizePlateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlaterecognitionRequest](cars_xe/models/platerecognition_request.py) \| [PlaterecognitionRequestDict](cars_xe/models/platerecognition_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaterecognitionResponse](cars_xe/models/platerecognition_response.py)</code> -- Plate recognized.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[RecognizePlateErrorBody](cars_xe/errors/recognize_plate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vin_ocr(body: V1VinocrRequest | V1VinocrRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1VinocrResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract a VIN from a photo. Send a JSON body containing an `image_url` field with either a URL to an image or a base64-encoded image string.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recognition.vin_ocr(V1VinocrRequest(image_url="https://example.com/vin-plate.jpg"))
    # TODO: Handle 'response' of type V1VinocrResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VinOcrErrorBody
```

**Async**

```python
try:
    response = await async_client.recognition.vin_ocr(V1VinocrRequest(image_url="https://example.com/vin-plate.jpg"))
    # TODO: Handle 'response' of type V1VinocrResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VinOcrErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1VinocrRequest](cars_xe/models/v1_vinocr_request.py) \| [V1VinocrRequestDict](cars_xe/models/v1_vinocr_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VinocrResponse](cars_xe/models/v1_vinocr_response.py)</code> -- VIN extracted from the image.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[VinOcrErrorBody](cars_xe/errors/vin_ocr_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Specifications

> Source: [Specifications](cars_xe/apis/specifications.py)

<details>
<summary><code>def get_international_vin_decoder(vin: str, *, request_options: RequestOptionsOrDict | None = None) -> V1InternationalVinDecoderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode a non-US (international) VIN into vehicle attributes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.specifications.get_international_vin_decoder("some example string")
    # TODO: Handle 'response' of type V1InternationalVinDecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInternationalVinDecoderErrorBody
```

**Async**

```python
try:
    response = await async_client.specifications.get_international_vin_decoder("some example string")
    # TODO: Handle 'response' of type V1InternationalVinDecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInternationalVinDecoderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str</code> | The 17 character long vehicle identification number. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InternationalVinDecoderResponse](cars_xe/models/v1_international_vin_decoder_response.py)</code> -- International VIN decoded.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetInternationalVinDecoderErrorBody](cars_xe/errors/get_international_vin_decoder_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vehicle_specs(vin: str, *, format_: FormatOrStr | None = Format.JSON, deepdata: DeepdataOrStr | None = None, disable_int_vin_decoding: DisableIntVinDecodingOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> SpecsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode a 17-character VIN and return detailed vehicle specifications,
including attributes, colors, equipment and warranties. If the VIN
cannot be decoded, an International VIN decoding check is run as a
fallback unless `disableIntVINDecoding=1` is set.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.specifications.get_vehicle_specs("some example string")
    # TODO: Handle 'response' of type SpecsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVehicleSpecsErrorBody
```

**Async**

```python
try:
    response = await async_client.specifications.get_vehicle_specs("some example string")
    # TODO: Handle 'response' of type SpecsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVehicleSpecsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str</code> | The 17 character long vehicle identification number. |
| <code>format_</code> | <code>[FormatOrStr](cars_xe/models/enums/format.py) \| None</code> | The format of the response. One of `json` or `xml`.<br>**Default**: <code>Format.JSON</code> |
| <code>deepdata</code> | <code>[DeepdataOrStr](cars_xe/models/enums/deepdata.py) \| None</code> | Request extra data. Set to `1` to use. Significantly slower than the regular request but retrieves additional data.<br>**Default**: <code>None</code> |
| <code>disable_int_vin_decoding</code> | <code>[DisableIntVinDecodingOrStr](cars_xe/models/enums/disable_int_vin_decoding.py) \| None</code> | Set to `1` to disable the International VIN decoding fallback and return an error instead of a potential partial response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpecsResponse](cars_xe/models/specs_response.py)</code> -- Vehicle specifications retrieved.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetVehicleSpecsErrorBody](cars_xe/errors/get_vehicle_specs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## YearMakeModel

> Source: [YearMakeModel](cars_xe/apis/year_make_model.py)

<details>
<summary><code>def decode_obd_code(code: str, *, request_options: RequestOptionsOrDict | None = None) -> ObdcodesdecoderResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode an OBD-II diagnostic trouble code (e.g. P0115).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.year_make_model.decode_obd_code("some example string")
    # TODO: Handle 'response' of type ObdcodesdecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DecodeObdCodeErrorBody
```

**Async**

```python
try:
    response = await async_client.year_make_model.decode_obd_code("some example string")
    # TODO: Handle 'response' of type ObdcodesdecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DecodeObdCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>str</code> | The OBD code. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObdcodesdecoderResponse](cars_xe/models/obdcodesdecoder_response.py)</code> -- OBD code decoded.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[DecodeObdCodeErrorBody](cars_xe/errors/decode_obd_code_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_year_make_model(year: str, make: str, model: str, *, trim: str | None = None, all_trim_options: AllTrimOptionsOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> V1YmmResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up vehicle data by year, make and model (and optionally trim) without a VIN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.year_make_model.get_year_make_model(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type V1YmmResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetYearMakeModelErrorBody
```

**Async**

```python
try:
    response = await async_client.year_make_model.get_year_make_model(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type V1YmmResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetYearMakeModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>year</code> | <code>str</code> | The manufacturing year of the vehicle (numeric, between 1900 and the current model year plus one). |
| <code>make</code> | <code>str</code> | The manufacturer of the vehicle (e.g., Toyota, Ford, BMW). |
| <code>model</code> | <code>str</code> | The specific model of the vehicle (e.g., Camry, F-150, X5). |
| <code>trim</code> | <code>str \| None</code> | The vehicle trim (e.g., XLE, XSE).<br>**Default**: <code>None</code> |
| <code>all_trim_options</code> | <code>[AllTrimOptionsOrStr](cars_xe/models/enums/all_trim_options.py) \| None</code> | Return all trim options available for the year, make and model. Set to `1` to use.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1YmmResponse](cars_xe/models/v1_ymm_response.py)</code> -- Vehicle matched.

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetYearMakeModelErrorBody](cars_xe/errors/get_year_make_model_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_year_make_model_options(*, dimension: DimensionOrStr | None = None, year: str | None = None, make: str | None = None, model: str | None = None, trim: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1YmmOptionsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Populate Year, Make, Model, and Variant dropdown menus. Each response returns exactly one layer. `dimension` is optional — when omitted, the response shape is inferred from `make`/`model`/`year`. Billing: most calls cost 1 unit. `dimension=variants` with `year` + `make` (no `model`) costs 1 unit per model; the response includes `modelCount`. Required filters help you get better, more relevant results. `year`, `make`, and `model` can be combined for reversed lookups (e.g. years for a given make+model).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.year_make_model.get_year_make_model_options()
    # TODO: Handle 'response' of type V1YmmOptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetYearMakeModelOptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.year_make_model.get_year_make_model_options()
    # TODO: Handle 'response' of type V1YmmOptionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetYearMakeModelOptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dimension</code> | <code>[DimensionOrStr](cars_xe/models/enums/dimension.py) \| None</code> | Return exactly this array when required filters are present. If omitted, the response is inferred automatically from `make`/`model`/`year`.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>str \| None</code> | Filter to a specific manufacturing year. Required when filtering by `model` without `make`.<br>**Default**: <code>None</code> |
| <code>make</code> | <code>str \| None</code> | Filter to a specific manufacturer (e.g., Toyota, Ford, Lexus). Required for `dimension=models`.<br>**Default**: <code>None</code> |
| <code>model</code> | <code>str \| None</code> | Filter to a specific model (e.g., Camry, F-150, LX). Required for `dimension=trims` and for `dimension=variants` unless both `year` and `make` are set.<br>**Default**: <code>None</code> |
| <code>trim</code> | <code>str \| None</code> | Optional substring filter on trim names. Only applied when querying `dimension=trims` or `dimension=variants`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](cars_xe/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1YmmOptionsResponse](cars_xe/models/v1_ymm_options_response.py)</code> -- Distinct values for the requested (or inferred) dimension(s).

**OnError**: <code>[ApiError](cars_xe/core/exceptions.py)&#91;[GetYearMakeModelOptionsErrorBody](cars_xe/errors/get_year_make_model_options_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 500 | <code>[Error](cars_xe/models/error.py)</code> |
| 429 | <code>[UsageLimitError](cars_xe/models/usage_limit_error.py)</code> |
| anything unmapped | <code>[RawError](cars_xe/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

