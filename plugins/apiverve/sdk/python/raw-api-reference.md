# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [ApiVerveClient](api_verve/client.py)

## AiComputerVision

> Source: [AiComputerVision](api_verve/apis/ai_computer_vision.py)

<details>
<summary><code>def articleideas(topic: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ArticleideasResponse, ArticleideasErrorBody]</code></summary>

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
result = client.ai_computer_vision.with_raw_response.articleideas("software and technology")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ArticleideasResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArticleideasErrorBody
```

**Async**

```python
result = await async_client.ai_computer_vision.with_raw_response.articleideas("software and technology")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ArticleideasResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ArticleideasErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ArticleideasResponse](api_verve/models/v1_articleideas_response.py), [ArticleideasErrorBody](api_verve/errors/articleideas_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ArticleideasResponse](api_verve/models/v1_articleideas_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ArticleideasErrorBody](api_verve/errors/articleideas_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def codedetector(body: V1CodedetectorRequest | V1CodedetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CodedetectorResponse, CodedetectorErrorBody]</code></summary>

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
result = client.ai_computer_vision.with_raw_response.codedetector(V1CodedetectorRequest(code="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CodedetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CodedetectorErrorBody
```

**Async**

```python
result = await async_client.ai_computer_vision.with_raw_response.codedetector(
    V1CodedetectorRequest(code="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CodedetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CodedetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CodedetectorResponse](api_verve/models/v1_codedetector_response.py), [CodedetectorErrorBody](api_verve/errors/codedetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CodedetectorResponse](api_verve/models/v1_codedetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CodedetectorErrorBody](api_verve/errors/codedetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def imagecaption(image: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ImagecaptionResponse, ImagecaptionErrorBody]</code></summary>

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
result = client.ai_computer_vision.with_raw_response.imagecaption(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ImagecaptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImagecaptionErrorBody
```

**Async**

```python
result = await async_client.ai_computer_vision.with_raw_response.imagecaption(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ImagecaptionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImagecaptionErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ImagecaptionResponse](api_verve/models/v1_imagecaption_response.py), [ImagecaptionErrorBody](api_verve/errors/imagecaption_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ImagecaptionResponse](api_verve/models/v1_imagecaption_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ImagecaptionErrorBody](api_verve/errors/imagecaption_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def imagetotext(image: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ImagetotextResponse, ImagetotextErrorBody]</code></summary>

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
result = client.ai_computer_vision.with_raw_response.imagetotext(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ImagetotextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImagetotextErrorBody
```

**Async**

```python
result = await async_client.ai_computer_vision.with_raw_response.imagetotext(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ImagetotextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImagetotextErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ImagetotextResponse](api_verve/models/v1_imagetotext_response.py), [ImagetotextErrorBody](api_verve/errors/imagetotext_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ImagetotextResponse](api_verve/models/v1_imagetotext_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ImagetotextErrorBody](api_verve/errors/imagetotext_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def languagedetector(body: V1LanguagedetectorRequest | V1LanguagedetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LanguagedetectorResponse, LanguagedetectorErrorBody]</code></summary>

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
result = client.ai_computer_vision.with_raw_response.languagedetector(
    V1LanguagedetectorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LanguagedetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LanguagedetectorErrorBody
```

**Async**

```python
result = await async_client.ai_computer_vision.with_raw_response.languagedetector(
    V1LanguagedetectorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LanguagedetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LanguagedetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LanguagedetectorResponse](api_verve/models/v1_languagedetector_response.py), [LanguagedetectorErrorBody](api_verve/errors/languagedetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LanguagedetectorResponse](api_verve/models/v1_languagedetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LanguagedetectorErrorBody](api_verve/errors/languagedetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sentimentanalysis(body: V1SentimentanalysisRequest | V1SentimentanalysisRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SentimentanalysisResponse, SentimentanalysisErrorBody]</code></summary>

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
result = client.ai_computer_vision.with_raw_response.sentimentanalysis(
    V1SentimentanalysisRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SentimentanalysisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SentimentanalysisErrorBody
```

**Async**

```python
result = await async_client.ai_computer_vision.with_raw_response.sentimentanalysis(
    V1SentimentanalysisRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SentimentanalysisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SentimentanalysisErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SentimentanalysisResponse](api_verve/models/v1_sentimentanalysis_response.py), [SentimentanalysisErrorBody](api_verve/errors/sentimentanalysis_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SentimentanalysisResponse](api_verve/models/v1_sentimentanalysis_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SentimentanalysisErrorBody](api_verve/errors/sentimentanalysis_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def chinesezodiac(date: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ChinesezodiacResponse, ChinesezodiacErrorBody]</code></summary>

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
result = client.astrology.with_raw_response.chinesezodiac("1990-01-15")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ChinesezodiacResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChinesezodiacErrorBody
```

**Async**

```python
result = await async_client.astrology.with_raw_response.chinesezodiac("1990-01-15")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ChinesezodiacResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChinesezodiacErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ChinesezodiacResponse](api_verve/models/v1_chinesezodiac_response.py), [ChinesezodiacErrorBody](api_verve/errors/chinesezodiac_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ChinesezodiacResponse](api_verve/models/v1_chinesezodiac_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ChinesezodiacErrorBody](api_verve/errors/chinesezodiac_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def horoscope(sign: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HoroscopeResponse, HoroscopeErrorBody]</code></summary>

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
result = client.astrology.with_raw_response.horoscope("aries")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HoroscopeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HoroscopeErrorBody
```

**Async**

```python
result = await async_client.astrology.with_raw_response.horoscope("aries")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HoroscopeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HoroscopeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HoroscopeResponse](api_verve/models/v1_horoscope_response.py), [HoroscopeErrorBody](api_verve/errors/horoscope_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HoroscopeResponse](api_verve/models/v1_horoscope_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HoroscopeErrorBody](api_verve/errors/horoscope_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def moonphases(*, today: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MoonphasesResponse, MoonphasesErrorBody]</code></summary>

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
result = client.astrology.with_raw_response.moonphases(today=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MoonphasesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MoonphasesErrorBody
```

**Async**

```python
result = await async_client.astrology.with_raw_response.moonphases(today=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MoonphasesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MoonphasesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MoonphasesResponse](api_verve/models/v1_moonphases_response.py), [MoonphasesErrorBody](api_verve/errors/moonphases_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MoonphasesResponse](api_verve/models/v1_moonphases_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MoonphasesErrorBody](api_verve/errors/moonphases_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def moonposition(lat: float, lon: float, *, date: str | None = None, time: str | None = None, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MoonpositionResponse, MoonpositionErrorBody]</code></summary>

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
result = client.astrology.with_raw_response.moonposition(
    37.7749, -122.4194, date="01-16-2026", time="14:30", timezone="America/Los_Angeles"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MoonpositionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MoonpositionErrorBody
```

**Async**

```python
result = await async_client.astrology.with_raw_response.moonposition(
    37.7749, -122.4194, date="01-16-2026", time="14:30", timezone="America/Los_Angeles"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MoonpositionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MoonpositionErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MoonpositionResponse](api_verve/models/v1_moonposition_response.py), [MoonpositionErrorBody](api_verve/errors/moonposition_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MoonpositionResponse](api_verve/models/v1_moonposition_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MoonpositionErrorBody](api_verve/errors/moonposition_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def planetpositions(body: V1PlanetpositionsRequest | V1PlanetpositionsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PlanetpositionsResponse, PlanetpositionsErrorBody]</code></summary>

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
result = client.astrology.with_raw_response.planetpositions(
    V1PlanetpositionsRequest(lat=1.5, lon=1.5, planet="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PlanetpositionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlanetpositionsErrorBody
```

**Async**

```python
result = await async_client.astrology.with_raw_response.planetpositions(
    V1PlanetpositionsRequest(lat=1.5, lon=1.5, planet="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PlanetpositionsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlanetpositionsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PlanetpositionsResponse](api_verve/models/v1_planetpositions_response.py), [PlanetpositionsErrorBody](api_verve/errors/planetpositions_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PlanetpositionsResponse](api_verve/models/v1_planetpositions_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PlanetpositionsErrorBody](api_verve/errors/planetpositions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sunposition(lat: float, lon: float, *, date: str | None = None, time: str | None = None, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SunpositionResponse, SunpositionErrorBody]</code></summary>

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
result = client.astrology.with_raw_response.sunposition(
    37.7749, -122.4194, date="01-16-2026", time="14:30", timezone="America/Los_Angeles"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SunpositionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SunpositionErrorBody
```

**Async**

```python
result = await async_client.astrology.with_raw_response.sunposition(
    37.7749, -122.4194, date="01-16-2026", time="14:30", timezone="America/Los_Angeles"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SunpositionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SunpositionErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SunpositionResponse](api_verve/models/v1_sunposition_response.py), [SunpositionErrorBody](api_verve/errors/sunposition_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SunpositionResponse](api_verve/models/v1_sunposition_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SunpositionErrorBody](api_verve/errors/sunposition_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def agecalculator(dob: str, *, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AgecalculatorResponse, AgecalculatorErrorBody]</code></summary>

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
result = client.calendar.with_raw_response.agecalculator("1990-08-02", timezone="America/Chicago")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AgecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AgecalculatorErrorBody
```

**Async**

```python
result = await async_client.calendar.with_raw_response.agecalculator("1990-08-02", timezone="America/Chicago")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AgecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AgecalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AgecalculatorResponse](api_verve/models/v1_agecalculator_response.py), [AgecalculatorErrorBody](api_verve/errors/agecalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AgecalculatorResponse](api_verve/models/v1_agecalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AgecalculatorErrorBody](api_verve/errors/agecalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datecalculator(start: str, end: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DatecalculatorResponse, DatecalculatorErrorBody]</code></summary>

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
result = client.calendar.with_raw_response.datecalculator("2022-01-01", "2024-08-31")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DatecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatecalculatorErrorBody
```

**Async**

```python
result = await async_client.calendar.with_raw_response.datecalculator("2022-01-01", "2024-08-31")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DatecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatecalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DatecalculatorResponse](api_verve/models/v1_datecalculator_response.py), [DatecalculatorErrorBody](api_verve/errors/datecalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DatecalculatorResponse](api_verve/models/v1_datecalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DatecalculatorErrorBody](api_verve/errors/datecalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def liturgicalcalendar(*, month: int | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LiturgicalcalendarResponse, LiturgicalcalendarErrorBody]</code></summary>

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
result = client.calendar.with_raw_response.liturgicalcalendar(month=2, year=2025)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LiturgicalcalendarResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LiturgicalcalendarErrorBody
```

**Async**

```python
result = await async_client.calendar.with_raw_response.liturgicalcalendar(month=2, year=2025)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LiturgicalcalendarResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LiturgicalcalendarErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LiturgicalcalendarResponse](api_verve/models/v1_liturgicalcalendar_response.py), [LiturgicalcalendarErrorBody](api_verve/errors/liturgicalcalendar_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LiturgicalcalendarResponse](api_verve/models/v1_liturgicalcalendar_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LiturgicalcalendarErrorBody](api_verve/errors/liturgicalcalendar_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def workingdays(country: str, *, month: int | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WorkingdaysResponse, WorkingdaysErrorBody]</code></summary>

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
result = client.calendar.with_raw_response.workingdays("US", month=10, year=2026)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorkingdaysResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WorkingdaysErrorBody
```

**Async**

```python
result = await async_client.calendar.with_raw_response.workingdays("US", month=10, year=2026)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorkingdaysResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WorkingdaysErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WorkingdaysResponse](api_verve/models/v1_workingdays_response.py), [WorkingdaysErrorBody](api_verve/errors/workingdays_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WorkingdaysResponse](api_verve/models/v1_workingdays_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WorkingdaysErrorBody](api_verve/errors/workingdays_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def worldholidays(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WorldholidaysResponse, WorldholidaysErrorBody]</code></summary>

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
result = client.calendar.with_raw_response.worldholidays("US", year=2026)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorldholidaysResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WorldholidaysErrorBody
```

**Async**

```python
result = await async_client.calendar.with_raw_response.worldholidays("US", year=2026)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorldholidaysResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WorldholidaysErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WorldholidaysResponse](api_verve/models/v1_worldholidays_response.py), [WorldholidaysErrorBody](api_verve/errors/worldholidays_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WorldholidaysResponse](api_verve/models/v1_worldholidays_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WorldholidaysErrorBody](api_verve/errors/worldholidays_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def ascii85encoder(text: str, *, action: str | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1Ascii85EncoderResponse, Ascii85EncoderErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.ascii85encoder("Hello World", action="encode", format_="standard")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1Ascii85EncoderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type Ascii85EncoderErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.ascii85encoder(
    "Hello World", action="encode", format_="standard"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1Ascii85EncoderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type Ascii85EncoderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1Ascii85EncoderResponse](api_verve/models/v1_ascii85_encoder_response.py), [Ascii85EncoderErrorBody](api_verve/errors/ascii85_encoder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1Ascii85EncoderResponse](api_verve/models/v1_ascii85_encoder_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[Ascii85EncoderErrorBody](api_verve/errors/ascii85_encoder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def base64(text: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1Base64Response, Base64ErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.base64("Hello World", action="encode")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1Base64Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type Base64ErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.base64("Hello World", action="encode")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1Base64Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type Base64ErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1Base64Response](api_verve/models/v1_base64_response.py), [Base64ErrorBody](api_verve/errors/base64_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1Base64Response](api_verve/models/v1_base64_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[Base64ErrorBody](api_verve/errors/base64_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def colorconverter(hex_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ColorconverterResponse, ColorconverterErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.colorconverter("FF0000")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColorconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColorconverterErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.colorconverter("FF0000")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColorconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColorconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ColorconverterResponse](api_verve/models/v1_colorconverter_response.py), [ColorconverterErrorBody](api_verve/errors/colorconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ColorconverterResponse](api_verve/models/v1_colorconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ColorconverterErrorBody](api_verve/errors/colorconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def csvtojson(body: V1CsvtojsonRequest | V1CsvtojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CsvtojsonResponse, CsvtojsonErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.csvtojson(V1CsvtojsonRequest(csv="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CsvtojsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CsvtojsonErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.csvtojson(V1CsvtojsonRequest(csv="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CsvtojsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CsvtojsonErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CsvtojsonResponse](api_verve/models/v1_csvtojson_response.py), [CsvtojsonErrorBody](api_verve/errors/csvtojson_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CsvtojsonResponse](api_verve/models/v1_csvtojson_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CsvtojsonErrorBody](api_verve/errors/csvtojson_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def filesizeformatter(bytes_: int, *, unit: str | None = None, precision: int | None = None, standard: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FilesizeformatterResponse, FilesizeformatterErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.filesizeformatter(
    1073741824, unit="GB", precision=2, standard="binary"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FilesizeformatterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FilesizeformatterErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.filesizeformatter(
    1073741824, unit="GB", precision=2, standard="binary"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FilesizeformatterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FilesizeformatterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1FilesizeformatterResponse](api_verve/models/v1_filesizeformatter_response.py), [FilesizeformatterErrorBody](api_verve/errors/filesizeformatter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FilesizeformatterResponse](api_verve/models/v1_filesizeformatter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FilesizeformatterErrorBody](api_verve/errors/filesizeformatter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def htmlentities(body: V1HtmlentitiesRequest | V1HtmlentitiesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HtmlentitiesResponse, HtmlentitiesErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.htmlentities(V1HtmlentitiesRequest(html="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HtmlentitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HtmlentitiesErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.htmlentities(
    V1HtmlentitiesRequest(html="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HtmlentitiesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HtmlentitiesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HtmlentitiesResponse](api_verve/models/v1_htmlentities_response.py), [HtmlentitiesErrorBody](api_verve/errors/htmlentities_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HtmlentitiesResponse](api_verve/models/v1_htmlentities_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HtmlentitiesErrorBody](api_verve/errors/htmlentities_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def htmltoimage(body: V1HtmltoimageRequest | V1HtmltoimageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HtmltoimageResponse, HtmltoimageErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.htmltoimage(V1HtmltoimageRequest(html="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HtmltoimageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HtmltoimageErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.htmltoimage(
    V1HtmltoimageRequest(html="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HtmltoimageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HtmltoimageErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HtmltoimageResponse](api_verve/models/v1_htmltoimage_response.py), [HtmltoimageErrorBody](api_verve/errors/htmltoimage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HtmltoimageResponse](api_verve/models/v1_htmltoimage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HtmltoimageErrorBody](api_verve/errors/htmltoimage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jsontocsv(body: V1JsontocsvRequest | V1JsontocsvRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JsontocsvResponse, JsontocsvErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.jsontocsv(V1JsontocsvRequest(json_value="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JsontocsvResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JsontocsvErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.jsontocsv(
    V1JsontocsvRequest(json_value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JsontocsvResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JsontocsvErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1JsontocsvResponse](api_verve/models/v1_jsontocsv_response.py), [JsontocsvErrorBody](api_verve/errors/jsontocsv_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JsontocsvResponse](api_verve/models/v1_jsontocsv_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JsontocsvErrorBody](api_verve/errors/jsontocsv_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jsontojsonp(body: V1JsontojsonpRequest | V1JsontojsonpRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JsontojsonpResponse, JsontojsonpErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.jsontojsonp(V1JsontojsonpRequest(json_value="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JsontojsonpResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JsontojsonpErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.jsontojsonp(
    V1JsontojsonpRequest(json_value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JsontojsonpResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JsontojsonpErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1JsontojsonpResponse](api_verve/models/v1_jsontojsonp_response.py), [JsontojsonpErrorBody](api_verve/errors/jsontojsonp_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JsontojsonpResponse](api_verve/models/v1_jsontojsonp_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JsontojsonpErrorBody](api_verve/errors/jsontojsonp_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jwtdecoder(body: V1JwtdecoderRequest | V1JwtdecoderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JwtdecoderResponse, JwtdecoderErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.jwtdecoder(V1JwtdecoderRequest(token="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JwtdecoderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JwtdecoderErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.jwtdecoder(
    V1JwtdecoderRequest(token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JwtdecoderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JwtdecoderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1JwtdecoderResponse](api_verve/models/v1_jwtdecoder_response.py), [JwtdecoderErrorBody](api_verve/errors/jwtdecoder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JwtdecoderResponse](api_verve/models/v1_jwtdecoder_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JwtdecoderErrorBody](api_verve/errors/jwtdecoder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdowntable(body: V1MarkdowntableRequest | V1MarkdowntableRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MarkdowntableResponse, MarkdowntableErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.markdowntable(
    V1MarkdowntableRequest(headers="some example string", rows="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdowntableResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdowntableErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.markdowntable(
    V1MarkdowntableRequest(headers="some example string", rows="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdowntableResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdowntableErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MarkdowntableResponse](api_verve/models/v1_markdowntable_response.py), [MarkdowntableErrorBody](api_verve/errors/markdowntable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MarkdowntableResponse](api_verve/models/v1_markdowntable_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MarkdowntableErrorBody](api_verve/errors/markdowntable_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdowntohtml(body: V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MarkdowntohtmlResponse, MarkdowntohtmlErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.markdowntohtml(
    V1MarkdowntohtmlRequest(markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdowntohtmlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdowntohtmlErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.markdowntohtml(
    V1MarkdowntohtmlRequest(markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdowntohtmlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdowntohtmlErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MarkdowntohtmlResponse](api_verve/models/v1_markdowntohtml_response.py), [MarkdowntohtmlErrorBody](api_verve/errors/markdowntohtml_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MarkdowntohtmlResponse](api_verve/models/v1_markdowntohtml_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MarkdowntohtmlErrorBody](api_verve/errors/markdowntohtml_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdowntoimage(body: V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MarkdowntoimageResponse, MarkdowntoimageErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.markdowntoimage(
    V1MarkdowntoimageRequest(markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdowntoimageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdowntoimageErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.markdowntoimage(
    V1MarkdowntoimageRequest(markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdowntoimageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdowntoimageErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MarkdowntoimageResponse](api_verve/models/v1_markdowntoimage_response.py), [MarkdowntoimageErrorBody](api_verve/errors/markdowntoimage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MarkdowntoimageResponse](api_verve/models/v1_markdowntoimage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MarkdowntoimageErrorBody](api_verve/errors/markdowntoimage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdowntopdf(body: V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MarkdowntopdfResponse, MarkdowntopdfErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.markdowntopdf(V1MarkdowntopdfRequest(markdown="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdowntopdfResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdowntopdfErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.markdowntopdf(
    V1MarkdowntopdfRequest(markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdowntopdfResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdowntopdfErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MarkdowntopdfResponse](api_verve/models/v1_markdowntopdf_response.py), [MarkdowntopdfErrorBody](api_verve/errors/markdowntopdf_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MarkdowntopdfResponse](api_verve/models/v1_markdowntopdf_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MarkdowntopdfErrorBody](api_verve/errors/markdowntopdf_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def math(body: V1MathRequest | V1MathRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MathResponse, MathErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.math(V1MathRequest(operation="some example string", a=1.5, b=1.5))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MathResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MathErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.math(
    V1MathRequest(operation="some example string", a=1.5, b=1.5)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MathResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MathErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MathResponse](api_verve/models/v1_math_response.py), [MathErrorBody](api_verve/errors/math_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MathResponse](api_verve/models/v1_math_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MathErrorBody](api_verve/errors/math_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def meetingtimeconverter(time: str, from_timezone: str, to_timezone: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MeetingtimeconverterResponse, MeetingtimeconverterErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.meetingtimeconverter(
    "14:30", "America/New_York", "Europe/London", date="2024-03-15"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MeetingtimeconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MeetingtimeconverterErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.meetingtimeconverter(
    "14:30", "America/New_York", "Europe/London", date="2024-03-15"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MeetingtimeconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MeetingtimeconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MeetingtimeconverterResponse](api_verve/models/v1_meetingtimeconverter_response.py), [MeetingtimeconverterErrorBody](api_verve/errors/meetingtimeconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MeetingtimeconverterResponse](api_verve/models/v1_meetingtimeconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MeetingtimeconverterErrorBody](api_verve/errors/meetingtimeconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numberbaseconverter(value: str, *, from_: int | None = None, to: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NumberbaseconverterResponse, NumberbaseconverterErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.numberbaseconverter("255", from_=10, to=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NumberbaseconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NumberbaseconverterErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.numberbaseconverter("255", from_=10, to=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NumberbaseconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NumberbaseconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NumberbaseconverterResponse](api_verve/models/v1_numberbaseconverter_response.py), [NumberbaseconverterErrorBody](api_verve/errors/numberbaseconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NumberbaseconverterResponse](api_verve/models/v1_numberbaseconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NumberbaseconverterErrorBody](api_verve/errors/numberbaseconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def numbertowords(number: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NumbertowordsResponse, NumbertowordsErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.numbertowords(975.07)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NumbertowordsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NumbertowordsErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.numbertowords(975.07)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NumbertowordsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NumbertowordsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NumbertowordsResponse](api_verve/models/v1_numbertowords_response.py), [NumbertowordsErrorBody](api_verve/errors/numbertowords_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NumbertowordsResponse](api_verve/models/v1_numbertowords_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NumbertowordsErrorBody](api_verve/errors/numbertowords_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def placeholdertext(*, style: str | None = None, paragraphs: int | None = None, sentences: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PlaceholdertextResponse, PlaceholdertextErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.placeholdertext(style="tech", paragraphs=3, sentences=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PlaceholdertextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlaceholdertextErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.placeholdertext(style="tech", paragraphs=3, sentences=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PlaceholdertextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlaceholdertextErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PlaceholdertextResponse](api_verve/models/v1_placeholdertext_response.py), [PlaceholdertextErrorBody](api_verve/errors/placeholdertext_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PlaceholdertextResponse](api_verve/models/v1_placeholdertext_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PlaceholdertextErrorBody](api_verve/errors/placeholdertext_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def punycode(text: str, *, mode: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PunycodeResponse, PunycodeErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.punycode("münchen.de", mode="encode")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PunycodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PunycodeErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.punycode("münchen.de", mode="encode")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PunycodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PunycodeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PunycodeResponse](api_verve/models/v1_punycode_response.py), [PunycodeErrorBody](api_verve/errors/punycode_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PunycodeResponse](api_verve/models/v1_punycode_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PunycodeErrorBody](api_verve/errors/punycode_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def querystringbuilder(body: V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1QuerystringbuilderResponse, QuerystringbuilderErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.querystringbuilder(
    V1QuerystringbuilderRequest(params="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1QuerystringbuilderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QuerystringbuilderErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.querystringbuilder(
    V1QuerystringbuilderRequest(params="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1QuerystringbuilderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QuerystringbuilderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1QuerystringbuilderResponse](api_verve/models/v1_querystringbuilder_response.py), [QuerystringbuilderErrorBody](api_verve/errors/querystringbuilder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1QuerystringbuilderResponse](api_verve/models/v1_querystringbuilder_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[QuerystringbuilderErrorBody](api_verve/errors/querystringbuilder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def relativetimeformatter(timestamp: str, *, reference: str | None = None, style: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RelativetimeformatterResponse, RelativetimeformatterErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.relativetimeformatter(
    "1609459200", reference="2024-06-01T00:00:00Z", style="short"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RelativetimeformatterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RelativetimeformatterErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.relativetimeformatter(
    "1609459200", reference="2024-06-01T00:00:00Z", style="short"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RelativetimeformatterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RelativetimeformatterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RelativetimeformatterResponse](api_verve/models/v1_relativetimeformatter_response.py), [RelativetimeformatterErrorBody](api_verve/errors/relativetimeformatter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RelativetimeformatterResponse](api_verve/models/v1_relativetimeformatter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RelativetimeformatterErrorBody](api_verve/errors/relativetimeformatter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def romanconverter(number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RomanconverterResponse, RomanconverterErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.romanconverter(2024)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RomanconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RomanconverterErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.romanconverter(2024)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RomanconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RomanconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RomanconverterResponse](api_verve/models/v1_romanconverter_response.py), [RomanconverterErrorBody](api_verve/errors/romanconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RomanconverterResponse](api_verve/models/v1_romanconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RomanconverterErrorBody](api_verve/errors/romanconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def texttocolor(color: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TexttocolorResponse, TexttocolorErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.texttocolor("turquoise")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TexttocolorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TexttocolorErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.texttocolor("turquoise")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TexttocolorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TexttocolorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TexttocolorResponse](api_verve/models/v1_texttocolor_response.py), [TexttocolorErrorBody](api_verve/errors/texttocolor_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TexttocolorResponse](api_verve/models/v1_texttocolor_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TexttocolorErrorBody](api_verve/errors/texttocolor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unicodeescape(body: V1UnicodeescapeRequest | V1UnicodeescapeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UnicodeescapeResponse, UnicodeescapeErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.unicodeescape(V1UnicodeescapeRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnicodeescapeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnicodeescapeErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.unicodeescape(
    V1UnicodeescapeRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnicodeescapeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnicodeescapeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UnicodeescapeResponse](api_verve/models/v1_unicodeescape_response.py), [UnicodeescapeErrorBody](api_verve/errors/unicodeescape_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UnicodeescapeResponse](api_verve/models/v1_unicodeescape_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UnicodeescapeErrorBody](api_verve/errors/unicodeescape_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unitconverter(value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UnitconverterResponse, UnitconverterErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.unitconverter(100, "lb", "kg")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnitconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnitconverterErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.unitconverter(100, "lb", "kg")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnitconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnitconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UnitconverterResponse](api_verve/models/v1_unitconverter_response.py), [UnitconverterErrorBody](api_verve/errors/unitconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UnitconverterResponse](api_verve/models/v1_unitconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UnitconverterErrorBody](api_verve/errors/unitconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unixtimestamp(timestamp: str, *, format_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UnixtimestampResponse, UnixtimestampErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.unixtimestamp("1609459200", format_="seconds")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnixtimestampResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnixtimestampErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.unixtimestamp("1609459200", format_="seconds")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnixtimestampResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnixtimestampErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UnixtimestampResponse](api_verve/models/v1_unixtimestamp_response.py), [UnixtimestampErrorBody](api_verve/errors/unixtimestamp_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UnixtimestampResponse](api_verve/models/v1_unixtimestamp_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UnixtimestampErrorBody](api_verve/errors/unixtimestamp_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urlencode(body: V1UrlencodeRequest | V1UrlencodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UrlencodeResponse, UrlencodeErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.urlencode(V1UrlencodeRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrlencodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrlencodeErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.urlencode(V1UrlencodeRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrlencodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrlencodeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UrlencodeResponse](api_verve/models/v1_urlencode_response.py), [UrlencodeErrorBody](api_verve/errors/urlencode_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UrlencodeResponse](api_verve/models/v1_urlencode_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UrlencodeErrorBody](api_verve/errors/urlencode_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urltomarkdown(body: V1UrltomarkdownRequest | V1UrltomarkdownRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UrltomarkdownResponse, UrltomarkdownErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.urltomarkdown(V1UrltomarkdownRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrltomarkdownResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrltomarkdownErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.urltomarkdown(
    V1UrltomarkdownRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrltomarkdownResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrltomarkdownErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UrltomarkdownResponse](api_verve/models/v1_urltomarkdown_response.py), [UrltomarkdownErrorBody](api_verve/errors/urltomarkdown_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UrltomarkdownResponse](api_verve/models/v1_urltomarkdown_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UrltomarkdownErrorBody](api_verve/errors/urltomarkdown_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def variablenameconverter(body: V1VariablenameconverterRequest | V1VariablenameconverterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1VariablenameconverterResponse, VariablenameconverterErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.variablenameconverter(
    V1VariablenameconverterRequest(variables="some example string", to="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VariablenameconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablenameconverterErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.variablenameconverter(
    V1VariablenameconverterRequest(variables="some example string", to="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VariablenameconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VariablenameconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1VariablenameconverterResponse](api_verve/models/v1_variablenameconverter_response.py), [VariablenameconverterErrorBody](api_verve/errors/variablenameconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1VariablenameconverterResponse](api_verve/models/v1_variablenameconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[VariablenameconverterErrorBody](api_verve/errors/variablenameconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def websitetotext(body: V1WebsitetotextRequest | V1WebsitetotextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebsitetotextResponse, WebsitetotextErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.websitetotext(V1WebsitetotextRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebsitetotextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebsitetotextErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.websitetotext(
    V1WebsitetotextRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebsitetotextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebsitetotextErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WebsitetotextResponse](api_verve/models/v1_websitetotext_response.py), [WebsitetotextErrorBody](api_verve/errors/websitetotext_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebsitetotextResponse](api_verve/models/v1_websitetotext_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WebsitetotextErrorBody](api_verve/errors/websitetotext_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordstonumbers(words: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WordstonumbersResponse, WordstonumbersErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.wordstonumbers("seven thousand six hundred and twenty")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordstonumbersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordstonumbersErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.wordstonumbers("seven thousand six hundred and twenty")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordstonumbersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordstonumbersErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WordstonumbersResponse](api_verve/models/v1_wordstonumbers_response.py), [WordstonumbersErrorBody](api_verve/errors/wordstonumbers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WordstonumbersResponse](api_verve/models/v1_wordstonumbers_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WordstonumbersErrorBody](api_verve/errors/wordstonumbers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def xmltojson(body: V1XmltojsonRequest | V1XmltojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1XmltojsonResponse, XmltojsonErrorBody]</code></summary>

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
result = client.data_conversion.with_raw_response.xmltojson(V1XmltojsonRequest(xml="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1XmltojsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type XmltojsonErrorBody
```

**Async**

```python
result = await async_client.data_conversion.with_raw_response.xmltojson(V1XmltojsonRequest(xml="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1XmltojsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type XmltojsonErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1XmltojsonResponse](api_verve/models/v1_xmltojson_response.py), [XmltojsonErrorBody](api_verve/errors/xmltojson_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1XmltojsonResponse](api_verve/models/v1_xmltojson_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[XmltojsonErrorBody](api_verve/errors/xmltojson_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def acronymgenerator(text: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AcronymgeneratorResponse, AcronymgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.acronymgenerator("Application Programming Interface")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AcronymgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcronymgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.acronymgenerator("Application Programming Interface")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AcronymgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcronymgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AcronymgeneratorResponse](api_verve/models/v1_acronymgenerator_response.py), [AcronymgeneratorErrorBody](api_verve/errors/acronymgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AcronymgeneratorResponse](api_verve/models/v1_acronymgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AcronymgeneratorErrorBody](api_verve/errors/acronymgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def babynamegenerator(gender: str, *, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BabynamegeneratorResponse, BabynamegeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.babynamegenerator("male", count=1, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BabynamegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BabynamegeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.babynamegenerator("male", count=1, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BabynamegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BabynamegeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BabynamegeneratorResponse](api_verve/models/v1_babynamegenerator_response.py), [BabynamegeneratorErrorBody](api_verve/errors/babynamegenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BabynamegeneratorResponse](api_verve/models/v1_babynamegenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BabynamegeneratorErrorBody](api_verve/errors/babynamegenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def barcodegenerator(body: V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BarcodegeneratorResponse, BarcodegeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.barcodegenerator(
    V1BarcodegeneratorRequest(data="some example string", type_="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BarcodegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BarcodegeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.barcodegenerator(
    V1BarcodegeneratorRequest(data="some example string", type_="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BarcodegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BarcodegeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BarcodegeneratorResponse](api_verve/models/v1_barcodegenerator_response.py), [BarcodegeneratorErrorBody](api_verve/errors/barcodegenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BarcodegeneratorResponse](api_verve/models/v1_barcodegenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BarcodegeneratorErrorBody](api_verve/errors/barcodegenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bingocardgenerator(*, size: int | None = None, free_space: bool | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BingocardgeneratorResponse, BingocardgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.bingocardgenerator(size=5, free_space=True, image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BingocardgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BingocardgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.bingocardgenerator(size=5, free_space=True, image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BingocardgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BingocardgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BingocardgeneratorResponse](api_verve/models/v1_bingocardgenerator_response.py), [BingocardgeneratorErrorBody](api_verve/errors/bingocardgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BingocardgeneratorResponse](api_verve/models/v1_bingocardgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BingocardgeneratorErrorBody](api_verve/errors/bingocardgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def boggleboardgenerator(*, size: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BoggleboardgeneratorResponse, BoggleboardgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.boggleboardgenerator(size=4, image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BoggleboardgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BoggleboardgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.boggleboardgenerator(size=4, image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BoggleboardgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BoggleboardgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BoggleboardgeneratorResponse](api_verve/models/v1_boggleboardgenerator_response.py), [BoggleboardgeneratorErrorBody](api_verve/errors/boggleboardgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BoggleboardgeneratorResponse](api_verve/models/v1_boggleboardgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BoggleboardgeneratorErrorBody](api_verve/errors/boggleboardgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def captchagenerator(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CaptchageneratorResponse, CaptchageneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.captchagenerator()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CaptchageneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CaptchageneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.captchagenerator()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CaptchageneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CaptchageneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CaptchageneratorResponse](api_verve/models/v1_captchagenerator_response.py), [CaptchageneratorErrorBody](api_verve/errors/captchagenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CaptchageneratorResponse](api_verve/models/v1_captchagenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CaptchageneratorErrorBody](api_verve/errors/captchagenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cardgenerator(*, brand: str | None = None, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CardgeneratorResponse, CardgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.cardgenerator(brand="visa", count=5, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CardgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CardgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.cardgenerator(brand="visa", count=5, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CardgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CardgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CardgeneratorResponse](api_verve/models/v1_cardgenerator_response.py), [CardgeneratorErrorBody](api_verve/errors/cardgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CardgeneratorResponse](api_verve/models/v1_cardgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CardgeneratorErrorBody](api_verve/errors/cardgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def chartgenerator(body: V1ChartgeneratorRequest | V1ChartgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ChartgeneratorResponse, ChartgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.chartgenerator(
    V1ChartgeneratorRequest(labels="some example string", datasets="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ChartgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChartgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.chartgenerator(
    V1ChartgeneratorRequest(labels="some example string", datasets="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ChartgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChartgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ChartgeneratorResponse](api_verve/models/v1_chartgenerator_response.py), [ChartgeneratorErrorBody](api_verve/errors/chartgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ChartgeneratorResponse](api_verve/models/v1_chartgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ChartgeneratorErrorBody](api_verve/errors/chartgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def colorpalette(color: str, *, scheme: str | None = None, variation: str | None = None, count: int | None = None, distance: float | None = None, add_complement: bool | None = None, web_safe: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ColorpaletteResponse, ColorpaletteErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.colorpalette(
    "FF5733", scheme="triade", variation="soft", count=5, distance=0.5, add_complement=True, web_safe=False
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColorpaletteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColorpaletteErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.colorpalette(
    "FF5733", scheme="triade", variation="soft", count=5, distance=0.5, add_complement=True, web_safe=False
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColorpaletteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColorpaletteErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ColorpaletteResponse](api_verve/models/v1_colorpalette_response.py), [ColorpaletteErrorBody](api_verve/errors/colorpalette_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ColorpaletteResponse](api_verve/models/v1_colorpalette_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ColorpaletteErrorBody](api_verve/errors/colorpalette_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def commentgenerator(mode: str, *, tone: str | None = None, count: int | None = None, emojis: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CommentgeneratorResponse, CommentgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.commentgenerator("text", tone="positive", count=5, emojis=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CommentgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CommentgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.commentgenerator(
    "text", tone="positive", count=5, emojis=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CommentgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CommentgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CommentgeneratorResponse](api_verve/models/v1_commentgenerator_response.py), [CommentgeneratorErrorBody](api_verve/errors/commentgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CommentgeneratorResponse](api_verve/models/v1_commentgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CommentgeneratorErrorBody](api_verve/errors/commentgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def companynamegenerator(keyword: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CompanynamegeneratorResponse, CompanynamegeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.companynamegenerator("systems", count=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CompanynamegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CompanynamegeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.companynamegenerator("systems", count=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CompanynamegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CompanynamegeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CompanynamegeneratorResponse](api_verve/models/v1_companynamegenerator_response.py), [CompanynamegeneratorErrorBody](api_verve/errors/companynamegenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CompanynamegeneratorResponse](api_verve/models/v1_companynamegenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CompanynamegeneratorErrorBody](api_verve/errors/companynamegenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def crongenerator(schedule: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CrongeneratorResponse, CrongeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.crongenerator("every weekday at 9am")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CrongeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CrongeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.crongenerator("every weekday at 9am")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CrongeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CrongeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CrongeneratorResponse](api_verve/models/v1_crongenerator_response.py), [CrongeneratorErrorBody](api_verve/errors/crongenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CrongeneratorResponse](api_verve/models/v1_crongenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CrongeneratorErrorBody](api_verve/errors/crongenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cuidgenerator(*, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CuidgeneratorResponse, CuidgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.cuidgenerator(count=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CuidgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CuidgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.cuidgenerator(count=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CuidgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CuidgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CuidgeneratorResponse](api_verve/models/v1_cuidgenerator_response.py), [CuidgeneratorErrorBody](api_verve/errors/cuidgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CuidgeneratorResponse](api_verve/models/v1_cuidgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CuidgeneratorErrorBody](api_verve/errors/cuidgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def guidgenerator(*, count: int | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GuidgeneratorResponse, GuidgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.guidgenerator(count=3, format_="uppercase")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GuidgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GuidgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.guidgenerator(count=3, format_="uppercase")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GuidgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GuidgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GuidgeneratorResponse](api_verve/models/v1_guidgenerator_response.py), [GuidgeneratorErrorBody](api_verve/errors/guidgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GuidgeneratorResponse](api_verve/models/v1_guidgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GuidgeneratorErrorBody](api_verve/errors/guidgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hashtaggenerator(body: V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HashtaggeneratorResponse, HashtaggeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.hashtaggenerator(
    V1HashtaggeneratorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HashtaggeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HashtaggeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.hashtaggenerator(
    V1HashtaggeneratorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HashtaggeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HashtaggeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HashtaggeneratorResponse](api_verve/models/v1_hashtaggenerator_response.py), [HashtaggeneratorErrorBody](api_verve/errors/hashtaggenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HashtaggeneratorResponse](api_verve/models/v1_hashtaggenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HashtaggeneratorErrorBody](api_verve/errors/hashtaggenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def imeigenerator(*, brand: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ImeigeneratorResponse, ImeigeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.imeigenerator(brand="Samsung", count=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ImeigeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImeigeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.imeigenerator(brand="Samsung", count=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ImeigeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImeigeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ImeigeneratorResponse](api_verve/models/v1_imeigenerator_response.py), [ImeigeneratorErrorBody](api_verve/errors/imeigenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ImeigeneratorResponse](api_verve/models/v1_imeigenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ImeigeneratorErrorBody](api_verve/errors/imeigenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def initialismgenerator(body: V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1InitialismgeneratorResponse, InitialismgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.initialismgenerator(
    V1InitialismgeneratorRequest(phrase="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InitialismgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InitialismgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.initialismgenerator(
    V1InitialismgeneratorRequest(phrase="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InitialismgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InitialismgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1InitialismgeneratorResponse](api_verve/models/v1_initialismgenerator_response.py), [InitialismgeneratorErrorBody](api_verve/errors/initialismgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1InitialismgeneratorResponse](api_verve/models/v1_initialismgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[InitialismgeneratorErrorBody](api_verve/errors/initialismgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jsonschemagenerator(body: V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JsonschemageneratorResponse, JsonschemageneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.jsonschemagenerator(
    V1JsonschemageneratorRequest(json_value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JsonschemageneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JsonschemageneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.jsonschemagenerator(
    V1JsonschemageneratorRequest(json_value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JsonschemageneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JsonschemageneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1JsonschemageneratorResponse](api_verve/models/v1_jsonschemagenerator_response.py), [JsonschemageneratorErrorBody](api_verve/errors/jsonschemagenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JsonschemageneratorResponse](api_verve/models/v1_jsonschemagenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JsonschemageneratorErrorBody](api_verve/errors/jsonschemagenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def loremipsumgenerator(*, paragraphs: int | None = None, startwithlorem: bool | None = None, maxlength: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LoremipsumgeneratorResponse, LoremipsumgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.loremipsumgenerator(paragraphs=3, startwithlorem=True, maxlength=100)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LoremipsumgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LoremipsumgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.loremipsumgenerator(
    paragraphs=3, startwithlorem=True, maxlength=100
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LoremipsumgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LoremipsumgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LoremipsumgeneratorResponse](api_verve/models/v1_loremipsumgenerator_response.py), [LoremipsumgeneratorErrorBody](api_verve/errors/loremipsumgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LoremipsumgeneratorResponse](api_verve/models/v1_loremipsumgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LoremipsumgeneratorErrorBody](api_verve/errors/loremipsumgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def passwordgenerator(*, count: int | None = None, length: int | None = None, complexity: str | None = None, type_: str | None = None, include_numbers: bool | None = None, include_symbols: bool | None = None, include_uppercase: bool | None = None, include_lowercase: bool | None = None, exclude_similar: bool | None = None, exclude_ambiguous: bool | None = None, mixed_case: bool | None = None, strict: bool | None = None, word_count: int | None = None, separator: str | None = None, capitalize: bool | None = None, analyze: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PasswordgeneratorResponse, PasswordgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.passwordgenerator(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PasswordgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PasswordgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.passwordgenerator(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PasswordgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PasswordgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PasswordgeneratorResponse](api_verve/models/v1_passwordgenerator_response.py), [PasswordgeneratorErrorBody](api_verve/errors/passwordgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PasswordgeneratorResponse](api_verve/models/v1_passwordgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PasswordgeneratorErrorBody](api_verve/errors/passwordgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def qrcodegenerator(body: V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1QrcodegeneratorResponse, QrcodegeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.qrcodegenerator(V1QrcodegeneratorRequest(value="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1QrcodegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QrcodegeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.qrcodegenerator(
    V1QrcodegeneratorRequest(value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1QrcodegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QrcodegeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1QrcodegeneratorResponse](api_verve/models/v1_qrcodegenerator_response.py), [QrcodegeneratorErrorBody](api_verve/errors/qrcodegenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1QrcodegeneratorResponse](api_verve/models/v1_qrcodegenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[QrcodegeneratorErrorBody](api_verve/errors/qrcodegenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomgenerator(*, type_: str | None = None, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RandomgeneratorResponse, RandomgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.randomgenerator(type_="number", count=10, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.randomgenerator(
    type_="number", count=10, include_avatar=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RandomgeneratorResponse](api_verve/models/v1_randomgenerator_response.py), [RandomgeneratorErrorBody](api_verve/errors/randomgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RandomgeneratorResponse](api_verve/models/v1_randomgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RandomgeneratorErrorBody](api_verve/errors/randomgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomidentitygenerator(*, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RandomidentitygeneratorResponse, RandomidentitygeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.randomidentitygenerator(count=5, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomidentitygeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomidentitygeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.randomidentitygenerator(count=5, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomidentitygeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomidentitygeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RandomidentitygeneratorResponse](api_verve/models/v1_randomidentitygenerator_response.py), [RandomidentitygeneratorErrorBody](api_verve/errors/randomidentitygenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RandomidentitygeneratorResponse](api_verve/models/v1_randomidentitygenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RandomidentitygeneratorErrorBody](api_verve/errors/randomidentitygenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomusergenerator(*, count: int | None = None, include_avatar: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RandomusergeneratorResponse, RandomusergeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.randomusergenerator(count=1, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomusergeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomusergeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.randomusergenerator(count=1, include_avatar=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomusergeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomusergeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RandomusergeneratorResponse](api_verve/models/v1_randomusergenerator_response.py), [RandomusergeneratorErrorBody](api_verve/errors/randomusergenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RandomusergeneratorResponse](api_verve/models/v1_randomusergenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RandomusergeneratorErrorBody](api_verve/errors/randomusergenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomwords(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RandomwordsResponse, RandomwordsErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.randomwords()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomwordsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomwordsErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.randomwords()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomwordsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomwordsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RandomwordsResponse](api_verve/models/v1_randomwords_response.py), [RandomwordsErrorBody](api_verve/errors/randomwords_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RandomwordsResponse](api_verve/models/v1_randomwords_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RandomwordsErrorBody](api_verve/errors/randomwords_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def shortcodegenerator(*, count: int | None = None, length: int | None = None, charset: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ShortcodegeneratorResponse, ShortcodegeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.shortcodegenerator(count=5, length=8, charset="alphanumeric")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ShortcodegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ShortcodegeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.shortcodegenerator(
    count=5, length=8, charset="alphanumeric"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ShortcodegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ShortcodegeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ShortcodegeneratorResponse](api_verve/models/v1_shortcodegenerator_response.py), [ShortcodegeneratorErrorBody](api_verve/errors/shortcodegenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ShortcodegeneratorResponse](api_verve/models/v1_shortcodegenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ShortcodegeneratorErrorBody](api_verve/errors/shortcodegenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sitemapgenerator(body: V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SitemapgeneratorResponse, SitemapgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.sitemapgenerator(
    V1SitemapgeneratorRequest(urls="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SitemapgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SitemapgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.sitemapgenerator(
    V1SitemapgeneratorRequest(urls="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SitemapgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SitemapgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SitemapgeneratorResponse](api_verve/models/v1_sitemapgenerator_response.py), [SitemapgeneratorErrorBody](api_verve/errors/sitemapgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SitemapgeneratorResponse](api_verve/models/v1_sitemapgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SitemapgeneratorErrorBody](api_verve/errors/sitemapgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def totpgenerator(body: V1TotpgeneratorRequest | V1TotpgeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TotpgeneratorResponse, TotpgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.totpgenerator(V1TotpgeneratorRequest(secret="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TotpgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TotpgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.totpgenerator(
    V1TotpgeneratorRequest(secret="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TotpgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TotpgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TotpgeneratorResponse](api_verve/models/v1_totpgenerator_response.py), [TotpgeneratorErrorBody](api_verve/errors/totpgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TotpgeneratorResponse](api_verve/models/v1_totpgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TotpgeneratorErrorBody](api_verve/errors/totpgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ulidgenerator(*, count: int | None = None, timestamp: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UlidgeneratorResponse, UlidgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.ulidgenerator(count=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UlidgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UlidgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.ulidgenerator(count=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UlidgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UlidgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UlidgeneratorResponse](api_verve/models/v1_ulidgenerator_response.py), [UlidgeneratorErrorBody](api_verve/errors/ulidgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UlidgeneratorResponse](api_verve/models/v1_ulidgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UlidgeneratorErrorBody](api_verve/errors/ulidgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def useragentgenerator(*, device: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UseragentgeneratorResponse, UseragentgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.useragentgenerator(device="desktop")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UseragentgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UseragentgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.useragentgenerator(device="desktop")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UseragentgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UseragentgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UseragentgeneratorResponse](api_verve/models/v1_useragentgenerator_response.py), [UseragentgeneratorErrorBody](api_verve/errors/useragentgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UseragentgeneratorResponse](api_verve/models/v1_useragentgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UseragentgeneratorErrorBody](api_verve/errors/useragentgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def usernamegenerator(email: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UsernamegeneratorResponse, UsernamegeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.usernamegenerator("sean@mail.com", count=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UsernamegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsernamegeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.usernamegenerator("sean@mail.com", count=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UsernamegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsernamegeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UsernamegeneratorResponse](api_verve/models/v1_usernamegenerator_response.py), [UsernamegeneratorErrorBody](api_verve/errors/usernamegenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UsernamegeneratorResponse](api_verve/models/v1_usernamegenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UsernamegeneratorErrorBody](api_verve/errors/usernamegenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def uuidgenerator(*, count: int | None = None, version: int | None = None, format_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UuidgeneratorResponse, UuidgeneratorErrorBody]</code></summary>

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
result = client.data_generation.with_raw_response.uuidgenerator(count=5, version=4, format_="default")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UuidgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UuidgeneratorErrorBody
```

**Async**

```python
result = await async_client.data_generation.with_raw_response.uuidgenerator(count=5, version=4, format_="default")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UuidgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UuidgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UuidgeneratorResponse](api_verve/models/v1_uuidgenerator_response.py), [UuidgeneratorErrorBody](api_verve/errors/uuidgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UuidgeneratorResponse](api_verve/models/v1_uuidgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UuidgeneratorErrorBody](api_verve/errors/uuidgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def asnlookup(asn: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AsnlookupResponse, AsnlookupErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.asnlookup("AS15169")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AsnlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AsnlookupErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.asnlookup("AS15169")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AsnlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AsnlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AsnlookupResponse](api_verve/models/v1_asnlookup_response.py), [AsnlookupErrorBody](api_verve/errors/asnlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AsnlookupResponse](api_verve/models/v1_asnlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AsnlookupErrorBody](api_verve/errors/asnlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bible(book: str, version: str, chapter: int, *, verse: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BibleResponse, BibleErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.bible("Genesis", "KJV", 5, verse=17)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BibleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BibleErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.bible("Genesis", "KJV", 5, verse=17)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BibleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BibleErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BibleResponse](api_verve/models/v1_bible_response.py), [BibleErrorBody](api_verve/errors/bible_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BibleResponse](api_verve/models/v1_bible_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BibleErrorBody](api_verve/errors/bible_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def callingcode(country: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CallingcodeResponse, CallingcodeErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.callingcode("FR")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CallingcodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CallingcodeErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.callingcode("FR")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CallingcodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CallingcodeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CallingcodeResponse](api_verve/models/v1_callingcode_response.py), [CallingcodeErrorBody](api_verve/errors/callingcode_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CallingcodeResponse](api_verve/models/v1_callingcode_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CallingcodeErrorBody](api_verve/errors/callingcode_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dictionary(word: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DictionaryResponse, DictionaryErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.dictionary("apple")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DictionaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DictionaryErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.dictionary("apple")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DictionaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DictionaryErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DictionaryResponse](api_verve/models/v1_dictionary_response.py), [DictionaryErrorBody](api_verve/errors/dictionary_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DictionaryResponse](api_verve/models/v1_dictionary_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DictionaryErrorBody](api_verve/errors/dictionary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dogbreeds(breed: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DogbreedsResponse, DogbreedsErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.dogbreeds("beagle")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DogbreedsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DogbreedsErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.dogbreeds("beagle")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DogbreedsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DogbreedsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DogbreedsResponse](api_verve/models/v1_dogbreeds_response.py), [DogbreedsErrorBody](api_verve/errors/dogbreeds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DogbreedsResponse](api_verve/models/v1_dogbreeds_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DogbreedsErrorBody](api_verve/errors/dogbreeds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def emoji(emoji: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1EmojiResponse, EmojiErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.emoji("🥳")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EmojiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EmojiErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.emoji("🥳")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EmojiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EmojiErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1EmojiResponse](api_verve/models/v1_emoji_response.py), [EmojiErrorBody](api_verve/errors/emoji_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1EmojiResponse](api_verve/models/v1_emoji_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EmojiErrorBody](api_verve/errors/emoji_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def genderdetector(name: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GenderdetectorResponse, GenderdetectorErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.genderdetector("John Mcdonald", country="US")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GenderdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GenderdetectorErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.genderdetector("John Mcdonald", country="US")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GenderdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GenderdetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GenderdetectorResponse](api_verve/models/v1_genderdetector_response.py), [GenderdetectorErrorBody](api_verve/errors/genderdetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GenderdetectorResponse](api_verve/models/v1_genderdetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GenderdetectorErrorBody](api_verve/errors/genderdetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def gravatarlookup(email: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GravatarlookupResponse, GravatarlookupErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.gravatarlookup("hello@apiverve.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GravatarlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GravatarlookupErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.gravatarlookup("hello@apiverve.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GravatarlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GravatarlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GravatarlookupResponse](api_verve/models/v1_gravatarlookup_response.py), [GravatarlookupErrorBody](api_verve/errors/gravatarlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GravatarlookupResponse](api_verve/models/v1_gravatarlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GravatarlookupErrorBody](api_verve/errors/gravatarlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ipdemographics(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1IpdemographicsResponse, IpdemographicsErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.ipdemographics("173.172.81.20")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IpdemographicsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IpdemographicsErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.ipdemographics("173.172.81.20")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IpdemographicsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IpdemographicsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1IpdemographicsResponse](api_verve/models/v1_ipdemographics_response.py), [IpdemographicsErrorBody](api_verve/errors/ipdemographics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1IpdemographicsResponse](api_verve/models/v1_ipdemographics_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IpdemographicsErrorBody](api_verve/errors/ipdemographics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lottery(numbers: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LotteryResponse, LotteryErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.lottery("powerball", date="2024-01-15")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LotteryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LotteryErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.lottery("powerball", date="2024-01-15")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LotteryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LotteryErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LotteryResponse](api_verve/models/v1_lottery_response.py), [LotteryErrorBody](api_verve/errors/lottery_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LotteryResponse](api_verve/models/v1_lottery_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LotteryErrorBody](api_verve/errors/lottery_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nobelprizes(*, firstname: str | None = None, lastname: str | None = None, category: str | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NobelprizesResponse, NobelprizesErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.nobelprizes(
    firstname="Albert", lastname="Einstein", category="Physics", year=1921
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NobelprizesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NobelprizesErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.nobelprizes(
    firstname="Albert", lastname="Einstein", category="Physics", year=1921
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NobelprizesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NobelprizesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NobelprizesResponse](api_verve/models/v1_nobelprizes_response.py), [NobelprizesErrorBody](api_verve/errors/nobelprizes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NobelprizesResponse](api_verve/models/v1_nobelprizes_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NobelprizesErrorBody](api_verve/errors/nobelprizes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def openlicenses(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1OpenlicensesResponse, OpenlicensesErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.openlicenses("MIT")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1OpenlicensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OpenlicensesErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.openlicenses("MIT")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1OpenlicensesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OpenlicensesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1OpenlicensesResponse](api_verve/models/v1_openlicenses_response.py), [OpenlicensesErrorBody](api_verve/errors/openlicenses_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1OpenlicensesResponse](api_verve/models/v1_openlicenses_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[OpenlicensesErrorBody](api_verve/errors/openlicenses_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def thesaurus(word: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ThesaurusResponse, ThesaurusErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.thesaurus("big")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ThesaurusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ThesaurusErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.thesaurus("big")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ThesaurusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ThesaurusErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ThesaurusResponse](api_verve/models/v1_thesaurus_response.py), [ThesaurusErrorBody](api_verve/errors/thesaurus_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ThesaurusResponse](api_verve/models/v1_thesaurus_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ThesaurusErrorBody](api_verve/errors/thesaurus_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def timezonelookup(city: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TimezonelookupResponse, TimezonelookupErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.timezonelookup("Harare")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TimezonelookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TimezonelookupErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.timezonelookup("Harare")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TimezonelookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TimezonelookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TimezonelookupResponse](api_verve/models/v1_timezonelookup_response.py), [TimezonelookupErrorBody](api_verve/errors/timezonelookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TimezonelookupResponse](api_verve/models/v1_timezonelookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TimezonelookupErrorBody](api_verve/errors/timezonelookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unicodelookup(*, character: str | None = None, codepoint: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UnicodelookupResponse, UnicodelookupErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.unicodelookup(character="👋", codepoint="1F44B")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnicodelookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnicodelookupErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.unicodelookup(character="👋", codepoint="1F44B")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnicodelookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnicodelookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UnicodelookupResponse](api_verve/models/v1_unicodelookup_response.py), [UnicodelookupErrorBody](api_verve/errors/unicodelookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UnicodelookupResponse](api_verve/models/v1_unicodelookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UnicodelookupErrorBody](api_verve/errors/unicodelookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def worldtime(city: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WorldtimeResponse, WorldtimeErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.worldtime("San Francisco")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorldtimeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WorldtimeErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.worldtime("San Francisco")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WorldtimeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WorldtimeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WorldtimeResponse](api_verve/models/v1_worldtime_response.py), [WorldtimeErrorBody](api_verve/errors/worldtime_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WorldtimeResponse](api_verve/models/v1_worldtime_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WorldtimeErrorBody](api_verve/errors/worldtime_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def zipdemographics(zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ZipdemographicsResponse, ZipdemographicsErrorBody]</code></summary>

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
result = client.data_lookup.with_raw_response.zipdemographics("90210")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ZipdemographicsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ZipdemographicsErrorBody
```

**Async**

```python
result = await async_client.data_lookup.with_raw_response.zipdemographics("90210")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ZipdemographicsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ZipdemographicsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ZipdemographicsResponse](api_verve/models/v1_zipdemographics_response.py), [ZipdemographicsErrorBody](api_verve/errors/zipdemographics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ZipdemographicsResponse](api_verve/models/v1_zipdemographics_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ZipdemographicsErrorBody](api_verve/errors/zipdemographics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def counter(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CounterResponse, CounterErrorBody]</code></summary>

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
result = client.data_processing.with_raw_response.counter("test_counter")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CounterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CounterErrorBody
```

**Async**

```python
result = await async_client.data_processing.with_raw_response.counter("test_counter")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CounterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CounterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CounterResponse](api_verve/models/v1_counter_response.py), [CounterErrorBody](api_verve/errors/counter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CounterResponse](api_verve/models/v1_counter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CounterErrorBody](api_verve/errors/counter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def htmltotext(body: V1HtmltotextRequest | V1HtmltotextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HtmltotextResponse, HtmltotextErrorBody]</code></summary>

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
result = client.data_processing.with_raw_response.htmltotext(V1HtmltotextRequest(html="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HtmltotextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HtmltotextErrorBody
```

**Async**

```python
result = await async_client.data_processing.with_raw_response.htmltotext(
    V1HtmltotextRequest(html="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HtmltotextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HtmltotextErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HtmltotextResponse](api_verve/models/v1_htmltotext_response.py), [HtmltotextErrorBody](api_verve/errors/htmltotext_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HtmltotextResponse](api_verve/models/v1_htmltotext_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HtmltotextErrorBody](api_verve/errors/htmltotext_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def metadataextractor(body: V1MetadataextractorRequest | V1MetadataextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MetadataextractorResponse, MetadataextractorErrorBody]</code></summary>

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
result = client.data_processing.with_raw_response.metadataextractor(
    V1MetadataextractorRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MetadataextractorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetadataextractorErrorBody
```

**Async**

```python
result = await async_client.data_processing.with_raw_response.metadataextractor(
    V1MetadataextractorRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MetadataextractorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MetadataextractorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MetadataextractorResponse](api_verve/models/v1_metadataextractor_response.py), [MetadataextractorErrorBody](api_verve/errors/metadataextractor_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MetadataextractorResponse](api_verve/models/v1_metadataextractor_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MetadataextractorErrorBody](api_verve/errors/metadataextractor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def morsecode(body: V1MorsecodeRequest | V1MorsecodeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MorsecodeResponse, MorsecodeErrorBody]</code></summary>

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
result = client.data_processing.with_raw_response.morsecode(V1MorsecodeRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MorsecodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MorsecodeErrorBody
```

**Async**

```python
result = await async_client.data_processing.with_raw_response.morsecode(V1MorsecodeRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MorsecodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MorsecodeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MorsecodeResponse](api_verve/models/v1_morsecode_response.py), [MorsecodeErrorBody](api_verve/errors/morsecode_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MorsecodeResponse](api_verve/models/v1_morsecode_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MorsecodeErrorBody](api_verve/errors/morsecode_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def murmurhash(body: V1MurmurhashRequest | V1MurmurhashRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MurmurhashResponse, MurmurhashErrorBody]</code></summary>

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
result = client.data_processing.with_raw_response.murmurhash(V1MurmurhashRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MurmurhashResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MurmurhashErrorBody
```

**Async**

```python
result = await async_client.data_processing.with_raw_response.murmurhash(
    V1MurmurhashRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MurmurhashResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MurmurhashErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MurmurhashResponse](api_verve/models/v1_murmurhash_response.py), [MurmurhashErrorBody](api_verve/errors/murmurhash_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MurmurhashResponse](api_verve/models/v1_murmurhash_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MurmurhashErrorBody](api_verve/errors/murmurhash_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sqlexplainer(body: V1SqlexplainerRequest | V1SqlexplainerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SqlexplainerResponse, SqlexplainerErrorBody]</code></summary>

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
result = client.data_processing.with_raw_response.sqlexplainer(V1SqlexplainerRequest(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SqlexplainerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SqlexplainerErrorBody
```

**Async**

```python
result = await async_client.data_processing.with_raw_response.sqlexplainer(
    V1SqlexplainerRequest(query="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SqlexplainerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SqlexplainerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SqlexplainerResponse](api_verve/models/v1_sqlexplainer_response.py), [SqlexplainerErrorBody](api_verve/errors/sqlexplainer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SqlexplainerResponse](api_verve/models/v1_sqlexplainer_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SqlexplainerErrorBody](api_verve/errors/sqlexplainer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def contactextractor(body: V1ContactextractorRequest | V1ContactextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ContactextractorResponse, ContactextractorErrorBody]</code></summary>

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
result = client.data_scraping.with_raw_response.contactextractor(V1ContactextractorRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ContactextractorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactextractorErrorBody
```

**Async**

```python
result = await async_client.data_scraping.with_raw_response.contactextractor(
    V1ContactextractorRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ContactextractorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContactextractorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ContactextractorResponse](api_verve/models/v1_contactextractor_response.py), [ContactextractorErrorBody](api_verve/errors/contactextractor_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ContactextractorResponse](api_verve/models/v1_contactextractor_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ContactextractorErrorBody](api_verve/errors/contactextractor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def linkscraper(body: V1LinkscraperRequest | V1LinkscraperRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LinkscraperResponse, LinkscraperErrorBody]</code></summary>

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
result = client.data_scraping.with_raw_response.linkscraper(V1LinkscraperRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LinkscraperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LinkscraperErrorBody
```

**Async**

```python
result = await async_client.data_scraping.with_raw_response.linkscraper(V1LinkscraperRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LinkscraperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LinkscraperErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LinkscraperResponse](api_verve/models/v1_linkscraper_response.py), [LinkscraperErrorBody](api_verve/errors/linkscraper_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LinkscraperResponse](api_verve/models/v1_linkscraper_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LinkscraperErrorBody](api_verve/errors/linkscraper_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def seoscraper(body: V1SeoscraperRequest | V1SeoscraperRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SeoscraperResponse, SeoscraperErrorBody]</code></summary>

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
result = client.data_scraping.with_raw_response.seoscraper(V1SeoscraperRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SeoscraperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SeoscraperErrorBody
```

**Async**

```python
result = await async_client.data_scraping.with_raw_response.seoscraper(V1SeoscraperRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SeoscraperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SeoscraperErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SeoscraperResponse](api_verve/models/v1_seoscraper_response.py), [SeoscraperErrorBody](api_verve/errors/seoscraper_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SeoscraperResponse](api_verve/models/v1_seoscraper_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SeoscraperErrorBody](api_verve/errors/seoscraper_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webimagescraper(body: V1WebimagescraperRequest | V1WebimagescraperRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebimagescraperResponse, WebimagescraperErrorBody]</code></summary>

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
result = client.data_scraping.with_raw_response.webimagescraper(V1WebimagescraperRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebimagescraperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebimagescraperErrorBody
```

**Async**

```python
result = await async_client.data_scraping.with_raw_response.webimagescraper(
    V1WebimagescraperRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebimagescraperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebimagescraperErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WebimagescraperResponse](api_verve/models/v1_webimagescraper_response.py), [WebimagescraperErrorBody](api_verve/errors/webimagescraper_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebimagescraperResponse](api_verve/models/v1_webimagescraper_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WebimagescraperErrorBody](api_verve/errors/webimagescraper_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webscreenshots(body: V1WebscreenshotsRequest | V1WebscreenshotsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebscreenshotsResponse, WebscreenshotsErrorBody]</code></summary>

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
result = client.data_scraping.with_raw_response.webscreenshots(V1WebscreenshotsRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebscreenshotsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebscreenshotsErrorBody
```

**Async**

```python
result = await async_client.data_scraping.with_raw_response.webscreenshots(
    V1WebscreenshotsRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebscreenshotsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebscreenshotsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WebscreenshotsResponse](api_verve/models/v1_webscreenshots_response.py), [WebscreenshotsErrorBody](api_verve/errors/webscreenshots_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebscreenshotsResponse](api_verve/models/v1_webscreenshots_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WebscreenshotsErrorBody](api_verve/errors/webscreenshots_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def cardvalidator(number: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CardvalidatorResponse, CardvalidatorErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.cardvalidator("4900264223817524")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CardvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CardvalidatorErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.cardvalidator("4900264223817524")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CardvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CardvalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CardvalidatorResponse](api_verve/models/v1_cardvalidator_response.py), [CardvalidatorErrorBody](api_verve/errors/cardvalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CardvalidatorResponse](api_verve/models/v1_cardvalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CardvalidatorErrorBody](api_verve/errors/cardvalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disposablephone(phone: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DisposablephoneResponse, DisposablephoneErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.disposablephone("+12085813945")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DisposablephoneResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisposablephoneErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.disposablephone("+12085813945")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DisposablephoneResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DisposablephoneErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DisposablephoneResponse](api_verve/models/v1_disposablephone_response.py), [DisposablephoneErrorBody](api_verve/errors/disposablephone_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DisposablephoneResponse](api_verve/models/v1_disposablephone_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DisposablephoneErrorBody](api_verve/errors/disposablephone_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def emaildisposablechecker(email: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1EmaildisposablecheckerResponse, EmaildisposablecheckerErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.emaildisposablechecker("support@myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EmaildisposablecheckerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EmaildisposablecheckerErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.emaildisposablechecker("support@myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EmaildisposablecheckerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EmaildisposablecheckerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1EmaildisposablecheckerResponse](api_verve/models/v1_emaildisposablechecker_response.py), [EmaildisposablecheckerErrorBody](api_verve/errors/emaildisposablechecker_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1EmaildisposablecheckerResponse](api_verve/models/v1_emaildisposablechecker_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EmaildisposablecheckerErrorBody](api_verve/errors/emaildisposablechecker_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def emailvalidator(email: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1EmailvalidatorResponse, EmailvalidatorErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.emailvalidator("support@myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EmailvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EmailvalidatorErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.emailvalidator("support@myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EmailvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EmailvalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1EmailvalidatorResponse](api_verve/models/v1_emailvalidator_response.py), [EmailvalidatorErrorBody](api_verve/errors/emailvalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1EmailvalidatorResponse](api_verve/models/v1_emailvalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EmailvalidatorErrorBody](api_verve/errors/emailvalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def passwordstrength(password: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PasswordstrengthResponse, PasswordstrengthErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.passwordstrength("Password123")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PasswordstrengthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PasswordstrengthErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.passwordstrength("Password123")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PasswordstrengthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PasswordstrengthErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PasswordstrengthResponse](api_verve/models/v1_passwordstrength_response.py), [PasswordstrengthErrorBody](api_verve/errors/passwordstrength_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PasswordstrengthResponse](api_verve/models/v1_passwordstrength_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PasswordstrengthErrorBody](api_verve/errors/passwordstrength_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def phonenumbervalidator(number: str, country: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PhonenumbervalidatorResponse, PhonenumbervalidatorErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.phonenumbervalidator("816-555-1017", "us")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PhonenumbervalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PhonenumbervalidatorErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.phonenumbervalidator("816-555-1017", "us")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PhonenumbervalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PhonenumbervalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PhonenumbervalidatorResponse](api_verve/models/v1_phonenumbervalidator_response.py), [PhonenumbervalidatorErrorBody](api_verve/errors/phonenumbervalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PhonenumbervalidatorResponse](api_verve/models/v1_phonenumbervalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PhonenumbervalidatorErrorBody](api_verve/errors/phonenumbervalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def seovalidator(body: V1SeovalidatorRequest | V1SeovalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SeovalidatorResponse, SeovalidatorErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.seovalidator(V1SeovalidatorRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SeovalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SeovalidatorErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.seovalidator(
    V1SeovalidatorRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SeovalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SeovalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SeovalidatorResponse](api_verve/models/v1_seovalidator_response.py), [SeovalidatorErrorBody](api_verve/errors/seovalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SeovalidatorResponse](api_verve/models/v1_seovalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SeovalidatorErrorBody](api_verve/errors/seovalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def spamdetector(body: V1SpamdetectorRequest | V1SpamdetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SpamdetectorResponse, SpamdetectorErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.spamdetector(V1SpamdetectorRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SpamdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpamdetectorErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.spamdetector(
    V1SpamdetectorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SpamdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpamdetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SpamdetectorResponse](api_verve/models/v1_spamdetector_response.py), [SpamdetectorErrorBody](api_verve/errors/spamdetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SpamdetectorResponse](api_verve/models/v1_spamdetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SpamdetectorErrorBody](api_verve/errors/spamdetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def usernameprofanity(username: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UsernameprofanityResponse, UsernameprofanityErrorBody]</code></summary>

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
result = client.data_validation.with_raw_response.usernameprofanity("b00bs")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UsernameprofanityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsernameprofanityErrorBody
```

**Async**

```python
result = await async_client.data_validation.with_raw_response.usernameprofanity("b00bs")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UsernameprofanityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsernameprofanityErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UsernameprofanityResponse](api_verve/models/v1_usernameprofanity_response.py), [UsernameprofanityErrorBody](api_verve/errors/usernameprofanity_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UsernameprofanityResponse](api_verve/models/v1_usernameprofanity_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UsernameprofanityErrorBody](api_verve/errors/usernameprofanity_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def htmltopdf(body: V1HtmltopdfRequest | V1HtmltopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HtmltopdfResponse, HtmltopdfErrorBody]</code></summary>

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
result = client.documents.with_raw_response.htmltopdf(V1HtmltopdfRequest(html="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HtmltopdfResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HtmltopdfErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.htmltopdf(V1HtmltopdfRequest(html="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HtmltopdfResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HtmltopdfErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HtmltopdfResponse](api_verve/models/v1_htmltopdf_response.py), [HtmltopdfErrorBody](api_verve/errors/htmltopdf_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HtmltopdfResponse](api_verve/models/v1_htmltopdf_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HtmltopdfErrorBody](api_verve/errors/htmltopdf_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def invoicegenerator(body: V1InvoicegeneratorRequest | V1InvoicegeneratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1InvoicegeneratorResponse, InvoicegeneratorErrorBody]</code></summary>

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
result = client.documents.with_raw_response.invoicegenerator(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InvoicegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InvoicegeneratorErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.invoicegenerator(
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
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InvoicegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InvoicegeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1InvoicegeneratorResponse](api_verve/models/v1_invoicegenerator_response.py), [InvoicegeneratorErrorBody](api_verve/errors/invoicegenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1InvoicegeneratorResponse](api_verve/models/v1_invoicegenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[InvoicegeneratorErrorBody](api_verve/errors/invoicegenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def websitetopdf(body: V1WebsitetopdfRequest | V1WebsitetopdfRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebsitetopdfResponse, WebsitetopdfErrorBody]</code></summary>

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
result = client.documents.with_raw_response.websitetopdf(V1WebsitetopdfRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebsitetopdfResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebsitetopdfErrorBody
```

**Async**

```python
result = await async_client.documents.with_raw_response.websitetopdf(V1WebsitetopdfRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebsitetopdfResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebsitetopdfErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WebsitetopdfResponse](api_verve/models/v1_websitetopdf_response.py), [WebsitetopdfErrorBody](api_verve/errors/websitetopdf_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebsitetopdfResponse](api_verve/models/v1_websitetopdf_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WebsitetopdfErrorBody](api_verve/errors/websitetopdf_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def bimivalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BimivalidatorResponse, BimivalidatorErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.bimivalidator("ebay.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BimivalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BimivalidatorErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.bimivalidator("ebay.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BimivalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BimivalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BimivalidatorResponse](api_verve/models/v1_bimivalidator_response.py), [BimivalidatorErrorBody](api_verve/errors/bimivalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BimivalidatorResponse](api_verve/models/v1_bimivalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BimivalidatorErrorBody](api_verve/errors/bimivalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dkimvalidator(domain: str, *, selector: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DkimvalidatorResponse, DkimvalidatorErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.dkimvalidator("github.com", selector="s1")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DkimvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DkimvalidatorErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.dkimvalidator("github.com", selector="s1")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DkimvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DkimvalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DkimvalidatorResponse](api_verve/models/v1_dkimvalidator_response.py), [DkimvalidatorErrorBody](api_verve/errors/dkimvalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DkimvalidatorResponse](api_verve/models/v1_dkimvalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DkimvalidatorErrorBody](api_verve/errors/dkimvalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dmarcvalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DmarcvalidatorResponse, DmarcvalidatorErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.dmarcvalidator("paypal.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DmarcvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DmarcvalidatorErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.dmarcvalidator("paypal.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DmarcvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DmarcvalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DmarcvalidatorResponse](api_verve/models/v1_dmarcvalidator_response.py), [DmarcvalidatorErrorBody](api_verve/errors/dmarcvalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DmarcvalidatorResponse](api_verve/models/v1_dmarcvalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DmarcvalidatorErrorBody](api_verve/errors/dmarcvalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dnslookup(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DnslookupResponse, DnslookupErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.dnslookup("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DnslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnslookupErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.dnslookup("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DnslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnslookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DnslookupResponse](api_verve/models/v1_dnslookup_response.py), [DnslookupErrorBody](api_verve/errors/dnslookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DnslookupResponse](api_verve/models/v1_dnslookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DnslookupErrorBody](api_verve/errors/dnslookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dnspropagation(domain: str, *, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DnspropagationResponse, DnspropagationErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.dnspropagation("google.com", type_="A")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DnspropagationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnspropagationErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.dnspropagation("google.com", type_="A")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DnspropagationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnspropagationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DnspropagationResponse](api_verve/models/v1_dnspropagation_response.py), [DnspropagationErrorBody](api_verve/errors/dnspropagation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DnspropagationResponse](api_verve/models/v1_dnspropagation_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DnspropagationErrorBody](api_verve/errors/dnspropagation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dnsseccheck(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DnsseccheckResponse, DnsseccheckErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.dnsseccheck("cloudflare.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DnsseccheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsseccheckErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.dnsseccheck("cloudflare.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DnsseccheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DnsseccheckErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DnsseccheckResponse](api_verve/models/v1_dnsseccheck_response.py), [DnsseccheckErrorBody](api_verve/errors/dnsseccheck_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DnsseccheckResponse](api_verve/models/v1_dnsseccheck_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DnsseccheckErrorBody](api_verve/errors/dnsseccheck_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def domainavailability(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DomainavailabilityResponse, DomainavailabilityErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.domainavailability("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DomainavailabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DomainavailabilityErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.domainavailability("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DomainavailabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DomainavailabilityErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DomainavailabilityResponse](api_verve/models/v1_domainavailability_response.py), [DomainavailabilityErrorBody](api_verve/errors/domainavailability_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DomainavailabilityResponse](api_verve/models/v1_domainavailability_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DomainavailabilityErrorBody](api_verve/errors/domainavailability_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def domainexpiration(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DomainexpirationResponse, DomainexpirationErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.domainexpiration("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DomainexpirationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DomainexpirationErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.domainexpiration("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DomainexpirationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DomainexpirationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DomainexpirationResponse](api_verve/models/v1_domainexpiration_response.py), [DomainexpirationErrorBody](api_verve/errors/domainexpiration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DomainexpirationResponse](api_verve/models/v1_domainexpiration_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DomainexpirationErrorBody](api_verve/errors/domainexpiration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fullyqualifieddomain(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FullyqualifieddomainResponse, FullyqualifieddomainErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.fullyqualifieddomain("199.30.24.0")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FullyqualifieddomainResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FullyqualifieddomainErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.fullyqualifieddomain("199.30.24.0")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FullyqualifieddomainResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FullyqualifieddomainErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1FullyqualifieddomainResponse](api_verve/models/v1_fullyqualifieddomain_response.py), [FullyqualifieddomainErrorBody](api_verve/errors/fullyqualifieddomain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FullyqualifieddomainResponse](api_verve/models/v1_fullyqualifieddomain_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FullyqualifieddomainErrorBody](api_verve/errors/fullyqualifieddomain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mxlookup(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MxlookupResponse, MxlookupErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.mxlookup("yahoo.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MxlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MxlookupErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.mxlookup("yahoo.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MxlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MxlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MxlookupResponse](api_verve/models/v1_mxlookup_response.py), [MxlookupErrorBody](api_verve/errors/mxlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MxlookupResponse](api_verve/models/v1_mxlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MxlookupErrorBody](api_verve/errors/mxlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reversednslookup(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ReversednslookupResponse, ReversednslookupErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.reversednslookup("8.8.8.8")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReversednslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReversednslookupErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.reversednslookup("8.8.8.8")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReversednslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReversednslookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ReversednslookupResponse](api_verve/models/v1_reversednslookup_response.py), [ReversednslookupErrorBody](api_verve/errors/reversednslookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ReversednslookupResponse](api_verve/models/v1_reversednslookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ReversednslookupErrorBody](api_verve/errors/reversednslookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def spfvalidator(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SpfvalidatorResponse, SpfvalidatorErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.spfvalidator("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SpfvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpfvalidatorErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.spfvalidator("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SpfvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpfvalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SpfvalidatorResponse](api_verve/models/v1_spfvalidator_response.py), [SpfvalidatorErrorBody](api_verve/errors/spfvalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SpfvalidatorResponse](api_verve/models/v1_spfvalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SpfvalidatorErrorBody](api_verve/errors/spfvalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sslchecker(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SslcheckerResponse, SslcheckerErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.sslchecker("ebay.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SslcheckerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SslcheckerErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.sslchecker("ebay.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SslcheckerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SslcheckerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SslcheckerResponse](api_verve/models/v1_sslchecker_response.py), [SslcheckerErrorBody](api_verve/errors/sslchecker_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SslcheckerResponse](api_verve/models/v1_sslchecker_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SslcheckerErrorBody](api_verve/errors/sslchecker_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def subdomainfinder(domain: str, *, limit: int | None = None, deep_scan: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SubdomainfinderResponse, SubdomainfinderErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.subdomainfinder("google.com", limit=5, deep_scan=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SubdomainfinderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubdomainfinderErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.subdomainfinder("google.com", limit=5, deep_scan=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SubdomainfinderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubdomainfinderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SubdomainfinderResponse](api_verve/models/v1_subdomainfinder_response.py), [SubdomainfinderErrorBody](api_verve/errors/subdomainfinder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SubdomainfinderResponse](api_verve/models/v1_subdomainfinder_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SubdomainfinderErrorBody](api_verve/errors/subdomainfinder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urllookup(body: V1UrllookupRequest | V1UrllookupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UrllookupResponse, UrllookupErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.urllookup(V1UrllookupRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrllookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrllookupErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.urllookup(V1UrllookupRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrllookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrllookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UrllookupResponse](api_verve/models/v1_urllookup_response.py), [UrllookupErrorBody](api_verve/errors/urllookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UrllookupResponse](api_verve/models/v1_urllookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UrllookupErrorBody](api_verve/errors/urllookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urltitle(body: V1UrltitleRequest | V1UrltitleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UrltitleResponse, UrltitleErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.urltitle(V1UrltitleRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrltitleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrltitleErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.urltitle(V1UrltitleRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrltitleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrltitleErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UrltitleResponse](api_verve/models/v1_urltitle_response.py), [UrltitleErrorBody](api_verve/errors/urltitle_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UrltitleResponse](api_verve/models/v1_urltitle_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UrltitleErrorBody](api_verve/errors/urltitle_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def urlunshortener(body: V1UrlunshortenerRequest | V1UrlunshortenerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UrlunshortenerResponse, UrlunshortenerErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.urlunshortener(V1UrlunshortenerRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrlunshortenerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrlunshortenerErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.urlunshortener(
    V1UrlunshortenerRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UrlunshortenerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UrlunshortenerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UrlunshortenerResponse](api_verve/models/v1_urlunshortener_response.py), [UrlunshortenerErrorBody](api_verve/errors/urlunshortener_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UrlunshortenerResponse](api_verve/models/v1_urlunshortener_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UrlunshortenerErrorBody](api_verve/errors/urlunshortener_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def whoislookup(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WhoislookupResponse, WhoislookupErrorBody]</code></summary>

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
result = client.domain_data.with_raw_response.whoislookup("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WhoislookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WhoislookupErrorBody
```

**Async**

```python
result = await async_client.domain_data.with_raw_response.whoislookup("myspace.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WhoislookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WhoislookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WhoislookupResponse](api_verve/models/v1_whoislookup_response.py), [WhoislookupErrorBody](api_verve/errors/whoislookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WhoislookupResponse](api_verve/models/v1_whoislookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WhoislookupErrorBody](api_verve/errors/whoislookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def advice(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AdviceResponse, AdviceErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.advice()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AdviceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AdviceErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.advice()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AdviceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AdviceErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AdviceResponse](api_verve/models/v1_advice_response.py), [AdviceErrorBody](api_verve/errors/advice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AdviceResponse](api_verve/models/v1_advice_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AdviceErrorBody](api_verve/errors/advice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bucketlist(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BucketlistResponse, BucketlistErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.bucketlist()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BucketlistResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BucketlistErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.bucketlist()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BucketlistResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BucketlistErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BucketlistResponse](api_verve/models/v1_bucketlist_response.py), [BucketlistErrorBody](api_verve/errors/bucketlist_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BucketlistResponse](api_verve/models/v1_bucketlist_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BucketlistErrorBody](api_verve/errors/bucketlist_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def charades(*, category: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CharadesResponse, CharadesErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.charades(category="movies")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CharadesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CharadesErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.charades(category="movies")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CharadesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CharadesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CharadesResponse](api_verve/models/v1_charades_response.py), [CharadesErrorBody](api_verve/errors/charades_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CharadesResponse](api_verve/models/v1_charades_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CharadesErrorBody](api_verve/errors/charades_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def chessmovevalidator(move: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ChessmovevalidatorResponse, ChessmovevalidatorErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.chessmovevalidator("Nf3")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ChessmovevalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChessmovevalidatorErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.chessmovevalidator("Nf3")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ChessmovevalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChessmovevalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ChessmovevalidatorResponse](api_verve/models/v1_chessmovevalidator_response.py), [ChessmovevalidatorErrorBody](api_verve/errors/chessmovevalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ChessmovevalidatorResponse](api_verve/models/v1_chessmovevalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ChessmovevalidatorErrorBody](api_verve/errors/chessmovevalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def chucknorris(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ChucknorrisResponse, ChucknorrisErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.chucknorris()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ChucknorrisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChucknorrisErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.chucknorris()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ChucknorrisResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ChucknorrisErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ChucknorrisResponse](api_verve/models/v1_chucknorris_response.py), [ChucknorrisErrorBody](api_verve/errors/chucknorris_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ChucknorrisResponse](api_verve/models/v1_chucknorris_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ChucknorrisErrorBody](api_verve/errors/chucknorris_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def compliments(*, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ComplimentsResponse, ComplimentsErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.compliments(adult=False)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ComplimentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ComplimentsErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.compliments(adult=False)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ComplimentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ComplimentsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ComplimentsResponse](api_verve/models/v1_compliments_response.py), [ComplimentsErrorBody](api_verve/errors/compliments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ComplimentsResponse](api_verve/models/v1_compliments_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ComplimentsErrorBody](api_verve/errors/compliments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dadjokes(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DadjokesResponse, DadjokesErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.dadjokes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DadjokesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DadjokesErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.dadjokes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DadjokesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DadjokesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DadjokesResponse](api_verve/models/v1_dadjokes_response.py), [DadjokesErrorBody](api_verve/errors/dadjokes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DadjokesResponse](api_verve/models/v1_dadjokes_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DadjokesErrorBody](api_verve/errors/dadjokes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dndgenerator(*, type_: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DndgeneratorResponse, DndgeneratorErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.dndgenerator(type_="character", count=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DndgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DndgeneratorErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.dndgenerator(type_="character", count=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DndgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DndgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DndgeneratorResponse](api_verve/models/v1_dndgenerator_response.py), [DndgeneratorErrorBody](api_verve/errors/dndgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DndgeneratorResponse](api_verve/models/v1_dndgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DndgeneratorErrorBody](api_verve/errors/dndgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fortuneteller(*, category: str | None = None, question: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FortunetellerResponse, FortunetellerErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.fortuneteller(
    category="general", question="What does the future hold for me?"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FortunetellerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FortunetellerErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.fortuneteller(
    category="general", question="What does the future hold for me?"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FortunetellerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FortunetellerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1FortunetellerResponse](api_verve/models/v1_fortuneteller_response.py), [FortunetellerErrorBody](api_verve/errors/fortuneteller_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FortunetellerResponse](api_verve/models/v1_fortuneteller_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FortunetellerErrorBody](api_verve/errors/fortuneteller_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def historicalevents(text: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HistoricaleventsResponse, HistoricaleventsErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.historicalevents("moon landing")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HistoricaleventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HistoricaleventsErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.historicalevents("moon landing")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HistoricaleventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HistoricaleventsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HistoricaleventsResponse](api_verve/models/v1_historicalevents_response.py), [HistoricaleventsErrorBody](api_verve/errors/historicalevents_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HistoricaleventsResponse](api_verve/models/v1_historicalevents_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HistoricaleventsErrorBody](api_verve/errors/historicalevents_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lovecalculator(name1: str, name2: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LovecalculatorResponse, LovecalculatorErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.lovecalculator("John", "Jane")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LovecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LovecalculatorErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.lovecalculator("John", "Jane")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LovecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LovecalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LovecalculatorResponse](api_verve/models/v1_lovecalculator_response.py), [LovecalculatorErrorBody](api_verve/errors/lovecalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LovecalculatorResponse](api_verve/models/v1_lovecalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LovecalculatorErrorBody](api_verve/errors/lovecalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def magic8ball(*, question: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1Magic8BallResponse, Magic8BallErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.magic8ball(question="Will it rain today?")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1Magic8BallResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type Magic8BallErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.magic8ball(question="Will it rain today?")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1Magic8BallResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type Magic8BallErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1Magic8BallResponse](api_verve/models/v1_magic8_ball_response.py), [Magic8BallErrorBody](api_verve/errors/magic8_ball_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1Magic8BallResponse](api_verve/models/v1_magic8_ball_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[Magic8BallErrorBody](api_verve/errors/magic8_ball_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def musicnotegenerator(note: str, *, octave: int | None = None, duration: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MusicnotegeneratorResponse, MusicnotegeneratorErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.musicnotegenerator("C", octave=4, duration=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MusicnotegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MusicnotegeneratorErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.musicnotegenerator("C", octave=4, duration=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MusicnotegeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MusicnotegeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MusicnotegeneratorResponse](api_verve/models/v1_musicnotegenerator_response.py), [MusicnotegeneratorErrorBody](api_verve/errors/musicnotegenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MusicnotegeneratorResponse](api_verve/models/v1_musicnotegenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MusicnotegeneratorErrorBody](api_verve/errors/musicnotegenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def neverhaveiever(*, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NeverhaveieverResponse, NeverhaveieverErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.neverhaveiever(adult=False)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NeverhaveieverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NeverhaveieverErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.neverhaveiever(adult=False)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NeverhaveieverResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NeverhaveieverErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NeverhaveieverResponse](api_verve/models/v1_neverhaveiever_response.py), [NeverhaveieverErrorBody](api_verve/errors/neverhaveiever_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NeverhaveieverResponse](api_verve/models/v1_neverhaveiever_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NeverhaveieverErrorBody](api_verve/errors/neverhaveiever_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def pictionary(*, difficulty: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PictionaryResponse, PictionaryErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.pictionary(difficulty="medium", count=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PictionaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PictionaryErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.pictionary(difficulty="medium", count=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PictionaryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PictionaryErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PictionaryResponse](api_verve/models/v1_pictionary_response.py), [PictionaryErrorBody](api_verve/errors/pictionary_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PictionaryResponse](api_verve/models/v1_pictionary_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PictionaryErrorBody](api_verve/errors/pictionary_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomfacts(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RandomfactsResponse, RandomfactsErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.randomfacts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomfactsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomfactsErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.randomfacts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomfactsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomfactsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RandomfactsResponse](api_verve/models/v1_randomfacts_response.py), [RandomfactsErrorBody](api_verve/errors/randomfacts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RandomfactsResponse](api_verve/models/v1_randomfacts_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RandomfactsErrorBody](api_verve/errors/randomfacts_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomjoke(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RandomjokeResponse, RandomjokeErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.randomjoke()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomjokeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomjokeErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.randomjoke()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomjokeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomjokeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RandomjokeResponse](api_verve/models/v1_randomjoke_response.py), [RandomjokeErrorBody](api_verve/errors/randomjoke_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RandomjokeResponse](api_verve/models/v1_randomjoke_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RandomjokeErrorBody](api_verve/errors/randomjoke_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randompun(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RandompunResponse, RandompunErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.randompun()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandompunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandompunErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.randompun()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandompunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandompunErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RandompunResponse](api_verve/models/v1_randompun_response.py), [RandompunErrorBody](api_verve/errors/randompun_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RandompunResponse](api_verve/models/v1_randompun_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RandompunErrorBody](api_verve/errors/randompun_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def randomquote(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RandomquoteResponse, RandomquoteErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.randomquote()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomquoteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomquoteErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.randomquote()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RandomquoteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RandomquoteErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RandomquoteResponse](api_verve/models/v1_randomquote_response.py), [RandomquoteErrorBody](api_verve/errors/randomquote_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RandomquoteResponse](api_verve/models/v1_randomquote_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RandomquoteErrorBody](api_verve/errors/randomquote_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def scrabblescorer(word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ScrabblescorerResponse, ScrabblescorerErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.scrabblescorer("QUIZ", language="english")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ScrabblescorerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ScrabblescorerErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.scrabblescorer("QUIZ", language="english")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ScrabblescorerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ScrabblescorerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ScrabblescorerResponse](api_verve/models/v1_scrabblescorer_response.py), [ScrabblescorerErrorBody](api_verve/errors/scrabblescorer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ScrabblescorerResponse](api_verve/models/v1_scrabblescorer_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ScrabblescorerErrorBody](api_verve/errors/scrabblescorer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sudoku(*, difficulty: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SudokuResponse, SudokuErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.sudoku(difficulty="medium")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SudokuResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SudokuErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.sudoku(difficulty="medium")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SudokuResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SudokuErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SudokuResponse](api_verve/models/v1_sudoku_response.py), [SudokuErrorBody](api_verve/errors/sudoku_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SudokuResponse](api_verve/models/v1_sudoku_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SudokuErrorBody](api_verve/errors/sudoku_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trivia(*, category: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TriviaResponse, TriviaErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.trivia(category="general")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TriviaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriviaErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.trivia(category="general")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TriviaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriviaErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TriviaResponse](api_verve/models/v1_trivia_response.py), [TriviaErrorBody](api_verve/errors/trivia_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TriviaResponse](api_verve/models/v1_trivia_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TriviaErrorBody](api_verve/errors/trivia_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def truthordare(*, type_: str | None = None, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TruthordareResponse, TruthordareErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.truthordare(type_="random", adult=False)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TruthordareResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TruthordareErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.truthordare(type_="random", adult=False)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TruthordareResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TruthordareErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TruthordareResponse](api_verve/models/v1_truthordare_response.py), [TruthordareErrorBody](api_verve/errors/truthordare_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TruthordareResponse](api_verve/models/v1_truthordare_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TruthordareErrorBody](api_verve/errors/truthordare_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordlehelper(*, green: str | None = None, yellow: str | None = None, gray: str | None = None, pattern: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WordlehelperResponse, WordlehelperErrorBody]</code></summary>

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
result = client.entertainment.with_raw_response.wordlehelper(
    green="A1,E5", yellow="R2,O3", gray="STLN", pattern="A___E", limit=25
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordlehelperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordlehelperErrorBody
```

**Async**

```python
result = await async_client.entertainment.with_raw_response.wordlehelper(
    green="A1,E5", yellow="R2,O3", gray="STLN", pattern="A___E", limit=25
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordlehelperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordlehelperErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WordlehelperResponse](api_verve/models/v1_wordlehelper_response.py), [WordlehelperErrorBody](api_verve/errors/wordlehelper_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WordlehelperResponse](api_verve/models/v1_wordlehelper_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WordlehelperErrorBody](api_verve/errors/wordlehelper_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def balancesheet(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BalancesheetResponse, BalancesheetErrorBody]</code></summary>

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
result = client.finance.with_raw_response.balancesheet("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BalancesheetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BalancesheetErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.balancesheet("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BalancesheetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BalancesheetErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BalancesheetResponse](api_verve/models/v1_balancesheet_response.py), [BalancesheetErrorBody](api_verve/errors/balancesheet_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BalancesheetResponse](api_verve/models/v1_balancesheet_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BalancesheetErrorBody](api_verve/errors/balancesheet_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def benchmarkrate(rate: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BenchmarkrateResponse, BenchmarkrateErrorBody]</code></summary>

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
result = client.finance.with_raw_response.benchmarkrate("SOFR")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BenchmarkrateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BenchmarkrateErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.benchmarkrate("SOFR")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BenchmarkrateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BenchmarkrateErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BenchmarkrateResponse](api_verve/models/v1_benchmarkrate_response.py), [BenchmarkrateErrorBody](api_verve/errors/benchmarkrate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BenchmarkrateResponse](api_verve/models/v1_benchmarkrate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BenchmarkrateErrorBody](api_verve/errors/benchmarkrate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def binlookup(bin_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BinlookupResponse, BinlookupErrorBody]</code></summary>

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
result = client.finance.with_raw_response.binlookup("448590")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BinlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BinlookupErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.binlookup("448590")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BinlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BinlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BinlookupResponse](api_verve/models/v1_binlookup_response.py), [BinlookupErrorBody](api_verve/errors/binlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BinlookupResponse](api_verve/models/v1_binlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BinlookupErrorBody](api_verve/errors/binlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bitcoin(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BitcoinResponse, BitcoinErrorBody]</code></summary>

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
result = client.finance.with_raw_response.bitcoin(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BitcoinResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BitcoinErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.bitcoin(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BitcoinResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BitcoinErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BitcoinResponse](api_verve/models/v1_bitcoin_response.py), [BitcoinErrorBody](api_verve/errors/bitcoin_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BitcoinResponse](api_verve/models/v1_bitcoin_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BitcoinErrorBody](api_verve/errors/bitcoin_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cashflow(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CashflowResponse, CashflowErrorBody]</code></summary>

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
result = client.finance.with_raw_response.cashflow("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CashflowResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CashflowErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.cashflow("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CashflowResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CashflowErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CashflowResponse](api_verve/models/v1_cashflow_response.py), [CashflowErrorBody](api_verve/errors/cashflow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CashflowResponse](api_verve/models/v1_cashflow_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CashflowErrorBody](api_verve/errors/cashflow_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def companylookup(ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CompanylookupResponse, CompanylookupErrorBody]</code></summary>

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
result = client.finance.with_raw_response.companylookup("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CompanylookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CompanylookupErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.companylookup("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CompanylookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CompanylookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CompanylookupResponse](api_verve/models/v1_companylookup_response.py), [CompanylookupErrorBody](api_verve/errors/companylookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CompanylookupResponse](api_verve/models/v1_companylookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CompanylookupErrorBody](api_verve/errors/companylookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def costliving(location: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CostlivingResponse, CostlivingErrorBody]</code></summary>

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
result = client.finance.with_raw_response.costliving("California")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CostlivingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CostlivingErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.costliving("California")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CostlivingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CostlivingErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CostlivingResponse](api_verve/models/v1_costliving_response.py), [CostlivingErrorBody](api_verve/errors/costliving_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CostlivingResponse](api_verve/models/v1_costliving_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CostlivingErrorBody](api_verve/errors/costliving_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cpiinflation(*, date: str | None = None, category: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CpiinflationResponse, CpiinflationErrorBody]</code></summary>

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
result = client.finance.with_raw_response.cpiinflation(date="2023-06", category="food")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CpiinflationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CpiinflationErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.cpiinflation(date="2023-06", category="food")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CpiinflationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CpiinflationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CpiinflationResponse](api_verve/models/v1_cpiinflation_response.py), [CpiinflationErrorBody](api_verve/errors/cpiinflation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CpiinflationResponse](api_verve/models/v1_cpiinflation_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CpiinflationErrorBody](api_verve/errors/cpiinflation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def currencyconverter(value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CurrencyconverterResponse, CurrencyconverterErrorBody]</code></summary>

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
result = client.finance.with_raw_response.currencyconverter(1, "USD", "EUR")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CurrencyconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CurrencyconverterErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.currencyconverter(1, "USD", "EUR")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CurrencyconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CurrencyconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CurrencyconverterResponse](api_verve/models/v1_currencyconverter_response.py), [CurrencyconverterErrorBody](api_verve/errors/currencyconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CurrencyconverterResponse](api_verve/models/v1_currencyconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CurrencyconverterErrorBody](api_verve/errors/currencyconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def currencysymbols(currency: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CurrencysymbolsResponse, CurrencysymbolsErrorBody]</code></summary>

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
result = client.finance.with_raw_response.currencysymbols("USD")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CurrencysymbolsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CurrencysymbolsErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.currencysymbols("USD")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CurrencysymbolsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CurrencysymbolsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CurrencysymbolsResponse](api_verve/models/v1_currencysymbols_response.py), [CurrencysymbolsErrorBody](api_verve/errors/currencysymbols_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CurrencysymbolsResponse](api_verve/models/v1_currencysymbols_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CurrencysymbolsErrorBody](api_verve/errors/currencysymbols_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dividends(ticker: str, *, period: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DividendsResponse, DividendsErrorBody]</code></summary>

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
result = client.finance.with_raw_response.dividends("AAPL", period="annual", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DividendsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DividendsErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.dividends("AAPL", period="annual", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DividendsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DividendsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DividendsResponse](api_verve/models/v1_dividends_response.py), [DividendsErrorBody](api_verve/errors/dividends_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DividendsResponse](api_verve/models/v1_dividends_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DividendsErrorBody](api_verve/errors/dividends_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def earnings(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1EarningsResponse, EarningsErrorBody]</code></summary>

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
result = client.finance.with_raw_response.earnings("ADBE")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EarningsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EarningsErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.earnings("ADBE")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EarningsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EarningsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1EarningsResponse](api_verve/models/v1_earnings_response.py), [EarningsErrorBody](api_verve/errors/earnings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1EarningsResponse](api_verve/models/v1_earnings_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EarningsErrorBody](api_verve/errors/earnings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ethereum(*, currency: str | None = None, hourly: bool | None = None, hourly_hour: float | None = None, hourly_price: float | None = None, hourly_timestamp: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1EthereumResponse, EthereumErrorBody]</code></summary>

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
result = client.finance.with_raw_response.ethereum(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EthereumResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EthereumErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.ethereum(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EthereumResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EthereumErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1EthereumResponse](api_verve/models/v1_ethereum_response.py), [EthereumErrorBody](api_verve/errors/ethereum_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1EthereumResponse](api_verve/models/v1_ethereum_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EthereumErrorBody](api_verve/errors/ethereum_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def exchangerate(currency1: str, currency2: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ExchangerateResponse, ExchangerateErrorBody]</code></summary>

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
result = client.finance.with_raw_response.exchangerate("USD", "EUR")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ExchangerateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExchangerateErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.exchangerate("USD", "EUR")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ExchangerateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExchangerateErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ExchangerateResponse](api_verve/models/v1_exchangerate_response.py), [ExchangerateErrorBody](api_verve/errors/exchangerate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ExchangerateResponse](api_verve/models/v1_exchangerate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ExchangerateErrorBody](api_verve/errors/exchangerate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def financialratios(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FinancialratiosResponse, FinancialratiosErrorBody]</code></summary>

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
result = client.finance.with_raw_response.financialratios("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FinancialratiosResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FinancialratiosErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.financialratios("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FinancialratiosResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FinancialratiosErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1FinancialratiosResponse](api_verve/models/v1_financialratios_response.py), [FinancialratiosErrorBody](api_verve/errors/financialratios_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FinancialratiosResponse](api_verve/models/v1_financialratios_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FinancialratiosErrorBody](api_verve/errors/financialratios_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def gdp(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GdpResponse, GdpErrorBody]</code></summary>

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
result = client.finance.with_raw_response.gdp("US", year=2023)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GdpResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GdpErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.gdp("US", year=2023)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GdpResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GdpErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GdpResponse](api_verve/models/v1_gdp_response.py), [GdpErrorBody](api_verve/errors/gdp_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GdpResponse](api_verve/models/v1_gdp_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GdpErrorBody](api_verve/errors/gdp_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def globalstockmarket(country: str, *, year: int | None = None, month: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GlobalstockmarketResponse, GlobalstockmarketErrorBody]</code></summary>

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
result = client.finance.with_raw_response.globalstockmarket("DE", year=2023, month=6)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GlobalstockmarketResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GlobalstockmarketErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.globalstockmarket("DE", year=2023, month=6)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GlobalstockmarketResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GlobalstockmarketErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GlobalstockmarketResponse](api_verve/models/v1_globalstockmarket_response.py), [GlobalstockmarketErrorBody](api_verve/errors/globalstockmarket_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GlobalstockmarketResponse](api_verve/models/v1_globalstockmarket_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GlobalstockmarketErrorBody](api_verve/errors/globalstockmarket_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def goldprice(*, currency: str | None = None, hourly: bool | None = None, hourly_hour: float | None = None, hourly_price: float | None = None, hourly_timestamp: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GoldpriceResponse, GoldpriceErrorBody]</code></summary>

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
result = client.finance.with_raw_response.goldprice(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GoldpriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GoldpriceErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.goldprice(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GoldpriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GoldpriceErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GoldpriceResponse](api_verve/models/v1_goldprice_response.py), [GoldpriceErrorBody](api_verve/errors/goldprice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GoldpriceResponse](api_verve/models/v1_goldprice_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GoldpriceErrorBody](api_verve/errors/goldprice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ifsclookup(ifsc: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1IfsclookupResponse, IfsclookupErrorBody]</code></summary>

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
result = client.finance.with_raw_response.ifsclookup("SBIN0005943")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IfsclookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IfsclookupErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.ifsclookup("SBIN0005943")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IfsclookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IfsclookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1IfsclookupResponse](api_verve/models/v1_ifsclookup_response.py), [IfsclookupErrorBody](api_verve/errors/ifsclookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1IfsclookupResponse](api_verve/models/v1_ifsclookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IfsclookupErrorBody](api_verve/errors/ifsclookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def incomestatement(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1IncomestatementResponse, IncomestatementErrorBody]</code></summary>

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
result = client.finance.with_raw_response.incomestatement("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IncomestatementResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IncomestatementErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.incomestatement("AAPL")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IncomestatementResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IncomestatementErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1IncomestatementResponse](api_verve/models/v1_incomestatement_response.py), [IncomestatementErrorBody](api_verve/errors/incomestatement_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1IncomestatementResponse](api_verve/models/v1_incomestatement_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IncomestatementErrorBody](api_verve/errors/incomestatement_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def incometax(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1IncometaxResponse, IncometaxErrorBody]</code></summary>

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
result = client.finance.with_raw_response.incometax("US", year=2024)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IncometaxResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IncometaxErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.incometax("US", year=2024)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IncometaxResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IncometaxErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1IncometaxResponse](api_verve/models/v1_incometax_response.py), [IncometaxErrorBody](api_verve/errors/incometax_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1IncometaxResponse](api_verve/models/v1_incometax_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IncometaxErrorBody](api_verve/errors/incometax_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def incometaxcalculator(income: float, rate: float, *, deduction: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1IncometaxcalculatorResponse, IncometaxcalculatorErrorBody]</code></summary>

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
result = client.finance.with_raw_response.incometaxcalculator(85000, 22, deduction=14600)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IncometaxcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IncometaxcalculatorErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.incometaxcalculator(85000, 22, deduction=14600)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IncometaxcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IncometaxcalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1IncometaxcalculatorResponse](api_verve/models/v1_incometaxcalculator_response.py), [IncometaxcalculatorErrorBody](api_verve/errors/incometaxcalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1IncometaxcalculatorResponse](api_verve/models/v1_incometaxcalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IncometaxcalculatorErrorBody](api_verve/errors/incometaxcalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def inflation(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1InflationResponse, InflationErrorBody]</code></summary>

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
result = client.finance.with_raw_response.inflation("US", year=2023)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InflationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InflationErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.inflation("US", year=2023)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InflationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InflationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1InflationResponse](api_verve/models/v1_inflation_response.py), [InflationErrorBody](api_verve/errors/inflation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1InflationResponse](api_verve/models/v1_inflation_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[InflationErrorBody](api_verve/errors/inflation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def insidertrading(ticker: str, *, type_: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1InsidertradingResponse, InsidertradingErrorBody]</code></summary>

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
result = client.finance.with_raw_response.insidertrading("AAPL", type_="buy", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InsidertradingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InsidertradingErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.insidertrading("AAPL", type_="buy", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InsidertradingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InsidertradingErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1InsidertradingResponse](api_verve/models/v1_insidertrading_response.py), [InsidertradingErrorBody](api_verve/errors/insidertrading_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1InsidertradingResponse](api_verve/models/v1_insidertrading_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[InsidertradingErrorBody](api_verve/errors/insidertrading_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def interestrate(country: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1InterestrateResponse, InterestrateErrorBody]</code></summary>

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
result = client.finance.with_raw_response.interestrate("US", date="2024-06")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InterestrateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InterestrateErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.interestrate("US", date="2024-06")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1InterestrateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InterestrateErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1InterestrateResponse](api_verve/models/v1_interestrate_response.py), [InterestrateErrorBody](api_verve/errors/interestrate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1InterestrateResponse](api_verve/models/v1_interestrate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[InterestrateErrorBody](api_verve/errors/interestrate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jobsreport(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JobsreportResponse, JobsreportErrorBody]</code></summary>

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
result = client.finance.with_raw_response.jobsreport(date="2023-06")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JobsreportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsreportErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.jobsreport(date="2023-06")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JobsreportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobsreportErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1JobsreportResponse](api_verve/models/v1_jobsreport_response.py), [JobsreportErrorBody](api_verve/errors/jobsreport_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JobsreportResponse](api_verve/models/v1_jobsreport_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JobsreportErrorBody](api_verve/errors/jobsreport_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def loanpaymentcalculator(body: V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LoanpaymentcalculatorResponse, LoanpaymentcalculatorErrorBody]</code></summary>

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
result = client.finance.with_raw_response.loanpaymentcalculator(
    V1LoanpaymentcalculatorRequest(loan_amount=1.5, interest_rate=1.5, loan_term=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LoanpaymentcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LoanpaymentcalculatorErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.loanpaymentcalculator(
    V1LoanpaymentcalculatorRequest(loan_amount=1.5, interest_rate=1.5, loan_term=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LoanpaymentcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LoanpaymentcalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LoanpaymentcalculatorResponse](api_verve/models/v1_loanpaymentcalculator_response.py), [LoanpaymentcalculatorErrorBody](api_verve/errors/loanpaymentcalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LoanpaymentcalculatorResponse](api_verve/models/v1_loanpaymentcalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LoanpaymentcalculatorErrorBody](api_verve/errors/loanpaymentcalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def minimumwage(state: str, *, year: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MinimumwageResponse, MinimumwageErrorBody]</code></summary>

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
result = client.finance.with_raw_response.minimumwage("CA", year=2024)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MinimumwageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MinimumwageErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.minimumwage("CA", year=2024)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MinimumwageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MinimumwageErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MinimumwageResponse](api_verve/models/v1_minimumwage_response.py), [MinimumwageErrorBody](api_verve/errors/minimumwage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MinimumwageResponse](api_verve/models/v1_minimumwage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MinimumwageErrorBody](api_verve/errors/minimumwage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mortgagecalculator(body: V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MortgagecalculatorResponse, MortgagecalculatorErrorBody]</code></summary>

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
result = client.finance.with_raw_response.mortgagecalculator(V1MortgagecalculatorRequest(amount=1.5, rate=1.5, years=1))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MortgagecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MortgagecalculatorErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.mortgagecalculator(
    V1MortgagecalculatorRequest(amount=1.5, rate=1.5, years=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MortgagecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MortgagecalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MortgagecalculatorResponse](api_verve/models/v1_mortgagecalculator_response.py), [MortgagecalculatorErrorBody](api_verve/errors/mortgagecalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MortgagecalculatorResponse](api_verve/models/v1_mortgagecalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MortgagecalculatorErrorBody](api_verve/errors/mortgagecalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mortgagerate(type_: str, *, year: int | None = None, month: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MortgagerateResponse, MortgagerateErrorBody]</code></summary>

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
result = client.finance.with_raw_response.mortgagerate("30year", year=2023, month=6)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MortgagerateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MortgagerateErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.mortgagerate("30year", year=2023, month=6)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MortgagerateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MortgagerateErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MortgagerateResponse](api_verve/models/v1_mortgagerate_response.py), [MortgagerateErrorBody](api_verve/errors/mortgagerate_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MortgagerateResponse](api_verve/models/v1_mortgagerate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MortgagerateErrorBody](api_verve/errors/mortgagerate_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nationaldebt(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NationaldebtResponse, NationaldebtErrorBody]</code></summary>

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
result = client.finance.with_raw_response.nationaldebt(date="2023-06-15")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NationaldebtResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NationaldebtErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.nationaldebt(date="2023-06-15")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NationaldebtResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NationaldebtErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NationaldebtResponse](api_verve/models/v1_nationaldebt_response.py), [NationaldebtErrorBody](api_verve/errors/nationaldebt_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NationaldebtResponse](api_verve/models/v1_nationaldebt_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NationaldebtErrorBody](api_verve/errors/nationaldebt_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def palladiumprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PalladiumpriceResponse, PalladiumpriceErrorBody]</code></summary>

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
result = client.finance.with_raw_response.palladiumprice(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PalladiumpriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PalladiumpriceErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.palladiumprice(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PalladiumpriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PalladiumpriceErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PalladiumpriceResponse](api_verve/models/v1_palladiumprice_response.py), [PalladiumpriceErrorBody](api_verve/errors/palladiumprice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PalladiumpriceResponse](api_verve/models/v1_palladiumprice_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PalladiumpriceErrorBody](api_verve/errors/palladiumprice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def platinumprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PlatinumpriceResponse, PlatinumpriceErrorBody]</code></summary>

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
result = client.finance.with_raw_response.platinumprice(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PlatinumpriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlatinumpriceErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.platinumprice(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PlatinumpriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PlatinumpriceErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PlatinumpriceResponse](api_verve/models/v1_platinumprice_response.py), [PlatinumpriceErrorBody](api_verve/errors/platinumprice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PlatinumpriceResponse](api_verve/models/v1_platinumprice_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PlatinumpriceErrorBody](api_verve/errors/platinumprice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def population(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PopulationResponse, PopulationErrorBody]</code></summary>

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
result = client.finance.with_raw_response.population("US", year=2023)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PopulationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PopulationErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.population("US", year=2023)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PopulationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PopulationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PopulationResponse](api_verve/models/v1_population_response.py), [PopulationErrorBody](api_verve/errors/population_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PopulationResponse](api_verve/models/v1_population_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PopulationErrorBody](api_verve/errors/population_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purchasingpower(amount: float, from_: str, *, to: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PurchasingpowerResponse, PurchasingpowerErrorBody]</code></summary>

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
result = client.finance.with_raw_response.purchasingpower(100, "1990", to="2024")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PurchasingpowerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PurchasingpowerErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.purchasingpower(100, "1990", to="2024")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PurchasingpowerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PurchasingpowerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PurchasingpowerResponse](api_verve/models/v1_purchasingpower_response.py), [PurchasingpowerErrorBody](api_verve/errors/purchasingpower_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PurchasingpowerResponse](api_verve/models/v1_purchasingpower_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PurchasingpowerErrorBody](api_verve/errors/purchasingpower_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def routinglookup(routing: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RoutinglookupResponse, RoutinglookupErrorBody]</code></summary>

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
result = client.finance.with_raw_response.routinglookup("121000358")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RoutinglookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RoutinglookupErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.routinglookup("121000358")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RoutinglookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RoutinglookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RoutinglookupResponse](api_verve/models/v1_routinglookup_response.py), [RoutinglookupErrorBody](api_verve/errors/routinglookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RoutinglookupResponse](api_verve/models/v1_routinglookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RoutinglookupErrorBody](api_verve/errors/routinglookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def salestax(zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SalestaxResponse, SalestaxErrorBody]</code></summary>

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
result = client.finance.with_raw_response.salestax("64082")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SalestaxResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SalestaxErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.salestax("64082")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SalestaxResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SalestaxErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SalestaxResponse](api_verve/models/v1_salestax_response.py), [SalestaxErrorBody](api_verve/errors/salestax_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SalestaxResponse](api_verve/models/v1_salestax_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SalestaxErrorBody](api_verve/errors/salestax_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def salestaxcalculator(amount: float, *, zip_: str | None = None, state: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SalestaxcalculatorResponse, SalestaxcalculatorErrorBody]</code></summary>

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
result = client.finance.with_raw_response.salestaxcalculator(100, zip_="90210", state="CA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SalestaxcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SalestaxcalculatorErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.salestaxcalculator(100, zip_="90210", state="CA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SalestaxcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SalestaxcalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SalestaxcalculatorResponse](api_verve/models/v1_salestaxcalculator_response.py), [SalestaxcalculatorErrorBody](api_verve/errors/salestaxcalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SalestaxcalculatorResponse](api_verve/models/v1_salestaxcalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SalestaxcalculatorErrorBody](api_verve/errors/salestaxcalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sanctionscreening(name: str, *, threshold: float | None = None, limit: float | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SanctionscreeningResponse, SanctionscreeningErrorBody]</code></summary>

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
result = client.finance.with_raw_response.sanctionscreening(
    "Banco Nacional de Cuba", threshold=0.85, limit=10, type_="individual"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SanctionscreeningResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SanctionscreeningErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.sanctionscreening(
    "Banco Nacional de Cuba", threshold=0.85, limit=10, type_="individual"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SanctionscreeningResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SanctionscreeningErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SanctionscreeningResponse](api_verve/models/v1_sanctionscreening_response.py), [SanctionscreeningErrorBody](api_verve/errors/sanctionscreening_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SanctionscreeningResponse](api_verve/models/v1_sanctionscreening_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SanctionscreeningErrorBody](api_verve/errors/sanctionscreening_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def savingsbonds(*, period: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SavingsbondsResponse, SavingsbondsErrorBody]</code></summary>

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
result = client.finance.with_raw_response.savingsbonds(period="2024-11")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SavingsbondsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SavingsbondsErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.savingsbonds(period="2024-11")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SavingsbondsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SavingsbondsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SavingsbondsResponse](api_verve/models/v1_savingsbonds_response.py), [SavingsbondsErrorBody](api_verve/errors/savingsbonds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SavingsbondsResponse](api_verve/models/v1_savingsbonds_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SavingsbondsErrorBody](api_verve/errors/savingsbonds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def secfilings(ticker: str, *, form: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SecfilingsResponse, SecfilingsErrorBody]</code></summary>

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
result = client.finance.with_raw_response.secfilings("AAPL", form="10-K", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SecfilingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SecfilingsErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.secfilings("AAPL", form="10-K", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SecfilingsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SecfilingsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SecfilingsResponse](api_verve/models/v1_secfilings_response.py), [SecfilingsErrorBody](api_verve/errors/secfilings_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SecfilingsResponse](api_verve/models/v1_secfilings_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SecfilingsErrorBody](api_verve/errors/secfilings_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def silverprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SilverpriceResponse, SilverpriceErrorBody]</code></summary>

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
result = client.finance.with_raw_response.silverprice(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SilverpriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SilverpriceErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.silverprice(currency="USD", hourly=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SilverpriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SilverpriceErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SilverpriceResponse](api_verve/models/v1_silverprice_response.py), [SilverpriceErrorBody](api_verve/errors/silverprice_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SilverpriceResponse](api_verve/models/v1_silverprice_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SilverpriceErrorBody](api_verve/errors/silverprice_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stockexchange(mic: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1StockexchangeResponse, StockexchangeErrorBody]</code></summary>

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
result = client.finance.with_raw_response.stockexchange("XNYS")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StockexchangeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StockexchangeErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.stockexchange("XNYS")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StockexchangeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StockexchangeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1StockexchangeResponse](api_verve/models/v1_stockexchange_response.py), [StockexchangeErrorBody](api_verve/errors/stockexchange_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1StockexchangeResponse](api_verve/models/v1_stockexchange_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[StockexchangeErrorBody](api_verve/errors/stockexchange_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stockmarketopentimes(exchange: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1StockmarketopentimesResponse, StockmarketopentimesErrorBody]</code></summary>

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
result = client.finance.with_raw_response.stockmarketopentimes("NYSE")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StockmarketopentimesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StockmarketopentimesErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.stockmarketopentimes("NYSE")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StockmarketopentimesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StockmarketopentimesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1StockmarketopentimesResponse](api_verve/models/v1_stockmarketopentimes_response.py), [StockmarketopentimesErrorBody](api_verve/errors/stockmarketopentimes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1StockmarketopentimesResponse](api_verve/models/v1_stockmarketopentimes_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[StockmarketopentimesErrorBody](api_verve/errors/stockmarketopentimes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def swiftlookup(swift: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SwiftlookupResponse, SwiftlookupErrorBody]</code></summary>

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
result = client.finance.with_raw_response.swiftlookup("CHASUS33ARP")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SwiftlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SwiftlookupErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.swiftlookup("CHASUS33ARP")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SwiftlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SwiftlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SwiftlookupResponse](api_verve/models/v1_swiftlookup_response.py), [SwiftlookupErrorBody](api_verve/errors/swiftlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SwiftlookupResponse](api_verve/models/v1_swiftlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SwiftlookupErrorBody](api_verve/errors/swiftlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tradebalance(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TradebalanceResponse, TradebalanceErrorBody]</code></summary>

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
result = client.finance.with_raw_response.tradebalance(date="2023-06")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TradebalanceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TradebalanceErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.tradebalance(date="2023-06")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TradebalanceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TradebalanceErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TradebalanceResponse](api_verve/models/v1_tradebalance_response.py), [TradebalanceErrorBody](api_verve/errors/tradebalance_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TradebalanceResponse](api_verve/models/v1_tradebalance_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TradebalanceErrorBody](api_verve/errors/tradebalance_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def treasuryyields(*, date: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TreasuryyieldsResponse, TreasuryyieldsErrorBody]</code></summary>

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
result = client.finance.with_raw_response.treasuryyields(date="2025-06", type_="10yr")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TreasuryyieldsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TreasuryyieldsErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.treasuryyields(date="2025-06", type_="10yr")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TreasuryyieldsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TreasuryyieldsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TreasuryyieldsResponse](api_verve/models/v1_treasuryyields_response.py), [TreasuryyieldsErrorBody](api_verve/errors/treasuryyields_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TreasuryyieldsResponse](api_verve/models/v1_treasuryyields_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TreasuryyieldsErrorBody](api_verve/errors/treasuryyields_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unemployment(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UnemploymentResponse, UnemploymentErrorBody]</code></summary>

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
result = client.finance.with_raw_response.unemployment("USA", year=2023)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnemploymentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnemploymentErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.unemployment("USA", year=2023)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UnemploymentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnemploymentErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UnemploymentResponse](api_verve/models/v1_unemployment_response.py), [UnemploymentErrorBody](api_verve/errors/unemployment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UnemploymentResponse](api_verve/models/v1_unemployment_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UnemploymentErrorBody](api_verve/errors/unemployment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vatrates(country: str, *, date: str | None = None, postcode: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1VatratesResponse, VatratesErrorBody]</code></summary>

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
result = client.finance.with_raw_response.vatrates("DE", date="2020-07-01", postcode="35001")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VatratesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VatratesErrorBody
```

**Async**

```python
result = await async_client.finance.with_raw_response.vatrates("DE", date="2020-07-01", postcode="35001")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VatratesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VatratesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1VatratesResponse](api_verve/models/v1_vatrates_response.py), [VatratesErrorBody](api_verve/errors/vatrates_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1VatratesResponse](api_verve/models/v1_vatrates_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[VatratesErrorBody](api_verve/errors/vatrates_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def cocktail(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CocktailResponse, CocktailErrorBody]</code></summary>

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
result = client.food.with_raw_response.cocktail("martini")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CocktailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CocktailErrorBody
```

**Async**

```python
result = await async_client.food.with_raw_response.cocktail("martini")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CocktailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CocktailErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CocktailResponse](api_verve/models/v1_cocktail_response.py), [CocktailErrorBody](api_verve/errors/cocktail_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CocktailResponse](api_verve/models/v1_cocktail_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CocktailErrorBody](api_verve/errors/cocktail_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nutrition(food: str, *, grams: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NutritionResponse, NutritionErrorBody]</code></summary>

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
result = client.food.with_raw_response.nutrition("banana", grams=118)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NutritionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NutritionErrorBody
```

**Async**

```python
result = await async_client.food.with_raw_response.nutrition("banana", grams=118)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NutritionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NutritionErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NutritionResponse](api_verve/models/v1_nutrition_response.py), [NutritionErrorBody](api_verve/errors/nutrition_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NutritionResponse](api_verve/models/v1_nutrition_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NutritionErrorBody](api_verve/errors/nutrition_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recipe(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RecipeResponse, RecipeErrorBody]</code></summary>

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
result = client.food.with_raw_response.recipe("chicken fajitas")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RecipeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RecipeErrorBody
```

**Async**

```python
result = await async_client.food.with_raw_response.recipe("chicken fajitas")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RecipeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RecipeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RecipeResponse](api_verve/models/v1_recipe_response.py), [RecipeErrorBody](api_verve/errors/recipe_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RecipeResponse](api_verve/models/v1_recipe_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RecipeErrorBody](api_verve/errors/recipe_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def acrostic(word: str, *, theme: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AcrosticResponse, AcrosticErrorBody]</code></summary>

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
result = client.games.with_raw_response.acrostic("HAPPY", theme="positive", image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AcrosticResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcrosticErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.acrostic("HAPPY", theme="positive", image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AcrosticResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcrosticErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AcrosticResponse](api_verve/models/v1_acrostic_response.py), [AcrosticErrorBody](api_verve/errors/acrostic_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AcrosticResponse](api_verve/models/v1_acrostic_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AcrosticErrorBody](api_verve/errors/acrostic_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def anagrampuzzle(*, word: str | None = None, count: int | None = None, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AnagrampuzzleResponse, AnagrampuzzleErrorBody]</code></summary>

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
result = client.games.with_raw_response.anagrampuzzle(word="listen", count=1, difficulty="medium", image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AnagrampuzzleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnagrampuzzleErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.anagrampuzzle(
    word="listen", count=1, difficulty="medium", image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AnagrampuzzleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnagrampuzzleErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AnagrampuzzleResponse](api_verve/models/v1_anagrampuzzle_response.py), [AnagrampuzzleErrorBody](api_verve/errors/anagrampuzzle_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AnagrampuzzleResponse](api_verve/models/v1_anagrampuzzle_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AnagrampuzzleErrorBody](api_verve/errors/anagrampuzzle_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def carddeckshuffler(*, decks: int | None = None, jokers: bool | None = None, method: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CarddeckshufflerResponse, CarddeckshufflerErrorBody]</code></summary>

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
result = client.games.with_raw_response.carddeckshuffler(decks=1, jokers=False, method="fisher-yates")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CarddeckshufflerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CarddeckshufflerErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.carddeckshuffler(decks=1, jokers=False, method="fisher-yates")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CarddeckshufflerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CarddeckshufflerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CarddeckshufflerResponse](api_verve/models/v1_carddeckshuffler_response.py), [CarddeckshufflerErrorBody](api_verve/errors/carddeckshuffler_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CarddeckshufflerResponse](api_verve/models/v1_carddeckshuffler_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CarddeckshufflerErrorBody](api_verve/errors/carddeckshuffler_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def coinflipper(*, flips: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CoinflipperResponse, CoinflipperErrorBody]</code></summary>

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
result = client.games.with_raw_response.coinflipper(flips=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CoinflipperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CoinflipperErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.coinflipper(flips=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CoinflipperResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CoinflipperErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CoinflipperResponse](api_verve/models/v1_coinflipper_response.py), [CoinflipperErrorBody](api_verve/errors/coinflipper_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CoinflipperResponse](api_verve/models/v1_coinflipper_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CoinflipperErrorBody](api_verve/errors/coinflipper_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def crossword(*, size: str | None = None, theme: str | None = None, difficulty: str | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CrosswordResponse, CrosswordErrorBody]</code></summary>

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
result = client.games.with_raw_response.crossword(
    size="medium", theme="animals", difficulty="medium", image=True, solution_image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CrosswordResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CrosswordErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.crossword(
    size="medium", theme="animals", difficulty="medium", image=True, solution_image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CrosswordResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CrosswordErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CrosswordResponse](api_verve/models/v1_crossword_response.py), [CrosswordErrorBody](api_verve/errors/crossword_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CrosswordResponse](api_verve/models/v1_crossword_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CrosswordErrorBody](api_verve/errors/crossword_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cryptogram(*, text: str | None = None, random: bool | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CryptogramResponse, CryptogramErrorBody]</code></summary>

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
result = client.games.with_raw_response.cryptogram(
    text="The quick brown fox", random=True, image=True, solution_image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CryptogramResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CryptogramErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.cryptogram(
    text="The quick brown fox", random=True, image=True, solution_image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CryptogramResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CryptogramErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CryptogramResponse](api_verve/models/v1_cryptogram_response.py), [CryptogramErrorBody](api_verve/errors/cryptogram_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CryptogramResponse](api_verve/models/v1_cryptogram_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CryptogramErrorBody](api_verve/errors/cryptogram_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def diceroller(*, dice: str | None = None, modifier: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DicerollerResponse, DicerollerErrorBody]</code></summary>

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
result = client.games.with_raw_response.diceroller(dice="3d6", modifier=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DicerollerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DicerollerErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.diceroller(dice="3d6", modifier=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DicerollerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DicerollerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DicerollerResponse](api_verve/models/v1_diceroller_response.py), [DicerollerErrorBody](api_verve/errors/diceroller_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DicerollerResponse](api_verve/models/v1_diceroller_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DicerollerErrorBody](api_verve/errors/diceroller_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fillintheblanks(*, category: str | None = None, count: int | None = None, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FillintheblanksResponse, FillintheblanksErrorBody]</code></summary>

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
result = client.games.with_raw_response.fillintheblanks(category="idioms", count=5, difficulty="medium", image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FillintheblanksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FillintheblanksErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.fillintheblanks(
    category="idioms", count=5, difficulty="medium", image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FillintheblanksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FillintheblanksErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1FillintheblanksResponse](api_verve/models/v1_fillintheblanks_response.py), [FillintheblanksErrorBody](api_verve/errors/fillintheblanks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FillintheblanksResponse](api_verve/models/v1_fillintheblanks_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FillintheblanksErrorBody](api_verve/errors/fillintheblanks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fortunecookie(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FortunecookieResponse, FortunecookieErrorBody]</code></summary>

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
result = client.games.with_raw_response.fortunecookie()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FortunecookieResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FortunecookieErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.fortunecookie()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FortunecookieResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FortunecookieErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1FortunecookieResponse](api_verve/models/v1_fortunecookie_response.py), [FortunecookieErrorBody](api_verve/errors/fortunecookie_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FortunecookieResponse](api_verve/models/v1_fortunecookie_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FortunecookieErrorBody](api_verve/errors/fortunecookie_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def gamecharacter(*, race: str | None = None, class_: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GamecharacterResponse, GamecharacterErrorBody]</code></summary>

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
result = client.games.with_raw_response.gamecharacter(race="elf", class_="mage")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GamecharacterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GamecharacterErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.gamecharacter(race="elf", class_="mage")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GamecharacterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GamecharacterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GamecharacterResponse](api_verve/models/v1_gamecharacter_response.py), [GamecharacterErrorBody](api_verve/errors/gamecharacter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GamecharacterResponse](api_verve/models/v1_gamecharacter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GamecharacterErrorBody](api_verve/errors/gamecharacter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hangmanword(*, category: str | None = None, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HangmanwordResponse, HangmanwordErrorBody]</code></summary>

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
result = client.games.with_raw_response.hangmanword(category="animals", difficulty="medium", count=1, image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HangmanwordResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HangmanwordErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.hangmanword(
    category="animals", difficulty="medium", count=1, image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HangmanwordResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HangmanwordErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HangmanwordResponse](api_verve/models/v1_hangmanword_response.py), [HangmanwordErrorBody](api_verve/errors/hangmanword_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HangmanwordResponse](api_verve/models/v1_hangmanword_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HangmanwordErrorBody](api_verve/errors/hangmanword_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lotterypicker(*, game: str | None = None, numbers: int | None = None, max_: int | None = None, bonus: int | None = None, tickets: int | None = None, bonusmax: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LotterypickerResponse, LotterypickerErrorBody]</code></summary>

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
result = client.games.with_raw_response.lotterypicker(
    game="powerball", numbers=6, max_=49, bonus=1, tickets=3, bonusmax=26
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LotterypickerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LotterypickerErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.lotterypicker(
    game="powerball", numbers=6, max_=49, bonus=1, tickets=3, bonusmax=26
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LotterypickerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LotterypickerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LotterypickerResponse](api_verve/models/v1_lotterypicker_response.py), [LotterypickerErrorBody](api_verve/errors/lotterypicker_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LotterypickerResponse](api_verve/models/v1_lotterypicker_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LotterypickerErrorBody](api_verve/errors/lotterypicker_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def madlibs(*, category: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MadlibsResponse, MadlibsErrorBody]</code></summary>

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
result = client.games.with_raw_response.madlibs(category="funny", count=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MadlibsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MadlibsErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.madlibs(category="funny", count=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MadlibsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MadlibsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MadlibsResponse](api_verve/models/v1_madlibs_response.py), [MadlibsErrorBody](api_verve/errors/madlibs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MadlibsResponse](api_verve/models/v1_madlibs_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MadlibsErrorBody](api_verve/errors/madlibs_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def maze(*, width: int | None = None, height: int | None = None, difficulty: str | None = None, image: bool | None = None, solution_image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MazeResponse, MazeErrorBody]</code></summary>

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
result = client.games.with_raw_response.maze(width=15, height=15, difficulty="medium", image=True, solution_image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MazeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MazeErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.maze(
    width=15, height=15, difficulty="medium", image=True, solution_image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MazeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MazeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MazeResponse](api_verve/models/v1_maze_response.py), [MazeErrorBody](api_verve/errors/maze_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MazeResponse](api_verve/models/v1_maze_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MazeErrorBody](api_verve/errors/maze_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rockpaperscissors(*, choice: str | None = None, rounds: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RockpaperscissorsResponse, RockpaperscissorsErrorBody]</code></summary>

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
result = client.games.with_raw_response.rockpaperscissors(choice="rock", rounds=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RockpaperscissorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RockpaperscissorsErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.rockpaperscissors(choice="rock", rounds=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RockpaperscissorsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RockpaperscissorsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RockpaperscissorsResponse](api_verve/models/v1_rockpaperscissors_response.py), [RockpaperscissorsErrorBody](api_verve/errors/rockpaperscissors_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RockpaperscissorsResponse](api_verve/models/v1_rockpaperscissors_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RockpaperscissorsErrorBody](api_verve/errors/rockpaperscissors_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def slotmachine(*, spins: int | None = None, reels: int | None = None, bet: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SlotmachineResponse, SlotmachineErrorBody]</code></summary>

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
result = client.games.with_raw_response.slotmachine(spins=5, reels=3, bet=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SlotmachineResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SlotmachineErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.slotmachine(spins=5, reels=3, bet=1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SlotmachineResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SlotmachineErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SlotmachineResponse](api_verve/models/v1_slotmachine_response.py), [SlotmachineErrorBody](api_verve/errors/slotmachine_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SlotmachineResponse](api_verve/models/v1_slotmachine_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SlotmachineErrorBody](api_verve/errors/slotmachine_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def spellingbee(*, difficulty: str | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SpellingbeeResponse, SpellingbeeErrorBody]</code></summary>

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
result = client.games.with_raw_response.spellingbee(difficulty="medium", image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SpellingbeeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpellingbeeErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.spellingbee(difficulty="medium", image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SpellingbeeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpellingbeeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SpellingbeeResponse](api_verve/models/v1_spellingbee_response.py), [SpellingbeeErrorBody](api_verve/errors/spellingbee_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SpellingbeeResponse](api_verve/models/v1_spellingbee_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SpellingbeeErrorBody](api_verve/errors/spellingbee_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def superheroname(*, style: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SuperheronameResponse, SuperheronameErrorBody]</code></summary>

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
result = client.games.with_raw_response.superheroname(style="dark")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SuperheronameResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SuperheronameErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.superheroname(style="dark")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SuperheronameResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SuperheronameErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SuperheronameResponse](api_verve/models/v1_superheroname_response.py), [SuperheronameErrorBody](api_verve/errors/superheroname_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SuperheronameResponse](api_verve/models/v1_superheroname_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SuperheronameErrorBody](api_verve/errors/superheroname_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordladder(*, start: str | None = None, end: str | None = None, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WordladderResponse, WordladderErrorBody]</code></summary>

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
result = client.games.with_raw_response.wordladder(start="cold", end="warm", difficulty="medium", count=1, image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordladderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordladderErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.wordladder(
    start="cold", end="warm", difficulty="medium", count=1, image=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordladderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordladderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WordladderResponse](api_verve/models/v1_wordladder_response.py), [WordladderErrorBody](api_verve/errors/wordladder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WordladderResponse](api_verve/models/v1_wordladder_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WordladderErrorBody](api_verve/errors/wordladder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordscramble(*, difficulty: str | None = None, count: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WordscrambleResponse, WordscrambleErrorBody]</code></summary>

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
result = client.games.with_raw_response.wordscramble(difficulty="medium", count=5, image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordscrambleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordscrambleErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.wordscramble(difficulty="medium", count=5, image=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordscrambleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordscrambleErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WordscrambleResponse](api_verve/models/v1_wordscramble_response.py), [WordscrambleErrorBody](api_verve/errors/wordscramble_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WordscrambleResponse](api_verve/models/v1_wordscramble_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WordscrambleErrorBody](api_verve/errors/wordscramble_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordsearch(body: V1WordsearchRequest | V1WordsearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WordsearchResponse, WordsearchErrorBody]</code></summary>

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
result = client.games.with_raw_response.wordsearch(V1WordsearchRequest(words="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordsearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordsearchErrorBody
```

**Async**

```python
result = await async_client.games.with_raw_response.wordsearch(V1WordsearchRequest(words="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordsearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordsearchErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WordsearchResponse](api_verve/models/v1_wordsearch_response.py), [WordsearchErrorBody](api_verve/errors/wordsearch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WordsearchResponse](api_verve/models/v1_wordsearch_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WordsearchErrorBody](api_verve/errors/wordsearch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def citieslookup(city: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CitieslookupResponse, CitieslookupErrorBody]</code></summary>

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
result = client.geography.with_raw_response.citieslookup("San Francisco", limit=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CitieslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CitieslookupErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.citieslookup("San Francisco", limit=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CitieslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CitieslookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CitieslookupResponse](api_verve/models/v1_citieslookup_response.py), [CitieslookupErrorBody](api_verve/errors/citieslookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CitieslookupResponse](api_verve/models/v1_citieslookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CitieslookupErrorBody](api_verve/errors/citieslookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def coordinatesaresea(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CoordinatesareseaResponse, CoordinatesareseaErrorBody]</code></summary>

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
result = client.geography.with_raw_response.coordinatesaresea(37.7749, -122.4194)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CoordinatesareseaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CoordinatesareseaErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.coordinatesaresea(37.7749, -122.4194)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CoordinatesareseaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CoordinatesareseaErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CoordinatesareseaResponse](api_verve/models/v1_coordinatesaresea_response.py), [CoordinatesareseaErrorBody](api_verve/errors/coordinatesaresea_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CoordinatesareseaResponse](api_verve/models/v1_coordinatesaresea_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CoordinatesareseaErrorBody](api_verve/errors/coordinatesaresea_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countryborders(country: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CountrybordersResponse, CountrybordersErrorBody]</code></summary>

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
result = client.geography.with_raw_response.countryborders("CA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountrybordersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountrybordersErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.countryborders("CA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountrybordersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountrybordersErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CountrybordersResponse](api_verve/models/v1_countryborders_response.py), [CountrybordersErrorBody](api_verve/errors/countryborders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CountrybordersResponse](api_verve/models/v1_countryborders_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CountrybordersErrorBody](api_verve/errors/countryborders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countryboundaries(country: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CountryboundariesResponse, CountryboundariesErrorBody]</code></summary>

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
result = client.geography.with_raw_response.countryboundaries("CA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountryboundariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountryboundariesErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.countryboundaries("CA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountryboundariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountryboundariesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CountryboundariesResponse](api_verve/models/v1_countryboundaries_response.py), [CountryboundariesErrorBody](api_verve/errors/countryboundaries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CountryboundariesResponse](api_verve/models/v1_countryboundaries_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CountryboundariesErrorBody](api_verve/errors/countryboundaries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countryflags(country: str, format_: str, shape: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CountryflagsResponse, CountryflagsErrorBody]</code></summary>

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
result = client.geography.with_raw_response.countryflags("ZW", "png", "circle")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountryflagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountryflagsErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.countryflags("ZW", "png", "circle")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountryflagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountryflagsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CountryflagsResponse](api_verve/models/v1_countryflags_response.py), [CountryflagsErrorBody](api_verve/errors/countryflags_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CountryflagsResponse](api_verve/models/v1_countryflags_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CountryflagsErrorBody](api_verve/errors/countryflags_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countrylanguages(country: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CountrylanguagesResponse, CountrylanguagesErrorBody]</code></summary>

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
result = client.geography.with_raw_response.countrylanguages("ZW")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountrylanguagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountrylanguagesErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.countrylanguages("ZW")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountrylanguagesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountrylanguagesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CountrylanguagesResponse](api_verve/models/v1_countrylanguages_response.py), [CountrylanguagesErrorBody](api_verve/errors/countrylanguages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CountrylanguagesResponse](api_verve/models/v1_countrylanguages_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CountrylanguagesErrorBody](api_verve/errors/countrylanguages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countrylookup(country: str, *, majorcities: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CountrylookupResponse, CountrylookupErrorBody]</code></summary>

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
result = client.geography.with_raw_response.countrylookup("USA", majorcities=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountrylookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountrylookupErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.countrylookup("USA", majorcities=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountrylookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountrylookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CountrylookupResponse](api_verve/models/v1_countrylookup_response.py), [CountrylookupErrorBody](api_verve/errors/countrylookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CountrylookupResponse](api_verve/models/v1_countrylookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CountrylookupErrorBody](api_verve/errors/countrylookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def countydata(state: str, county: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CountydataResponse, CountydataErrorBody]</code></summary>

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
result = client.geography.with_raw_response.countydata("MO", "Jackson")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountydataResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountydataErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.countydata("MO", "Jackson")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CountydataResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CountydataErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CountydataResponse](api_verve/models/v1_countydata_response.py), [CountydataErrorBody](api_verve/errors/countydata_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CountydataResponse](api_verve/models/v1_countydata_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CountydataErrorBody](api_verve/errors/countydata_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def distancecalculator(lat1: float, lon1: float, lat2: float, lon2: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DistancecalculatorResponse, DistancecalculatorErrorBody]</code></summary>

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
result = client.geography.with_raw_response.distancecalculator(36.7783, -119.4179, 34.0522, -118.2437)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DistancecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DistancecalculatorErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.distancecalculator(36.7783, -119.4179, 34.0522, -118.2437)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DistancecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DistancecalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DistancecalculatorResponse](api_verve/models/v1_distancecalculator_response.py), [DistancecalculatorErrorBody](api_verve/errors/distancecalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DistancecalculatorResponse](api_verve/models/v1_distancecalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DistancecalculatorErrorBody](api_verve/errors/distancecalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hardinesszone(zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HardinesszoneResponse, HardinesszoneErrorBody]</code></summary>

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
result = client.geography.with_raw_response.hardinesszone("97201")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HardinesszoneResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HardinesszoneErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.hardinesszone("97201")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HardinesszoneResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HardinesszoneErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HardinesszoneResponse](api_verve/models/v1_hardinesszone_response.py), [HardinesszoneErrorBody](api_verve/errors/hardinesszone_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HardinesszoneResponse](api_verve/models/v1_hardinesszone_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HardinesszoneErrorBody](api_verve/errors/hardinesszone_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reversegeocode(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ReversegeocodeResponse, ReversegeocodeErrorBody]</code></summary>

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
result = client.geography.with_raw_response.reversegeocode(40.714224, -73.961452)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReversegeocodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReversegeocodeErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.reversegeocode(40.714224, -73.961452)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReversegeocodeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReversegeocodeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ReversegeocodeResponse](api_verve/models/v1_reversegeocode_response.py), [ReversegeocodeErrorBody](api_verve/errors/reversegeocode_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ReversegeocodeResponse](api_verve/models/v1_reversegeocode_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ReversegeocodeErrorBody](api_verve/errors/reversegeocode_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stateboundaries(state: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1StateboundariesResponse, StateboundariesErrorBody]</code></summary>

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
result = client.geography.with_raw_response.stateboundaries("CA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StateboundariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StateboundariesErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.stateboundaries("CA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StateboundariesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StateboundariesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1StateboundariesResponse](api_verve/models/v1_stateboundaries_response.py), [StateboundariesErrorBody](api_verve/errors/stateboundaries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1StateboundariesResponse](api_verve/models/v1_stateboundaries_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[StateboundariesErrorBody](api_verve/errors/stateboundaries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def zipcodes(zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ZipcodesResponse, ZipcodesErrorBody]</code></summary>

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
result = client.geography.with_raw_response.zipcodes("64082")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ZipcodesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ZipcodesErrorBody
```

**Async**

```python
result = await async_client.geography.with_raw_response.zipcodes("64082")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ZipcodesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ZipcodesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ZipcodesResponse](api_verve/models/v1_zipcodes_response.py), [ZipcodesErrorBody](api_verve/errors/zipcodes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ZipcodesResponse](api_verve/models/v1_zipcodes_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ZipcodesErrorBody](api_verve/errors/zipcodes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def bmicalculator(weight: float, height: float, unit: str, *, age: float | None = None, gender: str | None = None, activity_level: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BmicalculatorResponse, BmicalculatorErrorBody]</code></summary>

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
result = client.health_wellness.with_raw_response.bmicalculator(
    180, 70, "imperial", age=30, gender="male", activity_level="moderate"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BmicalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BmicalculatorErrorBody
```

**Async**

```python
result = await async_client.health_wellness.with_raw_response.bmicalculator(
    180, 70, "imperial", age=30, gender="male", activity_level="moderate"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BmicalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BmicalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BmicalculatorResponse](api_verve/models/v1_bmicalculator_response.py), [BmicalculatorErrorBody](api_verve/errors/bmicalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BmicalculatorResponse](api_verve/models/v1_bmicalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BmicalculatorErrorBody](api_verve/errors/bmicalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def exercises(muscle: str, *, name: str | None = None, equipment: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ExercisesResponse, ExercisesErrorBody]</code></summary>

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
result = client.health_wellness.with_raw_response.exercises("chest", name="barbell", equipment="barbell")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ExercisesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExercisesErrorBody
```

**Async**

```python
result = await async_client.health_wellness.with_raw_response.exercises("chest", name="barbell", equipment="barbell")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ExercisesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExercisesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ExercisesResponse](api_verve/models/v1_exercises_response.py), [ExercisesErrorBody](api_verve/errors/exercises_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ExercisesResponse](api_verve/models/v1_exercises_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ExercisesErrorBody](api_verve/errors/exercises_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def facedetect(*, confidence: float | None = None, image: FileInput | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FacedetectResponse, FacedetectErrorBody]</code></summary>

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
result = client.images.with_raw_response.facedetect()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FacedetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FacedetectErrorBody
```

**Async**

```python
result = await async_client.images.with_raw_response.facedetect()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FacedetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FacedetectErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1FacedetectResponse](api_verve/models/v1_facedetect_response.py), [FacedetectErrorBody](api_verve/errors/facedetect_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FacedetectResponse](api_verve/models/v1_facedetect_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FacedetectErrorBody](api_verve/errors/facedetect_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def heicconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HeicconverterResponse, HeicconverterErrorBody]</code></summary>

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
result = client.images.with_raw_response.heicconverter(
    "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HeicconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HeicconverterErrorBody
```

**Async**

```python
result = await async_client.images.with_raw_response.heicconverter(
    "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HeicconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HeicconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HeicconverterResponse](api_verve/models/v1_heicconverter_response.py), [HeicconverterErrorBody](api_verve/errors/heicconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HeicconverterResponse](api_verve/models/v1_heicconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HeicconverterErrorBody](api_verve/errors/heicconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def imageconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ImageconverterResponse, ImageconverterErrorBody]</code></summary>

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
result = client.images.with_raw_response.imageconverter(
    "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ImageconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImageconverterErrorBody
```

**Async**

```python
result = await async_client.images.with_raw_response.imageconverter(
    "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ImageconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImageconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ImageconverterResponse](api_verve/models/v1_imageconverter_response.py), [ImageconverterErrorBody](api_verve/errors/imageconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ImageconverterResponse](api_verve/models/v1_imageconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ImageconverterErrorBody](api_verve/errors/imageconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nsfwimagedetector(image: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NsfwimagedetectorResponse, NsfwimagedetectorErrorBody]</code></summary>

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
result = client.images.with_raw_response.nsfwimagedetector(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NsfwimagedetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NsfwimagedetectorErrorBody
```

**Async**

```python
result = await async_client.images.with_raw_response.nsfwimagedetector(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NsfwimagedetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NsfwimagedetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NsfwimagedetectorResponse](api_verve/models/v1_nsfwimagedetector_response.py), [NsfwimagedetectorErrorBody](api_verve/errors/nsfwimagedetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NsfwimagedetectorResponse](api_verve/models/v1_nsfwimagedetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NsfwimagedetectorErrorBody](api_verve/errors/nsfwimagedetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def qrcodereader(image: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1QrcodereaderResponse, QrcodereaderErrorBody]</code></summary>

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
result = client.images.with_raw_response.qrcodereader(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1QrcodereaderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QrcodereaderErrorBody
```

**Async**

```python
result = await async_client.images.with_raw_response.qrcodereader(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1QrcodereaderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QrcodereaderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1QrcodereaderResponse](api_verve/models/v1_qrcodereader_response.py), [QrcodereaderErrorBody](api_verve/errors/qrcodereader_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1QrcodereaderResponse](api_verve/models/v1_qrcodereader_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[QrcodereaderErrorBody](api_verve/errors/qrcodereader_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def svgconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SvgconverterResponse, SvgconverterErrorBody]</code></summary>

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
result = client.images.with_raw_response.svgconverter(
    "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SvgconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SvgconverterErrorBody
```

**Async**

```python
result = await async_client.images.with_raw_response.svgconverter(
    "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SvgconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SvgconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SvgconverterResponse](api_verve/models/v1_svgconverter_response.py), [SvgconverterErrorBody](api_verve/errors/svgconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SvgconverterResponse](api_verve/models/v1_svgconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SvgconverterErrorBody](api_verve/errors/svgconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webpconverter(output_format: str, image: FileInput, *, quality: int | None = None, max_width: int | None = None, max_height: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebpconverterResponse, WebpconverterErrorBody]</code></summary>

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
result = client.images.with_raw_response.webpconverter(
    "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebpconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebpconverterErrorBody
```

**Async**

```python
result = await async_client.images.with_raw_response.webpconverter(
    "png", Path("path/to/file.bin"), quality=90, max_width=1920, max_height=1080
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebpconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebpconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WebpconverterResponse](api_verve/models/v1_webpconverter_response.py), [WebpconverterErrorBody](api_verve/errors/webpconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebpconverterResponse](api_verve/models/v1_webpconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WebpconverterErrorBody](api_verve/errors/webpconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def duedatecalculator(last_period: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DuedatecalculatorResponse, DuedatecalculatorErrorBody]</code></summary>

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
result = client.lifestyle.with_raw_response.duedatecalculator("2025-06-01")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DuedatecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DuedatecalculatorErrorBody
```

**Async**

```python
result = await async_client.lifestyle.with_raw_response.duedatecalculator("2025-06-01")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DuedatecalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DuedatecalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DuedatecalculatorResponse](api_verve/models/v1_duedatecalculator_response.py), [DuedatecalculatorErrorBody](api_verve/errors/duedatecalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DuedatecalculatorResponse](api_verve/models/v1_duedatecalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DuedatecalculatorErrorBody](api_verve/errors/duedatecalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def menstrualcycle(last_period: str, *, cycle_length: int | None = None, period_length: int | None = None, cycles: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MenstrualcycleResponse, MenstrualcycleErrorBody]</code></summary>

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
result = client.lifestyle.with_raw_response.menstrualcycle("2024-01-01", cycle_length=28, period_length=5, cycles=3)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MenstrualcycleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MenstrualcycleErrorBody
```

**Async**

```python
result = await async_client.lifestyle.with_raw_response.menstrualcycle(
    "2024-01-01", cycle_length=28, period_length=5, cycles=3
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MenstrualcycleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MenstrualcycleErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MenstrualcycleResponse](api_verve/models/v1_menstrualcycle_response.py), [MenstrualcycleErrorBody](api_verve/errors/menstrualcycle_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MenstrualcycleResponse](api_verve/models/v1_menstrualcycle_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MenstrualcycleErrorBody](api_verve/errors/menstrualcycle_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ovulationcalculator(last_period: str, *, cycle_length: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1OvulationcalculatorResponse, OvulationcalculatorErrorBody]</code></summary>

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
result = client.lifestyle.with_raw_response.ovulationcalculator("2024-01-01", cycle_length=28)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1OvulationcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OvulationcalculatorErrorBody
```

**Async**

```python
result = await async_client.lifestyle.with_raw_response.ovulationcalculator("2024-01-01", cycle_length=28)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1OvulationcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type OvulationcalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1OvulationcalculatorResponse](api_verve/models/v1_ovulationcalculator_response.py), [OvulationcalculatorErrorBody](api_verve/errors/ovulationcalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1OvulationcalculatorResponse](api_verve/models/v1_ovulationcalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[OvulationcalculatorErrorBody](api_verve/errors/ovulationcalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def colorsimilarity(color1: str, color2: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ColorsimilarityResponse, ColorsimilarityErrorBody]</code></summary>

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
result = client.math_calculations.with_raw_response.colorsimilarity("FF5733", "FF6B47")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColorsimilarityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColorsimilarityErrorBody
```

**Async**

```python
result = await async_client.math_calculations.with_raw_response.colorsimilarity("FF5733", "FF6B47")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColorsimilarityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColorsimilarityErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ColorsimilarityResponse](api_verve/models/v1_colorsimilarity_response.py), [ColorsimilarityErrorBody](api_verve/errors/colorsimilarity_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ColorsimilarityResponse](api_verve/models/v1_colorsimilarity_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ColorsimilarityErrorBody](api_verve/errors/colorsimilarity_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def daylightduration(latitude: float, longitude: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DaylightdurationResponse, DaylightdurationErrorBody]</code></summary>

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
result = client.math_calculations.with_raw_response.daylightduration(40.7128, -74.006, date="2024-06-21")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DaylightdurationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DaylightdurationErrorBody
```

**Async**

```python
result = await async_client.math_calculations.with_raw_response.daylightduration(40.7128, -74.006, date="2024-06-21")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DaylightdurationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DaylightdurationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DaylightdurationResponse](api_verve/models/v1_daylightduration_response.py), [DaylightdurationErrorBody](api_verve/errors/daylightduration_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DaylightdurationResponse](api_verve/models/v1_daylightduration_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DaylightdurationErrorBody](api_verve/errors/daylightduration_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def fibonaccigenerator(count: int, *, startfrom: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1FibonaccigeneratorResponse, FibonaccigeneratorErrorBody]</code></summary>

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
result = client.math_calculations.with_raw_response.fibonaccigenerator(10, startfrom=0)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FibonaccigeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FibonaccigeneratorErrorBody
```

**Async**

```python
result = await async_client.math_calculations.with_raw_response.fibonaccigenerator(10, startfrom=0)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1FibonaccigeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FibonaccigeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1FibonaccigeneratorResponse](api_verve/models/v1_fibonaccigenerator_response.py), [FibonaccigeneratorErrorBody](api_verve/errors/fibonaccigenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1FibonaccigeneratorResponse](api_verve/models/v1_fibonaccigenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FibonaccigeneratorErrorBody](api_verve/errors/fibonaccigenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def permutationcombination(n: int, r: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PermutationcombinationResponse, PermutationcombinationErrorBody]</code></summary>

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
result = client.math_calculations.with_raw_response.permutationcombination(10, 3)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PermutationcombinationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PermutationcombinationErrorBody
```

**Async**

```python
result = await async_client.math_calculations.with_raw_response.permutationcombination(10, 3)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PermutationcombinationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PermutationcombinationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PermutationcombinationResponse](api_verve/models/v1_permutationcombination_response.py), [PermutationcombinationErrorBody](api_verve/errors/permutationcombination_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PermutationcombinationResponse](api_verve/models/v1_permutationcombination_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PermutationcombinationErrorBody](api_verve/errors/permutationcombination_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def romannumeralmath(roman1: str, roman2: str, *, operation: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RomannumeralmathResponse, RomannumeralmathErrorBody]</code></summary>

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
result = client.math_calculations.with_raw_response.romannumeralmath("XIV", "VI", operation="add")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RomannumeralmathResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RomannumeralmathErrorBody
```

**Async**

```python
result = await async_client.math_calculations.with_raw_response.romannumeralmath("XIV", "VI", operation="add")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RomannumeralmathResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RomannumeralmathErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RomannumeralmathResponse](api_verve/models/v1_romannumeralmath_response.py), [RomannumeralmathErrorBody](api_verve/errors/romannumeralmath_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RomannumeralmathResponse](api_verve/models/v1_romannumeralmath_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RomannumeralmathErrorBody](api_verve/errors/romannumeralmath_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tipcalculator(amount: float, *, percentage: float | None = None, people: int | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TipcalculatorResponse, TipcalculatorErrorBody]</code></summary>

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
result = client.math_calculations.with_raw_response.tipcalculator(100, percentage=18, people=4, currency="USD")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TipcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TipcalculatorErrorBody
```

**Async**

```python
result = await async_client.math_calculations.with_raw_response.tipcalculator(
    100, percentage=18, people=4, currency="USD"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TipcalculatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TipcalculatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TipcalculatorResponse](api_verve/models/v1_tipcalculator_response.py), [TipcalculatorErrorBody](api_verve/errors/tipcalculator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TipcalculatorResponse](api_verve/models/v1_tipcalculator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TipcalculatorErrorBody](api_verve/errors/tipcalculator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def truthtable(expression: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TruthtableResponse, TruthtableErrorBody]</code></summary>

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
result = client.math_calculations.with_raw_response.truthtable("A AND B OR C")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TruthtableResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TruthtableErrorBody
```

**Async**

```python
result = await async_client.math_calculations.with_raw_response.truthtable("A AND B OR C")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TruthtableResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TruthtableErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TruthtableResponse](api_verve/models/v1_truthtable_response.py), [TruthtableErrorBody](api_verve/errors/truthtable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TruthtableResponse](api_verve/models/v1_truthtable_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TruthtableErrorBody](api_verve/errors/truthtable_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def utmconverter(latitude: float, longitude: float, *, direction: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UtmconverterResponse, UtmconverterErrorBody]</code></summary>

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
result = client.math_calculations.with_raw_response.utmconverter(40.7128, -74.006, direction="to_utm")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UtmconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UtmconverterErrorBody
```

**Async**

```python
result = await async_client.math_calculations.with_raw_response.utmconverter(40.7128, -74.006, direction="to_utm")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UtmconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UtmconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UtmconverterResponse](api_verve/models/v1_utmconverter_response.py), [UtmconverterErrorBody](api_verve/errors/utmconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UtmconverterResponse](api_verve/models/v1_utmconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UtmconverterErrorBody](api_verve/errors/utmconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def bluetoothlookup(companyid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BluetoothlookupResponse, BluetoothlookupErrorBody]</code></summary>

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
result = client.networking.with_raw_response.bluetoothlookup("76")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BluetoothlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BluetoothlookupErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.bluetoothlookup("76")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BluetoothlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BluetoothlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BluetoothlookupResponse](api_verve/models/v1_bluetoothlookup_response.py), [BluetoothlookupErrorBody](api_verve/errors/bluetoothlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BluetoothlookupResponse](api_verve/models/v1_bluetoothlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BluetoothlookupErrorBody](api_verve/errors/bluetoothlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def botdetector(ua: str, *, ip: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BotdetectorResponse, BotdetectorErrorBody]</code></summary>

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
result = client.networking.with_raw_response.botdetector(
    "Googlebot/2.1 (+http://www.google.com/bot.html)", ip="66.249.66.1"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BotdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BotdetectorErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.botdetector(
    "Googlebot/2.1 (+http://www.google.com/bot.html)", ip="66.249.66.1"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BotdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BotdetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BotdetectorResponse](api_verve/models/v1_botdetector_response.py), [BotdetectorErrorBody](api_verve/errors/botdetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BotdetectorResponse](api_verve/models/v1_botdetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BotdetectorErrorBody](api_verve/errors/botdetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contentfilter(body: V1ContentfilterRequest | V1ContentfilterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ContentfilterResponse, ContentfilterErrorBody]</code></summary>

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
result = client.networking.with_raw_response.contentfilter(V1ContentfilterRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ContentfilterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContentfilterErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.contentfilter(
    V1ContentfilterRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ContentfilterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContentfilterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ContentfilterResponse](api_verve/models/v1_contentfilter_response.py), [ContentfilterErrorBody](api_verve/errors/contentfilter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ContentfilterResponse](api_verve/models/v1_contentfilter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ContentfilterErrorBody](api_verve/errors/contentfilter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ipblacklistlookup(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1IpblacklistlookupResponse, IpblacklistlookupErrorBody]</code></summary>

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
result = client.networking.with_raw_response.ipblacklistlookup("185.220.101.1")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IpblacklistlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IpblacklistlookupErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.ipblacklistlookup("185.220.101.1")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IpblacklistlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IpblacklistlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1IpblacklistlookupResponse](api_verve/models/v1_ipblacklistlookup_response.py), [IpblacklistlookupErrorBody](api_verve/errors/ipblacklistlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1IpblacklistlookupResponse](api_verve/models/v1_ipblacklistlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IpblacklistlookupErrorBody](api_verve/errors/ipblacklistlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def iplookup(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1IplookupResponse, IplookupErrorBody]</code></summary>

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
result = client.networking.with_raw_response.iplookup("173.172.81.20")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IplookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IplookupErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.iplookup("173.172.81.20")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IplookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IplookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1IplookupResponse](api_verve/models/v1_iplookup_response.py), [IplookupErrorBody](api_verve/errors/iplookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1IplookupResponse](api_verve/models/v1_iplookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IplookupErrorBody](api_verve/errors/iplookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def macaddresslookup(mac: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MacaddresslookupResponse, MacaddresslookupErrorBody]</code></summary>

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
result = client.networking.with_raw_response.macaddresslookup("00-B0-D0-63-C2-26")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MacaddresslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MacaddresslookupErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.macaddresslookup("00-B0-D0-63-C2-26")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MacaddresslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MacaddresslookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MacaddresslookupResponse](api_verve/models/v1_macaddresslookup_response.py), [MacaddresslookupErrorBody](api_verve/errors/macaddresslookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MacaddresslookupResponse](api_verve/models/v1_macaddresslookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MacaddresslookupErrorBody](api_verve/errors/macaddresslookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nameservers(domain: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NameserversResponse, NameserversErrorBody]</code></summary>

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
result = client.networking.with_raw_response.nameservers("google.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NameserversResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NameserversErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.nameservers("google.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NameserversResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NameserversErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NameserversResponse](api_verve/models/v1_nameservers_response.py), [NameserversErrorBody](api_verve/errors/nameservers_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NameserversResponse](api_verve/models/v1_nameservers_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NameserversErrorBody](api_verve/errors/nameservers_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def phishingcheck(body: V1PhishingcheckRequest | V1PhishingcheckRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PhishingcheckResponse, PhishingcheckErrorBody]</code></summary>

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
result = client.networking.with_raw_response.phishingcheck(V1PhishingcheckRequest(domain="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PhishingcheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PhishingcheckErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.phishingcheck(
    V1PhishingcheckRequest(domain="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PhishingcheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PhishingcheckErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PhishingcheckResponse](api_verve/models/v1_phishingcheck_response.py), [PhishingcheckErrorBody](api_verve/errors/phishingcheck_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PhishingcheckResponse](api_verve/models/v1_phishingcheck_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PhishingcheckErrorBody](api_verve/errors/phishingcheck_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def pinger(body: V1PingerRequest | V1PingerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PingerResponse, PingerErrorBody]</code></summary>

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
result = client.networking.with_raw_response.pinger(V1PingerRequest(host="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PingerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PingerErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.pinger(V1PingerRequest(host="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PingerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PingerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PingerResponse](api_verve/models/v1_pinger_response.py), [PingerErrorBody](api_verve/errors/pinger_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PingerResponse](api_verve/models/v1_pinger_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PingerErrorBody](api_verve/errors/pinger_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tldlookup(tld: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TldlookupResponse, TldlookupErrorBody]</code></summary>

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
result = client.networking.with_raw_response.tldlookup("com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TldlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TldlookupErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.tldlookup("com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TldlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TldlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TldlookupResponse](api_verve/models/v1_tldlookup_response.py), [TldlookupErrorBody](api_verve/errors/tldlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TldlookupResponse](api_verve/models/v1_tldlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TldlookupErrorBody](api_verve/errors/tldlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tlscheck(domain: str, *, port: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TlscheckResponse, TlscheckErrorBody]</code></summary>

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
result = client.networking.with_raw_response.tlscheck("amazon.com", port=443)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TlscheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TlscheckErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.tlscheck("amazon.com", port=443)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TlscheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TlscheckErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TlscheckResponse](api_verve/models/v1_tlscheck_response.py), [TlscheckErrorBody](api_verve/errors/tlscheck_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TlscheckResponse](api_verve/models/v1_tlscheck_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TlscheckErrorBody](api_verve/errors/tlscheck_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tordetect(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TordetectResponse, TordetectErrorBody]</code></summary>

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
result = client.networking.with_raw_response.tordetect("185.189.183.143")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TordetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TordetectErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.tordetect("185.189.183.143")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TordetectResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TordetectErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TordetectResponse](api_verve/models/v1_tordetect_response.py), [TordetectErrorBody](api_verve/errors/tordetect_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TordetectResponse](api_verve/models/v1_tordetect_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TordetectErrorBody](api_verve/errors/tordetect_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def usbvendorlookup(vendorid: str, *, productid: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UsbvendorlookupResponse, UsbvendorlookupErrorBody]</code></summary>

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
result = client.networking.with_raw_response.usbvendorlookup("05AC", productid="8290")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UsbvendorlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsbvendorlookupErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.usbvendorlookup("05AC", productid="8290")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UsbvendorlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsbvendorlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UsbvendorlookupResponse](api_verve/models/v1_usbvendorlookup_response.py), [UsbvendorlookupErrorBody](api_verve/errors/usbvendorlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UsbvendorlookupResponse](api_verve/models/v1_usbvendorlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UsbvendorlookupErrorBody](api_verve/errors/usbvendorlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vpndetector(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1VpndetectorResponse, VpndetectorErrorBody]</code></summary>

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
result = client.networking.with_raw_response.vpndetector("103.62.49.210")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VpndetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VpndetectorErrorBody
```

**Async**

```python
result = await async_client.networking.with_raw_response.vpndetector("103.62.49.210")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VpndetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VpndetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1VpndetectorResponse](api_verve/models/v1_vpndetector_response.py), [VpndetectorErrorBody](api_verve/errors/vpndetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1VpndetectorResponse](api_verve/models/v1_vpndetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[VpndetectorErrorBody](api_verve/errors/vpndetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def news(category: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1NewsResponse, NewsErrorBody]</code></summary>

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
result = client.news.with_raw_response.news("technology", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NewsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NewsErrorBody
```

**Async**

```python
result = await async_client.news.with_raw_response.news("technology", limit=10)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1NewsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NewsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1NewsResponse](api_verve/models/v1_news_response.py), [NewsErrorBody](api_verve/errors/news_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1NewsResponse](api_verve/models/v1_news_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[NewsErrorBody](api_verve/errors/news_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def humannameparser(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HumannameparserResponse, HumannameparserErrorBody]</code></summary>

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
result = client.parsers.with_raw_response.humannameparser("MR. MARTINO PETROS DE FLORENCE (TINO) Jr.")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HumannameparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HumannameparserErrorBody
```

**Async**

```python
result = await async_client.parsers.with_raw_response.humannameparser("MR. MARTINO PETROS DE FLORENCE (TINO) Jr.")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HumannameparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HumannameparserErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HumannameparserResponse](api_verve/models/v1_humannameparser_response.py), [HumannameparserErrorBody](api_verve/errors/humannameparser_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HumannameparserResponse](api_verve/models/v1_humannameparser_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HumannameparserErrorBody](api_verve/errors/humannameparser_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rsstojson(body: V1RsstojsonRequest | V1RsstojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RsstojsonResponse, RsstojsonErrorBody]</code></summary>

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
result = client.parsers.with_raw_response.rsstojson(V1RsstojsonRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RsstojsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RsstojsonErrorBody
```

**Async**

```python
result = await async_client.parsers.with_raw_response.rsstojson(V1RsstojsonRequest(url="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RsstojsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RsstojsonErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RsstojsonResponse](api_verve/models/v1_rsstojson_response.py), [RsstojsonErrorBody](api_verve/errors/rsstojson_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RsstojsonResponse](api_verve/models/v1_rsstojson_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RsstojsonErrorBody](api_verve/errors/rsstojson_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def streetaddressparser(address: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1StreetaddressparserResponse, StreetaddressparserErrorBody]</code></summary>

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
result = client.parsers.with_raw_response.streetaddressparser("1600 Amphitheatre Parkway, Mountain View, CA 90210")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StreetaddressparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StreetaddressparserErrorBody
```

**Async**

```python
result = await async_client.parsers.with_raw_response.streetaddressparser(
    "1600 Amphitheatre Parkway, Mountain View, CA 90210"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StreetaddressparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StreetaddressparserErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1StreetaddressparserResponse](api_verve/models/v1_streetaddressparser_response.py), [StreetaddressparserErrorBody](api_verve/errors/streetaddressparser_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1StreetaddressparserResponse](api_verve/models/v1_streetaddressparser_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[StreetaddressparserErrorBody](api_verve/errors/streetaddressparser_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def useragentparser(body: V1UseragentparserRequest | V1UseragentparserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1UseragentparserResponse, UseragentparserErrorBody]</code></summary>

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
result = client.parsers.with_raw_response.useragentparser(V1UseragentparserRequest(ua="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UseragentparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UseragentparserErrorBody
```

**Async**

```python
result = await async_client.parsers.with_raw_response.useragentparser(
    V1UseragentparserRequest(ua="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1UseragentparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UseragentparserErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1UseragentparserResponse](api_verve/models/v1_useragentparser_response.py), [UseragentparserErrorBody](api_verve/errors/useragentparser_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1UseragentparserResponse](api_verve/models/v1_useragentparser_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UseragentparserErrorBody](api_verve/errors/useragentparser_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def birthstones(month: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1BirthstonesResponse, BirthstonesErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.birthstones("5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BirthstonesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BirthstonesErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.birthstones("5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1BirthstonesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BirthstonesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1BirthstonesResponse](api_verve/models/v1_birthstones_response.py), [BirthstonesErrorBody](api_verve/errors/birthstones_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1BirthstonesResponse](api_verve/models/v1_birthstones_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BirthstonesErrorBody](api_verve/errors/birthstones_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def caaparser(body: V1CaaparserRequest | V1CaaparserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CaaparserResponse, CaaparserErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.caaparser(V1CaaparserRequest(record="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CaaparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CaaparserErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.caaparser(V1CaaparserRequest(record="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CaaparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CaaparserErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CaaparserResponse](api_verve/models/v1_caaparser_response.py), [CaaparserErrorBody](api_verve/errors/caaparser_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CaaparserResponse](api_verve/models/v1_caaparser_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CaaparserErrorBody](api_verve/errors/caaparser_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def colorbrightness(hex_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ColorbrightnessResponse, ColorbrightnessErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.colorbrightness("FF5733")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColorbrightnessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColorbrightnessErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.colorbrightness("FF5733")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColorbrightnessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColorbrightnessErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ColorbrightnessResponse](api_verve/models/v1_colorbrightness_response.py), [ColorbrightnessErrorBody](api_verve/errors/colorbrightness_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ColorbrightnessResponse](api_verve/models/v1_colorbrightness_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ColorbrightnessErrorBody](api_verve/errors/colorbrightness_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def colornamefinder(hex_: str, *, closest: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ColornamefinderResponse, ColornamefinderErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.colornamefinder("FF5733", closest=3)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColornamefinderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColornamefinderErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.colornamefinder("FF5733", closest=3)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ColornamefinderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ColornamefinderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ColornamefinderResponse](api_verve/models/v1_colornamefinder_response.py), [ColornamefinderErrorBody](api_verve/errors/colornamefinder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ColornamefinderResponse](api_verve/models/v1_colornamefinder_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ColornamefinderErrorBody](api_verve/errors/colornamefinder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def httpstatuslookup(code: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HttpstatuslookupResponse, HttpstatuslookupErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.httpstatuslookup(404)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HttpstatuslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HttpstatuslookupErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.httpstatuslookup(404)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HttpstatuslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HttpstatuslookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HttpstatuslookupResponse](api_verve/models/v1_httpstatuslookup_response.py), [HttpstatuslookupErrorBody](api_verve/errors/httpstatuslookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HttpstatuslookupResponse](api_verve/models/v1_httpstatuslookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HttpstatuslookupErrorBody](api_verve/errors/httpstatuslookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mayancalendar(date: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MayancalendarResponse, MayancalendarErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.mayancalendar("2024-12-21")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MayancalendarResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MayancalendarErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.mayancalendar("2024-12-21")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MayancalendarResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MayancalendarErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MayancalendarResponse](api_verve/models/v1_mayancalendar_response.py), [MayancalendarErrorBody](api_verve/errors/mayancalendar_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MayancalendarResponse](api_verve/models/v1_mayancalendar_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MayancalendarErrorBody](api_verve/errors/mayancalendar_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def mimetypelookup(extension: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MimetypelookupResponse, MimetypelookupErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.mimetypelookup("pdf")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MimetypelookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MimetypelookupErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.mimetypelookup("pdf")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MimetypelookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MimetypelookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MimetypelookupResponse](api_verve/models/v1_mimetypelookup_response.py), [MimetypelookupErrorBody](api_verve/errors/mimetypelookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MimetypelookupResponse](api_verve/models/v1_mimetypelookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MimetypelookupErrorBody](api_verve/errors/mimetypelookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def portnumberlookup(port: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PortnumberlookupResponse, PortnumberlookupErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.portnumberlookup(443)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PortnumberlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PortnumberlookupErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.portnumberlookup(443)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PortnumberlookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PortnumberlookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PortnumberlookupResponse](api_verve/models/v1_portnumberlookup_response.py), [PortnumberlookupErrorBody](api_verve/errors/portnumberlookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PortnumberlookupResponse](api_verve/models/v1_portnumberlookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PortnumberlookupErrorBody](api_verve/errors/portnumberlookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ringsizeconverter(size: str, from_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RingsizeconverterResponse, RingsizeconverterErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.ringsizeconverter("7", "us")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RingsizeconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RingsizeconverterErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.ringsizeconverter("7", "us")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RingsizeconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RingsizeconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RingsizeconverterResponse](api_verve/models/v1_ringsizeconverter_response.py), [RingsizeconverterErrorBody](api_verve/errors/ringsizeconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RingsizeconverterResponse](api_verve/models/v1_ringsizeconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RingsizeconverterErrorBody](api_verve/errors/ringsizeconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def shoesizeconverter(size: str, from_: str, *, gender: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ShoesizeconverterResponse, ShoesizeconverterErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.shoesizeconverter("9", "us", gender="men")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ShoesizeconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ShoesizeconverterErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.shoesizeconverter("9", "us", gender="men")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ShoesizeconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ShoesizeconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ShoesizeconverterResponse](api_verve/models/v1_shoesizeconverter_response.py), [ShoesizeconverterErrorBody](api_verve/errors/shoesizeconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ShoesizeconverterResponse](api_verve/models/v1_shoesizeconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ShoesizeconverterErrorBody](api_verve/errors/shoesizeconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def srvparser(body: V1SrvparserRequest | V1SrvparserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SrvparserResponse, SrvparserErrorBody]</code></summary>

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
result = client.reference_data.with_raw_response.srvparser(V1SrvparserRequest(record="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SrvparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SrvparserErrorBody
```

**Async**

```python
result = await async_client.reference_data.with_raw_response.srvparser(V1SrvparserRequest(record="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SrvparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SrvparserErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SrvparserResponse](api_verve/models/v1_srvparser_response.py), [SrvparserErrorBody](api_verve/errors/srvparser_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SrvparserResponse](api_verve/models/v1_srvparser_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SrvparserErrorBody](api_verve/errors/srvparser_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def julianday(date: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JuliandayResponse, JuliandayErrorBody]</code></summary>

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
result = client.science.with_raw_response.julianday("2024-03-15")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JuliandayResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JuliandayErrorBody
```

**Async**

```python
result = await async_client.science.with_raw_response.julianday("2024-03-15")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JuliandayResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JuliandayErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1JuliandayResponse](api_verve/models/v1_julianday_response.py), [JuliandayErrorBody](api_verve/errors/julianday_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JuliandayResponse](api_verve/models/v1_julianday_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JuliandayErrorBody](api_verve/errors/julianday_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def meteorites(name: str, *, mass: float | None = None, year: float | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MeteoritesResponse, MeteoritesErrorBody]</code></summary>

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
result = client.science.with_raw_response.meteorites("Allende", mass=100, year=1969)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MeteoritesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MeteoritesErrorBody
```

**Async**

```python
result = await async_client.science.with_raw_response.meteorites("Allende", mass=100, year=1969)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MeteoritesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MeteoritesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MeteoritesResponse](api_verve/models/v1_meteorites_response.py), [MeteoritesErrorBody](api_verve/errors/meteorites_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MeteoritesResponse](api_verve/models/v1_meteorites_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MeteoritesErrorBody](api_verve/errors/meteorites_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def periodictable(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PeriodictableResponse, PeriodictableErrorBody]</code></summary>

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
result = client.science.with_raw_response.periodictable("hydrogen")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PeriodictableResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PeriodictableErrorBody
```

**Async**

```python
result = await async_client.science.with_raw_response.periodictable("hydrogen")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PeriodictableResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PeriodictableErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PeriodictableResponse](api_verve/models/v1_periodictable_response.py), [PeriodictableErrorBody](api_verve/errors/periodictable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PeriodictableResponse](api_verve/models/v1_periodictable_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PeriodictableErrorBody](api_verve/errors/periodictable_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def starslookup(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1StarslookupResponse, StarslookupErrorBody]</code></summary>

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
result = client.science.with_raw_response.starslookup("Sirius")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StarslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StarslookupErrorBody
```

**Async**

```python
result = await async_client.science.with_raw_response.starslookup("Sirius")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1StarslookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StarslookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1StarslookupResponse](api_verve/models/v1_starslookup_response.py), [StarslookupErrorBody](api_verve/errors/starslookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1StarslookupResponse](api_verve/models/v1_starslookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[StarslookupErrorBody](api_verve/errors/starslookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def csrparser(body: V1CsrparserRequest | V1CsrparserRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CsrparserResponse, CsrparserErrorBody]</code></summary>

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
result = client.security.with_raw_response.csrparser(V1CsrparserRequest(csr="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CsrparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CsrparserErrorBody
```

**Async**

```python
result = await async_client.security.with_raw_response.csrparser(V1CsrparserRequest(csr="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CsrparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CsrparserErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CsrparserResponse](api_verve/models/v1_csrparser_response.py), [CsrparserErrorBody](api_verve/errors/csrparser_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CsrparserResponse](api_verve/models/v1_csrparser_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CsrparserErrorBody](api_verve/errors/csrparser_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def danevalidator(body: V1DanevalidatorRequest | V1DanevalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DanevalidatorResponse, DanevalidatorErrorBody]</code></summary>

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
result = client.security.with_raw_response.danevalidator(V1DanevalidatorRequest(record="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DanevalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DanevalidatorErrorBody
```

**Async**

```python
result = await async_client.security.with_raw_response.danevalidator(
    V1DanevalidatorRequest(record="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DanevalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DanevalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DanevalidatorResponse](api_verve/models/v1_danevalidator_response.py), [DanevalidatorErrorBody](api_verve/errors/danevalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DanevalidatorResponse](api_verve/models/v1_danevalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DanevalidatorErrorBody](api_verve/errors/danevalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hashgenerator(text: str, *, algorithms: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HashgeneratorResponse, HashgeneratorErrorBody]</code></summary>

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
result = client.security.with_raw_response.hashgenerator("Hello World", algorithms="sha256,md5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HashgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HashgeneratorErrorBody
```

**Async**

```python
result = await async_client.security.with_raw_response.hashgenerator("Hello World", algorithms="sha256,md5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HashgeneratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HashgeneratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HashgeneratorResponse](api_verve/models/v1_hashgenerator_response.py), [HashgeneratorErrorBody](api_verve/errors/hashgenerator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HashgeneratorResponse](api_verve/models/v1_hashgenerator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HashgeneratorErrorBody](api_verve/errors/hashgenerator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hmac(body: V1HmacRequest | V1HmacRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1HmacResponse, HmacErrorBody]</code></summary>

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
result = client.security.with_raw_response.hmac(
    V1HmacRequest(message="some example string", secret="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HmacResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HmacErrorBody
```

**Async**

```python
result = await async_client.security.with_raw_response.hmac(
    V1HmacRequest(message="some example string", secret="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1HmacResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HmacErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1HmacResponse](api_verve/models/v1_hmac_response.py), [HmacErrorBody](api_verve/errors/hmac_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1HmacResponse](api_verve/models/v1_hmac_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[HmacErrorBody](api_verve/errors/hmac_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def acronymexpander(acronym: str, *, context: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AcronymexpanderResponse, AcronymexpanderErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.acronymexpander("API", context="software")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AcronymexpanderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcronymexpanderErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.acronymexpander("API", context="software")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AcronymexpanderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AcronymexpanderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AcronymexpanderResponse](api_verve/models/v1_acronymexpander_response.py), [AcronymexpanderErrorBody](api_verve/errors/acronymexpander_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AcronymexpanderResponse](api_verve/models/v1_acronymexpander_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AcronymexpanderErrorBody](api_verve/errors/acronymexpander_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def anagramdetector(text1: str, text2: str, *, ignorecase: bool | None = None, ignorespaces: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AnagramdetectorResponse, AnagramdetectorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.anagramdetector(
    "listen", "silent", ignorecase=True, ignorespaces=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AnagramdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnagramdetectorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.anagramdetector(
    "listen", "silent", ignorecase=True, ignorespaces=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AnagramdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AnagramdetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AnagramdetectorResponse](api_verve/models/v1_anagramdetector_response.py), [AnagramdetectorErrorBody](api_verve/errors/anagramdetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AnagramdetectorResponse](api_verve/models/v1_anagramdetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AnagramdetectorErrorBody](api_verve/errors/anagramdetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def antonym(word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AntonymResponse, AntonymErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.antonym("happy", language="Spanish")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AntonymResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AntonymErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.antonym("happy", language="Spanish")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AntonymResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AntonymErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AntonymResponse](api_verve/models/v1_antonym_response.py), [AntonymErrorBody](api_verve/errors/antonym_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AntonymResponse](api_verve/models/v1_antonym_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AntonymErrorBody](api_verve/errors/antonym_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cronparser(expression: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CronparserResponse, CronparserErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.cronparser("0 9 * * 1-5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CronparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CronparserErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.cronparser("0 9 * * 1-5")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CronparserResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CronparserErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CronparserResponse](api_verve/models/v1_cronparser_response.py), [CronparserErrorBody](api_verve/errors/cronparser_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CronparserResponse](api_verve/models/v1_cronparser_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CronparserErrorBody](api_verve/errors/cronparser_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def datamasking(body: V1DatamaskingRequest | V1DatamaskingRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DatamaskingResponse, DatamaskingErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.datamasking(V1DatamaskingRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DatamaskingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatamaskingErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.datamasking(
    V1DatamaskingRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DatamaskingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DatamaskingErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DatamaskingResponse](api_verve/models/v1_datamasking_response.py), [DatamaskingErrorBody](api_verve/errors/datamasking_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DatamaskingResponse](api_verve/models/v1_datamasking_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DatamaskingErrorBody](api_verve/errors/datamasking_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def didyoumean(query: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1DidyoumeanResponse, DidyoumeanErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.didyoumean("what weather today is")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DidyoumeanResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DidyoumeanErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.didyoumean("what weather today is")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1DidyoumeanResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DidyoumeanErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1DidyoumeanResponse](api_verve/models/v1_didyoumean_response.py), [DidyoumeanErrorBody](api_verve/errors/didyoumean_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1DidyoumeanResponse](api_verve/models/v1_didyoumean_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DidyoumeanErrorBody](api_verve/errors/didyoumean_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def emojidecorator(body: V1EmojidecoratorRequest | V1EmojidecoratorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1EmojidecoratorResponse, EmojidecoratorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.emojidecorator(V1EmojidecoratorRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EmojidecoratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EmojidecoratorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.emojidecorator(
    V1EmojidecoratorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EmojidecoratorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EmojidecoratorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1EmojidecoratorResponse](api_verve/models/v1_emojidecorator_response.py), [EmojidecoratorErrorBody](api_verve/errors/emojidecorator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1EmojidecoratorResponse](api_verve/models/v1_emojidecorator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EmojidecoratorErrorBody](api_verve/errors/emojidecorator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def gibberishdetector(body: V1GibberishdetectorRequest | V1GibberishdetectorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GibberishdetectorResponse, GibberishdetectorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.gibberishdetector(
    V1GibberishdetectorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GibberishdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GibberishdetectorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.gibberishdetector(
    V1GibberishdetectorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GibberishdetectorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GibberishdetectorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GibberishdetectorResponse](api_verve/models/v1_gibberishdetector_response.py), [GibberishdetectorErrorBody](api_verve/errors/gibberishdetector_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GibberishdetectorResponse](api_verve/models/v1_gibberishdetector_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GibberishdetectorErrorBody](api_verve/errors/gibberishdetector_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def grammarcheck(body: V1GrammarcheckRequest | V1GrammarcheckRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1GrammarcheckResponse, GrammarcheckErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.grammarcheck(V1GrammarcheckRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GrammarcheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GrammarcheckErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.grammarcheck(
    V1GrammarcheckRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1GrammarcheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GrammarcheckErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1GrammarcheckResponse](api_verve/models/v1_grammarcheck_response.py), [GrammarcheckErrorBody](api_verve/errors/grammarcheck_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1GrammarcheckResponse](api_verve/models/v1_grammarcheck_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GrammarcheckErrorBody](api_verve/errors/grammarcheck_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def isbnvalidator(isbn: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1IsbnvalidatorResponse, IsbnvalidatorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.isbnvalidator("978-0-306-40615-7")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IsbnvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IsbnvalidatorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.isbnvalidator("978-0-306-40615-7")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1IsbnvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type IsbnvalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1IsbnvalidatorResponse](api_verve/models/v1_isbnvalidator_response.py), [IsbnvalidatorErrorBody](api_verve/errors/isbnvalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1IsbnvalidatorResponse](api_verve/models/v1_isbnvalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[IsbnvalidatorErrorBody](api_verve/errors/isbnvalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def jsonschemavalidator(body: V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1JsonschemavalidatorResponse, JsonschemavalidatorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.jsonschemavalidator(
    V1JsonschemavalidatorRequest(schema_value="some example string", json_value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JsonschemavalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JsonschemavalidatorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.jsonschemavalidator(
    V1JsonschemavalidatorRequest(schema_value="some example string", json_value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1JsonschemavalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JsonschemavalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1JsonschemavalidatorResponse](api_verve/models/v1_jsonschemavalidator_response.py), [JsonschemavalidatorErrorBody](api_verve/errors/jsonschemavalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1JsonschemavalidatorResponse](api_verve/models/v1_jsonschemavalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JsonschemavalidatorErrorBody](api_verve/errors/jsonschemavalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def keywordextractor(body: V1KeywordextractorRequest | V1KeywordextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1KeywordextractorResponse, KeywordextractorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.keywordextractor(
    V1KeywordextractorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1KeywordextractorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type KeywordextractorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.keywordextractor(
    V1KeywordextractorRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1KeywordextractorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type KeywordextractorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1KeywordextractorResponse](api_verve/models/v1_keywordextractor_response.py), [KeywordextractorErrorBody](api_verve/errors/keywordextractor_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1KeywordextractorResponse](api_verve/models/v1_keywordextractor_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[KeywordextractorErrorBody](api_verve/errors/keywordextractor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def leetspeak(body: V1LeetspeakRequest | V1LeetspeakRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LeetspeakResponse, LeetspeakErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.leetspeak(
    V1LeetspeakRequest(text="some example string", mode="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LeetspeakResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LeetspeakErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.leetspeak(
    V1LeetspeakRequest(text="some example string", mode="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LeetspeakResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LeetspeakErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LeetspeakResponse](api_verve/models/v1_leetspeak_response.py), [LeetspeakErrorBody](api_verve/errors/leetspeak_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LeetspeakResponse](api_verve/models/v1_leetspeak_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LeetspeakErrorBody](api_verve/errors/leetspeak_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lemmatizer(body: V1LemmatizerRequest | V1LemmatizerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LemmatizerResponse, LemmatizerErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.lemmatizer(V1LemmatizerRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LemmatizerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LemmatizerErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.lemmatizer(
    V1LemmatizerRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LemmatizerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LemmatizerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LemmatizerResponse](api_verve/models/v1_lemmatizer_response.py), [LemmatizerErrorBody](api_verve/errors/lemmatizer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LemmatizerResponse](api_verve/models/v1_lemmatizer_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LemmatizerErrorBody](api_verve/errors/lemmatizer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def levenshteindistance(body: V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LevenshteindistanceResponse, LevenshteindistanceErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.levenshteindistance(
    V1LevenshteindistanceRequest(string1="some example string", string2="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LevenshteindistanceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LevenshteindistanceErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.levenshteindistance(
    V1LevenshteindistanceRequest(string1="some example string", string2="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LevenshteindistanceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LevenshteindistanceErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LevenshteindistanceResponse](api_verve/models/v1_levenshteindistance_response.py), [LevenshteindistanceErrorBody](api_verve/errors/levenshteindistance_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LevenshteindistanceResponse](api_verve/models/v1_levenshteindistance_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LevenshteindistanceErrorBody](api_verve/errors/levenshteindistance_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lexicon(word: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LexiconResponse, LexiconErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.lexicon("listen")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LexiconResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LexiconErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.lexicon("listen")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LexiconResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LexiconErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LexiconResponse](api_verve/models/v1_lexicon_response.py), [LexiconErrorBody](api_verve/errors/lexicon_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LexiconResponse](api_verve/models/v1_lexicon_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LexiconErrorBody](api_verve/errors/lexicon_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def linesorter(body: V1LinesorterRequest | V1LinesorterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1LinesorterResponse, LinesorterErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.linesorter(V1LinesorterRequest(lines="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LinesorterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LinesorterErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.linesorter(
    V1LinesorterRequest(lines="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1LinesorterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LinesorterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1LinesorterResponse](api_verve/models/v1_linesorter_response.py), [LinesorterErrorBody](api_verve/errors/linesorter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1LinesorterResponse](api_verve/models/v1_linesorter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LinesorterErrorBody](api_verve/errors/linesorter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def markdownlinkextractor(body: V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MarkdownlinkextractorResponse, MarkdownlinkextractorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.markdownlinkextractor(
    V1MarkdownlinkextractorRequest(markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdownlinkextractorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdownlinkextractorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.markdownlinkextractor(
    V1MarkdownlinkextractorRequest(markdown="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarkdownlinkextractorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarkdownlinkextractorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MarkdownlinkextractorResponse](api_verve/models/v1_markdownlinkextractor_response.py), [MarkdownlinkextractorErrorBody](api_verve/errors/markdownlinkextractor_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MarkdownlinkextractorResponse](api_verve/models/v1_markdownlinkextractor_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MarkdownlinkextractorErrorBody](api_verve/errors/markdownlinkextractor_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def palindromechecker(text: str, *, ignorecase: bool | None = None, ignorespaces: bool | None = None, ignorepunctuation: bool | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PalindromecheckerResponse, PalindromecheckerErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.palindromechecker(
    "A man a plan a canal Panama", ignorecase=True, ignorespaces=True, ignorepunctuation=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PalindromecheckerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PalindromecheckerErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.palindromechecker(
    "A man a plan a canal Panama", ignorecase=True, ignorespaces=True, ignorepunctuation=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PalindromecheckerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PalindromecheckerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PalindromecheckerResponse](api_verve/models/v1_palindromechecker_response.py), [PalindromecheckerErrorBody](api_verve/errors/palindromechecker_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PalindromecheckerResponse](api_verve/models/v1_palindromechecker_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PalindromecheckerErrorBody](api_verve/errors/palindromechecker_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def partsofspeech(body: V1PartsofspeechRequest | V1PartsofspeechRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PartsofspeechResponse, PartsofspeechErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.partsofspeech(V1PartsofspeechRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PartsofspeechResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PartsofspeechErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.partsofspeech(
    V1PartsofspeechRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PartsofspeechResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PartsofspeechErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PartsofspeechResponse](api_verve/models/v1_partsofspeech_response.py), [PartsofspeechErrorBody](api_verve/errors/partsofspeech_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PartsofspeechResponse](api_verve/models/v1_partsofspeech_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PartsofspeechErrorBody](api_verve/errors/partsofspeech_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def phonetic(word: str, *, algorithm: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PhoneticResponse, PhoneticErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.phonetic("smith", algorithm="both")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PhoneticResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PhoneticErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.phonetic("smith", algorithm="both")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PhoneticResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PhoneticErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PhoneticResponse](api_verve/models/v1_phonetic_response.py), [PhoneticErrorBody](api_verve/errors/phonetic_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PhoneticResponse](api_verve/models/v1_phonetic_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PhoneticErrorBody](api_verve/errors/phonetic_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def piglatin(body: V1PiglatinRequest | V1PiglatinRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1PiglatinResponse, PiglatinErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.piglatin(V1PiglatinRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PiglatinResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PiglatinErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.piglatin(V1PiglatinRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1PiglatinResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PiglatinErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1PiglatinResponse](api_verve/models/v1_piglatin_response.py), [PiglatinErrorBody](api_verve/errors/piglatin_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1PiglatinResponse](api_verve/models/v1_piglatin_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PiglatinErrorBody](api_verve/errors/piglatin_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def profanityfilter(body: V1ProfanityfilterRequest | V1ProfanityfilterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ProfanityfilterResponse, ProfanityfilterErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.profanityfilter(V1ProfanityfilterRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ProfanityfilterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProfanityfilterErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.profanityfilter(
    V1ProfanityfilterRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ProfanityfilterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ProfanityfilterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ProfanityfilterResponse](api_verve/models/v1_profanityfilter_response.py), [ProfanityfilterErrorBody](api_verve/errors/profanityfilter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ProfanityfilterResponse](api_verve/models/v1_profanityfilter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ProfanityfilterErrorBody](api_verve/errors/profanityfilter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def readabilityscore(body: V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ReadabilityscoreResponse, ReadabilityscoreErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.readabilityscore(
    V1ReadabilityscoreRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReadabilityscoreResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReadabilityscoreErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.readabilityscore(
    V1ReadabilityscoreRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReadabilityscoreResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReadabilityscoreErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ReadabilityscoreResponse](api_verve/models/v1_readabilityscore_response.py), [ReadabilityscoreErrorBody](api_verve/errors/readabilityscore_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ReadabilityscoreResponse](api_verve/models/v1_readabilityscore_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ReadabilityscoreErrorBody](api_verve/errors/readabilityscore_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def readingtime(body: V1ReadingtimeRequest | V1ReadingtimeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ReadingtimeResponse, ReadingtimeErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.readingtime(V1ReadingtimeRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReadingtimeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReadingtimeErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.readingtime(
    V1ReadingtimeRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReadingtimeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReadingtimeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ReadingtimeResponse](api_verve/models/v1_readingtime_response.py), [ReadingtimeErrorBody](api_verve/errors/readingtime_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ReadingtimeResponse](api_verve/models/v1_readingtime_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ReadingtimeErrorBody](api_verve/errors/readingtime_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def regextester(body: V1RegextesterRequest | V1RegextesterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RegextesterResponse, RegextesterErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.regextester(
    V1RegextesterRequest(pattern="some example string", text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RegextesterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegextesterErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.regextester(
    V1RegextesterRequest(pattern="some example string", text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RegextesterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegextesterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RegextesterResponse](api_verve/models/v1_regextester_response.py), [RegextesterErrorBody](api_verve/errors/regextester_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RegextesterResponse](api_verve/models/v1_regextester_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RegextesterErrorBody](api_verve/errors/regextester_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def removepunctuation(body: V1RemovepunctuationRequest | V1RemovepunctuationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RemovepunctuationResponse, RemovepunctuationErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.removepunctuation(
    V1RemovepunctuationRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RemovepunctuationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemovepunctuationErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.removepunctuation(
    V1RemovepunctuationRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RemovepunctuationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemovepunctuationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1RemovepunctuationResponse](api_verve/models/v1_removepunctuation_response.py), [RemovepunctuationErrorBody](api_verve/errors/removepunctuation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RemovepunctuationResponse](api_verve/models/v1_removepunctuation_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RemovepunctuationErrorBody](api_verve/errors/removepunctuation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reversetext(body: V1ReversetextRequest | V1ReversetextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ReversetextResponse, ReversetextErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.reversetext(V1ReversetextRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReversetextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReversetextErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.reversetext(
    V1ReversetextRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ReversetextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReversetextErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1ReversetextResponse](api_verve/models/v1_reversetext_response.py), [ReversetextErrorBody](api_verve/errors/reversetext_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ReversetextResponse](api_verve/models/v1_reversetext_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ReversetextErrorBody](api_verve/errors/reversetext_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def slugify(body: V1SlugifyRequest | V1SlugifyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SlugifyResponse, SlugifyErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.slugify(V1SlugifyRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SlugifyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SlugifyErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.slugify(V1SlugifyRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SlugifyResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SlugifyErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SlugifyResponse](api_verve/models/v1_slugify_response.py), [SlugifyErrorBody](api_verve/errors/slugify_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SlugifyResponse](api_verve/models/v1_slugify_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SlugifyErrorBody](api_verve/errors/slugify_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def spellchecker(body: V1SpellcheckerRequest | V1SpellcheckerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SpellcheckerResponse, SpellcheckerErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.spellchecker(V1SpellcheckerRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SpellcheckerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpellcheckerErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.spellchecker(
    V1SpellcheckerRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SpellcheckerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SpellcheckerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SpellcheckerResponse](api_verve/models/v1_spellchecker_response.py), [SpellcheckerErrorBody](api_verve/errors/spellchecker_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SpellcheckerResponse](api_verve/models/v1_spellchecker_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SpellcheckerErrorBody](api_verve/errors/spellchecker_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def syllablecounter(body: V1SyllablecounterRequest | V1SyllablecounterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SyllablecounterResponse, SyllablecounterErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.syllablecounter(V1SyllablecounterRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SyllablecounterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SyllablecounterErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.syllablecounter(
    V1SyllablecounterRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SyllablecounterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SyllablecounterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SyllablecounterResponse](api_verve/models/v1_syllablecounter_response.py), [SyllablecounterErrorBody](api_verve/errors/syllablecounter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SyllablecounterResponse](api_verve/models/v1_syllablecounter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SyllablecounterErrorBody](api_verve/errors/syllablecounter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def taxidvalidator(taxid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TaxidvalidatorResponse, TaxidvalidatorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.taxidvalidator("123-45-6789")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TaxidvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TaxidvalidatorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.taxidvalidator("123-45-6789")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TaxidvalidatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TaxidvalidatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TaxidvalidatorResponse](api_verve/models/v1_taxidvalidator_response.py), [TaxidvalidatorErrorBody](api_verve/errors/taxidvalidator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TaxidvalidatorResponse](api_verve/models/v1_taxidvalidator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TaxidvalidatorErrorBody](api_verve/errors/taxidvalidator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tenseconverter(body: V1TenseconverterRequest | V1TenseconverterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TenseconverterResponse, TenseconverterErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.tenseconverter(V1TenseconverterRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TenseconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TenseconverterErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.tenseconverter(
    V1TenseconverterRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TenseconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TenseconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TenseconverterResponse](api_verve/models/v1_tenseconverter_response.py), [TenseconverterErrorBody](api_verve/errors/tenseconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TenseconverterResponse](api_verve/models/v1_tenseconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TenseconverterErrorBody](api_verve/errors/tenseconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def textlanguage(body: V1TextlanguageRequest | V1TextlanguageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TextlanguageResponse, TextlanguageErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.textlanguage(V1TextlanguageRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TextlanguageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TextlanguageErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.textlanguage(
    V1TextlanguageRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TextlanguageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TextlanguageErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TextlanguageResponse](api_verve/models/v1_textlanguage_response.py), [TextlanguageErrorBody](api_verve/errors/textlanguage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TextlanguageResponse](api_verve/models/v1_textlanguage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TextlanguageErrorBody](api_verve/errors/textlanguage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def textsimilarity(body: V1TextsimilarityRequest | V1TextsimilarityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TextsimilarityResponse, TextsimilarityErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.textsimilarity(
    V1TextsimilarityRequest(text1="some example string", text2="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TextsimilarityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TextsimilarityErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.textsimilarity(
    V1TextsimilarityRequest(text1="some example string", text2="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TextsimilarityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TextsimilarityErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TextsimilarityResponse](api_verve/models/v1_textsimilarity_response.py), [TextsimilarityErrorBody](api_verve/errors/textsimilarity_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TextsimilarityResponse](api_verve/models/v1_textsimilarity_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TextsimilarityErrorBody](api_verve/errors/textsimilarity_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def textstyler(body: V1TextstylerRequest | V1TextstylerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TextstylerResponse, TextstylerErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.textstyler(
    V1TextstylerRequest(text="some example string", style="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TextstylerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TextstylerErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.textstyler(
    V1TextstylerRequest(text="some example string", style="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TextstylerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TextstylerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TextstylerResponse](api_verve/models/v1_textstyler_response.py), [TextstylerErrorBody](api_verve/errors/textstyler_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TextstylerResponse](api_verve/models/v1_textstyler_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TextstylerErrorBody](api_verve/errors/textstyler_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def textsummarizer(body: V1TextsummarizerRequest | V1TextsummarizerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TextsummarizerResponse, TextsummarizerErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.textsummarizer(V1TextsummarizerRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TextsummarizerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TextsummarizerErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.textsummarizer(
    V1TextsummarizerRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TextsummarizerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TextsummarizerErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TextsummarizerResponse](api_verve/models/v1_textsummarizer_response.py), [TextsummarizerErrorBody](api_verve/errors/textsummarizer_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TextsummarizerResponse](api_verve/models/v1_textsummarizer_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TextsummarizerErrorBody](api_verve/errors/textsummarizer_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def texttoemoji(body: V1TexttoemojiRequest | V1TexttoemojiRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TexttoemojiResponse, TexttoemojiErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.texttoemoji(V1TexttoemojiRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TexttoemojiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TexttoemojiErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.texttoemoji(
    V1TexttoemojiRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TexttoemojiResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TexttoemojiErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TexttoemojiResponse](api_verve/models/v1_texttoemoji_response.py), [TexttoemojiErrorBody](api_verve/errors/texttoemoji_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TexttoemojiResponse](api_verve/models/v1_texttoemoji_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TexttoemojiErrorBody](api_verve/errors/texttoemoji_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def titlecapitalization(body: V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TitlecapitalizationResponse, TitlecapitalizationErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.titlecapitalization(
    V1TitlecapitalizationRequest(text="some example string", style="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TitlecapitalizationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TitlecapitalizationErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.titlecapitalization(
    V1TitlecapitalizationRequest(text="some example string", style="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TitlecapitalizationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TitlecapitalizationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TitlecapitalizationResponse](api_verve/models/v1_titlecapitalization_response.py), [TitlecapitalizationErrorBody](api_verve/errors/titlecapitalization_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TitlecapitalizationResponse](api_verve/models/v1_titlecapitalization_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TitlecapitalizationErrorBody](api_verve/errors/titlecapitalization_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def translator(body: V1TranslatorRequest | V1TranslatorRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1TranslatorResponse, TranslatorErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.translator(
    V1TranslatorRequest(text="some example string", target="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TranslatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslatorErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.translator(
    V1TranslatorRequest(text="some example string", target="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1TranslatorResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TranslatorErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1TranslatorResponse](api_verve/models/v1_translator_response.py), [TranslatorErrorBody](api_verve/errors/translator_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1TranslatorResponse](api_verve/models/v1_translator_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TranslatorErrorBody](api_verve/errors/translator_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vowelcounter(body: V1VowelcounterRequest | V1VowelcounterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1VowelcounterResponse, VowelcounterErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.vowelcounter(V1VowelcounterRequest(text="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VowelcounterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VowelcounterErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.vowelcounter(
    V1VowelcounterRequest(text="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VowelcounterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VowelcounterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1VowelcounterResponse](api_verve/models/v1_vowelcounter_response.py), [VowelcounterErrorBody](api_verve/errors/vowelcounter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1VowelcounterResponse](api_verve/models/v1_vowelcounter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[VowelcounterErrorBody](api_verve/errors/vowelcounter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def websitereadability(body: V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WebsitereadabilityResponse, WebsitereadabilityErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.websitereadability(
    V1WebsitereadabilityRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebsitereadabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebsitereadabilityErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.websitereadability(
    V1WebsitereadabilityRequest(url="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WebsitereadabilityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebsitereadabilityErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WebsitereadabilityResponse](api_verve/models/v1_websitereadability_response.py), [WebsitereadabilityErrorBody](api_verve/errors/websitereadability_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WebsitereadabilityResponse](api_verve/models/v1_websitereadability_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WebsitereadabilityErrorBody](api_verve/errors/websitereadability_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordopposite(word: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WordoppositeResponse, WordoppositeErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.wordopposite("hot")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordoppositeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordoppositeErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.wordopposite("hot")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordoppositeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordoppositeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WordoppositeResponse](api_verve/models/v1_wordopposite_response.py), [WordoppositeErrorBody](api_verve/errors/wordopposite_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WordoppositeResponse](api_verve/models/v1_wordopposite_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WordoppositeErrorBody](api_verve/errors/wordopposite_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordpronunciation(word: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WordpronunciationResponse, WordpronunciationErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.wordpronunciation("hello")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordpronunciationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordpronunciationErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.wordpronunciation("hello")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordpronunciationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordpronunciationErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WordpronunciationResponse](api_verve/models/v1_wordpronunciation_response.py), [WordpronunciationErrorBody](api_verve/errors/wordpronunciation_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WordpronunciationResponse](api_verve/models/v1_wordpronunciation_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WordpronunciationErrorBody](api_verve/errors/wordpronunciation_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def wordrhymes(word: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WordrhymesResponse, WordrhymesErrorBody]</code></summary>

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
result = client.text_processing.with_raw_response.wordrhymes("blue", limit=30)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordrhymesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordrhymesErrorBody
```

**Async**

```python
result = await async_client.text_processing.with_raw_response.wordrhymes("blue", limit=30)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WordrhymesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WordrhymesErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WordrhymesResponse](api_verve/models/v1_wordrhymes_response.py), [WordrhymesErrorBody](api_verve/errors/wordrhymes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WordrhymesResponse](api_verve/models/v1_wordrhymes_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WordrhymesErrorBody](api_verve/errors/wordrhymes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def airlinelookup(iata: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AirlinelookupResponse, AirlinelookupErrorBody]</code></summary>

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
result = client.transportation.with_raw_response.airlinelookup("AA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirlinelookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirlinelookupErrorBody
```

**Async**

```python
result = await async_client.transportation.with_raw_response.airlinelookup("AA")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirlinelookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirlinelookupErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AirlinelookupResponse](api_verve/models/v1_airlinelookup_response.py), [AirlinelookupErrorBody](api_verve/errors/airlinelookup_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AirlinelookupResponse](api_verve/models/v1_airlinelookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AirlinelookupErrorBody](api_verve/errors/airlinelookup_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def airportcodeconverter(code: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AirportcodeconverterResponse, AirportcodeconverterErrorBody]</code></summary>

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
result = client.transportation.with_raw_response.airportcodeconverter("MCI")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirportcodeconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirportcodeconverterErrorBody
```

**Async**

```python
result = await async_client.transportation.with_raw_response.airportcodeconverter("MCI")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirportcodeconverterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirportcodeconverterErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AirportcodeconverterResponse](api_verve/models/v1_airportcodeconverter_response.py), [AirportcodeconverterErrorBody](api_verve/errors/airportcodeconverter_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AirportcodeconverterResponse](api_verve/models/v1_airportcodeconverter_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AirportcodeconverterErrorBody](api_verve/errors/airportcodeconverter_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def airportdistance(iata1: str, iata2: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AirportdistanceResponse, AirportdistanceErrorBody]</code></summary>

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
result = client.transportation.with_raw_response.airportdistance("JFK", "LAX")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirportdistanceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirportdistanceErrorBody
```

**Async**

```python
result = await async_client.transportation.with_raw_response.airportdistance("JFK", "LAX")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirportdistanceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirportdistanceErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AirportdistanceResponse](api_verve/models/v1_airportdistance_response.py), [AirportdistanceErrorBody](api_verve/errors/airportdistance_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AirportdistanceResponse](api_verve/models/v1_airportdistance_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AirportdistanceErrorBody](api_verve/errors/airportdistance_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def airports(iata: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AirportsResponse, AirportsErrorBody]</code></summary>

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
result = client.transportation.with_raw_response.airports("MCI")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirportsErrorBody
```

**Async**

```python
result = await async_client.transportation.with_raw_response.airports("MCI")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirportsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirportsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AirportsResponse](api_verve/models/v1_airports_response.py), [AirportsErrorBody](api_verve/errors/airports_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AirportsResponse](api_verve/models/v1_airports_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AirportsErrorBody](api_verve/errors/airports_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def carmodels(make: str, *, year: int | None = None, model: str | None = None, trim: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1CarmodelsResponse, CarmodelsErrorBody]</code></summary>

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
result = client.transportation.with_raw_response.carmodels("Toyota", year=2024, model="Camry", trim="Hybrid")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CarmodelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CarmodelsErrorBody
```

**Async**

```python
result = await async_client.transportation.with_raw_response.carmodels(
    "Toyota", year=2024, model="Camry", trim="Hybrid"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1CarmodelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CarmodelsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1CarmodelsResponse](api_verve/models/v1_carmodels_response.py), [CarmodelsErrorBody](api_verve/errors/carmodels_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1CarmodelsResponse](api_verve/models/v1_carmodels_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CarmodelsErrorBody](api_verve/errors/carmodels_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def vindecoder(vin: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1VindecoderResponse, VindecoderErrorBody]</code></summary>

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
result = client.transportation.with_raw_response.vindecoder("1HGCM82633A004352")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VindecoderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VindecoderErrorBody
```

**Async**

```python
result = await async_client.transportation.with_raw_response.vindecoder("1HGCM82633A004352")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1VindecoderResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type VindecoderErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1VindecoderResponse](api_verve/models/v1_vindecoder_response.py), [VindecoderErrorBody](api_verve/errors/vindecoder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1VindecoderResponse](api_verve/models/v1_vindecoder_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[VindecoderErrorBody](api_verve/errors/vindecoder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

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
<summary><code>def airquality(city: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AirqualityResponse, AirqualityErrorBody]</code></summary>

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
result = client.weather.with_raw_response.airquality("San Francisco")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirqualityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirqualityErrorBody
```

**Async**

```python
result = await async_client.weather.with_raw_response.airquality("San Francisco")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AirqualityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AirqualityErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1AirqualityResponse](api_verve/models/v1_airquality_response.py), [AirqualityErrorBody](api_verve/errors/airquality_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AirqualityResponse](api_verve/models/v1_airquality_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[AirqualityErrorBody](api_verve/errors/airquality_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def earthquake(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1EarthquakeResponse, EarthquakeErrorBody]</code></summary>

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
result = client.weather.with_raw_response.earthquake()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EarthquakeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EarthquakeErrorBody
```

**Async**

```python
result = await async_client.weather.with_raw_response.earthquake()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1EarthquakeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EarthquakeErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1EarthquakeResponse](api_verve/models/v1_earthquake_response.py), [EarthquakeErrorBody](api_verve/errors/earthquake_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1EarthquakeResponse](api_verve/models/v1_earthquake_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EarthquakeErrorBody](api_verve/errors/earthquake_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def marineweather(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MarineweatherResponse, MarineweatherErrorBody]</code></summary>

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
result = client.weather.with_raw_response.marineweather(29.48003, -37.62424)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarineweatherResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarineweatherErrorBody
```

**Async**

```python
result = await async_client.weather.with_raw_response.marineweather(29.48003, -37.62424)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MarineweatherResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MarineweatherErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MarineweatherResponse](api_verve/models/v1_marineweather_response.py), [MarineweatherErrorBody](api_verve/errors/marineweather_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MarineweatherResponse](api_verve/models/v1_marineweather_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MarineweatherErrorBody](api_verve/errors/marineweather_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def moonrisemoonset(lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1MoonrisemoonsetResponse, MoonrisemoonsetErrorBody]</code></summary>

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
result = client.weather.with_raw_response.moonrisemoonset(37.7749, -122.4194, date="01-16-2026")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MoonrisemoonsetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MoonrisemoonsetErrorBody
```

**Async**

```python
result = await async_client.weather.with_raw_response.moonrisemoonset(37.7749, -122.4194, date="01-16-2026")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1MoonrisemoonsetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type MoonrisemoonsetErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1MoonrisemoonsetResponse](api_verve/models/v1_moonrisemoonset_response.py), [MoonrisemoonsetErrorBody](api_verve/errors/moonrisemoonset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1MoonrisemoonsetResponse](api_verve/models/v1_moonrisemoonset_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[MoonrisemoonsetErrorBody](api_verve/errors/moonrisemoonset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def solarpotential(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SolarpotentialResponse, SolarpotentialErrorBody]</code></summary>

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
result = client.weather.with_raw_response.solarpotential(37.7749, -122.4194)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SolarpotentialResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SolarpotentialErrorBody
```

**Async**

```python
result = await async_client.weather.with_raw_response.solarpotential(37.7749, -122.4194)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SolarpotentialResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SolarpotentialErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SolarpotentialResponse](api_verve/models/v1_solarpotential_response.py), [SolarpotentialErrorBody](api_verve/errors/solarpotential_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SolarpotentialResponse](api_verve/models/v1_solarpotential_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SolarpotentialErrorBody](api_verve/errors/solarpotential_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sunrisesunset(lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1SunrisesunsetResponse, SunrisesunsetErrorBody]</code></summary>

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
result = client.weather.with_raw_response.sunrisesunset(36.72016, -4.42034, date="01-16-2026")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SunrisesunsetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SunrisesunsetErrorBody
```

**Async**

```python
result = await async_client.weather.with_raw_response.sunrisesunset(36.72016, -4.42034, date="01-16-2026")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1SunrisesunsetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SunrisesunsetErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1SunrisesunsetResponse](api_verve/models/v1_sunrisesunset_response.py), [SunrisesunsetErrorBody](api_verve/errors/sunrisesunset_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1SunrisesunsetResponse](api_verve/models/v1_sunrisesunset_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SunrisesunsetErrorBody](api_verve/errors/sunrisesunset_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def weatherforecast(city: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WeatherforecastResponse, WeatherforecastErrorBody]</code></summary>

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
result = client.weather.with_raw_response.weatherforecast("San Francisco")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WeatherforecastResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WeatherforecastErrorBody
```

**Async**

```python
result = await async_client.weather.with_raw_response.weatherforecast("San Francisco")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WeatherforecastResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WeatherforecastErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WeatherforecastResponse](api_verve/models/v1_weatherforecast_response.py), [WeatherforecastErrorBody](api_verve/errors/weatherforecast_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WeatherforecastResponse](api_verve/models/v1_weatherforecast_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WeatherforecastErrorBody](api_verve/errors/weatherforecast_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def weatherseasons(*, year: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WeatherseasonsResponse, WeatherseasonsErrorBody]</code></summary>

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
result = client.weather.with_raw_response.weatherseasons(year=2024)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WeatherseasonsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WeatherseasonsErrorBody
```

**Async**

```python
result = await async_client.weather.with_raw_response.weatherseasons(year=2024)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WeatherseasonsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WeatherseasonsErrorBody
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

**Returns**: <code>[ApiResult](api_verve/core/results.py)&#91;[V1WeatherseasonsResponse](api_verve/models/v1_weatherseasons_response.py), [WeatherseasonsErrorBody](api_verve/errors/weatherseasons_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WeatherseasonsResponse](api_verve/models/v1_weatherseasons_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[WeatherseasonsErrorBody](api_verve/errors/weatherseasons_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 500 | <code>[RawError](api_verve/core/results.py)</code> |
| anything unmapped | <code>[RawError](api_verve/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

