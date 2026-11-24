# Reference

> Source: [ApiVerveClient](src/client.ts)

## AiComputerVision

> Source: [AiComputerVision](src/resources/ai-computer-vision.ts)

<details>
<summary><code>articleideas(request: AiComputerVision.ArticleideasRequest, options?: RequestOptions): ApiPromise&lt;V1ArticleideasResponse, AiComputerVision.ArticleideasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate article ideas based on a topic using Artificial Intelligence

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiComputerVision.articleideas({ topic: "software and technology" });
  // TODO: Handle 'response' of type V1ArticleideasResponse
} catch (err) {
  // TODO: Handle 'err' of type AiComputerVision.ArticleideasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiComputerVision.articleideas({ topic: "software and technology" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ArticleideasResponse
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
| <code>topic</code> | <code>string</code> | The topic for which you want to generate article ideas (up to 50 characters) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiComputerVision.articleideas(request)`

- **OnSuccess**: <code>[V1ArticleideasResponse](src/models/v1-articleideas-response.ts)</code>
- **OnError**: throws <code>[AiComputerVision.ArticleideasError](src/resources/ai-computer-vision.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiComputerVision.articleideas(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ArticleideasResponse, AiComputerVision.ArticleideasError&gt;</code>, with `result.value` of type <code>[V1ArticleideasResponse](src/models/v1-articleideas-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>codedetector(request: AiComputerVision.CodedetectorRequest, options?: RequestOptions): ApiPromise&lt;V1CodedetectorResponse, AiComputerVision.CodedetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Code Detector is a simple tool for detecting the language of code in text. It returns details such as extension, language, family, and more.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiComputerVision.codedetector({ body: { code: "some example string" } });
  // TODO: Handle 'response' of type V1CodedetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type AiComputerVision.CodedetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiComputerVision
  .codedetector({ body: { code: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CodedetectorResponse
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
| <code>body</code> | <code>[V1CodedetectorRequest](src/models/v1-codedetector-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiComputerVision.codedetector(request)`

- **OnSuccess**: <code>[V1CodedetectorResponse](src/models/v1-codedetector-response.ts)</code>
- **OnError**: throws <code>[AiComputerVision.CodedetectorError](src/resources/ai-computer-vision.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiComputerVision.codedetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CodedetectorResponse, AiComputerVision.CodedetectorError&gt;</code>, with `result.value` of type <code>[V1CodedetectorResponse](src/models/v1-codedetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>imagecaption(request: AiComputerVision.ImagecaptionRequest, options?: RequestOptions): ApiPromise&lt;V1ImagecaptionResponse, AiComputerVision.ImagecaptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Image Caption is an AI-powered tool that generates descriptive captions for images. Simply upload an image and receive a natural language description of its contents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiComputerVision.imagecaption({ image: new Uint8Array() });
  // TODO: Handle 'response' of type V1ImagecaptionResponse
} catch (err) {
  // TODO: Handle 'err' of type AiComputerVision.ImagecaptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiComputerVision.imagecaption({ image: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ImagecaptionResponse
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
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiComputerVision.imagecaption(request)`

- **OnSuccess**: <code>[V1ImagecaptionResponse](src/models/v1-imagecaption-response.ts)</code>
- **OnError**: throws <code>[AiComputerVision.ImagecaptionError](src/resources/ai-computer-vision.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiComputerVision.imagecaption(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ImagecaptionResponse, AiComputerVision.ImagecaptionError&gt;</code>, with `result.value` of type <code>[V1ImagecaptionResponse](src/models/v1-imagecaption-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>imagetotext(request: AiComputerVision.ImagetotextRequest, options?: RequestOptions): ApiPromise&lt;V1ImagetotextResponse, AiComputerVision.ImagetotextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract text from an uploaded image using OCR

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiComputerVision.imagetotext({ image: new Uint8Array() });
  // TODO: Handle 'response' of type V1ImagetotextResponse
} catch (err) {
  // TODO: Handle 'err' of type AiComputerVision.ImagetotextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiComputerVision.imagetotext({ image: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ImagetotextResponse
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
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiComputerVision.imagetotext(request)`

- **OnSuccess**: <code>[V1ImagetotextResponse](src/models/v1-imagetotext-response.ts)</code>
- **OnError**: throws <code>[AiComputerVision.ImagetotextError](src/resources/ai-computer-vision.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiComputerVision.imagetotext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ImagetotextResponse, AiComputerVision.ImagetotextError&gt;</code>, with `result.value` of type <code>[V1ImagetotextResponse](src/models/v1-imagetotext-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>languagedetector(request: AiComputerVision.LanguagedetectorRequest, options?: RequestOptions): ApiPromise&lt;V1LanguagedetectorResponse, AiComputerVision.LanguagedetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect the language of a body of text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiComputerVision.languagedetector({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1LanguagedetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type AiComputerVision.LanguagedetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiComputerVision
  .languagedetector({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LanguagedetectorResponse
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
| <code>body</code> | <code>[V1LanguagedetectorRequest](src/models/v1-languagedetector-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiComputerVision.languagedetector(request)`

- **OnSuccess**: <code>[V1LanguagedetectorResponse](src/models/v1-languagedetector-response.ts)</code>
- **OnError**: throws <code>[AiComputerVision.LanguagedetectorError](src/resources/ai-computer-vision.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiComputerVision.languagedetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LanguagedetectorResponse, AiComputerVision.LanguagedetectorError&gt;</code>, with `result.value` of type <code>[V1LanguagedetectorResponse](src/models/v1-languagedetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sentimentanalysis(request: AiComputerVision.SentimentanalysisRequest, options?: RequestOptions): ApiPromise&lt;V1SentimentanalysisResponse, AiComputerVision.SentimentanalysisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze the sentiment of a body of text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.aiComputerVision.sentimentanalysis({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1SentimentanalysisResponse
} catch (err) {
  // TODO: Handle 'err' of type AiComputerVision.SentimentanalysisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.aiComputerVision
  .sentimentanalysis({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SentimentanalysisResponse
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
| <code>body</code> | <code>[V1SentimentanalysisRequest](src/models/v1-sentimentanalysis-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.aiComputerVision.sentimentanalysis(request)`

- **OnSuccess**: <code>[V1SentimentanalysisResponse](src/models/v1-sentimentanalysis-response.ts)</code>
- **OnError**: throws <code>[AiComputerVision.SentimentanalysisError](src/resources/ai-computer-vision.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.aiComputerVision.sentimentanalysis(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SentimentanalysisResponse, AiComputerVision.SentimentanalysisError&gt;</code>, with `result.value` of type <code>[V1SentimentanalysisResponse](src/models/v1-sentimentanalysis-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Astrology

> Source: [Astrology](src/resources/astrology.ts)

<details>
<summary><code>chinesezodiac(request: Astrology.ChinesezodiacRequest, options?: RequestOptions): ApiPromise&lt;V1ChinesezodiacResponse, Astrology.ChinesezodiacError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Chinese zodiac information for a specific date

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.astrology.chinesezodiac({ date: "1990-01-15" });
  // TODO: Handle 'response' of type V1ChinesezodiacResponse
} catch (err) {
  // TODO: Handle 'err' of type Astrology.ChinesezodiacError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.astrology.chinesezodiac({ date: "1990-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ChinesezodiacResponse
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
| <code>date</code> | <code>string</code> | The date in YYYY-MM-DD format (years 1900-2100) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.astrology.chinesezodiac(request)`

- **OnSuccess**: <code>[V1ChinesezodiacResponse](src/models/v1-chinesezodiac-response.ts)</code>
- **OnError**: throws <code>[Astrology.ChinesezodiacError](src/resources/astrology.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.astrology.chinesezodiac(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ChinesezodiacResponse, Astrology.ChinesezodiacError&gt;</code>, with `result.value` of type <code>[V1ChinesezodiacResponse](src/models/v1-chinesezodiac-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>horoscope(request: Astrology.HoroscopeRequest, options?: RequestOptions): ApiPromise&lt;V1HoroscopeResponse, Astrology.HoroscopeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the horoscope of the day for a specific zodiac sign

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.astrology.horoscope({ sign: "aries" });
  // TODO: Handle 'response' of type V1HoroscopeResponse
} catch (err) {
  // TODO: Handle 'err' of type Astrology.HoroscopeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.astrology.horoscope({ sign: "aries" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HoroscopeResponse
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
| <code>sign</code> | <code>string</code> | The zodiac sign for which you want to get the horoscope |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.astrology.horoscope(request)`

- **OnSuccess**: <code>[V1HoroscopeResponse](src/models/v1-horoscope-response.ts)</code>
- **OnError**: throws <code>[Astrology.HoroscopeError](src/resources/astrology.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.astrology.horoscope(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HoroscopeResponse, Astrology.HoroscopeError&gt;</code>, with `result.value` of type <code>[V1HoroscopeResponse](src/models/v1-horoscope-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>moonphases(request?: Astrology.MoonphasesRequest, options?: RequestOptions): ApiPromise&lt;V1MoonphasesResponse, Astrology.MoonphasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the moon phase for today

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.astrology.moonphases({ today: true });
  // TODO: Handle 'response' of type V1MoonphasesResponse
} catch (err) {
  // TODO: Handle 'err' of type Astrology.MoonphasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.astrology.moonphases({ today: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MoonphasesResponse
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
| <code>today?</code> | <code>boolean</code> | Get the moon phase for today |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.astrology.moonphases(request)`

- **OnSuccess**: <code>[V1MoonphasesResponse](src/models/v1-moonphases-response.ts)</code>
- **OnError**: throws <code>[Astrology.MoonphasesError](src/resources/astrology.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.astrology.moonphases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MoonphasesResponse, Astrology.MoonphasesError&gt;</code>, with `result.value` of type <code>[V1MoonphasesResponse](src/models/v1-moonphases-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>moonposition(request: Astrology.MoonpositionRequest, options?: RequestOptions): ApiPromise&lt;V1MoonpositionResponse, Astrology.MoonpositionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get moon position data based on the location

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.astrology.moonposition({
    lat: 37.7749,
    lon: -122.4194,
    date: "01-16-2026",
    time: "14:30",
    timezone: "America/Los_Angeles",
  });
  // TODO: Handle 'response' of type V1MoonpositionResponse
} catch (err) {
  // TODO: Handle 'err' of type Astrology.MoonpositionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.astrology
  .moonposition({
    lat: 37.7749,
    lon: -122.4194,
    date: "01-16-2026",
    time: "14:30",
    timezone: "America/Los_Angeles",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MoonpositionResponse
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
| <code>lat</code> | <code>number</code> | The latitude of the location |
| <code>lon</code> | <code>number</code> | The longitude of the location |
| <code>date?</code> | <code>string</code> | The date to get the moon position data for (MM-dd-yyyy) |
| <code>time?</code> | <code>string</code> | The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided |
| <code>timezone?</code> | <code>string</code> | IANA timezone name the date and time are given in. Defaults to the timezone of the supplied coordinates |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.astrology.moonposition(request)`

- **OnSuccess**: <code>[V1MoonpositionResponse](src/models/v1-moonposition-response.ts)</code>
- **OnError**: throws <code>[Astrology.MoonpositionError](src/resources/astrology.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.astrology.moonposition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MoonpositionResponse, Astrology.MoonpositionError&gt;</code>, with `result.value` of type <code>[V1MoonpositionResponse](src/models/v1-moonposition-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>planetpositions(request: Astrology.PlanetpositionsRequest, options?: RequestOptions): ApiPromise&lt;V1PlanetpositionsResponse, Astrology.PlanetpositionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Planet Positions is a simple tool for getting the position of planets in the solar system. It returns the position of planets in the solar system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.astrology.planetpositions({
    body: { lat: 1.5, lon: 1.5, planet: "some example string" },
  });
  // TODO: Handle 'response' of type V1PlanetpositionsResponse
} catch (err) {
  // TODO: Handle 'err' of type Astrology.PlanetpositionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.astrology
  .planetpositions({ body: { lat: 1.5, lon: 1.5, planet: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PlanetpositionsResponse
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
| <code>body</code> | <code>[V1PlanetpositionsRequest](src/models/v1-planetpositions-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.astrology.planetpositions(request)`

- **OnSuccess**: <code>[V1PlanetpositionsResponse](src/models/v1-planetpositions-response.ts)</code>
- **OnError**: throws <code>[Astrology.PlanetpositionsError](src/resources/astrology.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.astrology.planetpositions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PlanetpositionsResponse, Astrology.PlanetpositionsError&gt;</code>, with `result.value` of type <code>[V1PlanetpositionsResponse](src/models/v1-planetpositions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sunposition(request: Astrology.SunpositionRequest, options?: RequestOptions): ApiPromise&lt;V1SunpositionResponse, Astrology.SunpositionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get sun position data based on the location

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.astrology.sunposition({
    lat: 37.7749,
    lon: -122.4194,
    date: "01-16-2026",
    time: "14:30",
    timezone: "America/Los_Angeles",
  });
  // TODO: Handle 'response' of type V1SunpositionResponse
} catch (err) {
  // TODO: Handle 'err' of type Astrology.SunpositionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.astrology
  .sunposition({
    lat: 37.7749,
    lon: -122.4194,
    date: "01-16-2026",
    time: "14:30",
    timezone: "America/Los_Angeles",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SunpositionResponse
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
| <code>lat</code> | <code>number</code> | The latitude of the location |
| <code>lon</code> | <code>number</code> | The longitude of the location |
| <code>date?</code> | <code>string</code> | The date to get the sun position data for (MM-DD-YYYY) |
| <code>time?</code> | <code>string</code> | The time of day for the calculation (HH:mm format, 24-hour), read in the timezone of the coordinates. Defaults to 00:00 if not provided |
| <code>timezone?</code> | <code>string</code> | IANA timezone to read the date and time in, such as America/Los_Angeles. Defaults to the timezone of the coordinates |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.astrology.sunposition(request)`

- **OnSuccess**: <code>[V1SunpositionResponse](src/models/v1-sunposition-response.ts)</code>
- **OnError**: throws <code>[Astrology.SunpositionError](src/resources/astrology.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.astrology.sunposition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SunpositionResponse, Astrology.SunpositionError&gt;</code>, with `result.value` of type <code>[V1SunpositionResponse](src/models/v1-sunposition-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Calendar

> Source: [Calendar](src/resources/calendar.ts)

<details>
<summary><code>agecalculator(request: Calendar.AgecalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1AgecalculatorResponse, Calendar.AgecalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate age based on the date of birth provided

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calendar.agecalculator({ dob: "1990-08-02", timezone: "America/Chicago" });
  // TODO: Handle 'response' of type V1AgecalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Calendar.AgecalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calendar
  .agecalculator({ dob: "1990-08-02", timezone: "America/Chicago" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AgecalculatorResponse
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
| <code>dob</code> | <code>string</code> | The date of birth to calculate the age from (format: YYYY-MM-DD) |
| <code>timezone?</code> | <code>string</code> | IANA timezone used to interpret the date of birth and to determine "today" when computing the age |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calendar.agecalculator(request)`

- **OnSuccess**: <code>[V1AgecalculatorResponse](src/models/v1-agecalculator-response.ts)</code>
- **OnError**: throws <code>[Calendar.AgecalculatorError](src/resources/calendar.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calendar.agecalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AgecalculatorResponse, Calendar.AgecalculatorError&gt;</code>, with `result.value` of type <code>[V1AgecalculatorResponse](src/models/v1-agecalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datecalculator(request: Calendar.DatecalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1DatecalculatorResponse, Calendar.DatecalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate date differences based on the dates provided

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calendar.datecalculator({ start: "2022-01-01", end: "2024-08-31" });
  // TODO: Handle 'response' of type V1DatecalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Calendar.DatecalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calendar.datecalculator({ start: "2022-01-01", end: "2024-08-31" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DatecalculatorResponse
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
| <code>start</code> | <code>string</code> | The start date for calculating the difference (format: YYYY-MM-DD) |
| <code>end</code> | <code>string</code> | The end date for calculating the difference (format: YYYY-MM-DD) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calendar.datecalculator(request)`

- **OnSuccess**: <code>[V1DatecalculatorResponse](src/models/v1-datecalculator-response.ts)</code>
- **OnError**: throws <code>[Calendar.DatecalculatorError](src/resources/calendar.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calendar.datecalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DatecalculatorResponse, Calendar.DatecalculatorError&gt;</code>, with `result.value` of type <code>[V1DatecalculatorResponse](src/models/v1-datecalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>liturgicalcalendar(request?: Calendar.LiturgicalcalendarRequest, options?: RequestOptions): ApiPromise&lt;V1LiturgicalcalendarResponse, Calendar.LiturgicalcalendarError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Catholic liturgical calendar for one month. The response data is an object keyed by ISO date (YYYY-MM-DD), and each date holds an array of the celebrations falling on it — a date can carry more than one, such as a weekday plus an optional memorial. The fields below describe one celebration in those arrays.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calendar.liturgicalcalendar({ month: 2, year: 2025 });
  // TODO: Handle 'response' of type V1LiturgicalcalendarResponse
} catch (err) {
  // TODO: Handle 'err' of type Calendar.LiturgicalcalendarError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calendar.liturgicalcalendar({ month: 2, year: 2025 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LiturgicalcalendarResponse
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
| <code>month?</code> | <code>number</code> | The month to get Liturgical Calendar data for (default: current month) |
| <code>year?</code> | <code>number</code> | The year to get Liturgical Calendar data for (default: current year) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calendar.liturgicalcalendar(request)`

- **OnSuccess**: <code>[V1LiturgicalcalendarResponse](src/models/v1-liturgicalcalendar-response.ts)</code>
- **OnError**: throws <code>[Calendar.LiturgicalcalendarError](src/resources/calendar.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calendar.liturgicalcalendar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LiturgicalcalendarResponse, Calendar.LiturgicalcalendarError&gt;</code>, with `result.value` of type <code>[V1LiturgicalcalendarResponse](src/models/v1-liturgicalcalendar-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>workingdays(request: Calendar.WorkingdaysRequest, options?: RequestOptions): ApiPromise&lt;V1WorkingdaysResponse, Calendar.WorkingdaysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Working Days is a simple tool for getting the number of working days in a month. It returns the number of working days in the given month.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calendar.workingdays({ country: "US", month: 10, year: 2026 });
  // TODO: Handle 'response' of type V1WorkingdaysResponse
} catch (err) {
  // TODO: Handle 'err' of type Calendar.WorkingdaysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calendar.workingdays({ country: "US", month: 10, year: 2026 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WorkingdaysResponse
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
| <code>country</code> | <code>string</code> | The 2-letter country code you want to get the number of working days for |
| <code>month?</code> | <code>number</code> | The month you want to get the number of working days for |
| <code>year?</code> | <code>number</code> | The year you want to get the number of working days for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calendar.workingdays(request)`

- **OnSuccess**: <code>[V1WorkingdaysResponse](src/models/v1-workingdays-response.ts)</code>
- **OnError**: throws <code>[Calendar.WorkingdaysError](src/resources/calendar.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calendar.workingdays(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WorkingdaysResponse, Calendar.WorkingdaysError&gt;</code>, with `result.value` of type <code>[V1WorkingdaysResponse](src/models/v1-workingdays-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>worldholidays(request: Calendar.WorldholidaysRequest, options?: RequestOptions): ApiPromise&lt;V1WorldholidaysResponse, Calendar.WorldholidaysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the holidays of a country for a given year

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calendar.worldholidays({ country: "US", year: 2026 });
  // TODO: Handle 'response' of type V1WorldholidaysResponse
} catch (err) {
  // TODO: Handle 'err' of type Calendar.WorldholidaysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calendar.worldholidays({ country: "US", year: 2026 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WorldholidaysResponse
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
| <code>country</code> | <code>string</code> | The 2-letter country code for which you want to get the holidays |
| <code>year?</code> | <code>number</code> | The year for which you want to get the holidays |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calendar.worldholidays(request)`

- **OnSuccess**: <code>[V1WorldholidaysResponse](src/models/v1-worldholidays-response.ts)</code>
- **OnError**: throws <code>[Calendar.WorldholidaysError](src/resources/calendar.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calendar.worldholidays(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WorldholidaysResponse, Calendar.WorldholidaysError&gt;</code>, with `result.value` of type <code>[V1WorldholidaysResponse](src/models/v1-worldholidays-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataConversion

> Source: [DataConversion](src/resources/data-conversion.ts)

<details>
<summary><code>ascii85Encoder(request: DataConversion.Ascii85EncoderRequest, options?: RequestOptions): ApiPromise&lt;V1Ascii85EncoderResponse, DataConversion.Ascii85EncoderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode text using ASCII85 (Base85) encoding

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.ascii85Encoder({
    text: "Hello World",
    action: "encode",
    format: "standard",
  });
  // TODO: Handle 'response' of type V1Ascii85EncoderResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.Ascii85EncoderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .ascii85Encoder({ text: "Hello World", action: "encode", format: "standard" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1Ascii85EncoderResponse
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
| <code>text</code> | <code>string</code> | Text to encode |
| <code>action?</code> | <code>string</code> | Action to perform |
| <code>format?</code> | <code>string</code> | Output format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.ascii85Encoder(request)`

- **OnSuccess**: <code>[V1Ascii85EncoderResponse](src/models/v1-ascii85-encoder-response.ts)</code>
- **OnError**: throws <code>[DataConversion.Ascii85EncoderError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.ascii85Encoder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1Ascii85EncoderResponse, DataConversion.Ascii85EncoderError&gt;</code>, with `result.value` of type <code>[V1Ascii85EncoderResponse](src/models/v1-ascii85-encoder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>base64(request: DataConversion.Base64Request, options?: RequestOptions): ApiPromise&lt;V1Base64Response, DataConversion.Base64Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode text to Base64 format

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.base64({ text: "Hello World", action: "encode" });
  // TODO: Handle 'response' of type V1Base64Response
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.Base64Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.base64({ text: "Hello World", action: "encode" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1Base64Response
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
| <code>text</code> | <code>string</code> | The text to encode |
| <code>action?</code> | <code>string</code> | The action to perform |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.base64(request)`

- **OnSuccess**: <code>[V1Base64Response](src/models/v1-base64-response.ts)</code>
- **OnError**: throws <code>[DataConversion.Base64Error](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.base64(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1Base64Response, DataConversion.Base64Error&gt;</code>, with `result.value` of type <code>[V1Base64Response](src/models/v1-base64-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>colorconverter(request: DataConversion.ColorconverterRequest, options?: RequestOptions): ApiPromise&lt;V1ColorconverterResponse, DataConversion.ColorconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a color to a different format

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.colorconverter({ hex: "FF0000" });
  // TODO: Handle 'response' of type V1ColorconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.ColorconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.colorconverter({ hex: "FF0000" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ColorconverterResponse
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
| <code>hex</code> | <code>string</code> | The color in hexadecimal format (e.g., FF0000). Make sure you ommit the # |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.colorconverter(request)`

- **OnSuccess**: <code>[V1ColorconverterResponse](src/models/v1-colorconverter-response.ts)</code>
- **OnError**: throws <code>[DataConversion.ColorconverterError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.colorconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ColorconverterResponse, DataConversion.ColorconverterError&gt;</code>, with `result.value` of type <code>[V1ColorconverterResponse](src/models/v1-colorconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>csvtojson(request: DataConversion.CsvtojsonRequest, options?: RequestOptions): ApiPromise&lt;V1CsvtojsonResponse, DataConversion.CsvtojsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert CSV data to JSON format with custom delimiter support

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.csvtojson({ body: { csv: "some example string" } });
  // TODO: Handle 'response' of type V1CsvtojsonResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.CsvtojsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.csvtojson({ body: { csv: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CsvtojsonResponse
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
| <code>body</code> | <code>[V1CsvtojsonRequest](src/models/v1-csvtojson-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.csvtojson(request)`

- **OnSuccess**: <code>[V1CsvtojsonResponse](src/models/v1-csvtojson-response.ts)</code>
- **OnError**: throws <code>[DataConversion.CsvtojsonError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.csvtojson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CsvtojsonResponse, DataConversion.CsvtojsonError&gt;</code>, with `result.value` of type <code>[V1CsvtojsonResponse](src/models/v1-csvtojson-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesizeformatter(request: DataConversion.FilesizeformatterRequest, options?: RequestOptions): ApiPromise&lt;V1FilesizeformatterResponse, DataConversion.FilesizeformatterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert bytes to human-readable file size

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.filesizeformatter({
    bytes: 1073741824,
    unit: "GB",
    precision: 2,
    standard: "binary",
  });
  // TODO: Handle 'response' of type V1FilesizeformatterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.FilesizeformatterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .filesizeformatter({ bytes: 1073741824, unit: "GB", precision: 2, standard: "binary" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FilesizeformatterResponse
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
| <code>bytes</code> | <code>number</code> | Number of bytes to format |
| <code>unit?</code> | <code>string</code> | Specific target unit (optional, auto-selects best unit if not specified) |
| <code>precision?</code> | <code>number</code> | Decimal places (0-10) |
| <code>standard?</code> | <code>string</code> | Standard to use: binary (1024) or decimal (1000) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.filesizeformatter(request)`

- **OnSuccess**: <code>[V1FilesizeformatterResponse](src/models/v1-filesizeformatter-response.ts)</code>
- **OnError**: throws <code>[DataConversion.FilesizeformatterError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.filesizeformatter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FilesizeformatterResponse, DataConversion.FilesizeformatterError&gt;</code>, with `result.value` of type <code>[V1FilesizeformatterResponse](src/models/v1-filesizeformatter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>htmlentities(request: DataConversion.HtmlentitiesRequest, options?: RequestOptions): ApiPromise&lt;V1HtmlentitiesResponse, DataConversion.HtmlentitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode HTML special characters to entities for XSS prevention

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.htmlentities({ body: { html: "some example string" } });
  // TODO: Handle 'response' of type V1HtmlentitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.HtmlentitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .htmlentities({ body: { html: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HtmlentitiesResponse
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
| <code>body</code> | <code>[V1HtmlentitiesRequest](src/models/v1-htmlentities-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.htmlentities(request)`

- **OnSuccess**: <code>[V1HtmlentitiesResponse](src/models/v1-htmlentities-response.ts)</code>
- **OnError**: throws <code>[DataConversion.HtmlentitiesError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.htmlentities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HtmlentitiesResponse, DataConversion.HtmlentitiesError&gt;</code>, with `result.value` of type <code>[V1HtmlentitiesResponse](src/models/v1-htmlentities-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>htmltoimage(request: DataConversion.HtmltoimageRequest, options?: RequestOptions): ApiPromise&lt;V1HtmltoimageResponse, DataConversion.HtmltoimageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert HTML code to image with customizable dimensions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.htmltoimage({ body: { html: "some example string" } });
  // TODO: Handle 'response' of type V1HtmltoimageResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.HtmltoimageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .htmltoimage({ body: { html: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HtmltoimageResponse
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
| <code>body</code> | <code>[V1HtmltoimageRequest](src/models/v1-htmltoimage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.htmltoimage(request)`

- **OnSuccess**: <code>[V1HtmltoimageResponse](src/models/v1-htmltoimage-response.ts)</code>
- **OnError**: throws <code>[DataConversion.HtmltoimageError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.htmltoimage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HtmltoimageResponse, DataConversion.HtmltoimageError&gt;</code>, with `result.value` of type <code>[V1HtmltoimageResponse](src/models/v1-htmltoimage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jsontocsv(request: DataConversion.JsontocsvRequest, options?: RequestOptions): ApiPromise&lt;V1JsontocsvResponse, DataConversion.JsontocsvError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert JSON array data to CSV format

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.jsontocsv({ body: { json: "some example string" } });
  // TODO: Handle 'response' of type V1JsontocsvResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.JsontocsvError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.jsontocsv({ body: { json: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JsontocsvResponse
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
| <code>body</code> | <code>[V1JsontocsvRequest](src/models/v1-jsontocsv-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.jsontocsv(request)`

- **OnSuccess**: <code>[V1JsontocsvResponse](src/models/v1-jsontocsv-response.ts)</code>
- **OnError**: throws <code>[DataConversion.JsontocsvError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.jsontocsv(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JsontocsvResponse, DataConversion.JsontocsvError&gt;</code>, with `result.value` of type <code>[V1JsontocsvResponse](src/models/v1-jsontocsv-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jsontojsonp(request: DataConversion.JsontojsonpRequest, options?: RequestOptions): ApiPromise&lt;V1JsontojsonpResponse, DataConversion.JsontojsonpError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.jsontojsonp({ body: { json: "some example string" } });
  // TODO: Handle 'response' of type V1JsontojsonpResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.JsontojsonpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .jsontojsonp({ body: { json: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JsontojsonpResponse
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
| <code>body</code> | <code>[V1JsontojsonpRequest](src/models/v1-jsontojsonp-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.jsontojsonp(request)`

- **OnSuccess**: <code>[V1JsontojsonpResponse](src/models/v1-jsontojsonp-response.ts)</code>
- **OnError**: throws <code>[DataConversion.JsontojsonpError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.jsontojsonp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JsontojsonpResponse, DataConversion.JsontojsonpError&gt;</code>, with `result.value` of type <code>[V1JsontojsonpResponse](src/models/v1-jsontojsonp-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jwtdecoder(request: DataConversion.JwtdecoderRequest, options?: RequestOptions): ApiPromise&lt;V1JwtdecoderResponse, DataConversion.JwtdecoderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode JWT token without verification

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.jwtdecoder({ body: { token: "some example string" } });
  // TODO: Handle 'response' of type V1JwtdecoderResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.JwtdecoderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .jwtdecoder({ body: { token: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JwtdecoderResponse
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
| <code>body</code> | <code>[V1JwtdecoderRequest](src/models/v1-jwtdecoder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.jwtdecoder(request)`

- **OnSuccess**: <code>[V1JwtdecoderResponse](src/models/v1-jwtdecoder-response.ts)</code>
- **OnError**: throws <code>[DataConversion.JwtdecoderError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.jwtdecoder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JwtdecoderResponse, DataConversion.JwtdecoderError&gt;</code>, with `result.value` of type <code>[V1JwtdecoderResponse](src/models/v1-jwtdecoder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>markdowntable(request: DataConversion.MarkdowntableRequest, options?: RequestOptions): ApiPromise&lt;V1MarkdowntableResponse, DataConversion.MarkdowntableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert data to a formatted markdown table

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.markdowntable({
    body: { headers: "some example string", rows: "some example string" },
  });
  // TODO: Handle 'response' of type V1MarkdowntableResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.MarkdowntableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .markdowntable({ body: { headers: "some example string", rows: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MarkdowntableResponse
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
| <code>body</code> | <code>[V1MarkdowntableRequest](src/models/v1-markdowntable-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.markdowntable(request)`

- **OnSuccess**: <code>[V1MarkdowntableResponse](src/models/v1-markdowntable-response.ts)</code>
- **OnError**: throws <code>[DataConversion.MarkdowntableError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.markdowntable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MarkdowntableResponse, DataConversion.MarkdowntableError&gt;</code>, with `result.value` of type <code>[V1MarkdowntableResponse](src/models/v1-markdowntable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>markdowntohtml(request: DataConversion.MarkdowntohtmlRequest, options?: RequestOptions): ApiPromise&lt;V1MarkdowntohtmlResponse, DataConversion.MarkdowntohtmlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert markdown text to HTML

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.markdowntohtml({ body: { markdown: "some example string" } });
  // TODO: Handle 'response' of type V1MarkdowntohtmlResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.MarkdowntohtmlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .markdowntohtml({ body: { markdown: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MarkdowntohtmlResponse
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
| <code>body</code> | <code>[V1MarkdowntohtmlRequest](src/models/v1-markdowntohtml-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.markdowntohtml(request)`

- **OnSuccess**: <code>[V1MarkdowntohtmlResponse](src/models/v1-markdowntohtml-response.ts)</code>
- **OnError**: throws <code>[DataConversion.MarkdowntohtmlError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.markdowntohtml(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MarkdowntohtmlResponse, DataConversion.MarkdowntohtmlError&gt;</code>, with `result.value` of type <code>[V1MarkdowntohtmlResponse](src/models/v1-markdowntohtml-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>markdowntoimage(request: DataConversion.MarkdowntoimageRequest, options?: RequestOptions): ApiPromise&lt;V1MarkdowntoimageResponse, DataConversion.MarkdowntoimageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert markdown text to image file

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.markdowntoimage({ body: { markdown: "some example string" } });
  // TODO: Handle 'response' of type V1MarkdowntoimageResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.MarkdowntoimageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .markdowntoimage({ body: { markdown: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MarkdowntoimageResponse
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
| <code>body</code> | <code>[V1MarkdowntoimageRequest](src/models/v1-markdowntoimage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.markdowntoimage(request)`

- **OnSuccess**: <code>[V1MarkdowntoimageResponse](src/models/v1-markdowntoimage-response.ts)</code>
- **OnError**: throws <code>[DataConversion.MarkdowntoimageError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.markdowntoimage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MarkdowntoimageResponse, DataConversion.MarkdowntoimageError&gt;</code>, with `result.value` of type <code>[V1MarkdowntoimageResponse](src/models/v1-markdowntoimage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>markdowntopdf(request: DataConversion.MarkdowntopdfRequest, options?: RequestOptions): ApiPromise&lt;V1MarkdowntopdfResponse, DataConversion.MarkdowntopdfError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert markdown text to PDF document

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.markdowntopdf({ body: { markdown: "some example string" } });
  // TODO: Handle 'response' of type V1MarkdowntopdfResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.MarkdowntopdfError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .markdowntopdf({ body: { markdown: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MarkdowntopdfResponse
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
| <code>body</code> | <code>[V1MarkdowntopdfRequest](src/models/v1-markdowntopdf-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.markdowntopdf(request)`

- **OnSuccess**: <code>[V1MarkdowntopdfResponse](src/models/v1-markdowntopdf-response.ts)</code>
- **OnError**: throws <code>[DataConversion.MarkdowntopdfError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.markdowntopdf(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MarkdowntopdfResponse, DataConversion.MarkdowntopdfError&gt;</code>, with `result.value` of type <code>[V1MarkdowntopdfResponse](src/models/v1-markdowntopdf-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>math(request: DataConversion.MathRequest, options?: RequestOptions): ApiPromise&lt;V1MathResponse, DataConversion.MathError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform basic math operations: add, subtract, multiply, divide, power, modulo

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.math({
    body: { operation: "some example string", a: 1.5, b: 1.5 },
  });
  // TODO: Handle 'response' of type V1MathResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.MathError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .math({ body: { operation: "some example string", a: 1.5, b: 1.5 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MathResponse
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
| <code>body</code> | <code>[V1MathRequest](src/models/v1-math-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.math(request)`

- **OnSuccess**: <code>[V1MathResponse](src/models/v1-math-response.ts)</code>
- **OnError**: throws <code>[DataConversion.MathError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.math(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MathResponse, DataConversion.MathError&gt;</code>, with `result.value` of type <code>[V1MathResponse](src/models/v1-math-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>meetingtimeconverter(request: DataConversion.MeetingtimeconverterRequest, options?: RequestOptions): ApiPromise&lt;V1MeetingtimeconverterResponse, DataConversion.MeetingtimeconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert meeting time between timezones

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.meetingtimeconverter({
    time: "14:30",
    fromTimezone: "America/New_York",
    toTimezone: "Europe/London",
    date: "2024-03-15",
  });
  // TODO: Handle 'response' of type V1MeetingtimeconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.MeetingtimeconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .meetingtimeconverter({
    time: "14:30",
    fromTimezone: "America/New_York",
    toTimezone: "Europe/London",
    date: "2024-03-15",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MeetingtimeconverterResponse
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
| <code>time</code> | <code>string</code> | Time in HH:MM format (24-hour) |
| <code>fromTimezone</code> | <code>string</code> | Source IANA timezone identifier |
| <code>toTimezone</code> | <code>string</code> | Target IANA timezone identifier |
| <code>date?</code> | <code>string</code> | Optional date in YYYY-MM-DD format (defaults to today) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.meetingtimeconverter(request)`

- **OnSuccess**: <code>[V1MeetingtimeconverterResponse](src/models/v1-meetingtimeconverter-response.ts)</code>
- **OnError**: throws <code>[DataConversion.MeetingtimeconverterError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.meetingtimeconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MeetingtimeconverterResponse, DataConversion.MeetingtimeconverterError&gt;</code>, with `result.value` of type <code>[V1MeetingtimeconverterResponse](src/models/v1-meetingtimeconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numberbaseconverter(request: DataConversion.NumberbaseconverterRequest, options?: RequestOptions): ApiPromise&lt;V1NumberbaseconverterResponse, DataConversion.NumberbaseconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a number from one base to another

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.numberbaseconverter({ value: "255", from: 10, to: 10 });
  // TODO: Handle 'response' of type V1NumberbaseconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.NumberbaseconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .numberbaseconverter({ value: "255", from: 10, to: 10 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NumberbaseconverterResponse
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
| <code>value</code> | <code>string</code> | The number to convert |
| <code>from?</code> | <code>number</code> | Source base (default: 10) |
| <code>to?</code> | <code>number</code> | Target base (returns all common bases if not specified) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.numberbaseconverter(request)`

- **OnSuccess**: <code>[V1NumberbaseconverterResponse](src/models/v1-numberbaseconverter-response.ts)</code>
- **OnError**: throws <code>[DataConversion.NumberbaseconverterError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.numberbaseconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NumberbaseconverterResponse, DataConversion.NumberbaseconverterError&gt;</code>, with `result.value` of type <code>[V1NumberbaseconverterResponse](src/models/v1-numberbaseconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>numbertowords(request: DataConversion.NumbertowordsRequest, options?: RequestOptions): ApiPromise&lt;V1NumbertowordsResponse, DataConversion.NumbertowordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a number to words, including each word and the orginal equivalent

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.numbertowords({ number: 975.07 });
  // TODO: Handle 'response' of type V1NumbertowordsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.NumbertowordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.numbertowords({ number: 975.07 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NumbertowordsResponse
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
| <code>number</code> | <code>number</code> | The number to convert to words |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.numbertowords(request)`

- **OnSuccess**: <code>[V1NumbertowordsResponse](src/models/v1-numbertowords-response.ts)</code>
- **OnError**: throws <code>[DataConversion.NumbertowordsError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.numbertowords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NumbertowordsResponse, DataConversion.NumbertowordsError&gt;</code>, with `result.value` of type <code>[V1NumbertowordsResponse](src/models/v1-numbertowords-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>placeholdertext(request?: DataConversion.PlaceholdertextRequest, options?: RequestOptions): ApiPromise&lt;V1PlaceholdertextResponse, DataConversion.PlaceholdertextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate placeholder text in various styles

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.placeholdertext({
    style: "tech",
    paragraphs: 3,
    sentences: 5,
  });
  // TODO: Handle 'response' of type V1PlaceholdertextResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.PlaceholdertextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .placeholdertext({ style: "tech", paragraphs: 3, sentences: 5 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PlaceholdertextResponse
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
| <code>style?</code> | <code>string</code> | The style of placeholder text |
| <code>paragraphs?</code> | <code>number</code> | Number of paragraphs to generate |
| <code>sentences?</code> | <code>number</code> | Number of sentences per paragraph |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.placeholdertext(request)`

- **OnSuccess**: <code>[V1PlaceholdertextResponse](src/models/v1-placeholdertext-response.ts)</code>
- **OnError**: throws <code>[DataConversion.PlaceholdertextError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.placeholdertext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PlaceholdertextResponse, DataConversion.PlaceholdertextError&gt;</code>, with `result.value` of type <code>[V1PlaceholdertextResponse](src/models/v1-placeholdertext-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>punycode(request: DataConversion.PunycodeRequest, options?: RequestOptions): ApiPromise&lt;V1PunycodeResponse, DataConversion.PunycodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode Unicode text to Punycode (ASCII-compatible encoding)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.punycode({ text: "münchen.de", mode: "encode" });
  // TODO: Handle 'response' of type V1PunycodeResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.PunycodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.punycode({ text: "münchen.de", mode: "encode" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PunycodeResponse
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
| <code>text</code> | <code>string</code> | Unicode text or domain to encode (max 1000 characters) |
| <code>mode?</code> | <code>string</code> | Conversion mode |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.punycode(request)`

- **OnSuccess**: <code>[V1PunycodeResponse](src/models/v1-punycode-response.ts)</code>
- **OnError**: throws <code>[DataConversion.PunycodeError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.punycode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PunycodeResponse, DataConversion.PunycodeError&gt;</code>, with `result.value` of type <code>[V1PunycodeResponse](src/models/v1-punycode-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>querystringbuilder(request: DataConversion.QuerystringbuilderRequest, options?: RequestOptions): ApiPromise&lt;V1QuerystringbuilderResponse, DataConversion.QuerystringbuilderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Build URL query string from JSON parameters

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.querystringbuilder({
    body: { params: "some example string" },
  });
  // TODO: Handle 'response' of type V1QuerystringbuilderResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.QuerystringbuilderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .querystringbuilder({ body: { params: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1QuerystringbuilderResponse
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
| <code>body</code> | <code>[V1QuerystringbuilderRequest](src/models/v1-querystringbuilder-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.querystringbuilder(request)`

- **OnSuccess**: <code>[V1QuerystringbuilderResponse](src/models/v1-querystringbuilder-response.ts)</code>
- **OnError**: throws <code>[DataConversion.QuerystringbuilderError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.querystringbuilder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1QuerystringbuilderResponse, DataConversion.QuerystringbuilderError&gt;</code>, with `result.value` of type <code>[V1QuerystringbuilderResponse](src/models/v1-querystringbuilder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>relativetimeformatter(request: DataConversion.RelativetimeformatterRequest, options?: RequestOptions): ApiPromise&lt;V1RelativetimeformatterResponse, DataConversion.RelativetimeformatterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert Unix timestamp to relative time format

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.relativetimeformatter({
    timestamp: "1609459200",
    reference: "2024-06-01T00:00:00Z",
    style: "short",
  });
  // TODO: Handle 'response' of type V1RelativetimeformatterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.RelativetimeformatterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .relativetimeformatter({ timestamp: "1609459200", reference: "2024-06-01T00:00:00Z", style: "short" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RelativetimeformatterResponse
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
| <code>timestamp</code> | <code>string</code> | Unix timestamp in seconds or milliseconds |
| <code>reference?</code> | <code>string</code> | Reference time to compare against (default: current time) |
| <code>style?</code> | <code>string</code> | Output style |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.relativetimeformatter(request)`

- **OnSuccess**: <code>[V1RelativetimeformatterResponse](src/models/v1-relativetimeformatter-response.ts)</code>
- **OnError**: throws <code>[DataConversion.RelativetimeformatterError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.relativetimeformatter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RelativetimeformatterResponse, DataConversion.RelativetimeformatterError&gt;</code>, with `result.value` of type <code>[V1RelativetimeformatterResponse](src/models/v1-relativetimeformatter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>romanconverter(request: DataConversion.RomanconverterRequest, options?: RequestOptions): ApiPromise&lt;V1RomanconverterResponse, DataConversion.RomanconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a number to Roman numerals

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.romanconverter({ number: 2024 });
  // TODO: Handle 'response' of type V1RomanconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.RomanconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.romanconverter({ number: 2024 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RomanconverterResponse
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
| <code>number</code> | <code>number</code> | The number to convert to Roman numerals |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.romanconverter(request)`

- **OnSuccess**: <code>[V1RomanconverterResponse](src/models/v1-romanconverter-response.ts)</code>
- **OnError**: throws <code>[DataConversion.RomanconverterError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.romanconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RomanconverterResponse, DataConversion.RomanconverterError&gt;</code>, with `result.value` of type <code>[V1RomanconverterResponse](src/models/v1-romanconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>texttocolor(request: DataConversion.TexttocolorRequest, options?: RequestOptions): ApiPromise&lt;V1TexttocolorResponse, DataConversion.TexttocolorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a color from text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.texttocolor({ color: "turquoise" });
  // TODO: Handle 'response' of type V1TexttocolorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.TexttocolorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.texttocolor({ color: "turquoise" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TexttocolorResponse
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
| <code>color</code> | <code>string</code> | The text to convert the color from |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.texttocolor(request)`

- **OnSuccess**: <code>[V1TexttocolorResponse](src/models/v1-texttocolor-response.ts)</code>
- **OnError**: throws <code>[DataConversion.TexttocolorError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.texttocolor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TexttocolorResponse, DataConversion.TexttocolorError&gt;</code>, with `result.value` of type <code>[V1TexttocolorResponse](src/models/v1-texttocolor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unicodeescape(request: DataConversion.UnicodeescapeRequest, options?: RequestOptions): ApiPromise&lt;V1UnicodeescapeResponse, DataConversion.UnicodeescapeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert characters to Unicode escape sequences (\uXXXX format)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.unicodeescape({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1UnicodeescapeResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.UnicodeescapeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .unicodeescape({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UnicodeescapeResponse
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
| <code>body</code> | <code>[V1UnicodeescapeRequest](src/models/v1-unicodeescape-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.unicodeescape(request)`

- **OnSuccess**: <code>[V1UnicodeescapeResponse](src/models/v1-unicodeescape-response.ts)</code>
- **OnError**: throws <code>[DataConversion.UnicodeescapeError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.unicodeescape(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UnicodeescapeResponse, DataConversion.UnicodeescapeError&gt;</code>, with `result.value` of type <code>[V1UnicodeescapeResponse](src/models/v1-unicodeescape-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unitconverter(request: DataConversion.UnitconverterRequest, options?: RequestOptions): ApiPromise&lt;V1UnitconverterResponse, DataConversion.UnitconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert units from one to another

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.unitconverter({ value: 100, from: "lb", to: "kg" });
  // TODO: Handle 'response' of type V1UnitconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.UnitconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.unitconverter({ value: 100, from: "lb", to: "kg" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UnitconverterResponse
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
| <code>value</code> | <code>number</code> | The value to convert |
| <code>from</code> | <code>string</code> | The unit to convert from |
| <code>to</code> | <code>string</code> | The unit to convert to |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.unitconverter(request)`

- **OnSuccess**: <code>[V1UnitconverterResponse](src/models/v1-unitconverter-response.ts)</code>
- **OnError**: throws <code>[DataConversion.UnitconverterError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.unitconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UnitconverterResponse, DataConversion.UnitconverterError&gt;</code>, with `result.value` of type <code>[V1UnitconverterResponse](src/models/v1-unitconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unixtimestamp(request: DataConversion.UnixtimestampRequest, options?: RequestOptions): ApiPromise&lt;V1UnixtimestampResponse, DataConversion.UnixtimestampError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert Unix timestamp to human-readable date

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.unixtimestamp({ timestamp: "1609459200", format: "seconds" });
  // TODO: Handle 'response' of type V1UnixtimestampResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.UnixtimestampError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .unixtimestamp({ timestamp: "1609459200", format: "seconds" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UnixtimestampResponse
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
| <code>timestamp</code> | <code>string</code> | Unix timestamp to convert |
| <code>format?</code> | <code>string</code> | Timestamp format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.unixtimestamp(request)`

- **OnSuccess**: <code>[V1UnixtimestampResponse](src/models/v1-unixtimestamp-response.ts)</code>
- **OnError**: throws <code>[DataConversion.UnixtimestampError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.unixtimestamp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UnixtimestampResponse, DataConversion.UnixtimestampError&gt;</code>, with `result.value` of type <code>[V1UnixtimestampResponse](src/models/v1-unixtimestamp-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>urlencode(request: DataConversion.UrlencodeRequest, options?: RequestOptions): ApiPromise&lt;V1UrlencodeResponse, DataConversion.UrlencodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Encode text to URL-safe format (percent-encoding)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.urlencode({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1UrlencodeResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.UrlencodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.urlencode({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UrlencodeResponse
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
| <code>body</code> | <code>[V1UrlencodeRequest](src/models/v1-urlencode-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.urlencode(request)`

- **OnSuccess**: <code>[V1UrlencodeResponse](src/models/v1-urlencode-response.ts)</code>
- **OnError**: throws <code>[DataConversion.UrlencodeError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.urlencode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UrlencodeResponse, DataConversion.UrlencodeError&gt;</code>, with `result.value` of type <code>[V1UrlencodeResponse](src/models/v1-urlencode-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>urltomarkdown(request: DataConversion.UrltomarkdownRequest, options?: RequestOptions): ApiPromise&lt;V1UrltomarkdownResponse, DataConversion.UrltomarkdownError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a webpage URL to Markdown format

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.urltomarkdown({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1UrltomarkdownResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.UrltomarkdownError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .urltomarkdown({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UrltomarkdownResponse
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
| <code>body</code> | <code>[V1UrltomarkdownRequest](src/models/v1-urltomarkdown-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.urltomarkdown(request)`

- **OnSuccess**: <code>[V1UrltomarkdownResponse](src/models/v1-urltomarkdown-response.ts)</code>
- **OnError**: throws <code>[DataConversion.UrltomarkdownError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.urltomarkdown(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UrltomarkdownResponse, DataConversion.UrltomarkdownError&gt;</code>, with `result.value` of type <code>[V1UrltomarkdownResponse](src/models/v1-urltomarkdown-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variablenameconverter(request: DataConversion.VariablenameconverterRequest, options?: RequestOptions): ApiPromise&lt;V1VariablenameconverterResponse, DataConversion.VariablenameconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert variable names between naming conventions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.variablenameconverter({
    body: { variables: "some example string", to: "some example string" },
  });
  // TODO: Handle 'response' of type V1VariablenameconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.VariablenameconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .variablenameconverter({ body: { variables: "some example string", to: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1VariablenameconverterResponse
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
| <code>body</code> | <code>[V1VariablenameconverterRequest](src/models/v1-variablenameconverter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.variablenameconverter(request)`

- **OnSuccess**: <code>[V1VariablenameconverterResponse](src/models/v1-variablenameconverter-response.ts)</code>
- **OnError**: throws <code>[DataConversion.VariablenameconverterError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.variablenameconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1VariablenameconverterResponse, DataConversion.VariablenameconverterError&gt;</code>, with `result.value` of type <code>[V1VariablenameconverterResponse](src/models/v1-variablenameconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>websitetotext(request: DataConversion.WebsitetotextRequest, options?: RequestOptions): ApiPromise&lt;V1WebsitetotextResponse, DataConversion.WebsitetotextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a given webiste content to simple text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.websitetotext({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1WebsitetotextResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.WebsitetotextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .websitetotext({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebsitetotextResponse
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
| <code>body</code> | <code>[V1WebsitetotextRequest](src/models/v1-websitetotext-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.websitetotext(request)`

- **OnSuccess**: <code>[V1WebsitetotextResponse](src/models/v1-websitetotext-response.ts)</code>
- **OnError**: throws <code>[DataConversion.WebsitetotextError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.websitetotext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebsitetotextResponse, DataConversion.WebsitetotextError&gt;</code>, with `result.value` of type <code>[V1WebsitetotextResponse](src/models/v1-websitetotext-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wordstonumbers(request: DataConversion.WordstonumbersRequest, options?: RequestOptions): ApiPromise&lt;V1WordstonumbersResponse, DataConversion.WordstonumbersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert words to numbers, including each word and the orginal equivalent

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.wordstonumbers({
    words: "seven thousand six hundred and twenty",
  });
  // TODO: Handle 'response' of type V1WordstonumbersResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.WordstonumbersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion
  .wordstonumbers({ words: "seven thousand six hundred and twenty" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WordstonumbersResponse
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
| <code>words</code> | <code>string</code> | The words to convert to numbers |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.wordstonumbers(request)`

- **OnSuccess**: <code>[V1WordstonumbersResponse](src/models/v1-wordstonumbers-response.ts)</code>
- **OnError**: throws <code>[DataConversion.WordstonumbersError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.wordstonumbers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WordstonumbersResponse, DataConversion.WordstonumbersError&gt;</code>, with `result.value` of type <code>[V1WordstonumbersResponse](src/models/v1-wordstonumbers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>xmltojson(request: DataConversion.XmltojsonRequest, options?: RequestOptions): ApiPromise&lt;V1XmltojsonResponse, DataConversion.XmltojsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert XML to JSON

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataConversion.xmltojson({ body: { xml: "some example string" } });
  // TODO: Handle 'response' of type V1XmltojsonResponse
} catch (err) {
  // TODO: Handle 'err' of type DataConversion.XmltojsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataConversion.xmltojson({ body: { xml: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1XmltojsonResponse
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
| <code>body</code> | <code>[V1XmltojsonRequest](src/models/v1-xmltojson-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataConversion.xmltojson(request)`

- **OnSuccess**: <code>[V1XmltojsonResponse](src/models/v1-xmltojson-response.ts)</code>
- **OnError**: throws <code>[DataConversion.XmltojsonError](src/resources/data-conversion.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataConversion.xmltojson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1XmltojsonResponse, DataConversion.XmltojsonError&gt;</code>, with `result.value` of type <code>[V1XmltojsonResponse](src/models/v1-xmltojson-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataGeneration

> Source: [DataGeneration](src/resources/data-generation.ts)

<details>
<summary><code>acronymgenerator(request: DataGeneration.AcronymgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1AcronymgeneratorResponse, DataGeneration.AcronymgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an acronym from a phrase by extracting the first letter of each word

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.acronymgenerator({
    text: "Application Programming Interface",
  });
  // TODO: Handle 'response' of type V1AcronymgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.AcronymgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .acronymgenerator({ text: "Application Programming Interface" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AcronymgeneratorResponse
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
| <code>text</code> | <code>string</code> | The phrase to generate an acronym from (must contain at least 2 words) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.acronymgenerator(request)`

- **OnSuccess**: <code>[V1AcronymgeneratorResponse](src/models/v1-acronymgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.AcronymgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.acronymgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AcronymgeneratorResponse, DataGeneration.AcronymgeneratorError&gt;</code>, with `result.value` of type <code>[V1AcronymgeneratorResponse](src/models/v1-acronymgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>babynamegenerator(request: DataGeneration.BabynamegeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1BabynamegeneratorResponse, DataGeneration.BabynamegeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a baby's first and middle name, based on the provided gender

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.babynamegenerator({
    gender: "male",
    count: 1,
    includeAvatar: true,
  });
  // TODO: Handle 'response' of type V1BabynamegeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.BabynamegeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .babynamegenerator({ gender: "male", count: 1, includeAvatar: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BabynamegeneratorResponse
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
| <code>gender</code> | <code>string</code> | The gender for the generated names |
| <code>count?</code> | <code>number</code> | The number of names to generate |
| <code>includeAvatar?</code> | <code>boolean</code> | Include an AI-generated child face avatar matching gender |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.babynamegenerator(request)`

- **OnSuccess**: <code>[V1BabynamegeneratorResponse](src/models/v1-babynamegenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.BabynamegeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.babynamegenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BabynamegeneratorResponse, DataGeneration.BabynamegeneratorError&gt;</code>, with `result.value` of type <code>[V1BabynamegeneratorResponse](src/models/v1-babynamegenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>barcodegenerator(request: DataGeneration.BarcodegeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1BarcodegeneratorResponse, DataGeneration.BarcodegeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Barcode Generator is a simple tool for generating barcodes from data. It returns a URL to the generated image of the barcode.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.barcodegenerator({
    body: { data: "some example string", type: "some example string" },
  });
  // TODO: Handle 'response' of type V1BarcodegeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.BarcodegeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .barcodegenerator({ body: { data: "some example string", type: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BarcodegeneratorResponse
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
| <code>body</code> | <code>[V1BarcodegeneratorRequest](src/models/v1-barcodegenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.barcodegenerator(request)`

- **OnSuccess**: <code>[V1BarcodegeneratorResponse](src/models/v1-barcodegenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.BarcodegeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.barcodegenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BarcodegeneratorResponse, DataGeneration.BarcodegeneratorError&gt;</code>, with `result.value` of type <code>[V1BarcodegeneratorResponse](src/models/v1-barcodegenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bingocardgenerator(request?: DataGeneration.BingocardgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1BingocardgeneratorResponse, DataGeneration.BingocardgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random bingo card with HTML and image

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.bingocardgenerator({ size: 5, freeSpace: true, image: true });
  // TODO: Handle 'response' of type V1BingocardgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.BingocardgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .bingocardgenerator({ size: 5, freeSpace: true, image: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BingocardgeneratorResponse
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
| <code>size?</code> | <code>number</code> | Card size (3x3 to 10x10) |
| <code>freeSpace?</code> | <code>boolean</code> | Include free space in center |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable bingo card image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.bingocardgenerator(request)`

- **OnSuccess**: <code>[V1BingocardgeneratorResponse](src/models/v1-bingocardgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.BingocardgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.bingocardgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BingocardgeneratorResponse, DataGeneration.BingocardgeneratorError&gt;</code>, with `result.value` of type <code>[V1BingocardgeneratorResponse](src/models/v1-bingocardgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>boggleboardgenerator(request?: DataGeneration.BoggleboardgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1BoggleboardgeneratorResponse, DataGeneration.BoggleboardgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random Boggle board with HTML and image

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.boggleboardgenerator({ size: 4, image: true });
  // TODO: Handle 'response' of type V1BoggleboardgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.BoggleboardgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.boggleboardgenerator({ size: 4, image: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BoggleboardgeneratorResponse
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
| <code>size?</code> | <code>number</code> | Board size |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable board image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.boggleboardgenerator(request)`

- **OnSuccess**: <code>[V1BoggleboardgeneratorResponse](src/models/v1-boggleboardgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.BoggleboardgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.boggleboardgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BoggleboardgeneratorResponse, DataGeneration.BoggleboardgeneratorError&gt;</code>, with `result.value` of type <code>[V1BoggleboardgeneratorResponse](src/models/v1-boggleboardgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>captchagenerator(options?: RequestOptions): ApiPromise&lt;V1CaptchageneratorResponse, DataGeneration.CaptchageneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Captcha Generator is a simple tool for generating captchas. It returns a random string of characters that can be used as a captcha.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.captchagenerator();
  // TODO: Handle 'response' of type V1CaptchageneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.CaptchageneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.captchagenerator().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CaptchageneratorResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.captchagenerator()`

- **OnSuccess**: <code>[V1CaptchageneratorResponse](src/models/v1-captchagenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.CaptchageneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.captchagenerator().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CaptchageneratorResponse, DataGeneration.CaptchageneratorError&gt;</code>, with `result.value` of type <code>[V1CaptchageneratorResponse](src/models/v1-captchagenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cardgenerator(request?: DataGeneration.CardgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1CardgeneratorResponse, DataGeneration.CardgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a list of test card numbers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.cardgenerator({
    brand: "visa",
    count: 5,
    includeAvatar: true,
  });
  // TODO: Handle 'response' of type V1CardgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.CardgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .cardgenerator({ brand: "visa", count: 5, includeAvatar: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CardgeneratorResponse
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
| <code>brand?</code> | <code>string</code> | The brand of the card to generate |
| <code>count?</code> | <code>number</code> | The number of test card numbers to generate |
| <code>includeAvatar?</code> | <code>boolean</code> | Include an AI-generated face avatar for the card owner |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.cardgenerator(request)`

- **OnSuccess**: <code>[V1CardgeneratorResponse](src/models/v1-cardgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.CardgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.cardgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CardgeneratorResponse, DataGeneration.CardgeneratorError&gt;</code>, with `result.value` of type <code>[V1CardgeneratorResponse](src/models/v1-cardgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chartgenerator(request: DataGeneration.ChartgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1ChartgeneratorResponse, DataGeneration.ChartgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a chart with minimal configuration. Just provide type, labels, and datasets with name/values. Colors are auto-assigned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.chartgenerator({
    body: { labels: "some example string", datasets: "some example string" },
  });
  // TODO: Handle 'response' of type V1ChartgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.ChartgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .chartgenerator({ body: { labels: "some example string", datasets: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ChartgeneratorResponse
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
| <code>body</code> | <code>[V1ChartgeneratorRequest](src/models/v1-chartgenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.chartgenerator(request)`

- **OnSuccess**: <code>[V1ChartgeneratorResponse](src/models/v1-chartgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.ChartgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.chartgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ChartgeneratorResponse, DataGeneration.ChartgeneratorError&gt;</code>, with `result.value` of type <code>[V1ChartgeneratorResponse](src/models/v1-chartgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>colorpalette(request: DataGeneration.ColorpaletteRequest, options?: RequestOptions): ApiPromise&lt;V1ColorpaletteResponse, DataGeneration.ColorpaletteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a color palette from a single color

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.colorpalette({
    color: "FF5733",
    scheme: "triade",
    variation: "soft",
    count: 5,
    distance: 0.5,
    addComplement: true,
    webSafe: false,
  });
  // TODO: Handle 'response' of type V1ColorpaletteResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.ColorpaletteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .colorpalette({
    color: "FF5733",
    scheme: "triade",
    variation: "soft",
    count: 5,
    distance: 0.5,
    addComplement: true,
    webSafe: false,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ColorpaletteResponse
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
| <code>color</code> | <code>string</code> | The base color to generate the palette from (HEX format without #) |
| <code>scheme?</code> | <code>string</code> | The color scheme type |
| <code>variation?</code> | <code>string</code> | The color variation |
| <code>count?</code> | <code>number</code> | Caps how many colors are returned (1-16). Each scheme has its own ceiling and count cannot raise it - mono yields 4, contrast 8, triade and analogic 12, tetrade 16. The colorCount field reports how many were actually returned. Free tier limited to 5 colors |
| <code>distance?</code> | <code>number</code> | Color spacing distance (0-1). Affects triade, tetrade, and analogic schemes |
| <code>addComplement?</code> | <code>boolean</code> | Add complement color to analogic scheme |
| <code>webSafe?</code> | <code>boolean</code> | Return web-safe colors only |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.colorpalette(request)`

- **OnSuccess**: <code>[V1ColorpaletteResponse](src/models/v1-colorpalette-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.ColorpaletteError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.colorpalette(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ColorpaletteResponse, DataGeneration.ColorpaletteError&gt;</code>, with `result.value` of type <code>[V1ColorpaletteResponse](src/models/v1-colorpalette-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>commentgenerator(request: DataGeneration.CommentgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1CommentgeneratorResponse, DataGeneration.CommentgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate comments for text-based social media posts

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.commentgenerator({
    mode: "text",
    tone: "positive",
    count: 5,
    emojis: true,
  });
  // TODO: Handle 'response' of type V1CommentgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.CommentgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .commentgenerator({ mode: "text", tone: "positive", count: 5, emojis: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CommentgeneratorResponse
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
| <code>mode</code> | <code>string</code> | The mode of comment generation |
| <code>tone?</code> | <code>string</code> | The tone of the comments |
| <code>count?</code> | <code>number</code> | The number of comments to generate (max 10) |
| <code>emojis?</code> | <code>boolean</code> | Whether to include emojis in the comments |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.commentgenerator(request)`

- **OnSuccess**: <code>[V1CommentgeneratorResponse](src/models/v1-commentgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.CommentgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.commentgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CommentgeneratorResponse, DataGeneration.CommentgeneratorError&gt;</code>, with `result.value` of type <code>[V1CommentgeneratorResponse](src/models/v1-commentgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companynamegenerator(request: DataGeneration.CompanynamegeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1CompanynamegeneratorResponse, DataGeneration.CompanynamegeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate company names based on the specified criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.companynamegenerator({ keyword: "systems", count: 5 });
  // TODO: Handle 'response' of type V1CompanynamegeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.CompanynamegeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .companynamegenerator({ keyword: "systems", count: 5 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CompanynamegeneratorResponse
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
| <code>keyword</code> | <code>string</code> | The keyword to generate company names from |
| <code>count?</code> | <code>number</code> | The number of company names to generate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.companynamegenerator(request)`

- **OnSuccess**: <code>[V1CompanynamegeneratorResponse](src/models/v1-companynamegenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.CompanynamegeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.companynamegenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CompanynamegeneratorResponse, DataGeneration.CompanynamegeneratorError&gt;</code>, with `result.value` of type <code>[V1CompanynamegeneratorResponse](src/models/v1-companynamegenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>crongenerator(request: DataGeneration.CrongeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1CrongeneratorResponse, DataGeneration.CrongeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate cron expressions from natural language schedule descriptions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.crongenerator({ schedule: "every weekday at 9am" });
  // TODO: Handle 'response' of type V1CrongeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.CrongeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.crongenerator({ schedule: "every weekday at 9am" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CrongeneratorResponse
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
| <code>schedule</code> | <code>string</code> | Natural language description of the schedule (max 200 characters) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.crongenerator(request)`

- **OnSuccess**: <code>[V1CrongeneratorResponse](src/models/v1-crongenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.CrongeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.crongenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CrongeneratorResponse, DataGeneration.CrongeneratorError&gt;</code>, with `result.value` of type <code>[V1CrongeneratorResponse](src/models/v1-crongenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cuidgenerator(request?: DataGeneration.CuidgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1CuidgeneratorResponse, DataGeneration.CuidgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate one or more collision-resistant unique identifiers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.cuidgenerator({ count: 10 });
  // TODO: Handle 'response' of type V1CuidgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.CuidgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.cuidgenerator({ count: 10 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CuidgeneratorResponse
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
| <code>count?</code> | <code>number</code> | Number of Cuids to generate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.cuidgenerator(request)`

- **OnSuccess**: <code>[V1CuidgeneratorResponse](src/models/v1-cuidgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.CuidgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.cuidgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CuidgeneratorResponse, DataGeneration.CuidgeneratorError&gt;</code>, with `result.value` of type <code>[V1CuidgeneratorResponse](src/models/v1-cuidgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>guidgenerator(request?: DataGeneration.GuidgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1GuidgeneratorResponse, DataGeneration.GuidgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate one or more GUIDs with formatting options

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.guidgenerator({ count: 3, format: "uppercase" });
  // TODO: Handle 'response' of type V1GuidgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.GuidgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.guidgenerator({ count: 3, format: "uppercase" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GuidgeneratorResponse
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
| <code>count?</code> | <code>number</code> | Number of GUIDs to generate |
| <code>format?</code> | <code>string</code> | Output format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.guidgenerator(request)`

- **OnSuccess**: <code>[V1GuidgeneratorResponse](src/models/v1-guidgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.GuidgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.guidgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GuidgeneratorResponse, DataGeneration.GuidgeneratorError&gt;</code>, with `result.value` of type <code>[V1GuidgeneratorResponse](src/models/v1-guidgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hashtaggenerator(request: DataGeneration.HashtaggeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1HashtaggeneratorResponse, DataGeneration.HashtaggeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate hashtags from text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.hashtaggenerator({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1HashtaggeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.HashtaggeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .hashtaggenerator({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HashtaggeneratorResponse
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
| <code>body</code> | <code>[V1HashtaggeneratorRequest](src/models/v1-hashtaggenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.hashtaggenerator(request)`

- **OnSuccess**: <code>[V1HashtaggeneratorResponse](src/models/v1-hashtaggenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.HashtaggeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.hashtaggenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HashtaggeneratorResponse, DataGeneration.HashtaggeneratorError&gt;</code>, with `result.value` of type <code>[V1HashtaggeneratorResponse](src/models/v1-hashtaggenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>imeigenerator(request?: DataGeneration.ImeigeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1ImeigeneratorResponse, DataGeneration.ImeigeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate valid IMEI numbers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.imeigenerator({ brand: "Samsung", count: 1 });
  // TODO: Handle 'response' of type V1ImeigeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.ImeigeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.imeigenerator({ brand: "Samsung", count: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ImeigeneratorResponse
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
| <code>brand?</code> | <code>string</code> | Filter by manufacturer brand (e.g., Samsung, Apple, Nokia) |
| <code>count?</code> | <code>number</code> | Number of IMEIs to generate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.imeigenerator(request)`

- **OnSuccess**: <code>[V1ImeigeneratorResponse](src/models/v1-imeigenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.ImeigeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.imeigenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ImeigeneratorResponse, DataGeneration.ImeigeneratorError&gt;</code>, with `result.value` of type <code>[V1ImeigeneratorResponse](src/models/v1-imeigenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initialismgenerator(request: DataGeneration.InitialismgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1InitialismgeneratorResponse, DataGeneration.InitialismgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate initialism from phrase

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.initialismgenerator({
    body: { phrase: "some example string" },
  });
  // TODO: Handle 'response' of type V1InitialismgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.InitialismgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .initialismgenerator({ body: { phrase: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1InitialismgeneratorResponse
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
| <code>body</code> | <code>[V1InitialismgeneratorRequest](src/models/v1-initialismgenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.initialismgenerator(request)`

- **OnSuccess**: <code>[V1InitialismgeneratorResponse](src/models/v1-initialismgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.InitialismgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.initialismgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1InitialismgeneratorResponse, DataGeneration.InitialismgeneratorError&gt;</code>, with `result.value` of type <code>[V1InitialismgeneratorResponse](src/models/v1-initialismgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jsonschemagenerator(request: DataGeneration.JsonschemageneratorRequest, options?: RequestOptions): ApiPromise&lt;V1JsonschemageneratorResponse, DataGeneration.JsonschemageneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a JSON schema from sample JSON data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.jsonschemagenerator({ body: { json: "some example string" } });
  // TODO: Handle 'response' of type V1JsonschemageneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.JsonschemageneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .jsonschemagenerator({ body: { json: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JsonschemageneratorResponse
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
| <code>body</code> | <code>[V1JsonschemageneratorRequest](src/models/v1-jsonschemagenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.jsonschemagenerator(request)`

- **OnSuccess**: <code>[V1JsonschemageneratorResponse](src/models/v1-jsonschemagenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.JsonschemageneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.jsonschemagenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JsonschemageneratorResponse, DataGeneration.JsonschemageneratorError&gt;</code>, with `result.value` of type <code>[V1JsonschemageneratorResponse](src/models/v1-jsonschemagenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>loremipsumgenerator(request?: DataGeneration.LoremipsumgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1LoremipsumgeneratorResponse, DataGeneration.LoremipsumgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate lorem ipsum text with a specified number of sentences or words

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.loremipsumgenerator({
    paragraphs: 3,
    startwithlorem: true,
    maxlength: 100,
  });
  // TODO: Handle 'response' of type V1LoremipsumgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.LoremipsumgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .loremipsumgenerator({ paragraphs: 3, startwithlorem: true, maxlength: 100 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LoremipsumgeneratorResponse
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
| <code>paragraphs?</code> | <code>number</code> | The number of paragraphs to generate |
| <code>startwithlorem?</code> | <code>boolean</code> | Start the text with 'Lorem ipsum dolor sit amet' |
| <code>maxlength?</code> | <code>number</code> | The maximum length of the generated text (0 for no limit) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.loremipsumgenerator(request)`

- **OnSuccess**: <code>[V1LoremipsumgeneratorResponse](src/models/v1-loremipsumgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.LoremipsumgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.loremipsumgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LoremipsumgeneratorResponse, DataGeneration.LoremipsumgeneratorError&gt;</code>, with `result.value` of type <code>[V1LoremipsumgeneratorResponse](src/models/v1-loremipsumgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>passwordgenerator(request?: DataGeneration.PasswordgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1PasswordgeneratorResponse, DataGeneration.PasswordgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate passwords with a specified length and complexity

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.passwordgenerator({
    count: 10,
    length: 12,
    complexity: "strong",
    type: "random",
    includeNumbers: true,
    includeSymbols: true,
    includeUppercase: true,
    includeLowercase: true,
    excludeSimilar: true,
    excludeAmbiguous: true,
    mixedCase: true,
    strict: true,
    wordCount: 4,
    separator: "-",
    capitalize: true,
    analyze: true,
  });
  // TODO: Handle 'response' of type V1PasswordgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.PasswordgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .passwordgenerator({
    count: 10,
    length: 12,
    complexity: "strong",
    type: "random",
    includeNumbers: true,
    includeSymbols: true,
    includeUppercase: true,
    includeLowercase: true,
    excludeSimilar: true,
    excludeAmbiguous: true,
    mixedCase: true,
    strict: true,
    wordCount: 4,
    separator: "-",
    capitalize: true,
    analyze: true,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PasswordgeneratorResponse
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
| <code>count?</code> | <code>number</code> | The number of passwords to generate |
| <code>length?</code> | <code>number</code> | The length of the password to generate |
| <code>complexity?</code> | <code>string</code> | The complexity of the password. Only applies when type is random |
| <code>type?</code> | <code>string</code> | The kind of password to generate. random uses the complexity preset, pronounceable builds readable syllables, passphrase joins dictionary words, and custom honours the include/exclude switches below |
| <code>includeNumbers?</code> | <code>boolean</code> | Include digits. Applies to custom and pronounceable, and to random at simple complexity |
| <code>includeSymbols?</code> | <code>boolean</code> | Include punctuation symbols. Applies to custom, and to random at medium complexity |
| <code>includeUppercase?</code> | <code>boolean</code> | Include uppercase letters. Applies to custom, and to random at simple complexity |
| <code>includeLowercase?</code> | <code>boolean</code> | Include lowercase letters in a custom password. Set false to build from the other character sets only |
| <code>excludeSimilar?</code> | <code>boolean</code> | Exclude characters that are easy to confuse when read aloud or typed (i, l, 1, L, o, 0, O) |
| <code>excludeAmbiguous?</code> | <code>boolean</code> | Exclude brackets, slashes, quotes and other characters that need escaping in shells and config files |
| <code>mixedCase?</code> | <code>boolean</code> | Randomly capitalise letters in a pronounceable password |
| <code>strict?</code> | <code>boolean</code> | Guarantee at least one character from every enabled set rather than leaving it to chance |
| <code>wordCount?</code> | <code>number</code> | How many words a passphrase contains. Only applies when type is passphrase |
| <code>separator?</code> | <code>string</code> | The character placed between passphrase words. Only applies when type is passphrase |
| <code>capitalize?</code> | <code>boolean</code> | Capitalise each word of a passphrase. Only applies when type is passphrase |
| <code>analyze?</code> | <code>boolean</code> | Return a strength analysis alongside each password |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.passwordgenerator(request)`

- **OnSuccess**: <code>[V1PasswordgeneratorResponse](src/models/v1-passwordgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.PasswordgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.passwordgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PasswordgeneratorResponse, DataGeneration.PasswordgeneratorError&gt;</code>, with `result.value` of type <code>[V1PasswordgeneratorResponse](src/models/v1-passwordgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>qrcodegenerator(request: DataGeneration.QrcodegeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1QrcodegeneratorResponse, DataGeneration.QrcodegeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a styled QR code with custom colors, logo, and design options

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.qrcodegenerator({ body: { value: "some example string" } });
  // TODO: Handle 'response' of type V1QrcodegeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.QrcodegeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .qrcodegenerator({ body: { value: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1QrcodegeneratorResponse
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
| <code>body</code> | <code>[V1QrcodegeneratorRequest](src/models/v1-qrcodegenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.qrcodegenerator(request)`

- **OnSuccess**: <code>[V1QrcodegeneratorResponse](src/models/v1-qrcodegenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.QrcodegeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.qrcodegenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1QrcodegeneratorResponse, DataGeneration.QrcodegeneratorError&gt;</code>, with `result.value` of type <code>[V1QrcodegeneratorResponse](src/models/v1-qrcodegenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>randomgenerator(request?: DataGeneration.RandomgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1RandomgeneratorResponse, DataGeneration.RandomgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random data of various types

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.randomgenerator({
    type: "number",
    count: 10,
    includeAvatar: true,
  });
  // TODO: Handle 'response' of type V1RandomgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.RandomgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .randomgenerator({ type: "number", count: 10, includeAvatar: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RandomgeneratorResponse
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
| <code>type?</code> | <code>string</code> | The type of random data to generate |
| <code>count?</code> | <code>number</code> | The number of random data to generate (1 to 100) |
| <code>includeAvatar?</code> | <code>boolean</code> | Include an AI-generated face avatar (only applies when type=name) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.randomgenerator(request)`

- **OnSuccess**: <code>[V1RandomgeneratorResponse](src/models/v1-randomgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.RandomgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.randomgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RandomgeneratorResponse, DataGeneration.RandomgeneratorError&gt;</code>, with `result.value` of type <code>[V1RandomgeneratorResponse](src/models/v1-randomgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>randomidentitygenerator(request?: DataGeneration.RandomidentitygeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1RandomidentitygeneratorResponse, DataGeneration.RandomidentitygeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a random identity with a name, address, and more

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.randomidentitygenerator({ count: 5, includeAvatar: true });
  // TODO: Handle 'response' of type V1RandomidentitygeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.RandomidentitygeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .randomidentitygenerator({ count: 5, includeAvatar: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RandomidentitygeneratorResponse
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
| <code>count?</code> | <code>number</code> | The number of identities to create |
| <code>includeAvatar?</code> | <code>boolean</code> | Include an AI-generated face avatar for each identity |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.randomidentitygenerator(request)`

- **OnSuccess**: <code>[V1RandomidentitygeneratorResponse](src/models/v1-randomidentitygenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.RandomidentitygeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.randomidentitygenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RandomidentitygeneratorResponse, DataGeneration.RandomidentitygeneratorError&gt;</code>, with `result.value` of type <code>[V1RandomidentitygeneratorResponse](src/models/v1-randomidentitygenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>randomusergenerator(request?: DataGeneration.RandomusergeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1RandomusergeneratorResponse, DataGeneration.RandomusergeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random user data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.randomusergenerator({ count: 1, includeAvatar: true });
  // TODO: Handle 'response' of type V1RandomusergeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.RandomusergeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .randomusergenerator({ count: 1, includeAvatar: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RandomusergeneratorResponse
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
| <code>count?</code> | <code>number</code> | The number of users to generate |
| <code>includeAvatar?</code> | <code>boolean</code> | Include an AI-generated face avatar matching user's gender and age |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.randomusergenerator(request)`

- **OnSuccess**: <code>[V1RandomusergeneratorResponse](src/models/v1-randomusergenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.RandomusergeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.randomusergenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RandomusergeneratorResponse, DataGeneration.RandomusergeneratorError&gt;</code>, with `result.value` of type <code>[V1RandomusergeneratorResponse](src/models/v1-randomusergenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>randomwords(options?: RequestOptions): ApiPromise&lt;V1RandomwordsResponse, DataGeneration.RandomwordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random word, including its definition and pronunciation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.randomwords();
  // TODO: Handle 'response' of type V1RandomwordsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.RandomwordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.randomwords().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RandomwordsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.randomwords()`

- **OnSuccess**: <code>[V1RandomwordsResponse](src/models/v1-randomwords-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.RandomwordsError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.randomwords().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RandomwordsResponse, DataGeneration.RandomwordsError&gt;</code>, with `result.value` of type <code>[V1RandomwordsResponse](src/models/v1-randomwords-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>shortcodegenerator(request?: DataGeneration.ShortcodegeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1ShortcodegeneratorResponse, DataGeneration.ShortcodegeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate short alphanumeric codes with customizable options

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.shortcodegenerator({
    count: 5,
    length: 8,
    charset: "alphanumeric",
  });
  // TODO: Handle 'response' of type V1ShortcodegeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.ShortcodegeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .shortcodegenerator({ count: 5, length: 8, charset: "alphanumeric" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ShortcodegeneratorResponse
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
| <code>count?</code> | <code>number</code> | Number of codes to generate |
| <code>length?</code> | <code>number</code> | Length of each code |
| <code>charset?</code> | <code>string</code> | Character set |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.shortcodegenerator(request)`

- **OnSuccess**: <code>[V1ShortcodegeneratorResponse](src/models/v1-shortcodegenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.ShortcodegeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.shortcodegenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ShortcodegeneratorResponse, DataGeneration.ShortcodegeneratorError&gt;</code>, with `result.value` of type <code>[V1ShortcodegeneratorResponse](src/models/v1-shortcodegenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sitemapgenerator(request: DataGeneration.SitemapgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1SitemapgeneratorResponse, DataGeneration.SitemapgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an XML sitemap from URLs

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.sitemapgenerator({ body: { urls: "some example string" } });
  // TODO: Handle 'response' of type V1SitemapgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.SitemapgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .sitemapgenerator({ body: { urls: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SitemapgeneratorResponse
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
| <code>body</code> | <code>[V1SitemapgeneratorRequest](src/models/v1-sitemapgenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.sitemapgenerator(request)`

- **OnSuccess**: <code>[V1SitemapgeneratorResponse](src/models/v1-sitemapgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.SitemapgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.sitemapgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SitemapgeneratorResponse, DataGeneration.SitemapgeneratorError&gt;</code>, with `result.value` of type <code>[V1SitemapgeneratorResponse](src/models/v1-sitemapgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>totpgenerator(request: DataGeneration.TotpgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1TotpgeneratorResponse, DataGeneration.TotpgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate time-based one-time password

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.totpgenerator({ body: { secret: "some example string" } });
  // TODO: Handle 'response' of type V1TotpgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.TotpgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .totpgenerator({ body: { secret: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TotpgeneratorResponse
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
| <code>body</code> | <code>[V1TotpgeneratorRequest](src/models/v1-totpgenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.totpgenerator(request)`

- **OnSuccess**: <code>[V1TotpgeneratorResponse](src/models/v1-totpgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.TotpgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.totpgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TotpgeneratorResponse, DataGeneration.TotpgeneratorError&gt;</code>, with `result.value` of type <code>[V1TotpgeneratorResponse](src/models/v1-totpgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ulidgenerator(request?: DataGeneration.UlidgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1UlidgeneratorResponse, DataGeneration.UlidgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate one or more ULIDs

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.ulidgenerator({ count: 5 });
  // TODO: Handle 'response' of type V1UlidgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.UlidgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.ulidgenerator({ count: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UlidgeneratorResponse
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
| <code>count?</code> | <code>number</code> | Number of ULIDs to generate |
| <code>timestamp?</code> | <code>number</code> | Custom timestamp in milliseconds (optional, uses current time if not specified) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.ulidgenerator(request)`

- **OnSuccess**: <code>[V1UlidgeneratorResponse](src/models/v1-ulidgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.UlidgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.ulidgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UlidgeneratorResponse, DataGeneration.UlidgeneratorError&gt;</code>, with `result.value` of type <code>[V1UlidgeneratorResponse](src/models/v1-ulidgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>useragentgenerator(request?: DataGeneration.UseragentgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1UseragentgeneratorResponse, DataGeneration.UseragentgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a random user agent string

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.useragentgenerator({ device: "desktop" });
  // TODO: Handle 'response' of type V1UseragentgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.UseragentgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration.useragentgenerator({ device: "desktop" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UseragentgeneratorResponse
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
| <code>device?</code> | <code>string</code> | The device type for the user agent string |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.useragentgenerator(request)`

- **OnSuccess**: <code>[V1UseragentgeneratorResponse](src/models/v1-useragentgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.UseragentgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.useragentgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UseragentgeneratorResponse, DataGeneration.UseragentgeneratorError&gt;</code>, with `result.value` of type <code>[V1UseragentgeneratorResponse](src/models/v1-useragentgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usernamegenerator(request: DataGeneration.UsernamegeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1UsernamegeneratorResponse, DataGeneration.UsernamegeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate usernames based on the specified criteria

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.usernamegenerator({ email: "sean@mail.com", count: 10 });
  // TODO: Handle 'response' of type V1UsernamegeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.UsernamegeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .usernamegenerator({ email: "sean@mail.com", count: 10 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UsernamegeneratorResponse
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
| <code>email</code> | <code>string</code> | The email address to generate usernames from |
| <code>count?</code> | <code>number</code> | The number of usernames to generate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.usernamegenerator(request)`

- **OnSuccess**: <code>[V1UsernamegeneratorResponse](src/models/v1-usernamegenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.UsernamegeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.usernamegenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UsernamegeneratorResponse, DataGeneration.UsernamegeneratorError&gt;</code>, with `result.value` of type <code>[V1UsernamegeneratorResponse](src/models/v1-usernamegenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uuidgenerator(request?: DataGeneration.UuidgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1UuidgeneratorResponse, DataGeneration.UuidgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate one or more RFC 4122 version 4 UUIDs

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataGeneration.uuidgenerator({ count: 5, version: 4, format: "default" });
  // TODO: Handle 'response' of type V1UuidgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataGeneration.UuidgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataGeneration
  .uuidgenerator({ count: 5, version: 4, format: "default" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UuidgeneratorResponse
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
| <code>count?</code> | <code>number</code> | Number of UUIDs to generate |
| <code>version?</code> | <code>number</code> | UUID version (only version 4 currently supported) |
| <code>format?</code> | <code>string</code> | Output format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataGeneration.uuidgenerator(request)`

- **OnSuccess**: <code>[V1UuidgeneratorResponse](src/models/v1-uuidgenerator-response.ts)</code>
- **OnError**: throws <code>[DataGeneration.UuidgeneratorError](src/resources/data-generation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataGeneration.uuidgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UuidgeneratorResponse, DataGeneration.UuidgeneratorError&gt;</code>, with `result.value` of type <code>[V1UuidgeneratorResponse](src/models/v1-uuidgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataLookup

> Source: [DataLookup](src/resources/data-lookup.ts)

<details>
<summary><code>asnlookup(request: DataLookup.AsnlookupRequest, options?: RequestOptions): ApiPromise&lt;V1AsnlookupResponse, DataLookup.AsnlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ASN Lookup is a simple tool for getting information on Autonomous System Numbers (ASNs). It returns information on various ASNs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.asnlookup({ asn: "AS15169" });
  // TODO: Handle 'response' of type V1AsnlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.AsnlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.asnlookup({ asn: "AS15169" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AsnlookupResponse
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
| <code>asn</code> | <code>string</code> | The ASN you want to get information about |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.asnlookup(request)`

- **OnSuccess**: <code>[V1AsnlookupResponse](src/models/v1-asnlookup-response.ts)</code>
- **OnError**: throws <code>[DataLookup.AsnlookupError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.asnlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AsnlookupResponse, DataLookup.AsnlookupError&gt;</code>, with `result.value` of type <code>[V1AsnlookupResponse](src/models/v1-asnlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bible(request: DataLookup.BibleRequest, options?: RequestOptions): ApiPromise&lt;V1BibleResponse, DataLookup.BibleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a bible chapter or verse based on the book, chapter, and or verse

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.bible({ book: "Genesis", version: "KJV", chapter: 5, verse: 17 });
  // TODO: Handle 'response' of type V1BibleResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.BibleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup
  .bible({ book: "Genesis", version: "KJV", chapter: 5, verse: 17 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BibleResponse
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
| <code>book</code> | <code>string</code> | The name of the book in the bible (e.g., Genesis) |
| <code>version</code> | <code>string</code> | The Bible translation version |
| <code>chapter</code> | <code>number</code> | The chapter number in the book |
| <code>verse?</code> | <code>number</code> | The verse number in the chapter |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.bible(request)`

- **OnSuccess**: <code>[V1BibleResponse](src/models/v1-bible-response.ts)</code>
- **OnError**: throws <code>[DataLookup.BibleError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.bible(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BibleResponse, DataLookup.BibleError&gt;</code>, with `result.value` of type <code>[V1BibleResponse](src/models/v1-bible-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callingcode(request: DataLookup.CallingcodeRequest, options?: RequestOptions): ApiPromise&lt;V1CallingcodeResponse, DataLookup.CallingcodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Calling Code is a simple tool for getting the country's international dialing codes. It returns the country's international dialing codes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.callingcode({ country: "FR" });
  // TODO: Handle 'response' of type V1CallingcodeResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.CallingcodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.callingcode({ country: "FR" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CallingcodeResponse
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
| <code>country</code> | <code>string</code> | The 2 letter ISO code for the country (e.g. FR) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.callingcode(request)`

- **OnSuccess**: <code>[V1CallingcodeResponse](src/models/v1-callingcode-response.ts)</code>
- **OnError**: throws <code>[DataLookup.CallingcodeError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.callingcode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CallingcodeResponse, DataLookup.CallingcodeError&gt;</code>, with `result.value` of type <code>[V1CallingcodeResponse](src/models/v1-callingcode-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dictionary(request: DataLookup.DictionaryRequest, options?: RequestOptions): ApiPromise&lt;V1DictionaryResponse, DataLookup.DictionaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the definition of a word

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.dictionary({ word: "apple" });
  // TODO: Handle 'response' of type V1DictionaryResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.DictionaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.dictionary({ word: "apple" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DictionaryResponse
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
| <code>word</code> | <code>string</code> | The word for which you want to get the definition (e.g., apple) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.dictionary(request)`

- **OnSuccess**: <code>[V1DictionaryResponse](src/models/v1-dictionary-response.ts)</code>
- **OnError**: throws <code>[DataLookup.DictionaryError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.dictionary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DictionaryResponse, DataLookup.DictionaryError&gt;</code>, with `result.value` of type <code>[V1DictionaryResponse](src/models/v1-dictionary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dogbreeds(request: DataLookup.DogbreedsRequest, options?: RequestOptions): ApiPromise&lt;V1DogbreedsResponse, DataLookup.DogbreedsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a specific dog breed

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.dogbreeds({ breed: "beagle" });
  // TODO: Handle 'response' of type V1DogbreedsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.DogbreedsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.dogbreeds({ breed: "beagle" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DogbreedsResponse
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
| <code>breed</code> | <code>string</code> | The name of the dog breed to get information about |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.dogbreeds(request)`

- **OnSuccess**: <code>[V1DogbreedsResponse](src/models/v1-dogbreeds-response.ts)</code>
- **OnError**: throws <code>[DataLookup.DogbreedsError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.dogbreeds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DogbreedsResponse, DataLookup.DogbreedsError&gt;</code>, with `result.value` of type <code>[V1DogbreedsResponse](src/models/v1-dogbreeds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>emoji(request: DataLookup.EmojiRequest, options?: RequestOptions): ApiPromise&lt;V1EmojiResponse, DataLookup.EmojiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the text representation of an emoji

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.emoji({ emoji: "🥳" });
  // TODO: Handle 'response' of type V1EmojiResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.EmojiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.emoji({ emoji: "🥳" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1EmojiResponse
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
| <code>emoji</code> | <code>string</code> | The emoji for which you want to get the text representation (e.g., 🥳) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.emoji(request)`

- **OnSuccess**: <code>[V1EmojiResponse](src/models/v1-emoji-response.ts)</code>
- **OnError**: throws <code>[DataLookup.EmojiError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.emoji(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1EmojiResponse, DataLookup.EmojiError&gt;</code>, with `result.value` of type <code>[V1EmojiResponse](src/models/v1-emoji-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>genderdetector(request: DataLookup.GenderdetectorRequest, options?: RequestOptions): ApiPromise&lt;V1GenderdetectorResponse, DataLookup.GenderdetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect the likely gender based on a given name

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.genderdetector({ name: "John Mcdonald", country: "US" });
  // TODO: Handle 'response' of type V1GenderdetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.GenderdetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.genderdetector({ name: "John Mcdonald", country: "US" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GenderdetectorResponse
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
| <code>name</code> | <code>string</code> | The name for which you want to detect the gender |
| <code>country?</code> | <code>string</code> | The country code for the name (e.g., US). Recorded and echoed back in the response, but detection does not yet vary by country - the same name returns the same gender whichever code you pass |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.genderdetector(request)`

- **OnSuccess**: <code>[V1GenderdetectorResponse](src/models/v1-genderdetector-response.ts)</code>
- **OnError**: throws <code>[DataLookup.GenderdetectorError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.genderdetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GenderdetectorResponse, DataLookup.GenderdetectorError&gt;</code>, with `result.value` of type <code>[V1GenderdetectorResponse](src/models/v1-genderdetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>gravatarlookup(request: DataLookup.GravatarlookupRequest, options?: RequestOptions): ApiPromise&lt;V1GravatarlookupResponse, DataLookup.GravatarlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the Gravatar profile of an email address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.gravatarlookup({ email: "hello@apiverve.com" });
  // TODO: Handle 'response' of type V1GravatarlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.GravatarlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.gravatarlookup({ email: "hello@apiverve.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GravatarlookupResponse
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
| <code>email</code> | <code>string</code> | The email address to lookup the Gravatar profile of |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.gravatarlookup(request)`

- **OnSuccess**: <code>[V1GravatarlookupResponse](src/models/v1-gravatarlookup-response.ts)</code>
- **OnError**: throws <code>[DataLookup.GravatarlookupError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.gravatarlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GravatarlookupResponse, DataLookup.GravatarlookupError&gt;</code>, with `result.value` of type <code>[V1GravatarlookupResponse](src/models/v1-gravatarlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ipdemographics(request: DataLookup.IpdemographicsRequest, options?: RequestOptions): ApiPromise&lt;V1IpdemographicsResponse, DataLookup.IpdemographicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get location and demographic data for an IP address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.ipdemographics({ ip: "173.172.81.20" });
  // TODO: Handle 'response' of type V1IpdemographicsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.IpdemographicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.ipdemographics({ ip: "173.172.81.20" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1IpdemographicsResponse
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
| <code>ip</code> | <code>string</code> | IPv4 or IPv6 address |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.ipdemographics(request)`

- **OnSuccess**: <code>[V1IpdemographicsResponse](src/models/v1-ipdemographics-response.ts)</code>
- **OnError**: throws <code>[DataLookup.IpdemographicsError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.ipdemographics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1IpdemographicsResponse, DataLookup.IpdemographicsError&gt;</code>, with `result.value` of type <code>[V1IpdemographicsResponse](src/models/v1-ipdemographics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lottery(request: DataLookup.LotteryRequest, options?: RequestOptions): ApiPromise&lt;V1LotteryResponse, DataLookup.LotteryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the latest winning lottery numbers for Powerball, Mega Millions, EuroMillions, or Lotto Max — pick the game with the numbers parameter. Optionally provide a date for historical results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.lottery({ numbers: "powerball", date: "2024-01-15" });
  // TODO: Handle 'response' of type V1LotteryResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.LotteryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.lottery({ numbers: "powerball", date: "2024-01-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LotteryResponse
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
| <code>numbers</code> | <code>string</code> | The lottery game to lookup: powerball, megamillions, euromillions, or lottomax |
| <code>date?</code> | <code>string</code> | Optional date for historical lookup (YYYY-MM-DD). Returns the nearest draw to this date. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.lottery(request)`

- **OnSuccess**: <code>[V1LotteryResponse](src/models/v1-lottery-response.ts)</code>
- **OnError**: throws <code>[DataLookup.LotteryError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.lottery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LotteryResponse, DataLookup.LotteryError&gt;</code>, with `result.value` of type <code>[V1LotteryResponse](src/models/v1-lottery-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nobelprizes(request?: DataLookup.NobelprizesRequest, options?: RequestOptions): ApiPromise&lt;V1NobelprizesResponse, DataLookup.NobelprizesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nobel Prizes is a simple tool for getting information on Nobel Prizes. It returns information on various Nobel Prizes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.nobelprizes({
    firstname: "Albert",
    lastname: "Einstein",
    category: "Physics",
    year: 1921,
  });
  // TODO: Handle 'response' of type V1NobelprizesResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.NobelprizesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup
  .nobelprizes({ firstname: "Albert", lastname: "Einstein", category: "Physics", year: 1921 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NobelprizesResponse
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
| <code>firstname?</code> | <code>string</code> | The first name of the Nobel Prize winner to get information about |
| <code>lastname?</code> | <code>string</code> | The last name of the Nobel Prize winner to get information about |
| <code>category?</code> | <code>string</code> | The category of the Nobel Prize to get information about |
| <code>year?</code> | <code>number</code> | The year of the Nobel Prize to get information about |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.nobelprizes(request)`

- **OnSuccess**: <code>[V1NobelprizesResponse](src/models/v1-nobelprizes-response.ts)</code>
- **OnError**: throws <code>[DataLookup.NobelprizesError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.nobelprizes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NobelprizesResponse, DataLookup.NobelprizesError&gt;</code>, with `result.value` of type <code>[V1NobelprizesResponse](src/models/v1-nobelprizes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>openlicenses(request: DataLookup.OpenlicensesRequest, options?: RequestOptions): ApiPromise&lt;V1OpenlicensesResponse, DataLookup.OpenlicensesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Open Source Licenses is a simple tool for getting information on open source licenses. It returns information on various open source licenses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.openlicenses({ name: "MIT" });
  // TODO: Handle 'response' of type V1OpenlicensesResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.OpenlicensesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.openlicenses({ name: "MIT" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OpenlicensesResponse
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
| <code>name</code> | <code>string</code> | The name of the open source license to get information about |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.openlicenses(request)`

- **OnSuccess**: <code>[V1OpenlicensesResponse](src/models/v1-openlicenses-response.ts)</code>
- **OnError**: throws <code>[DataLookup.OpenlicensesError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.openlicenses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OpenlicensesResponse, DataLookup.OpenlicensesError&gt;</code>, with `result.value` of type <code>[V1OpenlicensesResponse](src/models/v1-openlicenses-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>thesaurus(request: DataLookup.ThesaurusRequest, options?: RequestOptions): ApiPromise&lt;V1ThesaurusResponse, DataLookup.ThesaurusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of similar words for the specified word

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.thesaurus({ word: "big" });
  // TODO: Handle 'response' of type V1ThesaurusResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.ThesaurusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.thesaurus({ word: "big" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ThesaurusResponse
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
| <code>word</code> | <code>string</code> | The word for which you want to get synonyms |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.thesaurus(request)`

- **OnSuccess**: <code>[V1ThesaurusResponse](src/models/v1-thesaurus-response.ts)</code>
- **OnError**: throws <code>[DataLookup.ThesaurusError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.thesaurus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ThesaurusResponse, DataLookup.ThesaurusError&gt;</code>, with `result.value` of type <code>[V1ThesaurusResponse](src/models/v1-thesaurus-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>timezonelookup(request: DataLookup.TimezonelookupRequest, options?: RequestOptions): ApiPromise&lt;V1TimezonelookupResponse, DataLookup.TimezonelookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup timezone data based on the city name

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.timezonelookup({ city: "Harare" });
  // TODO: Handle 'response' of type V1TimezonelookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.TimezonelookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.timezonelookup({ city: "Harare" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TimezonelookupResponse
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
| <code>city</code> | <code>string</code> | The city name for which you want to get the data (e.g., Harare) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.timezonelookup(request)`

- **OnSuccess**: <code>[V1TimezonelookupResponse](src/models/v1-timezonelookup-response.ts)</code>
- **OnError**: throws <code>[DataLookup.TimezonelookupError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.timezonelookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TimezonelookupResponse, DataLookup.TimezonelookupError&gt;</code>, with `result.value` of type <code>[V1TimezonelookupResponse](src/models/v1-timezonelookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unicodelookup(request?: DataLookup.UnicodelookupRequest, options?: RequestOptions): ApiPromise&lt;V1UnicodelookupResponse, DataLookup.UnicodelookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed information about a Unicode character

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.unicodelookup({ character: "👋", codepoint: "1F44B" });
  // TODO: Handle 'response' of type V1UnicodelookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.UnicodelookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.unicodelookup({ character: "👋", codepoint: "1F44B" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UnicodelookupResponse
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
| <code>character?</code> | <code>string</code> | The Unicode character to lookup. Supply either character or codepoint. |
| <code>codepoint?</code> | <code>string</code> | The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B'). Supply either character or codepoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.unicodelookup(request)`

- **OnSuccess**: <code>[V1UnicodelookupResponse](src/models/v1-unicodelookup-response.ts)</code>
- **OnError**: throws <code>[DataLookup.UnicodelookupError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.unicodelookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UnicodelookupResponse, DataLookup.UnicodelookupError&gt;</code>, with `result.value` of type <code>[V1UnicodelookupResponse](src/models/v1-unicodelookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>worldtime(request: DataLookup.WorldtimeRequest, options?: RequestOptions): ApiPromise&lt;V1WorldtimeResponse, DataLookup.WorldtimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current time in any city

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.worldtime({ city: "San Francisco" });
  // TODO: Handle 'response' of type V1WorldtimeResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.WorldtimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.worldtime({ city: "San Francisco" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WorldtimeResponse
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
| <code>city</code> | <code>string</code> | The city name for which you want to get the current time (e.g., New York) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.worldtime(request)`

- **OnSuccess**: <code>[V1WorldtimeResponse](src/models/v1-worldtime-response.ts)</code>
- **OnError**: throws <code>[DataLookup.WorldtimeError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.worldtime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WorldtimeResponse, DataLookup.WorldtimeError&gt;</code>, with `result.value` of type <code>[V1WorldtimeResponse](src/models/v1-worldtime-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>zipdemographics(request: DataLookup.ZipdemographicsRequest, options?: RequestOptions): ApiPromise&lt;V1ZipdemographicsResponse, DataLookup.ZipdemographicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get demographic data for a ZIP code

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataLookup.zipdemographics({ zip: "90210" });
  // TODO: Handle 'response' of type V1ZipdemographicsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataLookup.ZipdemographicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataLookup.zipdemographics({ zip: "90210" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ZipdemographicsResponse
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
| <code>zip</code> | <code>string</code> | 5-digit US ZIP code |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataLookup.zipdemographics(request)`

- **OnSuccess**: <code>[V1ZipdemographicsResponse](src/models/v1-zipdemographics-response.ts)</code>
- **OnError**: throws <code>[DataLookup.ZipdemographicsError](src/resources/data-lookup.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataLookup.zipdemographics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ZipdemographicsResponse, DataLookup.ZipdemographicsError&gt;</code>, with `result.value` of type <code>[V1ZipdemographicsResponse](src/models/v1-zipdemographics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataProcessing

> Source: [DataProcessing](src/resources/data-processing.ts)

<details>
<summary><code>counter(request: DataProcessing.CounterRequest, options?: RequestOptions): ApiPromise&lt;V1CounterResponse, DataProcessing.CounterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current value of the counter

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataProcessing.counter({ id: "test_counter" });
  // TODO: Handle 'response' of type V1CounterResponse
} catch (err) {
  // TODO: Handle 'err' of type DataProcessing.CounterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataProcessing.counter({ id: "test_counter" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CounterResponse
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
| <code>id</code> | <code>string</code> | The ID of the counter (e.g., test_counter) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataProcessing.counter(request)`

- **OnSuccess**: <code>[V1CounterResponse](src/models/v1-counter-response.ts)</code>
- **OnError**: throws <code>[DataProcessing.CounterError](src/resources/data-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataProcessing.counter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CounterResponse, DataProcessing.CounterError&gt;</code>, with `result.value` of type <code>[V1CounterResponse](src/models/v1-counter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>htmltotext(request: DataProcessing.HtmltotextRequest, options?: RequestOptions): ApiPromise&lt;V1HtmltotextResponse, DataProcessing.HtmltotextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert HTML to text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataProcessing.htmltotext({ body: { html: "some example string" } });
  // TODO: Handle 'response' of type V1HtmltotextResponse
} catch (err) {
  // TODO: Handle 'err' of type DataProcessing.HtmltotextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataProcessing
  .htmltotext({ body: { html: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HtmltotextResponse
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
| <code>body</code> | <code>[V1HtmltotextRequest](src/models/v1-htmltotext-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataProcessing.htmltotext(request)`

- **OnSuccess**: <code>[V1HtmltotextResponse](src/models/v1-htmltotext-response.ts)</code>
- **OnError**: throws <code>[DataProcessing.HtmltotextError](src/resources/data-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataProcessing.htmltotext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HtmltotextResponse, DataProcessing.HtmltotextError&gt;</code>, with `result.value` of type <code>[V1HtmltotextResponse](src/models/v1-htmltotext-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metadataextractor(request: DataProcessing.MetadataextractorRequest, options?: RequestOptions): ApiPromise&lt;V1MetadataextractorResponse, DataProcessing.MetadataextractorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract metadata from a web page

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataProcessing.metadataextractor({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1MetadataextractorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataProcessing.MetadataextractorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataProcessing
  .metadataextractor({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MetadataextractorResponse
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
| <code>body</code> | <code>[V1MetadataextractorRequest](src/models/v1-metadataextractor-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataProcessing.metadataextractor(request)`

- **OnSuccess**: <code>[V1MetadataextractorResponse](src/models/v1-metadataextractor-response.ts)</code>
- **OnError**: throws <code>[DataProcessing.MetadataextractorError](src/resources/data-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataProcessing.metadataextractor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MetadataextractorResponse, DataProcessing.MetadataextractorError&gt;</code>, with `result.value` of type <code>[V1MetadataextractorResponse](src/models/v1-metadataextractor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>morsecode(request: DataProcessing.MorsecodeRequest, options?: RequestOptions): ApiPromise&lt;V1MorsecodeResponse, DataProcessing.MorsecodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or decoded Morse code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataProcessing.morsecode({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1MorsecodeResponse
} catch (err) {
  // TODO: Handle 'err' of type DataProcessing.MorsecodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataProcessing.morsecode({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MorsecodeResponse
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
| <code>body</code> | <code>[V1MorsecodeRequest](src/models/v1-morsecode-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataProcessing.morsecode(request)`

- **OnSuccess**: <code>[V1MorsecodeResponse](src/models/v1-morsecode-response.ts)</code>
- **OnError**: throws <code>[DataProcessing.MorsecodeError](src/resources/data-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataProcessing.morsecode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MorsecodeResponse, DataProcessing.MorsecodeError&gt;</code>, with `result.value` of type <code>[V1MorsecodeResponse](src/models/v1-morsecode-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>murmurhash(request: DataProcessing.MurmurhashRequest, options?: RequestOptions): ApiPromise&lt;V1MurmurhashResponse, DataProcessing.MurmurhashError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a MurmurHash3 hash

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataProcessing.murmurhash({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1MurmurhashResponse
} catch (err) {
  // TODO: Handle 'err' of type DataProcessing.MurmurhashError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataProcessing
  .murmurhash({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MurmurhashResponse
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
| <code>body</code> | <code>[V1MurmurhashRequest](src/models/v1-murmurhash-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataProcessing.murmurhash(request)`

- **OnSuccess**: <code>[V1MurmurhashResponse](src/models/v1-murmurhash-response.ts)</code>
- **OnError**: throws <code>[DataProcessing.MurmurhashError](src/resources/data-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataProcessing.murmurhash(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MurmurhashResponse, DataProcessing.MurmurhashError&gt;</code>, with `result.value` of type <code>[V1MurmurhashResponse](src/models/v1-murmurhash-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sqlexplainer(request: DataProcessing.SqlexplainerRequest, options?: RequestOptions): ApiPromise&lt;V1SqlexplainerResponse, DataProcessing.SqlexplainerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a plain English explanation of a SQL query

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataProcessing.sqlexplainer({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type V1SqlexplainerResponse
} catch (err) {
  // TODO: Handle 'err' of type DataProcessing.SqlexplainerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataProcessing
  .sqlexplainer({ body: { query: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SqlexplainerResponse
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
| <code>body</code> | <code>[V1SqlexplainerRequest](src/models/v1-sqlexplainer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataProcessing.sqlexplainer(request)`

- **OnSuccess**: <code>[V1SqlexplainerResponse](src/models/v1-sqlexplainer-response.ts)</code>
- **OnError**: throws <code>[DataProcessing.SqlexplainerError](src/resources/data-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataProcessing.sqlexplainer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SqlexplainerResponse, DataProcessing.SqlexplainerError&gt;</code>, with `result.value` of type <code>[V1SqlexplainerResponse](src/models/v1-sqlexplainer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataScraping

> Source: [DataScraping](src/resources/data-scraping.ts)

<details>
<summary><code>contactextractor(request: DataScraping.ContactextractorRequest, options?: RequestOptions): ApiPromise&lt;V1ContactextractorResponse, DataScraping.ContactextractorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract contact data from a web page

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataScraping.contactextractor({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1ContactextractorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataScraping.ContactextractorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataScraping
  .contactextractor({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ContactextractorResponse
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
| <code>body</code> | <code>[V1ContactextractorRequest](src/models/v1-contactextractor-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataScraping.contactextractor(request)`

- **OnSuccess**: <code>[V1ContactextractorResponse](src/models/v1-contactextractor-response.ts)</code>
- **OnError**: throws <code>[DataScraping.ContactextractorError](src/resources/data-scraping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataScraping.contactextractor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ContactextractorResponse, DataScraping.ContactextractorError&gt;</code>, with `result.value` of type <code>[V1ContactextractorResponse](src/models/v1-contactextractor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkscraper(request: DataScraping.LinkscraperRequest, options?: RequestOptions): ApiPromise&lt;V1LinkscraperResponse, DataScraping.LinkscraperError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Scrape all the links on a web page

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataScraping.linkscraper({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1LinkscraperResponse
} catch (err) {
  // TODO: Handle 'err' of type DataScraping.LinkscraperError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataScraping.linkscraper({ body: { url: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LinkscraperResponse
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
| <code>body</code> | <code>[V1LinkscraperRequest](src/models/v1-linkscraper-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataScraping.linkscraper(request)`

- **OnSuccess**: <code>[V1LinkscraperResponse](src/models/v1-linkscraper-response.ts)</code>
- **OnError**: throws <code>[DataScraping.LinkscraperError](src/resources/data-scraping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataScraping.linkscraper(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LinkscraperResponse, DataScraping.LinkscraperError&gt;</code>, with `result.value` of type <code>[V1LinkscraperResponse](src/models/v1-linkscraper-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>seoscraper(request: DataScraping.SeoscraperRequest, options?: RequestOptions): ApiPromise&lt;V1SeoscraperResponse, DataScraping.SeoscraperError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Scrape SEO data from a web page

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataScraping.seoscraper({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1SeoscraperResponse
} catch (err) {
  // TODO: Handle 'err' of type DataScraping.SeoscraperError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataScraping.seoscraper({ body: { url: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SeoscraperResponse
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
| <code>body</code> | <code>[V1SeoscraperRequest](src/models/v1-seoscraper-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataScraping.seoscraper(request)`

- **OnSuccess**: <code>[V1SeoscraperResponse](src/models/v1-seoscraper-response.ts)</code>
- **OnError**: throws <code>[DataScraping.SeoscraperError](src/resources/data-scraping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataScraping.seoscraper(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SeoscraperResponse, DataScraping.SeoscraperError&gt;</code>, with `result.value` of type <code>[V1SeoscraperResponse](src/models/v1-seoscraper-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webimagescraper(request: DataScraping.WebimagescraperRequest, options?: RequestOptions): ApiPromise&lt;V1WebimagescraperResponse, DataScraping.WebimagescraperError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Web Image Scraper is a simple tool for scraping images from a website. It returns the URLs of the images found on the website.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataScraping.webimagescraper({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1WebimagescraperResponse
} catch (err) {
  // TODO: Handle 'err' of type DataScraping.WebimagescraperError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataScraping
  .webimagescraper({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebimagescraperResponse
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
| <code>body</code> | <code>[V1WebimagescraperRequest](src/models/v1-webimagescraper-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataScraping.webimagescraper(request)`

- **OnSuccess**: <code>[V1WebimagescraperResponse](src/models/v1-webimagescraper-response.ts)</code>
- **OnError**: throws <code>[DataScraping.WebimagescraperError](src/resources/data-scraping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataScraping.webimagescraper(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebimagescraperResponse, DataScraping.WebimagescraperError&gt;</code>, with `result.value` of type <code>[V1WebimagescraperResponse](src/models/v1-webimagescraper-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webscreenshots(request: DataScraping.WebscreenshotsRequest, options?: RequestOptions): ApiPromise&lt;V1WebscreenshotsResponse, DataScraping.WebscreenshotsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Capture a screenshot of a web page

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataScraping.webscreenshots({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1WebscreenshotsResponse
} catch (err) {
  // TODO: Handle 'err' of type DataScraping.WebscreenshotsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataScraping
  .webscreenshots({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebscreenshotsResponse
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
| <code>body</code> | <code>[V1WebscreenshotsRequest](src/models/v1-webscreenshots-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataScraping.webscreenshots(request)`

- **OnSuccess**: <code>[V1WebscreenshotsResponse](src/models/v1-webscreenshots-response.ts)</code>
- **OnError**: throws <code>[DataScraping.WebscreenshotsError](src/resources/data-scraping.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataScraping.webscreenshots(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebscreenshotsResponse, DataScraping.WebscreenshotsError&gt;</code>, with `result.value` of type <code>[V1WebscreenshotsResponse](src/models/v1-webscreenshots-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DataValidation

> Source: [DataValidation](src/resources/data-validation.ts)

<details>
<summary><code>cardvalidator(request: DataValidation.CardvalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1CardvalidatorResponse, DataValidation.CardvalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a card number to ensure it is valid

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.cardvalidator({ number: "4900264223817524" });
  // TODO: Handle 'response' of type V1CardvalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.CardvalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation.cardvalidator({ number: "4900264223817524" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CardvalidatorResponse
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
| <code>number</code> | <code>string</code> | The card number to validate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.cardvalidator(request)`

- **OnSuccess**: <code>[V1CardvalidatorResponse](src/models/v1-cardvalidator-response.ts)</code>
- **OnError**: throws <code>[DataValidation.CardvalidatorError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.cardvalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CardvalidatorResponse, DataValidation.CardvalidatorError&gt;</code>, with `result.value` of type <code>[V1CardvalidatorResponse](src/models/v1-cardvalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disposablephone(request: DataValidation.DisposablephoneRequest, options?: RequestOptions): ApiPromise&lt;V1DisposablephoneResponse, DataValidation.DisposablephoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether a given phone number is a known disposable or temporary number from SMS receiving services.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.disposablephone({ phone: "+12085813945" });
  // TODO: Handle 'response' of type V1DisposablephoneResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.DisposablephoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation.disposablephone({ phone: "+12085813945" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DisposablephoneResponse
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
| <code>phone</code> | <code>string</code> | The phone number to check in E.164 format (e.g., +12085813945) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.disposablephone(request)`

- **OnSuccess**: <code>[V1DisposablephoneResponse](src/models/v1-disposablephone-response.ts)</code>
- **OnError**: throws <code>[DataValidation.DisposablephoneError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.disposablephone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DisposablephoneResponse, DataValidation.DisposablephoneError&gt;</code>, with `result.value` of type <code>[V1DisposablephoneResponse](src/models/v1-disposablephone-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>emaildisposablechecker(request: DataValidation.EmaildisposablecheckerRequest, options?: RequestOptions): ApiPromise&lt;V1EmaildisposablecheckerResponse, DataValidation.EmaildisposablecheckerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if an email address is disposable

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.emaildisposablechecker({ email: "support@myspace.com" });
  // TODO: Handle 'response' of type V1EmaildisposablecheckerResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.EmaildisposablecheckerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation
  .emaildisposablechecker({ email: "support@myspace.com" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1EmaildisposablecheckerResponse
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
| <code>email</code> | <code>string</code> | The email address to check (e.g., support@myspace.com) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.emaildisposablechecker(request)`

- **OnSuccess**: <code>[V1EmaildisposablecheckerResponse](src/models/v1-emaildisposablechecker-response.ts)</code>
- **OnError**: throws <code>[DataValidation.EmaildisposablecheckerError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.emaildisposablechecker(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1EmaildisposablecheckerResponse, DataValidation.EmaildisposablecheckerError&gt;</code>, with `result.value` of type <code>[V1EmaildisposablecheckerResponse](src/models/v1-emaildisposablechecker-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>emailvalidator(request: DataValidation.EmailvalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1EmailvalidatorResponse, DataValidation.EmailvalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate if an email address is valid and exists

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.emailvalidator({ email: "support@myspace.com" });
  // TODO: Handle 'response' of type V1EmailvalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.EmailvalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation.emailvalidator({ email: "support@myspace.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1EmailvalidatorResponse
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
| <code>email</code> | <code>string</code> | The email address to validate (e.g., support@myspace.com) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.emailvalidator(request)`

- **OnSuccess**: <code>[V1EmailvalidatorResponse](src/models/v1-emailvalidator-response.ts)</code>
- **OnError**: throws <code>[DataValidation.EmailvalidatorError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.emailvalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1EmailvalidatorResponse, DataValidation.EmailvalidatorError&gt;</code>, with `result.value` of type <code>[V1EmailvalidatorResponse](src/models/v1-emailvalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>passwordstrength(request: DataValidation.PasswordstrengthRequest, options?: RequestOptions): ApiPromise&lt;V1PasswordstrengthResponse, DataValidation.PasswordstrengthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the strength of a password

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.passwordstrength({ password: "Password123" });
  // TODO: Handle 'response' of type V1PasswordstrengthResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.PasswordstrengthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation.passwordstrength({ password: "Password123" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PasswordstrengthResponse
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
| <code>password</code> | <code>string</code> | The password to check the strength of |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.passwordstrength(request)`

- **OnSuccess**: <code>[V1PasswordstrengthResponse](src/models/v1-passwordstrength-response.ts)</code>
- **OnError**: throws <code>[DataValidation.PasswordstrengthError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.passwordstrength(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PasswordstrengthResponse, DataValidation.PasswordstrengthError&gt;</code>, with `result.value` of type <code>[V1PasswordstrengthResponse](src/models/v1-passwordstrength-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>phonenumbervalidator(request: DataValidation.PhonenumbervalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1PhonenumbervalidatorResponse, DataValidation.PhonenumbervalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a phone number

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.phonenumbervalidator({
    number: "816-555-1017",
    country: "us",
  });
  // TODO: Handle 'response' of type V1PhonenumbervalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.PhonenumbervalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation
  .phonenumbervalidator({ number: "816-555-1017", country: "us" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PhonenumbervalidatorResponse
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
| <code>number</code> | <code>string</code> | The phone number to validate |
| <code>country</code> | <code>string</code> | The country code of the phone number (e.g., us, uk) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.phonenumbervalidator(request)`

- **OnSuccess**: <code>[V1PhonenumbervalidatorResponse](src/models/v1-phonenumbervalidator-response.ts)</code>
- **OnError**: throws <code>[DataValidation.PhonenumbervalidatorError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.phonenumbervalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PhonenumbervalidatorResponse, DataValidation.PhonenumbervalidatorError&gt;</code>, with `result.value` of type <code>[V1PhonenumbervalidatorResponse](src/models/v1-phonenumbervalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>seovalidator(request: DataValidation.SeovalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1SeovalidatorResponse, DataValidation.SeovalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate the SEO metrics of a web page

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.seovalidator({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1SeovalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.SeovalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation
  .seovalidator({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SeovalidatorResponse
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
| <code>body</code> | <code>[V1SeovalidatorRequest](src/models/v1-seovalidator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.seovalidator(request)`

- **OnSuccess**: <code>[V1SeovalidatorResponse](src/models/v1-seovalidator-response.ts)</code>
- **OnError**: throws <code>[DataValidation.SeovalidatorError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.seovalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SeovalidatorResponse, DataValidation.SeovalidatorError&gt;</code>, with `result.value` of type <code>[V1SeovalidatorResponse](src/models/v1-seovalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>spamdetector(request: DataValidation.SpamdetectorRequest, options?: RequestOptions): ApiPromise&lt;V1SpamdetectorResponse, DataValidation.SpamdetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect spam in a body of text. Also utilize an email address or IP address to validate the given text against the spam database

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.spamdetector({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1SpamdetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.SpamdetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation
  .spamdetector({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SpamdetectorResponse
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
| <code>body</code> | <code>[V1SpamdetectorRequest](src/models/v1-spamdetector-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.spamdetector(request)`

- **OnSuccess**: <code>[V1SpamdetectorResponse](src/models/v1-spamdetector-response.ts)</code>
- **OnError**: throws <code>[DataValidation.SpamdetectorError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.spamdetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SpamdetectorResponse, DataValidation.SpamdetectorError&gt;</code>, with `result.value` of type <code>[V1SpamdetectorResponse](src/models/v1-spamdetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usernameprofanity(request: DataValidation.UsernameprofanityRequest, options?: RequestOptions): ApiPromise&lt;V1UsernameprofanityResponse, DataValidation.UsernameprofanityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if a username is inappropriate or profane

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dataValidation.usernameprofanity({ username: "b00bs" });
  // TODO: Handle 'response' of type V1UsernameprofanityResponse
} catch (err) {
  // TODO: Handle 'err' of type DataValidation.UsernameprofanityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataValidation.usernameprofanity({ username: "b00bs" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UsernameprofanityResponse
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
| <code>username</code> | <code>string</code> | The username to check if it is inappropriate or profane |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataValidation.usernameprofanity(request)`

- **OnSuccess**: <code>[V1UsernameprofanityResponse](src/models/v1-usernameprofanity-response.ts)</code>
- **OnError**: throws <code>[DataValidation.UsernameprofanityError](src/resources/data-validation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataValidation.usernameprofanity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UsernameprofanityResponse, DataValidation.UsernameprofanityError&gt;</code>, with `result.value` of type <code>[V1UsernameprofanityResponse](src/models/v1-usernameprofanity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/resources/documents.ts)

<details>
<summary><code>htmltopdf(request: Documents.HtmltopdfRequest, options?: RequestOptions): ApiPromise&lt;V1HtmltopdfResponse, Documents.HtmltopdfError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert HTML content to a PDF file

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.htmltopdf({ body: { html: "some example string" } });
  // TODO: Handle 'response' of type V1HtmltopdfResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.HtmltopdfError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.htmltopdf({ body: { html: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HtmltopdfResponse
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
| <code>body</code> | <code>[V1HtmltopdfRequest](src/models/v1-htmltopdf-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.htmltopdf(request)`

- **OnSuccess**: <code>[V1HtmltopdfResponse](src/models/v1-htmltopdf-response.ts)</code>
- **OnError**: throws <code>[Documents.HtmltopdfError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.htmltopdf(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HtmltopdfResponse, Documents.HtmltopdfError&gt;</code>, with `result.value` of type <code>[V1HtmltopdfResponse](src/models/v1-htmltopdf-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>invoicegenerator(request: Documents.InvoicegeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1InvoicegeneratorResponse, Documents.InvoicegeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an invoice

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.invoicegenerator({
    body: {
      invoiceNumber: "some example string",
      fromName: "some example string",
      fromStreet: "some example string",
      fromCity: "some example string",
      fromState: "some example string",
      fromZip: "some example string",
      toName: "some example string",
      toStreet: "some example string",
      toCity: "some example string",
      toState: "some example string",
      toZip: "some example string",
      items: "some example string",
    },
  });
  // TODO: Handle 'response' of type V1InvoicegeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.InvoicegeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents
  .invoicegenerator({
    body: {
      invoiceNumber: "some example string",
      fromName: "some example string",
      fromStreet: "some example string",
      fromCity: "some example string",
      fromState: "some example string",
      fromZip: "some example string",
      toName: "some example string",
      toStreet: "some example string",
      toCity: "some example string",
      toState: "some example string",
      toZip: "some example string",
      items: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1InvoicegeneratorResponse
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
| <code>body</code> | <code>[V1InvoicegeneratorRequest](src/models/v1-invoicegenerator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.invoicegenerator(request)`

- **OnSuccess**: <code>[V1InvoicegeneratorResponse](src/models/v1-invoicegenerator-response.ts)</code>
- **OnError**: throws <code>[Documents.InvoicegeneratorError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.invoicegenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1InvoicegeneratorResponse, Documents.InvoicegeneratorError&gt;</code>, with `result.value` of type <code>[V1InvoicegeneratorResponse](src/models/v1-invoicegenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>websitetopdf(request: Documents.WebsitetopdfRequest, options?: RequestOptions): ApiPromise&lt;V1WebsitetopdfResponse, Documents.WebsitetopdfError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a website to a PDF file

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.documents.websitetopdf({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1WebsitetopdfResponse
} catch (err) {
  // TODO: Handle 'err' of type Documents.WebsitetopdfError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.documents.websitetopdf({ body: { url: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebsitetopdfResponse
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
| <code>body</code> | <code>[V1WebsitetopdfRequest](src/models/v1-websitetopdf-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.documents.websitetopdf(request)`

- **OnSuccess**: <code>[V1WebsitetopdfResponse](src/models/v1-websitetopdf-response.ts)</code>
- **OnError**: throws <code>[Documents.WebsitetopdfError](src/resources/documents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.documents.websitetopdf(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebsitetopdfResponse, Documents.WebsitetopdfError&gt;</code>, with `result.value` of type <code>[V1WebsitetopdfResponse](src/models/v1-websitetopdf-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DomainData

> Source: [DomainData](src/resources/domain-data.ts)

<details>
<summary><code>bimivalidator(request: DomainData.BimivalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1BimivalidatorResponse, DomainData.BimivalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

BIMI Validator checks if a domain has a valid BIMI record published in DNS. BIMI enables domain owners to display verified logos in supported email clients.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.bimivalidator({ domain: "ebay.com" });
  // TODO: Handle 'response' of type V1BimivalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.BimivalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.bimivalidator({ domain: "ebay.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BimivalidatorResponse
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
| <code>domain</code> | <code>string</code> | The domain to validate the BIMI record for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.bimivalidator(request)`

- **OnSuccess**: <code>[V1BimivalidatorResponse](src/models/v1-bimivalidator-response.ts)</code>
- **OnError**: throws <code>[DomainData.BimivalidatorError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.bimivalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BimivalidatorResponse, DomainData.BimivalidatorError&gt;</code>, with `result.value` of type <code>[V1BimivalidatorResponse](src/models/v1-bimivalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dkimvalidator(request: DomainData.DkimvalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1DkimvalidatorResponse, DomainData.DkimvalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DKIM Validator checks the DomainKeys Identified Mail (DKIM) DNS records for a domain to verify that they are present and correctly formatted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.dkimvalidator({ domain: "github.com", selector: "s1" });
  // TODO: Handle 'response' of type V1DkimvalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.DkimvalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.dkimvalidator({ domain: "github.com", selector: "s1" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DkimvalidatorResponse
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
| <code>domain</code> | <code>string</code> | The domain to validate the DKIM record for |
| <code>selector?</code> | <code>string</code> | The DKIM selector to look up (the label before ._domainkey). When omitted, a list of common selectors is tried |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.dkimvalidator(request)`

- **OnSuccess**: <code>[V1DkimvalidatorResponse](src/models/v1-dkimvalidator-response.ts)</code>
- **OnError**: throws <code>[DomainData.DkimvalidatorError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.dkimvalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DkimvalidatorResponse, DomainData.DkimvalidatorError&gt;</code>, with `result.value` of type <code>[V1DkimvalidatorResponse](src/models/v1-dkimvalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dmarcvalidator(request: DomainData.DmarcvalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1DmarcvalidatorResponse, DomainData.DmarcvalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DMARC Validator checks the Domain-based Message Authentication, Reporting and Conformance (DMARC) record for a domain to ensure it is correctly configured.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.dmarcvalidator({ domain: "paypal.com" });
  // TODO: Handle 'response' of type V1DmarcvalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.DmarcvalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.dmarcvalidator({ domain: "paypal.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DmarcvalidatorResponse
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
| <code>domain</code> | <code>string</code> | The domain to validate the DMARC record for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.dmarcvalidator(request)`

- **OnSuccess**: <code>[V1DmarcvalidatorResponse](src/models/v1-dmarcvalidator-response.ts)</code>
- **OnError**: throws <code>[DomainData.DmarcvalidatorError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.dmarcvalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DmarcvalidatorResponse, DomainData.DmarcvalidatorError&gt;</code>, with `result.value` of type <code>[V1DmarcvalidatorResponse](src/models/v1-dmarcvalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dnslookup(request: DomainData.DnslookupRequest, options?: RequestOptions): ApiPromise&lt;V1DnslookupResponse, DomainData.DnslookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the DNS records of a domain

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.dnslookup({ domain: "myspace.com" });
  // TODO: Handle 'response' of type V1DnslookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.DnslookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.dnslookup({ domain: "myspace.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DnslookupResponse
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
| <code>domain</code> | <code>string</code> | The domain name for which you want to lookup the DNS records. Do not include the protocol, and not subdomains (e.g., myspace.com) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.dnslookup(request)`

- **OnSuccess**: <code>[V1DnslookupResponse](src/models/v1-dnslookup-response.ts)</code>
- **OnError**: throws <code>[DomainData.DnslookupError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.dnslookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DnslookupResponse, DomainData.DnslookupError&gt;</code>, with `result.value` of type <code>[V1DnslookupResponse](src/models/v1-dnslookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dnspropagation(request: DomainData.DnspropagationRequest, options?: RequestOptions): ApiPromise&lt;V1DnspropagationResponse, DomainData.DnspropagationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check DNS propagation for a domain across global DNS servers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.dnspropagation({ domain: "google.com", type: "A" });
  // TODO: Handle 'response' of type V1DnspropagationResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.DnspropagationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.dnspropagation({ domain: "google.com", type: "A" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DnspropagationResponse
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
| <code>domain</code> | <code>string</code> | The domain name to check propagation for |
| <code>type?</code> | <code>string</code> | The DNS record type to check |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.dnspropagation(request)`

- **OnSuccess**: <code>[V1DnspropagationResponse](src/models/v1-dnspropagation-response.ts)</code>
- **OnError**: throws <code>[DomainData.DnspropagationError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.dnspropagation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DnspropagationResponse, DomainData.DnspropagationError&gt;</code>, with `result.value` of type <code>[V1DnspropagationResponse](src/models/v1-dnspropagation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dnsseccheck(request: DomainData.DnsseccheckRequest, options?: RequestOptions): ApiPromise&lt;V1DnsseccheckResponse, DomainData.DnsseccheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate DNSSEC configuration for a domain

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.dnsseccheck({ domain: "cloudflare.com" });
  // TODO: Handle 'response' of type V1DnsseccheckResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.DnsseccheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.dnsseccheck({ domain: "cloudflare.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DnsseccheckResponse
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
| <code>domain</code> | <code>string</code> | The domain name to check DNSSEC configuration for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.dnsseccheck(request)`

- **OnSuccess**: <code>[V1DnsseccheckResponse](src/models/v1-dnsseccheck-response.ts)</code>
- **OnError**: throws <code>[DomainData.DnsseccheckError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.dnsseccheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DnsseccheckResponse, DomainData.DnsseccheckError&gt;</code>, with `result.value` of type <code>[V1DnsseccheckResponse](src/models/v1-dnsseccheck-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>domainavailability(request: DomainData.DomainavailabilityRequest, options?: RequestOptions): ApiPromise&lt;V1DomainavailabilityResponse, DomainData.DomainavailabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if a domain is available

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.domainavailability({ domain: "myspace.com" });
  // TODO: Handle 'response' of type V1DomainavailabilityResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.DomainavailabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.domainavailability({ domain: "myspace.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DomainavailabilityResponse
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
| <code>domain</code> | <code>string</code> | The domain to check if it is available |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.domainavailability(request)`

- **OnSuccess**: <code>[V1DomainavailabilityResponse](src/models/v1-domainavailability-response.ts)</code>
- **OnError**: throws <code>[DomainData.DomainavailabilityError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.domainavailability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DomainavailabilityResponse, DomainData.DomainavailabilityError&gt;</code>, with `result.value` of type <code>[V1DomainavailabilityResponse](src/models/v1-domainavailability-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>domainexpiration(request: DomainData.DomainexpirationRequest, options?: RequestOptions): ApiPromise&lt;V1DomainexpirationResponse, DomainData.DomainexpirationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the expiration date of a domain

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.domainexpiration({ domain: "myspace.com" });
  // TODO: Handle 'response' of type V1DomainexpirationResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.DomainexpirationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.domainexpiration({ domain: "myspace.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DomainexpirationResponse
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
| <code>domain</code> | <code>string</code> | The domain to check the expiration date of |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.domainexpiration(request)`

- **OnSuccess**: <code>[V1DomainexpirationResponse](src/models/v1-domainexpiration-response.ts)</code>
- **OnError**: throws <code>[DomainData.DomainexpirationError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.domainexpiration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DomainexpirationResponse, DomainData.DomainexpirationError&gt;</code>, with `result.value` of type <code>[V1DomainexpirationResponse](src/models/v1-domainexpiration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fullyqualifieddomain(request: DomainData.FullyqualifieddomainRequest, options?: RequestOptions): ApiPromise&lt;V1FullyqualifieddomainResponse, DomainData.FullyqualifieddomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the fully qualified domain name of an ip

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.fullyqualifieddomain({ ip: "199.30.24.0" });
  // TODO: Handle 'response' of type V1FullyqualifieddomainResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.FullyqualifieddomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.fullyqualifieddomain({ ip: "199.30.24.0" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FullyqualifieddomainResponse
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
| <code>ip</code> | <code>string</code> | The IP address to get the fully qualified domain name of |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.fullyqualifieddomain(request)`

- **OnSuccess**: <code>[V1FullyqualifieddomainResponse](src/models/v1-fullyqualifieddomain-response.ts)</code>
- **OnError**: throws <code>[DomainData.FullyqualifieddomainError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.fullyqualifieddomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FullyqualifieddomainResponse, DomainData.FullyqualifieddomainError&gt;</code>, with `result.value` of type <code>[V1FullyqualifieddomainResponse](src/models/v1-fullyqualifieddomain-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mxlookup(request: DomainData.MxlookupRequest, options?: RequestOptions): ApiPromise&lt;V1MxlookupResponse, DomainData.MxlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

MX Lookup is a simple tool for getting MX records for a domain. It returns the MX records for the given domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.mxlookup({ domain: "yahoo.com" });
  // TODO: Handle 'response' of type V1MxlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.MxlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.mxlookup({ domain: "yahoo.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MxlookupResponse
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
| <code>domain</code> | <code>string</code> | The domain you want to get the MX records for (e.g. yahoo.com) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.mxlookup(request)`

- **OnSuccess**: <code>[V1MxlookupResponse](src/models/v1-mxlookup-response.ts)</code>
- **OnError**: throws <code>[DomainData.MxlookupError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.mxlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MxlookupResponse, DomainData.MxlookupError&gt;</code>, with `result.value` of type <code>[V1MxlookupResponse](src/models/v1-mxlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reversednslookup(request: DomainData.ReversednslookupRequest, options?: RequestOptions): ApiPromise&lt;V1ReversednslookupResponse, DomainData.ReversednslookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the hostname associated with an IP address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.reversednslookup({ ip: "8.8.8.8" });
  // TODO: Handle 'response' of type V1ReversednslookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.ReversednslookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.reversednslookup({ ip: "8.8.8.8" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ReversednslookupResponse
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
| <code>ip</code> | <code>string</code> | The IP address to lookup (IPv4 or IPv6) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.reversednslookup(request)`

- **OnSuccess**: <code>[V1ReversednslookupResponse](src/models/v1-reversednslookup-response.ts)</code>
- **OnError**: throws <code>[DomainData.ReversednslookupError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.reversednslookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ReversednslookupResponse, DomainData.ReversednslookupError&gt;</code>, with `result.value` of type <code>[V1ReversednslookupResponse](src/models/v1-reversednslookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>spfvalidator(request: DomainData.SpfvalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1SpfvalidatorResponse, DomainData.SpfvalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

SPF Validator checks the Sender Policy Framework (SPF) DNS record for a domain to verify if it's valid and optionally whether a given IP address is authorized to send emails for that domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.spfvalidator({ domain: "myspace.com" });
  // TODO: Handle 'response' of type V1SpfvalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.SpfvalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.spfvalidator({ domain: "myspace.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SpfvalidatorResponse
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
| <code>domain</code> | <code>string</code> | The domain to validate the SPF record for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.spfvalidator(request)`

- **OnSuccess**: <code>[V1SpfvalidatorResponse](src/models/v1-spfvalidator-response.ts)</code>
- **OnError**: throws <code>[DomainData.SpfvalidatorError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.spfvalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SpfvalidatorResponse, DomainData.SpfvalidatorError&gt;</code>, with `result.value` of type <code>[V1SpfvalidatorResponse](src/models/v1-spfvalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sslchecker(request: DomainData.SslcheckerRequest, options?: RequestOptions): ApiPromise&lt;V1SslcheckerResponse, DomainData.SslcheckerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the SSL certificate of a domain

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.sslchecker({ domain: "ebay.com" });
  // TODO: Handle 'response' of type V1SslcheckerResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.SslcheckerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.sslchecker({ domain: "ebay.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SslcheckerResponse
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
| <code>domain</code> | <code>string</code> | The domain of the website to check the SSL certificate of |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.sslchecker(request)`

- **OnSuccess**: <code>[V1SslcheckerResponse](src/models/v1-sslchecker-response.ts)</code>
- **OnError**: throws <code>[DomainData.SslcheckerError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.sslchecker(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SslcheckerResponse, DomainData.SslcheckerError&gt;</code>, with `result.value` of type <code>[V1SslcheckerResponse](src/models/v1-sslchecker-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>subdomainfinder(request: DomainData.SubdomainfinderRequest, options?: RequestOptions): ApiPromise&lt;V1SubdomainfinderResponse, DomainData.SubdomainfinderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subdomain Finder is a simple tool for finding all the available subdomains for a given domain. It returns a list of all the available subdomains for the given domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.subdomainfinder({
    domain: "google.com",
    limit: 5,
    deepScan: true,
  });
  // TODO: Handle 'response' of type V1SubdomainfinderResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.SubdomainfinderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData
  .subdomainfinder({ domain: "google.com", limit: 5, deepScan: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SubdomainfinderResponse
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
| <code>domain</code> | <code>string</code> | The domain you want to find all the available subdomains for (e.g. google.com) |
| <code>limit?</code> | <code>number</code> | Limit the number of subdomains to detect |
| <code>deepScan?</code> | <code>boolean</code> | Search the full wordlist instead of only certificate transparency and common names. Slower, and may still report complete: false when the time limit is reached |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.subdomainfinder(request)`

- **OnSuccess**: <code>[V1SubdomainfinderResponse](src/models/v1-subdomainfinder-response.ts)</code>
- **OnError**: throws <code>[DomainData.SubdomainfinderError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.subdomainfinder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SubdomainfinderResponse, DomainData.SubdomainfinderError&gt;</code>, with `result.value` of type <code>[V1SubdomainfinderResponse](src/models/v1-subdomainfinder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>urllookup(request: DomainData.UrllookupRequest, options?: RequestOptions): ApiPromise&lt;V1UrllookupResponse, DomainData.UrllookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the location of a URL

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.urllookup({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1UrllookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.UrllookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.urllookup({ body: { url: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UrllookupResponse
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
| <code>body</code> | <code>[V1UrllookupRequest](src/models/v1-urllookup-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.urllookup(request)`

- **OnSuccess**: <code>[V1UrllookupResponse](src/models/v1-urllookup-response.ts)</code>
- **OnError**: throws <code>[DomainData.UrllookupError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.urllookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UrllookupResponse, DomainData.UrllookupError&gt;</code>, with `result.value` of type <code>[V1UrllookupResponse](src/models/v1-urllookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>urltitle(request: DomainData.UrltitleRequest, options?: RequestOptions): ApiPromise&lt;V1UrltitleResponse, DomainData.UrltitleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the title of a web page based on the URL

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.urltitle({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1UrltitleResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.UrltitleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.urltitle({ body: { url: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UrltitleResponse
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
| <code>body</code> | <code>[V1UrltitleRequest](src/models/v1-urltitle-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.urltitle(request)`

- **OnSuccess**: <code>[V1UrltitleResponse](src/models/v1-urltitle-response.ts)</code>
- **OnError**: throws <code>[DomainData.UrltitleError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.urltitle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UrltitleResponse, DomainData.UrltitleError&gt;</code>, with `result.value` of type <code>[V1UrltitleResponse](src/models/v1-urltitle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>urlunshortener(request: DomainData.UrlunshortenerRequest, options?: RequestOptions): ApiPromise&lt;V1UrlunshortenerResponse, DomainData.UrlunshortenerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unshorten a shortened URL

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.urlunshortener({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1UrlunshortenerResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.UrlunshortenerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.urlunshortener({ body: { url: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UrlunshortenerResponse
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
| <code>body</code> | <code>[V1UrlunshortenerRequest](src/models/v1-urlunshortener-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.urlunshortener(request)`

- **OnSuccess**: <code>[V1UrlunshortenerResponse](src/models/v1-urlunshortener-response.ts)</code>
- **OnError**: throws <code>[DomainData.UrlunshortenerError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.urlunshortener(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UrlunshortenerResponse, DomainData.UrlunshortenerError&gt;</code>, with `result.value` of type <code>[V1UrlunshortenerResponse](src/models/v1-urlunshortener-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>whoislookup(request: DomainData.WhoislookupRequest, options?: RequestOptions): ApiPromise&lt;V1WhoislookupResponse, DomainData.WhoislookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup domain registration data based on the domain name

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domainData.whoislookup({ domain: "myspace.com" });
  // TODO: Handle 'response' of type V1WhoislookupResponse
} catch (err) {
  // TODO: Handle 'err' of type DomainData.WhoislookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domainData.whoislookup({ domain: "myspace.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WhoislookupResponse
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
| <code>domain</code> | <code>string</code> | The domain name for which you want to get the registration data (e.g., myspace.com) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domainData.whoislookup(request)`

- **OnSuccess**: <code>[V1WhoislookupResponse](src/models/v1-whoislookup-response.ts)</code>
- **OnError**: throws <code>[DomainData.WhoislookupError](src/resources/domain-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domainData.whoislookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WhoislookupResponse, DomainData.WhoislookupError&gt;</code>, with `result.value` of type <code>[V1WhoislookupResponse](src/models/v1-whoislookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Entertainment

> Source: [Entertainment](src/resources/entertainment.ts)

<details>
<summary><code>advice(options?: RequestOptions): ApiPromise&lt;V1AdviceResponse, Entertainment.AdviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Advice Generator is a simple tool for generating random pieces of advice. It returns a random piece of advice.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.advice();
  // TODO: Handle 'response' of type V1AdviceResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.AdviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.advice().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AdviceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.advice()`

- **OnSuccess**: <code>[V1AdviceResponse](src/models/v1-advice-response.ts)</code>
- **OnError**: throws <code>[Entertainment.AdviceError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.advice().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AdviceResponse, Entertainment.AdviceError&gt;</code>, with `result.value` of type <code>[V1AdviceResponse](src/models/v1-advice-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bucketlist(options?: RequestOptions): ApiPromise&lt;V1BucketlistResponse, Entertainment.BucketlistError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bucket List is a simple tool for getting a random bucket list item. It returns a random bucket list item

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.bucketlist();
  // TODO: Handle 'response' of type V1BucketlistResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.BucketlistError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.bucketlist().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BucketlistResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.bucketlist()`

- **OnSuccess**: <code>[V1BucketlistResponse](src/models/v1-bucketlist-response.ts)</code>
- **OnError**: throws <code>[Entertainment.BucketlistError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.bucketlist().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BucketlistResponse, Entertainment.BucketlistError&gt;</code>, with `result.value` of type <code>[V1BucketlistResponse](src/models/v1-bucketlist-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>charades(request?: Entertainment.CharadesRequest, options?: RequestOptions): ApiPromise&lt;V1CharadesResponse, Entertainment.CharadesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random charades word from category

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.charades({ category: "movies" });
  // TODO: Handle 'response' of type V1CharadesResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.CharadesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.charades({ category: "movies" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CharadesResponse
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
| <code>category?</code> | <code>string</code> | Category: all, movies, books, songs, actions, animals, objects |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.charades(request)`

- **OnSuccess**: <code>[V1CharadesResponse](src/models/v1-charades-response.ts)</code>
- **OnError**: throws <code>[Entertainment.CharadesError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.charades(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CharadesResponse, Entertainment.CharadesError&gt;</code>, with `result.value` of type <code>[V1CharadesResponse](src/models/v1-charades-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chessmovevalidator(request: Entertainment.ChessmovevalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1ChessmovevalidatorResponse, Entertainment.ChessmovevalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate algebraic chess notation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.chessmovevalidator({ move: "Nf3" });
  // TODO: Handle 'response' of type V1ChessmovevalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.ChessmovevalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.chessmovevalidator({ move: "Nf3" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ChessmovevalidatorResponse
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
| <code>move</code> | <code>string</code> | Chess move in algebraic notation |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.chessmovevalidator(request)`

- **OnSuccess**: <code>[V1ChessmovevalidatorResponse](src/models/v1-chessmovevalidator-response.ts)</code>
- **OnError**: throws <code>[Entertainment.ChessmovevalidatorError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.chessmovevalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ChessmovevalidatorResponse, Entertainment.ChessmovevalidatorError&gt;</code>, with `result.value` of type <code>[V1ChessmovevalidatorResponse](src/models/v1-chessmovevalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chucknorris(options?: RequestOptions): ApiPromise&lt;V1ChucknorrisResponse, Entertainment.ChucknorrisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random Chuck Norris joke

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.chucknorris();
  // TODO: Handle 'response' of type V1ChucknorrisResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.ChucknorrisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.chucknorris().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ChucknorrisResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.chucknorris()`

- **OnSuccess**: <code>[V1ChucknorrisResponse](src/models/v1-chucknorris-response.ts)</code>
- **OnError**: throws <code>[Entertainment.ChucknorrisError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.chucknorris().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ChucknorrisResponse, Entertainment.ChucknorrisError&gt;</code>, with `result.value` of type <code>[V1ChucknorrisResponse](src/models/v1-chucknorris-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>compliments(request?: Entertainment.ComplimentsRequest, options?: RequestOptions): ApiPromise&lt;V1ComplimentsResponse, Entertainment.ComplimentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a unique compliment

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.compliments({ adult: false });
  // TODO: Handle 'response' of type V1ComplimentsResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.ComplimentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.compliments({ adult: false }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ComplimentsResponse
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
| <code>adult?</code> | <code>boolean</code> | Include flirty/romantic compliments |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.compliments(request)`

- **OnSuccess**: <code>[V1ComplimentsResponse](src/models/v1-compliments-response.ts)</code>
- **OnError**: throws <code>[Entertainment.ComplimentsError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.compliments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ComplimentsResponse, Entertainment.ComplimentsError&gt;</code>, with `result.value` of type <code>[V1ComplimentsResponse](src/models/v1-compliments-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dadjokes(options?: RequestOptions): ApiPromise&lt;V1DadjokesResponse, Entertainment.DadjokesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.dadjokes();
  // TODO: Handle 'response' of type V1DadjokesResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.DadjokesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.dadjokes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DadjokesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.dadjokes()`

- **OnSuccess**: <code>[V1DadjokesResponse](src/models/v1-dadjokes-response.ts)</code>
- **OnError**: throws <code>[Entertainment.DadjokesError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.dadjokes().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DadjokesResponse, Entertainment.DadjokesError&gt;</code>, with `result.value` of type <code>[V1DadjokesResponse](src/models/v1-dadjokes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dndgenerator(request?: Entertainment.DndgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1DndgeneratorResponse, Entertainment.DndgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random D&D content by type

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.dndgenerator({ type: "character", count: 1 });
  // TODO: Handle 'response' of type V1DndgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.DndgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.dndgenerator({ type: "character", count: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DndgeneratorResponse
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
| <code>type?</code> | <code>string</code> | Content type to generate |
| <code>count?</code> | <code>number</code> | Number of items to generate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.dndgenerator(request)`

- **OnSuccess**: <code>[V1DndgeneratorResponse](src/models/v1-dndgenerator-response.ts)</code>
- **OnError**: throws <code>[Entertainment.DndgeneratorError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.dndgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DndgeneratorResponse, Entertainment.DndgeneratorError&gt;</code>, with `result.value` of type <code>[V1DndgeneratorResponse](src/models/v1-dndgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fortuneteller(request?: Entertainment.FortunetellerRequest, options?: RequestOptions): ApiPromise&lt;V1FortunetellerResponse, Entertainment.FortunetellerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate personalized AI fortune with insights and lucky elements

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.fortuneteller({
    category: "general",
    question: "What does the future hold for me?",
  });
  // TODO: Handle 'response' of type V1FortunetellerResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.FortunetellerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment
  .fortuneteller({ category: "general", question: "What does the future hold for me?" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FortunetellerResponse
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
| <code>category?</code> | <code>string</code> | Fortune category |
| <code>question?</code> | <code>string</code> | Optional question for personalized fortune (max 500 characters) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.fortuneteller(request)`

- **OnSuccess**: <code>[V1FortunetellerResponse](src/models/v1-fortuneteller-response.ts)</code>
- **OnError**: throws <code>[Entertainment.FortunetellerError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.fortuneteller(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FortunetellerResponse, Entertainment.FortunetellerError&gt;</code>, with `result.value` of type <code>[V1FortunetellerResponse](src/models/v1-fortuneteller-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>historicalevents(request: Entertainment.HistoricaleventsRequest, options?: RequestOptions): ApiPromise&lt;V1HistoricaleventsResponse, Entertainment.HistoricaleventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of historical events that match a specific keyword

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.historicalevents({ text: "moon landing" });
  // TODO: Handle 'response' of type V1HistoricaleventsResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.HistoricaleventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.historicalevents({ text: "moon landing" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HistoricaleventsResponse
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
| <code>text</code> | <code>string</code> | The keyword for which you want to get the historical events (e.g., moon landing) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.historicalevents(request)`

- **OnSuccess**: <code>[V1HistoricaleventsResponse](src/models/v1-historicalevents-response.ts)</code>
- **OnError**: throws <code>[Entertainment.HistoricaleventsError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.historicalevents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HistoricaleventsResponse, Entertainment.HistoricaleventsError&gt;</code>, with `result.value` of type <code>[V1HistoricaleventsResponse](src/models/v1-historicalevents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lovecalculator(request: Entertainment.LovecalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1LovecalculatorResponse, Entertainment.LovecalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate the love compatibility between two names

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.lovecalculator({ name1: "John", name2: "Jane" });
  // TODO: Handle 'response' of type V1LovecalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.LovecalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.lovecalculator({ name1: "John", name2: "Jane" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LovecalculatorResponse
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
| <code>name1</code> | <code>string</code> | The first name to calculate love compatibility |
| <code>name2</code> | <code>string</code> | The second name to calculate love compatibility |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.lovecalculator(request)`

- **OnSuccess**: <code>[V1LovecalculatorResponse](src/models/v1-lovecalculator-response.ts)</code>
- **OnError**: throws <code>[Entertainment.LovecalculatorError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.lovecalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LovecalculatorResponse, Entertainment.LovecalculatorError&gt;</code>, with `result.value` of type <code>[V1LovecalculatorResponse](src/models/v1-lovecalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>magic8Ball(request?: Entertainment.Magic8BallRequest, options?: RequestOptions): ApiPromise&lt;V1Magic8BallResponse, Entertainment.Magic8BallError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random Magic 8-Ball prediction

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.magic8Ball({ question: "Will it rain today?" });
  // TODO: Handle 'response' of type V1Magic8BallResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.Magic8BallError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.magic8Ball({ question: "Will it rain today?" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1Magic8BallResponse
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
| <code>question?</code> | <code>string</code> | Your question for the Magic 8-Ball (optional) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.magic8Ball(request)`

- **OnSuccess**: <code>[V1Magic8BallResponse](src/models/v1-magic8-ball-response.ts)</code>
- **OnError**: throws <code>[Entertainment.Magic8BallError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.magic8Ball(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1Magic8BallResponse, Entertainment.Magic8BallError&gt;</code>, with `result.value` of type <code>[V1Magic8BallResponse](src/models/v1-magic8-ball-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>musicnotegenerator(request: Entertainment.MusicnotegeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1MusicnotegeneratorResponse, Entertainment.MusicnotegeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate audio file for musical note

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.musicnotegenerator({ note: "C", octave: 4, duration: 1 });
  // TODO: Handle 'response' of type V1MusicnotegeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.MusicnotegeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment
  .musicnotegenerator({ note: "C", octave: 4, duration: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MusicnotegeneratorResponse
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
| <code>note</code> | <code>string</code> | Musical note (A-G with optional # or b) |
| <code>octave?</code> | <code>number</code> | Octave number |
| <code>duration?</code> | <code>number</code> | Duration in seconds |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.musicnotegenerator(request)`

- **OnSuccess**: <code>[V1MusicnotegeneratorResponse](src/models/v1-musicnotegenerator-response.ts)</code>
- **OnError**: throws <code>[Entertainment.MusicnotegeneratorError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.musicnotegenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MusicnotegeneratorResponse, Entertainment.MusicnotegeneratorError&gt;</code>, with `result.value` of type <code>[V1MusicnotegeneratorResponse](src/models/v1-musicnotegenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>neverhaveiever(request?: Entertainment.NeverhaveieverRequest, options?: RequestOptions): ApiPromise&lt;V1NeverhaveieverResponse, Entertainment.NeverhaveieverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a Never Have I Ever statement

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.neverhaveiever({ adult: false });
  // TODO: Handle 'response' of type V1NeverhaveieverResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.NeverhaveieverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.neverhaveiever({ adult: false }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NeverhaveieverResponse
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
| <code>adult?</code> | <code>boolean</code> | Include adult/relationship-focused statements |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.neverhaveiever(request)`

- **OnSuccess**: <code>[V1NeverhaveieverResponse](src/models/v1-neverhaveiever-response.ts)</code>
- **OnError**: throws <code>[Entertainment.NeverhaveieverError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.neverhaveiever(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NeverhaveieverResponse, Entertainment.NeverhaveieverError&gt;</code>, with `result.value` of type <code>[V1NeverhaveieverResponse](src/models/v1-neverhaveiever-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pictionary(request?: Entertainment.PictionaryRequest, options?: RequestOptions): ApiPromise&lt;V1PictionaryResponse, Entertainment.PictionaryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate pictionary words by difficulty level

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.pictionary({ difficulty: "medium", count: 5 });
  // TODO: Handle 'response' of type V1PictionaryResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.PictionaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.pictionary({ difficulty: "medium", count: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PictionaryResponse
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
| <code>difficulty?</code> | <code>string</code> | Difficulty level |
| <code>count?</code> | <code>number</code> | Number of words to generate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.pictionary(request)`

- **OnSuccess**: <code>[V1PictionaryResponse](src/models/v1-pictionary-response.ts)</code>
- **OnError**: throws <code>[Entertainment.PictionaryError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.pictionary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PictionaryResponse, Entertainment.PictionaryError&gt;</code>, with `result.value` of type <code>[V1PictionaryResponse](src/models/v1-pictionary-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>randomfacts(options?: RequestOptions): ApiPromise&lt;V1RandomfactsResponse, Entertainment.RandomfactsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random fact

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.randomfacts();
  // TODO: Handle 'response' of type V1RandomfactsResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.RandomfactsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.randomfacts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RandomfactsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.randomfacts()`

- **OnSuccess**: <code>[V1RandomfactsResponse](src/models/v1-randomfacts-response.ts)</code>
- **OnError**: throws <code>[Entertainment.RandomfactsError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.randomfacts().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RandomfactsResponse, Entertainment.RandomfactsError&gt;</code>, with `result.value` of type <code>[V1RandomfactsResponse](src/models/v1-randomfacts-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>randomjoke(options?: RequestOptions): ApiPromise&lt;V1RandomjokeResponse, Entertainment.RandomjokeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random joke from a collection of jokes

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.randomjoke();
  // TODO: Handle 'response' of type V1RandomjokeResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.RandomjokeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.randomjoke().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RandomjokeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.randomjoke()`

- **OnSuccess**: <code>[V1RandomjokeResponse](src/models/v1-randomjoke-response.ts)</code>
- **OnError**: throws <code>[Entertainment.RandomjokeError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.randomjoke().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RandomjokeResponse, Entertainment.RandomjokeError&gt;</code>, with `result.value` of type <code>[V1RandomjokeResponse](src/models/v1-randomjoke-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>randompun(options?: RequestOptions): ApiPromise&lt;V1RandompunResponse, Entertainment.RandompunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random pun from a collection of puns

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.randompun();
  // TODO: Handle 'response' of type V1RandompunResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.RandompunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.randompun().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RandompunResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.randompun()`

- **OnSuccess**: <code>[V1RandompunResponse](src/models/v1-randompun-response.ts)</code>
- **OnError**: throws <code>[Entertainment.RandompunError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.randompun().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RandompunResponse, Entertainment.RandompunError&gt;</code>, with `result.value` of type <code>[V1RandompunResponse](src/models/v1-randompun-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>randomquote(options?: RequestOptions): ApiPromise&lt;V1RandomquoteResponse, Entertainment.RandomquoteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random quote from a collection of quotes

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.randomquote();
  // TODO: Handle 'response' of type V1RandomquoteResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.RandomquoteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.randomquote().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RandomquoteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.randomquote()`

- **OnSuccess**: <code>[V1RandomquoteResponse](src/models/v1-randomquote-response.ts)</code>
- **OnError**: throws <code>[Entertainment.RandomquoteError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.randomquote().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RandomquoteResponse, Entertainment.RandomquoteError&gt;</code>, with `result.value` of type <code>[V1RandomquoteResponse](src/models/v1-randomquote-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>scrabblescorer(request: Entertainment.ScrabblescorerRequest, options?: RequestOptions): ApiPromise&lt;V1ScrabblescorerResponse, Entertainment.ScrabblescorerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate Scrabble points for a word

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.scrabblescorer({ word: "QUIZ", language: "english" });
  // TODO: Handle 'response' of type V1ScrabblescorerResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.ScrabblescorerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.scrabblescorer({ word: "QUIZ", language: "english" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ScrabblescorerResponse
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
| <code>word</code> | <code>string</code> | The word to score |
| <code>language?</code> | <code>string</code> | Scrabble language variant |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.scrabblescorer(request)`

- **OnSuccess**: <code>[V1ScrabblescorerResponse](src/models/v1-scrabblescorer-response.ts)</code>
- **OnError**: throws <code>[Entertainment.ScrabblescorerError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.scrabblescorer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ScrabblescorerResponse, Entertainment.ScrabblescorerError&gt;</code>, with `result.value` of type <code>[V1ScrabblescorerResponse](src/models/v1-scrabblescorer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sudoku(request?: Entertainment.SudokuRequest, options?: RequestOptions): ApiPromise&lt;V1SudokuResponse, Entertainment.SudokuError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sudoku is a simple tool for generating Sudoku puzzles. It returns a Sudoku puzzle.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.sudoku({ difficulty: "medium" });
  // TODO: Handle 'response' of type V1SudokuResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.SudokuError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.sudoku({ difficulty: "medium" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SudokuResponse
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
| <code>difficulty?</code> | <code>string</code> | The difficulty level of the Sudoku puzzle to generate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.sudoku(request)`

- **OnSuccess**: <code>[V1SudokuResponse](src/models/v1-sudoku-response.ts)</code>
- **OnError**: throws <code>[Entertainment.SudokuError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.sudoku(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SudokuResponse, Entertainment.SudokuError&gt;</code>, with `result.value` of type <code>[V1SudokuResponse](src/models/v1-sudoku-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trivia(request?: Entertainment.TriviaRequest, options?: RequestOptions): ApiPromise&lt;V1TriviaResponse, Entertainment.TriviaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a random trivia question

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.trivia({ category: "general" });
  // TODO: Handle 'response' of type V1TriviaResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.TriviaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.trivia({ category: "general" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TriviaResponse
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
| <code>category?</code> | <code>string</code> | The category of the trivia question |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.trivia(request)`

- **OnSuccess**: <code>[V1TriviaResponse](src/models/v1-trivia-response.ts)</code>
- **OnError**: throws <code>[Entertainment.TriviaError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.trivia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TriviaResponse, Entertainment.TriviaError&gt;</code>, with `result.value` of type <code>[V1TriviaResponse](src/models/v1-trivia-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>truthordare(request?: Entertainment.TruthordareRequest, options?: RequestOptions): ApiPromise&lt;V1TruthordareResponse, Entertainment.TruthordareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a truth or dare prompt

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.truthordare({ type: "random", adult: false });
  // TODO: Handle 'response' of type V1TruthordareResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.TruthordareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment.truthordare({ type: "random", adult: false }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TruthordareResponse
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
| <code>type?</code> | <code>string</code> | Prompt type: truth, dare, or random |
| <code>adult?</code> | <code>boolean</code> | Include adult/spicy prompts |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.truthordare(request)`

- **OnSuccess**: <code>[V1TruthordareResponse](src/models/v1-truthordare-response.ts)</code>
- **OnError**: throws <code>[Entertainment.TruthordareError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.truthordare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TruthordareResponse, Entertainment.TruthordareError&gt;</code>, with `result.value` of type <code>[V1TruthordareResponse](src/models/v1-truthordare-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wordlehelper(request?: Entertainment.WordlehelperRequest, options?: RequestOptions): ApiPromise&lt;V1WordlehelperResponse, Entertainment.WordlehelperError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find possible Wordle solutions based on clues

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.entertainment.wordlehelper({
    green: "A1,E5",
    yellow: "R2,O3",
    gray: "STLN",
    pattern: "A___E",
    limit: 25,
  });
  // TODO: Handle 'response' of type V1WordlehelperResponse
} catch (err) {
  // TODO: Handle 'err' of type Entertainment.WordlehelperError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.entertainment
  .wordlehelper({ green: "A1,E5", yellow: "R2,O3", gray: "STLN", pattern: "A___E", limit: 25 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WordlehelperResponse
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
| <code>green?</code> | <code>string</code> | Correct letters with positions (e.g., A1 means A at position 1) |
| <code>yellow?</code> | <code>string</code> | Letters in word but wrong position (e.g., R2 means R not at position 2) |
| <code>gray?</code> | <code>string</code> | Letters not in the word |
| <code>pattern?</code> | <code>string</code> | Pattern with known letters (use _ for unknown) |
| <code>limit?</code> | <code>number</code> | Maximum number of suggestions |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.entertainment.wordlehelper(request)`

- **OnSuccess**: <code>[V1WordlehelperResponse](src/models/v1-wordlehelper-response.ts)</code>
- **OnError**: throws <code>[Entertainment.WordlehelperError](src/resources/entertainment.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.entertainment.wordlehelper(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WordlehelperResponse, Entertainment.WordlehelperError&gt;</code>, with `result.value` of type <code>[V1WordlehelperResponse](src/models/v1-wordlehelper-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Finance

> Source: [Finance](src/resources/finance.ts)

<details>
<summary><code>balancesheet(request: Finance.BalancesheetRequest, options?: RequestOptions): ApiPromise&lt;V1BalancesheetResponse, Finance.BalancesheetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the balance sheet for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.balancesheet({ ticker: "AAPL" });
  // TODO: Handle 'response' of type V1BalancesheetResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.BalancesheetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.balancesheet({ ticker: "AAPL" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BalancesheetResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year?</code> | <code>number</code> | Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones. |
| <code>quarter?</code> | <code>number</code> | Fiscal quarter to retrieve. Defaults to latest available. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.balancesheet(request)`

- **OnSuccess**: <code>[V1BalancesheetResponse](src/models/v1-balancesheet-response.ts)</code>
- **OnError**: throws <code>[Finance.BalancesheetError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.balancesheet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BalancesheetResponse, Finance.BalancesheetError&gt;</code>, with `result.value` of type <code>[V1BalancesheetResponse](src/models/v1-balancesheet-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>benchmarkrate(request: Finance.BenchmarkrateRequest, options?: RequestOptions): ApiPromise&lt;V1BenchmarkrateResponse, Finance.BenchmarkrateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current value for a specific benchmark rate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.benchmarkrate({ rate: "SOFR" });
  // TODO: Handle 'response' of type V1BenchmarkrateResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.BenchmarkrateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.benchmarkrate({ rate: "SOFR" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BenchmarkrateResponse
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
| <code>rate</code> | <code>string</code> | The benchmark rate to retrieve |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.benchmarkrate(request)`

- **OnSuccess**: <code>[V1BenchmarkrateResponse](src/models/v1-benchmarkrate-response.ts)</code>
- **OnError**: throws <code>[Finance.BenchmarkrateError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.benchmarkrate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BenchmarkrateResponse, Finance.BenchmarkrateError&gt;</code>, with `result.value` of type <code>[V1BenchmarkrateResponse](src/models/v1-benchmarkrate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>binlookup(request: Finance.BinlookupRequest, options?: RequestOptions): ApiPromise&lt;V1BinlookupResponse, Finance.BinlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup credit card information based on the BIN

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.binlookup({ bin: "448590" });
  // TODO: Handle 'response' of type V1BinlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.BinlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.binlookup({ bin: "448590" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BinlookupResponse
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
| <code>bin</code> | <code>string</code> | The first six digits of the credit card number (BIN) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.binlookup(request)`

- **OnSuccess**: <code>[V1BinlookupResponse](src/models/v1-binlookup-response.ts)</code>
- **OnError**: throws <code>[Finance.BinlookupError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.binlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BinlookupResponse, Finance.BinlookupError&gt;</code>, with `result.value` of type <code>[V1BinlookupResponse](src/models/v1-binlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bitcoin(request?: Finance.BitcoinRequest, options?: RequestOptions): ApiPromise&lt;V1BitcoinResponse, Finance.BitcoinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of Bitcoin. You can optionally specify a currency, e.g. USD

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.bitcoin({ currency: "USD", hourly: true });
  // TODO: Handle 'response' of type V1BitcoinResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.BitcoinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.bitcoin({ currency: "USD", hourly: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BitcoinResponse
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
| <code>currency?</code> | <code>string</code> | The currency to get the price in |
| <code>hourly?</code> | <code>boolean</code> | Include hourly price data for the past 24 hours |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.bitcoin(request)`

- **OnSuccess**: <code>[V1BitcoinResponse](src/models/v1-bitcoin-response.ts)</code>
- **OnError**: throws <code>[Finance.BitcoinError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.bitcoin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BitcoinResponse, Finance.BitcoinError&gt;</code>, with `result.value` of type <code>[V1BitcoinResponse](src/models/v1-bitcoin-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cashflow(request: Finance.CashflowRequest, options?: RequestOptions): ApiPromise&lt;V1CashflowResponse, Finance.CashflowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the cash flow statement for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.cashflow({ ticker: "AAPL" });
  // TODO: Handle 'response' of type V1CashflowResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.CashflowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.cashflow({ ticker: "AAPL" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CashflowResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year?</code> | <code>number</code> | Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones. |
| <code>quarter?</code> | <code>number</code> | Fiscal quarter to retrieve. Defaults to latest available. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.cashflow(request)`

- **OnSuccess**: <code>[V1CashflowResponse](src/models/v1-cashflow-response.ts)</code>
- **OnError**: throws <code>[Finance.CashflowError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.cashflow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CashflowResponse, Finance.CashflowError&gt;</code>, with `result.value` of type <code>[V1CashflowResponse](src/models/v1-cashflow-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>companylookup(request: Finance.CompanylookupRequest, options?: RequestOptions): ApiPromise&lt;V1CompanylookupResponse, Finance.CompanylookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get company information by stock ticker symbol.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.companylookup({ ticker: "AAPL" });
  // TODO: Handle 'response' of type V1CompanylookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.CompanylookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.companylookup({ ticker: "AAPL" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CompanylookupResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, GOOGL) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.companylookup(request)`

- **OnSuccess**: <code>[V1CompanylookupResponse](src/models/v1-companylookup-response.ts)</code>
- **OnError**: throws <code>[Finance.CompanylookupError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.companylookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CompanylookupResponse, Finance.CompanylookupError&gt;</code>, with `result.value` of type <code>[V1CompanylookupResponse](src/models/v1-companylookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>costliving(request: Finance.CostlivingRequest, options?: RequestOptions): ApiPromise&lt;V1CostlivingResponse, Finance.CostlivingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the cost of living index for a specific location. Accepts state names, state codes, or major city names.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.costliving({ location: "California" });
  // TODO: Handle 'response' of type V1CostlivingResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.CostlivingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.costliving({ location: "California" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CostlivingResponse
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
| <code>location</code> | <code>string</code> | State name, state code (e.g., CA, NY), or major city name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.costliving(request)`

- **OnSuccess**: <code>[V1CostlivingResponse](src/models/v1-costliving-response.ts)</code>
- **OnError**: throws <code>[Finance.CostlivingError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.costliving(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CostlivingResponse, Finance.CostlivingError&gt;</code>, with `result.value` of type <code>[V1CostlivingResponse](src/models/v1-costliving-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cpiinflation(request?: Finance.CpiinflationRequest, options?: RequestOptions): ApiPromise&lt;V1CpiinflationResponse, Finance.CpiinflationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current or historical CPI inflation data by category

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.cpiinflation({ date: "2023-06", category: "food" });
  // TODO: Handle 'response' of type V1CpiinflationResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.CpiinflationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.cpiinflation({ date: "2023-06", category: "food" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CpiinflationResponse
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
| <code>date?</code> | <code>string</code> | Optional date in YYYY-MM format for historical lookup. Omit for current data. |
| <code>category?</code> | <code>string</code> | Optional category filter: all, food, housing, apparel, transportation, medical, recreation, education, gasoline, electricity |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.cpiinflation(request)`

- **OnSuccess**: <code>[V1CpiinflationResponse](src/models/v1-cpiinflation-response.ts)</code>
- **OnError**: throws <code>[Finance.CpiinflationError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.cpiinflation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CpiinflationResponse, Finance.CpiinflationError&gt;</code>, with `result.value` of type <code>[V1CpiinflationResponse](src/models/v1-cpiinflation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>currencyconverter(request: Finance.CurrencyconverterRequest, options?: RequestOptions): ApiPromise&lt;V1CurrencyconverterResponse, Finance.CurrencyconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert currency rates based on the amount and currency

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.currencyconverter({ value: 1, from: "USD", to: "EUR" });
  // TODO: Handle 'response' of type V1CurrencyconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.CurrencyconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.currencyconverter({ value: 1, from: "USD", to: "EUR" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CurrencyconverterResponse
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
| <code>value</code> | <code>number</code> | The amount to convert |
| <code>from</code> | <code>string</code> | The ISO 4217 currency code to convert from |
| <code>to</code> | <code>string</code> | The ISO 4217 currency code to convert to |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.currencyconverter(request)`

- **OnSuccess**: <code>[V1CurrencyconverterResponse](src/models/v1-currencyconverter-response.ts)</code>
- **OnError**: throws <code>[Finance.CurrencyconverterError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.currencyconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CurrencyconverterResponse, Finance.CurrencyconverterError&gt;</code>, with `result.value` of type <code>[V1CurrencyconverterResponse](src/models/v1-currencyconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>currencysymbols(request: Finance.CurrencysymbolsRequest, options?: RequestOptions): ApiPromise&lt;V1CurrencysymbolsResponse, Finance.CurrencysymbolsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the currency symbol and name of a currency

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.currencysymbols({ currency: "USD" });
  // TODO: Handle 'response' of type V1CurrencysymbolsResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.CurrencysymbolsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.currencysymbols({ currency: "USD" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CurrencysymbolsResponse
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
| <code>currency</code> | <code>string</code> | The currency code for which you want to get the symbol |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.currencysymbols(request)`

- **OnSuccess**: <code>[V1CurrencysymbolsResponse](src/models/v1-currencysymbols-response.ts)</code>
- **OnError**: throws <code>[Finance.CurrencysymbolsError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.currencysymbols(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CurrencysymbolsResponse, Finance.CurrencysymbolsError&gt;</code>, with `result.value` of type <code>[V1CurrencysymbolsResponse](src/models/v1-currencysymbols-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dividends(request: Finance.DividendsRequest, options?: RequestOptions): ApiPromise&lt;V1DividendsResponse, Finance.DividendsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the dividend-per-share history for a company by ticker symbol. Optionally choose the annual or quarterly series and limit how many periods are returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.dividends({ ticker: "AAPL", period: "annual", limit: 10 });
  // TODO: Handle 'response' of type V1DividendsResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.DividendsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.dividends({ ticker: "AAPL", period: "annual", limit: 10 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DividendsResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, KO) |
| <code>period?</code> | <code>string</code> | Which series to return in the history list: quarterly (default) or annual. |
| <code>limit?</code> | <code>number</code> | Number of periods to return in the history list (1-25). Defaults to 5. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.dividends(request)`

- **OnSuccess**: <code>[V1DividendsResponse](src/models/v1-dividends-response.ts)</code>
- **OnError**: throws <code>[Finance.DividendsError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.dividends(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DividendsResponse, Finance.DividendsError&gt;</code>, with `result.value` of type <code>[V1DividendsResponse](src/models/v1-dividends-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>earnings(request: Finance.EarningsRequest, options?: RequestOptions): ApiPromise&lt;V1EarningsResponse, Finance.EarningsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get earnings and financial data for a company by ticker symbol. Optionally filter by year and quarter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.earnings({ ticker: "ADBE" });
  // TODO: Handle 'response' of type V1EarningsResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.EarningsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.earnings({ ticker: "ADBE" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1EarningsResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year?</code> | <code>number</code> | Fiscal year to retrieve. Defaults to latest available. |
| <code>quarter?</code> | <code>number</code> | Fiscal quarter to retrieve. Defaults to latest available. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.earnings(request)`

- **OnSuccess**: <code>[V1EarningsResponse](src/models/v1-earnings-response.ts)</code>
- **OnError**: throws <code>[Finance.EarningsError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.earnings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1EarningsResponse, Finance.EarningsError&gt;</code>, with `result.value` of type <code>[V1EarningsResponse](src/models/v1-earnings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ethereum(request?: Finance.EthereumRequest, options?: RequestOptions): ApiPromise&lt;V1EthereumResponse, Finance.EthereumError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of Ethereum. You can optionally specify a currency, e.g. USD

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.ethereum({ currency: "USD", hourly: true });
  // TODO: Handle 'response' of type V1EthereumResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.EthereumError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.ethereum({ currency: "USD", hourly: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1EthereumResponse
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
| <code>currency?</code> | <code>string</code> | The currency to get the price in |
| <code>hourly?</code> | <code>boolean</code> | Include hourly price data for the past 24 hours |
| <code>hourlyHour?</code> | <code>number</code> | UTC hour-of-day slot (0-23) the price was captured in |
| <code>hourlyPrice?</code> | <code>number</code> | Price at that hour, in the requested currency |
| <code>hourlyTimestamp?</code> | <code>string</code> | ISO 8601 time the hourly price was captured |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.ethereum(request)`

- **OnSuccess**: <code>[V1EthereumResponse](src/models/v1-ethereum-response.ts)</code>
- **OnError**: throws <code>[Finance.EthereumError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.ethereum(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1EthereumResponse, Finance.EthereumError&gt;</code>, with `result.value` of type <code>[V1EthereumResponse](src/models/v1-ethereum-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exchangerate(request: Finance.ExchangerateRequest, options?: RequestOptions): ApiPromise&lt;V1ExchangerateResponse, Finance.ExchangerateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchange Rate is a simple tool for getting the current exchange rate between two currencies. It returns the current exchange rate.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.exchangerate({ currency1: "USD", currency2: "EUR" });
  // TODO: Handle 'response' of type V1ExchangerateResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.ExchangerateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.exchangerate({ currency1: "USD", currency2: "EUR" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ExchangerateResponse
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
| <code>currency1</code> | <code>string</code> | The first currency you want to get the exchange rate for |
| <code>currency2</code> | <code>string</code> | The second currency you want to get the exchange rate for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.exchangerate(request)`

- **OnSuccess**: <code>[V1ExchangerateResponse](src/models/v1-exchangerate-response.ts)</code>
- **OnError**: throws <code>[Finance.ExchangerateError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.exchangerate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ExchangerateResponse, Finance.ExchangerateError&gt;</code>, with `result.value` of type <code>[V1ExchangerateResponse](src/models/v1-exchangerate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>financialratios(request: Finance.FinancialratiosRequest, options?: RequestOptions): ApiPromise&lt;V1FinancialratiosResponse, Finance.FinancialratiosError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the key financial ratios for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.financialratios({ ticker: "AAPL" });
  // TODO: Handle 'response' of type V1FinancialratiosResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.FinancialratiosError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.financialratios({ ticker: "AAPL" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FinancialratiosResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year?</code> | <code>number</code> | Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones. |
| <code>quarter?</code> | <code>number</code> | Fiscal quarter to retrieve. Defaults to latest available. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.financialratios(request)`

- **OnSuccess**: <code>[V1FinancialratiosResponse](src/models/v1-financialratios-response.ts)</code>
- **OnError**: throws <code>[Finance.FinancialratiosError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.financialratios(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FinancialratiosResponse, Finance.FinancialratiosError&gt;</code>, with `result.value` of type <code>[V1FinancialratiosResponse](src/models/v1-financialratios-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>gdp(request: Finance.GdpRequest, options?: RequestOptions): ApiPromise&lt;V1GdpResponse, Finance.GdpError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get GDP data for a specific country. Returns latest data by default, or data for a specific year if specified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.gdp({ country: "US", year: 2023 });
  // TODO: Handle 'response' of type V1GdpResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.GdpError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.gdp({ country: "US", year: 2023 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GdpResponse
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
| <code>country</code> | <code>string</code> | ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR) |
| <code>year?</code> | <code>number</code> | Specific year to retrieve data for (1960-present). Returns latest if not specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.gdp(request)`

- **OnSuccess**: <code>[V1GdpResponse](src/models/v1-gdp-response.ts)</code>
- **OnError**: throws <code>[Finance.GdpError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.gdp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GdpResponse, Finance.GdpError&gt;</code>, with `result.value` of type <code>[V1GdpResponse](src/models/v1-gdp-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>globalstockmarket(request: Finance.GlobalstockmarketRequest, options?: RequestOptions): ApiPromise&lt;V1GlobalstockmarketResponse, Finance.GlobalstockmarketError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current or historical share price index for a specific country.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.globalstockmarket({ country: "DE", year: 2023, month: 6 });
  // TODO: Handle 'response' of type V1GlobalstockmarketResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.GlobalstockmarketError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.globalstockmarket({ country: "DE", year: 2023, month: 6 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GlobalstockmarketResponse
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
| <code>country</code> | <code>string</code> | ISO 2-letter country code |
| <code>year?</code> | <code>number</code> | Year to retrieve data for (2000-present). Requires month parameter. |
| <code>month?</code> | <code>number</code> | Month to retrieve data for (1-12). Required when year is specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.globalstockmarket(request)`

- **OnSuccess**: <code>[V1GlobalstockmarketResponse](src/models/v1-globalstockmarket-response.ts)</code>
- **OnError**: throws <code>[Finance.GlobalstockmarketError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.globalstockmarket(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GlobalstockmarketResponse, Finance.GlobalstockmarketError&gt;</code>, with `result.value` of type <code>[V1GlobalstockmarketResponse](src/models/v1-globalstockmarket-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>goldprice(request?: Finance.GoldpriceRequest, options?: RequestOptions): ApiPromise&lt;V1GoldpriceResponse, Finance.GoldpriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of gold. You can optionally specify a currency (defaults to USD).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.goldprice({ currency: "USD", hourly: true });
  // TODO: Handle 'response' of type V1GoldpriceResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.GoldpriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.goldprice({ currency: "USD", hourly: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GoldpriceResponse
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
| <code>currency?</code> | <code>string</code> | The currency to get the price in |
| <code>hourly?</code> | <code>boolean</code> | Include hourly price data for the past 24 hours |
| <code>hourlyHour?</code> | <code>number</code> | UTC hour-of-day slot (0-23) the price was captured in |
| <code>hourlyPrice?</code> | <code>number</code> | Price at that hour, in the requested currency |
| <code>hourlyTimestamp?</code> | <code>string</code> | ISO 8601 time the hourly price was captured |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.goldprice(request)`

- **OnSuccess**: <code>[V1GoldpriceResponse](src/models/v1-goldprice-response.ts)</code>
- **OnError**: throws <code>[Finance.GoldpriceError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.goldprice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GoldpriceResponse, Finance.GoldpriceError&gt;</code>, with `result.value` of type <code>[V1GoldpriceResponse](src/models/v1-goldprice-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ifsclookup(request: Finance.IfsclookupRequest, options?: RequestOptions): ApiPromise&lt;V1IfsclookupResponse, Finance.IfsclookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IFSC Lookup is a simple tool for getting information on IFSC codes. It returns information on various IFSC codes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.ifsclookup({ ifsc: "SBIN0005943" });
  // TODO: Handle 'response' of type V1IfsclookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.IfsclookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.ifsclookup({ ifsc: "SBIN0005943" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1IfsclookupResponse
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
| <code>ifsc</code> | <code>string</code> | The IFSC code to get information about |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.ifsclookup(request)`

- **OnSuccess**: <code>[V1IfsclookupResponse](src/models/v1-ifsclookup-response.ts)</code>
- **OnError**: throws <code>[Finance.IfsclookupError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.ifsclookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1IfsclookupResponse, Finance.IfsclookupError&gt;</code>, with `result.value` of type <code>[V1IfsclookupResponse](src/models/v1-ifsclookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incomestatement(request: Finance.IncomestatementRequest, options?: RequestOptions): ApiPromise&lt;V1IncomestatementResponse, Finance.IncomestatementError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the income statement for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.incomestatement({ ticker: "AAPL" });
  // TODO: Handle 'response' of type V1IncomestatementResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.IncomestatementError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.incomestatement({ ticker: "AAPL" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1IncomestatementResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>year?</code> | <code>number</code> | Fiscal year to retrieve. Defaults to latest available. History covers only the quarters captured so far; a missing period answers 404 listing the available ones. |
| <code>quarter?</code> | <code>number</code> | Fiscal quarter to retrieve. Defaults to latest available. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.incomestatement(request)`

- **OnSuccess**: <code>[V1IncomestatementResponse](src/models/v1-incomestatement-response.ts)</code>
- **OnError**: throws <code>[Finance.IncomestatementError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.incomestatement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1IncomestatementResponse, Finance.IncomestatementError&gt;</code>, with `result.value` of type <code>[V1IncomestatementResponse](src/models/v1-incomestatement-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incometax(request: Finance.IncometaxRequest, options?: RequestOptions): ApiPromise&lt;V1IncometaxResponse, Finance.IncometaxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get federal income tax brackets for a specific country and year.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.incometax({ country: "US", year: 2024 });
  // TODO: Handle 'response' of type V1IncometaxResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.IncometaxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.incometax({ country: "US", year: 2024 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1IncometaxResponse
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
| <code>country</code> | <code>string</code> | The country code (currently only 'US' is supported) |
| <code>year?</code> | <code>number</code> | The tax year to retrieve brackets for. Defaults to the previous year. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.incometax(request)`

- **OnSuccess**: <code>[V1IncometaxResponse](src/models/v1-incometax-response.ts)</code>
- **OnError**: throws <code>[Finance.IncometaxError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.incometax(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1IncometaxResponse, Finance.IncometaxError&gt;</code>, with `result.value` of type <code>[V1IncometaxResponse](src/models/v1-incometax-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incometaxcalculator(request: Finance.IncometaxcalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1IncometaxcalculatorResponse, Finance.IncometaxcalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate income tax using a custom tax rate. Useful for simple flat-rate tax calculations or estimations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.incometaxcalculator({ income: 85000, rate: 22, deduction: 14600 });
  // TODO: Handle 'response' of type V1IncometaxcalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.IncometaxcalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance
  .incometaxcalculator({ income: 85000, rate: 22, deduction: 14600 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1IncometaxcalculatorResponse
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
| <code>income</code> | <code>number</code> | Gross annual income in USD |
| <code>rate</code> | <code>number</code> | Tax rate as a percentage (e.g., 22 for 22%) |
| <code>deduction?</code> | <code>number</code> | Optional deduction amount to subtract from income before calculating tax |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.incometaxcalculator(request)`

- **OnSuccess**: <code>[V1IncometaxcalculatorResponse](src/models/v1-incometaxcalculator-response.ts)</code>
- **OnError**: throws <code>[Finance.IncometaxcalculatorError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.incometaxcalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1IncometaxcalculatorResponse, Finance.IncometaxcalculatorError&gt;</code>, with `result.value` of type <code>[V1IncometaxcalculatorResponse](src/models/v1-incometaxcalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inflation(request: Finance.InflationRequest, options?: RequestOptions): ApiPromise&lt;V1InflationResponse, Finance.InflationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the annual inflation rate and CPI data for a specific country and year.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.inflation({ country: "US", year: 2023 });
  // TODO: Handle 'response' of type V1InflationResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.InflationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.inflation({ country: "US", year: 2023 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1InflationResponse
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
| <code>country</code> | <code>string</code> | ISO 2-letter country code (e.g., US, GB, JP, DE, BR) |
| <code>year?</code> | <code>number</code> | The year to retrieve data for. Defaults to the previous year. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.inflation(request)`

- **OnSuccess**: <code>[V1InflationResponse](src/models/v1-inflation-response.ts)</code>
- **OnError**: throws <code>[Finance.InflationError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.inflation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1InflationResponse, Finance.InflationError&gt;</code>, with `result.value` of type <code>[V1InflationResponse](src/models/v1-inflation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>insidertrading(request: Finance.InsidertradingRequest, options?: RequestOptions): ApiPromise&lt;V1InsidertradingResponse, Finance.InsidertradingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get recent SEC Form 4 insider transactions for a company by ticker symbol. Optionally filter to buys or sells and limit the number of transactions returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.insidertrading({ ticker: "AAPL", type: "buy", limit: 10 });
  // TODO: Handle 'response' of type V1InsidertradingResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.InsidertradingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.insidertrading({ ticker: "AAPL", type: "buy", limit: 10 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1InsidertradingResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>type?</code> | <code>string</code> | Filter to open-market buys or sells (buy or sell). |
| <code>limit?</code> | <code>number</code> | Number of transactions to return (1-25). Defaults to 5. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.insidertrading(request)`

- **OnSuccess**: <code>[V1InsidertradingResponse](src/models/v1-insidertrading-response.ts)</code>
- **OnError**: throws <code>[Finance.InsidertradingError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.insidertrading(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1InsidertradingResponse, Finance.InsidertradingError&gt;</code>, with `result.value` of type <code>[V1InsidertradingResponse](src/models/v1-insidertrading-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>interestrate(request: Finance.InterestrateRequest, options?: RequestOptions): ApiPromise&lt;V1InterestrateResponse, Finance.InterestrateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the central bank policy interest rate for a specific country. Omit `date` for the current rate, or pass a YYYY-MM month for a historical rate (available from 2000 onwards).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.interestrate({ country: "US", date: "2024-06" });
  // TODO: Handle 'response' of type V1InterestrateResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.InterestrateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.interestrate({ country: "US", date: "2024-06" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1InterestrateResponse
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
| <code>country</code> | <code>string</code> | 2-letter country code |
| <code>date?</code> | <code>string</code> | Optional month in YYYY-MM format for a historical lookup. Omit for the current rate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.interestrate(request)`

- **OnSuccess**: <code>[V1InterestrateResponse](src/models/v1-interestrate-response.ts)</code>
- **OnError**: throws <code>[Finance.InterestrateError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.interestrate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1InterestrateResponse, Finance.InterestrateError&gt;</code>, with `result.value` of type <code>[V1InterestrateResponse](src/models/v1-interestrate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jobsreport(request?: Finance.JobsreportRequest, options?: RequestOptions): ApiPromise&lt;V1JobsreportResponse, Finance.JobsreportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current or historical employment statistics

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.jobsreport({ date: "2023-06" });
  // TODO: Handle 'response' of type V1JobsreportResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.JobsreportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.jobsreport({ date: "2023-06" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JobsreportResponse
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
| <code>date?</code> | <code>string</code> | Optional date in YYYY-MM format for historical lookup. Omit for current data. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.jobsreport(request)`

- **OnSuccess**: <code>[V1JobsreportResponse](src/models/v1-jobsreport-response.ts)</code>
- **OnError**: throws <code>[Finance.JobsreportError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.jobsreport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JobsreportResponse, Finance.JobsreportError&gt;</code>, with `result.value` of type <code>[V1JobsreportResponse](src/models/v1-jobsreport-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>loanpaymentcalculator(request: Finance.LoanpaymentcalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1LoanpaymentcalculatorResponse, Finance.LoanpaymentcalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate loan payments based on the loan amount, interest rate, and loan term

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.loanpaymentcalculator({
    body: { loanAmount: 1.5, interestRate: 1.5, loanTerm: 1 },
  });
  // TODO: Handle 'response' of type V1LoanpaymentcalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.LoanpaymentcalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance
  .loanpaymentcalculator({ body: { loanAmount: 1.5, interestRate: 1.5, loanTerm: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LoanpaymentcalculatorResponse
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
| <code>body</code> | <code>[V1LoanpaymentcalculatorRequest](src/models/v1-loanpaymentcalculator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.loanpaymentcalculator(request)`

- **OnSuccess**: <code>[V1LoanpaymentcalculatorResponse](src/models/v1-loanpaymentcalculator-response.ts)</code>
- **OnError**: throws <code>[Finance.LoanpaymentcalculatorError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.loanpaymentcalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LoanpaymentcalculatorResponse, Finance.LoanpaymentcalculatorError&gt;</code>, with `result.value` of type <code>[V1LoanpaymentcalculatorResponse](src/models/v1-loanpaymentcalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>minimumwage(request: Finance.MinimumwageRequest, options?: RequestOptions): ApiPromise&lt;V1MinimumwageResponse, Finance.MinimumwageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get minimum wage rates for all states or a specific state

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.minimumwage({ state: "CA", year: 2024 });
  // TODO: Handle 'response' of type V1MinimumwageResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.MinimumwageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.minimumwage({ state: "CA", year: 2024 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MinimumwageResponse
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
| <code>state</code> | <code>string</code> | 2-letter state code (e.g., CA, NY) |
| <code>year?</code> | <code>number</code> | Year to get minimum wage for (e.g., 2020). Defaults to current year. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.minimumwage(request)`

- **OnSuccess**: <code>[V1MinimumwageResponse](src/models/v1-minimumwage-response.ts)</code>
- **OnError**: throws <code>[Finance.MinimumwageError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.minimumwage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MinimumwageResponse, Finance.MinimumwageError&gt;</code>, with `result.value` of type <code>[V1MinimumwageResponse](src/models/v1-minimumwage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mortgagecalculator(request: Finance.MortgagecalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1MortgagecalculatorResponse, Finance.MortgagecalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate mortgage payments based on the loan amount, interest rate, and loan term

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.mortgagecalculator({ body: { amount: 1.5, rate: 1.5, years: 1 } });
  // TODO: Handle 'response' of type V1MortgagecalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.MortgagecalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance
  .mortgagecalculator({ body: { amount: 1.5, rate: 1.5, years: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MortgagecalculatorResponse
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
| <code>body</code> | <code>[V1MortgagecalculatorRequest](src/models/v1-mortgagecalculator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.mortgagecalculator(request)`

- **OnSuccess**: <code>[V1MortgagecalculatorResponse](src/models/v1-mortgagecalculator-response.ts)</code>
- **OnError**: throws <code>[Finance.MortgagecalculatorError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.mortgagecalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MortgagecalculatorResponse, Finance.MortgagecalculatorError&gt;</code>, with `result.value` of type <code>[V1MortgagecalculatorResponse](src/models/v1-mortgagecalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mortgagerate(request: Finance.MortgagerateRequest, options?: RequestOptions): ApiPromise&lt;V1MortgagerateResponse, Finance.MortgagerateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current or historical mortgage rate for a specific type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.mortgagerate({ type: "30year", year: 2023, month: 6 });
  // TODO: Handle 'response' of type V1MortgagerateResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.MortgagerateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.mortgagerate({ type: "30year", year: 2023, month: 6 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MortgagerateResponse
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
| <code>type</code> | <code>string</code> | The mortgage type |
| <code>year?</code> | <code>number</code> | Year to retrieve rates for (1971-present). Requires month parameter. |
| <code>month?</code> | <code>number</code> | Month to retrieve rates for (1-12). Required when year is specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.mortgagerate(request)`

- **OnSuccess**: <code>[V1MortgagerateResponse](src/models/v1-mortgagerate-response.ts)</code>
- **OnError**: throws <code>[Finance.MortgagerateError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.mortgagerate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MortgagerateResponse, Finance.MortgagerateError&gt;</code>, with `result.value` of type <code>[V1MortgagerateResponse](src/models/v1-mortgagerate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nationaldebt(request?: Finance.NationaldebtRequest, options?: RequestOptions): ApiPromise&lt;V1NationaldebtResponse, Finance.NationaldebtError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current or historical US national debt data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.nationaldebt({ date: "2023-06-15" });
  // TODO: Handle 'response' of type V1NationaldebtResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.NationaldebtError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.nationaldebt({ date: "2023-06-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NationaldebtResponse
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
| <code>date?</code> | <code>string</code> | Optional date in YYYY-MM-DD format for historical lookup. Omit for current data. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.nationaldebt(request)`

- **OnSuccess**: <code>[V1NationaldebtResponse](src/models/v1-nationaldebt-response.ts)</code>
- **OnError**: throws <code>[Finance.NationaldebtError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.nationaldebt(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NationaldebtResponse, Finance.NationaldebtError&gt;</code>, with `result.value` of type <code>[V1NationaldebtResponse](src/models/v1-nationaldebt-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>palladiumprice(request?: Finance.PalladiumpriceRequest, options?: RequestOptions): ApiPromise&lt;V1PalladiumpriceResponse, Finance.PalladiumpriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of palladium. You can optionally specify a currency (defaults to USD).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.palladiumprice({ currency: "USD", hourly: true });
  // TODO: Handle 'response' of type V1PalladiumpriceResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.PalladiumpriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.palladiumprice({ currency: "USD", hourly: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PalladiumpriceResponse
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
| <code>currency?</code> | <code>string</code> | The currency to get the price in |
| <code>hourly?</code> | <code>boolean</code> | Include hourly price data for the past 24 hours |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.palladiumprice(request)`

- **OnSuccess**: <code>[V1PalladiumpriceResponse](src/models/v1-palladiumprice-response.ts)</code>
- **OnError**: throws <code>[Finance.PalladiumpriceError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.palladiumprice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PalladiumpriceResponse, Finance.PalladiumpriceError&gt;</code>, with `result.value` of type <code>[V1PalladiumpriceResponse](src/models/v1-palladiumprice-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>platinumprice(request?: Finance.PlatinumpriceRequest, options?: RequestOptions): ApiPromise&lt;V1PlatinumpriceResponse, Finance.PlatinumpriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of platinum. You can optionally specify a currency (defaults to USD).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.platinumprice({ currency: "USD", hourly: true });
  // TODO: Handle 'response' of type V1PlatinumpriceResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.PlatinumpriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.platinumprice({ currency: "USD", hourly: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PlatinumpriceResponse
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
| <code>currency?</code> | <code>string</code> | The currency to get the price in |
| <code>hourly?</code> | <code>boolean</code> | Include hourly price data for the past 24 hours |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.platinumprice(request)`

- **OnSuccess**: <code>[V1PlatinumpriceResponse](src/models/v1-platinumprice-response.ts)</code>
- **OnError**: throws <code>[Finance.PlatinumpriceError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.platinumprice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PlatinumpriceResponse, Finance.PlatinumpriceError&gt;</code>, with `result.value` of type <code>[V1PlatinumpriceResponse](src/models/v1-platinumprice-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>population(request: Finance.PopulationRequest, options?: RequestOptions): ApiPromise&lt;V1PopulationResponse, Finance.PopulationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get population data for a specific country. Returns latest data by default, or data for a specific year if specified.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.population({ country: "US", year: 2023 });
  // TODO: Handle 'response' of type V1PopulationResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.PopulationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.population({ country: "US", year: 2023 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PopulationResponse
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
| <code>country</code> | <code>string</code> | ISO 2 or 3-letter country code (e.g., US, USA, GB, GBR) |
| <code>year?</code> | <code>number</code> | Specific year to retrieve data for (1960-present). Returns latest if not specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.population(request)`

- **OnSuccess**: <code>[V1PopulationResponse](src/models/v1-population-response.ts)</code>
- **OnError**: throws <code>[Finance.PopulationError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.population(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PopulationResponse, Finance.PopulationError&gt;</code>, with `result.value` of type <code>[V1PopulationResponse](src/models/v1-population-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>purchasingpower(request: Finance.PurchasingpowerRequest, options?: RequestOptions): ApiPromise&lt;V1PurchasingpowerResponse, Finance.PurchasingpowerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate the inflation-adjusted value of money between two periods

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.purchasingpower({ amount: 100, from: "1990", to: "2024" });
  // TODO: Handle 'response' of type V1PurchasingpowerResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.PurchasingpowerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.purchasingpower({ amount: 100, from: "1990", to: "2024" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PurchasingpowerResponse
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
| <code>amount</code> | <code>number</code> | The dollar amount to convert |
| <code>from</code> | <code>string</code> | Starting year (YYYY format, data available from 1947) |
| <code>to?</code> | <code>string</code> | Ending year (YYYY format). Omit for current. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.purchasingpower(request)`

- **OnSuccess**: <code>[V1PurchasingpowerResponse](src/models/v1-purchasingpower-response.ts)</code>
- **OnError**: throws <code>[Finance.PurchasingpowerError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.purchasingpower(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PurchasingpowerResponse, Finance.PurchasingpowerError&gt;</code>, with `result.value` of type <code>[V1PurchasingpowerResponse](src/models/v1-purchasingpower-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>routinglookup(request: Finance.RoutinglookupRequest, options?: RequestOptions): ApiPromise&lt;V1RoutinglookupResponse, Finance.RoutinglookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup routing number information based on the routing number

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.routinglookup({ routing: "121000358" });
  // TODO: Handle 'response' of type V1RoutinglookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.RoutinglookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.routinglookup({ routing: "121000358" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RoutinglookupResponse
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
| <code>routing</code> | <code>string</code> | The routing number to lookup information about |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.routinglookup(request)`

- **OnSuccess**: <code>[V1RoutinglookupResponse](src/models/v1-routinglookup-response.ts)</code>
- **OnError**: throws <code>[Finance.RoutinglookupError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.routinglookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RoutinglookupResponse, Finance.RoutinglookupError&gt;</code>, with `result.value` of type <code>[V1RoutinglookupResponse](src/models/v1-routinglookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>salestax(request: Finance.SalestaxRequest, options?: RequestOptions): ApiPromise&lt;V1SalestaxResponse, Finance.SalestaxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the sales tax rate of a location based on the zip code

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.salestax({ zip: "64082" });
  // TODO: Handle 'response' of type V1SalestaxResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.SalestaxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.salestax({ zip: "64082" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SalestaxResponse
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
| <code>zip</code> | <code>string</code> | The zip code for which you want to get the sales tax rate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.salestax(request)`

- **OnSuccess**: <code>[V1SalestaxResponse](src/models/v1-salestax-response.ts)</code>
- **OnError**: throws <code>[Finance.SalestaxError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.salestax(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SalestaxResponse, Finance.SalestaxError&gt;</code>, with `result.value` of type <code>[V1SalestaxResponse](src/models/v1-salestax-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>salestaxcalculator(request: Finance.SalestaxcalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1SalestaxcalculatorResponse, Finance.SalestaxcalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate sales tax for a purchase amount at a specific US location

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.salestaxcalculator({ amount: 100, zip: "90210", state: "CA" });
  // TODO: Handle 'response' of type V1SalestaxcalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.SalestaxcalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance
  .salestaxcalculator({ amount: 100, zip: "90210", state: "CA" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SalestaxcalculatorResponse
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
| <code>amount</code> | <code>number</code> | Purchase amount to calculate tax on |
| <code>zip?</code> | <code>string</code> | Valid US 5-digit ZIP code (required unless state is given) |
| <code>state?</code> | <code>string</code> | 2-letter US state code (e.g., CA, NY, TX); used when zip is not given, state rate only |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.salestaxcalculator(request)`

- **OnSuccess**: <code>[V1SalestaxcalculatorResponse](src/models/v1-salestaxcalculator-response.ts)</code>
- **OnError**: throws <code>[Finance.SalestaxcalculatorError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.salestaxcalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SalestaxcalculatorResponse, Finance.SalestaxcalculatorError&gt;</code>, with `result.value` of type <code>[V1SalestaxcalculatorResponse](src/models/v1-salestaxcalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sanctionscreening(request: Finance.SanctionscreeningRequest, options?: RequestOptions): ApiPromise&lt;V1SanctionscreeningResponse, Finance.SanctionscreeningError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Screen a person or company name against the OFAC Specially Designated Nationals list. Returns scored matches, or an empty result set when the name is clear.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.sanctionscreening({
    name: "Banco Nacional de Cuba",
    threshold: 0.85,
    limit: 10,
    type: "individual",
  });
  // TODO: Handle 'response' of type V1SanctionscreeningResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.SanctionscreeningError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance
  .sanctionscreening({ name: "Banco Nacional de Cuba", threshold: 0.85, limit: 10, type: "individual" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SanctionscreeningResponse
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
| <code>name</code> | <code>string</code> | The person or company name to screen (minimum 3 characters) |
| <code>threshold?</code> | <code>number</code> | Minimum match score to return, between 0.5 and 1. Lower catches more names but returns more false positives |
| <code>limit?</code> | <code>number</code> | Maximum number of matches to return (1-50) |
| <code>type?</code> | <code>string</code> | Restrict screening to one entry type |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.sanctionscreening(request)`

- **OnSuccess**: <code>[V1SanctionscreeningResponse](src/models/v1-sanctionscreening-response.ts)</code>
- **OnError**: throws <code>[Finance.SanctionscreeningError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.sanctionscreening(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SanctionscreeningResponse, Finance.SanctionscreeningError&gt;</code>, with `result.value` of type <code>[V1SanctionscreeningResponse](src/models/v1-sanctionscreening-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>savingsbonds(request?: Finance.SavingsbondsRequest, options?: RequestOptions): ApiPromise&lt;V1SavingsbondsResponse, Finance.SavingsbondsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current I-Bond rates and historical rate data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.savingsbonds({ period: "2024-11" });
  // TODO: Handle 'response' of type V1SavingsbondsResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.SavingsbondsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.savingsbonds({ period: "2024-11" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SavingsbondsResponse
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
| <code>period?</code> | <code>string</code> | Specific issue period to lookup (YYYY-MM format, e.g., 2024-11). Omit for current rates. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.savingsbonds(request)`

- **OnSuccess**: <code>[V1SavingsbondsResponse](src/models/v1-savingsbonds-response.ts)</code>
- **OnError**: throws <code>[Finance.SavingsbondsError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.savingsbonds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SavingsbondsResponse, Finance.SavingsbondsError&gt;</code>, with `result.value` of type <code>[V1SavingsbondsResponse](src/models/v1-savingsbonds-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>secfilings(request: Finance.SecfilingsRequest, options?: RequestOptions): ApiPromise&lt;V1SecfilingsResponse, Finance.SecfilingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the recent SEC EDGAR filing history for a company by ticker symbol. Optionally filter to a specific form type and limit the number of filings returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.secfilings({ ticker: "AAPL", form: "10-K", limit: 10 });
  // TODO: Handle 'response' of type V1SecfilingsResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.SecfilingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.secfilings({ ticker: "AAPL", form: "10-K", limit: 10 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SecfilingsResponse
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
| <code>ticker</code> | <code>string</code> | Stock ticker symbol (e.g. AAPL, MSFT, ADBE) |
| <code>form?</code> | <code>string</code> | Filter to a single form type (e.g. 10-K, 10-Q, 8-K, 4). |
| <code>limit?</code> | <code>number</code> | Number of filings to return (1-50). Defaults to 5. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.secfilings(request)`

- **OnSuccess**: <code>[V1SecfilingsResponse](src/models/v1-secfilings-response.ts)</code>
- **OnError**: throws <code>[Finance.SecfilingsError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.secfilings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SecfilingsResponse, Finance.SecfilingsError&gt;</code>, with `result.value` of type <code>[V1SecfilingsResponse](src/models/v1-secfilings-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>silverprice(request?: Finance.SilverpriceRequest, options?: RequestOptions): ApiPromise&lt;V1SilverpriceResponse, Finance.SilverpriceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current price of silver. You can optionally specify a currency (defaults to USD).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.silverprice({ currency: "USD", hourly: true });
  // TODO: Handle 'response' of type V1SilverpriceResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.SilverpriceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.silverprice({ currency: "USD", hourly: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SilverpriceResponse
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
| <code>currency?</code> | <code>string</code> | The currency to get the price in |
| <code>hourly?</code> | <code>boolean</code> | Include hourly price data for the past 24 hours |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.silverprice(request)`

- **OnSuccess**: <code>[V1SilverpriceResponse](src/models/v1-silverprice-response.ts)</code>
- **OnError**: throws <code>[Finance.SilverpriceError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.silverprice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SilverpriceResponse, Finance.SilverpriceError&gt;</code>, with `result.value` of type <code>[V1SilverpriceResponse](src/models/v1-silverprice-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockexchange(request: Finance.StockexchangeRequest, options?: RequestOptions): ApiPromise&lt;V1StockexchangeResponse, Finance.StockexchangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get stock exchange details by its Market Identifier Code (MIC).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.stockexchange({ mic: "XNYS" });
  // TODO: Handle 'response' of type V1StockexchangeResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.StockexchangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.stockexchange({ mic: "XNYS" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1StockexchangeResponse
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
| <code>mic</code> | <code>string</code> | The 4-character Market Identifier Code (e.g., XNYS for NYSE, XNAS for NASDAQ) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.stockexchange(request)`

- **OnSuccess**: <code>[V1StockexchangeResponse](src/models/v1-stockexchange-response.ts)</code>
- **OnError**: throws <code>[Finance.StockexchangeError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.stockexchange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1StockexchangeResponse, Finance.StockexchangeError&gt;</code>, with `result.value` of type <code>[V1StockexchangeResponse](src/models/v1-stockexchange-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stockmarketopentimes(request: Finance.StockmarketopentimesRequest, options?: RequestOptions): ApiPromise&lt;V1StockmarketopentimesResponse, Finance.StockmarketopentimesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the open times of the stock market on the current date of the request

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.stockmarketopentimes({ exchange: "NYSE" });
  // TODO: Handle 'response' of type V1StockmarketopentimesResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.StockmarketopentimesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.stockmarketopentimes({ exchange: "NYSE" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1StockmarketopentimesResponse
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
| <code>exchange</code> | <code>string</code> | The stock exchange code |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.stockmarketopentimes(request)`

- **OnSuccess**: <code>[V1StockmarketopentimesResponse](src/models/v1-stockmarketopentimes-response.ts)</code>
- **OnError**: throws <code>[Finance.StockmarketopentimesError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.stockmarketopentimes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1StockmarketopentimesResponse, Finance.StockmarketopentimesError&gt;</code>, with `result.value` of type <code>[V1StockmarketopentimesResponse](src/models/v1-stockmarketopentimes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>swiftlookup(request: Finance.SwiftlookupRequest, options?: RequestOptions): ApiPromise&lt;V1SwiftlookupResponse, Finance.SwiftlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup SWIFT code information based on the SWIFT code

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.swiftlookup({ swift: "CHASUS33ARP" });
  // TODO: Handle 'response' of type V1SwiftlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.SwiftlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.swiftlookup({ swift: "CHASUS33ARP" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SwiftlookupResponse
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
| <code>swift</code> | <code>string</code> | The SWIFT code to lookup information about |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.swiftlookup(request)`

- **OnSuccess**: <code>[V1SwiftlookupResponse](src/models/v1-swiftlookup-response.ts)</code>
- **OnError**: throws <code>[Finance.SwiftlookupError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.swiftlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SwiftlookupResponse, Finance.SwiftlookupError&gt;</code>, with `result.value` of type <code>[V1SwiftlookupResponse](src/models/v1-swiftlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tradebalance(request?: Finance.TradebalanceRequest, options?: RequestOptions): ApiPromise&lt;V1TradebalanceResponse, Finance.TradebalanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get trade balance data

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.tradebalance({ date: "2023-06" });
  // TODO: Handle 'response' of type V1TradebalanceResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.TradebalanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.tradebalance({ date: "2023-06" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TradebalanceResponse
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
| <code>date?</code> | <code>string</code> | Optional date in YYYY-MM format for historical lookup. Omit for current data. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.tradebalance(request)`

- **OnSuccess**: <code>[V1TradebalanceResponse](src/models/v1-tradebalance-response.ts)</code>
- **OnError**: throws <code>[Finance.TradebalanceError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.tradebalance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TradebalanceResponse, Finance.TradebalanceError&gt;</code>, with `result.value` of type <code>[V1TradebalanceResponse](src/models/v1-tradebalance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>treasuryyields(request?: Finance.TreasuryyieldsRequest, options?: RequestOptions): ApiPromise&lt;V1TreasuryyieldsResponse, Finance.TreasuryyieldsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current or historical Treasury securities interest rates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.treasuryyields({ date: "2025-06", type: "10yr" });
  // TODO: Handle 'response' of type V1TreasuryyieldsResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.TreasuryyieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.treasuryyields({ date: "2025-06", type: "10yr" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TreasuryyieldsResponse
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
| <code>date?</code> | <code>string</code> | Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for current data. |
| <code>type?</code> | <code>string</code> | Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or a maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.treasuryyields(request)`

- **OnSuccess**: <code>[V1TreasuryyieldsResponse](src/models/v1-treasuryyields-response.ts)</code>
- **OnError**: throws <code>[Finance.TreasuryyieldsError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.treasuryyields(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TreasuryyieldsResponse, Finance.TreasuryyieldsError&gt;</code>, with `result.value` of type <code>[V1TreasuryyieldsResponse](src/models/v1-treasuryyields-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unemployment(request: Finance.UnemploymentRequest, options?: RequestOptions): ApiPromise&lt;V1UnemploymentResponse, Finance.UnemploymentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current or historical unemployment rate for a specific country.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.unemployment({ country: "USA", year: 2023 });
  // TODO: Handle 'response' of type V1UnemploymentResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.UnemploymentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance.unemployment({ country: "USA", year: 2023 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UnemploymentResponse
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
| <code>country</code> | <code>string</code> | ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR |
| <code>year?</code> | <code>number</code> | Specific year to retrieve data for (1991-present). Returns latest if not specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.unemployment(request)`

- **OnSuccess**: <code>[V1UnemploymentResponse](src/models/v1-unemployment-response.ts)</code>
- **OnError**: throws <code>[Finance.UnemploymentError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.unemployment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UnemploymentResponse, Finance.UnemploymentError&gt;</code>, with `result.value` of type <code>[V1UnemploymentResponse](src/models/v1-unemployment-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vatrates(request: Finance.VatratesRequest, options?: RequestOptions): ApiPromise&lt;V1VatratesResponse, Finance.VatratesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns VAT rates for a country. Optionally specify a date for historical rates or a postcode for regional exceptions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.finance.vatrates({ country: "DE", date: "2020-07-01", postcode: "35001" });
  // TODO: Handle 'response' of type V1VatratesResponse
} catch (err) {
  // TODO: Handle 'err' of type Finance.VatratesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.finance
  .vatrates({ country: "DE", date: "2020-07-01", postcode: "35001" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1VatratesResponse
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
| <code>country</code> | <code>string</code> | ISO 2-letter country code (e.g., DE, FR, ES) |
| <code>date?</code> | <code>string</code> | Look up rate effective on this date (YYYY-MM-DD). Defaults to today. |
| <code>postcode?</code> | <code>string</code> | Check for regional exceptions (e.g., Canary Islands, Ceuta) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.finance.vatrates(request)`

- **OnSuccess**: <code>[V1VatratesResponse](src/models/v1-vatrates-response.ts)</code>
- **OnError**: throws <code>[Finance.VatratesError](src/resources/finance.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.finance.vatrates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1VatratesResponse, Finance.VatratesError&gt;</code>, with `result.value` of type <code>[V1VatratesResponse](src/models/v1-vatrates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Food

> Source: [Food](src/resources/food.ts)

<details>
<summary><code>cocktail(request: Food.CocktailRequest, options?: RequestOptions): ApiPromise&lt;V1CocktailResponse, Food.CocktailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the recipe for a cocktail based on the name or ingredient

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.food.cocktail({ name: "martini" });
  // TODO: Handle 'response' of type V1CocktailResponse
} catch (err) {
  // TODO: Handle 'err' of type Food.CocktailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.food.cocktail({ name: "martini" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CocktailResponse
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
| <code>name</code> | <code>string</code> | The name of the cocktail for which you want to get the recipe (e.g., martini) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.food.cocktail(request)`

- **OnSuccess**: <code>[V1CocktailResponse](src/models/v1-cocktail-response.ts)</code>
- **OnError**: throws <code>[Food.CocktailError](src/resources/food.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.food.cocktail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CocktailResponse, Food.CocktailError&gt;</code>, with `result.value` of type <code>[V1CocktailResponse](src/models/v1-cocktail-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nutrition(request: Food.NutritionRequest, options?: RequestOptions): ApiPromise&lt;V1NutritionResponse, Food.NutritionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the nutrition facts for a generic whole food by name. Optionally scale the panel to a serving weight in grams.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.food.nutrition({ food: "banana", grams: 118 });
  // TODO: Handle 'response' of type V1NutritionResponse
} catch (err) {
  // TODO: Handle 'err' of type Food.NutritionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.food.nutrition({ food: "banana", grams: 118 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NutritionResponse
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
| <code>food</code> | <code>string</code> | Name of the food to look up (e.g. banana, chicken breast, olive oil) |
| <code>grams?</code> | <code>number</code> | Serving weight in grams to scale the nutrition panel to. Defaults to a per-100-gram basis. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.food.nutrition(request)`

- **OnSuccess**: <code>[V1NutritionResponse](src/models/v1-nutrition-response.ts)</code>
- **OnError**: throws <code>[Food.NutritionError](src/resources/food.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.food.nutrition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NutritionResponse, Food.NutritionError&gt;</code>, with `result.value` of type <code>[V1NutritionResponse](src/models/v1-nutrition-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recipe(request: Food.RecipeRequest, options?: RequestOptions): ApiPromise&lt;V1RecipeResponse, Food.RecipeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recipe Generator is an AI-powered tool for generating detailed recipes. It returns complete recipes with ingredients, instructions, prep time, cook time, and servings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.food.recipe({ name: "chicken fajitas" });
  // TODO: Handle 'response' of type V1RecipeResponse
} catch (err) {
  // TODO: Handle 'err' of type Food.RecipeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.food.recipe({ name: "chicken fajitas" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RecipeResponse
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
| <code>name</code> | <code>string</code> | The name or description of the recipe you want to generate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.food.recipe(request)`

- **OnSuccess**: <code>[V1RecipeResponse](src/models/v1-recipe-response.ts)</code>
- **OnError**: throws <code>[Food.RecipeError](src/resources/food.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.food.recipe(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RecipeResponse, Food.RecipeError&gt;</code>, with `result.value` of type <code>[V1RecipeResponse](src/models/v1-recipe-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Games

> Source: [Games](src/resources/games.ts)

<details>
<summary><code>acrostic(request: Games.AcrosticRequest, options?: RequestOptions): ApiPromise&lt;V1AcrosticResponse, Games.AcrosticError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an acrostic puzzle

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.acrostic({ word: "HAPPY", theme: "positive", image: true });
  // TODO: Handle 'response' of type V1AcrosticResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.AcrosticError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.acrostic({ word: "HAPPY", theme: "positive", image: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AcrosticResponse
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
| <code>word</code> | <code>string</code> | The keyword to spell out (3-15 letters) |
| <code>theme?</code> | <code>string</code> | Theme: random, positive, nature, adventure, friendship, learning |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.acrostic(request)`

- **OnSuccess**: <code>[V1AcrosticResponse](src/models/v1-acrostic-response.ts)</code>
- **OnError**: throws <code>[Games.AcrosticError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.acrostic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AcrosticResponse, Games.AcrosticError&gt;</code>, with `result.value` of type <code>[V1AcrosticResponse](src/models/v1-acrostic-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>anagrampuzzle(request?: Games.AnagrampuzzleRequest, options?: RequestOptions): ApiPromise&lt;V1AnagrampuzzleResponse, Games.AnagrampuzzleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create anagram puzzles

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.anagrampuzzle({
    word: "listen",
    count: 1,
    difficulty: "medium",
    image: true,
  });
  // TODO: Handle 'response' of type V1AnagrampuzzleResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.AnagrampuzzleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .anagrampuzzle({ word: "listen", count: 1, difficulty: "medium", image: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AnagrampuzzleResponse
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
| <code>word?</code> | <code>string</code> | Specific word to create anagram for |
| <code>count?</code> | <code>number</code> | Number of puzzles |
| <code>difficulty?</code> | <code>string</code> | Difficulty level |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.anagrampuzzle(request)`

- **OnSuccess**: <code>[V1AnagrampuzzleResponse](src/models/v1-anagrampuzzle-response.ts)</code>
- **OnError**: throws <code>[Games.AnagrampuzzleError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.anagrampuzzle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AnagrampuzzleResponse, Games.AnagrampuzzleError&gt;</code>, with `result.value` of type <code>[V1AnagrampuzzleResponse](src/models/v1-anagrampuzzle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>carddeckshuffler(request?: Games.CarddeckshufflerRequest, options?: RequestOptions): ApiPromise&lt;V1CarddeckshufflerResponse, Games.CarddeckshufflerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shuffle one or more standard card decks with optional jokers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.carddeckshuffler({ decks: 1, jokers: false, method: "fisher-yates" });
  // TODO: Handle 'response' of type V1CarddeckshufflerResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.CarddeckshufflerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .carddeckshuffler({ decks: 1, jokers: false, method: "fisher-yates" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CarddeckshufflerResponse
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
| <code>decks?</code> | <code>number</code> | Number of decks to shuffle |
| <code>jokers?</code> | <code>boolean</code> | Include jokers in the deck |
| <code>method?</code> | <code>string</code> | Shuffling method |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.carddeckshuffler(request)`

- **OnSuccess**: <code>[V1CarddeckshufflerResponse](src/models/v1-carddeckshuffler-response.ts)</code>
- **OnError**: throws <code>[Games.CarddeckshufflerError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.carddeckshuffler(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CarddeckshufflerResponse, Games.CarddeckshufflerError&gt;</code>, with `result.value` of type <code>[V1CarddeckshufflerResponse](src/models/v1-carddeckshuffler-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coinflipper(request?: Games.CoinflipperRequest, options?: RequestOptions): ApiPromise&lt;V1CoinflipperResponse, Games.CoinflipperError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Flip one or more coins and get detailed results

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.coinflipper({ flips: 10 });
  // TODO: Handle 'response' of type V1CoinflipperResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.CoinflipperError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.coinflipper({ flips: 10 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CoinflipperResponse
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
| <code>flips?</code> | <code>number</code> | Number of coins to flip |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.coinflipper(request)`

- **OnSuccess**: <code>[V1CoinflipperResponse](src/models/v1-coinflipper-response.ts)</code>
- **OnError**: throws <code>[Games.CoinflipperError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.coinflipper(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CoinflipperResponse, Games.CoinflipperError&gt;</code>, with `result.value` of type <code>[V1CoinflipperResponse](src/models/v1-coinflipper-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>crossword(request?: Games.CrosswordRequest, options?: RequestOptions): ApiPromise&lt;V1CrosswordResponse, Games.CrosswordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a crossword puzzle

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.crossword({
    size: "medium",
    theme: "animals",
    difficulty: "medium",
    image: true,
    solutionImage: true,
  });
  // TODO: Handle 'response' of type V1CrosswordResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.CrosswordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .crossword({ size: "medium", theme: "animals", difficulty: "medium", image: true, solutionImage: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CrosswordResponse
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
| <code>size?</code> | <code>string</code> | Grid size: small, medium, large |
| <code>theme?</code> | <code>string</code> | Theme: random, animals, food, sports, science, geography |
| <code>difficulty?</code> | <code>string</code> | Difficulty: easy, medium, hard |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |
| <code>solutionImage?</code> | <code>boolean</code> | Set to true to generate a downloadable solution image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.crossword(request)`

- **OnSuccess**: <code>[V1CrosswordResponse](src/models/v1-crossword-response.ts)</code>
- **OnError**: throws <code>[Games.CrosswordError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.crossword(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CrosswordResponse, Games.CrosswordError&gt;</code>, with `result.value` of type <code>[V1CrosswordResponse](src/models/v1-crossword-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cryptogram(request?: Games.CryptogramRequest, options?: RequestOptions): ApiPromise&lt;V1CryptogramResponse, Games.CryptogramError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a cryptogram puzzle

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.cryptogram({
    text: "The quick brown fox",
    random: true,
    image: true,
    solutionImage: true,
  });
  // TODO: Handle 'response' of type V1CryptogramResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.CryptogramError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .cryptogram({ text: "The quick brown fox", random: true, image: true, solutionImage: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CryptogramResponse
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
| <code>text?</code> | <code>string</code> | Text to encode (max 500 characters) |
| <code>random?</code> | <code>boolean</code> | Use a random famous quote instead of text (a quote is also used when text is omitted) |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |
| <code>solutionImage?</code> | <code>boolean</code> | Set to true to generate a downloadable solution image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.cryptogram(request)`

- **OnSuccess**: <code>[V1CryptogramResponse](src/models/v1-cryptogram-response.ts)</code>
- **OnError**: throws <code>[Games.CryptogramError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.cryptogram(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CryptogramResponse, Games.CryptogramError&gt;</code>, with `result.value` of type <code>[V1CryptogramResponse](src/models/v1-cryptogram-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>diceroller(request?: Games.DicerollerRequest, options?: RequestOptions): ApiPromise&lt;V1DicerollerResponse, Games.DicerollerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Roll dice using XdY notation with optional modifier

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.diceroller({ dice: "3d6", modifier: 5 });
  // TODO: Handle 'response' of type V1DicerollerResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.DicerollerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.diceroller({ dice: "3d6", modifier: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DicerollerResponse
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
| <code>dice?</code> | <code>string</code> | Dice notation in XdY format (e.g., 3d6, 2d20, default: 1d6) |
| <code>modifier?</code> | <code>number</code> | Modifier to add to the total (can be negative) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.diceroller(request)`

- **OnSuccess**: <code>[V1DicerollerResponse](src/models/v1-diceroller-response.ts)</code>
- **OnError**: throws <code>[Games.DicerollerError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.diceroller(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DicerollerResponse, Games.DicerollerError&gt;</code>, with `result.value` of type <code>[V1DicerollerResponse](src/models/v1-diceroller-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fillintheblanks(request?: Games.FillintheblanksRequest, options?: RequestOptions): ApiPromise&lt;V1FillintheblanksResponse, Games.FillintheblanksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create fill in the blank puzzles

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.fillintheblanks({
    category: "idioms",
    count: 5,
    difficulty: "medium",
    image: true,
  });
  // TODO: Handle 'response' of type V1FillintheblanksResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.FillintheblanksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .fillintheblanks({ category: "idioms", count: 5, difficulty: "medium", image: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FillintheblanksResponse
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
| <code>category?</code> | <code>string</code> | Puzzle category |
| <code>count?</code> | <code>number</code> | Number of puzzles |
| <code>difficulty?</code> | <code>string</code> | Difficulty level |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.fillintheblanks(request)`

- **OnSuccess**: <code>[V1FillintheblanksResponse](src/models/v1-fillintheblanks-response.ts)</code>
- **OnError**: throws <code>[Games.FillintheblanksError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.fillintheblanks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FillintheblanksResponse, Games.FillintheblanksError&gt;</code>, with `result.value` of type <code>[V1FillintheblanksResponse](src/models/v1-fillintheblanks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fortunecookie(options?: RequestOptions): ApiPromise&lt;V1FortunecookieResponse, Games.FortunecookieError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate fortune cookie messages with lucky numbers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.fortunecookie();
  // TODO: Handle 'response' of type V1FortunecookieResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.FortunecookieError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.fortunecookie().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FortunecookieResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.fortunecookie()`

- **OnSuccess**: <code>[V1FortunecookieResponse](src/models/v1-fortunecookie-response.ts)</code>
- **OnError**: throws <code>[Games.FortunecookieError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.fortunecookie().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FortunecookieResponse, Games.FortunecookieError&gt;</code>, with `result.value` of type <code>[V1FortunecookieResponse](src/models/v1-fortunecookie-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>gamecharacter(request?: Games.GamecharacterRequest, options?: RequestOptions): ApiPromise&lt;V1GamecharacterResponse, Games.GamecharacterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a random RPG character

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.gamecharacter({ race: "elf", class: "mage" });
  // TODO: Handle 'response' of type V1GamecharacterResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.GamecharacterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.gamecharacter({ race: "elf", class: "mage" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GamecharacterResponse
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
| <code>race?</code> | <code>string</code> | Character race: Human, Elf, Dwarf, Halfling, Orc, Gnome, Tiefling, Dragonborn, Half-Elf, Goblin |
| <code>class?</code> | <code>string</code> | Character class: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Barbarian, Bard, Druid, Monk, Warlock, Necromancer |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.gamecharacter(request)`

- **OnSuccess**: <code>[V1GamecharacterResponse](src/models/v1-gamecharacter-response.ts)</code>
- **OnError**: throws <code>[Games.GamecharacterError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.gamecharacter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GamecharacterResponse, Games.GamecharacterError&gt;</code>, with `result.value` of type <code>[V1GamecharacterResponse](src/models/v1-gamecharacter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hangmanword(request?: Games.HangmanwordRequest, options?: RequestOptions): ApiPromise&lt;V1HangmanwordResponse, Games.HangmanwordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get random words for hangman

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.hangmanword({
    category: "animals",
    difficulty: "medium",
    count: 1,
    image: true,
  });
  // TODO: Handle 'response' of type V1HangmanwordResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.HangmanwordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .hangmanword({ category: "animals", difficulty: "medium", count: 1, image: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HangmanwordResponse
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
| <code>category?</code> | <code>string</code> | Word category |
| <code>difficulty?</code> | <code>string</code> | Difficulty level |
| <code>count?</code> | <code>number</code> | Number of words |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.hangmanword(request)`

- **OnSuccess**: <code>[V1HangmanwordResponse](src/models/v1-hangmanword-response.ts)</code>
- **OnError**: throws <code>[Games.HangmanwordError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.hangmanword(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HangmanwordResponse, Games.HangmanwordError&gt;</code>, with `result.value` of type <code>[V1HangmanwordResponse](src/models/v1-hangmanword-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lotterypicker(request?: Games.LotterypickerRequest, options?: RequestOptions): ApiPromise&lt;V1LotterypickerResponse, Games.LotterypickerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate random lottery numbers for various games

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.lotterypicker({
    game: "powerball",
    numbers: 6,
    max: 49,
    bonus: 1,
    tickets: 3,
    bonusmax: 26,
  });
  // TODO: Handle 'response' of type V1LotterypickerResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.LotterypickerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .lotterypicker({ game: "powerball", numbers: 6, max: 49, bonus: 1, tickets: 3, bonusmax: 26 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LotterypickerResponse
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
| <code>game?</code> | <code>string</code> | Lottery game preset |
| <code>numbers?</code> | <code>number</code> | Number of main numbers to pick (for custom game) |
| <code>max?</code> | <code>number</code> | Maximum number for main numbers (for custom game) |
| <code>bonus?</code> | <code>number</code> | Number of bonus numbers (for custom game) |
| <code>tickets?</code> | <code>number</code> | Number of tickets to generate |
| <code>bonusmax?</code> | <code>number</code> | Highest value a bonus ball can take. Only applies when game is custom; named games use their own rules |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.lotterypicker(request)`

- **OnSuccess**: <code>[V1LotterypickerResponse](src/models/v1-lotterypicker-response.ts)</code>
- **OnError**: throws <code>[Games.LotterypickerError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.lotterypicker(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LotterypickerResponse, Games.LotterypickerError&gt;</code>, with `result.value` of type <code>[V1LotterypickerResponse](src/models/v1-lotterypicker-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>madlibs(request?: Games.MadlibsRequest, options?: RequestOptions): ApiPromise&lt;V1MadlibsResponse, Games.MadlibsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get mad libs story templates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.madlibs({ category: "funny", count: 1 });
  // TODO: Handle 'response' of type V1MadlibsResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.MadlibsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.madlibs({ category: "funny", count: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MadlibsResponse
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
| <code>category?</code> | <code>string</code> | Story category |
| <code>count?</code> | <code>number</code> | Number of stories |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.madlibs(request)`

- **OnSuccess**: <code>[V1MadlibsResponse](src/models/v1-madlibs-response.ts)</code>
- **OnError**: throws <code>[Games.MadlibsError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.madlibs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MadlibsResponse, Games.MadlibsError&gt;</code>, with `result.value` of type <code>[V1MadlibsResponse](src/models/v1-madlibs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>maze(request?: Games.MazeRequest, options?: RequestOptions): ApiPromise&lt;V1MazeResponse, Games.MazeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a maze puzzle

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.maze({
    width: 15,
    height: 15,
    difficulty: "medium",
    image: true,
    solutionImage: true,
  });
  // TODO: Handle 'response' of type V1MazeResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.MazeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .maze({ width: 15, height: 15, difficulty: "medium", image: true, solutionImage: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MazeResponse
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
| <code>width?</code> | <code>number</code> | Maze width |
| <code>height?</code> | <code>number</code> | Maze height |
| <code>difficulty?</code> | <code>string</code> | Difficulty level |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable maze image |
| <code>solutionImage?</code> | <code>boolean</code> | Set to true to generate a downloadable solution image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.maze(request)`

- **OnSuccess**: <code>[V1MazeResponse](src/models/v1-maze-response.ts)</code>
- **OnError**: throws <code>[Games.MazeError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.maze(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MazeResponse, Games.MazeError&gt;</code>, with `result.value` of type <code>[V1MazeResponse](src/models/v1-maze-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rockpaperscissors(request?: Games.RockpaperscissorsRequest, options?: RequestOptions): ApiPromise&lt;V1RockpaperscissorsResponse, Games.RockpaperscissorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Play rounds of Rock Paper Scissors with outcome analysis

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.rockpaperscissors({ choice: "rock", rounds: 5 });
  // TODO: Handle 'response' of type V1RockpaperscissorsResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.RockpaperscissorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.rockpaperscissors({ choice: "rock", rounds: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RockpaperscissorsResponse
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
| <code>choice?</code> | <code>string</code> | Your choice - omit for random |
| <code>rounds?</code> | <code>number</code> | Number of rounds to play |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.rockpaperscissors(request)`

- **OnSuccess**: <code>[V1RockpaperscissorsResponse](src/models/v1-rockpaperscissors-response.ts)</code>
- **OnError**: throws <code>[Games.RockpaperscissorsError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.rockpaperscissors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RockpaperscissorsResponse, Games.RockpaperscissorsError&gt;</code>, with `result.value` of type <code>[V1RockpaperscissorsResponse](src/models/v1-rockpaperscissors-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>slotmachine(request?: Games.SlotmachineRequest, options?: RequestOptions): ApiPromise&lt;V1SlotmachineResponse, Games.SlotmachineError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Simulate slot machine spins with configurable reels and bet amounts

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.slotmachine({ spins: 5, reels: 3, bet: 1 });
  // TODO: Handle 'response' of type V1SlotmachineResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.SlotmachineError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.slotmachine({ spins: 5, reels: 3, bet: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SlotmachineResponse
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
| <code>spins?</code> | <code>number</code> | Number of spins to simulate |
| <code>reels?</code> | <code>number</code> | Number of reels |
| <code>bet?</code> | <code>number</code> | Bet amount per spin |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.slotmachine(request)`

- **OnSuccess**: <code>[V1SlotmachineResponse](src/models/v1-slotmachine-response.ts)</code>
- **OnError**: throws <code>[Games.SlotmachineError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.slotmachine(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SlotmachineResponse, Games.SlotmachineError&gt;</code>, with `result.value` of type <code>[V1SlotmachineResponse](src/models/v1-slotmachine-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>spellingbee(request?: Games.SpellingbeeRequest, options?: RequestOptions): ApiPromise&lt;V1SpellingbeeResponse, Games.SpellingbeeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a spelling bee puzzle

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.spellingbee({ difficulty: "medium", image: true });
  // TODO: Handle 'response' of type V1SpellingbeeResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.SpellingbeeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.spellingbee({ difficulty: "medium", image: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SpellingbeeResponse
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
| <code>difficulty?</code> | <code>string</code> | Difficulty: easy, medium, hard (affects word count) |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.spellingbee(request)`

- **OnSuccess**: <code>[V1SpellingbeeResponse](src/models/v1-spellingbee-response.ts)</code>
- **OnError**: throws <code>[Games.SpellingbeeError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.spellingbee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SpellingbeeResponse, Games.SpellingbeeError&gt;</code>, with `result.value` of type <code>[V1SpellingbeeResponse](src/models/v1-spellingbee-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>superheroname(request?: Games.SuperheronameRequest, options?: RequestOptions): ApiPromise&lt;V1SuperheronameResponse, Games.SuperheronameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a random superhero name

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.superheroname({ style: "dark" });
  // TODO: Handle 'response' of type V1SuperheronameResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.SuperheronameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.superheroname({ style: "dark" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SuperheronameResponse
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
| <code>style?</code> | <code>string</code> | Name style |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.superheroname(request)`

- **OnSuccess**: <code>[V1SuperheronameResponse](src/models/v1-superheroname-response.ts)</code>
- **OnError**: throws <code>[Games.SuperheronameError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.superheroname(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SuperheronameResponse, Games.SuperheronameError&gt;</code>, with `result.value` of type <code>[V1SuperheronameResponse](src/models/v1-superheroname-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wordladder(request?: Games.WordladderRequest, options?: RequestOptions): ApiPromise&lt;V1WordladderResponse, Games.WordladderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create word ladder puzzles

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.wordladder({
    start: "cold",
    end: "warm",
    difficulty: "medium",
    count: 1,
    image: true,
  });
  // TODO: Handle 'response' of type V1WordladderResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.WordladderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games
  .wordladder({ start: "cold", end: "warm", difficulty: "medium", count: 1, image: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WordladderResponse
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
| <code>start?</code> | <code>string</code> | Starting word (3-6 letters) |
| <code>end?</code> | <code>string</code> | Ending word (same length as start) |
| <code>difficulty?</code> | <code>string</code> | Difficulty level |
| <code>count?</code> | <code>number</code> | Number of puzzles |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.wordladder(request)`

- **OnSuccess**: <code>[V1WordladderResponse](src/models/v1-wordladder-response.ts)</code>
- **OnError**: throws <code>[Games.WordladderError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.wordladder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WordladderResponse, Games.WordladderError&gt;</code>, with `result.value` of type <code>[V1WordladderResponse](src/models/v1-wordladder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wordscramble(request?: Games.WordscrambleRequest, options?: RequestOptions): ApiPromise&lt;V1WordscrambleResponse, Games.WordscrambleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create scrambled word puzzles

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.wordscramble({ difficulty: "medium", count: 5, image: true });
  // TODO: Handle 'response' of type V1WordscrambleResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.WordscrambleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.wordscramble({ difficulty: "medium", count: 5, image: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WordscrambleResponse
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
| <code>difficulty?</code> | <code>string</code> | Difficulty level (affects word length) |
| <code>count?</code> | <code>number</code> | Number of puzzles |
| <code>image?</code> | <code>boolean</code> | Set to true to generate a downloadable puzzle image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.wordscramble(request)`

- **OnSuccess**: <code>[V1WordscrambleResponse](src/models/v1-wordscramble-response.ts)</code>
- **OnError**: throws <code>[Games.WordscrambleError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.wordscramble(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WordscrambleResponse, Games.WordscrambleError&gt;</code>, with `result.value` of type <code>[V1WordscrambleResponse](src/models/v1-wordscramble-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wordsearch(request: Games.WordsearchRequest, options?: RequestOptions): ApiPromise&lt;V1WordsearchResponse, Games.WordsearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a word search puzzle with custom words

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.games.wordsearch({ body: { words: "some example string" } });
  // TODO: Handle 'response' of type V1WordsearchResponse
} catch (err) {
  // TODO: Handle 'err' of type Games.WordsearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.games.wordsearch({ body: { words: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WordsearchResponse
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
| <code>body</code> | <code>[V1WordsearchRequest](src/models/v1-wordsearch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.games.wordsearch(request)`

- **OnSuccess**: <code>[V1WordsearchResponse](src/models/v1-wordsearch-response.ts)</code>
- **OnError**: throws <code>[Games.WordsearchError](src/resources/games.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.games.wordsearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WordsearchResponse, Games.WordsearchError&gt;</code>, with `result.value` of type <code>[V1WordsearchResponse](src/models/v1-wordsearch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Geography

> Source: [Geography](src/resources/geography.ts)

<details>
<summary><code>citieslookup(request: Geography.CitieslookupRequest, options?: RequestOptions): ApiPromise&lt;V1CitieslookupResponse, Geography.CitieslookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup city data based on the city name

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.citieslookup({ city: "San Francisco", limit: 5 });
  // TODO: Handle 'response' of type V1CitieslookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.CitieslookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.citieslookup({ city: "San Francisco", limit: 5 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CitieslookupResponse
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
| <code>city</code> | <code>string</code> | The city name for which you want to get the data (e.g., New York) |
| <code>limit?</code> | <code>number</code> | Limit number of cities that match your search criteria |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.citieslookup(request)`

- **OnSuccess**: <code>[V1CitieslookupResponse](src/models/v1-citieslookup-response.ts)</code>
- **OnError**: throws <code>[Geography.CitieslookupError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.citieslookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CitieslookupResponse, Geography.CitieslookupError&gt;</code>, with `result.value` of type <code>[V1CitieslookupResponse](src/models/v1-citieslookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>coordinatesaresea(request: Geography.CoordinatesareseaRequest, options?: RequestOptions): ApiPromise&lt;V1CoordinatesareseaResponse, Geography.CoordinatesareseaError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if the coordinates are in the sea

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.coordinatesaresea({ lat: 37.7749, lon: -122.4194 });
  // TODO: Handle 'response' of type V1CoordinatesareseaResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.CoordinatesareseaError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.coordinatesaresea({ lat: 37.7749, lon: -122.4194 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CoordinatesareseaResponse
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
| <code>lat</code> | <code>number</code> | The latitude of the coordinates |
| <code>lon</code> | <code>number</code> | The longitude of the coordinates |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.coordinatesaresea(request)`

- **OnSuccess**: <code>[V1CoordinatesareseaResponse](src/models/v1-coordinatesaresea-response.ts)</code>
- **OnError**: throws <code>[Geography.CoordinatesareseaError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.coordinatesaresea(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CoordinatesareseaResponse, Geography.CoordinatesareseaError&gt;</code>, with `result.value` of type <code>[V1CoordinatesareseaResponse](src/models/v1-coordinatesaresea-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countryborders(request: Geography.CountrybordersRequest, options?: RequestOptions): ApiPromise&lt;V1CountrybordersResponse, Geography.CountrybordersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Borders is a simple tool for getting the list of neighboring countries for a specific country. It returns the list of neighboring countries for the specified country.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.countryborders({ country: "CA" });
  // TODO: Handle 'response' of type V1CountrybordersResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.CountrybordersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.countryborders({ country: "CA" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CountrybordersResponse
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
| <code>country</code> | <code>string</code> | The Country 2 Letter ISO code (e.g., CA) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.countryborders(request)`

- **OnSuccess**: <code>[V1CountrybordersResponse](src/models/v1-countryborders-response.ts)</code>
- **OnError**: throws <code>[Geography.CountrybordersError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.countryborders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CountrybordersResponse, Geography.CountrybordersError&gt;</code>, with `result.value` of type <code>[V1CountrybordersResponse](src/models/v1-countryborders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countryboundaries(request: Geography.CountryboundariesRequest, options?: RequestOptions): ApiPromise&lt;V1CountryboundariesResponse, Geography.CountryboundariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Boundaries is a simple tool for getting the shape of a specific country's border. It returns the shape of the specified country's border.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.countryboundaries({ country: "CA" });
  // TODO: Handle 'response' of type V1CountryboundariesResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.CountryboundariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.countryboundaries({ country: "CA" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CountryboundariesResponse
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
| <code>country</code> | <code>string</code> | The Country 2 Letter ISO code (e.g., CA) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.countryboundaries(request)`

- **OnSuccess**: <code>[V1CountryboundariesResponse](src/models/v1-countryboundaries-response.ts)</code>
- **OnError**: throws <code>[Geography.CountryboundariesError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.countryboundaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CountryboundariesResponse, Geography.CountryboundariesError&gt;</code>, with `result.value` of type <code>[V1CountryboundariesResponse](src/models/v1-countryboundaries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countryflags(request: Geography.CountryflagsRequest, options?: RequestOptions): ApiPromise&lt;V1CountryflagsResponse, Geography.CountryflagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Flag is a simple tool for getting the country's national flags. It returns the country's national flags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.countryflags({ country: "ZW", format: "png", shape: "circle" });
  // TODO: Handle 'response' of type V1CountryflagsResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.CountryflagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography
  .countryflags({ country: "ZW", format: "png", shape: "circle" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CountryflagsResponse
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
| <code>country</code> | <code>string</code> | The 2 letter ISO Country Code (e.g. ZW) |
| <code>format</code> | <code>string</code> | The format of the flag image |
| <code>shape</code> | <code>string</code> | The shape of the flag image |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.countryflags(request)`

- **OnSuccess**: <code>[V1CountryflagsResponse](src/models/v1-countryflags-response.ts)</code>
- **OnError**: throws <code>[Geography.CountryflagsError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.countryflags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CountryflagsResponse, Geography.CountryflagsError&gt;</code>, with `result.value` of type <code>[V1CountryflagsResponse](src/models/v1-countryflags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countrylanguages(request: Geography.CountrylanguagesRequest, options?: RequestOptions): ApiPromise&lt;V1CountrylanguagesResponse, Geography.CountrylanguagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Country Languages is a simple tool for getting the list of official and commonly spoken languages in a specific country.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.countrylanguages({ country: "ZW" });
  // TODO: Handle 'response' of type V1CountrylanguagesResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.CountrylanguagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.countrylanguages({ country: "ZW" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CountrylanguagesResponse
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
| <code>country</code> | <code>string</code> | The Country 2 letter ISO code for which you want to get languages for data (e.g., ZW) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.countrylanguages(request)`

- **OnSuccess**: <code>[V1CountrylanguagesResponse](src/models/v1-countrylanguages-response.ts)</code>
- **OnError**: throws <code>[Geography.CountrylanguagesError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.countrylanguages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CountrylanguagesResponse, Geography.CountrylanguagesError&gt;</code>, with `result.value` of type <code>[V1CountrylanguagesResponse](src/models/v1-countrylanguages-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countrylookup(request: Geography.CountrylookupRequest, options?: RequestOptions): ApiPromise&lt;V1CountrylookupResponse, Geography.CountrylookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup country data based on the country ISO Code

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.countrylookup({ country: "USA", majorcities: true });
  // TODO: Handle 'response' of type V1CountrylookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.CountrylookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.countrylookup({ country: "USA", majorcities: true }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CountrylookupResponse
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
| <code>country</code> | <code>string</code> | The Country name or ISO code of the country for which you want to get the data (e.g., USA) |
| <code>majorcities?</code> | <code>boolean</code> | Specify if you would like to return all major cities of the country found |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.countrylookup(request)`

- **OnSuccess**: <code>[V1CountrylookupResponse](src/models/v1-countrylookup-response.ts)</code>
- **OnError**: throws <code>[Geography.CountrylookupError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.countrylookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CountrylookupResponse, Geography.CountrylookupError&gt;</code>, with `result.value` of type <code>[V1CountrylookupResponse](src/models/v1-countrylookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>countydata(request: Geography.CountydataRequest, options?: RequestOptions): ApiPromise&lt;V1CountydataResponse, Geography.CountydataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data about a US county

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.countydata({ state: "MO", county: "Jackson" });
  // TODO: Handle 'response' of type V1CountydataResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.CountydataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.countydata({ state: "MO", county: "Jackson" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CountydataResponse
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
| <code>state</code> | <code>string</code> | The two letter name of the US state the county is in (e.g., MO) |
| <code>county</code> | <code>string</code> | The name of the US county to get data about (e.g. Jackson) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.countydata(request)`

- **OnSuccess**: <code>[V1CountydataResponse](src/models/v1-countydata-response.ts)</code>
- **OnError**: throws <code>[Geography.CountydataError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.countydata(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CountydataResponse, Geography.CountydataError&gt;</code>, with `result.value` of type <code>[V1CountydataResponse](src/models/v1-countydata-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>distancecalculator(request: Geography.DistancecalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1DistancecalculatorResponse, Geography.DistancecalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate the distance between two coordinates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.distancecalculator({
    lat1: 36.7783,
    lon1: -119.4179,
    lat2: 34.0522,
    lon2: -118.2437,
  });
  // TODO: Handle 'response' of type V1DistancecalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.DistancecalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography
  .distancecalculator({ lat1: 36.7783, lon1: -119.4179, lat2: 34.0522, lon2: -118.2437 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DistancecalculatorResponse
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
| <code>lat1</code> | <code>number</code> | The latitude of the first location |
| <code>lon1</code> | <code>number</code> | The longitude of the first location |
| <code>lat2</code> | <code>number</code> | The latitude of the second location |
| <code>lon2</code> | <code>number</code> | The longitude of the second location |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.distancecalculator(request)`

- **OnSuccess**: <code>[V1DistancecalculatorResponse](src/models/v1-distancecalculator-response.ts)</code>
- **OnError**: throws <code>[Geography.DistancecalculatorError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.distancecalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DistancecalculatorResponse, Geography.DistancecalculatorError&gt;</code>, with `result.value` of type <code>[V1DistancecalculatorResponse](src/models/v1-distancecalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hardinesszone(request: Geography.HardinesszoneRequest, options?: RequestOptions): ApiPromise&lt;V1HardinesszoneResponse, Geography.HardinesszoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Hardiness Zone is a simple tool for getting the USDA Plant Hardiness Zone for a given zip code

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.hardinesszone({ zip: "97201" });
  // TODO: Handle 'response' of type V1HardinesszoneResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.HardinesszoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.hardinesszone({ zip: "97201" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HardinesszoneResponse
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
| <code>zip</code> | <code>string</code> | The zip code to get the USDA Plant Hardiness Zone for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.hardinesszone(request)`

- **OnSuccess**: <code>[V1HardinesszoneResponse](src/models/v1-hardinesszone-response.ts)</code>
- **OnError**: throws <code>[Geography.HardinesszoneError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.hardinesszone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HardinesszoneResponse, Geography.HardinesszoneError&gt;</code>, with `result.value` of type <code>[V1HardinesszoneResponse](src/models/v1-hardinesszone-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reversegeocode(request: Geography.ReversegeocodeRequest, options?: RequestOptions): ApiPromise&lt;V1ReversegeocodeResponse, Geography.ReversegeocodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the location of a set of coordinates, Only supports USA and Canada Coordinates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.reversegeocode({ lat: 40.714224, lon: -73.961452 });
  // TODO: Handle 'response' of type V1ReversegeocodeResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.ReversegeocodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.reversegeocode({ lat: 40.714224, lon: -73.961452 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ReversegeocodeResponse
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
| <code>lat</code> | <code>number</code> | The latitude of the coordinates |
| <code>lon</code> | <code>number</code> | The longitude of the coordinates |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.reversegeocode(request)`

- **OnSuccess**: <code>[V1ReversegeocodeResponse](src/models/v1-reversegeocode-response.ts)</code>
- **OnError**: throws <code>[Geography.ReversegeocodeError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.reversegeocode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ReversegeocodeResponse, Geography.ReversegeocodeError&gt;</code>, with `result.value` of type <code>[V1ReversegeocodeResponse](src/models/v1-reversegeocode-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stateboundaries(request: Geography.StateboundariesRequest, options?: RequestOptions): ApiPromise&lt;V1StateboundariesResponse, Geography.StateboundariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

State Boundaries is a simple tool for getting the boundaries of a specific state's border. It returns the shape of the specified state's border.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.stateboundaries({ state: "CA" });
  // TODO: Handle 'response' of type V1StateboundariesResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.StateboundariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.stateboundaries({ state: "CA" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1StateboundariesResponse
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
| <code>state</code> | <code>string</code> | The 2 Letter State Code (e.g., CA) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.stateboundaries(request)`

- **OnSuccess**: <code>[V1StateboundariesResponse](src/models/v1-stateboundaries-response.ts)</code>
- **OnError**: throws <code>[Geography.StateboundariesError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.stateboundaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1StateboundariesResponse, Geography.StateboundariesError&gt;</code>, with `result.value` of type <code>[V1StateboundariesResponse](src/models/v1-stateboundaries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>zipcodes(request: Geography.ZipcodesRequest, options?: RequestOptions): ApiPromise&lt;V1ZipcodesResponse, Geography.ZipcodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the zip code information

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.geography.zipcodes({ zip: "64082" });
  // TODO: Handle 'response' of type V1ZipcodesResponse
} catch (err) {
  // TODO: Handle 'err' of type Geography.ZipcodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.geography.zipcodes({ zip: "64082" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ZipcodesResponse
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
| <code>zip</code> | <code>string</code> | The zip code for which you want to get the data |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.geography.zipcodes(request)`

- **OnSuccess**: <code>[V1ZipcodesResponse](src/models/v1-zipcodes-response.ts)</code>
- **OnError**: throws <code>[Geography.ZipcodesError](src/resources/geography.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.geography.zipcodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ZipcodesResponse, Geography.ZipcodesError&gt;</code>, with `result.value` of type <code>[V1ZipcodesResponse](src/models/v1-zipcodes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HealthWellness

> Source: [HealthWellness](src/resources/health-wellness.ts)

<details>
<summary><code>bmicalculator(request: HealthWellness.BmicalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1BmicalculatorResponse, HealthWellness.BmicalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate BMI, ideal weight, BMR, TDEE, calorie targets and macros

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.healthWellness.bmicalculator({
    weight: 180,
    height: 70,
    unit: "imperial",
    age: 30,
    gender: "male",
    activityLevel: "moderate",
  });
  // TODO: Handle 'response' of type V1BmicalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type HealthWellness.BmicalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.healthWellness
  .bmicalculator({
    weight: 180,
    height: 70,
    unit: "imperial",
    age: 30,
    gender: "male",
    activityLevel: "moderate",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BmicalculatorResponse
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
| <code>weight</code> | <code>number</code> | Weight in kg (metric) or lbs (imperial) |
| <code>height</code> | <code>number</code> | Height in cm (metric) or inches (imperial) |
| <code>unit</code> | <code>string</code> | Unit system for weight and height |
| <code>age?</code> | <code>number</code> | Age in years (required for BMR/TDEE calculations) |
| <code>gender?</code> | <code>string</code> | Gender (required for BMR/TDEE calculations) |
| <code>activityLevel?</code> | <code>string</code> | Activity level (required for TDEE/calorie calculations) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.healthWellness.bmicalculator(request)`

- **OnSuccess**: <code>[V1BmicalculatorResponse](src/models/v1-bmicalculator-response.ts)</code>
- **OnError**: throws <code>[HealthWellness.BmicalculatorError](src/resources/health-wellness.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.healthWellness.bmicalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BmicalculatorResponse, HealthWellness.BmicalculatorError&gt;</code>, with `result.value` of type <code>[V1BmicalculatorResponse](src/models/v1-bmicalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>exercises(request: HealthWellness.ExercisesRequest, options?: RequestOptions): ApiPromise&lt;V1ExercisesResponse, HealthWellness.ExercisesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exercises is a simple tool for getting exercise information. It returns information on various exercises.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.healthWellness.exercises({
    muscle: "chest",
    name: "barbell",
    equipment: "barbell",
  });
  // TODO: Handle 'response' of type V1ExercisesResponse
} catch (err) {
  // TODO: Handle 'err' of type HealthWellness.ExercisesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.healthWellness
  .exercises({ muscle: "chest", name: "barbell", equipment: "barbell" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ExercisesResponse
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
| <code>muscle</code> | <code>string</code> | The muscle group to get exercises for |
| <code>name?</code> | <code>string</code> | The name of the exercise to get information about |
| <code>equipment?</code> | <code>string</code> | The equipment used for the exercise |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.healthWellness.exercises(request)`

- **OnSuccess**: <code>[V1ExercisesResponse](src/models/v1-exercises-response.ts)</code>
- **OnError**: throws <code>[HealthWellness.ExercisesError](src/resources/health-wellness.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.healthWellness.exercises(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ExercisesResponse, HealthWellness.ExercisesError&gt;</code>, with `result.value` of type <code>[V1ExercisesResponse](src/models/v1-exercises-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Images

> Source: [Images](src/resources/images.ts)

<details>
<summary><code>facedetect(request?: Images.FacedetectRequest, options?: RequestOptions): ApiPromise&lt;V1FacedetectResponse, Images.FacedetectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect all faces in an uploaded image and return their bounding box coordinates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.images.facedetect();
  // TODO: Handle 'response' of type V1FacedetectResponse
} catch (err) {
  // TODO: Handle 'err' of type Images.FacedetectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.images.facedetect().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FacedetectResponse
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
| <code>confidence?</code> | <code>number</code> | Minimum confidence threshold for face detection (0.1 to 1.0) |
| <code>image?</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, .webp, max 10MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.images.facedetect(request)`

- **OnSuccess**: <code>[V1FacedetectResponse](src/models/v1-facedetect-response.ts)</code>
- **OnError**: throws <code>[Images.FacedetectError](src/resources/images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.images.facedetect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FacedetectResponse, Images.FacedetectError&gt;</code>, with `result.value` of type <code>[V1FacedetectResponse](src/models/v1-facedetect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>heicconverter(request: Images.HeicconverterRequest, options?: RequestOptions): ApiPromise&lt;V1HeicconverterResponse, Images.HeicconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a HEIC/HEIF image to another format. Upload an image file to convert.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.images.heicconverter({
    outputFormat: "png",
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    image: new Uint8Array(),
  });
  // TODO: Handle 'response' of type V1HeicconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type Images.HeicconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.images
  .heicconverter({
    outputFormat: "png",
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    image: new Uint8Array(),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HeicconverterResponse
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
| <code>outputFormat</code> | <code>string</code> | Target format |
| <code>quality?</code> | <code>number</code> | Output quality (applies to jpg/webp) |
| <code>maxWidth?</code> | <code>number</code> | Maximum width in pixels (maintains aspect ratio) |
| <code>maxHeight?</code> | <code>number</code> | Maximum height in pixels (maintains aspect ratio) |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .heic, .heif, max 10MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.images.heicconverter(request)`

- **OnSuccess**: <code>[V1HeicconverterResponse](src/models/v1-heicconverter-response.ts)</code>
- **OnError**: throws <code>[Images.HeicconverterError](src/resources/images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.images.heicconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HeicconverterResponse, Images.HeicconverterError&gt;</code>, with `result.value` of type <code>[V1HeicconverterResponse](src/models/v1-heicconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>imageconverter(request: Images.ImageconverterRequest, options?: RequestOptions): ApiPromise&lt;V1ImageconverterResponse, Images.ImageconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert an image from one format to another. Upload an image file to convert.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.images.imageconverter({
    outputFormat: "png",
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    image: new Uint8Array(),
  });
  // TODO: Handle 'response' of type V1ImageconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type Images.ImageconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.images
  .imageconverter({
    outputFormat: "png",
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    image: new Uint8Array(),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ImageconverterResponse
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
| <code>outputFormat</code> | <code>string</code> | Target format |
| <code>quality?</code> | <code>number</code> | Output quality (applies to jpg/webp) |
| <code>maxWidth?</code> | <code>number</code> | Maximum width in pixels (maintains aspect ratio) |
| <code>maxHeight?</code> | <code>number</code> | Maximum height in pixels (maintains aspect ratio) |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .heic, .heif, .avif, .webp, .png, .jpg, .jpeg, .gif, .tiff, .tif, .bmp, .pdf, .svg, max 10MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.images.imageconverter(request)`

- **OnSuccess**: <code>[V1ImageconverterResponse](src/models/v1-imageconverter-response.ts)</code>
- **OnError**: throws <code>[Images.ImageconverterError](src/resources/images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.images.imageconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ImageconverterResponse, Images.ImageconverterError&gt;</code>, with `result.value` of type <code>[V1ImageconverterResponse](src/models/v1-imageconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nsfwimagedetector(request: Images.NsfwimagedetectorRequest, options?: RequestOptions): ApiPromise&lt;V1NsfwimagedetectorResponse, Images.NsfwimagedetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.images.nsfwimagedetector({ image: new Uint8Array() });
  // TODO: Handle 'response' of type V1NsfwimagedetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type Images.NsfwimagedetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.images.nsfwimagedetector({ image: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NsfwimagedetectorResponse
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
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.images.nsfwimagedetector(request)`

- **OnSuccess**: <code>[V1NsfwimagedetectorResponse](src/models/v1-nsfwimagedetector-response.ts)</code>
- **OnError**: throws <code>[Images.NsfwimagedetectorError](src/resources/images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.images.nsfwimagedetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NsfwimagedetectorResponse, Images.NsfwimagedetectorError&gt;</code>, with `result.value` of type <code>[V1NsfwimagedetectorResponse](src/models/v1-nsfwimagedetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>qrcodereader(request: Images.QrcodereaderRequest, options?: RequestOptions): ApiPromise&lt;V1QrcodereaderResponse, Images.QrcodereaderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

QR Code Reader is a powerful tool that extracts text and data from QR codes in images. Simply provide an image URL or upload an image containing a QR code to decode its contents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.images.qrcodereader({ image: new Uint8Array() });
  // TODO: Handle 'response' of type V1QrcodereaderResponse
} catch (err) {
  // TODO: Handle 'err' of type Images.QrcodereaderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.images.qrcodereader({ image: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1QrcodereaderResponse
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
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.images.qrcodereader(request)`

- **OnSuccess**: <code>[V1QrcodereaderResponse](src/models/v1-qrcodereader-response.ts)</code>
- **OnError**: throws <code>[Images.QrcodereaderError](src/resources/images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.images.qrcodereader(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1QrcodereaderResponse, Images.QrcodereaderError&gt;</code>, with `result.value` of type <code>[V1QrcodereaderResponse](src/models/v1-qrcodereader-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>svgconverter(request: Images.SvgconverterRequest, options?: RequestOptions): ApiPromise&lt;V1SvgconverterResponse, Images.SvgconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert an SVG vector image to a raster format. Upload an SVG file to convert.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.images.svgconverter({
    outputFormat: "png",
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    image: new Uint8Array(),
  });
  // TODO: Handle 'response' of type V1SvgconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type Images.SvgconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.images
  .svgconverter({
    outputFormat: "png",
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    image: new Uint8Array(),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SvgconverterResponse
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
| <code>outputFormat</code> | <code>string</code> | Target format |
| <code>quality?</code> | <code>number</code> | Output quality (applies to jpg/webp) |
| <code>maxWidth?</code> | <code>number</code> | Maximum width in pixels (maintains aspect ratio) |
| <code>maxHeight?</code> | <code>number</code> | Maximum height in pixels (maintains aspect ratio) |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .svg, max 10MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.images.svgconverter(request)`

- **OnSuccess**: <code>[V1SvgconverterResponse](src/models/v1-svgconverter-response.ts)</code>
- **OnError**: throws <code>[Images.SvgconverterError](src/resources/images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.images.svgconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SvgconverterResponse, Images.SvgconverterError&gt;</code>, with `result.value` of type <code>[V1SvgconverterResponse](src/models/v1-svgconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webpconverter(request: Images.WebpconverterRequest, options?: RequestOptions): ApiPromise&lt;V1WebpconverterResponse, Images.WebpconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a WebP image to another format, or convert other formats to WebP. Upload an image file to convert.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.images.webpconverter({
    outputFormat: "png",
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    image: new Uint8Array(),
  });
  // TODO: Handle 'response' of type V1WebpconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type Images.WebpconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.images
  .webpconverter({
    outputFormat: "png",
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    image: new Uint8Array(),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebpconverterResponse
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
| <code>outputFormat</code> | <code>string</code> | Target format |
| <code>quality?</code> | <code>number</code> | Output quality (applies to jpg/webp) |
| <code>maxWidth?</code> | <code>number</code> | Maximum width in pixels (maintains aspect ratio) |
| <code>maxHeight?</code> | <code>number</code> | Maximum height in pixels (maintains aspect ratio) |
| <code>image</code> | <code>FileInput</code> | File to upload (accepted: .webp, .png, .jpg, .jpeg, .gif, max 10MB) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.images.webpconverter(request)`

- **OnSuccess**: <code>[V1WebpconverterResponse](src/models/v1-webpconverter-response.ts)</code>
- **OnError**: throws <code>[Images.WebpconverterError](src/resources/images.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.images.webpconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebpconverterResponse, Images.WebpconverterError&gt;</code>, with `result.value` of type <code>[V1WebpconverterResponse](src/models/v1-webpconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Lifestyle

> Source: [Lifestyle](src/resources/lifestyle.ts)

<details>
<summary><code>duedatecalculator(request: Lifestyle.DuedatecalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1DuedatecalculatorResponse, Lifestyle.DuedatecalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate pregnancy due date from first day of last menstrual period

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lifestyle.duedatecalculator({ lastPeriod: "2025-06-01" });
  // TODO: Handle 'response' of type V1DuedatecalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Lifestyle.DuedatecalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lifestyle.duedatecalculator({ lastPeriod: "2025-06-01" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DuedatecalculatorResponse
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
| <code>lastPeriod</code> | <code>string</code> | First day of last menstrual period (YYYY-MM-DD) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lifestyle.duedatecalculator(request)`

- **OnSuccess**: <code>[V1DuedatecalculatorResponse](src/models/v1-duedatecalculator-response.ts)</code>
- **OnError**: throws <code>[Lifestyle.DuedatecalculatorError](src/resources/lifestyle.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lifestyle.duedatecalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DuedatecalculatorResponse, Lifestyle.DuedatecalculatorError&gt;</code>, with `result.value` of type <code>[V1DuedatecalculatorResponse](src/models/v1-duedatecalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>menstrualcycle(request: Lifestyle.MenstrualcycleRequest, options?: RequestOptions): ApiPromise&lt;V1MenstrualcycleResponse, Lifestyle.MenstrualcycleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate future menstrual cycles and phases

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lifestyle.menstrualcycle({
    lastPeriod: "2024-01-01",
    cycleLength: 28,
    periodLength: 5,
    cycles: 3,
  });
  // TODO: Handle 'response' of type V1MenstrualcycleResponse
} catch (err) {
  // TODO: Handle 'err' of type Lifestyle.MenstrualcycleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lifestyle
  .menstrualcycle({ lastPeriod: "2024-01-01", cycleLength: 28, periodLength: 5, cycles: 3 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MenstrualcycleResponse
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
| <code>lastPeriod</code> | <code>string</code> | First day of last menstrual period (YYYY-MM-DD) |
| <code>cycleLength?</code> | <code>number</code> | Average cycle length in days |
| <code>periodLength?</code> | <code>number</code> | Average period duration in days |
| <code>cycles?</code> | <code>number</code> | Number of future cycles to calculate |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lifestyle.menstrualcycle(request)`

- **OnSuccess**: <code>[V1MenstrualcycleResponse](src/models/v1-menstrualcycle-response.ts)</code>
- **OnError**: throws <code>[Lifestyle.MenstrualcycleError](src/resources/lifestyle.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lifestyle.menstrualcycle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MenstrualcycleResponse, Lifestyle.MenstrualcycleError&gt;</code>, with `result.value` of type <code>[V1MenstrualcycleResponse](src/models/v1-menstrualcycle-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ovulationcalculator(request: Lifestyle.OvulationcalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1OvulationcalculatorResponse, Lifestyle.OvulationcalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate ovulation date and fertile window

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.lifestyle.ovulationcalculator({ lastPeriod: "2024-01-01", cycleLength: 28 });
  // TODO: Handle 'response' of type V1OvulationcalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Lifestyle.OvulationcalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.lifestyle
  .ovulationcalculator({ lastPeriod: "2024-01-01", cycleLength: 28 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OvulationcalculatorResponse
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
| <code>lastPeriod</code> | <code>string</code> | First day of last menstrual period (YYYY-MM-DD) |
| <code>cycleLength?</code> | <code>number</code> | Average menstrual cycle length in days |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.lifestyle.ovulationcalculator(request)`

- **OnSuccess**: <code>[V1OvulationcalculatorResponse](src/models/v1-ovulationcalculator-response.ts)</code>
- **OnError**: throws <code>[Lifestyle.OvulationcalculatorError](src/resources/lifestyle.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.lifestyle.ovulationcalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OvulationcalculatorResponse, Lifestyle.OvulationcalculatorError&gt;</code>, with `result.value` of type <code>[V1OvulationcalculatorResponse](src/models/v1-ovulationcalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MathCalculations

> Source: [MathCalculations](src/resources/math-calculations.ts)

<details>
<summary><code>colorsimilarity(request: MathCalculations.ColorsimilarityRequest, options?: RequestOptions): ApiPromise&lt;V1ColorsimilarityResponse, MathCalculations.ColorsimilarityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate similarity between two hex colors

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mathCalculations.colorsimilarity({ color1: "FF5733", color2: "FF6B47" });
  // TODO: Handle 'response' of type V1ColorsimilarityResponse
} catch (err) {
  // TODO: Handle 'err' of type MathCalculations.ColorsimilarityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mathCalculations
  .colorsimilarity({ color1: "FF5733", color2: "FF6B47" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ColorsimilarityResponse
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
| <code>color1</code> | <code>string</code> | First hex color value (with or without # prefix) |
| <code>color2</code> | <code>string</code> | Second hex color value (with or without # prefix) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mathCalculations.colorsimilarity(request)`

- **OnSuccess**: <code>[V1ColorsimilarityResponse](src/models/v1-colorsimilarity-response.ts)</code>
- **OnError**: throws <code>[MathCalculations.ColorsimilarityError](src/resources/math-calculations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mathCalculations.colorsimilarity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ColorsimilarityResponse, MathCalculations.ColorsimilarityError&gt;</code>, with `result.value` of type <code>[V1ColorsimilarityResponse](src/models/v1-colorsimilarity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>daylightduration(request: MathCalculations.DaylightdurationRequest, options?: RequestOptions): ApiPromise&lt;V1DaylightdurationResponse, MathCalculations.DaylightdurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate sunrise, sunset, and daylight hours for a location

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mathCalculations.daylightduration({
    latitude: 40.7128,
    longitude: -74.006,
    date: "2024-06-21",
  });
  // TODO: Handle 'response' of type V1DaylightdurationResponse
} catch (err) {
  // TODO: Handle 'err' of type MathCalculations.DaylightdurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mathCalculations
  .daylightduration({ latitude: 40.7128, longitude: -74.006, date: "2024-06-21" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DaylightdurationResponse
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
| <code>latitude</code> | <code>number</code> | Latitude of the location |
| <code>longitude</code> | <code>number</code> | Longitude of the location |
| <code>date?</code> | <code>string</code> | Date in YYYY-MM-DD format (defaults to today) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mathCalculations.daylightduration(request)`

- **OnSuccess**: <code>[V1DaylightdurationResponse](src/models/v1-daylightduration-response.ts)</code>
- **OnError**: throws <code>[MathCalculations.DaylightdurationError](src/resources/math-calculations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mathCalculations.daylightduration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DaylightdurationResponse, MathCalculations.DaylightdurationError&gt;</code>, with `result.value` of type <code>[V1DaylightdurationResponse](src/models/v1-daylightduration-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fibonaccigenerator(request: MathCalculations.FibonaccigeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1FibonaccigeneratorResponse, MathCalculations.FibonaccigeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a specific number of Fibonacci numbers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mathCalculations.fibonaccigenerator({ count: 10, startfrom: 0 });
  // TODO: Handle 'response' of type V1FibonaccigeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type MathCalculations.FibonaccigeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mathCalculations.fibonaccigenerator({ count: 10, startfrom: 0 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1FibonaccigeneratorResponse
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
| <code>count</code> | <code>number</code> | Number of Fibonacci numbers to generate |
| <code>startfrom?</code> | <code>number</code> | Start from this position in the sequence |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mathCalculations.fibonaccigenerator(request)`

- **OnSuccess**: <code>[V1FibonaccigeneratorResponse](src/models/v1-fibonaccigenerator-response.ts)</code>
- **OnError**: throws <code>[MathCalculations.FibonaccigeneratorError](src/resources/math-calculations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mathCalculations.fibonaccigenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1FibonaccigeneratorResponse, MathCalculations.FibonaccigeneratorError&gt;</code>, with `result.value` of type <code>[V1FibonaccigeneratorResponse](src/models/v1-fibonaccigenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>permutationcombination(request: MathCalculations.PermutationcombinationRequest, options?: RequestOptions): ApiPromise&lt;V1PermutationcombinationResponse, MathCalculations.PermutationcombinationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate P(n,r) and C(n,r) values

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mathCalculations.permutationcombination({ n: 10, r: 3 });
  // TODO: Handle 'response' of type V1PermutationcombinationResponse
} catch (err) {
  // TODO: Handle 'err' of type MathCalculations.PermutationcombinationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mathCalculations.permutationcombination({ n: 10, r: 3 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PermutationcombinationResponse
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
| <code>n</code> | <code>number</code> | Total number of items |
| <code>r</code> | <code>number</code> | Number of items to choose (must be <= n) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mathCalculations.permutationcombination(request)`

- **OnSuccess**: <code>[V1PermutationcombinationResponse](src/models/v1-permutationcombination-response.ts)</code>
- **OnError**: throws <code>[MathCalculations.PermutationcombinationError](src/resources/math-calculations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mathCalculations.permutationcombination(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PermutationcombinationResponse, MathCalculations.PermutationcombinationError&gt;</code>, with `result.value` of type <code>[V1PermutationcombinationResponse](src/models/v1-permutationcombination-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>romannumeralmath(request: MathCalculations.RomannumeralmathRequest, options?: RequestOptions): ApiPromise&lt;V1RomannumeralmathResponse, MathCalculations.RomannumeralmathError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Perform arithmetic operations with Roman numerals

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mathCalculations.romannumeralmath({
    roman1: "XIV",
    roman2: "VI",
    operation: "add",
  });
  // TODO: Handle 'response' of type V1RomannumeralmathResponse
} catch (err) {
  // TODO: Handle 'err' of type MathCalculations.RomannumeralmathError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mathCalculations
  .romannumeralmath({ roman1: "XIV", roman2: "VI", operation: "add" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RomannumeralmathResponse
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
| <code>roman1</code> | <code>string</code> | The first Roman numeral |
| <code>roman2</code> | <code>string</code> | The second Roman numeral |
| <code>operation?</code> | <code>string</code> | Operation to perform |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mathCalculations.romannumeralmath(request)`

- **OnSuccess**: <code>[V1RomannumeralmathResponse](src/models/v1-romannumeralmath-response.ts)</code>
- **OnError**: throws <code>[MathCalculations.RomannumeralmathError](src/resources/math-calculations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mathCalculations.romannumeralmath(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RomannumeralmathResponse, MathCalculations.RomannumeralmathError&gt;</code>, with `result.value` of type <code>[V1RomannumeralmathResponse](src/models/v1-romannumeralmath-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tipcalculator(request: MathCalculations.TipcalculatorRequest, options?: RequestOptions): ApiPromise&lt;V1TipcalculatorResponse, MathCalculations.TipcalculatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate tip amount and split bill among people

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mathCalculations.tipcalculator({
    amount: 100,
    percentage: 18,
    people: 4,
    currency: "USD",
  });
  // TODO: Handle 'response' of type V1TipcalculatorResponse
} catch (err) {
  // TODO: Handle 'err' of type MathCalculations.TipcalculatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mathCalculations
  .tipcalculator({ amount: 100, percentage: 18, people: 4, currency: "USD" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TipcalculatorResponse
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
| <code>amount</code> | <code>number</code> | The bill amount before tip |
| <code>percentage?</code> | <code>number</code> | Tip percentage |
| <code>people?</code> | <code>number</code> | Number of people to split the bill |
| <code>currency?</code> | <code>string</code> | Currency code for display |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mathCalculations.tipcalculator(request)`

- **OnSuccess**: <code>[V1TipcalculatorResponse](src/models/v1-tipcalculator-response.ts)</code>
- **OnError**: throws <code>[MathCalculations.TipcalculatorError](src/resources/math-calculations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mathCalculations.tipcalculator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TipcalculatorResponse, MathCalculations.TipcalculatorError&gt;</code>, with `result.value` of type <code>[V1TipcalculatorResponse](src/models/v1-tipcalculator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>truthtable(request: MathCalculations.TruthtableRequest, options?: RequestOptions): ApiPromise&lt;V1TruthtableResponse, MathCalculations.TruthtableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a truth table for a boolean expression

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mathCalculations.truthtable({ expression: "A AND B OR C" });
  // TODO: Handle 'response' of type V1TruthtableResponse
} catch (err) {
  // TODO: Handle 'err' of type MathCalculations.TruthtableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mathCalculations.truthtable({ expression: "A AND B OR C" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TruthtableResponse
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
| <code>expression</code> | <code>string</code> | Boolean expression using A-Z variables and operators (AND, OR, NOT, XOR, NAND, NOR) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mathCalculations.truthtable(request)`

- **OnSuccess**: <code>[V1TruthtableResponse](src/models/v1-truthtable-response.ts)</code>
- **OnError**: throws <code>[MathCalculations.TruthtableError](src/resources/math-calculations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mathCalculations.truthtable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TruthtableResponse, MathCalculations.TruthtableError&gt;</code>, with `result.value` of type <code>[V1TruthtableResponse](src/models/v1-truthtable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>utmconverter(request: MathCalculations.UtmconverterRequest, options?: RequestOptions): ApiPromise&lt;V1UtmconverterResponse, MathCalculations.UtmconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert latitude/longitude coordinates to UTM format

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mathCalculations.utmconverter({
    latitude: 40.7128,
    longitude: -74.006,
    direction: "to_utm",
  });
  // TODO: Handle 'response' of type V1UtmconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type MathCalculations.UtmconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mathCalculations
  .utmconverter({ latitude: 40.7128, longitude: -74.006, direction: "to_utm" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UtmconverterResponse
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
| <code>latitude</code> | <code>number</code> | Latitude (-90 to 90) |
| <code>longitude</code> | <code>number</code> | Longitude (-180 to 180) |
| <code>direction?</code> | <code>string</code> | Conversion direction |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mathCalculations.utmconverter(request)`

- **OnSuccess**: <code>[V1UtmconverterResponse](src/models/v1-utmconverter-response.ts)</code>
- **OnError**: throws <code>[MathCalculations.UtmconverterError](src/resources/math-calculations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mathCalculations.utmconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UtmconverterResponse, MathCalculations.UtmconverterError&gt;</code>, with `result.value` of type <code>[V1UtmconverterResponse](src/models/v1-utmconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Networking

> Source: [Networking](src/resources/networking.ts)

<details>
<summary><code>bluetoothlookup(request: Networking.BluetoothlookupRequest, options?: RequestOptions): ApiPromise&lt;V1BluetoothlookupResponse, Networking.BluetoothlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup Bluetooth company/manufacturer by company ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.bluetoothlookup({ companyid: "76" });
  // TODO: Handle 'response' of type V1BluetoothlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.BluetoothlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.bluetoothlookup({ companyid: "76" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BluetoothlookupResponse
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
| <code>companyid</code> | <code>string</code> | The Bluetooth SIG company identifier (decimal or hex with 0x prefix). For example, 76 or 0x4C for Apple. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.bluetoothlookup(request)`

- **OnSuccess**: <code>[V1BluetoothlookupResponse](src/models/v1-bluetoothlookup-response.ts)</code>
- **OnError**: throws <code>[Networking.BluetoothlookupError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.bluetoothlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BluetoothlookupResponse, Networking.BluetoothlookupError&gt;</code>, with `result.value` of type <code>[V1BluetoothlookupResponse](src/models/v1-bluetoothlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>botdetector(request: Networking.BotdetectorRequest, options?: RequestOptions): ApiPromise&lt;V1BotdetectorResponse, Networking.BotdetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes a user agent string to determine if it belongs to a known bot or crawler, and returns detailed information about the bot type and category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.botdetector({
    ua: "Googlebot/2.1 (+http://www.google.com/bot.html)",
    ip: "66.249.66.1",
  });
  // TODO: Handle 'response' of type V1BotdetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.BotdetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking
  .botdetector({ ua: "Googlebot/2.1 (+http://www.google.com/bot.html)", ip: "66.249.66.1" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BotdetectorResponse
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
| <code>ua</code> | <code>string</code> | The user agent string to analyze (URL encoded) |
| <code>ip?</code> | <code>string</code> | Optional IP the request came from. When the user agent claims to be a Google, Bing, OpenAI or Apple crawler, it is checked against that operator's published IP ranges |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.botdetector(request)`

- **OnSuccess**: <code>[V1BotdetectorResponse](src/models/v1-botdetector-response.ts)</code>
- **OnError**: throws <code>[Networking.BotdetectorError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.botdetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BotdetectorResponse, Networking.BotdetectorError&gt;</code>, with `result.value` of type <code>[V1BotdetectorResponse](src/models/v1-botdetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>contentfilter(request: Networking.ContentfilterRequest, options?: RequestOptions): ApiPromise&lt;V1ContentfilterResponse, Networking.ContentfilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether a URL or domain appears in the content filter blocklist covering fake news, gambling, adult content, and social media.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.contentfilter({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1ContentfilterResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.ContentfilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.contentfilter({ body: { url: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ContentfilterResponse
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
| <code>body</code> | <code>[V1ContentfilterRequest](src/models/v1-contentfilter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.contentfilter(request)`

- **OnSuccess**: <code>[V1ContentfilterResponse](src/models/v1-contentfilter-response.ts)</code>
- **OnError**: throws <code>[Networking.ContentfilterError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.contentfilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ContentfilterResponse, Networking.ContentfilterError&gt;</code>, with `result.value` of type <code>[V1ContentfilterResponse](src/models/v1-contentfilter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ipblacklistlookup(request: Networking.IpblacklistlookupRequest, options?: RequestOptions): ApiPromise&lt;V1IpblacklistlookupResponse, Networking.IpblacklistlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether an IP address appears on inbound (attacker) or outbound (malicious destination) blocklists and returns threat level assessment with geolocation details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.ipblacklistlookup({ ip: "185.220.101.1" });
  // TODO: Handle 'response' of type V1IpblacklistlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.IpblacklistlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.ipblacklistlookup({ ip: "185.220.101.1" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1IpblacklistlookupResponse
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
| <code>ip</code> | <code>string</code> | The IP address to check against blocklists |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.ipblacklistlookup(request)`

- **OnSuccess**: <code>[V1IpblacklistlookupResponse](src/models/v1-ipblacklistlookup-response.ts)</code>
- **OnError**: throws <code>[Networking.IpblacklistlookupError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.ipblacklistlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1IpblacklistlookupResponse, Networking.IpblacklistlookupError&gt;</code>, with `result.value` of type <code>[V1IpblacklistlookupResponse](src/models/v1-ipblacklistlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>iplookup(request: Networking.IplookupRequest, options?: RequestOptions): ApiPromise&lt;V1IplookupResponse, Networking.IplookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup the details and location of an IP address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.iplookup({ ip: "173.172.81.20" });
  // TODO: Handle 'response' of type V1IplookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.IplookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.iplookup({ ip: "173.172.81.20" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1IplookupResponse
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
| <code>ip</code> | <code>string</code> | The IP address for which you want to get the location data (e.g., 173.172.81.20) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.iplookup(request)`

- **OnSuccess**: <code>[V1IplookupResponse](src/models/v1-iplookup-response.ts)</code>
- **OnError**: throws <code>[Networking.IplookupError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.iplookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1IplookupResponse, Networking.IplookupError&gt;</code>, with `result.value` of type <code>[V1IplookupResponse](src/models/v1-iplookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>macaddresslookup(request: Networking.MacaddresslookupRequest, options?: RequestOptions): ApiPromise&lt;V1MacaddresslookupResponse, Networking.MacaddresslookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup MAC address data based on the MAC address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.macaddresslookup({ mac: "00-B0-D0-63-C2-26" });
  // TODO: Handle 'response' of type V1MacaddresslookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.MacaddresslookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.macaddresslookup({ mac: "00-B0-D0-63-C2-26" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MacaddresslookupResponse
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
| <code>mac</code> | <code>string</code> | The MAC address for which you want to get the data (e.g., 00-B0-D0-63-C2-26) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.macaddresslookup(request)`

- **OnSuccess**: <code>[V1MacaddresslookupResponse](src/models/v1-macaddresslookup-response.ts)</code>
- **OnError**: throws <code>[Networking.MacaddresslookupError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.macaddresslookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MacaddresslookupResponse, Networking.MacaddresslookupError&gt;</code>, with `result.value` of type <code>[V1MacaddresslookupResponse](src/models/v1-macaddresslookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nameservers(request: Networking.NameserversRequest, options?: RequestOptions): ApiPromise&lt;V1NameserversResponse, Networking.NameserversError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the authoritative nameservers for a domain including IP addresses and owner information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.nameservers({ domain: "google.com" });
  // TODO: Handle 'response' of type V1NameserversResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.NameserversError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.nameservers({ domain: "google.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NameserversResponse
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
| <code>domain</code> | <code>string</code> | The domain name to lookup nameservers for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.nameservers(request)`

- **OnSuccess**: <code>[V1NameserversResponse](src/models/v1-nameservers-response.ts)</code>
- **OnError**: throws <code>[Networking.NameserversError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.nameservers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NameserversResponse, Networking.NameserversError&gt;</code>, with `result.value` of type <code>[V1NameserversResponse](src/models/v1-nameservers-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>phishingcheck(request: Networking.PhishingcheckRequest, options?: RequestOptions): ApiPromise&lt;V1PhishingcheckResponse, Networking.PhishingcheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks whether a domain is in the active phishing database

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.phishingcheck({ body: { domain: "some example string" } });
  // TODO: Handle 'response' of type V1PhishingcheckResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.PhishingcheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking
  .phishingcheck({ body: { domain: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PhishingcheckResponse
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
| <code>body</code> | <code>[V1PhishingcheckRequest](src/models/v1-phishingcheck-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.phishingcheck(request)`

- **OnSuccess**: <code>[V1PhishingcheckResponse](src/models/v1-phishingcheck-response.ts)</code>
- **OnError**: throws <code>[Networking.PhishingcheckError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.phishingcheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PhishingcheckResponse, Networking.PhishingcheckError&gt;</code>, with `result.value` of type <code>[V1PhishingcheckResponse](src/models/v1-phishingcheck-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pinger(request: Networking.PingerRequest, options?: RequestOptions): ApiPromise&lt;V1PingerResponse, Networking.PingerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pinger is a simple tool for checking if a URL is up. It returns a boolean value indicating whether the URL is up or not.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.pinger({ body: { host: "some example string" } });
  // TODO: Handle 'response' of type V1PingerResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.PingerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.pinger({ body: { host: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PingerResponse
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
| <code>body</code> | <code>[V1PingerRequest](src/models/v1-pinger-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.pinger(request)`

- **OnSuccess**: <code>[V1PingerResponse](src/models/v1-pinger-response.ts)</code>
- **OnError**: throws <code>[Networking.PingerError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.pinger(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PingerResponse, Networking.PingerError&gt;</code>, with `result.value` of type <code>[V1PingerResponse](src/models/v1-pinger-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tldlookup(request: Networking.TldlookupRequest, options?: RequestOptions): ApiPromise&lt;V1TldlookupResponse, Networking.TldlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the type and sponsoring organization for a given top-level domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.tldlookup({ tld: "com" });
  // TODO: Handle 'response' of type V1TldlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.TldlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.tldlookup({ tld: "com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TldlookupResponse
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
| <code>tld</code> | <code>string</code> | The top-level domain to look up (with or without leading dot) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.tldlookup(request)`

- **OnSuccess**: <code>[V1TldlookupResponse](src/models/v1-tldlookup-response.ts)</code>
- **OnError**: throws <code>[Networking.TldlookupError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.tldlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TldlookupResponse, Networking.TldlookupError&gt;</code>, with `result.value` of type <code>[V1TldlookupResponse](src/models/v1-tldlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tlscheck(request: Networking.TlscheckRequest, options?: RequestOptions): ApiPromise&lt;V1TlscheckResponse, Networking.TlscheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

TLS Check is an API that inspects the TLS/SSL configuration of a server identified by its IP address. It reports supported protocols, cipher suites, and potential vulnerabilities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.tlscheck({ domain: "amazon.com", port: 443 });
  // TODO: Handle 'response' of type V1TlscheckResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.TlscheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.tlscheck({ domain: "amazon.com", port: 443 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TlscheckResponse
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
| <code>domain</code> | <code>string</code> | The domain to check the TLS/SSL configuration for |
| <code>port?</code> | <code>number</code> | The port to connect to (usually 443 for HTTPS) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.tlscheck(request)`

- **OnSuccess**: <code>[V1TlscheckResponse](src/models/v1-tlscheck-response.ts)</code>
- **OnError**: throws <code>[Networking.TlscheckError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.tlscheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TlscheckResponse, Networking.TlscheckError&gt;</code>, with `result.value` of type <code>[V1TlscheckResponse](src/models/v1-tlscheck-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tordetect(request: Networking.TordetectRequest, options?: RequestOptions): ApiPromise&lt;V1TordetectResponse, Networking.TordetectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tor Detect is an API that checks whether a given IP address belongs to a known Tor exit node. Useful for security, access control, and analytics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.tordetect({ ip: "185.189.183.143" });
  // TODO: Handle 'response' of type V1TordetectResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.TordetectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.tordetect({ ip: "185.189.183.143" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TordetectResponse
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
| <code>ip</code> | <code>string</code> | The IP address to check against the Tor exit node list |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.tordetect(request)`

- **OnSuccess**: <code>[V1TordetectResponse](src/models/v1-tordetect-response.ts)</code>
- **OnError**: throws <code>[Networking.TordetectError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.tordetect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TordetectResponse, Networking.TordetectError&gt;</code>, with `result.value` of type <code>[V1TordetectResponse](src/models/v1-tordetect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usbvendorlookup(request: Networking.UsbvendorlookupRequest, options?: RequestOptions): ApiPromise&lt;V1UsbvendorlookupResponse, Networking.UsbvendorlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup USB vendor and optionally product information by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.usbvendorlookup({ vendorid: "05AC", productid: "8290" });
  // TODO: Handle 'response' of type V1UsbvendorlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.UsbvendorlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.usbvendorlookup({ vendorid: "05AC", productid: "8290" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UsbvendorlookupResponse
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
| <code>vendorid</code> | <code>string</code> | The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple) |
| <code>productid?</code> | <code>string</code> | The USB product ID in 4-digit hex format (optional) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.usbvendorlookup(request)`

- **OnSuccess**: <code>[V1UsbvendorlookupResponse](src/models/v1-usbvendorlookup-response.ts)</code>
- **OnError**: throws <code>[Networking.UsbvendorlookupError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.usbvendorlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UsbvendorlookupResponse, Networking.UsbvendorlookupError&gt;</code>, with `result.value` of type <code>[V1UsbvendorlookupResponse](src/models/v1-usbvendorlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vpndetector(request: Networking.VpndetectorRequest, options?: RequestOptions): ApiPromise&lt;V1VpndetectorResponse, Networking.VpndetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

VPN Detector is a simple tool for detecting VPN usage. It returns a boolean value indicating whether the IP address is using a VPN or not.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networking.vpndetector({ ip: "103.62.49.210" });
  // TODO: Handle 'response' of type V1VpndetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type Networking.VpndetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networking.vpndetector({ ip: "103.62.49.210" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1VpndetectorResponse
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
| <code>ip</code> | <code>string</code> | The IP address you want to check for VPN usage |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networking.vpndetector(request)`

- **OnSuccess**: <code>[V1VpndetectorResponse](src/models/v1-vpndetector-response.ts)</code>
- **OnError**: throws <code>[Networking.VpndetectorError](src/resources/networking.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networking.vpndetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1VpndetectorResponse, Networking.VpndetectorError&gt;</code>, with `result.value` of type <code>[V1VpndetectorResponse](src/models/v1-vpndetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/resources/news.ts)

<details>
<summary><code>news(request: News.NewsRequest, options?: RequestOptions): ApiPromise&lt;V1NewsResponse, News.NewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the latest news based on a category

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.news.news({ category: "technology", limit: 10 });
  // TODO: Handle 'response' of type V1NewsResponse
} catch (err) {
  // TODO: Handle 'err' of type News.NewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.news.news({ category: "technology", limit: 10 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1NewsResponse
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
| <code>category</code> | <code>string</code> | The news category for which you want to get the news. Allowed values: business, entertainment, world, health, science, sports, technology |
| <code>limit?</code> | <code>number</code> | Maximum number of articles to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.news.news(request)`

- **OnSuccess**: <code>[V1NewsResponse](src/models/v1-news-response.ts)</code>
- **OnError**: throws <code>[News.NewsError](src/resources/news.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.news.news(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1NewsResponse, News.NewsError&gt;</code>, with `result.value` of type <code>[V1NewsResponse](src/models/v1-news-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Parsers

> Source: [Parsers](src/resources/parsers.ts)

<details>
<summary><code>humannameparser(request: Parsers.HumannameparserRequest, options?: RequestOptions): ApiPromise&lt;V1HumannameparserResponse, Parsers.HumannameparserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a human name into its components

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.parsers.humannameparser({
    name: "MR. MARTINO PETROS DE FLORENCE (TINO) Jr.",
  });
  // TODO: Handle 'response' of type V1HumannameparserResponse
} catch (err) {
  // TODO: Handle 'err' of type Parsers.HumannameparserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.parsers
  .humannameparser({ name: "MR. MARTINO PETROS DE FLORENCE (TINO) Jr." })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HumannameparserResponse
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
| <code>name</code> | <code>string</code> | The human name to parse |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.parsers.humannameparser(request)`

- **OnSuccess**: <code>[V1HumannameparserResponse](src/models/v1-humannameparser-response.ts)</code>
- **OnError**: throws <code>[Parsers.HumannameparserError](src/resources/parsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.parsers.humannameparser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HumannameparserResponse, Parsers.HumannameparserError&gt;</code>, with `result.value` of type <code>[V1HumannameparserResponse](src/models/v1-humannameparser-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>rsstojson(request: Parsers.RsstojsonRequest, options?: RequestOptions): ApiPromise&lt;V1RsstojsonResponse, Parsers.RsstojsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

RSS to JSON is a simple tool for converting RSS feeds into JSON format. It returns the RSS feed in JSON format.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.parsers.rsstojson({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1RsstojsonResponse
} catch (err) {
  // TODO: Handle 'err' of type Parsers.RsstojsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.parsers.rsstojson({ body: { url: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RsstojsonResponse
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
| <code>body</code> | <code>[V1RsstojsonRequest](src/models/v1-rsstojson-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.parsers.rsstojson(request)`

- **OnSuccess**: <code>[V1RsstojsonResponse](src/models/v1-rsstojson-response.ts)</code>
- **OnError**: throws <code>[Parsers.RsstojsonError](src/resources/parsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.parsers.rsstojson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RsstojsonResponse, Parsers.RsstojsonError&gt;</code>, with `result.value` of type <code>[V1RsstojsonResponse](src/models/v1-rsstojson-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>streetaddressparser(request: Parsers.StreetaddressparserRequest, options?: RequestOptions): ApiPromise&lt;V1StreetaddressparserResponse, Parsers.StreetaddressparserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse the components of a street address

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.parsers.streetaddressparser({
    address: "1600 Amphitheatre Parkway, Mountain View, CA 90210",
  });
  // TODO: Handle 'response' of type V1StreetaddressparserResponse
} catch (err) {
  // TODO: Handle 'err' of type Parsers.StreetaddressparserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.parsers
  .streetaddressparser({ address: "1600 Amphitheatre Parkway, Mountain View, CA 90210" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1StreetaddressparserResponse
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
| <code>address</code> | <code>string</code> | The street address to parse |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.parsers.streetaddressparser(request)`

- **OnSuccess**: <code>[V1StreetaddressparserResponse](src/models/v1-streetaddressparser-response.ts)</code>
- **OnError**: throws <code>[Parsers.StreetaddressparserError](src/resources/parsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.parsers.streetaddressparser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1StreetaddressparserResponse, Parsers.StreetaddressparserError&gt;</code>, with `result.value` of type <code>[V1StreetaddressparserResponse](src/models/v1-streetaddressparser-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>useragentparser(request: Parsers.UseragentparserRequest, options?: RequestOptions): ApiPromise&lt;V1UseragentparserResponse, Parsers.UseragentparserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse the user agent string to get browser, OS, and more

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.parsers.useragentparser({ body: { ua: "some example string" } });
  // TODO: Handle 'response' of type V1UseragentparserResponse
} catch (err) {
  // TODO: Handle 'err' of type Parsers.UseragentparserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.parsers.useragentparser({ body: { ua: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1UseragentparserResponse
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
| <code>body</code> | <code>[V1UseragentparserRequest](src/models/v1-useragentparser-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.parsers.useragentparser(request)`

- **OnSuccess**: <code>[V1UseragentparserResponse](src/models/v1-useragentparser-response.ts)</code>
- **OnError**: throws <code>[Parsers.UseragentparserError](src/resources/parsers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.parsers.useragentparser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1UseragentparserResponse, Parsers.UseragentparserError&gt;</code>, with `result.value` of type <code>[V1UseragentparserResponse](src/models/v1-useragentparser-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ReferenceData

> Source: [ReferenceData](src/resources/reference-data.ts)

<details>
<summary><code>birthstones(request: ReferenceData.BirthstonesRequest, options?: RequestOptions): ApiPromise&lt;V1BirthstonesResponse, ReferenceData.BirthstonesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get birthstone information for a specific month

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.birthstones({ month: "5" });
  // TODO: Handle 'response' of type V1BirthstonesResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.BirthstonesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData.birthstones({ month: "5" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1BirthstonesResponse
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
| <code>month</code> | <code>string</code> | The month number (1-12) or name |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.birthstones(request)`

- **OnSuccess**: <code>[V1BirthstonesResponse](src/models/v1-birthstones-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.BirthstonesError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.birthstones(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1BirthstonesResponse, ReferenceData.BirthstonesError&gt;</code>, with `result.value` of type <code>[V1BirthstonesResponse](src/models/v1-birthstones-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>caaparser(request: ReferenceData.CaaparserRequest, options?: RequestOptions): ApiPromise&lt;V1CaaparserResponse, ReferenceData.CaaparserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a DNS CAA record and extract authorization details

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.caaparser({ body: { record: "some example string" } });
  // TODO: Handle 'response' of type V1CaaparserResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.CaaparserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData
  .caaparser({ body: { record: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CaaparserResponse
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
| <code>body</code> | <code>[V1CaaparserRequest](src/models/v1-caaparser-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.caaparser(request)`

- **OnSuccess**: <code>[V1CaaparserResponse](src/models/v1-caaparser-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.CaaparserError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.caaparser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CaaparserResponse, ReferenceData.CaaparserError&gt;</code>, with `result.value` of type <code>[V1CaaparserResponse](src/models/v1-caaparser-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>colorbrightness(request: ReferenceData.ColorbrightnessRequest, options?: RequestOptions): ApiPromise&lt;V1ColorbrightnessResponse, ReferenceData.ColorbrightnessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate brightness, luminance, and contrast ratios for a color

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.colorbrightness({ hex: "FF5733" });
  // TODO: Handle 'response' of type V1ColorbrightnessResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.ColorbrightnessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData.colorbrightness({ hex: "FF5733" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ColorbrightnessResponse
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
| <code>hex</code> | <code>string</code> | Hex color value (with or without # prefix) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.colorbrightness(request)`

- **OnSuccess**: <code>[V1ColorbrightnessResponse](src/models/v1-colorbrightness-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.ColorbrightnessError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.colorbrightness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ColorbrightnessResponse, ReferenceData.ColorbrightnessError&gt;</code>, with `result.value` of type <code>[V1ColorbrightnessResponse](src/models/v1-colorbrightness-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>colornamefinder(request: ReferenceData.ColornamefinderRequest, options?: RequestOptions): ApiPromise&lt;V1ColornamefinderResponse, ReferenceData.ColornamefinderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find the closest named color for a hex color value

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.colornamefinder({ hex: "FF5733", closest: 3 });
  // TODO: Handle 'response' of type V1ColornamefinderResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.ColornamefinderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData.colornamefinder({ hex: "FF5733", closest: 3 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ColornamefinderResponse
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
| <code>hex</code> | <code>string</code> | Hex color value (with or without # prefix) |
| <code>closest?</code> | <code>number</code> | Number of closest color matches to return |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.colornamefinder(request)`

- **OnSuccess**: <code>[V1ColornamefinderResponse](src/models/v1-colornamefinder-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.ColornamefinderError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.colornamefinder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ColornamefinderResponse, ReferenceData.ColornamefinderError&gt;</code>, with `result.value` of type <code>[V1ColornamefinderResponse](src/models/v1-colornamefinder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>httpstatuslookup(request: ReferenceData.HttpstatuslookupRequest, options?: RequestOptions): ApiPromise&lt;V1HttpstatuslookupResponse, ReferenceData.HttpstatuslookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about an HTTP status code

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.httpstatuslookup({ code: 404 });
  // TODO: Handle 'response' of type V1HttpstatuslookupResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.HttpstatuslookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData.httpstatuslookup({ code: 404 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HttpstatuslookupResponse
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
| <code>code</code> | <code>number</code> | HTTP status code to lookup |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.httpstatuslookup(request)`

- **OnSuccess**: <code>[V1HttpstatuslookupResponse](src/models/v1-httpstatuslookup-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.HttpstatuslookupError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.httpstatuslookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HttpstatuslookupResponse, ReferenceData.HttpstatuslookupError&gt;</code>, with `result.value` of type <code>[V1HttpstatuslookupResponse](src/models/v1-httpstatuslookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mayancalendar(request: ReferenceData.MayancalendarRequest, options?: RequestOptions): ApiPromise&lt;V1MayancalendarResponse, ReferenceData.MayancalendarError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a Gregorian date to Mayan calendar formats

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.mayancalendar({ date: "2024-12-21" });
  // TODO: Handle 'response' of type V1MayancalendarResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.MayancalendarError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData.mayancalendar({ date: "2024-12-21" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MayancalendarResponse
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
| <code>date</code> | <code>string</code> | The Gregorian date in YYYY-MM-DD format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.mayancalendar(request)`

- **OnSuccess**: <code>[V1MayancalendarResponse](src/models/v1-mayancalendar-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.MayancalendarError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.mayancalendar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MayancalendarResponse, ReferenceData.MayancalendarError&gt;</code>, with `result.value` of type <code>[V1MayancalendarResponse](src/models/v1-mayancalendar-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mimetypelookup(request: ReferenceData.MimetypelookupRequest, options?: RequestOptions): ApiPromise&lt;V1MimetypelookupResponse, ReferenceData.MimetypelookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up MIME type by file extension

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.mimetypelookup({ extension: "pdf" });
  // TODO: Handle 'response' of type V1MimetypelookupResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.MimetypelookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData.mimetypelookup({ extension: "pdf" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MimetypelookupResponse
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
| <code>extension</code> | <code>string</code> | File extension to lookup (without the leading dot) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.mimetypelookup(request)`

- **OnSuccess**: <code>[V1MimetypelookupResponse](src/models/v1-mimetypelookup-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.MimetypelookupError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.mimetypelookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MimetypelookupResponse, ReferenceData.MimetypelookupError&gt;</code>, with `result.value` of type <code>[V1MimetypelookupResponse](src/models/v1-mimetypelookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>portnumberlookup(request: ReferenceData.PortnumberlookupRequest, options?: RequestOptions): ApiPromise&lt;V1PortnumberlookupResponse, ReferenceData.PortnumberlookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up service information by port number

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.portnumberlookup({ port: 443 });
  // TODO: Handle 'response' of type V1PortnumberlookupResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.PortnumberlookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData.portnumberlookup({ port: 443 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PortnumberlookupResponse
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
| <code>port</code> | <code>number</code> | Port number to lookup |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.portnumberlookup(request)`

- **OnSuccess**: <code>[V1PortnumberlookupResponse](src/models/v1-portnumberlookup-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.PortnumberlookupError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.portnumberlookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PortnumberlookupResponse, ReferenceData.PortnumberlookupError&gt;</code>, with `result.value` of type <code>[V1PortnumberlookupResponse](src/models/v1-portnumberlookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>ringsizeconverter(request: ReferenceData.RingsizeconverterRequest, options?: RequestOptions): ApiPromise&lt;V1RingsizeconverterResponse, ReferenceData.RingsizeconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert ring size between international standards

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.ringsizeconverter({ size: "7", from: "us" });
  // TODO: Handle 'response' of type V1RingsizeconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.RingsizeconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData.ringsizeconverter({ size: "7", from: "us" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RingsizeconverterResponse
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
| <code>size</code> | <code>string</code> | The ring size to convert |
| <code>from</code> | <code>string</code> | Source region |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.ringsizeconverter(request)`

- **OnSuccess**: <code>[V1RingsizeconverterResponse](src/models/v1-ringsizeconverter-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.RingsizeconverterError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.ringsizeconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RingsizeconverterResponse, ReferenceData.RingsizeconverterError&gt;</code>, with `result.value` of type <code>[V1RingsizeconverterResponse](src/models/v1-ringsizeconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>shoesizeconverter(request: ReferenceData.ShoesizeconverterRequest, options?: RequestOptions): ApiPromise&lt;V1ShoesizeconverterResponse, ReferenceData.ShoesizeconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert shoe size between international standards

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.shoesizeconverter({ size: "9", from: "us", gender: "men" });
  // TODO: Handle 'response' of type V1ShoesizeconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.ShoesizeconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData
  .shoesizeconverter({ size: "9", from: "us", gender: "men" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ShoesizeconverterResponse
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
| <code>size</code> | <code>string</code> | The shoe size to convert |
| <code>from</code> | <code>string</code> | Source region |
| <code>gender?</code> | <code>string</code> | Gender sizing |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.shoesizeconverter(request)`

- **OnSuccess**: <code>[V1ShoesizeconverterResponse](src/models/v1-shoesizeconverter-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.ShoesizeconverterError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.shoesizeconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ShoesizeconverterResponse, ReferenceData.ShoesizeconverterError&gt;</code>, with `result.value` of type <code>[V1ShoesizeconverterResponse](src/models/v1-shoesizeconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>srvparser(request: ReferenceData.SrvparserRequest, options?: RequestOptions): ApiPromise&lt;V1SrvparserResponse, ReferenceData.SrvparserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a DNS SRV record and extract service information

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.referenceData.srvparser({ body: { record: "some example string" } });
  // TODO: Handle 'response' of type V1SrvparserResponse
} catch (err) {
  // TODO: Handle 'err' of type ReferenceData.SrvparserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.referenceData
  .srvparser({ body: { record: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SrvparserResponse
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
| <code>body</code> | <code>[V1SrvparserRequest](src/models/v1-srvparser-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.referenceData.srvparser(request)`

- **OnSuccess**: <code>[V1SrvparserResponse](src/models/v1-srvparser-response.ts)</code>
- **OnError**: throws <code>[ReferenceData.SrvparserError](src/resources/reference-data.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.referenceData.srvparser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SrvparserResponse, ReferenceData.SrvparserError&gt;</code>, with `result.value` of type <code>[V1SrvparserResponse](src/models/v1-srvparser-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Science

> Source: [Science](src/resources/science.ts)

<details>
<summary><code>julianday(request: Science.JuliandayRequest, options?: RequestOptions): ApiPromise&lt;V1JuliandayResponse, Science.JuliandayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a Gregorian date to Julian Day Number

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.science.julianday({ date: "2024-03-15" });
  // TODO: Handle 'response' of type V1JuliandayResponse
} catch (err) {
  // TODO: Handle 'err' of type Science.JuliandayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.science.julianday({ date: "2024-03-15" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JuliandayResponse
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
| <code>date</code> | <code>string</code> | The Gregorian date in YYYY-MM-DD format |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.science.julianday(request)`

- **OnSuccess**: <code>[V1JuliandayResponse](src/models/v1-julianday-response.ts)</code>
- **OnError**: throws <code>[Science.JuliandayError](src/resources/science.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.science.julianday(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JuliandayResponse, Science.JuliandayError&gt;</code>, with `result.value` of type <code>[V1JuliandayResponse](src/models/v1-julianday-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>meteorites(request: Science.MeteoritesRequest, options?: RequestOptions): ApiPromise&lt;V1MeteoritesResponse, Science.MeteoritesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of meteorites that have fallen to Earth

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.science.meteorites({ name: "Allende", mass: 100, year: 1969 });
  // TODO: Handle 'response' of type V1MeteoritesResponse
} catch (err) {
  // TODO: Handle 'err' of type Science.MeteoritesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.science.meteorites({ name: "Allende", mass: 100, year: 1969 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MeteoritesResponse
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
| <code>name</code> | <code>string</code> | The name of the meteorite you want to search for |
| <code>mass?</code> | <code>number</code> | Minimum mass of the meteorite in grams |
| <code>year?</code> | <code>number</code> | The year the meteorite fell to Earth |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.science.meteorites(request)`

- **OnSuccess**: <code>[V1MeteoritesResponse](src/models/v1-meteorites-response.ts)</code>
- **OnError**: throws <code>[Science.MeteoritesError](src/resources/science.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.science.meteorites(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MeteoritesResponse, Science.MeteoritesError&gt;</code>, with `result.value` of type <code>[V1MeteoritesResponse](src/models/v1-meteorites-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>periodictable(request: Science.PeriodictableRequest, options?: RequestOptions): ApiPromise&lt;V1PeriodictableResponse, Science.PeriodictableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a chemical element

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.science.periodictable({ name: "hydrogen" });
  // TODO: Handle 'response' of type V1PeriodictableResponse
} catch (err) {
  // TODO: Handle 'err' of type Science.PeriodictableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.science.periodictable({ name: "hydrogen" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PeriodictableResponse
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
| <code>name</code> | <code>string</code> | The name of the chemical element to get information about |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.science.periodictable(request)`

- **OnSuccess**: <code>[V1PeriodictableResponse](src/models/v1-periodictable-response.ts)</code>
- **OnError**: throws <code>[Science.PeriodictableError](src/resources/science.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.science.periodictable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PeriodictableResponse, Science.PeriodictableError&gt;</code>, with `result.value` of type <code>[V1PeriodictableResponse](src/models/v1-periodictable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>starslookup(request: Science.StarslookupRequest, options?: RequestOptions): ApiPromise&lt;V1StarslookupResponse, Science.StarslookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lookup star data based on the star name

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.science.starslookup({ name: "Sirius" });
  // TODO: Handle 'response' of type V1StarslookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Science.StarslookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.science.starslookup({ name: "Sirius" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1StarslookupResponse
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
| <code>name</code> | <code>string</code> | The name of the star for which you want to get the data (e.g., Sirius) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.science.starslookup(request)`

- **OnSuccess**: <code>[V1StarslookupResponse](src/models/v1-starslookup-response.ts)</code>
- **OnError**: throws <code>[Science.StarslookupError](src/resources/science.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.science.starslookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1StarslookupResponse, Science.StarslookupError&gt;</code>, with `result.value` of type <code>[V1StarslookupResponse](src/models/v1-starslookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Security

> Source: [Security](src/resources/security.ts)

<details>
<summary><code>csrparser(request: Security.CsrparserRequest, options?: RequestOptions): ApiPromise&lt;V1CsrparserResponse, Security.CsrparserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse a Certificate Signing Request and extract information

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.security.csrparser({ body: { csr: "some example string" } });
  // TODO: Handle 'response' of type V1CsrparserResponse
} catch (err) {
  // TODO: Handle 'err' of type Security.CsrparserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.security.csrparser({ body: { csr: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CsrparserResponse
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
| <code>body</code> | <code>[V1CsrparserRequest](src/models/v1-csrparser-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.security.csrparser(request)`

- **OnSuccess**: <code>[V1CsrparserResponse](src/models/v1-csrparser-response.ts)</code>
- **OnError**: throws <code>[Security.CsrparserError](src/resources/security.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.security.csrparser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CsrparserResponse, Security.CsrparserError&gt;</code>, with `result.value` of type <code>[V1CsrparserResponse](src/models/v1-csrparser-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>danevalidator(request: Security.DanevalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1DanevalidatorResponse, Security.DanevalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a DANE/TLSA DNS record

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.security.danevalidator({ body: { record: "some example string" } });
  // TODO: Handle 'response' of type V1DanevalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type Security.DanevalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.security.danevalidator({ body: { record: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DanevalidatorResponse
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
| <code>body</code> | <code>[V1DanevalidatorRequest](src/models/v1-danevalidator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.security.danevalidator(request)`

- **OnSuccess**: <code>[V1DanevalidatorResponse](src/models/v1-danevalidator-response.ts)</code>
- **OnError**: throws <code>[Security.DanevalidatorError](src/resources/security.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.security.danevalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DanevalidatorResponse, Security.DanevalidatorError&gt;</code>, with `result.value` of type <code>[V1DanevalidatorResponse](src/models/v1-danevalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hashgenerator(request: Security.HashgeneratorRequest, options?: RequestOptions): ApiPromise&lt;V1HashgeneratorResponse, Security.HashgeneratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate cryptographic hashes using multiple algorithms

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.security.hashgenerator({ text: "Hello World", algorithms: "sha256,md5" });
  // TODO: Handle 'response' of type V1HashgeneratorResponse
} catch (err) {
  // TODO: Handle 'err' of type Security.HashgeneratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.security
  .hashgenerator({ text: "Hello World", algorithms: "sha256,md5" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HashgeneratorResponse
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
| <code>text</code> | <code>string</code> | Text to hash |
| <code>algorithms?</code> | <code>string</code> | Comma-separated list of algorithms or 'all' |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.security.hashgenerator(request)`

- **OnSuccess**: <code>[V1HashgeneratorResponse](src/models/v1-hashgenerator-response.ts)</code>
- **OnError**: throws <code>[Security.HashgeneratorError](src/resources/security.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.security.hashgenerator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HashgeneratorResponse, Security.HashgeneratorError&gt;</code>, with `result.value` of type <code>[V1HashgeneratorResponse](src/models/v1-hashgenerator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hmac(request: Security.HmacRequest, options?: RequestOptions): ApiPromise&lt;V1HmacResponse, Security.HmacError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an HMAC signature for a message

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.security.hmac({
    body: { message: "some example string", secret: "some example string" },
  });
  // TODO: Handle 'response' of type V1HmacResponse
} catch (err) {
  // TODO: Handle 'err' of type Security.HmacError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.security
  .hmac({ body: { message: "some example string", secret: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1HmacResponse
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
| <code>body</code> | <code>[V1HmacRequest](src/models/v1-hmac-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.security.hmac(request)`

- **OnSuccess**: <code>[V1HmacResponse](src/models/v1-hmac-response.ts)</code>
- **OnError**: throws <code>[Security.HmacError](src/resources/security.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.security.hmac(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1HmacResponse, Security.HmacError&gt;</code>, with `result.value` of type <code>[V1HmacResponse](src/models/v1-hmac-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TextProcessing

> Source: [TextProcessing](src/resources/text-processing.ts)

<details>
<summary><code>acronymexpander(request: TextProcessing.AcronymexpanderRequest, options?: RequestOptions): ApiPromise&lt;V1AcronymexpanderResponse, TextProcessing.AcronymexpanderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expand an acronym to its full meaning with AI assistance

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.acronymexpander({ acronym: "API", context: "software" });
  // TODO: Handle 'response' of type V1AcronymexpanderResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.AcronymexpanderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .acronymexpander({ acronym: "API", context: "software" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AcronymexpanderResponse
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
| <code>acronym</code> | <code>string</code> | The acronym to expand (max 20 characters) |
| <code>context?</code> | <code>string</code> | Optional context to help determine the correct meaning |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.acronymexpander(request)`

- **OnSuccess**: <code>[V1AcronymexpanderResponse](src/models/v1-acronymexpander-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.AcronymexpanderError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.acronymexpander(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AcronymexpanderResponse, TextProcessing.AcronymexpanderError&gt;</code>, with `result.value` of type <code>[V1AcronymexpanderResponse](src/models/v1-acronymexpander-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>anagramdetector(request: TextProcessing.AnagramdetectorRequest, options?: RequestOptions): ApiPromise&lt;V1AnagramdetectorResponse, TextProcessing.AnagramdetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if two texts are anagrams with detailed analysis

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.anagramdetector({
    text1: "listen",
    text2: "silent",
    ignorecase: true,
    ignorespaces: true,
  });
  // TODO: Handle 'response' of type V1AnagramdetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.AnagramdetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .anagramdetector({ text1: "listen", text2: "silent", ignorecase: true, ignorespaces: true })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AnagramdetectorResponse
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
| <code>text1</code> | <code>string</code> | The first text to compare |
| <code>text2</code> | <code>string</code> | The second text to compare |
| <code>ignorecase?</code> | <code>boolean</code> | Ignore case when comparing (default: true) |
| <code>ignorespaces?</code> | <code>boolean</code> | Ignore spaces when comparing (default: true) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.anagramdetector(request)`

- **OnSuccess**: <code>[V1AnagramdetectorResponse](src/models/v1-anagramdetector-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.AnagramdetectorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.anagramdetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AnagramdetectorResponse, TextProcessing.AnagramdetectorError&gt;</code>, with `result.value` of type <code>[V1AnagramdetectorResponse](src/models/v1-anagramdetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>antonym(request: TextProcessing.AntonymRequest, options?: RequestOptions): ApiPromise&lt;V1AntonymResponse, TextProcessing.AntonymError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Antonym is a simple tool for getting the antonyms of a word. It returns a list of antonyms for the given word.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.antonym({ word: "happy", language: "Spanish" });
  // TODO: Handle 'response' of type V1AntonymResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.AntonymError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.antonym({ word: "happy", language: "Spanish" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AntonymResponse
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
| <code>word</code> | <code>string</code> | The word to get the antonyms for |
| <code>language?</code> | <code>string</code> | Language to return the antonyms in. Defaults to English |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.antonym(request)`

- **OnSuccess**: <code>[V1AntonymResponse](src/models/v1-antonym-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.AntonymError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.antonym(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AntonymResponse, TextProcessing.AntonymError&gt;</code>, with `result.value` of type <code>[V1AntonymResponse](src/models/v1-antonym-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cronparser(request: TextProcessing.CronparserRequest, options?: RequestOptions): ApiPromise&lt;V1CronparserResponse, TextProcessing.CronparserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse and validate cron expressions with detailed field analysis

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.cronparser({ expression: "0 9 * * 1-5" });
  // TODO: Handle 'response' of type V1CronparserResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.CronparserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.cronparser({ expression: "0 9 * * 1-5" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CronparserResponse
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
| <code>expression</code> | <code>string</code> | The cron expression to parse (5-field or 6-field format) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.cronparser(request)`

- **OnSuccess**: <code>[V1CronparserResponse](src/models/v1-cronparser-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.CronparserError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.cronparser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CronparserResponse, TextProcessing.CronparserError&gt;</code>, with `result.value` of type <code>[V1CronparserResponse](src/models/v1-cronparser-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>datamasking(request: TextProcessing.DatamaskingRequest, options?: RequestOptions): ApiPromise&lt;V1DatamaskingResponse, TextProcessing.DatamaskingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect and mask sensitive information in text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.datamasking({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1DatamaskingResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.DatamaskingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .datamasking({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DatamaskingResponse
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
| <code>body</code> | <code>[V1DatamaskingRequest](src/models/v1-datamasking-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.datamasking(request)`

- **OnSuccess**: <code>[V1DatamaskingResponse](src/models/v1-datamasking-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.DatamaskingError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.datamasking(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DatamaskingResponse, TextProcessing.DatamaskingError&gt;</code>, with `result.value` of type <code>[V1DatamaskingResponse](src/models/v1-datamasking-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>didyoumean(request: TextProcessing.DidyoumeanRequest, options?: RequestOptions): ApiPromise&lt;V1DidyoumeanResponse, TextProcessing.DidyoumeanError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Did You Mean is a simple tool for correcting spelling mistakes. It returns the corrected text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.didyoumean({ query: "what weather today is" });
  // TODO: Handle 'response' of type V1DidyoumeanResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.DidyoumeanError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.didyoumean({ query: "what weather today is" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1DidyoumeanResponse
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
| <code>query</code> | <code>string</code> | The text you want to check for spelling mistakes |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.didyoumean(request)`

- **OnSuccess**: <code>[V1DidyoumeanResponse](src/models/v1-didyoumean-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.DidyoumeanError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.didyoumean(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1DidyoumeanResponse, TextProcessing.DidyoumeanError&gt;</code>, with `result.value` of type <code>[V1DidyoumeanResponse](src/models/v1-didyoumean-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>emojidecorator(request: TextProcessing.EmojidecoratorRequest, options?: RequestOptions): ApiPromise&lt;V1EmojidecoratorResponse, TextProcessing.EmojidecoratorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.emojidecorator({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1EmojidecoratorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.EmojidecoratorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .emojidecorator({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1EmojidecoratorResponse
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
| <code>body</code> | <code>[V1EmojidecoratorRequest](src/models/v1-emojidecorator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.emojidecorator(request)`

- **OnSuccess**: <code>[V1EmojidecoratorResponse](src/models/v1-emojidecorator-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.EmojidecoratorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.emojidecorator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1EmojidecoratorResponse, TextProcessing.EmojidecoratorError&gt;</code>, with `result.value` of type <code>[V1EmojidecoratorResponse](src/models/v1-emojidecorator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>gibberishdetector(request: TextProcessing.GibberishdetectorRequest, options?: RequestOptions): ApiPromise&lt;V1GibberishdetectorResponse, TextProcessing.GibberishdetectorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze text to detect gibberish content

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.gibberishdetector({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1GibberishdetectorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.GibberishdetectorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .gibberishdetector({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GibberishdetectorResponse
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
| <code>body</code> | <code>[V1GibberishdetectorRequest](src/models/v1-gibberishdetector-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.gibberishdetector(request)`

- **OnSuccess**: <code>[V1GibberishdetectorResponse](src/models/v1-gibberishdetector-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.GibberishdetectorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.gibberishdetector(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GibberishdetectorResponse, TextProcessing.GibberishdetectorError&gt;</code>, with `result.value` of type <code>[V1GibberishdetectorResponse](src/models/v1-gibberishdetector-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>grammarcheck(request: TextProcessing.GrammarcheckRequest, options?: RequestOptions): ApiPromise&lt;V1GrammarcheckResponse, TextProcessing.GrammarcheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the corrected text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.grammarcheck({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1GrammarcheckResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.GrammarcheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .grammarcheck({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1GrammarcheckResponse
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
| <code>body</code> | <code>[V1GrammarcheckRequest](src/models/v1-grammarcheck-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.grammarcheck(request)`

- **OnSuccess**: <code>[V1GrammarcheckResponse](src/models/v1-grammarcheck-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.GrammarcheckError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.grammarcheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1GrammarcheckResponse, TextProcessing.GrammarcheckError&gt;</code>, with `result.value` of type <code>[V1GrammarcheckResponse](src/models/v1-grammarcheck-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>isbnvalidator(request: TextProcessing.IsbnvalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1IsbnvalidatorResponse, TextProcessing.IsbnvalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate and parse ISBN-10 or ISBN-13 numbers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.isbnvalidator({ isbn: "978-0-306-40615-7" });
  // TODO: Handle 'response' of type V1IsbnvalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.IsbnvalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.isbnvalidator({ isbn: "978-0-306-40615-7" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1IsbnvalidatorResponse
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
| <code>isbn</code> | <code>string</code> | The ISBN number to validate (ISBN-10 or ISBN-13, with or without separators) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.isbnvalidator(request)`

- **OnSuccess**: <code>[V1IsbnvalidatorResponse](src/models/v1-isbnvalidator-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.IsbnvalidatorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.isbnvalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1IsbnvalidatorResponse, TextProcessing.IsbnvalidatorError&gt;</code>, with `result.value` of type <code>[V1IsbnvalidatorResponse](src/models/v1-isbnvalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jsonschemavalidator(request: TextProcessing.JsonschemavalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1JsonschemavalidatorResponse, TextProcessing.JsonschemavalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate JSON data against a JSON schema

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.jsonschemavalidator({
    body: { schema: "some example string", json: "some example string" },
  });
  // TODO: Handle 'response' of type V1JsonschemavalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.JsonschemavalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .jsonschemavalidator({ body: { schema: "some example string", json: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1JsonschemavalidatorResponse
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
| <code>body</code> | <code>[V1JsonschemavalidatorRequest](src/models/v1-jsonschemavalidator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.jsonschemavalidator(request)`

- **OnSuccess**: <code>[V1JsonschemavalidatorResponse](src/models/v1-jsonschemavalidator-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.JsonschemavalidatorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.jsonschemavalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1JsonschemavalidatorResponse, TextProcessing.JsonschemavalidatorError&gt;</code>, with `result.value` of type <code>[V1JsonschemavalidatorResponse](src/models/v1-jsonschemavalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>keywordextractor(request: TextProcessing.KeywordextractorRequest, options?: RequestOptions): ApiPromise&lt;V1KeywordextractorResponse, TextProcessing.KeywordextractorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract keywords from a body of text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.keywordextractor({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1KeywordextractorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.KeywordextractorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .keywordextractor({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1KeywordextractorResponse
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
| <code>body</code> | <code>[V1KeywordextractorRequest](src/models/v1-keywordextractor-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.keywordextractor(request)`

- **OnSuccess**: <code>[V1KeywordextractorResponse](src/models/v1-keywordextractor-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.KeywordextractorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.keywordextractor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1KeywordextractorResponse, TextProcessing.KeywordextractorError&gt;</code>, with `result.value` of type <code>[V1KeywordextractorResponse](src/models/v1-keywordextractor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>leetspeak(request: TextProcessing.LeetspeakRequest, options?: RequestOptions): ApiPromise&lt;V1LeetspeakResponse, TextProcessing.LeetspeakError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Leet Speak is a simple tool for encoding and decoding Leet Speak. It returns the encoded or decoded Leet Speak.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.leetspeak({
    body: { text: "some example string", mode: "some example string" },
  });
  // TODO: Handle 'response' of type V1LeetspeakResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.LeetspeakError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .leetspeak({ body: { text: "some example string", mode: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LeetspeakResponse
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
| <code>body</code> | <code>[V1LeetspeakRequest](src/models/v1-leetspeak-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.leetspeak(request)`

- **OnSuccess**: <code>[V1LeetspeakResponse](src/models/v1-leetspeak-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.LeetspeakError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.leetspeak(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LeetspeakResponse, TextProcessing.LeetspeakError&gt;</code>, with `result.value` of type <code>[V1LeetspeakResponse](src/models/v1-leetspeak-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lemmatizer(request: TextProcessing.LemmatizerRequest, options?: RequestOptions): ApiPromise&lt;V1LemmatizerResponse, TextProcessing.LemmatizerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lemmatize text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.lemmatizer({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1LemmatizerResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.LemmatizerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .lemmatizer({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LemmatizerResponse
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
| <code>body</code> | <code>[V1LemmatizerRequest](src/models/v1-lemmatizer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.lemmatizer(request)`

- **OnSuccess**: <code>[V1LemmatizerResponse](src/models/v1-lemmatizer-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.LemmatizerError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.lemmatizer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LemmatizerResponse, TextProcessing.LemmatizerError&gt;</code>, with `result.value` of type <code>[V1LemmatizerResponse](src/models/v1-lemmatizer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>levenshteindistance(request: TextProcessing.LevenshteindistanceRequest, options?: RequestOptions): ApiPromise&lt;V1LevenshteindistanceResponse, TextProcessing.LevenshteindistanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate Levenshtein distance between two strings

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.levenshteindistance({
    body: { string1: "some example string", string2: "some example string" },
  });
  // TODO: Handle 'response' of type V1LevenshteindistanceResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.LevenshteindistanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .levenshteindistance({ body: { string1: "some example string", string2: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LevenshteindistanceResponse
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
| <code>body</code> | <code>[V1LevenshteindistanceRequest](src/models/v1-levenshteindistance-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.levenshteindistance(request)`

- **OnSuccess**: <code>[V1LevenshteindistanceResponse](src/models/v1-levenshteindistance-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.LevenshteindistanceError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.levenshteindistance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LevenshteindistanceResponse, TextProcessing.LevenshteindistanceError&gt;</code>, with `result.value` of type <code>[V1LevenshteindistanceResponse](src/models/v1-levenshteindistance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lexicon(request: TextProcessing.LexiconRequest, options?: RequestOptions): ApiPromise&lt;V1LexiconResponse, TextProcessing.LexiconError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lexicon is a simple tool for analyzing words. It returns various properties of the word.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.lexicon({ word: "listen" });
  // TODO: Handle 'response' of type V1LexiconResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.LexiconError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.lexicon({ word: "listen" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LexiconResponse
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
| <code>word</code> | <code>string</code> | The word to analyze |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.lexicon(request)`

- **OnSuccess**: <code>[V1LexiconResponse](src/models/v1-lexicon-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.LexiconError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.lexicon(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LexiconResponse, TextProcessing.LexiconError&gt;</code>, with `result.value` of type <code>[V1LexiconResponse](src/models/v1-lexicon-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linesorter(request: TextProcessing.LinesorterRequest, options?: RequestOptions): ApiPromise&lt;V1LinesorterResponse, TextProcessing.LinesorterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sort lines of text alphabetically

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.linesorter({ body: { lines: "some example string" } });
  // TODO: Handle 'response' of type V1LinesorterResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.LinesorterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .linesorter({ body: { lines: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1LinesorterResponse
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
| <code>body</code> | <code>[V1LinesorterRequest](src/models/v1-linesorter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.linesorter(request)`

- **OnSuccess**: <code>[V1LinesorterResponse](src/models/v1-linesorter-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.LinesorterError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.linesorter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1LinesorterResponse, TextProcessing.LinesorterError&gt;</code>, with `result.value` of type <code>[V1LinesorterResponse](src/models/v1-linesorter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>markdownlinkextractor(request: TextProcessing.MarkdownlinkextractorRequest, options?: RequestOptions): ApiPromise&lt;V1MarkdownlinkextractorResponse, TextProcessing.MarkdownlinkextractorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Parse markdown and extract all links with categorization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.markdownlinkextractor({
    body: { markdown: "some example string" },
  });
  // TODO: Handle 'response' of type V1MarkdownlinkextractorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.MarkdownlinkextractorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .markdownlinkextractor({ body: { markdown: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MarkdownlinkextractorResponse
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
| <code>body</code> | <code>[V1MarkdownlinkextractorRequest](src/models/v1-markdownlinkextractor-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.markdownlinkextractor(request)`

- **OnSuccess**: <code>[V1MarkdownlinkextractorResponse](src/models/v1-markdownlinkextractor-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.MarkdownlinkextractorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.markdownlinkextractor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MarkdownlinkextractorResponse, TextProcessing.MarkdownlinkextractorError&gt;</code>, with `result.value` of type <code>[V1MarkdownlinkextractorResponse](src/models/v1-markdownlinkextractor-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>palindromechecker(request: TextProcessing.PalindromecheckerRequest, options?: RequestOptions): ApiPromise&lt;V1PalindromecheckerResponse, TextProcessing.PalindromecheckerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check if text is a palindrome with customizable options

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.palindromechecker({
    text: "A man a plan a canal Panama",
    ignorecase: true,
    ignorespaces: true,
    ignorepunctuation: true,
  });
  // TODO: Handle 'response' of type V1PalindromecheckerResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.PalindromecheckerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .palindromechecker({
    text: "A man a plan a canal Panama",
    ignorecase: true,
    ignorespaces: true,
    ignorepunctuation: true,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PalindromecheckerResponse
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
| <code>text</code> | <code>string</code> | The text to check for palindrome. Maximum 20000 characters |
| <code>ignorecase?</code> | <code>boolean</code> | Ignore case when checking (default: true) |
| <code>ignorespaces?</code> | <code>boolean</code> | Ignore spaces when checking (default: true) |
| <code>ignorepunctuation?</code> | <code>boolean</code> | Ignore punctuation when checking (default: true) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.palindromechecker(request)`

- **OnSuccess**: <code>[V1PalindromecheckerResponse](src/models/v1-palindromechecker-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.PalindromecheckerError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.palindromechecker(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PalindromecheckerResponse, TextProcessing.PalindromecheckerError&gt;</code>, with `result.value` of type <code>[V1PalindromecheckerResponse](src/models/v1-palindromechecker-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>partsofspeech(request: TextProcessing.PartsofspeechRequest, options?: RequestOptions): ApiPromise&lt;V1PartsofspeechResponse, TextProcessing.PartsofspeechError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract nouns, verbs, adjectives, adverbs, etc. from text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.partsofspeech({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1PartsofspeechResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.PartsofspeechError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .partsofspeech({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PartsofspeechResponse
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
| <code>body</code> | <code>[V1PartsofspeechRequest](src/models/v1-partsofspeech-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.partsofspeech(request)`

- **OnSuccess**: <code>[V1PartsofspeechResponse](src/models/v1-partsofspeech-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.PartsofspeechError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.partsofspeech(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PartsofspeechResponse, TextProcessing.PartsofspeechError&gt;</code>, with `result.value` of type <code>[V1PartsofspeechResponse](src/models/v1-partsofspeech-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>phonetic(request: TextProcessing.PhoneticRequest, options?: RequestOptions): ApiPromise&lt;V1PhoneticResponse, TextProcessing.PhoneticError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get phonetic codes for a word

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.phonetic({ word: "smith", algorithm: "both" });
  // TODO: Handle 'response' of type V1PhoneticResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.PhoneticError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.phonetic({ word: "smith", algorithm: "both" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PhoneticResponse
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
| <code>word</code> | <code>string</code> | The word to encode phonetically |
| <code>algorithm?</code> | <code>string</code> | Algorithm to use |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.phonetic(request)`

- **OnSuccess**: <code>[V1PhoneticResponse](src/models/v1-phonetic-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.PhoneticError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.phonetic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PhoneticResponse, TextProcessing.PhoneticError&gt;</code>, with `result.value` of type <code>[V1PhoneticResponse](src/models/v1-phonetic-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>piglatin(request: TextProcessing.PiglatinRequest, options?: RequestOptions): ApiPromise&lt;V1PiglatinResponse, TextProcessing.PiglatinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pig Latin is a simple tool for encoding Pig Latin. It returns the encoded Pig Latin.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.piglatin({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1PiglatinResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.PiglatinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.piglatin({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1PiglatinResponse
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
| <code>body</code> | <code>[V1PiglatinRequest](src/models/v1-piglatin-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.piglatin(request)`

- **OnSuccess**: <code>[V1PiglatinResponse](src/models/v1-piglatin-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.PiglatinError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.piglatin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1PiglatinResponse, TextProcessing.PiglatinError&gt;</code>, with `result.value` of type <code>[V1PiglatinResponse](src/models/v1-piglatin-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>profanityfilter(request: TextProcessing.ProfanityfilterRequest, options?: RequestOptions): ApiPromise&lt;V1ProfanityfilterResponse, TextProcessing.ProfanityfilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Filter out profanity words from a body of text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.profanityfilter({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1ProfanityfilterResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.ProfanityfilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .profanityfilter({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ProfanityfilterResponse
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
| <code>body</code> | <code>[V1ProfanityfilterRequest](src/models/v1-profanityfilter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.profanityfilter(request)`

- **OnSuccess**: <code>[V1ProfanityfilterResponse](src/models/v1-profanityfilter-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.ProfanityfilterError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.profanityfilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ProfanityfilterResponse, TextProcessing.ProfanityfilterError&gt;</code>, with `result.value` of type <code>[V1ProfanityfilterResponse](src/models/v1-profanityfilter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readabilityscore(request: TextProcessing.ReadabilityscoreRequest, options?: RequestOptions): ApiPromise&lt;V1ReadabilityscoreResponse, TextProcessing.ReadabilityscoreError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate the readability score of text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.readabilityscore({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1ReadabilityscoreResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.ReadabilityscoreError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .readabilityscore({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ReadabilityscoreResponse
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
| <code>body</code> | <code>[V1ReadabilityscoreRequest](src/models/v1-readabilityscore-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.readabilityscore(request)`

- **OnSuccess**: <code>[V1ReadabilityscoreResponse](src/models/v1-readabilityscore-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.ReadabilityscoreError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.readabilityscore(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ReadabilityscoreResponse, TextProcessing.ReadabilityscoreError&gt;</code>, with `result.value` of type <code>[V1ReadabilityscoreResponse](src/models/v1-readabilityscore-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>readingtime(request: TextProcessing.ReadingtimeRequest, options?: RequestOptions): ApiPromise&lt;V1ReadingtimeResponse, TextProcessing.ReadingtimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculate estimated reading time for text content

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.readingtime({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1ReadingtimeResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.ReadingtimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .readingtime({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ReadingtimeResponse
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
| <code>body</code> | <code>[V1ReadingtimeRequest](src/models/v1-readingtime-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.readingtime(request)`

- **OnSuccess**: <code>[V1ReadingtimeResponse](src/models/v1-readingtime-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.ReadingtimeError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.readingtime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ReadingtimeResponse, TextProcessing.ReadingtimeError&gt;</code>, with `result.value` of type <code>[V1ReadingtimeResponse](src/models/v1-readingtime-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>regextester(request: TextProcessing.RegextesterRequest, options?: RequestOptions): ApiPromise&lt;V1RegextesterResponse, TextProcessing.RegextesterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Test regular expressions with detailed analysis and results

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.regextester({
    body: { pattern: "some example string", text: "some example string" },
  });
  // TODO: Handle 'response' of type V1RegextesterResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.RegextesterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .regextester({ body: { pattern: "some example string", text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RegextesterResponse
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
| <code>body</code> | <code>[V1RegextesterRequest](src/models/v1-regextester-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.regextester(request)`

- **OnSuccess**: <code>[V1RegextesterResponse](src/models/v1-regextester-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.RegextesterError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.regextester(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RegextesterResponse, TextProcessing.RegextesterError&gt;</code>, with `result.value` of type <code>[V1RegextesterResponse](src/models/v1-regextester-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removepunctuation(request: TextProcessing.RemovepunctuationRequest, options?: RequestOptions): ApiPromise&lt;V1RemovepunctuationResponse, TextProcessing.RemovepunctuationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove all punctuation marks from text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.removepunctuation({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1RemovepunctuationResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.RemovepunctuationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .removepunctuation({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RemovepunctuationResponse
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
| <code>body</code> | <code>[V1RemovepunctuationRequest](src/models/v1-removepunctuation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.removepunctuation(request)`

- **OnSuccess**: <code>[V1RemovepunctuationResponse](src/models/v1-removepunctuation-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.RemovepunctuationError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.removepunctuation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RemovepunctuationResponse, TextProcessing.RemovepunctuationError&gt;</code>, with `result.value` of type <code>[V1RemovepunctuationResponse](src/models/v1-removepunctuation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reversetext(request: TextProcessing.ReversetextRequest, options?: RequestOptions): ApiPromise&lt;V1ReversetextResponse, TextProcessing.ReversetextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reverse text character by character

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.reversetext({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1ReversetextResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.ReversetextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .reversetext({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ReversetextResponse
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
| <code>body</code> | <code>[V1ReversetextRequest](src/models/v1-reversetext-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.reversetext(request)`

- **OnSuccess**: <code>[V1ReversetextResponse](src/models/v1-reversetext-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.ReversetextError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.reversetext(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ReversetextResponse, TextProcessing.ReversetextError&gt;</code>, with `result.value` of type <code>[V1ReversetextResponse](src/models/v1-reversetext-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>slugify(request: TextProcessing.SlugifyRequest, options?: RequestOptions): ApiPromise&lt;V1SlugifyResponse, TextProcessing.SlugifyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text to a URL-friendly slug

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.slugify({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1SlugifyResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.SlugifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.slugify({ body: { text: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SlugifyResponse
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
| <code>body</code> | <code>[V1SlugifyRequest](src/models/v1-slugify-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.slugify(request)`

- **OnSuccess**: <code>[V1SlugifyResponse](src/models/v1-slugify-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.SlugifyError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.slugify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SlugifyResponse, TextProcessing.SlugifyError&gt;</code>, with `result.value` of type <code>[V1SlugifyResponse](src/models/v1-slugify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>spellchecker(request: TextProcessing.SpellcheckerRequest, options?: RequestOptions): ApiPromise&lt;V1SpellcheckerResponse, TextProcessing.SpellcheckerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the spelling of a body of text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.spellchecker({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1SpellcheckerResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.SpellcheckerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .spellchecker({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SpellcheckerResponse
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
| <code>body</code> | <code>[V1SpellcheckerRequest](src/models/v1-spellchecker-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.spellchecker(request)`

- **OnSuccess**: <code>[V1SpellcheckerResponse](src/models/v1-spellchecker-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.SpellcheckerError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.spellchecker(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SpellcheckerResponse, TextProcessing.SpellcheckerError&gt;</code>, with `result.value` of type <code>[V1SpellcheckerResponse](src/models/v1-spellchecker-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>syllablecounter(request: TextProcessing.SyllablecounterRequest, options?: RequestOptions): ApiPromise&lt;V1SyllablecounterResponse, TextProcessing.SyllablecounterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Count syllables in words and text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.syllablecounter({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1SyllablecounterResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.SyllablecounterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .syllablecounter({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SyllablecounterResponse
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
| <code>body</code> | <code>[V1SyllablecounterRequest](src/models/v1-syllablecounter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.syllablecounter(request)`

- **OnSuccess**: <code>[V1SyllablecounterResponse](src/models/v1-syllablecounter-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.SyllablecounterError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.syllablecounter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SyllablecounterResponse, TextProcessing.SyllablecounterError&gt;</code>, with `result.value` of type <code>[V1SyllablecounterResponse](src/models/v1-syllablecounter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>taxidvalidator(request: TextProcessing.TaxidvalidatorRequest, options?: RequestOptions): ApiPromise&lt;V1TaxidvalidatorResponse, TextProcessing.TaxidvalidatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate US Tax IDs (SSN, EIN, ITIN)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.taxidvalidator({ taxid: "123-45-6789" });
  // TODO: Handle 'response' of type V1TaxidvalidatorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TaxidvalidatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.taxidvalidator({ taxid: "123-45-6789" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TaxidvalidatorResponse
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
| <code>taxid</code> | <code>string</code> | The US Tax ID to validate (SSN, EIN, or ITIN format) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.taxidvalidator(request)`

- **OnSuccess**: <code>[V1TaxidvalidatorResponse](src/models/v1-taxidvalidator-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TaxidvalidatorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.taxidvalidator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TaxidvalidatorResponse, TextProcessing.TaxidvalidatorError&gt;</code>, with `result.value` of type <code>[V1TaxidvalidatorResponse](src/models/v1-taxidvalidator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tenseconverter(request: TextProcessing.TenseconverterRequest, options?: RequestOptions): ApiPromise&lt;V1TenseconverterResponse, TextProcessing.TenseconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text to past or future tense

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.tenseconverter({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1TenseconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TenseconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .tenseconverter({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TenseconverterResponse
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
| <code>body</code> | <code>[V1TenseconverterRequest](src/models/v1-tenseconverter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.tenseconverter(request)`

- **OnSuccess**: <code>[V1TenseconverterResponse](src/models/v1-tenseconverter-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TenseconverterError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.tenseconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TenseconverterResponse, TextProcessing.TenseconverterError&gt;</code>, with `result.value` of type <code>[V1TenseconverterResponse](src/models/v1-tenseconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>textlanguage(request: TextProcessing.TextlanguageRequest, options?: RequestOptions): ApiPromise&lt;V1TextlanguageResponse, TextProcessing.TextlanguageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detect the language of a body of text

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.textlanguage({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1TextlanguageResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TextlanguageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .textlanguage({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TextlanguageResponse
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
| <code>body</code> | <code>[V1TextlanguageRequest](src/models/v1-textlanguage-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.textlanguage(request)`

- **OnSuccess**: <code>[V1TextlanguageResponse](src/models/v1-textlanguage-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TextlanguageError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.textlanguage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TextlanguageResponse, TextProcessing.TextlanguageError&gt;</code>, with `result.value` of type <code>[V1TextlanguageResponse](src/models/v1-textlanguage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>textsimilarity(request: TextProcessing.TextsimilarityRequest, options?: RequestOptions): ApiPromise&lt;V1TextsimilarityResponse, TextProcessing.TextsimilarityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the similarity between two texts

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.textsimilarity({
    body: { text1: "some example string", text2: "some example string" },
  });
  // TODO: Handle 'response' of type V1TextsimilarityResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TextsimilarityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .textsimilarity({ body: { text1: "some example string", text2: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TextsimilarityResponse
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
| <code>body</code> | <code>[V1TextsimilarityRequest](src/models/v1-textsimilarity-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.textsimilarity(request)`

- **OnSuccess**: <code>[V1TextsimilarityResponse](src/models/v1-textsimilarity-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TextsimilarityError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.textsimilarity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TextsimilarityResponse, TextProcessing.TextsimilarityError&gt;</code>, with `result.value` of type <code>[V1TextsimilarityResponse](src/models/v1-textsimilarity-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>textstyler(request: TextProcessing.TextstylerRequest, options?: RequestOptions): ApiPromise&lt;V1TextstylerResponse, TextProcessing.TextstylerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Text Styler is a simple tool for styling text in various ways. It returns the styled text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.textstyler({
    body: { text: "some example string", style: "some example string" },
  });
  // TODO: Handle 'response' of type V1TextstylerResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TextstylerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .textstyler({ body: { text: "some example string", style: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TextstylerResponse
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
| <code>body</code> | <code>[V1TextstylerRequest](src/models/v1-textstyler-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.textstyler(request)`

- **OnSuccess**: <code>[V1TextstylerResponse](src/models/v1-textstyler-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TextstylerError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.textstyler(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TextstylerResponse, TextProcessing.TextstylerError&gt;</code>, with `result.value` of type <code>[V1TextstylerResponse](src/models/v1-textstyler-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>textsummarizer(request: TextProcessing.TextsummarizerRequest, options?: RequestOptions): ApiPromise&lt;V1TextsummarizerResponse, TextProcessing.TextsummarizerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Summarize a body of text. Useful for generating summaries of articles, reports, and more.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.textsummarizer({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1TextsummarizerResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TextsummarizerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .textsummarizer({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TextsummarizerResponse
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
| <code>body</code> | <code>[V1TextsummarizerRequest](src/models/v1-textsummarizer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.textsummarizer(request)`

- **OnSuccess**: <code>[V1TextsummarizerResponse](src/models/v1-textsummarizer-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TextsummarizerError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.textsummarizer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TextsummarizerResponse, TextProcessing.TextsummarizerError&gt;</code>, with `result.value` of type <code>[V1TextsummarizerResponse](src/models/v1-textsummarizer-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>texttoemoji(request: TextProcessing.TexttoemojiRequest, options?: RequestOptions): ApiPromise&lt;V1TexttoemojiResponse, TextProcessing.TexttoemojiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Text to Emoji is a simple tool for converting text into emojis. It returns the emojis that represent the given text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.texttoemoji({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1TexttoemojiResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TexttoemojiError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .texttoemoji({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TexttoemojiResponse
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
| <code>body</code> | <code>[V1TexttoemojiRequest](src/models/v1-texttoemoji-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.texttoemoji(request)`

- **OnSuccess**: <code>[V1TexttoemojiResponse](src/models/v1-texttoemoji-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TexttoemojiError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.texttoemoji(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TexttoemojiResponse, TextProcessing.TexttoemojiError&gt;</code>, with `result.value` of type <code>[V1TexttoemojiResponse](src/models/v1-texttoemoji-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>titlecapitalization(request: TextProcessing.TitlecapitalizationRequest, options?: RequestOptions): ApiPromise&lt;V1TitlecapitalizationResponse, TextProcessing.TitlecapitalizationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert text to title case

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.titlecapitalization({
    body: { text: "some example string", style: "some example string" },
  });
  // TODO: Handle 'response' of type V1TitlecapitalizationResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TitlecapitalizationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .titlecapitalization({ body: { text: "some example string", style: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TitlecapitalizationResponse
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
| <code>body</code> | <code>[V1TitlecapitalizationRequest](src/models/v1-titlecapitalization-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.titlecapitalization(request)`

- **OnSuccess**: <code>[V1TitlecapitalizationResponse](src/models/v1-titlecapitalization-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TitlecapitalizationError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.titlecapitalization(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TitlecapitalizationResponse, TextProcessing.TitlecapitalizationError&gt;</code>, with `result.value` of type <code>[V1TitlecapitalizationResponse](src/models/v1-titlecapitalization-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translator(request: TextProcessing.TranslatorRequest, options?: RequestOptions): ApiPromise&lt;V1TranslatorResponse, TextProcessing.TranslatorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translate text from one language to another

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.translator({
    body: { text: "some example string", target: "some example string" },
  });
  // TODO: Handle 'response' of type V1TranslatorResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.TranslatorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .translator({ body: { text: "some example string", target: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TranslatorResponse
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
| <code>body</code> | <code>[V1TranslatorRequest](src/models/v1-translator-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.translator(request)`

- **OnSuccess**: <code>[V1TranslatorResponse](src/models/v1-translator-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.TranslatorError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.translator(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TranslatorResponse, TextProcessing.TranslatorError&gt;</code>, with `result.value` of type <code>[V1TranslatorResponse](src/models/v1-translator-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vowelcounter(request: TextProcessing.VowelcounterRequest, options?: RequestOptions): ApiPromise&lt;V1VowelcounterResponse, TextProcessing.VowelcounterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Count vowels and consonants in text with detailed breakdown

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.vowelcounter({ body: { text: "some example string" } });
  // TODO: Handle 'response' of type V1VowelcounterResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.VowelcounterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .vowelcounter({ body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1VowelcounterResponse
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
| <code>body</code> | <code>[V1VowelcounterRequest](src/models/v1-vowelcounter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.vowelcounter(request)`

- **OnSuccess**: <code>[V1VowelcounterResponse](src/models/v1-vowelcounter-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.VowelcounterError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.vowelcounter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1VowelcounterResponse, TextProcessing.VowelcounterError&gt;</code>, with `result.value` of type <code>[V1VowelcounterResponse](src/models/v1-vowelcounter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>websitereadability(request: TextProcessing.WebsitereadabilityRequest, options?: RequestOptions): ApiPromise&lt;V1WebsitereadabilityResponse, TextProcessing.WebsitereadabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze the readability of a web page

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.websitereadability({ body: { url: "some example string" } });
  // TODO: Handle 'response' of type V1WebsitereadabilityResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.WebsitereadabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing
  .websitereadability({ body: { url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WebsitereadabilityResponse
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
| <code>body</code> | <code>[V1WebsitereadabilityRequest](src/models/v1-websitereadability-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.websitereadability(request)`

- **OnSuccess**: <code>[V1WebsitereadabilityResponse](src/models/v1-websitereadability-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.WebsitereadabilityError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.websitereadability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WebsitereadabilityResponse, TextProcessing.WebsitereadabilityError&gt;</code>, with `result.value` of type <code>[V1WebsitereadabilityResponse](src/models/v1-websitereadability-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wordopposite(request: TextProcessing.WordoppositeRequest, options?: RequestOptions): ApiPromise&lt;V1WordoppositeResponse, TextProcessing.WordoppositeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Word Opposites is a simple tool for getting the opposites of a word. It returns a list of opposites for the given word.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.wordopposite({ word: "hot" });
  // TODO: Handle 'response' of type V1WordoppositeResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.WordoppositeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.wordopposite({ word: "hot" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WordoppositeResponse
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
| <code>word</code> | <code>string</code> | The word to get the opposites for |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.wordopposite(request)`

- **OnSuccess**: <code>[V1WordoppositeResponse](src/models/v1-wordopposite-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.WordoppositeError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.wordopposite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WordoppositeResponse, TextProcessing.WordoppositeError&gt;</code>, with `result.value` of type <code>[V1WordoppositeResponse](src/models/v1-wordopposite-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wordpronunciation(request: TextProcessing.WordpronunciationRequest, options?: RequestOptions): ApiPromise&lt;V1WordpronunciationResponse, TextProcessing.WordpronunciationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the pronunciation of a word

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.wordpronunciation({ word: "hello" });
  // TODO: Handle 'response' of type V1WordpronunciationResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.WordpronunciationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.wordpronunciation({ word: "hello" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WordpronunciationResponse
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
| <code>word</code> | <code>string</code> | The word to get the pronunciation of |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.wordpronunciation(request)`

- **OnSuccess**: <code>[V1WordpronunciationResponse](src/models/v1-wordpronunciation-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.WordpronunciationError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.wordpronunciation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WordpronunciationResponse, TextProcessing.WordpronunciationError&gt;</code>, with `result.value` of type <code>[V1WordpronunciationResponse](src/models/v1-wordpronunciation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wordrhymes(request: TextProcessing.WordrhymesRequest, options?: RequestOptions): ApiPromise&lt;V1WordrhymesResponse, TextProcessing.WordrhymesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of words that rhyme with the specified word

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.textProcessing.wordrhymes({ word: "blue", limit: 30 });
  // TODO: Handle 'response' of type V1WordrhymesResponse
} catch (err) {
  // TODO: Handle 'err' of type TextProcessing.WordrhymesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textProcessing.wordrhymes({ word: "blue", limit: 30 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WordrhymesResponse
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
| <code>word</code> | <code>string</code> | The word for which you want to get rhyming words |
| <code>limit?</code> | <code>number</code> | Limit the number of word rhymes returned |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textProcessing.wordrhymes(request)`

- **OnSuccess**: <code>[V1WordrhymesResponse](src/models/v1-wordrhymes-response.ts)</code>
- **OnError**: throws <code>[TextProcessing.WordrhymesError](src/resources/text-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textProcessing.wordrhymes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WordrhymesResponse, TextProcessing.WordrhymesError&gt;</code>, with `result.value` of type <code>[V1WordrhymesResponse](src/models/v1-wordrhymes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transportation

> Source: [Transportation](src/resources/transportation.ts)

<details>
<summary><code>airlinelookup(request: Transportation.AirlinelookupRequest, options?: RequestOptions): ApiPromise&lt;V1AirlinelookupResponse, Transportation.AirlinelookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the airline information for a specific airline IATA code

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transportation.airlinelookup({ iata: "AA" });
  // TODO: Handle 'response' of type V1AirlinelookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Transportation.AirlinelookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transportation.airlinelookup({ iata: "AA" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AirlinelookupResponse
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
| <code>iata</code> | <code>string</code> | The IATA code of the airline for which you want to get the information (e.g., AA) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transportation.airlinelookup(request)`

- **OnSuccess**: <code>[V1AirlinelookupResponse](src/models/v1-airlinelookup-response.ts)</code>
- **OnError**: throws <code>[Transportation.AirlinelookupError](src/resources/transportation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transportation.airlinelookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AirlinelookupResponse, Transportation.AirlinelookupError&gt;</code>, with `result.value` of type <code>[V1AirlinelookupResponse](src/models/v1-airlinelookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>airportcodeconverter(request: Transportation.AirportcodeconverterRequest, options?: RequestOptions): ApiPromise&lt;V1AirportcodeconverterResponse, Transportation.AirportcodeconverterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit an IATA (3-letter) or ICAO (4-letter) airport code and get the corresponding code in the other format.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transportation.airportcodeconverter({ code: "MCI" });
  // TODO: Handle 'response' of type V1AirportcodeconverterResponse
} catch (err) {
  // TODO: Handle 'err' of type Transportation.AirportcodeconverterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transportation.airportcodeconverter({ code: "MCI" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AirportcodeconverterResponse
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
| <code>code</code> | <code>string</code> | The airport code to convert (IATA: 3 letters, ICAO: 4 letters) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transportation.airportcodeconverter(request)`

- **OnSuccess**: <code>[V1AirportcodeconverterResponse](src/models/v1-airportcodeconverter-response.ts)</code>
- **OnError**: throws <code>[Transportation.AirportcodeconverterError](src/resources/transportation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transportation.airportcodeconverter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AirportcodeconverterResponse, Transportation.AirportcodeconverterError&gt;</code>, with `result.value` of type <code>[V1AirportcodeconverterResponse](src/models/v1-airportcodeconverter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>airportdistance(request: Transportation.AirportdistanceRequest, options?: RequestOptions): ApiPromise&lt;V1AirportdistanceResponse, Transportation.AirportdistanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Airport Distance is a simple tool for getting the distance between two airports. It returns the distance between the two airports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transportation.airportdistance({ iata1: "JFK", iata2: "LAX" });
  // TODO: Handle 'response' of type V1AirportdistanceResponse
} catch (err) {
  // TODO: Handle 'err' of type Transportation.AirportdistanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transportation.airportdistance({ iata1: "JFK", iata2: "LAX" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AirportdistanceResponse
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
| <code>iata1</code> | <code>string</code> | The IATA code of the first airport (e.g. JFK) |
| <code>iata2</code> | <code>string</code> | The IATA code of the second airport (e.g. LAX) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transportation.airportdistance(request)`

- **OnSuccess**: <code>[V1AirportdistanceResponse](src/models/v1-airportdistance-response.ts)</code>
- **OnError**: throws <code>[Transportation.AirportdistanceError](src/resources/transportation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transportation.airportdistance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AirportdistanceResponse, Transportation.AirportdistanceError&gt;</code>, with `result.value` of type <code>[V1AirportdistanceResponse](src/models/v1-airportdistance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>airports(request: Transportation.AirportsRequest, options?: RequestOptions): ApiPromise&lt;V1AirportsResponse, Transportation.AirportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the airport information for a specific airport IATA code

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transportation.airports({ iata: "MCI" });
  // TODO: Handle 'response' of type V1AirportsResponse
} catch (err) {
  // TODO: Handle 'err' of type Transportation.AirportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transportation.airports({ iata: "MCI" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AirportsResponse
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
| <code>iata</code> | <code>string</code> | The IATA code of the airport for which you want to get the information (e.g., MCI) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transportation.airports(request)`

- **OnSuccess**: <code>[V1AirportsResponse](src/models/v1-airports-response.ts)</code>
- **OnError**: throws <code>[Transportation.AirportsError](src/resources/transportation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transportation.airports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AirportsResponse, Transportation.AirportsError&gt;</code>, with `result.value` of type <code>[V1AirportsResponse](src/models/v1-airports-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>carmodels(request: Transportation.CarmodelsRequest, options?: RequestOptions): ApiPromise&lt;V1CarmodelsResponse, Transportation.CarmodelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all car models for a specific make (manufacturer)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transportation.carmodels({
    make: "Toyota",
    year: 2024,
    model: "Camry",
    trim: "Hybrid",
  });
  // TODO: Handle 'response' of type V1CarmodelsResponse
} catch (err) {
  // TODO: Handle 'err' of type Transportation.CarmodelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transportation
  .carmodels({ make: "Toyota", year: 2024, model: "Camry", trim: "Hybrid" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1CarmodelsResponse
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
| <code>make</code> | <code>string</code> | The make (manufacturer) of the car (e.g., Toyota, Honda, Ford) |
| <code>year?</code> | <code>number</code> | Filter by year (1984-present) |
| <code>model?</code> | <code>string</code> | Narrow to a model name (e.g., Camry) |
| <code>trim?</code> | <code>string</code> | Narrow to a trim level (e.g., Hybrid) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transportation.carmodels(request)`

- **OnSuccess**: <code>[V1CarmodelsResponse](src/models/v1-carmodels-response.ts)</code>
- **OnError**: throws <code>[Transportation.CarmodelsError](src/resources/transportation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transportation.carmodels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1CarmodelsResponse, Transportation.CarmodelsError&gt;</code>, with `result.value` of type <code>[V1CarmodelsResponse](src/models/v1-carmodels-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vindecoder(request: Transportation.VindecoderRequest, options?: RequestOptions): ApiPromise&lt;V1VindecoderResponse, Transportation.VindecoderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Decode a Vehicle Identification Number into the vehicle it identifies

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transportation.vindecoder({ vin: "1HGCM82633A004352" });
  // TODO: Handle 'response' of type V1VindecoderResponse
} catch (err) {
  // TODO: Handle 'err' of type Transportation.VindecoderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transportation.vindecoder({ vin: "1HGCM82633A004352" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1VindecoderResponse
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
| <code>vin</code> | <code>string</code> | The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as the available characters allow. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transportation.vindecoder(request)`

- **OnSuccess**: <code>[V1VindecoderResponse](src/models/v1-vindecoder-response.ts)</code>
- **OnError**: throws <code>[Transportation.VindecoderError](src/resources/transportation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transportation.vindecoder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1VindecoderResponse, Transportation.VindecoderError&gt;</code>, with `result.value` of type <code>[V1VindecoderResponse](src/models/v1-vindecoder-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Weather

> Source: [Weather](src/resources/weather.ts)

<details>
<summary><code>airquality(request: Weather.AirqualityRequest, options?: RequestOptions): ApiPromise&lt;V1AirqualityResponse, Weather.AirqualityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the air quality data for a city

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.airquality({ city: "San Francisco" });
  // TODO: Handle 'response' of type V1AirqualityResponse
} catch (err) {
  // TODO: Handle 'err' of type Weather.AirqualityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.airquality({ city: "San Francisco" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AirqualityResponse
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
| <code>city</code> | <code>string</code> | The city name for which you want to get the air quality data (e.g., New York) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.airquality(request)`

- **OnSuccess**: <code>[V1AirqualityResponse](src/models/v1-airquality-response.ts)</code>
- **OnError**: throws <code>[Weather.AirqualityError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.airquality(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AirqualityResponse, Weather.AirqualityError&gt;</code>, with `result.value` of type <code>[V1AirqualityResponse](src/models/v1-airquality-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>earthquake(options?: RequestOptions): ApiPromise&lt;V1EarthquakeResponse, Weather.EarthquakeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Earthquake is a simple tool for getting earthquake data. It returns the earthquake data for the past hour.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.earthquake();
  // TODO: Handle 'response' of type V1EarthquakeResponse
} catch (err) {
  // TODO: Handle 'err' of type Weather.EarthquakeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.earthquake().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1EarthquakeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.earthquake()`

- **OnSuccess**: <code>[V1EarthquakeResponse](src/models/v1-earthquake-response.ts)</code>
- **OnError**: throws <code>[Weather.EarthquakeError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.earthquake().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1EarthquakeResponse, Weather.EarthquakeError&gt;</code>, with `result.value` of type <code>[V1EarthquakeResponse](src/models/v1-earthquake-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>marineweather(request: Weather.MarineweatherRequest, options?: RequestOptions): ApiPromise&lt;V1MarineweatherResponse, Weather.MarineweatherError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the marine weather data for a location using latitude and longitude coordinates

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.marineweather({ lat: 29.48003, lon: -37.62424 });
  // TODO: Handle 'response' of type V1MarineweatherResponse
} catch (err) {
  // TODO: Handle 'err' of type Weather.MarineweatherError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.marineweather({ lat: 29.48003, lon: -37.62424 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MarineweatherResponse
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
| <code>lat</code> | <code>number</code> | The latitude coordinate of the location |
| <code>lon</code> | <code>number</code> | The longitude coordinate of the location |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.marineweather(request)`

- **OnSuccess**: <code>[V1MarineweatherResponse](src/models/v1-marineweather-response.ts)</code>
- **OnError**: throws <code>[Weather.MarineweatherError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.marineweather(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MarineweatherResponse, Weather.MarineweatherError&gt;</code>, with `result.value` of type <code>[V1MarineweatherResponse](src/models/v1-marineweather-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>moonrisemoonset(request: Weather.MoonrisemoonsetRequest, options?: RequestOptions): ApiPromise&lt;V1MoonrisemoonsetResponse, Weather.MoonrisemoonsetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get moonrise and moonset times based on the location

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.moonrisemoonset({ lat: 37.7749, lon: -122.4194, date: "01-16-2026" });
  // TODO: Handle 'response' of type V1MoonrisemoonsetResponse
} catch (err) {
  // TODO: Handle 'err' of type Weather.MoonrisemoonsetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather
  .moonrisemoonset({ lat: 37.7749, lon: -122.4194, date: "01-16-2026" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1MoonrisemoonsetResponse
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
| <code>lat</code> | <code>number</code> | The latitude of the location |
| <code>lon</code> | <code>number</code> | The longitude of the location |
| <code>date?</code> | <code>string</code> | The date to get the moonrise and moonset times for (MM-dd-yyyy) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.moonrisemoonset(request)`

- **OnSuccess**: <code>[V1MoonrisemoonsetResponse](src/models/v1-moonrisemoonset-response.ts)</code>
- **OnError**: throws <code>[Weather.MoonrisemoonsetError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.moonrisemoonset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1MoonrisemoonsetResponse, Weather.MoonrisemoonsetError&gt;</code>, with `result.value` of type <code>[V1MoonrisemoonsetResponse](src/models/v1-moonrisemoonset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>solarpotential(request: Weather.SolarpotentialRequest, options?: RequestOptions): ApiPromise&lt;V1SolarpotentialResponse, Weather.SolarpotentialError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Solar Potential is a simple tool for getting the estimated annual energy production of a PV system. It returns the estimated annual energy production of a PV system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.solarpotential({ lat: 37.7749, lon: -122.4194 });
  // TODO: Handle 'response' of type V1SolarpotentialResponse
} catch (err) {
  // TODO: Handle 'err' of type Weather.SolarpotentialError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.solarpotential({ lat: 37.7749, lon: -122.4194 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SolarpotentialResponse
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
| <code>lat</code> | <code>number</code> | The latitude of the location |
| <code>lon</code> | <code>number</code> | The longitude of the location |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.solarpotential(request)`

- **OnSuccess**: <code>[V1SolarpotentialResponse](src/models/v1-solarpotential-response.ts)</code>
- **OnError**: throws <code>[Weather.SolarpotentialError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.solarpotential(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SolarpotentialResponse, Weather.SolarpotentialError&gt;</code>, with `result.value` of type <code>[V1SolarpotentialResponse](src/models/v1-solarpotential-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sunrisesunset(request: Weather.SunrisesunsetRequest, options?: RequestOptions): ApiPromise&lt;V1SunrisesunsetResponse, Weather.SunrisesunsetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the sunrise and sunset times for a given location

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.sunrisesunset({ lat: 36.72016, lon: -4.42034, date: "01-16-2026" });
  // TODO: Handle 'response' of type V1SunrisesunsetResponse
} catch (err) {
  // TODO: Handle 'err' of type Weather.SunrisesunsetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather
  .sunrisesunset({ lat: 36.72016, lon: -4.42034, date: "01-16-2026" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1SunrisesunsetResponse
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
| <code>lat</code> | <code>number</code> | The latitude of the location |
| <code>lon</code> | <code>number</code> | The longitude of the location |
| <code>date?</code> | <code>string</code> | The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY : 01-01-2022) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.sunrisesunset(request)`

- **OnSuccess**: <code>[V1SunrisesunsetResponse](src/models/v1-sunrisesunset-response.ts)</code>
- **OnError**: throws <code>[Weather.SunrisesunsetError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.sunrisesunset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1SunrisesunsetResponse, Weather.SunrisesunsetError&gt;</code>, with `result.value` of type <code>[V1SunrisesunsetResponse](src/models/v1-sunrisesunset-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>weatherforecast(request: Weather.WeatherforecastRequest, options?: RequestOptions): ApiPromise&lt;V1WeatherforecastResponse, Weather.WeatherforecastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current weather for a given location

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.weatherforecast({ city: "San Francisco" });
  // TODO: Handle 'response' of type V1WeatherforecastResponse
} catch (err) {
  // TODO: Handle 'err' of type Weather.WeatherforecastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.weatherforecast({ city: "San Francisco" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WeatherforecastResponse
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
| <code>city</code> | <code>string</code> | The city for which you want to get the current weather (e.g., San Francisco) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.weatherforecast(request)`

- **OnSuccess**: <code>[V1WeatherforecastResponse](src/models/v1-weatherforecast-response.ts)</code>
- **OnError**: throws <code>[Weather.WeatherforecastError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.weatherforecast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WeatherforecastResponse, Weather.WeatherforecastError&gt;</code>, with `result.value` of type <code>[V1WeatherforecastResponse](src/models/v1-weatherforecast-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>weatherseasons(request?: Weather.WeatherseasonsRequest, options?: RequestOptions): ApiPromise&lt;V1WeatherseasonsResponse, Weather.WeatherseasonsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the dates of the solstice and equinox for a given year

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.weather.weatherseasons({ year: 2024 });
  // TODO: Handle 'response' of type V1WeatherseasonsResponse
} catch (err) {
  // TODO: Handle 'err' of type Weather.WeatherseasonsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.weather.weatherseasons({ year: 2024 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WeatherseasonsResponse
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
| <code>year?</code> | <code>number</code> | The year to get the dates of the solstice and equinox |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.weather.weatherseasons(request)`

- **OnSuccess**: <code>[V1WeatherseasonsResponse](src/models/v1-weatherseasons-response.ts)</code>
- **OnError**: throws <code>[Weather.WeatherseasonsError](src/resources/weather.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.weather.weatherseasons(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WeatherseasonsResponse, Weather.WeatherseasonsError&gt;</code>, with `result.value` of type <code>[V1WeatherseasonsResponse](src/models/v1-weatherseasons-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ApiVerveError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

