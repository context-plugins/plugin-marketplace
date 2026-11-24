# Reference

> Source: [GoogleCloudSpeechToTextClient](src/client.ts)

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>speechOperationsGet(request: Operations.SpeechOperationsGetRequest, options?: RequestOptions): ApiPromise&lt;Operation, Operations.SpeechOperationsGetError&gt;</code></summary>

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
  const response = await client.operations.speechOperationsGet({ operationsId: "some example string" });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type Operations.SpeechOperationsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .speechOperationsGet({ operationsId: "some example string" })
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
| <code>operationsId</code> | <code>string</code> | Resource name segment (operationsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.speechOperationsGet(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[Operations.SpeechOperationsGetError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.speechOperationsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, Operations.SpeechOperationsGetError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechOperationsList(request?: Operations.SpeechOperationsListRequest, options?: RequestOptions): ApiPromise&lt;ListOperationsResponse, Operations.SpeechOperationsListError&gt;</code></summary>

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
  const response = await client.operations.speechOperationsList();
  // TODO: Handle 'response' of type ListOperationsResponse
} catch (err) {
  // TODO: Handle 'err' of type Operations.SpeechOperationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations.speechOperationsList().asApiResult();
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
| <code>filter?</code> | <code>string</code> | The standard list filter. |
| <code>name?</code> | <code>string</code> | The name of the operation's parent resource. |
| <code>pageSize?</code> | <code>number</code> | The standard list page size. |
| <code>pageToken?</code> | <code>string</code> | The standard list page token. |
| <code>returnPartialSuccess?</code> | <code>boolean</code> | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.speechOperationsList(request)`

- **OnSuccess**: <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: throws <code>[Operations.SpeechOperationsListError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.speechOperationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOperationsResponse, Operations.SpeechOperationsListError&gt;</code>, with `result.value` of type <code>[ListOperationsResponse](src/models/list-operations-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>speechProjectsLocationsCustomClassesCreate(request: Projects.SpeechProjectsLocationsCustomClassesCreateRequest, options?: RequestOptions): ApiPromise&lt;CustomClass, Projects.SpeechProjectsLocationsCustomClassesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a custom class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsCustomClassesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CustomClass
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsCustomClassesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsCustomClassesCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomClass
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[CreateCustomClassRequest](src/models/create-custom-class-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsCustomClassesCreate(request)`

- **OnSuccess**: <code>[CustomClass](src/models/custom-class.ts)</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsCustomClassesCreateError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsCustomClassesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomClass, Projects.SpeechProjectsLocationsCustomClassesCreateError&gt;</code>, with `result.value` of type <code>[CustomClass](src/models/custom-class.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsCustomClassesDelete(request: Projects.SpeechProjectsLocationsCustomClassesDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Projects.SpeechProjectsLocationsCustomClassesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a custom class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsCustomClassesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    customClassesId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsCustomClassesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsCustomClassesDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    customClassesId: "some example string",
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
| <code>customClassesId</code> | <code>string</code> | Resource name segment (customClassesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsCustomClassesDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsCustomClassesDeleteError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsCustomClassesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Projects.SpeechProjectsLocationsCustomClassesDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsCustomClassesGet(request: Projects.SpeechProjectsLocationsCustomClassesGetRequest, options?: RequestOptions): ApiPromise&lt;CustomClass, Projects.SpeechProjectsLocationsCustomClassesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a custom class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsCustomClassesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    customClassesId: "some example string",
  });
  // TODO: Handle 'response' of type CustomClass
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsCustomClassesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsCustomClassesGet({
    projectsId: "some example string",
    locationsId: "some example string",
    customClassesId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomClass
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>customClassesId</code> | <code>string</code> | Resource name segment (customClassesId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsCustomClassesGet(request)`

- **OnSuccess**: <code>[CustomClass](src/models/custom-class.ts)</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsCustomClassesGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsCustomClassesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomClass, Projects.SpeechProjectsLocationsCustomClassesGetError&gt;</code>, with `result.value` of type <code>[CustomClass](src/models/custom-class.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsCustomClassesList(request: Projects.SpeechProjectsLocationsCustomClassesListRequest, options?: RequestOptions): ApiPromise&lt;ListCustomClassesResponse, Projects.SpeechProjectsLocationsCustomClassesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List custom classes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsCustomClassesList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListCustomClassesResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsCustomClassesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsCustomClassesList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCustomClassesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>pageSize?</code> | <code>number</code> | The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| <code>pageToken?</code> | <code>string</code> | A page token, received from a previous `ListCustomClass` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomClass` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsCustomClassesList(request)`

- **OnSuccess**: <code>[ListCustomClassesResponse](src/models/list-custom-classes-response.ts)</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsCustomClassesListError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsCustomClassesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCustomClassesResponse, Projects.SpeechProjectsLocationsCustomClassesListError&gt;</code>, with `result.value` of type <code>[ListCustomClassesResponse](src/models/list-custom-classes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsCustomClassesPatch(request: Projects.SpeechProjectsLocationsCustomClassesPatchRequest, options?: RequestOptions): ApiPromise&lt;CustomClass, Projects.SpeechProjectsLocationsCustomClassesPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom class.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsCustomClassesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    customClassesId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CustomClass
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsCustomClassesPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsCustomClassesPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    customClassesId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomClass
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>customClassesId</code> | <code>string</code> | Resource name segment (customClassesId). |
| <code>updateMask?</code> | <code>string</code> | The list of fields to be updated. |
| <code>body</code> | <code>[CustomClass](src/models/custom-class.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsCustomClassesPatch(request)`

- **OnSuccess**: <code>[CustomClass](src/models/custom-class.ts)</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsCustomClassesPatchError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsCustomClassesPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomClass, Projects.SpeechProjectsLocationsCustomClassesPatchError&gt;</code>, with `result.value` of type <code>[CustomClass](src/models/custom-class.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsPhraseSetsCreate(request: Projects.SpeechProjectsLocationsPhraseSetsCreateRequest, options?: RequestOptions): ApiPromise&lt;PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsPhraseSetsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type PhraseSet
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsPhraseSetsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsPhraseSetsCreate({
    projectsId: "some example string",
    locationsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PhraseSet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>body</code> | <code>[CreatePhraseSetRequest](src/models/create-phrase-set-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsPhraseSetsCreate(request)`

- **OnSuccess**: <code>[PhraseSet](src/models/phrase-set.ts)</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsPhraseSetsCreateError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsPhraseSetsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsCreateError&gt;</code>, with `result.value` of type <code>[PhraseSet](src/models/phrase-set.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsPhraseSetsDelete(request: Projects.SpeechProjectsLocationsPhraseSetsDeleteRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Projects.SpeechProjectsLocationsPhraseSetsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a phrase set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsPhraseSetsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    phraseSetsId: "some example string",
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsPhraseSetsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsPhraseSetsDelete({
    projectsId: "some example string",
    locationsId: "some example string",
    phraseSetsId: "some example string",
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
| <code>phraseSetsId</code> | <code>string</code> | Resource name segment (phraseSetsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsPhraseSetsDelete(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsPhraseSetsDeleteError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsPhraseSetsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Projects.SpeechProjectsLocationsPhraseSetsDeleteError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsPhraseSetsGet(request: Projects.SpeechProjectsLocationsPhraseSetsGetRequest, options?: RequestOptions): ApiPromise&lt;PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a phrase set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsPhraseSetsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    phraseSetsId: "some example string",
  });
  // TODO: Handle 'response' of type PhraseSet
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsPhraseSetsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsPhraseSetsGet({
    projectsId: "some example string",
    locationsId: "some example string",
    phraseSetsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PhraseSet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>phraseSetsId</code> | <code>string</code> | Resource name segment (phraseSetsId). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsPhraseSetsGet(request)`

- **OnSuccess**: <code>[PhraseSet](src/models/phrase-set.ts)</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsPhraseSetsGetError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsPhraseSetsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsGetError&gt;</code>, with `result.value` of type <code>[PhraseSet](src/models/phrase-set.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsPhraseSetsList(request: Projects.SpeechProjectsLocationsPhraseSetsListRequest, options?: RequestOptions): ApiPromise&lt;ListPhraseSetResponse, Projects.SpeechProjectsLocationsPhraseSetsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List phrase sets.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsPhraseSetsList({
    projectsId: "some example string",
    locationsId: "some example string",
  });
  // TODO: Handle 'response' of type ListPhraseSetResponse
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsPhraseSetsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsPhraseSetsList({
    projectsId: "some example string",
    locationsId: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPhraseSetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>pageSize?</code> | <code>number</code> | The maximum number of phrase sets to return. The service may return fewer than this value. If unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| <code>pageToken?</code> | <code>string</code> | A page token, received from a previous `ListPhraseSet` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPhraseSet` must match the call that provided the page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsPhraseSetsList(request)`

- **OnSuccess**: <code>[ListPhraseSetResponse](src/models/list-phrase-set-response.ts)</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsPhraseSetsListError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsPhraseSetsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPhraseSetResponse, Projects.SpeechProjectsLocationsPhraseSetsListError&gt;</code>, with `result.value` of type <code>[ListPhraseSetResponse](src/models/list-phrase-set-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechProjectsLocationsPhraseSetsPatch(request: Projects.SpeechProjectsLocationsPhraseSetsPatchRequest, options?: RequestOptions): ApiPromise&lt;PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsPatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a phrase set.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.speechProjectsLocationsPhraseSetsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    phraseSetsId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type PhraseSet
} catch (err) {
  // TODO: Handle 'err' of type Projects.SpeechProjectsLocationsPhraseSetsPatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .speechProjectsLocationsPhraseSetsPatch({
    projectsId: "some example string",
    locationsId: "some example string",
    phraseSetsId: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PhraseSet
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
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
| <code>phraseSetsId</code> | <code>string</code> | Resource name segment (phraseSetsId). |
| <code>updateMask?</code> | <code>string</code> | The list of fields to be updated. |
| <code>body</code> | <code>[PhraseSet](src/models/phrase-set.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.speechProjectsLocationsPhraseSetsPatch(request)`

- **OnSuccess**: <code>[PhraseSet](src/models/phrase-set.ts)</code>
- **OnError**: throws <code>[Projects.SpeechProjectsLocationsPhraseSetsPatchError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.speechProjectsLocationsPhraseSetsPatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsPatchError&gt;</code>, with `result.value` of type <code>[PhraseSet](src/models/phrase-set.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Speech

> Source: [Speech](src/resources/speech.ts)

<details>
<summary><code>speechSpeechLongrunningrecognize(request: Speech.SpeechSpeechLongrunningrecognizeRequest, options?: RequestOptions): ApiPromise&lt;Operation, Speech.SpeechSpeechLongrunningrecognizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the how-to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.speech.speechSpeechLongrunningrecognize({ body: {} });
  // TODO: Handle 'response' of type Operation
} catch (err) {
  // TODO: Handle 'err' of type Speech.SpeechSpeechLongrunningrecognizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.speech.speechSpeechLongrunningrecognize({ body: {} }).asApiResult();
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
| <code>body</code> | <code>[LongRunningRecognizeRequest](src/models/long-running-recognize-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.speech.speechSpeechLongrunningrecognize(request)`

- **OnSuccess**: <code>[Operation](src/models/operation.ts)</code>
- **OnError**: throws <code>[Speech.SpeechSpeechLongrunningrecognizeError](src/resources/speech.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.speech.speechSpeechLongrunningrecognize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Operation, Speech.SpeechSpeechLongrunningrecognizeError&gt;</code>, with `result.value` of type <code>[Operation](src/models/operation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>speechSpeechRecognize(request: Speech.SpeechSpeechRecognizeRequest, options?: RequestOptions): ApiPromise&lt;RecognizeResponse, Speech.SpeechSpeechRecognizeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.speech.speechSpeechRecognize({ body: {} });
  // TODO: Handle 'response' of type RecognizeResponse
} catch (err) {
  // TODO: Handle 'err' of type Speech.SpeechSpeechRecognizeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.speech.speechSpeechRecognize({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RecognizeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecognizeRequest](src/models/recognize-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.speech.speechSpeechRecognize(request)`

- **OnSuccess**: <code>[RecognizeResponse](src/models/recognize-response.ts)</code>
- **OnError**: throws <code>[Speech.SpeechSpeechRecognizeError](src/resources/speech.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.speech.speechSpeechRecognize(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RecognizeResponse, Speech.SpeechSpeechRecognizeError&gt;</code>, with `result.value` of type <code>[RecognizeResponse](src/models/recognize-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleCloudSpeechToTextError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

