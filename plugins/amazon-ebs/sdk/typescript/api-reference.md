# Reference

> Source: [AmazonEbsClient](src/client.ts)

## AmazonEbsAmazonElasticBlockStoreEbsApi

> Source: [AmazonEbsAmazonElasticBlockStoreEbsApi](src/resources/amazon-ebs-amazon-elastic-block-store-ebs-api.ts)

<details>
<summary><code>completeSnapshot(request: AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotRequest, options?: RequestOptions): ApiPromise&lt;CompleteSnapshotResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.amazonEbsAmazonElasticBlockStoreEbsApi.completeSnapshot({
    snapshotId: "some example string",
    xAmzChangedBlocksCount: 1,
  });
  // TODO: Handle 'response' of type CompleteSnapshotResponse
} catch (err) {
  // TODO: Handle 'err' of type AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonEbsAmazonElasticBlockStoreEbsApi
  .completeSnapshot({ snapshotId: "some example string", xAmzChangedBlocksCount: 1 })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompleteSnapshotResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>snapshotId</code> | <code>string</code> | The ID of the snapshot. |
| <code>xAmzChangedBlocksCount</code> | <code>number</code> | The number of blocks that were written to the snapshot. |
| <code>xAmzChecksum?</code> | <code>string</code> | An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To generate the aggregated checksum using the linear aggregation method, arrange the checksums for each written block in ascending order of their block index, concatenate them to form a single string, and then generate the checksum on the entire string using the SHA256 algorithm. |
| <code>xAmzChecksumAlgorithm?</code> | <code>[XAmzChecksumAlgorithm](src/models/xamz-checksum-algorithm.ts)</code> | The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256. |
| <code>xAmzChecksumAggregationMethod?</code> | <code>[XAmzChecksumAggregationMethod](src/models/xamz-checksum-aggregation-method.ts)</code> | The aggregation method used to generate the checksum. Currently, the only supported aggregation method is LINEAR. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonEbsAmazonElasticBlockStoreEbsApi.completeSnapshot(request)`

- **OnSuccess**: <code>[CompleteSnapshotResponse](src/models/complete-snapshot-response.ts)</code>
- **OnError**: throws <code>[AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError](src/resources/amazon-ebs-amazon-elastic-block-store-ebs-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonEbsAmazonElasticBlockStoreEbsApi.completeSnapshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompleteSnapshotResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError&gt;</code>, with `result.value` of type <code>[CompleteSnapshotResponse](src/models/complete-snapshot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonEbsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listChangedBlocks(request: AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksRequest, options?: RequestOptions): ApiPromise&lt;ListChangedBlocksResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.amazonEbsAmazonElasticBlockStoreEbsApi.listChangedBlocks({
    secondSnapshotId: "some example string",
  });
  // TODO: Handle 'response' of type ListChangedBlocksResponse
} catch (err) {
  // TODO: Handle 'err' of type AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonEbsAmazonElasticBlockStoreEbsApi
  .listChangedBlocks({ secondSnapshotId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListChangedBlocksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>secondSnapshotId</code> | <code>string</code> | The ID of the second snapshot to use for the comparison. The SecondSnapshotId parameter must be specified with a FirstSnapshotID parameter; otherwise, an error occurs. |
| <code>firstSnapshotId?</code> | <code>string</code> | The ID of the first snapshot to use for the comparison. The FirstSnapshotID parameter must be specified with a SecondSnapshotId parameter; otherwise, an error occurs. |
| <code>pageToken?</code> | <code>string</code> | The token to request the next page of results. If you specify NextToken, then StartingBlockIndex is ignored. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of blocks to be returned by the request. Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned NextToken value. The value of NextToken is null when there are no more blocks to return. |
| <code>startingBlockIndex?</code> | <code>number</code> | The block index from which the comparison should start. The list in the response will start from this block index or the next valid block index in the snapshots. If you specify NextToken, then StartingBlockIndex is ignored. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonEbsAmazonElasticBlockStoreEbsApi.listChangedBlocks(request)`

- **OnSuccess**: <code>[ListChangedBlocksResponse](src/models/list-changed-blocks-response.ts)</code>
- **OnError**: throws <code>[AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError](src/resources/amazon-ebs-amazon-elastic-block-store-ebs-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonEbsAmazonElasticBlockStoreEbsApi.listChangedBlocks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListChangedBlocksResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError&gt;</code>, with `result.value` of type <code>[ListChangedBlocksResponse](src/models/list-changed-blocks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonEbsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSnapshot(request?: AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotRequest, options?: RequestOptions): ApiPromise&lt;StartSnapshotResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes. After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.amazonEbsAmazonElasticBlockStoreEbsApi.startSnapshot();
  // TODO: Handle 'response' of type StartSnapshotResponse
} catch (err) {
  // TODO: Handle 'err' of type AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonEbsAmazonElasticBlockStoreEbsApi.startSnapshot().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartSnapshotResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SnapshotsRequest](src/models/snapshots-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonEbsAmazonElasticBlockStoreEbsApi.startSnapshot(request)`

- **OnSuccess**: <code>[StartSnapshotResponse](src/models/start-snapshot-response.ts)</code>
- **OnError**: throws <code>[AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError](src/resources/amazon-ebs-amazon-elastic-block-store-ebs-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonEbsAmazonElasticBlockStoreEbsApi.startSnapshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartSnapshotResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError&gt;</code>, with `result.value` of type <code>[StartSnapshotResponse](src/models/start-snapshot-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonEbsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Blocks

> Source: [Blocks](src/resources/blocks.ts)

<details>
<summary><code>getSnapshotBlock(request: Blocks.GetSnapshotBlockRequest, options?: RequestOptions): ApiPromise&lt;GetSnapshotBlockResponse, Blocks.GetSnapshotBlockError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.blocks.getSnapshotBlock({
    snapshotId: "some example string",
    blockIndex: 1,
    blockToken: "some example string",
  });
  // TODO: Handle 'response' of type GetSnapshotBlockResponse
} catch (err) {
  // TODO: Handle 'err' of type Blocks.GetSnapshotBlockError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.blocks
  .getSnapshotBlock({ snapshotId: "some example string", blockIndex: 1, blockToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetSnapshotBlockResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>snapshotId</code> | <code>string</code> | The ID of the snapshot containing the block from which to get data. If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide. |
| <code>blockIndex</code> | <code>number</code> | The block index of the block in which to read the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned. |
| <code>blockToken</code> | <code>string</code> | The block token of the block from which to get data. You can obtain the BlockToken by running the ListChangedBlocks or ListSnapshotBlocks operations. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.blocks.getSnapshotBlock(request)`

- **OnSuccess**: <code>[GetSnapshotBlockResponse](src/models/get-snapshot-block-response.ts)</code>
- **OnError**: throws <code>[Blocks.GetSnapshotBlockError](src/resources/blocks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.blocks.getSnapshotBlock(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetSnapshotBlockResponse, Blocks.GetSnapshotBlockError&gt;</code>, with `result.value` of type <code>[GetSnapshotBlockResponse](src/models/get-snapshot-block-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonEbsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSnapshotBlocks(request: Blocks.ListSnapshotBlocksRequest, options?: RequestOptions): ApiPromise&lt;ListSnapshotBlocksResponse, Blocks.ListSnapshotBlocksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.blocks.listSnapshotBlocks({ snapshotId: "some example string" });
  // TODO: Handle 'response' of type ListSnapshotBlocksResponse
} catch (err) {
  // TODO: Handle 'err' of type Blocks.ListSnapshotBlocksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.blocks.listSnapshotBlocks({ snapshotId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSnapshotBlocksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>snapshotId</code> | <code>string</code> | The ID of the snapshot from which to get block indexes and block tokens. |
| <code>pageToken?</code> | <code>string</code> | The token to request the next page of results. If you specify NextToken, then StartingBlockIndex is ignored. |
| <code>maxResults?</code> | <code>number</code> | The maximum number of blocks to be returned by the request. Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned NextToken value. The value of NextToken is null when there are no more blocks to return. |
| <code>startingBlockIndex?</code> | <code>number</code> | The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot. If you specify NextToken, then StartingBlockIndex is ignored. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.blocks.listSnapshotBlocks(request)`

- **OnSuccess**: <code>[ListSnapshotBlocksResponse](src/models/list-snapshot-blocks-response.ts)</code>
- **OnError**: throws <code>[Blocks.ListSnapshotBlocksError](src/resources/blocks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.blocks.listSnapshotBlocks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSnapshotBlocksResponse, Blocks.ListSnapshotBlocksError&gt;</code>, with `result.value` of type <code>[ListSnapshotBlocksResponse](src/models/list-snapshot-blocks-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonEbsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putSnapshotBlock(request: Blocks.PutSnapshotBlockRequest, options?: RequestOptions): ApiPromise&lt;PutSnapshotBlockResponse, Blocks.PutSnapshotBlockError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.blocks.putSnapshotBlock({
    snapshotId: "some example string",
    blockIndex: 1,
    xAmzDataLength: 1,
    xAmzChecksum: "some example string",
    xAmzChecksumAlgorithm: XAmzChecksumAlgorithm.Sha256,
  });
  // TODO: Handle 'response' of type PutSnapshotBlockResponse
} catch (err) {
  // TODO: Handle 'err' of type Blocks.PutSnapshotBlockError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.blocks
  .putSnapshotBlock({
    snapshotId: "some example string",
    blockIndex: 1,
    xAmzDataLength: 1,
    xAmzChecksum: "some example string",
    xAmzChecksumAlgorithm: XAmzChecksumAlgorithm.Sha256,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PutSnapshotBlockResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>snapshotId</code> | <code>string</code> | The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide.. |
| <code>blockIndex</code> | <code>number</code> | The block index of the block in which to write the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned. |
| <code>xAmzDataLength</code> | <code>number</code> | The size of the data to write to the block, in bytes. Currently, the only supported size is 524288 bytes. Valid values: 524288 |
| <code>xAmzChecksum</code> | <code>string</code> | A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported. |
| <code>xAmzChecksumAlgorithm</code> | <code>[XAmzChecksumAlgorithm](src/models/xamz-checksum-algorithm.ts)</code> | The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256. |
| <code>xAmzProgress?</code> | <code>number</code> | The progress of the write process, as a percentage. |
| <code>body?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.blocks.putSnapshotBlock(request)`

- **OnSuccess**: <code>[PutSnapshotBlockResponse](src/models/put-snapshot-block-response.ts)</code>
- **OnError**: throws <code>[Blocks.PutSnapshotBlockError](src/resources/blocks.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.blocks.putSnapshotBlock(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PutSnapshotBlockResponse, Blocks.PutSnapshotBlockError&gt;</code>, with `result.value` of type <code>[PutSnapshotBlockResponse](src/models/put-snapshot-block-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonEbsError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

