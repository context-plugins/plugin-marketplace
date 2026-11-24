# Reference

> Source: [GoogleTranslateClient](src/client.ts)

<details>
<summary><code>translateProjectsDetectLanguage(request: GoogleTranslateClient.TranslateProjectsDetectLanguageRequest, options?: RequestOptions): ApiPromise&lt;DetectLanguageResponse, GoogleTranslateClient.TranslateProjectsDetectLanguageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the language of text within a request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsDetectLanguage({
    projectsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type DetectLanguageResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsDetectLanguageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsDetectLanguage({ projectsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DetectLanguageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[DetectLanguageRequest](src/models/detect-language-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsDetectLanguage(request)`

- **OnSuccess**: <code>[DetectLanguageResponse](src/models/detect-language-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsDetectLanguageError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsDetectLanguage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DetectLanguageResponse, GoogleTranslateClient.TranslateProjectsDetectLanguageError&gt;</code>, with `result.value` of type <code>[DetectLanguageResponse](src/models/detect-language-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsGetSupportedLanguages(request: GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesRequest, options?: RequestOptions): ApiPromise&lt;SupportedLanguages, GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of supported languages for translation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsGetSupportedLanguages({ projectsId: "some example string" });
  // TODO: Handle 'response' of type SupportedLanguages
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsGetSupportedLanguages({ projectsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportedLanguages
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>displayLanguageCode?</code> | <code>string</code> | Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response. |
| <code>model?</code> | <code>string</code> | Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsGetSupportedLanguages(request)`

- **OnSuccess**: <code>[SupportedLanguages](src/models/supported-languages.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsGetSupportedLanguages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportedLanguages, GoogleTranslateClient.TranslateProjectsGetSupportedLanguagesError&gt;</code>, with `result.value` of type <code>[SupportedLanguages](src/models/supported-languages.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListRequest, options?: RequestOptions): ApiPromise&lt;ListAdaptiveMtSentencesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtSentences under a given file/dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList({
      projectsId: "some example string",
      locationsId: "some example string",
      adaptiveMtDatasetsId: "some example string",
      adaptiveMtFilesId: "some example string",
    });
  // TODO: Handle 'response' of type ListAdaptiveMtSentencesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
    adaptiveMtFilesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAdaptiveMtSentencesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>adaptiveMtDatasetsId</code> | <code>string</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>adaptiveMtFilesId</code> | <code>string</code> | Resource name segment (adaptiveMtFilesId). |
| <code>pageSize?</code> | <code>number</code> | - |
| <code>pageToken?</code> | <code>string</code> | A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(request)`

- **OnSuccess**: <code>[ListAdaptiveMtSentencesResponse](src/models/list-adaptive-mt-sentences-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAdaptiveMtSentencesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesAdaptiveMtSentencesListError&gt;</code>, with `result.value` of type <code>[ListAdaptiveMtSentencesResponse](src/models/list-adaptive-mt-sentences-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an AdaptiveMtFile along with its sentences.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
    adaptiveMtFilesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
    adaptiveMtFilesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>adaptiveMtDatasetsId</code> | <code>string</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>adaptiveMtFilesId</code> | <code>string</code> | Resource name segment (adaptiveMtFilesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetRequest, options?: RequestOptions): ApiPromise&lt;AdaptiveMtFile, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets and AdaptiveMtFile

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
    adaptiveMtFilesId: "some example string",
  });
  // TODO: Handle 'response' of type AdaptiveMtFile
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
    adaptiveMtFilesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdaptiveMtFile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>adaptiveMtDatasetsId</code> | <code>string</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>adaptiveMtFilesId</code> | <code>string</code> | Resource name segment (adaptiveMtFilesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(request)`

- **OnSuccess**: <code>[AdaptiveMtFile](src/models/adaptive-mt-file.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdaptiveMtFile, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesGetError&gt;</code>, with `result.value` of type <code>[AdaptiveMtFile](src/models/adaptive-mt-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListRequest, options?: RequestOptions): ApiPromise&lt;ListAdaptiveMtFilesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
  });
  // TODO: Handle 'response' of type ListAdaptiveMtFilesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAdaptiveMtFilesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>adaptiveMtDatasetsId</code> | <code>string</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. |
| <code>pageToken?</code> | <code>string</code> | Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(request)`

- **OnSuccess**: <code>[ListAdaptiveMtFilesResponse](src/models/list-adaptive-mt-files-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAdaptiveMtFilesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtFilesListError&gt;</code>, with `result.value` of type <code>[ListAdaptiveMtFilesResponse](src/models/list-adaptive-mt-files-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListRequest, options?: RequestOptions): ApiPromise&lt;ListAdaptiveMtSentencesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all AdaptiveMtSentences under a given file/dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
  });
  // TODO: Handle 'response' of type ListAdaptiveMtSentencesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAdaptiveMtSentencesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>adaptiveMtDatasetsId</code> | <code>string</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>pageSize?</code> | <code>number</code> | - |
| <code>pageToken?</code> | <code>string</code> | A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(request)`

- **OnSuccess**: <code>[ListAdaptiveMtSentencesResponse](src/models/list-adaptive-mt-sentences-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAdaptiveMtSentencesResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsAdaptiveMtSentencesListError&gt;</code>, with `result.value` of type <code>[ListAdaptiveMtSentencesResponse](src/models/list-adaptive-mt-sentences-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsCreate(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateRequest, options?: RequestOptions): ApiPromise&lt;AdaptiveMtDataset, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Adaptive MT dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type AdaptiveMtDataset
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdaptiveMtDataset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[AdaptiveMtDataset](src/models/adaptive-mt-dataset.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsCreate(request)`

- **OnSuccess**: <code>[AdaptiveMtDataset](src/models/adaptive-mt-dataset.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdaptiveMtDataset, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsCreateError&gt;</code>, with `result.value` of type <code>[AdaptiveMtDataset](src/models/adaptive-mt-dataset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsDelete(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Adaptive MT dataset, including all its entries and associated metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>adaptiveMtDatasetsId</code> | <code>string</code> | Resource name segment (adaptiveMtDatasetsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsGet(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetRequest, options?: RequestOptions): ApiPromise&lt;AdaptiveMtDataset, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the Adaptive MT dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
  });
  // TODO: Handle 'response' of type AdaptiveMtDataset
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdaptiveMtDataset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>adaptiveMtDatasetsId</code> | <code>string</code> | Resource name segment (adaptiveMtDatasetsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsGet(request)`

- **OnSuccess**: <code>[AdaptiveMtDataset](src/models/adaptive-mt-dataset.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdaptiveMtDataset, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsGetError&gt;</code>, with `result.value` of type <code>[AdaptiveMtDataset](src/models/adaptive-mt-dataset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileRequest, options?: RequestOptions): ApiPromise&lt;ImportAdaptiveMtFileResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ImportAdaptiveMtFileResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile({
    projectsId: "some example string",
    locationsId: "some example string",
    adaptiveMtDatasetsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ImportAdaptiveMtFileResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>adaptiveMtDatasetsId</code> | <code>string</code> | Resource name segment (adaptiveMtDatasetsId). |
| <code>body</code> | <code>[ImportAdaptiveMtFileRequest](src/models/import-adaptive-mt-file-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(request)`

- **OnSuccess**: <code>[ImportAdaptiveMtFileResponse](src/models/import-adaptive-mt-file-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ImportAdaptiveMtFileResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsImportAdaptiveMtFileError&gt;</code>, with `result.value` of type <code>[ImportAdaptiveMtFileResponse](src/models/import-adaptive-mt-file-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtDatasetsList(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListRequest, options?: RequestOptions): ApiPromise&lt;ListAdaptiveMtDatasetsResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all Adaptive MT datasets for which the caller has read permission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtDatasetsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListAdaptiveMtDatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtDatasetsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListAdaptiveMtDatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | Optional. An expression for filtering the results of the request. Filter is not supported yet. |
| <code>pageSize?</code> | <code>number</code> | Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default. |
| <code>pageToken?</code> | <code>string</code> | Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or missing. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtDatasetsList(request)`

- **OnSuccess**: <code>[ListAdaptiveMtDatasetsResponse](src/models/list-adaptive-mt-datasets-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtDatasetsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListAdaptiveMtDatasetsResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtDatasetsListError&gt;</code>, with `result.value` of type <code>[ListAdaptiveMtDatasetsResponse](src/models/list-adaptive-mt-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsAdaptiveMtTranslate(request: GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateRequest, options?: RequestOptions): ApiPromise&lt;AdaptiveMtTranslateResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translate text using Adaptive MT.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsAdaptiveMtTranslate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type AdaptiveMtTranslateResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsAdaptiveMtTranslate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdaptiveMtTranslateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[AdaptiveMtTranslateRequest](src/models/adaptive-mt-translate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsAdaptiveMtTranslate(request)`

- **OnSuccess**: <code>[AdaptiveMtTranslateResponse](src/models/adaptive-mt-translate-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsAdaptiveMtTranslate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdaptiveMtTranslateResponse, GoogleTranslateClient.TranslateProjectsLocationsAdaptiveMtTranslateError&gt;</code>, with `result.value` of type <code>[AdaptiveMtTranslateResponse](src/models/adaptive-mt-translate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsBatchTranslateDocument(request: GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsBatchTranslateDocument({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsBatchTranslateDocument({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[BatchTranslateDocumentRequest](src/models/batch-translate-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsBatchTranslateDocument(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsBatchTranslateDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateDocumentError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsBatchTranslateText(request: GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsBatchTranslateText({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsBatchTranslateText({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[BatchTranslateTextRequest](src/models/batch-translate-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsBatchTranslateText(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsBatchTranslateText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsBatchTranslateTextError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsDatasetsCreate(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsDatasetsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsDatasetsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Dataset](src/models/dataset.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsDatasetsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsDatasetsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsDatasetsDelete(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a dataset and all of its contents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsDatasetsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsDatasetsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>datasetsId</code> | <code>string</code> | Resource name segment (datasetsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsDatasetsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsDatasetsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsDatasetsExamplesList(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListRequest, options?: RequestOptions): ApiPromise&lt;ListExamplesResponse, GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists sentence pairs in the dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsDatasetsExamplesList({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
  });
  // TODO: Handle 'response' of type ListExamplesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsDatasetsExamplesList({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListExamplesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>datasetsId</code> | <code>string</code> | Resource name segment (datasetsId). |
| <code>filter?</code> | <code>string</code> | Optional. An expression for filtering the examples that will be returned. Example filter: * `usage=TRAIN` |
| <code>pageSize?</code> | <code>number</code> | Optional. Requested page size. The server can return fewer results than requested. |
| <code>pageToken?</code> | <code>string</code> | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsDatasetsExamplesList(request)`

- **OnSuccess**: <code>[ListExamplesResponse](src/models/list-examples-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsDatasetsExamplesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListExamplesResponse, GoogleTranslateClient.TranslateProjectsLocationsDatasetsExamplesListError&gt;</code>, with `result.value` of type <code>[ListExamplesResponse](src/models/list-examples-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsDatasetsExportData(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports dataset's data to the provided output location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsDatasetsExportData({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsDatasetsExportData({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>datasetsId</code> | <code>string</code> | Resource name segment (datasetsId). |
| <code>body</code> | <code>[ExportDataRequest](src/models/export-data-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsDatasetsExportData(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsDatasetsExportData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsExportDataError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsDatasetsGet(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetRequest, options?: RequestOptions): ApiPromise&lt;Dataset, GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a Dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsDatasetsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
  });
  // TODO: Handle 'response' of type Dataset
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsDatasetsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Dataset
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>datasetsId</code> | <code>string</code> | Resource name segment (datasetsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsDatasetsGet(request)`

- **OnSuccess**: <code>[Dataset](src/models/dataset.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsDatasetsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Dataset, GoogleTranslateClient.TranslateProjectsLocationsDatasetsGetError&gt;</code>, with `result.value` of type <code>[Dataset](src/models/dataset.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsDatasetsImportData(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import sentence pairs into translation Dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsDatasetsImportData({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsDatasetsImportData({
    projectsId: "some example string",
    locationsId: "some example string",
    datasetsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>datasetsId</code> | <code>string</code> | Resource name segment (datasetsId). |
| <code>body</code> | <code>[ImportDataRequest](src/models/import-data-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsDatasetsImportData(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsDatasetsImportData(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsDatasetsImportDataError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsDatasetsList(request: GoogleTranslateClient.TranslateProjectsLocationsDatasetsListRequest, options?: RequestOptions): ApiPromise&lt;ListDatasetsResponse, GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists datasets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsDatasetsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListDatasetsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsDatasetsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDatasetsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Requested page size. The server can return fewer results than requested. |
| <code>pageToken?</code> | <code>string</code> | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListDatasets call. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsDatasetsList(request)`

- **OnSuccess**: <code>[ListDatasetsResponse](src/models/list-datasets-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsDatasetsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDatasetsResponse, GoogleTranslateClient.TranslateProjectsLocationsDatasetsListError&gt;</code>, with `result.value` of type <code>[ListDatasetsResponse](src/models/list-datasets-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsDetectLanguage(request: GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageRequest, options?: RequestOptions): ApiPromise&lt;DetectLanguageResponse, GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the language of text within a request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsDetectLanguage({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type DetectLanguageResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsDetectLanguage({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DetectLanguageResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[DetectLanguageRequest](src/models/detect-language-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsDetectLanguage(request)`

- **OnSuccess**: <code>[DetectLanguageResponse](src/models/detect-language-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsDetectLanguage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DetectLanguageResponse, GoogleTranslateClient.TranslateProjectsLocationsDetectLanguageError&gt;</code>, with `result.value` of type <code>[DetectLanguageResponse](src/models/detect-language-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGet(request: GoogleTranslateClient.TranslateProjectsLocationsGetRequest, options?: RequestOptions): ApiPromise&lt;Location, GoogleTranslateClient.TranslateProjectsLocationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type Location
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGet({ projectsId: "some example string", locationsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Location
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGet(request)`

- **OnSuccess**: <code>[Location](src/models/location.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Location, GoogleTranslateClient.TranslateProjectsLocationsGetError&gt;</code>, with `result.value` of type <code>[Location](src/models/location.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGetSupportedLanguages(request: GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesRequest, options?: RequestOptions): ApiPromise&lt;SupportedLanguages, GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of supported languages for translation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGetSupportedLanguages({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type SupportedLanguages
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGetSupportedLanguages({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SupportedLanguages
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>displayLanguageCode?</code> | <code>string</code> | Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response. |
| <code>model?</code> | <code>string</code> | Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGetSupportedLanguages(request)`

- **OnSuccess**: <code>[SupportedLanguages](src/models/supported-languages.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGetSupportedLanguages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SupportedLanguages, GoogleTranslateClient.TranslateProjectsLocationsGetSupportedLanguagesError&gt;</code>, with `result.value` of type <code>[SupportedLanguages](src/models/supported-languages.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesCreate(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Glossary](src/models/glossary.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesDelete(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>glossariesId</code> | <code>string</code> | Resource name segment (glossariesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesGet(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetRequest, options?: RequestOptions): ApiPromise&lt;Glossary, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
  });
  // TODO: Handle 'response' of type Glossary
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Glossary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>glossariesId</code> | <code>string</code> | Resource name segment (glossariesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesGet(request)`

- **OnSuccess**: <code>[Glossary](src/models/glossary.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Glossary, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGetError&gt;</code>, with `result.value` of type <code>[Glossary](src/models/glossary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesGlossaryEntriesCreate(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest, options?: RequestOptions): ApiPromise&lt;GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a glossary entry.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesGlossaryEntriesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GlossaryEntry
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesGlossaryEntriesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GlossaryEntry
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>glossariesId</code> | <code>string</code> | Resource name segment (glossariesId). |
| <code>body</code> | <code>[GlossaryEntry](src/models/glossary-entry.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesCreate(request)`

- **OnSuccess**: <code>[GlossaryEntry](src/models/glossary-entry.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateError&gt;</code>, with `result.value` of type <code>[GlossaryEntry](src/models/glossary-entry.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesGlossaryEntriesDelete(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single entry from the glossary

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesGlossaryEntriesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    glossaryEntriesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesGlossaryEntriesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    glossaryEntriesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>glossariesId</code> | <code>string</code> | Resource name segment (glossariesId). |
| <code>glossaryEntriesId</code> | <code>string</code> | Resource name segment (glossaryEntriesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesGlossaryEntriesGet(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetRequest, options?: RequestOptions): ApiPromise&lt;GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a single glossary entry by the given id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesGlossaryEntriesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    glossaryEntriesId: "some example string",
  });
  // TODO: Handle 'response' of type GlossaryEntry
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesGlossaryEntriesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    glossaryEntriesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GlossaryEntry
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>glossariesId</code> | <code>string</code> | Resource name segment (glossariesId). |
| <code>glossaryEntriesId</code> | <code>string</code> | Resource name segment (glossaryEntriesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesGet(request)`

- **OnSuccess**: <code>[GlossaryEntry](src/models/glossary-entry.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesGetError&gt;</code>, with `result.value` of type <code>[GlossaryEntry](src/models/glossary-entry.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesGlossaryEntriesList(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest, options?: RequestOptions): ApiPromise&lt;ListGlossaryEntriesResponse, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the entries for the glossary.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesGlossaryEntriesList({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
  });
  // TODO: Handle 'response' of type ListGlossaryEntriesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesGlossaryEntriesList({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListGlossaryEntriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>glossariesId</code> | <code>string</code> | Resource name segment (glossariesId). |
| <code>pageSize?</code> | <code>number</code> | Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default. |
| <code>pageToken?</code> | <code>string</code> | Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if `page_token`is empty or missing. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesList(request)`

- **OnSuccess**: <code>[ListGlossaryEntriesResponse](src/models/list-glossary-entries-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListGlossaryEntriesResponse, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesListError&gt;</code>, with `result.value` of type <code>[ListGlossaryEntriesResponse](src/models/list-glossary-entries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesGlossaryEntriesPatch(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest, options?: RequestOptions): ApiPromise&lt;GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a glossary entry.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesGlossaryEntriesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    glossaryEntriesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type GlossaryEntry
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesGlossaryEntriesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    glossaryEntriesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GlossaryEntry
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>glossariesId</code> | <code>string</code> | Resource name segment (glossariesId). |
| <code>glossaryEntriesId</code> | <code>string</code> | Resource name segment (glossaryEntriesId). |
| <code>body</code> | <code>[GlossaryEntry](src/models/glossary-entry.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesPatch(request)`

- **OnSuccess**: <code>[GlossaryEntry](src/models/glossary-entry.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesGlossaryEntriesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GlossaryEntry, GoogleTranslateClient.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchError&gt;</code>, with `result.value` of type <code>[GlossaryEntry](src/models/glossary-entry.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesList(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesListRequest, options?: RequestOptions): ApiPromise&lt;ListGlossariesResponse, GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListGlossariesResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListGlossariesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed. |
| <code>pageSize?</code> | <code>number</code> | Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default. |
| <code>pageToken?</code> | <code>string</code> | Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesList(request)`

- **OnSuccess**: <code>[ListGlossariesResponse](src/models/list-glossaries-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListGlossariesResponse, GoogleTranslateClient.TranslateProjectsLocationsGlossariesListError&gt;</code>, with `result.value` of type <code>[ListGlossariesResponse](src/models/list-glossaries-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsGlossariesPatch(request: GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsGlossariesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsGlossariesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    glossariesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>glossariesId</code> | <code>string</code> | Resource name segment (glossariesId). |
| <code>updateMask?</code> | <code>string</code> | The list of fields to be updated. Currently, only `display_name` and `input_config` are supported. |
| <code>body</code> | <code>[Glossary](src/models/glossary.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsGlossariesPatch(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsGlossariesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsGlossariesPatchError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsList(request: GoogleTranslateClient.TranslateProjectsLocationsListRequest, options?: RequestOptions): ApiPromise&lt;ListLocationsResponse, GoogleTranslateClient.TranslateProjectsLocationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsList({ projectsId: "some example string" });
  // TODO: Handle 'response' of type ListLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsList({ projectsId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLocationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>extraLocationTypes?</code> | <code>string[]</code> | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| <code>filter?</code> | <code>string</code> | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| <code>pageSize?</code> | <code>number</code> | The maximum number of results to return. If not set, the service selects a default. |
| <code>pageToken?</code> | <code>string</code> | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsList(request)`

- **OnSuccess**: <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationsResponse, GoogleTranslateClient.TranslateProjectsLocationsListError&gt;</code>, with `result.value` of type <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsModelsCreate(request: GoogleTranslateClient.TranslateProjectsLocationsModelsCreateRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsModelsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsModelsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[Model](src/models/model.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsModelsCreate(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsModelsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsModelsCreateError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsModelsDelete(request: GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsModelsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    modelsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsModelsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    modelsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>modelsId</code> | <code>string</code> | Resource name segment (modelsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsModelsDelete(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsModelsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsModelsDeleteError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsModelsGet(request: GoogleTranslateClient.TranslateProjectsLocationsModelsGetRequest, options?: RequestOptions): ApiPromise&lt;Model, GoogleTranslateClient.TranslateProjectsLocationsModelsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsModelsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    modelsId: "some example string",
  });
  // TODO: Handle 'response' of type Model
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsModelsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsModelsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    modelsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Model
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>modelsId</code> | <code>string</code> | Resource name segment (modelsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsModelsGet(request)`

- **OnSuccess**: <code>[Model](src/models/model.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsModelsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsModelsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Model, GoogleTranslateClient.TranslateProjectsLocationsModelsGetError&gt;</code>, with `result.value` of type <code>[Model](src/models/model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsModelsList(request: GoogleTranslateClient.TranslateProjectsLocationsModelsListRequest, options?: RequestOptions): ApiPromise&lt;ListModelsResponse, GoogleTranslateClient.TranslateProjectsLocationsModelsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists models.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsModelsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListModelsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsModelsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsModelsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListModelsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}` |
| <code>pageSize?</code> | <code>number</code> | Optional. Requested page size. The server can return fewer results than requested. |
| <code>pageToken?</code> | <code>string</code> | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsModelsList(request)`

- **OnSuccess**: <code>[ListModelsResponse](src/models/list-models-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsModelsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsModelsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListModelsResponse, GoogleTranslateClient.TranslateProjectsLocationsModelsListError&gt;</code>, with `result.value` of type <code>[ListModelsResponse](src/models/list-models-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsOperationsCancel(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsOperationsCancel({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsOperationsCancel(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsOperationsCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsOperationsCancelError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsOperationsDelete(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsOperationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsOperationsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsOperationsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsOperationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, GoogleTranslateClient.TranslateProjectsLocationsOperationsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsOperationsGet(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsOperationsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsOperationsList(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsListRequest, options?: RequestOptions): ApiPromise&lt;ListOperationsResponse, GoogleTranslateClient.TranslateProjectsLocationsOperationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsOperationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsOperationsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListOperationsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>filter?</code> | <code>string</code> | The standard list filter. |
| <code>pageSize?</code> | <code>number</code> | The standard list page size. |
| <code>pageToken?</code> | <code>string</code> | The standard list page token. |
| <code>returnPartialSuccess?</code> | <code>boolean</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsOperationsList(request)`

- **OnSuccess**: <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsOperationsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsOperationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOperationsResponse, GoogleTranslateClient.TranslateProjectsLocationsOperationsListError&gt;</code>, with `result.value` of type <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsOperationsWait(request: GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitRequest, options?: RequestOptions): ApiPromise&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsOperationsWait({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsOperationsWait({
    projectsId: "some example string",
    locationsId: "some example string",
    operationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Operation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |
| <code>body</code> | <code>[WaitOperationRequest](src/models/wait-operation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsOperationsWait(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsOperationsWait(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, GoogleTranslateClient.TranslateProjectsLocationsOperationsWaitError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsRefineText(request: GoogleTranslateClient.TranslateProjectsLocationsRefineTextRequest, options?: RequestOptions): ApiPromise&lt;RefineTextResponse, GoogleTranslateClient.TranslateProjectsLocationsRefineTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refines the input translated text to improve the quality.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsRefineText({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type RefineTextResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsRefineTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsRefineText({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefineTextResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[RefineTextRequest](src/models/refine-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsRefineText(request)`

- **OnSuccess**: <code>[RefineTextResponse](src/models/refine-text-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsRefineTextError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsRefineText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefineTextResponse, GoogleTranslateClient.TranslateProjectsLocationsRefineTextError&gt;</code>, with `result.value` of type <code>[RefineTextResponse](src/models/refine-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsRomanizeText(request: GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextRequest, options?: RequestOptions): ApiPromise&lt;RomanizeTextResponse, GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Romanize input text written in non-Latin scripts to Latin text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsRomanizeText({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type RomanizeTextResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsRomanizeText({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RomanizeTextResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[RomanizeTextRequest](src/models/romanize-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsRomanizeText(request)`

- **OnSuccess**: <code>[RomanizeTextResponse](src/models/romanize-text-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsRomanizeText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RomanizeTextResponse, GoogleTranslateClient.TranslateProjectsLocationsRomanizeTextError&gt;</code>, with `result.value` of type <code>[RomanizeTextResponse](src/models/romanize-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsTranslateDocument(request: GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentRequest, options?: RequestOptions): ApiPromise&lt;TranslateDocumentResponse, GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates documents in synchronous mode.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsTranslateDocument({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TranslateDocumentResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsTranslateDocument({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TranslateDocumentResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[TranslateDocumentRequest](src/models/translate-document-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsTranslateDocument(request)`

- **OnSuccess**: <code>[TranslateDocumentResponse](src/models/translate-document-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsTranslateDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TranslateDocumentResponse, GoogleTranslateClient.TranslateProjectsLocationsTranslateDocumentError&gt;</code>, with `result.value` of type <code>[TranslateDocumentResponse](src/models/translate-document-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsLocationsTranslateText(request: GoogleTranslateClient.TranslateProjectsLocationsTranslateTextRequest, options?: RequestOptions): ApiPromise&lt;TranslateTextResponse, GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates input text and returns translated text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsLocationsTranslateText({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TranslateTextResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsLocationsTranslateText({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TranslateTextResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>locationsId</code> | <code>string</code> | Resource name segment (locationsId). |
| <code>body</code> | <code>[TranslateTextRequest](src/models/translate-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsLocationsTranslateText(request)`

- **OnSuccess**: <code>[TranslateTextResponse](src/models/translate-text-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsLocationsTranslateText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TranslateTextResponse, GoogleTranslateClient.TranslateProjectsLocationsTranslateTextError&gt;</code>, with `result.value` of type <code>[TranslateTextResponse](src/models/translate-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsRomanizeText(request: GoogleTranslateClient.TranslateProjectsRomanizeTextRequest, options?: RequestOptions): ApiPromise&lt;RomanizeTextResponse, GoogleTranslateClient.TranslateProjectsRomanizeTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Romanize input text written in non-Latin scripts to Latin text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsRomanizeText({
    projectsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type RomanizeTextResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsRomanizeTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsRomanizeText({ projectsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RomanizeTextResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[RomanizeTextRequest](src/models/romanize-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsRomanizeText(request)`

- **OnSuccess**: <code>[RomanizeTextResponse](src/models/romanize-text-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsRomanizeTextError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsRomanizeText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RomanizeTextResponse, GoogleTranslateClient.TranslateProjectsRomanizeTextError&gt;</code>, with `result.value` of type <code>[RomanizeTextResponse](src/models/romanize-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>translateProjectsTranslateText(request: GoogleTranslateClient.TranslateProjectsTranslateTextRequest, options?: RequestOptions): ApiPromise&lt;TranslateTextResponse, GoogleTranslateClient.TranslateProjectsTranslateTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Translates input text and returns translated text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.translateProjectsTranslateText({
    projectsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type TranslateTextResponse
} catch (err) {
  // TODO: Handle 'err' of type GoogleTranslateClient.TranslateProjectsTranslateTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .translateProjectsTranslateText({ projectsId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TranslateTextResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectsId</code> | <code>string</code> | Resource name segment (projectsId). |
| <code>body</code> | <code>[TranslateTextRequest](src/models/translate-text-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.translateProjectsTranslateText(request)`

- **OnSuccess**: <code>[TranslateTextResponse](src/models/translate-text-response.ts)</code>
- **OnError**: throws <code>[GoogleTranslateClient.TranslateProjectsTranslateTextError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.translateProjectsTranslateText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TranslateTextResponse, GoogleTranslateClient.TranslateProjectsTranslateTextError&gt;</code>, with `result.value` of type <code>[TranslateTextResponse](src/models/translate-text-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleTranslateError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

