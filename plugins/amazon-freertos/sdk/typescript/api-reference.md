# Reference

> Source: [AmazonFreeRtosClient](src/client.ts)

## OtaUpdates

> Source: [OtaUpdates](src/resources/ota-updates.ts)

<details>
<summary><code>createOtaUpdate(request: OtaUpdates.CreateOtaUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;OtaUpdate, OtaUpdates.CreateOtaUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an AWS IoT OTA update on a target group of devices.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.otaUpdates.createOtaUpdate({
    body: { otaUpdateId: "some example string", targets: ["some example string"], files: [{}] },
  });
  // TODO: Handle 'response' of type OtaUpdate
} catch (err) {
  // TODO: Handle 'err' of type OtaUpdates.CreateOtaUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.otaUpdates
  .createOtaUpdate({
    body: { otaUpdateId: "some example string", targets: ["some example string"], files: [{}] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OtaUpdate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateOtaUpdateRequest](src/models/create-ota-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.otaUpdates.createOtaUpdate(request)`

- **OnSuccess**: <code>[OtaUpdate](src/models/ota-update.ts)</code>
- **OnError**: throws <code>[OtaUpdates.CreateOtaUpdateError](src/resources/ota-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.otaUpdates.createOtaUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OtaUpdate, OtaUpdates.CreateOtaUpdateError&gt;</code>, with `result.value` of type <code>[OtaUpdate](src/models/ota-update.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOtaUpdate(request: OtaUpdates.DeleteOtaUpdateRequest, options?: RequestOptions): ApiPromise&lt;undefined, OtaUpdates.DeleteOtaUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an OTA update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.otaUpdates.deleteOtaUpdate({ otaUpdateId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type OtaUpdates.DeleteOtaUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.otaUpdates.deleteOtaUpdate({ otaUpdateId: "some example string" }).asApiResult();
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
| <code>otaUpdateId</code> | <code>string</code> | The OTA update ID to delete. |
| <code>deleteStream?</code> | <code>boolean</code> | Whether to delete the stream associated with the update. |
| <code>forceDeleteAwsJob?</code> | <code>boolean</code> | Whether to force delete the associated AWS IoT job. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.otaUpdates.deleteOtaUpdate(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[OtaUpdates.DeleteOtaUpdateError](src/resources/ota-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.otaUpdates.deleteOtaUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, OtaUpdates.DeleteOtaUpdateError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOtaUpdate(request: OtaUpdates.GetOtaUpdateRequest, options?: RequestOptions): ApiPromise&lt;OtaUpdateInfo, OtaUpdates.GetOtaUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets an OTA update.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.otaUpdates.getOtaUpdate({ otaUpdateId: "some example string" });
  // TODO: Handle 'response' of type OtaUpdateInfo
} catch (err) {
  // TODO: Handle 'err' of type OtaUpdates.GetOtaUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.otaUpdates.getOtaUpdate({ otaUpdateId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OtaUpdateInfo
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>otaUpdateId</code> | <code>string</code> | The OTA update ID. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.otaUpdates.getOtaUpdate(request)`

- **OnSuccess**: <code>[OtaUpdateInfo](src/models/ota-update-info.ts)</code>
- **OnError**: throws <code>[OtaUpdates.GetOtaUpdateError](src/resources/ota-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.otaUpdates.getOtaUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OtaUpdateInfo, OtaUpdates.GetOtaUpdateError&gt;</code>, with `result.value` of type <code>[OtaUpdateInfo](src/models/ota-update-info.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOtaUpdates(request?: OtaUpdates.ListOtaUpdatesRequest, options?: RequestOptions): ApiPromise&lt;OtaUpdatesResponse, OtaUpdates.ListOtaUpdatesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists OTA updates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.otaUpdates.listOtaUpdates();
  // TODO: Handle 'response' of type OtaUpdatesResponse
} catch (err) {
  // TODO: Handle 'err' of type OtaUpdates.ListOtaUpdatesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.otaUpdates.listOtaUpdates().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OtaUpdatesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>maxResults?</code> | <code>number</code> | Maximum results. |
| <code>nextToken?</code> | <code>string</code> | Pagination token. |
| <code>otaUpdateStatus?</code> | <code>string</code> | Filter by OTA update status. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.otaUpdates.listOtaUpdates(request)`

- **OnSuccess**: <code>[OtaUpdatesResponse](src/models/ota-updates-response.ts)</code>
- **OnError**: throws <code>[OtaUpdates.ListOtaUpdatesError](src/resources/ota-updates.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.otaUpdates.listOtaUpdates(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OtaUpdatesResponse, OtaUpdates.ListOtaUpdatesError&gt;</code>, with `result.value` of type <code>[OtaUpdatesResponse](src/models/ota-updates-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SoftwareConfigurations

> Source: [SoftwareConfigurations](src/resources/software-configurations.ts)

<details>
<summary><code>createSoftwareConfiguration(request: SoftwareConfigurations.CreateSoftwareConfigurationRequestParams, options?: RequestOptions): ApiPromise&lt;SoftwareConfiguration, SoftwareConfigurations.CreateSoftwareConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a FreeRTOS software configuration record specifying the libraries and settings for a target hardware platform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareConfigurations.createSoftwareConfiguration({
    body: { name: "some example string", hardwarePlatform: "some example string" },
  });
  // TODO: Handle 'response' of type SoftwareConfiguration
} catch (err) {
  // TODO: Handle 'err' of type SoftwareConfigurations.CreateSoftwareConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareConfigurations
  .createSoftwareConfiguration({
    body: { name: "some example string", hardwarePlatform: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SoftwareConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSoftwareConfigurationRequest](src/models/create-software-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.softwareConfigurations.createSoftwareConfiguration(request)`

- **OnSuccess**: <code>[SoftwareConfiguration](src/models/software-configuration.ts)</code>
- **OnError**: throws <code>[SoftwareConfigurations.CreateSoftwareConfigurationError](src/resources/software-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareConfigurations.createSoftwareConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SoftwareConfiguration, SoftwareConfigurations.CreateSoftwareConfigurationError&gt;</code>, with `result.value` of type <code>[SoftwareConfiguration](src/models/software-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSoftwareConfiguration(request: SoftwareConfigurations.DeleteSoftwareConfigurationRequest, options?: RequestOptions): ApiPromise&lt;undefined, SoftwareConfigurations.DeleteSoftwareConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a FreeRTOS software configuration record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.softwareConfigurations.deleteSoftwareConfiguration({ configId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type SoftwareConfigurations.DeleteSoftwareConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareConfigurations
  .deleteSoftwareConfiguration({ configId: "some example string" })
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
| <code>configId</code> | <code>string</code> | ID of the software configuration to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.softwareConfigurations.deleteSoftwareConfiguration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[SoftwareConfigurations.DeleteSoftwareConfigurationError](src/resources/software-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareConfigurations.deleteSoftwareConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, SoftwareConfigurations.DeleteSoftwareConfigurationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeSoftwareConfiguration(request: SoftwareConfigurations.DescribeSoftwareConfigurationRequest, options?: RequestOptions): ApiPromise&lt;SoftwareConfiguration, SoftwareConfigurations.DescribeSoftwareConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a FreeRTOS software configuration record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareConfigurations.describeSoftwareConfiguration({
    configId: "some example string",
  });
  // TODO: Handle 'response' of type SoftwareConfiguration
} catch (err) {
  // TODO: Handle 'err' of type SoftwareConfigurations.DescribeSoftwareConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareConfigurations
  .describeSoftwareConfiguration({ configId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SoftwareConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>configId</code> | <code>string</code> | ID of the software configuration. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.softwareConfigurations.describeSoftwareConfiguration(request)`

- **OnSuccess**: <code>[SoftwareConfiguration](src/models/software-configuration.ts)</code>
- **OnError**: throws <code>[SoftwareConfigurations.DescribeSoftwareConfigurationError](src/resources/software-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareConfigurations.describeSoftwareConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SoftwareConfiguration, SoftwareConfigurations.DescribeSoftwareConfigurationError&gt;</code>, with `result.value` of type <code>[SoftwareConfiguration](src/models/software-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSoftwareConfigurations(request?: SoftwareConfigurations.ListSoftwareConfigurationsRequest, options?: RequestOptions): ApiPromise&lt;SoftwareConfigurationRecordsResponse, SoftwareConfigurations.ListSoftwareConfigurationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists FreeRTOS software configuration records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareConfigurations.listSoftwareConfigurations();
  // TODO: Handle 'response' of type SoftwareConfigurationRecordsResponse
} catch (err) {
  // TODO: Handle 'err' of type SoftwareConfigurations.ListSoftwareConfigurationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareConfigurations.listSoftwareConfigurations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SoftwareConfigurationRecordsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>maxResults?</code> | <code>number</code> | Maximum results to return. |
| <code>nextToken?</code> | <code>string</code> | Pagination token. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.softwareConfigurations.listSoftwareConfigurations(request)`

- **OnSuccess**: <code>[SoftwareConfigurationRecordsResponse](src/models/software-configuration-records-response.ts)</code>
- **OnError**: throws <code>[SoftwareConfigurations.ListSoftwareConfigurationsError](src/resources/software-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareConfigurations.listSoftwareConfigurations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SoftwareConfigurationRecordsResponse, SoftwareConfigurations.ListSoftwareConfigurationsError&gt;</code>, with `result.value` of type <code>[SoftwareConfigurationRecordsResponse](src/models/software-configuration-records-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSoftwareConfiguration(request: SoftwareConfigurations.UpdateSoftwareConfigurationRequestParams, options?: RequestOptions): ApiPromise&lt;SoftwareConfiguration, SoftwareConfigurations.UpdateSoftwareConfigurationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a FreeRTOS software configuration record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.softwareConfigurations.updateSoftwareConfiguration({
    configId: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SoftwareConfiguration
} catch (err) {
  // TODO: Handle 'err' of type SoftwareConfigurations.UpdateSoftwareConfigurationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.softwareConfigurations
  .updateSoftwareConfiguration({ configId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SoftwareConfiguration
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>configId</code> | <code>string</code> | ID of the software configuration to update. |
| <code>body</code> | <code>[UpdateSoftwareConfigurationRequest](src/models/update-software-configuration-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.softwareConfigurations.updateSoftwareConfiguration(request)`

- **OnSuccess**: <code>[SoftwareConfiguration](src/models/software-configuration.ts)</code>
- **OnError**: throws <code>[SoftwareConfigurations.UpdateSoftwareConfigurationError](src/resources/software-configurations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.softwareConfigurations.updateSoftwareConfiguration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SoftwareConfiguration, SoftwareConfigurations.UpdateSoftwareConfigurationError&gt;</code>, with `result.value` of type <code>[SoftwareConfiguration](src/models/software-configuration.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>listTagsForResource(request: Tags.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse, Tags.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags (metadata) you have assigned to the resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listTagsForResource({ resourceArn: "some example string" });
  // TODO: Handle 'response' of type TagsResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.listTagsForResource({ resourceArn: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resourceArn</code> | <code>string</code> | The ARN of the resource. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listTagsForResource(request)`

- **OnSuccess**: <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: throws <code>[Tags.ListTagsForResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse, Tags.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: Tags.TagResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, Tags.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds to or modifies the tags of the given resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tags.tagResource({
    resourceArn: "some example string",
    body: { tags: { key: "some example string" } },
  });
} catch (err) {
  // TODO: Handle 'err' of type Tags.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .tagResource({ resourceArn: "some example string", body: { tags: { key: "some example string" } } })
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
| <code>resourceArn</code> | <code>string</code> | The ARN of the resource. |
| <code>body</code> | <code>[TagsRequest](src/models/tags-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tags.TagResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tags.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonFreeRtosError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

