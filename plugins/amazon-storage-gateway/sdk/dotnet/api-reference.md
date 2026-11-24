# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AwsStorageGatewayClient](src/AwsStorageGateway/AwsStorageGatewayClient.cs)

## AmazonStorageGatewayRestApi

> Source: [AmazonStorageGatewayRestApi](src/AwsStorageGateway/Api/AmazonStorageGatewayRestApi.cs)

<details>
<summary><code>Task ActivateGateway(ActivateGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonStorageGatewayRestApi.ActivateGateway(new ActivateGatewayRequest
    {
        XAmzTarget = XAmzTarget.StorageGateway20130630ActivateGateway,
    });
}
catch (ApiException<ActivateGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ActivateGatewayRequest](src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/ActivateGatewayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ActivateGatewayError](src/AwsStorageGateway/Errors/ActivateGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateNfsFileShare(CreateNfsFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard or symbolic links on a file share.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonStorageGatewayRestApi.CreateNfsFileShare(new CreateNfsFileShareRequest
    {
        XAmzTarget = XAmzTarget2.StorageGateway20130630CreateNfsFileShare,
    });
}
catch (ApiException<CreateNfsFileShareError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateNfsFileShareRequest](src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/CreateNfsFileShareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateNfsFileShareError](src/AwsStorageGateway/Errors/CreateNfsFileShareError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeGatewayInformation(DescribeGatewayInformationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonStorageGatewayRestApi.DescribeGatewayInformation(new DescribeGatewayInformationRequest
    {
        XAmzTarget = XAmzTarget4.StorageGateway20130630DescribeGatewayInformation,
    });
}
catch (ApiException<DescribeGatewayInformationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeGatewayInformationRequest](src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/DescribeGatewayInformationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeGatewayInformationError](src/AwsStorageGateway/Errors/DescribeGatewayInformationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListGateways(ListGatewaysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonStorageGatewayRestApi.ListGateways(new ListGatewaysRequest
    {
        XAmzTarget = XAmzTarget3.StorageGateway20130630ListGateways,
    });
}
catch (ApiException<ListGatewaysError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGatewaysRequest](src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/ListGatewaysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListGatewaysError](src/AwsStorageGateway/Errors/ListGatewaysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListVolumes(ListVolumesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AmazonStorageGatewayRestApi.ListVolumes(new ListVolumesRequest
    {
        XAmzTarget = XAmzTarget1.StorageGateway20130630ListVolumes,
    });
}
catch (ApiException<ListVolumesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVolumesRequest](src/AwsStorageGateway/Requests/AmazonStorageGatewayRestApi/ListVolumesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListVolumesError](src/AwsStorageGateway/Errors/ListVolumesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStorageGatewayApi

> Source: [AwsStorageGatewayApi](src/AwsStorageGateway/Api/AwsStorageGatewayApi.cs)

<details>
<summary><code>Task ActivateGateway2(ActivateGateway2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ActivateGateway2(new ActivateGateway2Request
    {
        XAmzTarget = XAmzTarget.StorageGateway20130630ActivateGateway,
    });
}
catch (ApiException<ActivateGateway2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ActivateGateway2Request](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ActivateGateway2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ActivateGateway2Error](src/AwsStorageGateway/Errors/ActivateGateway2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AddCache(AddCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape, and file gateway type (see How Storage Gateway works (architecture). In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.AddCache(new AddCacheRequest
    {
        XAmzTarget = XAmzTarget8.StorageGateway20130630AddCache,
    });
}
catch (ApiException<AddCacheError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddCacheRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AddCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[AddCacheError](src/AwsStorageGateway/Errors/AddCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AddTagsToResource(AddTagsToResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following Storage Gateway resources: Storage gateways of all types Storage volumes Virtual tapes NFS and SMB file shares File System associations You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.AddTagsToResource(new AddTagsToResourceRequest
    {
        XAmzTarget = XAmzTarget11.StorageGateway20130630AddTagsToResource,
    });
}
catch (ApiException<AddTagsToResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddTagsToResourceRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AddTagsToResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[AddTagsToResourceError](src/AwsStorageGateway/Errors/AddTagsToResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AddUploadBuffer(AddUploadBufferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.AddUploadBuffer(new AddUploadBufferRequest
    {
        XAmzTarget = XAmzTarget14.StorageGateway20130630AddUploadBuffer,
    });
}
catch (ApiException<AddUploadBufferError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddUploadBufferRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AddUploadBufferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[AddUploadBufferError](src/AwsStorageGateway/Errors/AddUploadBufferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AddWorkingStorage(AddWorkingStorageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use AddUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the AddUploadBuffer operation to add upload buffer to a stored volume gateway. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.AddWorkingStorage(new AddWorkingStorageRequest
    {
        XAmzTarget = XAmzTarget16.StorageGateway20130630AddWorkingStorage,
    });
}
catch (ApiException<AddWorkingStorageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AddWorkingStorageRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AddWorkingStorageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[AddWorkingStorageError](src/AwsStorageGateway/Errors/AddWorkingStorageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssignTapePool(AssignTapePoolRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.AssignTapePool(new AssignTapePoolRequest
    {
        XAmzTarget = XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630AssignTapePool,
    });
}
catch (ApiException<AssignTapePoolError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssignTapePoolRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AssignTapePoolRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[AssignTapePoolError](src/AwsStorageGateway/Errors/AssignTapePoolError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssociateFileSystem(AssociateFileSystemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.AssociateFileSystem(new AssociateFileSystemRequest
    {
        XAmzTarget = XAmzTarget18.StorageGateway20130630AssociateFileSystem,
    });
}
catch (ApiException<AssociateFileSystemError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssociateFileSystemRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AssociateFileSystemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[AssociateFileSystemError](src/AwsStorageGateway/Errors/AssociateFileSystemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AttachVolume(AttachVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.AttachVolume(new AttachVolumeRequest
    {
        XAmzTarget = XAmzTarget20.StorageGateway20130630AttachVolume,
    });
}
catch (ApiException<AttachVolumeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AttachVolumeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/AttachVolumeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[AttachVolumeError](src/AwsStorageGateway/Errors/AttachVolumeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CancelArchival(CancelArchivalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CancelArchival(new CancelArchivalRequest
    {
        XAmzTarget = XAmzTarget23.StorageGateway20130630CancelArchival,
    });
}
catch (ApiException<CancelArchivalError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelArchivalRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CancelArchivalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CancelArchivalError](src/AwsStorageGateway/Errors/CancelArchivalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CancelRetrieval(CancelRetrievalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CancelRetrieval(new CancelRetrievalRequest
    {
        XAmzTarget = XAmzTarget24.StorageGateway20130630CancelRetrieval,
    });
}
catch (ApiException<CancelRetrievalError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelRetrievalRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CancelRetrievalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CancelRetrievalError](src/AwsStorageGateway/Errors/CancelRetrievalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateCachediScsiVolume(CreateCachediScsiVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes value must be equal to or larger than the size of the copied volume, in bytes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateCachediScsiVolume(new CreateCachediScsiVolumeRequest
    {
        XAmzTarget = XAmzTarget25.StorageGateway20130630CreateCachediScsiVolume,
    });
}
catch (ApiException<CreateCachediScsiVolumeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCachediScsiVolumeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateCachediScsiVolumeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateCachediScsiVolumeError](src/AwsStorageGateway/Errors/CreateCachediScsiVolumeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateNfsFileShare2(CreateNfsFileShare2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard or symbolic links on a file share.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateNfsFileShare2(new CreateNfsFileShare2Request
    {
        XAmzTarget = XAmzTarget2.StorageGateway20130630CreateNfsFileShare,
    });
}
catch (ApiException<CreateNfsFileShare2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateNfsFileShare2Request](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateNfsFileShare2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateNfsFileShare2Error](src/AwsStorageGateway/Errors/CreateNfsFileShare2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateSmbFileShare(CreateSmbFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation is only supported for S3 File Gateways. S3 File Gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateSmbFileShare(new CreateSmbFileShareRequest
    {
        XAmzTarget = XAmzTarget29.StorageGateway20130630CreateSmbFileShare,
    });
}
catch (ApiException<CreateSmbFileShareError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSmbFileShareRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateSmbFileShareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateSmbFileShareError](src/AwsStorageGateway/Errors/CreateSmbFileShareError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateSnapshot(CreateSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference. Volume

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateSnapshot(new CreateSnapshotRequest
    {
        XAmzTarget = XAmzTarget32.StorageGateway20130630CreateSnapshot,
    });
}
catch (ApiException<CreateSnapshotError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSnapshotRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateSnapshotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateSnapshotError](src/AwsStorageGateway/Errors/CreateSnapshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateSnapshotFromVolumeRecoveryPoint(CreateSnapshotFromVolumeRecoveryPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use ListVolumeRecoveryPoints. In the CreateSnapshotFromVolumeRecoveryPoint request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateSnapshotFromVolumeRecoveryPoint(
        new CreateSnapshotFromVolumeRecoveryPointRequest
        {
            XAmzTarget = XAmzTarget33.StorageGateway20130630CreateSnapshotFromVolumeRecoveryPoint,
        });
}
catch (ApiException<CreateSnapshotFromVolumeRecoveryPointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSnapshotFromVolumeRecoveryPointRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateSnapshotFromVolumeRecoveryPointRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateSnapshotFromVolumeRecoveryPointError](src/AwsStorageGateway/Errors/CreateSnapshotFromVolumeRecoveryPointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateStorediScsiVolume(CreateStorediScsiVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type. The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateStorediScsiVolume(new CreateStorediScsiVolumeRequest
    {
        XAmzTarget = XAmzTarget34.StorageGateway20130630CreateStorediScsiVolume,
    });
}
catch (ApiException<CreateStorediScsiVolumeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateStorediScsiVolumeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateStorediScsiVolumeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateStorediScsiVolumeError](src/AwsStorageGateway/Errors/CreateStorediScsiVolumeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateTapePool(CreateTapePoolRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are archived in the custom pool.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateTapePool(new CreateTapePoolRequest
    {
        XAmzTarget = XAmzTarget36.StorageGateway20130630CreateTapePool,
    });
}
catch (ApiException<CreateTapePoolError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTapePoolRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateTapePoolRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateTapePoolError](src/AwsStorageGateway/Errors/CreateTapePoolError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateTapeWithBarcode(CreateTapeWithBarcodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage to a gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateTapeWithBarcode(new CreateTapeWithBarcodeRequest
    {
        XAmzTarget = XAmzTarget40.StorageGateway20130630CreateTapeWithBarcode,
    });
}
catch (ApiException<CreateTapeWithBarcodeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTapeWithBarcodeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateTapeWithBarcodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateTapeWithBarcodeError](src/AwsStorageGateway/Errors/CreateTapeWithBarcodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateTapes(CreateTapesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.CreateTapes(new CreateTapesRequest
    {
        XAmzTarget = XAmzTarget39.StorageGateway20130630CreateTapes,
    });
}
catch (ApiException<CreateTapesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTapesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/CreateTapesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CreateTapesError](src/AwsStorageGateway/Errors/CreateTapesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteAutomaticTapeCreationPolicy(DeleteAutomaticTapeCreationPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the automatic tape creation policy of a gateway. If you delete this policy, new virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway in your request to remove the policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteAutomaticTapeCreationPolicy(new DeleteAutomaticTapeCreationPolicyRequest
    {
        XAmzTarget = XAmzTarget44.StorageGateway20130630DeleteAutomaticTapeCreationPolicy,
    });
}
catch (ApiException<DeleteAutomaticTapeCreationPolicyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteAutomaticTapeCreationPolicyRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteAutomaticTapeCreationPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteAutomaticTapeCreationPolicyError](src/AwsStorageGateway/Errors/DeleteAutomaticTapeCreationPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteBandwidthRateLimit(DeleteBandwidthRateLimitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only for the stored volume, cached volume, and tape gateway types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteBandwidthRateLimit(new DeleteBandwidthRateLimitRequest
    {
        XAmzTarget = XAmzTarget47.StorageGateway20130630DeleteBandwidthRateLimit,
    });
}
catch (ApiException<DeleteBandwidthRateLimitError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBandwidthRateLimitRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteBandwidthRateLimitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteBandwidthRateLimitError](src/AwsStorageGateway/Errors/DeleteBandwidthRateLimitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteChapCredentials(DeleteChapCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair. This operation is supported in volume and tape gateway types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteChapCredentials(new DeleteChapCredentialsRequest
    {
        XAmzTarget = XAmzTarget50.StorageGateway20130630DeleteChapCredentials,
    });
}
catch (ApiException<DeleteChapCredentialsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteChapCredentialsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteChapCredentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteChapCredentialsError](src/AwsStorageGateway/Errors/DeleteChapCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteFileShare(DeleteFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteFileShare(new DeleteFileShareRequest
    {
        XAmzTarget = XAmzTarget53.StorageGateway20130630DeleteFileShare,
    });
}
catch (ApiException<DeleteFileShareError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteFileShareRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteFileShareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteFileShareError](src/AwsStorageGateway/Errors/DeleteFileShareError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteGateway(DeleteGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the Storage Gateway detail page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteGateway(new DeleteGatewayRequest
    {
        XAmzTarget = XAmzTarget55.StorageGateway20130630DeleteGateway,
    });
}
catch (ApiException<DeleteGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteGatewayRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteGatewayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteGatewayError](src/AwsStorageGateway/Errors/DeleteGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSnapshotSchedule(DeleteSnapshotScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a snapshot of a volume. You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see Backing up your volumes. In the DeleteSnapshotSchedule request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported for cached volume gateway types. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteSnapshotSchedule(new DeleteSnapshotScheduleRequest
    {
        XAmzTarget = XAmzTarget58.StorageGateway20130630DeleteSnapshotSchedule,
    });
}
catch (ApiException<DeleteSnapshotScheduleError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteSnapshotScheduleRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteSnapshotScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteSnapshotScheduleError](src/AwsStorageGateway/Errors/DeleteSnapshotScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteTape(DeleteTapeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified virtual tape. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteTape(new DeleteTapeRequest
    {
        XAmzTarget = XAmzTarget41.StorageGateway20130630DeleteTape,
    });
}
catch (ApiException<DeleteTapeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTapeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteTapeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteTapeError](src/AwsStorageGateway/Errors/DeleteTapeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteTapeArchive(DeleteTapeArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteTapeArchive(new DeleteTapeArchiveRequest
    {
        XAmzTarget = XAmzTarget61.StorageGateway20130630DeleteTapeArchive,
    });
}
catch (ApiException<DeleteTapeArchiveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTapeArchiveRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteTapeArchiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteTapeArchiveError](src/AwsStorageGateway/Errors/DeleteTapeArchiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteTapePool(DeleteTapePoolRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if there are no automatic tape creation policies that reference the custom tape pool.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteTapePool(new DeleteTapePoolRequest
    {
        XAmzTarget = XAmzTarget37.StorageGateway20130630DeleteTapePool,
    });
}
catch (ApiException<DeleteTapePoolError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTapePoolRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteTapePoolRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteTapePoolError](src/AwsStorageGateway/Errors/DeleteTapePoolError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVolume(DeleteVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DeleteVolume(new DeleteVolumeRequest
    {
        XAmzTarget = XAmzTarget21.StorageGateway20130630DeleteVolume,
    });
}
catch (ApiException<DeleteVolumeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteVolumeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DeleteVolumeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteVolumeError](src/AwsStorageGateway/Errors/DeleteVolumeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeAvailabilityMonitorTest(DescribeAvailabilityMonitorTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the most recent high availability monitoring test that was performed on the host in a cluster. If a test isn't performed, the status and start time in the response would be null.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeAvailabilityMonitorTest(new DescribeAvailabilityMonitorTestRequest
    {
        XAmzTarget = XAmzTarget63.StorageGateway20130630DescribeAvailabilityMonitorTest,
    });
}
catch (ApiException<DescribeAvailabilityMonitorTestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeAvailabilityMonitorTestRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeAvailabilityMonitorTestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeAvailabilityMonitorTestError](src/AwsStorageGateway/Errors/DescribeAvailabilityMonitorTestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeBandwidthRateLimit(DescribeBandwidthRateLimitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect. This operation is supported only for the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits for S3 file gateways, use DescribeBandwidthRateLimitSchedule. This operation returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeBandwidthRateLimit(new DescribeBandwidthRateLimitRequest
    {
        XAmzTarget = XAmzTarget48.StorageGateway20130630DescribeBandwidthRateLimit,
    });
}
catch (ApiException<DescribeBandwidthRateLimitError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBandwidthRateLimitRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeBandwidthRateLimitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeBandwidthRateLimitError](src/AwsStorageGateway/Errors/DescribeBandwidthRateLimitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeBandwidthRateLimitSchedule(DescribeBandwidthRateLimitScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not support bandwidth rate limits. This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit interval defines a period of time on one or more days of the week, during which bandwidth rate limits are specified for uploading, downloading, or both. A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute, an ending hour and minute, and bandwidth rate limits for uploading and downloading If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeBandwidthRateLimitSchedule(new DescribeBandwidthRateLimitScheduleRequest
    {
        XAmzTarget = XAmzTarget65.StorageGateway20130630DescribeBandwidthRateLimitSchedule,
    });
}
catch (ApiException<DescribeBandwidthRateLimitScheduleError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeBandwidthRateLimitScheduleRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeBandwidthRateLimitScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeBandwidthRateLimitScheduleError](src/AwsStorageGateway/Errors/DescribeBandwidthRateLimitScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeCache(DescribeCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape, and file gateway types. The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeCache(new DescribeCacheRequest
    {
        XAmzTarget = XAmzTarget9.StorageGateway20130630DescribeCache,
    });
}
catch (ApiException<DescribeCacheError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeCacheRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeCacheError](src/AwsStorageGateway/Errors/DescribeCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeCachediScsiVolumes(DescribeCachediScsiVolumesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeCachediScsiVolumes(new DescribeCachediScsiVolumesRequest
    {
        XAmzTarget = XAmzTarget26.StorageGateway20130630DescribeCachediScsiVolumes,
    });
}
catch (ApiException<DescribeCachediScsiVolumesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeCachediScsiVolumesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeCachediScsiVolumesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeCachediScsiVolumesError](src/AwsStorageGateway/Errors/DescribeCachediScsiVolumesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeChapCredentials(DescribeChapCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair. This operation is supported in the volume and tape gateway types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeChapCredentials(new DescribeChapCredentialsRequest
    {
        XAmzTarget = XAmzTarget51.StorageGateway20130630DescribeChapCredentials,
    });
}
catch (ApiException<DescribeChapCredentialsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeChapCredentialsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeChapCredentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeChapCredentialsError](src/AwsStorageGateway/Errors/DescribeChapCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeFileSystemAssociations(DescribeFileSystemAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the file system association information. This operation is only supported for FSx File Gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeFileSystemAssociations(new DescribeFileSystemAssociationsRequest
    {
        XAmzTarget = XAmzTarget67.StorageGateway20130630DescribeFileSystemAssociations,
    });
}
catch (ApiException<DescribeFileSystemAssociationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeFileSystemAssociationsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeFileSystemAssociationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeFileSystemAssociationsError](src/AwsStorageGateway/Errors/DescribeFileSystemAssociationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeGatewayInformation2(DescribeGatewayInformation2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeGatewayInformation2(new DescribeGatewayInformation2Request
    {
        XAmzTarget = XAmzTarget4.StorageGateway20130630DescribeGatewayInformation,
    });
}
catch (ApiException<DescribeGatewayInformation2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeGatewayInformation2Request](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeGatewayInformation2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeGatewayInformation2Error](src/AwsStorageGateway/Errors/DescribeGatewayInformation2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeMaintenanceStartTime(DescribeMaintenanceStartTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns your gateway's maintenance window schedule information, with values for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time values returned are for the gateway's time zone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeMaintenanceStartTime(new DescribeMaintenanceStartTimeRequest
    {
        XAmzTarget = XAmzTarget71.StorageGateway20130630DescribeMaintenanceStartTime,
    });
}
catch (ApiException<DescribeMaintenanceStartTimeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeMaintenanceStartTimeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeMaintenanceStartTimeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeMaintenanceStartTimeError](src/AwsStorageGateway/Errors/DescribeMaintenanceStartTimeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeNfsFileShares(DescribeNfsFileSharesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a description for one or more Network File System (NFS) file shares from an S3 File Gateway. This operation is only supported for S3 File Gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeNfsFileShares(new DescribeNfsFileSharesRequest
    {
        XAmzTarget = XAmzTarget27.StorageGateway20130630DescribeNfsFileShares,
    });
}
catch (ApiException<DescribeNfsFileSharesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeNfsFileSharesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeNfsFileSharesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeNfsFileSharesError](src/AwsStorageGateway/Errors/DescribeNfsFileSharesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeSmbFileShares(DescribeSmbFileSharesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a description for one or more Server Message Block (SMB) file shares from a S3 File Gateway. This operation is only supported for S3 File Gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeSmbFileShares(new DescribeSmbFileSharesRequest
    {
        XAmzTarget = XAmzTarget30.StorageGateway20130630DescribeSmbFileShares,
    });
}
catch (ApiException<DescribeSmbFileSharesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeSmbFileSharesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeSmbFileSharesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeSmbFileSharesError](src/AwsStorageGateway/Errors/DescribeSmbFileSharesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeSmbSettings(DescribeSmbSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeSmbSettings(new DescribeSmbSettingsRequest
    {
        XAmzTarget = XAmzTarget73.StorageGateway20130630DescribeSmbSettings,
    });
}
catch (ApiException<DescribeSmbSettingsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeSmbSettingsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeSmbSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeSmbSettingsError](src/AwsStorageGateway/Errors/DescribeSmbSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeSnapshotSchedule(DescribeSnapshotScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeSnapshotSchedule(new DescribeSnapshotScheduleRequest
    {
        XAmzTarget = XAmzTarget59.StorageGateway20130630DescribeSnapshotSchedule,
    });
}
catch (ApiException<DescribeSnapshotScheduleError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeSnapshotScheduleRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeSnapshotScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeSnapshotScheduleError](src/AwsStorageGateway/Errors/DescribeSnapshotScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeStorediScsiVolumes(DescribeStorediScsiVolumesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeStorediScsiVolumes(new DescribeStorediScsiVolumesRequest
    {
        XAmzTarget = XAmzTarget35.StorageGateway20130630DescribeStorediScsiVolumes,
    });
}
catch (ApiException<DescribeStorediScsiVolumesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeStorediScsiVolumesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeStorediScsiVolumesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeStorediScsiVolumesError](src/AwsStorageGateway/Errors/DescribeStorediScsiVolumesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeTapeArchives(DescribeTapeArchivesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeTapeArchives(new DescribeTapeArchivesRequest
    {
        XAmzTarget = XAmzTarget62.StorageGateway20130630DescribeTapeArchives,
    });
}
catch (ApiException<DescribeTapeArchivesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTapeArchivesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeTapeArchivesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeTapeArchivesError](src/AwsStorageGateway/Errors/DescribeTapeArchivesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeTapeRecoveryPoints(DescribeTapeRecoveryPointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeTapeRecoveryPoints(new DescribeTapeRecoveryPointsRequest
    {
        XAmzTarget = XAmzTarget74.StorageGateway20130630DescribeTapeRecoveryPoints,
    });
}
catch (ApiException<DescribeTapeRecoveryPointsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTapeRecoveryPointsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeTapeRecoveryPointsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeTapeRecoveryPointsError](src/AwsStorageGateway/Errors/DescribeTapeRecoveryPointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeTapes(DescribeTapesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This operation is only supported for the tape gateway type. The operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of tapes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeTapes(new DescribeTapesRequest
    {
        XAmzTarget = XAmzTarget42.StorageGateway20130630DescribeTapes,
    });
}
catch (ApiException<DescribeTapesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTapesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeTapesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeTapesError](src/AwsStorageGateway/Errors/DescribeTapesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeUploadBuffer(DescribeUploadBufferRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeUploadBuffer(new DescribeUploadBufferRequest
    {
        XAmzTarget = XAmzTarget15.StorageGateway20130630DescribeUploadBuffer,
    });
}
catch (ApiException<DescribeUploadBufferError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeUploadBufferRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeUploadBufferRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeUploadBufferError](src/AwsStorageGateway/Errors/DescribeUploadBufferError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeVtlDevices(DescribeVtlDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, Storage Gateway returns VTL device information. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeVtlDevices(new DescribeVtlDevicesRequest
    {
        XAmzTarget = XAmzTarget75.StorageGateway20130630DescribeVtlDevices,
    });
}
catch (ApiException<DescribeVtlDevicesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeVtlDevicesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeVtlDevicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeVtlDevicesError](src/AwsStorageGateway/Errors/DescribeVtlDevicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeWorkingStorage(DescribeWorkingStorageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead. Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway. The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DescribeWorkingStorage(new DescribeWorkingStorageRequest
    {
        XAmzTarget = XAmzTarget17.StorageGateway20130630DescribeWorkingStorage,
    });
}
catch (ApiException<DescribeWorkingStorageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeWorkingStorageRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DescribeWorkingStorageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeWorkingStorageError](src/AwsStorageGateway/Errors/DescribeWorkingStorageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetachVolume(DetachVolumeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DetachVolume(new DetachVolumeRequest
    {
        XAmzTarget = XAmzTarget22.StorageGateway20130630DetachVolume,
    });
}
catch (ApiException<DetachVolumeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetachVolumeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DetachVolumeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DetachVolumeError](src/AwsStorageGateway/Errors/DetachVolumeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DisableGateway(DisableGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a gateway is disabled, it cannot be enabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DisableGateway(new DisableGatewayRequest
    {
        XAmzTarget = XAmzTarget56.StorageGateway20130630DisableGateway,
    });
}
catch (ApiException<DisableGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DisableGatewayRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DisableGatewayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DisableGatewayError](src/AwsStorageGateway/Errors/DisableGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DisassociateFileSystem(DisassociateFileSystemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the FSx File Gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.DisassociateFileSystem(new DisassociateFileSystemRequest
    {
        XAmzTarget = XAmzTarget19.StorageGateway20130630DisassociateFileSystem,
    });
}
catch (ApiException<DisassociateFileSystemError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DisassociateFileSystemRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/DisassociateFileSystemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DisassociateFileSystemError](src/AwsStorageGateway/Errors/DisassociateFileSystemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task JoinDomain(JoinDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you will need to create this account ahead of time. To create the gateway's computer account in an organizational unit other than the default, you must specify the organizational unit when joining the domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.JoinDomain(new JoinDomainRequest
    {
        XAmzTarget = XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630JoinDomain,
    });
}
catch (ApiException<JoinDomainError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JoinDomainRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/JoinDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[JoinDomainError](src/AwsStorageGateway/Errors/JoinDomainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListAutomaticTapeCreationPolicies(ListAutomaticTapeCreationPoliciesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the automatic tape creation policies for a gateway. If there are no automatic tape creation policies for the gateway, it returns an empty list. This operation is only supported for tape gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListAutomaticTapeCreationPolicies(new ListAutomaticTapeCreationPoliciesRequest
    {
        XAmzTarget = XAmzTarget45.StorageGateway20130630ListAutomaticTapeCreationPolicies,
    });
}
catch (ApiException<ListAutomaticTapeCreationPoliciesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAutomaticTapeCreationPoliciesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListAutomaticTapeCreationPoliciesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListAutomaticTapeCreationPoliciesError](src/AwsStorageGateway/Errors/ListAutomaticTapeCreationPoliciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListFileShares(ListFileSharesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling Amazon Web Services account. This operation is only supported for S3 File Gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListFileShares(new ListFileSharesRequest
    {
        XAmzTarget = XAmzTarget54.StorageGateway20130630ListFileShares,
    });
}
catch (ApiException<ListFileSharesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFileSharesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListFileSharesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListFileSharesError](src/AwsStorageGateway/Errors/ListFileSharesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListFileSystemAssociations(ListFileSystemAssociationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system association. This operation is only supported for FSx File Gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListFileSystemAssociations(new ListFileSystemAssociationsRequest
    {
        XAmzTarget = XAmzTarget68.StorageGateway20130630ListFileSystemAssociations,
    });
}
catch (ApiException<ListFileSystemAssociationsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFileSystemAssociationsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListFileSystemAssociationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListFileSystemAssociationsError](src/AwsStorageGateway/Errors/ListFileSystemAssociationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListGateways2(ListGateways2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListGateways2(new ListGateways2Request
    {
        XAmzTarget = XAmzTarget3.StorageGateway20130630ListGateways,
    });
}
catch (ApiException<ListGateways2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListGateways2Request](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListGateways2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListGateways2Error](src/AwsStorageGateway/Errors/ListGateways2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListLocalDisks(ListLocalDisksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request. The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a DiskStatus field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListLocalDisks(new ListLocalDisksRequest
    {
        XAmzTarget = XAmzTarget76.StorageGateway20130630ListLocalDisks,
    });
}
catch (ApiException<ListLocalDisksError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListLocalDisksRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListLocalDisksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListLocalDisksError](src/AwsStorageGateway/Errors/ListLocalDisksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTagsForResource(ListTagsForResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags that have been added to the specified resource. This operation is supported in storage gateways of all types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListTagsForResource(new ListTagsForResourceRequest
    {
        XAmzTarget = XAmzTarget12.StorageGateway20130630ListTagsForResource,
    });
}
catch (ApiException<ListTagsForResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTagsForResourceRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListTagsForResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AwsStorageGateway/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTapePools(ListTapePoolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape pools.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListTapePools(new ListTapePoolsRequest
    {
        XAmzTarget = XAmzTarget38.StorageGateway20130630ListTapePools,
    });
}
catch (ApiException<ListTapePoolsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTapePoolsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListTapePoolsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListTapePoolsError](src/AwsStorageGateway/Errors/ListTapePoolsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTapes(ListTapesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListTapes(new ListTapesRequest
    {
        XAmzTarget = XAmzTarget43.StorageGateway20130630ListTapes,
    });
}
catch (ApiException<ListTapesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTapesRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListTapesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListTapesError](src/AwsStorageGateway/Errors/ListTapesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListVolumeInitiators(ListVolumeInitiatorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListVolumeInitiators(new ListVolumeInitiatorsRequest
    {
        XAmzTarget = XAmzTarget77.StorageGateway20130630ListVolumeInitiators,
    });
}
catch (ApiException<ListVolumeInitiatorsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVolumeInitiatorsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListVolumeInitiatorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListVolumeInitiatorsError](src/AwsStorageGateway/Errors/ListVolumeInitiatorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListVolumeRecoveryPoints(ListVolumeRecoveryPointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type. Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the CreateSnapshotFromVolumeRecoveryPoint operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListVolumeRecoveryPoints(new ListVolumeRecoveryPointsRequest
    {
        XAmzTarget = XAmzTarget78.StorageGateway20130630ListVolumeRecoveryPoints,
    });
}
catch (ApiException<ListVolumeRecoveryPointsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVolumeRecoveryPointsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListVolumeRecoveryPointsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListVolumeRecoveryPointsError](src/AwsStorageGateway/Errors/ListVolumeRecoveryPointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListVolumes2(ListVolumes2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ListVolumes2(new ListVolumes2Request
    {
        XAmzTarget = XAmzTarget1.StorageGateway20130630ListVolumes,
    });
}
catch (ApiException<ListVolumes2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListVolumes2Request](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ListVolumes2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListVolumes2Error](src/AwsStorageGateway/Errors/ListVolumes2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task NotifyWhenUploaded(NotifyWhenUploadedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends you notification through Amazon EventBridge when all files written to your file share have been uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.NotifyWhenUploaded(new NotifyWhenUploadedRequest
    {
        XAmzTarget = XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630NotifyWhenUploaded,
    });
}
catch (ApiException<NotifyWhenUploadedError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NotifyWhenUploadedRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/NotifyWhenUploadedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[NotifyWhenUploadedError](src/AwsStorageGateway/Errors/NotifyWhenUploadedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RefreshCache(RefreshCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see Getting notified about file operations in the Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.RefreshCache(new RefreshCacheRequest
    {
        XAmzTarget = XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630RefreshCache,
    });
}
catch (ApiException<RefreshCacheError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefreshCacheRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/RefreshCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[RefreshCacheError](src/AwsStorageGateway/Errors/RefreshCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RemoveTagsFromResource(RemoveTagsFromResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from the specified resource. This operation is supported in storage gateways of all types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.RemoveTagsFromResource(new RemoveTagsFromResourceRequest
    {
        XAmzTarget = XAmzTarget13.StorageGateway20130630RemoveTagsFromResource,
    });
}
catch (ApiException<RemoveTagsFromResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RemoveTagsFromResourceRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/RemoveTagsFromResourceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[RemoveTagsFromResourceError](src/AwsStorageGateway/Errors/RemoveTagsFromResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ResetCache(ResetCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets all cache disks that have encountered an error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters an error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point, you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types. If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ResetCache(new ResetCacheRequest
    {
        XAmzTarget = XAmzTarget10.StorageGateway20130630ResetCache,
    });
}
catch (ApiException<ResetCacheError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResetCacheRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ResetCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ResetCacheError](src/AwsStorageGateway/Errors/ResetCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RetrieveTapeArchive(RetrieveTapeArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.RetrieveTapeArchive(new RetrieveTapeArchiveRequest
    {
        XAmzTarget = XAmzTarget5.StorageGateway20130630RetrieveTapeArchive,
    });
}
catch (ApiException<RetrieveTapeArchiveError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveTapeArchiveRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/RetrieveTapeArchiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[RetrieveTapeArchiveError](src/AwsStorageGateway/Errors/RetrieveTapeArchiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RetrieveTapeRecoveryPoint(RetrieveTapeRecoveryPointRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.RetrieveTapeRecoveryPoint(new RetrieveTapeRecoveryPointRequest
    {
        XAmzTarget = XAmzTarget6.StorageGateway20130630RetrieveTapeRecoveryPoint,
    });
}
catch (ApiException<RetrieveTapeRecoveryPointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveTapeRecoveryPointRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/RetrieveTapeRecoveryPointRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[RetrieveTapeRecoveryPointError](src/AwsStorageGateway/Errors/RetrieveTapeRecoveryPointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SetLocalConsolePassword(SetLocalConsolePasswordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.SetLocalConsolePassword(new SetLocalConsolePasswordRequest
    {
        XAmzTarget = XAmzTarget79.StorageGateway20130630SetLocalConsolePassword,
    });
}
catch (ApiException<SetLocalConsolePasswordError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetLocalConsolePasswordRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/SetLocalConsolePasswordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[SetLocalConsolePasswordError](src/AwsStorageGateway/Errors/SetLocalConsolePasswordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SetSmbGuestPassword(SetSmbGuestPasswordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method for the file share is set to GuestAccess. This operation only supported for S3 File Gateways

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.SetSmbGuestPassword(new SetSmbGuestPasswordRequest
    {
        XAmzTarget = XAmzTarget80.StorageGateway20130630SetSmbGuestPassword,
    });
}
catch (ApiException<SetSmbGuestPasswordError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SetSmbGuestPasswordRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/SetSmbGuestPasswordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[SetSmbGuestPasswordError](src/AwsStorageGateway/Errors/SetSmbGuestPasswordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ShutdownGateway(ShutdownGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.ShutdownGateway(new ShutdownGatewayRequest
    {
        XAmzTarget = XAmzTarget7.StorageGateway20130630ShutdownGateway,
    });
}
catch (ApiException<ShutdownGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ShutdownGatewayRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/ShutdownGatewayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ShutdownGatewayError](src/AwsStorageGateway/Errors/ShutdownGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartAvailabilityMonitorTest(StartAvailabilityMonitorTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.StartAvailabilityMonitorTest(new StartAvailabilityMonitorTestRequest
    {
        XAmzTarget = XAmzTarget64.StorageGateway20130630StartAvailabilityMonitorTest,
    });
}
catch (ApiException<StartAvailabilityMonitorTestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartAvailabilityMonitorTestRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/StartAvailabilityMonitorTestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[StartAvailabilityMonitorTestError](src/AwsStorageGateway/Errors/StartAvailabilityMonitorTestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartGateway(StartGatewayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and check the status before making any additional API calls. For more information, see ActivateGateway. To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.StartGateway(new StartGatewayRequest
    {
        XAmzTarget = XAmzTarget57.StorageGateway20130630StartGateway,
    });
}
catch (ApiException<StartGatewayError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartGatewayRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/StartGatewayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[StartGatewayError](src/AwsStorageGateway/Errors/StartGatewayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateAutomaticTapeCreationPolicy(UpdateAutomaticTapeCreationPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the automatic tape creation policy of a gateway. Use this to update the policy with a new set of automatic tape creation rules. This is only supported for tape gateways. By default, there is no automatic tape creation policy. A gateway can have only one automatic tape creation policy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateAutomaticTapeCreationPolicy(new UpdateAutomaticTapeCreationPolicyRequest
    {
        XAmzTarget = XAmzTarget46.StorageGateway20130630UpdateAutomaticTapeCreationPolicy,
    });
}
catch (ApiException<UpdateAutomaticTapeCreationPolicyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAutomaticTapeCreationPolicyRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateAutomaticTapeCreationPolicyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateAutomaticTapeCreationPolicyError](src/AwsStorageGateway/Errors/UpdateAutomaticTapeCreationPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateBandwidthRateLimit(UpdateBandwidthRateLimitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains. This operation is supported only for the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits for S3 file gateways, use UpdateBandwidthRateLimitSchedule. By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateBandwidthRateLimit(new UpdateBandwidthRateLimitRequest
    {
        XAmzTarget = XAmzTarget49.StorageGateway20130630UpdateBandwidthRateLimit,
    });
}
catch (ApiException<UpdateBandwidthRateLimitError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBandwidthRateLimitRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateBandwidthRateLimitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateBandwidthRateLimitError](src/AwsStorageGateway/Errors/UpdateBandwidthRateLimitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateBandwidthRateLimitSchedule(UpdateBandwidthRateLimitScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This operation is supported for volume, tape, and S3 file gateways. S3 file gateways support bandwidth rate limits for upload only. FSx file gateways do not support bandwidth rate limits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateBandwidthRateLimitSchedule(new UpdateBandwidthRateLimitScheduleRequest
    {
        XAmzTarget = XAmzTarget66.StorageGateway20130630UpdateBandwidthRateLimitSchedule,
    });
}
catch (ApiException<UpdateBandwidthRateLimitScheduleError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBandwidthRateLimitScheduleRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateBandwidthRateLimitScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateBandwidthRateLimitScheduleError](src/AwsStorageGateway/Errors/UpdateBandwidthRateLimitScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateChapCredentials(UpdateChapCredentialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it. This operation is supported in the volume and tape gateway types. When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateChapCredentials(new UpdateChapCredentialsRequest
    {
        XAmzTarget = XAmzTarget52.StorageGateway20130630UpdateChapCredentials,
    });
}
catch (ApiException<UpdateChapCredentialsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateChapCredentialsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateChapCredentialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateChapCredentialsError](src/AwsStorageGateway/Errors/UpdateChapCredentialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateFileSystemAssociation(UpdateFileSystemAssociationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a file system association. This operation is only supported in the FSx File Gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateFileSystemAssociation(new UpdateFileSystemAssociationRequest
    {
        XAmzTarget = XAmzTarget69.StorageGateway20130630UpdateFileSystemAssociation,
    });
}
catch (ApiException<UpdateFileSystemAssociationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateFileSystemAssociationRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateFileSystemAssociationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateFileSystemAssociationError](src/AwsStorageGateway/Errors/UpdateFileSystemAssociationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateGatewayInformation(UpdateGatewayInformationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a gateway's metadata, which includes the gateway's name, time zone, and metadata cache size. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request. For gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateGatewayInformation(new UpdateGatewayInformationRequest
    {
        XAmzTarget = XAmzTarget70.StorageGateway20130630UpdateGatewayInformation,
    });
}
catch (ApiException<UpdateGatewayInformationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateGatewayInformationRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateGatewayInformationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateGatewayInformationError](src/AwsStorageGateway/Errors/UpdateGatewayInformationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateGatewaySoftwareNow(UpdateGatewaySoftwareNowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state. A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux iSCSI settings, respectively.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateGatewaySoftwareNow(new UpdateGatewaySoftwareNowRequest
    {
        XAmzTarget = XAmzTarget81.StorageGateway20130630UpdateGatewaySoftwareNow,
    });
}
catch (ApiException<UpdateGatewaySoftwareNowError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateGatewaySoftwareNowRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateGatewaySoftwareNowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateGatewaySoftwareNowError](src/AwsStorageGateway/Errors/UpdateGatewaySoftwareNowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateMaintenanceStartTime(UpdateMaintenanceStartTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a gateway's maintenance window schedule, with settings for monthly or weekly cadence, specific day and time to begin maintenance, and which types of updates to apply. Time configuration uses the gateway's time zone. You can pass values for a complete maintenance schedule, or update policy, or both. Previous values will persist for whichever setting you choose not to modify. If an incomplete or invalid maintenance schedule is passed, the entire request will be rejected with an error and no changes will occur. A complete maintenance schedule must include values for both MinuteOfHour and HourOfDay, and either DayOfMonth or DayOfWeek. We recommend keeping maintenance updates turned on, except in specific use cases where the brief disruptions caused by updating the gateway could critically impact your deployment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateMaintenanceStartTime(new UpdateMaintenanceStartTimeRequest
    {
        XAmzTarget = XAmzTarget72.StorageGateway20130630UpdateMaintenanceStartTime,
    });
}
catch (ApiException<UpdateMaintenanceStartTimeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateMaintenanceStartTimeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateMaintenanceStartTimeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateMaintenanceStartTimeError](src/AwsStorageGateway/Errors/UpdateMaintenanceStartTimeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateNfsFileShare(UpdateNfsFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways. To leave a file share field unchanged, set the corresponding input field to null. Updates the following file share settings: Default storage class for your S3 bucket Metadata defaults for your S3 bucket Allowed NFS clients for your file share Squash settings Write status of your file share

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateNfsFileShare(new UpdateNfsFileShareRequest
    {
        XAmzTarget = XAmzTarget28.StorageGateway20130630UpdateNfsFileShare,
    });
}
catch (ApiException<UpdateNfsFileShareError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateNfsFileShareRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateNfsFileShareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateNfsFileShareError](src/AwsStorageGateway/Errors/UpdateNfsFileShareError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateSmbFileShare(UpdateSmbFileShareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a Server Message Block (SMB) file share. This operation is only supported for S3 File Gateways. To leave a file share field unchanged, set the corresponding input field to null. File gateways require Security Token Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure that Amazon Web Services STS is activated in the Amazon Web Services Region you are creating your file gateway in. If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate it. For information about how to activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web Services Region in the Identity and Access Management User Guide. File gateways don't support creating hard or symbolic links on a file share.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateSmbFileShare(new UpdateSmbFileShareRequest
    {
        XAmzTarget = XAmzTarget31.StorageGateway20130630UpdateSmbFileShare,
    });
}
catch (ApiException<UpdateSmbFileShareError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSmbFileShareRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSmbFileShareRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateSmbFileShareError](src/AwsStorageGateway/Errors/UpdateSmbFileShareError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateSmbFileShareVisibility(UpdateSmbFileShareVisibilityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Controls whether the shares on an S3 File Gateway are visible in a net view or browse list. The operation is only supported for S3 File Gateways.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateSmbFileShareVisibility(new UpdateSmbFileShareVisibilityRequest
    {
        XAmzTarget = XAmzTarget82.StorageGateway20130630UpdateSmbFileShareVisibility,
    });
}
catch (ApiException<UpdateSmbFileShareVisibilityError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSmbFileShareVisibilityRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSmbFileShareVisibilityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateSmbFileShareVisibilityError](src/AwsStorageGateway/Errors/UpdateSmbFileShareVisibilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateSmbLocalGroups(UpdateSmbLocalGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateSmbLocalGroups(new UpdateSmbLocalGroupsRequest
    {
        XAmzTarget = XAmzTarget83.StorageGateway20130630UpdateSmbLocalGroups,
    });
}
catch (ApiException<UpdateSmbLocalGroupsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSmbLocalGroupsRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSmbLocalGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateSmbLocalGroupsError](src/AwsStorageGateway/Errors/UpdateSmbLocalGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateSmbSecurityStrategy(UpdateSmbSecurityStrategyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console, see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security strategy level can affect performance of the gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateSmbSecurityStrategy(new UpdateSmbSecurityStrategyRequest
    {
        XAmzTarget = XAmzTarget84.StorageGateway20130630UpdateSmbSecurityStrategy,
    });
}
catch (ApiException<UpdateSmbSecurityStrategyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSmbSecurityStrategyRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSmbSecurityStrategyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateSmbSecurityStrategyError](src/AwsStorageGateway/Errors/UpdateSmbSecurityStrategyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateSnapshotSchedule(UpdateSnapshotScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types. The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume. In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateSnapshotSchedule(new UpdateSnapshotScheduleRequest
    {
        XAmzTarget = XAmzTarget60.StorageGateway20130630UpdateSnapshotSchedule,
    });
}
catch (ApiException<UpdateSnapshotScheduleError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateSnapshotScheduleRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateSnapshotScheduleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateSnapshotScheduleError](src/AwsStorageGateway/Errors/UpdateSnapshotScheduleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateVtlDeviceType(UpdateVtlDeviceTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AwsStorageGatewayApi.UpdateVtlDeviceType(new UpdateVtlDeviceTypeRequest
    {
        XAmzTarget = XAmzTarget85.StorageGateway20130630UpdateVtlDeviceType,
    });
}
catch (ApiException<UpdateVtlDeviceTypeError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateVtlDeviceTypeRequest](src/AwsStorageGateway/Requests/AwsStorageGatewayApi/UpdateVtlDeviceTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[UpdateVtlDeviceTypeError](src/AwsStorageGateway/Errors/UpdateVtlDeviceTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CacheReport

> Source: [CacheReport](src/AwsStorageGateway/Api/CacheReport.cs)

<details>
<summary><code>Task CancelCacheReport(CancelCacheReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels generation of a specified cache report. You can use this operation to manually cancel an IN-PROGRESS report for any reason. This action changes the report status from IN-PROGRESS to CANCELLED. You can only cancel in-progress reports. If the the report you attempt to cancel is in FAILED, ERROR, or COMPLETED state, the cancel operation returns an error.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CacheReport.CancelCacheReport(new CancelCacheReportRequest
    {
        XAmzTarget = XAmzTargetAwsStorageGatewayCacheReportApi.StorageGateway20130630CancelCacheReport,
    });
}
catch (ApiException<CancelCacheReportError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelCacheReportRequest](src/AwsStorageGateway/Requests/CacheReport/CancelCacheReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[CancelCacheReportError](src/AwsStorageGateway/Errors/CancelCacheReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCacheReport(DeleteCacheReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified cache report and any associated tags from the Storage Gateway database. You can only delete completed reports. If the status of the report you attempt to delete still IN-PROGRESS, the delete operation returns an error. You can use CancelCacheReport to cancel an IN-PROGRESS report. DeleteCacheReport does not delete the report object from your Amazon S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CacheReport.DeleteCacheReport(new DeleteCacheReportRequest
    {
        XAmzTarget = XAmzTarget1AwsStorageGatewayCacheReportApi.StorageGateway20130630DeleteCacheReport,
    });
}
catch (ApiException<DeleteCacheReportError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCacheReportRequest](src/AwsStorageGateway/Requests/CacheReport/DeleteCacheReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DeleteCacheReportError](src/AwsStorageGateway/Errors/DeleteCacheReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeCacheReport(DescribeCacheReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the specified cache report, including completion status and generation progress.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CacheReport.DescribeCacheReport(new DescribeCacheReportRequest
    {
        XAmzTarget = XAmzTarget2AwsStorageGatewayCacheReportApi.StorageGateway20130630DescribeCacheReport,
    });
}
catch (ApiException<DescribeCacheReportError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeCacheReportRequest](src/AwsStorageGateway/Requests/CacheReport/DescribeCacheReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[DescribeCacheReportError](src/AwsStorageGateway/Errors/DescribeCacheReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListCacheReports(ListCacheReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of existing cache reports for all file shares associated with your Amazon Web Services account. This list includes all information provided by the DescribeCacheReport action, such as report name, status, completion progress, start time, end time, filters, and tags.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CacheReport.ListCacheReports(new ListCacheReportsRequest
    {
        XAmzTarget = XAmzTarget3AwsStorageGatewayCacheReportApi.StorageGateway20130630ListCacheReports,
    });
}
catch (ApiException<ListCacheReportsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCacheReportsRequest](src/AwsStorageGateway/Requests/CacheReport/ListCacheReportsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ListCacheReportsError](src/AwsStorageGateway/Errors/ListCacheReportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartCacheReport(StartCacheReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts generating a report of the file metadata currently cached by an S3 File Gateway for a specific file share. You can use this report to identify and resolve issues if you have files failing upload from your gateway to Amazon S3. The report is a CSV file containing a list of files which match the set of filter parameters you specify in the request. The Files Failing Upload flag is reset every 24 hours and during gateway reboot. If this report captures the files after the reset, but before they become flagged again, they will not be reported as Files Failing Upload. The following requirements must be met to successfully generate a cache report: You must have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket where you want to store the cache report. No other cache reports can currently be in-progress for the specified file share. There must be fewer than 10 existing cache reports for the specified file share. The gateway must be online and connected to Amazon Web Services. The root disk must have at least 20GB of free space when report generation starts. You must specify at least one value for InclusionFilters or ExclusionFilters in the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CacheReport.StartCacheReport(new StartCacheReportRequest
    {
        XAmzTarget = XAmzTarget4AwsStorageGatewayCacheReportApi.StorageGateway20130630StartCacheReport,
    });
}
catch (ApiException<StartCacheReportError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartCacheReportRequest](src/AwsStorageGateway/Requests/CacheReport/StartCacheReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[StartCacheReportError](src/AwsStorageGateway/Errors/StartCacheReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AwsStorageGateway/Api/Operations.cs)

<details>
<summary><code>Task ActivateGateway3(ActivateGateway3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.ActivateGateway3(new ActivateGateway3Request
    {
        XAmzTarget = XAmzTarget.StorageGateway20130630ActivateGateway,
    });
}
catch (ApiException<ActivateGateway3Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ActivateGateway3Request](src/AwsStorageGateway/Requests/Operations/ActivateGateway3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ActivateGateway3Error](src/AwsStorageGateway/Errors/ActivateGateway3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task AssignTapePool2(AssignTapePool2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.AssignTapePool2(new AssignTapePool2Request
    {
        XAmzTarget = XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.StorageGateway20130630AssignTapePool,
    });
}
catch (ApiException<AssignTapePool2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AssignTapePool2Request](src/AwsStorageGateway/Requests/Operations/AssignTapePool2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[AssignTapePool2Error](src/AwsStorageGateway/Errors/AssignTapePool2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task EvictFilesFailingUpload(EvictFilesFailingUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a process that cleans the specified file share's cache of file entries that are failing upload to Amazon S3. This API operation reports success if the request is received with valid arguments, and there are no other cache clean operations currently in-progress for the specified file share. After a successful request, the cache clean operation occurs asynchronously and reports progress using CloudWatch logs and notifications. If ForceRemove is set to True, the cache clean operation will delete file data from the gateway which might otherwise be recoverable. We recommend using this operation only after all other methods to clear files failing upload have been exhausted, and if your business need outweighs the potential data loss.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.EvictFilesFailingUpload(new EvictFilesFailingUploadRequest
    {
        XAmzTarget = XAmzTarget2AwsStorageGatewayOperationsApi.StorageGateway20130630EvictFilesFailingUpload,
    });
}
catch (ApiException<EvictFilesFailingUploadError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EvictFilesFailingUploadRequest](src/AwsStorageGateway/Requests/Operations/EvictFilesFailingUploadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[EvictFilesFailingUploadError](src/AwsStorageGateway/Errors/EvictFilesFailingUploadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task JoinDomain2(JoinDomain2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you will need to create this account ahead of time. To create the gateway's computer account in an organizational unit other than the default, you must specify the organizational unit when joining the domain.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.JoinDomain2(new JoinDomain2Request
    {
        XAmzTarget = XAmzTarget3AwsStorageGatewayOperationsApi.StorageGateway20130630JoinDomain,
    });
}
catch (ApiException<JoinDomain2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[JoinDomain2Request](src/AwsStorageGateway/Requests/Operations/JoinDomain2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[JoinDomain2Error](src/AwsStorageGateway/Errors/JoinDomain2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task NotifyWhenUploaded2(NotifyWhenUploaded2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends you notification through Amazon EventBridge when all files written to your file share have been uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.NotifyWhenUploaded2(new NotifyWhenUploaded2Request
    {
        XAmzTarget = XAmzTarget4AwsStorageGatewayOperationsApi.StorageGateway20130630NotifyWhenUploaded,
    });
}
catch (ApiException<NotifyWhenUploaded2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NotifyWhenUploaded2Request](src/AwsStorageGateway/Requests/Operations/NotifyWhenUploaded2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[NotifyWhenUploaded2Error](src/AwsStorageGateway/Errors/NotifyWhenUploaded2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RefreshCache2(RefreshCache2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when your RefreshCache operation completes. For more information, see Getting notified about file operations in the Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is called, it only initiates the refresh operation. When the API call completes and returns a success code, it doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification to determine that the operation has completed before you check for new files on the gateway file share. You can subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RefreshCache2(new RefreshCache2Request
    {
        XAmzTarget = XAmzTarget5AwsStorageGatewayOperationsApi.StorageGateway20130630RefreshCache,
    });
}
catch (ApiException<RefreshCache2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RefreshCache2Request](src/AwsStorageGateway/Requests/Operations/RefreshCache2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[RefreshCache2Error](src/AwsStorageGateway/Errors/RefreshCache2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RetrieveTapeArchive2(RetrieveTapeArchive2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RetrieveTapeArchive2(new RetrieveTapeArchive2Request
    {
        XAmzTarget = XAmzTarget6AwsStorageGatewayOperationsApi.StorageGateway20130630RetrieveTapeArchive,
    });
}
catch (ApiException<RetrieveTapeArchive2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveTapeArchive2Request](src/AwsStorageGateway/Requests/Operations/RetrieveTapeArchive2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[RetrieveTapeArchive2Error](src/AwsStorageGateway/Errors/RetrieveTapeArchive2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RetrieveTapeRecoveryPoint2(RetrieveTapeRecoveryPoint2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.RetrieveTapeRecoveryPoint2(new RetrieveTapeRecoveryPoint2Request
    {
        XAmzTarget = XAmzTarget7AwsStorageGatewayOperationsApi.StorageGateway20130630RetrieveTapeRecoveryPoint,
    });
}
catch (ApiException<RetrieveTapeRecoveryPoint2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveTapeRecoveryPoint2Request](src/AwsStorageGateway/Requests/Operations/RetrieveTapeRecoveryPoint2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[RetrieveTapeRecoveryPoint2Error](src/AwsStorageGateway/Errors/RetrieveTapeRecoveryPoint2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ShutdownGateway2(ShutdownGateway2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.ShutdownGateway2(new ShutdownGateway2Request
    {
        XAmzTarget = XAmzTarget8AwsStorageGatewayOperationsApi.StorageGateway20130630ShutdownGateway,
    });
}
catch (ApiException<ShutdownGateway2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ShutdownGateway2Request](src/AwsStorageGateway/Requests/Operations/ShutdownGateway2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AwsStorageGateway/Core/Exceptions/ApiException.cs)&lt;[ShutdownGateway2Error](src/AwsStorageGateway/Errors/ShutdownGateway2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

