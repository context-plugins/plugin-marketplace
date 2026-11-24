# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AmazonEbsClient](amazon_ebs/client.py)

## AmazonEbsAmazonElasticBlockStoreEbsApi

> Source: [AmazonEbsAmazonElasticBlockStoreEbsApi](amazon_ebs/apis/amazon_ebs_amazon_elastic_block_store_ebs_api.py)

<details>
<summary><code>def complete_snapshot(snapshot_id: str, x_amz_changed_blocks_count: int, *, x_amz_checksum: str | None = None, x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr | None = None, x_amz_checksum_aggregation_method: XAmzChecksumAggregationMethodOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> CompleteSnapshotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.amazon_ebs_amazon_elastic_block_store_ebs_api.complete_snapshot("some example string", 1)
    # TODO: Handle 'response' of type CompleteSnapshotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompleteSnapshotErrorBody
```

**Async**

```python
try:
    response = await async_client.amazon_ebs_amazon_elastic_block_store_ebs_api.complete_snapshot(
        "some example string", 1
    )
    # TODO: Handle 'response' of type CompleteSnapshotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompleteSnapshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>snapshot_id</code> | <code>str</code> | The ID of the snapshot. |
| <code>x_amz_changed_blocks_count</code> | <code>int</code> | The number of blocks that were written to the snapshot. |
| <code>x_amz_checksum</code> | <code>str \| None</code> | An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To generate the aggregated checksum using the linear aggregation method, arrange the checksums for each written block in ascending order of their block index, concatenate them to form a single string, and then generate the checksum on the entire string using the SHA256 algorithm.<br>**Default**: <code>None</code> |
| <code>x_amz_checksum_algorithm</code> | <code>[XAmzChecksumAlgorithmOrStr](amazon_ebs/models/enums/x_amz_checksum_algorithm.py) \| None</code> | The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256.<br>**Default**: <code>None</code> |
| <code>x_amz_checksum_aggregation_method</code> | <code>[XAmzChecksumAggregationMethodOrStr](amazon_ebs/models/enums/x_amz_checksum_aggregation_method.py) \| None</code> | The aggregation method used to generate the checksum. Currently, the only supported aggregation method is LINEAR.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_ebs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompleteSnapshotResponse](amazon_ebs/models/complete_snapshot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_ebs/core/exceptions.py)&#91;[CompleteSnapshotErrorBody](amazon_ebs/errors/complete_snapshot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RequestThrottledException](amazon_ebs/models/request_throttled_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_ebs/models/service_quota_exceeded_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_ebs/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_ebs/models/resource_not_found_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_ebs/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_ebs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_changed_blocks(second_snapshot_id: str, *, first_snapshot_id: str | None = None, page_token: str | None = None, max_results: int | None = None, starting_block_index: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ListChangedBlocksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.amazon_ebs_amazon_elastic_block_store_ebs_api.list_changed_blocks("some example string")
    # TODO: Handle 'response' of type ListChangedBlocksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListChangedBlocksErrorBody
```

**Async**

```python
try:
    response = await async_client.amazon_ebs_amazon_elastic_block_store_ebs_api.list_changed_blocks(
        "some example string"
    )
    # TODO: Handle 'response' of type ListChangedBlocksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListChangedBlocksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>second_snapshot_id</code> | <code>str</code> | The ID of the second snapshot to use for the comparison. The SecondSnapshotId parameter must be specified with a FirstSnapshotID parameter; otherwise, an error occurs. |
| <code>first_snapshot_id</code> | <code>str \| None</code> | The ID of the first snapshot to use for the comparison. The FirstSnapshotID parameter must be specified with a SecondSnapshotId parameter; otherwise, an error occurs.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | The token to request the next page of results. If you specify NextToken, then StartingBlockIndex is ignored.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of blocks to be returned by the request. Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned NextToken value. The value of NextToken is null when there are no more blocks to return.<br>**Default**: <code>None</code> |
| <code>starting_block_index</code> | <code>int \| None</code> | The block index from which the comparison should start. The list in the response will start from this block index or the next valid block index in the snapshots. If you specify NextToken, then StartingBlockIndex is ignored.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_ebs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListChangedBlocksResponse](amazon_ebs/models/list_changed_blocks_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_ebs/core/exceptions.py)&#91;[ListChangedBlocksErrorBody](amazon_ebs/errors/list_changed_blocks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RequestThrottledException](amazon_ebs/models/request_throttled_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_ebs/models/service_quota_exceeded_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_ebs/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_ebs/models/resource_not_found_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_ebs/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_ebs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_snapshot(*, body: SnapshotsRequest | SnapshotsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> StartSnapshotResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes. After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.amazon_ebs_amazon_elastic_block_store_ebs_api.start_snapshot()
    # TODO: Handle 'response' of type StartSnapshotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSnapshotErrorBody
```

**Async**

```python
try:
    response = await async_client.amazon_ebs_amazon_elastic_block_store_ebs_api.start_snapshot()
    # TODO: Handle 'response' of type StartSnapshotResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSnapshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SnapshotsRequest](amazon_ebs/models/snapshots_request.py) \| [SnapshotsRequestDict](amazon_ebs/models/snapshots_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_ebs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartSnapshotResponse](amazon_ebs/models/start_snapshot_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_ebs/core/exceptions.py)&#91;[StartSnapshotErrorBody](amazon_ebs/errors/start_snapshot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ConcurrentLimitExceededException](amazon_ebs/models/concurrent_limit_exceeded_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_ebs/models/service_quota_exceeded_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_ebs/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_ebs/models/resource_not_found_exception.py)</code> |
