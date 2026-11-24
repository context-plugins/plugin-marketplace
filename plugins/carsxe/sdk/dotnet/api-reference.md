# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CarsXeClient](src/CarsXe/CarsXeClient.cs)

## Auth

> Source: [Auth](src/CarsXe/Api/Auth.cs)

<details>
<summary><code>Task&lt;object&gt; ValidateKey(ValidateKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Auth.ValidateKey(new ValidateKeyRequest { Key = "some example string" });
    // TODO: Handle 'response' of type object
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ValidateKeyRequest](src/CarsXe/Requests/Auth/ValidateKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[RawError](src/CarsXe/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](src/CarsXe/Api/History.cs)

<details>
<summary><code>Task&lt;HistoryResponse&gt; GetVehicleHistory(GetVehicleHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.History.GetVehicleHistory(new GetVehicleHistoryRequest { Vin = "some example string" });
    // TODO: Handle 'response' of type HistoryResponse
}
catch (ApiException<GetVehicleHistoryError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleHistoryRequest](src/CarsXe/Requests/History/GetVehicleHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HistoryResponse](src/CarsXe/Models/HistoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetVehicleHistoryError](src/CarsXe/Errors/GetVehicleHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Images

> Source: [Images](src/CarsXe/Api/Images.cs)

<details>
<summary><code>Task&lt;ImagesResponse&gt; GetVehicleImages(GetVehicleImagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Images.GetVehicleImages(new GetVehicleImagesRequest
    {
        Make = "some example string",
        Model = "some example string",
    });
    // TODO: Handle 'response' of type ImagesResponse
}
catch (ApiException<GetVehicleImagesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleImagesRequest](src/CarsXe/Requests/Images/GetVehicleImagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ImagesResponse](src/CarsXe/Models/ImagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetVehicleImagesError](src/CarsXe/Errors/GetVehicleImagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LienTheft

> Source: [LienTheft](src/CarsXe/Api/LienTheft.cs)

<details>
<summary><code>Task&lt;V1LienTheftResponse&gt; GetLienTheft(GetLienTheftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.LienTheft.GetLienTheft(new GetLienTheftRequest { Vin = "some example string" });
    // TODO: Handle 'response' of type V1LienTheftResponse
}
catch (ApiException<GetLienTheftError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLienTheftRequest](src/CarsXe/Requests/LienTheft/GetLienTheftRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LienTheftResponse](src/CarsXe/Models/V1LienTheftResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetLienTheftError](src/CarsXe/Errors/GetLienTheftError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MarketValue

> Source: [MarketValue](src/CarsXe/Api/MarketValue.cs)

<details>
<summary><code>Task&lt;MarketvalueResponse&gt; GetMarketValue(GetMarketValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MarketValue.GetMarketValue(new GetMarketValueRequest { Vin = "some example string" });
    // TODO: Handle 'response' of type MarketvalueResponse
}
catch (ApiException<GetMarketValueError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMarketValueRequest](src/CarsXe/Requests/MarketValue/GetMarketValueRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MarketvalueResponse](src/CarsXe/Models/MarketvalueResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetMarketValueError](src/CarsXe/Errors/GetMarketValueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V2MarketvalueResponse&gt; GetMarketValueV2(GetMarketValueV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MarketValue.GetMarketValueV2(new GetMarketValueV2Request
    {
        Vin = "some example string",
    });
    // TODO: Handle 'response' of type V2MarketvalueResponse
}
catch (ApiException<GetMarketValueV2Error> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMarketValueV2Request](src/CarsXe/Requests/MarketValue/GetMarketValueV2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2MarketvalueResponse](src/CarsXe/Models/V2MarketvalueResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetMarketValueV2Error](src/CarsXe/Errors/GetMarketValueV2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PlateDecoder

> Source: [PlateDecoder](src/CarsXe/Api/PlateDecoder.cs)

<details>
<summary><code>Task&lt;PlatedecoderResponse&gt; DecodePlate(DecodePlateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PlateDecoder.DecodePlate(new DecodePlateRequest
    {
        Plate = "some example string",
        State = "some example string",
    });
    // TODO: Handle 'response' of type PlatedecoderResponse
}
catch (ApiException<DecodePlateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DecodePlateRequest](src/CarsXe/Requests/PlateDecoder/DecodePlateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlatedecoderResponse](src/CarsXe/Models/PlatedecoderResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[DecodePlateError](src/CarsXe/Errors/DecodePlateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V2PlatedecoderResponse&gt; DecodePlateV2(DecodePlateV2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PlateDecoder.DecodePlateV2(new DecodePlateV2Request { Plate = "some example string" });
    // TODO: Handle 'response' of type V2PlatedecoderResponse
}
catch (ApiException<DecodePlateV2Error> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DecodePlateV2Request](src/CarsXe/Requests/PlateDecoder/DecodePlateV2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V2PlatedecoderResponse](src/CarsXe/Models/V2PlatedecoderResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[DecodePlateV2Error](src/CarsXe/Errors/DecodePlateV2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UsPlatedecoderResponse&gt; DecodeUsPlate(DecodeUsPlateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.PlateDecoder.DecodeUsPlate(new DecodeUsPlateRequest
    {
        Plate = "some example string",
        State = "some example string",
    });
    // TODO: Handle 'response' of type V1UsPlatedecoderResponse
}
catch (ApiException<DecodeUsPlateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DecodeUsPlateRequest](src/CarsXe/Requests/PlateDecoder/DecodeUsPlateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsPlatedecoderResponse](src/CarsXe/Models/V1UsPlatedecoderResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[DecodeUsPlateError](src/CarsXe/Errors/DecodeUsPlateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recalls

> Source: [Recalls](src/CarsXe/Api/Recalls.cs)

<details>
<summary><code>Task&lt;string&gt; DownloadRecallsBatchResults(DownloadRecallsBatchResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recalls.DownloadRecallsBatchResults(new DownloadRecallsBatchResultsRequest
    {
        BatchId = "some example string",
    });
    // TODO: Handle 'response' of type string
}
catch (ApiException<DownloadRecallsBatchResultsError> ex)
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

<code>[DownloadRecallsBatchResultsRequest](src/CarsXe/Requests/Recalls/DownloadRecallsBatchResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>string</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[DownloadRecallsBatchResultsError](src/CarsXe/Errors/DownloadRecallsBatchResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RecallsBatchResultsResponse&gt; GetRecallsBatchResults(GetRecallsBatchResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recalls.GetRecallsBatchResults(new GetRecallsBatchResultsRequest
    {
        BatchId = "some example string",
    });
    // TODO: Handle 'response' of type V1RecallsBatchResultsResponse
}
catch (ApiException<GetRecallsBatchResultsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecallsBatchResultsRequest](src/CarsXe/Requests/Recalls/GetRecallsBatchResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsBatchResultsResponse](src/CarsXe/Models/V1RecallsBatchResultsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetRecallsBatchResultsError](src/CarsXe/Errors/GetRecallsBatchResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RecallsBatchStatusResponse&gt; GetRecallsBatchStatus(GetRecallsBatchStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recalls.GetRecallsBatchStatus(new GetRecallsBatchStatusRequest
    {
        BatchId = "some example string",
    });
    // TODO: Handle 'response' of type V1RecallsBatchStatusResponse
}
catch (ApiException<GetRecallsBatchStatusError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecallsBatchStatusRequest](src/CarsXe/Requests/Recalls/GetRecallsBatchStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsBatchStatusResponse](src/CarsXe/Models/V1RecallsBatchStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetRecallsBatchStatusError](src/CarsXe/Errors/GetRecallsBatchStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RecallsYmmResponse&gt; GetRecallsByYmm(GetRecallsByYmmRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recalls.GetRecallsByYmm(new GetRecallsByYmmRequest
    {
        Year = "some example string",
        Make = "some example string",
        Model = "some example string",
    });
    // TODO: Handle 'response' of type V1RecallsYmmResponse
}
catch (ApiException<GetRecallsByYmmError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecallsByYmmRequest](src/CarsXe/Requests/Recalls/GetRecallsByYmmRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsYmmResponse](src/CarsXe/Models/V1RecallsYmmResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetRecallsByYmmError](src/CarsXe/Errors/GetRecallsByYmmError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RecallsResponse&gt; GetVehicleRecalls(GetVehicleRecallsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recalls.GetVehicleRecalls(new GetVehicleRecallsRequest { Vin = "some example string" });
    // TODO: Handle 'response' of type V1RecallsResponse
}
catch (ApiException<GetVehicleRecallsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleRecallsRequest](src/CarsXe/Requests/Recalls/GetVehicleRecallsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsResponse](src/CarsXe/Models/V1RecallsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetVehicleRecallsError](src/CarsXe/Errors/GetVehicleRecallsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RecallsBatchSubmitResponse&gt; SubmitRecallsBatch(SubmitRecallsBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recalls.SubmitRecallsBatch(new SubmitRecallsBatchRequest
    {
        Body = new V1RecallsBatchSubmitRequest
        {
            Vins = ["1HGBH41JXMN109186", "5YJSA1E26HF000001"],
            WebhookUrl = "https://example.com/webhooks/carsxe-recalls",
        },
    });
    // TODO: Handle 'response' of type V1RecallsBatchSubmitResponse
}
catch (ApiException<SubmitRecallsBatchError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SubmitRecallsBatchRequest](src/CarsXe/Requests/Recalls/SubmitRecallsBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecallsBatchSubmitResponse](src/CarsXe/Models/V1RecallsBatchSubmitResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[SubmitRecallsBatchError](src/CarsXe/Errors/SubmitRecallsBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recognition

> Source: [Recognition](src/CarsXe/Api/Recognition.cs)

<details>
<summary><code>Task&lt;PlaterecognitionResponse&gt; RecognizePlate(RecognizePlateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recognition.RecognizePlate(new RecognizePlateRequest
    {
        Body = new PlaterecognitionRequest { ImageUrl = "https://example.com/car-photo.jpg" },
    });
    // TODO: Handle 'response' of type PlaterecognitionResponse
}
catch (ApiException<RecognizePlateError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RecognizePlateRequest](src/CarsXe/Requests/Recognition/RecognizePlateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaterecognitionResponse](src/CarsXe/Models/PlaterecognitionResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[RecognizePlateError](src/CarsXe/Errors/RecognizePlateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1VinocrResponse&gt; VinOcr(VinOcrRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Recognition.VinOcr(new VinOcrRequest
    {
        Body = new V1VinocrRequest { ImageUrl = "https://example.com/vin-plate.jpg" },
    });
    // TODO: Handle 'response' of type V1VinocrResponse
}
catch (ApiException<VinOcrError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[VinOcrRequest](src/CarsXe/Requests/Recognition/VinOcrRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VinocrResponse](src/CarsXe/Models/V1VinocrResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[VinOcrError](src/CarsXe/Errors/VinOcrError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Specifications

> Source: [Specifications](src/CarsXe/Api/Specifications.cs)

<details>
<summary><code>Task&lt;V1InternationalVinDecoderResponse&gt; GetInternationalVinDecoder(GetInternationalVinDecoderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Specifications.GetInternationalVinDecoder(new GetInternationalVinDecoderRequest
    {
        Vin = "some example string",
    });
    // TODO: Handle 'response' of type V1InternationalVinDecoderResponse
}
catch (ApiException<GetInternationalVinDecoderError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInternationalVinDecoderRequest](src/CarsXe/Requests/Specifications/GetInternationalVinDecoderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InternationalVinDecoderResponse](src/CarsXe/Models/V1InternationalVinDecoderResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetInternationalVinDecoderError](src/CarsXe/Errors/GetInternationalVinDecoderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SpecsResponse&gt; GetVehicleSpecs(GetVehicleSpecsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Specifications.GetVehicleSpecs(new GetVehicleSpecsRequest
    {
        Vin = "some example string",
    });
    // TODO: Handle 'response' of type SpecsResponse
}
catch (ApiException<GetVehicleSpecsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetVehicleSpecsRequest](src/CarsXe/Requests/Specifications/GetVehicleSpecsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpecsResponse](src/CarsXe/Models/SpecsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetVehicleSpecsError](src/CarsXe/Errors/GetVehicleSpecsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## YearMakeModel

> Source: [YearMakeModel](src/CarsXe/Api/YearMakeModel.cs)

<details>
<summary><code>Task&lt;ObdcodesdecoderResponse&gt; DecodeObdCode(DecodeObdCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.YearMakeModel.DecodeObdCode(new DecodeObdCodeRequest { Code = "some example string" });
    // TODO: Handle 'response' of type ObdcodesdecoderResponse
}
catch (ApiException<DecodeObdCodeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DecodeObdCodeRequest](src/CarsXe/Requests/YearMakeModel/DecodeObdCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ObdcodesdecoderResponse](src/CarsXe/Models/ObdcodesdecoderResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[DecodeObdCodeError](src/CarsXe/Errors/DecodeObdCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1YmmResponse&gt; GetYearMakeModel(GetYearMakeModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.YearMakeModel.GetYearMakeModel(new GetYearMakeModelRequest
    {
        Year = "some example string",
        Make = "some example string",
        Model = "some example string",
    });
    // TODO: Handle 'response' of type V1YmmResponse
}
catch (ApiException<GetYearMakeModelError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetYearMakeModelRequest](src/CarsXe/Requests/YearMakeModel/GetYearMakeModelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1YmmResponse](src/CarsXe/Models/V1YmmResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetYearMakeModelError](src/CarsXe/Errors/GetYearMakeModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1YmmOptionsResponse&gt; GetYearMakeModelOptions(GetYearMakeModelOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.YearMakeModel.GetYearMakeModelOptions(new GetYearMakeModelOptionsRequest());
    // TODO: Handle 'response' of type V1YmmOptionsResponse
}
catch (ApiException<GetYearMakeModelOptionsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetYearMakeModelOptionsRequest](src/CarsXe/Requests/YearMakeModel/GetYearMakeModelOptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1YmmOptionsResponse](src/CarsXe/Models/V1YmmOptionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/CarsXe/Core/Exceptions/ApiException.cs)&lt;[GetYearMakeModelOptionsError](src/CarsXe/Errors/GetYearMakeModelOptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

