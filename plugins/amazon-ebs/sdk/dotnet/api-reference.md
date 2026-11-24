# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonEbsClient](src/AmazonEbs/AmazonEbsClient.cs)

## AmazonEbsAmazonElasticBlockStoreEbsApi

> Source: [AmazonEbsAmazonElasticBlockStoreEbsApi](src/AmazonEbs/Api/AmazonEbsAmazonElasticBlockStoreEbsApi.cs)

<details>
<summary><code>Task&lt;CompleteSnapshotResponse&gt; CompleteSnapshot(CompleteSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshot(new CompleteSnapshotRequest
    {
        SnapshotId = "some example string",
        XAmzChangedBlocksCount = 1,
    });
    // TODO: Handle 'response' of type CompleteSnapshotResponse
}
catch (ApiException<CompleteSnapshotError> ex)
{
    if (ex.Error.TryGetRequestThrottledException(out var error))
    {
        // TODO: Handle 'error' of type RequestThrottledException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CompleteSnapshotRequest](src/AmazonEbs/Requests/AmazonEbsAmazonElasticBlockStoreEbsApi/CompleteSnapshotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompleteSnapshotResponse](src/AmazonEbs/Models/CompleteSnapshotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonEbs/Core/Exceptions/ApiException.cs)&lt;[CompleteSnapshotError](src/AmazonEbs/Errors/CompleteSnapshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListChangedBlocksResponse&gt; ListChangedBlocks(ListChangedBlocksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocks(new ListChangedBlocksRequest
    {
        SecondSnapshotId = "some example string",
    });
    // TODO: Handle 'response' of type ListChangedBlocksResponse
}
catch (ApiException<ListChangedBlocksError> ex)
{
    if (ex.Error.TryGetRequestThrottledException(out var error))
    {
        // TODO: Handle 'error' of type RequestThrottledException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListChangedBlocksRequest](src/AmazonEbs/Requests/AmazonEbsAmazonElasticBlockStoreEbsApi/ListChangedBlocksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListChangedBlocksResponse](src/AmazonEbs/Models/ListChangedBlocksResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonEbs/Core/Exceptions/ApiException.cs)&lt;[ListChangedBlocksError](src/AmazonEbs/Errors/ListChangedBlocksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartSnapshotResponse&gt; StartSnapshot(StartSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshot(new StartSnapshotRequest());
    // TODO: Handle 'response' of type StartSnapshotResponse
}
catch (ApiException<StartSnapshotError> ex)
{
    if (ex.Error.TryGetConcurrentLimitExceededException(out var error))
    {
        // TODO: Handle 'error' of type ConcurrentLimitExceededException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartSnapshotRequest](src/AmazonEbs/Requests/AmazonEbsAmazonElasticBlockStoreEbsApi/StartSnapshotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartSnapshotResponse](src/AmazonEbs/Models/StartSnapshotResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonEbs/Core/Exceptions/ApiException.cs)&lt;[StartSnapshotError](src/AmazonEbs/Errors/StartSnapshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Blocks

> Source: [Blocks](src/AmazonEbs/Api/Blocks.cs)

<details>
<summary><code>Task&lt;GetSnapshotBlockResponse&gt; GetSnapshotBlock(GetSnapshotBlockRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Blocks.GetSnapshotBlock(new GetSnapshotBlockRequest
    {
        SnapshotId = "some example string",
        BlockIndex = 1,
        BlockToken = "some example string",
    });
    // TODO: Handle 'response' of type GetSnapshotBlockResponse
}
catch (ApiException<GetSnapshotBlockError> ex)
{
    if (ex.Error.TryGetRequestThrottledException(out var error))
    {
        // TODO: Handle 'error' of type RequestThrottledException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSnapshotBlockRequest](src/AmazonEbs/Requests/Blocks/GetSnapshotBlockRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetSnapshotBlockResponse](src/AmazonEbs/Models/GetSnapshotBlockResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonEbs/Core/Exceptions/ApiException.cs)&lt;[GetSnapshotBlockError](src/AmazonEbs/Errors/GetSnapshotBlockError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListSnapshotBlocksResponse&gt; ListSnapshotBlocks(ListSnapshotBlocksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Blocks.ListSnapshotBlocks(new ListSnapshotBlocksRequest
    {
        SnapshotId = "some example string",
    });
    // TODO: Handle 'response' of type ListSnapshotBlocksResponse
}
catch (ApiException<ListSnapshotBlocksError> ex)
{
    if (ex.Error.TryGetRequestThrottledException(out var error))
    {
        // TODO: Handle 'error' of type RequestThrottledException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSnapshotBlocksRequest](src/AmazonEbs/Requests/Blocks/ListSnapshotBlocksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListSnapshotBlocksResponse](src/AmazonEbs/Models/ListSnapshotBlocksResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonEbs/Core/Exceptions/ApiException.cs)&lt;[ListSnapshotBlocksError](src/AmazonEbs/Errors/ListSnapshotBlocksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PutSnapshotBlockResponse&gt; PutSnapshotBlock(PutSnapshotBlockRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Blocks.PutSnapshotBlock(new PutSnapshotBlockRequest
    {
        SnapshotId = "some example string",
        BlockIndex = 1,
        XAmzDataLength = 1,
        XAmzChecksum = "some example string",
        XAmzChecksumAlgorithm = XAmzChecksumAlgorithm.Sha256,
    });
    // TODO: Handle 'response' of type PutSnapshotBlockResponse
}
catch (ApiException<PutSnapshotBlockError> ex)
{
    if (ex.Error.TryGetRequestThrottledException(out var error))
    {
        // TODO: Handle 'error' of type RequestThrottledException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutSnapshotBlockRequest](src/AmazonEbs/Requests/Blocks/PutSnapshotBlockRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PutSnapshotBlockResponse](src/AmazonEbs/Models/PutSnapshotBlockResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonEbs/Core/Exceptions/ApiException.cs)&lt;[PutSnapshotBlockError](src/AmazonEbs/Errors/PutSnapshotBlockError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

