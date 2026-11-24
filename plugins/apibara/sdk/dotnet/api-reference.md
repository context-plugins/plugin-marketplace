# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ApibaraClient](src/Apibara/ApibaraClient.cs)

## ChangeStream

> Source: [ChangeStream](src/Apibara/Api/ChangeStream.cs)

<details>
<summary><code>Task&lt;VehicleChangesResponse&gt; ListVehicleChanges(ListVehicleChangesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ChangeStream.ListVehicleChanges(new ListVehicleChangesRequest());
    // TODO: Handle 'response' of type VehicleChangesResponse
}
catch (ApiException<ListVehicleChangesError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVehicleChangesRequest](src/Apibara/Requests/ChangeStream/ListVehicleChangesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VehicleChangesResponse](src/Apibara/Models/VehicleChangesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[ListVehicleChangesError](src/Apibara/Errors/ListVehicleChangesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Filters

> Source: [Filters](src/Apibara/Api/Filters.cs)

<details>
<summary><code>Task&lt;FiltersResponse&gt; GetVehicleFilters(GetVehicleFiltersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Filters.GetVehicleFilters(new GetVehicleFiltersRequest
    {
        Make = "BMW",
        Series = "Series 3",
        Model = "X5",
    });
    // TODO: Handle 'response' of type FiltersResponse
}
catch (ApiException<GetVehicleFiltersError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleFiltersRequest](src/Apibara/Requests/Filters/GetVehicleFiltersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FiltersResponse](src/Apibara/Models/FiltersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetVehicleFiltersError](src/Apibara/Errors/GetVehicleFiltersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ImageProxy

> Source: [ImageProxy](src/Apibara/Api/ImageProxy.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ProxyAuctionImage(ProxyAuctionImageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.ImageProxy.ProxyAuctionImage(new ProxyAuctionImageRequest
    {
        Url = "https://example.com/vehicle-image.webp",
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<ProxyAuctionImageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ProxyAuctionImageRequest](src/Apibara/Requests/ImageProxy/ProxyAuctionImageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[ProxyAuctionImageError](src/Apibara/Errors/ProxyAuctionImageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Locations

> Source: [Locations](src/Apibara/Api/Locations.cs)

<details>
<summary><code>Task&lt;LocationsResponse&gt; ListAuctionLocations(ListAuctionLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Locations.ListAuctionLocations(new ListAuctionLocationsRequest
    {
        State = "FL",
        FacilityId = "136",
        Q = "Birmingham",
        Zip = "33166",
        Radius = 50d,
        PerPage = 20,
    });
    // TODO: Handle 'response' of type LocationsResponse
}
catch (ApiException<ListAuctionLocationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAuctionLocationsRequest](src/Apibara/Requests/Locations/ListAuctionLocationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LocationsResponse](src/Apibara/Models/LocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[ListAuctionLocationsError](src/Apibara/Errors/ListAuctionLocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Market

> Source: [Market](src/Apibara/Api/Market.cs)

<details>
<summary><code>Task&lt;MarketSoldPriceStatsResponse&gt; MarketSoldPriceStats(MarketSoldPriceStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Market.MarketSoldPriceStats(new MarketSoldPriceStatsRequest
    {
        Make = "BMW",
        Model = "X5",
    });
    // TODO: Handle 'response' of type MarketSoldPriceStatsResponse
}
catch (ApiException<MarketSoldPriceStatsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MarketSoldPriceStatsRequest](src/Apibara/Requests/Market/MarketSoldPriceStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarketSoldPriceStatsResponse](src/Apibara/Models/MarketSoldPriceStatsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[MarketSoldPriceStatsError](src/Apibara/Errors/MarketSoldPriceStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## RelatedVehicles

> Source: [RelatedVehicles](src/Apibara/Api/RelatedVehicles.cs)

<details>
<summary><code>Task&lt;VehicleListResponse&gt; GetRelatedVehicles(GetRelatedVehiclesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.RelatedVehicles.GetRelatedVehicles(new GetRelatedVehiclesRequest
    {
        SlugVin = "WBAVL1C58FVY28848 or 46045959 or 111046045959",
    });
    // TODO: Handle 'response' of type VehicleListResponse
}
catch (ApiException<GetRelatedVehiclesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRelatedVehiclesRequest](src/Apibara/Requests/RelatedVehicles/GetRelatedVehiclesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VehicleListResponse](src/Apibara/Models/VehicleListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetRelatedVehiclesError](src/Apibara/Errors/GetRelatedVehiclesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Shipping

> Source: [Shipping](src/Apibara/Api/Shipping.cs)

<details>
<summary><code>Task&lt;ShippingResponse&gt; GetAuctionToPortShipping(GetAuctionToPortShippingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Shipping.GetAuctionToPortShipping(new GetAuctionToPortShippingRequest
    {
        Vin = "5TFLA5DBXTX349827",
        LotNumber = "78691915",
        Ports = "Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
    });
    // TODO: Handle 'response' of type ShippingResponse
}
catch (ApiException<GetAuctionToPortShippingError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAuctionToPortShippingRequest](src/Apibara/Requests/Shipping/GetAuctionToPortShippingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShippingResponse](src/Apibara/Models/ShippingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetAuctionToPortShippingError](src/Apibara/Errors/GetAuctionToPortShippingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ShippingResponse&gt; GetVehicleShipping(GetVehicleShippingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Shipping.GetVehicleShipping(new GetVehicleShippingRequest
    {
        SlugVin = "WBAVL1C58FVY28848 or 46045959 or 111046045959",
        Ports = "Chicago,NY,Miami,Savannah,Norfolk,Houston,LA,Seattle,Moto_ATV",
    });
    // TODO: Handle 'response' of type ShippingResponse
}
catch (ApiException<GetVehicleShippingError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleShippingRequest](src/Apibara/Requests/Shipping/GetVehicleShippingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShippingResponse](src/Apibara/Models/ShippingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetVehicleShippingError](src/Apibara/Errors/GetVehicleShippingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UrlTools

> Source: [UrlTools](src/Apibara/Api/UrlTools.cs)

<details>
<summary><code>Task&lt;VehicleDetailsResponse&gt; GetVehicleDetailsFromUrl(GetVehicleDetailsFromUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.UrlTools.GetVehicleDetailsFromUrl(new GetVehicleDetailsFromUrlRequest
    {
        Url = "https://www.copart.com/lot/51015256/clean-title-2014-cadillac-escalade-esv-platinum-me-windham",
    });
    // TODO: Handle 'response' of type VehicleDetailsResponse
}
catch (ApiException<GetVehicleDetailsFromUrlError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleDetailsFromUrlRequest](src/Apibara/Requests/UrlTools/GetVehicleDetailsFromUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VehicleDetailsResponse](src/Apibara/Models/VehicleDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetVehicleDetailsFromUrlError](src/Apibara/Errors/GetVehicleDetailsFromUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](src/Apibara/Api/Usage.cs)

<details>
<summary><code>Task&lt;UsageResponse&gt; GetApiUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Usage.GetApiUsage();
    // TODO: Handle 'response' of type UsageResponse
}
catch (ApiException<GetApiUsageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageResponse](src/Apibara/Models/UsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetApiUsageError](src/Apibara/Errors/GetApiUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VehicleAuction

> Source: [VehicleAuction](src/Apibara/Api/VehicleAuction.cs)

<details>
<summary><code>Task&lt;VehiclesReserveResponse&gt; GetVehicleSellerReserve(GetVehicleSellerReserveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VehicleAuction.GetVehicleSellerReserve(new GetVehicleSellerReserveRequest
    {
        SlugVin = "some example string",
    });
    // TODO: Handle 'response' of type VehiclesReserveResponse
}
catch (ApiException<GetVehicleSellerReserveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleSellerReserveRequest](src/Apibara/Requests/VehicleAuction/GetVehicleSellerReserveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VehiclesReserveResponse](src/Apibara/Models/VehiclesReserveResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetVehicleSellerReserveError](src/Apibara/Errors/GetVehicleSellerReserveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VehicleHistory

> Source: [VehicleHistory](src/Apibara/Api/VehicleHistory.cs)

<details>
<summary><code>Task&lt;VehicleHistoryResponse&gt; GetVehicleHistory(GetVehicleHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.VehicleHistory.GetVehicleHistory(new GetVehicleHistoryRequest
    {
        SlugVin = "WBAVL1C58FVY28848 or 46045959 or 111046045959",
        PerPage = 20,
        Cursor = "next_cursor",
    });
    // TODO: Handle 'response' of type VehicleHistoryResponse
}
catch (ApiException<GetVehicleHistoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleHistoryRequest](src/Apibara/Requests/VehicleHistory/GetVehicleHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VehicleHistoryResponse](src/Apibara/Models/VehicleHistoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetVehicleHistoryError](src/Apibara/Errors/GetVehicleHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Vehicles

> Source: [Vehicles](src/Apibara/Api/Vehicles.cs)

<details>
<summary><code>Task&lt;VehicleDetailsResponse&gt; GetVehicleDetails(GetVehicleDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Vehicles.GetVehicleDetails(new GetVehicleDetailsRequest
    {
        SlugVin = "WBAVL1C58FVY28848 or 46045959 or 111046045959",
        Include = "history,vin_lots",
    });
    // TODO: Handle 'response' of type VehicleDetailsResponse
}
catch (ApiException<GetVehicleDetailsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleDetailsRequest](src/Apibara/Requests/Vehicles/GetVehicleDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VehicleDetailsResponse](src/Apibara/Models/VehicleDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[GetVehicleDetailsError](src/Apibara/Errors/GetVehicleDetailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;VehicleListResponse&gt; ListAuctionVehicles(ListAuctionVehiclesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Vehicles.ListAuctionVehicles(new ListAuctionVehiclesRequest
    {
        S = "BMW X5 / 1HGCM82633A123456 / 12345678",
        Upcoming = Upcoming.Only,
        AuctionDatePending = false,
        UpdatedWithinMinutes = 15,
        PriceMin = 1000d,
        PriceMax = 15000d,
        YearFrom = 2018,
        YearTo = 2024,
        AuctionType = AuctionType.Value1,
        Platform = Platform.Copart,
        Type = "AUTOMOBILE",
        BodyStyle = "Coupe",
        BodyType = "Coupe",
        Make = "BMW",
        Series = "Series 3",
        Model = "X5",
        GenerationId = 379,
        Generation = "F15",
        Color = ["Black", "White"],
        VinPrefix = "1,4,5",
        FuelType = [FuelType.Gasoline, FuelType.Hybrid],
        OdometerFrom = 0d,
        OdometerTo = 120000d,
        EngineSizeFrom = 2d,
        EngineSizeTo = 5d,
        EngineType = EngineType.I,
        Transmission = [Transmission.Automatic],
        Cylinders = [4, 6],
        DriveType = [DriveType.Awd, DriveType.Fwd],
        Damage = [Damage.Hail, Damage.Mechanical],
        Cursor = "next_cursor or prev_cursor",
        Zip = "33166",
        Radius = 50d,
        PerPage = 20,
        IncludeTotal = true,
        FacilityId = "136",
        LocState = "FL",
        OfficeName = "Miami",
        AuctionDateFrom = DateTimeOffset.Parse("2026-03-20T00:00:00Z"),
        AuctionDateTo = DateTimeOffset.Parse("2026-03-25T00:00:00Z"),
        SaleDocumentType = "clean",
    });
    // TODO: Handle 'response' of type VehicleListResponse
}
catch (ApiException<ListAuctionVehiclesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAuctionVehiclesRequest](src/Apibara/Requests/Vehicles/ListAuctionVehiclesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VehicleListResponse](src/Apibara/Models/VehicleListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Apibara/Core/Exceptions/ApiException.cs)&lt;[ListAuctionVehiclesError](src/Apibara/Errors/ListAuctionVehiclesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

