# Reference

> Source: [ApibaraClient](src/client.ts)

## ChangeStream

> Source: [ChangeStream](src/resources/change-stream.ts)

<details>
<summary><code>listVehicleChanges(request?: ChangeStream.ListVehicleChangesRequest, options?: RequestOptions): ApiPromise&lt;VehicleChangesResponse, ChangeStream.ListVehicleChangesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read material Copart and IAAI changes in monotonically increasing sequence order. Persist meta.next_cursor only after your local transaction succeeds, then pass it back as after on the next request. Sequence gaps are valid. Non-material technical null/zero initialization noise is filtered. If a cursor falls outside the retained window, the API returns HTTP 410 cursor_expired instead of silently skipping events. New reserve.changed events carry pricing.seller_reserve.* fields when a source-observed reserve status or inferred threshold changes. Reserve Off alone does not establish a numerical reserve.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.changeStream.listVehicleChanges();
  // TODO: Handle 'response' of type VehicleChangesResponse
} catch (err) {
  // TODO: Handle 'err' of type ChangeStream.ListVehicleChangesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.changeStream.listVehicleChanges().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VehicleChangesResponse
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
| <code>after?</code> | <code>number</code> | Return events with sequence greater than this checkpoint. Start with 0 for the oldest retained event.<br>**Default**: 0 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>platform?</code> | <code>[Platform](src/models/platform.ts)</code> | - |
| <code>eventType?</code> | <code>[EventType](src/models/event-type.ts)</code> | - |
| <code>terminal?</code> | <code>boolean</code> | - |
| <code>lotNumber?</code> | <code>string</code> | - |
| <code>vin?</code> | <code>string</code> | - |
| <code>includeRecord?</code> | <code>[IncludeRecord1](src/models/unions/include-record1.ts)</code> | Optional current-record hydration. true/all adds the current full normalized vehicle record to every event where available; created adds it only to lot.created. Sync Center incremental feeds use created to stay self-contained without duplicating large media payloads on every bid/status event. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.changeStream.listVehicleChanges(request)`

- **OnSuccess**: <code>[VehicleChangesResponse](src/models/vehicle-changes-response.ts)</code>
- **OnError**: throws <code>[ChangeStream.ListVehicleChangesError](src/resources/change-stream.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.changeStream.listVehicleChanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VehicleChangesResponse, ChangeStream.ListVehicleChangesError&gt;</code>, with `result.value` of type <code>[VehicleChangesResponse](src/models/vehicle-changes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Filters

> Source: [Filters](src/resources/filters.ts)

<details>
<summary><code>getVehicleFilters(request?: Filters.GetVehicleFiltersRequest, options?: RequestOptions): ApiPromise&lt;FiltersResponse, Filters.GetVehicleFiltersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get available filters metadata. With make, returns series/model-family options. With make plus optional series and/or model, returns dependent generation options.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filters.getVehicleFilters({ make: "BMW", series: "Series 3", model: "X5" });
  // TODO: Handle 'response' of type FiltersResponse
} catch (err) {
  // TODO: Handle 'err' of type Filters.GetVehicleFiltersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filters
  .getVehicleFilters({ make: "BMW", series: "Series 3", model: "X5" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FiltersResponse
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
| <code>make?</code> | <code>string</code> | Vehicle make used to return dependent generation options. |
| <code>series?</code> | <code>string</code> | Optional series/model-family context used with make to narrow dependent generation options. |
| <code>model?</code> | <code>string</code> | Vehicle model used together with make to return dependent generation options. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filters.getVehicleFilters(request)`

- **OnSuccess**: <code>[FiltersResponse](src/models/filters-response.ts)</code>
- **OnError**: throws <code>[Filters.GetVehicleFiltersError](src/resources/filters.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filters.getVehicleFilters(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FiltersResponse, Filters.GetVehicleFiltersError&gt;</code>, with `result.value` of type <code>[FiltersResponse](src/models/filters-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ImageProxy

> Source: [ImageProxy](src/resources/image-proxy.ts)

<details>
<summary><code>proxyAuctionImage(request: ImageProxy.ProxyAuctionImageRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, ImageProxy.ProxyAuctionImageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a supported auction vehicle image through the Apibara image proxy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.imageProxy.proxyAuctionImage({
    url: "https://example.com/vehicle-image.webp",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type ImageProxy.ProxyAuctionImageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imageProxy
  .proxyAuctionImage({ url: "https://example.com/vehicle-image.webp" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
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
| <code>url</code> | <code>string</code> | Source image URL. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imageProxy.proxyAuctionImage(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[ImageProxy.ProxyAuctionImageError](src/resources/image-proxy.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imageProxy.proxyAuctionImage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, ImageProxy.ProxyAuctionImageError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Locations

> Source: [Locations](src/resources/locations.ts)

<details>
<summary><code>listAuctionLocations(request?: Locations.ListAuctionLocationsRequest, options?: RequestOptions): ApiPromise&lt;LocationsResponse, Locations.ListAuctionLocationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Copart and IAAI auction locations by platform, state, facility ID, text query, ZIP, and radius.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locations.listAuctionLocations({
    state: "FL",
    facilityId: "136",
    q: "Birmingham",
    zip: "33166",
    radius: 50,
    perPage: 20,
  });
  // TODO: Handle 'response' of type LocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Locations.ListAuctionLocationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locations
  .listAuctionLocations({
    state: "FL",
    facilityId: "136",
    q: "Birmingham",
    zip: "33166",
    radius: 50,
    perPage: 20,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LocationsResponse
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
| <code>platform?</code> | <code>[Platform](src/models/platform.ts)</code> | Auction platform. |
| <code>state?</code> | <code>string</code> | State code. |
| <code>facilityId?</code> | <code>string</code> | Facility ID. |
| <code>q?</code> | <code>string</code> | Search by facility name, city, state code, or ZIP. |
| <code>zip?</code> | <code>string</code> | ZIP code for location-based search. |
| <code>radius?</code> | <code>number</code> | Search radius around ZIP. |
| <code>units?</code> | <code>[Units](src/models/units.ts)</code> | Distance units.<br>**Default**: "mi" |
| <code>perPage?</code> | <code>number</code> | Number of records per page. Maximum: 20.<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locations.listAuctionLocations(request)`

- **OnSuccess**: <code>[LocationsResponse](src/models/locations-response.ts)</code>
- **OnError**: throws <code>[Locations.ListAuctionLocationsError](src/resources/locations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.locations.listAuctionLocations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LocationsResponse, Locations.ListAuctionLocationsError&gt;</code>, with `result.value` of type <code>[LocationsResponse](src/models/locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Market

> Source: [Market](src/resources/market.ts)

<details>
<summary><code>marketSoldPriceStats(request: Market.MarketSoldPriceStatsRequest, options?: RequestOptions): ApiPromise&lt;MarketSoldPriceStatsResponse, Market.MarketSoldPriceStatsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregate retained positive sold-history prices by make and optional model/year/damage/source/date period. Responses are cached briefly.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.market.marketSoldPriceStats({ make: "BMW", model: "X5" });
  // TODO: Handle 'response' of type MarketSoldPriceStatsResponse
} catch (err) {
  // TODO: Handle 'err' of type Market.MarketSoldPriceStatsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.market.marketSoldPriceStats({ make: "BMW", model: "X5" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MarketSoldPriceStatsResponse
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
| <code>make</code> | <code>string</code> | - |
| <code>model?</code> | <code>string</code> | - |
| <code>year?</code> | <code>number</code> | - |
| <code>damage?</code> | <code>string</code> | - |
| <code>auction?</code> | <code>[Auction](src/models/auction.ts)</code> | - |
| <code>saleDateFrom?</code> | <code>string</code> (date) | - |
| <code>saleDateTo?</code> | <code>string</code> (date) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.market.marketSoldPriceStats(request)`

- **OnSuccess**: <code>[MarketSoldPriceStatsResponse](src/models/market-sold-price-stats-response.ts)</code>
- **OnError**: throws <code>[Market.MarketSoldPriceStatsError](src/resources/market.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.market.marketSoldPriceStats(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MarketSoldPriceStatsResponse, Market.MarketSoldPriceStatsError&gt;</code>, with `result.value` of type <code>[MarketSoldPriceStatsResponse](src/models/market-sold-price-stats-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## RelatedVehicles

> Source: [RelatedVehicles](src/resources/related-vehicles.ts)

<details>
<summary><code>getRelatedVehicles(request: RelatedVehicles.GetRelatedVehiclesRequest, options?: RequestOptions): ApiPromise&lt;VehicleListResponse, RelatedVehicles.GetRelatedVehiclesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get related or similar auction vehicles by VIN or lot number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.relatedVehicles.getRelatedVehicles({
    slugVin: "WBAVL1C58FVY28848 or 46045959 or 111046045959",
  });
  // TODO: Handle 'response' of type VehicleListResponse
} catch (err) {
  // TODO: Handle 'err' of type RelatedVehicles.GetRelatedVehiclesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.relatedVehicles
  .getRelatedVehicles({ slugVin: "WBAVL1C58FVY28848 or 46045959 or 111046045959" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VehicleListResponse
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
| <code>slugVin</code> | <code>string</code> | Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.relatedVehicles.getRelatedVehicles(request)`

- **OnSuccess**: <code>[VehicleListResponse](src/models/vehicle-list-response.ts)</code>
- **OnError**: throws <code>[RelatedVehicles.GetRelatedVehiclesError](src/resources/related-vehicles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.relatedVehicles.getRelatedVehicles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VehicleListResponse, RelatedVehicles.GetRelatedVehiclesError&gt;</code>, with `result.value` of type <code>[VehicleListResponse](src/models/vehicle-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Shipping

> Source: [Shipping](src/resources/shipping.ts)

<details>
<summary><code>getAuctionToPortShipping(request?: Shipping.GetAuctionToPortShippingRequest, options?: RequestOptions): ApiPromise&lt;ShippingResponse, Shipping.GetAuctionToPortShippingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get delivery prices from auction location to one or more destination ports by VIN or lot number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.getAuctionToPortShipping({
    vin: "5TFLA5DBXTX349827",
    lotNumber: "78691915",
    ports: "Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
  });
  // TODO: Handle 'response' of type ShippingResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.GetAuctionToPortShippingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping
  .getAuctionToPortShipping({
    vin: "5TFLA5DBXTX349827",
    lotNumber: "78691915",
    ports: "Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShippingResponse
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
| <code>vin?</code> | <code>string</code> | Vehicle VIN. |
| <code>lotNumber?</code> | <code>string</code> | Auction lot number. |
| <code>ports?</code> | <code>string</code> | Comma-separated list of destination ports to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.getAuctionToPortShipping(request)`

- **OnSuccess**: <code>[ShippingResponse](src/models/shipping-response.ts)</code>
- **OnError**: throws <code>[Shipping.GetAuctionToPortShippingError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.getAuctionToPortShipping(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShippingResponse, Shipping.GetAuctionToPortShippingError&gt;</code>, with `result.value` of type <code>[ShippingResponse](src/models/shipping-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVehicleShipping(request: Shipping.GetVehicleShippingRequest, options?: RequestOptions): ApiPromise&lt;ShippingResponse, Shipping.GetVehicleShippingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get auction-to-port shipping prices for a vehicle by VIN or lot number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.shipping.getVehicleShipping({
    slugVin: "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    ports: "Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
  });
  // TODO: Handle 'response' of type ShippingResponse
} catch (err) {
  // TODO: Handle 'err' of type Shipping.GetVehicleShippingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.shipping
  .getVehicleShipping({
    slugVin: "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    ports: "Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ShippingResponse
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
| <code>slugVin</code> | <code>string</code> | Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number. |
| <code>ports?</code> | <code>string</code> | Comma-separated list of destination ports to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.shipping.getVehicleShipping(request)`

- **OnSuccess**: <code>[ShippingResponse](src/models/shipping-response.ts)</code>
- **OnError**: throws <code>[Shipping.GetVehicleShippingError](src/resources/shipping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.shipping.getVehicleShipping(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ShippingResponse, Shipping.GetVehicleShippingError&gt;</code>, with `result.value` of type <code>[ShippingResponse](src/models/shipping-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UrlTools

> Source: [UrlTools](src/resources/url-tools.ts)

<details>
<summary><code>getVehicleDetailsFromUrl(request: UrlTools.GetVehicleDetailsFromUrlRequest, options?: RequestOptions): ApiPromise&lt;VehicleDetailsResponse, UrlTools.GetVehicleDetailsFromUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve vehicle auction details from a Copart or IAAI vehicle URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.urlTools.getVehicleDetailsFromUrl({
    url: "https://www.copart.com/lot/51015256/clean-title-2014-cadillac-escalade-esv-platinum-me-windham",
  });
  // TODO: Handle 'response' of type VehicleDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type UrlTools.GetVehicleDetailsFromUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.urlTools
  .getVehicleDetailsFromUrl({
    url: "https://www.copart.com/lot/51015256/clean-title-2014-cadillac-escalade-esv-platinum-me-windham",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VehicleDetailsResponse
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
| <code>url</code> | <code>string</code> | Vehicle URL. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.urlTools.getVehicleDetailsFromUrl(request)`

- **OnSuccess**: <code>[VehicleDetailsResponse](src/models/vehicle-details-response.ts)</code>
- **OnError**: throws <code>[UrlTools.GetVehicleDetailsFromUrlError](src/resources/url-tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.urlTools.getVehicleDetailsFromUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VehicleDetailsResponse, UrlTools.GetVehicleDetailsFromUrlError&gt;</code>, with `result.value` of type <code>[VehicleDetailsResponse](src/models/vehicle-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/resources/usage.ts)

<details>
<summary><code>getApiUsage(options?: RequestOptions): ApiPromise&lt;UsageResponse, Usage.GetApiUsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve current API request usage and plan limit information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usage.getApiUsage();
  // TODO: Handle 'response' of type UsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Usage.GetApiUsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usage.getApiUsage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usage.getApiUsage()`

- **OnSuccess**: <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: throws <code>[Usage.GetApiUsageError](src/resources/usage.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usage.getApiUsage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageResponse, Usage.GetApiUsageError&gt;</code>, with `result.value` of type <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VehicleAuction

> Source: [VehicleAuction](src/resources/vehicle-auction.ts)

<details>
<summary><code>getVehicleSellerReserve(request: VehicleAuction.GetVehicleSellerReserveRequest, options?: RequestOptions): ApiPromise&lt;VehiclesReserveResponse, VehicleAuction.GetVehicleSellerReserveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns source-backed reserve price only when explicitly disclosed, otherwise null; observed bid threshold bounds are shown separately and only when confirmed by bid-crossing evidence. Reserve Off may mean the reserve was removed. Include_events=1 adds recent observation history. This endpoint consumes one standard API request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleAuction.getVehicleSellerReserve({ slugVin: "some example string" });
  // TODO: Handle 'response' of type VehiclesReserveResponse
} catch (err) {
  // TODO: Handle 'err' of type VehicleAuction.GetVehicleSellerReserveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vehicleAuction
  .getVehicleSellerReserve({ slugVin: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VehiclesReserveResponse
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
| <code>slugVin</code> | <code>string</code> | Vehicle VIN, lot number, LOT-IAAI-<lot> or lot slug. |
| <code>includeEvents?</code> | <code>boolean</code> | Include recent reserve observations.<br>**Default**: false |
| <code>limit?</code> | <code>number</code> | Maximum number of events.<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vehicleAuction.getVehicleSellerReserve(request)`

- **OnSuccess**: <code>[VehiclesReserveResponse](src/models/vehicles-reserve-response.ts)</code>
- **OnError**: throws <code>[VehicleAuction.GetVehicleSellerReserveError](src/resources/vehicle-auction.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vehicleAuction.getVehicleSellerReserve(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VehiclesReserveResponse, VehicleAuction.GetVehicleSellerReserveError&gt;</code>, with `result.value` of type <code>[VehiclesReserveResponse](src/models/vehicles-reserve-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VehicleHistory

> Source: [VehicleHistory](src/resources/vehicle-history.ts)

<details>
<summary><code>getVehicleHistory(request: VehicleHistory.GetVehicleHistoryRequest, options?: RequestOptions): ApiPromise&lt;VehicleHistoryResponse, VehicleHistory.GetVehicleHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get auction history records for a vehicle by VIN or lot number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleHistory.getVehicleHistory({
    slugVin: "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    perPage: 20,
    cursor: "next_cursor",
  });
  // TODO: Handle 'response' of type VehicleHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type VehicleHistory.GetVehicleHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vehicleHistory
  .getVehicleHistory({
    slugVin: "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    perPage: 20,
    cursor: "next_cursor",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VehicleHistoryResponse
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
| <code>slugVin</code> | <code>string</code> | Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number. |
| <code>perPage?</code> | <code>number</code> | Number of records per page. Maximum: 20.<br>**Default**: 20 |
| <code>cursor?</code> | <code>string</code> | Cursor for pagination. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vehicleHistory.getVehicleHistory(request)`

- **OnSuccess**: <code>[VehicleHistoryResponse](src/models/vehicle-history-response.ts)</code>
- **OnError**: throws <code>[VehicleHistory.GetVehicleHistoryError](src/resources/vehicle-history.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vehicleHistory.getVehicleHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VehicleHistoryResponse, VehicleHistory.GetVehicleHistoryError&gt;</code>, with `result.value` of type <code>[VehicleHistoryResponse](src/models/vehicle-history-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Vehicles

> Source: [Vehicles](src/resources/vehicles.ts)

<details>
<summary><code>getVehicleDetails(request: Vehicles.GetVehicleDetailsRequest, options?: RequestOptions): ApiPromise&lt;VehicleDetailsResponse, Vehicles.GetVehicleDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get vehicle auction details by VIN or lot number. Use include=history,vin_lots to embed retained sale history and other known lots for the same VIN in one response. Full vehicle detail pricing.seller_reserve contains source-observed reserve status, optional confirmed price and inferred bid bounds. Unknown or ambiguous Reserve Off will not be presented as an exact reserve price.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getVehicleDetails({
    slugVin: "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    include: "history,vin_lots",
  });
  // TODO: Handle 'response' of type VehicleDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type Vehicles.GetVehicleDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vehicles
  .getVehicleDetails({
    slugVin: "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    include: "history,vin_lots",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VehicleDetailsResponse
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
| <code>slugVin</code> | <code>string</code> | Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number. |
| <code>include?</code> | <code>string</code> | Optionally embed related detail-page data in the same response. Comma-separated values: history adds retained sale-history records across known Copart/IAAI lots for the VIN; vin_lots adds other known auction lots for the same VIN in summary form. Example: include=history,vin_lots. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vehicles.getVehicleDetails(request)`

- **OnSuccess**: <code>[VehicleDetailsResponse](src/models/vehicle-details-response.ts)</code>
- **OnError**: throws <code>[Vehicles.GetVehicleDetailsError](src/resources/vehicles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vehicles.getVehicleDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VehicleDetailsResponse, Vehicles.GetVehicleDetailsError&gt;</code>, with `result.value` of type <code>[VehicleDetailsResponse](src/models/vehicle-details-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAuctionVehicles(request?: Vehicles.ListAuctionVehiclesRequest, options?: RequestOptions): ApiPromise&lt;VehicleListResponse, Vehicles.ListAuctionVehiclesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and incrementally synchronize normalized Copart and IAAI inventory. Filters are cumulative. Applied filters are echoed in meta.applied_filters; unrecognized query keys are reported in meta.unknown_filters. Use include_total=true only when an exact reconciliation count is required.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.listAuctionVehicles({
    s: "BMW X5 / 1HGCM82633A123456 / 12345678",
    upcoming: Upcoming.Only,
    auctionDatePending: false,
    updatedWithinMinutes: 15,
    priceMin: 1000,
    priceMax: 15000,
    yearFrom: 2018,
    yearTo: 2024,
    auctionType: AuctionType._1,
    platform: Platform.Copart,
    type: "AUTOMOBILE",
    bodyStyle: "Coupe",
    bodyType: "Coupe",
    make: "BMW",
    series: "Series 3",
    model: "X5",
    generationId: 379,
    generation: "F15",
    color: ["Black", "White"],
    vinPrefix: "1,4,5",
    fuelType: [FuelType.Gasoline, FuelType.Hybrid],
    odometerFrom: 0,
    odometerTo: 120000,
    engineSizeFrom: 2,
    engineSizeTo: 5,
    engineType: EngineType.I,
    transmission: [Transmission.Automatic],
    cylinders: [4, 6],
    driveType: [DriveType.Awd, DriveType.Fwd],
    damage: [Damage.Hail, Damage.Mechanical],
    cursor: "next_cursor or prev_cursor",
    zip: "33166",
    radius: 50,
    perPage: 20,
    includeTotal: true,
    facilityId: "136",
    locState: "FL",
    officeName: "Miami",
    auctionDateFrom: "2026-03-20",
    auctionDateTo: "2026-03-25",
    saleDocumentType: "clean",
  });
  // TODO: Handle 'response' of type VehicleListResponse
} catch (err) {
  // TODO: Handle 'err' of type Vehicles.ListAuctionVehiclesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vehicles
  .listAuctionVehicles({
    s: "BMW X5 / 1HGCM82633A123456 / 12345678",
    upcoming: Upcoming.Only,
    auctionDatePending: false,
    updatedWithinMinutes: 15,
    priceMin: 1000,
    priceMax: 15000,
    yearFrom: 2018,
    yearTo: 2024,
    auctionType: AuctionType._1,
    platform: Platform.Copart,
    type: "AUTOMOBILE",
    bodyStyle: "Coupe",
    bodyType: "Coupe",
    make: "BMW",
    series: "Series 3",
    model: "X5",
    generationId: 379,
    generation: "F15",
    color: ["Black", "White"],
    vinPrefix: "1,4,5",
    fuelType: [FuelType.Gasoline, FuelType.Hybrid],
    odometerFrom: 0,
    odometerTo: 120000,
    engineSizeFrom: 2,
    engineSizeTo: 5,
    engineType: EngineType.I,
    transmission: [Transmission.Automatic],
    cylinders: [4, 6],
    driveType: [DriveType.Awd, DriveType.Fwd],
    damage: [Damage.Hail, Damage.Mechanical],
    cursor: "next_cursor or prev_cursor",
    zip: "33166",
    radius: 50,
    perPage: 20,
    includeTotal: true,
    facilityId: "136",
    locState: "FL",
    officeName: "Miami",
    auctionDateFrom: "2026-03-20",
    auctionDateTo: "2026-03-25",
    saleDocumentType: "clean",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VehicleListResponse
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
| <code>s?</code> | <code>string</code> | Search by lot number, VIN, or vehicle title. |
| <code>lotStatus?</code> | <code>[LotStatus](src/models/lot-status.ts)</code> | Lot status filter.<br>**Default**: "All" |
| <code>lotSubStatus?</code> | <code>[LotSubStatus](src/models/lot-sub-status.ts)</code> | Normalized lot sub-status. Open = active/open and not sold; Live = currently live when supported; Ended = ended/closed state. Open also includes imported active lots with an unassigned auction date. Their auction_at is null and auction_date_pending is true. Explicit date-range filters exclude unassigned dates.<br>**Default**: "Open" |
| <code>upcoming?</code> | <code>[Upcoming](src/models/upcoming.ts)</code> | Upcoming selector. all = no restriction; only = only upcoming eligible lots; without = exclude upcoming lots. This does not override Open/Sold state logic.<br>**Default**: "all" |
| <code>auctionDatePending?</code> | <code>boolean</code> | true returns only source listings whose auction date is not yet assigned; false excludes date-pending lots. |
| <code>updatedWithinMinutes?</code> | <code>number</code> | Return records whose updated_at changed within the requested number of minutes. Designed for incremental synchronization; combine with cursor pagination and auction filters. |
| <code>priceMin?</code> | <code>number</code> | Minimum price. |
| <code>priceMax?</code> | <code>number</code> | Maximum price. |
| <code>yearFrom?</code> | <code>number</code> | Minimum vehicle year. |
| <code>yearTo?</code> | <code>number</code> | Maximum vehicle year. |
| <code>auctionType?</code> | <code>[AuctionType](src/models/auction-type.ts)</code> | Numeric auction platform filter: 0 = all supported platforms, 1 = Copart, 2 = IAAI. Use either auction_type or platform in the same request.<br>**Default**: 0 |
| <code>platform?</code> | <code>[Platform](src/models/platform.ts)</code> | Readable auction platform filter. Use copart or iaai. Use either platform or auction_type in the same request. |
| <code>type?</code> | <code>[Type1](src/models/unions/type1.ts)</code> | Vehicle type. Multiple values are OR-ed; query-array syntax such as type[]=COUPE&type[]=AUTOMOBILE is supported. |
| <code>bodyStyle?</code> | <code>[BodyStyle](src/models/unions/body-style.ts)</code> | Filter by vehicle_specs.body_style. Multiple values are OR-ed. Query-array syntax is supported, for example body_style[]=Coupe&body_style[]=Convertible. IAAI uses its VehicleClass value; Copart uses the source-backed Body Style field. |
| <code>bodyType?</code> | <code>[BodyType](src/models/unions/body-type.ts)</code> | Compatibility alias for body_style. Multiple values are OR-ed. Prefer body_style for new integrations. |
| <code>make?</code> | <code>string</code> | Vehicle make. |
| <code>series?</code> | <code>[Series](src/models/unions/series.ts)</code> | Canonical vehicle series / model family. Examples: BMW Series 3, Mercedes-Benz C-Class, Toyota Camry, Audi A4, Ford F-150. Optional; can be combined with model and generation filters. |
| <code>model?</code> | <code>string</code> | Vehicle model. |
| <code>generationId?</code> | <code>[GenerationId](src/models/unions/generation-id.ts)</code> | Vehicle generation catalog ID. Use /vehicles/filters?make=BMW&model=X5 to discover valid IDs. Multiple IDs are supported. |
| <code>generation?</code> | <code>[Generation](src/models/unions/generation.ts)</code> | Human-readable generation alias, for example F15, E70 or G05. generation_id is preferred for stable integrations. |
| <code>color?</code> | <code>string[]</code> | Vehicle color. Multiple values are supported. |
| <code>vinPrefix?</code> | <code>[VinPrefix](src/models/unions/vin-prefix.ts)</code> | Match VINs that start with any supplied prefix (OR). Supports comma-separated values vin_prefix=1,4,5 and array syntax vin_prefix[]=1&vin_prefix[]=4&vin_prefix[]=5. Prefixes consist of 1–3 VIN letters/numbers; at most 20 unique prefixes. Combines with other filters, cursor, and include_total. Prefix does not guarantee manufacturing country. |
| <code>fuelType?</code> | <code>[FuelType](src/models/fuel-type.ts)[]</code> | Normalized fuel type; Hybrid includes source values Hybrid, Electric and Gas Hybrid, Hybrid Engine, and Electric and Diesel Hybrid. Multiple values are supported. |
| <code>odometerFrom?</code> | <code>number</code> | Minimum odometer value in miles. Vehicle responses also include the converted km value. |
| <code>odometerTo?</code> | <code>number</code> | Maximum odometer value in miles. Vehicle responses also include the converted km value. |
| <code>engineSizeFrom?</code> | <code>number</code> | Minimum engine size. |
| <code>engineSizeTo?</code> | <code>number</code> | Maximum engine size. |
| <code>engineType?</code> | <code>[EngineType1](src/models/unions/engine-type1.ts)</code> | Engine layout. I=inline, V=V engine, W=W engine, B/H=boxer/horizontally opposed. Scalar and repeated-array forms are supported. |
| <code>transmission?</code> | <code>[Transmission](src/models/transmission.ts)[]</code> | Transmission type. Multiple values are supported. |
| <code>cylinders?</code> | <code>number[]</code> | Number of cylinders. Multiple values are supported. |
| <code>driveType?</code> | <code>[DriveType](src/models/drive-type.ts)[]</code> | Drive type. Multiple values are supported. |
| <code>runCond?</code> | <code>[RunCond1](src/models/unions/run-cond1.ts)</code> | Source-backed running-condition filter. Multiple values are OR-ed; use both Run & Drive Verified and RUNS AND DRIVES for a combined Copart + IAAI running-vehicle filter. |
| <code>damage?</code> | <code>[Damage](src/models/damage.ts)[]</code> | Damage type. Multiple values are supported. |
| <code>hasKey?</code> | <code>[HasKey](src/models/has-key.ts)</code> | Filter vehicles by key availability. |
| <code>cursor?</code> | <code>string</code> | Cursor for pagination. |
| <code>zip?</code> | <code>string</code> | ZIP code for location-based search. |
| <code>radius?</code> | <code>number</code> | Search radius around ZIP. |
| <code>units?</code> | <code>[Units](src/models/units.ts)</code> | Distance units.<br>**Default**: "mi" |
| <code>perPage?</code> | <code>number</code> | Records per vehicle-search page. Default 20. The effective maximum is plan-dependent; public plan entitlements can use maxima of 20, 30 or 40, while approved custom plans may differ. Use the active account entitlement as the runtime source of truth.<br>**Default**: 20 |
| <code>includeTotal?</code> | <code>boolean</code> | When true, meta.total attempts an exact filtered count. For very large or expensive result sets the safety-bounded count may return null; cursor pagination remains available.<br>**Default**: false |
| <code>facilityId?</code> | <code>string</code> | Auction facility ID. |
| <code>locState?</code> | <code>[LocState](src/models/unions/loc-state.ts)</code> | Auction facility state/region code. Accepts a scalar or repeated/form-style array, e.g. loc_state=FL or loc_state[]=FL. |
| <code>officeName?</code> | <code>string</code> | Auction office or branch name. |
| <code>auctionDateFrom?</code> | <code>string</code> (date) | Auction date from. |
| <code>auctionDateTo?</code> | <code>string</code> (date) | Auction date to. |
| <code>todayOnly?</code> | <code>boolean</code> | Return only vehicles with auctions today.<br>**Default**: false |
| <code>saleDocumentPending?</code> | <code>boolean</code> | Filter by pending sale document.<br>**Default**: false |
| <code>saleDocumentType?</code> | <code>string</code> | Sale document type. |
| <code>sellerType?</code> | <code>[SellerType](src/models/seller-type.ts)</code> | Filter by name-based seller classification, not damage/title heuristics. Missing seller names are unknown and do not match non_insurance. For non_insurance, also provide make, model, facility_id or s with a specific VIN/lot; unscoped searches return 422 selective_filter_required. For a full catalogue, sync and filter known seller types locally. |
| <code>hasShippingPrice?</code> | <code>boolean</code> | Return only vehicles with shipping price data.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vehicles.listAuctionVehicles(request)`

- **OnSuccess**: <code>[VehicleListResponse](src/models/vehicle-list-response.ts)</code>
- **OnError**: throws <code>[Vehicles.ListAuctionVehiclesError](src/resources/vehicles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.vehicles.listAuctionVehicles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VehicleListResponse, Vehicles.ListAuctionVehiclesError&gt;</code>, with `result.value` of type <code>[VehicleListResponse](src/models/vehicle-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApibaraError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

