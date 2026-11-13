# Reference

> Source: [ShortcutApiClient](src/client.ts)

<details>
<summary><code>createCategory(request: ShortcutApiClient.CreateCategoryRequest, options?: RequestOptions): ApiPromise&lt;Category, ShortcutApiClient.CreateCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Category allows you to create a new Category in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createCategory({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Category
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createCategory({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCategory](src/models/create-category.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createCategory(request)`

- **OnSuccess**: <code>[Category](src/models/category.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateCategoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category, ShortcutApiClient.CreateCategoryError&gt;</code>, with `result.value` of type <code>[Category](src/models/category.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDoc(request: ShortcutApiClient.CreateDocRequest, options?: RequestOptions): ApiPromise&lt;DocSlim, ShortcutApiClient.CreateDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Doc. Supports markdown or HTML input via content_format parameter. WARNING: if content_format is not supplied, `content` input defaults to html.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createDoc({
    body: { title: "some example string", content: "some example string" },
  });
  // TODO: Handle 'response' of type DocSlim
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createDoc({ body: { title: "some example string", content: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocSlim
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateDoc](src/models/create-doc.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createDoc(request)`

- **OnSuccess**: <code>[DocSlim](src/models/doc-slim.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateDocError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocSlim, ShortcutApiClient.CreateDocError&gt;</code>, with `result.value` of type <code>[DocSlim](src/models/doc-slim.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEntityTemplate(request: ShortcutApiClient.CreateEntityTemplateRequest, options?: RequestOptions): ApiPromise&lt;EntityTemplate, ShortcutApiClient.CreateEntityTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new entity template for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createEntityTemplate({
    body: { name: "some example string", storyContents: {} },
  });
  // TODO: Handle 'response' of type EntityTemplate
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateEntityTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createEntityTemplate({ body: { name: "some example string", storyContents: {} } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityTemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateEntityTemplate](src/models/create-entity-template.ts)</code> | Request parameters for creating an entirely new entity template. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createEntityTemplate(request)`

- **OnSuccess**: <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateEntityTemplateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createEntityTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityTemplate, ShortcutApiClient.CreateEntityTemplateError&gt;</code>, with `result.value` of type <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEpic(request: ShortcutApiClient.CreateEpicRequest, options?: RequestOptions): ApiPromise&lt;Epic, ShortcutApiClient.CreateEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Epic allows you to create a new Epic in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createEpic({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Epic
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createEpic({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Epic
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateEpic](src/models/create-epic.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createEpic(request)`

- **OnSuccess**: <code>[Epic](src/models/epic.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateEpicError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Epic, ShortcutApiClient.CreateEpicError&gt;</code>, with `result.value` of type <code>[Epic](src/models/epic.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEpicComment(request: ShortcutApiClient.CreateEpicCommentRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment, ShortcutApiClient.CreateEpicCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a threaded Comment on an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createEpicComment({ epicPublicId: 1, body: { text: "some example string" } });
  // TODO: Handle 'response' of type ThreadedComment
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateEpicCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createEpicComment({ epicPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>body</code> | <code>[CreateEpicComment](src/models/create-epic-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createEpicComment(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateEpicCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createEpicComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment, ShortcutApiClient.CreateEpicCommentError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEpicCommentComment(request: ShortcutApiClient.CreateEpicCommentCommentRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment, ShortcutApiClient.CreateEpicCommentCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createEpicCommentComment({
    epicPublicId: 1,
    commentPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type ThreadedComment
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateEpicCommentCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createEpicCommentComment({ epicPublicId: 1, commentPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the parent Epic Comment. |
| <code>body</code> | <code>[CreateCommentComment](src/models/create-comment-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createEpicCommentComment(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateEpicCommentCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createEpicCommentComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment, ShortcutApiClient.CreateEpicCommentCommentError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEpicHealth(request: ShortcutApiClient.CreateEpicHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, ShortcutApiClient.CreateEpicHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new health status for the specified Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createEpicHealth({ epicPublicId: 1, body: { status: Status.AtRisk } });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateEpicHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createEpicHealth({ epicPublicId: 1, body: { status: Status.AtRisk } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |
| <code>body</code> | <code>[CreateEpicHealth](src/models/create-epic-health.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createEpicHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateEpicHealthError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createEpicHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, ShortcutApiClient.CreateEpicHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGenericIntegration(request: ShortcutApiClient.CreateGenericIntegrationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.CreateGenericIntegrationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.createGenericIntegration({ body: { webhookUrl: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateGenericIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createGenericIntegration({ body: { webhookUrl: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateGenericIntegration](src/models/create-generic-integration.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createGenericIntegration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateGenericIntegrationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createGenericIntegration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.CreateGenericIntegrationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGroup(request: ShortcutApiClient.CreateGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, ShortcutApiClient.CreateGroupError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createGroup({
    body: { mentionName: "some example string", name: "some example string" },
  });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createGroup({ body: { mentionName: "some example string", name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateGroup](src/models/create-group.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateGroupError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, ShortcutApiClient.CreateGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createIteration(request: ShortcutApiClient.CreateIterationRequest, options?: RequestOptions): ApiPromise&lt;Iteration, ShortcutApiClient.CreateIterationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createIteration({
    body: { name: "some example string", startDate: "some example string", endDate: "some example string" },
  });
  // TODO: Handle 'response' of type Iteration
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createIteration({
    body: { name: "some example string", startDate: "some example string", endDate: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Iteration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateIteration](src/models/create-iteration.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createIteration(request)`

- **OnSuccess**: <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateIterationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Iteration, ShortcutApiClient.CreateIterationError&gt;</code>, with `result.value` of type <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLabel(request: ShortcutApiClient.CreateLabelRequest, options?: RequestOptions): ApiPromise&lt;Label, ShortcutApiClient.CreateLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Label allows you to create a new Label in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createLabel({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Label
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createLabel({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLabelParams](src/models/create-label-params.ts)</code> | Request parameters for creating a Label on a Shortcut Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createLabel(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateLabelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label, ShortcutApiClient.CreateLabelError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLinkedFile(request: ShortcutApiClient.CreateLinkedFileRequest, options?: RequestOptions): ApiPromise&lt;LinkedFile, ShortcutApiClient.CreateLinkedFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Linked File allows you to create a new Linked File in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createLinkedFile({
    body: { name: "some example string", type: Type1.Google, url: "some example string" },
  });
  // TODO: Handle 'response' of type LinkedFile
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateLinkedFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createLinkedFile({ body: { name: "some example string", type: Type1.Google, url: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedFile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLinkedFile](src/models/create-linked-file.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createLinkedFile(request)`

- **OnSuccess**: <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateLinkedFileError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createLinkedFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedFile, ShortcutApiClient.CreateLinkedFileError&gt;</code>, with `result.value` of type <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMilestone(request: ShortcutApiClient.CreateMilestoneRequest, options?: RequestOptions): ApiPromise&lt;Milestone, ShortcutApiClient.CreateMilestoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createMilestone({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Milestone
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateMilestoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createMilestone({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateMilestone](src/models/create-milestone.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createMilestone(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateMilestoneError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createMilestone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone, ShortcutApiClient.CreateMilestoneError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMultipleStories(request: ShortcutApiClient.CreateMultipleStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.CreateMultipleStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createMultipleStories({
    body: { stories: [{ name: "some example string" }] },
  });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateMultipleStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createMultipleStories({ body: { stories: [{ name: "some example string" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStories](src/models/create-stories.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createMultipleStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateMultipleStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createMultipleStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.CreateMultipleStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createObjective(request: ShortcutApiClient.CreateObjectiveRequest, options?: RequestOptions): ApiPromise&lt;Objective, ShortcutApiClient.CreateObjectiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Objective allows you to create a new Objective in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createObjective({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Objective
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateObjectiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createObjective({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Objective
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateObjective](src/models/create-objective.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createObjective(request)`

- **OnSuccess**: <code>[Objective](src/models/objective.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateObjectiveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createObjective(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Objective, ShortcutApiClient.CreateObjectiveError&gt;</code>, with `result.value` of type <code>[Objective](src/models/objective.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createObjectiveHealth(request: ShortcutApiClient.CreateObjectiveHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, ShortcutApiClient.CreateObjectiveHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new health status for the specified Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createObjectiveHealth({
    objectivePublicId: 1,
    body: { status: Status1.AtRisk },
  });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateObjectiveHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createObjectiveHealth({ objectivePublicId: 1, body: { status: Status1.AtRisk } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectivePublicId</code> | <code>number</code> | The unique ID of the Objective. |
| <code>body</code> | <code>[CreateObjectiveHealth](src/models/create-objective-health.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createObjectiveHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateObjectiveHealthError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createObjectiveHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, ShortcutApiClient.CreateObjectiveHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createProject(request: ShortcutApiClient.CreateProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, ShortcutApiClient.CreateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Project is used to create a new Shortcut Project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createProject({ body: { name: "some example string", teamId: 1 } });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createProject({ body: { name: "some example string", teamId: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateProject](src/models/create-project.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateProjectError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, ShortcutApiClient.CreateProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStory(request: ShortcutApiClient.CreateStoryRequest, options?: RequestOptions): ApiPromise&lt;Story, ShortcutApiClient.CreateStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Story is used to add a new story to your Shortcut Workspace.
    This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createStory({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Story
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createStory({ body: { name: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Story
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStoryParams](src/models/create-story-params.ts)</code> | Request parameters for creating a story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createStory(request)`

- **OnSuccess**: <code>[Story](src/models/story.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateStoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Story, ShortcutApiClient.CreateStoryError&gt;</code>, with `result.value` of type <code>[Story](src/models/story.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStoryComment(request: ShortcutApiClient.CreateStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;StoryComment, ShortcutApiClient.CreateStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Comment allows you to create a Comment on any Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createStoryComment({
    storyPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type StoryComment
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createStoryComment({ storyPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>body</code> | <code>[CreateStoryComment](src/models/create-story-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createStoryComment(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateStoryCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment, ShortcutApiClient.CreateStoryCommentError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStoryFromTemplate(request: ShortcutApiClient.CreateStoryFromTemplateRequest, options?: RequestOptions): ApiPromise&lt;Story, ShortcutApiClient.CreateStoryFromTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createStoryFromTemplate({
    body: { storyTemplateId: "00000000-0000-0000-0000-000000000000" },
  });
  // TODO: Handle 'response' of type Story
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateStoryFromTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createStoryFromTemplate({ body: { storyTemplateId: "00000000-0000-0000-0000-000000000000" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Story
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStoryFromTemplateParams](src/models/create-story-from-template-params.ts)</code> | Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createStoryFromTemplate(request)`

- **OnSuccess**: <code>[Story](src/models/story.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateStoryFromTemplateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createStoryFromTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Story, ShortcutApiClient.CreateStoryFromTemplateError&gt;</code>, with `result.value` of type <code>[Story](src/models/story.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStoryLink(request: ShortcutApiClient.CreateStoryLinkRequest, options?: RequestOptions): ApiPromise&lt;StoryLink, ShortcutApiClient.CreateStoryLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object.

The subject story acts on the object Story; the object story is the direct object of the sentence.

The subject story "blocks", "duplicates", or "relates to" the object story.  Examples:
- "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state.
- "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived).
- "story 7 relates to story 3”

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createStoryLink({ body: { verb: Verb1.Blocks, subjectId: 1, objectId: 1 } });
  // TODO: Handle 'response' of type StoryLink
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateStoryLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createStoryLink({ body: { verb: Verb1.Blocks, subjectId: 1, objectId: 1 } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateStoryLink](src/models/create-story-link.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createStoryLink(request)`

- **OnSuccess**: <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateStoryLinkError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createStoryLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryLink, ShortcutApiClient.CreateStoryLinkError&gt;</code>, with `result.value` of type <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStoryReaction(request: ShortcutApiClient.CreateStoryReactionRequest, options?: RequestOptions): ApiPromise&lt;StoryReaction[], ShortcutApiClient.CreateStoryReactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reaction to a story comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createStoryReaction({
    storyPublicId: 1,
    commentPublicId: 1,
    body: { emoji: "some example string" },
  });
  // TODO: Handle 'response' of type StoryReaction[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateStoryReactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createStoryReaction({ storyPublicId: 1, commentPublicId: 1, body: { emoji: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryReaction[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |
| <code>body</code> | <code>[CreateOrDeleteStoryReaction](src/models/create-or-delete-story-reaction.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createStoryReaction(request)`

- **OnSuccess**: <code>[StoryReaction](src/models/story-reaction.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateStoryReactionError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createStoryReaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryReaction[], ShortcutApiClient.CreateStoryReactionError&gt;</code>, with `result.value` of type <code>[StoryReaction](src/models/story-reaction.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTask(request: ShortcutApiClient.CreateTaskRequest, options?: RequestOptions): ApiPromise&lt;Task, ShortcutApiClient.CreateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Task is used to create a new task in a Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createTask({
    storyPublicId: 1,
    body: { description: "some example string" },
  });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.CreateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .createTask({ storyPublicId: 1, body: { description: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Task will be in. |
| <code>body</code> | <code>[CreateTask](src/models/create-task.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createTask(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.CreateTaskError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, ShortcutApiClient.CreateTaskError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCategory(request: ShortcutApiClient.DeleteCategoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Category can be used to delete any Category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteCategory({ categoryPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteCategory({ categoryPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteCategory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteCategoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteCategoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomField(request: ShortcutApiClient.DeleteCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteCustomField({ customFieldPublicId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .deleteCustomField({ customFieldPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldPublicId</code> | <code>string</code> | The unique ID of the CustomField. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteCustomField(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteCustomFieldError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteCustomFieldError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDoc(request: ShortcutApiClient.DeleteDocRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is deleted, connected clients will be notified via SSE events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteDoc({ docPublicId: "00000000-0000-0000-0000-000000000000", body: {} });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .deleteDoc({ docPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docPublicId</code> | <code>string</code> | The Doc's public ID |
| <code>body</code> | <code>[GetDoc](src/models/get-doc.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteDoc(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteDocError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteDocError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEntityTemplate(request: ShortcutApiClient.DeleteEntityTemplateRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteEntityTemplateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteEntityTemplate({ entityTemplatePublicId: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteEntityTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .deleteEntityTemplate({ entityTemplatePublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityTemplatePublicId</code> | <code>string</code> | The unique ID of the entity template. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteEntityTemplate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteEntityTemplateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteEntityTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteEntityTemplateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEpic(request: ShortcutApiClient.DeleteEpicRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteEpic({ epicPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteEpic({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteEpic(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteEpicError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteEpicError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEpicComment(request: ShortcutApiClient.DeleteEpicCommentRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteEpicCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to delete a Comment from an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteEpicComment({ epicPublicId: 1, commentPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteEpicCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteEpicComment({ epicPublicId: 1, commentPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteEpicComment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteEpicCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteEpicComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteEpicCommentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFile(request: ShortcutApiClient.DeleteFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete File deletes a previously uploaded file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteFile({ filePublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteFile({ filePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filePublicId</code> | <code>number</code> | The File’s unique ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteFileError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGenericIntegration(request: ShortcutApiClient.DeleteGenericIntegrationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteGenericIntegrationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteGenericIntegration({ integrationPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteGenericIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteGenericIntegration({ integrationPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>integrationPublicId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteGenericIntegration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteGenericIntegrationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteGenericIntegration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteGenericIntegrationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteIteration(request: ShortcutApiClient.DeleteIterationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteIterationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteIteration({ iterationPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteIteration({ iterationPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iterationPublicId</code> | <code>number</code> | The unique ID of the Iteration. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteIteration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteIterationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteIterationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLabel(request: ShortcutApiClient.DeleteLabelRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Label can be used to delete any Label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteLabel({ labelPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteLabel({ labelPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteLabel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteLabelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteLabelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLinkedFile(request: ShortcutApiClient.DeleteLinkedFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteLinkedFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Linked File can be used to delete any previously attached Linked-File.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteLinkedFile({ linkedFilePublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteLinkedFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteLinkedFile({ linkedFilePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linkedFilePublicId</code> | <code>number</code> | The unique identifier of the linked file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteLinkedFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteLinkedFileError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteLinkedFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteLinkedFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMilestone(request: ShortcutApiClient.DeleteMilestoneRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteMilestoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteMilestone({ milestonePublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteMilestoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteMilestone({ milestonePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestonePublicId</code> | <code>number</code> | The ID of the Milestone. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteMilestone(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteMilestoneError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteMilestone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteMilestoneError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMultipleStories(request: ShortcutApiClient.DeleteMultipleStoriesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteMultipleStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Multiple Stories allows you to delete multiple archived stories at once.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteMultipleStories({ body: { storyIds: [1] } });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteMultipleStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteMultipleStories({ body: { storyIds: [1] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteStories](src/models/delete-stories.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteMultipleStories(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteMultipleStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteMultipleStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteMultipleStoriesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteObjective(request: ShortcutApiClient.DeleteObjectiveRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteObjectiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Objective can be used to delete any Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteObjective({ objectivePublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteObjectiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteObjective({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectivePublicId</code> | <code>number</code> | The ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteObjective(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteObjectiveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteObjective(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteObjectiveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProject(request: ShortcutApiClient.DeleteProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteProject({ projectPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteProject({ projectPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectPublicId</code> | <code>number</code> | The unique ID of the Project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteProjectError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStory(request: ShortcutApiClient.DeleteStoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Story can be used to delete any Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteStory({ storyPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteStory({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteStory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteStoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteStoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStoryComment(request: ShortcutApiClient.DeleteStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Comment from any story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteStoryComment({ storyPublicId: 1, commentPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteStoryComment({ storyPublicId: 1, commentPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteStoryComment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteStoryCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteStoryCommentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStoryLink(request: ShortcutApiClient.DeleteStoryLinkRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteStoryLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the relationship between the stories for the given Story Link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteStoryLink({ storyLinkPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteStoryLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteStoryLink({ storyLinkPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyLinkPublicId</code> | <code>number</code> | The unique ID of the Story Link. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteStoryLink(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteStoryLinkError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteStoryLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteStoryLinkError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStoryReaction(request: ShortcutApiClient.DeleteStoryReactionRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteStoryReactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a reaction from any story comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteStoryReaction({
    storyPublicId: 1,
    commentPublicId: 1,
    body: { emoji: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteStoryReactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .deleteStoryReaction({ storyPublicId: 1, commentPublicId: 1, body: { emoji: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |
| <code>body</code> | <code>[CreateOrDeleteStoryReaction](src/models/create-or-delete-story-reaction.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteStoryReaction(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteStoryReactionError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteStoryReaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteStoryReactionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTask(request: ShortcutApiClient.DeleteTaskRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DeleteTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete Task can be used to delete any previously created Task on a Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deleteTask({ storyPublicId: 1, taskPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DeleteTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deleteTask({ storyPublicId: 1, taskPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The unique ID of the Story this Task is associated with. |
| <code>taskPublicId</code> | <code>number</code> | The unique ID of the Task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deleteTask(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DeleteTaskError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deleteTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DeleteTaskError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableIterations(options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DisableIterationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables Iterations for the current workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.disableIterations();
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DisableIterationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disableIterations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disableIterations()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DisableIterationsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disableIterations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DisableIterationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableStoryTemplates(options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.DisableStoryTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables the Story Template feature for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.disableStoryTemplates();
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.DisableStoryTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disableStoryTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disableStoryTemplates()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.DisableStoryTemplatesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disableStoryTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.DisableStoryTemplatesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableIterations(options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.EnableIterationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables Iterations for the current workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.enableIterations();
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.EnableIterationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enableIterations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enableIterations()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.EnableIterationsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enableIterations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.EnableIterationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableStoryTemplates(options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.EnableStoryTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables the Story Template feature for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.enableStoryTemplates();
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.EnableStoryTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.enableStoryTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.enableStoryTemplates()`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.EnableStoryTemplatesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.enableStoryTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.EnableStoryTemplatesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategory(request: ShortcutApiClient.GetCategoryRequest, options?: RequestOptions): ApiPromise&lt;Category, ShortcutApiClient.GetCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Category returns information about the selected Category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getCategory({ categoryPublicId: 1 });
  // TODO: Handle 'response' of type Category
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getCategory({ categoryPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getCategory(request)`

- **OnSuccess**: <code>[Category](src/models/category.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetCategoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category, ShortcutApiClient.GetCategoryError&gt;</code>, with `result.value` of type <code>[Category](src/models/category.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCurrentMemberInfo(options?: RequestOptions): ApiPromise&lt;MemberInfo, ShortcutApiClient.GetCurrentMemberInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the authenticated member.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getCurrentMemberInfo();
  // TODO: Handle 'response' of type MemberInfo
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetCurrentMemberInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getCurrentMemberInfo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MemberInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getCurrentMemberInfo()`

- **OnSuccess**: <code>[MemberInfo](src/models/member-info.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetCurrentMemberInfoError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getCurrentMemberInfo().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MemberInfo, ShortcutApiClient.GetCurrentMemberInfoError&gt;</code>, with `result.value` of type <code>[MemberInfo](src/models/member-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomField(request: ShortcutApiClient.GetCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomField, ShortcutApiClient.GetCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getCustomField({
    customFieldPublicId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type CustomField
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .getCustomField({ customFieldPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomField
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldPublicId</code> | <code>string</code> | The unique ID of the CustomField. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getCustomField(request)`

- **OnSuccess**: <code>[CustomField](src/models/custom-field.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetCustomFieldError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomField, ShortcutApiClient.GetCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomField](src/models/custom-field.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDoc(request: ShortcutApiClient.GetDocRequest, options?: RequestOptions): ApiPromise&lt;Doc, ShortcutApiClient.GetDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getDoc({ docPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Doc
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getDoc({ docPublicId: "00000000-0000-0000-0000-000000000000" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Doc
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docPublicId</code> | <code>string</code> | The Doc's public ID |
| <code>contentFormat?</code> | <code>[ContentFormat3](src/models/content-format3.ts)</code> | Default content_format: markdown. Format of the content to return. If 'html', includes HTML content in response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getDoc(request)`

- **OnSuccess**: <code>[Doc](src/models/doc.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetDocError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Doc, ShortcutApiClient.GetDocError&gt;</code>, with `result.value` of type <code>[Doc](src/models/doc.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEntityTemplate(request: ShortcutApiClient.GetEntityTemplateRequest, options?: RequestOptions): ApiPromise&lt;EntityTemplate, ShortcutApiClient.GetEntityTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Entity Template returns information about a given entity template.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getEntityTemplate({
    entityTemplatePublicId: "00000000-0000-0000-0000-000000000000",
  });
  // TODO: Handle 'response' of type EntityTemplate
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetEntityTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .getEntityTemplate({ entityTemplatePublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityTemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityTemplatePublicId</code> | <code>string</code> | The unique ID of the entity template. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getEntityTemplate(request)`

- **OnSuccess**: <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetEntityTemplateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getEntityTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityTemplate, ShortcutApiClient.GetEntityTemplateError&gt;</code>, with `result.value` of type <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEpic(request: ShortcutApiClient.GetEpicRequest, options?: RequestOptions): ApiPromise&lt;Epic, ShortcutApiClient.GetEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Epic returns information about the selected Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getEpic({ epicPublicId: 1 });
  // TODO: Handle 'response' of type Epic
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getEpic({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Epic
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getEpic(request)`

- **OnSuccess**: <code>[Epic](src/models/epic.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetEpicError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Epic, ShortcutApiClient.GetEpicError&gt;</code>, with `result.value` of type <code>[Epic](src/models/epic.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEpicComment(request: ShortcutApiClient.GetEpicCommentRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment, ShortcutApiClient.GetEpicCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns information about the selected Epic Comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getEpicComment({ epicPublicId: 1, commentPublicId: 1 });
  // TODO: Handle 'response' of type ThreadedComment
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetEpicCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getEpicComment({ epicPublicId: 1, commentPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getEpicComment(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetEpicCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getEpicComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment, ShortcutApiClient.GetEpicCommentError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEpicHealth(request: ShortcutApiClient.GetEpicHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, ShortcutApiClient.GetEpicHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health for the specified Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getEpicHealth({ epicPublicId: 1 });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetEpicHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getEpicHealth({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getEpicHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetEpicHealthError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getEpicHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, ShortcutApiClient.GetEpicHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEpicWorkflow(options?: RequestOptions): ApiPromise&lt;EpicWorkflow, ShortcutApiClient.GetEpicWorkflowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Epic Workflow for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getEpicWorkflow();
  // TODO: Handle 'response' of type EpicWorkflow
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetEpicWorkflowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getEpicWorkflow().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicWorkflow
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getEpicWorkflow()`

- **OnSuccess**: <code>[EpicWorkflow](src/models/epic-workflow.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetEpicWorkflowError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getEpicWorkflow().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicWorkflow, ShortcutApiClient.GetEpicWorkflowError&gt;</code>, with `result.value` of type <code>[EpicWorkflow](src/models/epic-workflow.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getExternalLinkStories(request: ShortcutApiClient.GetExternalLinkStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.GetExternalLinkStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Stories which have a given External Link associated with them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getExternalLinkStories({ externalLink: "some example string" });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetExternalLinkStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getExternalLinkStories({ externalLink: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>externalLink</code> | <code>string</code> | The external link associated with one or more stories. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getExternalLinkStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.GetExternalLinkStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getExternalLinkStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.GetExternalLinkStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFile(request: ShortcutApiClient.GetFileRequest, options?: RequestOptions): ApiPromise&lt;UploadedFile, ShortcutApiClient.GetFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get File returns information about the selected UploadedFile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getFile({ filePublicId: 1 });
  // TODO: Handle 'response' of type UploadedFile
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getFile({ filePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadedFile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filePublicId</code> | <code>number</code> | The File’s unique ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getFile(request)`

- **OnSuccess**: <code>[UploadedFile](src/models/uploaded-file.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetFileError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadedFile, ShortcutApiClient.GetFileError&gt;</code>, with `result.value` of type <code>[UploadedFile](src/models/uploaded-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGenericIntegration(request: ShortcutApiClient.GetGenericIntegrationRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.GetGenericIntegrationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.getGenericIntegration({ integrationPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetGenericIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getGenericIntegration({ integrationPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>integrationPublicId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getGenericIntegration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.GetGenericIntegrationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getGenericIntegration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.GetGenericIntegrationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroup(request: ShortcutApiClient.GetGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, ShortcutApiClient.GetGroupError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getGroup({ groupPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getGroup({ groupPublicId: "00000000-0000-0000-0000-000000000000" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupPublicId</code> | <code>string</code> | The unique ID of the Group. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetGroupError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, ShortcutApiClient.GetGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getIteration(request: ShortcutApiClient.GetIterationRequest, options?: RequestOptions): ApiPromise&lt;Iteration, ShortcutApiClient.GetIterationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getIteration({ iterationPublicId: 1 });
  // TODO: Handle 'response' of type Iteration
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getIteration({ iterationPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Iteration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iterationPublicId</code> | <code>number</code> | The unique ID of the Iteration. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getIteration(request)`

- **OnSuccess**: <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetIterationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Iteration, ShortcutApiClient.GetIterationError&gt;</code>, with `result.value` of type <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getKeyResult(request: ShortcutApiClient.GetKeyResultRequest, options?: RequestOptions): ApiPromise&lt;KeyResult, ShortcutApiClient.GetKeyResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Key Result returns information about a chosen Key Result.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getKeyResult({ keyResultPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type KeyResult
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetKeyResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .getKeyResult({ keyResultPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KeyResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyResultPublicId</code> | <code>string</code> | The ID of the Key Result. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getKeyResult(request)`

- **OnSuccess**: <code>[KeyResult](src/models/key-result.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetKeyResultError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getKeyResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KeyResult, ShortcutApiClient.GetKeyResultError&gt;</code>, with `result.value` of type <code>[KeyResult](src/models/key-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLabel(request: ShortcutApiClient.GetLabelRequest, options?: RequestOptions): ApiPromise&lt;Label, ShortcutApiClient.GetLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Label returns information about the selected Label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getLabel({ labelPublicId: 1 });
  // TODO: Handle 'response' of type Label
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getLabel({ labelPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getLabel(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetLabelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label, ShortcutApiClient.GetLabelError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLinkedFile(request: ShortcutApiClient.GetLinkedFileRequest, options?: RequestOptions): ApiPromise&lt;LinkedFile, ShortcutApiClient.GetLinkedFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get File returns information about the selected Linked File.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getLinkedFile({ linkedFilePublicId: 1 });
  // TODO: Handle 'response' of type LinkedFile
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetLinkedFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getLinkedFile({ linkedFilePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedFile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linkedFilePublicId</code> | <code>number</code> | The unique identifier of the linked file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getLinkedFile(request)`

- **OnSuccess**: <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetLinkedFileError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getLinkedFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedFile, ShortcutApiClient.GetLinkedFileError&gt;</code>, with `result.value` of type <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMember(request: ShortcutApiClient.GetMemberRequest, options?: RequestOptions): ApiPromise&lt;Member, ShortcutApiClient.GetMemberError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a Member.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getMember({ memberPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type Member
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetMemberError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .getMember({ memberPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Member
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>memberPublicId</code> | <code>string</code> | The Member's unique ID. |
| <code>orgPublicId?</code> | <code>string</code> | The unique ID of the Organization to limit the lookup to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getMember(request)`

- **OnSuccess**: <code>[Member](src/models/member.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetMemberError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Member, ShortcutApiClient.GetMemberError&gt;</code>, with `result.value` of type <code>[Member](src/models/member.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMilestone(request: ShortcutApiClient.GetMilestoneRequest, options?: RequestOptions): ApiPromise&lt;Milestone, ShortcutApiClient.GetMilestoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getMilestone({ milestonePublicId: 1 });
  // TODO: Handle 'response' of type Milestone
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetMilestoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getMilestone({ milestonePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestonePublicId</code> | <code>number</code> | The ID of the Milestone. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getMilestone(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetMilestoneError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getMilestone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone, ShortcutApiClient.GetMilestoneError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getObjective(request: ShortcutApiClient.GetObjectiveRequest, options?: RequestOptions): ApiPromise&lt;Objective, ShortcutApiClient.GetObjectiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Objective returns information about a chosen Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getObjective({ objectivePublicId: 1 });
  // TODO: Handle 'response' of type Objective
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetObjectiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getObjective({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Objective
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectivePublicId</code> | <code>number</code> | The ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getObjective(request)`

- **OnSuccess**: <code>[Objective](src/models/objective.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetObjectiveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getObjective(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Objective, ShortcutApiClient.GetObjectiveError&gt;</code>, with `result.value` of type <code>[Objective](src/models/objective.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getObjectiveHealth(request: ShortcutApiClient.GetObjectiveHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, ShortcutApiClient.GetObjectiveHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current health for the specified Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getObjectiveHealth({ objectivePublicId: 1 });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetObjectiveHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getObjectiveHealth({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectivePublicId</code> | <code>number</code> | The unique ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getObjectiveHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetObjectiveHealthError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getObjectiveHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, ShortcutApiClient.GetObjectiveHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProject(request: ShortcutApiClient.GetProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, ShortcutApiClient.GetProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Project returns information about the selected Project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getProject({ projectPublicId: 1 });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getProject({ projectPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectPublicId</code> | <code>number</code> | The unique ID of the Project. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetProjectError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, ShortcutApiClient.GetProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRepository(request: ShortcutApiClient.GetRepositoryRequest, options?: RequestOptions): ApiPromise&lt;Repository, ShortcutApiClient.GetRepositoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Repository returns information about the selected Repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getRepository({ repoPublicId: 1 });
  // TODO: Handle 'response' of type Repository
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetRepositoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getRepository({ repoPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Repository
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repoPublicId</code> | <code>number</code> | The unique ID of the Repository. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getRepository(request)`

- **OnSuccess**: <code>[Repository](src/models/repository.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetRepositoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getRepository(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Repository, ShortcutApiClient.GetRepositoryError&gt;</code>, with `result.value` of type <code>[Repository](src/models/repository.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStory(request: ShortcutApiClient.GetStoryRequest, options?: RequestOptions): ApiPromise&lt;Story, ShortcutApiClient.GetStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Story returns information about a chosen Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getStory({ storyPublicId: 1 });
  // TODO: Handle 'response' of type Story
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getStory({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Story
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getStory(request)`

- **OnSuccess**: <code>[Story](src/models/story.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetStoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Story, ShortcutApiClient.GetStoryError&gt;</code>, with `result.value` of type <code>[Story](src/models/story.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoryComment(request: ShortcutApiClient.GetStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;StoryComment, ShortcutApiClient.GetStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Comment is used to get Comment information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getStoryComment({ storyPublicId: 1, commentPublicId: 1 });
  // TODO: Handle 'response' of type StoryComment
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getStoryComment({ storyPublicId: 1, commentPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getStoryComment(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetStoryCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment, ShortcutApiClient.GetStoryCommentError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getStoryLink(request: ShortcutApiClient.GetStoryLinkRequest, options?: RequestOptions): ApiPromise&lt;StoryLink, ShortcutApiClient.GetStoryLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the stories and their relationship for the given Story Link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getStoryLink({ storyLinkPublicId: 1 });
  // TODO: Handle 'response' of type StoryLink
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetStoryLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getStoryLink({ storyLinkPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyLinkPublicId</code> | <code>number</code> | The unique ID of the Story Link. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getStoryLink(request)`

- **OnSuccess**: <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetStoryLinkError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getStoryLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryLink, ShortcutApiClient.GetStoryLinkError&gt;</code>, with `result.value` of type <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTask(request: ShortcutApiClient.GetTaskRequest, options?: RequestOptions): ApiPromise&lt;Task, ShortcutApiClient.GetTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a chosen Task.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getTask({ storyPublicId: 1, taskPublicId: 1 });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getTask({ storyPublicId: 1, taskPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The unique ID of the Story this Task is associated with. |
| <code>taskPublicId</code> | <code>number</code> | The unique ID of the Task. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getTask(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetTaskError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, ShortcutApiClient.GetTaskError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWorkflow(request: ShortcutApiClient.GetWorkflowRequest, options?: RequestOptions): ApiPromise&lt;Workflow, ShortcutApiClient.GetWorkflowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Workflow returns information about a chosen Workflow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getWorkflow({ workflowPublicId: 1 });
  // TODO: Handle 'response' of type Workflow
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.GetWorkflowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getWorkflow({ workflowPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Workflow
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workflowPublicId</code> | <code>number</code> | The ID of the Workflow. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getWorkflow(request)`

- **OnSuccess**: <code>[Workflow](src/models/workflow.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.GetWorkflowError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getWorkflow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Workflow, ShortcutApiClient.GetWorkflowError&gt;</code>, with `result.value` of type <code>[Workflow](src/models/workflow.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkDocumentToEpic(request: ShortcutApiClient.LinkDocumentToEpicRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.LinkDocumentToEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a relationship between a Document and an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.linkDocumentToEpic({ docPublicId: "00000000-0000-0000-0000-000000000000", epicPublicId: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.LinkDocumentToEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .linkDocumentToEpic({ docPublicId: "00000000-0000-0000-0000-000000000000", epicPublicId: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docPublicId</code> | <code>string</code> | The public ID of the Document. |
| <code>epicPublicId</code> | <code>number</code> | The public ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkDocumentToEpic(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.LinkDocumentToEpicError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkDocumentToEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.LinkDocumentToEpicError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategories(options?: RequestOptions): ApiPromise&lt;Category[], ShortcutApiClient.ListCategoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Categories returns a list of all Categories and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listCategories();
  // TODO: Handle 'response' of type Category[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListCategoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listCategories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listCategories()`

- **OnSuccess**: <code>[Category](src/models/category.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListCategoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listCategories().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category[], ShortcutApiClient.ListCategoriesError&gt;</code>, with `result.value` of type <code>[Category](src/models/category.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategoryMilestones(request: ShortcutApiClient.ListCategoryMilestonesRequest, options?: RequestOptions): ApiPromise&lt;Milestone[], ShortcutApiClient.ListCategoryMilestonesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Category Milestones returns a list of all Milestones with the Category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listCategoryMilestones({ categoryPublicId: 1 });
  // TODO: Handle 'response' of type Milestone[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListCategoryMilestonesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listCategoryMilestones({ categoryPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listCategoryMilestones(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListCategoryMilestonesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listCategoryMilestones(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone[], ShortcutApiClient.ListCategoryMilestonesError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategoryObjectives(request: ShortcutApiClient.ListCategoryObjectivesRequest, options?: RequestOptions): ApiPromise&lt;Milestone[], ShortcutApiClient.ListCategoryObjectivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Objectives with the Category.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listCategoryObjectives({ categoryPublicId: 1 });
  // TODO: Handle 'response' of type Milestone[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListCategoryObjectivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listCategoryObjectives({ categoryPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listCategoryObjectives(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListCategoryObjectivesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listCategoryObjectives(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone[], ShortcutApiClient.ListCategoryObjectivesError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomFields(options?: RequestOptions): ApiPromise&lt;CustomField[], ShortcutApiClient.ListCustomFieldsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listCustomFields();
  // TODO: Handle 'response' of type CustomField[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListCustomFieldsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listCustomFields().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomField[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listCustomFields()`

- **OnSuccess**: <code>[CustomField](src/models/custom-field.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListCustomFieldsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listCustomFields().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomField[], ShortcutApiClient.ListCustomFieldsError&gt;</code>, with `result.value` of type <code>[CustomField](src/models/custom-field.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocs(options?: RequestOptions): ApiPromise&lt;DocSlim[], ShortcutApiClient.ListDocsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Docs returns a list of Doc that the current user can read.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listDocs();
  // TODO: Handle 'response' of type DocSlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListDocsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listDocs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listDocs()`

- **OnSuccess**: <code>[DocSlim](src/models/doc-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListDocsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listDocs().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocSlim[], ShortcutApiClient.ListDocsError&gt;</code>, with `result.value` of type <code>[DocSlim](src/models/doc-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocumentEpics(request: ShortcutApiClient.ListDocumentEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], ShortcutApiClient.ListDocumentEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Epics related to this Document.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listDocumentEpics({ docPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListDocumentEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .listDocumentEpics({ docPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docPublicId</code> | <code>string</code> | The public ID of the Document. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listDocumentEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListDocumentEpicsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listDocumentEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], ShortcutApiClient.ListDocumentEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEntityTemplates(options?: RequestOptions): ApiPromise&lt;EntityTemplate[], ShortcutApiClient.ListEntityTemplatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all the entity templates for the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listEntityTemplates();
  // TODO: Handle 'response' of type EntityTemplate[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListEntityTemplatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listEntityTemplates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityTemplate[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listEntityTemplates()`

- **OnSuccess**: <code>[EntityTemplate](src/models/entity-template.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListEntityTemplatesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listEntityTemplates().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityTemplate[], ShortcutApiClient.ListEntityTemplatesError&gt;</code>, with `result.value` of type <code>[EntityTemplate](src/models/entity-template.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicComments(request: ShortcutApiClient.ListEpicCommentsRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment[], ShortcutApiClient.ListEpicCommentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Comments on an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listEpicComments({ epicPublicId: 1 });
  // TODO: Handle 'response' of type ThreadedComment[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListEpicCommentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listEpicComments({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listEpicComments(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListEpicCommentsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listEpicComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment[], ShortcutApiClient.ListEpicCommentsError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicDocuments(request: ShortcutApiClient.ListEpicDocumentsRequest, options?: RequestOptions): ApiPromise&lt;DocSlim[], ShortcutApiClient.ListEpicDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Documents related to this Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listEpicDocuments({ epicPublicId: 1 });
  // TODO: Handle 'response' of type DocSlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListEpicDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listEpicDocuments({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listEpicDocuments(request)`

- **OnSuccess**: <code>[DocSlim](src/models/doc-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListEpicDocumentsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listEpicDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocSlim[], ShortcutApiClient.ListEpicDocumentsError&gt;</code>, with `result.value` of type <code>[DocSlim](src/models/doc-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicHealths(request: ShortcutApiClient.ListEpicHealthsRequest, options?: RequestOptions): ApiPromise&lt;Health[], ShortcutApiClient.ListEpicHealthsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the history of health statuses for the specified Epic, most recent first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listEpicHealths({ epicPublicId: 1 });
  // TODO: Handle 'response' of type Health[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListEpicHealthsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listEpicHealths({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listEpicHealths(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListEpicHealthsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listEpicHealths(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health[], ShortcutApiClient.ListEpicHealthsError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicStories(request: ShortcutApiClient.ListEpicStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.ListEpicStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Stories in an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listEpicStories({ epicPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListEpicStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listEpicStories({ epicPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Stories with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listEpicStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListEpicStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listEpicStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.ListEpicStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpics(request?: ShortcutApiClient.ListEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], ShortcutApiClient.ListEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Epics returns a list of all Epics and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listEpics();
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listEpics().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Epics with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListEpicsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], ShortcutApiClient.ListEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEpicsPaginated(request?: ShortcutApiClient.ListEpicsPaginatedRequest, options?: RequestOptions): ApiPromise&lt;EpicPaginatedResults, ShortcutApiClient.ListEpicsPaginatedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Epics with pagination returns a paginated list of Epics and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listEpicsPaginated();
  // TODO: Handle 'response' of type EpicPaginatedResults
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListEpicsPaginatedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listEpicsPaginated().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicPaginatedResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Epics with their descriptions. |
| <code>page?</code> | <code>number</code> | The page number to return, starting with 1. Defaults to 1. |
| <code>pageSize?</code> | <code>number</code> | The number of Epics to return per page. Minimum 1, maximum 250, default 10. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listEpicsPaginated(request)`

- **OnSuccess**: <code>[EpicPaginatedResults](src/models/epic-paginated-results.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.ListEpicsPaginatedError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listEpicsPaginated(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicPaginatedResults, ShortcutApiClient.ListEpicsPaginatedError&gt;</code>, with `result.value` of type <code>[EpicPaginatedResults](src/models/epic-paginated-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFiles(options?: RequestOptions): ApiPromise&lt;UploadedFile[], ShortcutApiClient.ListFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Files returns a list of all UploadedFiles in the workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listFiles();
  // TODO: Handle 'response' of type UploadedFile[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listFiles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadedFile[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listFiles()`

- **OnSuccess**: <code>[UploadedFile](src/models/uploaded-file.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListFilesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listFiles().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadedFile[], ShortcutApiClient.ListFilesError&gt;</code>, with `result.value` of type <code>[UploadedFile](src/models/uploaded-file.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroupStories(request: ShortcutApiClient.ListGroupStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.ListGroupStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Stories assigned to the Group. (By default, limited to 1,000).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listGroupStories({ groupPublicId: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListGroupStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .listGroupStories({ groupPublicId: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupPublicId</code> | <code>string</code> | The unique ID of the Group. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return. (Defaults to 1000, max 1000) |
| <code>offset?</code> | <code>number</code> | The offset at which to begin returning results. (Defaults to 0) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listGroupStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListGroupStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listGroupStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.ListGroupStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroups(request?: ShortcutApiClient.ListGroupsRequest, options?: RequestOptions): ApiPromise&lt;Group[], ShortcutApiClient.ListGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listGroups();
  // TODO: Handle 'response' of type Group[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>archived?</code> | <code>boolean</code> | Filter groups by their archived state. If true, returns only archived groups. If false, returns only unarchived groups. If not provided, returns all groups |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listGroups(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListGroupsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group[], ShortcutApiClient.ListGroupsError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIterationStories(request: ShortcutApiClient.ListIterationStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.ListIterationStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all Stories in an Iteration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listIterationStories({ iterationPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListIterationStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listIterationStories({ iterationPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iterationPublicId</code> | <code>number</code> | The unique ID of the Iteration. |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Stories with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listIterationStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListIterationStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listIterationStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.ListIterationStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listIterations(options?: RequestOptions): ApiPromise&lt;IterationSlim[], ShortcutApiClient.ListIterationsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listIterations();
  // TODO: Handle 'response' of type IterationSlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListIterationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listIterations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IterationSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listIterations()`

- **OnSuccess**: <code>[IterationSlim](src/models/iteration-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListIterationsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listIterations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IterationSlim[], ShortcutApiClient.ListIterationsError&gt;</code>, with `result.value` of type <code>[IterationSlim](src/models/iteration-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLabelEpics(request: ShortcutApiClient.ListLabelEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], ShortcutApiClient.ListLabelEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Epics with the Label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listLabelEpics({ labelPublicId: 1 });
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListLabelEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listLabelEpics({ labelPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listLabelEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListLabelEpicsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listLabelEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], ShortcutApiClient.ListLabelEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLabelStories(request: ShortcutApiClient.ListLabelStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.ListLabelStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Stories with the Label.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listLabelStories({ labelPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListLabelStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listLabelStories({ labelPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label. |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Stories with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listLabelStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListLabelStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listLabelStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.ListLabelStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLabels(request?: ShortcutApiClient.ListLabelsRequest, options?: RequestOptions): ApiPromise&lt;Label[], ShortcutApiClient.ListLabelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Labels returns a list of all Labels and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listLabels();
  // TODO: Handle 'response' of type Label[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listLabels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slim?</code> | <code>boolean</code> | A true/false boolean indicating if the slim versions of the Label should be returned. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listLabels(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListLabelsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label[], ShortcutApiClient.ListLabelsError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLinkedFiles(options?: RequestOptions): ApiPromise&lt;LinkedFile[], ShortcutApiClient.ListLinkedFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Linked Files returns a list of all Linked-Files and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listLinkedFiles();
  // TODO: Handle 'response' of type LinkedFile[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListLinkedFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listLinkedFiles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedFile[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listLinkedFiles()`

- **OnSuccess**: <code>[LinkedFile](src/models/linked-file.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListLinkedFilesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listLinkedFiles().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedFile[], ShortcutApiClient.ListLinkedFilesError&gt;</code>, with `result.value` of type <code>[LinkedFile](src/models/linked-file.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMembers(request?: ShortcutApiClient.ListMembersRequest, options?: RequestOptions): ApiPromise&lt;Member[], ShortcutApiClient.ListMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about members of the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listMembers();
  // TODO: Handle 'response' of type Member[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listMembers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Member[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orgPublicId?</code> | <code>string</code> | The unique ID of the Organization to limit the list to. |
| <code>disabled?</code> | <code>boolean</code> | Filter members by their disabled state. If true, return only disabled members. If false, return only enabled members. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listMembers(request)`

- **OnSuccess**: <code>[Member](src/models/member.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListMembersError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Member[], ShortcutApiClient.ListMembersError&gt;</code>, with `result.value` of type <code>[Member](src/models/member.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMilestoneEpics(request: ShortcutApiClient.ListMilestoneEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], ShortcutApiClient.ListMilestoneEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listMilestoneEpics({ milestonePublicId: 1 });
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListMilestoneEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listMilestoneEpics({ milestonePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestonePublicId</code> | <code>number</code> | The ID of the Milestone. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listMilestoneEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListMilestoneEpicsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listMilestoneEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], ShortcutApiClient.ListMilestoneEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMilestones(options?: RequestOptions): ApiPromise&lt;Milestone[], ShortcutApiClient.ListMilestonesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listMilestones();
  // TODO: Handle 'response' of type Milestone[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListMilestonesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listMilestones().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listMilestones()`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListMilestonesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listMilestones().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone[], ShortcutApiClient.ListMilestonesError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjectiveEpics(request: ShortcutApiClient.ListObjectiveEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSlim[], ShortcutApiClient.ListObjectiveEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the Epics within the Objective.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listObjectiveEpics({ objectivePublicId: 1 });
  // TODO: Handle 'response' of type EpicSlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListObjectiveEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listObjectiveEpics({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectivePublicId</code> | <code>number</code> | The ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listObjectiveEpics(request)`

- **OnSuccess**: <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListObjectiveEpicsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listObjectiveEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSlim[], ShortcutApiClient.ListObjectiveEpicsError&gt;</code>, with `result.value` of type <code>[EpicSlim](src/models/epic-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjectiveHealths(request: ShortcutApiClient.ListObjectiveHealthsRequest, options?: RequestOptions): ApiPromise&lt;Health[], ShortcutApiClient.ListObjectiveHealthsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the history of health statuses for the specified Objective, most recent first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listObjectiveHealths({ objectivePublicId: 1 });
  // TODO: Handle 'response' of type Health[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListObjectiveHealthsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listObjectiveHealths({ objectivePublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectivePublicId</code> | <code>number</code> | The unique ID of the Objective. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listObjectiveHealths(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListObjectiveHealthsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listObjectiveHealths(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health[], ShortcutApiClient.ListObjectiveHealthsError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listObjectives(options?: RequestOptions): ApiPromise&lt;Objective[], ShortcutApiClient.ListObjectivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Objectives returns a list of all Objectives and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listObjectives();
  // TODO: Handle 'response' of type Objective[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListObjectivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listObjectives().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Objective[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listObjectives()`

- **OnSuccess**: <code>[Objective](src/models/objective.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListObjectivesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listObjectives().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Objective[], ShortcutApiClient.ListObjectivesError&gt;</code>, with `result.value` of type <code>[Objective](src/models/objective.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjects(options?: RequestOptions): ApiPromise&lt;Project[], ShortcutApiClient.ListProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Projects returns a list of all Projects and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listProjects();
  // TODO: Handle 'response' of type Project[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listProjects().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listProjects()`

- **OnSuccess**: <code>[Project](src/models/project.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListProjectsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listProjects().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project[], ShortcutApiClient.ListProjectsError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRepositories(options?: RequestOptions): ApiPromise&lt;Repository[], ShortcutApiClient.ListRepositoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Repositories returns a list of all Repositories and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listRepositories();
  // TODO: Handle 'response' of type Repository[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListRepositoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listRepositories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Repository[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listRepositories()`

- **OnSuccess**: <code>[Repository](src/models/repository.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListRepositoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listRepositories().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Repository[], ShortcutApiClient.ListRepositoriesError&gt;</code>, with `result.value` of type <code>[Repository](src/models/repository.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStories(request: ShortcutApiClient.ListStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.ListStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Stories returns a list of all Stories in a selected Project and their attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listStories({ projectPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listStories({ projectPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectPublicId</code> | <code>number</code> | The unique ID of the Project. |
| <code>includesDescription?</code> | <code>boolean</code> | A true/false boolean indicating whether to return Stories with their descriptions. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.ListStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStoryComment(request: ShortcutApiClient.ListStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;StoryComment[], ShortcutApiClient.ListStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists Comments associated with a Story

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listStoryComment({ storyPublicId: 1 });
  // TODO: Handle 'response' of type StoryComment[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listStoryComment({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listStoryComment(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListStoryCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment[], ShortcutApiClient.ListStoryCommentError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStorySubTasks(request: ShortcutApiClient.ListStorySubTasksRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.ListStorySubTasksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Story Sub tasks returns a list of all Sub-task Stories for a given parent Story.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listStorySubTasks({ storyPublicId: 1 });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListStorySubTasksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listStorySubTasks({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listStorySubTasks(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListStorySubTasksError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listStorySubTasks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.ListStorySubTasksError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkflows(options?: RequestOptions): ApiPromise&lt;Workflow[], ShortcutApiClient.ListWorkflowsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all Workflows in the Workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.listWorkflows();
  // TODO: Handle 'response' of type Workflow[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.ListWorkflowsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.listWorkflows().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Workflow[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.listWorkflows()`

- **OnSuccess**: <code>[Workflow](src/models/workflow.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.ListWorkflowsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.listWorkflows().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Workflow[], ShortcutApiClient.ListWorkflowsError&gt;</code>, with `result.value` of type <code>[Workflow](src/models/workflow.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryStories(request: ShortcutApiClient.QueryStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.QueryStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Stories lets you search Stories based on desired parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.queryStories({ body: {} });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.QueryStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.queryStories({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchStories](src/models/search-stories.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.queryStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.QueryStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.queryStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.QueryStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>search(request: ShortcutApiClient.SearchRequest, options?: RequestOptions): ApiPromise&lt;SearchResults, ShortcutApiClient.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search({ query: "some example string" });
  // TODO: Handle 'response' of type SearchResults
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search(request)`

- **OnSuccess**: <code>[SearchResults](src/models/search-results.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.SearchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResults, ShortcutApiClient.SearchError&gt;</code>, with `result.value` of type <code>[SearchResults](src/models/search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchDocuments(request: ShortcutApiClient.SearchDocumentsRequest, options?: RequestOptions): ApiPromise&lt;DocSearchResults, ShortcutApiClient.SearchDocumentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Documents lets you search Documents based on desired parameters.
                          Supports structured filters: title, archived, created_by_me, followed_by_me.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchDocuments({ title: "some example string" });
  // TODO: Handle 'response' of type DocSearchResults
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.SearchDocumentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchDocuments({ title: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocSearchResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>title</code> | <code>string</code> | Search text to match against document titles. Supports fuzzy matching. Required. |
| <code>archived?</code> | <code>boolean</code> | When true, find archived documents. When false, find non-archived documents. |
| <code>createdByMe?</code> | <code>boolean</code> | When true, find documents created by the current user. When false, find documents NOT created by current user. |
| <code>followedByMe?</code> | <code>boolean</code> | When true, find documents that the current user is following. When false, find documents NOT followed. |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>next?</code> | <code>string</code> | The next page token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchDocuments(request)`

- **OnSuccess**: <code>[DocSearchResults](src/models/doc-search-results.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.SearchDocumentsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchDocuments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocSearchResults, ShortcutApiClient.SearchDocumentsError&gt;</code>, with `result.value` of type <code>[DocSearchResults](src/models/doc-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchEpics(request: ShortcutApiClient.SearchEpicsRequest, options?: RequestOptions): ApiPromise&lt;EpicSearchResults, ShortcutApiClient.SearchEpicsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchEpics({ query: "some example string" });
  // TODO: Handle 'response' of type EpicSearchResults
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.SearchEpicsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchEpics({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EpicSearchResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchEpics(request)`

- **OnSuccess**: <code>[EpicSearchResults](src/models/epic-search-results.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.SearchEpicsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchEpics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EpicSearchResults, ShortcutApiClient.SearchEpicsError&gt;</code>, with `result.value` of type <code>[EpicSearchResults](src/models/epic-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchIterations(request: ShortcutApiClient.SearchIterationsRequest, options?: RequestOptions): ApiPromise&lt;IterationSearchResults, ShortcutApiClient.SearchIterationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchIterations({ query: "some example string" });
  // TODO: Handle 'response' of type IterationSearchResults
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.SearchIterationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchIterations({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IterationSearchResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchIterations(request)`

- **OnSuccess**: <code>[IterationSearchResults](src/models/iteration-search-results.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.SearchIterationsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchIterations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IterationSearchResults, ShortcutApiClient.SearchIterationsError&gt;</code>, with `result.value` of type <code>[IterationSearchResults](src/models/iteration-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchMilestones(request: ShortcutApiClient.SearchMilestonesRequest, options?: RequestOptions): ApiPromise&lt;ObjectiveSearchResults, ShortcutApiClient.SearchMilestonesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchMilestones({ query: "some example string" });
  // TODO: Handle 'response' of type ObjectiveSearchResults
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.SearchMilestonesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchMilestones({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectiveSearchResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchMilestones(request)`

- **OnSuccess**: <code>[ObjectiveSearchResults](src/models/objective-search-results.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.SearchMilestonesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchMilestones(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectiveSearchResults, ShortcutApiClient.SearchMilestonesError&gt;</code>, with `result.value` of type <code>[ObjectiveSearchResults](src/models/objective-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchObjectives(request: ShortcutApiClient.SearchObjectivesRequest, options?: RequestOptions): ApiPromise&lt;ObjectiveSearchResults, ShortcutApiClient.SearchObjectivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchObjectives({ query: "some example string" });
  // TODO: Handle 'response' of type ObjectiveSearchResults
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.SearchObjectivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchObjectives({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObjectiveSearchResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchObjectives(request)`

- **OnSuccess**: <code>[ObjectiveSearchResults](src/models/objective-search-results.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.SearchObjectivesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchObjectives(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObjectiveSearchResults, ShortcutApiClient.SearchObjectivesError&gt;</code>, with `result.value` of type <code>[ObjectiveSearchResults](src/models/objective-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchStories(request: ShortcutApiClient.SearchStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySearchResults, ShortcutApiClient.SearchStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchStories({ query: "some example string" });
  // TODO: Handle 'response' of type StorySearchResults
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.SearchStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchStories({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySearchResults
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) |
| <code>pageSize?</code> | <code>number</code> | The number of search results to include in a page. Minimum of 1 and maximum of 250. |
| <code>detail?</code> | <code>[Detail](src/models/detail.ts)</code> | The amount of detail included in each result item.<br>   "full" will include all descriptions and comments and more fields on<br>   related items such as pull requests, branches and tasks.<br>   "slim" omits larger fulltext fields such as descriptions and comments<br>   and only references related items by id.<br>   The default is "full". |
| <code>next?</code> | <code>string</code> | The next page token. |
| <code>entityTypes?</code> | <code>[EntityType](src/models/entity-type.ts)[]</code> | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchStories(request)`

- **OnSuccess**: <code>[StorySearchResults](src/models/story-search-results.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.SearchStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySearchResults, ShortcutApiClient.SearchStoriesError&gt;</code>, with `result.value` of type <code>[StorySearchResults](src/models/story-search-results.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>storyHistory(request: ShortcutApiClient.StoryHistoryRequest, options?: RequestOptions): ApiPromise&lt;History[], ShortcutApiClient.StoryHistoryError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.storyHistory({ storyPublicId: 1 });
  // TODO: Handle 'response' of type History[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.StoryHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storyHistory({ storyPublicId: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type History[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storyHistory(request)`

- **OnSuccess**: <code>[History](src/models/history.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.StoryHistoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storyHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;History[], ShortcutApiClient.StoryHistoryError&gt;</code>, with `result.value` of type <code>[History](src/models/history.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unlinkCommentThreadFromSlack(request: ShortcutApiClient.UnlinkCommentThreadFromSlackRequest, options?: RequestOptions): ApiPromise&lt;StoryComment, ShortcutApiClient.UnlinkCommentThreadFromSlackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.unlinkCommentThreadFromSlack({ storyPublicId: 1, commentPublicId: 1 });
  // TODO: Handle 'response' of type StoryComment
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UnlinkCommentThreadFromSlackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .unlinkCommentThreadFromSlack({ storyPublicId: 1, commentPublicId: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story to unlink. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment to unlink. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unlinkCommentThreadFromSlack(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UnlinkCommentThreadFromSlackError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unlinkCommentThreadFromSlack(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment, ShortcutApiClient.UnlinkCommentThreadFromSlackError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unlinkDocumentFromEpic(request: ShortcutApiClient.UnlinkDocumentFromEpicRequest, options?: RequestOptions): ApiPromise&lt;undefined, ShortcutApiClient.UnlinkDocumentFromEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a relationship between a Document and an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.unlinkDocumentFromEpic({
    docPublicId: "00000000-0000-0000-0000-000000000000",
    epicPublicId: 1,
  });
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UnlinkDocumentFromEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .unlinkDocumentFromEpic({ docPublicId: "00000000-0000-0000-0000-000000000000", epicPublicId: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docPublicId</code> | <code>string</code> | The public ID of the Document. |
| <code>epicPublicId</code> | <code>number</code> | The public ID of the Epic. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.unlinkDocumentFromEpic(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ShortcutApiClient.UnlinkDocumentFromEpicError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.unlinkDocumentFromEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ShortcutApiClient.UnlinkDocumentFromEpicError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCategory(request: ShortcutApiClient.UpdateCategoryRequest, options?: RequestOptions): ApiPromise&lt;Category, ShortcutApiClient.UpdateCategoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateCategory({ categoryPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Category
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateCategoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateCategory({ categoryPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Category
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryPublicId</code> | <code>number</code> | The unique ID of the Category you wish to update. |
| <code>body</code> | <code>[UpdateCategory](src/models/update-category.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateCategory(request)`

- **OnSuccess**: <code>[Category](src/models/category.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateCategoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Category, ShortcutApiClient.UpdateCategoryError&gt;</code>, with `result.value` of type <code>[Category](src/models/category.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomField(request: ShortcutApiClient.UpdateCustomFieldRequest, options?: RequestOptions): ApiPromise&lt;CustomField, ShortcutApiClient.UpdateCustomFieldError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Custom Field can be used to update the definition of a Custom Field. The order of items in the 'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the 'values' collection. New enum values may be created inline by including an object in the 'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateCustomField({
    customFieldPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type CustomField
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateCustomFieldError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateCustomField({ customFieldPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomField
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customFieldPublicId</code> | <code>string</code> | The unique ID of the CustomField. |
| <code>body</code> | <code>[UpdateCustomField](src/models/update-custom-field.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateCustomField(request)`

- **OnSuccess**: <code>[CustomField](src/models/custom-field.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateCustomFieldError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateCustomField(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomField, ShortcutApiClient.UpdateCustomFieldError&gt;</code>, with `result.value` of type <code>[CustomField](src/models/custom-field.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDoc(request: ShortcutApiClient.UpdateDocRequest, options?: RequestOptions): ApiPromise&lt;Doc, ShortcutApiClient.UpdateDocError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter. WARNING: if content_format is not supplied, `content` input defaults to html. When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh. (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateDoc({ docPublicId: "00000000-0000-0000-0000-000000000000", body: {} });
  // TODO: Handle 'response' of type Doc
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateDocError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateDoc({ docPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Doc
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>docPublicId</code> | <code>string</code> | The Doc's public ID |
| <code>body</code> | <code>[UpdateDoc](src/models/update-doc.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateDoc(request)`

- **OnSuccess**: <code>[Doc](src/models/doc.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateDocError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateDoc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Doc, ShortcutApiClient.UpdateDocError&gt;</code>, with `result.value` of type <code>[Doc](src/models/doc.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEntityTemplate(request: ShortcutApiClient.UpdateEntityTemplateRequest, options?: RequestOptions): ApiPromise&lt;EntityTemplate, ShortcutApiClient.UpdateEntityTemplateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an entity template's name or its contents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateEntityTemplate({
    entityTemplatePublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type EntityTemplate
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateEntityTemplateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateEntityTemplate({ entityTemplatePublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EntityTemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>entityTemplatePublicId</code> | <code>string</code> | The unique ID of the template to be updated. |
| <code>body</code> | <code>[UpdateEntityTemplate](src/models/update-entity-template.ts)</code> | Request parameters for changing either a template's name or any of<br>  the attributes it is designed to pre-populate. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateEntityTemplate(request)`

- **OnSuccess**: <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateEntityTemplateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateEntityTemplate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EntityTemplate, ShortcutApiClient.UpdateEntityTemplateError&gt;</code>, with `result.value` of type <code>[EntityTemplate](src/models/entity-template.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEpic(request: ShortcutApiClient.UpdateEpicRequest, options?: RequestOptions): ApiPromise&lt;Epic, ShortcutApiClient.UpdateEpicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateEpic({ epicPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Epic
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateEpicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateEpic({ epicPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Epic
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The unique ID of the Epic. |
| <code>body</code> | <code>[UpdateEpic](src/models/update-epic.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateEpic(request)`

- **OnSuccess**: <code>[Epic](src/models/epic.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateEpicError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateEpic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Epic, ShortcutApiClient.UpdateEpicError&gt;</code>, with `result.value` of type <code>[Epic](src/models/epic.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEpicComment(request: ShortcutApiClient.UpdateEpicCommentRequest, options?: RequestOptions): ApiPromise&lt;ThreadedComment, ShortcutApiClient.UpdateEpicCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to update a threaded Comment on an Epic.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateEpicComment({
    epicPublicId: 1,
    commentPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type ThreadedComment
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateEpicCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateEpicComment({ epicPublicId: 1, commentPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ThreadedComment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>epicPublicId</code> | <code>number</code> | The ID of the associated Epic. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment. |
| <code>body</code> | <code>[UpdateComment](src/models/update-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateEpicComment(request)`

- **OnSuccess**: <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateEpicCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateEpicComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ThreadedComment, ShortcutApiClient.UpdateEpicCommentError&gt;</code>, with `result.value` of type <code>[ThreadedComment](src/models/threaded-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFile(request: ShortcutApiClient.UpdateFileRequest, options?: RequestOptions): ApiPromise&lt;UploadedFile, ShortcutApiClient.UpdateFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update File updates the properties of an UploadedFile (but not its content).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateFile({ filePublicId: 1, body: {} });
  // TODO: Handle 'response' of type UploadedFile
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateFile({ filePublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadedFile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filePublicId</code> | <code>number</code> | The unique ID assigned to the file in Shortcut. |
| <code>body</code> | <code>[UpdateFile](src/models/update-file.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateFile(request)`

- **OnSuccess**: <code>[UploadedFile](src/models/uploaded-file.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateFileError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadedFile, ShortcutApiClient.UpdateFileError&gt;</code>, with `result.value` of type <code>[UploadedFile](src/models/uploaded-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGroup(request: ShortcutApiClient.UpdateGroupRequest, options?: RequestOptions): ApiPromise&lt;Group, ShortcutApiClient.UpdateGroupError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateGroup({
    groupPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type Group
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateGroup({ groupPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Group
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupPublicId</code> | <code>string</code> | The unique ID of the Group. |
| <code>body</code> | <code>[UpdateGroup](src/models/update-group.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateGroup(request)`

- **OnSuccess**: <code>[Group](src/models/group.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateGroupError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Group, ShortcutApiClient.UpdateGroupError&gt;</code>, with `result.value` of type <code>[Group](src/models/group.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateHealth(request: ShortcutApiClient.UpdateHealthRequest, options?: RequestOptions): ApiPromise&lt;Health, ShortcutApiClient.UpdateHealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing health status by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateHealth({
    healthPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type Health
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateHealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateHealth({ healthPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Health
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>healthPublicId</code> | <code>string</code> | The unique ID of the Health record. |
| <code>body</code> | <code>[UpdateHealth](src/models/update-health.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateHealth(request)`

- **OnSuccess**: <code>[Health](src/models/health.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateHealthError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateHealth(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Health, ShortcutApiClient.UpdateHealthError&gt;</code>, with `result.value` of type <code>[Health](src/models/health.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateIteration(request: ShortcutApiClient.UpdateIterationRequest, options?: RequestOptions): ApiPromise&lt;Iteration, ShortcutApiClient.UpdateIterationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateIteration({ iterationPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Iteration
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateIteration({ iterationPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Iteration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>iterationPublicId</code> | <code>number</code> | The unique ID of the Iteration. |
| <code>body</code> | <code>[UpdateIteration](src/models/update-iteration.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateIteration(request)`

- **OnSuccess**: <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateIterationError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Iteration, ShortcutApiClient.UpdateIterationError&gt;</code>, with `result.value` of type <code>[Iteration](src/models/iteration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateKeyResult(request: ShortcutApiClient.UpdateKeyResultRequest, options?: RequestOptions): ApiPromise&lt;KeyResult, ShortcutApiClient.UpdateKeyResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Key Result allows updating a Key Result's name or initial, observed, or target values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateKeyResult({
    keyResultPublicId: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type KeyResult
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateKeyResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateKeyResult({ keyResultPublicId: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type KeyResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyResultPublicId</code> | <code>string</code> | The ID of the Key Result. |
| <code>body</code> | <code>[UpdateKeyResult](src/models/update-key-result.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateKeyResult(request)`

- **OnSuccess**: <code>[KeyResult](src/models/key-result.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateKeyResultError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateKeyResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;KeyResult, ShortcutApiClient.UpdateKeyResultError&gt;</code>, with `result.value` of type <code>[KeyResult](src/models/key-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLabel(request: ShortcutApiClient.UpdateLabelRequest, options?: RequestOptions): ApiPromise&lt;Label, ShortcutApiClient.UpdateLabelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateLabel({ labelPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Label
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateLabelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateLabel({ labelPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Label
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>labelPublicId</code> | <code>number</code> | The unique ID of the Label you wish to update. |
| <code>body</code> | <code>[UpdateLabel](src/models/update-label.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateLabel(request)`

- **OnSuccess**: <code>[Label](src/models/label.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateLabelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateLabel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Label, ShortcutApiClient.UpdateLabelError&gt;</code>, with `result.value` of type <code>[Label](src/models/label.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLinkedFile(request: ShortcutApiClient.UpdateLinkedFileRequest, options?: RequestOptions): ApiPromise&lt;LinkedFile, ShortcutApiClient.UpdateLinkedFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updated Linked File allows you to update properties of a previously attached Linked-File.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateLinkedFile({ linkedFilePublicId: 1, body: {} });
  // TODO: Handle 'response' of type LinkedFile
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateLinkedFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateLinkedFile({ linkedFilePublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkedFile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>linkedFilePublicId</code> | <code>number</code> | The unique identifier of the linked file. |
| <code>body</code> | <code>[UpdateLinkedFile](src/models/update-linked-file.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateLinkedFile(request)`

- **OnSuccess**: <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateLinkedFileError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateLinkedFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkedFile, ShortcutApiClient.UpdateLinkedFileError&gt;</code>, with `result.value` of type <code>[LinkedFile](src/models/linked-file.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMilestone(request: ShortcutApiClient.UpdateMilestoneRequest, options?: RequestOptions): ApiPromise&lt;Milestone, ShortcutApiClient.UpdateMilestoneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateMilestone({ milestonePublicId: 1, body: {} });
  // TODO: Handle 'response' of type Milestone
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateMilestoneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateMilestone({ milestonePublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Milestone
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>milestonePublicId</code> | <code>number</code> | The ID of the Milestone. |
| <code>body</code> | <code>[UpdateMilestone](src/models/update-milestone.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateMilestone(request)`

- **OnSuccess**: <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateMilestoneError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateMilestone(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Milestone, ShortcutApiClient.UpdateMilestoneError&gt;</code>, with `result.value` of type <code>[Milestone](src/models/milestone.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMultipleStories(request: ShortcutApiClient.UpdateMultipleStoriesRequest, options?: RequestOptions): ApiPromise&lt;StorySlim[], ShortcutApiClient.UpdateMultipleStoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Multiple Stories allows you to make changes to numerous stories at once.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateMultipleStories({ body: { storyIds: [1] } });
  // TODO: Handle 'response' of type StorySlim[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateMultipleStoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateMultipleStories({ body: { storyIds: [1] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StorySlim[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateStories](src/models/update-stories.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateMultipleStories(request)`

- **OnSuccess**: <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateMultipleStoriesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateMultipleStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StorySlim[], ShortcutApiClient.UpdateMultipleStoriesError&gt;</code>, with `result.value` of type <code>[StorySlim](src/models/story-slim.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateObjective(request: ShortcutApiClient.UpdateObjectiveRequest, options?: RequestOptions): ApiPromise&lt;Objective, ShortcutApiClient.UpdateObjectiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Objective can be used to update Objective properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateObjective({ objectivePublicId: 1, body: {} });
  // TODO: Handle 'response' of type Objective
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateObjectiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateObjective({ objectivePublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Objective
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectivePublicId</code> | <code>number</code> | The ID of the Objective. |
| <code>body</code> | <code>[UpdateObjective](src/models/update-objective.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateObjective(request)`

- **OnSuccess**: <code>[Objective](src/models/objective.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateObjectiveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateObjective(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Objective, ShortcutApiClient.UpdateObjectiveError&gt;</code>, with `result.value` of type <code>[Objective](src/models/objective.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProject(request: ShortcutApiClient.UpdateProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, ShortcutApiClient.UpdateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Project can be used to change properties of a Project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateProject({ projectPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateProject({ projectPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>projectPublicId</code> | <code>number</code> | The unique ID of the Project. |
| <code>body</code> | <code>[UpdateProject](src/models/update-project.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateProjectError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, ShortcutApiClient.UpdateProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStory(request: ShortcutApiClient.UpdateStoryRequest, options?: RequestOptions): ApiPromise&lt;Story, ShortcutApiClient.UpdateStoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Story can be used to update Story properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateStory({ storyPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Story
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateStoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateStory({ storyPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Story
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The unique identifier of this story. |
| <code>body</code> | <code>[UpdateStory](src/models/update-story.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateStory(request)`

- **OnSuccess**: <code>[Story](src/models/story.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateStoryError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateStory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Story, ShortcutApiClient.UpdateStoryError&gt;</code>, with `result.value` of type <code>[Story](src/models/story.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStoryComment(request: ShortcutApiClient.UpdateStoryCommentRequest, options?: RequestOptions): ApiPromise&lt;StoryComment, ShortcutApiClient.UpdateStoryCommentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Comment replaces the text of the existing Comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateStoryComment({
    storyPublicId: 1,
    commentPublicId: 1,
    body: { text: "some example string" },
  });
  // TODO: Handle 'response' of type StoryComment
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateStoryCommentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client
  .updateStoryComment({ storyPublicId: 1, commentPublicId: 1, body: { text: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryComment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The ID of the Story that the Comment is in. |
| <code>commentPublicId</code> | <code>number</code> | The ID of the Comment |
| <code>body</code> | <code>[UpdateStoryComment](src/models/update-story-comment.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateStoryComment(request)`

- **OnSuccess**: <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateStoryCommentError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateStoryComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryComment, ShortcutApiClient.UpdateStoryCommentError&gt;</code>, with `result.value` of type <code>[StoryComment](src/models/story-comment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStoryLink(request: ShortcutApiClient.UpdateStoryLinkRequest, options?: RequestOptions): ApiPromise&lt;StoryLink, ShortcutApiClient.UpdateStoryLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the stories and/or the relationship for the given Story Link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateStoryLink({ storyLinkPublicId: 1, body: {} });
  // TODO: Handle 'response' of type StoryLink
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateStoryLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateStoryLink({ storyLinkPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StoryLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyLinkPublicId</code> | <code>number</code> | The unique ID of the Story Link. |
| <code>body</code> | <code>[UpdateStoryLink](src/models/update-story-link.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateStoryLink(request)`

- **OnSuccess**: <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateStoryLinkError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateStoryLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StoryLink, ShortcutApiClient.UpdateStoryLinkError&gt;</code>, with `result.value` of type <code>[StoryLink](src/models/story-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTask(request: ShortcutApiClient.UpdateTaskRequest, options?: RequestOptions): ApiPromise&lt;Task, ShortcutApiClient.UpdateTaskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update Task can be used to update Task properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.updateTask({ storyPublicId: 1, taskPublicId: 1, body: {} });
  // TODO: Handle 'response' of type Task
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UpdateTaskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.updateTask({ storyPublicId: 1, taskPublicId: 1, body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Task
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>storyPublicId</code> | <code>number</code> | The unique identifier of the parent Story. |
| <code>taskPublicId</code> | <code>number</code> | The unique identifier of the Task you wish to update. |
| <code>body</code> | <code>[UpdateTask](src/models/update-task.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.updateTask(request)`

- **OnSuccess**: <code>[Task](src/models/task.ts)</code>
- **OnError**: throws <code>[ShortcutApiClient.UpdateTaskError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.updateTask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Task, ShortcutApiClient.UpdateTaskError&gt;</code>, with `result.value` of type <code>[Task](src/models/task.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadFiles(request: ShortcutApiClient.UploadFilesRequest, options?: RequestOptions): ApiPromise&lt;UploadedFile[], ShortcutApiClient.UploadFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload Files uploads one or many files and optionally associates them with a story.
   Use the multipart/form-data content-type to upload.
   Each `file` key should contain a separate file.
   Each UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploadFiles({ file0: new Uint8Array() });
  // TODO: Handle 'response' of type UploadedFile[]
} catch (err) {
  // TODO: Handle 'err' of type ShortcutApiClient.UploadFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploadFiles({ file0: new Uint8Array() }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadedFile[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file0</code> | <code>FileInput</code> | A file upload. At least one is required. |
| <code>storyId?</code> | <code>number</code> | The story ID that these files will be associated with. |
| <code>file1?</code> | <code>FileInput</code> | Optional additional files. |
| <code>file2?</code> | <code>FileInput</code> | Optional additional files. |
| <code>file3?</code> | <code>FileInput</code> | Optional additional files. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploadFiles(request)`

- **OnSuccess**: <code>[UploadedFile](src/models/uploaded-file.ts)[]</code>
- **OnError**: throws <code>[ShortcutApiClient.UploadFilesError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.uploadFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadedFile[], ShortcutApiClient.UploadFilesError&gt;</code>, with `result.value` of type <code>[UploadedFile](src/models/uploaded-file.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ShortcutApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

