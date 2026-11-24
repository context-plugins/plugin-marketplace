# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ApibaraClient](apibara/client.py)

## ChangeStream

> Source: [ChangeStream](apibara/apis/change_stream.py)

<details>
<summary><code>def list_vehicle_changes(*, after: int | None = 0, limit: int | None = 100, platform: PlatformOrStr | None = None, event_type: EventTypeOrStr | None = None, terminal: bool | None = None, lot_number: str | None = None, vin: str | None = None, include_record: IncludeRecord1 | IncludeRecord1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VehicleChangesResponse, ListVehicleChangesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read material Copart and IAAI changes in monotonically increasing sequence order. Persist meta.next_cursor only after your local transaction succeeds, then pass it back as after on the next request. Sequence gaps are valid. Non-material technical null/zero initialization noise is filtered. If a cursor falls outside the retained window, the API returns HTTP 410 cursor_expired instead of silently skipping events. New reserve.changed events carry pricing.seller_reserve.* fields when a source-observed reserve status or inferred threshold changes. Reserve Off alone does not establish a numerical reserve.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.change_stream.with_raw_response.list_vehicle_changes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleChangesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVehicleChangesErrorBody
```

**Async**

```python
result = await async_client.change_stream.with_raw_response.list_vehicle_changes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleChangesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListVehicleChangesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>after</code> | <code>int \| None</code> | Return events with sequence greater than this checkpoint. Start with 0 for the oldest retained event.<br>**Default**: <code>0</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>platform</code> | <code>[PlatformOrStr](apibara/models/enums/platform.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>event_type</code> | <code>[EventTypeOrStr](apibara/models/enums/event_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>terminal</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>lot_number</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>vin</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_record</code> | <code>[IncludeRecord1](apibara/models/unions/include_record1.py) \| [IncludeRecord1Dict](apibara/models/unions/include_record1.py) \| None</code> | Optional current-record hydration. true/all adds the current full normalized vehicle record to every event where available; created adds it only to lot.created. Sync Center incremental feeds use created to stay self-contained without duplicating large media payloads on every bid/status event.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[VehicleChangesResponse](apibara/models/vehicle_changes_response.py), [ListVehicleChangesErrorBody](apibara/errors/list_vehicle_changes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VehicleChangesResponse](apibara/models/vehicle_changes_response.py)</code> -- Sequence-ordered change events.

**On `Failure`**: `error` is <code>[ListVehicleChangesErrorBody](apibara/errors/list_vehicle_changes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 422 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| 410 | <code>[ChangeCursorExpiredResponse](apibara/models/change_cursor_expired_response.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Filters

> Source: [Filters](apibara/apis/filters.py)

<details>
<summary><code>def get_vehicle_filters(*, make: str | None = None, series: str | None = None, model: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FiltersResponse, GetVehicleFiltersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get available filters metadata. With make, returns series/model-family options. With make plus optional series and/or model, returns dependent generation options.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.filters.with_raw_response.get_vehicle_filters(make="BMW", series="Series 3", model="X5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FiltersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleFiltersErrorBody
```

**Async**

```python
result = await async_client.filters.with_raw_response.get_vehicle_filters(make="BMW", series="Series 3", model="X5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FiltersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleFiltersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>make</code> | <code>str \| None</code> | Vehicle make used to return dependent generation options.<br>**Default**: <code>None</code> |
| <code>series</code> | <code>str \| None</code> | Optional series/model-family context used with make to narrow dependent generation options.<br>**Default**: <code>None</code> |
| <code>model</code> | <code>str \| None</code> | Vehicle model used together with make to return dependent generation options.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[FiltersResponse](apibara/models/filters_response.py), [GetVehicleFiltersErrorBody](apibara/errors/get_vehicle_filters_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FiltersResponse](apibara/models/filters_response.py)</code> -- Available filters metadata.

**On `Failure`**: `error` is <code>[GetVehicleFiltersErrorBody](apibara/errors/get_vehicle_filters_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ImageProxy

> Source: [ImageProxy](apibara/apis/image_proxy.py)

<details>
<summary><code>def proxy_auction_image(url: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, ProxyAuctionImageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a supported auction vehicle image through the Apibara image proxy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.image_proxy.with_raw_response.proxy_auction_image("https://example.com/vehicle-image.webp")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProxyAuctionImageErrorBody
```

**Async**

```python
result = await async_client.image_proxy.with_raw_response.proxy_auction_image("https://example.com/vehicle-image.webp")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProxyAuctionImageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>url</code> | <code>str</code> | Source image URL. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;FileResponse, [ProxyAuctionImageErrorBody](apibara/errors/proxy_auction_image_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Proxied image response.

**On `Failure`**: `error` is <code>[ProxyAuctionImageErrorBody](apibara/errors/proxy_auction_image_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Locations

> Source: [Locations](apibara/apis/locations.py)

<details>
<summary><code>def list_auction_locations(*, platform: PlatformOrStr | None = None, state: str | None = None, facility_id: str | None = None, q: str | None = None, zip_: str | None = None, radius: float | None = None, units: UnitsOrStr | None = Units.MI, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LocationsResponse, ListAuctionLocationsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Copart and IAAI auction locations by platform, state, facility ID, text query, ZIP, and radius.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.locations.with_raw_response.list_auction_locations(
    state="FL", facility_id="136", q="Birmingham", zip_="33166", radius=50, per_page=20
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAuctionLocationsErrorBody
```

**Async**

```python
result = await async_client.locations.with_raw_response.list_auction_locations(
    state="FL", facility_id="136", q="Birmingham", zip_="33166", radius=50, per_page=20
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LocationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAuctionLocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>platform</code> | <code>[PlatformOrStr](apibara/models/enums/platform.py) \| None</code> | Auction platform.<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | State code.<br>**Default**: <code>None</code> |
| <code>facility_id</code> | <code>str \| None</code> | Facility ID.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Search by facility name, city, state code, or ZIP.<br>**Default**: <code>None</code> |
| <code>zip_</code> | <code>str \| None</code> | ZIP code for location-based search.<br>**Default**: <code>None</code> |
| <code>radius</code> | <code>float \| None</code> | Search radius around ZIP.<br>**Default**: <code>None</code> |
| <code>units</code> | <code>[UnitsOrStr](apibara/models/enums/units.py) \| None</code> | Distance units.<br>**Default**: <code>Units.MI</code> |
| <code>per_page</code> | <code>int \| None</code> | Number of records per page. Maximum: 20.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[LocationsResponse](apibara/models/locations_response.py), [ListAuctionLocationsErrorBody](apibara/errors/list_auction_locations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LocationsResponse](apibara/models/locations_response.py)</code> -- Paginated list of auction locations.

**On `Failure`**: `error` is <code>[ListAuctionLocationsErrorBody](apibara/errors/list_auction_locations_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Market

> Source: [Market](apibara/apis/market.py)

<details>
<summary><code>def market_sold_price_stats(make: str, *, model: str | None = None, year: int | None = None, damage: str | None = None, auction: AuctionOrStr | None = None, sale_date_from: Date | None = None, sale_date_to: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MarketSoldPriceStatsResponse, MarketSoldPriceStatsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregate retained positive sold-history prices by make and optional model/year/damage/source/date period. Responses are cached briefly.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.market.with_raw_response.market_sold_price_stats("BMW", model="X5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MarketSoldPriceStatsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarketSoldPriceStatsErrorBody
```

**Async**

```python
result = await async_client.market.with_raw_response.market_sold_price_stats("BMW", model="X5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MarketSoldPriceStatsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarketSoldPriceStatsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>make</code> | <code>str</code> | Value sent with the request. |
| <code>model</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>year</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>damage</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>auction</code> | <code>[AuctionOrStr](apibara/models/enums/auction.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sale_date_from</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sale_date_to</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[MarketSoldPriceStatsResponse](apibara/models/market_sold_price_stats_response.py), [MarketSoldPriceStatsErrorBody](apibara/errors/market_sold_price_stats_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MarketSoldPriceStatsResponse](apibara/models/market_sold_price_stats_response.py)</code> -- Sold-price statistics

**On `Failure`**: `error` is <code>[MarketSoldPriceStatsErrorBody](apibara/errors/market_sold_price_stats_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 422 | <code>[RawError](apibara/core/results.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RelatedVehicles

> Source: [RelatedVehicles](apibara/apis/related_vehicles.py)

<details>
<summary><code>def get_related_vehicles(slug_vin: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VehicleListResponse, GetRelatedVehiclesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get related or similar auction vehicles by VIN or lot number.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.related_vehicles.with_raw_response.get_related_vehicles("WBAVL1C58FVY28848 or 46045959 or 111046045959")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRelatedVehiclesErrorBody
```

**Async**

```python
result = await async_client.related_vehicles.with_raw_response.get_related_vehicles(
    "WBAVL1C58FVY28848 or 46045959 or 111046045959"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRelatedVehiclesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug_vin</code> | <code>str</code> | Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[VehicleListResponse](apibara/models/vehicle_list_response.py), [GetRelatedVehiclesErrorBody](apibara/errors/get_related_vehicles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VehicleListResponse](apibara/models/vehicle_list_response.py)</code> -- Related auction vehicle records.

**On `Failure`**: `error` is <code>[GetRelatedVehiclesErrorBody](apibara/errors/get_related_vehicles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Shipping

> Source: [Shipping](apibara/apis/shipping.py)

<details>
<summary><code>def get_auction_to_port_shipping(*, vin: str | None = None, lot_number: str | None = None, ports: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ShippingResponse, GetAuctionToPortShippingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get delivery prices from auction location to one or more destination ports by VIN or lot number.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.shipping.with_raw_response.get_auction_to_port_shipping(
    vin="5TFLA5DBXTX349827",
    lot_number="78691915",
    ports="Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShippingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAuctionToPortShippingErrorBody
```

**Async**

```python
result = await async_client.shipping.with_raw_response.get_auction_to_port_shipping(
    vin="5TFLA5DBXTX349827",
    lot_number="78691915",
    ports="Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShippingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAuctionToPortShippingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str \| None</code> | Vehicle VIN.<br>**Default**: <code>None</code> |
| <code>lot_number</code> | <code>str \| None</code> | Auction lot number.<br>**Default**: <code>None</code> |
| <code>ports</code> | <code>str \| None</code> | Comma-separated list of destination ports to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[ShippingResponse](apibara/models/shipping_response.py), [GetAuctionToPortShippingErrorBody](apibara/errors/get_auction_to_port_shipping_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ShippingResponse](apibara/models/shipping_response.py)</code> -- Auction-to-port shipping prices.

**On `Failure`**: `error` is <code>[GetAuctionToPortShippingErrorBody](apibara/errors/get_auction_to_port_shipping_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vehicle_shipping(slug_vin: str, *, ports: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ShippingResponse, GetVehicleShippingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get auction-to-port shipping prices for a vehicle by VIN or lot number.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.shipping.with_raw_response.get_vehicle_shipping(
    "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    ports="Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShippingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleShippingErrorBody
```

**Async**

```python
result = await async_client.shipping.with_raw_response.get_vehicle_shipping(
    "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    ports="Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ShippingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleShippingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug_vin</code> | <code>str</code> | Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number. |
| <code>ports</code> | <code>str \| None</code> | Comma-separated list of destination ports to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[ShippingResponse](apibara/models/shipping_response.py), [GetVehicleShippingErrorBody](apibara/errors/get_vehicle_shipping_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ShippingResponse](apibara/models/shipping_response.py)</code> -- Shipping prices for the selected vehicle.

**On `Failure`**: `error` is <code>[GetVehicleShippingErrorBody](apibara/errors/get_vehicle_shipping_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UrlTools

> Source: [UrlTools](apibara/apis/url_tools.py)

<details>
<summary><code>def get_vehicle_details_from_url(url: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VehicleDetailsResponse, GetVehicleDetailsFromUrlErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve vehicle auction details from a Copart or IAAI vehicle URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.url_tools.with_raw_response.get_vehicle_details_from_url(
    "https://www.copart.com/lot/51015256/clean-title-2014-cadillac-escalade-esv-platinum-me-windham"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleDetailsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleDetailsFromUrlErrorBody
```

**Async**

```python
result = await async_client.url_tools.with_raw_response.get_vehicle_details_from_url(
    "https://www.copart.com/lot/51015256/clean-title-2014-cadillac-escalade-esv-platinum-me-windham"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleDetailsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleDetailsFromUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>url</code> | <code>str</code> | Vehicle URL. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[VehicleDetailsResponse](apibara/models/vehicle_details_response.py), [GetVehicleDetailsFromUrlErrorBody](apibara/errors/get_vehicle_details_from_url_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VehicleDetailsResponse](apibara/models/vehicle_details_response.py)</code> -- Vehicle details resolved from the URL.

**On `Failure`**: `error` is <code>[GetVehicleDetailsFromUrlErrorBody](apibara/errors/get_vehicle_details_from_url_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](apibara/apis/usage.py)

<details>
<summary><code>def get_api_usage(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsageResponse, GetApiUsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve current API request usage and plan limit information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.usage.with_raw_response.get_api_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiUsageErrorBody
```

**Async**

```python
result = await async_client.usage.with_raw_response.get_api_usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[UsageResponse](apibara/models/usage_response.py), [GetApiUsageErrorBody](apibara/errors/get_api_usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsageResponse](apibara/models/usage_response.py)</code> -- API usage and plan limit information.

**On `Failure`**: `error` is <code>[GetApiUsageErrorBody](apibara/errors/get_api_usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VehicleAuction

> Source: [VehicleAuction](apibara/apis/vehicle_auction.py)

<details>
<summary><code>def get_vehicle_seller_reserve(slug_vin: str, *, include_events: bool | None = False, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VehiclesReserveResponse, GetVehicleSellerReserveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns source-backed reserve price only when explicitly disclosed, otherwise null; observed bid threshold bounds are shown separately and only when confirmed by bid-crossing evidence. Reserve Off may mean the reserve was removed. Include_events=1 adds recent observation history. This endpoint consumes one standard API request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vehicle_auction.with_raw_response.get_vehicle_seller_reserve("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehiclesReserveResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleSellerReserveErrorBody
```

**Async**

```python
result = await async_client.vehicle_auction.with_raw_response.get_vehicle_seller_reserve("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehiclesReserveResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleSellerReserveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug_vin</code> | <code>str</code> | Vehicle VIN, lot number, LOT-IAAI-<lot> or lot slug. |
| <code>include_events</code> | <code>bool \| None</code> | Include recent reserve observations.<br>**Default**: <code>False</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of events.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[VehiclesReserveResponse](apibara/models/vehicles_reserve_response.py), [GetVehicleSellerReserveErrorBody](apibara/errors/get_vehicle_seller_reserve_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VehiclesReserveResponse](apibara/models/vehicles_reserve_response.py)</code> -- Seller reserve status, observed limits and optional events

**On `Failure`**: `error` is <code>[GetVehicleSellerReserveErrorBody](apibara/errors/get_vehicle_seller_reserve_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[RawError](apibara/core/results.py)</code> |
| 404 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VehicleHistory

> Source: [VehicleHistory](apibara/apis/vehicle_history.py)

<details>
<summary><code>def get_vehicle_history(slug_vin: str, *, per_page: int | None = 20, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VehicleHistoryResponse, GetVehicleHistoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get auction history records for a vehicle by VIN or lot number.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vehicle_history.with_raw_response.get_vehicle_history(
    "WBAVL1C58FVY28848 or 46045959 or 111046045959", per_page=20, cursor="next_cursor"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleHistoryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleHistoryErrorBody
```

**Async**

```python
result = await async_client.vehicle_history.with_raw_response.get_vehicle_history(
    "WBAVL1C58FVY28848 or 46045959 or 111046045959", per_page=20, cursor="next_cursor"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleHistoryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug_vin</code> | <code>str</code> | Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number. |
| <code>per_page</code> | <code>int \| None</code> | Number of records per page. Maximum: 20.<br>**Default**: <code>20</code> |
| <code>cursor</code> | <code>str \| None</code> | Cursor for pagination.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[VehicleHistoryResponse](apibara/models/vehicle_history_response.py), [GetVehicleHistoryErrorBody](apibara/errors/get_vehicle_history_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VehicleHistoryResponse](apibara/models/vehicle_history_response.py)</code> -- Paginated vehicle auction history records.

**On `Failure`**: `error` is <code>[GetVehicleHistoryErrorBody](apibara/errors/get_vehicle_history_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Vehicles

> Source: [Vehicles](apibara/apis/vehicles.py)

<details>
<summary><code>def get_vehicle_details(slug_vin: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VehicleDetailsResponse, GetVehicleDetailsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get vehicle auction details by VIN or lot number. Use include=history,vin_lots to embed retained sale history and other known lots for the same VIN in one response. Full vehicle detail pricing.seller_reserve contains source-observed reserve status, optional confirmed price and inferred bid bounds. Unknown or ambiguous Reserve Off will not be presented as an exact reserve price.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vehicles.with_raw_response.get_vehicle_details(
    "WBAVL1C58FVY28848 or 46045959 or 111046045959", include="history,vin_lots"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleDetailsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleDetailsErrorBody
```

**Async**

```python
result = await async_client.vehicles.with_raw_response.get_vehicle_details(
    "WBAVL1C58FVY28848 or 46045959 or 111046045959", include="history,vin_lots"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleDetailsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetVehicleDetailsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug_vin</code> | <code>str</code> | Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to the canonical 8-digit lot number. |
| <code>include</code> | <code>str \| None</code> | Optionally embed related detail-page data in the same response. Comma-separated values: history adds retained sale-history records across known Copart/IAAI lots for the VIN; vin_lots adds other known auction lots for the same VIN in summary form. Example: include=history,vin_lots.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[VehicleDetailsResponse](apibara/models/vehicle_details_response.py), [GetVehicleDetailsErrorBody](apibara/errors/get_vehicle_details_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VehicleDetailsResponse](apibara/models/vehicle_details_response.py)</code> -- Vehicle auction details.

**On `Failure`**: `error` is <code>[GetVehicleDetailsErrorBody](apibara/errors/get_vehicle_details_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_auction_vehicles(*, s: str | None = None, lot_status: LotStatusOrStr | None = LotStatus.ALL, lot_sub_status: LotSubStatusOrStr | None = LotSubStatus.OPEN, upcoming: UpcomingOrStr | None = Upcoming.ALL, auction_date_pending: bool | None = None, updated_within_minutes: int | None = None, price_min: float | None = None, price_max: float | None = None, year_from: int | None = None, year_to: int | None = None, auction_type: AuctionTypeOrInt | None = AuctionType.VALUE_0, platform: PlatformOrStr | None = None, type_: Type1 | Type1Dict | None = None, body_style: BodyStyle | BodyStyleDict | None = None, body_type: BodyType | BodyTypeDict | None = None, make: str | None = None, series: Series | SeriesDict | None = None, model: str | None = None, generation_id: GenerationId | GenerationIdDict | None = None, generation: Generation | GenerationDict | None = None, color: list[str] | None = None, vin_prefix: VinPrefix | VinPrefixDict | None = None, fuel_type: list[FuelTypeOrStr] | None = None, odometer_from: float | None = None, odometer_to: float | None = None, engine_size_from: float | None = None, engine_size_to: float | None = None, engine_type: EngineType1 | EngineType1Dict | None = None, transmission: list[TransmissionOrStr] | None = None, cylinders: list[int] | None = None, drive_type: list[DriveTypeOrStr] | None = None, run_cond: RunCond1 | RunCond1Dict | None = None, damage: list[DamageOrStr] | None = None, has_key: HasKeyOrStr | None = None, cursor: str | None = None, zip_: str | None = None, radius: float | None = None, units: UnitsOrStr | None = Units.MI, per_page: int | None = 20, include_total: bool | None = False, facility_id: str | None = None, loc_state: LocState | LocStateDict | None = None, office_name: str | None = None, auction_date_from: Date | None = None, auction_date_to: Date | None = None, today_only: bool | None = False, sale_document_pending: bool | None = False, sale_document_type: str | None = None, seller_type: SellerTypeOrStr | None = None, has_shipping_price: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[VehicleListResponse, ListAuctionVehiclesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search and incrementally synchronize normalized Copart and IAAI inventory. Filters are cumulative. Applied filters are echoed in meta.applied_filters; unrecognized query keys are reported in meta.unknown_filters. Use include_total=true only when an exact reconciliation count is required.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.vehicles.with_raw_response.list_auction_vehicles(
    s="BMW X5 / 1HGCM82633A123456 / 12345678",
    upcoming=Upcoming.ONLY,
    auction_date_pending=False,
    updated_within_minutes=15,
    price_min=1000,
    price_max=15000,
    year_from=2018,
    year_to=2024,
    auction_type=AuctionType.VALUE_1,
    platform=Platform.COPART,
    type_="AUTOMOBILE",
    body_style="Coupe",
    body_type="Coupe",
    make="BMW",
    series="Series 3",
    model="X5",
    generation_id=379,
    generation="F15",
    color=["Black", "White"],
    vin_prefix="1,4,5",
    fuel_type=[FuelType.GASOLINE, FuelType.HYBRID],
    odometer_from=0,
    odometer_to=120000,
    engine_size_from=2,
    engine_size_to=5,
    engine_type=EngineType.I_,
    transmission=[Transmission.AUTOMATIC],
    cylinders=[4, 6],
    drive_type=[DriveType.AWD, DriveType.FWD],
    damage=[Damage.HAIL, Damage.MECHANICAL],
    cursor="next_cursor or prev_cursor",
    zip_="33166",
    radius=50,
    per_page=20,
    include_total=True,
    facility_id="136",
    loc_state="FL",
    office_name="Miami",
    auction_date_from=date(2026, 3, 20),
    auction_date_to=date(2026, 3, 25),
    sale_document_type="clean",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAuctionVehiclesErrorBody
```

**Async**

```python
result = await async_client.vehicles.with_raw_response.list_auction_vehicles(
    s="BMW X5 / 1HGCM82633A123456 / 12345678",
    upcoming=Upcoming.ONLY,
    auction_date_pending=False,
    updated_within_minutes=15,
    price_min=1000,
    price_max=15000,
    year_from=2018,
    year_to=2024,
    auction_type=AuctionType.VALUE_1,
    platform=Platform.COPART,
    type_="AUTOMOBILE",
    body_style="Coupe",
    body_type="Coupe",
    make="BMW",
    series="Series 3",
    model="X5",
    generation_id=379,
    generation="F15",
    color=["Black", "White"],
    vin_prefix="1,4,5",
    fuel_type=[FuelType.GASOLINE, FuelType.HYBRID],
    odometer_from=0,
    odometer_to=120000,
    engine_size_from=2,
    engine_size_to=5,
    engine_type=EngineType.I_,
    transmission=[Transmission.AUTOMATIC],
    cylinders=[4, 6],
    drive_type=[DriveType.AWD, DriveType.FWD],
    damage=[Damage.HAIL, Damage.MECHANICAL],
    cursor="next_cursor or prev_cursor",
    zip_="33166",
    radius=50,
    per_page=20,
    include_total=True,
    facility_id="136",
    loc_state="FL",
    office_name="Miami",
    auction_date_from=date(2026, 3, 20),
    auction_date_to=date(2026, 3, 25),
    sale_document_type="clean",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type VehicleListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListAuctionVehiclesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>s</code> | <code>str \| None</code> | Search by lot number, VIN, or vehicle title.<br>**Default**: <code>None</code> |
| <code>lot_status</code> | <code>[LotStatusOrStr](apibara/models/enums/lot_status.py) \| None</code> | Lot status filter.<br>**Default**: <code>LotStatus.ALL</code> |
| <code>lot_sub_status</code> | <code>[LotSubStatusOrStr](apibara/models/enums/lot_sub_status.py) \| None</code> | Normalized lot sub-status. Open = active/open and not sold; Live = currently live when supported; Ended = ended/closed state. Open also includes imported active lots with an unassigned auction date. Their auction_at is null and auction_date_pending is true. Explicit date-range filters exclude unassigned dates.<br>**Default**: <code>LotSubStatus.OPEN</code> |
| <code>upcoming</code> | <code>[UpcomingOrStr](apibara/models/enums/upcoming.py) \| None</code> | Upcoming selector. all = no restriction; only = only upcoming eligible lots; without = exclude upcoming lots. This does not override Open/Sold state logic.<br>**Default**: <code>Upcoming.ALL</code> |
| <code>auction_date_pending</code> | <code>bool \| None</code> | true returns only source listings whose auction date is not yet assigned; false excludes date-pending lots.<br>**Default**: <code>None</code> |
| <code>updated_within_minutes</code> | <code>int \| None</code> | Return records whose updated_at changed within the requested number of minutes. Designed for incremental synchronization; combine with cursor pagination and auction filters.<br>**Default**: <code>None</code> |
| <code>price_min</code> | <code>float \| None</code> | Minimum price.<br>**Default**: <code>None</code> |
| <code>price_max</code> | <code>float \| None</code> | Maximum price.<br>**Default**: <code>None</code> |
| <code>year_from</code> | <code>int \| None</code> | Minimum vehicle year.<br>**Default**: <code>None</code> |
| <code>year_to</code> | <code>int \| None</code> | Maximum vehicle year.<br>**Default**: <code>None</code> |
| <code>auction_type</code> | <code>[AuctionTypeOrInt](apibara/models/enums/auction_type.py) \| None</code> | Numeric auction platform filter: 0 = all supported platforms, 1 = Copart, 2 = IAAI. Use either auction_type or platform in the same request.<br>**Default**: <code>AuctionType.VALUE_0</code> |
| <code>platform</code> | <code>[PlatformOrStr](apibara/models/enums/platform.py) \| None</code> | Readable auction platform filter. Use copart or iaai. Use either platform or auction_type in the same request.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type1](apibara/models/unions/type1.py) \| [Type1Dict](apibara/models/unions/type1.py) \| None</code> | Vehicle type. Multiple values are OR-ed; query-array syntax such as type[]=COUPE&type[]=AUTOMOBILE is supported.<br>**Default**: <code>None</code> |
| <code>body_style</code> | <code>[BodyStyle](apibara/models/unions/body_style.py) \| [BodyStyleDict](apibara/models/unions/body_style.py) \| None</code> | Filter by vehicle_specs.body_style. Multiple values are OR-ed. Query-array syntax is supported, for example body_style[]=Coupe&body_style[]=Convertible. IAAI uses its VehicleClass value; Copart uses the source-backed Body Style field.<br>**Default**: <code>None</code> |
| <code>body_type</code> | <code>[BodyType](apibara/models/unions/body_type.py) \| [BodyTypeDict](apibara/models/unions/body_type.py) \| None</code> | Compatibility alias for body_style. Multiple values are OR-ed. Prefer body_style for new integrations.<br>**Default**: <code>None</code> |
| <code>make</code> | <code>str \| None</code> | Vehicle make.<br>**Default**: <code>None</code> |
| <code>series</code> | <code>[Series](apibara/models/unions/series.py) \| [SeriesDict](apibara/models/unions/series.py) \| None</code> | Canonical vehicle series / model family. Examples: BMW Series 3, Mercedes-Benz C-Class, Toyota Camry, Audi A4, Ford F-150. Optional; can be combined with model and generation filters.<br>**Default**: <code>None</code> |
| <code>model</code> | <code>str \| None</code> | Vehicle model.<br>**Default**: <code>None</code> |
| <code>generation_id</code> | <code>[GenerationId](apibara/models/unions/generation_id.py) \| [GenerationIdDict](apibara/models/unions/generation_id.py) \| None</code> | Vehicle generation catalog ID. Use /vehicles/filters?make=BMW&model=X5 to discover valid IDs. Multiple IDs are supported.<br>**Default**: <code>None</code> |
| <code>generation</code> | <code>[Generation](apibara/models/unions/generation.py) \| [GenerationDict](apibara/models/unions/generation.py) \| None</code> | Human-readable generation alias, for example F15, E70 or G05. generation_id is preferred for stable integrations.<br>**Default**: <code>None</code> |
| <code>color</code> | <code>list&#91;str&#93; \| None</code> | Vehicle color. Multiple values are supported.<br>**Default**: <code>None</code> |
| <code>vin_prefix</code> | <code>[VinPrefix](apibara/models/unions/vin_prefix.py) \| [VinPrefixDict](apibara/models/unions/vin_prefix.py) \| None</code> | Match VINs that start with any supplied prefix (OR). Supports comma-separated values vin_prefix=1,4,5 and array syntax vin_prefix[]=1&vin_prefix[]=4&vin_prefix[]=5. Prefixes consist of 1–3 VIN letters/numbers; at most 20 unique prefixes. Combines with other filters, cursor, and include_total. Prefix does not guarantee manufacturing country.<br>**Default**: <code>None</code> |
| <code>fuel_type</code> | <code>list&#91;[FuelTypeOrStr](apibara/models/enums/fuel_type.py)&#93; \| None</code> | Normalized fuel type; Hybrid includes source values Hybrid, Electric and Gas Hybrid, Hybrid Engine, and Electric and Diesel Hybrid. Multiple values are supported.<br>**Default**: <code>None</code> |
| <code>odometer_from</code> | <code>float \| None</code> | Minimum odometer value in miles. Vehicle responses also include the converted km value.<br>**Default**: <code>None</code> |
| <code>odometer_to</code> | <code>float \| None</code> | Maximum odometer value in miles. Vehicle responses also include the converted km value.<br>**Default**: <code>None</code> |
| <code>engine_size_from</code> | <code>float \| None</code> | Minimum engine size.<br>**Default**: <code>None</code> |
| <code>engine_size_to</code> | <code>float \| None</code> | Maximum engine size.<br>**Default**: <code>None</code> |
| <code>engine_type</code> | <code>[EngineType1](apibara/models/unions/engine_type1.py) \| [EngineType1Dict](apibara/models/unions/engine_type1.py) \| None</code> | Engine layout. I=inline, V=V engine, W=W engine, B/H=boxer/horizontally opposed. Scalar and repeated-array forms are supported.<br>**Default**: <code>None</code> |
| <code>transmission</code> | <code>list&#91;[TransmissionOrStr](apibara/models/enums/transmission.py)&#93; \| None</code> | Transmission type. Multiple values are supported.<br>**Default**: <code>None</code> |
| <code>cylinders</code> | <code>list&#91;int&#93; \| None</code> | Number of cylinders. Multiple values are supported.<br>**Default**: <code>None</code> |
| <code>drive_type</code> | <code>list&#91;[DriveTypeOrStr](apibara/models/enums/drive_type.py)&#93; \| None</code> | Drive type. Multiple values are supported.<br>**Default**: <code>None</code> |
| <code>run_cond</code> | <code>[RunCond1](apibara/models/unions/run_cond1.py) \| [RunCond1Dict](apibara/models/unions/run_cond1.py) \| None</code> | Source-backed running-condition filter. Multiple values are OR-ed; use both Run & Drive Verified and RUNS AND DRIVES for a combined Copart + IAAI running-vehicle filter.<br>**Default**: <code>None</code> |
| <code>damage</code> | <code>list&#91;[DamageOrStr](apibara/models/enums/damage.py)&#93; \| None</code> | Damage type. Multiple values are supported.<br>**Default**: <code>None</code> |
| <code>has_key</code> | <code>[HasKeyOrStr](apibara/models/enums/has_key.py) \| None</code> | Filter vehicles by key availability.<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Cursor for pagination.<br>**Default**: <code>None</code> |
| <code>zip_</code> | <code>str \| None</code> | ZIP code for location-based search.<br>**Default**: <code>None</code> |
| <code>radius</code> | <code>float \| None</code> | Search radius around ZIP.<br>**Default**: <code>None</code> |
| <code>units</code> | <code>[UnitsOrStr](apibara/models/enums/units.py) \| None</code> | Distance units.<br>**Default**: <code>Units.MI</code> |
| <code>per_page</code> | <code>int \| None</code> | Records per vehicle-search page. Default 20. The effective maximum is plan-dependent; public plan entitlements can use maxima of 20, 30 or 40, while approved custom plans may differ. Use the active account entitlement as the runtime source of truth.<br>**Default**: <code>20</code> |
| <code>include_total</code> | <code>bool \| None</code> | When true, meta.total attempts an exact filtered count. For very large or expensive result sets the safety-bounded count may return null; cursor pagination remains available.<br>**Default**: <code>False</code> |
| <code>facility_id</code> | <code>str \| None</code> | Auction facility ID.<br>**Default**: <code>None</code> |
| <code>loc_state</code> | <code>[LocState](apibara/models/unions/loc_state.py) \| [LocStateDict](apibara/models/unions/loc_state.py) \| None</code> | Auction facility state/region code. Accepts a scalar or repeated/form-style array, e.g. loc_state=FL or loc_state[]=FL.<br>**Default**: <code>None</code> |
| <code>office_name</code> | <code>str \| None</code> | Auction office or branch name.<br>**Default**: <code>None</code> |
| <code>auction_date_from</code> | <code>Date \| None</code> | Auction date from.<br>**Default**: <code>None</code> |
| <code>auction_date_to</code> | <code>Date \| None</code> | Auction date to.<br>**Default**: <code>None</code> |
| <code>today_only</code> | <code>bool \| None</code> | Return only vehicles with auctions today.<br>**Default**: <code>False</code> |
| <code>sale_document_pending</code> | <code>bool \| None</code> | Filter by pending sale document.<br>**Default**: <code>False</code> |
| <code>sale_document_type</code> | <code>str \| None</code> | Sale document type.<br>**Default**: <code>None</code> |
| <code>seller_type</code> | <code>[SellerTypeOrStr](apibara/models/enums/seller_type.py) \| None</code> | Filter by name-based seller classification, not damage/title heuristics. Missing seller names are unknown and do not match non_insurance. For non_insurance, also provide make, model, facility_id or s with a specific VIN/lot; unscoped searches return 422 selective_filter_required. For a full catalogue, sync and filter known seller types locally.<br>**Default**: <code>None</code> |
| <code>has_shipping_price</code> | <code>bool \| None</code> | Return only vehicles with shipping price data.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](apibara/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](apibara/core/results.py)&#91;[VehicleListResponse](apibara/models/vehicle_list_response.py), [ListAuctionVehiclesErrorBody](apibara/errors/list_auction_vehicles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[VehicleListResponse](apibara/models/vehicle_list_response.py)</code> -- Paginated list of vehicle auction records.

**On `Failure`**: `error` is <code>[ListAuctionVehiclesErrorBody](apibara/errors/list_auction_vehicles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[RawError](apibara/core/results.py)</code> |
| 403, 404, 422, 503 | <code>[ApiErrorModel](apibara/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](apibara/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

