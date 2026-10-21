# Reference

> Source: [AnalyzeApiBetaClient](src/client.ts)

## Analysis

> Source: [Analysis](src/resources/analysis.ts)

<details>
<summary><code>analyzeAiVisionGeneral(request: Analysis.AnalyzeAiVisionGeneralRequestParams, options?: RequestOptions): ApiPromise&lt;AnalyzeAiVisionGeneralResponse | null, Analysis.AnalyzeAiVisionGeneralError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The General mode serves a wide array of applications by providing detailed answers to diverse questions about an image. Users can inquire about any aspect of an image, such as identifying objects, understanding scenes, or interpreting text within the image.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeAiVisionGeneral({
    body: {
      source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" },
      prompts: ["Describe this image in detail", "Does this image contain an insect?"],
    },
  });
  // TODO: Handle 'response' of type AnalyzeAiVisionGeneralResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeAiVisionGeneralError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeAiVisionGeneral({
  body: {
    source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" },
    prompts: ["Describe this image in detail", "Does this image contain an insect?"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeAiVisionGeneralResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AnalyzeAiVisionGeneralRequest](src/models/analyze-ai-vision-general-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeAiVisionGeneral(request)`

- **OnSuccess**: <code>[AnalyzeAiVisionGeneralResponse](src/models/analyze-ai-vision-general-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeAiVisionGeneralError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeAiVisionGeneral(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeAiVisionGeneralResponse, Analysis.AnalyzeAiVisionGeneralError&gt;</code>, with `result.value` of type <code>[AnalyzeAiVisionGeneralResponse](src/models/analyze-ai-vision-general-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeAiVisionModeration(request: Analysis.AnalyzeAiVisionModerationRequestParams, options?: RequestOptions): ApiPromise&lt;AnalyzeAiVisionModerationResponse | null, Analysis.AnalyzeAiVisionModerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Moderation mode accepts multiple questions about an image, to which the response provides concise answers of "yes," "no," or "unknown." This functionality allows for a nuanced evaluation of whether the image adheres to specific content policies, creative specs, or aesthetic criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeAiVisionModeration({
    body: {
      source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" },
      rejectionQuestions: [
        "Does this image contain any violent activity?",
        "Is there any nudity in the image?",
      ],
    },
  });
  // TODO: Handle 'response' of type AnalyzeAiVisionModerationResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeAiVisionModerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeAiVisionModeration({
  body: {
    source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" },
    rejectionQuestions: [
      "Does this image contain any violent activity?",
      "Is there any nudity in the image?",
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeAiVisionModerationResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AnalyzeAiVisionModerationRequest](src/models/analyze-ai-vision-moderation-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeAiVisionModeration(request)`

- **OnSuccess**: <code>[AnalyzeAiVisionModerationResponse](src/models/analyze-ai-vision-moderation-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeAiVisionModerationError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeAiVisionModeration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeAiVisionModerationResponse, Analysis.AnalyzeAiVisionModerationError&gt;</code>, with `result.value` of type <code>[AnalyzeAiVisionModerationResponse](src/models/analyze-ai-vision-moderation-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeAiVisionTagging(request: Analysis.AnalyzeAiVisionTaggingRequestParams, options?: RequestOptions): ApiPromise&lt;AnalyzeAiVisionTaggingResponse | null, Analysis.AnalyzeAiVisionTaggingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The Tagging mode accepts a list of tag names along with their corresponding descriptions. If the image matches the description, which may encompass various elements, it will be appropriately tagged. This approach enables customers to align with their own brand taxonomy, offering a dynamic, flexible, and open method for image classification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeAiVisionTagging({
    body: {
      source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" },
      tagDefinitions: [
        { name: "cigarettes", description: "Does the image contain a pack of cigarettes?" },
        { name: "furniture", description: "Does the image contain any tables, chairs, couches or sofas?" },
      ],
    },
  });
  // TODO: Handle 'response' of type AnalyzeAiVisionTaggingResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeAiVisionTaggingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeAiVisionTagging({
  body: {
    source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" },
    tagDefinitions: [
      { name: "cigarettes", description: "Does the image contain a pack of cigarettes?" },
      { name: "furniture", description: "Does the image contain any tables, chairs, couches or sofas?" },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeAiVisionTaggingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AnalyzeAiVisionTaggingRequest](src/models/analyze-ai-vision-tagging-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeAiVisionTagging(request)`

- **OnSuccess**: <code>[AnalyzeAiVisionTaggingResponse](src/models/analyze-ai-vision-tagging-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeAiVisionTaggingError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeAiVisionTagging(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeAiVisionTaggingResponse, Analysis.AnalyzeAiVisionTaggingError&gt;</code>, with `result.value` of type <code>[AnalyzeAiVisionTaggingResponse](src/models/analyze-ai-vision-tagging-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeCaptioning(request: Analysis.AnalyzeCaptioningRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeCaptioningResponse | null, Analysis.AnalyzeCaptioningError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a caption for an image.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeCaptioning({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeCaptioningResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeCaptioningError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeCaptioning({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeCaptioningResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeCaptioning(request)`

- **OnSuccess**: <code>[AnalyzeCaptioningResponse](src/models/analyze-captioning-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeCaptioningError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeCaptioning(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeCaptioningResponse, Analysis.AnalyzeCaptioningError&gt;</code>, with `result.value` of type <code>[AnalyzeCaptioningResponse](src/models/analyze-captioning-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeCldFashion(request: Analysis.AnalyzeCldFashionRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeCldFashionResponse | null, Analysis.AnalyzeCldFashionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Cld-Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's fashion model is specifically dedicated to items of clothing. The response includes attributes of the clothing identified, for example whether the garment contains pockets, its material and the fastenings used.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeCldFashion({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeCldFashionResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeCldFashionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeCldFashion({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeCldFashionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeCldFashion(request)`

- **OnSuccess**: <code>[AnalyzeCldFashionResponse](src/models/analyze-cld-fashion-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeCldFashionError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeCldFashion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeCldFashionResponse, Analysis.AnalyzeCldFashionError&gt;</code>, with `result.value` of type <code>[AnalyzeCldFashionResponse](src/models/analyze-cld-fashion-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeCldText(request: Analysis.AnalyzeCldTextRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeCldTextResponse | null, Analysis.AnalyzeCldTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Cld-Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's text model tells you if your image includes text, and where it's located. Used with image tagging, you can then search for images that contain blocks of text. Used with object-aware cropping, you can choose to keep only the text part, or specify a crop that avoids the text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeCldText({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeCldTextResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeCldTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeCldText({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeCldTextResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeCldText(request)`

- **OnSuccess**: <code>[AnalyzeCldTextResponse](src/models/analyze-cld-text-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeCldTextError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeCldText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeCldTextResponse, Analysis.AnalyzeCldTextError&gt;</code>, with `result.value` of type <code>[AnalyzeCldTextResponse](src/models/analyze-cld-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeCoco(request: Analysis.AnalyzeCocoRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeCocoResponse | null, Analysis.AnalyzeCocoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Common Objects in Context](https://cocodataset.org/) model contains just 80 common objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeCoco({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeCocoResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeCocoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeCoco({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeCocoResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeCoco(request)`

- **OnSuccess**: <code>[AnalyzeCocoResponse](src/models/analyze-coco-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeCocoError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeCoco(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeCocoResponse, Analysis.AnalyzeCocoError&gt;</code>, with `result.value` of type <code>[AnalyzeCocoResponse](src/models/analyze-coco-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeGoogleLogoDetection(request: Analysis.AnalyzeGoogleLogoDetectionRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeGoogleLogoDetectionResponse | null, Analysis.AnalyzeGoogleLogoDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects popular product logos within an image.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeGoogleLogoDetection({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeGoogleLogoDetectionResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeGoogleLogoDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeGoogleLogoDetection({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeGoogleLogoDetectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeGoogleLogoDetection(request)`

- **OnSuccess**: <code>[AnalyzeGoogleLogoDetectionResponse](src/models/analyze-google-logo-detection-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeGoogleLogoDetectionError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeGoogleLogoDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeGoogleLogoDetectionResponse, Analysis.AnalyzeGoogleLogoDetectionError&gt;</code>, with `result.value` of type <code>[AnalyzeGoogleLogoDetectionResponse](src/models/analyze-google-logo-detection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeGoogleTagging(request: Analysis.AnalyzeGoogleTaggingRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeGoogleTaggingResponse | null, Analysis.AnalyzeGoogleTaggingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides tags for an image using Google's tagging service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeGoogleTagging({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeGoogleTaggingResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeGoogleTaggingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeGoogleTagging({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeGoogleTaggingResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeGoogleTagging(request)`

- **OnSuccess**: <code>[AnalyzeGoogleTaggingResponse](src/models/analyze-google-tagging-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeGoogleTaggingError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeGoogleTagging(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeGoogleTaggingResponse, Analysis.AnalyzeGoogleTaggingError&gt;</code>, with `result.value` of type <code>[AnalyzeGoogleTaggingResponse](src/models/analyze-google-tagging-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeHumanAnatomy(request: Analysis.AnalyzeHumanAnatomyRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeHumanAnatomyResponse | null, Analysis.AnalyzeHumanAnatomyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Human Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's human anatomy model identifies parts of the human body in an image. It works best when the majority of a human body is detected in the image.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeHumanAnatomy({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeHumanAnatomyResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeHumanAnatomyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeHumanAnatomy({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeHumanAnatomyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeHumanAnatomy(request)`

- **OnSuccess**: <code>[AnalyzeHumanAnatomyResponse](src/models/analyze-human-anatomy-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeHumanAnatomyError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeHumanAnatomy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeHumanAnatomyResponse, Analysis.AnalyzeHumanAnatomyError&gt;</code>, with `result.value` of type <code>[AnalyzeHumanAnatomyResponse](src/models/analyze-human-anatomy-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeImageQuality(request: Analysis.AnalyzeImageQualityRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeImageQualityResponse | null, Analysis.AnalyzeImageQualityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Image Quality Analysis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#image_quality_analysis) model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeImageQuality({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeImageQualityResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeImageQualityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeImageQuality({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeImageQualityResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeImageQuality(request)`

- **OnSuccess**: <code>[AnalyzeImageQualityResponse](src/models/analyze-image-quality-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeImageQualityError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeImageQuality(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeImageQualityResponse, Analysis.AnalyzeImageQualityError&gt;</code>, with `result.value` of type <code>[AnalyzeImageQualityResponse](src/models/analyze-image-quality-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeLvis(request: Analysis.AnalyzeLvisRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeLvisResponse | null, Analysis.AnalyzeLvisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Large Vocabulary Instance Segmentation](https://www.lvisdataset.org/) model contains thousands of general objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeLvis({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeLvisResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeLvisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeLvis({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeLvisResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeLvis(request)`

- **OnSuccess**: <code>[AnalyzeLvisResponse](src/models/analyze-lvis-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeLvisError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeLvis(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeLvisResponse, Analysis.AnalyzeLvisError&gt;</code>, with `result.value` of type <code>[AnalyzeLvisResponse](src/models/analyze-lvis-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeShopClassifier(request: Analysis.AnalyzeShopClassifierRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeShopClassifierResponse | null, Analysis.AnalyzeShopClassifierError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Shop Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's shop classifier model detects if the image is a product image taken in a studio, or if it's a natural image.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeShopClassifier({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeShopClassifierResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeShopClassifierError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeShopClassifier({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeShopClassifierResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeShopClassifier(request)`

- **OnSuccess**: <code>[AnalyzeShopClassifierResponse](src/models/analyze-shop-classifier-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeShopClassifierError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeShopClassifier(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeShopClassifierResponse, Analysis.AnalyzeShopClassifierError&gt;</code>, with `result.value` of type <code>[AnalyzeShopClassifierResponse](src/models/analyze-shop-classifier-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeUnidet(request: Analysis.AnalyzeUnidetRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeUnidetResponse | null, Analysis.AnalyzeUnidetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [UniDet](https://github.com/xingyizhou/UniDet) model is a unified model, combining a number of object models, including [Objects365](https://www.objects365.org/overview.html), which focuses on diverse objects in the wild.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeUnidet({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeUnidetResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeUnidetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeUnidet({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeUnidetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeUnidet(request)`

- **OnSuccess**: <code>[AnalyzeUnidetResponse](src/models/analyze-unidet-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeUnidetError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeUnidet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeUnidetResponse, Analysis.AnalyzeUnidetError&gt;</code>, with `result.value` of type <code>[AnalyzeUnidetResponse](src/models/analyze-unidet-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>analyzeWatermarkDetection(request: Analysis.AnalyzeWatermarkDetectionRequest, options?: RequestOptions): ApiPromise&lt;AnalyzeWatermarkDetectionResponse | null, Analysis.AnalyzeWatermarkDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyze an image using the [Watermark Detection](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#watermark_detection) detection model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analysis.analyzeWatermarkDetection({
    body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
  });
  // TODO: Handle 'response' of type AnalyzeWatermarkDetectionResponse
} catch (err) {
  // TODO: Handle 'err' of type Analysis.AnalyzeWatermarkDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analysis.analyzeWatermarkDetection({
  body: { source: { uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyzeWatermarkDetectionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BaseAnalyzeRequest](src/models/base-analyze-request.ts)</code> | A JSON object containing request parameters |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analysis.analyzeWatermarkDetection(request)`

- **OnSuccess**: <code>[AnalyzeWatermarkDetectionResponse](src/models/analyze-watermark-detection-response.ts)</code>
- **OnError**: throws <code>[Analysis.AnalyzeWatermarkDetectionError](src/resources/analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analysis.analyzeWatermarkDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyzeWatermarkDetectionResponse, Analysis.AnalyzeWatermarkDetectionError&gt;</code>, with `result.value` of type <code>[AnalyzeWatermarkDetectionResponse](src/models/analyze-watermark-detection-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/resources/tasks.ts)

<details>
<summary><code>getAnalysisTaskStatus(request: Tasks.GetAnalysisTaskStatusRequest, options?: RequestOptions): ApiPromise&lt;GetTaskStatusResponse, Tasks.GetAnalysisTaskStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of an analysis task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tasks.getAnalysisTaskStatus({
    taskId:
      "053f4bde4b933c8ecef23724ecde63b667c1ea21816d56c161c7ec1df6297da4b43109625650e9edf0f42152cc4cc32c8ad57824ac75ba8e05020f827c415559ac1248076a2d72c0a73af0479cca77eb",
  });
  // TODO: Handle 'response' of type GetTaskStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Tasks.GetAnalysisTaskStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tasks.getAnalysisTaskStatus({
  taskId:
    "053f4bde4b933c8ecef23724ecde63b667c1ea21816d56c161c7ec1df6297da4b43109625650e9edf0f42152cc4cc32c8ad57824ac75ba8e05020f827c415559ac1248076a2d72c0a73af0479cca77eb",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTaskStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskId</code> | <code>string</code> | The ID of the analysis task |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tasks.getAnalysisTaskStatus(request)`

- **OnSuccess**: <code>[GetTaskStatusResponse](src/models/get-task-status-response.ts)</code>
- **OnError**: throws <code>[Tasks.GetAnalysisTaskStatusError](src/resources/tasks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tasks.getAnalysisTaskStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTaskStatusResponse, Tasks.GetAnalysisTaskStatusError&gt;</code>, with `result.value` of type <code>[GetTaskStatusResponse](src/models/get-task-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AnalyzeApiBetaError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

