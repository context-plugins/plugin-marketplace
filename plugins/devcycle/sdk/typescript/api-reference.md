# Reference

> Source: [DevCycleClient](src/client.ts)

## Audiences

> Source: [Audiences](src/resources/audiences.ts)

<details>
<summary><code>audiencesControllerCreate(request: Audiences.AudiencesControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;Audience, Audiences.AudiencesControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Audience

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.audiencesControllerCreate({
    project: "some example string",
    body: { filters: { filters: [{}], operator: Operator.And } },
  });
  // TODO: Handle 'response' of type Audience
} catch (err) {
  // TODO: Handle 'err' of type Audiences.AudiencesControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .audiencesControllerCreate({
    project: "some example string",
    body: { filters: { filters: [{}], operator: Operator.And } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Audience
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateAudienceDto](src/models/create-audience-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.audiencesControllerCreate(request)`

- **OnSuccess**: <code>[Audience](src/models/audience.ts)</code>
- **OnError**: throws <code>[Audiences.AudiencesControllerCreateError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.audiencesControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Audience, Audiences.AudiencesControllerCreateError&gt;</code>, with `result.value` of type <code>[Audience](src/models/audience.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>audiencesControllerFindAll(request: Audiences.AudiencesControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;Audience[], Audiences.AudiencesControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.audiencesControllerFindAll({ project: "some example string" });
  // TODO: Handle 'response' of type Audience[]
} catch (err) {
  // TODO: Handle 'err' of type Audiences.AudiencesControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .audiencesControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Audience[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>createdBy?</code> | <code>string</code> | - |
| <code>includeUsage?</code> | <code>boolean</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.audiencesControllerFindAll(request)`

- **OnSuccess**: <code>[Audience](src/models/audience.ts)[]</code>
- **OnError**: throws <code>[Audiences.AudiencesControllerFindAllError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.audiencesControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Audience[], Audiences.AudiencesControllerFindAllError&gt;</code>, with `result.value` of type <code>[Audience](src/models/audience.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>audiencesControllerFindOne(request: Audiences.AudiencesControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;Audience, Audiences.AudiencesControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an Audience by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.audiencesControllerFindOne({
    key: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type Audience
} catch (err) {
  // TODO: Handle 'err' of type Audiences.AudiencesControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .audiencesControllerFindOne({ key: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Audience
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Audience key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.audiencesControllerFindOne(request)`

- **OnSuccess**: <code>[Audience](src/models/audience.ts)</code>
- **OnError**: throws <code>[Audiences.AudiencesControllerFindOneError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.audiencesControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Audience, Audiences.AudiencesControllerFindOneError&gt;</code>, with `result.value` of type <code>[Audience](src/models/audience.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>audiencesControllerFindUsages(request: Audiences.AudiencesControllerFindUsagesRequest, options?: RequestOptions): ApiPromise&lt;AudienceUsage, Audiences.AudiencesControllerFindUsagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the direct usages of an Audiences Usage by Features OR other Audiences by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.audiencesControllerFindUsages({
    key: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type AudienceUsage
} catch (err) {
  // TODO: Handle 'err' of type Audiences.AudiencesControllerFindUsagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .audiencesControllerFindUsages({ key: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AudienceUsage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Audience key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.audiencesControllerFindUsages(request)`

- **OnSuccess**: <code>[AudienceUsage](src/models/audience-usage.ts)</code>
- **OnError**: throws <code>[Audiences.AudiencesControllerFindUsagesError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.audiencesControllerFindUsages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AudienceUsage, Audiences.AudiencesControllerFindUsagesError&gt;</code>, with `result.value` of type <code>[AudienceUsage](src/models/audience-usage.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>audiencesControllerRemove(request: Audiences.AudiencesControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, Audiences.AudiencesControllerRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Audience by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.audiences.audiencesControllerRemove({
    key: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Audiences.AudiencesControllerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .audiencesControllerRemove({ key: "some example string", project: "some example string" })
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
| <code>key</code> | <code>string</code> | A Audience key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.audiencesControllerRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Audiences.AudiencesControllerRemoveError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.audiencesControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Audiences.AudiencesControllerRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>audiencesControllerUpdate(request: Audiences.AudiencesControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;Audience, Audiences.AudiencesControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Audience by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.audiences.audiencesControllerUpdate({
    key: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Audience
} catch (err) {
  // TODO: Handle 'err' of type Audiences.AudiencesControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.audiences
  .audiencesControllerUpdate({ key: "some example string", project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Audience
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Audience key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateAudienceDto](src/models/update-audience-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.audiences.audiencesControllerUpdate(request)`

- **OnSuccess**: <code>[Audience](src/models/audience.ts)</code>
- **OnError**: throws <code>[Audiences.AudiencesControllerUpdateError](src/resources/audiences.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.audiences.audiencesControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Audience, Audiences.AudiencesControllerUpdateError&gt;</code>, with `result.value` of type <code>[Audience](src/models/audience.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuditLog

> Source: [AuditLog](src/resources/audit-log.ts)

<details>
<summary><code>auditLogControllerFindAll(request: AuditLog.AuditLogControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;AuditLogEntity[], AuditLog.AuditLogControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auditLog.auditLogControllerFindAll({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type AuditLogEntity[]
} catch (err) {
  // TODO: Handle 'err' of type AuditLog.AuditLogControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auditLog
  .auditLogControllerFindAll({ feature: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuditLogEntity[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>environment?</code> | <code>string</code> | - |
| <code>a0User?</code> | <code>string</code> | - |
| <code>startDate?</code> | <code>Date</code> (date-time) | - |
| <code>endDate?</code> | <code>Date</code> (date-time) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auditLog.auditLogControllerFindAll(request)`

- **OnSuccess**: <code>[AuditLogEntity](src/models/audit-log-entity.ts)[]</code>
- **OnError**: throws <code>[AuditLog.AuditLogControllerFindAllError](src/resources/audit-log.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auditLog.auditLogControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuditLogEntity[], AuditLog.AuditLogControllerFindAllError&gt;</code>, with `result.value` of type <code>[AuditLogEntity](src/models/audit-log-entity.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BetaSemanticPatch

> Source: [BetaSemanticPatch](src/resources/beta-semantic-patch.ts)

<details>
<summary><code>semanticPatchControllerSemanticUpdate(request: BetaSemanticPatch.SemanticPatchControllerSemanticUpdateRequest, options?: RequestOptions): ApiPromise&lt;undefined, BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Semantic Patch Update an Audience by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.betaSemanticPatch.semanticPatchControllerSemanticUpdate({
    key: "some example string",
    project: "some example string",
    body: {
      instructions: [{ op: Op.AddFilterValues, action: { values: {}, filterIndex: "some example string" } }],
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.betaSemanticPatch
  .semanticPatchControllerSemanticUpdate({
    key: "some example string",
    project: "some example string",
    body: {
      instructions: [{ op: Op.AddFilterValues, action: { values: {}, filterIndex: "some example string" } }],
    },
  })
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
| <code>key</code> | <code>string</code> | A Audience key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[AudiencePatchDto](src/models/audience-patch-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.betaSemanticPatch.semanticPatchControllerSemanticUpdate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError](src/resources/beta-semantic-patch.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.betaSemanticPatch.semanticPatchControllerSemanticUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## BucketingApi

> Source: [BucketingApi](src/resources/bucketing-api.ts)

<details>
<summary><code>getFeatures(request: BucketingApi.GetFeaturesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, Feature&gt;, BucketingApi.GetFeaturesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bucketingApi.getFeatures({
    body: {
      userId: "user_123456",
      email: "user@example.com",
      name: "John Doe",
      country: "US",
      customData: {},
    },
  });
  // TODO: Handle 'response' of type Record<string, Feature>
} catch (err) {
  // TODO: Handle 'err' of type BucketingApi.GetFeaturesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bucketingApi
  .getFeatures({
    body: {
      userId: "user_123456",
      email: "user@example.com",
      name: "John Doe",
      country: "US",
      customData: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, Feature>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserData](src/models/user-data.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bucketingApi.getFeatures(request)`

- **OnSuccess**: <code>Record&lt;string, [Feature](src/models/feature.ts)&gt;</code>
- **OnError**: throws <code>[BucketingApi.GetFeaturesError](src/resources/bucketing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bucketingApi.getFeatures(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, Feature&gt;, BucketingApi.GetFeaturesError&gt;</code>, with `result.value` of type <code>Record&lt;string, [Feature](src/models/feature.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVariableByKey(request: BucketingApi.GetVariableByKeyRequest, options?: RequestOptions): ApiPromise&lt;Variable, BucketingApi.GetVariableByKeyError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bucketingApi.getVariableByKey({
    key: "my-variable-key",
    body: {
      userId: "user_123456",
      email: "user@example.com",
      name: "John Doe",
      country: "US",
      customData: {},
    },
  });
  // TODO: Handle 'response' of type Variable
} catch (err) {
  // TODO: Handle 'err' of type BucketingApi.GetVariableByKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bucketingApi
  .getVariableByKey({
    key: "my-variable-key",
    body: {
      userId: "user_123456",
      email: "user@example.com",
      name: "John Doe",
      country: "US",
      customData: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Variable
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | Variable key |
| <code>body</code> | <code>[UserData](src/models/user-data.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bucketingApi.getVariableByKey(request)`

- **OnSuccess**: <code>[Variable](src/models/variable.ts)</code>
- **OnError**: throws <code>[BucketingApi.GetVariableByKeyError](src/resources/bucketing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bucketingApi.getVariableByKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Variable, BucketingApi.GetVariableByKeyError&gt;</code>, with `result.value` of type <code>[Variable](src/models/variable.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVariables(request: BucketingApi.GetVariablesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, Variable&gt;, BucketingApi.GetVariablesError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bucketingApi.getVariables({
    body: {
      userId: "user_123456",
      email: "user@example.com",
      name: "John Doe",
      country: "US",
      customData: {},
    },
  });
  // TODO: Handle 'response' of type Record<string, Variable>
} catch (err) {
  // TODO: Handle 'err' of type BucketingApi.GetVariablesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bucketingApi
  .getVariables({
    body: {
      userId: "user_123456",
      email: "user@example.com",
      name: "John Doe",
      country: "US",
      customData: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, Variable>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserData](src/models/user-data.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bucketingApi.getVariables(request)`

- **OnSuccess**: <code>Record&lt;string, [Variable](src/models/variable.ts)&gt;</code>
- **OnError**: throws <code>[BucketingApi.GetVariablesError](src/resources/bucketing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bucketingApi.getVariables(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, Variable&gt;, BucketingApi.GetVariablesError&gt;</code>, with `result.value` of type <code>Record&lt;string, [Variable](src/models/variable.ts)&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postEvents(request: BucketingApi.PostEventsRequest, options?: RequestOptions): ApiPromise&lt;V1TrackResponse, BucketingApi.PostEventsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bucketingApi.postEvents({
    body: {
      events: [
        { type: "purchase", value: 99.99, metaData: {} },
        { type: "feature_click", target: "new-dashboard-button" },
      ],
      user: { userId: "user_123456", email: "user@example.com", customData: {} },
    },
  });
  // TODO: Handle 'response' of type V1TrackResponse
} catch (err) {
  // TODO: Handle 'err' of type BucketingApi.PostEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bucketingApi
  .postEvents({
    body: {
      events: [
        { type: "purchase", value: 99.99, metaData: {} },
        { type: "feature_click", target: "new-dashboard-button" },
      ],
      user: { userId: "user_123456", email: "user@example.com", customData: {} },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1TrackResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserDataAndEventsBody](src/models/user-data-and-events-body.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bucketingApi.postEvents(request)`

- **OnSuccess**: <code>[V1TrackResponse](src/models/v1-track-response.ts)</code>
- **OnError**: throws <code>[BucketingApi.PostEventsError](src/resources/bucketing-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bucketingApi.postEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1TrackResponse, BucketingApi.PostEventsError&gt;</code>, with `result.value` of type <code>[V1TrackResponse](src/models/v1-track-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomProperties

> Source: [CustomProperties](src/resources/custom-properties.ts)

<details>
<summary><code>customPropertiesControllerCreate(request: CustomProperties.CustomPropertiesControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;CustomProperty, CustomProperties.CustomPropertiesControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Custom Property

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customProperties.customPropertiesControllerCreate({
    project: "some example string",
    body: {
      name: "some example string",
      key: "some example string",
      type: TypeDevCycleManagementCustomPropertiesApi.String,
      propertyKey: "some example string",
    },
  });
  // TODO: Handle 'response' of type CustomProperty
} catch (err) {
  // TODO: Handle 'err' of type CustomProperties.CustomPropertiesControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customProperties
  .customPropertiesControllerCreate({
    project: "some example string",
    body: {
      name: "some example string",
      key: "some example string",
      type: TypeDevCycleManagementCustomPropertiesApi.String,
      propertyKey: "some example string",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomProperty
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateCustomPropertyDto](src/models/create-custom-property-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customProperties.customPropertiesControllerCreate(request)`

- **OnSuccess**: <code>[CustomProperty](src/models/custom-property.ts)</code>
- **OnError**: throws <code>[CustomProperties.CustomPropertiesControllerCreateError](src/resources/custom-properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customProperties.customPropertiesControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomProperty, CustomProperties.CustomPropertiesControllerCreateError&gt;</code>, with `result.value` of type <code>[CustomProperty](src/models/custom-property.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>customPropertiesControllerFindAll(request: CustomProperties.CustomPropertiesControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;CustomProperty[], CustomProperties.CustomPropertiesControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customProperties.customPropertiesControllerFindAll({
    project: "some example string",
  });
  // TODO: Handle 'response' of type CustomProperty[]
} catch (err) {
  // TODO: Handle 'err' of type CustomProperties.CustomPropertiesControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customProperties
  .customPropertiesControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomProperty[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type3](src/models/type3.ts)</code> | - |
| <code>includeUsage?</code> | <code>boolean</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customProperties.customPropertiesControllerFindAll(request)`

- **OnSuccess**: <code>[CustomProperty](src/models/custom-property.ts)[]</code>
- **OnError**: throws <code>[CustomProperties.CustomPropertiesControllerFindAllError](src/resources/custom-properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customProperties.customPropertiesControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomProperty[], CustomProperties.CustomPropertiesControllerFindAllError&gt;</code>, with `result.value` of type <code>[CustomProperty](src/models/custom-property.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>customPropertiesControllerFindOne(request: CustomProperties.CustomPropertiesControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;CustomProperty, CustomProperties.CustomPropertiesControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Custom Property by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customProperties.customPropertiesControllerFindOne({
    key: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type CustomProperty
} catch (err) {
  // TODO: Handle 'err' of type CustomProperties.CustomPropertiesControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customProperties
  .customPropertiesControllerFindOne({ key: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomProperty
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Custom Property key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customProperties.customPropertiesControllerFindOne(request)`

- **OnSuccess**: <code>[CustomProperty](src/models/custom-property.ts)</code>
- **OnError**: throws <code>[CustomProperties.CustomPropertiesControllerFindOneError](src/resources/custom-properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customProperties.customPropertiesControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomProperty, CustomProperties.CustomPropertiesControllerFindOneError&gt;</code>, with `result.value` of type <code>[CustomProperty](src/models/custom-property.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>customPropertiesControllerRemove(request: CustomProperties.CustomPropertiesControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, CustomProperties.CustomPropertiesControllerRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Custom Property by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customProperties.customPropertiesControllerRemove({
    key: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomProperties.CustomPropertiesControllerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customProperties
  .customPropertiesControllerRemove({ key: "some example string", project: "some example string" })
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
| <code>key</code> | <code>string</code> | A Custom Property key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customProperties.customPropertiesControllerRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomProperties.CustomPropertiesControllerRemoveError](src/resources/custom-properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customProperties.customPropertiesControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomProperties.CustomPropertiesControllerRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>customPropertiesControllerUpdate(request: CustomProperties.CustomPropertiesControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;CustomProperty, CustomProperties.CustomPropertiesControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an Custom Property by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customProperties.customPropertiesControllerUpdate({
    key: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type CustomProperty
} catch (err) {
  // TODO: Handle 'err' of type CustomProperties.CustomPropertiesControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customProperties
  .customPropertiesControllerUpdate({ key: "some example string", project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CustomProperty
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Custom Property key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateCustomPropertyDto](src/models/update-custom-property-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customProperties.customPropertiesControllerUpdate(request)`

- **OnSuccess**: <code>[CustomProperty](src/models/custom-property.ts)</code>
- **OnError**: throws <code>[CustomProperties.CustomPropertiesControllerUpdateError](src/resources/custom-properties.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customProperties.customPropertiesControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CustomProperty, CustomProperties.CustomPropertiesControllerUpdateError&gt;</code>, with `result.value` of type <code>[CustomProperty](src/models/custom-property.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DeprecatedFeaturesV1

> Source: [DeprecatedFeaturesV1](src/resources/deprecated-features-v1.ts)

<details>
<summary><code>featuresControllerCreateMultipleV1(request: DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Request, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api[], DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple new Features

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerCreateMultipleV1({
    project: "some example string",
    body: ["some example string"],
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api[]
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerCreateMultipleV1({ project: "some example string", body: ["some example string"] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>string[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerCreateMultipleV1(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)[]</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerCreateMultipleV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api[], DeprecatedFeaturesV1.FeaturesControllerCreateMultipleV1Error&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerCreateV1(request: DeprecatedFeaturesV1.FeaturesControllerCreateV1Request, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerCreateV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerCreateV1({
    project: "some example string",
    body: { key: "some example string", name: "some example string", configurations: { key: {} } },
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerCreateV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerCreateV1({
    project: "some example string",
    body: { key: "some example string", name: "some example string", configurations: { key: {} } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateFeatureDto](src/models/create-feature-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerCreateV1(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerCreateV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerCreateV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerCreateV1Error&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerFindAllLinkedIssuesV1(request: DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Request, options?: RequestOptions): ApiPromise&lt;JiraIssueLink[], DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerFindAllLinkedIssuesV1({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type JiraIssueLink[]
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerFindAllLinkedIssuesV1({ feature: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JiraIssueLink[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerFindAllLinkedIssuesV1(request)`

- **OnSuccess**: <code>[JiraIssueLink](src/models/jira-issue-link.ts)[]</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerFindAllLinkedIssuesV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JiraIssueLink[], DeprecatedFeaturesV1.FeaturesControllerFindAllLinkedIssuesV1Error&gt;</code>, with `result.value` of type <code>[JiraIssueLink](src/models/jira-issue-link.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerFindAllV1(request: DeprecatedFeaturesV1.FeaturesControllerFindAllV1Request, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api[], DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerFindAllV1({
    project: "some example string",
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api[]
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerFindAllV1({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>createdBy?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type9](src/models/type9.ts)</code> | - |
| <code>status?</code> | <code>[Status5](src/models/status5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerFindAllV1(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)[]</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerFindAllV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api[], DeprecatedFeaturesV1.FeaturesControllerFindAllV1Error&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerFindOneV1(request: DeprecatedFeaturesV1.FeaturesControllerFindOneV1Request, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerFindOneV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerFindOneV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerFindOneV1(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerFindOneV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerFindOneV1Error&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerFindStaticConfigurationV1(request: DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Request, options?: RequestOptions): ApiPromise&lt;StaticConfiguration, DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a completed Feature's static configuration

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerFindStaticConfigurationV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type StaticConfiguration
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerFindStaticConfigurationV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StaticConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerFindStaticConfigurationV1(request)`

- **OnSuccess**: <code>[StaticConfiguration](src/models/static-configuration.ts)</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerFindStaticConfigurationV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StaticConfiguration, DeprecatedFeaturesV1.FeaturesControllerFindStaticConfigurationV1Error&gt;</code>, with `result.value` of type <code>[StaticConfiguration](src/models/static-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerLinkIssueV1(request: DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Request, options?: RequestOptions): ApiPromise&lt;JiraIssueLink, DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerLinkIssueV1({
    feature: "some example string",
    project: "some example string",
    body: { issueId: "some example string" },
  });
  // TODO: Handle 'response' of type JiraIssueLink
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerLinkIssueV1({
    feature: "some example string",
    project: "some example string",
    body: { issueId: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JiraIssueLink
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[LinkJiraIssueDto](src/models/link-jira-issue-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerLinkIssueV1(request)`

- **OnSuccess**: <code>[JiraIssueLink](src/models/jira-issue-link.ts)</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerLinkIssueV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JiraIssueLink, DeprecatedFeaturesV1.FeaturesControllerLinkIssueV1Error&gt;</code>, with `result.value` of type <code>[JiraIssueLink](src/models/jira-issue-link.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerRemoveLinkedIssueV1(request: DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Request, options?: RequestOptions): ApiPromise&lt;undefined, DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deprecatedFeaturesV1.featuresControllerRemoveLinkedIssueV1({
    feature: "some example string",
    issueId: "some example string",
    key: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerRemoveLinkedIssueV1({
    feature: "some example string",
    issueId: "some example string",
    key: "some example string",
    project: "some example string",
  })
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
| <code>feature</code> | <code>string</code> | - |
| <code>issueId</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerRemoveLinkedIssueV1(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerRemoveLinkedIssueV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DeprecatedFeaturesV1.FeaturesControllerRemoveLinkedIssueV1Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerRemoveV1(request: DeprecatedFeaturesV1.FeaturesControllerRemoveV1Request, options?: RequestOptions): ApiPromise&lt;undefined, DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Feature by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deprecatedFeaturesV1.featuresControllerRemoveV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerRemoveV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
  })
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
| <code>feature</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>deleteVariables?</code> | <code>boolean</code> | Controls whether the feature's associated variables should also be deleted |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerRemoveV1(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerRemoveV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DeprecatedFeaturesV1.FeaturesControllerRemoveV1Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerUpdateStaticConfigurationV1(request: DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Request, options?: RequestOptions): ApiPromise&lt;StaticConfiguration, DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a completed Feature's static configuration

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerUpdateStaticConfigurationV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type StaticConfiguration
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerUpdateStaticConfigurationV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StaticConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateStaticConfigurationDto](src/models/update-static-configuration-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerUpdateStaticConfigurationV1(request)`

- **OnSuccess**: <code>[StaticConfiguration](src/models/static-configuration.ts)</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerUpdateStaticConfigurationV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StaticConfiguration, DeprecatedFeaturesV1.FeaturesControllerUpdateStaticConfigurationV1Error&gt;</code>, with `result.value` of type <code>[StaticConfiguration](src/models/static-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerUpdateStatusV1(request: DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Request, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature's status by key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerUpdateStatusV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerUpdateStatusV1({
    feature: "some example string",
    key: "some example string",
    project: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureStatusDto](src/models/update-feature-status-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerUpdateStatusV1(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerUpdateStatusV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerUpdateStatusV1Error&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerUpdateV1(request: DeprecatedFeaturesV1.FeaturesControllerUpdateV1Request, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deprecatedFeaturesV1.featuresControllerUpdateV1({
    feature: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} catch (err) {
  // TODO: Handle 'err' of type DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deprecatedFeaturesV1
  .featuresControllerUpdateV1({ feature: "some example string", project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureDto](src/models/update-feature-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deprecatedFeaturesV1.featuresControllerUpdateV1(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: throws <code>[DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error](src/resources/deprecated-features-v1.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deprecatedFeaturesV1.featuresControllerUpdateV1(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, DeprecatedFeaturesV1.FeaturesControllerUpdateV1Error&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## EdgeDb

> Source: [EdgeDb](src/resources/edge-db.ts)

<details>
<summary><code>patchV1EdgedbByUserId(request: EdgeDb.PatchV1EdgedbByUserIdRequest, options?: RequestOptions): ApiPromise&lt;EdgeDbApiResponse, EdgeDb.PatchV1EdgedbByUserIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.edgeDb.patchV1EdgedbByUserId({
    userId: "some example string",
    body: { userId: "some example string" },
  });
  // TODO: Handle 'response' of type EdgeDbApiResponse
} catch (err) {
  // TODO: Handle 'err' of type EdgeDb.PatchV1EdgedbByUserIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.edgeDb
  .patchV1EdgedbByUserId({ userId: "some example string", body: { userId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EdgeDbApiResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | A unique id used to fetch and update the EdgeDB data |
| <code>sdkKey?</code> | <code>string</code> | SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set. |
| <code>body</code> | <code>[UserDataEdgeDb](src/models/user-data-edge-db.ts)</code> | User properties to update the EdgeDB data |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.edgeDb.patchV1EdgedbByUserId(request)`

- **OnSuccess**: <code>[EdgeDbApiResponse](src/models/edge-db-api-response.ts)</code>
- **OnError**: throws <code>[EdgeDb.PatchV1EdgedbByUserIdError](src/resources/edge-db.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.edgeDb.patchV1EdgedbByUserId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EdgeDbApiResponse, EdgeDb.PatchV1EdgedbByUserIdError&gt;</code>, with `result.value` of type <code>[EdgeDbApiResponse](src/models/edge-db-api-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](src/resources/environments.ts)

<details>
<summary><code>environmentsControllerCreate(request: Environments.EnvironmentsControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;Environment, Environments.EnvironmentsControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new environment for a project. The environment key must be unique within the project. Multiple environments can share a type.
Creating an environment will auto-generate a set of SDK Keys for the various types of SDKs.
When permissions are enabled for the organization, the token must have Publisher permissions for the environment to be created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.environmentsControllerCreate({
    project: "some example string",
    body: {
      name: "some example string",
      key: "some example string",
      type: TypeDevCycleManagementEnvironmentsApi.Development,
    },
  });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.EnvironmentsControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .environmentsControllerCreate({
    project: "some example string",
    body: {
      name: "some example string",
      key: "some example string",
      type: TypeDevCycleManagementEnvironmentsApi.Development,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateEnvironmentDto](src/models/create-environment-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.environmentsControllerCreate(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.EnvironmentsControllerCreateError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.environmentsControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.EnvironmentsControllerCreateError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>environmentsControllerFindAll(request: Environments.EnvironmentsControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;Environment[], Environments.EnvironmentsControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all environments for a project. If a token does not have permission to view protected environments the environments will be filtered to only show non-protected environments SDK Keys for security.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.environmentsControllerFindAll({
    project: "some example string",
  });
  // TODO: Handle 'response' of type Environment[]
} catch (err) {
  // TODO: Handle 'err' of type Environments.EnvironmentsControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .environmentsControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>createdBy?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.environmentsControllerFindAll(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)[]</code>
- **OnError**: throws <code>[Environments.EnvironmentsControllerFindAllError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.environmentsControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment[], Environments.EnvironmentsControllerFindAllError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>environmentsControllerFindOne(request: Environments.EnvironmentsControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;Environment, Environments.EnvironmentsControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the environment; if the token does not have permission to view protected environments, the environment will be filtered to only show non-protected SDK Keys for security.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.environmentsControllerFindOne({
    key: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.EnvironmentsControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .environmentsControllerFindOne({ key: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Environment key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.environmentsControllerFindOne(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.EnvironmentsControllerFindOneError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.environmentsControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.EnvironmentsControllerFindOneError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>environmentsControllerRemove(request: Environments.EnvironmentsControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, Environments.EnvironmentsControllerRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Environment by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.environments.environmentsControllerRemove({
    key: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Environments.EnvironmentsControllerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .environmentsControllerRemove({ key: "some example string", project: "some example string" })
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
| <code>key</code> | <code>string</code> | A Environment key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.environmentsControllerRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Environments.EnvironmentsControllerRemoveError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.environmentsControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Environments.EnvironmentsControllerRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>environmentsControllerUpdate(request: Environments.EnvironmentsControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;Environment, Environments.EnvironmentsControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an environment by ID or key. The environment key (if edited) must be unique within the project. If permissions are enabled, changing a protected environment type requires Publisher permissions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.environmentsControllerUpdate({
    key: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.EnvironmentsControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .environmentsControllerUpdate({ key: "some example string", project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Environment key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateEnvironmentDto](src/models/update-environment-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.environmentsControllerUpdate(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.EnvironmentsControllerUpdateError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.environmentsControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.EnvironmentsControllerUpdateError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sdkKeysControllerGenerate(request: Environments.SdkKeysControllerGenerateRequest, options?: RequestOptions): ApiPromise&lt;Environment, Environments.SdkKeysControllerGenerateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate new SDK keys for an environment, for any or all of the SDK types. This is the expected and recommended way to rotate SDK keys. Adding a new SDK key will not invalidate existing SDK keys.
Generating new keys is restricted for protected environments to those with Publisher permissions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.sdkKeysControllerGenerate({
    environment: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.SdkKeysControllerGenerateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .sdkKeysControllerGenerate({ environment: "some example string", project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>environment</code> | <code>string</code> | An Environment key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[GenerateSdkTokensDto](src/models/generate-sdk-tokens-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.sdkKeysControllerGenerate(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.SdkKeysControllerGenerateError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.sdkKeysControllerGenerate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.SdkKeysControllerGenerateError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sdkKeysControllerInvalidate(request: Environments.SdkKeysControllerInvalidateRequest, options?: RequestOptions): ApiPromise&lt;undefined, Environments.SdkKeysControllerInvalidateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This will invalidate all configs associated with a given key. This is an instantaneous change and all SDKs using this key will stop working immediately. This is the expected and recommended way to rotate SDK keys.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.environments.sdkKeysControllerInvalidate({
    key: "some example string",
    environment: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Environments.SdkKeysControllerInvalidateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .sdkKeysControllerInvalidate({
    key: "some example string",
    environment: "some example string",
    project: "some example string",
  })
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
| <code>key</code> | <code>string</code> | An SDK key |
| <code>environment</code> | <code>string</code> | An Environment key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.sdkKeysControllerInvalidate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Environments.SdkKeysControllerInvalidateError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.sdkKeysControllerInvalidate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Environments.SdkKeysControllerInvalidateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureChangeRequests

> Source: [FeatureChangeRequests](src/resources/feature-change-requests.ts)

<details>
<summary><code>featureChangeRequestsControllerApplyFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature Change Request by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.featureChangeRequests.featureChangeRequestsControllerApplyFeatureChangeRequest({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
    body: { description: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureChangeRequests
  .featureChangeRequestsControllerApplyFeatureChangeRequest({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
    body: { description: "some example string" },
  })
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
| <code>id</code> | <code>string</code> | - |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[ApplyFeatureChangeRequestDto](src/models/apply-feature-change-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureChangeRequests.featureChangeRequestsControllerApplyFeatureChangeRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError](src/resources/feature-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureChangeRequests.featureChangeRequestsControllerApplyFeatureChangeRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FeatureChangeRequests.FeatureChangeRequestsControllerApplyFeatureChangeRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featureChangeRequestsControllerCancelFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a Feature Change Request by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.featureChangeRequests.featureChangeRequestsControllerCancelFeatureChangeRequest({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureChangeRequests
  .featureChangeRequestsControllerCancelFeatureChangeRequest({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
  })
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
| <code>id</code> | <code>string</code> | - |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureChangeRequests.featureChangeRequestsControllerCancelFeatureChangeRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError](src/resources/feature-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureChangeRequests.featureChangeRequestsControllerCancelFeatureChangeRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FeatureChangeRequests.FeatureChangeRequestsControllerCancelFeatureChangeRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featureChangeRequestsControllerCreateChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestRequest, options?: RequestOptions): ApiPromise&lt;FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature Change Request

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featureChangeRequests.featureChangeRequestsControllerCreateChangeRequest({
    feature: "some example string",
    project: "some example string",
    body: { path: "some example string", body: {} },
  });
  // TODO: Handle 'response' of type FeatureChangeRequest
} catch (err) {
  // TODO: Handle 'err' of type FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureChangeRequests
  .featureChangeRequestsControllerCreateChangeRequest({
    feature: "some example string",
    project: "some example string",
    body: { path: "some example string", body: {} },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureChangeRequest
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateFeatureChangeRequestDto](src/models/create-feature-change-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureChangeRequests.featureChangeRequestsControllerCreateChangeRequest(request)`

- **OnSuccess**: <code>[FeatureChangeRequest](src/models/feature-change-request.ts)</code>
- **OnError**: throws <code>[FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError](src/resources/feature-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureChangeRequests.featureChangeRequestsControllerCreateChangeRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerCreateChangeRequestError&gt;</code>, with `result.value` of type <code>[FeatureChangeRequest](src/models/feature-change-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featureChangeRequestsControllerGetFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise&lt;FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature Change Request by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featureChangeRequests.featureChangeRequestsControllerGetFeatureChangeRequest({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type FeatureChangeRequest
} catch (err) {
  // TODO: Handle 'err' of type FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureChangeRequests
  .featureChangeRequestsControllerGetFeatureChangeRequest({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureChangeRequest
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureChangeRequests.featureChangeRequestsControllerGetFeatureChangeRequest(request)`

- **OnSuccess**: <code>[FeatureChangeRequest](src/models/feature-change-request.ts)</code>
- **OnError**: throws <code>[FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError](src/resources/feature-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureChangeRequests.featureChangeRequestsControllerGetFeatureChangeRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerGetFeatureChangeRequestError&gt;</code>, with `result.value` of type <code>[FeatureChangeRequest](src/models/feature-change-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featureChangeRequestsControllerGetLatestFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise&lt;FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.featureChangeRequests.featureChangeRequestsControllerGetLatestFeatureChangeRequest({
      feature: "some example string",
      project: "some example string",
    });
  // TODO: Handle 'response' of type FeatureChangeRequest
} catch (err) {
  // TODO: Handle 'err' of type FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureChangeRequests
  .featureChangeRequestsControllerGetLatestFeatureChangeRequest({
    feature: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureChangeRequest
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureChangeRequests.featureChangeRequestsControllerGetLatestFeatureChangeRequest(request)`

- **OnSuccess**: <code>[FeatureChangeRequest](src/models/feature-change-request.ts)</code>
- **OnError**: throws <code>[FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError](src/resources/feature-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureChangeRequests.featureChangeRequestsControllerGetLatestFeatureChangeRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerGetLatestFeatureChangeRequestError&gt;</code>, with `result.value` of type <code>[FeatureChangeRequest](src/models/feature-change-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featureChangeRequestsControllerGetPendingFeatureChangeRequests(request: FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsRequest, options?: RequestOptions): ApiPromise&lt;FeatureChangeRequest[], FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all pending Feature Change Requests for a Feature

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.featureChangeRequests.featureChangeRequestsControllerGetPendingFeatureChangeRequests({
      feature: "some example string",
      project: "some example string",
    });
  // TODO: Handle 'response' of type FeatureChangeRequest[]
} catch (err) {
  // TODO: Handle 'err' of type FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureChangeRequests
  .featureChangeRequestsControllerGetPendingFeatureChangeRequests({
    feature: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureChangeRequest[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureChangeRequests.featureChangeRequestsControllerGetPendingFeatureChangeRequests(request)`

- **OnSuccess**: <code>[FeatureChangeRequest](src/models/feature-change-request.ts)[]</code>
- **OnError**: throws <code>[FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError](src/resources/feature-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureChangeRequests.featureChangeRequestsControllerGetPendingFeatureChangeRequests(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureChangeRequest[], FeatureChangeRequests.FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsError&gt;</code>, with `result.value` of type <code>[FeatureChangeRequest](src/models/feature-change-request.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featureChangeRequestsControllerReviewFeatureChangeRequest(request: FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestRequest, options?: RequestOptions): ApiPromise&lt;undefined, FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature Change Request by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.featureChangeRequests.featureChangeRequestsControllerReviewFeatureChangeRequest({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
    body: { action: Action.Approved, comment: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureChangeRequests
  .featureChangeRequestsControllerReviewFeatureChangeRequest({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
    body: { action: Action.Approved, comment: "some example string" },
  })
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
| <code>id</code> | <code>string</code> | - |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>apply?</code> | <code>boolean</code> | Controls whether the review should also apply the change request to the feature |
| <code>body</code> | <code>[ReviewFeatureChangeRequestDto](src/models/review-feature-change-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureChangeRequests.featureChangeRequestsControllerReviewFeatureChangeRequest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError](src/resources/feature-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureChangeRequests.featureChangeRequestsControllerReviewFeatureChangeRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FeatureChangeRequests.FeatureChangeRequestsControllerReviewFeatureChangeRequestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featureChangeRequestsControllerSubmitChangeRequestForReview(request: FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewRequest, options?: RequestOptions): ApiPromise&lt;FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a Feature Change Request for Review

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response =
    await client.featureChangeRequests.featureChangeRequestsControllerSubmitChangeRequestForReview({
      id: "some example string",
      feature: "some example string",
      project: "some example string",
      body: { description: "some example string", reviewers: ["some example string"] },
    });
  // TODO: Handle 'response' of type FeatureChangeRequest
} catch (err) {
  // TODO: Handle 'err' of type FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureChangeRequests
  .featureChangeRequestsControllerSubmitChangeRequestForReview({
    id: "some example string",
    feature: "some example string",
    project: "some example string",
    body: { description: "some example string", reviewers: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureChangeRequest
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[SubmitFeatureChangeRequestDto](src/models/submit-feature-change-request-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureChangeRequests.featureChangeRequestsControllerSubmitChangeRequestForReview(request)`

- **OnSuccess**: <code>[FeatureChangeRequest](src/models/feature-change-request.ts)</code>
- **OnError**: throws <code>[FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError](src/resources/feature-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureChangeRequests.featureChangeRequestsControllerSubmitChangeRequestForReview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureChangeRequest, FeatureChangeRequests.FeatureChangeRequestsControllerSubmitChangeRequestForReviewError&gt;</code>, with `result.value` of type <code>[FeatureChangeRequest](src/models/feature-change-request.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureConfigurations

> Source: [FeatureConfigurations](src/resources/feature-configurations.ts)

<details>
<summary><code>featureConfigsControllerFindAll(request: FeatureConfigurations.FeatureConfigsControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;FeatureConfig[], FeatureConfigurations.FeatureConfigsControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Feature configurations for all environments or by environment key or ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featureConfigurations.featureConfigsControllerFindAll({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type FeatureConfig[]
} catch (err) {
  // TODO: Handle 'err' of type FeatureConfigurations.FeatureConfigsControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureConfigurations
  .featureConfigsControllerFindAll({ feature: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureConfig[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>environment?</code> | <code>string</code> | A Environment key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureConfigurations.featureConfigsControllerFindAll(request)`

- **OnSuccess**: <code>[FeatureConfig](src/models/feature-config.ts)[]</code>
- **OnError**: throws <code>[FeatureConfigurations.FeatureConfigsControllerFindAllError](src/resources/feature-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureConfigurations.featureConfigsControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureConfig[], FeatureConfigurations.FeatureConfigsControllerFindAllError&gt;</code>, with `result.value` of type <code>[FeatureConfig](src/models/feature-config.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featureConfigsControllerUpdate(request: FeatureConfigurations.FeatureConfigsControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;FeatureConfig, FeatureConfigurations.FeatureConfigsControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature configuration by environment key or ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featureConfigurations.featureConfigsControllerUpdate({
    feature: "some example string",
    project: "some example string",
    environment: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FeatureConfig
} catch (err) {
  // TODO: Handle 'err' of type FeatureConfigurations.FeatureConfigsControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureConfigurations
  .featureConfigsControllerUpdate({
    feature: "some example string",
    project: "some example string",
    environment: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureConfig
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>environment</code> | <code>string</code> | A Environment key or ID |
| <code>body</code> | <code>[UpdateFeatureConfigDto](src/models/update-feature-config-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureConfigurations.featureConfigsControllerUpdate(request)`

- **OnSuccess**: <code>[FeatureConfig](src/models/feature-config.ts)</code>
- **OnError**: throws <code>[FeatureConfigurations.FeatureConfigsControllerUpdateError](src/resources/feature-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureConfigurations.featureConfigsControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureConfig, FeatureConfigurations.FeatureConfigsControllerUpdateError&gt;</code>, with `result.value` of type <code>[FeatureConfig](src/models/feature-config.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FeatureOptIn

> Source: [FeatureOptIn](src/resources/feature-opt-in.ts)

<details>
<summary><code>getV1OptInConfig(request: FeatureOptIn.GetV1OptInConfigRequest, options?: RequestOptions): ApiPromise&lt;OptInConfigResponse, FeatureOptIn.GetV1OptInConfigError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a project config to display features available for Opt-in

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featureOptIn.getV1OptInConfig({ userId: "some example string" });
  // TODO: Handle 'response' of type OptInConfigResponse
} catch (err) {
  // TODO: Handle 'err' of type FeatureOptIn.GetV1OptInConfigError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureOptIn.getV1OptInConfig({ userId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OptInConfigResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | Unique id to identify the user |
| <code>sdkKey?</code> | <code>string</code> | SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureOptIn.getV1OptInConfig(request)`

- **OnSuccess**: <code>[OptInConfigResponse](src/models/opt-in-config-response.ts)</code>
- **OnError**: throws <code>[FeatureOptIn.GetV1OptInConfigError](src/resources/feature-opt-in.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureOptIn.getV1OptInConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OptInConfigResponse, FeatureOptIn.GetV1OptInConfigError&gt;</code>, with `result.value` of type <code>[OptInConfigResponse](src/models/opt-in-config-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putV1OptInsByUserId(request: FeatureOptIn.PutV1OptInsByUserIdRequest, options?: RequestOptions): ApiPromise&lt;V1OptInsResponse, FeatureOptIn.PutV1OptInsByUserIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featureOptIn.putV1OptInsByUserId({
    userId: "some example string",
    body: { "614ef6aa473928459060721a": true, "614ef6aa473928459060721b": false },
  });
  // TODO: Handle 'response' of type V1OptInsResponse
} catch (err) {
  // TODO: Handle 'err' of type FeatureOptIn.PutV1OptInsByUserIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featureOptIn
  .putV1OptInsByUserId({
    userId: "some example string",
    body: { "614ef6aa473928459060721a": true, "614ef6aa473928459060721b": false },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1OptInsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | Unique user_id to identify the user |
| <code>sdkKey?</code> | <code>string</code> | SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set. |
| <code>body</code> | <code>Record&lt;string, boolean&gt;</code> | A map of feature IDs to boolean values. The value should be true if the user has opted in, false otherwise |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featureOptIn.putV1OptInsByUserId(request)`

- **OnSuccess**: <code>[V1OptInsResponse](src/models/v1-opt-ins-response.ts)</code>
- **OnError**: throws <code>[FeatureOptIn.PutV1OptInsByUserIdError](src/resources/feature-opt-in.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featureOptIn.putV1OptInsByUserId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1OptInsResponse, FeatureOptIn.PutV1OptInsByUserIdError&gt;</code>, with `result.value` of type <code>[V1OptInsResponse](src/models/v1-opt-ins-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FeaturesV2

> Source: [FeaturesV2](src/resources/features-v2.ts)

<details>
<summary><code>featuresControllerCreate(request: FeaturesV2.FeaturesControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Feature

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerCreate({
    project: "some example string",
    body: { key: "some example string", name: "some example string", configurations: { key: {} } },
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerCreate({
    project: "some example string",
    body: { key: "some example string", name: "some example string", configurations: { key: {} } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateFeatureDto](src/models/create-feature-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerCreate(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerCreateError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerCreateError&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerFindAll(request: FeaturesV2.FeaturesControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api[], FeaturesV2.FeaturesControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerFindAll({ project: "some example string" });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api[]
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>createdBy?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type9](src/models/type9.ts)</code> | - |
| <code>status?</code> | <code>[Status5](src/models/status5.ts)</code> | - |
| <code>customStatus?</code> | <code>string[]</code> | - |
| <code>keys?</code> | <code>string[]</code> | - |
| <code>includeLatestUpdate?</code> | <code>boolean</code> | - |
| <code>staleness?</code> | <code>[Staleness](src/models/staleness.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerFindAll(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)[]</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerFindAllError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api[], FeaturesV2.FeaturesControllerFindAllError&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerFindOne(request: FeaturesV2.FeaturesControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Feature by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerFindOne({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerFindOne({ feature: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerFindOne(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerFindOneError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerFindOneError&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerFindStaticConfiguration(request: FeaturesV2.FeaturesControllerFindStaticConfigurationRequest, options?: RequestOptions): ApiPromise&lt;StaticConfiguration, FeaturesV2.FeaturesControllerFindStaticConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a completed Feature's static configuration

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerFindStaticConfiguration({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type StaticConfiguration
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerFindStaticConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerFindStaticConfiguration({
    feature: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StaticConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerFindStaticConfiguration(request)`

- **OnSuccess**: <code>[StaticConfiguration](src/models/static-configuration.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerFindStaticConfigurationError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerFindStaticConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StaticConfiguration, FeaturesV2.FeaturesControllerFindStaticConfigurationError&gt;</code>, with `result.value` of type <code>[StaticConfiguration](src/models/static-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerGetStaleness(request: FeaturesV2.FeaturesControllerGetStalenessRequest, options?: RequestOptions): ApiPromise&lt;FeatureStalenessEntity, FeaturesV2.FeaturesControllerGetStalenessError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerGetStaleness({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type FeatureStalenessEntity
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerGetStalenessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerGetStaleness({ feature: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureStalenessEntity
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerGetStaleness(request)`

- **OnSuccess**: <code>[FeatureStalenessEntity](src/models/feature-staleness-entity.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerGetStalenessError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerGetStaleness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureStalenessEntity, FeaturesV2.FeaturesControllerGetStalenessError&gt;</code>, with `result.value` of type <code>[FeatureStalenessEntity](src/models/feature-staleness-entity.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerUpdate(request: FeaturesV2.FeaturesControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Feature by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerUpdate({
    feature: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerUpdate({ feature: "some example string", project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureDto](src/models/update-feature-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerUpdate(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerUpdateError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerUpdateError&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerUpdateStaleness(request: FeaturesV2.FeaturesControllerUpdateStalenessRequest, options?: RequestOptions): ApiPromise&lt;FeatureStalenessEntity, FeaturesV2.FeaturesControllerUpdateStalenessError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerUpdateStaleness({
    feature: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FeatureStalenessEntity
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerUpdateStalenessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerUpdateStaleness({
    feature: "some example string",
    project: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureStalenessEntity
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateStalenessDto](src/models/update-staleness-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerUpdateStaleness(request)`

- **OnSuccess**: <code>[FeatureStalenessEntity](src/models/feature-staleness-entity.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerUpdateStalenessError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerUpdateStaleness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureStalenessEntity, FeaturesV2.FeaturesControllerUpdateStalenessError&gt;</code>, with `result.value` of type <code>[FeatureStalenessEntity](src/models/feature-staleness-entity.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerUpdateStaticConfiguration(request: FeaturesV2.FeaturesControllerUpdateStaticConfigurationRequest, options?: RequestOptions): ApiPromise&lt;StaticConfiguration, FeaturesV2.FeaturesControllerUpdateStaticConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a completed Feature's static configuration

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerUpdateStaticConfiguration({
    feature: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type StaticConfiguration
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerUpdateStaticConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerUpdateStaticConfiguration({
    feature: "some example string",
    project: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StaticConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateStaticConfigurationDto](src/models/update-static-configuration-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerUpdateStaticConfiguration(request)`

- **OnSuccess**: <code>[StaticConfiguration](src/models/static-configuration.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerUpdateStaticConfigurationError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerUpdateStaticConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StaticConfiguration, FeaturesV2.FeaturesControllerUpdateStaticConfigurationError&gt;</code>, with `result.value` of type <code>[StaticConfiguration](src/models/static-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerUpdateStatus(request: FeaturesV2.FeaturesControllerUpdateStatusRequest, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerUpdateStatusError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerUpdateStatus({
    feature: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerUpdateStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerUpdateStatus({
    feature: "some example string",
    project: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementDeprecatedFeaturesV1Api
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureStatusDto](src/models/update-feature-status-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerUpdateStatus(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerUpdateStatusError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerUpdateStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesV2.FeaturesControllerUpdateStatusError&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementDeprecatedFeaturesV1Api](src/models/feature-dev-cycle-management-deprecated-features-v1-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>featuresControllerUpdateSummary(request: FeaturesV2.FeaturesControllerUpdateSummaryRequest, options?: RequestOptions): ApiPromise&lt;FeatureSummary, FeaturesV2.FeaturesControllerUpdateSummaryError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.featuresV2.featuresControllerUpdateSummary({
    feature: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FeatureSummary
} catch (err) {
  // TODO: Handle 'err' of type FeaturesV2.FeaturesControllerUpdateSummaryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.featuresV2
  .featuresControllerUpdateSummary({
    feature: "some example string",
    project: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureSummary
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureSummaryDto](src/models/update-feature-summary-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.featuresV2.featuresControllerUpdateSummary(request)`

- **OnSuccess**: <code>[FeatureSummary](src/models/feature-summary.ts)</code>
- **OnError**: throws <code>[FeaturesV2.FeaturesControllerUpdateSummaryError](src/resources/features-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.featuresV2.featuresControllerUpdateSummary(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureSummary, FeaturesV2.FeaturesControllerUpdateSummaryError&gt;</code>, with `result.value` of type <code>[FeatureSummary](src/models/feature-summary.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IntegrationsDynatrace

> Source: [IntegrationsDynatrace](src/resources/integrations-dynatrace.ts)

<details>
<summary><code>dynatraceIntegrationControllerCreateIntegration(request: IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationRequest, options?: RequestOptions): ApiPromise&lt;undefined, IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.integrationsDynatrace.dynatraceIntegrationControllerCreateIntegration({
    body: {
      dynatraceEnvironmentId: "some example string",
      accessToken: "some example string",
      environmentUrl: "some example string",
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrationsDynatrace
  .dynatraceIntegrationControllerCreateIntegration({
    body: {
      dynatraceEnvironmentId: "some example string",
      accessToken: "some example string",
      environmentUrl: "some example string",
    },
  })
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
| <code>body</code> | <code>[CreateDynatraceIntegrationDto](src/models/create-dynatrace-integration-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrationsDynatrace.dynatraceIntegrationControllerCreateIntegration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError](src/resources/integrations-dynatrace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrationsDynatrace.dynatraceIntegrationControllerCreateIntegration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dynatraceIntegrationControllerDeleteEnvironment(request: IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;undefined, IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.integrationsDynatrace.dynatraceIntegrationControllerDeleteEnvironment({
    dynatraceEnvironmentId: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrationsDynatrace
  .dynatraceIntegrationControllerDeleteEnvironment({ dynatraceEnvironmentId: "some example string" })
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
| <code>dynatraceEnvironmentId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrationsDynatrace.dynatraceIntegrationControllerDeleteEnvironment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError](src/resources/integrations-dynatrace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrationsDynatrace.dynatraceIntegrationControllerDeleteEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dynatraceIntegrationControllerGetIntegrations(options?: RequestOptions): ApiPromise&lt;DynatraceIntegration, IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.integrationsDynatrace.dynatraceIntegrationControllerGetIntegrations();
  // TODO: Handle 'response' of type DynatraceIntegration
} catch (err) {
  // TODO: Handle 'err' of type IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrationsDynatrace
  .dynatraceIntegrationControllerGetIntegrations()
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DynatraceIntegration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrationsDynatrace.dynatraceIntegrationControllerGetIntegrations()`

- **OnSuccess**: <code>[DynatraceIntegration](src/models/dynatrace-integration.ts)</code>
- **OnError**: throws <code>[IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError](src/resources/integrations-dynatrace.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrationsDynatrace.dynatraceIntegrationControllerGetIntegrations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DynatraceIntegration, IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError&gt;</code>, with `result.value` of type <code>[DynatraceIntegration](src/models/dynatrace-integration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IntegrationsJira

> Source: [IntegrationsJira](src/resources/integrations-jira.ts)

<details>
<summary><code>jiraIntegrationControllerRemove(request: IntegrationsJira.JiraIntegrationControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or /integrations/jira/project/:token instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.integrationsJira.jiraIntegrationControllerRemove({ token: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrationsJira
  .jiraIntegrationControllerRemove({ token: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrationsJira.jiraIntegrationControllerRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.integrationsJira.jiraIntegrationControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jiraIntegrationControllerRemoveOrganizationConnection(request: IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove the Jira integration configuration for an organization. This will remove the integration for an organization wide connection, but not project connections.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.integrationsJira.jiraIntegrationControllerRemoveOrganizationConnection({
    token: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrationsJira
  .jiraIntegrationControllerRemoveOrganizationConnection({ token: "some example string" })
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
| <code>token</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrationsJira.jiraIntegrationControllerRemoveOrganizationConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError](src/resources/integrations-jira.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrationsJira.jiraIntegrationControllerRemoveOrganizationConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>jiraIntegrationControllerRemoveProjectConnection(request: IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionRequest, options?: RequestOptions): ApiPromise&lt;undefined, IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a specific project

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.integrationsJira.jiraIntegrationControllerRemoveProjectConnection({
    token: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.integrationsJira
  .jiraIntegrationControllerRemoveProjectConnection({ token: "some example string" })
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
| <code>token</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.integrationsJira.jiraIntegrationControllerRemoveProjectConnection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError](src/resources/integrations-jira.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.integrationsJira.jiraIntegrationControllerRemoveProjectConnection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MetricAssociations

> Source: [MetricAssociations](src/resources/metric-associations.ts)

<details>
<summary><code>metricAssociationsControllerCreate(request: MetricAssociations.MetricAssociationsControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;MetricAssociation, MetricAssociations.MetricAssociationsControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metricAssociations.metricAssociationsControllerCreate({
    project: "some example string",
    body: { metric: "some example string", feature: "some example string" },
  });
  // TODO: Handle 'response' of type MetricAssociation
} catch (err) {
  // TODO: Handle 'err' of type MetricAssociations.MetricAssociationsControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metricAssociations
  .metricAssociationsControllerCreate({
    project: "some example string",
    body: { metric: "some example string", feature: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricAssociation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateMetricAssociationDto](src/models/create-metric-association-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metricAssociations.metricAssociationsControllerCreate(request)`

- **OnSuccess**: <code>[MetricAssociation](src/models/metric-association.ts)</code>
- **OnError**: throws <code>[MetricAssociations.MetricAssociationsControllerCreateError](src/resources/metric-associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metricAssociations.metricAssociationsControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricAssociation, MetricAssociations.MetricAssociationsControllerCreateError&gt;</code>, with `result.value` of type <code>[MetricAssociation](src/models/metric-association.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metricAssociationsControllerFindAll(request: MetricAssociations.MetricAssociationsControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;MetricAssociation[], MetricAssociations.MetricAssociationsControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metricAssociations.metricAssociationsControllerFindAll({
    project: "some example string",
  });
  // TODO: Handle 'response' of type MetricAssociation[]
} catch (err) {
  // TODO: Handle 'err' of type MetricAssociations.MetricAssociationsControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metricAssociations
  .metricAssociationsControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricAssociation[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>metric?</code> | <code>string</code> | - |
| <code>feature?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metricAssociations.metricAssociationsControllerFindAll(request)`

- **OnSuccess**: <code>[MetricAssociation](src/models/metric-association.ts)[]</code>
- **OnError**: throws <code>[MetricAssociations.MetricAssociationsControllerFindAllError](src/resources/metric-associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metricAssociations.metricAssociationsControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricAssociation[], MetricAssociations.MetricAssociationsControllerFindAllError&gt;</code>, with `result.value` of type <code>[MetricAssociation](src/models/metric-association.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metricAssociationsControllerRemove(request: MetricAssociations.MetricAssociationsControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, MetricAssociations.MetricAssociationsControllerRemoveError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.metricAssociations.metricAssociationsControllerRemove({
    project: "some example string",
    metric: "some example string",
    feature: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type MetricAssociations.MetricAssociationsControllerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metricAssociations
  .metricAssociationsControllerRemove({
    project: "some example string",
    metric: "some example string",
    feature: "some example string",
  })
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
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>metric</code> | <code>string</code> | - |
| <code>feature</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metricAssociations.metricAssociationsControllerRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MetricAssociations.MetricAssociationsControllerRemoveError](src/resources/metric-associations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metricAssociations.metricAssociationsControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MetricAssociations.MetricAssociationsControllerRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Metrics

> Source: [Metrics](src/resources/metrics.ts)

<details>
<summary><code>metricsControllerCreate(request: Metrics.MetricsControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Metric

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.metricsControllerCreate({
    project: "some example string",
    body: {
      name: "some example string",
      key: "some example string",
      event: "some example string",
      dimension: Dimension.CountPerUniqueUser,
      optimize: Optimize.Increase,
    },
  });
  // TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
} catch (err) {
  // TODO: Handle 'err' of type Metrics.MetricsControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics
  .metricsControllerCreate({
    project: "some example string",
    body: {
      name: "some example string",
      key: "some example string",
      event: "some example string",
      dimension: Dimension.CountPerUniqueUser,
      optimize: Optimize.Increase,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricDevCycleManagementMetricsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateMetricDto](src/models/create-metric-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.metricsControllerCreate(request)`

- **OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](src/models/metric-dev-cycle-management-metrics-api.ts)</code>
- **OnError**: throws <code>[Metrics.MetricsControllerCreateError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.metricsControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerCreateError&gt;</code>, with `result.value` of type <code>[MetricDevCycleManagementMetricsApi](src/models/metric-dev-cycle-management-metrics-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metricsControllerFetchResults(request: Metrics.MetricsControllerFetchResultsRequest, options?: RequestOptions): ApiPromise&lt;MetricResult, Metrics.MetricsControllerFetchResultsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.metricsControllerFetchResults({
    key: "some example string",
    project: "some example string",
    feature: "some example string",
    startDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    endDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  });
  // TODO: Handle 'response' of type MetricResult
} catch (err) {
  // TODO: Handle 'err' of type Metrics.MetricsControllerFetchResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics
  .metricsControllerFetchResults({
    key: "some example string",
    project: "some example string",
    feature: "some example string",
    startDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    endDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>feature</code> | <code>string</code> | - |
| <code>startDate</code> | <code>Date</code> (date-time) | - |
| <code>endDate</code> | <code>Date</code> (date-time) | - |
| <code>environment?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.metricsControllerFetchResults(request)`

- **OnSuccess**: <code>[MetricResult](src/models/metric-result.ts)</code>
- **OnError**: throws <code>[Metrics.MetricsControllerFetchResultsError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.metricsControllerFetchResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricResult, Metrics.MetricsControllerFetchResultsError&gt;</code>, with `result.value` of type <code>[MetricResult](src/models/metric-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metricsControllerFindAll(request: Metrics.MetricsControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;MetricDevCycleManagementMetricsApi[], Metrics.MetricsControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.metricsControllerFindAll({ project: "some example string" });
  // TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi[]
} catch (err) {
  // TODO: Handle 'err' of type Metrics.MetricsControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics
  .metricsControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricDevCycleManagementMetricsApi[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>dimension?</code> | <code>[Dimension3](src/models/dimension3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.metricsControllerFindAll(request)`

- **OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](src/models/metric-dev-cycle-management-metrics-api.ts)[]</code>
- **OnError**: throws <code>[Metrics.MetricsControllerFindAllError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.metricsControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricDevCycleManagementMetricsApi[], Metrics.MetricsControllerFindAllError&gt;</code>, with `result.value` of type <code>[MetricDevCycleManagementMetricsApi](src/models/metric-dev-cycle-management-metrics-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metricsControllerFindOne(request: Metrics.MetricsControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.metricsControllerFindOne({
    key: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
} catch (err) {
  // TODO: Handle 'err' of type Metrics.MetricsControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics
  .metricsControllerFindOne({ key: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricDevCycleManagementMetricsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.metricsControllerFindOne(request)`

- **OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](src/models/metric-dev-cycle-management-metrics-api.ts)</code>
- **OnError**: throws <code>[Metrics.MetricsControllerFindOneError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.metricsControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerFindOneError&gt;</code>, with `result.value` of type <code>[MetricDevCycleManagementMetricsApi](src/models/metric-dev-cycle-management-metrics-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metricsControllerRemove(request: Metrics.MetricsControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, Metrics.MetricsControllerRemoveError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.metrics.metricsControllerRemove({
    key: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Metrics.MetricsControllerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics
  .metricsControllerRemove({ key: "some example string", project: "some example string" })
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
| <code>key</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.metricsControllerRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Metrics.MetricsControllerRemoveError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.metricsControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Metrics.MetricsControllerRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>metricsControllerUpdate(request: Metrics.MetricsControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.metricsControllerUpdate({
    key: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type MetricDevCycleManagementMetricsApi
} catch (err) {
  // TODO: Handle 'err' of type Metrics.MetricsControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics
  .metricsControllerUpdate({ key: "some example string", project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricDevCycleManagementMetricsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateMetricDto](src/models/update-metric-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.metricsControllerUpdate(request)`

- **OnSuccess**: <code>[MetricDevCycleManagementMetricsApi](src/models/metric-dev-cycle-management-metrics-api.ts)</code>
- **OnError**: throws <code>[Metrics.MetricsControllerUpdateError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.metricsControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerUpdateError&gt;</code>, with `result.value` of type <code>[MetricDevCycleManagementMetricsApi](src/models/metric-dev-cycle-management-metrics-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testMetricResultsControllerFetch(request: Metrics.TestMetricResultsControllerFetchRequest, options?: RequestOptions): ApiPromise&lt;MetricResult, Metrics.TestMetricResultsControllerFetchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch metric results with the given parameters

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.metrics.testMetricResultsControllerFetch({
    project: "some example string",
    feature: "some example string",
    control: "some example string",
    optimize: Optimize3.Increase,
    event: "some example string",
    dimension: Dimension3.CountPerUniqueUser,
    startDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    endDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  });
  // TODO: Handle 'response' of type MetricResult
} catch (err) {
  // TODO: Handle 'err' of type Metrics.TestMetricResultsControllerFetchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.metrics
  .testMetricResultsControllerFetch({
    project: "some example string",
    feature: "some example string",
    control: "some example string",
    optimize: Optimize3.Increase,
    event: "some example string",
    dimension: Dimension3.CountPerUniqueUser,
    startDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    endDate: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MetricResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>feature</code> | <code>string</code> | - |
| <code>control</code> | <code>string</code> | - |
| <code>optimize</code> | <code>[Optimize3](src/models/optimize3.ts)</code> | - |
| <code>event</code> | <code>string</code> | - |
| <code>dimension</code> | <code>[Dimension3](src/models/dimension3.ts)</code> | - |
| <code>startDate</code> | <code>Date</code> (date-time) | - |
| <code>endDate</code> | <code>Date</code> (date-time) | - |
| <code>environment?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.metrics.testMetricResultsControllerFetch(request)`

- **OnSuccess**: <code>[MetricResult](src/models/metric-result.ts)</code>
- **OnError**: throws <code>[Metrics.TestMetricResultsControllerFetchError](src/resources/metrics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.metrics.testMetricResultsControllerFetch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MetricResult, Metrics.TestMetricResultsControllerFetchError&gt;</code>, with `result.value` of type <code>[MetricResult](src/models/metric-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OpenFeatureRemoteEvaluationApiOfrep

> Source: [OpenFeatureRemoteEvaluationApiOfrep](src/resources/open-feature-remote-evaluation-api-ofrep.ts)

<details>
<summary><code>postOfrepV1EvaluateFlags(request?: OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsRequest, options?: RequestOptions): ApiPromise&lt;OfrepBulkEvaluationSuccess, OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return all flag values for a user context.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.openFeatureRemoteEvaluationApiOfrep.postOfrepV1EvaluateFlags();
  // TODO: Handle 'response' of type OfrepBulkEvaluationSuccess
} catch (err) {
  // TODO: Handle 'err' of type OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.openFeatureRemoteEvaluationApiOfrep.postOfrepV1EvaluateFlags().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OfrepBulkEvaluationSuccess
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ifNoneMatch?</code> | <code>string</code> | The request will be processed only if ETag doesn't match any of the values listed. |
| <code>body?</code> | <code>[OfrepBulkEvaluationRequest](src/models/ofrep-bulk-evaluation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.openFeatureRemoteEvaluationApiOfrep.postOfrepV1EvaluateFlags(request)`

- **OnSuccess**: <code>[OfrepBulkEvaluationSuccess](src/models/ofrep-bulk-evaluation-success.ts)</code>
- **OnError**: throws <code>[OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError](src/resources/open-feature-remote-evaluation-api-ofrep.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.openFeatureRemoteEvaluationApiOfrep.postOfrepV1EvaluateFlags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OfrepBulkEvaluationSuccess, OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsError&gt;</code>, with `result.value` of type <code>[OfrepBulkEvaluationSuccess](src/models/ofrep-bulk-evaluation-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postOfrepV1EvaluateFlagsByKey(request: OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyRequest, options?: RequestOptions): ApiPromise&lt;OfrepEvaluationSuccess, OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a single flag for a user context

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.openFeatureRemoteEvaluationApiOfrep.postOfrepV1EvaluateFlagsByKey({
    key: "some example string",
  });
  // TODO: Handle 'response' of type OfrepEvaluationSuccess
} catch (err) {
  // TODO: Handle 'err' of type OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.openFeatureRemoteEvaluationApiOfrep
  .postOfrepV1EvaluateFlagsByKey({ key: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OfrepEvaluationSuccess
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | - |
| <code>body?</code> | <code>[OfrepEvaluationRequest](src/models/ofrep-evaluation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.openFeatureRemoteEvaluationApiOfrep.postOfrepV1EvaluateFlagsByKey(request)`

- **OnSuccess**: <code>[OfrepEvaluationSuccess](src/models/ofrep-evaluation-success.ts)</code>
- **OnError**: throws <code>[OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError](src/resources/open-feature-remote-evaluation-api-ofrep.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.openFeatureRemoteEvaluationApiOfrep.postOfrepV1EvaluateFlagsByKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OfrepEvaluationSuccess, OpenFeatureRemoteEvaluationApiOfrep.PostOfrepV1EvaluateFlagsByKeyError&gt;</code>, with `result.value` of type <code>[OfrepEvaluationSuccess](src/models/ofrep-evaluation-success.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Overrides

> Source: [Overrides](src/resources/overrides.ts)

<details>
<summary><code>overridesControllerDeleteOverridesForFeature(request: Overrides.OverridesControllerDeleteOverridesForFeatureRequest, options?: RequestOptions): ApiPromise&lt;undefined, Overrides.OverridesControllerDeleteOverridesForFeatureError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.overrides.overridesControllerDeleteOverridesForFeature({
    feature: "some example string",
    project: "some example string",
    environment: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Overrides.OverridesControllerDeleteOverridesForFeatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.overrides
  .overridesControllerDeleteOverridesForFeature({
    feature: "some example string",
    project: "some example string",
    environment: "some example string",
  })
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
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>environment</code> | <code>string</code> | A Environment key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.overrides.overridesControllerDeleteOverridesForFeature(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Overrides.OverridesControllerDeleteOverridesForFeatureError](src/resources/overrides.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.overrides.overridesControllerDeleteOverridesForFeature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Overrides.OverridesControllerDeleteOverridesForFeatureError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overridesControllerDeleteOverridesForProject(request: Overrides.OverridesControllerDeleteOverridesForProjectRequest, options?: RequestOptions): ApiPromise&lt;undefined, Overrides.OverridesControllerDeleteOverridesForProjectError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.overrides.overridesControllerDeleteOverridesForProject({ project: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Overrides.OverridesControllerDeleteOverridesForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.overrides
  .overridesControllerDeleteOverridesForProject({ project: "some example string" })
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
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.overrides.overridesControllerDeleteOverridesForProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Overrides.OverridesControllerDeleteOverridesForProjectError](src/resources/overrides.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.overrides.overridesControllerDeleteOverridesForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Overrides.OverridesControllerDeleteOverridesForProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overridesControllerFindOne(request: Overrides.OverridesControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;OverrideResponse, Overrides.OverridesControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.overrides.overridesControllerFindOne({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type OverrideResponse
} catch (err) {
  // TODO: Handle 'err' of type Overrides.OverridesControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.overrides
  .overridesControllerFindOne({ feature: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OverrideResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.overrides.overridesControllerFindOne(request)`

- **OnSuccess**: <code>[OverrideResponse](src/models/override-response.ts)</code>
- **OnError**: throws <code>[Overrides.OverridesControllerFindOneError](src/resources/overrides.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.overrides.overridesControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OverrideResponse, Overrides.OverridesControllerFindOneError&gt;</code>, with `result.value` of type <code>[OverrideResponse](src/models/override-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overridesControllerFindOverridesForFeature(request: Overrides.OverridesControllerFindOverridesForFeatureRequest, options?: RequestOptions): ApiPromise&lt;FeatureOverrides, Overrides.OverridesControllerFindOverridesForFeatureError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.overrides.overridesControllerFindOverridesForFeature({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type FeatureOverrides
} catch (err) {
  // TODO: Handle 'err' of type Overrides.OverridesControllerFindOverridesForFeatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.overrides
  .overridesControllerFindOverridesForFeature({
    feature: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureOverrides
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>addMetadata?</code> | <code>boolean</code> | - |
| <code>environment?</code> | <code>string</code> | A Environment key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.overrides.overridesControllerFindOverridesForFeature(request)`

- **OnSuccess**: <code>[FeatureOverrides](src/models/feature-overrides.ts)</code>
- **OnError**: throws <code>[Overrides.OverridesControllerFindOverridesForFeatureError](src/resources/overrides.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.overrides.overridesControllerFindOverridesForFeature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureOverrides, Overrides.OverridesControllerFindOverridesForFeatureError&gt;</code>, with `result.value` of type <code>[FeatureOverrides](src/models/feature-overrides.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overridesControllerFindOverridesForProject(request: Overrides.OverridesControllerFindOverridesForProjectRequest, options?: RequestOptions): ApiPromise&lt;UserOverride[], Overrides.OverridesControllerFindOverridesForProjectError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.overrides.overridesControllerFindOverridesForProject({
    project: "some example string",
  });
  // TODO: Handle 'response' of type UserOverride[]
} catch (err) {
  // TODO: Handle 'err' of type Overrides.OverridesControllerFindOverridesForProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.overrides
  .overridesControllerFindOverridesForProject({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserOverride[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.overrides.overridesControllerFindOverridesForProject(request)`

- **OnSuccess**: <code>[UserOverride](src/models/user-override.ts)[]</code>
- **OnError**: throws <code>[Overrides.OverridesControllerFindOverridesForProjectError](src/resources/overrides.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.overrides.overridesControllerFindOverridesForProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserOverride[], Overrides.OverridesControllerFindOverridesForProjectError&gt;</code>, with `result.value` of type <code>[UserOverride](src/models/user-override.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>overridesControllerUpdateFeatureOverride(request: Overrides.OverridesControllerUpdateFeatureOverrideRequest, options?: RequestOptions): ApiPromise&lt;Override, Overrides.OverridesControllerUpdateFeatureOverrideError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.overrides.overridesControllerUpdateFeatureOverride({
    feature: "some example string",
    project: "some example string",
    body: { environment: "some example string", variation: "some example string" },
  });
  // TODO: Handle 'response' of type Override
} catch (err) {
  // TODO: Handle 'err' of type Overrides.OverridesControllerUpdateFeatureOverrideError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.overrides
  .overridesControllerUpdateFeatureOverride({
    feature: "some example string",
    project: "some example string",
    body: { environment: "some example string", variation: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Override
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateOverrideDto](src/models/update-override-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.overrides.overridesControllerUpdateFeatureOverride(request)`

- **OnSuccess**: <code>[Override](src/models/override.ts)</code>
- **OnError**: throws <code>[Overrides.OverridesControllerUpdateFeatureOverrideError](src/resources/overrides.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.overrides.overridesControllerUpdateFeatureOverride(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Override, Overrides.OverridesControllerUpdateFeatureOverrideError&gt;</code>, with `result.value` of type <code>[Override](src/models/override.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectChangeRequests

> Source: [ProjectChangeRequests](src/resources/project-change-requests.ts)

<details>
<summary><code>projectChangeRequestsControllerGetFeatureChangeRequests(request: ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest, options?: RequestOptions): ApiPromise&lt;FeatureChangeRequestSummary[], ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projectChangeRequests.projectChangeRequestsControllerGetFeatureChangeRequests(
    { project: "some example string" },
  );
  // TODO: Handle 'response' of type FeatureChangeRequestSummary[]
} catch (err) {
  // TODO: Handle 'err' of type ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectChangeRequests
  .projectChangeRequestsControllerGetFeatureChangeRequests({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureChangeRequestSummary[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>createdBy?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[Status1DevCycleManagementProjectChangeRequestsApi](src/models/status1-dev-cycle-management-project-change-requests-api.ts)</code> | - |
| <code>reviewer?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectChangeRequests.projectChangeRequestsControllerGetFeatureChangeRequests(request)`

- **OnSuccess**: <code>[FeatureChangeRequestSummary](src/models/feature-change-request-summary.ts)[]</code>
- **OnError**: throws <code>[ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError](src/resources/project-change-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectChangeRequests.projectChangeRequestsControllerGetFeatureChangeRequests(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureChangeRequestSummary[], ProjectChangeRequests.ProjectChangeRequestsControllerGetFeatureChangeRequestsError&gt;</code>, with `result.value` of type <code>[FeatureChangeRequestSummary](src/models/feature-change-request-summary.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>projectsControllerCreate(request: Projects.ProjectsControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.ProjectsControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new project within the authed organization.
The project key must be unique within the organization.
If this is called in an Organization that has permissions controlled via an external IdP (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only) - then no users will have permission to access this project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.projectsControllerCreate({
    body: { name: "some example string", key: "some example string" },
  });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectsControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .projectsControllerCreate({ body: { name: "some example string", key: "some example string" } })
  .asApiResult();
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
| <code>body</code> | <code>[CreateProjectDto](src/models/create-project-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectsControllerCreate(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.ProjectsControllerCreateError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectsControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.ProjectsControllerCreateError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>projectsControllerFindAll(request?: Projects.ProjectsControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;Project[], Projects.ProjectsControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all projects that the current API Token has permission to view.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.projectsControllerFindAll();
  // TODO: Handle 'response' of type Project[]
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectsControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.projectsControllerFindAll().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>createdBy?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectsControllerFindAll(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)[]</code>
- **OnError**: throws <code>[Projects.ProjectsControllerFindAllError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectsControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project[], Projects.ProjectsControllerFindAllError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>projectsControllerFindOne(request: Projects.ProjectsControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.ProjectsControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Project by ID or key.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.projectsControllerFindOne({ key: "some example string" });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectsControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.projectsControllerFindOne({ key: "some example string" }).asApiResult();
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
| <code>key</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectsControllerFindOne(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.ProjectsControllerFindOneError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectsControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.ProjectsControllerFindOneError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>projectsControllerGetStaleness(request: Projects.ProjectsControllerGetStalenessRequest, options?: RequestOptions): ApiPromise&lt;FeatureStalenessEntity[], Projects.ProjectsControllerGetStalenessError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.projectsControllerGetStaleness({ key: "some example string" });
  // TODO: Handle 'response' of type FeatureStalenessEntity[]
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectsControllerGetStalenessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .projectsControllerGetStaleness({ key: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureStalenessEntity[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>createdBy?</code> | <code>string</code> | - |
| <code>includeSilenced?</code> | <code>boolean</code> | -<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectsControllerGetStaleness(request)`

- **OnSuccess**: <code>[FeatureStalenessEntity](src/models/feature-staleness-entity.ts)[]</code>
- **OnError**: throws <code>[Projects.ProjectsControllerGetStalenessError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectsControllerGetStaleness(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureStalenessEntity[], Projects.ProjectsControllerGetStalenessError&gt;</code>, with `result.value` of type <code>[FeatureStalenessEntity](src/models/feature-staleness-entity.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>projectsControllerRemove(request: Projects.ProjectsControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, Projects.ProjectsControllerRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a Project by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projects.projectsControllerRemove({ key: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectsControllerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.projectsControllerRemove({ key: "some example string" }).asApiResult();
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
| <code>key</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectsControllerRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Projects.ProjectsControllerRemoveError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectsControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Projects.ProjectsControllerRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>projectsControllerUpdate(request: Projects.ProjectsControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.ProjectsControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Project by ID or key. Certain facets of the project settings require additional permissions to update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.projectsControllerUpdate({ key: "some example string", body: {} });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectsControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .projectsControllerUpdate({ key: "some example string", body: {} })
  .asApiResult();
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
| <code>key</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateProjectDto](src/models/update-project-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectsControllerUpdate(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.ProjectsControllerUpdateError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectsControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.ProjectsControllerUpdateError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>projectsControllerUpdateProtectedSettings(request: Projects.ProjectsControllerUpdateProtectedSettingsRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.ProjectsControllerUpdateProtectedSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the Protect Settings for a Project by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.projectsControllerUpdateProtectedSettings({
    key: "some example string",
    body: {
      settings: {
        featureApprovalWorkflow: {
          enabled: true,
          allowPublisherBypass: true,
          defaultReviewers: ["some example string"],
        },
        staleness: {
          enabled: true,
          released: {},
          unmodifiedLong: {},
          unmodifiedShort: {},
          unused: {},
          email: {},
        },
      },
    },
  });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectsControllerUpdateProtectedSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .projectsControllerUpdateProtectedSettings({
    key: "some example string",
    body: {
      settings: {
        featureApprovalWorkflow: {
          enabled: true,
          allowPublisherBypass: true,
          defaultReviewers: ["some example string"],
        },
        staleness: {
          enabled: true,
          released: {},
          unmodifiedLong: {},
          unmodifiedShort: {},
          unused: {},
          email: {},
        },
      },
    },
  })
  .asApiResult();
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
| <code>key</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateProtectedProjectSettingsDto](src/models/update-protected-project-settings-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectsControllerUpdateProtectedSettings(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.ProjectsControllerUpdateProtectedSettingsError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectsControllerUpdateProtectedSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.ProjectsControllerUpdateProtectedSettingsError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>projectsControllerUpdateSettings(request: Projects.ProjectsControllerUpdateSettingsRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.ProjectsControllerUpdateSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a subset of settings for a Project that only requires publisher permissions

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.projectsControllerUpdateSettings({
    key: "some example string",
    body: {
      settings: {
        edgeDb: { enabled: true },
        optIn: {
          enabled: true,
          title: "some example string",
          description: "some example string",
          imageUrl: "some example string",
          colors: {},
          poweredByAlignment: {},
        },
        sdkTypeVisibility: { enabledInFeatureSettings: true },
        lifeCycle: { disableCodeRefChecks: true },
        obfuscation: { enabled: true, required: true },
        featureApprovalWorkflow: {
          enabled: true,
          allowPublisherBypass: true,
          defaultReviewers: ["some example string"],
        },
        disablePassthroughRollouts: true,
        staleness: {
          enabled: true,
          released: {},
          unmodifiedLong: {},
          unmodifiedShort: {},
          unused: {},
          email: {},
        },
        dynatrace: { enabled: true, environmentMap: {} },
      },
    },
  });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.ProjectsControllerUpdateSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects
  .projectsControllerUpdateSettings({
    key: "some example string",
    body: {
      settings: {
        edgeDb: { enabled: true },
        optIn: {
          enabled: true,
          title: "some example string",
          description: "some example string",
          imageUrl: "some example string",
          colors: {},
          poweredByAlignment: {},
        },
        sdkTypeVisibility: { enabledInFeatureSettings: true },
        lifeCycle: { disableCodeRefChecks: true },
        obfuscation: { enabled: true, required: true },
        featureApprovalWorkflow: {
          enabled: true,
          allowPublisherBypass: true,
          defaultReviewers: ["some example string"],
        },
        disablePassthroughRollouts: true,
        staleness: {
          enabled: true,
          released: {},
          unmodifiedLong: {},
          unmodifiedShort: {},
          unused: {},
          email: {},
        },
        dynatrace: { enabled: true, environmentMap: {} },
      },
    },
  })
  .asApiResult();
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
| <code>key</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateProjectSettingsDto](src/models/update-project-settings-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.projectsControllerUpdateSettings(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.ProjectsControllerUpdateSettingsError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.projectsControllerUpdateSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.ProjectsControllerUpdateSettingsError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](src/resources/results.ts)

<details>
<summary><code>resultsControllerGetEvaluationsPerHourByProject(request: Results.ResultsControllerGetEvaluationsPerHourByProjectRequest, options?: RequestOptions): ApiPromise&lt;ResultProjectEvaluationsByHourDto, Results.ResultsControllerGetEvaluationsPerHourByProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch unique user variable evaluations per hour for a project

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.results.resultsControllerGetEvaluationsPerHourByProject({
    project: "some example string",
  });
  // TODO: Handle 'response' of type ResultProjectEvaluationsByHourDto
} catch (err) {
  // TODO: Handle 'err' of type Results.ResultsControllerGetEvaluationsPerHourByProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.results
  .resultsControllerGetEvaluationsPerHourByProject({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResultProjectEvaluationsByHourDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>startDate?</code> | <code>number</code> | - |
| <code>endDate?</code> | <code>number</code> | - |
| <code>environment?</code> | <code>string</code> | A Environment key or ID |
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | - |
| <code>sdkType?</code> | <code>[SdkTypeDevCycleManagementResultsApi](src/models/sdk-type-dev-cycle-management-results-api.ts)</code> | SDK type to filter evaluation results by |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.results.resultsControllerGetEvaluationsPerHourByProject(request)`

- **OnSuccess**: <code>[ResultProjectEvaluationsByHourDto](src/models/result-project-evaluations-by-hour-dto.ts)</code>
- **OnError**: throws <code>[Results.ResultsControllerGetEvaluationsPerHourByProjectError](src/resources/results.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.results.resultsControllerGetEvaluationsPerHourByProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResultProjectEvaluationsByHourDto, Results.ResultsControllerGetEvaluationsPerHourByProjectError&gt;</code>, with `result.value` of type <code>[ResultProjectEvaluationsByHourDto](src/models/result-project-evaluations-by-hour-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resultsControllerGetTotalEvaluationsPerHourByFeature(request: Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest, options?: RequestOptions): ApiPromise&lt;ResultEvaluationsByHourDto, Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch total variable evaluations per hour for a feature

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.results.resultsControllerGetTotalEvaluationsPerHourByFeature({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type ResultEvaluationsByHourDto
} catch (err) {
  // TODO: Handle 'err' of type Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.results
  .resultsControllerGetTotalEvaluationsPerHourByFeature({
    feature: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResultEvaluationsByHourDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>startDate?</code> | <code>number</code> | - |
| <code>endDate?</code> | <code>number</code> | - |
| <code>platform?</code> | <code>string</code> | - |
| <code>variable?</code> | <code>string</code> | - |
| <code>environment?</code> | <code>string</code> | A Environment key or ID |
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | - |
| <code>sdkType?</code> | <code>[SdkTypeDevCycleManagementResultsApi](src/models/sdk-type-dev-cycle-management-results-api.ts)</code> | SDK type to filter evaluation results by |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.results.resultsControllerGetTotalEvaluationsPerHourByFeature(request)`

- **OnSuccess**: <code>[ResultEvaluationsByHourDto](src/models/result-evaluations-by-hour-dto.ts)</code>
- **OnError**: throws <code>[Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError](src/resources/results.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.results.resultsControllerGetTotalEvaluationsPerHourByFeature(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResultEvaluationsByHourDto, Results.ResultsControllerGetTotalEvaluationsPerHourByFeatureError&gt;</code>, with `result.value` of type <code>[ResultEvaluationsByHourDto](src/models/result-evaluations-by-hour-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resultsControllerGetTotalEvaluationsPerHourByProject(request: Results.ResultsControllerGetTotalEvaluationsPerHourByProjectRequest, options?: RequestOptions): ApiPromise&lt;ResultProjectEvaluationsByHourDto, Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch total variable evaluations per hour for a project

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.results.resultsControllerGetTotalEvaluationsPerHourByProject({
    project: "some example string",
  });
  // TODO: Handle 'response' of type ResultProjectEvaluationsByHourDto
} catch (err) {
  // TODO: Handle 'err' of type Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.results
  .resultsControllerGetTotalEvaluationsPerHourByProject({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResultProjectEvaluationsByHourDto
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>startDate?</code> | <code>number</code> | - |
| <code>endDate?</code> | <code>number</code> | - |
| <code>environment?</code> | <code>string</code> | A Environment key or ID |
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | - |
| <code>sdkType?</code> | <code>[SdkTypeDevCycleManagementResultsApi](src/models/sdk-type-dev-cycle-management-results-api.ts)</code> | SDK type to filter evaluation results by |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.results.resultsControllerGetTotalEvaluationsPerHourByProject(request)`

- **OnSuccess**: <code>[ResultProjectEvaluationsByHourDto](src/models/result-project-evaluations-by-hour-dto.ts)</code>
- **OnError**: throws <code>[Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError](src/resources/results.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.results.resultsControllerGetTotalEvaluationsPerHourByProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResultProjectEvaluationsByHourDto, Results.ResultsControllerGetTotalEvaluationsPerHourByProjectError&gt;</code>, with `result.value` of type <code>[ResultProjectEvaluationsByHourDto](src/models/result-project-evaluations-by-hour-dto.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UserProfiles

> Source: [UserProfiles](src/resources/user-profiles.ts)

<details>
<summary><code>userProfilesControllerCreateOrUpdate(request: UserProfiles.UserProfilesControllerCreateOrUpdateRequest, options?: RequestOptions): ApiPromise&lt;ProjectUserProfile, UserProfiles.UserProfilesControllerCreateOrUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or Update a User Profile for Overrides

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userProfiles.userProfilesControllerCreateOrUpdate({
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type ProjectUserProfile
} catch (err) {
  // TODO: Handle 'err' of type UserProfiles.UserProfilesControllerCreateOrUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userProfiles
  .userProfilesControllerCreateOrUpdate({ project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectUserProfile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateUserProfileDto](src/models/update-user-profile-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userProfiles.userProfilesControllerCreateOrUpdate(request)`

- **OnSuccess**: <code>[ProjectUserProfile](src/models/project-user-profile.ts)</code>
- **OnError**: throws <code>[UserProfiles.UserProfilesControllerCreateOrUpdateError](src/resources/user-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userProfiles.userProfilesControllerCreateOrUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectUserProfile, UserProfiles.UserProfilesControllerCreateOrUpdateError&gt;</code>, with `result.value` of type <code>[ProjectUserProfile](src/models/project-user-profile.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userProfilesControllerFindAll(request: UserProfiles.UserProfilesControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;ProjectUserProfile, UserProfiles.UserProfilesControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get User Profile for the authenticated User in the specified Project

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userProfiles.userProfilesControllerFindAll({
    project: "some example string",
  });
  // TODO: Handle 'response' of type ProjectUserProfile
} catch (err) {
  // TODO: Handle 'err' of type UserProfiles.UserProfilesControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userProfiles
  .userProfilesControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProjectUserProfile
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userProfiles.userProfilesControllerFindAll(request)`

- **OnSuccess**: <code>[ProjectUserProfile](src/models/project-user-profile.ts)</code>
- **OnError**: throws <code>[UserProfiles.UserProfilesControllerFindAllError](src/resources/user-profiles.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userProfiles.userProfilesControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProjectUserProfile, UserProfiles.UserProfilesControllerFindAllError&gt;</code>, with `result.value` of type <code>[ProjectUserProfile](src/models/project-user-profile.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## VariablesApi

> Source: [VariablesApi](src/resources/variables-api.ts)

<details>
<summary><code>variablesControllerCreate(request: VariablesApi.VariablesControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variablesApi.variablesControllerCreate({
    project: "some example string",
    body: { key: "some example string", type: TypeDevCycleManagementVariablesApi.String },
  });
  // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
} catch (err) {
  // TODO: Handle 'err' of type VariablesApi.VariablesControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variablesApi
  .variablesControllerCreate({
    project: "some example string",
    body: { key: "some example string", type: TypeDevCycleManagementVariablesApi.String },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VariableDevCycleManagementVariablesApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateVariableDtoDevCycleManagementVariablesApi](src/models/create-variable-dto-dev-cycle-management-variables-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variablesApi.variablesControllerCreate(request)`

- **OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)</code>
- **OnError**: throws <code>[VariablesApi.VariablesControllerCreateError](src/resources/variables-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variablesApi.variablesControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerCreateError&gt;</code>, with `result.value` of type <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variablesControllerFindAll(request: VariablesApi.VariablesControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;VariableDevCycleManagementVariablesApi[], VariablesApi.VariablesControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variablesApi.variablesControllerFindAll({ project: "some example string" });
  // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi[]
} catch (err) {
  // TODO: Handle 'err' of type VariablesApi.VariablesControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variablesApi
  .variablesControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VariableDevCycleManagementVariablesApi[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>feature?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[Type3DevCycleManagementVariablesApi](src/models/type3-dev-cycle-management-variables-api.ts)</code> | - |
| <code>status?</code> | <code>[Status2DevCycleManagementVariablesApi](src/models/status2-dev-cycle-management-variables-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variablesApi.variablesControllerFindAll(request)`

- **OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)[]</code>
- **OnError**: throws <code>[VariablesApi.VariablesControllerFindAllError](src/resources/variables-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variablesApi.variablesControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VariableDevCycleManagementVariablesApi[], VariablesApi.VariablesControllerFindAllError&gt;</code>, with `result.value` of type <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variablesControllerFindOne(request: VariablesApi.VariablesControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variablesApi.variablesControllerFindOne({
    key: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
} catch (err) {
  // TODO: Handle 'err' of type VariablesApi.VariablesControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variablesApi
  .variablesControllerFindOne({ key: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VariableDevCycleManagementVariablesApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Variable key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variablesApi.variablesControllerFindOne(request)`

- **OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)</code>
- **OnError**: throws <code>[VariablesApi.VariablesControllerFindOneError](src/resources/variables-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variablesApi.variablesControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerFindOneError&gt;</code>, with `result.value` of type <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variablesControllerRemove(request: VariablesApi.VariablesControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;undefined, VariablesApi.VariablesControllerRemoveError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.variablesApi.variablesControllerRemove({
    key: "some example string",
    project: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type VariablesApi.VariablesControllerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variablesApi
  .variablesControllerRemove({ key: "some example string", project: "some example string" })
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
| <code>key</code> | <code>string</code> | A Variable key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variablesApi.variablesControllerRemove(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[VariablesApi.VariablesControllerRemoveError](src/resources/variables-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variablesApi.variablesControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, VariablesApi.VariablesControllerRemoveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variablesControllerUpdate(request: VariablesApi.VariablesControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variablesApi.variablesControllerUpdate({
    key: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
} catch (err) {
  // TODO: Handle 'err' of type VariablesApi.VariablesControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variablesApi
  .variablesControllerUpdate({ key: "some example string", project: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VariableDevCycleManagementVariablesApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Variable key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateVariableDto](src/models/update-variable-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variablesApi.variablesControllerUpdate(request)`

- **OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)</code>
- **OnError**: throws <code>[VariablesApi.VariablesControllerUpdateError](src/resources/variables-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variablesApi.variablesControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerUpdateError&gt;</code>, with `result.value` of type <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variablesControllerUpdateStatus(request: VariablesApi.VariablesControllerUpdateStatusRequest, options?: RequestOptions): ApiPromise&lt;VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerUpdateStatusError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variablesApi.variablesControllerUpdateStatus({
    key: "some example string",
    project: "some example string",
    body: { status: Status1DevCycleManagementVariablesApi.Active },
  });
  // TODO: Handle 'response' of type VariableDevCycleManagementVariablesApi
} catch (err) {
  // TODO: Handle 'err' of type VariablesApi.VariablesControllerUpdateStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variablesApi
  .variablesControllerUpdateStatus({
    key: "some example string",
    project: "some example string",
    body: { status: Status1DevCycleManagementVariablesApi.Active },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VariableDevCycleManagementVariablesApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Variable key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateVariableStatusDto](src/models/update-variable-status-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variablesApi.variablesControllerUpdateStatus(request)`

- **OnSuccess**: <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)</code>
- **OnError**: throws <code>[VariablesApi.VariablesControllerUpdateStatusError](src/resources/variables-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variablesApi.variablesControllerUpdateStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VariableDevCycleManagementVariablesApi, VariablesApi.VariablesControllerUpdateStatusError&gt;</code>, with `result.value` of type <code>[VariableDevCycleManagementVariablesApi](src/models/variable-dev-cycle-management-variables-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Variations

> Source: [Variations](src/resources/variations.ts)

<details>
<summary><code>variationsControllerCreate(request: Variations.VariationsControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementMetricAssociationsApi, Variations.VariationsControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new variation within a Feature

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variations.variationsControllerCreate({
    project: "some example string",
    feature: "some example string",
    body: { key: "some example string", name: "some example string" },
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementMetricAssociationsApi
} catch (err) {
  // TODO: Handle 'err' of type Variations.VariationsControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variations
  .variationsControllerCreate({
    project: "some example string",
    feature: "some example string",
    body: { key: "some example string", name: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementMetricAssociationsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>body</code> | <code>[FeatureVariationDto](src/models/feature-variation-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variations.variationsControllerCreate(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementMetricAssociationsApi](src/models/feature-dev-cycle-management-metric-associations-api.ts)</code>
- **OnError**: throws <code>[Variations.VariationsControllerCreateError](src/resources/variations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variations.variationsControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementMetricAssociationsApi, Variations.VariationsControllerCreateError&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementMetricAssociationsApi](src/models/feature-dev-cycle-management-metric-associations-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variationsControllerFindAll(request: Variations.VariationsControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;Variation[], Variations.VariationsControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of variations for a feature

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variations.variationsControllerFindAll({
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type Variation[]
} catch (err) {
  // TODO: Handle 'err' of type Variations.VariationsControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variations
  .variationsControllerFindAll({ feature: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Variation[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variations.variationsControllerFindAll(request)`

- **OnSuccess**: <code>[Variation](src/models/variation.ts)[]</code>
- **OnError**: throws <code>[Variations.VariationsControllerFindAllError](src/resources/variations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variations.variationsControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Variation[], Variations.VariationsControllerFindAllError&gt;</code>, with `result.value` of type <code>[Variation](src/models/variation.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variationsControllerFindOne(request: Variations.VariationsControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;Variation, Variations.VariationsControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a variation by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variations.variationsControllerFindOne({
    key: "some example string",
    feature: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type Variation
} catch (err) {
  // TODO: Handle 'err' of type Variations.VariationsControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variations
  .variationsControllerFindOne({
    key: "some example string",
    feature: "some example string",
    project: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Variation
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Variation key or ID |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variations.variationsControllerFindOne(request)`

- **OnSuccess**: <code>[Variation](src/models/variation.ts)</code>
- **OnError**: throws <code>[Variations.VariationsControllerFindOneError](src/resources/variations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variations.variationsControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Variation, Variations.VariationsControllerFindOneError&gt;</code>, with `result.value` of type <code>[Variation](src/models/variation.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>variationsControllerUpdate(request: Variations.VariationsControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;FeatureDevCycleManagementMetricAssociationsApi, Variations.VariationsControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a variation by ID or key

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.variations.variationsControllerUpdate({
    key: "some example string",
    feature: "some example string",
    project: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type FeatureDevCycleManagementMetricAssociationsApi
} catch (err) {
  // TODO: Handle 'err' of type Variations.VariationsControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.variations
  .variationsControllerUpdate({
    key: "some example string",
    feature: "some example string",
    project: "some example string",
    body: {},
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeatureDevCycleManagementMetricAssociationsApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | A Feature key or ID |
| <code>feature</code> | <code>string</code> | A Feature key or ID |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateFeatureVariationDto](src/models/update-feature-variation-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.variations.variationsControllerUpdate(request)`

- **OnSuccess**: <code>[FeatureDevCycleManagementMetricAssociationsApi](src/models/feature-dev-cycle-management-metric-associations-api.ts)</code>
- **OnError**: throws <code>[Variations.VariationsControllerUpdateError](src/resources/variations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.variations.variationsControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeatureDevCycleManagementMetricAssociationsApi, Variations.VariationsControllerUpdateError&gt;</code>, with `result.value` of type <code>[FeatureDevCycleManagementMetricAssociationsApi](src/models/feature-dev-cycle-management-metric-associations-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Webhooks

> Source: [Webhooks](src/resources/webhooks.ts)

<details>
<summary><code>webhooksControllerCreate(request: Webhooks.WebhooksControllerCreateRequest, options?: RequestOptions): ApiPromise&lt;Webhook, Webhooks.WebhooksControllerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Webhook

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksControllerCreate({
    project: "some example string",
    body: { name: "some example string", events: ["some example string"], url: "some example string" },
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksControllerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .webhooksControllerCreate({
    project: "some example string",
    body: { name: "some example string", events: ["some example string"], url: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[CreateWebhookDto](src/models/create-webhook-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksControllerCreate(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[Webhooks.WebhooksControllerCreateError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksControllerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, Webhooks.WebhooksControllerCreateError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksControllerFindAll(request: Webhooks.WebhooksControllerFindAllRequest, options?: RequestOptions): ApiPromise&lt;Webhook[], Webhooks.WebhooksControllerFindAllError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksControllerFindAll({ project: "some example string" });
  // TODO: Handle 'response' of type Webhook[]
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksControllerFindAllError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .webhooksControllerFindAll({ project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>perPage?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "createdAt" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | -<br>**Default**: "desc" |
| <code>search?</code> | <code>string</code> | - |
| <code>createdBy?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksControllerFindAll(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)[]</code>
- **OnError**: throws <code>[Webhooks.WebhooksControllerFindAllError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksControllerFindAll(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook[], Webhooks.WebhooksControllerFindAllError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksControllerFindOne(request: Webhooks.WebhooksControllerFindOneRequest, options?: RequestOptions): ApiPromise&lt;Webhook, Webhooks.WebhooksControllerFindOneError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a webhook by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksControllerFindOne({
    id: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksControllerFindOneError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .webhooksControllerFindOne({ id: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksControllerFindOne(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[Webhooks.WebhooksControllerFindOneError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksControllerFindOne(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, Webhooks.WebhooksControllerFindOneError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksControllerRemove(request: Webhooks.WebhooksControllerRemoveRequest, options?: RequestOptions): ApiPromise&lt;Webhook, Webhooks.WebhooksControllerRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook by ID

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksControllerRemove({
    id: "some example string",
    project: "some example string",
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksControllerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .webhooksControllerRemove({ id: "some example string", project: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksControllerRemove(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[Webhooks.WebhooksControllerRemoveError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksControllerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, Webhooks.WebhooksControllerRemoveError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhooksControllerUpdate(request: Webhooks.WebhooksControllerUpdateRequest, options?: RequestOptions): ApiPromise&lt;Webhook, Webhooks.WebhooksControllerUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a Webhook

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhooks.webhooksControllerUpdate({
    id: "some example string",
    project: "some example string",
    body: { feature: "some example string", environments: ["some example string"] },
  });
  // TODO: Handle 'response' of type Webhook
} catch (err) {
  // TODO: Handle 'err' of type Webhooks.WebhooksControllerUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhooks
  .webhooksControllerUpdate({
    id: "some example string",
    project: "some example string",
    body: { feature: "some example string", environments: ["some example string"] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Webhook
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>project</code> | <code>string</code> | A Project key or ID |
| <code>body</code> | <code>[UpdateWebhookDto](src/models/update-webhook-dto.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhooks.webhooksControllerUpdate(request)`

- **OnSuccess**: <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: throws <code>[Webhooks.WebhooksControllerUpdateError](src/resources/webhooks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhooks.webhooksControllerUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Webhook, Webhooks.WebhooksControllerUpdateError&gt;</code>, with `result.value` of type <code>[Webhook](src/models/webhook.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DevCycleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

