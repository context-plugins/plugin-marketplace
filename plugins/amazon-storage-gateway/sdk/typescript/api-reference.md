# Reference

> Source: [AwsStorageGatewayClient](src/client.ts)

## AmazonStorageGatewayRestApi

> Source: [AmazonStorageGatewayRestApi](src/resources/amazon-storage-gateway-rest-api.ts)

<details>
<summary><code>activateGateway(request: AmazonStorageGatewayRestApi.ActivateGatewayRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonStorageGatewayRestApi.ActivateGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonStorageGatewayRestApi.activateGateway({
    xAmzTarget: XAmzTarget.StorageGateway20130630ActivateGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonStorageGatewayRestApi.ActivateGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonStorageGatewayRestApi
  .activateGateway({ xAmzTarget: XAmzTarget.StorageGateway20130630ActivateGateway })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonStorageGatewayRestApi.activateGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonStorageGatewayRestApi.ActivateGatewayError](src/resources/amazon-storage-gateway-rest-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonStorageGatewayRestApi.activateGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonStorageGatewayRestApi.ActivateGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createNfsFileShare(request: AmazonStorageGatewayRestApi.CreateNfsFileShareRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonStorageGatewayRestApi.CreateNfsFileShareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard or symbolic links on a file share.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonStorageGatewayRestApi.createNfsFileShare({
    xAmzTarget: XAmzTarget2.StorageGateway20130630CreateNfsFileShare,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonStorageGatewayRestApi.CreateNfsFileShareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonStorageGatewayRestApi
  .createNfsFileShare({ xAmzTarget: XAmzTarget2.StorageGateway20130630CreateNfsFileShare })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonStorageGatewayRestApi.createNfsFileShare(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonStorageGatewayRestApi.CreateNfsFileShareError](src/resources/amazon-storage-gateway-rest-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonStorageGatewayRestApi.createNfsFileShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonStorageGatewayRestApi.CreateNfsFileShareError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeGatewayInformation(request: AmazonStorageGatewayRestApi.DescribeGatewayInformationRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonStorageGatewayRestApi.DescribeGatewayInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonStorageGatewayRestApi.describeGatewayInformation({
    xAmzTarget: XAmzTarget4.StorageGateway20130630DescribeGatewayInformation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonStorageGatewayRestApi.DescribeGatewayInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonStorageGatewayRestApi
  .describeGatewayInformation({ xAmzTarget: XAmzTarget4.StorageGateway20130630DescribeGatewayInformation })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonStorageGatewayRestApi.describeGatewayInformation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonStorageGatewayRestApi.DescribeGatewayInformationError](src/resources/amazon-storage-gateway-rest-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonStorageGatewayRestApi.describeGatewayInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonStorageGatewayRestApi.DescribeGatewayInformationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGateways(request: AmazonStorageGatewayRestApi.ListGatewaysRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonStorageGatewayRestApi.ListGatewaysError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonStorageGatewayRestApi.listGateways({
    xAmzTarget: XAmzTarget3.StorageGateway20130630ListGateways,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonStorageGatewayRestApi.ListGatewaysError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonStorageGatewayRestApi
  .listGateways({ xAmzTarget: XAmzTarget3.StorageGateway20130630ListGateways })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonStorageGatewayRestApi.listGateways(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonStorageGatewayRestApi.ListGatewaysError](src/resources/amazon-storage-gateway-rest-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonStorageGatewayRestApi.listGateways(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonStorageGatewayRestApi.ListGatewaysError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVolumes(request: AmazonStorageGatewayRestApi.ListVolumesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AmazonStorageGatewayRestApi.ListVolumesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonStorageGatewayRestApi.listVolumes({
    xAmzTarget: XAmzTarget1.StorageGateway20130630ListVolumes,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonStorageGatewayRestApi.ListVolumesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonStorageGatewayRestApi
  .listVolumes({ xAmzTarget: XAmzTarget1.StorageGateway20130630ListVolumes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonStorageGatewayRestApi.listVolumes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonStorageGatewayRestApi.ListVolumesError](src/resources/amazon-storage-gateway-rest-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonStorageGatewayRestApi.listVolumes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonStorageGatewayRestApi.ListVolumesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStorageGateway

> Source: [AwsStorageGateway](src/resources/aws-storage-gateway.ts)

<details>
<summary><code>activateGateway2(request: AwsStorageGateway.ActivateGateway2Request, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ActivateGateway2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.activateGateway2({
    xAmzTarget: XAmzTarget.StorageGateway20130630ActivateGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ActivateGateway2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .activateGateway2({ xAmzTarget: XAmzTarget.StorageGateway20130630ActivateGateway })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.activateGateway2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ActivateGateway2Error](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.activateGateway2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ActivateGateway2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addCache(request: AwsStorageGateway.AddCacheRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.AddCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.addCache({ xAmzTarget: XAmzTarget8.StorageGateway20130630AddCache });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.AddCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .addCache({ xAmzTarget: XAmzTarget8.StorageGateway20130630AddCache })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget8](src/models/xamz-target8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.addCache(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.AddCacheError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.addCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.AddCacheError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addTagsToResource(request: AwsStorageGateway.AddTagsToResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.AddTagsToResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage Gateway resources: Storage gateways of all types Storage volumes Virtual tapes NFS and SMB file shares File System associations You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.addTagsToResource({
    xAmzTarget: XAmzTarget11.StorageGateway20130630AddTagsToResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.AddTagsToResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .addTagsToResource({ xAmzTarget: XAmzTarget11.StorageGateway20130630AddTagsToResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget11](src/models/xamz-target11.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.addTagsToResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.AddTagsToResourceError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.addTagsToResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.AddTagsToResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addUploadBuffer(request: AwsStorageGateway.AddUploadBufferRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.AddUploadBufferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.addUploadBuffer({
    xAmzTarget: XAmzTarget14.StorageGateway20130630AddUploadBuffer,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.AddUploadBufferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .addUploadBuffer({ xAmzTarget: XAmzTarget14.StorageGateway20130630AddUploadBuffer })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget14](src/models/xamz-target14.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.addUploadBuffer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.AddUploadBufferError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.addUploadBuffer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.AddUploadBufferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addWorkingStorage(request: AwsStorageGateway.AddWorkingStorageRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.AddWorkingStorageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use AddUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the AddUploadBuffer operation to add upload buffer to a stored volume gateway. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.addWorkingStorage({
    xAmzTarget: XAmzTarget16.StorageGateway20130630AddWorkingStorage,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.AddWorkingStorageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .addWorkingStorage({ xAmzTarget: XAmzTarget16.StorageGateway20130630AddWorkingStorage })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget16](src/models/xamz-target16.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.addWorkingStorage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.AddWorkingStorageError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.addWorkingStorage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.AddWorkingStorageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assignTapePool(request: AwsStorageGateway.AssignTapePoolRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.AssignTapePoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.assignTapePool({
    xAmzTarget: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630AssignTapePool,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.AssignTapePoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .assignTapePool({
    xAmzTarget: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630AssignTapePool,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi](src/models/xamz-target1-aws-storage-gateway-aws-storage-gateway-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.assignTapePool(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.AssignTapePoolError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.assignTapePool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.AssignTapePoolError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>associateFileSystem(request: AwsStorageGateway.AssociateFileSystemRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.AssociateFileSystemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.associateFileSystem({
    xAmzTarget: XAmzTarget18.StorageGateway20130630AssociateFileSystem,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.AssociateFileSystemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .associateFileSystem({ xAmzTarget: XAmzTarget18.StorageGateway20130630AssociateFileSystem })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget18](src/models/xamz-target18.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.associateFileSystem(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.AssociateFileSystemError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.associateFileSystem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.AssociateFileSystemError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>attachVolume(request: AwsStorageGateway.AttachVolumeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.AttachVolumeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.attachVolume({
    xAmzTarget: XAmzTarget20.StorageGateway20130630AttachVolume,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.AttachVolumeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .attachVolume({ xAmzTarget: XAmzTarget20.StorageGateway20130630AttachVolume })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget20](src/models/xamz-target20.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.attachVolume(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.AttachVolumeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.attachVolume(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.AttachVolumeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelArchival(request: AwsStorageGateway.CancelArchivalRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CancelArchivalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.cancelArchival({
    xAmzTarget: XAmzTarget23.StorageGateway20130630CancelArchival,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CancelArchivalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .cancelArchival({ xAmzTarget: XAmzTarget23.StorageGateway20130630CancelArchival })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget23](src/models/xamz-target23.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.cancelArchival(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CancelArchivalError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.cancelArchival(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CancelArchivalError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelRetrieval(request: AwsStorageGateway.CancelRetrievalRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CancelRetrievalError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.cancelRetrieval({
    xAmzTarget: XAmzTarget24.StorageGateway20130630CancelRetrieval,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CancelRetrievalError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .cancelRetrieval({ xAmzTarget: XAmzTarget24.StorageGateway20130630CancelRetrieval })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget24](src/models/xamz-target24.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.cancelRetrieval(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CancelRetrievalError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.cancelRetrieval(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CancelRetrievalError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCachediScsiVolume(request: AwsStorageGateway.CreateCachediScsiVolumeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateCachediScsiVolumeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes value must be equal to or larger than the size of the copied volume, in bytes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createCachediScsiVolume({
    xAmzTarget: XAmzTarget25.StorageGateway20130630CreateCachediScsiVolume,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateCachediScsiVolumeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createCachediScsiVolume({ xAmzTarget: XAmzTarget25.StorageGateway20130630CreateCachediScsiVolume })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget25](src/models/xamz-target25.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createCachediScsiVolume(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateCachediScsiVolumeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createCachediScsiVolume(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateCachediScsiVolumeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createNfsFileShare2(request: AwsStorageGateway.CreateNfsFileShare2Request, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateNfsFileShare2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard or symbolic links on a file share.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createNfsFileShare2({
    xAmzTarget: XAmzTarget2.StorageGateway20130630CreateNfsFileShare,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateNfsFileShare2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createNfsFileShare2({ xAmzTarget: XAmzTarget2.StorageGateway20130630CreateNfsFileShare })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createNfsFileShare2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateNfsFileShare2Error](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createNfsFileShare2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateNfsFileShare2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSmbFileShare(request: AwsStorageGateway.CreateSmbFileShareRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateSmbFileShareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createSmbFileShare({
    xAmzTarget: XAmzTarget29.StorageGateway20130630CreateSmbFileShare,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateSmbFileShareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createSmbFileShare({ xAmzTarget: XAmzTarget29.StorageGateway20130630CreateSmbFileShare })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget29](src/models/xamz-target29.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createSmbFileShare(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateSmbFileShareError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createSmbFileShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateSmbFileShareError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSnapshot(request: AwsStorageGateway.CreateSnapshotRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateSnapshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference. Volume

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createSnapshot({
    xAmzTarget: XAmzTarget32.StorageGateway20130630CreateSnapshot,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateSnapshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createSnapshot({ xAmzTarget: XAmzTarget32.StorageGateway20130630CreateSnapshot })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget32](src/models/xamz-target32.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createSnapshot(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateSnapshotError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createSnapshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateSnapshotError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSnapshotFromVolumeRecoveryPoint(request: AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createSnapshotFromVolumeRecoveryPoint({
    xAmzTarget: XAmzTarget33.StorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createSnapshotFromVolumeRecoveryPoint({
    xAmzTarget: XAmzTarget33.StorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget33](src/models/xamz-target33.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createSnapshotFromVolumeRecoveryPoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createSnapshotFromVolumeRecoveryPoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateSnapshotFromVolumeRecoveryPointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createStorediScsiVolume(request: AwsStorageGateway.CreateStorediScsiVolumeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateStorediScsiVolumeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type. The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createStorediScsiVolume({
    xAmzTarget: XAmzTarget34.StorageGateway20130630CreateStorediScsiVolume,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateStorediScsiVolumeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createStorediScsiVolume({ xAmzTarget: XAmzTarget34.StorageGateway20130630CreateStorediScsiVolume })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget34](src/models/xamz-target34.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createStorediScsiVolume(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateStorediScsiVolumeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createStorediScsiVolume(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateStorediScsiVolumeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTapePool(request: AwsStorageGateway.CreateTapePoolRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateTapePoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are archived in the custom pool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createTapePool({
    xAmzTarget: XAmzTarget36.StorageGateway20130630CreateTapePool,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateTapePoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createTapePool({ xAmzTarget: XAmzTarget36.StorageGateway20130630CreateTapePool })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget36](src/models/xamz-target36.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createTapePool(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateTapePoolError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createTapePool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateTapePoolError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTapeWithBarcode(request: AwsStorageGateway.CreateTapeWithBarcodeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateTapeWithBarcodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage to a gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createTapeWithBarcode({
    xAmzTarget: XAmzTarget40.StorageGateway20130630CreateTapeWithBarcode,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateTapeWithBarcodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createTapeWithBarcode({ xAmzTarget: XAmzTarget40.StorageGateway20130630CreateTapeWithBarcode })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget40](src/models/xamz-target40.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createTapeWithBarcode(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateTapeWithBarcodeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createTapeWithBarcode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateTapeWithBarcodeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTapes(request: AwsStorageGateway.CreateTapesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.CreateTapesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.createTapes({ xAmzTarget: XAmzTarget39.StorageGateway20130630CreateTapes });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.CreateTapesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .createTapes({ xAmzTarget: XAmzTarget39.StorageGateway20130630CreateTapes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget39](src/models/xamz-target39.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.createTapes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.CreateTapesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.createTapes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.CreateTapesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteAutomaticTapeCreationPolicy(request: AwsStorageGateway.DeleteAutomaticTapeCreationPolicyRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteAutomaticTapeCreationPolicy({
    xAmzTarget: XAmzTarget44.StorageGateway20130630DeleteAutomaticTapeCreationPolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteAutomaticTapeCreationPolicy({
    xAmzTarget: XAmzTarget44.StorageGateway20130630DeleteAutomaticTapeCreationPolicy,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget44](src/models/xamz-target44.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteAutomaticTapeCreationPolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteAutomaticTapeCreationPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteAutomaticTapeCreationPolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBandwidthRateLimit(request: AwsStorageGateway.DeleteBandwidthRateLimitRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteBandwidthRateLimitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only for the stored volume, cached volume, and tape gateway types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteBandwidthRateLimit({
    xAmzTarget: XAmzTarget47.StorageGateway20130630DeleteBandwidthRateLimit,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteBandwidthRateLimitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteBandwidthRateLimit({ xAmzTarget: XAmzTarget47.StorageGateway20130630DeleteBandwidthRateLimit })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget47](src/models/xamz-target47.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteBandwidthRateLimit(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteBandwidthRateLimitError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteBandwidthRateLimit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteBandwidthRateLimitError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteChapCredentials(request: AwsStorageGateway.DeleteChapCredentialsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteChapCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteChapCredentials({
    xAmzTarget: XAmzTarget50.StorageGateway20130630DeleteChapCredentials,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteChapCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteChapCredentials({ xAmzTarget: XAmzTarget50.StorageGateway20130630DeleteChapCredentials })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget50](src/models/xamz-target50.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteChapCredentials(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteChapCredentialsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteChapCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteChapCredentialsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFileShare(request: AwsStorageGateway.DeleteFileShareRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteFileShareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteFileShare({
    xAmzTarget: XAmzTarget53.StorageGateway20130630DeleteFileShare,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteFileShareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteFileShare({ xAmzTarget: XAmzTarget53.StorageGateway20130630DeleteFileShare })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget53](src/models/xamz-target53.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteFileShare(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteFileShareError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteFileShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteFileShareError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGateway(request: AwsStorageGateway.DeleteGatewayRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the Storage Gateway detail page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteGateway({
    xAmzTarget: XAmzTarget55.StorageGateway20130630DeleteGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteGateway({ xAmzTarget: XAmzTarget55.StorageGateway20130630DeleteGateway })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget55](src/models/xamz-target55.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteGatewayError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSnapshotSchedule(request: AwsStorageGateway.DeleteSnapshotScheduleRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteSnapshotScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteSnapshotSchedule({
    xAmzTarget: XAmzTarget58.StorageGateway20130630DeleteSnapshotSchedule,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteSnapshotScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteSnapshotSchedule({ xAmzTarget: XAmzTarget58.StorageGateway20130630DeleteSnapshotSchedule })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget58](src/models/xamz-target58.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteSnapshotSchedule(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteSnapshotScheduleError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteSnapshotSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteSnapshotScheduleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTape(request: AwsStorageGateway.DeleteTapeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteTapeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified virtual tape. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteTape({ xAmzTarget: XAmzTarget41.StorageGateway20130630DeleteTape });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteTapeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteTape({ xAmzTarget: XAmzTarget41.StorageGateway20130630DeleteTape })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget41](src/models/xamz-target41.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteTape(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteTapeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteTape(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteTapeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTapeArchive(request: AwsStorageGateway.DeleteTapeArchiveRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteTapeArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteTapeArchive({
    xAmzTarget: XAmzTarget61.StorageGateway20130630DeleteTapeArchive,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteTapeArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteTapeArchive({ xAmzTarget: XAmzTarget61.StorageGateway20130630DeleteTapeArchive })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget61](src/models/xamz-target61.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteTapeArchive(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteTapeArchiveError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteTapeArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteTapeArchiveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTapePool(request: AwsStorageGateway.DeleteTapePoolRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteTapePoolError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if there are no automatic tape creation policies that reference the custom tape pool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteTapePool({
    xAmzTarget: XAmzTarget37.StorageGateway20130630DeleteTapePool,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteTapePoolError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteTapePool({ xAmzTarget: XAmzTarget37.StorageGateway20130630DeleteTapePool })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget37](src/models/xamz-target37.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteTapePool(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteTapePoolError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteTapePool(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteTapePoolError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteVolume(request: AwsStorageGateway.DeleteVolumeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DeleteVolumeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.deleteVolume({
    xAmzTarget: XAmzTarget21.StorageGateway20130630DeleteVolume,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DeleteVolumeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .deleteVolume({ xAmzTarget: XAmzTarget21.StorageGateway20130630DeleteVolume })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget21](src/models/xamz-target21.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.deleteVolume(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DeleteVolumeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.deleteVolume(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DeleteVolumeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeAvailabilityMonitorTest(request: AwsStorageGateway.DescribeAvailabilityMonitorTestRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeAvailabilityMonitorTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the most recent high availability monitoring test that was performed on the host in a cluster. If a test isn't performed, the status and start time in the response would be null.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeAvailabilityMonitorTest({
    xAmzTarget: XAmzTarget63.StorageGateway20130630DescribeAvailabilityMonitorTest,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeAvailabilityMonitorTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeAvailabilityMonitorTest({
    xAmzTarget: XAmzTarget63.StorageGateway20130630DescribeAvailabilityMonitorTest,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget63](src/models/xamz-target63.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeAvailabilityMonitorTest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeAvailabilityMonitorTestError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeAvailabilityMonitorTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeAvailabilityMonitorTestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBandwidthRateLimit(request: AwsStorageGateway.DescribeBandwidthRateLimitRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeBandwidthRateLimitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file gateways, use DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeBandwidthRateLimit({
    xAmzTarget: XAmzTarget48.StorageGateway20130630DescribeBandwidthRateLimit,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeBandwidthRateLimitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeBandwidthRateLimit({ xAmzTarget: XAmzTarget48.StorageGateway20130630DescribeBandwidthRateLimit })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget48](src/models/xamz-target48.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeBandwidthRateLimit(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeBandwidthRateLimitError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeBandwidthRateLimit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeBandwidthRateLimitError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeBandwidthRateLimitSchedule(request: AwsStorageGateway.DescribeBandwidthRateLimitScheduleRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeBandwidthRateLimitScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeBandwidthRateLimitSchedule({
    xAmzTarget: XAmzTarget65.StorageGateway20130630DescribeBandwidthRateLimitSchedule,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeBandwidthRateLimitScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeBandwidthRateLimitSchedule({
    xAmzTarget: XAmzTarget65.StorageGateway20130630DescribeBandwidthRateLimitSchedule,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget65](src/models/xamz-target65.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeBandwidthRateLimitSchedule(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeBandwidthRateLimitScheduleError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeBandwidthRateLimitSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeBandwidthRateLimitScheduleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeCache(request: AwsStorageGateway.DescribeCacheRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeCache({
    xAmzTarget: XAmzTarget9.StorageGateway20130630DescribeCache,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeCache({ xAmzTarget: XAmzTarget9.StorageGateway20130630DescribeCache })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget9](src/models/xamz-target9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeCache(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeCacheError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeCacheError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeCachediScsiVolumes(request: AwsStorageGateway.DescribeCachediScsiVolumesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeCachediScsiVolumesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeCachediScsiVolumes({
    xAmzTarget: XAmzTarget26.StorageGateway20130630DescribeCachediScsiVolumes,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeCachediScsiVolumesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeCachediScsiVolumes({ xAmzTarget: XAmzTarget26.StorageGateway20130630DescribeCachediScsiVolumes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget26](src/models/xamz-target26.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeCachediScsiVolumes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeCachediScsiVolumesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeCachediScsiVolumes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeCachediScsiVolumesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeChapCredentials(request: AwsStorageGateway.DescribeChapCredentialsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeChapCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeChapCredentials({
    xAmzTarget: XAmzTarget51.StorageGateway20130630DescribeChapCredentials,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeChapCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeChapCredentials({ xAmzTarget: XAmzTarget51.StorageGateway20130630DescribeChapCredentials })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget51](src/models/xamz-target51.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeChapCredentials(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeChapCredentialsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeChapCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeChapCredentialsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeFileSystemAssociations(request: AwsStorageGateway.DescribeFileSystemAssociationsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeFileSystemAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the file system association information. This operation is only supported for FSx File Gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeFileSystemAssociations({
    xAmzTarget: XAmzTarget67.StorageGateway20130630DescribeFileSystemAssociations,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeFileSystemAssociationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeFileSystemAssociations({
    xAmzTarget: XAmzTarget67.StorageGateway20130630DescribeFileSystemAssociations,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget67](src/models/xamz-target67.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeFileSystemAssociations(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeFileSystemAssociationsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeFileSystemAssociations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeFileSystemAssociationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeGatewayInformation2(request: AwsStorageGateway.DescribeGatewayInformation2Request, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeGatewayInformation2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeGatewayInformation2({
    xAmzTarget: XAmzTarget4.StorageGateway20130630DescribeGatewayInformation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeGatewayInformation2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeGatewayInformation2({ xAmzTarget: XAmzTarget4.StorageGateway20130630DescribeGatewayInformation })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeGatewayInformation2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeGatewayInformation2Error](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeGatewayInformation2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeGatewayInformation2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeMaintenanceStartTime(request: AwsStorageGateway.DescribeMaintenanceStartTimeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeMaintenanceStartTimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for the gateway's time zone.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeMaintenanceStartTime({
    xAmzTarget: XAmzTarget71.StorageGateway20130630DescribeMaintenanceStartTime,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeMaintenanceStartTimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeMaintenanceStartTime({
    xAmzTarget: XAmzTarget71.StorageGateway20130630DescribeMaintenanceStartTime,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget71](src/models/xamz-target71.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeMaintenanceStartTime(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeMaintenanceStartTimeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeMaintenanceStartTime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeMaintenanceStartTimeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeNfsFileShares(request: AwsStorageGateway.DescribeNfsFileSharesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeNfsFileSharesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This operation is only supported for S3 File Gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeNfsFileShares({
    xAmzTarget: XAmzTarget27.StorageGateway20130630DescribeNfsFileShares,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeNfsFileSharesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeNfsFileShares({ xAmzTarget: XAmzTarget27.StorageGateway20130630DescribeNfsFileShares })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget27](src/models/xamz-target27.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeNfsFileShares(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeNfsFileSharesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeNfsFileShares(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeNfsFileSharesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeSmbFileShares(request: AwsStorageGateway.DescribeSmbFileSharesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeSmbFileSharesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This operation is only supported for S3 File Gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeSmbFileShares({
    xAmzTarget: XAmzTarget30.StorageGateway20130630DescribeSmbFileShares,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeSmbFileSharesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeSmbFileShares({ xAmzTarget: XAmzTarget30.StorageGateway20130630DescribeSmbFileShares })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget30](src/models/xamz-target30.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeSmbFileShares(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeSmbFileSharesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeSmbFileShares(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeSmbFileSharesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeSmbSettings(request: AwsStorageGateway.DescribeSmbSettingsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeSmbSettingsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeSmbSettings({
    xAmzTarget: XAmzTarget73.StorageGateway20130630DescribeSmbSettings,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeSmbSettingsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeSmbSettings({ xAmzTarget: XAmzTarget73.StorageGateway20130630DescribeSmbSettings })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget73](src/models/xamz-target73.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeSmbSettings(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeSmbSettingsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeSmbSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeSmbSettingsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeSnapshotSchedule(request: AwsStorageGateway.DescribeSnapshotScheduleRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeSnapshotScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeSnapshotSchedule({
    xAmzTarget: XAmzTarget59.StorageGateway20130630DescribeSnapshotSchedule,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeSnapshotScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeSnapshotSchedule({ xAmzTarget: XAmzTarget59.StorageGateway20130630DescribeSnapshotSchedule })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget59](src/models/xamz-target59.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeSnapshotSchedule(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeSnapshotScheduleError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeSnapshotSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeSnapshotScheduleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeStorediScsiVolumes(request: AwsStorageGateway.DescribeStorediScsiVolumesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeStorediScsiVolumesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeStorediScsiVolumes({
    xAmzTarget: XAmzTarget35.StorageGateway20130630DescribeStorediScsiVolumes,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeStorediScsiVolumesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeStorediScsiVolumes({ xAmzTarget: XAmzTarget35.StorageGateway20130630DescribeStorediScsiVolumes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget35](src/models/xamz-target35.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeStorediScsiVolumes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeStorediScsiVolumesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeStorediScsiVolumes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeStorediScsiVolumesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTapeArchives(request: AwsStorageGateway.DescribeTapeArchivesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeTapeArchivesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeTapeArchives({
    xAmzTarget: XAmzTarget62.StorageGateway20130630DescribeTapeArchives,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeTapeArchivesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeTapeArchives({ xAmzTarget: XAmzTarget62.StorageGateway20130630DescribeTapeArchives })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget62](src/models/xamz-target62.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeTapeArchives(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeTapeArchivesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeTapeArchives(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeTapeArchivesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTapeRecoveryPoints(request: AwsStorageGateway.DescribeTapeRecoveryPointsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeTapeRecoveryPointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeTapeRecoveryPoints({
    xAmzTarget: XAmzTarget74.StorageGateway20130630DescribeTapeRecoveryPoints,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeTapeRecoveryPointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeTapeRecoveryPoints({ xAmzTarget: XAmzTarget74.StorageGateway20130630DescribeTapeRecoveryPoints })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget74](src/models/xamz-target74.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeTapeRecoveryPoints(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeTapeRecoveryPointsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeTapeRecoveryPoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeTapeRecoveryPointsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTapes(request: AwsStorageGateway.DescribeTapesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeTapesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This operation is only supported for the tape gateway type. The operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of tapes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeTapes({
    xAmzTarget: XAmzTarget42.StorageGateway20130630DescribeTapes,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeTapesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeTapes({ xAmzTarget: XAmzTarget42.StorageGateway20130630DescribeTapes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget42](src/models/xamz-target42.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeTapes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeTapesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeTapes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeTapesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeUploadBuffer(request: AwsStorageGateway.DescribeUploadBufferRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeUploadBufferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeUploadBuffer({
    xAmzTarget: XAmzTarget15.StorageGateway20130630DescribeUploadBuffer,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeUploadBufferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeUploadBuffer({ xAmzTarget: XAmzTarget15.StorageGateway20130630DescribeUploadBuffer })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget15](src/models/xamz-target15.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeUploadBuffer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeUploadBufferError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeUploadBuffer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeUploadBufferError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeVtlDevices(request: AwsStorageGateway.DescribeVtlDevicesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeVtlDevicesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeVtlDevices({
    xAmzTarget: XAmzTarget75.StorageGateway20130630DescribeVtlDevices,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeVtlDevicesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeVtlDevices({ xAmzTarget: XAmzTarget75.StorageGateway20130630DescribeVtlDevices })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget75](src/models/xamz-target75.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeVtlDevices(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeVtlDevicesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeVtlDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeVtlDevicesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeWorkingStorage(request: AwsStorageGateway.DescribeWorkingStorageRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DescribeWorkingStorageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway. The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.describeWorkingStorage({
    xAmzTarget: XAmzTarget17.StorageGateway20130630DescribeWorkingStorage,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DescribeWorkingStorageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .describeWorkingStorage({ xAmzTarget: XAmzTarget17.StorageGateway20130630DescribeWorkingStorage })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget17](src/models/xamz-target17.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.describeWorkingStorage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DescribeWorkingStorageError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.describeWorkingStorage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DescribeWorkingStorageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detachVolume(request: AwsStorageGateway.DetachVolumeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DetachVolumeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.detachVolume({
    xAmzTarget: XAmzTarget22.StorageGateway20130630DetachVolume,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DetachVolumeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .detachVolume({ xAmzTarget: XAmzTarget22.StorageGateway20130630DetachVolume })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget22](src/models/xamz-target22.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.detachVolume(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DetachVolumeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.detachVolume(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DetachVolumeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableGateway(request: AwsStorageGateway.DisableGatewayRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DisableGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a gateway is disabled, it cannot be enabled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.disableGateway({
    xAmzTarget: XAmzTarget56.StorageGateway20130630DisableGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DisableGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .disableGateway({ xAmzTarget: XAmzTarget56.StorageGateway20130630DisableGateway })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget56](src/models/xamz-target56.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.disableGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DisableGatewayError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.disableGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DisableGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disassociateFileSystem(request: AwsStorageGateway.DisassociateFileSystemRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.DisassociateFileSystemError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the FSx File Gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.disassociateFileSystem({
    xAmzTarget: XAmzTarget19.StorageGateway20130630DisassociateFileSystem,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.DisassociateFileSystemError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .disassociateFileSystem({ xAmzTarget: XAmzTarget19.StorageGateway20130630DisassociateFileSystem })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget19](src/models/xamz-target19.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.disassociateFileSystem(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.DisassociateFileSystemError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.disassociateFileSystem(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.DisassociateFileSystemError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>joinDomain(request: AwsStorageGateway.JoinDomainRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.JoinDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you will need to create this account ahead of time. To create the gateway's computer account in an organizational unit other than the default, you must specify the organizational unit when joining the domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.joinDomain({
    xAmzTarget: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630JoinDomain,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.JoinDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .joinDomain({
    xAmzTarget: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630JoinDomain,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi](src/models/xamz-target2-aws-storage-gateway-aws-storage-gateway-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.joinDomain(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.JoinDomainError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.joinDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.JoinDomainError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listAutomaticTapeCreationPolicies(request: AwsStorageGateway.ListAutomaticTapeCreationPoliciesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListAutomaticTapeCreationPoliciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list. This operation is only supported for tape gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listAutomaticTapeCreationPolicies({
    xAmzTarget: XAmzTarget45.StorageGateway20130630ListAutomaticTapeCreationPolicies,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListAutomaticTapeCreationPoliciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listAutomaticTapeCreationPolicies({
    xAmzTarget: XAmzTarget45.StorageGateway20130630ListAutomaticTapeCreationPolicies,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget45](src/models/xamz-target45.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listAutomaticTapeCreationPolicies(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListAutomaticTapeCreationPoliciesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listAutomaticTapeCreationPolicies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListAutomaticTapeCreationPoliciesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFileShares(request: AwsStorageGateway.ListFileSharesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListFileSharesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling Amazon Web Services account. This operation is only supported for S3 File Gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listFileShares({
    xAmzTarget: XAmzTarget54.StorageGateway20130630ListFileShares,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListFileSharesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listFileShares({ xAmzTarget: XAmzTarget54.StorageGateway20130630ListFileShares })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget54](src/models/xamz-target54.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listFileShares(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListFileSharesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listFileShares(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListFileSharesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFileSystemAssociations(request: AwsStorageGateway.ListFileSystemAssociationsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListFileSystemAssociationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system association. This operation is only supported for FSx File Gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listFileSystemAssociations({
    xAmzTarget: XAmzTarget68.StorageGateway20130630ListFileSystemAssociations,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListFileSystemAssociationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listFileSystemAssociations({ xAmzTarget: XAmzTarget68.StorageGateway20130630ListFileSystemAssociations })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget68](src/models/xamz-target68.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listFileSystemAssociations(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListFileSystemAssociationsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listFileSystemAssociations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListFileSystemAssociationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGateways2(request: AwsStorageGateway.ListGateways2Request, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListGateways2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listGateways2({
    xAmzTarget: XAmzTarget3.StorageGateway20130630ListGateways,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListGateways2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listGateways2({ xAmzTarget: XAmzTarget3.StorageGateway20130630ListGateways })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listGateways2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListGateways2Error](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listGateways2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListGateways2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLocalDisks(request: AwsStorageGateway.ListLocalDisksRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListLocalDisksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a DiskStatus field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listLocalDisks({
    xAmzTarget: XAmzTarget76.StorageGateway20130630ListLocalDisks,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListLocalDisksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listLocalDisks({ xAmzTarget: XAmzTarget76.StorageGateway20130630ListLocalDisks })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget76](src/models/xamz-target76.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listLocalDisks(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListLocalDisksError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listLocalDisks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListLocalDisksError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForResource(request: AwsStorageGateway.ListTagsForResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags that have been added to the specified resource. This operation is supported in storage gateways of all types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listTagsForResource({
    xAmzTarget: XAmzTarget12.StorageGateway20130630ListTagsForResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listTagsForResource({ xAmzTarget: XAmzTarget12.StorageGateway20130630ListTagsForResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget12](src/models/xamz-target12.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listTagsForResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListTagsForResourceError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTapePools(request: AwsStorageGateway.ListTapePoolsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListTapePoolsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape pools.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listTapePools({
    xAmzTarget: XAmzTarget38.StorageGateway20130630ListTapePools,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListTapePoolsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listTapePools({ xAmzTarget: XAmzTarget38.StorageGateway20130630ListTapePools })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget38](src/models/xamz-target38.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listTapePools(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListTapePoolsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listTapePools(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListTapePoolsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTapes(request: AwsStorageGateway.ListTapesRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListTapesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listTapes({ xAmzTarget: XAmzTarget43.StorageGateway20130630ListTapes });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListTapesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listTapes({ xAmzTarget: XAmzTarget43.StorageGateway20130630ListTapes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget43](src/models/xamz-target43.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listTapes(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListTapesError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listTapes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListTapesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVolumeInitiators(request: AwsStorageGateway.ListVolumeInitiatorsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListVolumeInitiatorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listVolumeInitiators({
    xAmzTarget: XAmzTarget77.StorageGateway20130630ListVolumeInitiators,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListVolumeInitiatorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listVolumeInitiators({ xAmzTarget: XAmzTarget77.StorageGateway20130630ListVolumeInitiators })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget77](src/models/xamz-target77.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listVolumeInitiators(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListVolumeInitiatorsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listVolumeInitiators(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListVolumeInitiatorsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVolumeRecoveryPoints(request: AwsStorageGateway.ListVolumeRecoveryPointsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListVolumeRecoveryPointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listVolumeRecoveryPoints({
    xAmzTarget: XAmzTarget78.StorageGateway20130630ListVolumeRecoveryPoints,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListVolumeRecoveryPointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listVolumeRecoveryPoints({ xAmzTarget: XAmzTarget78.StorageGateway20130630ListVolumeRecoveryPoints })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget78](src/models/xamz-target78.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listVolumeRecoveryPoints(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListVolumeRecoveryPointsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listVolumeRecoveryPoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListVolumeRecoveryPointsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVolumes2(request: AwsStorageGateway.ListVolumes2Request, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ListVolumes2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.listVolumes2({ xAmzTarget: XAmzTarget1.StorageGateway20130630ListVolumes });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ListVolumes2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .listVolumes2({ xAmzTarget: XAmzTarget1.StorageGateway20130630ListVolumes })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.listVolumes2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ListVolumes2Error](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.listVolumes2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ListVolumes2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>notifyWhenUploaded(request: AwsStorageGateway.NotifyWhenUploadedRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.NotifyWhenUploadedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends you notification through Amazon EventBridge when all files written to your file share have been uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.notifyWhenUploaded({
    xAmzTarget: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630NotifyWhenUploaded,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.NotifyWhenUploadedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .notifyWhenUploaded({
    xAmzTarget: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630NotifyWhenUploaded,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi](src/models/xamz-target3-aws-storage-gateway-aws-storage-gateway-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.notifyWhenUploaded(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.NotifyWhenUploadedError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.notifyWhenUploaded(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.NotifyWhenUploadedError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshCache(request: AwsStorageGateway.RefreshCacheRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.RefreshCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see Getting notified about file operations in the Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.refreshCache({
    xAmzTarget: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630RefreshCache,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.RefreshCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .refreshCache({
    xAmzTarget: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630RefreshCache,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi](src/models/xamz-target4-aws-storage-gateway-aws-storage-gateway-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.refreshCache(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.RefreshCacheError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.refreshCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.RefreshCacheError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTagsFromResource(request: AwsStorageGateway.RemoveTagsFromResourceRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.RemoveTagsFromResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from the specified resource. This operation is supported in storage gateways of all types.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.removeTagsFromResource({
    xAmzTarget: XAmzTarget13.StorageGateway20130630RemoveTagsFromResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.RemoveTagsFromResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .removeTagsFromResource({ xAmzTarget: XAmzTarget13.StorageGateway20130630RemoveTagsFromResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget13](src/models/xamz-target13.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.removeTagsFromResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.RemoveTagsFromResourceError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.removeTagsFromResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.RemoveTagsFromResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resetCache(request: AwsStorageGateway.ResetCacheRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ResetCacheError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types. If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.resetCache({ xAmzTarget: XAmzTarget10.StorageGateway20130630ResetCache });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ResetCacheError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .resetCache({ xAmzTarget: XAmzTarget10.StorageGateway20130630ResetCache })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget10](src/models/xamz-target10.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.resetCache(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ResetCacheError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.resetCache(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ResetCacheError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTapeArchive(request: AwsStorageGateway.RetrieveTapeArchiveRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.RetrieveTapeArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.retrieveTapeArchive({
    xAmzTarget: XAmzTarget5.StorageGateway20130630RetrieveTapeArchive,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.RetrieveTapeArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .retrieveTapeArchive({ xAmzTarget: XAmzTarget5.StorageGateway20130630RetrieveTapeArchive })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5](src/models/xamz-target5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.retrieveTapeArchive(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.RetrieveTapeArchiveError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.retrieveTapeArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.RetrieveTapeArchiveError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTapeRecoveryPoint(request: AwsStorageGateway.RetrieveTapeRecoveryPointRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.RetrieveTapeRecoveryPointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.retrieveTapeRecoveryPoint({
    xAmzTarget: XAmzTarget6.StorageGateway20130630RetrieveTapeRecoveryPoint,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.RetrieveTapeRecoveryPointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .retrieveTapeRecoveryPoint({ xAmzTarget: XAmzTarget6.StorageGateway20130630RetrieveTapeRecoveryPoint })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget6](src/models/xamz-target6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.retrieveTapeRecoveryPoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.RetrieveTapeRecoveryPointError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.retrieveTapeRecoveryPoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.RetrieveTapeRecoveryPointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setLocalConsolePassword(request: AwsStorageGateway.SetLocalConsolePasswordRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.SetLocalConsolePasswordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.setLocalConsolePassword({
    xAmzTarget: XAmzTarget79.StorageGateway20130630SetLocalConsolePassword,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.SetLocalConsolePasswordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .setLocalConsolePassword({ xAmzTarget: XAmzTarget79.StorageGateway20130630SetLocalConsolePassword })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget79](src/models/xamz-target79.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.setLocalConsolePassword(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.SetLocalConsolePasswordError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.setLocalConsolePassword(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.SetLocalConsolePasswordError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setSmbGuestPassword(request: AwsStorageGateway.SetSmbGuestPasswordRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.SetSmbGuestPasswordError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method for the file share is set to GuestAccess. This operation only supported for S3 File Gateways

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.setSmbGuestPassword({
    xAmzTarget: XAmzTarget80.StorageGateway20130630SetSmbGuestPassword,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.SetSmbGuestPasswordError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .setSmbGuestPassword({ xAmzTarget: XAmzTarget80.StorageGateway20130630SetSmbGuestPassword })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget80](src/models/xamz-target80.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.setSmbGuestPassword(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.SetSmbGuestPasswordError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.setSmbGuestPassword(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.SetSmbGuestPasswordError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>shutdownGateway(request: AwsStorageGateway.ShutdownGatewayRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.ShutdownGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.shutdownGateway({
    xAmzTarget: XAmzTarget7.StorageGateway20130630ShutdownGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.ShutdownGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .shutdownGateway({ xAmzTarget: XAmzTarget7.StorageGateway20130630ShutdownGateway })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.shutdownGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.ShutdownGatewayError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.shutdownGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.ShutdownGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startAvailabilityMonitorTest(request: AwsStorageGateway.StartAvailabilityMonitorTestRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.StartAvailabilityMonitorTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.startAvailabilityMonitorTest({
    xAmzTarget: XAmzTarget64.StorageGateway20130630StartAvailabilityMonitorTest,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.StartAvailabilityMonitorTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .startAvailabilityMonitorTest({
    xAmzTarget: XAmzTarget64.StorageGateway20130630StartAvailabilityMonitorTest,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget64](src/models/xamz-target64.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.startAvailabilityMonitorTest(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.StartAvailabilityMonitorTestError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.startAvailabilityMonitorTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.StartAvailabilityMonitorTestError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startGateway(request: AwsStorageGateway.StartGatewayRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.StartGatewayError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and check the status before making any additional API calls. For more information, see ActivateGateway. To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.startGateway({
    xAmzTarget: XAmzTarget57.StorageGateway20130630StartGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.StartGatewayError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .startGateway({ xAmzTarget: XAmzTarget57.StorageGateway20130630StartGateway })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget57](src/models/xamz-target57.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.startGateway(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.StartGatewayError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.startGateway(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.StartGatewayError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAutomaticTapeCreationPolicy(request: AwsStorageGateway.UpdateAutomaticTapeCreationPolicyRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape creation policy. A gateway can have only one automatic tape creation policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateAutomaticTapeCreationPolicy({
    xAmzTarget: XAmzTarget46.StorageGateway20130630UpdateAutomaticTapeCreationPolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateAutomaticTapeCreationPolicy({
    xAmzTarget: XAmzTarget46.StorageGateway20130630UpdateAutomaticTapeCreationPolicy,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget46](src/models/xamz-target46.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateAutomaticTapeCreationPolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateAutomaticTapeCreationPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateAutomaticTapeCreationPolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBandwidthRateLimit(request: AwsStorageGateway.UpdateBandwidthRateLimitRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateBandwidthRateLimitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported only for the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateBandwidthRateLimit({
    xAmzTarget: XAmzTarget49.StorageGateway20130630UpdateBandwidthRateLimit,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateBandwidthRateLimitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateBandwidthRateLimit({ xAmzTarget: XAmzTarget49.StorageGateway20130630UpdateBandwidthRateLimit })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget49](src/models/xamz-target49.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateBandwidthRateLimit(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateBandwidthRateLimitError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateBandwidthRateLimit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateBandwidthRateLimitError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBandwidthRateLimitSchedule(request: AwsStorageGateway.UpdateBandwidthRateLimitScheduleRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateBandwidthRateLimitScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3 file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate limits.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateBandwidthRateLimitSchedule({
    xAmzTarget: XAmzTarget66.StorageGateway20130630UpdateBandwidthRateLimitSchedule,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateBandwidthRateLimitScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateBandwidthRateLimitSchedule({
    xAmzTarget: XAmzTarget66.StorageGateway20130630UpdateBandwidthRateLimitSchedule,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget66](src/models/xamz-target66.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateBandwidthRateLimitSchedule(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateBandwidthRateLimitScheduleError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateBandwidthRateLimitSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateBandwidthRateLimitScheduleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateChapCredentials(request: AwsStorageGateway.UpdateChapCredentialsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateChapCredentialsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateChapCredentials({
    xAmzTarget: XAmzTarget52.StorageGateway20130630UpdateChapCredentials,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateChapCredentialsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateChapCredentials({ xAmzTarget: XAmzTarget52.StorageGateway20130630UpdateChapCredentials })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget52](src/models/xamz-target52.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateChapCredentials(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateChapCredentialsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateChapCredentials(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateChapCredentialsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFileSystemAssociation(request: AwsStorageGateway.UpdateFileSystemAssociationRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateFileSystemAssociationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a file system association. This operation is only supported in the FSx File Gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateFileSystemAssociation({
    xAmzTarget: XAmzTarget69.StorageGateway20130630UpdateFileSystemAssociation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateFileSystemAssociationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateFileSystemAssociation({ xAmzTarget: XAmzTarget69.StorageGateway20130630UpdateFileSystemAssociation })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget69](src/models/xamz-target69.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateFileSystemAssociation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateFileSystemAssociationError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateFileSystemAssociation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateFileSystemAssociationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGatewayInformation(request: AwsStorageGateway.UpdateGatewayInformationRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateGatewayInformationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateGatewayInformation({
    xAmzTarget: XAmzTarget70.StorageGateway20130630UpdateGatewayInformation,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateGatewayInformationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateGatewayInformation({ xAmzTarget: XAmzTarget70.StorageGateway20130630UpdateGatewayInformation })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget70](src/models/xamz-target70.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateGatewayInformation(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateGatewayInformationError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateGatewayInformation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateGatewayInformationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGatewaySoftwareNow(request: AwsStorageGateway.UpdateGatewaySoftwareNowRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateGatewaySoftwareNowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state. A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux iSCSI settings, respectively.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateGatewaySoftwareNow({
    xAmzTarget: XAmzTarget81.StorageGateway20130630UpdateGatewaySoftwareNow,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateGatewaySoftwareNowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateGatewaySoftwareNow({ xAmzTarget: XAmzTarget81.StorageGateway20130630UpdateGatewaySoftwareNow })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget81](src/models/xamz-target81.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateGatewaySoftwareNow(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateGatewaySoftwareNowError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateGatewaySoftwareNow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateGatewaySoftwareNowError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMaintenanceStartTime(request: AwsStorageGateway.UpdateMaintenanceStartTimeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateMaintenanceStartTimeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused by updating the gateway could critically impact your deployment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateMaintenanceStartTime({
    xAmzTarget: XAmzTarget72.StorageGateway20130630UpdateMaintenanceStartTime,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateMaintenanceStartTimeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateMaintenanceStartTime({ xAmzTarget: XAmzTarget72.StorageGateway20130630UpdateMaintenanceStartTime })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget72](src/models/xamz-target72.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateMaintenanceStartTime(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateMaintenanceStartTimeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateMaintenanceStartTime(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateMaintenanceStartTimeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateNfsFileShare(request: AwsStorageGateway.UpdateNfsFileShareRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateNfsFileShareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways. To leave a file share field unchanged, set the corresponding input field to null. Updates the following file share settings: Default storage class for your S3 bucket Metadata defaults for your S3 bucket Allowed NFS clients for your file share Squash settings Write status of your file share

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateNfsFileShare({
    xAmzTarget: XAmzTarget28.StorageGateway20130630UpdateNfsFileShare,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateNfsFileShareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateNfsFileShare({ xAmzTarget: XAmzTarget28.StorageGateway20130630UpdateNfsFileShare })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget28](src/models/xamz-target28.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateNfsFileShare(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateNfsFileShareError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateNfsFileShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateNfsFileShareError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSmbFileShare(request: AwsStorageGateway.UpdateSmbFileShareRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateSmbFileShareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To leave a file share field unchanged, set the corresponding input field to null. File gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateSmbFileShare({
    xAmzTarget: XAmzTarget31.StorageGateway20130630UpdateSmbFileShare,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateSmbFileShareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateSmbFileShare({ xAmzTarget: XAmzTarget31.StorageGateway20130630UpdateSmbFileShare })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget31](src/models/xamz-target31.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateSmbFileShare(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateSmbFileShareError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateSmbFileShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateSmbFileShareError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSmbFileShareVisibility(request: AwsStorageGateway.UpdateSmbFileShareVisibilityRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateSmbFileShareVisibilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is only supported for S3 File Gateways.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateSmbFileShareVisibility({
    xAmzTarget: XAmzTarget82.StorageGateway20130630UpdateSmbFileShareVisibility,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateSmbFileShareVisibilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateSmbFileShareVisibility({
    xAmzTarget: XAmzTarget82.StorageGateway20130630UpdateSmbFileShareVisibility,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget82](src/models/xamz-target82.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateSmbFileShareVisibility(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateSmbFileShareVisibilityError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateSmbFileShareVisibility(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateSmbFileShareVisibilityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSmbLocalGroups(request: AwsStorageGateway.UpdateSmbLocalGroupsRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateSmbLocalGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateSmbLocalGroups({
    xAmzTarget: XAmzTarget83.StorageGateway20130630UpdateSmbLocalGroups,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateSmbLocalGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateSmbLocalGroups({ xAmzTarget: XAmzTarget83.StorageGateway20130630UpdateSmbLocalGroups })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget83](src/models/xamz-target83.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateSmbLocalGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateSmbLocalGroupsError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateSmbLocalGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateSmbLocalGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSmbSecurityStrategy(request: AwsStorageGateway.UpdateSmbSecurityStrategyRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateSmbSecurityStrategyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console, see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security strategy level can affect performance of the gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateSmbSecurityStrategy({
    xAmzTarget: XAmzTarget84.StorageGateway20130630UpdateSmbSecurityStrategy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateSmbSecurityStrategyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateSmbSecurityStrategy({ xAmzTarget: XAmzTarget84.StorageGateway20130630UpdateSmbSecurityStrategy })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget84](src/models/xamz-target84.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateSmbSecurityStrategy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateSmbSecurityStrategyError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateSmbSecurityStrategy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateSmbSecurityStrategyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSnapshotSchedule(request: AwsStorageGateway.UpdateSnapshotScheduleRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateSnapshotScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateSnapshotSchedule({
    xAmzTarget: XAmzTarget60.StorageGateway20130630UpdateSnapshotSchedule,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateSnapshotScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateSnapshotSchedule({ xAmzTarget: XAmzTarget60.StorageGateway20130630UpdateSnapshotSchedule })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget60](src/models/xamz-target60.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateSnapshotSchedule(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateSnapshotScheduleError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateSnapshotSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateSnapshotScheduleError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVtlDeviceType(request: AwsStorageGateway.UpdateVtlDeviceTypeRequest, options?: RequestOptions): ApiPromise&lt;undefined, AwsStorageGateway.UpdateVtlDeviceTypeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.awsStorageGateway.updateVtlDeviceType({
    xAmzTarget: XAmzTarget85.StorageGateway20130630UpdateVtlDeviceType,
  });
} catch (err) {
  // TODO: Handle 'err' of type AwsStorageGateway.UpdateVtlDeviceTypeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.awsStorageGateway
  .updateVtlDeviceType({ xAmzTarget: XAmzTarget85.StorageGateway20130630UpdateVtlDeviceType })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget85](src/models/xamz-target85.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.awsStorageGateway.updateVtlDeviceType(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AwsStorageGateway.UpdateVtlDeviceTypeError](src/resources/aws-storage-gateway.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.awsStorageGateway.updateVtlDeviceType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AwsStorageGateway.UpdateVtlDeviceTypeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CacheReport

> Source: [CacheReport](src/resources/cache-report.ts)

<details>
<summary><code>cancelCacheReport(request: CacheReport.CancelCacheReportRequest, options?: RequestOptions): ApiPromise&lt;undefined, CacheReport.CancelCacheReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel operation returns an error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cacheReport.cancelCacheReport({
    xAmzTarget: XAmzTargetAwsStorageGatewayCacheReportApi.StorageGateway20130630CancelCacheReport,
  });
} catch (err) {
  // TODO: Handle 'err' of type CacheReport.CancelCacheReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cacheReport
  .cancelCacheReport({
    xAmzTarget: XAmzTargetAwsStorageGatewayCacheReportApi.StorageGateway20130630CancelCacheReport,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAwsStorageGatewayCacheReportApi](src/models/xamz-target-aws-storage-gateway-cache-report-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cacheReport.cancelCacheReport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CacheReport.CancelCacheReportError](src/resources/cache-report.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cacheReport.cancelCacheReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CacheReport.CancelCacheReportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCacheReport(request: CacheReport.DeleteCacheReportRequest, options?: RequestOptions): ApiPromise&lt;undefined, CacheReport.DeleteCacheReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport does not delete the report object from your Amazon S3 bucket.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cacheReport.deleteCacheReport({
    xAmzTarget: XAmzTarget1AwsStorageGatewayCacheReportApi.StorageGateway20130630DeleteCacheReport,
  });
} catch (err) {
  // TODO: Handle 'err' of type CacheReport.DeleteCacheReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cacheReport
  .deleteCacheReport({
    xAmzTarget: XAmzTarget1AwsStorageGatewayCacheReportApi.StorageGateway20130630DeleteCacheReport,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsStorageGatewayCacheReportApi](src/models/xamz-target1-aws-storage-gateway-cache-report-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cacheReport.deleteCacheReport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CacheReport.DeleteCacheReportError](src/resources/cache-report.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cacheReport.deleteCacheReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CacheReport.DeleteCacheReportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeCacheReport(request: CacheReport.DescribeCacheReportRequest, options?: RequestOptions): ApiPromise&lt;undefined, CacheReport.DescribeCacheReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified cache report, including completion status and generation progress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cacheReport.describeCacheReport({
    xAmzTarget: XAmzTarget2AwsStorageGatewayCacheReportApi.StorageGateway20130630DescribeCacheReport,
  });
} catch (err) {
  // TODO: Handle 'err' of type CacheReport.DescribeCacheReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cacheReport
  .describeCacheReport({
    xAmzTarget: XAmzTarget2AwsStorageGatewayCacheReportApi.StorageGateway20130630DescribeCacheReport,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsStorageGatewayCacheReportApi](src/models/xamz-target2-aws-storage-gateway-cache-report-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cacheReport.describeCacheReport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CacheReport.DescribeCacheReportError](src/resources/cache-report.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cacheReport.describeCacheReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CacheReport.DescribeCacheReportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCacheReports(request: CacheReport.ListCacheReportsRequest, options?: RequestOptions): ApiPromise&lt;undefined, CacheReport.ListCacheReportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of existing cache reports for all file shares associated with your Amazon Web Services account. This list includes all information provided by the DescribeCacheReport action, such as report name, status, completion progress, start time, end time, filters, and tags.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cacheReport.listCacheReports({
    xAmzTarget: XAmzTarget3AwsStorageGatewayCacheReportApi.StorageGateway20130630ListCacheReports,
  });
} catch (err) {
  // TODO: Handle 'err' of type CacheReport.ListCacheReportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cacheReport
  .listCacheReports({
    xAmzTarget: XAmzTarget3AwsStorageGatewayCacheReportApi.StorageGateway20130630ListCacheReports,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsStorageGatewayCacheReportApi](src/models/xamz-target3-aws-storage-gateway-cache-report-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cacheReport.listCacheReports(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CacheReport.ListCacheReportsError](src/resources/cache-report.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cacheReport.listCacheReports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CacheReport.ListCacheReportsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startCacheReport(request: CacheReport.StartCacheReportRequest, options?: RequestOptions): ApiPromise&lt;undefined, CacheReport.StartCacheReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file share. You can use this report to identify and resolve issues if you have files failing upload from your gateway to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this report captures the files after the reset, but before they become flagged again, they will not be reported as Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the cache report. No other cache reports can currently be in-progress for the specified file share. There must be fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must specify at least one value for InclusionFilters or ExclusionFilters in the request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.cacheReport.startCacheReport({
    xAmzTarget: XAmzTarget4AwsStorageGatewayCacheReportApi.StorageGateway20130630StartCacheReport,
  });
} catch (err) {
  // TODO: Handle 'err' of type CacheReport.StartCacheReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cacheReport
  .startCacheReport({
    xAmzTarget: XAmzTarget4AwsStorageGatewayCacheReportApi.StorageGateway20130630StartCacheReport,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsStorageGatewayCacheReportApi](src/models/xamz-target4-aws-storage-gateway-cache-report-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cacheReport.startCacheReport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CacheReport.StartCacheReportError](src/resources/cache-report.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cacheReport.startCacheReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CacheReport.StartCacheReportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>activateGateway3(request: Operations.ActivateGateway3Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ActivateGateway3Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.activateGateway3({ xAmzTarget: XAmzTarget.StorageGateway20130630ActivateGateway });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ActivateGateway3Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .activateGateway3({ xAmzTarget: XAmzTarget.StorageGateway20130630ActivateGateway })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.activateGateway3(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ActivateGateway3Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.activateGateway3(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ActivateGateway3Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assignTapePool2(request: Operations.AssignTapePool2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.AssignTapePool2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.assignTapePool2({
    xAmzTarget: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630AssignTapePool,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.AssignTapePool2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .assignTapePool2({
    xAmzTarget: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630AssignTapePool,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi](src/models/xamz-target1-aws-storage-gateway-aws-storage-gateway-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.assignTapePool2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.AssignTapePool2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.assignTapePool2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.AssignTapePool2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>evictFilesFailingUpload(request: Operations.EvictFilesFailingUploadRequest, options?: RequestOptions): ApiPromise&lt;undefined, Operations.EvictFilesFailingUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a process that cleans the specified file share's cache of file entries that are failing upload to Amazon S3. This API operation reports success if the request is received with valid arguments, and there are no other cache clean operations currently in-progress for the specified file share. After a successful request, the cache clean operation occurs asynchronously and reports progress using CloudWatch logs and notifications. If ForceRemove is set to True, the cache clean operation will delete file data from the gateway which might otherwise be recoverable. We recommend using this operation only after all other methods to clear files failing upload have been exhausted, and if your business need outweighs the potential data loss.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.evictFilesFailingUpload({
    xAmzTarget: XAmzTarget2AwsStorageGatewayOperationsApi.StorageGateway20130630EvictFilesFailingUpload,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.EvictFilesFailingUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .evictFilesFailingUpload({
    xAmzTarget: XAmzTarget2AwsStorageGatewayOperationsApi.StorageGateway20130630EvictFilesFailingUpload,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AwsStorageGatewayOperationsApi](src/models/xamz-target2-aws-storage-gateway-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.evictFilesFailingUpload(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.EvictFilesFailingUploadError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.evictFilesFailingUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.EvictFilesFailingUploadError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>joinDomain2(request: Operations.JoinDomain2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.JoinDomain2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you will need to create this account ahead of time. To create the gateway's computer account in an organizational unit other than the default, you must specify the organizational unit when joining the domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.joinDomain2({
    xAmzTarget: XAmzTarget3AwsStorageGatewayOperationsApi.StorageGateway20130630JoinDomain,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.JoinDomain2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .joinDomain2({ xAmzTarget: XAmzTarget3AwsStorageGatewayOperationsApi.StorageGateway20130630JoinDomain })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AwsStorageGatewayOperationsApi](src/models/xamz-target3-aws-storage-gateway-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.joinDomain2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.JoinDomain2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.joinDomain2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.JoinDomain2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>notifyWhenUploaded2(request: Operations.NotifyWhenUploaded2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.NotifyWhenUploaded2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends you notification through Amazon EventBridge when all files written to your file share have been uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.notifyWhenUploaded2({
    xAmzTarget: XAmzTarget4AwsStorageGatewayOperationsApi.StorageGateway20130630NotifyWhenUploaded,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.NotifyWhenUploaded2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .notifyWhenUploaded2({
    xAmzTarget: XAmzTarget4AwsStorageGatewayOperationsApi.StorageGateway20130630NotifyWhenUploaded,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AwsStorageGatewayOperationsApi](src/models/xamz-target4-aws-storage-gateway-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.notifyWhenUploaded2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.NotifyWhenUploaded2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.notifyWhenUploaded2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.NotifyWhenUploaded2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshCache2(request: Operations.RefreshCache2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RefreshCache2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see Getting notified about file operations in the Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.refreshCache2({
    xAmzTarget: XAmzTarget5AwsStorageGatewayOperationsApi.StorageGateway20130630RefreshCache,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RefreshCache2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .refreshCache2({ xAmzTarget: XAmzTarget5AwsStorageGatewayOperationsApi.StorageGateway20130630RefreshCache })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5AwsStorageGatewayOperationsApi](src/models/xamz-target5-aws-storage-gateway-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.refreshCache2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RefreshCache2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.refreshCache2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RefreshCache2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTapeArchive2(request: Operations.RetrieveTapeArchive2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RetrieveTapeArchive2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.retrieveTapeArchive2({
    xAmzTarget: XAmzTarget6AwsStorageGatewayOperationsApi.StorageGateway20130630RetrieveTapeArchive,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RetrieveTapeArchive2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .retrieveTapeArchive2({
    xAmzTarget: XAmzTarget6AwsStorageGatewayOperationsApi.StorageGateway20130630RetrieveTapeArchive,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget6AwsStorageGatewayOperationsApi](src/models/xamz-target6-aws-storage-gateway-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.retrieveTapeArchive2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RetrieveTapeArchive2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.retrieveTapeArchive2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RetrieveTapeArchive2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTapeRecoveryPoint2(request: Operations.RetrieveTapeRecoveryPoint2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RetrieveTapeRecoveryPoint2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.retrieveTapeRecoveryPoint2({
    xAmzTarget: XAmzTarget7AwsStorageGatewayOperationsApi.StorageGateway20130630RetrieveTapeRecoveryPoint,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RetrieveTapeRecoveryPoint2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .retrieveTapeRecoveryPoint2({
    xAmzTarget: XAmzTarget7AwsStorageGatewayOperationsApi.StorageGateway20130630RetrieveTapeRecoveryPoint,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget7AwsStorageGatewayOperationsApi](src/models/xamz-target7-aws-storage-gateway-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.retrieveTapeRecoveryPoint2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RetrieveTapeRecoveryPoint2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.retrieveTapeRecoveryPoint2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RetrieveTapeRecoveryPoint2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>shutdownGateway2(request: Operations.ShutdownGateway2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ShutdownGateway2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.shutdownGateway2({
    xAmzTarget: XAmzTarget8AwsStorageGatewayOperationsApi.StorageGateway20130630ShutdownGateway,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ShutdownGateway2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .shutdownGateway2({
    xAmzTarget: XAmzTarget8AwsStorageGatewayOperationsApi.StorageGateway20130630ShutdownGateway,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget8AwsStorageGatewayOperationsApi](src/models/xamz-target8-aws-storage-gateway-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.shutdownGateway2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ShutdownGateway2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.shutdownGateway2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ShutdownGateway2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AwsStorageGatewayError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

