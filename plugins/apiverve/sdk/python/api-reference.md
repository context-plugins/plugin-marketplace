# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [ApiVerveClient](api_verve/client.py)

## AiComputerVision

> Source: [AiComputerVision](api_verve/apis/ai_computer_vision.py)

<details>
<summary><code>def articleideas(topic: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ArticleideasResponse</code></summary>

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

**Sync**

```python
try:
    response = client.ai_computer_vision.articleideas("software and technology")
    # TODO: Handle 'response' of type V1ArticleideasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArticleideasErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_computer_vision.articleideas("software and technology")
    # TODO: Handle 'response' of type V1ArticleideasResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArticleideasErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>topic</code> | <code>str</code> | The topic for which you want to generate article ideas (up to 50 characters) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ArticleideasResponse](api_verve/models/v1_articleideas_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ArticleideasErrorBody](api_verve/errors/articleideas_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def codedetector(body: V1CodedetectorRequest | V1CodedetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1CodedetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.ai_computer_vision.codedetector(V1CodedetectorRequest(code="some example string"))
    # TODO: Handle 'response' of type V1CodedetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CodedetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_computer_vision.codedetector(V1CodedetectorRequest(code="some example string"))
    # TODO: Handle 'response' of type V1CodedetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CodedetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CodedetectorRequest](api_verve/models/v1_codedetector_request.py) \| [V1CodedetectorRequestDict](api_verve/models/v1_codedetector_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CodedetectorResponse](api_verve/models/v1_codedetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CodedetectorErrorBody](api_verve/errors/codedetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def imagecaption(image: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> V1ImagecaptionResponse</code></summary>

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

**Sync**

```python
try:
    response = client.ai_computer_vision.imagecaption(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type V1ImagecaptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImagecaptionErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_computer_vision.imagecaption(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type V1ImagecaptionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImagecaptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ImagecaptionResponse](api_verve/models/v1_imagecaption_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ImagecaptionErrorBody](api_verve/errors/imagecaption_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def imagetotext(image: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> V1ImagetotextResponse</code></summary>

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

**Sync**

```python
try:
    response = client.ai_computer_vision.imagetotext(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type V1ImagetotextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImagetotextErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_computer_vision.imagetotext(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type V1ImagetotextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImagetotextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ImagetotextResponse](api_verve/models/v1_imagetotext_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ImagetotextErrorBody](api_verve/errors/imagetotext_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def languagedetector(body: V1LanguagedetectorRequest | V1LanguagedetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1LanguagedetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.ai_computer_vision.languagedetector(V1LanguagedetectorRequest(text="some example string"))
    # TODO: Handle 'response' of type V1LanguagedetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LanguagedetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_computer_vision.languagedetector(
        V1LanguagedetectorRequest(text="some example string")
    )
    # TODO: Handle 'response' of type V1LanguagedetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LanguagedetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1LanguagedetectorRequest](api_verve/models/v1_languagedetector_request.py) \| [V1LanguagedetectorRequestDict](api_verve/models/v1_languagedetector_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LanguagedetectorResponse](api_verve/models/v1_languagedetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LanguagedetectorErrorBody](api_verve/errors/languagedetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sentimentanalysis(body: V1SentimentanalysisRequest | V1SentimentanalysisRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SentimentanalysisResponse</code></summary>

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

**Sync**

```python
try:
    response = client.ai_computer_vision.sentimentanalysis(V1SentimentanalysisRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SentimentanalysisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SentimentanalysisErrorBody
```

**Async**

```python
try:
    response = await async_client.ai_computer_vision.sentimentanalysis(
        V1SentimentanalysisRequest(text="some example string")
    )
    # TODO: Handle 'response' of type V1SentimentanalysisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SentimentanalysisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SentimentanalysisRequest](api_verve/models/v1_sentimentanalysis_request.py) \| [V1SentimentanalysisRequestDict](api_verve/models/v1_sentimentanalysis_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SentimentanalysisResponse](api_verve/models/v1_sentimentanalysis_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SentimentanalysisErrorBody](api_verve/errors/sentimentanalysis_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Astrology

> Source: [Astrology](api_verve/apis/astrology.py)

<details>
<summary><code>def chinesezodiac(date: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ChinesezodiacResponse</code></summary>

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

**Sync**

```python
try:
    response = client.astrology.chinesezodiac("1990-01-15")
    # TODO: Handle 'response' of type V1ChinesezodiacResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChinesezodiacErrorBody
```

**Async**

```python
try:
    response = await async_client.astrology.chinesezodiac("1990-01-15")
    # TODO: Handle 'response' of type V1ChinesezodiacResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChinesezodiacErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str</code> | The date in YYYY-MM-DD format (years 1900-2100) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ChinesezodiacResponse](api_verve/models/v1_chinesezodiac_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ChinesezodiacErrorBody](api_verve/errors/chinesezodiac_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def horoscope(sign: str, *, request_options: RequestOptionsOrDict | None = None) -> V1HoroscopeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.astrology.horoscope("aries")
    # TODO: Handle 'response' of type V1HoroscopeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HoroscopeErrorBody
```

**Async**

```python
try:
    response = await async_client.astrology.horoscope("aries")
    # TODO: Handle 'response' of type V1HoroscopeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HoroscopeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sign</code> | <code>str</code> | The zodiac sign for which you want to get the horoscope |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HoroscopeResponse](api_verve/models/v1_horoscope_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HoroscopeErrorBody](api_verve/errors/horoscope_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def moonphases(*, today: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MoonphasesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.astrology.moonphases(today=True)
    # TODO: Handle 'response' of type V1MoonphasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MoonphasesErrorBody
```

**Async**

```python
try:
    response = await async_client.astrology.moonphases(today=True)
    # TODO: Handle 'response' of type V1MoonphasesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MoonphasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>today</code> | <code>bool \| None</code> | Get the moon phase for today<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MoonphasesResponse](api_verve/models/v1_moonphases_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MoonphasesErrorBody](api_verve/errors/moonphases_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def moonposition(lat: float, lon: float, *, date: str | None = None, time: str | None = None, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MoonpositionResponse</code></summary>

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

**Sync**

```python
try:
    response = client.astrology.moonposition(
        37.7749, -122.4194, date="01-16-2026", time="14:30", timezone="America/Los_Angeles"
    )
    # TODO: Handle 'response' of type V1MoonpositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MoonpositionErrorBody
```

**Async**

```python
try:
    response = await async_client.astrology.moonposition(
        37.7749, -122.4194, date="01-16-2026", time="14:30", timezone="America/Los_Angeles"
    )
    # TODO: Handle 'response' of type V1MoonpositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MoonpositionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | The latitude of the location |
| <code>lon</code> | <code>float</code> | The longitude of the location |
| <code>date</code> | <code>str \| None</code> | The date to get the moon position data for (MM-dd-yyyy)<br>**Default**: <code>None</code> |
| <code>time</code> | <code>str \| None</code> | The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided<br>**Default**: <code>None</code> |
| <code>timezone</code> | <code>str \| None</code> | IANA timezone name the date and time are given in. Defaults to the timezone of the supplied coordinates<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MoonpositionResponse](api_verve/models/v1_moonposition_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MoonpositionErrorBody](api_verve/errors/moonposition_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def planetpositions(body: V1PlanetpositionsRequest | V1PlanetpositionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1PlanetpositionsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.astrology.planetpositions(
        V1PlanetpositionsRequest(lat=1.5, lon=1.5, planet="some example string")
    )
    # TODO: Handle 'response' of type V1PlanetpositionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlanetpositionsErrorBody
```

**Async**

```python
try:
    response = await async_client.astrology.planetpositions(
        V1PlanetpositionsRequest(lat=1.5, lon=1.5, planet="some example string")
    )
    # TODO: Handle 'response' of type V1PlanetpositionsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlanetpositionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1PlanetpositionsRequest](api_verve/models/v1_planetpositions_request.py) \| [V1PlanetpositionsRequestDict](api_verve/models/v1_planetpositions_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PlanetpositionsResponse](api_verve/models/v1_planetpositions_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PlanetpositionsErrorBody](api_verve/errors/planetpositions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sunposition(lat: float, lon: float, *, date: str | None = None, time: str | None = None, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SunpositionResponse</code></summary>

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

**Sync**

```python
try:
    response = client.astrology.sunposition(
        37.7749, -122.4194, date="01-16-2026", time="14:30", timezone="America/Los_Angeles"
    )
    # TODO: Handle 'response' of type V1SunpositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SunpositionErrorBody
```

**Async**

```python
try:
    response = await async_client.astrology.sunposition(
        37.7749, -122.4194, date="01-16-2026", time="14:30", timezone="America/Los_Angeles"
    )
    # TODO: Handle 'response' of type V1SunpositionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SunpositionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | The latitude of the location |
| <code>lon</code> | <code>float</code> | The longitude of the location |
| <code>date</code> | <code>str \| None</code> | The date to get the sun position data for (MM-DD-YYYY)<br>**Default**: <code>None</code> |
| <code>time</code> | <code>str \| None</code> | The time of day for the calculation (HH:mm format, 24-hour), read in the timezone of the coordinates. Defaults to 00:00 if not provided<br>**Default**: <code>None</code> |
| <code>timezone</code> | <code>str \| None</code> | IANA timezone to read the date and time in, such as America/Los_Angeles. Defaults to the timezone of the coordinates<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SunpositionResponse](api_verve/models/v1_sunposition_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SunpositionErrorBody](api_verve/errors/sunposition_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Calendar

> Source: [Calendar](api_verve/apis/calendar.py)

<details>
<summary><code>def agecalculator(dob: str, *, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1AgecalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.calendar.agecalculator("1990-08-02", timezone="America/Chicago")
    # TODO: Handle 'response' of type V1AgecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AgecalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.calendar.agecalculator("1990-08-02", timezone="America/Chicago")
    # TODO: Handle 'response' of type V1AgecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AgecalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dob</code> | <code>str</code> | The date of birth to calculate the age from (format: YYYY-MM-DD) |
| <code>timezone</code> | <code>str \| None</code> | IANA timezone used to interpret the date of birth and to determine "today" when computing the age<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AgecalculatorResponse](api_verve/models/v1_agecalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AgecalculatorErrorBody](api_verve/errors/agecalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datecalculator(start: str, end: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DatecalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.calendar.datecalculator("2022-01-01", "2024-08-31")
    # TODO: Handle 'response' of type V1DatecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatecalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.calendar.datecalculator("2022-01-01", "2024-08-31")
    # TODO: Handle 'response' of type V1DatecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatecalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start</code> | <code>str</code> | The start date for calculating the difference (format: YYYY-MM-DD) |
| <code>end</code> | <code>str</code> | The end date for calculating the difference (format: YYYY-MM-DD) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DatecalculatorResponse](api_verve/models/v1_datecalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DatecalculatorErrorBody](api_verve/errors/datecalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def liturgicalcalendar(*, month: int | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1LiturgicalcalendarResponse</code></summary>

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

**Sync**

```python
try:
    response = client.calendar.liturgicalcalendar(month=2, year=2025)
    # TODO: Handle 'response' of type V1LiturgicalcalendarResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LiturgicalcalendarErrorBody
```

**Async**

```python
try:
    response = await async_client.calendar.liturgicalcalendar(month=2, year=2025)
    # TODO: Handle 'response' of type V1LiturgicalcalendarResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LiturgicalcalendarErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>month</code> | <code>int \| None</code> | The month to get Liturgical Calendar data for (default: current month)<br>**Default**: <code>None</code> |
| <code>year</code> | <code>int \| None</code> | The year to get Liturgical Calendar data for (default: current year)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LiturgicalcalendarResponse](api_verve/models/v1_liturgicalcalendar_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LiturgicalcalendarErrorBody](api_verve/errors/liturgicalcalendar_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def workingdays(country: str, *, month: int | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1WorkingdaysResponse</code></summary>

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

**Sync**

```python
try:
    response = client.calendar.workingdays("US", month=10, year=2026)
    # TODO: Handle 'response' of type V1WorkingdaysResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WorkingdaysErrorBody
```

**Async**

```python
try:
    response = await async_client.calendar.workingdays("US", month=10, year=2026)
    # TODO: Handle 'response' of type V1WorkingdaysResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WorkingdaysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The 2-letter country code you want to get the number of working days for |
| <code>month</code> | <code>int \| None</code> | The month you want to get the number of working days for<br>**Default**: <code>None</code> |
| <code>year</code> | <code>int \| None</code> | The year you want to get the number of working days for<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WorkingdaysResponse](api_verve/models/v1_workingdays_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WorkingdaysErrorBody](api_verve/errors/workingdays_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def worldholidays(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1WorldholidaysResponse</code></summary>

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

**Sync**

```python
try:
    response = client.calendar.worldholidays("US", year=2026)
    # TODO: Handle 'response' of type V1WorldholidaysResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WorldholidaysErrorBody
```

**Async**

```python
try:
    response = await async_client.calendar.worldholidays("US", year=2026)
    # TODO: Handle 'response' of type V1WorldholidaysResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WorldholidaysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The 2-letter country code for which you want to get the holidays |
| <code>year</code> | <code>int \| None</code> | The year for which you want to get the holidays<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WorldholidaysResponse](api_verve/models/v1_worldholidays_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WorldholidaysErrorBody](api_verve/errors/worldholidays_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataConversion

> Source: [DataConversion](api_verve/apis/data_conversion.py)

<details>
<summary><code>def ascii85encoder(text: str, *, action: str | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1Ascii85EncoderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.ascii85encoder("Hello World", action="encode", format_="standard")
    # TODO: Handle 'response' of type V1Ascii85EncoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Ascii85EncoderErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.ascii85encoder("Hello World", action="encode", format_="standard")
    # TODO: Handle 'response' of type V1Ascii85EncoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Ascii85EncoderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text</code> | <code>str</code> | Text to encode |
| <code>action</code> | <code>str \| None</code> | Action to perform<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>str \| None</code> | Output format<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1Ascii85EncoderResponse](api_verve/models/v1_ascii85_encoder_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[Ascii85EncoderErrorBody](api_verve/errors/ascii85_encoder_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def base64(text: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1Base64Response</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.base64("Hello World", action="encode")
    # TODO: Handle 'response' of type V1Base64Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Base64ErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.base64("Hello World", action="encode")
    # TODO: Handle 'response' of type V1Base64Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Base64ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text</code> | <code>str</code> | The text to encode |
| <code>action</code> | <code>str \| None</code> | The action to perform<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1Base64Response](api_verve/models/v1_base64_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[Base64ErrorBody](api_verve/errors/base64_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def colorconverter(hex_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ColorconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.colorconverter("FF0000")
    # TODO: Handle 'response' of type V1ColorconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColorconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.colorconverter("FF0000")
    # TODO: Handle 'response' of type V1ColorconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColorconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>hex_</code> | <code>str</code> | The color in hexadecimal format (e.g., FF0000). Make sure you ommit the # |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColorconverterResponse](api_verve/models/v1_colorconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ColorconverterErrorBody](api_verve/errors/colorconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def csvtojson(body: V1CsvtojsonRequest | V1CsvtojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1CsvtojsonResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.csvtojson(V1CsvtojsonRequest(csv="some example string"))
    # TODO: Handle 'response' of type V1CsvtojsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CsvtojsonErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.csvtojson(V1CsvtojsonRequest(csv="some example string"))
    # TODO: Handle 'response' of type V1CsvtojsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CsvtojsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CsvtojsonRequest](api_verve/models/v1_csvtojson_request.py) \| [V1CsvtojsonRequestDict](api_verve/models/v1_csvtojson_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CsvtojsonResponse](api_verve/models/v1_csvtojson_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CsvtojsonErrorBody](api_verve/errors/csvtojson_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def filesizeformatter(bytes_: int, *, unit: str | None = None, precision: int | None = None, standard: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1FilesizeformatterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.filesizeformatter(1073741824, unit="GB", precision=2, standard="binary")
    # TODO: Handle 'response' of type V1FilesizeformatterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FilesizeformatterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.filesizeformatter(
        1073741824, unit="GB", precision=2, standard="binary"
    )
    # TODO: Handle 'response' of type V1FilesizeformatterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FilesizeformatterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bytes_</code> | <code>int</code> | Number of bytes to format |
| <code>unit</code> | <code>str \| None</code> | Specific target unit (optional, auto-selects best unit if not specified)<br>**Default**: <code>None</code> |
| <code>precision</code> | <code>int \| None</code> | Decimal places (0-10)<br>**Default**: <code>None</code> |
| <code>standard</code> | <code>str \| None</code> | Standard to use: binary (1024) or decimal (1000)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FilesizeformatterResponse](api_verve/models/v1_filesizeformatter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[FilesizeformatterErrorBody](api_verve/errors/filesizeformatter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def htmlentities(body: V1HtmlentitiesRequest | V1HtmlentitiesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1HtmlentitiesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.htmlentities(V1HtmlentitiesRequest(html="some example string"))
    # TODO: Handle 'response' of type V1HtmlentitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HtmlentitiesErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.htmlentities(V1HtmlentitiesRequest(html="some example string"))
    # TODO: Handle 'response' of type V1HtmlentitiesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HtmlentitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1HtmlentitiesRequest](api_verve/models/v1_htmlentities_request.py) \| [V1HtmlentitiesRequestDict](api_verve/models/v1_htmlentities_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HtmlentitiesResponse](api_verve/models/v1_htmlentities_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HtmlentitiesErrorBody](api_verve/errors/htmlentities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def htmltoimage(body: V1HtmltoimageRequest | V1HtmltoimageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1HtmltoimageResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.htmltoimage(V1HtmltoimageRequest(html="some example string"))
    # TODO: Handle 'response' of type V1HtmltoimageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HtmltoimageErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.htmltoimage(V1HtmltoimageRequest(html="some example string"))
    # TODO: Handle 'response' of type V1HtmltoimageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HtmltoimageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1HtmltoimageRequest](api_verve/models/v1_htmltoimage_request.py) \| [V1HtmltoimageRequestDict](api_verve/models/v1_htmltoimage_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HtmltoimageResponse](api_verve/models/v1_htmltoimage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HtmltoimageErrorBody](api_verve/errors/htmltoimage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jsontocsv(body: V1JsontocsvRequest | V1JsontocsvRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1JsontocsvResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.jsontocsv(V1JsontocsvRequest(json_value="some example string"))
    # TODO: Handle 'response' of type V1JsontocsvResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JsontocsvErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.jsontocsv(V1JsontocsvRequest(json_value="some example string"))
    # TODO: Handle 'response' of type V1JsontocsvResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JsontocsvErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1JsontocsvRequest](api_verve/models/v1_jsontocsv_request.py) \| [V1JsontocsvRequestDict](api_verve/models/v1_jsontocsv_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JsontocsvResponse](api_verve/models/v1_jsontocsv_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[JsontocsvErrorBody](api_verve/errors/jsontocsv_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jsontojsonp(body: V1JsontojsonpRequest | V1JsontojsonpRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1JsontojsonpResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.jsontojsonp(V1JsontojsonpRequest(json_value="some example string"))
    # TODO: Handle 'response' of type V1JsontojsonpResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JsontojsonpErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.jsontojsonp(V1JsontojsonpRequest(json_value="some example string"))
    # TODO: Handle 'response' of type V1JsontojsonpResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JsontojsonpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1JsontojsonpRequest](api_verve/models/v1_jsontojsonp_request.py) \| [V1JsontojsonpRequestDict](api_verve/models/v1_jsontojsonp_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JsontojsonpResponse](api_verve/models/v1_jsontojsonp_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[JsontojsonpErrorBody](api_verve/errors/jsontojsonp_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jwtdecoder(body: V1JwtdecoderRequest | V1JwtdecoderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1JwtdecoderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.jwtdecoder(V1JwtdecoderRequest(token="some example string"))
    # TODO: Handle 'response' of type V1JwtdecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JwtdecoderErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.jwtdecoder(V1JwtdecoderRequest(token="some example string"))
    # TODO: Handle 'response' of type V1JwtdecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JwtdecoderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1JwtdecoderRequest](api_verve/models/v1_jwtdecoder_request.py) \| [V1JwtdecoderRequestDict](api_verve/models/v1_jwtdecoder_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JwtdecoderResponse](api_verve/models/v1_jwtdecoder_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[JwtdecoderErrorBody](api_verve/errors/jwtdecoder_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdowntable(body: V1MarkdowntableRequest | V1MarkdowntableRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MarkdowntableResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.markdowntable(
        V1MarkdowntableRequest(headers="some example string", rows="some example string")
    )
    # TODO: Handle 'response' of type V1MarkdowntableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdowntableErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.markdowntable(
        V1MarkdowntableRequest(headers="some example string", rows="some example string")
    )
    # TODO: Handle 'response' of type V1MarkdowntableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdowntableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MarkdowntableRequest](api_verve/models/v1_markdowntable_request.py) \| [V1MarkdowntableRequestDict](api_verve/models/v1_markdowntable_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdowntableResponse](api_verve/models/v1_markdowntable_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MarkdowntableErrorBody](api_verve/errors/markdowntable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdowntohtml(body: V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MarkdowntohtmlResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.markdowntohtml(V1MarkdowntohtmlRequest(markdown="some example string"))
    # TODO: Handle 'response' of type V1MarkdowntohtmlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdowntohtmlErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.markdowntohtml(
        V1MarkdowntohtmlRequest(markdown="some example string")
    )
    # TODO: Handle 'response' of type V1MarkdowntohtmlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdowntohtmlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MarkdowntohtmlRequest](api_verve/models/v1_markdowntohtml_request.py) \| [V1MarkdowntohtmlRequestDict](api_verve/models/v1_markdowntohtml_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdowntohtmlResponse](api_verve/models/v1_markdowntohtml_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MarkdowntohtmlErrorBody](api_verve/errors/markdowntohtml_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdowntoimage(body: V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MarkdowntoimageResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.markdowntoimage(V1MarkdowntoimageRequest(markdown="some example string"))
    # TODO: Handle 'response' of type V1MarkdowntoimageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdowntoimageErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.markdowntoimage(
        V1MarkdowntoimageRequest(markdown="some example string")
    )
    # TODO: Handle 'response' of type V1MarkdowntoimageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdowntoimageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MarkdowntoimageRequest](api_verve/models/v1_markdowntoimage_request.py) \| [V1MarkdowntoimageRequestDict](api_verve/models/v1_markdowntoimage_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdowntoimageResponse](api_verve/models/v1_markdowntoimage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MarkdowntoimageErrorBody](api_verve/errors/markdowntoimage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdowntopdf(body: V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MarkdowntopdfResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.markdowntopdf(V1MarkdowntopdfRequest(markdown="some example string"))
    # TODO: Handle 'response' of type V1MarkdowntopdfResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdowntopdfErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.markdowntopdf(V1MarkdowntopdfRequest(markdown="some example string"))
    # TODO: Handle 'response' of type V1MarkdowntopdfResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdowntopdfErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MarkdowntopdfRequest](api_verve/models/v1_markdowntopdf_request.py) \| [V1MarkdowntopdfRequestDict](api_verve/models/v1_markdowntopdf_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdowntopdfResponse](api_verve/models/v1_markdowntopdf_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MarkdowntopdfErrorBody](api_verve/errors/markdowntopdf_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def math(body: V1MathRequest | V1MathRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MathResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.math(V1MathRequest(operation="some example string", a=1.5, b=1.5))
    # TODO: Handle 'response' of type V1MathResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MathErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.math(V1MathRequest(operation="some example string", a=1.5, b=1.5))
    # TODO: Handle 'response' of type V1MathResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MathErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MathRequest](api_verve/models/v1_math_request.py) \| [V1MathRequestDict](api_verve/models/v1_math_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MathResponse](api_verve/models/v1_math_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MathErrorBody](api_verve/errors/math_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def meetingtimeconverter(time: str, from_timezone: str, to_timezone: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MeetingtimeconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.meetingtimeconverter(
        "14:30", "America/New_York", "Europe/London", date="2024-03-15"
    )
    # TODO: Handle 'response' of type V1MeetingtimeconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MeetingtimeconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.meetingtimeconverter(
        "14:30", "America/New_York", "Europe/London", date="2024-03-15"
    )
    # TODO: Handle 'response' of type V1MeetingtimeconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MeetingtimeconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>time</code> | <code>str</code> | Time in HH:MM format (24-hour) |
| <code>from_timezone</code> | <code>str</code> | Source IANA timezone identifier |
| <code>to_timezone</code> | <code>str</code> | Target IANA timezone identifier |
| <code>date</code> | <code>str \| None</code> | Optional date in YYYY-MM-DD format (defaults to today)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MeetingtimeconverterResponse](api_verve/models/v1_meetingtimeconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MeetingtimeconverterErrorBody](api_verve/errors/meetingtimeconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numberbaseconverter(value: str, *, from_: int | None = None, to: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1NumberbaseconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.numberbaseconverter("255", from_=10, to=10)
    # TODO: Handle 'response' of type V1NumberbaseconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumberbaseconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.numberbaseconverter("255", from_=10, to=10)
    # TODO: Handle 'response' of type V1NumberbaseconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumberbaseconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>value</code> | <code>str</code> | The number to convert |
| <code>from_</code> | <code>int \| None</code> | Source base (default: 10)<br>**Default**: <code>None</code> |
| <code>to</code> | <code>int \| None</code> | Target base (returns all common bases if not specified)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NumberbaseconverterResponse](api_verve/models/v1_numberbaseconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NumberbaseconverterErrorBody](api_verve/errors/numberbaseconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbertowords(number: float, *, request_options: RequestOptionsOrDict | None = None) -> V1NumbertowordsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.numbertowords(975.07)
    # TODO: Handle 'response' of type V1NumbertowordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbertowordsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.numbertowords(975.07)
    # TODO: Handle 'response' of type V1NumbertowordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NumbertowordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>number</code> | <code>float</code> | The number to convert to words |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NumbertowordsResponse](api_verve/models/v1_numbertowords_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NumbertowordsErrorBody](api_verve/errors/numbertowords_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def placeholdertext(*, style: str | None = None, paragraphs: int | None = None, sentences: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PlaceholdertextResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.placeholdertext(style="tech", paragraphs=3, sentences=5)
    # TODO: Handle 'response' of type V1PlaceholdertextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceholdertextErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.placeholdertext(style="tech", paragraphs=3, sentences=5)
    # TODO: Handle 'response' of type V1PlaceholdertextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlaceholdertextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>style</code> | <code>str \| None</code> | The style of placeholder text<br>**Default**: <code>None</code> |
| <code>paragraphs</code> | <code>int \| None</code> | Number of paragraphs to generate<br>**Default**: <code>None</code> |
| <code>sentences</code> | <code>int \| None</code> | Number of sentences per paragraph<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PlaceholdertextResponse](api_verve/models/v1_placeholdertext_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PlaceholdertextErrorBody](api_verve/errors/placeholdertext_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def punycode(text: str, *, mode: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PunycodeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.punycode("münchen.de", mode="encode")
    # TODO: Handle 'response' of type V1PunycodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PunycodeErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.punycode("münchen.de", mode="encode")
    # TODO: Handle 'response' of type V1PunycodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PunycodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text</code> | <code>str</code> | Unicode text or domain to encode (max 1000 characters) |
| <code>mode</code> | <code>str \| None</code> | Conversion mode<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PunycodeResponse](api_verve/models/v1_punycode_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PunycodeErrorBody](api_verve/errors/punycode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def querystringbuilder(body: V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1QuerystringbuilderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.querystringbuilder(V1QuerystringbuilderRequest(params="some example string"))
    # TODO: Handle 'response' of type V1QuerystringbuilderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QuerystringbuilderErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.querystringbuilder(
        V1QuerystringbuilderRequest(params="some example string")
    )
    # TODO: Handle 'response' of type V1QuerystringbuilderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QuerystringbuilderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1QuerystringbuilderRequest](api_verve/models/v1_querystringbuilder_request.py) \| [V1QuerystringbuilderRequestDict](api_verve/models/v1_querystringbuilder_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1QuerystringbuilderResponse](api_verve/models/v1_querystringbuilder_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[QuerystringbuilderErrorBody](api_verve/errors/querystringbuilder_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def relativetimeformatter(timestamp: str, *, reference: str | None = None, style: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1RelativetimeformatterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.relativetimeformatter(
        "1609459200", reference="2024-06-01T00:00:00Z", style="short"
    )
    # TODO: Handle 'response' of type V1RelativetimeformatterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RelativetimeformatterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.relativetimeformatter(
        "1609459200", reference="2024-06-01T00:00:00Z", style="short"
    )
    # TODO: Handle 'response' of type V1RelativetimeformatterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RelativetimeformatterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>str</code> | Unix timestamp in seconds or milliseconds |
| <code>reference</code> | <code>str \| None</code> | Reference time to compare against (default: current time)<br>**Default**: <code>None</code> |
| <code>style</code> | <code>str \| None</code> | Output style<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RelativetimeformatterResponse](api_verve/models/v1_relativetimeformatter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RelativetimeformatterErrorBody](api_verve/errors/relativetimeformatter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def romanconverter(number: int, *, request_options: RequestOptionsOrDict | None = None) -> V1RomanconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.romanconverter(2024)
    # TODO: Handle 'response' of type V1RomanconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RomanconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.romanconverter(2024)
    # TODO: Handle 'response' of type V1RomanconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RomanconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>number</code> | <code>int</code> | The number to convert to Roman numerals |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RomanconverterResponse](api_verve/models/v1_romanconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RomanconverterErrorBody](api_verve/errors/romanconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def texttocolor(color: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TexttocolorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.texttocolor("turquoise")
    # TODO: Handle 'response' of type V1TexttocolorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TexttocolorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.texttocolor("turquoise")
    # TODO: Handle 'response' of type V1TexttocolorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TexttocolorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>color</code> | <code>str</code> | The text to convert the color from |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TexttocolorResponse](api_verve/models/v1_texttocolor_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TexttocolorErrorBody](api_verve/errors/texttocolor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unicodeescape(body: V1UnicodeescapeRequest | V1UnicodeescapeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1UnicodeescapeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.unicodeescape(V1UnicodeescapeRequest(text="some example string"))
    # TODO: Handle 'response' of type V1UnicodeescapeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnicodeescapeErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.unicodeescape(V1UnicodeescapeRequest(text="some example string"))
    # TODO: Handle 'response' of type V1UnicodeescapeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnicodeescapeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1UnicodeescapeRequest](api_verve/models/v1_unicodeescape_request.py) \| [V1UnicodeescapeRequestDict](api_verve/models/v1_unicodeescape_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnicodeescapeResponse](api_verve/models/v1_unicodeescape_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UnicodeescapeErrorBody](api_verve/errors/unicodeescape_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unitconverter(value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None) -> V1UnitconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.unitconverter(100, "lb", "kg")
    # TODO: Handle 'response' of type V1UnitconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnitconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.unitconverter(100, "lb", "kg")
    # TODO: Handle 'response' of type V1UnitconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnitconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>value</code> | <code>float</code> | The value to convert |
| <code>from_</code> | <code>str</code> | The unit to convert from |
| <code>to</code> | <code>str</code> | The unit to convert to |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnitconverterResponse](api_verve/models/v1_unitconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UnitconverterErrorBody](api_verve/errors/unitconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unixtimestamp(timestamp: str, *, format_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UnixtimestampResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.unixtimestamp("1609459200", format_="seconds")
    # TODO: Handle 'response' of type V1UnixtimestampResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnixtimestampErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.unixtimestamp("1609459200", format_="seconds")
    # TODO: Handle 'response' of type V1UnixtimestampResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnixtimestampErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>timestamp</code> | <code>str</code> | Unix timestamp to convert |
| <code>format_</code> | <code>str \| None</code> | Timestamp format<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnixtimestampResponse](api_verve/models/v1_unixtimestamp_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UnixtimestampErrorBody](api_verve/errors/unixtimestamp_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urlencode(body: V1UrlencodeRequest | V1UrlencodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1UrlencodeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.urlencode(V1UrlencodeRequest(text="some example string"))
    # TODO: Handle 'response' of type V1UrlencodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrlencodeErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.urlencode(V1UrlencodeRequest(text="some example string"))
    # TODO: Handle 'response' of type V1UrlencodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrlencodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1UrlencodeRequest](api_verve/models/v1_urlencode_request.py) \| [V1UrlencodeRequestDict](api_verve/models/v1_urlencode_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrlencodeResponse](api_verve/models/v1_urlencode_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UrlencodeErrorBody](api_verve/errors/urlencode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urltomarkdown(body: V1UrltomarkdownRequest | V1UrltomarkdownRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1UrltomarkdownResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.urltomarkdown(V1UrltomarkdownRequest(url="some example string"))
    # TODO: Handle 'response' of type V1UrltomarkdownResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrltomarkdownErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.urltomarkdown(V1UrltomarkdownRequest(url="some example string"))
    # TODO: Handle 'response' of type V1UrltomarkdownResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrltomarkdownErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1UrltomarkdownRequest](api_verve/models/v1_urltomarkdown_request.py) \| [V1UrltomarkdownRequestDict](api_verve/models/v1_urltomarkdown_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrltomarkdownResponse](api_verve/models/v1_urltomarkdown_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UrltomarkdownErrorBody](api_verve/errors/urltomarkdown_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variablenameconverter(body: V1VariablenameconverterRequest | V1VariablenameconverterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1VariablenameconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.variablenameconverter(
        V1VariablenameconverterRequest(variables="some example string", to="some example string")
    )
    # TODO: Handle 'response' of type V1VariablenameconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablenameconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.variablenameconverter(
        V1VariablenameconverterRequest(variables="some example string", to="some example string")
    )
    # TODO: Handle 'response' of type V1VariablenameconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VariablenameconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1VariablenameconverterRequest](api_verve/models/v1_variablenameconverter_request.py) \| [V1VariablenameconverterRequestDict](api_verve/models/v1_variablenameconverter_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VariablenameconverterResponse](api_verve/models/v1_variablenameconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[VariablenameconverterErrorBody](api_verve/errors/variablenameconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def websitetotext(body: V1WebsitetotextRequest | V1WebsitetotextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WebsitetotextResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.websitetotext(V1WebsitetotextRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebsitetotextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebsitetotextErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.websitetotext(V1WebsitetotextRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebsitetotextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebsitetotextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WebsitetotextRequest](api_verve/models/v1_websitetotext_request.py) \| [V1WebsitetotextRequestDict](api_verve/models/v1_websitetotext_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebsitetotextResponse](api_verve/models/v1_websitetotext_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WebsitetotextErrorBody](api_verve/errors/websitetotext_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordstonumbers(words: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WordstonumbersResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.wordstonumbers("seven thousand six hundred and twenty")
    # TODO: Handle 'response' of type V1WordstonumbersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordstonumbersErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.wordstonumbers("seven thousand six hundred and twenty")
    # TODO: Handle 'response' of type V1WordstonumbersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordstonumbersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>words</code> | <code>str</code> | The words to convert to numbers |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordstonumbersResponse](api_verve/models/v1_wordstonumbers_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WordstonumbersErrorBody](api_verve/errors/wordstonumbers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def xmltojson(body: V1XmltojsonRequest | V1XmltojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1XmltojsonResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_conversion.xmltojson(V1XmltojsonRequest(xml="some example string"))
    # TODO: Handle 'response' of type V1XmltojsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type XmltojsonErrorBody
```

**Async**

```python
try:
    response = await async_client.data_conversion.xmltojson(V1XmltojsonRequest(xml="some example string"))
    # TODO: Handle 'response' of type V1XmltojsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type XmltojsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1XmltojsonRequest](api_verve/models/v1_xmltojson_request.py) \| [V1XmltojsonRequestDict](api_verve/models/v1_xmltojson_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1XmltojsonResponse](api_verve/models/v1_xmltojson_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[XmltojsonErrorBody](api_verve/errors/xmltojson_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataGeneration

> Source: [DataGeneration](api_verve/apis/data_generation.py)

<details>
<summary><code>def acronymgenerator(text: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AcronymgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.acronymgenerator("Application Programming Interface")
    # TODO: Handle 'response' of type V1AcronymgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcronymgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.acronymgenerator("Application Programming Interface")
    # TODO: Handle 'response' of type V1AcronymgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcronymgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text</code> | <code>str</code> | The phrase to generate an acronym from (must contain at least 2 words) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AcronymgeneratorResponse](api_verve/models/v1_acronymgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AcronymgeneratorErrorBody](api_verve/errors/acronymgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def babynamegenerator(gender: str, *, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1BabynamegeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.babynamegenerator("male", count=1, include_avatar=True)
    # TODO: Handle 'response' of type V1BabynamegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BabynamegeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.babynamegenerator("male", count=1, include_avatar=True)
    # TODO: Handle 'response' of type V1BabynamegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BabynamegeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>gender</code> | <code>str</code> | The gender for the generated names |
| <code>count</code> | <code>int \| None</code> | The number of names to generate<br>**Default**: <code>None</code> |
| <code>include_avatar</code> | <code>bool \| None</code> | Include an AI-generated child face avatar matching gender<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BabynamegeneratorResponse](api_verve/models/v1_babynamegenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BabynamegeneratorErrorBody](api_verve/errors/babynamegenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def barcodegenerator(body: V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1BarcodegeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.barcodegenerator(
        V1BarcodegeneratorRequest(data="some example string", type_="some example string")
    )
    # TODO: Handle 'response' of type V1BarcodegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BarcodegeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.barcodegenerator(
        V1BarcodegeneratorRequest(data="some example string", type_="some example string")
    )
    # TODO: Handle 'response' of type V1BarcodegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BarcodegeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1BarcodegeneratorRequest](api_verve/models/v1_barcodegenerator_request.py) \| [V1BarcodegeneratorRequestDict](api_verve/models/v1_barcodegenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BarcodegeneratorResponse](api_verve/models/v1_barcodegenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BarcodegeneratorErrorBody](api_verve/errors/barcodegenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bingocardgenerator(*, size: int | None = None, free_space: bool | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1BingocardgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.bingocardgenerator(size=5, free_space=True, image=True)
    # TODO: Handle 'response' of type V1BingocardgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BingocardgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.bingocardgenerator(size=5, free_space=True, image=True)
    # TODO: Handle 'response' of type V1BingocardgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BingocardgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>size</code> | <code>int \| None</code> | Card size (3x3 to 10x10)<br>**Default**: <code>None</code> |
| <code>free_space</code> | <code>bool \| None</code> | Include free space in center<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable bingo card image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BingocardgeneratorResponse](api_verve/models/v1_bingocardgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BingocardgeneratorErrorBody](api_verve/errors/bingocardgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def boggleboardgenerator(*, size: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1BoggleboardgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.boggleboardgenerator(size=4, image=True)
    # TODO: Handle 'response' of type V1BoggleboardgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BoggleboardgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.boggleboardgenerator(size=4, image=True)
    # TODO: Handle 'response' of type V1BoggleboardgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BoggleboardgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>size</code> | <code>int \| None</code> | Board size<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable board image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BoggleboardgeneratorResponse](api_verve/models/v1_boggleboardgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BoggleboardgeneratorErrorBody](api_verve/errors/boggleboardgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def captchagenerator(*, request_options: RequestOptionsOrDict | None = None) -> V1CaptchageneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.captchagenerator()
    # TODO: Handle 'response' of type V1CaptchageneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CaptchageneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.captchagenerator()
    # TODO: Handle 'response' of type V1CaptchageneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CaptchageneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CaptchageneratorResponse](api_verve/models/v1_captchagenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CaptchageneratorErrorBody](api_verve/errors/captchagenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cardgenerator(*, brand: str | None = None, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CardgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.cardgenerator(brand="visa", count=5, include_avatar=True)
    # TODO: Handle 'response' of type V1CardgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CardgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.cardgenerator(brand="visa", count=5, include_avatar=True)
    # TODO: Handle 'response' of type V1CardgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CardgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand</code> | <code>str \| None</code> | The brand of the card to generate<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | The number of test card numbers to generate<br>**Default**: <code>None</code> |
| <code>include_avatar</code> | <code>bool \| None</code> | Include an AI-generated face avatar for the card owner<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CardgeneratorResponse](api_verve/models/v1_cardgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CardgeneratorErrorBody](api_verve/errors/cardgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def chartgenerator(body: V1ChartgeneratorRequest | V1ChartgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ChartgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.chartgenerator(
        V1ChartgeneratorRequest(labels="some example string", datasets="some example string")
    )
    # TODO: Handle 'response' of type V1ChartgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChartgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.chartgenerator(
        V1ChartgeneratorRequest(labels="some example string", datasets="some example string")
    )
    # TODO: Handle 'response' of type V1ChartgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChartgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ChartgeneratorRequest](api_verve/models/v1_chartgenerator_request.py) \| [V1ChartgeneratorRequestDict](api_verve/models/v1_chartgenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ChartgeneratorResponse](api_verve/models/v1_chartgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ChartgeneratorErrorBody](api_verve/errors/chartgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def colorpalette(color: str, *, scheme: str | None = None, variation: str | None = None, count: int | None = None, distance: float | None = None, add_complement: bool | None = None, web_safe: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ColorpaletteResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.colorpalette(
        "FF5733", scheme="triade", variation="soft", count=5, distance=0.5, add_complement=True, web_safe=False
    )
    # TODO: Handle 'response' of type V1ColorpaletteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColorpaletteErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.colorpalette(
        "FF5733", scheme="triade", variation="soft", count=5, distance=0.5, add_complement=True, web_safe=False
    )
    # TODO: Handle 'response' of type V1ColorpaletteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColorpaletteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>color</code> | <code>str</code> | The base color to generate the palette from (HEX format without #) |
| <code>scheme</code> | <code>str \| None</code> | The color scheme type<br>**Default**: <code>None</code> |
| <code>variation</code> | <code>str \| None</code> | The color variation<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Caps how many colors are returned (1-16). Each scheme has its own ceiling and count cannot raise it - mono yields 4, contrast 8, triade and analogic 12, tetrade 16. The colorCount field reports how many were actually returned. Free tier limited to 5 colors<br>**Default**: <code>None</code> |
| <code>distance</code> | <code>float \| None</code> | Color spacing distance (0-1). Affects triade, tetrade, and analogic schemes<br>**Default**: <code>None</code> |
| <code>add_complement</code> | <code>bool \| None</code> | Add complement color to analogic scheme<br>**Default**: <code>None</code> |
| <code>web_safe</code> | <code>bool \| None</code> | Return web-safe colors only<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColorpaletteResponse](api_verve/models/v1_colorpalette_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ColorpaletteErrorBody](api_verve/errors/colorpalette_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def commentgenerator(mode: str, *, tone: str | None = None, count: int | None = None, emojis: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CommentgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.commentgenerator("text", tone="positive", count=5, emojis=True)
    # TODO: Handle 'response' of type V1CommentgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.commentgenerator("text", tone="positive", count=5, emojis=True)
    # TODO: Handle 'response' of type V1CommentgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CommentgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mode</code> | <code>str</code> | The mode of comment generation |
| <code>tone</code> | <code>str \| None</code> | The tone of the comments<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | The number of comments to generate (max 10)<br>**Default**: <code>None</code> |
| <code>emojis</code> | <code>bool \| None</code> | Whether to include emojis in the comments<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CommentgeneratorResponse](api_verve/models/v1_commentgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CommentgeneratorErrorBody](api_verve/errors/commentgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def companynamegenerator(keyword: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CompanynamegeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.companynamegenerator("systems", count=5)
    # TODO: Handle 'response' of type V1CompanynamegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompanynamegeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.companynamegenerator("systems", count=5)
    # TODO: Handle 'response' of type V1CompanynamegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompanynamegeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | The keyword to generate company names from |
| <code>count</code> | <code>int \| None</code> | The number of company names to generate<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CompanynamegeneratorResponse](api_verve/models/v1_companynamegenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CompanynamegeneratorErrorBody](api_verve/errors/companynamegenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def crongenerator(schedule: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CrongeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.crongenerator("every weekday at 9am")
    # TODO: Handle 'response' of type V1CrongeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CrongeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.crongenerator("every weekday at 9am")
    # TODO: Handle 'response' of type V1CrongeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CrongeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schedule</code> | <code>str</code> | Natural language description of the schedule (max 200 characters) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CrongeneratorResponse](api_verve/models/v1_crongenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CrongeneratorErrorBody](api_verve/errors/crongenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cuidgenerator(*, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CuidgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.cuidgenerator(count=10)
    # TODO: Handle 'response' of type V1CuidgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CuidgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.cuidgenerator(count=10)
    # TODO: Handle 'response' of type V1CuidgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CuidgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of Cuids to generate<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CuidgeneratorResponse](api_verve/models/v1_cuidgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CuidgeneratorErrorBody](api_verve/errors/cuidgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def guidgenerator(*, count: int | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1GuidgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.guidgenerator(count=3, format_="uppercase")
    # TODO: Handle 'response' of type V1GuidgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GuidgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.guidgenerator(count=3, format_="uppercase")
    # TODO: Handle 'response' of type V1GuidgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GuidgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of GUIDs to generate<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>str \| None</code> | Output format<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GuidgeneratorResponse](api_verve/models/v1_guidgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GuidgeneratorErrorBody](api_verve/errors/guidgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hashtaggenerator(body: V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1HashtaggeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.hashtaggenerator(V1HashtaggeneratorRequest(text="some example string"))
    # TODO: Handle 'response' of type V1HashtaggeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HashtaggeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.hashtaggenerator(
        V1HashtaggeneratorRequest(text="some example string")
    )
    # TODO: Handle 'response' of type V1HashtaggeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HashtaggeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1HashtaggeneratorRequest](api_verve/models/v1_hashtaggenerator_request.py) \| [V1HashtaggeneratorRequestDict](api_verve/models/v1_hashtaggenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HashtaggeneratorResponse](api_verve/models/v1_hashtaggenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HashtaggeneratorErrorBody](api_verve/errors/hashtaggenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def imeigenerator(*, brand: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ImeigeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.imeigenerator(brand="Samsung", count=1)
    # TODO: Handle 'response' of type V1ImeigeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImeigeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.imeigenerator(brand="Samsung", count=1)
    # TODO: Handle 'response' of type V1ImeigeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImeigeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>brand</code> | <code>str \| None</code> | Filter by manufacturer brand (e.g., Samsung, Apple, Nokia)<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of IMEIs to generate<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ImeigeneratorResponse](api_verve/models/v1_imeigenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ImeigeneratorErrorBody](api_verve/errors/imeigenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def initialismgenerator(body: V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1InitialismgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.initialismgenerator(V1InitialismgeneratorRequest(phrase="some example string"))
    # TODO: Handle 'response' of type V1InitialismgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InitialismgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.initialismgenerator(
        V1InitialismgeneratorRequest(phrase="some example string")
    )
    # TODO: Handle 'response' of type V1InitialismgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InitialismgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1InitialismgeneratorRequest](api_verve/models/v1_initialismgenerator_request.py) \| [V1InitialismgeneratorRequestDict](api_verve/models/v1_initialismgenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InitialismgeneratorResponse](api_verve/models/v1_initialismgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[InitialismgeneratorErrorBody](api_verve/errors/initialismgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jsonschemagenerator(body: V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1JsonschemageneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.jsonschemagenerator(
        V1JsonschemageneratorRequest(json_value="some example string")
    )
    # TODO: Handle 'response' of type V1JsonschemageneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JsonschemageneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.jsonschemagenerator(
        V1JsonschemageneratorRequest(json_value="some example string")
    )
    # TODO: Handle 'response' of type V1JsonschemageneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JsonschemageneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1JsonschemageneratorRequest](api_verve/models/v1_jsonschemagenerator_request.py) \| [V1JsonschemageneratorRequestDict](api_verve/models/v1_jsonschemagenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JsonschemageneratorResponse](api_verve/models/v1_jsonschemagenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[JsonschemageneratorErrorBody](api_verve/errors/jsonschemagenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def loremipsumgenerator(*, paragraphs: int | None = None, startwithlorem: bool | None = None, maxlength: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1LoremipsumgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.loremipsumgenerator(paragraphs=3, startwithlorem=True, maxlength=100)
    # TODO: Handle 'response' of type V1LoremipsumgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LoremipsumgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.loremipsumgenerator(paragraphs=3, startwithlorem=True, maxlength=100)
    # TODO: Handle 'response' of type V1LoremipsumgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LoremipsumgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paragraphs</code> | <code>int \| None</code> | The number of paragraphs to generate<br>**Default**: <code>None</code> |
| <code>startwithlorem</code> | <code>bool \| None</code> | Start the text with 'Lorem ipsum dolor sit amet'<br>**Default**: <code>None</code> |
| <code>maxlength</code> | <code>int \| None</code> | The maximum length of the generated text (0 for no limit)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LoremipsumgeneratorResponse](api_verve/models/v1_loremipsumgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LoremipsumgeneratorErrorBody](api_verve/errors/loremipsumgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def passwordgenerator(*, count: int | None = None, length: int | None = None, complexity: str | None = None, type_: str | None = None, include_numbers: bool | None = None, include_symbols: bool | None = None, include_uppercase: bool | None = None, include_lowercase: bool | None = None, exclude_similar: bool | None = None, exclude_ambiguous: bool | None = None, mixed_case: bool | None = None, strict: bool | None = None, word_count: int | None = None, separator: str | None = None, capitalize: bool | None = None, analyze: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PasswordgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.passwordgenerator(
        count=10,
        length=12,
        complexity="strong",
        type_="random",
        include_numbers=True,
        include_symbols=True,
        include_uppercase=True,
        include_lowercase=True,
        exclude_similar=True,
        exclude_ambiguous=True,
        mixed_case=True,
        strict=True,
        word_count=4,
        separator="-",
        capitalize=True,
        analyze=True,
    )
    # TODO: Handle 'response' of type V1PasswordgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PasswordgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.passwordgenerator(
        count=10,
        length=12,
        complexity="strong",
        type_="random",
        include_numbers=True,
        include_symbols=True,
        include_uppercase=True,
        include_lowercase=True,
        exclude_similar=True,
        exclude_ambiguous=True,
        mixed_case=True,
        strict=True,
        word_count=4,
        separator="-",
        capitalize=True,
        analyze=True,
    )
    # TODO: Handle 'response' of type V1PasswordgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PasswordgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | The number of passwords to generate<br>**Default**: <code>None</code> |
| <code>length</code> | <code>int \| None</code> | The length of the password to generate<br>**Default**: <code>None</code> |
| <code>complexity</code> | <code>str \| None</code> | The complexity of the password. Only applies when type is random<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | The kind of password to generate. random uses the complexity preset, pronounceable builds readable syllables, passphrase joins dictionary words, and custom honours the include/exclude switches below<br>**Default**: <code>None</code> |
| <code>include_numbers</code> | <code>bool \| None</code> | Include digits. Applies to custom and pronounceable, and to random at simple complexity<br>**Default**: <code>None</code> |
| <code>include_symbols</code> | <code>bool \| None</code> | Include punctuation symbols. Applies to custom, and to random at medium complexity<br>**Default**: <code>None</code> |
| <code>include_uppercase</code> | <code>bool \| None</code> | Include uppercase letters. Applies to custom, and to random at simple complexity<br>**Default**: <code>None</code> |
| <code>include_lowercase</code> | <code>bool \| None</code> | Include lowercase letters in a custom password. Set false to build from the other character sets only<br>**Default**: <code>None</code> |
| <code>exclude_similar</code> | <code>bool \| None</code> | Exclude characters that are easy to confuse when read aloud or typed (i, l, 1, L, o, 0, O)<br>**Default**: <code>None</code> |
| <code>exclude_ambiguous</code> | <code>bool \| None</code> | Exclude brackets, slashes, quotes and other characters that need escaping in shells and config files<br>**Default**: <code>None</code> |
| <code>mixed_case</code> | <code>bool \| None</code> | Randomly capitalise letters in a pronounceable password<br>**Default**: <code>None</code> |
| <code>strict</code> | <code>bool \| None</code> | Guarantee at least one character from every enabled set rather than leaving it to chance<br>**Default**: <code>None</code> |
| <code>word_count</code> | <code>int \| None</code> | How many words a passphrase contains. Only applies when type is passphrase<br>**Default**: <code>None</code> |
| <code>separator</code> | <code>str \| None</code> | The character placed between passphrase words. Only applies when type is passphrase<br>**Default**: <code>None</code> |
| <code>capitalize</code> | <code>bool \| None</code> | Capitalise each word of a passphrase. Only applies when type is passphrase<br>**Default**: <code>None</code> |
| <code>analyze</code> | <code>bool \| None</code> | Return a strength analysis alongside each password<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PasswordgeneratorResponse](api_verve/models/v1_passwordgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PasswordgeneratorErrorBody](api_verve/errors/passwordgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def qrcodegenerator(body: V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1QrcodegeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.qrcodegenerator(V1QrcodegeneratorRequest(value="some example string"))
    # TODO: Handle 'response' of type V1QrcodegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QrcodegeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.qrcodegenerator(V1QrcodegeneratorRequest(value="some example string"))
    # TODO: Handle 'response' of type V1QrcodegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QrcodegeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1QrcodegeneratorRequest](api_verve/models/v1_qrcodegenerator_request.py) \| [V1QrcodegeneratorRequestDict](api_verve/models/v1_qrcodegenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1QrcodegeneratorResponse](api_verve/models/v1_qrcodegenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[QrcodegeneratorErrorBody](api_verve/errors/qrcodegenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomgenerator(*, type_: str | None = None, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1RandomgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.randomgenerator(type_="number", count=10, include_avatar=True)
    # TODO: Handle 'response' of type V1RandomgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.randomgenerator(type_="number", count=10, include_avatar=True)
    # TODO: Handle 'response' of type V1RandomgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>str \| None</code> | The type of random data to generate<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | The number of random data to generate (1 to 100)<br>**Default**: <code>None</code> |
| <code>include_avatar</code> | <code>bool \| None</code> | Include an AI-generated face avatar (only applies when type=name)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomgeneratorResponse](api_verve/models/v1_randomgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RandomgeneratorErrorBody](api_verve/errors/randomgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomidentitygenerator(*, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1RandomidentitygeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.randomidentitygenerator(count=5, include_avatar=True)
    # TODO: Handle 'response' of type V1RandomidentitygeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomidentitygeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.randomidentitygenerator(count=5, include_avatar=True)
    # TODO: Handle 'response' of type V1RandomidentitygeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomidentitygeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | The number of identities to create<br>**Default**: <code>None</code> |
| <code>include_avatar</code> | <code>bool \| None</code> | Include an AI-generated face avatar for each identity<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomidentitygeneratorResponse](api_verve/models/v1_randomidentitygenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RandomidentitygeneratorErrorBody](api_verve/errors/randomidentitygenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomusergenerator(*, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1RandomusergeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.randomusergenerator(count=1, include_avatar=True)
    # TODO: Handle 'response' of type V1RandomusergeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomusergeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.randomusergenerator(count=1, include_avatar=True)
    # TODO: Handle 'response' of type V1RandomusergeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomusergeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | The number of users to generate<br>**Default**: <code>None</code> |
| <code>include_avatar</code> | <code>bool \| None</code> | Include an AI-generated face avatar matching user's gender and age<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomusergeneratorResponse](api_verve/models/v1_randomusergenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RandomusergeneratorErrorBody](api_verve/errors/randomusergenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomwords(*, request_options: RequestOptionsOrDict | None = None) -> V1RandomwordsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.randomwords()
    # TODO: Handle 'response' of type V1RandomwordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomwordsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.randomwords()
    # TODO: Handle 'response' of type V1RandomwordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomwordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomwordsResponse](api_verve/models/v1_randomwords_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RandomwordsErrorBody](api_verve/errors/randomwords_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def shortcodegenerator(*, count: int | None = None, length: int | None = None, charset: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ShortcodegeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.shortcodegenerator(count=5, length=8, charset="alphanumeric")
    # TODO: Handle 'response' of type V1ShortcodegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShortcodegeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.shortcodegenerator(count=5, length=8, charset="alphanumeric")
    # TODO: Handle 'response' of type V1ShortcodegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShortcodegeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of codes to generate<br>**Default**: <code>None</code> |
| <code>length</code> | <code>int \| None</code> | Length of each code<br>**Default**: <code>None</code> |
| <code>charset</code> | <code>str \| None</code> | Character set<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ShortcodegeneratorResponse](api_verve/models/v1_shortcodegenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ShortcodegeneratorErrorBody](api_verve/errors/shortcodegenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sitemapgenerator(body: V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SitemapgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.sitemapgenerator(V1SitemapgeneratorRequest(urls="some example string"))
    # TODO: Handle 'response' of type V1SitemapgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SitemapgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.sitemapgenerator(
        V1SitemapgeneratorRequest(urls="some example string")
    )
    # TODO: Handle 'response' of type V1SitemapgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SitemapgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SitemapgeneratorRequest](api_verve/models/v1_sitemapgenerator_request.py) \| [V1SitemapgeneratorRequestDict](api_verve/models/v1_sitemapgenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SitemapgeneratorResponse](api_verve/models/v1_sitemapgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SitemapgeneratorErrorBody](api_verve/errors/sitemapgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def totpgenerator(body: V1TotpgeneratorRequest | V1TotpgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TotpgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.totpgenerator(V1TotpgeneratorRequest(secret="some example string"))
    # TODO: Handle 'response' of type V1TotpgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TotpgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.totpgenerator(V1TotpgeneratorRequest(secret="some example string"))
    # TODO: Handle 'response' of type V1TotpgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TotpgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TotpgeneratorRequest](api_verve/models/v1_totpgenerator_request.py) \| [V1TotpgeneratorRequestDict](api_verve/models/v1_totpgenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TotpgeneratorResponse](api_verve/models/v1_totpgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TotpgeneratorErrorBody](api_verve/errors/totpgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ulidgenerator(*, count: int | None = None, timestamp: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UlidgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.ulidgenerator(count=5)
    # TODO: Handle 'response' of type V1UlidgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UlidgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.ulidgenerator(count=5)
    # TODO: Handle 'response' of type V1UlidgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UlidgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of ULIDs to generate<br>**Default**: <code>None</code> |
| <code>timestamp</code> | <code>int \| None</code> | Custom timestamp in milliseconds (optional, uses current time if not specified)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UlidgeneratorResponse](api_verve/models/v1_ulidgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UlidgeneratorErrorBody](api_verve/errors/ulidgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def useragentgenerator(*, device: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UseragentgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.useragentgenerator(device="desktop")
    # TODO: Handle 'response' of type V1UseragentgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UseragentgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.useragentgenerator(device="desktop")
    # TODO: Handle 'response' of type V1UseragentgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UseragentgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>device</code> | <code>str \| None</code> | The device type for the user agent string<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UseragentgeneratorResponse](api_verve/models/v1_useragentgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UseragentgeneratorErrorBody](api_verve/errors/useragentgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def usernamegenerator(email: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UsernamegeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.usernamegenerator("sean@mail.com", count=10)
    # TODO: Handle 'response' of type V1UsernamegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsernamegeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.usernamegenerator("sean@mail.com", count=10)
    # TODO: Handle 'response' of type V1UsernamegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsernamegeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>str</code> | The email address to generate usernames from |
| <code>count</code> | <code>int \| None</code> | The number of usernames to generate<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsernamegeneratorResponse](api_verve/models/v1_usernamegenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UsernamegeneratorErrorBody](api_verve/errors/usernamegenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def uuidgenerator(*, count: int | None = None, version: int | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UuidgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_generation.uuidgenerator(count=5, version=4, format_="default")
    # TODO: Handle 'response' of type V1UuidgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UuidgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_generation.uuidgenerator(count=5, version=4, format_="default")
    # TODO: Handle 'response' of type V1UuidgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UuidgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int \| None</code> | Number of UUIDs to generate<br>**Default**: <code>None</code> |
| <code>version</code> | <code>int \| None</code> | UUID version (only version 4 currently supported)<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>str \| None</code> | Output format<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UuidgeneratorResponse](api_verve/models/v1_uuidgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UuidgeneratorErrorBody](api_verve/errors/uuidgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataLookup

> Source: [DataLookup](api_verve/apis/data_lookup.py)

<details>
<summary><code>def asnlookup(asn: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AsnlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.asnlookup("AS15169")
    # TODO: Handle 'response' of type V1AsnlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsnlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.asnlookup("AS15169")
    # TODO: Handle 'response' of type V1AsnlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsnlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asn</code> | <code>str</code> | The ASN you want to get information about |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AsnlookupResponse](api_verve/models/v1_asnlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AsnlookupErrorBody](api_verve/errors/asnlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bible(book: str, version: str, chapter: int, *, verse: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1BibleResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.bible("Genesis", "KJV", 5, verse=17)
    # TODO: Handle 'response' of type V1BibleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BibleErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.bible("Genesis", "KJV", 5, verse=17)
    # TODO: Handle 'response' of type V1BibleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BibleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>book</code> | <code>str</code> | The name of the book in the bible (e.g., Genesis) |
| <code>version</code> | <code>str</code> | The Bible translation version |
| <code>chapter</code> | <code>int</code> | The chapter number in the book |
| <code>verse</code> | <code>int \| None</code> | The verse number in the chapter<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BibleResponse](api_verve/models/v1_bible_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BibleErrorBody](api_verve/errors/bible_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def callingcode(country: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CallingcodeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.callingcode("FR")
    # TODO: Handle 'response' of type V1CallingcodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallingcodeErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.callingcode("FR")
    # TODO: Handle 'response' of type V1CallingcodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CallingcodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The 2 letter ISO code for the country (e.g. FR) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CallingcodeResponse](api_verve/models/v1_callingcode_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CallingcodeErrorBody](api_verve/errors/callingcode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dictionary(word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DictionaryResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.dictionary("apple")
    # TODO: Handle 'response' of type V1DictionaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DictionaryErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.dictionary("apple")
    # TODO: Handle 'response' of type V1DictionaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DictionaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word for which you want to get the definition (e.g., apple) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DictionaryResponse](api_verve/models/v1_dictionary_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DictionaryErrorBody](api_verve/errors/dictionary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dogbreeds(breed: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DogbreedsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.dogbreeds("beagle")
    # TODO: Handle 'response' of type V1DogbreedsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DogbreedsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.dogbreeds("beagle")
    # TODO: Handle 'response' of type V1DogbreedsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DogbreedsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>breed</code> | <code>str</code> | The name of the dog breed to get information about |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DogbreedsResponse](api_verve/models/v1_dogbreeds_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DogbreedsErrorBody](api_verve/errors/dogbreeds_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def emoji(emoji: str, *, request_options: RequestOptionsOrDict | None = None) -> V1EmojiResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.emoji("🥳")
    # TODO: Handle 'response' of type V1EmojiResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmojiErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.emoji("🥳")
    # TODO: Handle 'response' of type V1EmojiResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmojiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>emoji</code> | <code>str</code> | The emoji for which you want to get the text representation (e.g., 🥳) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EmojiResponse](api_verve/models/v1_emoji_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[EmojiErrorBody](api_verve/errors/emoji_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def genderdetector(name: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1GenderdetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.genderdetector("John Mcdonald", country="US")
    # TODO: Handle 'response' of type V1GenderdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GenderdetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.genderdetector("John Mcdonald", country="US")
    # TODO: Handle 'response' of type V1GenderdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GenderdetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name for which you want to detect the gender |
| <code>country</code> | <code>str \| None</code> | The country code for the name (e.g., US). Recorded and echoed back in the response, but detection does not yet vary by country - the same name returns the same gender whichever code you pass<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GenderdetectorResponse](api_verve/models/v1_genderdetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GenderdetectorErrorBody](api_verve/errors/genderdetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def gravatarlookup(email: str, *, request_options: RequestOptionsOrDict | None = None) -> V1GravatarlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.gravatarlookup("hello@apiverve.com")
    # TODO: Handle 'response' of type V1GravatarlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GravatarlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.gravatarlookup("hello@apiverve.com")
    # TODO: Handle 'response' of type V1GravatarlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GravatarlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>str</code> | The email address to lookup the Gravatar profile of |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GravatarlookupResponse](api_verve/models/v1_gravatarlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GravatarlookupErrorBody](api_verve/errors/gravatarlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ipdemographics(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1IpdemographicsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.ipdemographics("173.172.81.20")
    # TODO: Handle 'response' of type V1IpdemographicsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IpdemographicsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.ipdemographics("173.172.81.20")
    # TODO: Handle 'response' of type V1IpdemographicsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IpdemographicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | IPv4 or IPv6 address |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IpdemographicsResponse](api_verve/models/v1_ipdemographics_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[IpdemographicsErrorBody](api_verve/errors/ipdemographics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lottery(numbers: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1LotteryResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.lottery("powerball", date="2024-01-15")
    # TODO: Handle 'response' of type V1LotteryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LotteryErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.lottery("powerball", date="2024-01-15")
    # TODO: Handle 'response' of type V1LotteryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LotteryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>numbers</code> | <code>str</code> | The lottery game to lookup: powerball, megamillions, euromillions, or lottomax |
| <code>date</code> | <code>str \| None</code> | Optional date for historical lookup (YYYY-MM-DD). Returns the nearest draw to this date.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LotteryResponse](api_verve/models/v1_lottery_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LotteryErrorBody](api_verve/errors/lottery_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nobelprizes(*, firstname: str | None = None, lastname: str | None = None, category: str | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1NobelprizesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.nobelprizes(firstname="Albert", lastname="Einstein", category="Physics", year=1921)
    # TODO: Handle 'response' of type V1NobelprizesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NobelprizesErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.nobelprizes(
        firstname="Albert", lastname="Einstein", category="Physics", year=1921
    )
    # TODO: Handle 'response' of type V1NobelprizesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NobelprizesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>firstname</code> | <code>str \| None</code> | The first name of the Nobel Prize winner to get information about<br>**Default**: <code>None</code> |
| <code>lastname</code> | <code>str \| None</code> | The last name of the Nobel Prize winner to get information about<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | The category of the Nobel Prize to get information about<br>**Default**: <code>None</code> |
| <code>year</code> | <code>int \| None</code> | The year of the Nobel Prize to get information about<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NobelprizesResponse](api_verve/models/v1_nobelprizes_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NobelprizesErrorBody](api_verve/errors/nobelprizes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def openlicenses(name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1OpenlicensesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.openlicenses("MIT")
    # TODO: Handle 'response' of type V1OpenlicensesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OpenlicensesErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.openlicenses("MIT")
    # TODO: Handle 'response' of type V1OpenlicensesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OpenlicensesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the open source license to get information about |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1OpenlicensesResponse](api_verve/models/v1_openlicenses_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[OpenlicensesErrorBody](api_verve/errors/openlicenses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def thesaurus(word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ThesaurusResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.thesaurus("big")
    # TODO: Handle 'response' of type V1ThesaurusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ThesaurusErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.thesaurus("big")
    # TODO: Handle 'response' of type V1ThesaurusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ThesaurusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word for which you want to get synonyms |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ThesaurusResponse](api_verve/models/v1_thesaurus_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ThesaurusErrorBody](api_verve/errors/thesaurus_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def timezonelookup(city: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TimezonelookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.timezonelookup("Harare")
    # TODO: Handle 'response' of type V1TimezonelookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TimezonelookupErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.timezonelookup("Harare")
    # TODO: Handle 'response' of type V1TimezonelookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TimezonelookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str</code> | The city name for which you want to get the data (e.g., Harare) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TimezonelookupResponse](api_verve/models/v1_timezonelookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TimezonelookupErrorBody](api_verve/errors/timezonelookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unicodelookup(*, character: str | None = None, codepoint: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UnicodelookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.unicodelookup(character="👋", codepoint="1F44B")
    # TODO: Handle 'response' of type V1UnicodelookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnicodelookupErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.unicodelookup(character="👋", codepoint="1F44B")
    # TODO: Handle 'response' of type V1UnicodelookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnicodelookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>character</code> | <code>str \| None</code> | The Unicode character to lookup. Supply either character or codepoint.<br>**Default**: <code>None</code> |
| <code>codepoint</code> | <code>str \| None</code> | The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B'). Supply either character or codepoint.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnicodelookupResponse](api_verve/models/v1_unicodelookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UnicodelookupErrorBody](api_verve/errors/unicodelookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def worldtime(city: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WorldtimeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.worldtime("San Francisco")
    # TODO: Handle 'response' of type V1WorldtimeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WorldtimeErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.worldtime("San Francisco")
    # TODO: Handle 'response' of type V1WorldtimeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WorldtimeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str</code> | The city name for which you want to get the current time (e.g., New York) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WorldtimeResponse](api_verve/models/v1_worldtime_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WorldtimeErrorBody](api_verve/errors/worldtime_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def zipdemographics(zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ZipdemographicsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_lookup.zipdemographics("90210")
    # TODO: Handle 'response' of type V1ZipdemographicsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ZipdemographicsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_lookup.zipdemographics("90210")
    # TODO: Handle 'response' of type V1ZipdemographicsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ZipdemographicsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zip_</code> | <code>str</code> | 5-digit US ZIP code |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ZipdemographicsResponse](api_verve/models/v1_zipdemographics_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ZipdemographicsErrorBody](api_verve/errors/zipdemographics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataProcessing

> Source: [DataProcessing](api_verve/apis/data_processing.py)

<details>
<summary><code>def counter(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CounterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_processing.counter("test_counter")
    # TODO: Handle 'response' of type V1CounterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CounterErrorBody
```

**Async**

```python
try:
    response = await async_client.data_processing.counter("test_counter")
    # TODO: Handle 'response' of type V1CounterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CounterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the counter (e.g., test_counter) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CounterResponse](api_verve/models/v1_counter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CounterErrorBody](api_verve/errors/counter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def htmltotext(body: V1HtmltotextRequest | V1HtmltotextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1HtmltotextResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_processing.htmltotext(V1HtmltotextRequest(html="some example string"))
    # TODO: Handle 'response' of type V1HtmltotextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HtmltotextErrorBody
```

**Async**

```python
try:
    response = await async_client.data_processing.htmltotext(V1HtmltotextRequest(html="some example string"))
    # TODO: Handle 'response' of type V1HtmltotextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HtmltotextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1HtmltotextRequest](api_verve/models/v1_htmltotext_request.py) \| [V1HtmltotextRequestDict](api_verve/models/v1_htmltotext_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HtmltotextResponse](api_verve/models/v1_htmltotext_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HtmltotextErrorBody](api_verve/errors/htmltotext_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metadataextractor(body: V1MetadataextractorRequest | V1MetadataextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MetadataextractorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_processing.metadataextractor(V1MetadataextractorRequest(url="some example string"))
    # TODO: Handle 'response' of type V1MetadataextractorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetadataextractorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_processing.metadataextractor(
        V1MetadataextractorRequest(url="some example string")
    )
    # TODO: Handle 'response' of type V1MetadataextractorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MetadataextractorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MetadataextractorRequest](api_verve/models/v1_metadataextractor_request.py) \| [V1MetadataextractorRequestDict](api_verve/models/v1_metadataextractor_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MetadataextractorResponse](api_verve/models/v1_metadataextractor_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MetadataextractorErrorBody](api_verve/errors/metadataextractor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def morsecode(body: V1MorsecodeRequest | V1MorsecodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MorsecodeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_processing.morsecode(V1MorsecodeRequest(text="some example string"))
    # TODO: Handle 'response' of type V1MorsecodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MorsecodeErrorBody
```

**Async**

```python
try:
    response = await async_client.data_processing.morsecode(V1MorsecodeRequest(text="some example string"))
    # TODO: Handle 'response' of type V1MorsecodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MorsecodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MorsecodeRequest](api_verve/models/v1_morsecode_request.py) \| [V1MorsecodeRequestDict](api_verve/models/v1_morsecode_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MorsecodeResponse](api_verve/models/v1_morsecode_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MorsecodeErrorBody](api_verve/errors/morsecode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def murmurhash(body: V1MurmurhashRequest | V1MurmurhashRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MurmurhashResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_processing.murmurhash(V1MurmurhashRequest(text="some example string"))
    # TODO: Handle 'response' of type V1MurmurhashResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MurmurhashErrorBody
```

**Async**

```python
try:
    response = await async_client.data_processing.murmurhash(V1MurmurhashRequest(text="some example string"))
    # TODO: Handle 'response' of type V1MurmurhashResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MurmurhashErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MurmurhashRequest](api_verve/models/v1_murmurhash_request.py) \| [V1MurmurhashRequestDict](api_verve/models/v1_murmurhash_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MurmurhashResponse](api_verve/models/v1_murmurhash_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MurmurhashErrorBody](api_verve/errors/murmurhash_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sqlexplainer(body: V1SqlexplainerRequest | V1SqlexplainerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SqlexplainerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_processing.sqlexplainer(V1SqlexplainerRequest(query="some example string"))
    # TODO: Handle 'response' of type V1SqlexplainerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SqlexplainerErrorBody
```

**Async**

```python
try:
    response = await async_client.data_processing.sqlexplainer(V1SqlexplainerRequest(query="some example string"))
    # TODO: Handle 'response' of type V1SqlexplainerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SqlexplainerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SqlexplainerRequest](api_verve/models/v1_sqlexplainer_request.py) \| [V1SqlexplainerRequestDict](api_verve/models/v1_sqlexplainer_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SqlexplainerResponse](api_verve/models/v1_sqlexplainer_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SqlexplainerErrorBody](api_verve/errors/sqlexplainer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataScraping

> Source: [DataScraping](api_verve/apis/data_scraping.py)

<details>
<summary><code>def contactextractor(body: V1ContactextractorRequest | V1ContactextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ContactextractorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_scraping.contactextractor(V1ContactextractorRequest(url="some example string"))
    # TODO: Handle 'response' of type V1ContactextractorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactextractorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_scraping.contactextractor(V1ContactextractorRequest(url="some example string"))
    # TODO: Handle 'response' of type V1ContactextractorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContactextractorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ContactextractorRequest](api_verve/models/v1_contactextractor_request.py) \| [V1ContactextractorRequestDict](api_verve/models/v1_contactextractor_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ContactextractorResponse](api_verve/models/v1_contactextractor_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ContactextractorErrorBody](api_verve/errors/contactextractor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def linkscraper(body: V1LinkscraperRequest | V1LinkscraperRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1LinkscraperResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_scraping.linkscraper(V1LinkscraperRequest(url="some example string"))
    # TODO: Handle 'response' of type V1LinkscraperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LinkscraperErrorBody
```

**Async**

```python
try:
    response = await async_client.data_scraping.linkscraper(V1LinkscraperRequest(url="some example string"))
    # TODO: Handle 'response' of type V1LinkscraperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LinkscraperErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1LinkscraperRequest](api_verve/models/v1_linkscraper_request.py) \| [V1LinkscraperRequestDict](api_verve/models/v1_linkscraper_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LinkscraperResponse](api_verve/models/v1_linkscraper_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LinkscraperErrorBody](api_verve/errors/linkscraper_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def seoscraper(body: V1SeoscraperRequest | V1SeoscraperRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SeoscraperResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_scraping.seoscraper(V1SeoscraperRequest(url="some example string"))
    # TODO: Handle 'response' of type V1SeoscraperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SeoscraperErrorBody
```

**Async**

```python
try:
    response = await async_client.data_scraping.seoscraper(V1SeoscraperRequest(url="some example string"))
    # TODO: Handle 'response' of type V1SeoscraperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SeoscraperErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SeoscraperRequest](api_verve/models/v1_seoscraper_request.py) \| [V1SeoscraperRequestDict](api_verve/models/v1_seoscraper_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SeoscraperResponse](api_verve/models/v1_seoscraper_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SeoscraperErrorBody](api_verve/errors/seoscraper_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webimagescraper(body: V1WebimagescraperRequest | V1WebimagescraperRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WebimagescraperResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_scraping.webimagescraper(V1WebimagescraperRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebimagescraperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebimagescraperErrorBody
```

**Async**

```python
try:
    response = await async_client.data_scraping.webimagescraper(V1WebimagescraperRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebimagescraperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebimagescraperErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WebimagescraperRequest](api_verve/models/v1_webimagescraper_request.py) \| [V1WebimagescraperRequestDict](api_verve/models/v1_webimagescraper_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebimagescraperResponse](api_verve/models/v1_webimagescraper_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WebimagescraperErrorBody](api_verve/errors/webimagescraper_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webscreenshots(body: V1WebscreenshotsRequest | V1WebscreenshotsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WebscreenshotsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_scraping.webscreenshots(V1WebscreenshotsRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebscreenshotsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebscreenshotsErrorBody
```

**Async**

```python
try:
    response = await async_client.data_scraping.webscreenshots(V1WebscreenshotsRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebscreenshotsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebscreenshotsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WebscreenshotsRequest](api_verve/models/v1_webscreenshots_request.py) \| [V1WebscreenshotsRequestDict](api_verve/models/v1_webscreenshots_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebscreenshotsResponse](api_verve/models/v1_webscreenshots_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WebscreenshotsErrorBody](api_verve/errors/webscreenshots_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DataValidation

> Source: [DataValidation](api_verve/apis/data_validation.py)

<details>
<summary><code>def cardvalidator(number: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CardvalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.cardvalidator("4900264223817524")
    # TODO: Handle 'response' of type V1CardvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CardvalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.cardvalidator("4900264223817524")
    # TODO: Handle 'response' of type V1CardvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CardvalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>number</code> | <code>str</code> | The card number to validate |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CardvalidatorResponse](api_verve/models/v1_cardvalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CardvalidatorErrorBody](api_verve/errors/cardvalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disposablephone(phone: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DisposablephoneResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.disposablephone("+12085813945")
    # TODO: Handle 'response' of type V1DisposablephoneResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisposablephoneErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.disposablephone("+12085813945")
    # TODO: Handle 'response' of type V1DisposablephoneResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisposablephoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>phone</code> | <code>str</code> | The phone number to check in E.164 format (e.g., +12085813945) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DisposablephoneResponse](api_verve/models/v1_disposablephone_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DisposablephoneErrorBody](api_verve/errors/disposablephone_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def emaildisposablechecker(email: str, *, request_options: RequestOptionsOrDict | None = None) -> V1EmaildisposablecheckerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.emaildisposablechecker("support@myspace.com")
    # TODO: Handle 'response' of type V1EmaildisposablecheckerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmaildisposablecheckerErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.emaildisposablechecker("support@myspace.com")
    # TODO: Handle 'response' of type V1EmaildisposablecheckerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmaildisposablecheckerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>str</code> | The email address to check (e.g., support@myspace.com) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EmaildisposablecheckerResponse](api_verve/models/v1_emaildisposablechecker_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[EmaildisposablecheckerErrorBody](api_verve/errors/emaildisposablechecker_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def emailvalidator(email: str, *, request_options: RequestOptionsOrDict | None = None) -> V1EmailvalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.emailvalidator("support@myspace.com")
    # TODO: Handle 'response' of type V1EmailvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmailvalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.emailvalidator("support@myspace.com")
    # TODO: Handle 'response' of type V1EmailvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmailvalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>email</code> | <code>str</code> | The email address to validate (e.g., support@myspace.com) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EmailvalidatorResponse](api_verve/models/v1_emailvalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[EmailvalidatorErrorBody](api_verve/errors/emailvalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def passwordstrength(password: str, *, request_options: RequestOptionsOrDict | None = None) -> V1PasswordstrengthResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.passwordstrength("Password123")
    # TODO: Handle 'response' of type V1PasswordstrengthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PasswordstrengthErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.passwordstrength("Password123")
    # TODO: Handle 'response' of type V1PasswordstrengthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PasswordstrengthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>password</code> | <code>str</code> | The password to check the strength of |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PasswordstrengthResponse](api_verve/models/v1_passwordstrength_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PasswordstrengthErrorBody](api_verve/errors/passwordstrength_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def phonenumbervalidator(number: str, country: str, *, request_options: RequestOptionsOrDict | None = None) -> V1PhonenumbervalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.phonenumbervalidator("816-555-1017", "us")
    # TODO: Handle 'response' of type V1PhonenumbervalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PhonenumbervalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.phonenumbervalidator("816-555-1017", "us")
    # TODO: Handle 'response' of type V1PhonenumbervalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PhonenumbervalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>number</code> | <code>str</code> | The phone number to validate |
| <code>country</code> | <code>str</code> | The country code of the phone number (e.g., us, uk) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PhonenumbervalidatorResponse](api_verve/models/v1_phonenumbervalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PhonenumbervalidatorErrorBody](api_verve/errors/phonenumbervalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def seovalidator(body: V1SeovalidatorRequest | V1SeovalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SeovalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.seovalidator(V1SeovalidatorRequest(url="some example string"))
    # TODO: Handle 'response' of type V1SeovalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SeovalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.seovalidator(V1SeovalidatorRequest(url="some example string"))
    # TODO: Handle 'response' of type V1SeovalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SeovalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SeovalidatorRequest](api_verve/models/v1_seovalidator_request.py) \| [V1SeovalidatorRequestDict](api_verve/models/v1_seovalidator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SeovalidatorResponse](api_verve/models/v1_seovalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SeovalidatorErrorBody](api_verve/errors/seovalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def spamdetector(body: V1SpamdetectorRequest | V1SpamdetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SpamdetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.spamdetector(V1SpamdetectorRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SpamdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpamdetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.spamdetector(V1SpamdetectorRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SpamdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpamdetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SpamdetectorRequest](api_verve/models/v1_spamdetector_request.py) \| [V1SpamdetectorRequestDict](api_verve/models/v1_spamdetector_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SpamdetectorResponse](api_verve/models/v1_spamdetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SpamdetectorErrorBody](api_verve/errors/spamdetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def usernameprofanity(username: str, *, request_options: RequestOptionsOrDict | None = None) -> V1UsernameprofanityResponse</code></summary>

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

**Sync**

```python
try:
    response = client.data_validation.usernameprofanity("b00bs")
    # TODO: Handle 'response' of type V1UsernameprofanityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsernameprofanityErrorBody
```

**Async**

```python
try:
    response = await async_client.data_validation.usernameprofanity("b00bs")
    # TODO: Handle 'response' of type V1UsernameprofanityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsernameprofanityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>str</code> | The username to check if it is inappropriate or profane |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsernameprofanityResponse](api_verve/models/v1_usernameprofanity_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UsernameprofanityErrorBody](api_verve/errors/usernameprofanity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](api_verve/apis/documents.py)

<details>
<summary><code>def htmltopdf(body: V1HtmltopdfRequest | V1HtmltopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1HtmltopdfResponse</code></summary>

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

**Sync**

```python
try:
    response = client.documents.htmltopdf(V1HtmltopdfRequest(html="some example string"))
    # TODO: Handle 'response' of type V1HtmltopdfResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HtmltopdfErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.htmltopdf(V1HtmltopdfRequest(html="some example string"))
    # TODO: Handle 'response' of type V1HtmltopdfResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HtmltopdfErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1HtmltopdfRequest](api_verve/models/v1_htmltopdf_request.py) \| [V1HtmltopdfRequestDict](api_verve/models/v1_htmltopdf_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HtmltopdfResponse](api_verve/models/v1_htmltopdf_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HtmltopdfErrorBody](api_verve/errors/htmltopdf_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def invoicegenerator(body: V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1InvoicegeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.documents.invoicegenerator(
        V1InvoicegeneratorRequest(
            invoice_number="some example string",
            from_name="some example string",
            from_street="some example string",
            from_city="some example string",
            from_state="some example string",
            from_zip="some example string",
            to_name="some example string",
            to_street="some example string",
            to_city="some example string",
            to_state="some example string",
            to_zip="some example string",
            items="some example string",
        ),
    )
    # TODO: Handle 'response' of type V1InvoicegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InvoicegeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.invoicegenerator(
        V1InvoicegeneratorRequest(
            invoice_number="some example string",
            from_name="some example string",
            from_street="some example string",
            from_city="some example string",
            from_state="some example string",
            from_zip="some example string",
            to_name="some example string",
            to_street="some example string",
            to_city="some example string",
            to_state="some example string",
            to_zip="some example string",
            items="some example string",
        ),
    )
    # TODO: Handle 'response' of type V1InvoicegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InvoicegeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1InvoicegeneratorRequest](api_verve/models/v1_invoicegenerator_request.py) \| [V1InvoicegeneratorRequestDict](api_verve/models/v1_invoicegenerator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InvoicegeneratorResponse](api_verve/models/v1_invoicegenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[InvoicegeneratorErrorBody](api_verve/errors/invoicegenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def websitetopdf(body: V1WebsitetopdfRequest | V1WebsitetopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WebsitetopdfResponse</code></summary>

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

**Sync**

```python
try:
    response = client.documents.websitetopdf(V1WebsitetopdfRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebsitetopdfResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebsitetopdfErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.websitetopdf(V1WebsitetopdfRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebsitetopdfResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebsitetopdfErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WebsitetopdfRequest](api_verve/models/v1_websitetopdf_request.py) \| [V1WebsitetopdfRequestDict](api_verve/models/v1_websitetopdf_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebsitetopdfResponse](api_verve/models/v1_websitetopdf_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WebsitetopdfErrorBody](api_verve/errors/websitetopdf_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DomainData

> Source: [DomainData](api_verve/apis/domain_data.py)

<details>
<summary><code>def bimivalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1BimivalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.bimivalidator("ebay.com")
    # TODO: Handle 'response' of type V1BimivalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BimivalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.bimivalidator("ebay.com")
    # TODO: Handle 'response' of type V1BimivalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BimivalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain to validate the BIMI record for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BimivalidatorResponse](api_verve/models/v1_bimivalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BimivalidatorErrorBody](api_verve/errors/bimivalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dkimvalidator(domain: str, *, selector: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1DkimvalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.dkimvalidator("github.com", selector="s1")
    # TODO: Handle 'response' of type V1DkimvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DkimvalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.dkimvalidator("github.com", selector="s1")
    # TODO: Handle 'response' of type V1DkimvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DkimvalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain to validate the DKIM record for |
| <code>selector</code> | <code>str \| None</code> | The DKIM selector to look up (the label before ._domainkey). When omitted, a list of common selectors is tried<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DkimvalidatorResponse](api_verve/models/v1_dkimvalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DkimvalidatorErrorBody](api_verve/errors/dkimvalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dmarcvalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DmarcvalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.dmarcvalidator("paypal.com")
    # TODO: Handle 'response' of type V1DmarcvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DmarcvalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.dmarcvalidator("paypal.com")
    # TODO: Handle 'response' of type V1DmarcvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DmarcvalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain to validate the DMARC record for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DmarcvalidatorResponse](api_verve/models/v1_dmarcvalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DmarcvalidatorErrorBody](api_verve/errors/dmarcvalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dnslookup(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DnslookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.dnslookup("myspace.com")
    # TODO: Handle 'response' of type V1DnslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnslookupErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.dnslookup("myspace.com")
    # TODO: Handle 'response' of type V1DnslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnslookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain name for which you want to lookup the DNS records. Do not include the protocol, and not subdomains (e.g., myspace.com) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DnslookupResponse](api_verve/models/v1_dnslookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DnslookupErrorBody](api_verve/errors/dnslookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dnspropagation(domain: str, *, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1DnspropagationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.dnspropagation("google.com", type_="A")
    # TODO: Handle 'response' of type V1DnspropagationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnspropagationErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.dnspropagation("google.com", type_="A")
    # TODO: Handle 'response' of type V1DnspropagationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnspropagationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain name to check propagation for |
| <code>type_</code> | <code>str \| None</code> | The DNS record type to check<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DnspropagationResponse](api_verve/models/v1_dnspropagation_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DnspropagationErrorBody](api_verve/errors/dnspropagation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dnsseccheck(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DnsseccheckResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.dnsseccheck("cloudflare.com")
    # TODO: Handle 'response' of type V1DnsseccheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsseccheckErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.dnsseccheck("cloudflare.com")
    # TODO: Handle 'response' of type V1DnsseccheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsseccheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain name to check DNSSEC configuration for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DnsseccheckResponse](api_verve/models/v1_dnsseccheck_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DnsseccheckErrorBody](api_verve/errors/dnsseccheck_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def domainavailability(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DomainavailabilityResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.domainavailability("myspace.com")
    # TODO: Handle 'response' of type V1DomainavailabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DomainavailabilityErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.domainavailability("myspace.com")
    # TODO: Handle 'response' of type V1DomainavailabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DomainavailabilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain to check if it is available |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DomainavailabilityResponse](api_verve/models/v1_domainavailability_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DomainavailabilityErrorBody](api_verve/errors/domainavailability_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def domainexpiration(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DomainexpirationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.domainexpiration("myspace.com")
    # TODO: Handle 'response' of type V1DomainexpirationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DomainexpirationErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.domainexpiration("myspace.com")
    # TODO: Handle 'response' of type V1DomainexpirationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DomainexpirationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain to check the expiration date of |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DomainexpirationResponse](api_verve/models/v1_domainexpiration_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DomainexpirationErrorBody](api_verve/errors/domainexpiration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fullyqualifieddomain(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1FullyqualifieddomainResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.fullyqualifieddomain("199.30.24.0")
    # TODO: Handle 'response' of type V1FullyqualifieddomainResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FullyqualifieddomainErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.fullyqualifieddomain("199.30.24.0")
    # TODO: Handle 'response' of type V1FullyqualifieddomainResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FullyqualifieddomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | The IP address to get the fully qualified domain name of |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FullyqualifieddomainResponse](api_verve/models/v1_fullyqualifieddomain_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[FullyqualifieddomainErrorBody](api_verve/errors/fullyqualifieddomain_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mxlookup(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1MxlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.mxlookup("yahoo.com")
    # TODO: Handle 'response' of type V1MxlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MxlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.mxlookup("yahoo.com")
    # TODO: Handle 'response' of type V1MxlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MxlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain you want to get the MX records for (e.g. yahoo.com) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MxlookupResponse](api_verve/models/v1_mxlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MxlookupErrorBody](api_verve/errors/mxlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reversednslookup(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ReversednslookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.reversednslookup("8.8.8.8")
    # TODO: Handle 'response' of type V1ReversednslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReversednslookupErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.reversednslookup("8.8.8.8")
    # TODO: Handle 'response' of type V1ReversednslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReversednslookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | The IP address to lookup (IPv4 or IPv6) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReversednslookupResponse](api_verve/models/v1_reversednslookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ReversednslookupErrorBody](api_verve/errors/reversednslookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def spfvalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1SpfvalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.spfvalidator("myspace.com")
    # TODO: Handle 'response' of type V1SpfvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpfvalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.spfvalidator("myspace.com")
    # TODO: Handle 'response' of type V1SpfvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpfvalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain to validate the SPF record for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SpfvalidatorResponse](api_verve/models/v1_spfvalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SpfvalidatorErrorBody](api_verve/errors/spfvalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sslchecker(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1SslcheckerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.sslchecker("ebay.com")
    # TODO: Handle 'response' of type V1SslcheckerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SslcheckerErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.sslchecker("ebay.com")
    # TODO: Handle 'response' of type V1SslcheckerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SslcheckerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain of the website to check the SSL certificate of |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SslcheckerResponse](api_verve/models/v1_sslchecker_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SslcheckerErrorBody](api_verve/errors/sslchecker_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def subdomainfinder(domain: str, *, limit: int | None = None, deep_scan: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SubdomainfinderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.subdomainfinder("google.com", limit=5, deep_scan=True)
    # TODO: Handle 'response' of type V1SubdomainfinderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubdomainfinderErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.subdomainfinder("google.com", limit=5, deep_scan=True)
    # TODO: Handle 'response' of type V1SubdomainfinderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubdomainfinderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain you want to find all the available subdomains for (e.g. google.com) |
| <code>limit</code> | <code>int \| None</code> | Limit the number of subdomains to detect<br>**Default**: <code>None</code> |
| <code>deep_scan</code> | <code>bool \| None</code> | Search the full wordlist instead of only certificate transparency and common names. Slower, and may still report complete: false when the time limit is reached<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SubdomainfinderResponse](api_verve/models/v1_subdomainfinder_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SubdomainfinderErrorBody](api_verve/errors/subdomainfinder_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urllookup(body: V1UrllookupRequest | V1UrllookupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1UrllookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.urllookup(V1UrllookupRequest(url="some example string"))
    # TODO: Handle 'response' of type V1UrllookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrllookupErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.urllookup(V1UrllookupRequest(url="some example string"))
    # TODO: Handle 'response' of type V1UrllookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrllookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1UrllookupRequest](api_verve/models/v1_urllookup_request.py) \| [V1UrllookupRequestDict](api_verve/models/v1_urllookup_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrllookupResponse](api_verve/models/v1_urllookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UrllookupErrorBody](api_verve/errors/urllookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urltitle(body: V1UrltitleRequest | V1UrltitleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1UrltitleResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.urltitle(V1UrltitleRequest(url="some example string"))
    # TODO: Handle 'response' of type V1UrltitleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrltitleErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.urltitle(V1UrltitleRequest(url="some example string"))
    # TODO: Handle 'response' of type V1UrltitleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrltitleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1UrltitleRequest](api_verve/models/v1_urltitle_request.py) \| [V1UrltitleRequestDict](api_verve/models/v1_urltitle_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrltitleResponse](api_verve/models/v1_urltitle_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UrltitleErrorBody](api_verve/errors/urltitle_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urlunshortener(body: V1UrlunshortenerRequest | V1UrlunshortenerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1UrlunshortenerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.urlunshortener(V1UrlunshortenerRequest(url="some example string"))
    # TODO: Handle 'response' of type V1UrlunshortenerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrlunshortenerErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.urlunshortener(V1UrlunshortenerRequest(url="some example string"))
    # TODO: Handle 'response' of type V1UrlunshortenerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UrlunshortenerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1UrlunshortenerRequest](api_verve/models/v1_urlunshortener_request.py) \| [V1UrlunshortenerRequestDict](api_verve/models/v1_urlunshortener_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UrlunshortenerResponse](api_verve/models/v1_urlunshortener_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UrlunshortenerErrorBody](api_verve/errors/urlunshortener_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def whoislookup(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WhoislookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.domain_data.whoislookup("myspace.com")
    # TODO: Handle 'response' of type V1WhoislookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WhoislookupErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_data.whoislookup("myspace.com")
    # TODO: Handle 'response' of type V1WhoislookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WhoislookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain name for which you want to get the registration data (e.g., myspace.com) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WhoislookupResponse](api_verve/models/v1_whoislookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WhoislookupErrorBody](api_verve/errors/whoislookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Entertainment

> Source: [Entertainment](api_verve/apis/entertainment.py)

<details>
<summary><code>def advice(*, request_options: RequestOptionsOrDict | None = None) -> V1AdviceResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.advice()
    # TODO: Handle 'response' of type V1AdviceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AdviceErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.advice()
    # TODO: Handle 'response' of type V1AdviceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AdviceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AdviceResponse](api_verve/models/v1_advice_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AdviceErrorBody](api_verve/errors/advice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bucketlist(*, request_options: RequestOptionsOrDict | None = None) -> V1BucketlistResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.bucketlist()
    # TODO: Handle 'response' of type V1BucketlistResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BucketlistErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.bucketlist()
    # TODO: Handle 'response' of type V1BucketlistResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BucketlistErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BucketlistResponse](api_verve/models/v1_bucketlist_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BucketlistErrorBody](api_verve/errors/bucketlist_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def charades(*, category: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CharadesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.charades(category="movies")
    # TODO: Handle 'response' of type V1CharadesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CharadesErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.charades(category="movies")
    # TODO: Handle 'response' of type V1CharadesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CharadesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str \| None</code> | Category: all, movies, books, songs, actions, animals, objects<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CharadesResponse](api_verve/models/v1_charades_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CharadesErrorBody](api_verve/errors/charades_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def chessmovevalidator(move: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ChessmovevalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.chessmovevalidator("Nf3")
    # TODO: Handle 'response' of type V1ChessmovevalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChessmovevalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.chessmovevalidator("Nf3")
    # TODO: Handle 'response' of type V1ChessmovevalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChessmovevalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>move</code> | <code>str</code> | Chess move in algebraic notation |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ChessmovevalidatorResponse](api_verve/models/v1_chessmovevalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ChessmovevalidatorErrorBody](api_verve/errors/chessmovevalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def chucknorris(*, request_options: RequestOptionsOrDict | None = None) -> V1ChucknorrisResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.chucknorris()
    # TODO: Handle 'response' of type V1ChucknorrisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChucknorrisErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.chucknorris()
    # TODO: Handle 'response' of type V1ChucknorrisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChucknorrisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ChucknorrisResponse](api_verve/models/v1_chucknorris_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ChucknorrisErrorBody](api_verve/errors/chucknorris_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def compliments(*, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ComplimentsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.compliments(adult=False)
    # TODO: Handle 'response' of type V1ComplimentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ComplimentsErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.compliments(adult=False)
    # TODO: Handle 'response' of type V1ComplimentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ComplimentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>adult</code> | <code>bool \| None</code> | Include flirty/romantic compliments<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ComplimentsResponse](api_verve/models/v1_compliments_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ComplimentsErrorBody](api_verve/errors/compliments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dadjokes(*, request_options: RequestOptionsOrDict | None = None) -> V1DadjokesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.dadjokes()
    # TODO: Handle 'response' of type V1DadjokesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DadjokesErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.dadjokes()
    # TODO: Handle 'response' of type V1DadjokesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DadjokesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DadjokesResponse](api_verve/models/v1_dadjokes_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DadjokesErrorBody](api_verve/errors/dadjokes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dndgenerator(*, type_: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1DndgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.dndgenerator(type_="character", count=1)
    # TODO: Handle 'response' of type V1DndgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DndgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.dndgenerator(type_="character", count=1)
    # TODO: Handle 'response' of type V1DndgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DndgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>str \| None</code> | Content type to generate<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of items to generate<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DndgeneratorResponse](api_verve/models/v1_dndgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DndgeneratorErrorBody](api_verve/errors/dndgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fortuneteller(*, category: str | None = None, question: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1FortunetellerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.fortuneteller(category="general", question="What does the future hold for me?")
    # TODO: Handle 'response' of type V1FortunetellerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FortunetellerErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.fortuneteller(
        category="general", question="What does the future hold for me?"
    )
    # TODO: Handle 'response' of type V1FortunetellerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FortunetellerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str \| None</code> | Fortune category<br>**Default**: <code>None</code> |
| <code>question</code> | <code>str \| None</code> | Optional question for personalized fortune (max 500 characters)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FortunetellerResponse](api_verve/models/v1_fortuneteller_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[FortunetellerErrorBody](api_verve/errors/fortuneteller_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def historicalevents(text: str, *, request_options: RequestOptionsOrDict | None = None) -> V1HistoricaleventsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.historicalevents("moon landing")
    # TODO: Handle 'response' of type V1HistoricaleventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HistoricaleventsErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.historicalevents("moon landing")
    # TODO: Handle 'response' of type V1HistoricaleventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HistoricaleventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text</code> | <code>str</code> | The keyword for which you want to get the historical events (e.g., moon landing) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HistoricaleventsResponse](api_verve/models/v1_historicalevents_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HistoricaleventsErrorBody](api_verve/errors/historicalevents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lovecalculator(name1: str, name2: str, *, request_options: RequestOptionsOrDict | None = None) -> V1LovecalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.lovecalculator("John", "Jane")
    # TODO: Handle 'response' of type V1LovecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LovecalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.lovecalculator("John", "Jane")
    # TODO: Handle 'response' of type V1LovecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LovecalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name1</code> | <code>str</code> | The first name to calculate love compatibility |
| <code>name2</code> | <code>str</code> | The second name to calculate love compatibility |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LovecalculatorResponse](api_verve/models/v1_lovecalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LovecalculatorErrorBody](api_verve/errors/lovecalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def magic8ball(*, question: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1Magic8BallResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.magic8ball(question="Will it rain today?")
    # TODO: Handle 'response' of type V1Magic8BallResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Magic8BallErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.magic8ball(question="Will it rain today?")
    # TODO: Handle 'response' of type V1Magic8BallResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type Magic8BallErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>question</code> | <code>str \| None</code> | Your question for the Magic 8-Ball (optional)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1Magic8BallResponse](api_verve/models/v1_magic8_ball_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[Magic8BallErrorBody](api_verve/errors/magic8_ball_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def musicnotegenerator(note: str, *, octave: int | None = None, duration: float | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MusicnotegeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.musicnotegenerator("C", octave=4, duration=1)
    # TODO: Handle 'response' of type V1MusicnotegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MusicnotegeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.musicnotegenerator("C", octave=4, duration=1)
    # TODO: Handle 'response' of type V1MusicnotegeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MusicnotegeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>note</code> | <code>str</code> | Musical note (A-G with optional # or b) |
| <code>octave</code> | <code>int \| None</code> | Octave number<br>**Default**: <code>None</code> |
| <code>duration</code> | <code>float \| None</code> | Duration in seconds<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MusicnotegeneratorResponse](api_verve/models/v1_musicnotegenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MusicnotegeneratorErrorBody](api_verve/errors/musicnotegenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def neverhaveiever(*, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1NeverhaveieverResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.neverhaveiever(adult=False)
    # TODO: Handle 'response' of type V1NeverhaveieverResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NeverhaveieverErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.neverhaveiever(adult=False)
    # TODO: Handle 'response' of type V1NeverhaveieverResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NeverhaveieverErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>adult</code> | <code>bool \| None</code> | Include adult/relationship-focused statements<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NeverhaveieverResponse](api_verve/models/v1_neverhaveiever_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NeverhaveieverErrorBody](api_verve/errors/neverhaveiever_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def pictionary(*, difficulty: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PictionaryResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.pictionary(difficulty="medium", count=5)
    # TODO: Handle 'response' of type V1PictionaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PictionaryErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.pictionary(difficulty="medium", count=5)
    # TODO: Handle 'response' of type V1PictionaryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PictionaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty level<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of words to generate<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PictionaryResponse](api_verve/models/v1_pictionary_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PictionaryErrorBody](api_verve/errors/pictionary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomfacts(*, request_options: RequestOptionsOrDict | None = None) -> V1RandomfactsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.randomfacts()
    # TODO: Handle 'response' of type V1RandomfactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomfactsErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.randomfacts()
    # TODO: Handle 'response' of type V1RandomfactsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomfactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomfactsResponse](api_verve/models/v1_randomfacts_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RandomfactsErrorBody](api_verve/errors/randomfacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomjoke(*, request_options: RequestOptionsOrDict | None = None) -> V1RandomjokeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.randomjoke()
    # TODO: Handle 'response' of type V1RandomjokeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomjokeErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.randomjoke()
    # TODO: Handle 'response' of type V1RandomjokeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomjokeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomjokeResponse](api_verve/models/v1_randomjoke_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RandomjokeErrorBody](api_verve/errors/randomjoke_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randompun(*, request_options: RequestOptionsOrDict | None = None) -> V1RandompunResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.randompun()
    # TODO: Handle 'response' of type V1RandompunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandompunErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.randompun()
    # TODO: Handle 'response' of type V1RandompunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandompunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandompunResponse](api_verve/models/v1_randompun_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RandompunErrorBody](api_verve/errors/randompun_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomquote(*, request_options: RequestOptionsOrDict | None = None) -> V1RandomquoteResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.randomquote()
    # TODO: Handle 'response' of type V1RandomquoteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomquoteErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.randomquote()
    # TODO: Handle 'response' of type V1RandomquoteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RandomquoteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RandomquoteResponse](api_verve/models/v1_randomquote_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RandomquoteErrorBody](api_verve/errors/randomquote_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def scrabblescorer(word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ScrabblescorerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.scrabblescorer("QUIZ", language="english")
    # TODO: Handle 'response' of type V1ScrabblescorerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScrabblescorerErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.scrabblescorer("QUIZ", language="english")
    # TODO: Handle 'response' of type V1ScrabblescorerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScrabblescorerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word to score |
| <code>language</code> | <code>str \| None</code> | Scrabble language variant<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ScrabblescorerResponse](api_verve/models/v1_scrabblescorer_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ScrabblescorerErrorBody](api_verve/errors/scrabblescorer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sudoku(*, difficulty: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SudokuResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.sudoku(difficulty="medium")
    # TODO: Handle 'response' of type V1SudokuResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SudokuErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.sudoku(difficulty="medium")
    # TODO: Handle 'response' of type V1SudokuResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SudokuErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>difficulty</code> | <code>str \| None</code> | The difficulty level of the Sudoku puzzle to generate<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SudokuResponse](api_verve/models/v1_sudoku_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SudokuErrorBody](api_verve/errors/sudoku_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trivia(*, category: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1TriviaResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.trivia(category="general")
    # TODO: Handle 'response' of type V1TriviaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriviaErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.trivia(category="general")
    # TODO: Handle 'response' of type V1TriviaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriviaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str \| None</code> | The category of the trivia question<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TriviaResponse](api_verve/models/v1_trivia_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TriviaErrorBody](api_verve/errors/trivia_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def truthordare(*, type_: str | None = None, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1TruthordareResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.truthordare(type_="random", adult=False)
    # TODO: Handle 'response' of type V1TruthordareResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TruthordareErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.truthordare(type_="random", adult=False)
    # TODO: Handle 'response' of type V1TruthordareResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TruthordareErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>str \| None</code> | Prompt type: truth, dare, or random<br>**Default**: <code>None</code> |
| <code>adult</code> | <code>bool \| None</code> | Include adult/spicy prompts<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TruthordareResponse](api_verve/models/v1_truthordare_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TruthordareErrorBody](api_verve/errors/truthordare_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordlehelper(*, green: str | None = None, yellow: str | None = None, gray: str | None = None, pattern: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1WordlehelperResponse</code></summary>

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

**Sync**

```python
try:
    response = client.entertainment.wordlehelper(green="A1,E5", yellow="R2,O3", gray="STLN", pattern="A___E", limit=25)
    # TODO: Handle 'response' of type V1WordlehelperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordlehelperErrorBody
```

**Async**

```python
try:
    response = await async_client.entertainment.wordlehelper(
        green="A1,E5", yellow="R2,O3", gray="STLN", pattern="A___E", limit=25
    )
    # TODO: Handle 'response' of type V1WordlehelperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordlehelperErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>green</code> | <code>str \| None</code> | Correct letters with positions (e.g., A1 means A at position 1)<br>**Default**: <code>None</code> |
| <code>yellow</code> | <code>str \| None</code> | Letters in word but wrong position (e.g., R2 means R not at position 2)<br>**Default**: <code>None</code> |
| <code>gray</code> | <code>str \| None</code> | Letters not in the word<br>**Default**: <code>None</code> |
| <code>pattern</code> | <code>str \| None</code> | Pattern with known letters (use _ for unknown)<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of suggestions<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordlehelperResponse](api_verve/models/v1_wordlehelper_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WordlehelperErrorBody](api_verve/errors/wordlehelper_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Finance

> Source: [Finance](api_verve/apis/finance.py)

<details>
<summary><code>def balancesheet(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1BalancesheetResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.balancesheet("AAPL")
    # TODO: Handle 'response' of type V1BalancesheetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BalancesheetErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.balancesheet("AAPL")
    # TODO: Handle 'response' of type V1BalancesheetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BalancesheetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year</code> | <code>int \| None</code> | Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones.<br>**Default**: <code>None</code> |
| <code>quarter</code> | <code>int \| None</code> | Fiscal quarter to retrieve. Defaults to latest available.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BalancesheetResponse](api_verve/models/v1_balancesheet_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BalancesheetErrorBody](api_verve/errors/balancesheet_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def benchmarkrate(rate: str, *, request_options: RequestOptionsOrDict | None = None) -> V1BenchmarkrateResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.benchmarkrate("SOFR")
    # TODO: Handle 'response' of type V1BenchmarkrateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BenchmarkrateErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.benchmarkrate("SOFR")
    # TODO: Handle 'response' of type V1BenchmarkrateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BenchmarkrateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>rate</code> | <code>str</code> | The benchmark rate to retrieve |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BenchmarkrateResponse](api_verve/models/v1_benchmarkrate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BenchmarkrateErrorBody](api_verve/errors/benchmarkrate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def binlookup(bin_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1BinlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.binlookup("448590")
    # TODO: Handle 'response' of type V1BinlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BinlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.binlookup("448590")
    # TODO: Handle 'response' of type V1BinlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BinlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bin_</code> | <code>str</code> | The first six digits of the credit card number (BIN) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BinlookupResponse](api_verve/models/v1_binlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BinlookupErrorBody](api_verve/errors/binlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bitcoin(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1BitcoinResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.bitcoin(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1BitcoinResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BitcoinErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.bitcoin(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1BitcoinResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BitcoinErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency</code> | <code>str \| None</code> | The currency to get the price in<br>**Default**: <code>None</code> |
| <code>hourly</code> | <code>bool \| None</code> | Include hourly price data for the past 24 hours<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BitcoinResponse](api_verve/models/v1_bitcoin_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BitcoinErrorBody](api_verve/errors/bitcoin_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cashflow(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CashflowResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.cashflow("AAPL")
    # TODO: Handle 'response' of type V1CashflowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CashflowErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.cashflow("AAPL")
    # TODO: Handle 'response' of type V1CashflowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CashflowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year</code> | <code>int \| None</code> | Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones.<br>**Default**: <code>None</code> |
| <code>quarter</code> | <code>int \| None</code> | Fiscal quarter to retrieve. Defaults to latest available.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CashflowResponse](api_verve/models/v1_cashflow_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CashflowErrorBody](api_verve/errors/cashflow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def companylookup(ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CompanylookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.companylookup("AAPL")
    # TODO: Handle 'response' of type V1CompanylookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompanylookupErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.companylookup("AAPL")
    # TODO: Handle 'response' of type V1CompanylookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompanylookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, GOOGL) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CompanylookupResponse](api_verve/models/v1_companylookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CompanylookupErrorBody](api_verve/errors/companylookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def costliving(location: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CostlivingResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.costliving("California")
    # TODO: Handle 'response' of type V1CostlivingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CostlivingErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.costliving("California")
    # TODO: Handle 'response' of type V1CostlivingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CostlivingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>location</code> | <code>str</code> | State name, state code (e.g., CA, NY), or major city name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CostlivingResponse](api_verve/models/v1_costliving_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CostlivingErrorBody](api_verve/errors/costliving_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cpiinflation(*, date: str | None = None, category: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CpiinflationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.cpiinflation(date="2023-06", category="food")
    # TODO: Handle 'response' of type V1CpiinflationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CpiinflationErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.cpiinflation(date="2023-06", category="food")
    # TODO: Handle 'response' of type V1CpiinflationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CpiinflationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Optional date in YYYY-MM format for historical lookup. Omit for current data.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Optional category filter: all, food, housing, apparel, transportation, medical, recreation, education, gasoline, electricity<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CpiinflationResponse](api_verve/models/v1_cpiinflation_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CpiinflationErrorBody](api_verve/errors/cpiinflation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def currencyconverter(value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CurrencyconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.currencyconverter(1, "USD", "EUR")
    # TODO: Handle 'response' of type V1CurrencyconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CurrencyconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.currencyconverter(1, "USD", "EUR")
    # TODO: Handle 'response' of type V1CurrencyconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CurrencyconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>value</code> | <code>float</code> | The amount to convert |
| <code>from_</code> | <code>str</code> | The ISO 4217 currency code to convert from |
| <code>to</code> | <code>str</code> | The ISO 4217 currency code to convert to |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CurrencyconverterResponse](api_verve/models/v1_currencyconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CurrencyconverterErrorBody](api_verve/errors/currencyconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def currencysymbols(currency: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CurrencysymbolsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.currencysymbols("USD")
    # TODO: Handle 'response' of type V1CurrencysymbolsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CurrencysymbolsErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.currencysymbols("USD")
    # TODO: Handle 'response' of type V1CurrencysymbolsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CurrencysymbolsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency</code> | <code>str</code> | The currency code for which you want to get the symbol |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CurrencysymbolsResponse](api_verve/models/v1_currencysymbols_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CurrencysymbolsErrorBody](api_verve/errors/currencysymbols_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dividends(ticker: str, *, period: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1DividendsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.dividends("AAPL", period="annual", limit=10)
    # TODO: Handle 'response' of type V1DividendsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DividendsErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.dividends("AAPL", period="annual", limit=10)
    # TODO: Handle 'response' of type V1DividendsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DividendsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, KO) |
| <code>period</code> | <code>str \| None</code> | Which series to return in the history list: quarterly (default) or annual.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Number of periods to return in the history list (1-25). Defaults to 5.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DividendsResponse](api_verve/models/v1_dividends_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DividendsErrorBody](api_verve/errors/dividends_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def earnings(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1EarningsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.earnings("ADBE")
    # TODO: Handle 'response' of type V1EarningsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EarningsErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.earnings("ADBE")
    # TODO: Handle 'response' of type V1EarningsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EarningsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year</code> | <code>int \| None</code> | Fiscal year to retrieve. Defaults to latest available.<br>**Default**: <code>None</code> |
| <code>quarter</code> | <code>int \| None</code> | Fiscal quarter to retrieve. Defaults to latest available.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EarningsResponse](api_verve/models/v1_earnings_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[EarningsErrorBody](api_verve/errors/earnings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ethereum(*, currency: str | None = None, hourly: bool | None = None, hourly_hour: float | None = None, hourly_price: float | None = None, hourly_timestamp: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1EthereumResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.ethereum(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1EthereumResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EthereumErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.ethereum(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1EthereumResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EthereumErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency</code> | <code>str \| None</code> | The currency to get the price in<br>**Default**: <code>None</code> |
| <code>hourly</code> | <code>bool \| None</code> | Include hourly price data for the past 24 hours<br>**Default**: <code>None</code> |
| <code>hourly_hour</code> | <code>float \| None</code> | UTC hour-of-day slot (0-23) the price was captured in<br>**Default**: <code>None</code> |
| <code>hourly_price</code> | <code>float \| None</code> | Price at that hour, in the requested currency<br>**Default**: <code>None</code> |
| <code>hourly_timestamp</code> | <code>str \| None</code> | ISO 8601 time the hourly price was captured<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EthereumResponse](api_verve/models/v1_ethereum_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[EthereumErrorBody](api_verve/errors/ethereum_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def exchangerate(currency1: str, currency2: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ExchangerateResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.exchangerate("USD", "EUR")
    # TODO: Handle 'response' of type V1ExchangerateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExchangerateErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.exchangerate("USD", "EUR")
    # TODO: Handle 'response' of type V1ExchangerateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExchangerateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency1</code> | <code>str</code> | The first currency you want to get the exchange rate for |
| <code>currency2</code> | <code>str</code> | The second currency you want to get the exchange rate for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ExchangerateResponse](api_verve/models/v1_exchangerate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ExchangerateErrorBody](api_verve/errors/exchangerate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def financialratios(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1FinancialratiosResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.financialratios("AAPL")
    # TODO: Handle 'response' of type V1FinancialratiosResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FinancialratiosErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.financialratios("AAPL")
    # TODO: Handle 'response' of type V1FinancialratiosResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FinancialratiosErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year</code> | <code>int \| None</code> | Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones.<br>**Default**: <code>None</code> |
| <code>quarter</code> | <code>int \| None</code> | Fiscal quarter to retrieve. Defaults to latest available.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FinancialratiosResponse](api_verve/models/v1_financialratios_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[FinancialratiosErrorBody](api_verve/errors/financialratios_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def gdp(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1GdpResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.gdp("US", year=2023)
    # TODO: Handle 'response' of type V1GdpResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GdpErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.gdp("US", year=2023)
    # TODO: Handle 'response' of type V1GdpResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GdpErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR) |
| <code>year</code> | <code>int \| None</code> | Specific year to retrieve data for (1960-present). Returns latest if not specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GdpResponse](api_verve/models/v1_gdp_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GdpErrorBody](api_verve/errors/gdp_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def globalstockmarket(country: str, *, year: int | None = None, month: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1GlobalstockmarketResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.globalstockmarket("DE", year=2023, month=6)
    # TODO: Handle 'response' of type V1GlobalstockmarketResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GlobalstockmarketErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.globalstockmarket("DE", year=2023, month=6)
    # TODO: Handle 'response' of type V1GlobalstockmarketResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GlobalstockmarketErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | ISO 2-letter country code |
| <code>year</code> | <code>int \| None</code> | Year to retrieve data for (2000-present). Requires month parameter.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>int \| None</code> | Month to retrieve data for (1-12). Required when year is specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GlobalstockmarketResponse](api_verve/models/v1_globalstockmarket_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GlobalstockmarketErrorBody](api_verve/errors/globalstockmarket_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def goldprice(*, currency: str | None = None, hourly: bool | None = None, hourly_hour: float | None = None, hourly_price: float | None = None, hourly_timestamp: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1GoldpriceResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.goldprice(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1GoldpriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GoldpriceErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.goldprice(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1GoldpriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GoldpriceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency</code> | <code>str \| None</code> | The currency to get the price in<br>**Default**: <code>None</code> |
| <code>hourly</code> | <code>bool \| None</code> | Include hourly price data for the past 24 hours<br>**Default**: <code>None</code> |
| <code>hourly_hour</code> | <code>float \| None</code> | UTC hour-of-day slot (0-23) the price was captured in<br>**Default**: <code>None</code> |
| <code>hourly_price</code> | <code>float \| None</code> | Price at that hour, in the requested currency<br>**Default**: <code>None</code> |
| <code>hourly_timestamp</code> | <code>str \| None</code> | ISO 8601 time the hourly price was captured<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GoldpriceResponse](api_verve/models/v1_goldprice_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GoldpriceErrorBody](api_verve/errors/goldprice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ifsclookup(ifsc: str, *, request_options: RequestOptionsOrDict | None = None) -> V1IfsclookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.ifsclookup("SBIN0005943")
    # TODO: Handle 'response' of type V1IfsclookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IfsclookupErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.ifsclookup("SBIN0005943")
    # TODO: Handle 'response' of type V1IfsclookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IfsclookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ifsc</code> | <code>str</code> | The IFSC code to get information about |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IfsclookupResponse](api_verve/models/v1_ifsclookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[IfsclookupErrorBody](api_verve/errors/ifsclookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def incomestatement(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1IncomestatementResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.incomestatement("AAPL")
    # TODO: Handle 'response' of type V1IncomestatementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IncomestatementErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.incomestatement("AAPL")
    # TODO: Handle 'response' of type V1IncomestatementResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IncomestatementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year</code> | <code>int \| None</code> | Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones.<br>**Default**: <code>None</code> |
| <code>quarter</code> | <code>int \| None</code> | Fiscal quarter to retrieve. Defaults to latest available.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IncomestatementResponse](api_verve/models/v1_incomestatement_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[IncomestatementErrorBody](api_verve/errors/incomestatement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def incometax(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1IncometaxResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.incometax("US", year=2024)
    # TODO: Handle 'response' of type V1IncometaxResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IncometaxErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.incometax("US", year=2024)
    # TODO: Handle 'response' of type V1IncometaxResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IncometaxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The country code (currently only 'US' is supported) |
| <code>year</code> | <code>int \| None</code> | The tax year to retrieve brackets for. Defaults to the previous year.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IncometaxResponse](api_verve/models/v1_incometax_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[IncometaxErrorBody](api_verve/errors/incometax_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def incometaxcalculator(income: float, rate: float, *, deduction: float | None = None, request_options: RequestOptionsOrDict | None = None) -> V1IncometaxcalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.incometaxcalculator(85000, 22, deduction=14600)
    # TODO: Handle 'response' of type V1IncometaxcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IncometaxcalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.incometaxcalculator(85000, 22, deduction=14600)
    # TODO: Handle 'response' of type V1IncometaxcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IncometaxcalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>income</code> | <code>float</code> | Gross annual income in USD |
| <code>rate</code> | <code>float</code> | Tax rate as a percentage (e.g., 22 for 22%) |
| <code>deduction</code> | <code>float \| None</code> | Optional deduction amount to subtract from income before calculating tax<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IncometaxcalculatorResponse](api_verve/models/v1_incometaxcalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[IncometaxcalculatorErrorBody](api_verve/errors/incometaxcalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def inflation(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1InflationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.inflation("US", year=2023)
    # TODO: Handle 'response' of type V1InflationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InflationErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.inflation("US", year=2023)
    # TODO: Handle 'response' of type V1InflationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InflationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | ISO 2-letter country code (e.g., US, GB, JP, DE, BR) |
| <code>year</code> | <code>int \| None</code> | The year to retrieve data for. Defaults to the previous year.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InflationResponse](api_verve/models/v1_inflation_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[InflationErrorBody](api_verve/errors/inflation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def insidertrading(ticker: str, *, type_: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1InsidertradingResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.insidertrading("AAPL", type_="buy", limit=10)
    # TODO: Handle 'response' of type V1InsidertradingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InsidertradingErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.insidertrading("AAPL", type_="buy", limit=10)
    # TODO: Handle 'response' of type V1InsidertradingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InsidertradingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>type_</code> | <code>str \| None</code> | Filter to open-market buys or sells (buy or sell).<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Number of transactions to return (1-25). Defaults to 5.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InsidertradingResponse](api_verve/models/v1_insidertrading_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[InsidertradingErrorBody](api_verve/errors/insidertrading_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def interestrate(country: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1InterestrateResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.interestrate("US", date="2024-06")
    # TODO: Handle 'response' of type V1InterestrateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InterestrateErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.interestrate("US", date="2024-06")
    # TODO: Handle 'response' of type V1InterestrateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InterestrateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | 2-letter country code |
| <code>date</code> | <code>str \| None</code> | Optional month in YYYY-MM format for a historical lookup. Omit for the current rate.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1InterestrateResponse](api_verve/models/v1_interestrate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[InterestrateErrorBody](api_verve/errors/interestrate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobsreport(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1JobsreportResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.jobsreport(date="2023-06")
    # TODO: Handle 'response' of type V1JobsreportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JobsreportErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.jobsreport(date="2023-06")
    # TODO: Handle 'response' of type V1JobsreportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JobsreportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Optional date in YYYY-MM format for historical lookup. Omit for current data.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JobsreportResponse](api_verve/models/v1_jobsreport_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[JobsreportErrorBody](api_verve/errors/jobsreport_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def loanpaymentcalculator(body: V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1LoanpaymentcalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.loanpaymentcalculator(
        V1LoanpaymentcalculatorRequest(loan_amount=1.5, interest_rate=1.5, loan_term=1)
    )
    # TODO: Handle 'response' of type V1LoanpaymentcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LoanpaymentcalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.loanpaymentcalculator(
        V1LoanpaymentcalculatorRequest(loan_amount=1.5, interest_rate=1.5, loan_term=1)
    )
    # TODO: Handle 'response' of type V1LoanpaymentcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LoanpaymentcalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1LoanpaymentcalculatorRequest](api_verve/models/v1_loanpaymentcalculator_request.py) \| [V1LoanpaymentcalculatorRequestDict](api_verve/models/v1_loanpaymentcalculator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LoanpaymentcalculatorResponse](api_verve/models/v1_loanpaymentcalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LoanpaymentcalculatorErrorBody](api_verve/errors/loanpaymentcalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def minimumwage(state: str, *, year: float | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MinimumwageResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.minimumwage("CA", year=2024)
    # TODO: Handle 'response' of type V1MinimumwageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MinimumwageErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.minimumwage("CA", year=2024)
    # TODO: Handle 'response' of type V1MinimumwageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MinimumwageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>str</code> | 2-letter state code (e.g., CA, NY) |
| <code>year</code> | <code>float \| None</code> | Year to get minimum wage for (e.g., 2020). Defaults to current year.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MinimumwageResponse](api_verve/models/v1_minimumwage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MinimumwageErrorBody](api_verve/errors/minimumwage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mortgagecalculator(body: V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MortgagecalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.mortgagecalculator(V1MortgagecalculatorRequest(amount=1.5, rate=1.5, years=1))
    # TODO: Handle 'response' of type V1MortgagecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MortgagecalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.mortgagecalculator(V1MortgagecalculatorRequest(amount=1.5, rate=1.5, years=1))
    # TODO: Handle 'response' of type V1MortgagecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MortgagecalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MortgagecalculatorRequest](api_verve/models/v1_mortgagecalculator_request.py) \| [V1MortgagecalculatorRequestDict](api_verve/models/v1_mortgagecalculator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MortgagecalculatorResponse](api_verve/models/v1_mortgagecalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MortgagecalculatorErrorBody](api_verve/errors/mortgagecalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mortgagerate(type_: str, *, year: int | None = None, month: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MortgagerateResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.mortgagerate("30year", year=2023, month=6)
    # TODO: Handle 'response' of type V1MortgagerateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MortgagerateErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.mortgagerate("30year", year=2023, month=6)
    # TODO: Handle 'response' of type V1MortgagerateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MortgagerateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>str</code> | The mortgage type |
| <code>year</code> | <code>int \| None</code> | Year to retrieve rates for (1971-present). Requires month parameter.<br>**Default**: <code>None</code> |
| <code>month</code> | <code>int \| None</code> | Month to retrieve rates for (1-12). Required when year is specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MortgagerateResponse](api_verve/models/v1_mortgagerate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MortgagerateErrorBody](api_verve/errors/mortgagerate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nationaldebt(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1NationaldebtResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.nationaldebt(date="2023-06-15")
    # TODO: Handle 'response' of type V1NationaldebtResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NationaldebtErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.nationaldebt(date="2023-06-15")
    # TODO: Handle 'response' of type V1NationaldebtResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NationaldebtErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Optional date in YYYY-MM-DD format for historical lookup. Omit for current data.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NationaldebtResponse](api_verve/models/v1_nationaldebt_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NationaldebtErrorBody](api_verve/errors/nationaldebt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def palladiumprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PalladiumpriceResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.palladiumprice(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1PalladiumpriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PalladiumpriceErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.palladiumprice(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1PalladiumpriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PalladiumpriceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency</code> | <code>str \| None</code> | The currency to get the price in<br>**Default**: <code>None</code> |
| <code>hourly</code> | <code>bool \| None</code> | Include hourly price data for the past 24 hours<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PalladiumpriceResponse](api_verve/models/v1_palladiumprice_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PalladiumpriceErrorBody](api_verve/errors/palladiumprice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def platinumprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PlatinumpriceResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.platinumprice(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1PlatinumpriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlatinumpriceErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.platinumprice(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1PlatinumpriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PlatinumpriceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency</code> | <code>str \| None</code> | The currency to get the price in<br>**Default**: <code>None</code> |
| <code>hourly</code> | <code>bool \| None</code> | Include hourly price data for the past 24 hours<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PlatinumpriceResponse](api_verve/models/v1_platinumprice_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PlatinumpriceErrorBody](api_verve/errors/platinumprice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def population(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PopulationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.population("US", year=2023)
    # TODO: Handle 'response' of type V1PopulationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PopulationErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.population("US", year=2023)
    # TODO: Handle 'response' of type V1PopulationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PopulationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR) |
| <code>year</code> | <code>int \| None</code> | Specific year to retrieve data for (1960-present). Returns latest if not specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PopulationResponse](api_verve/models/v1_population_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PopulationErrorBody](api_verve/errors/population_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchasingpower(amount: float, from_: str, *, to: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PurchasingpowerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.purchasingpower(100, "1990", to="2024")
    # TODO: Handle 'response' of type V1PurchasingpowerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasingpowerErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.purchasingpower(100, "1990", to="2024")
    # TODO: Handle 'response' of type V1PurchasingpowerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurchasingpowerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>amount</code> | <code>float</code> | The dollar amount to convert |
| <code>from_</code> | <code>str</code> | Starting year (YYYY format, data available from 1947) |
| <code>to</code> | <code>str \| None</code> | Ending year (YYYY format). Omit for current.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PurchasingpowerResponse](api_verve/models/v1_purchasingpower_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PurchasingpowerErrorBody](api_verve/errors/purchasingpower_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def routinglookup(routing: str, *, request_options: RequestOptionsOrDict | None = None) -> V1RoutinglookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.routinglookup("121000358")
    # TODO: Handle 'response' of type V1RoutinglookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RoutinglookupErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.routinglookup("121000358")
    # TODO: Handle 'response' of type V1RoutinglookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RoutinglookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>routing</code> | <code>str</code> | The routing number to lookup information about |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RoutinglookupResponse](api_verve/models/v1_routinglookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RoutinglookupErrorBody](api_verve/errors/routinglookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def salestax(zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1SalestaxResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.salestax("64082")
    # TODO: Handle 'response' of type V1SalestaxResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SalestaxErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.salestax("64082")
    # TODO: Handle 'response' of type V1SalestaxResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SalestaxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zip_</code> | <code>str</code> | The zip code for which you want to get the sales tax rate |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SalestaxResponse](api_verve/models/v1_salestax_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SalestaxErrorBody](api_verve/errors/salestax_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def salestaxcalculator(amount: float, *, zip_: str | None = None, state: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SalestaxcalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.salestaxcalculator(100, zip_="90210", state="CA")
    # TODO: Handle 'response' of type V1SalestaxcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SalestaxcalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.salestaxcalculator(100, zip_="90210", state="CA")
    # TODO: Handle 'response' of type V1SalestaxcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SalestaxcalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>amount</code> | <code>float</code> | Purchase amount to calculate tax on |
| <code>zip_</code> | <code>str \| None</code> | Valid US 5-digit ZIP code (required unless state is given)<br>**Default**: <code>None</code> |
| <code>state</code> | <code>str \| None</code> | 2-letter US state code (e.g., CA, NY, TX); used when zip is not given, state rate only<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SalestaxcalculatorResponse](api_verve/models/v1_salestaxcalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SalestaxcalculatorErrorBody](api_verve/errors/salestaxcalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sanctionscreening(name: str, *, threshold: float | None = None, limit: float | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SanctionscreeningResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.sanctionscreening("Banco Nacional de Cuba", threshold=0.85, limit=10, type_="individual")
    # TODO: Handle 'response' of type V1SanctionscreeningResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SanctionscreeningErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.sanctionscreening(
        "Banco Nacional de Cuba", threshold=0.85, limit=10, type_="individual"
    )
    # TODO: Handle 'response' of type V1SanctionscreeningResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SanctionscreeningErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The person or company name to screen (minimum 3 characters) |
| <code>threshold</code> | <code>float \| None</code> | Minimum match score to return, between 0.5 and 1. Lower catches more names but returns more false positives<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>float \| None</code> | Maximum number of matches to return (1-50)<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | Restrict screening to one entry type<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SanctionscreeningResponse](api_verve/models/v1_sanctionscreening_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SanctionscreeningErrorBody](api_verve/errors/sanctionscreening_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def savingsbonds(*, period: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SavingsbondsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.savingsbonds(period="2024-11")
    # TODO: Handle 'response' of type V1SavingsbondsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SavingsbondsErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.savingsbonds(period="2024-11")
    # TODO: Handle 'response' of type V1SavingsbondsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SavingsbondsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>period</code> | <code>str \| None</code> | Specific issue period to lookup (YYYY-MM format, e.g., 2024-11). Omit for current rates.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SavingsbondsResponse](api_verve/models/v1_savingsbonds_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SavingsbondsErrorBody](api_verve/errors/savingsbonds_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def secfilings(ticker: str, *, form: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SecfilingsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.secfilings("AAPL", form="10-K", limit=10)
    # TODO: Handle 'response' of type V1SecfilingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SecfilingsErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.secfilings("AAPL", form="10-K", limit=10)
    # TODO: Handle 'response' of type V1SecfilingsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SecfilingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>form</code> | <code>str \| None</code> | Filter to a single form type (e.g. 10-K, 10-Q, 8-K, 4).<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Number of filings to return (1-50). Defaults to 5.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SecfilingsResponse](api_verve/models/v1_secfilings_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SecfilingsErrorBody](api_verve/errors/secfilings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def silverprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SilverpriceResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.silverprice(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1SilverpriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SilverpriceErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.silverprice(currency="USD", hourly=True)
    # TODO: Handle 'response' of type V1SilverpriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SilverpriceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>currency</code> | <code>str \| None</code> | The currency to get the price in<br>**Default**: <code>None</code> |
| <code>hourly</code> | <code>bool \| None</code> | Include hourly price data for the past 24 hours<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SilverpriceResponse](api_verve/models/v1_silverprice_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SilverpriceErrorBody](api_verve/errors/silverprice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stockexchange(mic: str, *, request_options: RequestOptionsOrDict | None = None) -> V1StockexchangeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.stockexchange("XNYS")
    # TODO: Handle 'response' of type V1StockexchangeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StockexchangeErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.stockexchange("XNYS")
    # TODO: Handle 'response' of type V1StockexchangeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StockexchangeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mic</code> | <code>str</code> | The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StockexchangeResponse](api_verve/models/v1_stockexchange_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[StockexchangeErrorBody](api_verve/errors/stockexchange_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stockmarketopentimes(exchange: str, *, request_options: RequestOptionsOrDict | None = None) -> V1StockmarketopentimesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.stockmarketopentimes("NYSE")
    # TODO: Handle 'response' of type V1StockmarketopentimesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StockmarketopentimesErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.stockmarketopentimes("NYSE")
    # TODO: Handle 'response' of type V1StockmarketopentimesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StockmarketopentimesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>exchange</code> | <code>str</code> | The stock exchange code |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StockmarketopentimesResponse](api_verve/models/v1_stockmarketopentimes_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[StockmarketopentimesErrorBody](api_verve/errors/stockmarketopentimes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def swiftlookup(swift: str, *, request_options: RequestOptionsOrDict | None = None) -> V1SwiftlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.swiftlookup("CHASUS33ARP")
    # TODO: Handle 'response' of type V1SwiftlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SwiftlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.swiftlookup("CHASUS33ARP")
    # TODO: Handle 'response' of type V1SwiftlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SwiftlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>swift</code> | <code>str</code> | The SWIFT code to lookup information about |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SwiftlookupResponse](api_verve/models/v1_swiftlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SwiftlookupErrorBody](api_verve/errors/swiftlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tradebalance(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1TradebalanceResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.tradebalance(date="2023-06")
    # TODO: Handle 'response' of type V1TradebalanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TradebalanceErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.tradebalance(date="2023-06")
    # TODO: Handle 'response' of type V1TradebalanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TradebalanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Optional date in YYYY-MM format for historical lookup. Omit for current data.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TradebalanceResponse](api_verve/models/v1_tradebalance_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TradebalanceErrorBody](api_verve/errors/tradebalance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def treasuryyields(*, date: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1TreasuryyieldsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.treasuryyields(date="2025-06", type_="10yr")
    # TODO: Handle 'response' of type V1TreasuryyieldsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TreasuryyieldsErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.treasuryyields(date="2025-06", type_="10yr")
    # TODO: Handle 'response' of type V1TreasuryyieldsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TreasuryyieldsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for current data.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or a maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TreasuryyieldsResponse](api_verve/models/v1_treasuryyields_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TreasuryyieldsErrorBody](api_verve/errors/treasuryyields_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unemployment(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UnemploymentResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.unemployment("USA", year=2023)
    # TODO: Handle 'response' of type V1UnemploymentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnemploymentErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.unemployment("USA", year=2023)
    # TODO: Handle 'response' of type V1UnemploymentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnemploymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR |
| <code>year</code> | <code>int \| None</code> | Specific year to retrieve data for (1991-present). Returns latest if not specified.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UnemploymentResponse](api_verve/models/v1_unemployment_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UnemploymentErrorBody](api_verve/errors/unemployment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vatrates(country: str, *, date: str | None = None, postcode: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1VatratesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.finance.vatrates("DE", date="2020-07-01", postcode="35001")
    # TODO: Handle 'response' of type V1VatratesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VatratesErrorBody
```

**Async**

```python
try:
    response = await async_client.finance.vatrates("DE", date="2020-07-01", postcode="35001")
    # TODO: Handle 'response' of type V1VatratesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VatratesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | ISO 2-letter country code (e.g., DE, FR, ES) |
| <code>date</code> | <code>str \| None</code> | Look up rate effective on this date (YYYY-MM-DD). Defaults to today.<br>**Default**: <code>None</code> |
| <code>postcode</code> | <code>str \| None</code> | Check for regional exceptions (e.g., Canary Islands, Ceuta)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VatratesResponse](api_verve/models/v1_vatrates_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[VatratesErrorBody](api_verve/errors/vatrates_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Food

> Source: [Food](api_verve/apis/food.py)

<details>
<summary><code>def cocktail(name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CocktailResponse</code></summary>

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

**Sync**

```python
try:
    response = client.food.cocktail("martini")
    # TODO: Handle 'response' of type V1CocktailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CocktailErrorBody
```

**Async**

```python
try:
    response = await async_client.food.cocktail("martini")
    # TODO: Handle 'response' of type V1CocktailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CocktailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the cocktail for which you want to get the recipe (e.g., martini) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CocktailResponse](api_verve/models/v1_cocktail_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CocktailErrorBody](api_verve/errors/cocktail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nutrition(food: str, *, grams: float | None = None, request_options: RequestOptionsOrDict | None = None) -> V1NutritionResponse</code></summary>

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

**Sync**

```python
try:
    response = client.food.nutrition("banana", grams=118)
    # TODO: Handle 'response' of type V1NutritionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NutritionErrorBody
```

**Async**

```python
try:
    response = await async_client.food.nutrition("banana", grams=118)
    # TODO: Handle 'response' of type V1NutritionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NutritionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>food</code> | <code>str</code> | Name of the food to look up (e.g. banana, chicken breast, olive oil) |
| <code>grams</code> | <code>float \| None</code> | Serving weight in grams to scale the nutrition panel to. Defaults to a per-100-gram basis.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NutritionResponse](api_verve/models/v1_nutrition_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NutritionErrorBody](api_verve/errors/nutrition_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recipe(name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1RecipeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.food.recipe("chicken fajitas")
    # TODO: Handle 'response' of type V1RecipeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecipeErrorBody
```

**Async**

```python
try:
    response = await async_client.food.recipe("chicken fajitas")
    # TODO: Handle 'response' of type V1RecipeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecipeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name or description of the recipe you want to generate |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RecipeResponse](api_verve/models/v1_recipe_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RecipeErrorBody](api_verve/errors/recipe_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Games

> Source: [Games](api_verve/apis/games.py)

<details>
<summary><code>def acrostic(word: str, *, theme: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1AcrosticResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.acrostic("HAPPY", theme="positive", image=True)
    # TODO: Handle 'response' of type V1AcrosticResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcrosticErrorBody
```

**Async**

```python
try:
    response = await async_client.games.acrostic("HAPPY", theme="positive", image=True)
    # TODO: Handle 'response' of type V1AcrosticResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcrosticErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The keyword to spell out (3-15 letters) |
| <code>theme</code> | <code>str \| None</code> | Theme: random, positive, nature, adventure, friendship, learning<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AcrosticResponse](api_verve/models/v1_acrostic_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AcrosticErrorBody](api_verve/errors/acrostic_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def anagrampuzzle(*, word: str | None = None, count: int | None = None, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1AnagrampuzzleResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.anagrampuzzle(word="listen", count=1, difficulty="medium", image=True)
    # TODO: Handle 'response' of type V1AnagrampuzzleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnagrampuzzleErrorBody
```

**Async**

```python
try:
    response = await async_client.games.anagrampuzzle(word="listen", count=1, difficulty="medium", image=True)
    # TODO: Handle 'response' of type V1AnagrampuzzleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnagrampuzzleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str \| None</code> | Specific word to create anagram for<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of puzzles<br>**Default**: <code>None</code> |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty level<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AnagrampuzzleResponse](api_verve/models/v1_anagrampuzzle_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AnagrampuzzleErrorBody](api_verve/errors/anagrampuzzle_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def carddeckshuffler(*, decks: int | None = None, jokers: bool | None = None, method: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CarddeckshufflerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.carddeckshuffler(decks=1, jokers=False, method="fisher-yates")
    # TODO: Handle 'response' of type V1CarddeckshufflerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CarddeckshufflerErrorBody
```

**Async**

```python
try:
    response = await async_client.games.carddeckshuffler(decks=1, jokers=False, method="fisher-yates")
    # TODO: Handle 'response' of type V1CarddeckshufflerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CarddeckshufflerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>decks</code> | <code>int \| None</code> | Number of decks to shuffle<br>**Default**: <code>None</code> |
| <code>jokers</code> | <code>bool \| None</code> | Include jokers in the deck<br>**Default**: <code>None</code> |
| <code>method</code> | <code>str \| None</code> | Shuffling method<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CarddeckshufflerResponse](api_verve/models/v1_carddeckshuffler_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CarddeckshufflerErrorBody](api_verve/errors/carddeckshuffler_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def coinflipper(*, flips: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CoinflipperResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.coinflipper(flips=10)
    # TODO: Handle 'response' of type V1CoinflipperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CoinflipperErrorBody
```

**Async**

```python
try:
    response = await async_client.games.coinflipper(flips=10)
    # TODO: Handle 'response' of type V1CoinflipperResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CoinflipperErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flips</code> | <code>int \| None</code> | Number of coins to flip<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CoinflipperResponse](api_verve/models/v1_coinflipper_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CoinflipperErrorBody](api_verve/errors/coinflipper_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def crossword(*, size: str | None = None, theme: str | None = None, difficulty: str | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CrosswordResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.crossword(
        size="medium", theme="animals", difficulty="medium", image=True, solution_image=True
    )
    # TODO: Handle 'response' of type V1CrosswordResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CrosswordErrorBody
```

**Async**

```python
try:
    response = await async_client.games.crossword(
        size="medium", theme="animals", difficulty="medium", image=True, solution_image=True
    )
    # TODO: Handle 'response' of type V1CrosswordResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CrosswordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>size</code> | <code>str \| None</code> | Grid size: small, medium, large<br>**Default**: <code>None</code> |
| <code>theme</code> | <code>str \| None</code> | Theme: random, animals, food, sports, science, geography<br>**Default**: <code>None</code> |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty: easy, medium, hard<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>solution_image</code> | <code>bool \| None</code> | Set to true to generate a downloadable solution image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CrosswordResponse](api_verve/models/v1_crossword_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CrosswordErrorBody](api_verve/errors/crossword_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cryptogram(*, text: str | None = None, random: bool | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CryptogramResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.cryptogram(text="The quick brown fox", random=True, image=True, solution_image=True)
    # TODO: Handle 'response' of type V1CryptogramResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CryptogramErrorBody
```

**Async**

```python
try:
    response = await async_client.games.cryptogram(
        text="The quick brown fox", random=True, image=True, solution_image=True
    )
    # TODO: Handle 'response' of type V1CryptogramResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CryptogramErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text</code> | <code>str \| None</code> | Text to encode (max 500 characters)<br>**Default**: <code>None</code> |
| <code>random</code> | <code>bool \| None</code> | Use a random famous quote instead of text (a quote is also used when text is omitted)<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>solution_image</code> | <code>bool \| None</code> | Set to true to generate a downloadable solution image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CryptogramResponse](api_verve/models/v1_cryptogram_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CryptogramErrorBody](api_verve/errors/cryptogram_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def diceroller(*, dice: str | None = None, modifier: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1DicerollerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.diceroller(dice="3d6", modifier=5)
    # TODO: Handle 'response' of type V1DicerollerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DicerollerErrorBody
```

**Async**

```python
try:
    response = await async_client.games.diceroller(dice="3d6", modifier=5)
    # TODO: Handle 'response' of type V1DicerollerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DicerollerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dice</code> | <code>str \| None</code> | Dice notation in XdY format (e.g., 3d6, 2d20, default: 1d6)<br>**Default**: <code>None</code> |
| <code>modifier</code> | <code>int \| None</code> | Modifier to add to the total (can be negative)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DicerollerResponse](api_verve/models/v1_diceroller_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DicerollerErrorBody](api_verve/errors/diceroller_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fillintheblanks(*, category: str | None = None, count: int | None = None, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1FillintheblanksResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.fillintheblanks(category="idioms", count=5, difficulty="medium", image=True)
    # TODO: Handle 'response' of type V1FillintheblanksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FillintheblanksErrorBody
```

**Async**

```python
try:
    response = await async_client.games.fillintheblanks(category="idioms", count=5, difficulty="medium", image=True)
    # TODO: Handle 'response' of type V1FillintheblanksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FillintheblanksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str \| None</code> | Puzzle category<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of puzzles<br>**Default**: <code>None</code> |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty level<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FillintheblanksResponse](api_verve/models/v1_fillintheblanks_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[FillintheblanksErrorBody](api_verve/errors/fillintheblanks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fortunecookie(*, request_options: RequestOptionsOrDict | None = None) -> V1FortunecookieResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.fortunecookie()
    # TODO: Handle 'response' of type V1FortunecookieResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FortunecookieErrorBody
```

**Async**

```python
try:
    response = await async_client.games.fortunecookie()
    # TODO: Handle 'response' of type V1FortunecookieResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FortunecookieErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FortunecookieResponse](api_verve/models/v1_fortunecookie_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[FortunecookieErrorBody](api_verve/errors/fortunecookie_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def gamecharacter(*, race: str | None = None, class_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1GamecharacterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.gamecharacter(race="elf", class_="mage")
    # TODO: Handle 'response' of type V1GamecharacterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GamecharacterErrorBody
```

**Async**

```python
try:
    response = await async_client.games.gamecharacter(race="elf", class_="mage")
    # TODO: Handle 'response' of type V1GamecharacterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GamecharacterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>race</code> | <code>str \| None</code> | Character race: Human, Elf, Dwarf, Halfling, Orc, Gnome, Tiefling, Dragonborn, Half-Elf, Goblin<br>**Default**: <code>None</code> |
| <code>class_</code> | <code>str \| None</code> | Character class: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Barbarian, Bard, Druid, Monk, Warlock, Necromancer<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GamecharacterResponse](api_verve/models/v1_gamecharacter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GamecharacterErrorBody](api_verve/errors/gamecharacter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hangmanword(*, category: str | None = None, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1HangmanwordResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.hangmanword(category="animals", difficulty="medium", count=1, image=True)
    # TODO: Handle 'response' of type V1HangmanwordResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HangmanwordErrorBody
```

**Async**

```python
try:
    response = await async_client.games.hangmanword(category="animals", difficulty="medium", count=1, image=True)
    # TODO: Handle 'response' of type V1HangmanwordResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HangmanwordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str \| None</code> | Word category<br>**Default**: <code>None</code> |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty level<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of words<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HangmanwordResponse](api_verve/models/v1_hangmanword_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HangmanwordErrorBody](api_verve/errors/hangmanword_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lotterypicker(*, game: str | None = None, numbers: int | None = None, max_: int | None = None, bonus: int | None = None, tickets: int | None = None, bonusmax: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1LotterypickerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.lotterypicker(game="powerball", numbers=6, max_=49, bonus=1, tickets=3, bonusmax=26)
    # TODO: Handle 'response' of type V1LotterypickerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LotterypickerErrorBody
```

**Async**

```python
try:
    response = await async_client.games.lotterypicker(
        game="powerball", numbers=6, max_=49, bonus=1, tickets=3, bonusmax=26
    )
    # TODO: Handle 'response' of type V1LotterypickerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LotterypickerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>game</code> | <code>str \| None</code> | Lottery game preset<br>**Default**: <code>None</code> |
| <code>numbers</code> | <code>int \| None</code> | Number of main numbers to pick (for custom game)<br>**Default**: <code>None</code> |
| <code>max_</code> | <code>int \| None</code> | Maximum number for main numbers (for custom game)<br>**Default**: <code>None</code> |
| <code>bonus</code> | <code>int \| None</code> | Number of bonus numbers (for custom game)<br>**Default**: <code>None</code> |
| <code>tickets</code> | <code>int \| None</code> | Number of tickets to generate<br>**Default**: <code>None</code> |
| <code>bonusmax</code> | <code>int \| None</code> | Highest value a bonus ball can take. Only applies when game is custom; named games use their own rules<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LotterypickerResponse](api_verve/models/v1_lotterypicker_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LotterypickerErrorBody](api_verve/errors/lotterypicker_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def madlibs(*, category: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MadlibsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.madlibs(category="funny", count=1)
    # TODO: Handle 'response' of type V1MadlibsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MadlibsErrorBody
```

**Async**

```python
try:
    response = await async_client.games.madlibs(category="funny", count=1)
    # TODO: Handle 'response' of type V1MadlibsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MadlibsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str \| None</code> | Story category<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of stories<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MadlibsResponse](api_verve/models/v1_madlibs_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MadlibsErrorBody](api_verve/errors/madlibs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def maze(*, width: int | None = None, height: int | None = None, difficulty: str | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MazeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.maze(width=15, height=15, difficulty="medium", image=True, solution_image=True)
    # TODO: Handle 'response' of type V1MazeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MazeErrorBody
```

**Async**

```python
try:
    response = await async_client.games.maze(width=15, height=15, difficulty="medium", image=True, solution_image=True)
    # TODO: Handle 'response' of type V1MazeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MazeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>width</code> | <code>int \| None</code> | Maze width<br>**Default**: <code>None</code> |
| <code>height</code> | <code>int \| None</code> | Maze height<br>**Default**: <code>None</code> |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty level<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable maze image<br>**Default**: <code>None</code> |
| <code>solution_image</code> | <code>bool \| None</code> | Set to true to generate a downloadable solution image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MazeResponse](api_verve/models/v1_maze_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MazeErrorBody](api_verve/errors/maze_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rockpaperscissors(*, choice: str | None = None, rounds: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1RockpaperscissorsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.rockpaperscissors(choice="rock", rounds=5)
    # TODO: Handle 'response' of type V1RockpaperscissorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RockpaperscissorsErrorBody
```

**Async**

```python
try:
    response = await async_client.games.rockpaperscissors(choice="rock", rounds=5)
    # TODO: Handle 'response' of type V1RockpaperscissorsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RockpaperscissorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>choice</code> | <code>str \| None</code> | Your choice - omit for random<br>**Default**: <code>None</code> |
| <code>rounds</code> | <code>int \| None</code> | Number of rounds to play<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RockpaperscissorsResponse](api_verve/models/v1_rockpaperscissors_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RockpaperscissorsErrorBody](api_verve/errors/rockpaperscissors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def slotmachine(*, spins: int | None = None, reels: int | None = None, bet: float | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SlotmachineResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.slotmachine(spins=5, reels=3, bet=1)
    # TODO: Handle 'response' of type V1SlotmachineResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SlotmachineErrorBody
```

**Async**

```python
try:
    response = await async_client.games.slotmachine(spins=5, reels=3, bet=1)
    # TODO: Handle 'response' of type V1SlotmachineResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SlotmachineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>spins</code> | <code>int \| None</code> | Number of spins to simulate<br>**Default**: <code>None</code> |
| <code>reels</code> | <code>int \| None</code> | Number of reels<br>**Default**: <code>None</code> |
| <code>bet</code> | <code>float \| None</code> | Bet amount per spin<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SlotmachineResponse](api_verve/models/v1_slotmachine_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SlotmachineErrorBody](api_verve/errors/slotmachine_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def spellingbee(*, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SpellingbeeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.spellingbee(difficulty="medium", image=True)
    # TODO: Handle 'response' of type V1SpellingbeeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpellingbeeErrorBody
```

**Async**

```python
try:
    response = await async_client.games.spellingbee(difficulty="medium", image=True)
    # TODO: Handle 'response' of type V1SpellingbeeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpellingbeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty: easy, medium, hard (affects word count)<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SpellingbeeResponse](api_verve/models/v1_spellingbee_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SpellingbeeErrorBody](api_verve/errors/spellingbee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def superheroname(*, style: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SuperheronameResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.superheroname(style="dark")
    # TODO: Handle 'response' of type V1SuperheronameResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SuperheronameErrorBody
```

**Async**

```python
try:
    response = await async_client.games.superheroname(style="dark")
    # TODO: Handle 'response' of type V1SuperheronameResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SuperheronameErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>style</code> | <code>str \| None</code> | Name style<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SuperheronameResponse](api_verve/models/v1_superheroname_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SuperheronameErrorBody](api_verve/errors/superheroname_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordladder(*, start: str | None = None, end: str | None = None, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1WordladderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.wordladder(start="cold", end="warm", difficulty="medium", count=1, image=True)
    # TODO: Handle 'response' of type V1WordladderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordladderErrorBody
```

**Async**

```python
try:
    response = await async_client.games.wordladder(start="cold", end="warm", difficulty="medium", count=1, image=True)
    # TODO: Handle 'response' of type V1WordladderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordladderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start</code> | <code>str \| None</code> | Starting word (3-6 letters)<br>**Default**: <code>None</code> |
| <code>end</code> | <code>str \| None</code> | Ending word (same length as start)<br>**Default**: <code>None</code> |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty level<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of puzzles<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordladderResponse](api_verve/models/v1_wordladder_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WordladderErrorBody](api_verve/errors/wordladder_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordscramble(*, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1WordscrambleResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.wordscramble(difficulty="medium", count=5, image=True)
    # TODO: Handle 'response' of type V1WordscrambleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordscrambleErrorBody
```

**Async**

```python
try:
    response = await async_client.games.wordscramble(difficulty="medium", count=5, image=True)
    # TODO: Handle 'response' of type V1WordscrambleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordscrambleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>difficulty</code> | <code>str \| None</code> | Difficulty level (affects word length)<br>**Default**: <code>None</code> |
| <code>count</code> | <code>int \| None</code> | Number of puzzles<br>**Default**: <code>None</code> |
| <code>image</code> | <code>bool \| None</code> | Set to true to generate a downloadable puzzle image<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordscrambleResponse](api_verve/models/v1_wordscramble_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WordscrambleErrorBody](api_verve/errors/wordscramble_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordsearch(body: V1WordsearchRequest | V1WordsearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WordsearchResponse</code></summary>

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

**Sync**

```python
try:
    response = client.games.wordsearch(V1WordsearchRequest(words="some example string"))
    # TODO: Handle 'response' of type V1WordsearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordsearchErrorBody
```

**Async**

```python
try:
    response = await async_client.games.wordsearch(V1WordsearchRequest(words="some example string"))
    # TODO: Handle 'response' of type V1WordsearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordsearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WordsearchRequest](api_verve/models/v1_wordsearch_request.py) \| [V1WordsearchRequestDict](api_verve/models/v1_wordsearch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordsearchResponse](api_verve/models/v1_wordsearch_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WordsearchErrorBody](api_verve/errors/wordsearch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Geography

> Source: [Geography](api_verve/apis/geography.py)

<details>
<summary><code>def citieslookup(city: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CitieslookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.citieslookup("San Francisco", limit=5)
    # TODO: Handle 'response' of type V1CitieslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CitieslookupErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.citieslookup("San Francisco", limit=5)
    # TODO: Handle 'response' of type V1CitieslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CitieslookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str</code> | The city name for which you want to get the data (e.g., New York) |
| <code>limit</code> | <code>int \| None</code> | Limit number of cities that match your search criteria<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CitieslookupResponse](api_verve/models/v1_citieslookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CitieslookupErrorBody](api_verve/errors/citieslookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def coordinatesaresea(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None) -> V1CoordinatesareseaResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.coordinatesaresea(37.7749, -122.4194)
    # TODO: Handle 'response' of type V1CoordinatesareseaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CoordinatesareseaErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.coordinatesaresea(37.7749, -122.4194)
    # TODO: Handle 'response' of type V1CoordinatesareseaResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CoordinatesareseaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | The latitude of the coordinates |
| <code>lon</code> | <code>float</code> | The longitude of the coordinates |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CoordinatesareseaResponse](api_verve/models/v1_coordinatesaresea_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CoordinatesareseaErrorBody](api_verve/errors/coordinatesaresea_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countryborders(country: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CountrybordersResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.countryborders("CA")
    # TODO: Handle 'response' of type V1CountrybordersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountrybordersErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.countryborders("CA")
    # TODO: Handle 'response' of type V1CountrybordersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountrybordersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The Country 2 Letter ISO code (e.g., CA) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountrybordersResponse](api_verve/models/v1_countryborders_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CountrybordersErrorBody](api_verve/errors/countryborders_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countryboundaries(country: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CountryboundariesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.countryboundaries("CA")
    # TODO: Handle 'response' of type V1CountryboundariesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountryboundariesErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.countryboundaries("CA")
    # TODO: Handle 'response' of type V1CountryboundariesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountryboundariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The Country 2 Letter ISO code (e.g., CA) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountryboundariesResponse](api_verve/models/v1_countryboundaries_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CountryboundariesErrorBody](api_verve/errors/countryboundaries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countryflags(country: str, format_: str, shape: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CountryflagsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.countryflags("ZW", "png", "circle")
    # TODO: Handle 'response' of type V1CountryflagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountryflagsErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.countryflags("ZW", "png", "circle")
    # TODO: Handle 'response' of type V1CountryflagsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountryflagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The 2 letter ISO Country Code (e.g. ZW) |
| <code>format_</code> | <code>str</code> | The format of the flag image |
| <code>shape</code> | <code>str</code> | The shape of the flag image |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountryflagsResponse](api_verve/models/v1_countryflags_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CountryflagsErrorBody](api_verve/errors/countryflags_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countrylanguages(country: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CountrylanguagesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.countrylanguages("ZW")
    # TODO: Handle 'response' of type V1CountrylanguagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountrylanguagesErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.countrylanguages("ZW")
    # TODO: Handle 'response' of type V1CountrylanguagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountrylanguagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The Country 2 letter ISO code for which you want to get languages for data (e.g., ZW) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountrylanguagesResponse](api_verve/models/v1_countrylanguages_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CountrylanguagesErrorBody](api_verve/errors/countrylanguages_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countrylookup(country: str, *, majorcities: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CountrylookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.countrylookup("USA", majorcities=True)
    # TODO: Handle 'response' of type V1CountrylookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountrylookupErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.countrylookup("USA", majorcities=True)
    # TODO: Handle 'response' of type V1CountrylookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountrylookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>str</code> | The Country name or ISO code of the country for which you want to get the data (e.g., USA) |
| <code>majorcities</code> | <code>bool \| None</code> | Specify if you would like to return all major cities of the country found<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountrylookupResponse](api_verve/models/v1_countrylookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CountrylookupErrorBody](api_verve/errors/countrylookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countydata(state: str, county: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CountydataResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.countydata("MO", "Jackson")
    # TODO: Handle 'response' of type V1CountydataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountydataErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.countydata("MO", "Jackson")
    # TODO: Handle 'response' of type V1CountydataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CountydataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>str</code> | The two letter name of the US state the county is in (e.g., MO) |
| <code>county</code> | <code>str</code> | The name of the US county to get data about (e.g. Jackson) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CountydataResponse](api_verve/models/v1_countydata_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CountydataErrorBody](api_verve/errors/countydata_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def distancecalculator(lat1: float, lon1: float, lat2: float, lon2: float, *, request_options: RequestOptionsOrDict | None = None) -> V1DistancecalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.distancecalculator(36.7783, -119.4179, 34.0522, -118.2437)
    # TODO: Handle 'response' of type V1DistancecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DistancecalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.distancecalculator(36.7783, -119.4179, 34.0522, -118.2437)
    # TODO: Handle 'response' of type V1DistancecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DistancecalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat1</code> | <code>float</code> | The latitude of the first location |
| <code>lon1</code> | <code>float</code> | The longitude of the first location |
| <code>lat2</code> | <code>float</code> | The latitude of the second location |
| <code>lon2</code> | <code>float</code> | The longitude of the second location |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DistancecalculatorResponse](api_verve/models/v1_distancecalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DistancecalculatorErrorBody](api_verve/errors/distancecalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hardinesszone(zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1HardinesszoneResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.hardinesszone("97201")
    # TODO: Handle 'response' of type V1HardinesszoneResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HardinesszoneErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.hardinesszone("97201")
    # TODO: Handle 'response' of type V1HardinesszoneResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HardinesszoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zip_</code> | <code>str</code> | The zip code to get the USDA Plant Hardiness Zone for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HardinesszoneResponse](api_verve/models/v1_hardinesszone_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HardinesszoneErrorBody](api_verve/errors/hardinesszone_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reversegeocode(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None) -> V1ReversegeocodeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.reversegeocode(40.714224, -73.961452)
    # TODO: Handle 'response' of type V1ReversegeocodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReversegeocodeErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.reversegeocode(40.714224, -73.961452)
    # TODO: Handle 'response' of type V1ReversegeocodeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReversegeocodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | The latitude of the coordinates |
| <code>lon</code> | <code>float</code> | The longitude of the coordinates |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReversegeocodeResponse](api_verve/models/v1_reversegeocode_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ReversegeocodeErrorBody](api_verve/errors/reversegeocode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stateboundaries(state: str, *, request_options: RequestOptionsOrDict | None = None) -> V1StateboundariesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.stateboundaries("CA")
    # TODO: Handle 'response' of type V1StateboundariesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StateboundariesErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.stateboundaries("CA")
    # TODO: Handle 'response' of type V1StateboundariesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StateboundariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>state</code> | <code>str</code> | The 2 Letter State Code (e.g., CA) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StateboundariesResponse](api_verve/models/v1_stateboundaries_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[StateboundariesErrorBody](api_verve/errors/stateboundaries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def zipcodes(zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ZipcodesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.geography.zipcodes("64082")
    # TODO: Handle 'response' of type V1ZipcodesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ZipcodesErrorBody
```

**Async**

```python
try:
    response = await async_client.geography.zipcodes("64082")
    # TODO: Handle 'response' of type V1ZipcodesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ZipcodesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>zip_</code> | <code>str</code> | The zip code for which you want to get the data |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ZipcodesResponse](api_verve/models/v1_zipcodes_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ZipcodesErrorBody](api_verve/errors/zipcodes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## HealthWellness

> Source: [HealthWellness](api_verve/apis/health_wellness.py)

<details>
<summary><code>def bmicalculator(weight: float, height: float, unit: str, *, age: float | None = None, gender: str | None = None, activity_level: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1BmicalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.health_wellness.bmicalculator(
        180, 70, "imperial", age=30, gender="male", activity_level="moderate"
    )
    # TODO: Handle 'response' of type V1BmicalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BmicalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.health_wellness.bmicalculator(
        180, 70, "imperial", age=30, gender="male", activity_level="moderate"
    )
    # TODO: Handle 'response' of type V1BmicalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BmicalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>weight</code> | <code>float</code> | Weight in kg (metric) or lbs (imperial) |
| <code>height</code> | <code>float</code> | Height in cm (metric) or inches (imperial) |
| <code>unit</code> | <code>str</code> | Unit system for weight and height |
| <code>age</code> | <code>float \| None</code> | Age in years (required for BMR/TDEE calculations)<br>**Default**: <code>None</code> |
| <code>gender</code> | <code>str \| None</code> | Gender (required for BMR/TDEE calculations)<br>**Default**: <code>None</code> |
| <code>activity_level</code> | <code>str \| None</code> | Activity level (required for TDEE/calorie calculations)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BmicalculatorResponse](api_verve/models/v1_bmicalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BmicalculatorErrorBody](api_verve/errors/bmicalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def exercises(muscle: str, *, name: str | None = None, equipment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ExercisesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.health_wellness.exercises("chest", name="barbell", equipment="barbell")
    # TODO: Handle 'response' of type V1ExercisesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExercisesErrorBody
```

**Async**

```python
try:
    response = await async_client.health_wellness.exercises("chest", name="barbell", equipment="barbell")
    # TODO: Handle 'response' of type V1ExercisesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExercisesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>muscle</code> | <code>str</code> | The muscle group to get exercises for |
| <code>name</code> | <code>str \| None</code> | The name of the exercise to get information about<br>**Default**: <code>None</code> |
| <code>equipment</code> | <code>str \| None</code> | The equipment used for the exercise<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ExercisesResponse](api_verve/models/v1_exercises_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ExercisesErrorBody](api_verve/errors/exercises_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Images

> Source: [Images](api_verve/apis/images.py)

<details>
<summary><code>def facedetect(*, confidence: float | None = None, image: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> V1FacedetectResponse</code></summary>

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

**Sync**

```python
try:
    response = client.images.facedetect()
    # TODO: Handle 'response' of type V1FacedetectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FacedetectErrorBody
```

**Async**

```python
try:
    response = await async_client.images.facedetect()
    # TODO: Handle 'response' of type V1FacedetectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FacedetectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>confidence</code> | <code>float \| None</code> | Minimum confidence threshold for face detection (0.1 to 1.0)<br>**Default**: <code>None</code> |
| <code>image</code> | <code>FileInput \| None</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, .webp, max 10MB)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FacedetectResponse](api_verve/models/v1_facedetect_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[FacedetectErrorBody](api_verve/errors/facedetect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def heicconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1HeicconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.images.heicconverter("png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080)
    # TODO: Handle 'response' of type V1HeicconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HeicconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.images.heicconverter(
        "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
    )
    # TODO: Handle 'response' of type V1HeicconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HeicconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>output_format</code> | <code>str</code> | Target format |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .heic, .heif, max 10MB) |
| <code>quality</code> | <code>int \| None</code> | Output quality (applies to jpg/webp)<br>**Default**: <code>None</code> |
| <code>max_width</code> | <code>int \| None</code> | Maximum width in pixels (maintains aspect ratio)<br>**Default**: <code>None</code> |
| <code>max_height</code> | <code>int \| None</code> | Maximum height in pixels (maintains aspect ratio)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HeicconverterResponse](api_verve/models/v1_heicconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HeicconverterErrorBody](api_verve/errors/heicconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def imageconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ImageconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.images.imageconverter(
        "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
    )
    # TODO: Handle 'response' of type V1ImageconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImageconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.images.imageconverter(
        "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
    )
    # TODO: Handle 'response' of type V1ImageconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImageconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>output_format</code> | <code>str</code> | Target format |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .heic, .heif, .avif, .webp, .png, .jpg, .jpeg, .gif, .tiff, .tif, .bmp, .pdf, .svg, max 10MB) |
| <code>quality</code> | <code>int \| None</code> | Output quality (applies to jpg/webp)<br>**Default**: <code>None</code> |
| <code>max_width</code> | <code>int \| None</code> | Maximum width in pixels (maintains aspect ratio)<br>**Default**: <code>None</code> |
| <code>max_height</code> | <code>int \| None</code> | Maximum height in pixels (maintains aspect ratio)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ImageconverterResponse](api_verve/models/v1_imageconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ImageconverterErrorBody](api_verve/errors/imageconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nsfwimagedetector(image: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> V1NsfwimagedetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.images.nsfwimagedetector(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type V1NsfwimagedetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NsfwimagedetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.images.nsfwimagedetector(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type V1NsfwimagedetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NsfwimagedetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NsfwimagedetectorResponse](api_verve/models/v1_nsfwimagedetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NsfwimagedetectorErrorBody](api_verve/errors/nsfwimagedetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def qrcodereader(image: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> V1QrcodereaderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.images.qrcodereader(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type V1QrcodereaderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QrcodereaderErrorBody
```

**Async**

```python
try:
    response = await async_client.images.qrcodereader(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type V1QrcodereaderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QrcodereaderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1QrcodereaderResponse](api_verve/models/v1_qrcodereader_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[QrcodereaderErrorBody](api_verve/errors/qrcodereader_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def svgconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SvgconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.images.svgconverter("png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080)
    # TODO: Handle 'response' of type V1SvgconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SvgconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.images.svgconverter(
        "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
    )
    # TODO: Handle 'response' of type V1SvgconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SvgconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>output_format</code> | <code>str</code> | Target format |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .svg, max 10MB) |
| <code>quality</code> | <code>int \| None</code> | Output quality (applies to jpg/webp)<br>**Default**: <code>None</code> |
| <code>max_width</code> | <code>int \| None</code> | Maximum width in pixels (maintains aspect ratio)<br>**Default**: <code>None</code> |
| <code>max_height</code> | <code>int \| None</code> | Maximum height in pixels (maintains aspect ratio)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SvgconverterResponse](api_verve/models/v1_svgconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SvgconverterErrorBody](api_verve/errors/svgconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webpconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1WebpconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.images.webpconverter("png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080)
    # TODO: Handle 'response' of type V1WebpconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebpconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.images.webpconverter(
        "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
    )
    # TODO: Handle 'response' of type V1WebpconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebpconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>output_format</code> | <code>str</code> | Target format |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .webp, .png, .jpg, .jpeg, .gif, max 10MB) |
| <code>quality</code> | <code>int \| None</code> | Output quality (applies to jpg/webp)<br>**Default**: <code>None</code> |
| <code>max_width</code> | <code>int \| None</code> | Maximum width in pixels (maintains aspect ratio)<br>**Default**: <code>None</code> |
| <code>max_height</code> | <code>int \| None</code> | Maximum height in pixels (maintains aspect ratio)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebpconverterResponse](api_verve/models/v1_webpconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WebpconverterErrorBody](api_verve/errors/webpconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Lifestyle

> Source: [Lifestyle](api_verve/apis/lifestyle.py)

<details>
<summary><code>def duedatecalculator(last_period: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DuedatecalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.lifestyle.duedatecalculator("2025-06-01")
    # TODO: Handle 'response' of type V1DuedatecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DuedatecalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.lifestyle.duedatecalculator("2025-06-01")
    # TODO: Handle 'response' of type V1DuedatecalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DuedatecalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>last_period</code> | <code>str</code> | First day of last menstrual period (YYYY-MM-DD) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DuedatecalculatorResponse](api_verve/models/v1_duedatecalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DuedatecalculatorErrorBody](api_verve/errors/duedatecalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def menstrualcycle(last_period: str, *, cycle_length: int | None = None, period_length: int | None = None, cycles: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MenstrualcycleResponse</code></summary>

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

**Sync**

```python
try:
    response = client.lifestyle.menstrualcycle("2024-01-01", cycle_length=28, period_length=5, cycles=3)
    # TODO: Handle 'response' of type V1MenstrualcycleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MenstrualcycleErrorBody
```

**Async**

```python
try:
    response = await async_client.lifestyle.menstrualcycle("2024-01-01", cycle_length=28, period_length=5, cycles=3)
    # TODO: Handle 'response' of type V1MenstrualcycleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MenstrualcycleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>last_period</code> | <code>str</code> | First day of last menstrual period (YYYY-MM-DD) |
| <code>cycle_length</code> | <code>int \| None</code> | Average cycle length in days<br>**Default**: <code>None</code> |
| <code>period_length</code> | <code>int \| None</code> | Average period duration in days<br>**Default**: <code>None</code> |
| <code>cycles</code> | <code>int \| None</code> | Number of future cycles to calculate<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MenstrualcycleResponse](api_verve/models/v1_menstrualcycle_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MenstrualcycleErrorBody](api_verve/errors/menstrualcycle_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ovulationcalculator(last_period: str, *, cycle_length: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1OvulationcalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.lifestyle.ovulationcalculator("2024-01-01", cycle_length=28)
    # TODO: Handle 'response' of type V1OvulationcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OvulationcalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.lifestyle.ovulationcalculator("2024-01-01", cycle_length=28)
    # TODO: Handle 'response' of type V1OvulationcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type OvulationcalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>last_period</code> | <code>str</code> | First day of last menstrual period (YYYY-MM-DD) |
| <code>cycle_length</code> | <code>int \| None</code> | Average menstrual cycle length in days<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1OvulationcalculatorResponse](api_verve/models/v1_ovulationcalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[OvulationcalculatorErrorBody](api_verve/errors/ovulationcalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MathCalculations

> Source: [MathCalculations](api_verve/apis/math_calculations.py)

<details>
<summary><code>def colorsimilarity(color1: str, color2: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ColorsimilarityResponse</code></summary>

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

**Sync**

```python
try:
    response = client.math_calculations.colorsimilarity("FF5733", "FF6B47")
    # TODO: Handle 'response' of type V1ColorsimilarityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColorsimilarityErrorBody
```

**Async**

```python
try:
    response = await async_client.math_calculations.colorsimilarity("FF5733", "FF6B47")
    # TODO: Handle 'response' of type V1ColorsimilarityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColorsimilarityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>color1</code> | <code>str</code> | First hex color value (with or without # prefix) |
| <code>color2</code> | <code>str</code> | Second hex color value (with or without # prefix) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColorsimilarityResponse](api_verve/models/v1_colorsimilarity_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ColorsimilarityErrorBody](api_verve/errors/colorsimilarity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def daylightduration(latitude: float, longitude: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1DaylightdurationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.math_calculations.daylightduration(40.7128, -74.006, date="2024-06-21")
    # TODO: Handle 'response' of type V1DaylightdurationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DaylightdurationErrorBody
```

**Async**

```python
try:
    response = await async_client.math_calculations.daylightduration(40.7128, -74.006, date="2024-06-21")
    # TODO: Handle 'response' of type V1DaylightdurationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DaylightdurationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>latitude</code> | <code>float</code> | Latitude of the location |
| <code>longitude</code> | <code>float</code> | Longitude of the location |
| <code>date</code> | <code>str \| None</code> | Date in YYYY-MM-DD format (defaults to today)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DaylightdurationResponse](api_verve/models/v1_daylightduration_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DaylightdurationErrorBody](api_verve/errors/daylightduration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fibonaccigenerator(count: int, *, startfrom: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1FibonaccigeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.math_calculations.fibonaccigenerator(10, startfrom=0)
    # TODO: Handle 'response' of type V1FibonaccigeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FibonaccigeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.math_calculations.fibonaccigenerator(10, startfrom=0)
    # TODO: Handle 'response' of type V1FibonaccigeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FibonaccigeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>count</code> | <code>int</code> | Number of Fibonacci numbers to generate |
| <code>startfrom</code> | <code>int \| None</code> | Start from this position in the sequence<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1FibonaccigeneratorResponse](api_verve/models/v1_fibonaccigenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[FibonaccigeneratorErrorBody](api_verve/errors/fibonaccigenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def permutationcombination(n: int, r: int, *, request_options: RequestOptionsOrDict | None = None) -> V1PermutationcombinationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.math_calculations.permutationcombination(10, 3)
    # TODO: Handle 'response' of type V1PermutationcombinationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PermutationcombinationErrorBody
```

**Async**

```python
try:
    response = await async_client.math_calculations.permutationcombination(10, 3)
    # TODO: Handle 'response' of type V1PermutationcombinationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PermutationcombinationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>n</code> | <code>int</code> | Total number of items |
| <code>r</code> | <code>int</code> | Number of items to choose (must be <= n) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PermutationcombinationResponse](api_verve/models/v1_permutationcombination_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PermutationcombinationErrorBody](api_verve/errors/permutationcombination_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def romannumeralmath(roman1: str, roman2: str, *, operation: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1RomannumeralmathResponse</code></summary>

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

**Sync**

```python
try:
    response = client.math_calculations.romannumeralmath("XIV", "VI", operation="add")
    # TODO: Handle 'response' of type V1RomannumeralmathResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RomannumeralmathErrorBody
```

**Async**

```python
try:
    response = await async_client.math_calculations.romannumeralmath("XIV", "VI", operation="add")
    # TODO: Handle 'response' of type V1RomannumeralmathResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RomannumeralmathErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>roman1</code> | <code>str</code> | The first Roman numeral |
| <code>roman2</code> | <code>str</code> | The second Roman numeral |
| <code>operation</code> | <code>str \| None</code> | Operation to perform<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RomannumeralmathResponse](api_verve/models/v1_romannumeralmath_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RomannumeralmathErrorBody](api_verve/errors/romannumeralmath_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tipcalculator(amount: float, *, percentage: float | None = None, people: int | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1TipcalculatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.math_calculations.tipcalculator(100, percentage=18, people=4, currency="USD")
    # TODO: Handle 'response' of type V1TipcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TipcalculatorErrorBody
```

**Async**

```python
try:
    response = await async_client.math_calculations.tipcalculator(100, percentage=18, people=4, currency="USD")
    # TODO: Handle 'response' of type V1TipcalculatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TipcalculatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>amount</code> | <code>float</code> | The bill amount before tip |
| <code>percentage</code> | <code>float \| None</code> | Tip percentage<br>**Default**: <code>None</code> |
| <code>people</code> | <code>int \| None</code> | Number of people to split the bill<br>**Default**: <code>None</code> |
| <code>currency</code> | <code>str \| None</code> | Currency code for display<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TipcalculatorResponse](api_verve/models/v1_tipcalculator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TipcalculatorErrorBody](api_verve/errors/tipcalculator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def truthtable(expression: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TruthtableResponse</code></summary>

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

**Sync**

```python
try:
    response = client.math_calculations.truthtable("A AND B OR C")
    # TODO: Handle 'response' of type V1TruthtableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TruthtableErrorBody
```

**Async**

```python
try:
    response = await async_client.math_calculations.truthtable("A AND B OR C")
    # TODO: Handle 'response' of type V1TruthtableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TruthtableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>expression</code> | <code>str</code> | Boolean expression using A-Z variables and operators (AND, OR, NOT, XOR, NAND, NOR) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TruthtableResponse](api_verve/models/v1_truthtable_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TruthtableErrorBody](api_verve/errors/truthtable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def utmconverter(latitude: float, longitude: float, *, direction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UtmconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.math_calculations.utmconverter(40.7128, -74.006, direction="to_utm")
    # TODO: Handle 'response' of type V1UtmconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UtmconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.math_calculations.utmconverter(40.7128, -74.006, direction="to_utm")
    # TODO: Handle 'response' of type V1UtmconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UtmconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>latitude</code> | <code>float</code> | Latitude (-90 to 90) |
| <code>longitude</code> | <code>float</code> | Longitude (-180 to 180) |
| <code>direction</code> | <code>str \| None</code> | Conversion direction<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UtmconverterResponse](api_verve/models/v1_utmconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UtmconverterErrorBody](api_verve/errors/utmconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Networking

> Source: [Networking](api_verve/apis/networking.py)

<details>
<summary><code>def bluetoothlookup(companyid: str, *, request_options: RequestOptionsOrDict | None = None) -> V1BluetoothlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.bluetoothlookup("76")
    # TODO: Handle 'response' of type V1BluetoothlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BluetoothlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.bluetoothlookup("76")
    # TODO: Handle 'response' of type V1BluetoothlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BluetoothlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>companyid</code> | <code>str</code> | The Bluetooth SIG company identifier (decimal or hex with 0x prefix). For example, 76 or 0x4C for Apple. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BluetoothlookupResponse](api_verve/models/v1_bluetoothlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BluetoothlookupErrorBody](api_verve/errors/bluetoothlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def botdetector(ua: str, *, ip: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1BotdetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.botdetector("Googlebot/2.1 (+http://www.google.com/bot.html)", ip="66.249.66.1")
    # TODO: Handle 'response' of type V1BotdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BotdetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.botdetector(
        "Googlebot/2.1 (+http://www.google.com/bot.html)", ip="66.249.66.1"
    )
    # TODO: Handle 'response' of type V1BotdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BotdetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ua</code> | <code>str</code> | The user agent string to analyze (URL encoded) |
| <code>ip</code> | <code>str \| None</code> | Optional IP the request came from. When the user agent claims to be a Google, Bing, OpenAI or Apple crawler, it is checked against that operator's published IP ranges<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BotdetectorResponse](api_verve/models/v1_botdetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BotdetectorErrorBody](api_verve/errors/botdetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contentfilter(body: V1ContentfilterRequest | V1ContentfilterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ContentfilterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.contentfilter(V1ContentfilterRequest(url="some example string"))
    # TODO: Handle 'response' of type V1ContentfilterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContentfilterErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.contentfilter(V1ContentfilterRequest(url="some example string"))
    # TODO: Handle 'response' of type V1ContentfilterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContentfilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ContentfilterRequest](api_verve/models/v1_contentfilter_request.py) \| [V1ContentfilterRequestDict](api_verve/models/v1_contentfilter_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ContentfilterResponse](api_verve/models/v1_contentfilter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ContentfilterErrorBody](api_verve/errors/contentfilter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ipblacklistlookup(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1IpblacklistlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.ipblacklistlookup("185.220.101.1")
    # TODO: Handle 'response' of type V1IpblacklistlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IpblacklistlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.ipblacklistlookup("185.220.101.1")
    # TODO: Handle 'response' of type V1IpblacklistlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IpblacklistlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | The IP address to check against blocklists |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IpblacklistlookupResponse](api_verve/models/v1_ipblacklistlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[IpblacklistlookupErrorBody](api_verve/errors/ipblacklistlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def iplookup(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1IplookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.iplookup("173.172.81.20")
    # TODO: Handle 'response' of type V1IplookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IplookupErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.iplookup("173.172.81.20")
    # TODO: Handle 'response' of type V1IplookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IplookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | The IP address for which you want to get the location data (e.g., 173.172.81.20) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IplookupResponse](api_verve/models/v1_iplookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[IplookupErrorBody](api_verve/errors/iplookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def macaddresslookup(mac: str, *, request_options: RequestOptionsOrDict | None = None) -> V1MacaddresslookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.macaddresslookup("00-B0-D0-63-C2-26")
    # TODO: Handle 'response' of type V1MacaddresslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MacaddresslookupErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.macaddresslookup("00-B0-D0-63-C2-26")
    # TODO: Handle 'response' of type V1MacaddresslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MacaddresslookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mac</code> | <code>str</code> | The MAC address for which you want to get the data (e.g., 00-B0-D0-63-C2-26) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MacaddresslookupResponse](api_verve/models/v1_macaddresslookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MacaddresslookupErrorBody](api_verve/errors/macaddresslookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nameservers(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> V1NameserversResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.nameservers("google.com")
    # TODO: Handle 'response' of type V1NameserversResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NameserversErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.nameservers("google.com")
    # TODO: Handle 'response' of type V1NameserversResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NameserversErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain name to lookup nameservers for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NameserversResponse](api_verve/models/v1_nameservers_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NameserversErrorBody](api_verve/errors/nameservers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def phishingcheck(body: V1PhishingcheckRequest | V1PhishingcheckRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1PhishingcheckResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.phishingcheck(V1PhishingcheckRequest(domain="some example string"))
    # TODO: Handle 'response' of type V1PhishingcheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PhishingcheckErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.phishingcheck(V1PhishingcheckRequest(domain="some example string"))
    # TODO: Handle 'response' of type V1PhishingcheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PhishingcheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1PhishingcheckRequest](api_verve/models/v1_phishingcheck_request.py) \| [V1PhishingcheckRequestDict](api_verve/models/v1_phishingcheck_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PhishingcheckResponse](api_verve/models/v1_phishingcheck_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PhishingcheckErrorBody](api_verve/errors/phishingcheck_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def pinger(body: V1PingerRequest | V1PingerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1PingerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.pinger(V1PingerRequest(host="some example string"))
    # TODO: Handle 'response' of type V1PingerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PingerErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.pinger(V1PingerRequest(host="some example string"))
    # TODO: Handle 'response' of type V1PingerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PingerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1PingerRequest](api_verve/models/v1_pinger_request.py) \| [V1PingerRequestDict](api_verve/models/v1_pinger_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PingerResponse](api_verve/models/v1_pinger_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PingerErrorBody](api_verve/errors/pinger_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tldlookup(tld: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TldlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.tldlookup("com")
    # TODO: Handle 'response' of type V1TldlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TldlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.tldlookup("com")
    # TODO: Handle 'response' of type V1TldlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TldlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tld</code> | <code>str</code> | The top-level domain to look up (with or without leading dot) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TldlookupResponse](api_verve/models/v1_tldlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TldlookupErrorBody](api_verve/errors/tldlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tlscheck(domain: str, *, port: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1TlscheckResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.tlscheck("amazon.com", port=443)
    # TODO: Handle 'response' of type V1TlscheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TlscheckErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.tlscheck("amazon.com", port=443)
    # TODO: Handle 'response' of type V1TlscheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TlscheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain to check the TLS/SSL configuration for |
| <code>port</code> | <code>int \| None</code> | The port to connect to (usually 443 for HTTPS)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TlscheckResponse](api_verve/models/v1_tlscheck_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TlscheckErrorBody](api_verve/errors/tlscheck_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tordetect(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TordetectResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.tordetect("185.189.183.143")
    # TODO: Handle 'response' of type V1TordetectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TordetectErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.tordetect("185.189.183.143")
    # TODO: Handle 'response' of type V1TordetectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TordetectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | The IP address to check against the Tor exit node list |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TordetectResponse](api_verve/models/v1_tordetect_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TordetectErrorBody](api_verve/errors/tordetect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def usbvendorlookup(vendorid: str, *, productid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1UsbvendorlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.usbvendorlookup("05AC", productid="8290")
    # TODO: Handle 'response' of type V1UsbvendorlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsbvendorlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.usbvendorlookup("05AC", productid="8290")
    # TODO: Handle 'response' of type V1UsbvendorlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsbvendorlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorid</code> | <code>str</code> | The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple) |
| <code>productid</code> | <code>str \| None</code> | The USB product ID in 4-digit hex format (optional)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UsbvendorlookupResponse](api_verve/models/v1_usbvendorlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UsbvendorlookupErrorBody](api_verve/errors/usbvendorlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vpndetector(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> V1VpndetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.networking.vpndetector("103.62.49.210")
    # TODO: Handle 'response' of type V1VpndetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VpndetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.networking.vpndetector("103.62.49.210")
    # TODO: Handle 'response' of type V1VpndetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VpndetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | The IP address you want to check for VPN usage |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VpndetectorResponse](api_verve/models/v1_vpndetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[VpndetectorErrorBody](api_verve/errors/vpndetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](api_verve/apis/news.py)

<details>
<summary><code>def news(category: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1NewsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.news.news("technology", limit=10)
    # TODO: Handle 'response' of type V1NewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NewsErrorBody
```

**Async**

```python
try:
    response = await async_client.news.news("technology", limit=10)
    # TODO: Handle 'response' of type V1NewsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>category</code> | <code>str</code> | The news category for which you want to get the news. Allowed values: business, entertainment, world, health, science, sports, technology |
| <code>limit</code> | <code>int \| None</code> | Maximum number of articles to return<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1NewsResponse](api_verve/models/v1_news_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[NewsErrorBody](api_verve/errors/news_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Parsers

> Source: [Parsers](api_verve/apis/parsers.py)

<details>
<summary><code>def humannameparser(name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1HumannameparserResponse</code></summary>

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

**Sync**

```python
try:
    response = client.parsers.humannameparser("MR. MARTINO PETROS DE FLORENCE (TINO) Jr.")
    # TODO: Handle 'response' of type V1HumannameparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HumannameparserErrorBody
```

**Async**

```python
try:
    response = await async_client.parsers.humannameparser("MR. MARTINO PETROS DE FLORENCE (TINO) Jr.")
    # TODO: Handle 'response' of type V1HumannameparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HumannameparserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The human name to parse |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HumannameparserResponse](api_verve/models/v1_humannameparser_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HumannameparserErrorBody](api_verve/errors/humannameparser_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rsstojson(body: V1RsstojsonRequest | V1RsstojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1RsstojsonResponse</code></summary>

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

**Sync**

```python
try:
    response = client.parsers.rsstojson(V1RsstojsonRequest(url="some example string"))
    # TODO: Handle 'response' of type V1RsstojsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RsstojsonErrorBody
```

**Async**

```python
try:
    response = await async_client.parsers.rsstojson(V1RsstojsonRequest(url="some example string"))
    # TODO: Handle 'response' of type V1RsstojsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RsstojsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1RsstojsonRequest](api_verve/models/v1_rsstojson_request.py) \| [V1RsstojsonRequestDict](api_verve/models/v1_rsstojson_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RsstojsonResponse](api_verve/models/v1_rsstojson_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RsstojsonErrorBody](api_verve/errors/rsstojson_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def streetaddressparser(address: str, *, request_options: RequestOptionsOrDict | None = None) -> V1StreetaddressparserResponse</code></summary>

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

**Sync**

```python
try:
    response = client.parsers.streetaddressparser("1600 Amphitheatre Parkway, Mountain View, CA 90210")
    # TODO: Handle 'response' of type V1StreetaddressparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StreetaddressparserErrorBody
```

**Async**

```python
try:
    response = await async_client.parsers.streetaddressparser("1600 Amphitheatre Parkway, Mountain View, CA 90210")
    # TODO: Handle 'response' of type V1StreetaddressparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StreetaddressparserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>address</code> | <code>str</code> | The street address to parse |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StreetaddressparserResponse](api_verve/models/v1_streetaddressparser_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[StreetaddressparserErrorBody](api_verve/errors/streetaddressparser_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def useragentparser(body: V1UseragentparserRequest | V1UseragentparserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1UseragentparserResponse</code></summary>

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

**Sync**

```python
try:
    response = client.parsers.useragentparser(V1UseragentparserRequest(ua="some example string"))
    # TODO: Handle 'response' of type V1UseragentparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UseragentparserErrorBody
```

**Async**

```python
try:
    response = await async_client.parsers.useragentparser(V1UseragentparserRequest(ua="some example string"))
    # TODO: Handle 'response' of type V1UseragentparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UseragentparserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1UseragentparserRequest](api_verve/models/v1_useragentparser_request.py) \| [V1UseragentparserRequestDict](api_verve/models/v1_useragentparser_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1UseragentparserResponse](api_verve/models/v1_useragentparser_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[UseragentparserErrorBody](api_verve/errors/useragentparser_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ReferenceData

> Source: [ReferenceData](api_verve/apis/reference_data.py)

<details>
<summary><code>def birthstones(month: str, *, request_options: RequestOptionsOrDict | None = None) -> V1BirthstonesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.birthstones("5")
    # TODO: Handle 'response' of type V1BirthstonesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BirthstonesErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.birthstones("5")
    # TODO: Handle 'response' of type V1BirthstonesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BirthstonesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>month</code> | <code>str</code> | The month number (1-12) or name |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1BirthstonesResponse](api_verve/models/v1_birthstones_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[BirthstonesErrorBody](api_verve/errors/birthstones_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def caaparser(body: V1CaaparserRequest | V1CaaparserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1CaaparserResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.caaparser(V1CaaparserRequest(record="some example string"))
    # TODO: Handle 'response' of type V1CaaparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CaaparserErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.caaparser(V1CaaparserRequest(record="some example string"))
    # TODO: Handle 'response' of type V1CaaparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CaaparserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CaaparserRequest](api_verve/models/v1_caaparser_request.py) \| [V1CaaparserRequestDict](api_verve/models/v1_caaparser_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CaaparserResponse](api_verve/models/v1_caaparser_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CaaparserErrorBody](api_verve/errors/caaparser_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def colorbrightness(hex_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ColorbrightnessResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.colorbrightness("FF5733")
    # TODO: Handle 'response' of type V1ColorbrightnessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColorbrightnessErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.colorbrightness("FF5733")
    # TODO: Handle 'response' of type V1ColorbrightnessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColorbrightnessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>hex_</code> | <code>str</code> | Hex color value (with or without # prefix) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColorbrightnessResponse](api_verve/models/v1_colorbrightness_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ColorbrightnessErrorBody](api_verve/errors/colorbrightness_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def colornamefinder(hex_: str, *, closest: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ColornamefinderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.colornamefinder("FF5733", closest=3)
    # TODO: Handle 'response' of type V1ColornamefinderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColornamefinderErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.colornamefinder("FF5733", closest=3)
    # TODO: Handle 'response' of type V1ColornamefinderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ColornamefinderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>hex_</code> | <code>str</code> | Hex color value (with or without # prefix) |
| <code>closest</code> | <code>int \| None</code> | Number of closest color matches to return<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ColornamefinderResponse](api_verve/models/v1_colornamefinder_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ColornamefinderErrorBody](api_verve/errors/colornamefinder_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def httpstatuslookup(code: int, *, request_options: RequestOptionsOrDict | None = None) -> V1HttpstatuslookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.httpstatuslookup(404)
    # TODO: Handle 'response' of type V1HttpstatuslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HttpstatuslookupErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.httpstatuslookup(404)
    # TODO: Handle 'response' of type V1HttpstatuslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HttpstatuslookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>int</code> | HTTP status code to lookup |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HttpstatuslookupResponse](api_verve/models/v1_httpstatuslookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HttpstatuslookupErrorBody](api_verve/errors/httpstatuslookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mayancalendar(date: str, *, request_options: RequestOptionsOrDict | None = None) -> V1MayancalendarResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.mayancalendar("2024-12-21")
    # TODO: Handle 'response' of type V1MayancalendarResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MayancalendarErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.mayancalendar("2024-12-21")
    # TODO: Handle 'response' of type V1MayancalendarResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MayancalendarErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str</code> | The Gregorian date in YYYY-MM-DD format |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MayancalendarResponse](api_verve/models/v1_mayancalendar_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MayancalendarErrorBody](api_verve/errors/mayancalendar_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mimetypelookup(extension: str, *, request_options: RequestOptionsOrDict | None = None) -> V1MimetypelookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.mimetypelookup("pdf")
    # TODO: Handle 'response' of type V1MimetypelookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MimetypelookupErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.mimetypelookup("pdf")
    # TODO: Handle 'response' of type V1MimetypelookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MimetypelookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>extension</code> | <code>str</code> | File extension to lookup (without the leading dot) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MimetypelookupResponse](api_verve/models/v1_mimetypelookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MimetypelookupErrorBody](api_verve/errors/mimetypelookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def portnumberlookup(port: int, *, request_options: RequestOptionsOrDict | None = None) -> V1PortnumberlookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.portnumberlookup(443)
    # TODO: Handle 'response' of type V1PortnumberlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PortnumberlookupErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.portnumberlookup(443)
    # TODO: Handle 'response' of type V1PortnumberlookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PortnumberlookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>port</code> | <code>int</code> | Port number to lookup |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PortnumberlookupResponse](api_verve/models/v1_portnumberlookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PortnumberlookupErrorBody](api_verve/errors/portnumberlookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ringsizeconverter(size: str, from_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1RingsizeconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.ringsizeconverter("7", "us")
    # TODO: Handle 'response' of type V1RingsizeconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RingsizeconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.ringsizeconverter("7", "us")
    # TODO: Handle 'response' of type V1RingsizeconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RingsizeconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>size</code> | <code>str</code> | The ring size to convert |
| <code>from_</code> | <code>str</code> | Source region |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RingsizeconverterResponse](api_verve/models/v1_ringsizeconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RingsizeconverterErrorBody](api_verve/errors/ringsizeconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def shoesizeconverter(size: str, from_: str, *, gender: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1ShoesizeconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.shoesizeconverter("9", "us", gender="men")
    # TODO: Handle 'response' of type V1ShoesizeconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShoesizeconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.shoesizeconverter("9", "us", gender="men")
    # TODO: Handle 'response' of type V1ShoesizeconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShoesizeconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>size</code> | <code>str</code> | The shoe size to convert |
| <code>from_</code> | <code>str</code> | Source region |
| <code>gender</code> | <code>str \| None</code> | Gender sizing<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ShoesizeconverterResponse](api_verve/models/v1_shoesizeconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ShoesizeconverterErrorBody](api_verve/errors/shoesizeconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def srvparser(body: V1SrvparserRequest | V1SrvparserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SrvparserResponse</code></summary>

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

**Sync**

```python
try:
    response = client.reference_data.srvparser(V1SrvparserRequest(record="some example string"))
    # TODO: Handle 'response' of type V1SrvparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SrvparserErrorBody
```

**Async**

```python
try:
    response = await async_client.reference_data.srvparser(V1SrvparserRequest(record="some example string"))
    # TODO: Handle 'response' of type V1SrvparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SrvparserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SrvparserRequest](api_verve/models/v1_srvparser_request.py) \| [V1SrvparserRequestDict](api_verve/models/v1_srvparser_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SrvparserResponse](api_verve/models/v1_srvparser_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SrvparserErrorBody](api_verve/errors/srvparser_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Science

> Source: [Science](api_verve/apis/science.py)

<details>
<summary><code>def julianday(date: str, *, request_options: RequestOptionsOrDict | None = None) -> V1JuliandayResponse</code></summary>

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

**Sync**

```python
try:
    response = client.science.julianday("2024-03-15")
    # TODO: Handle 'response' of type V1JuliandayResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JuliandayErrorBody
```

**Async**

```python
try:
    response = await async_client.science.julianday("2024-03-15")
    # TODO: Handle 'response' of type V1JuliandayResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JuliandayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str</code> | The Gregorian date in YYYY-MM-DD format |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JuliandayResponse](api_verve/models/v1_julianday_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[JuliandayErrorBody](api_verve/errors/julianday_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def meteorites(name: str, *, mass: float | None = None, year: float | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MeteoritesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.science.meteorites("Allende", mass=100, year=1969)
    # TODO: Handle 'response' of type V1MeteoritesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MeteoritesErrorBody
```

**Async**

```python
try:
    response = await async_client.science.meteorites("Allende", mass=100, year=1969)
    # TODO: Handle 'response' of type V1MeteoritesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MeteoritesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the meteorite you want to search for |
| <code>mass</code> | <code>float \| None</code> | Minimum mass of the meteorite in grams<br>**Default**: <code>None</code> |
| <code>year</code> | <code>float \| None</code> | The year the meteorite fell to Earth<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MeteoritesResponse](api_verve/models/v1_meteorites_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MeteoritesErrorBody](api_verve/errors/meteorites_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def periodictable(name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1PeriodictableResponse</code></summary>

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

**Sync**

```python
try:
    response = client.science.periodictable("hydrogen")
    # TODO: Handle 'response' of type V1PeriodictableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PeriodictableErrorBody
```

**Async**

```python
try:
    response = await async_client.science.periodictable("hydrogen")
    # TODO: Handle 'response' of type V1PeriodictableResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PeriodictableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the chemical element to get information about |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PeriodictableResponse](api_verve/models/v1_periodictable_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PeriodictableErrorBody](api_verve/errors/periodictable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def starslookup(name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1StarslookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.science.starslookup("Sirius")
    # TODO: Handle 'response' of type V1StarslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StarslookupErrorBody
```

**Async**

```python
try:
    response = await async_client.science.starslookup("Sirius")
    # TODO: Handle 'response' of type V1StarslookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StarslookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | The name of the star for which you want to get the data (e.g., Sirius) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1StarslookupResponse](api_verve/models/v1_starslookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[StarslookupErrorBody](api_verve/errors/starslookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Security

> Source: [Security](api_verve/apis/security.py)

<details>
<summary><code>def csrparser(body: V1CsrparserRequest | V1CsrparserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1CsrparserResponse</code></summary>

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

**Sync**

```python
try:
    response = client.security.csrparser(V1CsrparserRequest(csr="some example string"))
    # TODO: Handle 'response' of type V1CsrparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CsrparserErrorBody
```

**Async**

```python
try:
    response = await async_client.security.csrparser(V1CsrparserRequest(csr="some example string"))
    # TODO: Handle 'response' of type V1CsrparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CsrparserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1CsrparserRequest](api_verve/models/v1_csrparser_request.py) \| [V1CsrparserRequestDict](api_verve/models/v1_csrparser_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CsrparserResponse](api_verve/models/v1_csrparser_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CsrparserErrorBody](api_verve/errors/csrparser_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def danevalidator(body: V1DanevalidatorRequest | V1DanevalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1DanevalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.security.danevalidator(V1DanevalidatorRequest(record="some example string"))
    # TODO: Handle 'response' of type V1DanevalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DanevalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.security.danevalidator(V1DanevalidatorRequest(record="some example string"))
    # TODO: Handle 'response' of type V1DanevalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DanevalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1DanevalidatorRequest](api_verve/models/v1_danevalidator_request.py) \| [V1DanevalidatorRequestDict](api_verve/models/v1_danevalidator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DanevalidatorResponse](api_verve/models/v1_danevalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DanevalidatorErrorBody](api_verve/errors/danevalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hashgenerator(text: str, *, algorithms: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1HashgeneratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.security.hashgenerator("Hello World", algorithms="sha256,md5")
    # TODO: Handle 'response' of type V1HashgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HashgeneratorErrorBody
```

**Async**

```python
try:
    response = await async_client.security.hashgenerator("Hello World", algorithms="sha256,md5")
    # TODO: Handle 'response' of type V1HashgeneratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HashgeneratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text</code> | <code>str</code> | Text to hash |
| <code>algorithms</code> | <code>str \| None</code> | Comma-separated list of algorithms or 'all'<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HashgeneratorResponse](api_verve/models/v1_hashgenerator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HashgeneratorErrorBody](api_verve/errors/hashgenerator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hmac(body: V1HmacRequest | V1HmacRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1HmacResponse</code></summary>

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

**Sync**

```python
try:
    response = client.security.hmac(V1HmacRequest(message="some example string", secret="some example string"))
    # TODO: Handle 'response' of type V1HmacResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HmacErrorBody
```

**Async**

```python
try:
    response = await async_client.security.hmac(
        V1HmacRequest(message="some example string", secret="some example string")
    )
    # TODO: Handle 'response' of type V1HmacResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HmacErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1HmacRequest](api_verve/models/v1_hmac_request.py) \| [V1HmacRequestDict](api_verve/models/v1_hmac_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1HmacResponse](api_verve/models/v1_hmac_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[HmacErrorBody](api_verve/errors/hmac_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TextProcessing

> Source: [TextProcessing](api_verve/apis/text_processing.py)

<details>
<summary><code>def acronymexpander(acronym: str, *, context: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1AcronymexpanderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.acronymexpander("API", context="software")
    # TODO: Handle 'response' of type V1AcronymexpanderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcronymexpanderErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.acronymexpander("API", context="software")
    # TODO: Handle 'response' of type V1AcronymexpanderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcronymexpanderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acronym</code> | <code>str</code> | The acronym to expand (max 20 characters) |
| <code>context</code> | <code>str \| None</code> | Optional context to help determine the correct meaning<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AcronymexpanderResponse](api_verve/models/v1_acronymexpander_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AcronymexpanderErrorBody](api_verve/errors/acronymexpander_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def anagramdetector(text1: str, text2: str, *, ignorecase: bool | None = None, ignorespaces: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1AnagramdetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.anagramdetector("listen", "silent", ignorecase=True, ignorespaces=True)
    # TODO: Handle 'response' of type V1AnagramdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnagramdetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.anagramdetector(
        "listen", "silent", ignorecase=True, ignorespaces=True
    )
    # TODO: Handle 'response' of type V1AnagramdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AnagramdetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text1</code> | <code>str</code> | The first text to compare |
| <code>text2</code> | <code>str</code> | The second text to compare |
| <code>ignorecase</code> | <code>bool \| None</code> | Ignore case when comparing (default: true)<br>**Default**: <code>None</code> |
| <code>ignorespaces</code> | <code>bool \| None</code> | Ignore spaces when comparing (default: true)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AnagramdetectorResponse](api_verve/models/v1_anagramdetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AnagramdetectorErrorBody](api_verve/errors/anagramdetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def antonym(word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1AntonymResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.antonym("happy", language="Spanish")
    # TODO: Handle 'response' of type V1AntonymResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AntonymErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.antonym("happy", language="Spanish")
    # TODO: Handle 'response' of type V1AntonymResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AntonymErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word to get the antonyms for |
| <code>language</code> | <code>str \| None</code> | Language to return the antonyms in. Defaults to English<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AntonymResponse](api_verve/models/v1_antonym_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AntonymErrorBody](api_verve/errors/antonym_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cronparser(expression: str, *, request_options: RequestOptionsOrDict | None = None) -> V1CronparserResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.cronparser("0 9 * * 1-5")
    # TODO: Handle 'response' of type V1CronparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CronparserErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.cronparser("0 9 * * 1-5")
    # TODO: Handle 'response' of type V1CronparserResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CronparserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>expression</code> | <code>str</code> | The cron expression to parse (5-field or 6-field format) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CronparserResponse](api_verve/models/v1_cronparser_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CronparserErrorBody](api_verve/errors/cronparser_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datamasking(body: V1DatamaskingRequest | V1DatamaskingRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1DatamaskingResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.datamasking(V1DatamaskingRequest(text="some example string"))
    # TODO: Handle 'response' of type V1DatamaskingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatamaskingErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.datamasking(V1DatamaskingRequest(text="some example string"))
    # TODO: Handle 'response' of type V1DatamaskingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatamaskingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1DatamaskingRequest](api_verve/models/v1_datamasking_request.py) \| [V1DatamaskingRequestDict](api_verve/models/v1_datamasking_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DatamaskingResponse](api_verve/models/v1_datamasking_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DatamaskingErrorBody](api_verve/errors/datamasking_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def didyoumean(query: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DidyoumeanResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.didyoumean("what weather today is")
    # TODO: Handle 'response' of type V1DidyoumeanResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DidyoumeanErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.didyoumean("what weather today is")
    # TODO: Handle 'response' of type V1DidyoumeanResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DidyoumeanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | The text you want to check for spelling mistakes |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1DidyoumeanResponse](api_verve/models/v1_didyoumean_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[DidyoumeanErrorBody](api_verve/errors/didyoumean_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def emojidecorator(body: V1EmojidecoratorRequest | V1EmojidecoratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1EmojidecoratorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.emojidecorator(V1EmojidecoratorRequest(text="some example string"))
    # TODO: Handle 'response' of type V1EmojidecoratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmojidecoratorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.emojidecorator(V1EmojidecoratorRequest(text="some example string"))
    # TODO: Handle 'response' of type V1EmojidecoratorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EmojidecoratorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1EmojidecoratorRequest](api_verve/models/v1_emojidecorator_request.py) \| [V1EmojidecoratorRequestDict](api_verve/models/v1_emojidecorator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EmojidecoratorResponse](api_verve/models/v1_emojidecorator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[EmojidecoratorErrorBody](api_verve/errors/emojidecorator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def gibberishdetector(body: V1GibberishdetectorRequest | V1GibberishdetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1GibberishdetectorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.gibberishdetector(V1GibberishdetectorRequest(text="some example string"))
    # TODO: Handle 'response' of type V1GibberishdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GibberishdetectorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.gibberishdetector(
        V1GibberishdetectorRequest(text="some example string")
    )
    # TODO: Handle 'response' of type V1GibberishdetectorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GibberishdetectorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1GibberishdetectorRequest](api_verve/models/v1_gibberishdetector_request.py) \| [V1GibberishdetectorRequestDict](api_verve/models/v1_gibberishdetector_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GibberishdetectorResponse](api_verve/models/v1_gibberishdetector_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GibberishdetectorErrorBody](api_verve/errors/gibberishdetector_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def grammarcheck(body: V1GrammarcheckRequest | V1GrammarcheckRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1GrammarcheckResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.grammarcheck(V1GrammarcheckRequest(text="some example string"))
    # TODO: Handle 'response' of type V1GrammarcheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GrammarcheckErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.grammarcheck(V1GrammarcheckRequest(text="some example string"))
    # TODO: Handle 'response' of type V1GrammarcheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GrammarcheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1GrammarcheckRequest](api_verve/models/v1_grammarcheck_request.py) \| [V1GrammarcheckRequestDict](api_verve/models/v1_grammarcheck_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1GrammarcheckResponse](api_verve/models/v1_grammarcheck_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[GrammarcheckErrorBody](api_verve/errors/grammarcheck_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def isbnvalidator(isbn: str, *, request_options: RequestOptionsOrDict | None = None) -> V1IsbnvalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.isbnvalidator("978-0-306-40615-7")
    # TODO: Handle 'response' of type V1IsbnvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IsbnvalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.isbnvalidator("978-0-306-40615-7")
    # TODO: Handle 'response' of type V1IsbnvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IsbnvalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>isbn</code> | <code>str</code> | The ISBN number to validate (ISBN-10 or ISBN-13, with or without separators) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1IsbnvalidatorResponse](api_verve/models/v1_isbnvalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[IsbnvalidatorErrorBody](api_verve/errors/isbnvalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jsonschemavalidator(body: V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1JsonschemavalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.jsonschemavalidator(
        V1JsonschemavalidatorRequest(schema_value="some example string", json_value="some example string")
    )
    # TODO: Handle 'response' of type V1JsonschemavalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JsonschemavalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.jsonschemavalidator(
        V1JsonschemavalidatorRequest(schema_value="some example string", json_value="some example string")
    )
    # TODO: Handle 'response' of type V1JsonschemavalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JsonschemavalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1JsonschemavalidatorRequest](api_verve/models/v1_jsonschemavalidator_request.py) \| [V1JsonschemavalidatorRequestDict](api_verve/models/v1_jsonschemavalidator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1JsonschemavalidatorResponse](api_verve/models/v1_jsonschemavalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[JsonschemavalidatorErrorBody](api_verve/errors/jsonschemavalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def keywordextractor(body: V1KeywordextractorRequest | V1KeywordextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1KeywordextractorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.keywordextractor(V1KeywordextractorRequest(text="some example string"))
    # TODO: Handle 'response' of type V1KeywordextractorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type KeywordextractorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.keywordextractor(
        V1KeywordextractorRequest(text="some example string")
    )
    # TODO: Handle 'response' of type V1KeywordextractorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type KeywordextractorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1KeywordextractorRequest](api_verve/models/v1_keywordextractor_request.py) \| [V1KeywordextractorRequestDict](api_verve/models/v1_keywordextractor_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1KeywordextractorResponse](api_verve/models/v1_keywordextractor_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[KeywordextractorErrorBody](api_verve/errors/keywordextractor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def leetspeak(body: V1LeetspeakRequest | V1LeetspeakRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1LeetspeakResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.leetspeak(
        V1LeetspeakRequest(text="some example string", mode="some example string")
    )
    # TODO: Handle 'response' of type V1LeetspeakResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LeetspeakErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.leetspeak(
        V1LeetspeakRequest(text="some example string", mode="some example string")
    )
    # TODO: Handle 'response' of type V1LeetspeakResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LeetspeakErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1LeetspeakRequest](api_verve/models/v1_leetspeak_request.py) \| [V1LeetspeakRequestDict](api_verve/models/v1_leetspeak_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LeetspeakResponse](api_verve/models/v1_leetspeak_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LeetspeakErrorBody](api_verve/errors/leetspeak_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lemmatizer(body: V1LemmatizerRequest | V1LemmatizerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1LemmatizerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.lemmatizer(V1LemmatizerRequest(text="some example string"))
    # TODO: Handle 'response' of type V1LemmatizerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LemmatizerErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.lemmatizer(V1LemmatizerRequest(text="some example string"))
    # TODO: Handle 'response' of type V1LemmatizerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LemmatizerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1LemmatizerRequest](api_verve/models/v1_lemmatizer_request.py) \| [V1LemmatizerRequestDict](api_verve/models/v1_lemmatizer_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LemmatizerResponse](api_verve/models/v1_lemmatizer_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LemmatizerErrorBody](api_verve/errors/lemmatizer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def levenshteindistance(body: V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1LevenshteindistanceResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.levenshteindistance(
        V1LevenshteindistanceRequest(string1="some example string", string2="some example string")
    )
    # TODO: Handle 'response' of type V1LevenshteindistanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LevenshteindistanceErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.levenshteindistance(
        V1LevenshteindistanceRequest(string1="some example string", string2="some example string")
    )
    # TODO: Handle 'response' of type V1LevenshteindistanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LevenshteindistanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1LevenshteindistanceRequest](api_verve/models/v1_levenshteindistance_request.py) \| [V1LevenshteindistanceRequestDict](api_verve/models/v1_levenshteindistance_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LevenshteindistanceResponse](api_verve/models/v1_levenshteindistance_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LevenshteindistanceErrorBody](api_verve/errors/levenshteindistance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lexicon(word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1LexiconResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.lexicon("listen")
    # TODO: Handle 'response' of type V1LexiconResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LexiconErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.lexicon("listen")
    # TODO: Handle 'response' of type V1LexiconResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LexiconErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word to analyze |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LexiconResponse](api_verve/models/v1_lexicon_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LexiconErrorBody](api_verve/errors/lexicon_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def linesorter(body: V1LinesorterRequest | V1LinesorterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1LinesorterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.linesorter(V1LinesorterRequest(lines="some example string"))
    # TODO: Handle 'response' of type V1LinesorterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LinesorterErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.linesorter(V1LinesorterRequest(lines="some example string"))
    # TODO: Handle 'response' of type V1LinesorterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LinesorterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1LinesorterRequest](api_verve/models/v1_linesorter_request.py) \| [V1LinesorterRequestDict](api_verve/models/v1_linesorter_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1LinesorterResponse](api_verve/models/v1_linesorter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[LinesorterErrorBody](api_verve/errors/linesorter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdownlinkextractor(body: V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1MarkdownlinkextractorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.markdownlinkextractor(
        V1MarkdownlinkextractorRequest(markdown="some example string")
    )
    # TODO: Handle 'response' of type V1MarkdownlinkextractorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdownlinkextractorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.markdownlinkextractor(
        V1MarkdownlinkextractorRequest(markdown="some example string")
    )
    # TODO: Handle 'response' of type V1MarkdownlinkextractorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarkdownlinkextractorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1MarkdownlinkextractorRequest](api_verve/models/v1_markdownlinkextractor_request.py) \| [V1MarkdownlinkextractorRequestDict](api_verve/models/v1_markdownlinkextractor_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarkdownlinkextractorResponse](api_verve/models/v1_markdownlinkextractor_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MarkdownlinkextractorErrorBody](api_verve/errors/markdownlinkextractor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def palindromechecker(text: str, *, ignorecase: bool | None = None, ignorespaces: bool | None = None, ignorepunctuation: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PalindromecheckerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.palindromechecker(
        "A man a plan a canal Panama", ignorecase=True, ignorespaces=True, ignorepunctuation=True
    )
    # TODO: Handle 'response' of type V1PalindromecheckerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PalindromecheckerErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.palindromechecker(
        "A man a plan a canal Panama", ignorecase=True, ignorespaces=True, ignorepunctuation=True
    )
    # TODO: Handle 'response' of type V1PalindromecheckerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PalindromecheckerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>text</code> | <code>str</code> | The text to check for palindrome. Maximum 20000 characters |
| <code>ignorecase</code> | <code>bool \| None</code> | Ignore case when checking (default: true)<br>**Default**: <code>None</code> |
| <code>ignorespaces</code> | <code>bool \| None</code> | Ignore spaces when checking (default: true)<br>**Default**: <code>None</code> |
| <code>ignorepunctuation</code> | <code>bool \| None</code> | Ignore punctuation when checking (default: true)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PalindromecheckerResponse](api_verve/models/v1_palindromechecker_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PalindromecheckerErrorBody](api_verve/errors/palindromechecker_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def partsofspeech(body: V1PartsofspeechRequest | V1PartsofspeechRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1PartsofspeechResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.partsofspeech(V1PartsofspeechRequest(text="some example string"))
    # TODO: Handle 'response' of type V1PartsofspeechResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PartsofspeechErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.partsofspeech(V1PartsofspeechRequest(text="some example string"))
    # TODO: Handle 'response' of type V1PartsofspeechResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PartsofspeechErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1PartsofspeechRequest](api_verve/models/v1_partsofspeech_request.py) \| [V1PartsofspeechRequestDict](api_verve/models/v1_partsofspeech_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PartsofspeechResponse](api_verve/models/v1_partsofspeech_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PartsofspeechErrorBody](api_verve/errors/partsofspeech_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def phonetic(word: str, *, algorithm: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1PhoneticResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.phonetic("smith", algorithm="both")
    # TODO: Handle 'response' of type V1PhoneticResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PhoneticErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.phonetic("smith", algorithm="both")
    # TODO: Handle 'response' of type V1PhoneticResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PhoneticErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word to encode phonetically |
| <code>algorithm</code> | <code>str \| None</code> | Algorithm to use<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PhoneticResponse](api_verve/models/v1_phonetic_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PhoneticErrorBody](api_verve/errors/phonetic_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def piglatin(body: V1PiglatinRequest | V1PiglatinRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1PiglatinResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.piglatin(V1PiglatinRequest(text="some example string"))
    # TODO: Handle 'response' of type V1PiglatinResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PiglatinErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.piglatin(V1PiglatinRequest(text="some example string"))
    # TODO: Handle 'response' of type V1PiglatinResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PiglatinErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1PiglatinRequest](api_verve/models/v1_piglatin_request.py) \| [V1PiglatinRequestDict](api_verve/models/v1_piglatin_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1PiglatinResponse](api_verve/models/v1_piglatin_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[PiglatinErrorBody](api_verve/errors/piglatin_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def profanityfilter(body: V1ProfanityfilterRequest | V1ProfanityfilterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ProfanityfilterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.profanityfilter(V1ProfanityfilterRequest(text="some example string"))
    # TODO: Handle 'response' of type V1ProfanityfilterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProfanityfilterErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.profanityfilter(V1ProfanityfilterRequest(text="some example string"))
    # TODO: Handle 'response' of type V1ProfanityfilterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ProfanityfilterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ProfanityfilterRequest](api_verve/models/v1_profanityfilter_request.py) \| [V1ProfanityfilterRequestDict](api_verve/models/v1_profanityfilter_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ProfanityfilterResponse](api_verve/models/v1_profanityfilter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ProfanityfilterErrorBody](api_verve/errors/profanityfilter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def readabilityscore(body: V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ReadabilityscoreResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.readabilityscore(V1ReadabilityscoreRequest(text="some example string"))
    # TODO: Handle 'response' of type V1ReadabilityscoreResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReadabilityscoreErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.readabilityscore(
        V1ReadabilityscoreRequest(text="some example string")
    )
    # TODO: Handle 'response' of type V1ReadabilityscoreResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReadabilityscoreErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ReadabilityscoreRequest](api_verve/models/v1_readabilityscore_request.py) \| [V1ReadabilityscoreRequestDict](api_verve/models/v1_readabilityscore_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReadabilityscoreResponse](api_verve/models/v1_readabilityscore_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ReadabilityscoreErrorBody](api_verve/errors/readabilityscore_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def readingtime(body: V1ReadingtimeRequest | V1ReadingtimeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ReadingtimeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.readingtime(V1ReadingtimeRequest(text="some example string"))
    # TODO: Handle 'response' of type V1ReadingtimeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReadingtimeErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.readingtime(V1ReadingtimeRequest(text="some example string"))
    # TODO: Handle 'response' of type V1ReadingtimeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReadingtimeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ReadingtimeRequest](api_verve/models/v1_readingtime_request.py) \| [V1ReadingtimeRequestDict](api_verve/models/v1_readingtime_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReadingtimeResponse](api_verve/models/v1_readingtime_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ReadingtimeErrorBody](api_verve/errors/readingtime_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def regextester(body: V1RegextesterRequest | V1RegextesterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1RegextesterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.regextester(
        V1RegextesterRequest(pattern="some example string", text="some example string")
    )
    # TODO: Handle 'response' of type V1RegextesterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RegextesterErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.regextester(
        V1RegextesterRequest(pattern="some example string", text="some example string")
    )
    # TODO: Handle 'response' of type V1RegextesterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RegextesterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1RegextesterRequest](api_verve/models/v1_regextester_request.py) \| [V1RegextesterRequestDict](api_verve/models/v1_regextester_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RegextesterResponse](api_verve/models/v1_regextester_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RegextesterErrorBody](api_verve/errors/regextester_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def removepunctuation(body: V1RemovepunctuationRequest | V1RemovepunctuationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1RemovepunctuationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.removepunctuation(V1RemovepunctuationRequest(text="some example string"))
    # TODO: Handle 'response' of type V1RemovepunctuationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemovepunctuationErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.removepunctuation(
        V1RemovepunctuationRequest(text="some example string")
    )
    # TODO: Handle 'response' of type V1RemovepunctuationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemovepunctuationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1RemovepunctuationRequest](api_verve/models/v1_removepunctuation_request.py) \| [V1RemovepunctuationRequestDict](api_verve/models/v1_removepunctuation_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RemovepunctuationResponse](api_verve/models/v1_removepunctuation_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[RemovepunctuationErrorBody](api_verve/errors/removepunctuation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reversetext(body: V1ReversetextRequest | V1ReversetextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ReversetextResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.reversetext(V1ReversetextRequest(text="some example string"))
    # TODO: Handle 'response' of type V1ReversetextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReversetextErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.reversetext(V1ReversetextRequest(text="some example string"))
    # TODO: Handle 'response' of type V1ReversetextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReversetextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ReversetextRequest](api_verve/models/v1_reversetext_request.py) \| [V1ReversetextRequestDict](api_verve/models/v1_reversetext_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ReversetextResponse](api_verve/models/v1_reversetext_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[ReversetextErrorBody](api_verve/errors/reversetext_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def slugify(body: V1SlugifyRequest | V1SlugifyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SlugifyResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.slugify(V1SlugifyRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SlugifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SlugifyErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.slugify(V1SlugifyRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SlugifyResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SlugifyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SlugifyRequest](api_verve/models/v1_slugify_request.py) \| [V1SlugifyRequestDict](api_verve/models/v1_slugify_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SlugifyResponse](api_verve/models/v1_slugify_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SlugifyErrorBody](api_verve/errors/slugify_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def spellchecker(body: V1SpellcheckerRequest | V1SpellcheckerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SpellcheckerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.spellchecker(V1SpellcheckerRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SpellcheckerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpellcheckerErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.spellchecker(V1SpellcheckerRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SpellcheckerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SpellcheckerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SpellcheckerRequest](api_verve/models/v1_spellchecker_request.py) \| [V1SpellcheckerRequestDict](api_verve/models/v1_spellchecker_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SpellcheckerResponse](api_verve/models/v1_spellchecker_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SpellcheckerErrorBody](api_verve/errors/spellchecker_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def syllablecounter(body: V1SyllablecounterRequest | V1SyllablecounterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1SyllablecounterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.syllablecounter(V1SyllablecounterRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SyllablecounterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SyllablecounterErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.syllablecounter(V1SyllablecounterRequest(text="some example string"))
    # TODO: Handle 'response' of type V1SyllablecounterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SyllablecounterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1SyllablecounterRequest](api_verve/models/v1_syllablecounter_request.py) \| [V1SyllablecounterRequestDict](api_verve/models/v1_syllablecounter_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SyllablecounterResponse](api_verve/models/v1_syllablecounter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SyllablecounterErrorBody](api_verve/errors/syllablecounter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def taxidvalidator(taxid: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TaxidvalidatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.taxidvalidator("123-45-6789")
    # TODO: Handle 'response' of type V1TaxidvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TaxidvalidatorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.taxidvalidator("123-45-6789")
    # TODO: Handle 'response' of type V1TaxidvalidatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TaxidvalidatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taxid</code> | <code>str</code> | The US Tax ID to validate (SSN, EIN, or ITIN format) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TaxidvalidatorResponse](api_verve/models/v1_taxidvalidator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TaxidvalidatorErrorBody](api_verve/errors/taxidvalidator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tenseconverter(body: V1TenseconverterRequest | V1TenseconverterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TenseconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.tenseconverter(V1TenseconverterRequest(text="some example string"))
    # TODO: Handle 'response' of type V1TenseconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TenseconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.tenseconverter(V1TenseconverterRequest(text="some example string"))
    # TODO: Handle 'response' of type V1TenseconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TenseconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TenseconverterRequest](api_verve/models/v1_tenseconverter_request.py) \| [V1TenseconverterRequestDict](api_verve/models/v1_tenseconverter_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TenseconverterResponse](api_verve/models/v1_tenseconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TenseconverterErrorBody](api_verve/errors/tenseconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def textlanguage(body: V1TextlanguageRequest | V1TextlanguageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TextlanguageResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.textlanguage(V1TextlanguageRequest(text="some example string"))
    # TODO: Handle 'response' of type V1TextlanguageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TextlanguageErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.textlanguage(V1TextlanguageRequest(text="some example string"))
    # TODO: Handle 'response' of type V1TextlanguageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TextlanguageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TextlanguageRequest](api_verve/models/v1_textlanguage_request.py) \| [V1TextlanguageRequestDict](api_verve/models/v1_textlanguage_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TextlanguageResponse](api_verve/models/v1_textlanguage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TextlanguageErrorBody](api_verve/errors/textlanguage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def textsimilarity(body: V1TextsimilarityRequest | V1TextsimilarityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TextsimilarityResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.textsimilarity(
        V1TextsimilarityRequest(text1="some example string", text2="some example string")
    )
    # TODO: Handle 'response' of type V1TextsimilarityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TextsimilarityErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.textsimilarity(
        V1TextsimilarityRequest(text1="some example string", text2="some example string")
    )
    # TODO: Handle 'response' of type V1TextsimilarityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TextsimilarityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TextsimilarityRequest](api_verve/models/v1_textsimilarity_request.py) \| [V1TextsimilarityRequestDict](api_verve/models/v1_textsimilarity_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TextsimilarityResponse](api_verve/models/v1_textsimilarity_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TextsimilarityErrorBody](api_verve/errors/textsimilarity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def textstyler(body: V1TextstylerRequest | V1TextstylerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TextstylerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.textstyler(
        V1TextstylerRequest(text="some example string", style="some example string")
    )
    # TODO: Handle 'response' of type V1TextstylerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TextstylerErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.textstyler(
        V1TextstylerRequest(text="some example string", style="some example string")
    )
    # TODO: Handle 'response' of type V1TextstylerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TextstylerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TextstylerRequest](api_verve/models/v1_textstyler_request.py) \| [V1TextstylerRequestDict](api_verve/models/v1_textstyler_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TextstylerResponse](api_verve/models/v1_textstyler_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TextstylerErrorBody](api_verve/errors/textstyler_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def textsummarizer(body: V1TextsummarizerRequest | V1TextsummarizerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TextsummarizerResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.textsummarizer(V1TextsummarizerRequest(text="some example string"))
    # TODO: Handle 'response' of type V1TextsummarizerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TextsummarizerErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.textsummarizer(V1TextsummarizerRequest(text="some example string"))
    # TODO: Handle 'response' of type V1TextsummarizerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TextsummarizerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TextsummarizerRequest](api_verve/models/v1_textsummarizer_request.py) \| [V1TextsummarizerRequestDict](api_verve/models/v1_textsummarizer_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TextsummarizerResponse](api_verve/models/v1_textsummarizer_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TextsummarizerErrorBody](api_verve/errors/textsummarizer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def texttoemoji(body: V1TexttoemojiRequest | V1TexttoemojiRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TexttoemojiResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.texttoemoji(V1TexttoemojiRequest(text="some example string"))
    # TODO: Handle 'response' of type V1TexttoemojiResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TexttoemojiErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.texttoemoji(V1TexttoemojiRequest(text="some example string"))
    # TODO: Handle 'response' of type V1TexttoemojiResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TexttoemojiErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TexttoemojiRequest](api_verve/models/v1_texttoemoji_request.py) \| [V1TexttoemojiRequestDict](api_verve/models/v1_texttoemoji_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TexttoemojiResponse](api_verve/models/v1_texttoemoji_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TexttoemojiErrorBody](api_verve/errors/texttoemoji_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def titlecapitalization(body: V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TitlecapitalizationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.titlecapitalization(
        V1TitlecapitalizationRequest(text="some example string", style="some example string")
    )
    # TODO: Handle 'response' of type V1TitlecapitalizationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TitlecapitalizationErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.titlecapitalization(
        V1TitlecapitalizationRequest(text="some example string", style="some example string")
    )
    # TODO: Handle 'response' of type V1TitlecapitalizationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TitlecapitalizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TitlecapitalizationRequest](api_verve/models/v1_titlecapitalization_request.py) \| [V1TitlecapitalizationRequestDict](api_verve/models/v1_titlecapitalization_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TitlecapitalizationResponse](api_verve/models/v1_titlecapitalization_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TitlecapitalizationErrorBody](api_verve/errors/titlecapitalization_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translator(body: V1TranslatorRequest | V1TranslatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1TranslatorResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.translator(
        V1TranslatorRequest(text="some example string", target="some example string")
    )
    # TODO: Handle 'response' of type V1TranslatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TranslatorErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.translator(
        V1TranslatorRequest(text="some example string", target="some example string")
    )
    # TODO: Handle 'response' of type V1TranslatorResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TranslatorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1TranslatorRequest](api_verve/models/v1_translator_request.py) \| [V1TranslatorRequestDict](api_verve/models/v1_translator_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1TranslatorResponse](api_verve/models/v1_translator_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[TranslatorErrorBody](api_verve/errors/translator_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vowelcounter(body: V1VowelcounterRequest | V1VowelcounterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1VowelcounterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.vowelcounter(V1VowelcounterRequest(text="some example string"))
    # TODO: Handle 'response' of type V1VowelcounterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VowelcounterErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.vowelcounter(V1VowelcounterRequest(text="some example string"))
    # TODO: Handle 'response' of type V1VowelcounterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VowelcounterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1VowelcounterRequest](api_verve/models/v1_vowelcounter_request.py) \| [V1VowelcounterRequestDict](api_verve/models/v1_vowelcounter_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VowelcounterResponse](api_verve/models/v1_vowelcounter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[VowelcounterErrorBody](api_verve/errors/vowelcounter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def websitereadability(body: V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WebsitereadabilityResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.websitereadability(V1WebsitereadabilityRequest(url="some example string"))
    # TODO: Handle 'response' of type V1WebsitereadabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebsitereadabilityErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.websitereadability(
        V1WebsitereadabilityRequest(url="some example string")
    )
    # TODO: Handle 'response' of type V1WebsitereadabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebsitereadabilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1WebsitereadabilityRequest](api_verve/models/v1_websitereadability_request.py) \| [V1WebsitereadabilityRequestDict](api_verve/models/v1_websitereadability_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WebsitereadabilityResponse](api_verve/models/v1_websitereadability_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WebsitereadabilityErrorBody](api_verve/errors/websitereadability_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordopposite(word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WordoppositeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.wordopposite("hot")
    # TODO: Handle 'response' of type V1WordoppositeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordoppositeErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.wordopposite("hot")
    # TODO: Handle 'response' of type V1WordoppositeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordoppositeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word to get the opposites for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordoppositeResponse](api_verve/models/v1_wordopposite_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WordoppositeErrorBody](api_verve/errors/wordopposite_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordpronunciation(word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WordpronunciationResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.wordpronunciation("hello")
    # TODO: Handle 'response' of type V1WordpronunciationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordpronunciationErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.wordpronunciation("hello")
    # TODO: Handle 'response' of type V1WordpronunciationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordpronunciationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word to get the pronunciation of |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordpronunciationResponse](api_verve/models/v1_wordpronunciation_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WordpronunciationErrorBody](api_verve/errors/wordpronunciation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordrhymes(word: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1WordrhymesResponse</code></summary>

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

**Sync**

```python
try:
    response = client.text_processing.wordrhymes("blue", limit=30)
    # TODO: Handle 'response' of type V1WordrhymesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordrhymesErrorBody
```

**Async**

```python
try:
    response = await async_client.text_processing.wordrhymes("blue", limit=30)
    # TODO: Handle 'response' of type V1WordrhymesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WordrhymesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>word</code> | <code>str</code> | The word for which you want to get rhyming words |
| <code>limit</code> | <code>int \| None</code> | Limit the number of word rhymes returned<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WordrhymesResponse](api_verve/models/v1_wordrhymes_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WordrhymesErrorBody](api_verve/errors/wordrhymes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Transportation

> Source: [Transportation](api_verve/apis/transportation.py)

<details>
<summary><code>def airlinelookup(iata: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AirlinelookupResponse</code></summary>

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

**Sync**

```python
try:
    response = client.transportation.airlinelookup("AA")
    # TODO: Handle 'response' of type V1AirlinelookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirlinelookupErrorBody
```

**Async**

```python
try:
    response = await async_client.transportation.airlinelookup("AA")
    # TODO: Handle 'response' of type V1AirlinelookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirlinelookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iata</code> | <code>str</code> | The IATA code of the airline for which you want to get the information (e.g., AA) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirlinelookupResponse](api_verve/models/v1_airlinelookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AirlinelookupErrorBody](api_verve/errors/airlinelookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def airportcodeconverter(code: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AirportcodeconverterResponse</code></summary>

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

**Sync**

```python
try:
    response = client.transportation.airportcodeconverter("MCI")
    # TODO: Handle 'response' of type V1AirportcodeconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirportcodeconverterErrorBody
```

**Async**

```python
try:
    response = await async_client.transportation.airportcodeconverter("MCI")
    # TODO: Handle 'response' of type V1AirportcodeconverterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirportcodeconverterErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>str</code> | The airport code to convert (IATA: 3 letters, ICAO: 4 letters) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirportcodeconverterResponse](api_verve/models/v1_airportcodeconverter_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AirportcodeconverterErrorBody](api_verve/errors/airportcodeconverter_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def airportdistance(iata1: str, iata2: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AirportdistanceResponse</code></summary>

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

**Sync**

```python
try:
    response = client.transportation.airportdistance("JFK", "LAX")
    # TODO: Handle 'response' of type V1AirportdistanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirportdistanceErrorBody
```

**Async**

```python
try:
    response = await async_client.transportation.airportdistance("JFK", "LAX")
    # TODO: Handle 'response' of type V1AirportdistanceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirportdistanceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iata1</code> | <code>str</code> | The IATA code of the first airport (e.g. JFK) |
| <code>iata2</code> | <code>str</code> | The IATA code of the second airport (e.g. LAX) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirportdistanceResponse](api_verve/models/v1_airportdistance_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AirportdistanceErrorBody](api_verve/errors/airportdistance_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def airports(iata: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AirportsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.transportation.airports("MCI")
    # TODO: Handle 'response' of type V1AirportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirportsErrorBody
```

**Async**

```python
try:
    response = await async_client.transportation.airports("MCI")
    # TODO: Handle 'response' of type V1AirportsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iata</code> | <code>str</code> | The IATA code of the airport for which you want to get the information (e.g., MCI) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirportsResponse](api_verve/models/v1_airports_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AirportsErrorBody](api_verve/errors/airports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def carmodels(make: str, *, year: int | None = None, model: str | None = None, trim: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1CarmodelsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.transportation.carmodels("Toyota", year=2024, model="Camry", trim="Hybrid")
    # TODO: Handle 'response' of type V1CarmodelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CarmodelsErrorBody
```

**Async**

```python
try:
    response = await async_client.transportation.carmodels("Toyota", year=2024, model="Camry", trim="Hybrid")
    # TODO: Handle 'response' of type V1CarmodelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CarmodelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>make</code> | <code>str</code> | The make (manufacturer) of the car (e.g., Toyota, Honda, Ford) |
| <code>year</code> | <code>int \| None</code> | Filter by year (1984-present)<br>**Default**: <code>None</code> |
| <code>model</code> | <code>str \| None</code> | Narrow to a model name (e.g., Camry)<br>**Default**: <code>None</code> |
| <code>trim</code> | <code>str \| None</code> | Narrow to a trim level (e.g., Hybrid)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1CarmodelsResponse](api_verve/models/v1_carmodels_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[CarmodelsErrorBody](api_verve/errors/carmodels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vindecoder(vin: str, *, request_options: RequestOptionsOrDict | None = None) -> V1VindecoderResponse</code></summary>

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

**Sync**

```python
try:
    response = client.transportation.vindecoder("1HGCM82633A004352")
    # TODO: Handle 'response' of type V1VindecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VindecoderErrorBody
```

**Async**

```python
try:
    response = await async_client.transportation.vindecoder("1HGCM82633A004352")
    # TODO: Handle 'response' of type V1VindecoderResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VindecoderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>str</code> | The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as the available characters allow. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1VindecoderResponse](api_verve/models/v1_vindecoder_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[VindecoderErrorBody](api_verve/errors/vindecoder_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Weather

> Source: [Weather](api_verve/apis/weather.py)

<details>
<summary><code>def airquality(city: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AirqualityResponse</code></summary>

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

**Sync**

```python
try:
    response = client.weather.airquality("San Francisco")
    # TODO: Handle 'response' of type V1AirqualityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirqualityErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.airquality("San Francisco")
    # TODO: Handle 'response' of type V1AirqualityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AirqualityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str</code> | The city name for which you want to get the air quality data (e.g., New York) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AirqualityResponse](api_verve/models/v1_airquality_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[AirqualityErrorBody](api_verve/errors/airquality_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def earthquake(*, request_options: RequestOptionsOrDict | None = None) -> V1EarthquakeResponse</code></summary>

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

**Sync**

```python
try:
    response = client.weather.earthquake()
    # TODO: Handle 'response' of type V1EarthquakeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EarthquakeErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.earthquake()
    # TODO: Handle 'response' of type V1EarthquakeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EarthquakeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1EarthquakeResponse](api_verve/models/v1_earthquake_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[EarthquakeErrorBody](api_verve/errors/earthquake_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def marineweather(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None) -> V1MarineweatherResponse</code></summary>

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

**Sync**

```python
try:
    response = client.weather.marineweather(29.48003, -37.62424)
    # TODO: Handle 'response' of type V1MarineweatherResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarineweatherErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.marineweather(29.48003, -37.62424)
    # TODO: Handle 'response' of type V1MarineweatherResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MarineweatherErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | The latitude coordinate of the location |
| <code>lon</code> | <code>float</code> | The longitude coordinate of the location |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MarineweatherResponse](api_verve/models/v1_marineweather_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MarineweatherErrorBody](api_verve/errors/marineweather_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def moonrisemoonset(lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1MoonrisemoonsetResponse</code></summary>

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

**Sync**

```python
try:
    response = client.weather.moonrisemoonset(37.7749, -122.4194, date="01-16-2026")
    # TODO: Handle 'response' of type V1MoonrisemoonsetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MoonrisemoonsetErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.moonrisemoonset(37.7749, -122.4194, date="01-16-2026")
    # TODO: Handle 'response' of type V1MoonrisemoonsetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type MoonrisemoonsetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | The latitude of the location |
| <code>lon</code> | <code>float</code> | The longitude of the location |
| <code>date</code> | <code>str \| None</code> | The date to get the moonrise and moonset times for (MM-dd-yyyy)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1MoonrisemoonsetResponse](api_verve/models/v1_moonrisemoonset_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[MoonrisemoonsetErrorBody](api_verve/errors/moonrisemoonset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def solarpotential(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None) -> V1SolarpotentialResponse</code></summary>

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

**Sync**

```python
try:
    response = client.weather.solarpotential(37.7749, -122.4194)
    # TODO: Handle 'response' of type V1SolarpotentialResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SolarpotentialErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.solarpotential(37.7749, -122.4194)
    # TODO: Handle 'response' of type V1SolarpotentialResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SolarpotentialErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | The latitude of the location |
| <code>lon</code> | <code>float</code> | The longitude of the location |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SolarpotentialResponse](api_verve/models/v1_solarpotential_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SolarpotentialErrorBody](api_verve/errors/solarpotential_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sunrisesunset(lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> V1SunrisesunsetResponse</code></summary>

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

**Sync**

```python
try:
    response = client.weather.sunrisesunset(36.72016, -4.42034, date="01-16-2026")
    # TODO: Handle 'response' of type V1SunrisesunsetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SunrisesunsetErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.sunrisesunset(36.72016, -4.42034, date="01-16-2026")
    # TODO: Handle 'response' of type V1SunrisesunsetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SunrisesunsetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>lat</code> | <code>float</code> | The latitude of the location |
| <code>lon</code> | <code>float</code> | The longitude of the location |
| <code>date</code> | <code>str \| None</code> | The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY : 01-01-2022)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SunrisesunsetResponse](api_verve/models/v1_sunrisesunset_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[SunrisesunsetErrorBody](api_verve/errors/sunrisesunset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def weatherforecast(city: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WeatherforecastResponse</code></summary>

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

**Sync**

```python
try:
    response = client.weather.weatherforecast("San Francisco")
    # TODO: Handle 'response' of type V1WeatherforecastResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WeatherforecastErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.weatherforecast("San Francisco")
    # TODO: Handle 'response' of type V1WeatherforecastResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WeatherforecastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>city</code> | <code>str</code> | The city for which you want to get the current weather (e.g., San Francisco) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WeatherforecastResponse](api_verve/models/v1_weatherforecast_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WeatherforecastErrorBody](api_verve/errors/weatherforecast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def weatherseasons(*, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> V1WeatherseasonsResponse</code></summary>

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

**Sync**

```python
try:
    response = client.weather.weatherseasons(year=2024)
    # TODO: Handle 'response' of type V1WeatherseasonsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WeatherseasonsErrorBody
```

**Async**

```python
try:
    response = await async_client.weather.weatherseasons(year=2024)
    # TODO: Handle 'response' of type V1WeatherseasonsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WeatherseasonsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>year</code> | <code>int \| None</code> | The year to get the dates of the solstice and equinox<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](api_verve/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WeatherseasonsResponse](api_verve/models/v1_weatherseasons_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](api_verve/core/exceptions.py)&#91;[WeatherseasonsErrorBody](api_verve/errors/weatherseasons_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

