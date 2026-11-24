# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AwsStorageGatewayClient](aws_storage_gateway/client.py)

## AmazonStorageGatewayRestApi

> Source: [AmazonStorageGatewayRestApi](aws_storage_gateway/apis/amazon_storage_gateway_rest_api.py)

<details>
<summary><code>def activate_gateway(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.amazon_storage_gateway_rest_api.activate_gateway(XAmzTarget.STORAGE_GATEWAY_20130630_ACTIVATE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateGatewayErrorBody
```

**Async**

```python
try:
    await async_client.amazon_storage_gateway_rest_api.activate_gateway(
        XAmzTarget.STORAGE_GATEWAY_20130630_ACTIVATE_GATEWAY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](aws_storage_gateway/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ActivateGatewayErrorBody](aws_storage_gateway/errors/activate_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_nfs_file_share(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.amazon_storage_gateway_rest_api.create_nfs_file_share(
        XAmzTarget2.STORAGE_GATEWAY_20130630_CREATE_NFS_FILE_SHARE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateNfsFileShareErrorBody
```

**Async**

```python
try:
    await async_client.amazon_storage_gateway_rest_api.create_nfs_file_share(
        XAmzTarget2.STORAGE_GATEWAY_20130630_CREATE_NFS_FILE_SHARE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateNfsFileShareErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](aws_storage_gateway/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateNfsFileShareErrorBody](aws_storage_gateway/errors/create_nfs_file_share_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_gateway_information(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.amazon_storage_gateway_rest_api.describe_gateway_information(
        XAmzTarget4.STORAGE_GATEWAY_20130630_DESCRIBE_GATEWAY_INFORMATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeGatewayInformationErrorBody
```

**Async**

```python
try:
    await async_client.amazon_storage_gateway_rest_api.describe_gateway_information(
        XAmzTarget4.STORAGE_GATEWAY_20130630_DESCRIBE_GATEWAY_INFORMATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeGatewayInformationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](aws_storage_gateway/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeGatewayInformationErrorBody](aws_storage_gateway/errors/describe_gateway_information_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_gateways(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.amazon_storage_gateway_rest_api.list_gateways(XAmzTarget3.STORAGE_GATEWAY_20130630_LIST_GATEWAYS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGatewaysErrorBody
```

**Async**

```python
try:
    await async_client.amazon_storage_gateway_rest_api.list_gateways(XAmzTarget3.STORAGE_GATEWAY_20130630_LIST_GATEWAYS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGatewaysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](aws_storage_gateway/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListGatewaysErrorBody](aws_storage_gateway/errors/list_gateways_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_volumes(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.amazon_storage_gateway_rest_api.list_volumes(XAmzTarget1.STORAGE_GATEWAY_20130630_LIST_VOLUMES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVolumesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_storage_gateway_rest_api.list_volumes(XAmzTarget1.STORAGE_GATEWAY_20130630_LIST_VOLUMES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVolumesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](aws_storage_gateway/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListVolumesErrorBody](aws_storage_gateway/errors/list_volumes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsStorageGateway

> Source: [AwsStorageGateway](aws_storage_gateway/apis/aws_storage_gateway.py)

<details>
<summary><code>def activate_gateway2(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.activate_gateway2(XAmzTarget.STORAGE_GATEWAY_20130630_ACTIVATE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateGateway2ErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.activate_gateway2(XAmzTarget.STORAGE_GATEWAY_20130630_ACTIVATE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateGateway2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](aws_storage_gateway/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ActivateGateway2ErrorBody](aws_storage_gateway/errors/activate_gateway2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def add_cache(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.add_cache(XAmzTarget8.STORAGE_GATEWAY_20130630_ADD_CACHE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddCacheErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.add_cache(XAmzTarget8.STORAGE_GATEWAY_20130630_ADD_CACHE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](aws_storage_gateway/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[AddCacheErrorBody](aws_storage_gateway/errors/add_cache_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def add_tags_to_resource(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.add_tags_to_resource(XAmzTarget11.STORAGE_GATEWAY_20130630_ADD_TAGS_TO_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddTagsToResourceErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.add_tags_to_resource(
        XAmzTarget11.STORAGE_GATEWAY_20130630_ADD_TAGS_TO_RESOURCE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddTagsToResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11OrStr](aws_storage_gateway/models/enums/x_amz_target11.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[AddTagsToResourceErrorBody](aws_storage_gateway/errors/add_tags_to_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def add_upload_buffer(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.add_upload_buffer(XAmzTarget14.STORAGE_GATEWAY_20130630_ADD_UPLOAD_BUFFER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddUploadBufferErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.add_upload_buffer(XAmzTarget14.STORAGE_GATEWAY_20130630_ADD_UPLOAD_BUFFER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddUploadBufferErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14OrStr](aws_storage_gateway/models/enums/x_amz_target14.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[AddUploadBufferErrorBody](aws_storage_gateway/errors/add_upload_buffer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def add_working_storage(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.add_working_storage(XAmzTarget16.STORAGE_GATEWAY_20130630_ADD_WORKING_STORAGE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddWorkingStorageErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.add_working_storage(
        XAmzTarget16.STORAGE_GATEWAY_20130630_ADD_WORKING_STORAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddWorkingStorageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget16OrStr](aws_storage_gateway/models/enums/x_amz_target16.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[AddWorkingStorageErrorBody](aws_storage_gateway/errors/add_working_storage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def assign_tape_pool(x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.assign_tape_pool(
        XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_ASSIGN_TAPE_POOL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignTapePoolErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.assign_tape_pool(
        XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_ASSIGN_TAPE_POOL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignTapePoolErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr](aws_storage_gateway/models/enums/x_amz_target1_aws_storage_gateway_aws_storage_gateway_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[AssignTapePoolErrorBody](aws_storage_gateway/errors/assign_tape_pool_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def associate_file_system(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.associate_file_system(XAmzTarget18.STORAGE_GATEWAY_20130630_ASSOCIATE_FILE_SYSTEM)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateFileSystemErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.associate_file_system(
        XAmzTarget18.STORAGE_GATEWAY_20130630_ASSOCIATE_FILE_SYSTEM
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateFileSystemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget18OrStr](aws_storage_gateway/models/enums/x_amz_target18.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[AssociateFileSystemErrorBody](aws_storage_gateway/errors/associate_file_system_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def attach_volume(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.attach_volume(XAmzTarget20.STORAGE_GATEWAY_20130630_ATTACH_VOLUME)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AttachVolumeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.attach_volume(XAmzTarget20.STORAGE_GATEWAY_20130630_ATTACH_VOLUME)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AttachVolumeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget20OrStr](aws_storage_gateway/models/enums/x_amz_target20.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[AttachVolumeErrorBody](aws_storage_gateway/errors/attach_volume_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_archival(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.cancel_archival(XAmzTarget23.STORAGE_GATEWAY_20130630_CANCEL_ARCHIVAL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelArchivalErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.cancel_archival(XAmzTarget23.STORAGE_GATEWAY_20130630_CANCEL_ARCHIVAL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelArchivalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget23OrStr](aws_storage_gateway/models/enums/x_amz_target23.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CancelArchivalErrorBody](aws_storage_gateway/errors/cancel_archival_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_retrieval(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.cancel_retrieval(XAmzTarget24.STORAGE_GATEWAY_20130630_CANCEL_RETRIEVAL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelRetrievalErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.cancel_retrieval(XAmzTarget24.STORAGE_GATEWAY_20130630_CANCEL_RETRIEVAL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelRetrievalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget24OrStr](aws_storage_gateway/models/enums/x_amz_target24.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CancelRetrievalErrorBody](aws_storage_gateway/errors/cancel_retrieval_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_cachedi_scsi_volume(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_cachedi_scsi_volume(
        XAmzTarget25.STORAGE_GATEWAY_20130630_CREATE_CACHEDI_SCSI_VOLUME
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCachediScsiVolumeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_cachedi_scsi_volume(
        XAmzTarget25.STORAGE_GATEWAY_20130630_CREATE_CACHEDI_SCSI_VOLUME
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCachediScsiVolumeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget25OrStr](aws_storage_gateway/models/enums/x_amz_target25.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateCachediScsiVolumeErrorBody](aws_storage_gateway/errors/create_cachedi_scsi_volume_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_nfs_file_share2(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_nfs_file_share2(XAmzTarget2.STORAGE_GATEWAY_20130630_CREATE_NFS_FILE_SHARE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateNfsFileShare2ErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_nfs_file_share2(
        XAmzTarget2.STORAGE_GATEWAY_20130630_CREATE_NFS_FILE_SHARE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateNfsFileShare2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](aws_storage_gateway/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateNfsFileShare2ErrorBody](aws_storage_gateway/errors/create_nfs_file_share2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_smb_file_share(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_smb_file_share(XAmzTarget29.STORAGE_GATEWAY_20130630_CREATE_SMB_FILE_SHARE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSmbFileShareErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_smb_file_share(
        XAmzTarget29.STORAGE_GATEWAY_20130630_CREATE_SMB_FILE_SHARE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSmbFileShareErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget29OrStr](aws_storage_gateway/models/enums/x_amz_target29.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateSmbFileShareErrorBody](aws_storage_gateway/errors/create_smb_file_share_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_snapshot(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_snapshot(XAmzTarget32.STORAGE_GATEWAY_20130630_CREATE_SNAPSHOT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSnapshotErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_snapshot(XAmzTarget32.STORAGE_GATEWAY_20130630_CREATE_SNAPSHOT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSnapshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget32OrStr](aws_storage_gateway/models/enums/x_amz_target32.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateSnapshotErrorBody](aws_storage_gateway/errors/create_snapshot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500, 503 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_snapshot_from_volume_recovery_point(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_snapshot_from_volume_recovery_point(
        XAmzTarget33.STORAGE_GATEWAY_20130630_CREATE_SNAPSHOT_FROM_VOLUME_RECOVERY_POINT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSnapshotFromVolumeRecoveryPointErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_snapshot_from_volume_recovery_point(
        XAmzTarget33.STORAGE_GATEWAY_20130630_CREATE_SNAPSHOT_FROM_VOLUME_RECOVERY_POINT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSnapshotFromVolumeRecoveryPointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget33OrStr](aws_storage_gateway/models/enums/x_amz_target33.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateSnapshotFromVolumeRecoveryPointErrorBody](aws_storage_gateway/errors/create_snapshot_from_volume_recovery_point_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500, 503 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_storedi_scsi_volume(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_storedi_scsi_volume(
        XAmzTarget34.STORAGE_GATEWAY_20130630_CREATE_STOREDI_SCSI_VOLUME
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStorediScsiVolumeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_storedi_scsi_volume(
        XAmzTarget34.STORAGE_GATEWAY_20130630_CREATE_STOREDI_SCSI_VOLUME
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStorediScsiVolumeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget34OrStr](aws_storage_gateway/models/enums/x_amz_target34.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateStorediScsiVolumeErrorBody](aws_storage_gateway/errors/create_storedi_scsi_volume_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_tape_pool(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_tape_pool(XAmzTarget36.STORAGE_GATEWAY_20130630_CREATE_TAPE_POOL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTapePoolErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_tape_pool(XAmzTarget36.STORAGE_GATEWAY_20130630_CREATE_TAPE_POOL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTapePoolErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget36OrStr](aws_storage_gateway/models/enums/x_amz_target36.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateTapePoolErrorBody](aws_storage_gateway/errors/create_tape_pool_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_tape_with_barcode(x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_tape_with_barcode(XAmzTarget40.STORAGE_GATEWAY_20130630_CREATE_TAPE_WITH_BARCODE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTapeWithBarcodeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_tape_with_barcode(
        XAmzTarget40.STORAGE_GATEWAY_20130630_CREATE_TAPE_WITH_BARCODE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTapeWithBarcodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget40OrStr](aws_storage_gateway/models/enums/x_amz_target40.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateTapeWithBarcodeErrorBody](aws_storage_gateway/errors/create_tape_with_barcode_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_tapes(x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.create_tapes(XAmzTarget39.STORAGE_GATEWAY_20130630_CREATE_TAPES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTapesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.create_tapes(XAmzTarget39.STORAGE_GATEWAY_20130630_CREATE_TAPES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTapesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget39OrStr](aws_storage_gateway/models/enums/x_amz_target39.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CreateTapesErrorBody](aws_storage_gateway/errors/create_tapes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_automatic_tape_creation_policy(x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_automatic_tape_creation_policy(
        XAmzTarget44.STORAGE_GATEWAY_20130630_DELETE_AUTOMATIC_TAPE_CREATION_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAutomaticTapeCreationPolicyErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_automatic_tape_creation_policy(
        XAmzTarget44.STORAGE_GATEWAY_20130630_DELETE_AUTOMATIC_TAPE_CREATION_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAutomaticTapeCreationPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget44OrStr](aws_storage_gateway/models/enums/x_amz_target44.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteAutomaticTapeCreationPolicyErrorBody](aws_storage_gateway/errors/delete_automatic_tape_creation_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_bandwidth_rate_limit(x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_bandwidth_rate_limit(
        XAmzTarget47.STORAGE_GATEWAY_20130630_DELETE_BANDWIDTH_RATE_LIMIT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBandwidthRateLimitErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_bandwidth_rate_limit(
        XAmzTarget47.STORAGE_GATEWAY_20130630_DELETE_BANDWIDTH_RATE_LIMIT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBandwidthRateLimitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget47OrStr](aws_storage_gateway/models/enums/x_amz_target47.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteBandwidthRateLimitErrorBody](aws_storage_gateway/errors/delete_bandwidth_rate_limit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_chap_credentials(x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_chap_credentials(XAmzTarget50.STORAGE_GATEWAY_20130630_DELETE_CHAP_CREDENTIALS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteChapCredentialsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_chap_credentials(
        XAmzTarget50.STORAGE_GATEWAY_20130630_DELETE_CHAP_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteChapCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget50OrStr](aws_storage_gateway/models/enums/x_amz_target50.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteChapCredentialsErrorBody](aws_storage_gateway/errors/delete_chap_credentials_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_file_share(x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_file_share(XAmzTarget53.STORAGE_GATEWAY_20130630_DELETE_FILE_SHARE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFileShareErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_file_share(XAmzTarget53.STORAGE_GATEWAY_20130630_DELETE_FILE_SHARE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFileShareErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget53OrStr](aws_storage_gateway/models/enums/x_amz_target53.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteFileShareErrorBody](aws_storage_gateway/errors/delete_file_share_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_gateway(x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_gateway(XAmzTarget55.STORAGE_GATEWAY_20130630_DELETE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteGatewayErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_gateway(XAmzTarget55.STORAGE_GATEWAY_20130630_DELETE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget55OrStr](aws_storage_gateway/models/enums/x_amz_target55.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteGatewayErrorBody](aws_storage_gateway/errors/delete_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_snapshot_schedule(x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_snapshot_schedule(XAmzTarget58.STORAGE_GATEWAY_20130630_DELETE_SNAPSHOT_SCHEDULE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnapshotScheduleErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_snapshot_schedule(
        XAmzTarget58.STORAGE_GATEWAY_20130630_DELETE_SNAPSHOT_SCHEDULE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSnapshotScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget58OrStr](aws_storage_gateway/models/enums/x_amz_target58.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteSnapshotScheduleErrorBody](aws_storage_gateway/errors/delete_snapshot_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_tape(x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_tape(XAmzTarget41.STORAGE_GATEWAY_20130630_DELETE_TAPE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTapeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_tape(XAmzTarget41.STORAGE_GATEWAY_20130630_DELETE_TAPE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTapeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget41OrStr](aws_storage_gateway/models/enums/x_amz_target41.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteTapeErrorBody](aws_storage_gateway/errors/delete_tape_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_tape_archive(x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_tape_archive(XAmzTarget61.STORAGE_GATEWAY_20130630_DELETE_TAPE_ARCHIVE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTapeArchiveErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_tape_archive(
        XAmzTarget61.STORAGE_GATEWAY_20130630_DELETE_TAPE_ARCHIVE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTapeArchiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget61OrStr](aws_storage_gateway/models/enums/x_amz_target61.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteTapeArchiveErrorBody](aws_storage_gateway/errors/delete_tape_archive_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_tape_pool(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_tape_pool(XAmzTarget37.STORAGE_GATEWAY_20130630_DELETE_TAPE_POOL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTapePoolErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_tape_pool(XAmzTarget37.STORAGE_GATEWAY_20130630_DELETE_TAPE_POOL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTapePoolErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget37OrStr](aws_storage_gateway/models/enums/x_amz_target37.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteTapePoolErrorBody](aws_storage_gateway/errors/delete_tape_pool_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_volume(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.delete_volume(XAmzTarget21.STORAGE_GATEWAY_20130630_DELETE_VOLUME)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVolumeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.delete_volume(XAmzTarget21.STORAGE_GATEWAY_20130630_DELETE_VOLUME)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVolumeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget21OrStr](aws_storage_gateway/models/enums/x_amz_target21.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteVolumeErrorBody](aws_storage_gateway/errors/delete_volume_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_availability_monitor_test(x_amz_target: XAmzTarget63OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_availability_monitor_test(
        XAmzTarget63.STORAGE_GATEWAY_20130630_DESCRIBE_AVAILABILITY_MONITOR_TEST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAvailabilityMonitorTestErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_availability_monitor_test(
        XAmzTarget63.STORAGE_GATEWAY_20130630_DESCRIBE_AVAILABILITY_MONITOR_TEST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAvailabilityMonitorTestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget63OrStr](aws_storage_gateway/models/enums/x_amz_target63.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeAvailabilityMonitorTestErrorBody](aws_storage_gateway/errors/describe_availability_monitor_test_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bandwidth_rate_limit(x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_bandwidth_rate_limit(
        XAmzTarget48.STORAGE_GATEWAY_20130630_DESCRIBE_BANDWIDTH_RATE_LIMIT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBandwidthRateLimitErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_bandwidth_rate_limit(
        XAmzTarget48.STORAGE_GATEWAY_20130630_DESCRIBE_BANDWIDTH_RATE_LIMIT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBandwidthRateLimitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget48OrStr](aws_storage_gateway/models/enums/x_amz_target48.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeBandwidthRateLimitErrorBody](aws_storage_gateway/errors/describe_bandwidth_rate_limit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_bandwidth_rate_limit_schedule(x_amz_target: XAmzTarget65OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_bandwidth_rate_limit_schedule(
        XAmzTarget65.STORAGE_GATEWAY_20130630_DESCRIBE_BANDWIDTH_RATE_LIMIT_SCHEDULE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBandwidthRateLimitScheduleErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_bandwidth_rate_limit_schedule(
        XAmzTarget65.STORAGE_GATEWAY_20130630_DESCRIBE_BANDWIDTH_RATE_LIMIT_SCHEDULE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeBandwidthRateLimitScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget65OrStr](aws_storage_gateway/models/enums/x_amz_target65.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeBandwidthRateLimitScheduleErrorBody](aws_storage_gateway/errors/describe_bandwidth_rate_limit_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_cache(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_cache(XAmzTarget9.STORAGE_GATEWAY_20130630_DESCRIBE_CACHE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCacheErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_cache(XAmzTarget9.STORAGE_GATEWAY_20130630_DESCRIBE_CACHE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](aws_storage_gateway/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeCacheErrorBody](aws_storage_gateway/errors/describe_cache_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_cachedi_scsi_volumes(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_cachedi_scsi_volumes(
        XAmzTarget26.STORAGE_GATEWAY_20130630_DESCRIBE_CACHEDI_SCSI_VOLUMES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCachediScsiVolumesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_cachedi_scsi_volumes(
        XAmzTarget26.STORAGE_GATEWAY_20130630_DESCRIBE_CACHEDI_SCSI_VOLUMES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCachediScsiVolumesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget26OrStr](aws_storage_gateway/models/enums/x_amz_target26.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeCachediScsiVolumesErrorBody](aws_storage_gateway/errors/describe_cachedi_scsi_volumes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_chap_credentials(x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_chap_credentials(
        XAmzTarget51.STORAGE_GATEWAY_20130630_DESCRIBE_CHAP_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeChapCredentialsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_chap_credentials(
        XAmzTarget51.STORAGE_GATEWAY_20130630_DESCRIBE_CHAP_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeChapCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget51OrStr](aws_storage_gateway/models/enums/x_amz_target51.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeChapCredentialsErrorBody](aws_storage_gateway/errors/describe_chap_credentials_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_file_system_associations(x_amz_target: XAmzTarget67OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_file_system_associations(
        XAmzTarget67.STORAGE_GATEWAY_20130630_DESCRIBE_FILE_SYSTEM_ASSOCIATIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeFileSystemAssociationsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_file_system_associations(
        XAmzTarget67.STORAGE_GATEWAY_20130630_DESCRIBE_FILE_SYSTEM_ASSOCIATIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeFileSystemAssociationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget67OrStr](aws_storage_gateway/models/enums/x_amz_target67.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeFileSystemAssociationsErrorBody](aws_storage_gateway/errors/describe_file_system_associations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_gateway_information2(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_gateway_information2(
        XAmzTarget4.STORAGE_GATEWAY_20130630_DESCRIBE_GATEWAY_INFORMATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeGatewayInformation2ErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_gateway_information2(
        XAmzTarget4.STORAGE_GATEWAY_20130630_DESCRIBE_GATEWAY_INFORMATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeGatewayInformation2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](aws_storage_gateway/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeGatewayInformation2ErrorBody](aws_storage_gateway/errors/describe_gateway_information2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_maintenance_start_time(x_amz_target: XAmzTarget71OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_maintenance_start_time(
        XAmzTarget71.STORAGE_GATEWAY_20130630_DESCRIBE_MAINTENANCE_START_TIME
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeMaintenanceStartTimeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_maintenance_start_time(
        XAmzTarget71.STORAGE_GATEWAY_20130630_DESCRIBE_MAINTENANCE_START_TIME
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeMaintenanceStartTimeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget71OrStr](aws_storage_gateway/models/enums/x_amz_target71.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeMaintenanceStartTimeErrorBody](aws_storage_gateway/errors/describe_maintenance_start_time_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_nfs_file_shares(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_nfs_file_shares(XAmzTarget27.STORAGE_GATEWAY_20130630_DESCRIBE_NFS_FILE_SHARES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeNfsFileSharesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_nfs_file_shares(
        XAmzTarget27.STORAGE_GATEWAY_20130630_DESCRIBE_NFS_FILE_SHARES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeNfsFileSharesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget27OrStr](aws_storage_gateway/models/enums/x_amz_target27.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeNfsFileSharesErrorBody](aws_storage_gateway/errors/describe_nfs_file_shares_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_smb_file_shares(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_smb_file_shares(XAmzTarget30.STORAGE_GATEWAY_20130630_DESCRIBE_SMB_FILE_SHARES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSmbFileSharesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_smb_file_shares(
        XAmzTarget30.STORAGE_GATEWAY_20130630_DESCRIBE_SMB_FILE_SHARES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSmbFileSharesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget30OrStr](aws_storage_gateway/models/enums/x_amz_target30.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeSmbFileSharesErrorBody](aws_storage_gateway/errors/describe_smb_file_shares_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_smb_settings(x_amz_target: XAmzTarget73OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_smb_settings(XAmzTarget73.STORAGE_GATEWAY_20130630_DESCRIBE_SMB_SETTINGS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSmbSettingsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_smb_settings(
        XAmzTarget73.STORAGE_GATEWAY_20130630_DESCRIBE_SMB_SETTINGS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSmbSettingsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget73OrStr](aws_storage_gateway/models/enums/x_amz_target73.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeSmbSettingsErrorBody](aws_storage_gateway/errors/describe_smb_settings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_snapshot_schedule(x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_snapshot_schedule(
        XAmzTarget59.STORAGE_GATEWAY_20130630_DESCRIBE_SNAPSHOT_SCHEDULE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSnapshotScheduleErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_snapshot_schedule(
        XAmzTarget59.STORAGE_GATEWAY_20130630_DESCRIBE_SNAPSHOT_SCHEDULE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSnapshotScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget59OrStr](aws_storage_gateway/models/enums/x_amz_target59.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeSnapshotScheduleErrorBody](aws_storage_gateway/errors/describe_snapshot_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_storedi_scsi_volumes(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_storedi_scsi_volumes(
        XAmzTarget35.STORAGE_GATEWAY_20130630_DESCRIBE_STOREDI_SCSI_VOLUMES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStorediScsiVolumesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_storedi_scsi_volumes(
        XAmzTarget35.STORAGE_GATEWAY_20130630_DESCRIBE_STOREDI_SCSI_VOLUMES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStorediScsiVolumesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget35OrStr](aws_storage_gateway/models/enums/x_amz_target35.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeStorediScsiVolumesErrorBody](aws_storage_gateway/errors/describe_storedi_scsi_volumes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_tape_archives(x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_tape_archives(XAmzTarget62.STORAGE_GATEWAY_20130630_DESCRIBE_TAPE_ARCHIVES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTapeArchivesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_tape_archives(
        XAmzTarget62.STORAGE_GATEWAY_20130630_DESCRIBE_TAPE_ARCHIVES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTapeArchivesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget62OrStr](aws_storage_gateway/models/enums/x_amz_target62.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeTapeArchivesErrorBody](aws_storage_gateway/errors/describe_tape_archives_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_tape_recovery_points(x_amz_target: XAmzTarget74OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_tape_recovery_points(
        XAmzTarget74.STORAGE_GATEWAY_20130630_DESCRIBE_TAPE_RECOVERY_POINTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTapeRecoveryPointsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_tape_recovery_points(
        XAmzTarget74.STORAGE_GATEWAY_20130630_DESCRIBE_TAPE_RECOVERY_POINTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTapeRecoveryPointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget74OrStr](aws_storage_gateway/models/enums/x_amz_target74.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeTapeRecoveryPointsErrorBody](aws_storage_gateway/errors/describe_tape_recovery_points_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_tapes(x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_tapes(XAmzTarget42.STORAGE_GATEWAY_20130630_DESCRIBE_TAPES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTapesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_tapes(XAmzTarget42.STORAGE_GATEWAY_20130630_DESCRIBE_TAPES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTapesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget42OrStr](aws_storage_gateway/models/enums/x_amz_target42.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeTapesErrorBody](aws_storage_gateway/errors/describe_tapes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_upload_buffer(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_upload_buffer(XAmzTarget15.STORAGE_GATEWAY_20130630_DESCRIBE_UPLOAD_BUFFER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeUploadBufferErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_upload_buffer(
        XAmzTarget15.STORAGE_GATEWAY_20130630_DESCRIBE_UPLOAD_BUFFER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeUploadBufferErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget15OrStr](aws_storage_gateway/models/enums/x_amz_target15.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeUploadBufferErrorBody](aws_storage_gateway/errors/describe_upload_buffer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_vtl_devices(x_amz_target: XAmzTarget75OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_vtl_devices(XAmzTarget75.STORAGE_GATEWAY_20130630_DESCRIBE_VTL_DEVICES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeVtlDevicesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_vtl_devices(
        XAmzTarget75.STORAGE_GATEWAY_20130630_DESCRIBE_VTL_DEVICES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeVtlDevicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget75OrStr](aws_storage_gateway/models/enums/x_amz_target75.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeVtlDevicesErrorBody](aws_storage_gateway/errors/describe_vtl_devices_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_working_storage(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.describe_working_storage(XAmzTarget17.STORAGE_GATEWAY_20130630_DESCRIBE_WORKING_STORAGE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeWorkingStorageErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.describe_working_storage(
        XAmzTarget17.STORAGE_GATEWAY_20130630_DESCRIBE_WORKING_STORAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeWorkingStorageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget17OrStr](aws_storage_gateway/models/enums/x_amz_target17.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeWorkingStorageErrorBody](aws_storage_gateway/errors/describe_working_storage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detach_volume(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.detach_volume(XAmzTarget22.STORAGE_GATEWAY_20130630_DETACH_VOLUME)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetachVolumeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.detach_volume(XAmzTarget22.STORAGE_GATEWAY_20130630_DETACH_VOLUME)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetachVolumeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget22OrStr](aws_storage_gateway/models/enums/x_amz_target22.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DetachVolumeErrorBody](aws_storage_gateway/errors/detach_volume_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disable_gateway(x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.disable_gateway(XAmzTarget56.STORAGE_GATEWAY_20130630_DISABLE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisableGatewayErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.disable_gateway(XAmzTarget56.STORAGE_GATEWAY_20130630_DISABLE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisableGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget56OrStr](aws_storage_gateway/models/enums/x_amz_target56.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DisableGatewayErrorBody](aws_storage_gateway/errors/disable_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disassociate_file_system(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.disassociate_file_system(XAmzTarget19.STORAGE_GATEWAY_20130630_DISASSOCIATE_FILE_SYSTEM)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateFileSystemErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.disassociate_file_system(
        XAmzTarget19.STORAGE_GATEWAY_20130630_DISASSOCIATE_FILE_SYSTEM
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateFileSystemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget19OrStr](aws_storage_gateway/models/enums/x_amz_target19.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DisassociateFileSystemErrorBody](aws_storage_gateway/errors/disassociate_file_system_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def join_domain(x_amz_target: XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.join_domain(
        XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_JOIN_DOMAIN
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JoinDomainErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.join_domain(
        XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_JOIN_DOMAIN
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JoinDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr](aws_storage_gateway/models/enums/x_amz_target2_aws_storage_gateway_aws_storage_gateway_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[JoinDomainErrorBody](aws_storage_gateway/errors/join_domain_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_automatic_tape_creation_policies(x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_automatic_tape_creation_policies(
        XAmzTarget45.STORAGE_GATEWAY_20130630_LIST_AUTOMATIC_TAPE_CREATION_POLICIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAutomaticTapeCreationPoliciesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_automatic_tape_creation_policies(
        XAmzTarget45.STORAGE_GATEWAY_20130630_LIST_AUTOMATIC_TAPE_CREATION_POLICIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAutomaticTapeCreationPoliciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget45OrStr](aws_storage_gateway/models/enums/x_amz_target45.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListAutomaticTapeCreationPoliciesErrorBody](aws_storage_gateway/errors/list_automatic_tape_creation_policies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_file_shares(x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_file_shares(XAmzTarget54.STORAGE_GATEWAY_20130630_LIST_FILE_SHARES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFileSharesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_file_shares(XAmzTarget54.STORAGE_GATEWAY_20130630_LIST_FILE_SHARES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFileSharesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget54OrStr](aws_storage_gateway/models/enums/x_amz_target54.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListFileSharesErrorBody](aws_storage_gateway/errors/list_file_shares_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_file_system_associations(x_amz_target: XAmzTarget68OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_file_system_associations(
        XAmzTarget68.STORAGE_GATEWAY_20130630_LIST_FILE_SYSTEM_ASSOCIATIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFileSystemAssociationsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_file_system_associations(
        XAmzTarget68.STORAGE_GATEWAY_20130630_LIST_FILE_SYSTEM_ASSOCIATIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFileSystemAssociationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget68OrStr](aws_storage_gateway/models/enums/x_amz_target68.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListFileSystemAssociationsErrorBody](aws_storage_gateway/errors/list_file_system_associations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_gateways2(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_gateways2(XAmzTarget3.STORAGE_GATEWAY_20130630_LIST_GATEWAYS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGateways2ErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_gateways2(XAmzTarget3.STORAGE_GATEWAY_20130630_LIST_GATEWAYS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGateways2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](aws_storage_gateway/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListGateways2ErrorBody](aws_storage_gateway/errors/list_gateways2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_local_disks(x_amz_target: XAmzTarget76OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_local_disks(XAmzTarget76.STORAGE_GATEWAY_20130630_LIST_LOCAL_DISKS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListLocalDisksErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_local_disks(XAmzTarget76.STORAGE_GATEWAY_20130630_LIST_LOCAL_DISKS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListLocalDisksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget76OrStr](aws_storage_gateway/models/enums/x_amz_target76.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListLocalDisksErrorBody](aws_storage_gateway/errors/list_local_disks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_resource(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_tags_for_resource(XAmzTarget12.STORAGE_GATEWAY_20130630_LIST_TAGS_FOR_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_tags_for_resource(
        XAmzTarget12.STORAGE_GATEWAY_20130630_LIST_TAGS_FOR_RESOURCE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12OrStr](aws_storage_gateway/models/enums/x_amz_target12.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListTagsForResourceErrorBody](aws_storage_gateway/errors/list_tags_for_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tape_pools(x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_tape_pools(XAmzTarget38.STORAGE_GATEWAY_20130630_LIST_TAPE_POOLS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTapePoolsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_tape_pools(XAmzTarget38.STORAGE_GATEWAY_20130630_LIST_TAPE_POOLS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTapePoolsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget38OrStr](aws_storage_gateway/models/enums/x_amz_target38.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListTapePoolsErrorBody](aws_storage_gateway/errors/list_tape_pools_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tapes(x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_tapes(XAmzTarget43.STORAGE_GATEWAY_20130630_LIST_TAPES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTapesErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_tapes(XAmzTarget43.STORAGE_GATEWAY_20130630_LIST_TAPES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTapesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget43OrStr](aws_storage_gateway/models/enums/x_amz_target43.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListTapesErrorBody](aws_storage_gateway/errors/list_tapes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_volume_initiators(x_amz_target: XAmzTarget77OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_volume_initiators(XAmzTarget77.STORAGE_GATEWAY_20130630_LIST_VOLUME_INITIATORS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVolumeInitiatorsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_volume_initiators(
        XAmzTarget77.STORAGE_GATEWAY_20130630_LIST_VOLUME_INITIATORS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVolumeInitiatorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget77OrStr](aws_storage_gateway/models/enums/x_amz_target77.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListVolumeInitiatorsErrorBody](aws_storage_gateway/errors/list_volume_initiators_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_volume_recovery_points(x_amz_target: XAmzTarget78OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_volume_recovery_points(
        XAmzTarget78.STORAGE_GATEWAY_20130630_LIST_VOLUME_RECOVERY_POINTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVolumeRecoveryPointsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_volume_recovery_points(
        XAmzTarget78.STORAGE_GATEWAY_20130630_LIST_VOLUME_RECOVERY_POINTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVolumeRecoveryPointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget78OrStr](aws_storage_gateway/models/enums/x_amz_target78.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListVolumeRecoveryPointsErrorBody](aws_storage_gateway/errors/list_volume_recovery_points_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_volumes2(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.list_volumes2(XAmzTarget1.STORAGE_GATEWAY_20130630_LIST_VOLUMES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVolumes2ErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.list_volumes2(XAmzTarget1.STORAGE_GATEWAY_20130630_LIST_VOLUMES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVolumes2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](aws_storage_gateway/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListVolumes2ErrorBody](aws_storage_gateway/errors/list_volumes2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def notify_when_uploaded(x_amz_target: XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.notify_when_uploaded(
        XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_NOTIFY_WHEN_UPLOADED
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NotifyWhenUploadedErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.notify_when_uploaded(
        XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_NOTIFY_WHEN_UPLOADED
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NotifyWhenUploadedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr](aws_storage_gateway/models/enums/x_amz_target3_aws_storage_gateway_aws_storage_gateway_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[NotifyWhenUploadedErrorBody](aws_storage_gateway/errors/notify_when_uploaded_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_cache(x_amz_target: XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.refresh_cache(
        XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_REFRESH_CACHE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshCacheErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.refresh_cache(
        XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_REFRESH_CACHE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr](aws_storage_gateway/models/enums/x_amz_target4_aws_storage_gateway_aws_storage_gateway_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[RefreshCacheErrorBody](aws_storage_gateway/errors/refresh_cache_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_tags_from_resource(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.remove_tags_from_resource(
        XAmzTarget13.STORAGE_GATEWAY_20130630_REMOVE_TAGS_FROM_RESOURCE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveTagsFromResourceErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.remove_tags_from_resource(
        XAmzTarget13.STORAGE_GATEWAY_20130630_REMOVE_TAGS_FROM_RESOURCE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveTagsFromResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13OrStr](aws_storage_gateway/models/enums/x_amz_target13.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[RemoveTagsFromResourceErrorBody](aws_storage_gateway/errors/remove_tags_from_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reset_cache(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.reset_cache(XAmzTarget10.STORAGE_GATEWAY_20130630_RESET_CACHE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResetCacheErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.reset_cache(XAmzTarget10.STORAGE_GATEWAY_20130630_RESET_CACHE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResetCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget10OrStr](aws_storage_gateway/models/enums/x_amz_target10.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ResetCacheErrorBody](aws_storage_gateway/errors/reset_cache_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_tape_archive(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.retrieve_tape_archive(XAmzTarget5.STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_ARCHIVE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveTapeArchiveErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.retrieve_tape_archive(
        XAmzTarget5.STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_ARCHIVE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveTapeArchiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](aws_storage_gateway/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[RetrieveTapeArchiveErrorBody](aws_storage_gateway/errors/retrieve_tape_archive_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_tape_recovery_point(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.retrieve_tape_recovery_point(
        XAmzTarget6.STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_RECOVERY_POINT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveTapeRecoveryPointErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.retrieve_tape_recovery_point(
        XAmzTarget6.STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_RECOVERY_POINT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveTapeRecoveryPointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](aws_storage_gateway/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[RetrieveTapeRecoveryPointErrorBody](aws_storage_gateway/errors/retrieve_tape_recovery_point_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_local_console_password(x_amz_target: XAmzTarget79OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.set_local_console_password(
        XAmzTarget79.STORAGE_GATEWAY_20130630_SET_LOCAL_CONSOLE_PASSWORD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetLocalConsolePasswordErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.set_local_console_password(
        XAmzTarget79.STORAGE_GATEWAY_20130630_SET_LOCAL_CONSOLE_PASSWORD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetLocalConsolePasswordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget79OrStr](aws_storage_gateway/models/enums/x_amz_target79.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[SetLocalConsolePasswordErrorBody](aws_storage_gateway/errors/set_local_console_password_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_smb_guest_password(x_amz_target: XAmzTarget80OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.set_smb_guest_password(XAmzTarget80.STORAGE_GATEWAY_20130630_SET_SMB_GUEST_PASSWORD)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetSmbGuestPasswordErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.set_smb_guest_password(
        XAmzTarget80.STORAGE_GATEWAY_20130630_SET_SMB_GUEST_PASSWORD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetSmbGuestPasswordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget80OrStr](aws_storage_gateway/models/enums/x_amz_target80.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[SetSmbGuestPasswordErrorBody](aws_storage_gateway/errors/set_smb_guest_password_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def shutdown_gateway(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.shutdown_gateway(XAmzTarget7.STORAGE_GATEWAY_20130630_SHUTDOWN_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShutdownGatewayErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.shutdown_gateway(XAmzTarget7.STORAGE_GATEWAY_20130630_SHUTDOWN_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShutdownGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](aws_storage_gateway/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ShutdownGatewayErrorBody](aws_storage_gateway/errors/shutdown_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_availability_monitor_test(x_amz_target: XAmzTarget64OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.start_availability_monitor_test(
        XAmzTarget64.STORAGE_GATEWAY_20130630_START_AVAILABILITY_MONITOR_TEST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartAvailabilityMonitorTestErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.start_availability_monitor_test(
        XAmzTarget64.STORAGE_GATEWAY_20130630_START_AVAILABILITY_MONITOR_TEST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartAvailabilityMonitorTestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget64OrStr](aws_storage_gateway/models/enums/x_amz_target64.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[StartAvailabilityMonitorTestErrorBody](aws_storage_gateway/errors/start_availability_monitor_test_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_gateway(x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.start_gateway(XAmzTarget57.STORAGE_GATEWAY_20130630_START_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartGatewayErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.start_gateway(XAmzTarget57.STORAGE_GATEWAY_20130630_START_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartGatewayErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget57OrStr](aws_storage_gateway/models/enums/x_amz_target57.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[StartGatewayErrorBody](aws_storage_gateway/errors/start_gateway_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_automatic_tape_creation_policy(x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_automatic_tape_creation_policy(
        XAmzTarget46.STORAGE_GATEWAY_20130630_UPDATE_AUTOMATIC_TAPE_CREATION_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAutomaticTapeCreationPolicyErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_automatic_tape_creation_policy(
        XAmzTarget46.STORAGE_GATEWAY_20130630_UPDATE_AUTOMATIC_TAPE_CREATION_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAutomaticTapeCreationPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget46OrStr](aws_storage_gateway/models/enums/x_amz_target46.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateAutomaticTapeCreationPolicyErrorBody](aws_storage_gateway/errors/update_automatic_tape_creation_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bandwidth_rate_limit(x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_bandwidth_rate_limit(
        XAmzTarget49.STORAGE_GATEWAY_20130630_UPDATE_BANDWIDTH_RATE_LIMIT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBandwidthRateLimitErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_bandwidth_rate_limit(
        XAmzTarget49.STORAGE_GATEWAY_20130630_UPDATE_BANDWIDTH_RATE_LIMIT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBandwidthRateLimitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget49OrStr](aws_storage_gateway/models/enums/x_amz_target49.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateBandwidthRateLimitErrorBody](aws_storage_gateway/errors/update_bandwidth_rate_limit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bandwidth_rate_limit_schedule(x_amz_target: XAmzTarget66OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_bandwidth_rate_limit_schedule(
        XAmzTarget66.STORAGE_GATEWAY_20130630_UPDATE_BANDWIDTH_RATE_LIMIT_SCHEDULE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBandwidthRateLimitScheduleErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_bandwidth_rate_limit_schedule(
        XAmzTarget66.STORAGE_GATEWAY_20130630_UPDATE_BANDWIDTH_RATE_LIMIT_SCHEDULE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBandwidthRateLimitScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget66OrStr](aws_storage_gateway/models/enums/x_amz_target66.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateBandwidthRateLimitScheduleErrorBody](aws_storage_gateway/errors/update_bandwidth_rate_limit_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_chap_credentials(x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_chap_credentials(XAmzTarget52.STORAGE_GATEWAY_20130630_UPDATE_CHAP_CREDENTIALS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateChapCredentialsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_chap_credentials(
        XAmzTarget52.STORAGE_GATEWAY_20130630_UPDATE_CHAP_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateChapCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget52OrStr](aws_storage_gateway/models/enums/x_amz_target52.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateChapCredentialsErrorBody](aws_storage_gateway/errors/update_chap_credentials_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_file_system_association(x_amz_target: XAmzTarget69OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_file_system_association(
        XAmzTarget69.STORAGE_GATEWAY_20130630_UPDATE_FILE_SYSTEM_ASSOCIATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateFileSystemAssociationErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_file_system_association(
        XAmzTarget69.STORAGE_GATEWAY_20130630_UPDATE_FILE_SYSTEM_ASSOCIATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateFileSystemAssociationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget69OrStr](aws_storage_gateway/models/enums/x_amz_target69.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateFileSystemAssociationErrorBody](aws_storage_gateway/errors/update_file_system_association_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_gateway_information(x_amz_target: XAmzTarget70OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_gateway_information(
        XAmzTarget70.STORAGE_GATEWAY_20130630_UPDATE_GATEWAY_INFORMATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGatewayInformationErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_gateway_information(
        XAmzTarget70.STORAGE_GATEWAY_20130630_UPDATE_GATEWAY_INFORMATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGatewayInformationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget70OrStr](aws_storage_gateway/models/enums/x_amz_target70.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateGatewayInformationErrorBody](aws_storage_gateway/errors/update_gateway_information_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_gateway_software_now(x_amz_target: XAmzTarget81OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_gateway_software_now(
        XAmzTarget81.STORAGE_GATEWAY_20130630_UPDATE_GATEWAY_SOFTWARE_NOW
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGatewaySoftwareNowErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_gateway_software_now(
        XAmzTarget81.STORAGE_GATEWAY_20130630_UPDATE_GATEWAY_SOFTWARE_NOW
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateGatewaySoftwareNowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget81OrStr](aws_storage_gateway/models/enums/x_amz_target81.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateGatewaySoftwareNowErrorBody](aws_storage_gateway/errors/update_gateway_software_now_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_maintenance_start_time(x_amz_target: XAmzTarget72OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_maintenance_start_time(
        XAmzTarget72.STORAGE_GATEWAY_20130630_UPDATE_MAINTENANCE_START_TIME
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMaintenanceStartTimeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_maintenance_start_time(
        XAmzTarget72.STORAGE_GATEWAY_20130630_UPDATE_MAINTENANCE_START_TIME
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMaintenanceStartTimeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget72OrStr](aws_storage_gateway/models/enums/x_amz_target72.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateMaintenanceStartTimeErrorBody](aws_storage_gateway/errors/update_maintenance_start_time_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_nfs_file_share(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_nfs_file_share(XAmzTarget28.STORAGE_GATEWAY_20130630_UPDATE_NFS_FILE_SHARE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateNfsFileShareErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_nfs_file_share(
        XAmzTarget28.STORAGE_GATEWAY_20130630_UPDATE_NFS_FILE_SHARE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateNfsFileShareErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget28OrStr](aws_storage_gateway/models/enums/x_amz_target28.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateNfsFileShareErrorBody](aws_storage_gateway/errors/update_nfs_file_share_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_smb_file_share(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_smb_file_share(XAmzTarget31.STORAGE_GATEWAY_20130630_UPDATE_SMB_FILE_SHARE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSmbFileShareErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_smb_file_share(
        XAmzTarget31.STORAGE_GATEWAY_20130630_UPDATE_SMB_FILE_SHARE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSmbFileShareErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget31OrStr](aws_storage_gateway/models/enums/x_amz_target31.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateSmbFileShareErrorBody](aws_storage_gateway/errors/update_smb_file_share_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_smb_file_share_visibility(x_amz_target: XAmzTarget82OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_smb_file_share_visibility(
        XAmzTarget82.STORAGE_GATEWAY_20130630_UPDATE_SMB_FILE_SHARE_VISIBILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSmbFileShareVisibilityErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_smb_file_share_visibility(
        XAmzTarget82.STORAGE_GATEWAY_20130630_UPDATE_SMB_FILE_SHARE_VISIBILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSmbFileShareVisibilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget82OrStr](aws_storage_gateway/models/enums/x_amz_target82.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateSmbFileShareVisibilityErrorBody](aws_storage_gateway/errors/update_smb_file_share_visibility_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_smb_local_groups(x_amz_target: XAmzTarget83OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_smb_local_groups(XAmzTarget83.STORAGE_GATEWAY_20130630_UPDATE_SMB_LOCAL_GROUPS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSmbLocalGroupsErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_smb_local_groups(
        XAmzTarget83.STORAGE_GATEWAY_20130630_UPDATE_SMB_LOCAL_GROUPS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSmbLocalGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget83OrStr](aws_storage_gateway/models/enums/x_amz_target83.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateSmbLocalGroupsErrorBody](aws_storage_gateway/errors/update_smb_local_groups_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_smb_security_strategy(x_amz_target: XAmzTarget84OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_smb_security_strategy(
        XAmzTarget84.STORAGE_GATEWAY_20130630_UPDATE_SMB_SECURITY_STRATEGY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSmbSecurityStrategyErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_smb_security_strategy(
        XAmzTarget84.STORAGE_GATEWAY_20130630_UPDATE_SMB_SECURITY_STRATEGY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSmbSecurityStrategyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget84OrStr](aws_storage_gateway/models/enums/x_amz_target84.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateSmbSecurityStrategyErrorBody](aws_storage_gateway/errors/update_smb_security_strategy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_snapshot_schedule(x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_snapshot_schedule(XAmzTarget60.STORAGE_GATEWAY_20130630_UPDATE_SNAPSHOT_SCHEDULE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSnapshotScheduleErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_snapshot_schedule(
        XAmzTarget60.STORAGE_GATEWAY_20130630_UPDATE_SNAPSHOT_SCHEDULE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSnapshotScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget60OrStr](aws_storage_gateway/models/enums/x_amz_target60.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateSnapshotScheduleErrorBody](aws_storage_gateway/errors/update_snapshot_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_vtl_device_type(x_amz_target: XAmzTarget85OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.aws_storage_gateway.update_vtl_device_type(XAmzTarget85.STORAGE_GATEWAY_20130630_UPDATE_VTL_DEVICE_TYPE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVtlDeviceTypeErrorBody
```

**Async**

```python
try:
    await async_client.aws_storage_gateway.update_vtl_device_type(
        XAmzTarget85.STORAGE_GATEWAY_20130630_UPDATE_VTL_DEVICE_TYPE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVtlDeviceTypeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget85OrStr](aws_storage_gateway/models/enums/x_amz_target85.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[UpdateVtlDeviceTypeErrorBody](aws_storage_gateway/errors/update_vtl_device_type_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CacheReport

> Source: [CacheReport](aws_storage_gateway/apis/cache_report.py)

<details>
<summary><code>def cancel_cache_report(x_amz_target: XAmzTargetAwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.cache_report.cancel_cache_report(
        XAmzTargetAwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_CANCEL_CACHE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelCacheReportErrorBody
```

**Async**

```python
try:
    await async_client.cache_report.cancel_cache_report(
        XAmzTargetAwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_CANCEL_CACHE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelCacheReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsStorageGatewayCacheReportApiOrStr](aws_storage_gateway/models/enums/x_amz_target_aws_storage_gateway_cache_report_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[CancelCacheReportErrorBody](aws_storage_gateway/errors/cancel_cache_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_cache_report(x_amz_target: XAmzTarget1AwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.cache_report.delete_cache_report(
        XAmzTarget1AwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_DELETE_CACHE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCacheReportErrorBody
```

**Async**

```python
try:
    await async_client.cache_report.delete_cache_report(
        XAmzTarget1AwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_DELETE_CACHE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCacheReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsStorageGatewayCacheReportApiOrStr](aws_storage_gateway/models/enums/x_amz_target1_aws_storage_gateway_cache_report_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DeleteCacheReportErrorBody](aws_storage_gateway/errors/delete_cache_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_cache_report(x_amz_target: XAmzTarget2AwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.cache_report.describe_cache_report(
        XAmzTarget2AwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_DESCRIBE_CACHE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCacheReportErrorBody
```

**Async**

```python
try:
    await async_client.cache_report.describe_cache_report(
        XAmzTarget2AwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_DESCRIBE_CACHE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCacheReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsStorageGatewayCacheReportApiOrStr](aws_storage_gateway/models/enums/x_amz_target2_aws_storage_gateway_cache_report_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[DescribeCacheReportErrorBody](aws_storage_gateway/errors/describe_cache_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cache_reports(x_amz_target: XAmzTarget3AwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.cache_report.list_cache_reports(
        XAmzTarget3AwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_LIST_CACHE_REPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCacheReportsErrorBody
```

**Async**

```python
try:
    await async_client.cache_report.list_cache_reports(
        XAmzTarget3AwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_LIST_CACHE_REPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCacheReportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsStorageGatewayCacheReportApiOrStr](aws_storage_gateway/models/enums/x_amz_target3_aws_storage_gateway_cache_report_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ListCacheReportsErrorBody](aws_storage_gateway/errors/list_cache_reports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_cache_report(x_amz_target: XAmzTarget4AwsStorageGatewayCacheReportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.cache_report.start_cache_report(
        XAmzTarget4AwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_START_CACHE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartCacheReportErrorBody
```

**Async**

```python
try:
    await async_client.cache_report.start_cache_report(
        XAmzTarget4AwsStorageGatewayCacheReportApi.STORAGE_GATEWAY_20130630_START_CACHE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartCacheReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsStorageGatewayCacheReportApiOrStr](aws_storage_gateway/models/enums/x_amz_target4_aws_storage_gateway_cache_report_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[StartCacheReportErrorBody](aws_storage_gateway/errors/start_cache_report_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](aws_storage_gateway/apis/operations.py)

<details>
<summary><code>def activate_gateway3(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.activate_gateway3(XAmzTarget.STORAGE_GATEWAY_20130630_ACTIVATE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateGateway3ErrorBody
```

**Async**

```python
try:
    await async_client.operations.activate_gateway3(XAmzTarget.STORAGE_GATEWAY_20130630_ACTIVATE_GATEWAY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ActivateGateway3ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](aws_storage_gateway/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ActivateGateway3ErrorBody](aws_storage_gateway/errors/activate_gateway3_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def assign_tape_pool2(x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.assign_tape_pool2(
        XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_ASSIGN_TAPE_POOL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignTapePool2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.assign_tape_pool2(
        XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi.STORAGE_GATEWAY_20130630_ASSIGN_TAPE_POOL
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssignTapePool2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr](aws_storage_gateway/models/enums/x_amz_target1_aws_storage_gateway_aws_storage_gateway_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[AssignTapePool2ErrorBody](aws_storage_gateway/errors/assign_tape_pool2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def evict_files_failing_upload(x_amz_target: XAmzTarget2AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.evict_files_failing_upload(
        XAmzTarget2AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_EVICT_FILES_FAILING_UPLOAD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EvictFilesFailingUploadErrorBody
```

**Async**

```python
try:
    await async_client.operations.evict_files_failing_upload(
        XAmzTarget2AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_EVICT_FILES_FAILING_UPLOAD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EvictFilesFailingUploadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsStorageGatewayOperationsApiOrStr](aws_storage_gateway/models/enums/x_amz_target2_aws_storage_gateway_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[EvictFilesFailingUploadErrorBody](aws_storage_gateway/errors/evict_files_failing_upload_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def join_domain2(x_amz_target: XAmzTarget3AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.join_domain2(XAmzTarget3AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_JOIN_DOMAIN)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JoinDomain2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.join_domain2(
        XAmzTarget3AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_JOIN_DOMAIN
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JoinDomain2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsStorageGatewayOperationsApiOrStr](aws_storage_gateway/models/enums/x_amz_target3_aws_storage_gateway_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[JoinDomain2ErrorBody](aws_storage_gateway/errors/join_domain2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def notify_when_uploaded2(x_amz_target: XAmzTarget4AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.notify_when_uploaded2(
        XAmzTarget4AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_NOTIFY_WHEN_UPLOADED
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NotifyWhenUploaded2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.notify_when_uploaded2(
        XAmzTarget4AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_NOTIFY_WHEN_UPLOADED
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NotifyWhenUploaded2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsStorageGatewayOperationsApiOrStr](aws_storage_gateway/models/enums/x_amz_target4_aws_storage_gateway_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[NotifyWhenUploaded2ErrorBody](aws_storage_gateway/errors/notify_when_uploaded2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def refresh_cache2(x_amz_target: XAmzTarget5AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.refresh_cache2(XAmzTarget5AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_REFRESH_CACHE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshCache2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.refresh_cache2(
        XAmzTarget5AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_REFRESH_CACHE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RefreshCache2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AwsStorageGatewayOperationsApiOrStr](aws_storage_gateway/models/enums/x_amz_target5_aws_storage_gateway_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[RefreshCache2ErrorBody](aws_storage_gateway/errors/refresh_cache2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_tape_archive2(x_amz_target: XAmzTarget6AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.retrieve_tape_archive2(
        XAmzTarget6AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_ARCHIVE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveTapeArchive2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.retrieve_tape_archive2(
        XAmzTarget6AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_ARCHIVE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveTapeArchive2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6AwsStorageGatewayOperationsApiOrStr](aws_storage_gateway/models/enums/x_amz_target6_aws_storage_gateway_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[RetrieveTapeArchive2ErrorBody](aws_storage_gateway/errors/retrieve_tape_archive2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retrieve_tape_recovery_point2(x_amz_target: XAmzTarget7AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.retrieve_tape_recovery_point2(
        XAmzTarget7AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_RECOVERY_POINT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveTapeRecoveryPoint2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.retrieve_tape_recovery_point2(
        XAmzTarget7AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_RECOVERY_POINT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetrieveTapeRecoveryPoint2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7AwsStorageGatewayOperationsApiOrStr](aws_storage_gateway/models/enums/x_amz_target7_aws_storage_gateway_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[RetrieveTapeRecoveryPoint2ErrorBody](aws_storage_gateway/errors/retrieve_tape_recovery_point2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def shutdown_gateway2(x_amz_target: XAmzTarget8AwsStorageGatewayOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.operations.shutdown_gateway2(
        XAmzTarget8AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_SHUTDOWN_GATEWAY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShutdownGateway2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.shutdown_gateway2(
        XAmzTarget8AwsStorageGatewayOperationsApi.STORAGE_GATEWAY_20130630_SHUTDOWN_GATEWAY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ShutdownGateway2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8AwsStorageGatewayOperationsApiOrStr](aws_storage_gateway/models/enums/x_amz_target8_aws_storage_gateway_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_storage_gateway/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_storage_gateway/core/exceptions.py)&#91;[ShutdownGateway2ErrorBody](aws_storage_gateway/errors/shutdown_gateway2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](aws_storage_gateway/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_storage_gateway/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

