# Reference

> Source: [CarsXeClient](src/client.ts)

## Auth

> Source: [Auth](src/resources/auth.ts)

<details>
<summary><code>validateKey(request: Auth.ValidateKeyRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auth2.validateKey({ key: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auth2.validateKey({ key: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | Your CarsXE API key |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auth2.validateKey(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.auth2.validateKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](src/resources/history.ts)

<details>
<summary><code>getVehicleHistory(request: History.GetVehicleHistoryRequest, options?: RequestOptions): ApiPromise&lt;HistoryResponse, History.GetVehicleHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a vehicle history report by VIN, including title, brand, junk/salvage and insurance records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.history.getVehicleHistory({ vin: "some example string" });
  // TODO: Handle 'response' of type HistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type History.GetVehicleHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.history.getVehicleHistory({ vin: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HistoryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | The 17 character long vehicle identification number. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | The format of the response. One of `json` or `xml`.<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.history.getVehicleHistory(request)`

- **OnSuccess**: <code>[HistoryResponse](src/models/history-response.ts)</code>
- **OnError**: throws <code>[History.GetVehicleHistoryError](src/resources/history.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.history.getVehicleHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HistoryResponse, History.GetVehicleHistoryError&gt;</code>, with `result.value` of type <code>[HistoryResponse](src/models/history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Images

> Source: [Images](src/resources/images.ts)

<details>
<summary><code>getVehicleImages(request: Images.GetVehicleImagesRequest, options?: RequestOptions): ApiPromise&lt;ImagesResponse, Images.GetVehicleImagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve images of a vehicle by make, model and other filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.images.getVehicleImages({
    make: "some example string",
    model: "some example string",
  });
  // TODO: Handle 'response' of type ImagesResponse
} catch (err) {
  // TODO: Handle 'err' of type Images.GetVehicleImagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.images
  .getVehicleImages({ make: "some example string", model: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImagesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>make</code> | <code>string</code> | The vehicle make. |
| <code>model</code> | <code>string</code> | The vehicle model. |
| <code>year?</code> | <code>string</code> | The vehicle year. |
| <code>trim?</code> | <code>string</code> | The vehicle trim. |
| <code>color?</code> | <code>string</code> | The vehicle color. |
| <code>transparent?</code> | <code>boolean</code> | Prioritize images with transparent background. Defaults to `true`. |
| <code>angle?</code> | <code>[Angle](src/models/angle.ts)</code> | The angle to show the car in. |
| <code>photoType?</code> | <code>[PhotoType](src/models/photo-type.ts)</code> | Request images of the interior, exterior or engine. Can only be used in conjunction with year, make, model and trim query params. |
| <code>size?</code> | <code>[Size](src/models/size.ts)</code> | Request images of a given size. Defaults to all sizes. |
| <code>license?</code> | <code>[License](src/models/license.ts)</code> | Filter images by license type. Leave blank to return all images. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | The format of the response. One of `json` or `xml`.<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.images.getVehicleImages(request)`

- **OnSuccess**: <code>[ImagesResponse](src/models/images-response.ts)</code>
- **OnError**: throws <code>[Images.GetVehicleImagesError](src/resources/images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.images.getVehicleImages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImagesResponse, Images.GetVehicleImagesError&gt;</code>, with `result.value` of type <code>[ImagesResponse](src/models/images-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## LienTheft

> Source: [LienTheft](src/resources/lien-theft.ts)

<details>
<summary><code>getLienTheft(request: LienTheft.GetLienTheftRequest, options?: RequestOptions): ApiPromise&lt;V1LienTheftResponse, LienTheft.GetLienTheftError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check a VIN for active lien and theft records (US).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lienTheft.getLienTheft({ vin: "some example string" });
  // TODO: Handle 'response' of type V1LienTheftResponse
} catch (err) {
  // TODO: Handle 'err' of type LienTheft.GetLienTheftError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lienTheft.getLienTheft({ vin: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LienTheftResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | The 17 character long vehicle identification number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lienTheft.getLienTheft(request)`

- **OnSuccess**: <code>[V1LienTheftResponse](src/models/v1-lien-theft-response.ts)</code>
- **OnError**: throws <code>[LienTheft.GetLienTheftError](src/resources/lien-theft.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lienTheft.getLienTheft(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LienTheftResponse, LienTheft.GetLienTheftError&gt;</code>, with `result.value` of type <code>[V1LienTheftResponse](src/models/v1-lien-theft-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MarketValue

> Source: [MarketValue](src/resources/market-value.ts)

<details>
<summary><code>getMarketValue(request: MarketValue.GetMarketValueRequest, options?: RequestOptions): ApiPromise&lt;MarketvalueResponse, MarketValue.GetMarketValueError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the market value of a vehicle by VIN, including retail, trade-in and auction values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketValue.getMarketValue({ vin: "some example string" });
  // TODO: Handle 'response' of type MarketvalueResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketValue.GetMarketValueError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketValue.getMarketValue({ vin: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MarketvalueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | The 17 character long vehicle identification number. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | The format of the response. One of `json` or `xml`.<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketValue.getMarketValue(request)`

- **OnSuccess**: <code>[MarketvalueResponse](src/models/marketvalue-response.ts)</code>
- **OnError**: throws <code>[MarketValue.GetMarketValueError](src/resources/market-value.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketValue.getMarketValue(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MarketvalueResponse, MarketValue.GetMarketValueError&gt;</code>, with `result.value` of type <code>[MarketvalueResponse](src/models/marketvalue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMarketValueV2(request: MarketValue.GetMarketValueV2Request, options?: RequestOptions): ApiPromise&lt;V2MarketvalueResponse, MarketValue.GetMarketValueV2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed market values for a VIN, including wholesale, retail and trade-in values across condition tiers, with optional adjustments for US state, mileage and condition.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.marketValue.getMarketValueV2({ vin: "some example string" });
  // TODO: Handle 'response' of type V2MarketvalueResponse
} catch (err) {
  // TODO: Handle 'err' of type MarketValue.GetMarketValueV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.marketValue.getMarketValueV2({ vin: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2MarketvalueResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | The 17 character long vehicle identification number. |
| <code>state?</code> | <code>string</code> | The US state of the vehicle to get the market value for. |
| <code>mileage?</code> | <code>number</code> | The current mileage of the vehicle used to adjust the market value. Must be a valid numeric value. |
| <code>condition?</code> | <code>[Condition](src/models/condition.ts)</code> | The overall condition of the vehicle. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.marketValue.getMarketValueV2(request)`

- **OnSuccess**: <code>[V2MarketvalueResponse](src/models/v2-marketvalue-response.ts)</code>
- **OnError**: throws <code>[MarketValue.GetMarketValueV2Error](src/resources/market-value.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.marketValue.getMarketValueV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2MarketvalueResponse, MarketValue.GetMarketValueV2Error&gt;</code>, with `result.value` of type <code>[V2MarketvalueResponse](src/models/v2-marketvalue-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PlateDecoder

> Source: [PlateDecoder](src/resources/plate-decoder.ts)

<details>
<summary><code>decodePlate(request: PlateDecoder.DecodePlateRequest, options?: RequestOptions): ApiPromise&lt;PlatedecoderResponse, PlateDecoder.DecodePlateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plateDecoder.decodePlate({
    plate: "some example string",
    state: "some example string",
  });
  // TODO: Handle 'response' of type PlatedecoderResponse
} catch (err) {
  // TODO: Handle 'err' of type PlateDecoder.DecodePlateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plateDecoder
  .decodePlate({ plate: "some example string", state: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlatedecoderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plate</code> | <code>string</code> | The vehicle registration number or license plate number. |
| <code>state</code> | <code>string</code> | The two letter state code (US) such as `CA` or `NY`, Australian state, or Brazil `BR`, United Kingdom `UK`, Ireland `IR`, Italy `IT`, Spain `ES`, India `IND`, Mexico `MX`, New Zealand `NZ`. |
| <code>country?</code> | <code>string</code> | Country code, e.g. Australia `AU`. Optional for `US`. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | The format of the response. One of `json` or `xml`.<br>**Default**: "json" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plateDecoder.decodePlate(request)`

- **OnSuccess**: <code>[PlatedecoderResponse](src/models/platedecoder-response.ts)</code>
- **OnError**: throws <code>[PlateDecoder.DecodePlateError](src/resources/plate-decoder.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plateDecoder.decodePlate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlatedecoderResponse, PlateDecoder.DecodePlateError&gt;</code>, with `result.value` of type <code>[PlatedecoderResponse](src/models/platedecoder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>decodePlateV2(request: PlateDecoder.DecodePlateV2Request, options?: RequestOptions): ApiPromise&lt;V2PlatedecoderResponse, PlateDecoder.DecodePlateV2Error&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plateDecoder.decodePlateV2({ plate: "some example string" });
  // TODO: Handle 'response' of type V2PlatedecoderResponse
} catch (err) {
  // TODO: Handle 'err' of type PlateDecoder.DecodePlateV2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plateDecoder.decodePlateV2({ plate: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V2PlatedecoderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plate</code> | <code>string</code> | The vehicle registration number or license plate number. |
| <code>country?</code> | <code>string</code> | ISO 3166-1 alpha-2 country code such as `AU` for Australia or `ZA` for South Africa. Optional for `US`. |
| <code>state?</code> | <code>string</code> | The two letter state code (US) such as `CA` or `NY`, an Australian state (e.g. `NSW`, `VIC`), or a Canadian province (e.g. `ON`). Required only for `US`, `AU` and `CA`. |
| <code>district?</code> | <code>string</code> | The district of the vehicle registration number. Required for Pakistan (`PK`) plates registered in the Khyber-Pakhtunkhwa province. |
| <code>requireVin?</code> | <code>boolean</code> | Only supported when `country=ES`. Set to `true` to always include a VIN. The request is billed 2x and usage counts 2x. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plateDecoder.decodePlateV2(request)`

- **OnSuccess**: <code>[V2PlatedecoderResponse](src/models/v2-platedecoder-response.ts)</code>
- **OnError**: throws <code>[PlateDecoder.DecodePlateV2Error](src/resources/plate-decoder.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plateDecoder.decodePlateV2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V2PlatedecoderResponse, PlateDecoder.DecodePlateV2Error&gt;</code>, with `result.value` of type <code>[V2PlatedecoderResponse](src/models/v2-platedecoder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>decodeUsPlate(request: PlateDecoder.DecodeUsPlateRequest, options?: RequestOptions): ApiPromise&lt;V1UsPlatedecoderResponse, PlateDecoder.DecodeUsPlateError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.plateDecoder.decodeUsPlate({
    plate: "some example string",
    state: "some example string",
  });
  // TODO: Handle 'response' of type V1UsPlatedecoderResponse
} catch (err) {
  // TODO: Handle 'err' of type PlateDecoder.DecodeUsPlateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.plateDecoder
  .decodeUsPlate({ plate: "some example string", state: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UsPlatedecoderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plate</code> | <code>string</code> | The vehicle registration number or license plate number. |
| <code>state</code> | <code>string</code> | Two-letter abbreviation for one of the 50 US states, the District of Columbia (`DC`), or Puerto Rico (`PR`). |
| <code>decodeVin?</code> | <code>[DecodeVin](src/models/decode-vin.ts)</code> | Set to `true` or `1` to decode the resolved VIN and include a `vehicle_specs` object in the response (identical in shape to the Specifications endpoint response). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.plateDecoder.decodeUsPlate(request)`

- **OnSuccess**: <code>[V1UsPlatedecoderResponse](src/models/v1-us-platedecoder-response.ts)</code>
- **OnError**: throws <code>[PlateDecoder.DecodeUsPlateError](src/resources/plate-decoder.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.plateDecoder.decodeUsPlate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UsPlatedecoderResponse, PlateDecoder.DecodeUsPlateError&gt;</code>, with `result.value` of type <code>[V1UsPlatedecoderResponse](src/models/v1-us-platedecoder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Recalls

> Source: [Recalls](src/resources/recalls.ts)

<details>
<summary><code>downloadRecallsBatchResults(request: Recalls.DownloadRecallsBatchResultsRequest, options?: RequestOptions): ApiPromise&lt;string, Recalls.DownloadRecallsBatchResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the results of a completed batch as CSV.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recalls.downloadRecallsBatchResults({ batchId: "some example string" });
  // TODO: Handle 'response' of type string
} catch (err) {
  // TODO: Handle 'err' of type Recalls.DownloadRecallsBatchResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recalls
  .downloadRecallsBatchResults({ batchId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type string
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | The batch ID returned from the submit endpoint. |
| <code>xCarsXeBatchToken?</code> | <code>string</code> | Batch-scoped token returned by an x402 submit call. Use this instead of the key query parameter for status, results, and download requests. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recalls.downloadRecallsBatchResults(request)`

- **OnSuccess**: <code>string</code>
- **OnError**: throws <code>[Recalls.DownloadRecallsBatchResultsError](src/resources/recalls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recalls.downloadRecallsBatchResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;string, Recalls.DownloadRecallsBatchResultsError&gt;</code>, with `result.value` of type <code>string</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecallsBatchResults(request: Recalls.GetRecallsBatchResultsRequest, options?: RequestOptions): ApiPromise&lt;V1RecallsBatchResultsResponse, Recalls.GetRecallsBatchResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch the per-VIN recall results of a completed batch as JSON.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recalls.getRecallsBatchResults({ batchId: "some example string" });
  // TODO: Handle 'response' of type V1RecallsBatchResultsResponse
} catch (err) {
  // TODO: Handle 'err' of type Recalls.GetRecallsBatchResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recalls.getRecallsBatchResults({ batchId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RecallsBatchResultsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | The batch ID returned from the submit endpoint. |
| <code>xCarsXeBatchToken?</code> | <code>string</code> | Batch-scoped token returned by an x402 submit call. Use this instead of the key query parameter for status, results, and download requests. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recalls.getRecallsBatchResults(request)`

- **OnSuccess**: <code>[V1RecallsBatchResultsResponse](src/models/v1-recalls-batch-results-response.ts)</code>
- **OnError**: throws <code>[Recalls.GetRecallsBatchResultsError](src/resources/recalls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recalls.getRecallsBatchResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RecallsBatchResultsResponse, Recalls.GetRecallsBatchResultsError&gt;</code>, with `result.value` of type <code>[V1RecallsBatchResultsResponse](src/models/v1-recalls-batch-results-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecallsBatchStatus(request: Recalls.GetRecallsBatchStatusRequest, options?: RequestOptions): ApiPromise&lt;V1RecallsBatchStatusResponse, Recalls.GetRecallsBatchStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the processing status of a previously submitted batch.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recalls.getRecallsBatchStatus({ batchId: "some example string" });
  // TODO: Handle 'response' of type V1RecallsBatchStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Recalls.GetRecallsBatchStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recalls.getRecallsBatchStatus({ batchId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RecallsBatchStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | The batch ID returned from the submit endpoint. |
| <code>xCarsXeBatchToken?</code> | <code>string</code> | Batch-scoped token returned by an x402 submit call. Use this instead of the key query parameter for status, results, and download requests. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recalls.getRecallsBatchStatus(request)`

- **OnSuccess**: <code>[V1RecallsBatchStatusResponse](src/models/v1-recalls-batch-status-response.ts)</code>
- **OnError**: throws <code>[Recalls.GetRecallsBatchStatusError](src/resources/recalls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recalls.getRecallsBatchStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RecallsBatchStatusResponse, Recalls.GetRecallsBatchStatusError&gt;</code>, with `result.value` of type <code>[V1RecallsBatchStatusResponse](src/models/v1-recalls-batch-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecallsByYmm(request: Recalls.GetRecallsByYmmRequest, options?: RequestOptions): ApiPromise&lt;V1RecallsYmmResponse, Recalls.GetRecallsByYmmError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve open safety recalls for a vehicle by year, make, and model — no VIN required.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recalls.getRecallsByYmm({
    year: "some example string",
    make: "some example string",
    model: "some example string",
  });
  // TODO: Handle 'response' of type V1RecallsYmmResponse
} catch (err) {
  // TODO: Handle 'err' of type Recalls.GetRecallsByYmmError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recalls
  .getRecallsByYmm({ year: "some example string", make: "some example string", model: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RecallsYmmResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>year</code> | <code>string</code> | The 4-digit model year (e.g. `2019`). |
| <code>make</code> | <code>string</code> | The vehicle manufacturer name (e.g. `Toyota`). Case-insensitive. |
| <code>model</code> | <code>string</code> | The vehicle model name (e.g. `Camry`). Case-insensitive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recalls.getRecallsByYmm(request)`

- **OnSuccess**: <code>[V1RecallsYmmResponse](src/models/v1-recalls-ymm-response.ts)</code>
- **OnError**: throws <code>[Recalls.GetRecallsByYmmError](src/resources/recalls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recalls.getRecallsByYmm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RecallsYmmResponse, Recalls.GetRecallsByYmmError&gt;</code>, with `result.value` of type <code>[V1RecallsYmmResponse](src/models/v1-recalls-ymm-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVehicleRecalls(request: Recalls.GetVehicleRecallsRequest, options?: RequestOptions): ApiPromise&lt;V1RecallsResponse, Recalls.GetVehicleRecallsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve open safety recalls for a vehicle by VIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recalls.getVehicleRecalls({ vin: "some example string" });
  // TODO: Handle 'response' of type V1RecallsResponse
} catch (err) {
  // TODO: Handle 'err' of type Recalls.GetVehicleRecallsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recalls.getVehicleRecalls({ vin: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RecallsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | The 17 character long vehicle identification number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recalls.getVehicleRecalls(request)`

- **OnSuccess**: <code>[V1RecallsResponse](src/models/v1-recalls-response.ts)</code>
- **OnError**: throws <code>[Recalls.GetVehicleRecallsError](src/resources/recalls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recalls.getVehicleRecalls(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RecallsResponse, Recalls.GetVehicleRecallsError&gt;</code>, with `result.value` of type <code>[V1RecallsResponse](src/models/v1-recalls-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitRecallsBatch(request: Recalls.SubmitRecallsBatchRequest, options?: RequestOptions): ApiPromise&lt;V1RecallsBatchSubmitResponse, Recalls.SubmitRecallsBatchError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recalls.submitRecallsBatch({
    body: {
      vins: ["1HGBH41JXMN109186", "5YJSA1E26HF000001"],
      webhookUrl: "https://example.com/webhooks/carsxe-recalls",
    },
  });
  // TODO: Handle 'response' of type V1RecallsBatchSubmitResponse
} catch (err) {
  // TODO: Handle 'err' of type Recalls.SubmitRecallsBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recalls
  .submitRecallsBatch({
    body: {
      vins: ["1HGBH41JXMN109186", "5YJSA1E26HF000001"],
      webhookUrl: "https://example.com/webhooks/carsxe-recalls",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RecallsBatchSubmitResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1RecallsBatchSubmitRequest](src/models/v1-recalls-batch-submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recalls.submitRecallsBatch(request)`

- **OnSuccess**: <code>[V1RecallsBatchSubmitResponse](src/models/v1-recalls-batch-submit-response.ts)</code>
- **OnError**: throws <code>[Recalls.SubmitRecallsBatchError](src/resources/recalls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recalls.submitRecallsBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RecallsBatchSubmitResponse, Recalls.SubmitRecallsBatchError&gt;</code>, with `result.value` of type <code>[V1RecallsBatchSubmitResponse](src/models/v1-recalls-batch-submit-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Recognition

> Source: [Recognition](src/resources/recognition.ts)

<details>
<summary><code>recognizePlate(request: Recognition.RecognizePlateRequest, options?: RequestOptions): ApiPromise&lt;PlaterecognitionResponse, Recognition.RecognizePlateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract a license plate number from an image of a vehicle. Send a JSON body containing an `image_url` field with a URL to the image.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recognition.recognizePlate({
    body: { imageUrl: "https://example.com/car-photo.jpg" },
  });
  // TODO: Handle 'response' of type PlaterecognitionResponse
} catch (err) {
  // TODO: Handle 'err' of type Recognition.RecognizePlateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recognition
  .recognizePlate({ body: { imageUrl: "https://example.com/car-photo.jpg" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PlaterecognitionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PlaterecognitionRequest](src/models/platerecognition-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recognition.recognizePlate(request)`

- **OnSuccess**: <code>[PlaterecognitionResponse](src/models/platerecognition-response.ts)</code>
- **OnError**: throws <code>[Recognition.RecognizePlateError](src/resources/recognition.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recognition.recognizePlate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PlaterecognitionResponse, Recognition.RecognizePlateError&gt;</code>, with `result.value` of type <code>[PlaterecognitionResponse](src/models/platerecognition-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vinOcr(request: Recognition.VinOcrRequest, options?: RequestOptions): ApiPromise&lt;V1VinocrResponse, Recognition.VinOcrError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract a VIN from a photo. Send a JSON body containing an `image_url` field with either a URL to an image or a base64-encoded image string.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.recognition.vinOcr({
    body: { imageUrl: "https://example.com/vin-plate.jpg" },
  });
  // TODO: Handle 'response' of type V1VinocrResponse
} catch (err) {
  // TODO: Handle 'err' of type Recognition.VinOcrError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.recognition
  .vinOcr({ body: { imageUrl: "https://example.com/vin-plate.jpg" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1VinocrResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1VinocrRequest](src/models/v1-vinocr-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.recognition.vinOcr(request)`

- **OnSuccess**: <code>[V1VinocrResponse](src/models/v1-vinocr-response.ts)</code>
- **OnError**: throws <code>[Recognition.VinOcrError](src/resources/recognition.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.recognition.vinOcr(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1VinocrResponse, Recognition.VinOcrError&gt;</code>, with `result.value` of type <code>[V1VinocrResponse](src/models/v1-vinocr-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Specifications

> Source: [Specifications](src/resources/specifications.ts)

<details>
<summary><code>getInternationalVinDecoder(request: Specifications.GetInternationalVinDecoderRequest, options?: RequestOptions): ApiPromise&lt;V1InternationalVinDecoderResponse, Specifications.GetInternationalVinDecoderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode a non-US (international) VIN into vehicle attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.specifications.getInternationalVinDecoder({ vin: "some example string" });
  // TODO: Handle 'response' of type V1InternationalVinDecoderResponse
} catch (err) {
  // TODO: Handle 'err' of type Specifications.GetInternationalVinDecoderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.specifications
  .getInternationalVinDecoder({ vin: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1InternationalVinDecoderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | The 17 character long vehicle identification number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.specifications.getInternationalVinDecoder(request)`

- **OnSuccess**: <code>[V1InternationalVinDecoderResponse](src/models/v1-international-vin-decoder-response.ts)</code>
- **OnError**: throws <code>[Specifications.GetInternationalVinDecoderError](src/resources/specifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.specifications.getInternationalVinDecoder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1InternationalVinDecoderResponse, Specifications.GetInternationalVinDecoderError&gt;</code>, with `result.value` of type <code>[V1InternationalVinDecoderResponse](src/models/v1-international-vin-decoder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVehicleSpecs(request: Specifications.GetVehicleSpecsRequest, options?: RequestOptions): ApiPromise&lt;SpecsResponse, Specifications.GetVehicleSpecsError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.specifications.getVehicleSpecs({ vin: "some example string" });
  // TODO: Handle 'response' of type SpecsResponse
} catch (err) {
  // TODO: Handle 'err' of type Specifications.GetVehicleSpecsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.specifications.getVehicleSpecs({ vin: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SpecsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | The 17 character long vehicle identification number. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | The format of the response. One of `json` or `xml`.<br>**Default**: "json" |
| <code>deepdata?</code> | <code>[Deepdata](src/models/deepdata.ts)</code> | Request extra data. Set to `1` to use. Significantly slower than the regular request but retrieves additional data. |
| <code>disableIntVinDecoding?</code> | <code>[DisableIntVinDecoding](src/models/disable-int-vin-decoding.ts)</code> | Set to `1` to disable the International VIN decoding fallback and return an error instead of a potential partial response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.specifications.getVehicleSpecs(request)`

- **OnSuccess**: <code>[SpecsResponse](src/models/specs-response.ts)</code>
- **OnError**: throws <code>[Specifications.GetVehicleSpecsError](src/resources/specifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.specifications.getVehicleSpecs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SpecsResponse, Specifications.GetVehicleSpecsError&gt;</code>, with `result.value` of type <code>[SpecsResponse](src/models/specs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## YearMakeModel

> Source: [YearMakeModel](src/resources/year-make-model.ts)

<details>
<summary><code>decodeObdCode(request: YearMakeModel.DecodeObdCodeRequest, options?: RequestOptions): ApiPromise&lt;ObdcodesdecoderResponse, YearMakeModel.DecodeObdCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode an OBD-II diagnostic trouble code (e.g. P0115).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.yearMakeModel.decodeObdCode({ code: "some example string" });
  // TODO: Handle 'response' of type ObdcodesdecoderResponse
} catch (err) {
  // TODO: Handle 'err' of type YearMakeModel.DecodeObdCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.yearMakeModel.decodeObdCode({ code: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObdcodesdecoderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | The OBD code. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.yearMakeModel.decodeObdCode(request)`

- **OnSuccess**: <code>[ObdcodesdecoderResponse](src/models/obdcodesdecoder-response.ts)</code>
- **OnError**: throws <code>[YearMakeModel.DecodeObdCodeError](src/resources/year-make-model.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.yearMakeModel.decodeObdCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObdcodesdecoderResponse, YearMakeModel.DecodeObdCodeError&gt;</code>, with `result.value` of type <code>[ObdcodesdecoderResponse](src/models/obdcodesdecoder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getYearMakeModel(request: YearMakeModel.GetYearMakeModelRequest, options?: RequestOptions): ApiPromise&lt;V1YmmResponse, YearMakeModel.GetYearMakeModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up vehicle data by year, make and model (and optionally trim) without a VIN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.yearMakeModel.getYearMakeModel({
    year: "some example string",
    make: "some example string",
    model: "some example string",
  });
  // TODO: Handle 'response' of type V1YmmResponse
} catch (err) {
  // TODO: Handle 'err' of type YearMakeModel.GetYearMakeModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.yearMakeModel
  .getYearMakeModel({
    year: "some example string",
    make: "some example string",
    model: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1YmmResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>year</code> | <code>string</code> | The manufacturing year of the vehicle (numeric, between 1900 and the current model year plus one). |
| <code>make</code> | <code>string</code> | The manufacturer of the vehicle (e.g., Toyota, Ford, BMW). |
| <code>model</code> | <code>string</code> | The specific model of the vehicle (e.g., Camry, F-150, X5). |
| <code>trim?</code> | <code>string</code> | The vehicle trim (e.g., XLE, XSE). |
| <code>allTrimOptions?</code> | <code>[AllTrimOptions](src/models/all-trim-options.ts)</code> | Return all trim options available for the year, make and model. Set to `1` to use. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.yearMakeModel.getYearMakeModel(request)`

- **OnSuccess**: <code>[V1YmmResponse](src/models/v1-ymm-response.ts)</code>
- **OnError**: throws <code>[YearMakeModel.GetYearMakeModelError](src/resources/year-make-model.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.yearMakeModel.getYearMakeModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1YmmResponse, YearMakeModel.GetYearMakeModelError&gt;</code>, with `result.value` of type <code>[V1YmmResponse](src/models/v1-ymm-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getYearMakeModelOptions(request?: YearMakeModel.GetYearMakeModelOptionsRequest, options?: RequestOptions): ApiPromise&lt;V1YmmOptionsResponse, YearMakeModel.GetYearMakeModelOptionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Populate Year, Make, Model, and Variant dropdown menus. Each response returns exactly one layer. `dimension` is optional — when omitted, the response shape is inferred from `make`/`model`/`year`. Billing: most calls cost 1 unit. `dimension=variants` with `year` + `make` (no `model`) costs 1 unit per model; the response includes `modelCount`. Required filters help you get better, more relevant results. `year`, `make`, and `model` can be combined for reversed lookups (e.g. years for a given make+model).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.yearMakeModel.getYearMakeModelOptions();
  // TODO: Handle 'response' of type V1YmmOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type YearMakeModel.GetYearMakeModelOptionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.yearMakeModel.getYearMakeModelOptions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1YmmOptionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dimension?</code> | <code>[Dimension](src/models/dimension.ts)</code> | Return exactly this array when required filters are present. If omitted, the response is inferred automatically from `make`/`model`/`year`. |
| <code>year?</code> | <code>string</code> | Filter to a specific manufacturing year. Required when filtering by `model` without `make`. |
| <code>make?</code> | <code>string</code> | Filter to a specific manufacturer (e.g., Toyota, Ford, Lexus). Required for `dimension=models`. |
| <code>model?</code> | <code>string</code> | Filter to a specific model (e.g., Camry, F-150, LX). Required for `dimension=trims` and for `dimension=variants` unless both `year` and `make` are set. |
| <code>trim?</code> | <code>string</code> | Optional substring filter on trim names. Only applied when querying `dimension=trims` or `dimension=variants`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.yearMakeModel.getYearMakeModelOptions(request)`

- **OnSuccess**: <code>[V1YmmOptionsResponse](src/models/v1-ymm-options-response.ts)</code>
- **OnError**: throws <code>[YearMakeModel.GetYearMakeModelOptionsError](src/resources/year-make-model.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.yearMakeModel.getYearMakeModelOptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1YmmOptionsResponse, YearMakeModel.GetYearMakeModelOptionsError&gt;</code>, with `result.value` of type <code>[V1YmmOptionsResponse](src/models/v1-ymm-options-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CarsXeError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