| 409 | <code>[ConflictException](amazon_ebs/models/conflict_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_ebs/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_ebs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Blocks

> Source: [Blocks](amazon_ebs/apis/blocks.py)

<details>
<summary><code>def get_snapshot_block(snapshot_id: str, block_index: int, block_token: str, *, request_options: RequestOptionsOrDict | None = None) -> GetSnapshotBlockResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.blocks.get_snapshot_block("some example string", 1, "some example string")
    # TODO: Handle 'response' of type GetSnapshotBlockResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnapshotBlockErrorBody
```

**Async**

```python
try:
    response = await async_client.blocks.get_snapshot_block("some example string", 1, "some example string")
    # TODO: Handle 'response' of type GetSnapshotBlockResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSnapshotBlockErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>snapshot_id</code> | <code>str</code> | The ID of the snapshot containing the block from which to get data. If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide. |
| <code>block_index</code> | <code>int</code> | The block index of the block in which to read the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned. |
| <code>block_token</code> | <code>str</code> | The block token of the block from which to get data. You can obtain the BlockToken by running the ListChangedBlocks or ListSnapshotBlocks operations. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_ebs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSnapshotBlockResponse](amazon_ebs/models/get_snapshot_block_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_ebs/core/exceptions.py)&#91;[GetSnapshotBlockErrorBody](amazon_ebs/errors/get_snapshot_block_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RequestThrottledException](amazon_ebs/models/request_throttled_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_ebs/models/service_quota_exceeded_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_ebs/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_ebs/models/resource_not_found_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_ebs/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_ebs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_snapshot_blocks(snapshot_id: str, *, page_token: str | None = None, max_results: int | None = None, starting_block_index: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ListSnapshotBlocksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.blocks.list_snapshot_blocks("some example string")
    # TODO: Handle 'response' of type ListSnapshotBlocksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSnapshotBlocksErrorBody
```

**Async**

```python
try:
    response = await async_client.blocks.list_snapshot_blocks("some example string")
    # TODO: Handle 'response' of type ListSnapshotBlocksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSnapshotBlocksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>snapshot_id</code> | <code>str</code> | The ID of the snapshot from which to get block indexes and block tokens. |
| <code>page_token</code> | <code>str \| None</code> | The token to request the next page of results. If you specify NextToken, then StartingBlockIndex is ignored.<br>**Default**: <code>None</code> |
| <code>max_results</code> | <code>int \| None</code> | The maximum number of blocks to be returned by the request. Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned NextToken value. The value of NextToken is null when there are no more blocks to return.<br>**Default**: <code>None</code> |
| <code>starting_block_index</code> | <code>int \| None</code> | The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot. If you specify NextToken, then StartingBlockIndex is ignored.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_ebs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSnapshotBlocksResponse](amazon_ebs/models/list_snapshot_blocks_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_ebs/core/exceptions.py)&#91;[ListSnapshotBlocksErrorBody](amazon_ebs/errors/list_snapshot_blocks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RequestThrottledException](amazon_ebs/models/request_throttled_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_ebs/models/service_quota_exceeded_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_ebs/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_ebs/models/resource_not_found_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_ebs/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_ebs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_snapshot_block(snapshot_id: str, block_index: int, x_amz_data_length: int, x_amz_checksum: str, x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr, *, x_amz_progress: int | None = None, body: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PutSnapshotBlockResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.blocks.put_snapshot_block(
        "some example string", 1, 1, "some example string", XAmzChecksumAlgorithm.SHA256
    )
    # TODO: Handle 'response' of type PutSnapshotBlockResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnapshotBlockErrorBody
```

**Async**

```python
try:
    response = await async_client.blocks.put_snapshot_block(
        "some example string", 1, 1, "some example string", XAmzChecksumAlgorithm.SHA256
    )
    # TODO: Handle 'response' of type PutSnapshotBlockResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutSnapshotBlockErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>snapshot_id</code> | <code>str</code> | The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide.. |
| <code>block_index</code> | <code>int</code> | The block index of the block in which to write the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned. |
| <code>x_amz_data_length</code> | <code>int</code> | The size of the data to write to the block, in bytes. Currently, the only supported size is 524288 bytes. Valid values: 524288 |
| <code>x_amz_checksum</code> | <code>str</code> | A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported. |
| <code>x_amz_checksum_algorithm</code> | <code>[XAmzChecksumAlgorithmOrStr](amazon_ebs/models/enums/x_amz_checksum_algorithm.py)</code> | The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256. |
| <code>x_amz_progress</code> | <code>int \| None</code> | The progress of the write process, as a percentage.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>str \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_ebs/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutSnapshotBlockResponse](amazon_ebs/models/put_snapshot_block_response.py)</code> -- Success

**OnError**: <code>[ApiError](amazon_ebs/core/exceptions.py)&#91;[PutSnapshotBlockErrorBody](amazon_ebs/errors/put_snapshot_block_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RequestThrottledException](amazon_ebs/models/request_throttled_exception.py)</code> |
| 402 | <code>[ServiceQuotaExceededException](amazon_ebs/models/service_quota_exceeded_exception.py)</code> |
| 403 | <code>[AccessDeniedException](amazon_ebs/models/access_denied_exception.py)</code> |
| 404 | <code>[ResourceNotFoundException](amazon_ebs/models/resource_not_found_exception.py)</code> |
| 500 | <code>[InternalServerException](amazon_ebs/models/internal_server_exception.py)</code> |
| anything unmapped | <code>[RawError](amazon_ebs/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

