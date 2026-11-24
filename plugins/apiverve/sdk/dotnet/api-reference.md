# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ApiVerveClient](src/ApiVerve/ApiVerveClient.cs)

## AiComputerVision

> Source: [AiComputerVision](src/ApiVerve/Api/AiComputerVision.cs)

<details>
<summary><code>Task&lt;V1ArticleideasResponse&gt; Articleideas(ArticleideasRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate article ideas based on a topic using Artificial Intelligence

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiComputerVision.Articleideas(new ArticleideasRequest
    {
        Topic = "software and technology",
    });
    // TODO: Handle 'response' of type V1ArticleideasResponse
}
catch (ApiException<ArticleideasError> ex)
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

<code>[ArticleideasRequest](src/ApiVerve/Requests/AiComputerVision/ArticleideasRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ArticleideasResponse](src/ApiVerve/Models/V1ArticleideasResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ArticleideasError](src/ApiVerve/Errors/ArticleideasError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CodedetectorResponse&gt; Codedetector(CodedetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Code Detector is a simple tool for detecting the language of code in text. It returns details such as extension, language, family, and more.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiComputerVision.Codedetector(new CodedetectorRequest
    {
        Body = new V1CodedetectorRequest { Code = "some example string" },
    });
    // TODO: Handle 'response' of type V1CodedetectorResponse
}
catch (ApiException<CodedetectorError> ex)
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

<code>[CodedetectorRequest](src/ApiVerve/Requests/AiComputerVision/CodedetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CodedetectorResponse](src/ApiVerve/Models/V1CodedetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CodedetectorError](src/ApiVerve/Errors/CodedetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ImagecaptionResponse&gt; Imagecaption(ImagecaptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image and receive a natural language description of its contents.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiComputerVision.Imagecaption(new ImagecaptionRequest { Image = Array.Empty<byte>() });
    // TODO: Handle 'response' of type V1ImagecaptionResponse
}
catch (ApiException<ImagecaptionError> ex)
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

<code>[ImagecaptionRequest](src/ApiVerve/Requests/AiComputerVision/ImagecaptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ImagecaptionResponse](src/ApiVerve/Models/V1ImagecaptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ImagecaptionError](src/ApiVerve/Errors/ImagecaptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ImagetotextResponse&gt; Imagetotext(ImagetotextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract text from an uploaded image using OCR

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiComputerVision.Imagetotext(new ImagetotextRequest { Image = Array.Empty<byte>() });
    // TODO: Handle 'response' of type V1ImagetotextResponse
}
catch (ApiException<ImagetotextError> ex)
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

<code>[ImagetotextRequest](src/ApiVerve/Requests/AiComputerVision/ImagetotextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ImagetotextResponse](src/ApiVerve/Models/V1ImagetotextResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ImagetotextError](src/ApiVerve/Errors/ImagetotextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LanguagedetectorResponse&gt; Languagedetector(LanguagedetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect the language of a body of text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiComputerVision.Languagedetector(new LanguagedetectorRequest
    {
        Body = new V1LanguagedetectorRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1LanguagedetectorResponse
}
catch (ApiException<LanguagedetectorError> ex)
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

<code>[LanguagedetectorRequest](src/ApiVerve/Requests/AiComputerVision/LanguagedetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LanguagedetectorResponse](src/ApiVerve/Models/V1LanguagedetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LanguagedetectorError](src/ApiVerve/Errors/LanguagedetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SentimentanalysisResponse&gt; Sentimentanalysis(SentimentanalysisRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze the sentiment of a body of text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AiComputerVision.Sentimentanalysis(new SentimentanalysisRequest
    {
        Body = new V1SentimentanalysisRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1SentimentanalysisResponse
}
catch (ApiException<SentimentanalysisError> ex)
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

<code>[SentimentanalysisRequest](src/ApiVerve/Requests/AiComputerVision/SentimentanalysisRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SentimentanalysisResponse](src/ApiVerve/Models/V1SentimentanalysisResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SentimentanalysisError](src/ApiVerve/Errors/SentimentanalysisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Astrology

> Source: [Astrology](src/ApiVerve/Api/Astrology.cs)

<details>
<summary><code>Task&lt;V1ChinesezodiacResponse&gt; Chinesezodiac(ChinesezodiacRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Chinese zodiac information for a specific date

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Astrology.Chinesezodiac(new ChinesezodiacRequest { Date = "1990-01-15" });
    // TODO: Handle 'response' of type V1ChinesezodiacResponse
}
catch (ApiException<ChinesezodiacError> ex)
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

<code>[ChinesezodiacRequest](src/ApiVerve/Requests/Astrology/ChinesezodiacRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ChinesezodiacResponse](src/ApiVerve/Models/V1ChinesezodiacResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ChinesezodiacError](src/ApiVerve/Errors/ChinesezodiacError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HoroscopeResponse&gt; Horoscope(HoroscopeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the horoscope of the day for a specific zodiac sign

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Astrology.Horoscope(new HoroscopeRequest { Sign = "aries" });
    // TODO: Handle 'response' of type V1HoroscopeResponse
}
catch (ApiException<HoroscopeError> ex)
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

<code>[HoroscopeRequest](src/ApiVerve/Requests/Astrology/HoroscopeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HoroscopeResponse](src/ApiVerve/Models/V1HoroscopeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HoroscopeError](src/ApiVerve/Errors/HoroscopeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MoonphasesResponse&gt; Moonphases(MoonphasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the moon phase for today

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Astrology.Moonphases(new MoonphasesRequest { Today = true });
    // TODO: Handle 'response' of type V1MoonphasesResponse
}
catch (ApiException<MoonphasesError> ex)
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

<code>[MoonphasesRequest](src/ApiVerve/Requests/Astrology/MoonphasesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MoonphasesResponse](src/ApiVerve/Models/V1MoonphasesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MoonphasesError](src/ApiVerve/Errors/MoonphasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MoonpositionResponse&gt; Moonposition(MoonpositionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get moon position data based on the location

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Astrology.Moonposition(new MoonpositionRequest
    {
        Lat = 37.7749d,
        Lon = -122.4194d,
        Date = "01-16-2026",
        Time = "14:30",
        Timezone = "America/Los_Angeles",
    });
    // TODO: Handle 'response' of type V1MoonpositionResponse
}
catch (ApiException<MoonpositionError> ex)
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

<code>[MoonpositionRequest](src/ApiVerve/Requests/Astrology/MoonpositionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MoonpositionResponse](src/ApiVerve/Models/V1MoonpositionResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MoonpositionError](src/ApiVerve/Errors/MoonpositionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PlanetpositionsResponse&gt; Planetpositions(PlanetpositionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Planet Positions is a simple tool for getting the position of planets in the solar system. It returns the position of planets in the solar system.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Astrology.Planetpositions(new PlanetpositionsRequest
    {
        Body = new V1PlanetpositionsRequest { Lat = 1.5d, Lon = 1.5d, Planet = "some example string" },
    });
    // TODO: Handle 'response' of type V1PlanetpositionsResponse
}
catch (ApiException<PlanetpositionsError> ex)
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

<code>[PlanetpositionsRequest](src/ApiVerve/Requests/Astrology/PlanetpositionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PlanetpositionsResponse](src/ApiVerve/Models/V1PlanetpositionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PlanetpositionsError](src/ApiVerve/Errors/PlanetpositionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SunpositionResponse&gt; Sunposition(SunpositionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get sun position data based on the location

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Astrology.Sunposition(new SunpositionRequest
    {
        Lat = 37.7749d,
        Lon = -122.4194d,
        Date = "01-16-2026",
        Time = "14:30",
        Timezone = "America/Los_Angeles",
    });
    // TODO: Handle 'response' of type V1SunpositionResponse
}
catch (ApiException<SunpositionError> ex)
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

<code>[SunpositionRequest](src/ApiVerve/Requests/Astrology/SunpositionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SunpositionResponse](src/ApiVerve/Models/V1SunpositionResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SunpositionError](src/ApiVerve/Errors/SunpositionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Calendar

> Source: [Calendar](src/ApiVerve/Api/Calendar.cs)

<details>
<summary><code>Task&lt;V1AgecalculatorResponse&gt; Agecalculator(AgecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate age based on the date of birth provided

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Calendar.Agecalculator(new AgecalculatorRequest
    {
        Dob = "1990-08-02",
        Timezone = "America/Chicago",
    });
    // TODO: Handle 'response' of type V1AgecalculatorResponse
}
catch (ApiException<AgecalculatorError> ex)
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

<code>[AgecalculatorRequest](src/ApiVerve/Requests/Calendar/AgecalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AgecalculatorResponse](src/ApiVerve/Models/V1AgecalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AgecalculatorError](src/ApiVerve/Errors/AgecalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DatecalculatorResponse&gt; Datecalculator(DatecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate date differences based on the dates provided

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Calendar.Datecalculator(new DatecalculatorRequest
    {
        Start = "2022-01-01",
        End = "2024-08-31",
    });
    // TODO: Handle 'response' of type V1DatecalculatorResponse
}
catch (ApiException<DatecalculatorError> ex)
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

<code>[DatecalculatorRequest](src/ApiVerve/Requests/Calendar/DatecalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DatecalculatorResponse](src/ApiVerve/Models/V1DatecalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DatecalculatorError](src/ApiVerve/Errors/DatecalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LiturgicalcalendarResponse&gt; Liturgicalcalendar(LiturgicalcalendarRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Catholic liturgical calendar for one month. The response data is an object keyed by ISO date (YYYY-MM-DD), and each date holds an array of the celebrations falling on it — a date can carry more than one, such as a weekday plus an optional memorial. The fields below describe one celebration in those arrays.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Calendar.Liturgicalcalendar(new LiturgicalcalendarRequest { Month = 2, Year = 2025 });
    // TODO: Handle 'response' of type V1LiturgicalcalendarResponse
}
catch (ApiException<LiturgicalcalendarError> ex)
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

<code>[LiturgicalcalendarRequest](src/ApiVerve/Requests/Calendar/LiturgicalcalendarRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LiturgicalcalendarResponse](src/ApiVerve/Models/V1LiturgicalcalendarResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LiturgicalcalendarError](src/ApiVerve/Errors/LiturgicalcalendarError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WorkingdaysResponse&gt; Workingdays(WorkingdaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Working Days is a simple tool for getting the number of working days in a month. It returns the number of working days in the given month.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Calendar.Workingdays(new WorkingdaysRequest
    {
        Country = "US",
        Month = 10,
        Year = 2026,
    });
    // TODO: Handle 'response' of type V1WorkingdaysResponse
}
catch (ApiException<WorkingdaysError> ex)
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

<code>[WorkingdaysRequest](src/ApiVerve/Requests/Calendar/WorkingdaysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WorkingdaysResponse](src/ApiVerve/Models/V1WorkingdaysResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WorkingdaysError](src/ApiVerve/Errors/WorkingdaysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WorldholidaysResponse&gt; Worldholidays(WorldholidaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the holidays of a country for a given year

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Calendar.Worldholidays(new WorldholidaysRequest { Country = "US", Year = 2026 });
    // TODO: Handle 'response' of type V1WorldholidaysResponse
}
catch (ApiException<WorldholidaysError> ex)
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

<code>[WorldholidaysRequest](src/ApiVerve/Requests/Calendar/WorldholidaysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WorldholidaysResponse](src/ApiVerve/Models/V1WorldholidaysResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WorldholidaysError](src/ApiVerve/Errors/WorldholidaysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataConversion

> Source: [DataConversion](src/ApiVerve/Api/DataConversion.cs)

<details>
<summary><code>Task&lt;V1Ascii85EncoderResponse&gt; Ascii85Encoder(Ascii85EncoderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode text using ASCII85 (Base85) encoding

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Ascii85Encoder(new Ascii85EncoderRequest
    {
        Text = "Hello World",
        Action = "encode",
        Format = "standard",
    });
    // TODO: Handle 'response' of type V1Ascii85EncoderResponse
}
catch (ApiException<Ascii85EncoderError> ex)
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

<code>[Ascii85EncoderRequest](src/ApiVerve/Requests/DataConversion/Ascii85EncoderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1Ascii85EncoderResponse](src/ApiVerve/Models/V1Ascii85EncoderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[Ascii85EncoderError](src/ApiVerve/Errors/Ascii85EncoderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1Base64Response&gt; Base64(Base64Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode text to Base64 format

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Base64(new Base64Request { Text = "Hello World", Action = "encode" });
    // TODO: Handle 'response' of type V1Base64Response
}
catch (ApiException<Base64Error> ex)
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

<code>[Base64Request](src/ApiVerve/Requests/DataConversion/Base64Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1Base64Response](src/ApiVerve/Models/V1Base64Response.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[Base64Error](src/ApiVerve/Errors/Base64Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ColorconverterResponse&gt; Colorconverter(ColorconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a color to a different format

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Colorconverter(new ColorconverterRequest { Hex = "FF0000" });
    // TODO: Handle 'response' of type V1ColorconverterResponse
}
catch (ApiException<ColorconverterError> ex)
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

<code>[ColorconverterRequest](src/ApiVerve/Requests/DataConversion/ColorconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColorconverterResponse](src/ApiVerve/Models/V1ColorconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ColorconverterError](src/ApiVerve/Errors/ColorconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CsvtojsonResponse&gt; Csvtojson(CsvtojsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert CSV data to JSON format with custom delimiter support

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Csvtojson(new CsvtojsonRequest
    {
        Body = new V1CsvtojsonRequest { Csv = "some example string" },
    });
    // TODO: Handle 'response' of type V1CsvtojsonResponse
}
catch (ApiException<CsvtojsonError> ex)
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

<code>[CsvtojsonRequest](src/ApiVerve/Requests/DataConversion/CsvtojsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CsvtojsonResponse](src/ApiVerve/Models/V1CsvtojsonResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CsvtojsonError](src/ApiVerve/Errors/CsvtojsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1FilesizeformatterResponse&gt; Filesizeformatter(FilesizeformatterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert bytes to human-readable file size

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Filesizeformatter(new FilesizeformatterRequest
    {
        Bytes = 1073741824,
        Unit = "GB",
        Precision = 2,
        Standard = "binary",
    });
    // TODO: Handle 'response' of type V1FilesizeformatterResponse
}
catch (ApiException<FilesizeformatterError> ex)
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

<code>[FilesizeformatterRequest](src/ApiVerve/Requests/DataConversion/FilesizeformatterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FilesizeformatterResponse](src/ApiVerve/Models/V1FilesizeformatterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[FilesizeformatterError](src/ApiVerve/Errors/FilesizeformatterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HtmlentitiesResponse&gt; Htmlentities(HtmlentitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode HTML special characters to entities for XSS prevention

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Htmlentities(new HtmlentitiesRequest
    {
        Body = new V1HtmlentitiesRequest { Html = "some example string" },
    });
    // TODO: Handle 'response' of type V1HtmlentitiesResponse
}
catch (ApiException<HtmlentitiesError> ex)
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

<code>[HtmlentitiesRequest](src/ApiVerve/Requests/DataConversion/HtmlentitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HtmlentitiesResponse](src/ApiVerve/Models/V1HtmlentitiesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HtmlentitiesError](src/ApiVerve/Errors/HtmlentitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HtmltoimageResponse&gt; Htmltoimage(HtmltoimageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert HTML code to image with customizable dimensions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Htmltoimage(new HtmltoimageRequest
    {
        Body = new V1HtmltoimageRequest { Html = "some example string" },
    });
    // TODO: Handle 'response' of type V1HtmltoimageResponse
}
catch (ApiException<HtmltoimageError> ex)
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

<code>[HtmltoimageRequest](src/ApiVerve/Requests/DataConversion/HtmltoimageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HtmltoimageResponse](src/ApiVerve/Models/V1HtmltoimageResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HtmltoimageError](src/ApiVerve/Errors/HtmltoimageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1JsontocsvResponse&gt; Jsontocsv(JsontocsvRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert JSON array data to CSV format

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Jsontocsv(new JsontocsvRequest
    {
        Body = new V1JsontocsvRequest { Json = "some example string" },
    });
    // TODO: Handle 'response' of type V1JsontocsvResponse
}
catch (ApiException<JsontocsvError> ex)
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

<code>[JsontocsvRequest](src/ApiVerve/Requests/DataConversion/JsontocsvRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JsontocsvResponse](src/ApiVerve/Models/V1JsontocsvResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[JsontocsvError](src/ApiVerve/Errors/JsontocsvError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1JsontojsonpResponse&gt; Jsontojsonp(JsontojsonpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Jsontojsonp(new JsontojsonpRequest
    {
        Body = new V1JsontojsonpRequest { Json = "some example string" },
    });
    // TODO: Handle 'response' of type V1JsontojsonpResponse
}
catch (ApiException<JsontojsonpError> ex)
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

<code>[JsontojsonpRequest](src/ApiVerve/Requests/DataConversion/JsontojsonpRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JsontojsonpResponse](src/ApiVerve/Models/V1JsontojsonpResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[JsontojsonpError](src/ApiVerve/Errors/JsontojsonpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1JwtdecoderResponse&gt; Jwtdecoder(JwtdecoderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode JWT token without verification

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Jwtdecoder(new JwtdecoderRequest
    {
        Body = new V1JwtdecoderRequest { Token = "some example string" },
    });
    // TODO: Handle 'response' of type V1JwtdecoderResponse
}
catch (ApiException<JwtdecoderError> ex)
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

<code>[JwtdecoderRequest](src/ApiVerve/Requests/DataConversion/JwtdecoderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JwtdecoderResponse](src/ApiVerve/Models/V1JwtdecoderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[JwtdecoderError](src/ApiVerve/Errors/JwtdecoderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MarkdowntableResponse&gt; Markdowntable(MarkdowntableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert data to a formatted markdown table

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Markdowntable(new MarkdowntableRequest
    {
        Body = new V1MarkdowntableRequest { Headers = "some example string", Rows = "some example string" },
    });
    // TODO: Handle 'response' of type V1MarkdowntableResponse
}
catch (ApiException<MarkdowntableError> ex)
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

<code>[MarkdowntableRequest](src/ApiVerve/Requests/DataConversion/MarkdowntableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdowntableResponse](src/ApiVerve/Models/V1MarkdowntableResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MarkdowntableError](src/ApiVerve/Errors/MarkdowntableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MarkdowntohtmlResponse&gt; Markdowntohtml(MarkdowntohtmlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert markdown text to HTML

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Markdowntohtml(new MarkdowntohtmlRequest
    {
        Body = new V1MarkdowntohtmlRequest { Markdown = "some example string" },
    });
    // TODO: Handle 'response' of type V1MarkdowntohtmlResponse
}
catch (ApiException<MarkdowntohtmlError> ex)
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

<code>[MarkdowntohtmlRequest](src/ApiVerve/Requests/DataConversion/MarkdowntohtmlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdowntohtmlResponse](src/ApiVerve/Models/V1MarkdowntohtmlResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MarkdowntohtmlError](src/ApiVerve/Errors/MarkdowntohtmlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MarkdowntoimageResponse&gt; Markdowntoimage(MarkdowntoimageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert markdown text to image file

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Markdowntoimage(new MarkdowntoimageRequest
    {
        Body = new V1MarkdowntoimageRequest { Markdown = "some example string" },
    });
    // TODO: Handle 'response' of type V1MarkdowntoimageResponse
}
catch (ApiException<MarkdowntoimageError> ex)
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

<code>[MarkdowntoimageRequest](src/ApiVerve/Requests/DataConversion/MarkdowntoimageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdowntoimageResponse](src/ApiVerve/Models/V1MarkdowntoimageResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MarkdowntoimageError](src/ApiVerve/Errors/MarkdowntoimageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MarkdowntopdfResponse&gt; Markdowntopdf(MarkdowntopdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert markdown text to PDF document

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Markdowntopdf(new MarkdowntopdfRequest
    {
        Body = new V1MarkdowntopdfRequest { Markdown = "some example string" },
    });
    // TODO: Handle 'response' of type V1MarkdowntopdfResponse
}
catch (ApiException<MarkdowntopdfError> ex)
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

<code>[MarkdowntopdfRequest](src/ApiVerve/Requests/DataConversion/MarkdowntopdfRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdowntopdfResponse](src/ApiVerve/Models/V1MarkdowntopdfResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MarkdowntopdfError](src/ApiVerve/Errors/MarkdowntopdfError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MathResponse&gt; Math(MathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform basic math operations: add, subtract, multiply, divide, power, modulo

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Math(new MathRequest
    {
        Body = new V1MathRequest { Operation = "some example string", A = 1.5d, B = 1.5d },
    });
    // TODO: Handle 'response' of type V1MathResponse
}
catch (ApiException<MathError> ex)
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

<code>[MathRequest](src/ApiVerve/Requests/DataConversion/MathRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MathResponse](src/ApiVerve/Models/V1MathResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MathError](src/ApiVerve/Errors/MathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MeetingtimeconverterResponse&gt; Meetingtimeconverter(MeetingtimeconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert meeting time between timezones

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Meetingtimeconverter(new MeetingtimeconverterRequest
    {
        Time = "14:30",
        FromTimezone = "America/New_York",
        ToTimezone = "Europe/London",
        Date = "2024-03-15",
    });
    // TODO: Handle 'response' of type V1MeetingtimeconverterResponse
}
catch (ApiException<MeetingtimeconverterError> ex)
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

<code>[MeetingtimeconverterRequest](src/ApiVerve/Requests/DataConversion/MeetingtimeconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MeetingtimeconverterResponse](src/ApiVerve/Models/V1MeetingtimeconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MeetingtimeconverterError](src/ApiVerve/Errors/MeetingtimeconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1NumberbaseconverterResponse&gt; Numberbaseconverter(NumberbaseconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a number from one base to another

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Numberbaseconverter(new NumberbaseconverterRequest
    {
        Value = "255",
        From = 10,
        To = 10,
    });
    // TODO: Handle 'response' of type V1NumberbaseconverterResponse
}
catch (ApiException<NumberbaseconverterError> ex)
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

<code>[NumberbaseconverterRequest](src/ApiVerve/Requests/DataConversion/NumberbaseconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NumberbaseconverterResponse](src/ApiVerve/Models/V1NumberbaseconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NumberbaseconverterError](src/ApiVerve/Errors/NumberbaseconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1NumbertowordsResponse&gt; Numbertowords(NumbertowordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a number to words, including each word and the orginal equivalent

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Numbertowords(new NumbertowordsRequest { Number = 975.07d });
    // TODO: Handle 'response' of type V1NumbertowordsResponse
}
catch (ApiException<NumbertowordsError> ex)
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

<code>[NumbertowordsRequest](src/ApiVerve/Requests/DataConversion/NumbertowordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NumbertowordsResponse](src/ApiVerve/Models/V1NumbertowordsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NumbertowordsError](src/ApiVerve/Errors/NumbertowordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PlaceholdertextResponse&gt; Placeholdertext(PlaceholdertextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate placeholder text in various styles

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Placeholdertext(new PlaceholdertextRequest
    {
        Style = "tech",
        Paragraphs = 3,
        Sentences = 5,
    });
    // TODO: Handle 'response' of type V1PlaceholdertextResponse
}
catch (ApiException<PlaceholdertextError> ex)
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

<code>[PlaceholdertextRequest](src/ApiVerve/Requests/DataConversion/PlaceholdertextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PlaceholdertextResponse](src/ApiVerve/Models/V1PlaceholdertextResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PlaceholdertextError](src/ApiVerve/Errors/PlaceholdertextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PunycodeResponse&gt; Punycode(PunycodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode Unicode text to Punycode (ASCII-compatible encoding)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Punycode(new PunycodeRequest { Text = "münchen.de", Mode = "encode" });
    // TODO: Handle 'response' of type V1PunycodeResponse
}
catch (ApiException<PunycodeError> ex)
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

<code>[PunycodeRequest](src/ApiVerve/Requests/DataConversion/PunycodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PunycodeResponse](src/ApiVerve/Models/V1PunycodeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PunycodeError](src/ApiVerve/Errors/PunycodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1QuerystringbuilderResponse&gt; Querystringbuilder(QuerystringbuilderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Build URL query string from JSON parameters

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Querystringbuilder(new QuerystringbuilderRequest
    {
        Body = new V1QuerystringbuilderRequest { Params = "some example string" },
    });
    // TODO: Handle 'response' of type V1QuerystringbuilderResponse
}
catch (ApiException<QuerystringbuilderError> ex)
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

<code>[QuerystringbuilderRequest](src/ApiVerve/Requests/DataConversion/QuerystringbuilderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1QuerystringbuilderResponse](src/ApiVerve/Models/V1QuerystringbuilderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[QuerystringbuilderError](src/ApiVerve/Errors/QuerystringbuilderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RelativetimeformatterResponse&gt; Relativetimeformatter(RelativetimeformatterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert Unix timestamp to relative time format

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Relativetimeformatter(new RelativetimeformatterRequest
    {
        Timestamp = "1609459200",
        Reference = "2024-06-01T00:00:00Z",
        Style = "short",
    });
    // TODO: Handle 'response' of type V1RelativetimeformatterResponse
}
catch (ApiException<RelativetimeformatterError> ex)
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

<code>[RelativetimeformatterRequest](src/ApiVerve/Requests/DataConversion/RelativetimeformatterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RelativetimeformatterResponse](src/ApiVerve/Models/V1RelativetimeformatterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RelativetimeformatterError](src/ApiVerve/Errors/RelativetimeformatterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RomanconverterResponse&gt; Romanconverter(RomanconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a number to Roman numerals

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Romanconverter(new RomanconverterRequest { Number = 2024 });
    // TODO: Handle 'response' of type V1RomanconverterResponse
}
catch (ApiException<RomanconverterError> ex)
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

<code>[RomanconverterRequest](src/ApiVerve/Requests/DataConversion/RomanconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RomanconverterResponse](src/ApiVerve/Models/V1RomanconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RomanconverterError](src/ApiVerve/Errors/RomanconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TexttocolorResponse&gt; Texttocolor(TexttocolorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a color from text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Texttocolor(new TexttocolorRequest { Color = "turquoise" });
    // TODO: Handle 'response' of type V1TexttocolorResponse
}
catch (ApiException<TexttocolorError> ex)
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

<code>[TexttocolorRequest](src/ApiVerve/Requests/DataConversion/TexttocolorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TexttocolorResponse](src/ApiVerve/Models/V1TexttocolorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TexttocolorError](src/ApiVerve/Errors/TexttocolorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UnicodeescapeResponse&gt; Unicodeescape(UnicodeescapeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert characters to Unicode escape sequences (\uXXXX format)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Unicodeescape(new UnicodeescapeRequest
    {
        Body = new V1UnicodeescapeRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1UnicodeescapeResponse
}
catch (ApiException<UnicodeescapeError> ex)
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

<code>[UnicodeescapeRequest](src/ApiVerve/Requests/DataConversion/UnicodeescapeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnicodeescapeResponse](src/ApiVerve/Models/V1UnicodeescapeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UnicodeescapeError](src/ApiVerve/Errors/UnicodeescapeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UnitconverterResponse&gt; Unitconverter(UnitconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert units from one to another

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Unitconverter(new UnitconverterRequest
    {
        Value = 100d,
        From = "lb",
        To = "kg",
    });
    // TODO: Handle 'response' of type V1UnitconverterResponse
}
catch (ApiException<UnitconverterError> ex)
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

<code>[UnitconverterRequest](src/ApiVerve/Requests/DataConversion/UnitconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnitconverterResponse](src/ApiVerve/Models/V1UnitconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UnitconverterError](src/ApiVerve/Errors/UnitconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UnixtimestampResponse&gt; Unixtimestamp(UnixtimestampRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert Unix timestamp to human-readable date

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Unixtimestamp(new UnixtimestampRequest
    {
        Timestamp = "1609459200",
        Format = "seconds",
    });
    // TODO: Handle 'response' of type V1UnixtimestampResponse
}
catch (ApiException<UnixtimestampError> ex)
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

<code>[UnixtimestampRequest](src/ApiVerve/Requests/DataConversion/UnixtimestampRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnixtimestampResponse](src/ApiVerve/Models/V1UnixtimestampResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UnixtimestampError](src/ApiVerve/Errors/UnixtimestampError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UrlencodeResponse&gt; Urlencode(UrlencodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode text to URL-safe format (percent-encoding)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Urlencode(new UrlencodeRequest
    {
        Body = new V1UrlencodeRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1UrlencodeResponse
}
catch (ApiException<UrlencodeError> ex)
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

<code>[UrlencodeRequest](src/ApiVerve/Requests/DataConversion/UrlencodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrlencodeResponse](src/ApiVerve/Models/V1UrlencodeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UrlencodeError](src/ApiVerve/Errors/UrlencodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UrltomarkdownResponse&gt; Urltomarkdown(UrltomarkdownRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a webpage URL to Markdown format

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Urltomarkdown(new UrltomarkdownRequest
    {
        Body = new V1UrltomarkdownRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1UrltomarkdownResponse
}
catch (ApiException<UrltomarkdownError> ex)
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

<code>[UrltomarkdownRequest](src/ApiVerve/Requests/DataConversion/UrltomarkdownRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrltomarkdownResponse](src/ApiVerve/Models/V1UrltomarkdownResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UrltomarkdownError](src/ApiVerve/Errors/UrltomarkdownError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1VariablenameconverterResponse&gt; Variablenameconverter(VariablenameconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert variable names between naming conventions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Variablenameconverter(new VariablenameconverterRequest
    {
        Body = new V1VariablenameconverterRequest { Variables = "some example string", To = "some example string" },
    });
    // TODO: Handle 'response' of type V1VariablenameconverterResponse
}
catch (ApiException<VariablenameconverterError> ex)
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

<code>[VariablenameconverterRequest](src/ApiVerve/Requests/DataConversion/VariablenameconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VariablenameconverterResponse](src/ApiVerve/Models/V1VariablenameconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[VariablenameconverterError](src/ApiVerve/Errors/VariablenameconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebsitetotextResponse&gt; Websitetotext(WebsitetotextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a given webiste content to simple text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Websitetotext(new WebsitetotextRequest
    {
        Body = new V1WebsitetotextRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1WebsitetotextResponse
}
catch (ApiException<WebsitetotextError> ex)
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

<code>[WebsitetotextRequest](src/ApiVerve/Requests/DataConversion/WebsitetotextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebsitetotextResponse](src/ApiVerve/Models/V1WebsitetotextResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WebsitetotextError](src/ApiVerve/Errors/WebsitetotextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WordstonumbersResponse&gt; Wordstonumbers(WordstonumbersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert words to numbers, including each word and the orginal equivalent

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Wordstonumbers(new WordstonumbersRequest
    {
        Words = "seven thousand six hundred and twenty",
    });
    // TODO: Handle 'response' of type V1WordstonumbersResponse
}
catch (ApiException<WordstonumbersError> ex)
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

<code>[WordstonumbersRequest](src/ApiVerve/Requests/DataConversion/WordstonumbersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordstonumbersResponse](src/ApiVerve/Models/V1WordstonumbersResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WordstonumbersError](src/ApiVerve/Errors/WordstonumbersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1XmltojsonResponse&gt; Xmltojson(XmltojsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert XML to JSON

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataConversion.Xmltojson(new XmltojsonRequest
    {
        Body = new V1XmltojsonRequest { Xml = "some example string" },
    });
    // TODO: Handle 'response' of type V1XmltojsonResponse
}
catch (ApiException<XmltojsonError> ex)
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

<code>[XmltojsonRequest](src/ApiVerve/Requests/DataConversion/XmltojsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1XmltojsonResponse](src/ApiVerve/Models/V1XmltojsonResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[XmltojsonError](src/ApiVerve/Errors/XmltojsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataGeneration

> Source: [DataGeneration](src/ApiVerve/Api/DataGeneration.cs)

<details>
<summary><code>Task&lt;V1AcronymgeneratorResponse&gt; Acronymgenerator(AcronymgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an acronym from a phrase by extracting the first letter of each word

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Acronymgenerator(new AcronymgeneratorRequest
    {
        Text = "Application Programming Interface",
    });
    // TODO: Handle 'response' of type V1AcronymgeneratorResponse
}
catch (ApiException<AcronymgeneratorError> ex)
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

<code>[AcronymgeneratorRequest](src/ApiVerve/Requests/DataGeneration/AcronymgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AcronymgeneratorResponse](src/ApiVerve/Models/V1AcronymgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AcronymgeneratorError](src/ApiVerve/Errors/AcronymgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BabynamegeneratorResponse&gt; Babynamegenerator(BabynamegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a baby's first and middle name, based on the provided gender

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Babynamegenerator(new BabynamegeneratorRequest
    {
        Gender = "male",
        Count = 1,
        IncludeAvatar = true,
    });
    // TODO: Handle 'response' of type V1BabynamegeneratorResponse
}
catch (ApiException<BabynamegeneratorError> ex)
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

<code>[BabynamegeneratorRequest](src/ApiVerve/Requests/DataGeneration/BabynamegeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BabynamegeneratorResponse](src/ApiVerve/Models/V1BabynamegeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BabynamegeneratorError](src/ApiVerve/Errors/BabynamegeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BarcodegeneratorResponse&gt; Barcodegenerator(BarcodegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Barcode Generator is a simple tool for generating barcodes from data. It returns a URL to the generated image of the barcode.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Barcodegenerator(new BarcodegeneratorRequest
    {
        Body = new V1BarcodegeneratorRequest { Data = "some example string", Type = "some example string" },
    });
    // TODO: Handle 'response' of type V1BarcodegeneratorResponse
}
catch (ApiException<BarcodegeneratorError> ex)
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

<code>[BarcodegeneratorRequest](src/ApiVerve/Requests/DataGeneration/BarcodegeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BarcodegeneratorResponse](src/ApiVerve/Models/V1BarcodegeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BarcodegeneratorError](src/ApiVerve/Errors/BarcodegeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BingocardgeneratorResponse&gt; Bingocardgenerator(BingocardgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random bingo card with HTML and image

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Bingocardgenerator(new BingocardgeneratorRequest
    {
        Size = 5,
        FreeSpace = true,
        Image = true,
    });
    // TODO: Handle 'response' of type V1BingocardgeneratorResponse
}
catch (ApiException<BingocardgeneratorError> ex)
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

<code>[BingocardgeneratorRequest](src/ApiVerve/Requests/DataGeneration/BingocardgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BingocardgeneratorResponse](src/ApiVerve/Models/V1BingocardgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BingocardgeneratorError](src/ApiVerve/Errors/BingocardgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BoggleboardgeneratorResponse&gt; Boggleboardgenerator(BoggleboardgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random Boggle board with HTML and image

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Boggleboardgenerator(new BoggleboardgeneratorRequest
    {
        Size = 4,
        Image = true,
    });
    // TODO: Handle 'response' of type V1BoggleboardgeneratorResponse
}
catch (ApiException<BoggleboardgeneratorError> ex)
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

<code>[BoggleboardgeneratorRequest](src/ApiVerve/Requests/DataGeneration/BoggleboardgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BoggleboardgeneratorResponse](src/ApiVerve/Models/V1BoggleboardgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BoggleboardgeneratorError](src/ApiVerve/Errors/BoggleboardgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CaptchageneratorResponse&gt; Captchagenerator(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Captcha Generator is a simple tool for generating captchas. It returns a random string of characters that can be used as a captcha.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Captchagenerator();
    // TODO: Handle 'response' of type V1CaptchageneratorResponse
}
catch (ApiException<CaptchageneratorError> ex)
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

**OnSuccess**: <code>[V1CaptchageneratorResponse](src/ApiVerve/Models/V1CaptchageneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CaptchageneratorError](src/ApiVerve/Errors/CaptchageneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CardgeneratorResponse&gt; Cardgenerator(CardgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a list of test card numbers

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Cardgenerator(new CardgeneratorRequest
    {
        Brand = "visa",
        Count = 5,
        IncludeAvatar = true,
    });
    // TODO: Handle 'response' of type V1CardgeneratorResponse
}
catch (ApiException<CardgeneratorError> ex)
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

<code>[CardgeneratorRequest](src/ApiVerve/Requests/DataGeneration/CardgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CardgeneratorResponse](src/ApiVerve/Models/V1CardgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CardgeneratorError](src/ApiVerve/Errors/CardgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ChartgeneratorResponse&gt; Chartgenerator(ChartgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a chart with minimal configuration. Just provide type, labels, and datasets with name/values. Colors are auto-assigned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Chartgenerator(new ChartgeneratorRequest
    {
        Body = new V1ChartgeneratorRequest { Labels = "some example string", Datasets = "some example string" },
    });
    // TODO: Handle 'response' of type V1ChartgeneratorResponse
}
catch (ApiException<ChartgeneratorError> ex)
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

<code>[ChartgeneratorRequest](src/ApiVerve/Requests/DataGeneration/ChartgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ChartgeneratorResponse](src/ApiVerve/Models/V1ChartgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ChartgeneratorError](src/ApiVerve/Errors/ChartgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ColorpaletteResponse&gt; Colorpalette(ColorpaletteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a color palette from a single color

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Colorpalette(new ColorpaletteRequest
    {
        Color = "FF5733",
        Scheme = "triade",
        Variation = "soft",
        Count = 5,
        Distance = 0.5d,
        AddComplement = true,
        WebSafe = false,
    });
    // TODO: Handle 'response' of type V1ColorpaletteResponse
}
catch (ApiException<ColorpaletteError> ex)
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

<code>[ColorpaletteRequest](src/ApiVerve/Requests/DataGeneration/ColorpaletteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColorpaletteResponse](src/ApiVerve/Models/V1ColorpaletteResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ColorpaletteError](src/ApiVerve/Errors/ColorpaletteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CommentgeneratorResponse&gt; Commentgenerator(CommentgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate comments for text-based social media posts

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Commentgenerator(new CommentgeneratorRequest
    {
        Mode = "text",
        Tone = "positive",
        Count = 5,
        Emojis = true,
    });
    // TODO: Handle 'response' of type V1CommentgeneratorResponse
}
catch (ApiException<CommentgeneratorError> ex)
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

<code>[CommentgeneratorRequest](src/ApiVerve/Requests/DataGeneration/CommentgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CommentgeneratorResponse](src/ApiVerve/Models/V1CommentgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CommentgeneratorError](src/ApiVerve/Errors/CommentgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CompanynamegeneratorResponse&gt; Companynamegenerator(CompanynamegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate company names based on the specified criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Companynamegenerator(new CompanynamegeneratorRequest
    {
        Keyword = "systems",
        Count = 5,
    });
    // TODO: Handle 'response' of type V1CompanynamegeneratorResponse
}
catch (ApiException<CompanynamegeneratorError> ex)
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

<code>[CompanynamegeneratorRequest](src/ApiVerve/Requests/DataGeneration/CompanynamegeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CompanynamegeneratorResponse](src/ApiVerve/Models/V1CompanynamegeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CompanynamegeneratorError](src/ApiVerve/Errors/CompanynamegeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CrongeneratorResponse&gt; Crongenerator(CrongeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate cron expressions from natural language schedule descriptions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Crongenerator(new CrongeneratorRequest
    {
        Schedule = "every weekday at 9am",
    });
    // TODO: Handle 'response' of type V1CrongeneratorResponse
}
catch (ApiException<CrongeneratorError> ex)
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

<code>[CrongeneratorRequest](src/ApiVerve/Requests/DataGeneration/CrongeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CrongeneratorResponse](src/ApiVerve/Models/V1CrongeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CrongeneratorError](src/ApiVerve/Errors/CrongeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CuidgeneratorResponse&gt; Cuidgenerator(CuidgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate one or more collision-resistant unique identifiers

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Cuidgenerator(new CuidgeneratorRequest { Count = 10 });
    // TODO: Handle 'response' of type V1CuidgeneratorResponse
}
catch (ApiException<CuidgeneratorError> ex)
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

<code>[CuidgeneratorRequest](src/ApiVerve/Requests/DataGeneration/CuidgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CuidgeneratorResponse](src/ApiVerve/Models/V1CuidgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CuidgeneratorError](src/ApiVerve/Errors/CuidgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GuidgeneratorResponse&gt; Guidgenerator(GuidgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate one or more GUIDs with formatting options

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Guidgenerator(new GuidgeneratorRequest
    {
        Count = 3,
        Format = "uppercase",
    });
    // TODO: Handle 'response' of type V1GuidgeneratorResponse
}
catch (ApiException<GuidgeneratorError> ex)
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

<code>[GuidgeneratorRequest](src/ApiVerve/Requests/DataGeneration/GuidgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GuidgeneratorResponse](src/ApiVerve/Models/V1GuidgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GuidgeneratorError](src/ApiVerve/Errors/GuidgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HashtaggeneratorResponse&gt; Hashtaggenerator(HashtaggeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate hashtags from text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Hashtaggenerator(new HashtaggeneratorRequest
    {
        Body = new V1HashtaggeneratorRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1HashtaggeneratorResponse
}
catch (ApiException<HashtaggeneratorError> ex)
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

<code>[HashtaggeneratorRequest](src/ApiVerve/Requests/DataGeneration/HashtaggeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HashtaggeneratorResponse](src/ApiVerve/Models/V1HashtaggeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HashtaggeneratorError](src/ApiVerve/Errors/HashtaggeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ImeigeneratorResponse&gt; Imeigenerator(ImeigeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate valid IMEI numbers

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Imeigenerator(new ImeigeneratorRequest { Brand = "Samsung", Count = 1 });
    // TODO: Handle 'response' of type V1ImeigeneratorResponse
}
catch (ApiException<ImeigeneratorError> ex)
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

<code>[ImeigeneratorRequest](src/ApiVerve/Requests/DataGeneration/ImeigeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ImeigeneratorResponse](src/ApiVerve/Models/V1ImeigeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ImeigeneratorError](src/ApiVerve/Errors/ImeigeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1InitialismgeneratorResponse&gt; Initialismgenerator(InitialismgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate initialism from phrase

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Initialismgenerator(new InitialismgeneratorRequest
    {
        Body = new V1InitialismgeneratorRequest { Phrase = "some example string" },
    });
    // TODO: Handle 'response' of type V1InitialismgeneratorResponse
}
catch (ApiException<InitialismgeneratorError> ex)
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

<code>[InitialismgeneratorRequest](src/ApiVerve/Requests/DataGeneration/InitialismgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InitialismgeneratorResponse](src/ApiVerve/Models/V1InitialismgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[InitialismgeneratorError](src/ApiVerve/Errors/InitialismgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1JsonschemageneratorResponse&gt; Jsonschemagenerator(JsonschemageneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a JSON schema from sample JSON data

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Jsonschemagenerator(new JsonschemageneratorRequest
    {
        Body = new V1JsonschemageneratorRequest { Json = "some example string" },
    });
    // TODO: Handle 'response' of type V1JsonschemageneratorResponse
}
catch (ApiException<JsonschemageneratorError> ex)
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

<code>[JsonschemageneratorRequest](src/ApiVerve/Requests/DataGeneration/JsonschemageneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JsonschemageneratorResponse](src/ApiVerve/Models/V1JsonschemageneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[JsonschemageneratorError](src/ApiVerve/Errors/JsonschemageneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LoremipsumgeneratorResponse&gt; Loremipsumgenerator(LoremipsumgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate lorem ipsum text with a specified number of sentences or words

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Loremipsumgenerator(new LoremipsumgeneratorRequest
    {
        Paragraphs = 3,
        Startwithlorem = true,
        Maxlength = 100,
    });
    // TODO: Handle 'response' of type V1LoremipsumgeneratorResponse
}
catch (ApiException<LoremipsumgeneratorError> ex)
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

<code>[LoremipsumgeneratorRequest](src/ApiVerve/Requests/DataGeneration/LoremipsumgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LoremipsumgeneratorResponse](src/ApiVerve/Models/V1LoremipsumgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LoremipsumgeneratorError](src/ApiVerve/Errors/LoremipsumgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PasswordgeneratorResponse&gt; Passwordgenerator(PasswordgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate passwords with a specified length and complexity

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Passwordgenerator(new PasswordgeneratorRequest
    {
        Count = 10,
        Length = 12,
        Complexity = "strong",
        Type = "random",
        IncludeNumbers = true,
        IncludeSymbols = true,
        IncludeUppercase = true,
        IncludeLowercase = true,
        ExcludeSimilar = true,
        ExcludeAmbiguous = true,
        MixedCase = true,
        Strict = true,
        WordCount = 4,
        Separator = "-",
        Capitalize = true,
        Analyze = true,
    });
    // TODO: Handle 'response' of type V1PasswordgeneratorResponse
}
catch (ApiException<PasswordgeneratorError> ex)
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

<code>[PasswordgeneratorRequest](src/ApiVerve/Requests/DataGeneration/PasswordgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PasswordgeneratorResponse](src/ApiVerve/Models/V1PasswordgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PasswordgeneratorError](src/ApiVerve/Errors/PasswordgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1QrcodegeneratorResponse&gt; Qrcodegenerator(QrcodegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a styled QR code with custom colors, logo, and design options

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Qrcodegenerator(new QrcodegeneratorRequest
    {
        Body = new V1QrcodegeneratorRequest { Value = "some example string" },
    });
    // TODO: Handle 'response' of type V1QrcodegeneratorResponse
}
catch (ApiException<QrcodegeneratorError> ex)
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

<code>[QrcodegeneratorRequest](src/ApiVerve/Requests/DataGeneration/QrcodegeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1QrcodegeneratorResponse](src/ApiVerve/Models/V1QrcodegeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[QrcodegeneratorError](src/ApiVerve/Errors/QrcodegeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RandomgeneratorResponse&gt; Randomgenerator(RandomgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random data of various types

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Randomgenerator(new RandomgeneratorRequest
    {
        Type = "number",
        Count = 10,
        IncludeAvatar = true,
    });
    // TODO: Handle 'response' of type V1RandomgeneratorResponse
}
catch (ApiException<RandomgeneratorError> ex)
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

<code>[RandomgeneratorRequest](src/ApiVerve/Requests/DataGeneration/RandomgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomgeneratorResponse](src/ApiVerve/Models/V1RandomgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RandomgeneratorError](src/ApiVerve/Errors/RandomgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RandomidentitygeneratorResponse&gt; Randomidentitygenerator(RandomidentitygeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a random identity with a name, address, and more

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Randomidentitygenerator(new RandomidentitygeneratorRequest
    {
        Count = 5,
        IncludeAvatar = true,
    });
    // TODO: Handle 'response' of type V1RandomidentitygeneratorResponse
}
catch (ApiException<RandomidentitygeneratorError> ex)
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

<code>[RandomidentitygeneratorRequest](src/ApiVerve/Requests/DataGeneration/RandomidentitygeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomidentitygeneratorResponse](src/ApiVerve/Models/V1RandomidentitygeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RandomidentitygeneratorError](src/ApiVerve/Errors/RandomidentitygeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RandomusergeneratorResponse&gt; Randomusergenerator(RandomusergeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random user data

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Randomusergenerator(new RandomusergeneratorRequest
    {
        Count = 1,
        IncludeAvatar = true,
    });
    // TODO: Handle 'response' of type V1RandomusergeneratorResponse
}
catch (ApiException<RandomusergeneratorError> ex)
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

<code>[RandomusergeneratorRequest](src/ApiVerve/Requests/DataGeneration/RandomusergeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomusergeneratorResponse](src/ApiVerve/Models/V1RandomusergeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RandomusergeneratorError](src/ApiVerve/Errors/RandomusergeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RandomwordsResponse&gt; Randomwords(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random word, including its definition and pronunciation

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Randomwords();
    // TODO: Handle 'response' of type V1RandomwordsResponse
}
catch (ApiException<RandomwordsError> ex)
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

**OnSuccess**: <code>[V1RandomwordsResponse](src/ApiVerve/Models/V1RandomwordsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RandomwordsError](src/ApiVerve/Errors/RandomwordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ShortcodegeneratorResponse&gt; Shortcodegenerator(ShortcodegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate short alphanumeric codes with customizable options

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Shortcodegenerator(new ShortcodegeneratorRequest
    {
        Count = 5,
        Length = 8,
        Charset = "alphanumeric",
    });
    // TODO: Handle 'response' of type V1ShortcodegeneratorResponse
}
catch (ApiException<ShortcodegeneratorError> ex)
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

<code>[ShortcodegeneratorRequest](src/ApiVerve/Requests/DataGeneration/ShortcodegeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ShortcodegeneratorResponse](src/ApiVerve/Models/V1ShortcodegeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ShortcodegeneratorError](src/ApiVerve/Errors/ShortcodegeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SitemapgeneratorResponse&gt; Sitemapgenerator(SitemapgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an XML sitemap from URLs

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Sitemapgenerator(new SitemapgeneratorRequest
    {
        Body = new V1SitemapgeneratorRequest { Urls = "some example string" },
    });
    // TODO: Handle 'response' of type V1SitemapgeneratorResponse
}
catch (ApiException<SitemapgeneratorError> ex)
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

<code>[SitemapgeneratorRequest](src/ApiVerve/Requests/DataGeneration/SitemapgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SitemapgeneratorResponse](src/ApiVerve/Models/V1SitemapgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SitemapgeneratorError](src/ApiVerve/Errors/SitemapgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TotpgeneratorResponse&gt; Totpgenerator(TotpgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate time-based one-time password

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Totpgenerator(new TotpgeneratorRequest
    {
        Body = new V1TotpgeneratorRequest { Secret = "some example string" },
    });
    // TODO: Handle 'response' of type V1TotpgeneratorResponse
}
catch (ApiException<TotpgeneratorError> ex)
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

<code>[TotpgeneratorRequest](src/ApiVerve/Requests/DataGeneration/TotpgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TotpgeneratorResponse](src/ApiVerve/Models/V1TotpgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TotpgeneratorError](src/ApiVerve/Errors/TotpgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UlidgeneratorResponse&gt; Ulidgenerator(UlidgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate one or more ULIDs

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Ulidgenerator(new UlidgeneratorRequest { Count = 5 });
    // TODO: Handle 'response' of type V1UlidgeneratorResponse
}
catch (ApiException<UlidgeneratorError> ex)
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

<code>[UlidgeneratorRequest](src/ApiVerve/Requests/DataGeneration/UlidgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UlidgeneratorResponse](src/ApiVerve/Models/V1UlidgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UlidgeneratorError](src/ApiVerve/Errors/UlidgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UseragentgeneratorResponse&gt; Useragentgenerator(UseragentgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a random user agent string

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Useragentgenerator(new UseragentgeneratorRequest { Device = "desktop" });
    // TODO: Handle 'response' of type V1UseragentgeneratorResponse
}
catch (ApiException<UseragentgeneratorError> ex)
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

<code>[UseragentgeneratorRequest](src/ApiVerve/Requests/DataGeneration/UseragentgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UseragentgeneratorResponse](src/ApiVerve/Models/V1UseragentgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UseragentgeneratorError](src/ApiVerve/Errors/UseragentgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UsernamegeneratorResponse&gt; Usernamegenerator(UsernamegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate usernames based on the specified criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Usernamegenerator(new UsernamegeneratorRequest
    {
        Email = "sean@mail.com",
        Count = 10,
    });
    // TODO: Handle 'response' of type V1UsernamegeneratorResponse
}
catch (ApiException<UsernamegeneratorError> ex)
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

<code>[UsernamegeneratorRequest](src/ApiVerve/Requests/DataGeneration/UsernamegeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsernamegeneratorResponse](src/ApiVerve/Models/V1UsernamegeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UsernamegeneratorError](src/ApiVerve/Errors/UsernamegeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UuidgeneratorResponse&gt; Uuidgenerator(UuidgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate one or more RFC 4122 version 4 UUIDs

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataGeneration.Uuidgenerator(new UuidgeneratorRequest
    {
        Count = 5,
        Version = 4,
        Format = "default",
    });
    // TODO: Handle 'response' of type V1UuidgeneratorResponse
}
catch (ApiException<UuidgeneratorError> ex)
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

<code>[UuidgeneratorRequest](src/ApiVerve/Requests/DataGeneration/UuidgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UuidgeneratorResponse](src/ApiVerve/Models/V1UuidgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UuidgeneratorError](src/ApiVerve/Errors/UuidgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataLookup

> Source: [DataLookup](src/ApiVerve/Api/DataLookup.cs)

<details>
<summary><code>Task&lt;V1AsnlookupResponse&gt; Asnlookup(AsnlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ASN Lookup is a simple tool for getting information on Autonomous System Numbers (ASNs). It returns information on various ASNs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Asnlookup(new AsnlookupRequest { Asn = "AS15169" });
    // TODO: Handle 'response' of type V1AsnlookupResponse
}
catch (ApiException<AsnlookupError> ex)
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

<code>[AsnlookupRequest](src/ApiVerve/Requests/DataLookup/AsnlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AsnlookupResponse](src/ApiVerve/Models/V1AsnlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AsnlookupError](src/ApiVerve/Errors/AsnlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BibleResponse&gt; Bible(BibleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a bible chapter or verse based on the book, chapter, and or verse

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Bible(new BibleRequest
    {
        Book = "Genesis",
        Version = "KJV",
        Chapter = 5,
        Verse = 17,
    });
    // TODO: Handle 'response' of type V1BibleResponse
}
catch (ApiException<BibleError> ex)
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

<code>[BibleRequest](src/ApiVerve/Requests/DataLookup/BibleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BibleResponse](src/ApiVerve/Models/V1BibleResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BibleError](src/ApiVerve/Errors/BibleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CallingcodeResponse&gt; Callingcode(CallingcodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Calling Code is a simple tool for getting the country's international dialing codes. It returns the country's international dialing codes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Callingcode(new CallingcodeRequest { Country = "FR" });
    // TODO: Handle 'response' of type V1CallingcodeResponse
}
catch (ApiException<CallingcodeError> ex)
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

<code>[CallingcodeRequest](src/ApiVerve/Requests/DataLookup/CallingcodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CallingcodeResponse](src/ApiVerve/Models/V1CallingcodeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CallingcodeError](src/ApiVerve/Errors/CallingcodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DictionaryResponse&gt; Dictionary(DictionaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the definition of a word

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Dictionary(new DictionaryRequest { Word = "apple" });
    // TODO: Handle 'response' of type V1DictionaryResponse
}
catch (ApiException<DictionaryError> ex)
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

<code>[DictionaryRequest](src/ApiVerve/Requests/DataLookup/DictionaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DictionaryResponse](src/ApiVerve/Models/V1DictionaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DictionaryError](src/ApiVerve/Errors/DictionaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DogbreedsResponse&gt; Dogbreeds(DogbreedsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a specific dog breed

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Dogbreeds(new DogbreedsRequest { Breed = "beagle" });
    // TODO: Handle 'response' of type V1DogbreedsResponse
}
catch (ApiException<DogbreedsError> ex)
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

<code>[DogbreedsRequest](src/ApiVerve/Requests/DataLookup/DogbreedsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DogbreedsResponse](src/ApiVerve/Models/V1DogbreedsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DogbreedsError](src/ApiVerve/Errors/DogbreedsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1EmojiResponse&gt; Emoji(EmojiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the text representation of an emoji

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Emoji(new EmojiRequest { Emoji = "🥳" });
    // TODO: Handle 'response' of type V1EmojiResponse
}
catch (ApiException<EmojiError> ex)
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

<code>[EmojiRequest](src/ApiVerve/Requests/DataLookup/EmojiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EmojiResponse](src/ApiVerve/Models/V1EmojiResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[EmojiError](src/ApiVerve/Errors/EmojiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GenderdetectorResponse&gt; Genderdetector(GenderdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect the likely gender based on a given name

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Genderdetector(new GenderdetectorRequest
    {
        Name = "John Mcdonald",
        Country = "US",
    });
    // TODO: Handle 'response' of type V1GenderdetectorResponse
}
catch (ApiException<GenderdetectorError> ex)
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

<code>[GenderdetectorRequest](src/ApiVerve/Requests/DataLookup/GenderdetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GenderdetectorResponse](src/ApiVerve/Models/V1GenderdetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GenderdetectorError](src/ApiVerve/Errors/GenderdetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GravatarlookupResponse&gt; Gravatarlookup(GravatarlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the Gravatar profile of an email address

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Gravatarlookup(new GravatarlookupRequest { Email = "hello@apiverve.com" });
    // TODO: Handle 'response' of type V1GravatarlookupResponse
}
catch (ApiException<GravatarlookupError> ex)
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

<code>[GravatarlookupRequest](src/ApiVerve/Requests/DataLookup/GravatarlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GravatarlookupResponse](src/ApiVerve/Models/V1GravatarlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GravatarlookupError](src/ApiVerve/Errors/GravatarlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1IpdemographicsResponse&gt; Ipdemographics(IpdemographicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get location and demographic data for an IP address

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Ipdemographics(new IpdemographicsRequest { Ip = "173.172.81.20" });
    // TODO: Handle 'response' of type V1IpdemographicsResponse
}
catch (ApiException<IpdemographicsError> ex)
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

<code>[IpdemographicsRequest](src/ApiVerve/Requests/DataLookup/IpdemographicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IpdemographicsResponse](src/ApiVerve/Models/V1IpdemographicsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[IpdemographicsError](src/ApiVerve/Errors/IpdemographicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LotteryResponse&gt; Lottery(LotteryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the latest winning lottery numbers for Powerball, Mega Millions, EuroMillions, or Lotto Max — pick the game with the numbers parameter. Optionally provide a date for historical results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Lottery(new LotteryRequest { Numbers = "powerball", Date = "2024-01-15" });
    // TODO: Handle 'response' of type V1LotteryResponse
}
catch (ApiException<LotteryError> ex)
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

<code>[LotteryRequest](src/ApiVerve/Requests/DataLookup/LotteryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LotteryResponse](src/ApiVerve/Models/V1LotteryResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LotteryError](src/ApiVerve/Errors/LotteryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1NobelprizesResponse&gt; Nobelprizes(NobelprizesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nobel Prizes is a simple tool for getting information on Nobel Prizes. It returns information on various Nobel Prizes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Nobelprizes(new NobelprizesRequest
    {
        Firstname = "Albert",
        Lastname = "Einstein",
        Category = "Physics",
        Year = 1921,
    });
    // TODO: Handle 'response' of type V1NobelprizesResponse
}
catch (ApiException<NobelprizesError> ex)
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

<code>[NobelprizesRequest](src/ApiVerve/Requests/DataLookup/NobelprizesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NobelprizesResponse](src/ApiVerve/Models/V1NobelprizesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NobelprizesError](src/ApiVerve/Errors/NobelprizesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1OpenlicensesResponse&gt; Openlicenses(OpenlicensesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Open Source Licenses is a simple tool for getting information on open source licenses. It returns information on various open source licenses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Openlicenses(new OpenlicensesRequest { Name = "MIT" });
    // TODO: Handle 'response' of type V1OpenlicensesResponse
}
catch (ApiException<OpenlicensesError> ex)
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

<code>[OpenlicensesRequest](src/ApiVerve/Requests/DataLookup/OpenlicensesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1OpenlicensesResponse](src/ApiVerve/Models/V1OpenlicensesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[OpenlicensesError](src/ApiVerve/Errors/OpenlicensesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ThesaurusResponse&gt; Thesaurus(ThesaurusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of similar words for the specified word

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Thesaurus(new ThesaurusRequest { Word = "big" });
    // TODO: Handle 'response' of type V1ThesaurusResponse
}
catch (ApiException<ThesaurusError> ex)
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

<code>[ThesaurusRequest](src/ApiVerve/Requests/DataLookup/ThesaurusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ThesaurusResponse](src/ApiVerve/Models/V1ThesaurusResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ThesaurusError](src/ApiVerve/Errors/ThesaurusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TimezonelookupResponse&gt; Timezonelookup(TimezonelookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup timezone data based on the city name

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Timezonelookup(new TimezonelookupRequest { City = "Harare" });
    // TODO: Handle 'response' of type V1TimezonelookupResponse
}
catch (ApiException<TimezonelookupError> ex)
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

<code>[TimezonelookupRequest](src/ApiVerve/Requests/DataLookup/TimezonelookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TimezonelookupResponse](src/ApiVerve/Models/V1TimezonelookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TimezonelookupError](src/ApiVerve/Errors/TimezonelookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UnicodelookupResponse&gt; Unicodelookup(UnicodelookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed information about a Unicode character

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Unicodelookup(new UnicodelookupRequest
    {
        Character = "👋",
        Codepoint = "1F44B",
    });
    // TODO: Handle 'response' of type V1UnicodelookupResponse
}
catch (ApiException<UnicodelookupError> ex)
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

<code>[UnicodelookupRequest](src/ApiVerve/Requests/DataLookup/UnicodelookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnicodelookupResponse](src/ApiVerve/Models/V1UnicodelookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UnicodelookupError](src/ApiVerve/Errors/UnicodelookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WorldtimeResponse&gt; Worldtime(WorldtimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current time in any city

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Worldtime(new WorldtimeRequest { City = "San Francisco" });
    // TODO: Handle 'response' of type V1WorldtimeResponse
}
catch (ApiException<WorldtimeError> ex)
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

<code>[WorldtimeRequest](src/ApiVerve/Requests/DataLookup/WorldtimeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WorldtimeResponse](src/ApiVerve/Models/V1WorldtimeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WorldtimeError](src/ApiVerve/Errors/WorldtimeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ZipdemographicsResponse&gt; Zipdemographics(ZipdemographicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get demographic data for a ZIP code

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataLookup.Zipdemographics(new ZipdemographicsRequest { Zip = "90210" });
    // TODO: Handle 'response' of type V1ZipdemographicsResponse
}
catch (ApiException<ZipdemographicsError> ex)
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

<code>[ZipdemographicsRequest](src/ApiVerve/Requests/DataLookup/ZipdemographicsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ZipdemographicsResponse](src/ApiVerve/Models/V1ZipdemographicsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ZipdemographicsError](src/ApiVerve/Errors/ZipdemographicsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataProcessing

> Source: [DataProcessing](src/ApiVerve/Api/DataProcessing.cs)

<details>
<summary><code>Task&lt;V1CounterResponse&gt; Counter(CounterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current value of the counter

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataProcessing.Counter(new CounterRequest { Id = "test_counter" });
    // TODO: Handle 'response' of type V1CounterResponse
}
catch (ApiException<CounterError> ex)
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

<code>[CounterRequest](src/ApiVerve/Requests/DataProcessing/CounterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CounterResponse](src/ApiVerve/Models/V1CounterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CounterError](src/ApiVerve/Errors/CounterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HtmltotextResponse&gt; Htmltotext(HtmltotextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert HTML to text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataProcessing.Htmltotext(new HtmltotextRequest
    {
        Body = new V1HtmltotextRequest { Html = "some example string" },
    });
    // TODO: Handle 'response' of type V1HtmltotextResponse
}
catch (ApiException<HtmltotextError> ex)
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

<code>[HtmltotextRequest](src/ApiVerve/Requests/DataProcessing/HtmltotextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HtmltotextResponse](src/ApiVerve/Models/V1HtmltotextResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HtmltotextError](src/ApiVerve/Errors/HtmltotextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MetadataextractorResponse&gt; Metadataextractor(MetadataextractorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract metadata from a web page

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataProcessing.Metadataextractor(new MetadataextractorRequest
    {
        Body = new V1MetadataextractorRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1MetadataextractorResponse
}
catch (ApiException<MetadataextractorError> ex)
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

<code>[MetadataextractorRequest](src/ApiVerve/Requests/DataProcessing/MetadataextractorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MetadataextractorResponse](src/ApiVerve/Models/V1MetadataextractorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MetadataextractorError](src/ApiVerve/Errors/MetadataextractorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MorsecodeResponse&gt; Morsecode(MorsecodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or decoded Morse code.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataProcessing.Morsecode(new MorsecodeRequest
    {
        Body = new V1MorsecodeRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1MorsecodeResponse
}
catch (ApiException<MorsecodeError> ex)
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

<code>[MorsecodeRequest](src/ApiVerve/Requests/DataProcessing/MorsecodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MorsecodeResponse](src/ApiVerve/Models/V1MorsecodeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MorsecodeError](src/ApiVerve/Errors/MorsecodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MurmurhashResponse&gt; Murmurhash(MurmurhashRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a MurmurHash3 hash

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataProcessing.Murmurhash(new MurmurhashRequest
    {
        Body = new V1MurmurhashRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1MurmurhashResponse
}
catch (ApiException<MurmurhashError> ex)
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

<code>[MurmurhashRequest](src/ApiVerve/Requests/DataProcessing/MurmurhashRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MurmurhashResponse](src/ApiVerve/Models/V1MurmurhashResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MurmurhashError](src/ApiVerve/Errors/MurmurhashError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SqlexplainerResponse&gt; Sqlexplainer(SqlexplainerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a plain English explanation of a SQL query

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataProcessing.Sqlexplainer(new SqlexplainerRequest
    {
        Body = new V1SqlexplainerRequest { Query = "some example string" },
    });
    // TODO: Handle 'response' of type V1SqlexplainerResponse
}
catch (ApiException<SqlexplainerError> ex)
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

<code>[SqlexplainerRequest](src/ApiVerve/Requests/DataProcessing/SqlexplainerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SqlexplainerResponse](src/ApiVerve/Models/V1SqlexplainerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SqlexplainerError](src/ApiVerve/Errors/SqlexplainerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataScraping

> Source: [DataScraping](src/ApiVerve/Api/DataScraping.cs)

<details>
<summary><code>Task&lt;V1ContactextractorResponse&gt; Contactextractor(ContactextractorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract contact data from a web page

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataScraping.Contactextractor(new ContactextractorRequest
    {
        Body = new V1ContactextractorRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1ContactextractorResponse
}
catch (ApiException<ContactextractorError> ex)
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

<code>[ContactextractorRequest](src/ApiVerve/Requests/DataScraping/ContactextractorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ContactextractorResponse](src/ApiVerve/Models/V1ContactextractorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ContactextractorError](src/ApiVerve/Errors/ContactextractorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LinkscraperResponse&gt; Linkscraper(LinkscraperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Scrape all the links on a web page

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataScraping.Linkscraper(new LinkscraperRequest
    {
        Body = new V1LinkscraperRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1LinkscraperResponse
}
catch (ApiException<LinkscraperError> ex)
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

<code>[LinkscraperRequest](src/ApiVerve/Requests/DataScraping/LinkscraperRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LinkscraperResponse](src/ApiVerve/Models/V1LinkscraperResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LinkscraperError](src/ApiVerve/Errors/LinkscraperError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SeoscraperResponse&gt; Seoscraper(SeoscraperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Scrape SEO data from a web page

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataScraping.Seoscraper(new SeoscraperRequest
    {
        Body = new V1SeoscraperRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1SeoscraperResponse
}
catch (ApiException<SeoscraperError> ex)
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

<code>[SeoscraperRequest](src/ApiVerve/Requests/DataScraping/SeoscraperRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SeoscraperResponse](src/ApiVerve/Models/V1SeoscraperResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SeoscraperError](src/ApiVerve/Errors/SeoscraperError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebimagescraperResponse&gt; Webimagescraper(WebimagescraperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Web Image Scraper is a simple tool for scraping images from a website. It returns the URLs of the images found on the website.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataScraping.Webimagescraper(new WebimagescraperRequest
    {
        Body = new V1WebimagescraperRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1WebimagescraperResponse
}
catch (ApiException<WebimagescraperError> ex)
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

<code>[WebimagescraperRequest](src/ApiVerve/Requests/DataScraping/WebimagescraperRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebimagescraperResponse](src/ApiVerve/Models/V1WebimagescraperResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WebimagescraperError](src/ApiVerve/Errors/WebimagescraperError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebscreenshotsResponse&gt; Webscreenshots(WebscreenshotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Capture a screenshot of a web page

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataScraping.Webscreenshots(new WebscreenshotsRequest
    {
        Body = new V1WebscreenshotsRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1WebscreenshotsResponse
}
catch (ApiException<WebscreenshotsError> ex)
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

<code>[WebscreenshotsRequest](src/ApiVerve/Requests/DataScraping/WebscreenshotsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebscreenshotsResponse](src/ApiVerve/Models/V1WebscreenshotsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WebscreenshotsError](src/ApiVerve/Errors/WebscreenshotsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataValidation

> Source: [DataValidation](src/ApiVerve/Api/DataValidation.cs)

<details>
<summary><code>Task&lt;V1CardvalidatorResponse&gt; Cardvalidator(CardvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a card number to ensure it is valid

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Cardvalidator(new CardvalidatorRequest { Number = "4900264223817524" });
    // TODO: Handle 'response' of type V1CardvalidatorResponse
}
catch (ApiException<CardvalidatorError> ex)
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

<code>[CardvalidatorRequest](src/ApiVerve/Requests/DataValidation/CardvalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CardvalidatorResponse](src/ApiVerve/Models/V1CardvalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CardvalidatorError](src/ApiVerve/Errors/CardvalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DisposablephoneResponse&gt; Disposablephone(DisposablephoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether a given phone number is a known disposable or temporary number from SMS receiving services.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Disposablephone(new DisposablephoneRequest { Phone = "+12085813945" });
    // TODO: Handle 'response' of type V1DisposablephoneResponse
}
catch (ApiException<DisposablephoneError> ex)
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

<code>[DisposablephoneRequest](src/ApiVerve/Requests/DataValidation/DisposablephoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DisposablephoneResponse](src/ApiVerve/Models/V1DisposablephoneResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DisposablephoneError](src/ApiVerve/Errors/DisposablephoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1EmaildisposablecheckerResponse&gt; Emaildisposablechecker(EmaildisposablecheckerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if an email address is disposable

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Emaildisposablechecker(new EmaildisposablecheckerRequest
    {
        Email = "support@myspace.com",
    });
    // TODO: Handle 'response' of type V1EmaildisposablecheckerResponse
}
catch (ApiException<EmaildisposablecheckerError> ex)
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

<code>[EmaildisposablecheckerRequest](src/ApiVerve/Requests/DataValidation/EmaildisposablecheckerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EmaildisposablecheckerResponse](src/ApiVerve/Models/V1EmaildisposablecheckerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[EmaildisposablecheckerError](src/ApiVerve/Errors/EmaildisposablecheckerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1EmailvalidatorResponse&gt; Emailvalidator(EmailvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate if an email address is valid and exists

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Emailvalidator(new EmailvalidatorRequest
    {
        Email = "support@myspace.com",
    });
    // TODO: Handle 'response' of type V1EmailvalidatorResponse
}
catch (ApiException<EmailvalidatorError> ex)
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

<code>[EmailvalidatorRequest](src/ApiVerve/Requests/DataValidation/EmailvalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EmailvalidatorResponse](src/ApiVerve/Models/V1EmailvalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[EmailvalidatorError](src/ApiVerve/Errors/EmailvalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PasswordstrengthResponse&gt; Passwordstrength(PasswordstrengthRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the strength of a password

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Passwordstrength(new PasswordstrengthRequest
    {
        Password = "Password123",
    });
    // TODO: Handle 'response' of type V1PasswordstrengthResponse
}
catch (ApiException<PasswordstrengthError> ex)
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

<code>[PasswordstrengthRequest](src/ApiVerve/Requests/DataValidation/PasswordstrengthRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PasswordstrengthResponse](src/ApiVerve/Models/V1PasswordstrengthResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PasswordstrengthError](src/ApiVerve/Errors/PasswordstrengthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PhonenumbervalidatorResponse&gt; Phonenumbervalidator(PhonenumbervalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a phone number

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Phonenumbervalidator(new PhonenumbervalidatorRequest
    {
        Number = "816-555-1017",
        Country = "us",
    });
    // TODO: Handle 'response' of type V1PhonenumbervalidatorResponse
}
catch (ApiException<PhonenumbervalidatorError> ex)
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

<code>[PhonenumbervalidatorRequest](src/ApiVerve/Requests/DataValidation/PhonenumbervalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PhonenumbervalidatorResponse](src/ApiVerve/Models/V1PhonenumbervalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PhonenumbervalidatorError](src/ApiVerve/Errors/PhonenumbervalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SeovalidatorResponse&gt; Seovalidator(SeovalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate the SEO metrics of a web page

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Seovalidator(new SeovalidatorRequest
    {
        Body = new V1SeovalidatorRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1SeovalidatorResponse
}
catch (ApiException<SeovalidatorError> ex)
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

<code>[SeovalidatorRequest](src/ApiVerve/Requests/DataValidation/SeovalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SeovalidatorResponse](src/ApiVerve/Models/V1SeovalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SeovalidatorError](src/ApiVerve/Errors/SeovalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SpamdetectorResponse&gt; Spamdetector(SpamdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect spam in a body of text. Also utilize an email address or IP address to validate the given text against the spam database

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Spamdetector(new SpamdetectorRequest
    {
        Body = new V1SpamdetectorRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1SpamdetectorResponse
}
catch (ApiException<SpamdetectorError> ex)
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

<code>[SpamdetectorRequest](src/ApiVerve/Requests/DataValidation/SpamdetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SpamdetectorResponse](src/ApiVerve/Models/V1SpamdetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SpamdetectorError](src/ApiVerve/Errors/SpamdetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UsernameprofanityResponse&gt; Usernameprofanity(UsernameprofanityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if a username is inappropriate or profane

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataValidation.Usernameprofanity(new UsernameprofanityRequest { Username = "b00bs" });
    // TODO: Handle 'response' of type V1UsernameprofanityResponse
}
catch (ApiException<UsernameprofanityError> ex)
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

<code>[UsernameprofanityRequest](src/ApiVerve/Requests/DataValidation/UsernameprofanityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsernameprofanityResponse](src/ApiVerve/Models/V1UsernameprofanityResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UsernameprofanityError](src/ApiVerve/Errors/UsernameprofanityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/ApiVerve/Api/Documents.cs)

<details>
<summary><code>Task&lt;V1HtmltopdfResponse&gt; Htmltopdf(HtmltopdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert HTML content to a PDF file

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.Htmltopdf(new HtmltopdfRequest
    {
        Body = new V1HtmltopdfRequest { Html = "some example string" },
    });
    // TODO: Handle 'response' of type V1HtmltopdfResponse
}
catch (ApiException<HtmltopdfError> ex)
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

<code>[HtmltopdfRequest](src/ApiVerve/Requests/Documents/HtmltopdfRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HtmltopdfResponse](src/ApiVerve/Models/V1HtmltopdfResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HtmltopdfError](src/ApiVerve/Errors/HtmltopdfError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1InvoicegeneratorResponse&gt; Invoicegenerator(InvoicegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an invoice

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.Invoicegenerator(new InvoicegeneratorRequest
    {
        Body = new V1InvoicegeneratorRequest
        {
            InvoiceNumber = "some example string",
            FromName = "some example string",
            FromStreet = "some example string",
            FromCity = "some example string",
            FromState = "some example string",
            FromZip = "some example string",
            ToName = "some example string",
            ToStreet = "some example string",
            ToCity = "some example string",
            ToState = "some example string",
            ToZip = "some example string",
            Items = "some example string",
        },
    });
    // TODO: Handle 'response' of type V1InvoicegeneratorResponse
}
catch (ApiException<InvoicegeneratorError> ex)
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

<code>[InvoicegeneratorRequest](src/ApiVerve/Requests/Documents/InvoicegeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InvoicegeneratorResponse](src/ApiVerve/Models/V1InvoicegeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[InvoicegeneratorError](src/ApiVerve/Errors/InvoicegeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebsitetopdfResponse&gt; Websitetopdf(WebsitetopdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a website to a PDF file

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.Websitetopdf(new WebsitetopdfRequest
    {
        Body = new V1WebsitetopdfRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1WebsitetopdfResponse
}
catch (ApiException<WebsitetopdfError> ex)
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

<code>[WebsitetopdfRequest](src/ApiVerve/Requests/Documents/WebsitetopdfRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebsitetopdfResponse](src/ApiVerve/Models/V1WebsitetopdfResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WebsitetopdfError](src/ApiVerve/Errors/WebsitetopdfError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DomainData

> Source: [DomainData](src/ApiVerve/Api/DomainData.cs)

<details>
<summary><code>Task&lt;V1BimivalidatorResponse&gt; Bimivalidator(BimivalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

BIMI Validator checks if a domain has a valid BIMI record published in DNS. BIMI enables domain owners to display verified logos in supported email clients.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Bimivalidator(new BimivalidatorRequest { Domain = "ebay.com" });
    // TODO: Handle 'response' of type V1BimivalidatorResponse
}
catch (ApiException<BimivalidatorError> ex)
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

<code>[BimivalidatorRequest](src/ApiVerve/Requests/DomainData/BimivalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BimivalidatorResponse](src/ApiVerve/Models/V1BimivalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BimivalidatorError](src/ApiVerve/Errors/BimivalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DkimvalidatorResponse&gt; Dkimvalidator(DkimvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DKIM Validator checks the DomainKeys Identified Mail (DKIM) DNS records for a domain to verify that they are present and correctly formatted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Dkimvalidator(new DkimvalidatorRequest
    {
        Domain = "github.com",
        Selector = "s1",
    });
    // TODO: Handle 'response' of type V1DkimvalidatorResponse
}
catch (ApiException<DkimvalidatorError> ex)
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

<code>[DkimvalidatorRequest](src/ApiVerve/Requests/DomainData/DkimvalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DkimvalidatorResponse](src/ApiVerve/Models/V1DkimvalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DkimvalidatorError](src/ApiVerve/Errors/DkimvalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DmarcvalidatorResponse&gt; Dmarcvalidator(DmarcvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DMARC Validator checks the Domain-based Message Authentication, Reporting and Conformance (DMARC) record for a domain to ensure it is correctly configured.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Dmarcvalidator(new DmarcvalidatorRequest { Domain = "paypal.com" });
    // TODO: Handle 'response' of type V1DmarcvalidatorResponse
}
catch (ApiException<DmarcvalidatorError> ex)
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

<code>[DmarcvalidatorRequest](src/ApiVerve/Requests/DomainData/DmarcvalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DmarcvalidatorResponse](src/ApiVerve/Models/V1DmarcvalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DmarcvalidatorError](src/ApiVerve/Errors/DmarcvalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DnslookupResponse&gt; Dnslookup(DnslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the DNS records of a domain

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Dnslookup(new DnslookupRequest { Domain = "myspace.com" });
    // TODO: Handle 'response' of type V1DnslookupResponse
}
catch (ApiException<DnslookupError> ex)
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

<code>[DnslookupRequest](src/ApiVerve/Requests/DomainData/DnslookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DnslookupResponse](src/ApiVerve/Models/V1DnslookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DnslookupError](src/ApiVerve/Errors/DnslookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DnspropagationResponse&gt; Dnspropagation(DnspropagationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check DNS propagation for a domain across global DNS servers

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Dnspropagation(new DnspropagationRequest
    {
        Domain = "google.com",
        Type = "A",
    });
    // TODO: Handle 'response' of type V1DnspropagationResponse
}
catch (ApiException<DnspropagationError> ex)
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

<code>[DnspropagationRequest](src/ApiVerve/Requests/DomainData/DnspropagationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DnspropagationResponse](src/ApiVerve/Models/V1DnspropagationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DnspropagationError](src/ApiVerve/Errors/DnspropagationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DnsseccheckResponse&gt; Dnsseccheck(DnsseccheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate DNSSEC configuration for a domain

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Dnsseccheck(new DnsseccheckRequest { Domain = "cloudflare.com" });
    // TODO: Handle 'response' of type V1DnsseccheckResponse
}
catch (ApiException<DnsseccheckError> ex)
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

<code>[DnsseccheckRequest](src/ApiVerve/Requests/DomainData/DnsseccheckRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DnsseccheckResponse](src/ApiVerve/Models/V1DnsseccheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DnsseccheckError](src/ApiVerve/Errors/DnsseccheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DomainavailabilityResponse&gt; Domainavailability(DomainavailabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if a domain is available

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Domainavailability(new DomainavailabilityRequest { Domain = "myspace.com" });
    // TODO: Handle 'response' of type V1DomainavailabilityResponse
}
catch (ApiException<DomainavailabilityError> ex)
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

<code>[DomainavailabilityRequest](src/ApiVerve/Requests/DomainData/DomainavailabilityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DomainavailabilityResponse](src/ApiVerve/Models/V1DomainavailabilityResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DomainavailabilityError](src/ApiVerve/Errors/DomainavailabilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DomainexpirationResponse&gt; Domainexpiration(DomainexpirationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the expiration date of a domain

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Domainexpiration(new DomainexpirationRequest { Domain = "myspace.com" });
    // TODO: Handle 'response' of type V1DomainexpirationResponse
}
catch (ApiException<DomainexpirationError> ex)
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

<code>[DomainexpirationRequest](src/ApiVerve/Requests/DomainData/DomainexpirationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DomainexpirationResponse](src/ApiVerve/Models/V1DomainexpirationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DomainexpirationError](src/ApiVerve/Errors/DomainexpirationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1FullyqualifieddomainResponse&gt; Fullyqualifieddomain(FullyqualifieddomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the fully qualified domain name of an ip

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Fullyqualifieddomain(new FullyqualifieddomainRequest { Ip = "199.30.24.0" });
    // TODO: Handle 'response' of type V1FullyqualifieddomainResponse
}
catch (ApiException<FullyqualifieddomainError> ex)
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

<code>[FullyqualifieddomainRequest](src/ApiVerve/Requests/DomainData/FullyqualifieddomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FullyqualifieddomainResponse](src/ApiVerve/Models/V1FullyqualifieddomainResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[FullyqualifieddomainError](src/ApiVerve/Errors/FullyqualifieddomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MxlookupResponse&gt; Mxlookup(MxlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

MX Lookup is a simple tool for getting MX records for a domain. It returns the MX records for the given domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Mxlookup(new MxlookupRequest { Domain = "yahoo.com" });
    // TODO: Handle 'response' of type V1MxlookupResponse
}
catch (ApiException<MxlookupError> ex)
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

<code>[MxlookupRequest](src/ApiVerve/Requests/DomainData/MxlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MxlookupResponse](src/ApiVerve/Models/V1MxlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MxlookupError](src/ApiVerve/Errors/MxlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ReversednslookupResponse&gt; Reversednslookup(ReversednslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the hostname associated with an IP address

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Reversednslookup(new ReversednslookupRequest { Ip = "8.8.8.8" });
    // TODO: Handle 'response' of type V1ReversednslookupResponse
}
catch (ApiException<ReversednslookupError> ex)
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

<code>[ReversednslookupRequest](src/ApiVerve/Requests/DomainData/ReversednslookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReversednslookupResponse](src/ApiVerve/Models/V1ReversednslookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ReversednslookupError](src/ApiVerve/Errors/ReversednslookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SpfvalidatorResponse&gt; Spfvalidator(SpfvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it's valid and optionally whether a given IP address is authorized to send emails for that domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Spfvalidator(new SpfvalidatorRequest { Domain = "myspace.com" });
    // TODO: Handle 'response' of type V1SpfvalidatorResponse
}
catch (ApiException<SpfvalidatorError> ex)
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

<code>[SpfvalidatorRequest](src/ApiVerve/Requests/DomainData/SpfvalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SpfvalidatorResponse](src/ApiVerve/Models/V1SpfvalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SpfvalidatorError](src/ApiVerve/Errors/SpfvalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SslcheckerResponse&gt; Sslchecker(SslcheckerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the SSL certificate of a domain

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Sslchecker(new SslcheckerRequest { Domain = "ebay.com" });
    // TODO: Handle 'response' of type V1SslcheckerResponse
}
catch (ApiException<SslcheckerError> ex)
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

<code>[SslcheckerRequest](src/ApiVerve/Requests/DomainData/SslcheckerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SslcheckerResponse](src/ApiVerve/Models/V1SslcheckerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SslcheckerError](src/ApiVerve/Errors/SslcheckerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SubdomainfinderResponse&gt; Subdomainfinder(SubdomainfinderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subdomain Finder is a simple tool for finding all the available subdomains for a given domain. It returns a list of all the available subdomains for the given domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Subdomainfinder(new SubdomainfinderRequest
    {
        Domain = "google.com",
        Limit = 5,
        DeepScan = true,
    });
    // TODO: Handle 'response' of type V1SubdomainfinderResponse
}
catch (ApiException<SubdomainfinderError> ex)
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

<code>[SubdomainfinderRequest](src/ApiVerve/Requests/DomainData/SubdomainfinderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SubdomainfinderResponse](src/ApiVerve/Models/V1SubdomainfinderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SubdomainfinderError](src/ApiVerve/Errors/SubdomainfinderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UrllookupResponse&gt; Urllookup(UrllookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the location of a URL

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Urllookup(new UrllookupRequest
    {
        Body = new V1UrllookupRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1UrllookupResponse
}
catch (ApiException<UrllookupError> ex)
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

<code>[UrllookupRequest](src/ApiVerve/Requests/DomainData/UrllookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrllookupResponse](src/ApiVerve/Models/V1UrllookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UrllookupError](src/ApiVerve/Errors/UrllookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UrltitleResponse&gt; Urltitle(UrltitleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the title of a web page based on the URL

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Urltitle(new UrltitleRequest
    {
        Body = new V1UrltitleRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1UrltitleResponse
}
catch (ApiException<UrltitleError> ex)
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

<code>[UrltitleRequest](src/ApiVerve/Requests/DomainData/UrltitleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrltitleResponse](src/ApiVerve/Models/V1UrltitleResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UrltitleError](src/ApiVerve/Errors/UrltitleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UrlunshortenerResponse&gt; Urlunshortener(UrlunshortenerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unshorten a shortened URL

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Urlunshortener(new UrlunshortenerRequest
    {
        Body = new V1UrlunshortenerRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1UrlunshortenerResponse
}
catch (ApiException<UrlunshortenerError> ex)
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

<code>[UrlunshortenerRequest](src/ApiVerve/Requests/DomainData/UrlunshortenerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrlunshortenerResponse](src/ApiVerve/Models/V1UrlunshortenerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UrlunshortenerError](src/ApiVerve/Errors/UrlunshortenerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WhoislookupResponse&gt; Whoislookup(WhoislookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup domain registration data based on the domain name

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DomainData.Whoislookup(new WhoislookupRequest { Domain = "myspace.com" });
    // TODO: Handle 'response' of type V1WhoislookupResponse
}
catch (ApiException<WhoislookupError> ex)
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

<code>[WhoislookupRequest](src/ApiVerve/Requests/DomainData/WhoislookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WhoislookupResponse](src/ApiVerve/Models/V1WhoislookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WhoislookupError](src/ApiVerve/Errors/WhoislookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Entertainment

> Source: [Entertainment](src/ApiVerve/Api/Entertainment.cs)

<details>
<summary><code>Task&lt;V1AdviceResponse&gt; Advice(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Advice Generator is a simple tool for generating random pieces of advice. It returns a random piece of advice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Advice();
    // TODO: Handle 'response' of type V1AdviceResponse
}
catch (ApiException<AdviceError> ex)
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

**OnSuccess**: <code>[V1AdviceResponse](src/ApiVerve/Models/V1AdviceResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AdviceError](src/ApiVerve/Errors/AdviceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BucketlistResponse&gt; Bucketlist(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bucket List is a simple tool for getting a random bucket list item. It returns a random bucket list item

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Bucketlist();
    // TODO: Handle 'response' of type V1BucketlistResponse
}
catch (ApiException<BucketlistError> ex)
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

**OnSuccess**: <code>[V1BucketlistResponse](src/ApiVerve/Models/V1BucketlistResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BucketlistError](src/ApiVerve/Errors/BucketlistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CharadesResponse&gt; Charades(CharadesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random charades word from category

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Charades(new CharadesRequest { Category = "movies" });
    // TODO: Handle 'response' of type V1CharadesResponse
}
catch (ApiException<CharadesError> ex)
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

<code>[CharadesRequest](src/ApiVerve/Requests/Entertainment/CharadesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CharadesResponse](src/ApiVerve/Models/V1CharadesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CharadesError](src/ApiVerve/Errors/CharadesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ChessmovevalidatorResponse&gt; Chessmovevalidator(ChessmovevalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate algebraic chess notation

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Chessmovevalidator(new ChessmovevalidatorRequest { Move = "Nf3" });
    // TODO: Handle 'response' of type V1ChessmovevalidatorResponse
}
catch (ApiException<ChessmovevalidatorError> ex)
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

<code>[ChessmovevalidatorRequest](src/ApiVerve/Requests/Entertainment/ChessmovevalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ChessmovevalidatorResponse](src/ApiVerve/Models/V1ChessmovevalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ChessmovevalidatorError](src/ApiVerve/Errors/ChessmovevalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ChucknorrisResponse&gt; Chucknorris(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random Chuck Norris joke

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Chucknorris();
    // TODO: Handle 'response' of type V1ChucknorrisResponse
}
catch (ApiException<ChucknorrisError> ex)
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

**OnSuccess**: <code>[V1ChucknorrisResponse](src/ApiVerve/Models/V1ChucknorrisResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ChucknorrisError](src/ApiVerve/Errors/ChucknorrisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ComplimentsResponse&gt; Compliments(ComplimentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a unique compliment

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Compliments(new ComplimentsRequest { Adult = false });
    // TODO: Handle 'response' of type V1ComplimentsResponse
}
catch (ApiException<ComplimentsError> ex)
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

<code>[ComplimentsRequest](src/ApiVerve/Requests/Entertainment/ComplimentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ComplimentsResponse](src/ApiVerve/Models/V1ComplimentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ComplimentsError](src/ApiVerve/Errors/ComplimentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DadjokesResponse&gt; Dadjokes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Dadjokes();
    // TODO: Handle 'response' of type V1DadjokesResponse
}
catch (ApiException<DadjokesError> ex)
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

**OnSuccess**: <code>[V1DadjokesResponse](src/ApiVerve/Models/V1DadjokesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DadjokesError](src/ApiVerve/Errors/DadjokesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DndgeneratorResponse&gt; Dndgenerator(DndgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random D&D content by type

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Dndgenerator(new DndgeneratorRequest { Type = "character", Count = 1 });
    // TODO: Handle 'response' of type V1DndgeneratorResponse
}
catch (ApiException<DndgeneratorError> ex)
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

<code>[DndgeneratorRequest](src/ApiVerve/Requests/Entertainment/DndgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DndgeneratorResponse](src/ApiVerve/Models/V1DndgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DndgeneratorError](src/ApiVerve/Errors/DndgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1FortunetellerResponse&gt; Fortuneteller(FortunetellerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate personalized AI fortune with insights and lucky elements

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Fortuneteller(new FortunetellerRequest
    {
        Category = "general",
        Question = "What does the future hold for me?",
    });
    // TODO: Handle 'response' of type V1FortunetellerResponse
}
catch (ApiException<FortunetellerError> ex)
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

<code>[FortunetellerRequest](src/ApiVerve/Requests/Entertainment/FortunetellerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FortunetellerResponse](src/ApiVerve/Models/V1FortunetellerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[FortunetellerError](src/ApiVerve/Errors/FortunetellerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HistoricaleventsResponse&gt; Historicalevents(HistoricaleventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of historical events that match a specific keyword

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Historicalevents(new HistoricaleventsRequest { Text = "moon landing" });
    // TODO: Handle 'response' of type V1HistoricaleventsResponse
}
catch (ApiException<HistoricaleventsError> ex)
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

<code>[HistoricaleventsRequest](src/ApiVerve/Requests/Entertainment/HistoricaleventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HistoricaleventsResponse](src/ApiVerve/Models/V1HistoricaleventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HistoricaleventsError](src/ApiVerve/Errors/HistoricaleventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LovecalculatorResponse&gt; Lovecalculator(LovecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate the love compatibility between two names

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Lovecalculator(new LovecalculatorRequest
    {
        Name1 = "John",
        Name2 = "Jane",
    });
    // TODO: Handle 'response' of type V1LovecalculatorResponse
}
catch (ApiException<LovecalculatorError> ex)
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

<code>[LovecalculatorRequest](src/ApiVerve/Requests/Entertainment/LovecalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LovecalculatorResponse](src/ApiVerve/Models/V1LovecalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LovecalculatorError](src/ApiVerve/Errors/LovecalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1Magic8BallResponse&gt; Magic8Ball(Magic8BallRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random Magic 8-Ball prediction

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Magic8Ball(new Magic8BallRequest { Question = "Will it rain today?" });
    // TODO: Handle 'response' of type V1Magic8BallResponse
}
catch (ApiException<Magic8BallError> ex)
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

<code>[Magic8BallRequest](src/ApiVerve/Requests/Entertainment/Magic8BallRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1Magic8BallResponse](src/ApiVerve/Models/V1Magic8BallResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[Magic8BallError](src/ApiVerve/Errors/Magic8BallError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MusicnotegeneratorResponse&gt; Musicnotegenerator(MusicnotegeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate audio file for musical note

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Musicnotegenerator(new MusicnotegeneratorRequest
    {
        Note = "C",
        Octave = 4,
        Duration = 1d,
    });
    // TODO: Handle 'response' of type V1MusicnotegeneratorResponse
}
catch (ApiException<MusicnotegeneratorError> ex)
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

<code>[MusicnotegeneratorRequest](src/ApiVerve/Requests/Entertainment/MusicnotegeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MusicnotegeneratorResponse](src/ApiVerve/Models/V1MusicnotegeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MusicnotegeneratorError](src/ApiVerve/Errors/MusicnotegeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1NeverhaveieverResponse&gt; Neverhaveiever(NeverhaveieverRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a Never Have I Ever statement

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Neverhaveiever(new NeverhaveieverRequest { Adult = false });
    // TODO: Handle 'response' of type V1NeverhaveieverResponse
}
catch (ApiException<NeverhaveieverError> ex)
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

<code>[NeverhaveieverRequest](src/ApiVerve/Requests/Entertainment/NeverhaveieverRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NeverhaveieverResponse](src/ApiVerve/Models/V1NeverhaveieverResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NeverhaveieverError](src/ApiVerve/Errors/NeverhaveieverError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PictionaryResponse&gt; Pictionary(PictionaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate pictionary words by difficulty level

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Pictionary(new PictionaryRequest { Difficulty = "medium", Count = 5 });
    // TODO: Handle 'response' of type V1PictionaryResponse
}
catch (ApiException<PictionaryError> ex)
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

<code>[PictionaryRequest](src/ApiVerve/Requests/Entertainment/PictionaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PictionaryResponse](src/ApiVerve/Models/V1PictionaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PictionaryError](src/ApiVerve/Errors/PictionaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RandomfactsResponse&gt; Randomfacts(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random fact

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Randomfacts();
    // TODO: Handle 'response' of type V1RandomfactsResponse
}
catch (ApiException<RandomfactsError> ex)
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

**OnSuccess**: <code>[V1RandomfactsResponse](src/ApiVerve/Models/V1RandomfactsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RandomfactsError](src/ApiVerve/Errors/RandomfactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RandomjokeResponse&gt; Randomjoke(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random joke from a collection of jokes

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Randomjoke();
    // TODO: Handle 'response' of type V1RandomjokeResponse
}
catch (ApiException<RandomjokeError> ex)
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

**OnSuccess**: <code>[V1RandomjokeResponse](src/ApiVerve/Models/V1RandomjokeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RandomjokeError](src/ApiVerve/Errors/RandomjokeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RandompunResponse&gt; Randompun(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random pun from a collection of puns

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Randompun();
    // TODO: Handle 'response' of type V1RandompunResponse
}
catch (ApiException<RandompunError> ex)
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

**OnSuccess**: <code>[V1RandompunResponse](src/ApiVerve/Models/V1RandompunResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RandompunError](src/ApiVerve/Errors/RandompunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RandomquoteResponse&gt; Randomquote(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random quote from a collection of quotes

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Randomquote();
    // TODO: Handle 'response' of type V1RandomquoteResponse
}
catch (ApiException<RandomquoteError> ex)
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

**OnSuccess**: <code>[V1RandomquoteResponse](src/ApiVerve/Models/V1RandomquoteResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RandomquoteError](src/ApiVerve/Errors/RandomquoteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ScrabblescorerResponse&gt; Scrabblescorer(ScrabblescorerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate Scrabble points for a word

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Scrabblescorer(new ScrabblescorerRequest
    {
        Word = "QUIZ",
        Language = "english",
    });
    // TODO: Handle 'response' of type V1ScrabblescorerResponse
}
catch (ApiException<ScrabblescorerError> ex)
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

<code>[ScrabblescorerRequest](src/ApiVerve/Requests/Entertainment/ScrabblescorerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ScrabblescorerResponse](src/ApiVerve/Models/V1ScrabblescorerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ScrabblescorerError](src/ApiVerve/Errors/ScrabblescorerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SudokuResponse&gt; Sudoku(SudokuRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sudoku is a simple tool for generating Sudoku puzzles. It returns a Sudoku puzzle.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Sudoku(new SudokuRequest { Difficulty = "medium" });
    // TODO: Handle 'response' of type V1SudokuResponse
}
catch (ApiException<SudokuError> ex)
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

<code>[SudokuRequest](src/ApiVerve/Requests/Entertainment/SudokuRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SudokuResponse](src/ApiVerve/Models/V1SudokuResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SudokuError](src/ApiVerve/Errors/SudokuError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TriviaResponse&gt; Trivia(TriviaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random trivia question

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Trivia(new TriviaRequest { Category = "general" });
    // TODO: Handle 'response' of type V1TriviaResponse
}
catch (ApiException<TriviaError> ex)
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

<code>[TriviaRequest](src/ApiVerve/Requests/Entertainment/TriviaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TriviaResponse](src/ApiVerve/Models/V1TriviaResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TriviaError](src/ApiVerve/Errors/TriviaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TruthordareResponse&gt; Truthordare(TruthordareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a truth or dare prompt

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Truthordare(new TruthordareRequest { Type = "random", Adult = false });
    // TODO: Handle 'response' of type V1TruthordareResponse
}
catch (ApiException<TruthordareError> ex)
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

<code>[TruthordareRequest](src/ApiVerve/Requests/Entertainment/TruthordareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TruthordareResponse](src/ApiVerve/Models/V1TruthordareResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TruthordareError](src/ApiVerve/Errors/TruthordareError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WordlehelperResponse&gt; Wordlehelper(WordlehelperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find possible Wordle solutions based on clues

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Entertainment.Wordlehelper(new WordlehelperRequest
    {
        Green = "A1,E5",
        Yellow = "R2,O3",
        Gray = "STLN",
        Pattern = "A___E",
        Limit = 25,
    });
    // TODO: Handle 'response' of type V1WordlehelperResponse
}
catch (ApiException<WordlehelperError> ex)
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

<code>[WordlehelperRequest](src/ApiVerve/Requests/Entertainment/WordlehelperRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordlehelperResponse](src/ApiVerve/Models/V1WordlehelperResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WordlehelperError](src/ApiVerve/Errors/WordlehelperError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Finance

> Source: [Finance](src/ApiVerve/Api/Finance.cs)

<details>
<summary><code>Task&lt;V1BalancesheetResponse&gt; Balancesheet(BalancesheetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the balance sheet for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Balancesheet(new BalancesheetRequest { Ticker = "AAPL" });
    // TODO: Handle 'response' of type V1BalancesheetResponse
}
catch (ApiException<BalancesheetError> ex)
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

<code>[BalancesheetRequest](src/ApiVerve/Requests/Finance/BalancesheetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BalancesheetResponse](src/ApiVerve/Models/V1BalancesheetResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BalancesheetError](src/ApiVerve/Errors/BalancesheetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BenchmarkrateResponse&gt; Benchmarkrate(BenchmarkrateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current value for a specific benchmark rate.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Benchmarkrate(new BenchmarkrateRequest { Rate = "SOFR" });
    // TODO: Handle 'response' of type V1BenchmarkrateResponse
}
catch (ApiException<BenchmarkrateError> ex)
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

<code>[BenchmarkrateRequest](src/ApiVerve/Requests/Finance/BenchmarkrateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BenchmarkrateResponse](src/ApiVerve/Models/V1BenchmarkrateResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BenchmarkrateError](src/ApiVerve/Errors/BenchmarkrateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BinlookupResponse&gt; Binlookup(BinlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup credit card information based on the BIN

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Binlookup(new BinlookupRequest { Bin = "448590" });
    // TODO: Handle 'response' of type V1BinlookupResponse
}
catch (ApiException<BinlookupError> ex)
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

<code>[BinlookupRequest](src/ApiVerve/Requests/Finance/BinlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BinlookupResponse](src/ApiVerve/Models/V1BinlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BinlookupError](src/ApiVerve/Errors/BinlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BitcoinResponse&gt; Bitcoin(BitcoinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of Bitcoin. You can optionally specify a currency, e.g. USD

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Bitcoin(new BitcoinRequest { Currency = "USD", Hourly = true });
    // TODO: Handle 'response' of type V1BitcoinResponse
}
catch (ApiException<BitcoinError> ex)
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

<code>[BitcoinRequest](src/ApiVerve/Requests/Finance/BitcoinRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BitcoinResponse](src/ApiVerve/Models/V1BitcoinResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BitcoinError](src/ApiVerve/Errors/BitcoinError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CashflowResponse&gt; Cashflow(CashflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the cash flow statement for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Cashflow(new CashflowRequest { Ticker = "AAPL" });
    // TODO: Handle 'response' of type V1CashflowResponse
}
catch (ApiException<CashflowError> ex)
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

<code>[CashflowRequest](src/ApiVerve/Requests/Finance/CashflowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CashflowResponse](src/ApiVerve/Models/V1CashflowResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CashflowError](src/ApiVerve/Errors/CashflowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CompanylookupResponse&gt; Companylookup(CompanylookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company information by stock ticker symbol.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Companylookup(new CompanylookupRequest { Ticker = "AAPL" });
    // TODO: Handle 'response' of type V1CompanylookupResponse
}
catch (ApiException<CompanylookupError> ex)
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

<code>[CompanylookupRequest](src/ApiVerve/Requests/Finance/CompanylookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CompanylookupResponse](src/ApiVerve/Models/V1CompanylookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CompanylookupError](src/ApiVerve/Errors/CompanylookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CostlivingResponse&gt; Costliving(CostlivingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the cost of living index for a specific location. Accepts state names, state codes, or major city names.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Costliving(new CostlivingRequest { Location = "California" });
    // TODO: Handle 'response' of type V1CostlivingResponse
}
catch (ApiException<CostlivingError> ex)
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

<code>[CostlivingRequest](src/ApiVerve/Requests/Finance/CostlivingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CostlivingResponse](src/ApiVerve/Models/V1CostlivingResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CostlivingError](src/ApiVerve/Errors/CostlivingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CpiinflationResponse&gt; Cpiinflation(CpiinflationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current or historical CPI inflation data by category

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Cpiinflation(new CpiinflationRequest { Date = "2023-06", Category = "food" });
    // TODO: Handle 'response' of type V1CpiinflationResponse
}
catch (ApiException<CpiinflationError> ex)
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

<code>[CpiinflationRequest](src/ApiVerve/Requests/Finance/CpiinflationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CpiinflationResponse](src/ApiVerve/Models/V1CpiinflationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CpiinflationError](src/ApiVerve/Errors/CpiinflationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CurrencyconverterResponse&gt; Currencyconverter(CurrencyconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert currency rates based on the amount and currency

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Currencyconverter(new CurrencyconverterRequest
    {
        Value = 1d,
        From = "USD",
        To = "EUR",
    });
    // TODO: Handle 'response' of type V1CurrencyconverterResponse
}
catch (ApiException<CurrencyconverterError> ex)
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

<code>[CurrencyconverterRequest](src/ApiVerve/Requests/Finance/CurrencyconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CurrencyconverterResponse](src/ApiVerve/Models/V1CurrencyconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CurrencyconverterError](src/ApiVerve/Errors/CurrencyconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CurrencysymbolsResponse&gt; Currencysymbols(CurrencysymbolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the currency symbol and name of a currency

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Currencysymbols(new CurrencysymbolsRequest { Currency = "USD" });
    // TODO: Handle 'response' of type V1CurrencysymbolsResponse
}
catch (ApiException<CurrencysymbolsError> ex)
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

<code>[CurrencysymbolsRequest](src/ApiVerve/Requests/Finance/CurrencysymbolsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CurrencysymbolsResponse](src/ApiVerve/Models/V1CurrencysymbolsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CurrencysymbolsError](src/ApiVerve/Errors/CurrencysymbolsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DividendsResponse&gt; Dividends(DividendsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the dividend-per-share history for a company by ticker symbol. Optionally choose the annual or quarterly series and limit how many periods are returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Dividends(new DividendsRequest
    {
        Ticker = "AAPL",
        Period = "annual",
        Limit = 10,
    });
    // TODO: Handle 'response' of type V1DividendsResponse
}
catch (ApiException<DividendsError> ex)
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

<code>[DividendsRequest](src/ApiVerve/Requests/Finance/DividendsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DividendsResponse](src/ApiVerve/Models/V1DividendsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DividendsError](src/ApiVerve/Errors/DividendsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1EarningsResponse&gt; Earnings(EarningsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get earnings and financial data for a company by ticker symbol. Optionally filter by year and quarter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Earnings(new EarningsRequest { Ticker = "ADBE" });
    // TODO: Handle 'response' of type V1EarningsResponse
}
catch (ApiException<EarningsError> ex)
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

<code>[EarningsRequest](src/ApiVerve/Requests/Finance/EarningsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EarningsResponse](src/ApiVerve/Models/V1EarningsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[EarningsError](src/ApiVerve/Errors/EarningsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1EthereumResponse&gt; Ethereum(EthereumRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of Ethereum. You can optionally specify a currency, e.g. USD

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Ethereum(new EthereumRequest { Currency = "USD", Hourly = true });
    // TODO: Handle 'response' of type V1EthereumResponse
}
catch (ApiException<EthereumError> ex)
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

<code>[EthereumRequest](src/ApiVerve/Requests/Finance/EthereumRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EthereumResponse](src/ApiVerve/Models/V1EthereumResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[EthereumError](src/ApiVerve/Errors/EthereumError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ExchangerateResponse&gt; Exchangerate(ExchangerateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchange Rate is a simple tool for getting the current exchange rate between two currencies. It returns the current exchange rate.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Exchangerate(new ExchangerateRequest { Currency1 = "USD", Currency2 = "EUR" });
    // TODO: Handle 'response' of type V1ExchangerateResponse
}
catch (ApiException<ExchangerateError> ex)
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

<code>[ExchangerateRequest](src/ApiVerve/Requests/Finance/ExchangerateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ExchangerateResponse](src/ApiVerve/Models/V1ExchangerateResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ExchangerateError](src/ApiVerve/Errors/ExchangerateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1FinancialratiosResponse&gt; Financialratios(FinancialratiosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the key financial ratios for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Financialratios(new FinancialratiosRequest { Ticker = "AAPL" });
    // TODO: Handle 'response' of type V1FinancialratiosResponse
}
catch (ApiException<FinancialratiosError> ex)
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

<code>[FinancialratiosRequest](src/ApiVerve/Requests/Finance/FinancialratiosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FinancialratiosResponse](src/ApiVerve/Models/V1FinancialratiosResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[FinancialratiosError](src/ApiVerve/Errors/FinancialratiosError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GdpResponse&gt; Gdp(GdpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get GDP data for a specific country. Returns latest data by default, or data for a specific year if specified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Gdp(new GdpRequest { Country = "US", Year = 2023 });
    // TODO: Handle 'response' of type V1GdpResponse
}
catch (ApiException<GdpError> ex)
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

<code>[GdpRequest](src/ApiVerve/Requests/Finance/GdpRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GdpResponse](src/ApiVerve/Models/V1GdpResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GdpError](src/ApiVerve/Errors/GdpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GlobalstockmarketResponse&gt; Globalstockmarket(GlobalstockmarketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current or historical share price index for a specific country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Globalstockmarket(new GlobalstockmarketRequest
    {
        Country = "DE",
        Year = 2023,
        Month = 6,
    });
    // TODO: Handle 'response' of type V1GlobalstockmarketResponse
}
catch (ApiException<GlobalstockmarketError> ex)
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

<code>[GlobalstockmarketRequest](src/ApiVerve/Requests/Finance/GlobalstockmarketRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GlobalstockmarketResponse](src/ApiVerve/Models/V1GlobalstockmarketResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GlobalstockmarketError](src/ApiVerve/Errors/GlobalstockmarketError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GoldpriceResponse&gt; Goldprice(GoldpriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of gold. You can optionally specify a currency (defaults to USD).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Goldprice(new GoldpriceRequest { Currency = "USD", Hourly = true });
    // TODO: Handle 'response' of type V1GoldpriceResponse
}
catch (ApiException<GoldpriceError> ex)
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

<code>[GoldpriceRequest](src/ApiVerve/Requests/Finance/GoldpriceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GoldpriceResponse](src/ApiVerve/Models/V1GoldpriceResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GoldpriceError](src/ApiVerve/Errors/GoldpriceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1IfsclookupResponse&gt; Ifsclookup(IfsclookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IFSC Lookup is a simple tool for getting information on IFSC codes. It returns information on various IFSC codes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Ifsclookup(new IfsclookupRequest { Ifsc = "SBIN0005943" });
    // TODO: Handle 'response' of type V1IfsclookupResponse
}
catch (ApiException<IfsclookupError> ex)
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

<code>[IfsclookupRequest](src/ApiVerve/Requests/Finance/IfsclookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IfsclookupResponse](src/ApiVerve/Models/V1IfsclookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[IfsclookupError](src/ApiVerve/Errors/IfsclookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1IncomestatementResponse&gt; Incomestatement(IncomestatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the income statement for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Incomestatement(new IncomestatementRequest { Ticker = "AAPL" });
    // TODO: Handle 'response' of type V1IncomestatementResponse
}
catch (ApiException<IncomestatementError> ex)
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

<code>[IncomestatementRequest](src/ApiVerve/Requests/Finance/IncomestatementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IncomestatementResponse](src/ApiVerve/Models/V1IncomestatementResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[IncomestatementError](src/ApiVerve/Errors/IncomestatementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1IncometaxResponse&gt; Incometax(IncometaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get federal income tax brackets for a specific country and year.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Incometax(new IncometaxRequest { Country = "US", Year = 2024 });
    // TODO: Handle 'response' of type V1IncometaxResponse
}
catch (ApiException<IncometaxError> ex)
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

<code>[IncometaxRequest](src/ApiVerve/Requests/Finance/IncometaxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IncometaxResponse](src/ApiVerve/Models/V1IncometaxResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[IncometaxError](src/ApiVerve/Errors/IncometaxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1IncometaxcalculatorResponse&gt; Incometaxcalculator(IncometaxcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate income tax using a custom tax rate. Useful for simple flat-rate tax calculations or estimations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Incometaxcalculator(new IncometaxcalculatorRequest
    {
        Income = 85000d,
        Rate = 22d,
        Deduction = 14600d,
    });
    // TODO: Handle 'response' of type V1IncometaxcalculatorResponse
}
catch (ApiException<IncometaxcalculatorError> ex)
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

<code>[IncometaxcalculatorRequest](src/ApiVerve/Requests/Finance/IncometaxcalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IncometaxcalculatorResponse](src/ApiVerve/Models/V1IncometaxcalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[IncometaxcalculatorError](src/ApiVerve/Errors/IncometaxcalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1InflationResponse&gt; Inflation(InflationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the annual inflation rate and CPI data for a specific country and year.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Inflation(new InflationRequest { Country = "US", Year = 2023 });
    // TODO: Handle 'response' of type V1InflationResponse
}
catch (ApiException<InflationError> ex)
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

<code>[InflationRequest](src/ApiVerve/Requests/Finance/InflationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InflationResponse](src/ApiVerve/Models/V1InflationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[InflationError](src/ApiVerve/Errors/InflationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1InsidertradingResponse&gt; Insidertrading(InsidertradingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get recent SEC Form 4 insider transactions for a company by ticker symbol. Optionally filter to buys or sells and limit the number of transactions returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Insidertrading(new InsidertradingRequest
    {
        Ticker = "AAPL",
        Type = "buy",
        Limit = 10,
    });
    // TODO: Handle 'response' of type V1InsidertradingResponse
}
catch (ApiException<InsidertradingError> ex)
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

<code>[InsidertradingRequest](src/ApiVerve/Requests/Finance/InsidertradingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InsidertradingResponse](src/ApiVerve/Models/V1InsidertradingResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[InsidertradingError](src/ApiVerve/Errors/InsidertradingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1InterestrateResponse&gt; Interestrate(InterestrateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the central bank policy interest rate for a specific country. Omit `date` for the current rate, or pass a YYYY-MM month for a historical rate (available from 2000 onwards).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Interestrate(new InterestrateRequest { Country = "US", Date = "2024-06" });
    // TODO: Handle 'response' of type V1InterestrateResponse
}
catch (ApiException<InterestrateError> ex)
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

<code>[InterestrateRequest](src/ApiVerve/Requests/Finance/InterestrateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InterestrateResponse](src/ApiVerve/Models/V1InterestrateResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[InterestrateError](src/ApiVerve/Errors/InterestrateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1JobsreportResponse&gt; Jobsreport(JobsreportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current or historical employment statistics

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Jobsreport(new JobsreportRequest { Date = "2023-06" });
    // TODO: Handle 'response' of type V1JobsreportResponse
}
catch (ApiException<JobsreportError> ex)
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

<code>[JobsreportRequest](src/ApiVerve/Requests/Finance/JobsreportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JobsreportResponse](src/ApiVerve/Models/V1JobsreportResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[JobsreportError](src/ApiVerve/Errors/JobsreportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LoanpaymentcalculatorResponse&gt; Loanpaymentcalculator(LoanpaymentcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate loan payments based on the loan amount, interest rate, and loan term

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Loanpaymentcalculator(new LoanpaymentcalculatorRequest
    {
        Body = new V1LoanpaymentcalculatorRequest { LoanAmount = 1.5d, InterestRate = 1.5d, LoanTerm = 1 },
    });
    // TODO: Handle 'response' of type V1LoanpaymentcalculatorResponse
}
catch (ApiException<LoanpaymentcalculatorError> ex)
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

<code>[LoanpaymentcalculatorRequest](src/ApiVerve/Requests/Finance/LoanpaymentcalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LoanpaymentcalculatorResponse](src/ApiVerve/Models/V1LoanpaymentcalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LoanpaymentcalculatorError](src/ApiVerve/Errors/LoanpaymentcalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MinimumwageResponse&gt; Minimumwage(MinimumwageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get minimum wage rates for all states or a specific state

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Minimumwage(new MinimumwageRequest { State = "CA", Year = 2024d });
    // TODO: Handle 'response' of type V1MinimumwageResponse
}
catch (ApiException<MinimumwageError> ex)
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

<code>[MinimumwageRequest](src/ApiVerve/Requests/Finance/MinimumwageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MinimumwageResponse](src/ApiVerve/Models/V1MinimumwageResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MinimumwageError](src/ApiVerve/Errors/MinimumwageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MortgagecalculatorResponse&gt; Mortgagecalculator(MortgagecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate mortgage payments based on the loan amount, interest rate, and loan term

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Mortgagecalculator(new MortgagecalculatorRequest
    {
        Body = new V1MortgagecalculatorRequest { Amount = 1.5d, Rate = 1.5d, Years = 1 },
    });
    // TODO: Handle 'response' of type V1MortgagecalculatorResponse
}
catch (ApiException<MortgagecalculatorError> ex)
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

<code>[MortgagecalculatorRequest](src/ApiVerve/Requests/Finance/MortgagecalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MortgagecalculatorResponse](src/ApiVerve/Models/V1MortgagecalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MortgagecalculatorError](src/ApiVerve/Errors/MortgagecalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MortgagerateResponse&gt; Mortgagerate(MortgagerateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current or historical mortgage rate for a specific type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Mortgagerate(new MortgagerateRequest
    {
        Type = "30year",
        Year = 2023,
        Month = 6,
    });
    // TODO: Handle 'response' of type V1MortgagerateResponse
}
catch (ApiException<MortgagerateError> ex)
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

<code>[MortgagerateRequest](src/ApiVerve/Requests/Finance/MortgagerateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MortgagerateResponse](src/ApiVerve/Models/V1MortgagerateResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MortgagerateError](src/ApiVerve/Errors/MortgagerateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1NationaldebtResponse&gt; Nationaldebt(NationaldebtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current or historical US national debt data

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Nationaldebt(new NationaldebtRequest { Date = "2023-06-15" });
    // TODO: Handle 'response' of type V1NationaldebtResponse
}
catch (ApiException<NationaldebtError> ex)
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

<code>[NationaldebtRequest](src/ApiVerve/Requests/Finance/NationaldebtRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NationaldebtResponse](src/ApiVerve/Models/V1NationaldebtResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NationaldebtError](src/ApiVerve/Errors/NationaldebtError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PalladiumpriceResponse&gt; Palladiumprice(PalladiumpriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of palladium. You can optionally specify a currency (defaults to USD).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Palladiumprice(new PalladiumpriceRequest { Currency = "USD", Hourly = true });
    // TODO: Handle 'response' of type V1PalladiumpriceResponse
}
catch (ApiException<PalladiumpriceError> ex)
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

<code>[PalladiumpriceRequest](src/ApiVerve/Requests/Finance/PalladiumpriceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PalladiumpriceResponse](src/ApiVerve/Models/V1PalladiumpriceResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PalladiumpriceError](src/ApiVerve/Errors/PalladiumpriceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PlatinumpriceResponse&gt; Platinumprice(PlatinumpriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of platinum. You can optionally specify a currency (defaults to USD).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Platinumprice(new PlatinumpriceRequest { Currency = "USD", Hourly = true });
    // TODO: Handle 'response' of type V1PlatinumpriceResponse
}
catch (ApiException<PlatinumpriceError> ex)
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

<code>[PlatinumpriceRequest](src/ApiVerve/Requests/Finance/PlatinumpriceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PlatinumpriceResponse](src/ApiVerve/Models/V1PlatinumpriceResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PlatinumpriceError](src/ApiVerve/Errors/PlatinumpriceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PopulationResponse&gt; Population(PopulationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get population data for a specific country. Returns latest data by default, or data for a specific year if specified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Population(new PopulationRequest { Country = "US", Year = 2023 });
    // TODO: Handle 'response' of type V1PopulationResponse
}
catch (ApiException<PopulationError> ex)
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

<code>[PopulationRequest](src/ApiVerve/Requests/Finance/PopulationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PopulationResponse](src/ApiVerve/Models/V1PopulationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PopulationError](src/ApiVerve/Errors/PopulationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PurchasingpowerResponse&gt; Purchasingpower(PurchasingpowerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate the inflation-adjusted value of money between two periods

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Purchasingpower(new PurchasingpowerRequest
    {
        Amount = 100d,
        From = "1990",
        To = "2024",
    });
    // TODO: Handle 'response' of type V1PurchasingpowerResponse
}
catch (ApiException<PurchasingpowerError> ex)
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

<code>[PurchasingpowerRequest](src/ApiVerve/Requests/Finance/PurchasingpowerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PurchasingpowerResponse](src/ApiVerve/Models/V1PurchasingpowerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PurchasingpowerError](src/ApiVerve/Errors/PurchasingpowerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RoutinglookupResponse&gt; Routinglookup(RoutinglookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup routing number information based on the routing number

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Routinglookup(new RoutinglookupRequest { Routing = "121000358" });
    // TODO: Handle 'response' of type V1RoutinglookupResponse
}
catch (ApiException<RoutinglookupError> ex)
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

<code>[RoutinglookupRequest](src/ApiVerve/Requests/Finance/RoutinglookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RoutinglookupResponse](src/ApiVerve/Models/V1RoutinglookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RoutinglookupError](src/ApiVerve/Errors/RoutinglookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SalestaxResponse&gt; Salestax(SalestaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the sales tax rate of a location based on the zip code

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Salestax(new SalestaxRequest { Zip = "64082" });
    // TODO: Handle 'response' of type V1SalestaxResponse
}
catch (ApiException<SalestaxError> ex)
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

<code>[SalestaxRequest](src/ApiVerve/Requests/Finance/SalestaxRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SalestaxResponse](src/ApiVerve/Models/V1SalestaxResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SalestaxError](src/ApiVerve/Errors/SalestaxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SalestaxcalculatorResponse&gt; Salestaxcalculator(SalestaxcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate sales tax for a purchase amount at a specific US location

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Salestaxcalculator(new SalestaxcalculatorRequest
    {
        Amount = 100d,
        Zip = "90210",
        State = "CA",
    });
    // TODO: Handle 'response' of type V1SalestaxcalculatorResponse
}
catch (ApiException<SalestaxcalculatorError> ex)
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

<code>[SalestaxcalculatorRequest](src/ApiVerve/Requests/Finance/SalestaxcalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SalestaxcalculatorResponse](src/ApiVerve/Models/V1SalestaxcalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SalestaxcalculatorError](src/ApiVerve/Errors/SalestaxcalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SanctionscreeningResponse&gt; Sanctionscreening(SanctionscreeningRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Screen a person or company name against the OFAC Specially Designated Nationals list. Returns scored matches, or an empty result set when the name is clear.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Sanctionscreening(new SanctionscreeningRequest
    {
        Name = "Banco Nacional de Cuba",
        Threshold = 0.85d,
        Limit = 10d,
        Type = "individual",
    });
    // TODO: Handle 'response' of type V1SanctionscreeningResponse
}
catch (ApiException<SanctionscreeningError> ex)
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

<code>[SanctionscreeningRequest](src/ApiVerve/Requests/Finance/SanctionscreeningRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SanctionscreeningResponse](src/ApiVerve/Models/V1SanctionscreeningResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SanctionscreeningError](src/ApiVerve/Errors/SanctionscreeningError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SavingsbondsResponse&gt; Savingsbonds(SavingsbondsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current I-Bond rates and historical rate data

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Savingsbonds(new SavingsbondsRequest { Period = "2024-11" });
    // TODO: Handle 'response' of type V1SavingsbondsResponse
}
catch (ApiException<SavingsbondsError> ex)
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

<code>[SavingsbondsRequest](src/ApiVerve/Requests/Finance/SavingsbondsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SavingsbondsResponse](src/ApiVerve/Models/V1SavingsbondsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SavingsbondsError](src/ApiVerve/Errors/SavingsbondsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SecfilingsResponse&gt; Secfilings(SecfilingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the recent SEC EDGAR filing history for a company by ticker symbol. Optionally filter to a specific form type and limit the number of filings returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Secfilings(new SecfilingsRequest
    {
        Ticker = "AAPL",
        Form = "10-K",
        Limit = 10,
    });
    // TODO: Handle 'response' of type V1SecfilingsResponse
}
catch (ApiException<SecfilingsError> ex)
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

<code>[SecfilingsRequest](src/ApiVerve/Requests/Finance/SecfilingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SecfilingsResponse](src/ApiVerve/Models/V1SecfilingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SecfilingsError](src/ApiVerve/Errors/SecfilingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SilverpriceResponse&gt; Silverprice(SilverpriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of silver. You can optionally specify a currency (defaults to USD).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Silverprice(new SilverpriceRequest { Currency = "USD", Hourly = true });
    // TODO: Handle 'response' of type V1SilverpriceResponse
}
catch (ApiException<SilverpriceError> ex)
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

<code>[SilverpriceRequest](src/ApiVerve/Requests/Finance/SilverpriceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SilverpriceResponse](src/ApiVerve/Models/V1SilverpriceResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SilverpriceError](src/ApiVerve/Errors/SilverpriceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1StockexchangeResponse&gt; Stockexchange(StockexchangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get stock exchange details by its Market Identifier Code (MIC).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Stockexchange(new StockexchangeRequest { Mic = "XNYS" });
    // TODO: Handle 'response' of type V1StockexchangeResponse
}
catch (ApiException<StockexchangeError> ex)
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

<code>[StockexchangeRequest](src/ApiVerve/Requests/Finance/StockexchangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StockexchangeResponse](src/ApiVerve/Models/V1StockexchangeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[StockexchangeError](src/ApiVerve/Errors/StockexchangeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1StockmarketopentimesResponse&gt; Stockmarketopentimes(StockmarketopentimesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the open times of the stock market on the current date of the request

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Stockmarketopentimes(new StockmarketopentimesRequest { Exchange = "NYSE" });
    // TODO: Handle 'response' of type V1StockmarketopentimesResponse
}
catch (ApiException<StockmarketopentimesError> ex)
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

<code>[StockmarketopentimesRequest](src/ApiVerve/Requests/Finance/StockmarketopentimesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StockmarketopentimesResponse](src/ApiVerve/Models/V1StockmarketopentimesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[StockmarketopentimesError](src/ApiVerve/Errors/StockmarketopentimesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SwiftlookupResponse&gt; Swiftlookup(SwiftlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup SWIFT code information based on the SWIFT code

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Swiftlookup(new SwiftlookupRequest { Swift = "CHASUS33ARP" });
    // TODO: Handle 'response' of type V1SwiftlookupResponse
}
catch (ApiException<SwiftlookupError> ex)
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

<code>[SwiftlookupRequest](src/ApiVerve/Requests/Finance/SwiftlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SwiftlookupResponse](src/ApiVerve/Models/V1SwiftlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SwiftlookupError](src/ApiVerve/Errors/SwiftlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TradebalanceResponse&gt; Tradebalance(TradebalanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get trade balance data

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Tradebalance(new TradebalanceRequest { Date = "2023-06" });
    // TODO: Handle 'response' of type V1TradebalanceResponse
}
catch (ApiException<TradebalanceError> ex)
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

<code>[TradebalanceRequest](src/ApiVerve/Requests/Finance/TradebalanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TradebalanceResponse](src/ApiVerve/Models/V1TradebalanceResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TradebalanceError](src/ApiVerve/Errors/TradebalanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TreasuryyieldsResponse&gt; Treasuryyields(TreasuryyieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current or historical Treasury securities interest rates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Treasuryyields(new TreasuryyieldsRequest { Date = "2025-06", Type = "10yr" });
    // TODO: Handle 'response' of type V1TreasuryyieldsResponse
}
catch (ApiException<TreasuryyieldsError> ex)
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

<code>[TreasuryyieldsRequest](src/ApiVerve/Requests/Finance/TreasuryyieldsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TreasuryyieldsResponse](src/ApiVerve/Models/V1TreasuryyieldsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TreasuryyieldsError](src/ApiVerve/Errors/TreasuryyieldsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UnemploymentResponse&gt; Unemployment(UnemploymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current or historical unemployment rate for a specific country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Unemployment(new UnemploymentRequest { Country = "USA", Year = 2023 });
    // TODO: Handle 'response' of type V1UnemploymentResponse
}
catch (ApiException<UnemploymentError> ex)
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

<code>[UnemploymentRequest](src/ApiVerve/Requests/Finance/UnemploymentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnemploymentResponse](src/ApiVerve/Models/V1UnemploymentResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UnemploymentError](src/ApiVerve/Errors/UnemploymentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1VatratesResponse&gt; Vatrates(VatratesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns VAT rates for a country. Optionally specify a date for historical rates or a postcode for regional exceptions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Finance.Vatrates(new VatratesRequest
    {
        Country = "DE",
        Date = "2020-07-01",
        Postcode = "35001",
    });
    // TODO: Handle 'response' of type V1VatratesResponse
}
catch (ApiException<VatratesError> ex)
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

<code>[VatratesRequest](src/ApiVerve/Requests/Finance/VatratesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VatratesResponse](src/ApiVerve/Models/V1VatratesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[VatratesError](src/ApiVerve/Errors/VatratesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Food

> Source: [Food](src/ApiVerve/Api/Food.cs)

<details>
<summary><code>Task&lt;V1CocktailResponse&gt; Cocktail(CocktailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the recipe for a cocktail based on the name or ingredient

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Food.Cocktail(new CocktailRequest { Name = "martini" });
    // TODO: Handle 'response' of type V1CocktailResponse
}
catch (ApiException<CocktailError> ex)
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

<code>[CocktailRequest](src/ApiVerve/Requests/Food/CocktailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CocktailResponse](src/ApiVerve/Models/V1CocktailResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CocktailError](src/ApiVerve/Errors/CocktailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1NutritionResponse&gt; Nutrition(NutritionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the nutrition facts for a generic whole food by name. Optionally scale the panel to a serving weight in grams.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Food.Nutrition(new NutritionRequest { Food = "banana", Grams = 118d });
    // TODO: Handle 'response' of type V1NutritionResponse
}
catch (ApiException<NutritionError> ex)
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

<code>[NutritionRequest](src/ApiVerve/Requests/Food/NutritionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NutritionResponse](src/ApiVerve/Models/V1NutritionResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NutritionError](src/ApiVerve/Errors/NutritionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RecipeResponse&gt; Recipe(RecipeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recipe Generator is an AI-powered tool for generating detailed recipes. It returns complete recipes with ingredients, instructions, prep time, cook time, and servings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Food.Recipe(new RecipeRequest { Name = "chicken fajitas" });
    // TODO: Handle 'response' of type V1RecipeResponse
}
catch (ApiException<RecipeError> ex)
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

<code>[RecipeRequest](src/ApiVerve/Requests/Food/RecipeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecipeResponse](src/ApiVerve/Models/V1RecipeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RecipeError](src/ApiVerve/Errors/RecipeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Games

> Source: [Games](src/ApiVerve/Api/Games.cs)

<details>
<summary><code>Task&lt;V1AcrosticResponse&gt; Acrostic(AcrosticRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an acrostic puzzle

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Acrostic(new AcrosticRequest
    {
        Word = "HAPPY",
        Theme = "positive",
        Image = true,
    });
    // TODO: Handle 'response' of type V1AcrosticResponse
}
catch (ApiException<AcrosticError> ex)
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

<code>[AcrosticRequest](src/ApiVerve/Requests/Games/AcrosticRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AcrosticResponse](src/ApiVerve/Models/V1AcrosticResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AcrosticError](src/ApiVerve/Errors/AcrosticError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1AnagrampuzzleResponse&gt; Anagrampuzzle(AnagrampuzzleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create anagram puzzles

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Anagrampuzzle(new AnagrampuzzleRequest
    {
        Word = "listen",
        Count = 1,
        Difficulty = "medium",
        Image = true,
    });
    // TODO: Handle 'response' of type V1AnagrampuzzleResponse
}
catch (ApiException<AnagrampuzzleError> ex)
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

<code>[AnagrampuzzleRequest](src/ApiVerve/Requests/Games/AnagrampuzzleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AnagrampuzzleResponse](src/ApiVerve/Models/V1AnagrampuzzleResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AnagrampuzzleError](src/ApiVerve/Errors/AnagrampuzzleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CarddeckshufflerResponse&gt; Carddeckshuffler(CarddeckshufflerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shuffle one or more standard card decks with optional jokers

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Carddeckshuffler(new CarddeckshufflerRequest
    {
        Decks = 1,
        Jokers = false,
        Method = "fisher-yates",
    });
    // TODO: Handle 'response' of type V1CarddeckshufflerResponse
}
catch (ApiException<CarddeckshufflerError> ex)
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

<code>[CarddeckshufflerRequest](src/ApiVerve/Requests/Games/CarddeckshufflerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CarddeckshufflerResponse](src/ApiVerve/Models/V1CarddeckshufflerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CarddeckshufflerError](src/ApiVerve/Errors/CarddeckshufflerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CoinflipperResponse&gt; Coinflipper(CoinflipperRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Flip one or more coins and get detailed results

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Coinflipper(new CoinflipperRequest { Flips = 10 });
    // TODO: Handle 'response' of type V1CoinflipperResponse
}
catch (ApiException<CoinflipperError> ex)
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

<code>[CoinflipperRequest](src/ApiVerve/Requests/Games/CoinflipperRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CoinflipperResponse](src/ApiVerve/Models/V1CoinflipperResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CoinflipperError](src/ApiVerve/Errors/CoinflipperError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CrosswordResponse&gt; Crossword(CrosswordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a crossword puzzle

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Crossword(new CrosswordRequest
    {
        Size = "medium",
        Theme = "animals",
        Difficulty = "medium",
        Image = true,
        SolutionImage = true,
    });
    // TODO: Handle 'response' of type V1CrosswordResponse
}
catch (ApiException<CrosswordError> ex)
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

<code>[CrosswordRequest](src/ApiVerve/Requests/Games/CrosswordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CrosswordResponse](src/ApiVerve/Models/V1CrosswordResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CrosswordError](src/ApiVerve/Errors/CrosswordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CryptogramResponse&gt; Cryptogram(CryptogramRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a cryptogram puzzle

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Cryptogram(new CryptogramRequest
    {
        Text = "The quick brown fox",
        Random = true,
        Image = true,
        SolutionImage = true,
    });
    // TODO: Handle 'response' of type V1CryptogramResponse
}
catch (ApiException<CryptogramError> ex)
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

<code>[CryptogramRequest](src/ApiVerve/Requests/Games/CryptogramRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CryptogramResponse](src/ApiVerve/Models/V1CryptogramResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CryptogramError](src/ApiVerve/Errors/CryptogramError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DicerollerResponse&gt; Diceroller(DicerollerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Roll dice using XdY notation with optional modifier

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Diceroller(new DicerollerRequest { Dice = "3d6", Modifier = 5 });
    // TODO: Handle 'response' of type V1DicerollerResponse
}
catch (ApiException<DicerollerError> ex)
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

<code>[DicerollerRequest](src/ApiVerve/Requests/Games/DicerollerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DicerollerResponse](src/ApiVerve/Models/V1DicerollerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DicerollerError](src/ApiVerve/Errors/DicerollerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1FillintheblanksResponse&gt; Fillintheblanks(FillintheblanksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create fill in the blank puzzles

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Fillintheblanks(new FillintheblanksRequest
    {
        Category = "idioms",
        Count = 5,
        Difficulty = "medium",
        Image = true,
    });
    // TODO: Handle 'response' of type V1FillintheblanksResponse
}
catch (ApiException<FillintheblanksError> ex)
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

<code>[FillintheblanksRequest](src/ApiVerve/Requests/Games/FillintheblanksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FillintheblanksResponse](src/ApiVerve/Models/V1FillintheblanksResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[FillintheblanksError](src/ApiVerve/Errors/FillintheblanksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1FortunecookieResponse&gt; Fortunecookie(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate fortune cookie messages with lucky numbers

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Fortunecookie();
    // TODO: Handle 'response' of type V1FortunecookieResponse
}
catch (ApiException<FortunecookieError> ex)
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

**OnSuccess**: <code>[V1FortunecookieResponse](src/ApiVerve/Models/V1FortunecookieResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[FortunecookieError](src/ApiVerve/Errors/FortunecookieError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GamecharacterResponse&gt; Gamecharacter(GamecharacterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a random RPG character

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Gamecharacter(new GamecharacterRequest { Race = "elf", Class = "mage" });
    // TODO: Handle 'response' of type V1GamecharacterResponse
}
catch (ApiException<GamecharacterError> ex)
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

<code>[GamecharacterRequest](src/ApiVerve/Requests/Games/GamecharacterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GamecharacterResponse](src/ApiVerve/Models/V1GamecharacterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GamecharacterError](src/ApiVerve/Errors/GamecharacterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HangmanwordResponse&gt; Hangmanword(HangmanwordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get random words for hangman

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Hangmanword(new HangmanwordRequest
    {
        Category = "animals",
        Difficulty = "medium",
        Count = 1,
        Image = true,
    });
    // TODO: Handle 'response' of type V1HangmanwordResponse
}
catch (ApiException<HangmanwordError> ex)
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

<code>[HangmanwordRequest](src/ApiVerve/Requests/Games/HangmanwordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HangmanwordResponse](src/ApiVerve/Models/V1HangmanwordResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HangmanwordError](src/ApiVerve/Errors/HangmanwordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LotterypickerResponse&gt; Lotterypicker(LotterypickerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random lottery numbers for various games

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Lotterypicker(new LotterypickerRequest
    {
        Game = "powerball",
        Numbers = 6,
        Max = 49,
        Bonus = 1,
        Tickets = 3,
        Bonusmax = 26,
    });
    // TODO: Handle 'response' of type V1LotterypickerResponse
}
catch (ApiException<LotterypickerError> ex)
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

<code>[LotterypickerRequest](src/ApiVerve/Requests/Games/LotterypickerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LotterypickerResponse](src/ApiVerve/Models/V1LotterypickerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LotterypickerError](src/ApiVerve/Errors/LotterypickerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MadlibsResponse&gt; Madlibs(MadlibsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get mad libs story templates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Madlibs(new MadlibsRequest { Category = "funny", Count = 1 });
    // TODO: Handle 'response' of type V1MadlibsResponse
}
catch (ApiException<MadlibsError> ex)
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

<code>[MadlibsRequest](src/ApiVerve/Requests/Games/MadlibsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MadlibsResponse](src/ApiVerve/Models/V1MadlibsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MadlibsError](src/ApiVerve/Errors/MadlibsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MazeResponse&gt; Maze(MazeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a maze puzzle

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Maze(new MazeRequest
    {
        Width = 15,
        Height = 15,
        Difficulty = "medium",
        Image = true,
        SolutionImage = true,
    });
    // TODO: Handle 'response' of type V1MazeResponse
}
catch (ApiException<MazeError> ex)
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

<code>[MazeRequest](src/ApiVerve/Requests/Games/MazeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MazeResponse](src/ApiVerve/Models/V1MazeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MazeError](src/ApiVerve/Errors/MazeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RockpaperscissorsResponse&gt; Rockpaperscissors(RockpaperscissorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Play rounds of Rock Paper Scissors with outcome analysis

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Rockpaperscissors(new RockpaperscissorsRequest { Choice = "rock", Rounds = 5 });
    // TODO: Handle 'response' of type V1RockpaperscissorsResponse
}
catch (ApiException<RockpaperscissorsError> ex)
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

<code>[RockpaperscissorsRequest](src/ApiVerve/Requests/Games/RockpaperscissorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RockpaperscissorsResponse](src/ApiVerve/Models/V1RockpaperscissorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RockpaperscissorsError](src/ApiVerve/Errors/RockpaperscissorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SlotmachineResponse&gt; Slotmachine(SlotmachineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Simulate slot machine spins with configurable reels and bet amounts

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Slotmachine(new SlotmachineRequest { Spins = 5, Reels = 3, Bet = 1d });
    // TODO: Handle 'response' of type V1SlotmachineResponse
}
catch (ApiException<SlotmachineError> ex)
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

<code>[SlotmachineRequest](src/ApiVerve/Requests/Games/SlotmachineRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SlotmachineResponse](src/ApiVerve/Models/V1SlotmachineResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SlotmachineError](src/ApiVerve/Errors/SlotmachineError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SpellingbeeResponse&gt; Spellingbee(SpellingbeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a spelling bee puzzle

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Spellingbee(new SpellingbeeRequest { Difficulty = "medium", Image = true });
    // TODO: Handle 'response' of type V1SpellingbeeResponse
}
catch (ApiException<SpellingbeeError> ex)
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

<code>[SpellingbeeRequest](src/ApiVerve/Requests/Games/SpellingbeeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SpellingbeeResponse](src/ApiVerve/Models/V1SpellingbeeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SpellingbeeError](src/ApiVerve/Errors/SpellingbeeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SuperheronameResponse&gt; Superheroname(SuperheronameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a random superhero name

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Superheroname(new SuperheronameRequest { Style = "dark" });
    // TODO: Handle 'response' of type V1SuperheronameResponse
}
catch (ApiException<SuperheronameError> ex)
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

<code>[SuperheronameRequest](src/ApiVerve/Requests/Games/SuperheronameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SuperheronameResponse](src/ApiVerve/Models/V1SuperheronameResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SuperheronameError](src/ApiVerve/Errors/SuperheronameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WordladderResponse&gt; Wordladder(WordladderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create word ladder puzzles

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Wordladder(new WordladderRequest
    {
        Start = "cold",
        End = "warm",
        Difficulty = "medium",
        Count = 1,
        Image = true,
    });
    // TODO: Handle 'response' of type V1WordladderResponse
}
catch (ApiException<WordladderError> ex)
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

<code>[WordladderRequest](src/ApiVerve/Requests/Games/WordladderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordladderResponse](src/ApiVerve/Models/V1WordladderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WordladderError](src/ApiVerve/Errors/WordladderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WordscrambleResponse&gt; Wordscramble(WordscrambleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create scrambled word puzzles

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Wordscramble(new WordscrambleRequest
    {
        Difficulty = "medium",
        Count = 5,
        Image = true,
    });
    // TODO: Handle 'response' of type V1WordscrambleResponse
}
catch (ApiException<WordscrambleError> ex)
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

<code>[WordscrambleRequest](src/ApiVerve/Requests/Games/WordscrambleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordscrambleResponse](src/ApiVerve/Models/V1WordscrambleResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WordscrambleError](src/ApiVerve/Errors/WordscrambleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WordsearchResponse&gt; Wordsearch(WordsearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a word search puzzle with custom words

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Games.Wordsearch(new WordsearchRequest
    {
        Body = new V1WordsearchRequest { Words = "some example string" },
    });
    // TODO: Handle 'response' of type V1WordsearchResponse
}
catch (ApiException<WordsearchError> ex)
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

<code>[WordsearchRequest](src/ApiVerve/Requests/Games/WordsearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordsearchResponse](src/ApiVerve/Models/V1WordsearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WordsearchError](src/ApiVerve/Errors/WordsearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Geography

> Source: [Geography](src/ApiVerve/Api/Geography.cs)

<details>
<summary><code>Task&lt;V1CitieslookupResponse&gt; Citieslookup(CitieslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup city data based on the city name

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Citieslookup(new CitieslookupRequest { City = "San Francisco", Limit = 5 });
    // TODO: Handle 'response' of type V1CitieslookupResponse
}
catch (ApiException<CitieslookupError> ex)
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

<code>[CitieslookupRequest](src/ApiVerve/Requests/Geography/CitieslookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CitieslookupResponse](src/ApiVerve/Models/V1CitieslookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CitieslookupError](src/ApiVerve/Errors/CitieslookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CoordinatesareseaResponse&gt; Coordinatesaresea(CoordinatesareseaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if the coordinates are in the sea

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Coordinatesaresea(new CoordinatesareseaRequest
    {
        Lat = 37.7749d,
        Lon = -122.4194d,
    });
    // TODO: Handle 'response' of type V1CoordinatesareseaResponse
}
catch (ApiException<CoordinatesareseaError> ex)
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

<code>[CoordinatesareseaRequest](src/ApiVerve/Requests/Geography/CoordinatesareseaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CoordinatesareseaResponse](src/ApiVerve/Models/V1CoordinatesareseaResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CoordinatesareseaError](src/ApiVerve/Errors/CoordinatesareseaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CountrybordersResponse&gt; Countryborders(CountrybordersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Borders is a simple tool for getting the list of neighboring countries for a specific country. It returns the list of neighboring countries for the specified country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Countryborders(new CountrybordersRequest { Country = "CA" });
    // TODO: Handle 'response' of type V1CountrybordersResponse
}
catch (ApiException<CountrybordersError> ex)
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

<code>[CountrybordersRequest](src/ApiVerve/Requests/Geography/CountrybordersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountrybordersResponse](src/ApiVerve/Models/V1CountrybordersResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CountrybordersError](src/ApiVerve/Errors/CountrybordersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CountryboundariesResponse&gt; Countryboundaries(CountryboundariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Boundaries is a simple tool for getting the shape of a specific country's border. It returns the shape of the specified country's border.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Countryboundaries(new CountryboundariesRequest { Country = "CA" });
    // TODO: Handle 'response' of type V1CountryboundariesResponse
}
catch (ApiException<CountryboundariesError> ex)
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

<code>[CountryboundariesRequest](src/ApiVerve/Requests/Geography/CountryboundariesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountryboundariesResponse](src/ApiVerve/Models/V1CountryboundariesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CountryboundariesError](src/ApiVerve/Errors/CountryboundariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CountryflagsResponse&gt; Countryflags(CountryflagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Flag is a simple tool for getting the country's national flags. It returns the country's national flags.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Countryflags(new CountryflagsRequest
    {
        Country = "ZW",
        Format = "png",
        Shape = "circle",
    });
    // TODO: Handle 'response' of type V1CountryflagsResponse
}
catch (ApiException<CountryflagsError> ex)
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

<code>[CountryflagsRequest](src/ApiVerve/Requests/Geography/CountryflagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountryflagsResponse](src/ApiVerve/Models/V1CountryflagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CountryflagsError](src/ApiVerve/Errors/CountryflagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CountrylanguagesResponse&gt; Countrylanguages(CountrylanguagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Languages is a simple tool for getting the list of official and commonly spoken languages in a specific country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Countrylanguages(new CountrylanguagesRequest { Country = "ZW" });
    // TODO: Handle 'response' of type V1CountrylanguagesResponse
}
catch (ApiException<CountrylanguagesError> ex)
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

<code>[CountrylanguagesRequest](src/ApiVerve/Requests/Geography/CountrylanguagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountrylanguagesResponse](src/ApiVerve/Models/V1CountrylanguagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CountrylanguagesError](src/ApiVerve/Errors/CountrylanguagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CountrylookupResponse&gt; Countrylookup(CountrylookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup country data based on the country ISO Code

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Countrylookup(new CountrylookupRequest
    {
        Country = "USA",
        Majorcities = true,
    });
    // TODO: Handle 'response' of type V1CountrylookupResponse
}
catch (ApiException<CountrylookupError> ex)
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

<code>[CountrylookupRequest](src/ApiVerve/Requests/Geography/CountrylookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountrylookupResponse](src/ApiVerve/Models/V1CountrylookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CountrylookupError](src/ApiVerve/Errors/CountrylookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CountydataResponse&gt; Countydata(CountydataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data about a US county

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Countydata(new CountydataRequest { State = "MO", County = "Jackson" });
    // TODO: Handle 'response' of type V1CountydataResponse
}
catch (ApiException<CountydataError> ex)
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

<code>[CountydataRequest](src/ApiVerve/Requests/Geography/CountydataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountydataResponse](src/ApiVerve/Models/V1CountydataResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CountydataError](src/ApiVerve/Errors/CountydataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DistancecalculatorResponse&gt; Distancecalculator(DistancecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate the distance between two coordinates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Distancecalculator(new DistancecalculatorRequest
    {
        Lat1 = 36.7783d,
        Lon1 = -119.4179d,
        Lat2 = 34.0522d,
        Lon2 = -118.2437d,
    });
    // TODO: Handle 'response' of type V1DistancecalculatorResponse
}
catch (ApiException<DistancecalculatorError> ex)
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

<code>[DistancecalculatorRequest](src/ApiVerve/Requests/Geography/DistancecalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DistancecalculatorResponse](src/ApiVerve/Models/V1DistancecalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DistancecalculatorError](src/ApiVerve/Errors/DistancecalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HardinesszoneResponse&gt; Hardinesszone(HardinesszoneRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Hardiness Zone is a simple tool for getting the USDA Plant Hardiness Zone for a given zip code

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Hardinesszone(new HardinesszoneRequest { Zip = "97201" });
    // TODO: Handle 'response' of type V1HardinesszoneResponse
}
catch (ApiException<HardinesszoneError> ex)
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

<code>[HardinesszoneRequest](src/ApiVerve/Requests/Geography/HardinesszoneRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HardinesszoneResponse](src/ApiVerve/Models/V1HardinesszoneResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HardinesszoneError](src/ApiVerve/Errors/HardinesszoneError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ReversegeocodeResponse&gt; Reversegeocode(ReversegeocodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the location of a set of coordinates, Only supports USA and Canada Coordinates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Reversegeocode(new ReversegeocodeRequest
    {
        Lat = 40.714224d,
        Lon = -73.961452d,
    });
    // TODO: Handle 'response' of type V1ReversegeocodeResponse
}
catch (ApiException<ReversegeocodeError> ex)
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

<code>[ReversegeocodeRequest](src/ApiVerve/Requests/Geography/ReversegeocodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReversegeocodeResponse](src/ApiVerve/Models/V1ReversegeocodeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ReversegeocodeError](src/ApiVerve/Errors/ReversegeocodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1StateboundariesResponse&gt; Stateboundaries(StateboundariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

State Boundaries is a simple tool for getting the boundaries of a specific state's border. It returns the shape of the specified state's border.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Stateboundaries(new StateboundariesRequest { State = "CA" });
    // TODO: Handle 'response' of type V1StateboundariesResponse
}
catch (ApiException<StateboundariesError> ex)
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

<code>[StateboundariesRequest](src/ApiVerve/Requests/Geography/StateboundariesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StateboundariesResponse](src/ApiVerve/Models/V1StateboundariesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[StateboundariesError](src/ApiVerve/Errors/StateboundariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ZipcodesResponse&gt; Zipcodes(ZipcodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the zip code information

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Geography.Zipcodes(new ZipcodesRequest { Zip = "64082" });
    // TODO: Handle 'response' of type V1ZipcodesResponse
}
catch (ApiException<ZipcodesError> ex)
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

<code>[ZipcodesRequest](src/ApiVerve/Requests/Geography/ZipcodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ZipcodesResponse](src/ApiVerve/Models/V1ZipcodesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ZipcodesError](src/ApiVerve/Errors/ZipcodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HealthWellness

> Source: [HealthWellness](src/ApiVerve/Api/HealthWellness.cs)

<details>
<summary><code>Task&lt;V1BmicalculatorResponse&gt; Bmicalculator(BmicalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate BMI, ideal weight, BMR, TDEE, calorie targets and macros

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HealthWellness.Bmicalculator(new BmicalculatorRequest
    {
        Weight = 180d,
        Height = 70d,
        Unit = "imperial",
        Age = 30d,
        Gender = "male",
        ActivityLevel = "moderate",
    });
    // TODO: Handle 'response' of type V1BmicalculatorResponse
}
catch (ApiException<BmicalculatorError> ex)
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

<code>[BmicalculatorRequest](src/ApiVerve/Requests/HealthWellness/BmicalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BmicalculatorResponse](src/ApiVerve/Models/V1BmicalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BmicalculatorError](src/ApiVerve/Errors/BmicalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ExercisesResponse&gt; Exercises(ExercisesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exercises is a simple tool for getting exercise information. It returns information on various exercises.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HealthWellness.Exercises(new ExercisesRequest
    {
        Muscle = "chest",
        Name = "barbell",
        Equipment = "barbell",
    });
    // TODO: Handle 'response' of type V1ExercisesResponse
}
catch (ApiException<ExercisesError> ex)
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

<code>[ExercisesRequest](src/ApiVerve/Requests/HealthWellness/ExercisesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ExercisesResponse](src/ApiVerve/Models/V1ExercisesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ExercisesError](src/ApiVerve/Errors/ExercisesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Images

> Source: [Images](src/ApiVerve/Api/Images.cs)

<details>
<summary><code>Task&lt;V1FacedetectResponse&gt; Facedetect(FacedetectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect all faces in an uploaded image and return their bounding box coordinates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Images.Facedetect(new FacedetectRequest());
    // TODO: Handle 'response' of type V1FacedetectResponse
}
catch (ApiException<FacedetectError> ex)
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

<code>[FacedetectRequest](src/ApiVerve/Requests/Images/FacedetectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FacedetectResponse](src/ApiVerve/Models/V1FacedetectResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[FacedetectError](src/ApiVerve/Errors/FacedetectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HeicconverterResponse&gt; Heicconverter(HeicconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a HEIC/HEIF image to another format. Upload an image file to convert.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Images.Heicconverter(new HeicconverterRequest
    {
        OutputFormat = "png",
        Quality = 90,
        MaxWidth = 1920,
        MaxHeight = 1080,
        Image = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type V1HeicconverterResponse
}
catch (ApiException<HeicconverterError> ex)
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

<code>[HeicconverterRequest](src/ApiVerve/Requests/Images/HeicconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HeicconverterResponse](src/ApiVerve/Models/V1HeicconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HeicconverterError](src/ApiVerve/Errors/HeicconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ImageconverterResponse&gt; Imageconverter(ImageconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert an image from one format to another. Upload an image file to convert.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Images.Imageconverter(new ImageconverterRequest
    {
        OutputFormat = "png",
        Quality = 90,
        MaxWidth = 1920,
        MaxHeight = 1080,
        Image = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type V1ImageconverterResponse
}
catch (ApiException<ImageconverterError> ex)
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

<code>[ImageconverterRequest](src/ApiVerve/Requests/Images/ImageconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ImageconverterResponse](src/ApiVerve/Models/V1ImageconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ImageconverterError](src/ApiVerve/Errors/ImageconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1NsfwimagedetectorResponse&gt; Nsfwimagedetector(NsfwimagedetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Images.Nsfwimagedetector(new NsfwimagedetectorRequest { Image = Array.Empty<byte>() });
    // TODO: Handle 'response' of type V1NsfwimagedetectorResponse
}
catch (ApiException<NsfwimagedetectorError> ex)
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

<code>[NsfwimagedetectorRequest](src/ApiVerve/Requests/Images/NsfwimagedetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NsfwimagedetectorResponse](src/ApiVerve/Models/V1NsfwimagedetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NsfwimagedetectorError](src/ApiVerve/Errors/NsfwimagedetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1QrcodereaderResponse&gt; Qrcodereader(QrcodereaderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

QR Code Reader is a powerful tool that extracts text and data from QR codes in images. Simply provide an image URL or upload an image containing a QR code to decode its contents.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Images.Qrcodereader(new QrcodereaderRequest { Image = Array.Empty<byte>() });
    // TODO: Handle 'response' of type V1QrcodereaderResponse
}
catch (ApiException<QrcodereaderError> ex)
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

<code>[QrcodereaderRequest](src/ApiVerve/Requests/Images/QrcodereaderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1QrcodereaderResponse](src/ApiVerve/Models/V1QrcodereaderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[QrcodereaderError](src/ApiVerve/Errors/QrcodereaderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SvgconverterResponse&gt; Svgconverter(SvgconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert an SVG vector image to a raster format. Upload an SVG file to convert.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Images.Svgconverter(new SvgconverterRequest
    {
        OutputFormat = "png",
        Quality = 90,
        MaxWidth = 1920,
        MaxHeight = 1080,
        Image = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type V1SvgconverterResponse
}
catch (ApiException<SvgconverterError> ex)
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

<code>[SvgconverterRequest](src/ApiVerve/Requests/Images/SvgconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SvgconverterResponse](src/ApiVerve/Models/V1SvgconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SvgconverterError](src/ApiVerve/Errors/SvgconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebpconverterResponse&gt; Webpconverter(WebpconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a WebP image to another format, or convert other formats to WebP. Upload an image file to convert.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Images.Webpconverter(new WebpconverterRequest
    {
        OutputFormat = "png",
        Quality = 90,
        MaxWidth = 1920,
        MaxHeight = 1080,
        Image = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type V1WebpconverterResponse
}
catch (ApiException<WebpconverterError> ex)
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

<code>[WebpconverterRequest](src/ApiVerve/Requests/Images/WebpconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebpconverterResponse](src/ApiVerve/Models/V1WebpconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WebpconverterError](src/ApiVerve/Errors/WebpconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Lifestyle

> Source: [Lifestyle](src/ApiVerve/Api/Lifestyle.cs)

<details>
<summary><code>Task&lt;V1DuedatecalculatorResponse&gt; Duedatecalculator(DuedatecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate pregnancy due date from first day of last menstrual period

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Lifestyle.Duedatecalculator(new DuedatecalculatorRequest { LastPeriod = "2025-06-01" });
    // TODO: Handle 'response' of type V1DuedatecalculatorResponse
}
catch (ApiException<DuedatecalculatorError> ex)
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

<code>[DuedatecalculatorRequest](src/ApiVerve/Requests/Lifestyle/DuedatecalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DuedatecalculatorResponse](src/ApiVerve/Models/V1DuedatecalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DuedatecalculatorError](src/ApiVerve/Errors/DuedatecalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MenstrualcycleResponse&gt; Menstrualcycle(MenstrualcycleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate future menstrual cycles and phases

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Lifestyle.Menstrualcycle(new MenstrualcycleRequest
    {
        LastPeriod = "2024-01-01",
        CycleLength = 28,
        PeriodLength = 5,
        Cycles = 3,
    });
    // TODO: Handle 'response' of type V1MenstrualcycleResponse
}
catch (ApiException<MenstrualcycleError> ex)
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

<code>[MenstrualcycleRequest](src/ApiVerve/Requests/Lifestyle/MenstrualcycleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MenstrualcycleResponse](src/ApiVerve/Models/V1MenstrualcycleResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MenstrualcycleError](src/ApiVerve/Errors/MenstrualcycleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1OvulationcalculatorResponse&gt; Ovulationcalculator(OvulationcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate ovulation date and fertile window

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Lifestyle.Ovulationcalculator(new OvulationcalculatorRequest
    {
        LastPeriod = "2024-01-01",
        CycleLength = 28,
    });
    // TODO: Handle 'response' of type V1OvulationcalculatorResponse
}
catch (ApiException<OvulationcalculatorError> ex)
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

<code>[OvulationcalculatorRequest](src/ApiVerve/Requests/Lifestyle/OvulationcalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1OvulationcalculatorResponse](src/ApiVerve/Models/V1OvulationcalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[OvulationcalculatorError](src/ApiVerve/Errors/OvulationcalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MathCalculations

> Source: [MathCalculations](src/ApiVerve/Api/MathCalculations.cs)

<details>
<summary><code>Task&lt;V1ColorsimilarityResponse&gt; Colorsimilarity(ColorsimilarityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate similarity between two hex colors

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MathCalculations.Colorsimilarity(new ColorsimilarityRequest
    {
        Color1 = "FF5733",
        Color2 = "FF6B47",
    });
    // TODO: Handle 'response' of type V1ColorsimilarityResponse
}
catch (ApiException<ColorsimilarityError> ex)
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

<code>[ColorsimilarityRequest](src/ApiVerve/Requests/MathCalculations/ColorsimilarityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColorsimilarityResponse](src/ApiVerve/Models/V1ColorsimilarityResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ColorsimilarityError](src/ApiVerve/Errors/ColorsimilarityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DaylightdurationResponse&gt; Daylightduration(DaylightdurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate sunrise, sunset, and daylight hours for a location

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MathCalculations.Daylightduration(new DaylightdurationRequest
    {
        Latitude = 40.7128d,
        Longitude = -74.006d,
        Date = "2024-06-21",
    });
    // TODO: Handle 'response' of type V1DaylightdurationResponse
}
catch (ApiException<DaylightdurationError> ex)
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

<code>[DaylightdurationRequest](src/ApiVerve/Requests/MathCalculations/DaylightdurationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DaylightdurationResponse](src/ApiVerve/Models/V1DaylightdurationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DaylightdurationError](src/ApiVerve/Errors/DaylightdurationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1FibonaccigeneratorResponse&gt; Fibonaccigenerator(FibonaccigeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a specific number of Fibonacci numbers

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MathCalculations.Fibonaccigenerator(new FibonaccigeneratorRequest
    {
        Count = 10,
        Startfrom = 0,
    });
    // TODO: Handle 'response' of type V1FibonaccigeneratorResponse
}
catch (ApiException<FibonaccigeneratorError> ex)
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

<code>[FibonaccigeneratorRequest](src/ApiVerve/Requests/MathCalculations/FibonaccigeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FibonaccigeneratorResponse](src/ApiVerve/Models/V1FibonaccigeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[FibonaccigeneratorError](src/ApiVerve/Errors/FibonaccigeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PermutationcombinationResponse&gt; Permutationcombination(PermutationcombinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate P(n,r) and C(n,r) values

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MathCalculations.Permutationcombination(new PermutationcombinationRequest
    {
        N = 10,
        R = 3,
    });
    // TODO: Handle 'response' of type V1PermutationcombinationResponse
}
catch (ApiException<PermutationcombinationError> ex)
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

<code>[PermutationcombinationRequest](src/ApiVerve/Requests/MathCalculations/PermutationcombinationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PermutationcombinationResponse](src/ApiVerve/Models/V1PermutationcombinationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PermutationcombinationError](src/ApiVerve/Errors/PermutationcombinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RomannumeralmathResponse&gt; Romannumeralmath(RomannumeralmathRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform arithmetic operations with Roman numerals

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MathCalculations.Romannumeralmath(new RomannumeralmathRequest
    {
        Roman1 = "XIV",
        Roman2 = "VI",
        Operation = "add",
    });
    // TODO: Handle 'response' of type V1RomannumeralmathResponse
}
catch (ApiException<RomannumeralmathError> ex)
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

<code>[RomannumeralmathRequest](src/ApiVerve/Requests/MathCalculations/RomannumeralmathRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RomannumeralmathResponse](src/ApiVerve/Models/V1RomannumeralmathResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RomannumeralmathError](src/ApiVerve/Errors/RomannumeralmathError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TipcalculatorResponse&gt; Tipcalculator(TipcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate tip amount and split bill among people

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MathCalculations.Tipcalculator(new TipcalculatorRequest
    {
        Amount = 100d,
        Percentage = 18d,
        People = 4,
        Currency = "USD",
    });
    // TODO: Handle 'response' of type V1TipcalculatorResponse
}
catch (ApiException<TipcalculatorError> ex)
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

<code>[TipcalculatorRequest](src/ApiVerve/Requests/MathCalculations/TipcalculatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TipcalculatorResponse](src/ApiVerve/Models/V1TipcalculatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TipcalculatorError](src/ApiVerve/Errors/TipcalculatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TruthtableResponse&gt; Truthtable(TruthtableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a truth table for a boolean expression

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MathCalculations.Truthtable(new TruthtableRequest { Expression = "A AND B OR C" });
    // TODO: Handle 'response' of type V1TruthtableResponse
}
catch (ApiException<TruthtableError> ex)
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

<code>[TruthtableRequest](src/ApiVerve/Requests/MathCalculations/TruthtableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TruthtableResponse](src/ApiVerve/Models/V1TruthtableResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TruthtableError](src/ApiVerve/Errors/TruthtableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UtmconverterResponse&gt; Utmconverter(UtmconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert latitude/longitude coordinates to UTM format

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MathCalculations.Utmconverter(new UtmconverterRequest
    {
        Latitude = 40.7128d,
        Longitude = -74.006d,
        Direction = "to_utm",
    });
    // TODO: Handle 'response' of type V1UtmconverterResponse
}
catch (ApiException<UtmconverterError> ex)
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

<code>[UtmconverterRequest](src/ApiVerve/Requests/MathCalculations/UtmconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UtmconverterResponse](src/ApiVerve/Models/V1UtmconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UtmconverterError](src/ApiVerve/Errors/UtmconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Networking

> Source: [Networking](src/ApiVerve/Api/Networking.cs)

<details>
<summary><code>Task&lt;V1BluetoothlookupResponse&gt; Bluetoothlookup(BluetoothlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup Bluetooth company/manufacturer by company ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Bluetoothlookup(new BluetoothlookupRequest { Companyid = "76" });
    // TODO: Handle 'response' of type V1BluetoothlookupResponse
}
catch (ApiException<BluetoothlookupError> ex)
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

<code>[BluetoothlookupRequest](src/ApiVerve/Requests/Networking/BluetoothlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BluetoothlookupResponse](src/ApiVerve/Models/V1BluetoothlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BluetoothlookupError](src/ApiVerve/Errors/BluetoothlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1BotdetectorResponse&gt; Botdetector(BotdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes a user agent string to determine if it belongs to a known bot or crawler, and returns detailed information about the bot type and category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Botdetector(new BotdetectorRequest
    {
        Ua = "Googlebot/2.1 (+http://www.google.com/bot.html)",
        Ip = "66.249.66.1",
    });
    // TODO: Handle 'response' of type V1BotdetectorResponse
}
catch (ApiException<BotdetectorError> ex)
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

<code>[BotdetectorRequest](src/ApiVerve/Requests/Networking/BotdetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BotdetectorResponse](src/ApiVerve/Models/V1BotdetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BotdetectorError](src/ApiVerve/Errors/BotdetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ContentfilterResponse&gt; Contentfilter(ContentfilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether a URL or domain appears in the content filter blocklist covering fake news, gambling, adult content, and social media.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Contentfilter(new ContentfilterRequest
    {
        Body = new V1ContentfilterRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1ContentfilterResponse
}
catch (ApiException<ContentfilterError> ex)
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

<code>[ContentfilterRequest](src/ApiVerve/Requests/Networking/ContentfilterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ContentfilterResponse](src/ApiVerve/Models/V1ContentfilterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ContentfilterError](src/ApiVerve/Errors/ContentfilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1IpblacklistlookupResponse&gt; Ipblacklistlookup(IpblacklistlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether an IP address appears on inbound (attacker) or outbound (malicious destination) blocklists and returns threat level assessment with geolocation details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Ipblacklistlookup(new IpblacklistlookupRequest { Ip = "185.220.101.1" });
    // TODO: Handle 'response' of type V1IpblacklistlookupResponse
}
catch (ApiException<IpblacklistlookupError> ex)
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

<code>[IpblacklistlookupRequest](src/ApiVerve/Requests/Networking/IpblacklistlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IpblacklistlookupResponse](src/ApiVerve/Models/V1IpblacklistlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[IpblacklistlookupError](src/ApiVerve/Errors/IpblacklistlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1IplookupResponse&gt; Iplookup(IplookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the details and location of an IP address

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Iplookup(new IplookupRequest { Ip = "173.172.81.20" });
    // TODO: Handle 'response' of type V1IplookupResponse
}
catch (ApiException<IplookupError> ex)
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

<code>[IplookupRequest](src/ApiVerve/Requests/Networking/IplookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IplookupResponse](src/ApiVerve/Models/V1IplookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[IplookupError](src/ApiVerve/Errors/IplookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MacaddresslookupResponse&gt; Macaddresslookup(MacaddresslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup MAC address data based on the MAC address

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Macaddresslookup(new MacaddresslookupRequest { Mac = "00-B0-D0-63-C2-26" });
    // TODO: Handle 'response' of type V1MacaddresslookupResponse
}
catch (ApiException<MacaddresslookupError> ex)
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

<code>[MacaddresslookupRequest](src/ApiVerve/Requests/Networking/MacaddresslookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MacaddresslookupResponse](src/ApiVerve/Models/V1MacaddresslookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MacaddresslookupError](src/ApiVerve/Errors/MacaddresslookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1NameserversResponse&gt; Nameservers(NameserversRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the authoritative nameservers for a domain including IP addresses and owner information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Nameservers(new NameserversRequest { Domain = "google.com" });
    // TODO: Handle 'response' of type V1NameserversResponse
}
catch (ApiException<NameserversError> ex)
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

<code>[NameserversRequest](src/ApiVerve/Requests/Networking/NameserversRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NameserversResponse](src/ApiVerve/Models/V1NameserversResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NameserversError](src/ApiVerve/Errors/NameserversError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PhishingcheckResponse&gt; Phishingcheck(PhishingcheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether a domain is in the active phishing database

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Phishingcheck(new PhishingcheckRequest
    {
        Body = new V1PhishingcheckRequest { Domain = "some example string" },
    });
    // TODO: Handle 'response' of type V1PhishingcheckResponse
}
catch (ApiException<PhishingcheckError> ex)
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

<code>[PhishingcheckRequest](src/ApiVerve/Requests/Networking/PhishingcheckRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PhishingcheckResponse](src/ApiVerve/Models/V1PhishingcheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PhishingcheckError](src/ApiVerve/Errors/PhishingcheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PingerResponse&gt; Pinger(PingerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pinger is a simple tool for checking if a URL is up. It returns a boolean value indicating whether the URL is up or not.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Pinger(new PingerRequest
    {
        Body = new V1PingerRequest { Host = "some example string" },
    });
    // TODO: Handle 'response' of type V1PingerResponse
}
catch (ApiException<PingerError> ex)
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

<code>[PingerRequest](src/ApiVerve/Requests/Networking/PingerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PingerResponse](src/ApiVerve/Models/V1PingerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PingerError](src/ApiVerve/Errors/PingerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TldlookupResponse&gt; Tldlookup(TldlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the type and sponsoring organization for a given top-level domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Tldlookup(new TldlookupRequest { Tld = "com" });
    // TODO: Handle 'response' of type V1TldlookupResponse
}
catch (ApiException<TldlookupError> ex)
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

<code>[TldlookupRequest](src/ApiVerve/Requests/Networking/TldlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TldlookupResponse](src/ApiVerve/Models/V1TldlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TldlookupError](src/ApiVerve/Errors/TldlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TlscheckResponse&gt; Tlscheck(TlscheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

TLS Check is an API that inspects the TLS/SSL configuration of a server identified by its IP address. It reports supported protocols, cipher suites, and potential vulnerabilities.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Tlscheck(new TlscheckRequest { Domain = "amazon.com", Port = 443 });
    // TODO: Handle 'response' of type V1TlscheckResponse
}
catch (ApiException<TlscheckError> ex)
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

<code>[TlscheckRequest](src/ApiVerve/Requests/Networking/TlscheckRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TlscheckResponse](src/ApiVerve/Models/V1TlscheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TlscheckError](src/ApiVerve/Errors/TlscheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TordetectResponse&gt; Tordetect(TordetectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tor Detect is an API that checks whether a given IP address belongs to a known Tor exit node. Useful for security, access control, and analytics.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Tordetect(new TordetectRequest { Ip = "185.189.183.143" });
    // TODO: Handle 'response' of type V1TordetectResponse
}
catch (ApiException<TordetectError> ex)
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

<code>[TordetectRequest](src/ApiVerve/Requests/Networking/TordetectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TordetectResponse](src/ApiVerve/Models/V1TordetectResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TordetectError](src/ApiVerve/Errors/TordetectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UsbvendorlookupResponse&gt; Usbvendorlookup(UsbvendorlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup USB vendor and optionally product information by ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Usbvendorlookup(new UsbvendorlookupRequest
    {
        Vendorid = "05AC",
        Productid = "8290",
    });
    // TODO: Handle 'response' of type V1UsbvendorlookupResponse
}
catch (ApiException<UsbvendorlookupError> ex)
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

<code>[UsbvendorlookupRequest](src/ApiVerve/Requests/Networking/UsbvendorlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsbvendorlookupResponse](src/ApiVerve/Models/V1UsbvendorlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UsbvendorlookupError](src/ApiVerve/Errors/UsbvendorlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1VpndetectorResponse&gt; Vpndetector(VpndetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

VPN Detector is a simple tool for detecting VPN usage. It returns a boolean value indicating whether the IP address is using a VPN or not.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Networking.Vpndetector(new VpndetectorRequest { Ip = "103.62.49.210" });
    // TODO: Handle 'response' of type V1VpndetectorResponse
}
catch (ApiException<VpndetectorError> ex)
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

<code>[VpndetectorRequest](src/ApiVerve/Requests/Networking/VpndetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VpndetectorResponse](src/ApiVerve/Models/V1VpndetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[VpndetectorError](src/ApiVerve/Errors/VpndetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/ApiVerve/Api/News.cs)

<details>
<summary><code>Task&lt;V1NewsResponse&gt; NewsInvoke(NewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the latest news based on a category

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.News.NewsInvoke(new NewsRequest { Category = "technology", Limit = 10 });
    // TODO: Handle 'response' of type V1NewsResponse
}
catch (ApiException<NewsError> ex)
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

<code>[NewsRequest](src/ApiVerve/Requests/News/NewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NewsResponse](src/ApiVerve/Models/V1NewsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[NewsError](src/ApiVerve/Errors/NewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Parsers

> Source: [Parsers](src/ApiVerve/Api/Parsers.cs)

<details>
<summary><code>Task&lt;V1HumannameparserResponse&gt; Humannameparser(HumannameparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a human name into its components

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Parsers.Humannameparser(new HumannameparserRequest
    {
        Name = "MR. MARTINO PETROS DE FLORENCE (TINO) Jr.",
    });
    // TODO: Handle 'response' of type V1HumannameparserResponse
}
catch (ApiException<HumannameparserError> ex)
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

<code>[HumannameparserRequest](src/ApiVerve/Requests/Parsers/HumannameparserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HumannameparserResponse](src/ApiVerve/Models/V1HumannameparserResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HumannameparserError](src/ApiVerve/Errors/HumannameparserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RsstojsonResponse&gt; Rsstojson(RsstojsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed in JSON format.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Parsers.Rsstojson(new RsstojsonRequest
    {
        Body = new V1RsstojsonRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1RsstojsonResponse
}
catch (ApiException<RsstojsonError> ex)
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

<code>[RsstojsonRequest](src/ApiVerve/Requests/Parsers/RsstojsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RsstojsonResponse](src/ApiVerve/Models/V1RsstojsonResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RsstojsonError](src/ApiVerve/Errors/RsstojsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1StreetaddressparserResponse&gt; Streetaddressparser(StreetaddressparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse the components of a street address

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Parsers.Streetaddressparser(new StreetaddressparserRequest
    {
        Address = "1600 Amphitheatre Parkway, Mountain View, CA 90210",
    });
    // TODO: Handle 'response' of type V1StreetaddressparserResponse
}
catch (ApiException<StreetaddressparserError> ex)
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

<code>[StreetaddressparserRequest](src/ApiVerve/Requests/Parsers/StreetaddressparserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StreetaddressparserResponse](src/ApiVerve/Models/V1StreetaddressparserResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[StreetaddressparserError](src/ApiVerve/Errors/StreetaddressparserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1UseragentparserResponse&gt; Useragentparser(UseragentparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse the user agent string to get browser, OS, and more

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Parsers.Useragentparser(new UseragentparserRequest
    {
        Body = new V1UseragentparserRequest { Ua = "some example string" },
    });
    // TODO: Handle 'response' of type V1UseragentparserResponse
}
catch (ApiException<UseragentparserError> ex)
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

<code>[UseragentparserRequest](src/ApiVerve/Requests/Parsers/UseragentparserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UseragentparserResponse](src/ApiVerve/Models/V1UseragentparserResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[UseragentparserError](src/ApiVerve/Errors/UseragentparserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ReferenceData

> Source: [ReferenceData](src/ApiVerve/Api/ReferenceData.cs)

<details>
<summary><code>Task&lt;V1BirthstonesResponse&gt; Birthstones(BirthstonesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get birthstone information for a specific month

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Birthstones(new BirthstonesRequest { Month = "5" });
    // TODO: Handle 'response' of type V1BirthstonesResponse
}
catch (ApiException<BirthstonesError> ex)
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

<code>[BirthstonesRequest](src/ApiVerve/Requests/ReferenceData/BirthstonesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BirthstonesResponse](src/ApiVerve/Models/V1BirthstonesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[BirthstonesError](src/ApiVerve/Errors/BirthstonesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CaaparserResponse&gt; Caaparser(CaaparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a DNS CAA record and extract authorization details

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Caaparser(new CaaparserRequest
    {
        Body = new V1CaaparserRequest { Record = "some example string" },
    });
    // TODO: Handle 'response' of type V1CaaparserResponse
}
catch (ApiException<CaaparserError> ex)
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

<code>[CaaparserRequest](src/ApiVerve/Requests/ReferenceData/CaaparserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CaaparserResponse](src/ApiVerve/Models/V1CaaparserResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CaaparserError](src/ApiVerve/Errors/CaaparserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ColorbrightnessResponse&gt; Colorbrightness(ColorbrightnessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate brightness, luminance, and contrast ratios for a color

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Colorbrightness(new ColorbrightnessRequest { Hex = "FF5733" });
    // TODO: Handle 'response' of type V1ColorbrightnessResponse
}
catch (ApiException<ColorbrightnessError> ex)
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

<code>[ColorbrightnessRequest](src/ApiVerve/Requests/ReferenceData/ColorbrightnessRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColorbrightnessResponse](src/ApiVerve/Models/V1ColorbrightnessResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ColorbrightnessError](src/ApiVerve/Errors/ColorbrightnessError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ColornamefinderResponse&gt; Colornamefinder(ColornamefinderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find the closest named color for a hex color value

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Colornamefinder(new ColornamefinderRequest
    {
        Hex = "FF5733",
        Closest = 3,
    });
    // TODO: Handle 'response' of type V1ColornamefinderResponse
}
catch (ApiException<ColornamefinderError> ex)
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

<code>[ColornamefinderRequest](src/ApiVerve/Requests/ReferenceData/ColornamefinderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColornamefinderResponse](src/ApiVerve/Models/V1ColornamefinderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ColornamefinderError](src/ApiVerve/Errors/ColornamefinderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HttpstatuslookupResponse&gt; Httpstatuslookup(HttpstatuslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about an HTTP status code

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Httpstatuslookup(new HttpstatuslookupRequest { Code = 404 });
    // TODO: Handle 'response' of type V1HttpstatuslookupResponse
}
catch (ApiException<HttpstatuslookupError> ex)
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

<code>[HttpstatuslookupRequest](src/ApiVerve/Requests/ReferenceData/HttpstatuslookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HttpstatuslookupResponse](src/ApiVerve/Models/V1HttpstatuslookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HttpstatuslookupError](src/ApiVerve/Errors/HttpstatuslookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MayancalendarResponse&gt; Mayancalendar(MayancalendarRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a Gregorian date to Mayan calendar formats

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Mayancalendar(new MayancalendarRequest { Date = "2024-12-21" });
    // TODO: Handle 'response' of type V1MayancalendarResponse
}
catch (ApiException<MayancalendarError> ex)
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

<code>[MayancalendarRequest](src/ApiVerve/Requests/ReferenceData/MayancalendarRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MayancalendarResponse](src/ApiVerve/Models/V1MayancalendarResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MayancalendarError](src/ApiVerve/Errors/MayancalendarError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MimetypelookupResponse&gt; Mimetypelookup(MimetypelookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up MIME type by file extension

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Mimetypelookup(new MimetypelookupRequest { Extension = "pdf" });
    // TODO: Handle 'response' of type V1MimetypelookupResponse
}
catch (ApiException<MimetypelookupError> ex)
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

<code>[MimetypelookupRequest](src/ApiVerve/Requests/ReferenceData/MimetypelookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MimetypelookupResponse](src/ApiVerve/Models/V1MimetypelookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MimetypelookupError](src/ApiVerve/Errors/MimetypelookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PortnumberlookupResponse&gt; Portnumberlookup(PortnumberlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up service information by port number

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Portnumberlookup(new PortnumberlookupRequest { Port = 443 });
    // TODO: Handle 'response' of type V1PortnumberlookupResponse
}
catch (ApiException<PortnumberlookupError> ex)
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

<code>[PortnumberlookupRequest](src/ApiVerve/Requests/ReferenceData/PortnumberlookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PortnumberlookupResponse](src/ApiVerve/Models/V1PortnumberlookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PortnumberlookupError](src/ApiVerve/Errors/PortnumberlookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RingsizeconverterResponse&gt; Ringsizeconverter(RingsizeconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert ring size between international standards

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Ringsizeconverter(new RingsizeconverterRequest
    {
        Size = "7",
        From = "us",
    });
    // TODO: Handle 'response' of type V1RingsizeconverterResponse
}
catch (ApiException<RingsizeconverterError> ex)
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

<code>[RingsizeconverterRequest](src/ApiVerve/Requests/ReferenceData/RingsizeconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RingsizeconverterResponse](src/ApiVerve/Models/V1RingsizeconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RingsizeconverterError](src/ApiVerve/Errors/RingsizeconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ShoesizeconverterResponse&gt; Shoesizeconverter(ShoesizeconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert shoe size between international standards

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Shoesizeconverter(new ShoesizeconverterRequest
    {
        Size = "9",
        From = "us",
        Gender = "men",
    });
    // TODO: Handle 'response' of type V1ShoesizeconverterResponse
}
catch (ApiException<ShoesizeconverterError> ex)
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

<code>[ShoesizeconverterRequest](src/ApiVerve/Requests/ReferenceData/ShoesizeconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ShoesizeconverterResponse](src/ApiVerve/Models/V1ShoesizeconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ShoesizeconverterError](src/ApiVerve/Errors/ShoesizeconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SrvparserResponse&gt; Srvparser(SrvparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a DNS SRV record and extract service information

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferenceData.Srvparser(new SrvparserRequest
    {
        Body = new V1SrvparserRequest { Record = "some example string" },
    });
    // TODO: Handle 'response' of type V1SrvparserResponse
}
catch (ApiException<SrvparserError> ex)
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

<code>[SrvparserRequest](src/ApiVerve/Requests/ReferenceData/SrvparserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SrvparserResponse](src/ApiVerve/Models/V1SrvparserResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SrvparserError](src/ApiVerve/Errors/SrvparserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Science

> Source: [Science](src/ApiVerve/Api/Science.cs)

<details>
<summary><code>Task&lt;V1JuliandayResponse&gt; Julianday(JuliandayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a Gregorian date to Julian Day Number

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Science.Julianday(new JuliandayRequest { Date = "2024-03-15" });
    // TODO: Handle 'response' of type V1JuliandayResponse
}
catch (ApiException<JuliandayError> ex)
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

<code>[JuliandayRequest](src/ApiVerve/Requests/Science/JuliandayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JuliandayResponse](src/ApiVerve/Models/V1JuliandayResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[JuliandayError](src/ApiVerve/Errors/JuliandayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MeteoritesResponse&gt; Meteorites(MeteoritesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of meteorites that have fallen to Earth

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Science.Meteorites(new MeteoritesRequest
    {
        Name = "Allende",
        Mass = 100d,
        Year = 1969d,
    });
    // TODO: Handle 'response' of type V1MeteoritesResponse
}
catch (ApiException<MeteoritesError> ex)
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

<code>[MeteoritesRequest](src/ApiVerve/Requests/Science/MeteoritesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MeteoritesResponse](src/ApiVerve/Models/V1MeteoritesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MeteoritesError](src/ApiVerve/Errors/MeteoritesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PeriodictableResponse&gt; Periodictable(PeriodictableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a chemical element

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Science.Periodictable(new PeriodictableRequest { Name = "hydrogen" });
    // TODO: Handle 'response' of type V1PeriodictableResponse
}
catch (ApiException<PeriodictableError> ex)
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

<code>[PeriodictableRequest](src/ApiVerve/Requests/Science/PeriodictableRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PeriodictableResponse](src/ApiVerve/Models/V1PeriodictableResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PeriodictableError](src/ApiVerve/Errors/PeriodictableError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1StarslookupResponse&gt; Starslookup(StarslookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup star data based on the star name

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Science.Starslookup(new StarslookupRequest { Name = "Sirius" });
    // TODO: Handle 'response' of type V1StarslookupResponse
}
catch (ApiException<StarslookupError> ex)
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

<code>[StarslookupRequest](src/ApiVerve/Requests/Science/StarslookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StarslookupResponse](src/ApiVerve/Models/V1StarslookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[StarslookupError](src/ApiVerve/Errors/StarslookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Security

> Source: [Security](src/ApiVerve/Api/Security.cs)

<details>
<summary><code>Task&lt;V1CsrparserResponse&gt; Csrparser(CsrparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a Certificate Signing Request and extract information

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Security.Csrparser(new CsrparserRequest
    {
        Body = new V1CsrparserRequest { Csr = "some example string" },
    });
    // TODO: Handle 'response' of type V1CsrparserResponse
}
catch (ApiException<CsrparserError> ex)
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

<code>[CsrparserRequest](src/ApiVerve/Requests/Security/CsrparserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CsrparserResponse](src/ApiVerve/Models/V1CsrparserResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CsrparserError](src/ApiVerve/Errors/CsrparserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DanevalidatorResponse&gt; Danevalidator(DanevalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a DANE/TLSA DNS record

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Security.Danevalidator(new DanevalidatorRequest
    {
        Body = new V1DanevalidatorRequest { Record = "some example string" },
    });
    // TODO: Handle 'response' of type V1DanevalidatorResponse
}
catch (ApiException<DanevalidatorError> ex)
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

<code>[DanevalidatorRequest](src/ApiVerve/Requests/Security/DanevalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DanevalidatorResponse](src/ApiVerve/Models/V1DanevalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DanevalidatorError](src/ApiVerve/Errors/DanevalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HashgeneratorResponse&gt; Hashgenerator(HashgeneratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate cryptographic hashes using multiple algorithms

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Security.Hashgenerator(new HashgeneratorRequest
    {
        Text = "Hello World",
        Algorithms = "sha256,md5",
    });
    // TODO: Handle 'response' of type V1HashgeneratorResponse
}
catch (ApiException<HashgeneratorError> ex)
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

<code>[HashgeneratorRequest](src/ApiVerve/Requests/Security/HashgeneratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HashgeneratorResponse](src/ApiVerve/Models/V1HashgeneratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HashgeneratorError](src/ApiVerve/Errors/HashgeneratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1HmacResponse&gt; Hmac(HmacRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an HMAC signature for a message

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Security.Hmac(new HmacRequest
    {
        Body = new V1HmacRequest { Message = "some example string", Secret = "some example string" },
    });
    // TODO: Handle 'response' of type V1HmacResponse
}
catch (ApiException<HmacError> ex)
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

<code>[HmacRequest](src/ApiVerve/Requests/Security/HmacRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HmacResponse](src/ApiVerve/Models/V1HmacResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[HmacError](src/ApiVerve/Errors/HmacError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TextProcessing

> Source: [TextProcessing](src/ApiVerve/Api/TextProcessing.cs)

<details>
<summary><code>Task&lt;V1AcronymexpanderResponse&gt; Acronymexpander(AcronymexpanderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expand an acronym to its full meaning with AI assistance

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Acronymexpander(new AcronymexpanderRequest
    {
        Acronym = "API",
        Context = "software",
    });
    // TODO: Handle 'response' of type V1AcronymexpanderResponse
}
catch (ApiException<AcronymexpanderError> ex)
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

<code>[AcronymexpanderRequest](src/ApiVerve/Requests/TextProcessing/AcronymexpanderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AcronymexpanderResponse](src/ApiVerve/Models/V1AcronymexpanderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AcronymexpanderError](src/ApiVerve/Errors/AcronymexpanderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1AnagramdetectorResponse&gt; Anagramdetector(AnagramdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if two texts are anagrams with detailed analysis

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Anagramdetector(new AnagramdetectorRequest
    {
        Text1 = "listen",
        Text2 = "silent",
        Ignorecase = true,
        Ignorespaces = true,
    });
    // TODO: Handle 'response' of type V1AnagramdetectorResponse
}
catch (ApiException<AnagramdetectorError> ex)
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

<code>[AnagramdetectorRequest](src/ApiVerve/Requests/TextProcessing/AnagramdetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AnagramdetectorResponse](src/ApiVerve/Models/V1AnagramdetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AnagramdetectorError](src/ApiVerve/Errors/AnagramdetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1AntonymResponse&gt; Antonym(AntonymRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Antonym is a simple tool for getting the antonyms of a word. It returns a list of antonyms for the given word.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Antonym(new AntonymRequest { Word = "happy", Language = "Spanish" });
    // TODO: Handle 'response' of type V1AntonymResponse
}
catch (ApiException<AntonymError> ex)
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

<code>[AntonymRequest](src/ApiVerve/Requests/TextProcessing/AntonymRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AntonymResponse](src/ApiVerve/Models/V1AntonymResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AntonymError](src/ApiVerve/Errors/AntonymError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CronparserResponse&gt; Cronparser(CronparserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse and validate cron expressions with detailed field analysis

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Cronparser(new CronparserRequest { Expression = "0 9 * * 1-5" });
    // TODO: Handle 'response' of type V1CronparserResponse
}
catch (ApiException<CronparserError> ex)
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

<code>[CronparserRequest](src/ApiVerve/Requests/TextProcessing/CronparserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CronparserResponse](src/ApiVerve/Models/V1CronparserResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CronparserError](src/ApiVerve/Errors/CronparserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DatamaskingResponse&gt; Datamasking(DatamaskingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect and mask sensitive information in text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Datamasking(new DatamaskingRequest
    {
        Body = new V1DatamaskingRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1DatamaskingResponse
}
catch (ApiException<DatamaskingError> ex)
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

<code>[DatamaskingRequest](src/ApiVerve/Requests/TextProcessing/DatamaskingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DatamaskingResponse](src/ApiVerve/Models/V1DatamaskingResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DatamaskingError](src/ApiVerve/Errors/DatamaskingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1DidyoumeanResponse&gt; Didyoumean(DidyoumeanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Did You Mean is a simple tool for correcting spelling mistakes. It returns the corrected text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Didyoumean(new DidyoumeanRequest { Query = "what weather today is" });
    // TODO: Handle 'response' of type V1DidyoumeanResponse
}
catch (ApiException<DidyoumeanError> ex)
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

<code>[DidyoumeanRequest](src/ApiVerve/Requests/TextProcessing/DidyoumeanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DidyoumeanResponse](src/ApiVerve/Models/V1DidyoumeanResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[DidyoumeanError](src/ApiVerve/Errors/DidyoumeanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1EmojidecoratorResponse&gt; Emojidecorator(EmojidecoratorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Emojidecorator(new EmojidecoratorRequest
    {
        Body = new V1EmojidecoratorRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1EmojidecoratorResponse
}
catch (ApiException<EmojidecoratorError> ex)
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

<code>[EmojidecoratorRequest](src/ApiVerve/Requests/TextProcessing/EmojidecoratorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EmojidecoratorResponse](src/ApiVerve/Models/V1EmojidecoratorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[EmojidecoratorError](src/ApiVerve/Errors/EmojidecoratorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GibberishdetectorResponse&gt; Gibberishdetector(GibberishdetectorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze text to detect gibberish content

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Gibberishdetector(new GibberishdetectorRequest
    {
        Body = new V1GibberishdetectorRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1GibberishdetectorResponse
}
catch (ApiException<GibberishdetectorError> ex)
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

<code>[GibberishdetectorRequest](src/ApiVerve/Requests/TextProcessing/GibberishdetectorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GibberishdetectorResponse](src/ApiVerve/Models/V1GibberishdetectorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GibberishdetectorError](src/ApiVerve/Errors/GibberishdetectorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1GrammarcheckResponse&gt; Grammarcheck(GrammarcheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the corrected text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Grammarcheck(new GrammarcheckRequest
    {
        Body = new V1GrammarcheckRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1GrammarcheckResponse
}
catch (ApiException<GrammarcheckError> ex)
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

<code>[GrammarcheckRequest](src/ApiVerve/Requests/TextProcessing/GrammarcheckRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GrammarcheckResponse](src/ApiVerve/Models/V1GrammarcheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[GrammarcheckError](src/ApiVerve/Errors/GrammarcheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1IsbnvalidatorResponse&gt; Isbnvalidator(IsbnvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate and parse ISBN-10 or ISBN-13 numbers

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Isbnvalidator(new IsbnvalidatorRequest { Isbn = "978-0-306-40615-7" });
    // TODO: Handle 'response' of type V1IsbnvalidatorResponse
}
catch (ApiException<IsbnvalidatorError> ex)
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

<code>[IsbnvalidatorRequest](src/ApiVerve/Requests/TextProcessing/IsbnvalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IsbnvalidatorResponse](src/ApiVerve/Models/V1IsbnvalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[IsbnvalidatorError](src/ApiVerve/Errors/IsbnvalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1JsonschemavalidatorResponse&gt; Jsonschemavalidator(JsonschemavalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate JSON data against a JSON schema

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Jsonschemavalidator(new JsonschemavalidatorRequest
    {
        Body = new V1JsonschemavalidatorRequest { Schema = "some example string", Json = "some example string" },
    });
    // TODO: Handle 'response' of type V1JsonschemavalidatorResponse
}
catch (ApiException<JsonschemavalidatorError> ex)
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

<code>[JsonschemavalidatorRequest](src/ApiVerve/Requests/TextProcessing/JsonschemavalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JsonschemavalidatorResponse](src/ApiVerve/Models/V1JsonschemavalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[JsonschemavalidatorError](src/ApiVerve/Errors/JsonschemavalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1KeywordextractorResponse&gt; Keywordextractor(KeywordextractorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract keywords from a body of text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Keywordextractor(new KeywordextractorRequest
    {
        Body = new V1KeywordextractorRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1KeywordextractorResponse
}
catch (ApiException<KeywordextractorError> ex)
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

<code>[KeywordextractorRequest](src/ApiVerve/Requests/TextProcessing/KeywordextractorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1KeywordextractorResponse](src/ApiVerve/Models/V1KeywordextractorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[KeywordextractorError](src/ApiVerve/Errors/KeywordextractorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LeetspeakResponse&gt; Leetspeak(LeetspeakRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Leet Speak is a simple tool for encoding and decoding Leet Speak. It returns the encoded or decoded Leet Speak.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Leetspeak(new LeetspeakRequest
    {
        Body = new V1LeetspeakRequest { Text = "some example string", Mode = "some example string" },
    });
    // TODO: Handle 'response' of type V1LeetspeakResponse
}
catch (ApiException<LeetspeakError> ex)
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

<code>[LeetspeakRequest](src/ApiVerve/Requests/TextProcessing/LeetspeakRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LeetspeakResponse](src/ApiVerve/Models/V1LeetspeakResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LeetspeakError](src/ApiVerve/Errors/LeetspeakError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LemmatizerResponse&gt; Lemmatizer(LemmatizerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lemmatize text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Lemmatizer(new LemmatizerRequest
    {
        Body = new V1LemmatizerRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1LemmatizerResponse
}
catch (ApiException<LemmatizerError> ex)
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

<code>[LemmatizerRequest](src/ApiVerve/Requests/TextProcessing/LemmatizerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LemmatizerResponse](src/ApiVerve/Models/V1LemmatizerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LemmatizerError](src/ApiVerve/Errors/LemmatizerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LevenshteindistanceResponse&gt; Levenshteindistance(LevenshteindistanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate Levenshtein distance between two strings

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Levenshteindistance(new LevenshteindistanceRequest
    {
        Body = new V1LevenshteindistanceRequest { String1 = "some example string", String2 = "some example string" },
    });
    // TODO: Handle 'response' of type V1LevenshteindistanceResponse
}
catch (ApiException<LevenshteindistanceError> ex)
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

<code>[LevenshteindistanceRequest](src/ApiVerve/Requests/TextProcessing/LevenshteindistanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LevenshteindistanceResponse](src/ApiVerve/Models/V1LevenshteindistanceResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LevenshteindistanceError](src/ApiVerve/Errors/LevenshteindistanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LexiconResponse&gt; Lexicon(LexiconRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lexicon is a simple tool for analyzing words. It returns various properties of the word.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Lexicon(new LexiconRequest { Word = "listen" });
    // TODO: Handle 'response' of type V1LexiconResponse
}
catch (ApiException<LexiconError> ex)
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

<code>[LexiconRequest](src/ApiVerve/Requests/TextProcessing/LexiconRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LexiconResponse](src/ApiVerve/Models/V1LexiconResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LexiconError](src/ApiVerve/Errors/LexiconError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1LinesorterResponse&gt; Linesorter(LinesorterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sort lines of text alphabetically

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Linesorter(new LinesorterRequest
    {
        Body = new V1LinesorterRequest { Lines = "some example string" },
    });
    // TODO: Handle 'response' of type V1LinesorterResponse
}
catch (ApiException<LinesorterError> ex)
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

<code>[LinesorterRequest](src/ApiVerve/Requests/TextProcessing/LinesorterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LinesorterResponse](src/ApiVerve/Models/V1LinesorterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[LinesorterError](src/ApiVerve/Errors/LinesorterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MarkdownlinkextractorResponse&gt; Markdownlinkextractor(MarkdownlinkextractorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse markdown and extract all links with categorization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Markdownlinkextractor(new MarkdownlinkextractorRequest
    {
        Body = new V1MarkdownlinkextractorRequest { Markdown = "some example string" },
    });
    // TODO: Handle 'response' of type V1MarkdownlinkextractorResponse
}
catch (ApiException<MarkdownlinkextractorError> ex)
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

<code>[MarkdownlinkextractorRequest](src/ApiVerve/Requests/TextProcessing/MarkdownlinkextractorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdownlinkextractorResponse](src/ApiVerve/Models/V1MarkdownlinkextractorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MarkdownlinkextractorError](src/ApiVerve/Errors/MarkdownlinkextractorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PalindromecheckerResponse&gt; Palindromechecker(PalindromecheckerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if text is a palindrome with customizable options

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Palindromechecker(new PalindromecheckerRequest
    {
        Text = "A man a plan a canal Panama",
        Ignorecase = true,
        Ignorespaces = true,
        Ignorepunctuation = true,
    });
    // TODO: Handle 'response' of type V1PalindromecheckerResponse
}
catch (ApiException<PalindromecheckerError> ex)
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

<code>[PalindromecheckerRequest](src/ApiVerve/Requests/TextProcessing/PalindromecheckerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PalindromecheckerResponse](src/ApiVerve/Models/V1PalindromecheckerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PalindromecheckerError](src/ApiVerve/Errors/PalindromecheckerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PartsofspeechResponse&gt; Partsofspeech(PartsofspeechRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract nouns, verbs, adjectives, adverbs, etc. from text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Partsofspeech(new PartsofspeechRequest
    {
        Body = new V1PartsofspeechRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1PartsofspeechResponse
}
catch (ApiException<PartsofspeechError> ex)
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

<code>[PartsofspeechRequest](src/ApiVerve/Requests/TextProcessing/PartsofspeechRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PartsofspeechResponse](src/ApiVerve/Models/V1PartsofspeechResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PartsofspeechError](src/ApiVerve/Errors/PartsofspeechError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PhoneticResponse&gt; Phonetic(PhoneticRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get phonetic codes for a word

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Phonetic(new PhoneticRequest { Word = "smith", Algorithm = "both" });
    // TODO: Handle 'response' of type V1PhoneticResponse
}
catch (ApiException<PhoneticError> ex)
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

<code>[PhoneticRequest](src/ApiVerve/Requests/TextProcessing/PhoneticRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PhoneticResponse](src/ApiVerve/Models/V1PhoneticResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PhoneticError](src/ApiVerve/Errors/PhoneticError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1PiglatinResponse&gt; Piglatin(PiglatinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pig Latin is a simple tool for encoding Pig Latin. It returns the encoded Pig Latin.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Piglatin(new PiglatinRequest
    {
        Body = new V1PiglatinRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1PiglatinResponse
}
catch (ApiException<PiglatinError> ex)
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

<code>[PiglatinRequest](src/ApiVerve/Requests/TextProcessing/PiglatinRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PiglatinResponse](src/ApiVerve/Models/V1PiglatinResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[PiglatinError](src/ApiVerve/Errors/PiglatinError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ProfanityfilterResponse&gt; Profanityfilter(ProfanityfilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Filter out profanity words from a body of text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Profanityfilter(new ProfanityfilterRequest
    {
        Body = new V1ProfanityfilterRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1ProfanityfilterResponse
}
catch (ApiException<ProfanityfilterError> ex)
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

<code>[ProfanityfilterRequest](src/ApiVerve/Requests/TextProcessing/ProfanityfilterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ProfanityfilterResponse](src/ApiVerve/Models/V1ProfanityfilterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ProfanityfilterError](src/ApiVerve/Errors/ProfanityfilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ReadabilityscoreResponse&gt; Readabilityscore(ReadabilityscoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate the readability score of text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Readabilityscore(new ReadabilityscoreRequest
    {
        Body = new V1ReadabilityscoreRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1ReadabilityscoreResponse
}
catch (ApiException<ReadabilityscoreError> ex)
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

<code>[ReadabilityscoreRequest](src/ApiVerve/Requests/TextProcessing/ReadabilityscoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReadabilityscoreResponse](src/ApiVerve/Models/V1ReadabilityscoreResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ReadabilityscoreError](src/ApiVerve/Errors/ReadabilityscoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ReadingtimeResponse&gt; Readingtime(ReadingtimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate estimated reading time for text content

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Readingtime(new ReadingtimeRequest
    {
        Body = new V1ReadingtimeRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1ReadingtimeResponse
}
catch (ApiException<ReadingtimeError> ex)
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

<code>[ReadingtimeRequest](src/ApiVerve/Requests/TextProcessing/ReadingtimeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReadingtimeResponse](src/ApiVerve/Models/V1ReadingtimeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ReadingtimeError](src/ApiVerve/Errors/ReadingtimeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RegextesterResponse&gt; Regextester(RegextesterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test regular expressions with detailed analysis and results

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Regextester(new RegextesterRequest
    {
        Body = new V1RegextesterRequest { Pattern = "some example string", Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1RegextesterResponse
}
catch (ApiException<RegextesterError> ex)
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

<code>[RegextesterRequest](src/ApiVerve/Requests/TextProcessing/RegextesterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RegextesterResponse](src/ApiVerve/Models/V1RegextesterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RegextesterError](src/ApiVerve/Errors/RegextesterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1RemovepunctuationResponse&gt; Removepunctuation(RemovepunctuationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove all punctuation marks from text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Removepunctuation(new RemovepunctuationRequest
    {
        Body = new V1RemovepunctuationRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1RemovepunctuationResponse
}
catch (ApiException<RemovepunctuationError> ex)
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

<code>[RemovepunctuationRequest](src/ApiVerve/Requests/TextProcessing/RemovepunctuationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RemovepunctuationResponse](src/ApiVerve/Models/V1RemovepunctuationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[RemovepunctuationError](src/ApiVerve/Errors/RemovepunctuationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ReversetextResponse&gt; Reversetext(ReversetextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reverse text character by character

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Reversetext(new ReversetextRequest
    {
        Body = new V1ReversetextRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1ReversetextResponse
}
catch (ApiException<ReversetextError> ex)
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

<code>[ReversetextRequest](src/ApiVerve/Requests/TextProcessing/ReversetextRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReversetextResponse](src/ApiVerve/Models/V1ReversetextResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[ReversetextError](src/ApiVerve/Errors/ReversetextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SlugifyResponse&gt; Slugify(SlugifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text to a URL-friendly slug

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Slugify(new SlugifyRequest
    {
        Body = new V1SlugifyRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1SlugifyResponse
}
catch (ApiException<SlugifyError> ex)
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

<code>[SlugifyRequest](src/ApiVerve/Requests/TextProcessing/SlugifyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SlugifyResponse](src/ApiVerve/Models/V1SlugifyResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SlugifyError](src/ApiVerve/Errors/SlugifyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SpellcheckerResponse&gt; Spellchecker(SpellcheckerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the spelling of a body of text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Spellchecker(new SpellcheckerRequest
    {
        Body = new V1SpellcheckerRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1SpellcheckerResponse
}
catch (ApiException<SpellcheckerError> ex)
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

<code>[SpellcheckerRequest](src/ApiVerve/Requests/TextProcessing/SpellcheckerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SpellcheckerResponse](src/ApiVerve/Models/V1SpellcheckerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SpellcheckerError](src/ApiVerve/Errors/SpellcheckerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SyllablecounterResponse&gt; Syllablecounter(SyllablecounterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Count syllables in words and text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Syllablecounter(new SyllablecounterRequest
    {
        Body = new V1SyllablecounterRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1SyllablecounterResponse
}
catch (ApiException<SyllablecounterError> ex)
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

<code>[SyllablecounterRequest](src/ApiVerve/Requests/TextProcessing/SyllablecounterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SyllablecounterResponse](src/ApiVerve/Models/V1SyllablecounterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SyllablecounterError](src/ApiVerve/Errors/SyllablecounterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TaxidvalidatorResponse&gt; Taxidvalidator(TaxidvalidatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate US Tax IDs (SSN, EIN, ITIN)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Taxidvalidator(new TaxidvalidatorRequest { Taxid = "123-45-6789" });
    // TODO: Handle 'response' of type V1TaxidvalidatorResponse
}
catch (ApiException<TaxidvalidatorError> ex)
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

<code>[TaxidvalidatorRequest](src/ApiVerve/Requests/TextProcessing/TaxidvalidatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TaxidvalidatorResponse](src/ApiVerve/Models/V1TaxidvalidatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TaxidvalidatorError](src/ApiVerve/Errors/TaxidvalidatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TenseconverterResponse&gt; Tenseconverter(TenseconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text to past or future tense

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Tenseconverter(new TenseconverterRequest
    {
        Body = new V1TenseconverterRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1TenseconverterResponse
}
catch (ApiException<TenseconverterError> ex)
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

<code>[TenseconverterRequest](src/ApiVerve/Requests/TextProcessing/TenseconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TenseconverterResponse](src/ApiVerve/Models/V1TenseconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TenseconverterError](src/ApiVerve/Errors/TenseconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TextlanguageResponse&gt; Textlanguage(TextlanguageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect the language of a body of text

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Textlanguage(new TextlanguageRequest
    {
        Body = new V1TextlanguageRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1TextlanguageResponse
}
catch (ApiException<TextlanguageError> ex)
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

<code>[TextlanguageRequest](src/ApiVerve/Requests/TextProcessing/TextlanguageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TextlanguageResponse](src/ApiVerve/Models/V1TextlanguageResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TextlanguageError](src/ApiVerve/Errors/TextlanguageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TextsimilarityResponse&gt; Textsimilarity(TextsimilarityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the similarity between two texts

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Textsimilarity(new TextsimilarityRequest
    {
        Body = new V1TextsimilarityRequest { Text1 = "some example string", Text2 = "some example string" },
    });
    // TODO: Handle 'response' of type V1TextsimilarityResponse
}
catch (ApiException<TextsimilarityError> ex)
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

<code>[TextsimilarityRequest](src/ApiVerve/Requests/TextProcessing/TextsimilarityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TextsimilarityResponse](src/ApiVerve/Models/V1TextsimilarityResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TextsimilarityError](src/ApiVerve/Errors/TextsimilarityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TextstylerResponse&gt; Textstyler(TextstylerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Text Styler is a simple tool for styling text in various ways. It returns the styled text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Textstyler(new TextstylerRequest
    {
        Body = new V1TextstylerRequest { Text = "some example string", Style = "some example string" },
    });
    // TODO: Handle 'response' of type V1TextstylerResponse
}
catch (ApiException<TextstylerError> ex)
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

<code>[TextstylerRequest](src/ApiVerve/Requests/TextProcessing/TextstylerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TextstylerResponse](src/ApiVerve/Models/V1TextstylerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TextstylerError](src/ApiVerve/Errors/TextstylerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TextsummarizerResponse&gt; Textsummarizer(TextsummarizerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Summarize a body of text. Useful for generating summaries of articles, reports, and more.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Textsummarizer(new TextsummarizerRequest
    {
        Body = new V1TextsummarizerRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1TextsummarizerResponse
}
catch (ApiException<TextsummarizerError> ex)
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

<code>[TextsummarizerRequest](src/ApiVerve/Requests/TextProcessing/TextsummarizerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TextsummarizerResponse](src/ApiVerve/Models/V1TextsummarizerResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TextsummarizerError](src/ApiVerve/Errors/TextsummarizerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TexttoemojiResponse&gt; Texttoemoji(TexttoemojiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Text to Emoji is a simple tool for converting text into emojis. It returns the emojis that represent the given text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Texttoemoji(new TexttoemojiRequest
    {
        Body = new V1TexttoemojiRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1TexttoemojiResponse
}
catch (ApiException<TexttoemojiError> ex)
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

<code>[TexttoemojiRequest](src/ApiVerve/Requests/TextProcessing/TexttoemojiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TexttoemojiResponse](src/ApiVerve/Models/V1TexttoemojiResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TexttoemojiError](src/ApiVerve/Errors/TexttoemojiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TitlecapitalizationResponse&gt; Titlecapitalization(TitlecapitalizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text to title case

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Titlecapitalization(new TitlecapitalizationRequest
    {
        Body = new V1TitlecapitalizationRequest { Text = "some example string", Style = "some example string" },
    });
    // TODO: Handle 'response' of type V1TitlecapitalizationResponse
}
catch (ApiException<TitlecapitalizationError> ex)
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

<code>[TitlecapitalizationRequest](src/ApiVerve/Requests/TextProcessing/TitlecapitalizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TitlecapitalizationResponse](src/ApiVerve/Models/V1TitlecapitalizationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TitlecapitalizationError](src/ApiVerve/Errors/TitlecapitalizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1TranslatorResponse&gt; Translator(TranslatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translate text from one language to another

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Translator(new TranslatorRequest
    {
        Body = new V1TranslatorRequest { Text = "some example string", Target = "some example string" },
    });
    // TODO: Handle 'response' of type V1TranslatorResponse
}
catch (ApiException<TranslatorError> ex)
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

<code>[TranslatorRequest](src/ApiVerve/Requests/TextProcessing/TranslatorRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TranslatorResponse](src/ApiVerve/Models/V1TranslatorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[TranslatorError](src/ApiVerve/Errors/TranslatorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1VowelcounterResponse&gt; Vowelcounter(VowelcounterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Count vowels and consonants in text with detailed breakdown

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Vowelcounter(new VowelcounterRequest
    {
        Body = new V1VowelcounterRequest { Text = "some example string" },
    });
    // TODO: Handle 'response' of type V1VowelcounterResponse
}
catch (ApiException<VowelcounterError> ex)
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

<code>[VowelcounterRequest](src/ApiVerve/Requests/TextProcessing/VowelcounterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VowelcounterResponse](src/ApiVerve/Models/V1VowelcounterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[VowelcounterError](src/ApiVerve/Errors/VowelcounterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WebsitereadabilityResponse&gt; Websitereadability(WebsitereadabilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze the readability of a web page

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Websitereadability(new WebsitereadabilityRequest
    {
        Body = new V1WebsitereadabilityRequest { Url = "some example string" },
    });
    // TODO: Handle 'response' of type V1WebsitereadabilityResponse
}
catch (ApiException<WebsitereadabilityError> ex)
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

<code>[WebsitereadabilityRequest](src/ApiVerve/Requests/TextProcessing/WebsitereadabilityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebsitereadabilityResponse](src/ApiVerve/Models/V1WebsitereadabilityResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WebsitereadabilityError](src/ApiVerve/Errors/WebsitereadabilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WordoppositeResponse&gt; Wordopposite(WordoppositeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Word Opposites is a simple tool for getting the opposites of a word. It returns a list of opposites for the given word.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Wordopposite(new WordoppositeRequest { Word = "hot" });
    // TODO: Handle 'response' of type V1WordoppositeResponse
}
catch (ApiException<WordoppositeError> ex)
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

<code>[WordoppositeRequest](src/ApiVerve/Requests/TextProcessing/WordoppositeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordoppositeResponse](src/ApiVerve/Models/V1WordoppositeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WordoppositeError](src/ApiVerve/Errors/WordoppositeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WordpronunciationResponse&gt; Wordpronunciation(WordpronunciationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the pronunciation of a word

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Wordpronunciation(new WordpronunciationRequest { Word = "hello" });
    // TODO: Handle 'response' of type V1WordpronunciationResponse
}
catch (ApiException<WordpronunciationError> ex)
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

<code>[WordpronunciationRequest](src/ApiVerve/Requests/TextProcessing/WordpronunciationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordpronunciationResponse](src/ApiVerve/Models/V1WordpronunciationResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WordpronunciationError](src/ApiVerve/Errors/WordpronunciationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WordrhymesResponse&gt; Wordrhymes(WordrhymesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of words that rhyme with the specified word

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TextProcessing.Wordrhymes(new WordrhymesRequest { Word = "blue", Limit = 30 });
    // TODO: Handle 'response' of type V1WordrhymesResponse
}
catch (ApiException<WordrhymesError> ex)
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

<code>[WordrhymesRequest](src/ApiVerve/Requests/TextProcessing/WordrhymesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordrhymesResponse](src/ApiVerve/Models/V1WordrhymesResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WordrhymesError](src/ApiVerve/Errors/WordrhymesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transportation

> Source: [Transportation](src/ApiVerve/Api/Transportation.cs)

<details>
<summary><code>Task&lt;V1AirlinelookupResponse&gt; Airlinelookup(AirlinelookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the airline information for a specific airline IATA code

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transportation.Airlinelookup(new AirlinelookupRequest { Iata = "AA" });
    // TODO: Handle 'response' of type V1AirlinelookupResponse
}
catch (ApiException<AirlinelookupError> ex)
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

<code>[AirlinelookupRequest](src/ApiVerve/Requests/Transportation/AirlinelookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirlinelookupResponse](src/ApiVerve/Models/V1AirlinelookupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AirlinelookupError](src/ApiVerve/Errors/AirlinelookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1AirportcodeconverterResponse&gt; Airportcodeconverter(AirportcodeconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit an IATA (3-letter) or ICAO (4-letter) airport code and get the corresponding code in the other format.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transportation.Airportcodeconverter(new AirportcodeconverterRequest { Code = "MCI" });
    // TODO: Handle 'response' of type V1AirportcodeconverterResponse
}
catch (ApiException<AirportcodeconverterError> ex)
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

<code>[AirportcodeconverterRequest](src/ApiVerve/Requests/Transportation/AirportcodeconverterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirportcodeconverterResponse](src/ApiVerve/Models/V1AirportcodeconverterResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AirportcodeconverterError](src/ApiVerve/Errors/AirportcodeconverterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1AirportdistanceResponse&gt; Airportdistance(AirportdistanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Airport Distance is a simple tool for getting the distance between two airports. It returns the distance between the two airports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transportation.Airportdistance(new AirportdistanceRequest
    {
        Iata1 = "JFK",
        Iata2 = "LAX",
    });
    // TODO: Handle 'response' of type V1AirportdistanceResponse
}
catch (ApiException<AirportdistanceError> ex)
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

<code>[AirportdistanceRequest](src/ApiVerve/Requests/Transportation/AirportdistanceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirportdistanceResponse](src/ApiVerve/Models/V1AirportdistanceResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AirportdistanceError](src/ApiVerve/Errors/AirportdistanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1AirportsResponse&gt; Airports(AirportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the airport information for a specific airport IATA code

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transportation.Airports(new AirportsRequest { Iata = "MCI" });
    // TODO: Handle 'response' of type V1AirportsResponse
}
catch (ApiException<AirportsError> ex)
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

<code>[AirportsRequest](src/ApiVerve/Requests/Transportation/AirportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirportsResponse](src/ApiVerve/Models/V1AirportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AirportsError](src/ApiVerve/Errors/AirportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1CarmodelsResponse&gt; Carmodels(CarmodelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all car models for a specific make (manufacturer)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transportation.Carmodels(new CarmodelsRequest
    {
        Make = "Toyota",
        Year = 2024,
        Model = "Camry",
        Trim = "Hybrid",
    });
    // TODO: Handle 'response' of type V1CarmodelsResponse
}
catch (ApiException<CarmodelsError> ex)
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

<code>[CarmodelsRequest](src/ApiVerve/Requests/Transportation/CarmodelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CarmodelsResponse](src/ApiVerve/Models/V1CarmodelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[CarmodelsError](src/ApiVerve/Errors/CarmodelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1VindecoderResponse&gt; Vindecoder(VindecoderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode a Vehicle Identification Number into the vehicle it identifies

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Transportation.Vindecoder(new VindecoderRequest { Vin = "1HGCM82633A004352" });
    // TODO: Handle 'response' of type V1VindecoderResponse
}
catch (ApiException<VindecoderError> ex)
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

<code>[VindecoderRequest](src/ApiVerve/Requests/Transportation/VindecoderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VindecoderResponse](src/ApiVerve/Models/V1VindecoderResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[VindecoderError](src/ApiVerve/Errors/VindecoderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Weather

> Source: [Weather](src/ApiVerve/Api/Weather.cs)

<details>
<summary><code>Task&lt;V1AirqualityResponse&gt; Airquality(AirqualityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the air quality data for a city

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Weather.Airquality(new AirqualityRequest { City = "San Francisco" });
    // TODO: Handle 'response' of type V1AirqualityResponse
}
catch (ApiException<AirqualityError> ex)
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

<code>[AirqualityRequest](src/ApiVerve/Requests/Weather/AirqualityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirqualityResponse](src/ApiVerve/Models/V1AirqualityResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[AirqualityError](src/ApiVerve/Errors/AirqualityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1EarthquakeResponse&gt; Earthquake(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Earthquake is a simple tool for getting earthquake data. It returns the earthquake data for the past hour.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Weather.Earthquake();
    // TODO: Handle 'response' of type V1EarthquakeResponse
}
catch (ApiException<EarthquakeError> ex)
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

**OnSuccess**: <code>[V1EarthquakeResponse](src/ApiVerve/Models/V1EarthquakeResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[EarthquakeError](src/ApiVerve/Errors/EarthquakeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MarineweatherResponse&gt; Marineweather(MarineweatherRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the marine weather data for a location using latitude and longitude coordinates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Weather.Marineweather(new MarineweatherRequest { Lat = 29.48003d, Lon = -37.62424d });
    // TODO: Handle 'response' of type V1MarineweatherResponse
}
catch (ApiException<MarineweatherError> ex)
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

<code>[MarineweatherRequest](src/ApiVerve/Requests/Weather/MarineweatherRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarineweatherResponse](src/ApiVerve/Models/V1MarineweatherResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MarineweatherError](src/ApiVerve/Errors/MarineweatherError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1MoonrisemoonsetResponse&gt; Moonrisemoonset(MoonrisemoonsetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get moonrise and moonset times based on the location

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Weather.Moonrisemoonset(new MoonrisemoonsetRequest
    {
        Lat = 37.7749d,
        Lon = -122.4194d,
        Date = "01-16-2026",
    });
    // TODO: Handle 'response' of type V1MoonrisemoonsetResponse
}
catch (ApiException<MoonrisemoonsetError> ex)
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

<code>[MoonrisemoonsetRequest](src/ApiVerve/Requests/Weather/MoonrisemoonsetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MoonrisemoonsetResponse](src/ApiVerve/Models/V1MoonrisemoonsetResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[MoonrisemoonsetError](src/ApiVerve/Errors/MoonrisemoonsetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SolarpotentialResponse&gt; Solarpotential(SolarpotentialRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Solar Potential is a simple tool for getting the estimated annual energy production of a PV system. It returns the estimated annual energy production of a PV system.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Weather.Solarpotential(new SolarpotentialRequest { Lat = 37.7749d, Lon = -122.4194d });
    // TODO: Handle 'response' of type V1SolarpotentialResponse
}
catch (ApiException<SolarpotentialError> ex)
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

<code>[SolarpotentialRequest](src/ApiVerve/Requests/Weather/SolarpotentialRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SolarpotentialResponse](src/ApiVerve/Models/V1SolarpotentialResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SolarpotentialError](src/ApiVerve/Errors/SolarpotentialError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1SunrisesunsetResponse&gt; Sunrisesunset(SunrisesunsetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the sunrise and sunset times for a given location

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Weather.Sunrisesunset(new SunrisesunsetRequest
    {
        Lat = 36.72016d,
        Lon = -4.42034d,
        Date = "01-16-2026",
    });
    // TODO: Handle 'response' of type V1SunrisesunsetResponse
}
catch (ApiException<SunrisesunsetError> ex)
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

<code>[SunrisesunsetRequest](src/ApiVerve/Requests/Weather/SunrisesunsetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SunrisesunsetResponse](src/ApiVerve/Models/V1SunrisesunsetResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[SunrisesunsetError](src/ApiVerve/Errors/SunrisesunsetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WeatherforecastResponse&gt; Weatherforecast(WeatherforecastRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current weather for a given location

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Weather.Weatherforecast(new WeatherforecastRequest { City = "San Francisco" });
    // TODO: Handle 'response' of type V1WeatherforecastResponse
}
catch (ApiException<WeatherforecastError> ex)
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

<code>[WeatherforecastRequest](src/ApiVerve/Requests/Weather/WeatherforecastRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WeatherforecastResponse](src/ApiVerve/Models/V1WeatherforecastResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WeatherforecastError](src/ApiVerve/Errors/WeatherforecastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WeatherseasonsResponse&gt; Weatherseasons(WeatherseasonsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the dates of the solstice and equinox for a given year

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Weather.Weatherseasons(new WeatherseasonsRequest { Year = 2024 });
    // TODO: Handle 'response' of type V1WeatherseasonsResponse
}
catch (ApiException<WeatherseasonsError> ex)
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

<code>[WeatherseasonsRequest](src/ApiVerve/Requests/Weather/WeatherseasonsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WeatherseasonsResponse](src/ApiVerve/Models/V1WeatherseasonsResponse.cs)</code>

**OnError**: <code>[ApiException](src/ApiVerve/Core/Exceptions/ApiException.cs)&lt;[WeatherseasonsError](src/ApiVerve/Errors/WeatherseasonsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

