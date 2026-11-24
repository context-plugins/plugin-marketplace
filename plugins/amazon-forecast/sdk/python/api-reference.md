# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AmazonForecastClient](amazon_forecast/client.py)

## DatasetGroups

> Source: [DatasetGroups](amazon_forecast/apis/dataset_groups.py)

<details>
<summary><code>def create_dataset_group(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the UpdateDatasetGroup operation. After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see Dataset groups. To get a list of all your datasets groups, use the ListDatasetGroups operation. The Status of a dataset group must be ACTIVE before you can use the dataset group to create a predictor. To get the status, use the DescribeDatasetGroup operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_groups.create_dataset_group(XAmzTarget.AMAZON_FORECAST_CREATE_DATASET_GROUP)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetGroupErrorBody
```

**Async**

```python
try:
    await async_client.dataset_groups.create_dataset_group(XAmzTarget.AMAZON_FORECAST_CREATE_DATASET_GROUP)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](amazon_forecast/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateDatasetGroupErrorBody](amazon_forecast/errors/create_dataset_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_dataset_group(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete dataset groups that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the status, use the DescribeDatasetGroup operation. This operation deletes only the dataset group, not the datasets in the group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_groups.delete_dataset_group(XAmzTarget1.AMAZON_FORECAST_DELETE_DATASET_GROUP)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatasetGroupErrorBody
```

**Async**

```python
try:
    await async_client.dataset_groups.delete_dataset_group(XAmzTarget1.AMAZON_FORECAST_DELETE_DATASET_GROUP)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatasetGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](amazon_forecast/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteDatasetGroupErrorBody](amazon_forecast/errors/delete_dataset_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_dataset_group(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the parameters provided in the CreateDatasetGroup request, this operation includes the following properties: DatasetArns - The datasets belonging to the group. CreationTime LastModificationTime Status

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_groups.describe_dataset_group(XAmzTarget2.AMAZON_FORECAST_DESCRIBE_DATASET_GROUP)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetGroupErrorBody
```

**Async**

```python
try:
    await async_client.dataset_groups.describe_dataset_group(XAmzTarget2.AMAZON_FORECAST_DESCRIBE_DATASET_GROUP)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](amazon_forecast/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeDatasetGroupErrorBody](amazon_forecast/errors/describe_dataset_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_dataset_groups(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the DescribeDatasetGroup operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_groups.list_dataset_groups(XAmzTarget3.AMAZON_FORECAST_LIST_DATASET_GROUPS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetGroupsErrorBody
```

**Async**

```python
try:
    await async_client.dataset_groups.list_dataset_groups(XAmzTarget3.AMAZON_FORECAST_LIST_DATASET_GROUPS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](amazon_forecast/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListDatasetGroupsErrorBody](amazon_forecast/errors/list_dataset_groups_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_dataset_group(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset group must be ACTIVE before you can use the dataset group to create a predictor. Use the DescribeDatasetGroup operation to get the status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_groups.update_dataset_group(XAmzTarget4.AMAZON_FORECAST_UPDATE_DATASET_GROUP)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDatasetGroupErrorBody
```

**Async**

```python
try:
    await async_client.dataset_groups.update_dataset_group(XAmzTarget4.AMAZON_FORECAST_UPDATE_DATASET_GROUP)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDatasetGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](amazon_forecast/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[UpdateDatasetGroupErrorBody](amazon_forecast/errors/update_dataset_group_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatasetImportJob

> Source: [DatasetImportJob](amazon_forecast/apis/dataset_import_job.py)

<details>
<summary><code>def create_dataset_import_job(x_amz_target: XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to. You must specify a DataSource object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import. To get a list of all your dataset import jobs, filtered by specified

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_import_job.create_dataset_import_job(
        XAmzTargetAmazonForecastServiceDatasetImportJobApi.AMAZON_FORECAST_CREATE_DATASET_IMPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetImportJobErrorBody
```

**Async**

```python
try:
    await async_client.dataset_import_job.create_dataset_import_job(
        XAmzTargetAmazonForecastServiceDatasetImportJobApi.AMAZON_FORECAST_CREATE_DATASET_IMPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetImportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_dataset_import_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateDatasetImportJobErrorBody](amazon_forecast/errors/create_dataset_import_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_dataset_import_job(x_amz_target: XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_import_job.delete_dataset_import_job(
        XAmzTarget1AmazonForecastServiceDatasetImportJobApi.AMAZON_FORECAST_DELETE_DATASET_IMPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatasetImportJobErrorBody
```

**Async**

```python
try:
    await async_client.dataset_import_job.delete_dataset_import_job(
        XAmzTarget1AmazonForecastServiceDatasetImportJobApi.AMAZON_FORECAST_DELETE_DATASET_IMPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatasetImportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_dataset_import_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteDatasetImportJobErrorBody](amazon_forecast/errors/delete_dataset_import_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_dataset_import_job(x_amz_target: XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the parameters provided in the CreateDatasetImportJob request, this operation includes the following properties: CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information about the error.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_import_job.describe_dataset_import_job(
        XAmzTarget2AmazonForecastServiceDatasetImportJobApi.AMAZON_FORECAST_DESCRIBE_DATASET_IMPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetImportJobErrorBody
```

**Async**

```python
try:
    await async_client.dataset_import_job.describe_dataset_import_job(
        XAmzTarget2AmazonForecastServiceDatasetImportJobApi.AMAZON_FORECAST_DESCRIBE_DATASET_IMPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetImportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_dataset_import_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeDatasetImportJobErrorBody](amazon_forecast/errors/describe_dataset_import_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_dataset_import_jobs(x_amz_target: XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can filter the list by providing an array of Filter objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset_import_job.list_dataset_import_jobs(
        XAmzTarget3AmazonForecastServiceDatasetImportJobApi.AMAZON_FORECAST_LIST_DATASET_IMPORT_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetImportJobsErrorBody
```

**Async**

```python
try:
    await async_client.dataset_import_job.list_dataset_import_jobs(
        XAmzTarget3AmazonForecastServiceDatasetImportJobApi.AMAZON_FORECAST_LIST_DATASET_IMPORT_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetImportJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_dataset_import_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListDatasetImportJobsErrorBody](amazon_forecast/errors/list_dataset_import_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Datasets

> Source: [Datasets](amazon_forecast/apis/datasets.py)

<details>
<summary><code>def create_dataset(x_amz_target: XAmzTargetAmazonForecastServiceDatasetsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following: DataFrequency - How frequently your historical time-series data is collected. Domain and DatasetType - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields. Schema - A schema specifies the fields in the dataset, including the field name and data type. After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see Importing datasets. To get a list of all your datasets, use the ListDatasets operation. For example Forecast datasets, see the Amazon Forecast Sample GitHub repository. The Status of a dataset must be ACTIVE before you can import training data. Use the DescribeDataset operation to get the status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.datasets.create_dataset(XAmzTargetAmazonForecastServiceDatasetsApi.AMAZON_FORECAST_CREATE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetErrorBody
```

**Async**

```python
try:
    await async_client.datasets.create_dataset(
        XAmzTargetAmazonForecastServiceDatasetsApi.AMAZON_FORECAST_CREATE_DATASET
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceDatasetsApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_datasets_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateDatasetErrorBody](amazon_forecast/errors/create_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_dataset(x_amz_target: XAmzTarget1AmazonForecastServiceDatasetsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can only delete datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the DescribeDataset operation. Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the UpdateDatasetGroup operation, omitting the deleted dataset's ARN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.datasets.delete_dataset(XAmzTarget1AmazonForecastServiceDatasetsApi.AMAZON_FORECAST_DELETE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatasetErrorBody
```

**Async**

```python
try:
    await async_client.datasets.delete_dataset(
        XAmzTarget1AmazonForecastServiceDatasetsApi.AMAZON_FORECAST_DELETE_DATASET
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceDatasetsApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_datasets_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteDatasetErrorBody](amazon_forecast/errors/delete_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_dataset(x_amz_target: XAmzTarget2AmazonForecastServiceDatasetsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the parameters specified in the CreateDataset request, this operation includes the following dataset properties: CreationTime LastModificationTime Status

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.datasets.describe_dataset(XAmzTarget2AmazonForecastServiceDatasetsApi.AMAZON_FORECAST_DESCRIBE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetErrorBody
```

**Async**

```python
try:
    await async_client.datasets.describe_dataset(
        XAmzTarget2AmazonForecastServiceDatasetsApi.AMAZON_FORECAST_DESCRIBE_DATASET
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceDatasetsApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_datasets_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeDatasetErrorBody](amazon_forecast/errors/describe_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_datasets(x_amz_target: XAmzTarget3AmazonForecastServiceDatasetsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the DescribeDataset operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.datasets.list_datasets(XAmzTarget3AmazonForecastServiceDatasetsApi.AMAZON_FORECAST_LIST_DATASETS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetsErrorBody
```

**Async**

```python
try:
    await async_client.datasets.list_datasets(XAmzTarget3AmazonForecastServiceDatasetsApi.AMAZON_FORECAST_LIST_DATASETS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceDatasetsApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_datasets_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListDatasetsErrorBody](amazon_forecast/errors/list_datasets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Explainability

> Source: [Explainability](amazon_forecast/apis/explainability.py)

<details>
<summary><code>def create_explainability(x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values. To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN. CreateExplainability with a Predictor ARN You can only have one Explainability resource per predictor. If you already enabled ExplainPredictor in CreateAutoPredictor, that predictor already has an Explainability resource. The following parameters are required when providing a Predictor ARN: ExplainabilityName - A

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.explainability.create_explainability(
        XAmzTargetAmazonForecastServiceExplainabilityApi.AMAZON_FORECAST_CREATE_EXPLAINABILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateExplainabilityErrorBody
```

**Async**

```python
try:
    await async_client.explainability.create_explainability(
        XAmzTargetAmazonForecastServiceExplainabilityApi.AMAZON_FORECAST_CREATE_EXPLAINABILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateExplainabilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceExplainabilityApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_explainability_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateExplainabilityErrorBody](amazon_forecast/errors/create_explainability_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_explainability(x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeExplainability operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.explainability.delete_explainability(
        XAmzTarget1AmazonForecastServiceExplainabilityApi.AMAZON_FORECAST_DELETE_EXPLAINABILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteExplainabilityErrorBody
```

**Async**

```python
try:
    await async_client.explainability.delete_explainability(
        XAmzTarget1AmazonForecastServiceExplainabilityApi.AMAZON_FORECAST_DELETE_EXPLAINABILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteExplainabilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_explainability_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteExplainabilityErrorBody](amazon_forecast/errors/delete_explainability_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_explainability(x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes an Explainability resource created using the CreateExplainability operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.explainability.describe_explainability(
        XAmzTarget2AmazonForecastServiceExplainabilityApi.AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeExplainabilityErrorBody
```

**Async**

```python
try:
    await async_client.explainability.describe_explainability(
        XAmzTarget2AmazonForecastServiceExplainabilityApi.AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeExplainabilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_explainability_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeExplainabilityErrorBody](amazon_forecast/errors/describe_explainability_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_explainabilities(x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Explainability resources created using the CreateExplainability operation. This operation returns a summary for each Explainability. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the DescribeExplainability operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.explainability.list_explainabilities(
        XAmzTarget3AmazonForecastServiceExplainabilityApi.AMAZON_FORECAST_LIST_EXPLAINABILITIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExplainabilitiesErrorBody
```

**Async**

```python
try:
    await async_client.explainability.list_explainabilities(
        XAmzTarget3AmazonForecastServiceExplainabilityApi.AMAZON_FORECAST_LIST_EXPLAINABILITIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExplainabilitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_explainability_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListExplainabilitiesErrorBody](amazon_forecast/errors/list_explainabilities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExplainabilityExport

> Source: [ExplainabilityExport](amazon_forecast/apis/explainability_export.py)

<details>
<summary><code>def create_explainability_export(x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribeExplainabilityExport operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.explainability_export.create_explainability_export(
        XAmzTargetAmazonForecastServiceExplainabilityExportApi.AMAZON_FORECAST_CREATE_EXPLAINABILITY_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateExplainabilityExportErrorBody
```

**Async**

```python
try:
    await async_client.explainability_export.create_explainability_export(
        XAmzTargetAmazonForecastServiceExplainabilityExportApi.AMAZON_FORECAST_CREATE_EXPLAINABILITY_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateExplainabilityExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_explainability_export_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateExplainabilityExportErrorBody](amazon_forecast/errors/create_explainability_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_explainability_export(x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Explainability export.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.explainability_export.delete_explainability_export(
        XAmzTarget1AmazonForecastServiceExplainabilityExportApi.AMAZON_FORECAST_DELETE_EXPLAINABILITY_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteExplainabilityExportErrorBody
```

**Async**

```python
try:
    await async_client.explainability_export.delete_explainability_export(
        XAmzTarget1AmazonForecastServiceExplainabilityExportApi.AMAZON_FORECAST_DELETE_EXPLAINABILITY_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteExplainabilityExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_explainability_export_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteExplainabilityExportErrorBody](amazon_forecast/errors/delete_explainability_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_explainability_export(x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes an Explainability export created using the CreateExplainabilityExport operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.explainability_export.describe_explainability_export(
        XAmzTarget2AmazonForecastServiceExplainabilityExportApi.AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeExplainabilityExportErrorBody
```

**Async**

```python
try:
    await async_client.explainability_export.describe_explainability_export(
        XAmzTarget2AmazonForecastServiceExplainabilityExportApi.AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeExplainabilityExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_explainability_export_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeExplainabilityExportErrorBody](amazon_forecast/errors/describe_explainability_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_explainability_exports(x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This operation returns a summary for each Explainability export. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the DescribeExplainability operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.explainability_export.list_explainability_exports(
        XAmzTarget3AmazonForecastServiceExplainabilityExportApi.AMAZON_FORECAST_LIST_EXPLAINABILITY_EXPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExplainabilityExportsErrorBody
```

**Async**

```python
try:
    await async_client.explainability_export.list_explainability_exports(
        XAmzTarget3AmazonForecastServiceExplainabilityExportApi.AMAZON_FORECAST_LIST_EXPLAINABILITY_EXPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExplainabilityExportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_explainability_export_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListExplainabilityExportsErrorBody](amazon_forecast/errors/list_explainability_exports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExportJobs

> Source: [ExportJobs](amazon_forecast/apis/export_jobs.py)

<details>
<summary><code>def create_forecast_export_job(x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions: __ where the component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeForecastExportJob operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.export_jobs.create_forecast_export_job(
        XAmzTargetAmazonForecastServiceExportJobsApi.AMAZON_FORECAST_CREATE_FORECAST_EXPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateForecastExportJobErrorBody
```

**Async**

```python
try:
    await async_client.export_jobs.create_forecast_export_job(
        XAmzTargetAmazonForecastServiceExportJobsApi.AMAZON_FORECAST_CREATE_FORECAST_EXPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateForecastExportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceExportJobsApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_export_jobs_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateForecastExportJobErrorBody](amazon_forecast/errors/create_forecast_export_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ForecastExportJob

> Source: [ForecastExportJob](amazon_forecast/apis/forecast_export_job.py)

<details>
<summary><code>def create_forecast_export_job2(x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions: __ where the component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeForecastExportJob operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.forecast_export_job.create_forecast_export_job2(
        XAmzTargetAmazonForecastServiceExportJobsApi.AMAZON_FORECAST_CREATE_FORECAST_EXPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateForecastExportJob2ErrorBody
```

**Async**

```python
try:
    await async_client.forecast_export_job.create_forecast_export_job2(
        XAmzTargetAmazonForecastServiceExportJobsApi.AMAZON_FORECAST_CREATE_FORECAST_EXPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateForecastExportJob2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceExportJobsApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_export_jobs_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateForecastExportJob2ErrorBody](amazon_forecast/errors/create_forecast_export_job2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_forecast_export_job(x_amz_target: XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a forecast export job created using the CreateForecastExportJob operation. You can delete only export jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecastExportJob operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.forecast_export_job.delete_forecast_export_job(
        XAmzTarget1AmazonForecastServiceForecastExportJobApi.AMAZON_FORECAST_DELETE_FORECAST_EXPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteForecastExportJobErrorBody
```

**Async**

```python
try:
    await async_client.forecast_export_job.delete_forecast_export_job(
        XAmzTarget1AmazonForecastServiceForecastExportJobApi.AMAZON_FORECAST_DELETE_FORECAST_EXPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteForecastExportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_forecast_export_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteForecastExportJobErrorBody](amazon_forecast/errors/delete_forecast_export_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_forecast_export_job(x_amz_target: XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a forecast export job created using the CreateForecastExportJob operation. In addition to listing the properties provided by the user in the CreateForecastExportJob request, this operation lists the following properties: CreationTime LastModificationTime Status Message - If an error occurred, information about the error.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.forecast_export_job.describe_forecast_export_job(
        XAmzTarget2AmazonForecastServiceForecastExportJobApi.AMAZON_FORECAST_DESCRIBE_FORECAST_EXPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeForecastExportJobErrorBody
```

**Async**

```python
try:
    await async_client.forecast_export_job.describe_forecast_export_job(
        XAmzTarget2AmazonForecastServiceForecastExportJobApi.AMAZON_FORECAST_DESCRIBE_FORECAST_EXPORT_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeForecastExportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_forecast_export_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeForecastExportJobErrorBody](amazon_forecast/errors/describe_forecast_export_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_forecast_export_jobs(x_amz_target: XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the DescribeForecastExportJob operation. You can filter the list using an array of Filter objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.forecast_export_job.list_forecast_export_jobs(
        XAmzTarget3AmazonForecastServiceForecastExportJobApi.AMAZON_FORECAST_LIST_FORECAST_EXPORT_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListForecastExportJobsErrorBody
```

**Async**

```python
try:
    await async_client.forecast_export_job.list_forecast_export_jobs(
        XAmzTarget3AmazonForecastServiceForecastExportJobApi.AMAZON_FORECAST_LIST_FORECAST_EXPORT_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListForecastExportJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_forecast_export_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListForecastExportJobsErrorBody](amazon_forecast/errors/list_forecast_export_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Forecasts

> Source: [Forecasts](amazon_forecast/apis/forecasts.py)

<details>
<summary><code>def create_forecast(x_amz_target: XAmzTargetAmazonForecastServiceForecastsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a forecast for each item in the TARGET_TIME_SERIES dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the CreateForecastExportJob operation. The range of the forecast is determined by the ForecastHorizon value, which you specify in the CreatePredictor request. When you query a forecast, you can request a specific date range within the forecast. To get a list of all your forecasts, use the ListForecasts operation. The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor. For more information, see howitworks-forecast. The Status of the forecast must be ACTIVE before you can query or export the forecast. Use the DescribeForecast operation to get the status. By default, a forecast includes predictions for every item (item_id) in the dataset group that was used to train the predictor. However, you can use the TimeSeriesSelector object to generate a forecast on a subset of time series. Forecast creation is skipped for any

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.forecasts.create_forecast(XAmzTargetAmazonForecastServiceForecastsApi.AMAZON_FORECAST_CREATE_FORECAST)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateForecastErrorBody
```

**Async**

```python
try:
    await async_client.forecasts.create_forecast(
        XAmzTargetAmazonForecastServiceForecastsApi.AMAZON_FORECAST_CREATE_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateForecastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceForecastsApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_forecasts_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateForecastErrorBody](amazon_forecast/errors/create_forecast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_forecast(x_amz_target: XAmzTarget1AmazonForecastServiceForecastsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a forecast created using the CreateForecast operation. You can delete only forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecast operation. You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.forecasts.delete_forecast(XAmzTarget1AmazonForecastServiceForecastsApi.AMAZON_FORECAST_DELETE_FORECAST)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteForecastErrorBody
```

**Async**

```python
try:
    await async_client.forecasts.delete_forecast(
        XAmzTarget1AmazonForecastServiceForecastsApi.AMAZON_FORECAST_DELETE_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteForecastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceForecastsApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_forecasts_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteForecastErrorBody](amazon_forecast/errors/delete_forecast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_forecast(x_amz_target: XAmzTarget2AmazonForecastServiceForecastsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a forecast created using the CreateForecast operation. In addition to listing the properties provided in the CreateForecast request, this operation lists the following properties: DatasetGroupArn - The dataset group that provided the training data. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.forecasts.describe_forecast(XAmzTarget2AmazonForecastServiceForecastsApi.AMAZON_FORECAST_DESCRIBE_FORECAST)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeForecastErrorBody
```

**Async**

```python
try:
    await async_client.forecasts.describe_forecast(
        XAmzTarget2AmazonForecastServiceForecastsApi.AMAZON_FORECAST_DESCRIBE_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeForecastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceForecastsApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_forecasts_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeForecastErrorBody](amazon_forecast/errors/describe_forecast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_forecasts(x_amz_target: XAmzTarget3AmazonForecastServiceForecastsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of forecasts created using the CreateForecast operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the DescribeForecast operation. You can filter the list using an array of Filter objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.forecasts.list_forecasts(XAmzTarget3AmazonForecastServiceForecastsApi.AMAZON_FORECAST_LIST_FORECASTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListForecastsErrorBody
```

**Async**

```python
try:
    await async_client.forecasts.list_forecasts(
        XAmzTarget3AmazonForecastServiceForecastsApi.AMAZON_FORECAST_LIST_FORECASTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListForecastsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceForecastsApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_forecasts_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListForecastsErrorBody](amazon_forecast/errors/list_forecasts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Monitor

> Source: [Monitor](amazon_forecast/apis/monitor.py)

<details>
<summary><code>def create_monitor(x_amz_target: XAmzTargetAmazonForecastServiceMonitorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see Predictor Monitoring.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.monitor.create_monitor(XAmzTargetAmazonForecastServiceMonitorApi.AMAZON_FORECAST_CREATE_MONITOR)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMonitorErrorBody
```

**Async**

```python
try:
    await async_client.monitor.create_monitor(XAmzTargetAmazonForecastServiceMonitorApi.AMAZON_FORECAST_CREATE_MONITOR)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMonitorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceMonitorApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_monitor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateMonitorErrorBody](amazon_forecast/errors/create_monitor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_monitor(x_amz_target: XAmzTarget1AmazonForecastServiceMonitorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE, ACTIVE_STOPPED, CREATE_FAILED, or CREATE_STOPPED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.monitor.delete_monitor(XAmzTarget1AmazonForecastServiceMonitorApi.AMAZON_FORECAST_DELETE_MONITOR)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteMonitorErrorBody
```

**Async**

```python
try:
    await async_client.monitor.delete_monitor(XAmzTarget1AmazonForecastServiceMonitorApi.AMAZON_FORECAST_DELETE_MONITOR)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteMonitorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceMonitorApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_monitor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteMonitorErrorBody](amazon_forecast/errors/delete_monitor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_monitor(x_amz_target: XAmzTarget2AmazonForecastServiceMonitorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a monitor resource. In addition to listing the properties provided in the CreateMonitor request, this operation lists the following properties: Baseline CreationTime LastEvaluationTime LastEvaluationState LastModificationTime Message Status

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.monitor.describe_monitor(XAmzTarget2AmazonForecastServiceMonitorApi.AMAZON_FORECAST_DESCRIBE_MONITOR)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeMonitorErrorBody
```

**Async**

```python
try:
    await async_client.monitor.describe_monitor(
        XAmzTarget2AmazonForecastServiceMonitorApi.AMAZON_FORECAST_DESCRIBE_MONITOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeMonitorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceMonitorApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_monitor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeMonitorErrorBody](amazon_forecast/errors/describe_monitor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitors(x_amz_target: XAmzTarget3AmazonForecastServiceMonitorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the DescribeMonitor operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.monitor.list_monitors(XAmzTarget3AmazonForecastServiceMonitorApi.AMAZON_FORECAST_LIST_MONITORS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorsErrorBody
```

**Async**

```python
try:
    await async_client.monitor.list_monitors(XAmzTarget3AmazonForecastServiceMonitorApi.AMAZON_FORECAST_LIST_MONITORS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceMonitorApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_monitor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListMonitorsErrorBody](amazon_forecast/errors/list_monitors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](amazon_forecast/apis/operations.py)

<details>
<summary><code>def create_auto_predictor(x_amz_target: XAmzTarget1AmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors. Creating new predictors The following parameters are required when creating a new predictor: PredictorName - A unique name for the predictor. DatasetGroupArn - The ARN of the dataset group used to train the predictor. ForecastFrequency - The granularity of your forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length. When creating a new predictor, do not specify a value for ReferencePredictorArn. Upgrading and retraining predictors The following parameters are required when retraining or upgrading a predictor: PredictorName - A unique name for the predictor. ReferencePredictorArn - The ARN of the predictor to retrain or upgrade. When upgrading or retraining a predictor, only specify values for the ReferencePredictorArn and PredictorName.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.create_auto_predictor(
        XAmzTarget1AmazonForecastServiceOperationsApi.AMAZON_FORECAST_CREATE_AUTO_PREDICTOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAutoPredictorErrorBody
```

**Async**

```python
try:
    await async_client.operations.create_auto_predictor(
        XAmzTarget1AmazonForecastServiceOperationsApi.AMAZON_FORECAST_CREATE_AUTO_PREDICTOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateAutoPredictorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceOperationsApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateAutoPredictorErrorBody](amazon_forecast/errors/create_auto_predictor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_resource_tree(x_amz_target: XAmzTarget3AmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an entire resource tree. This operation will delete the parent resource and its child resources. Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource. Amazon Forecast resources possess the following parent-child resource hierarchies: Dataset: dataset import jobs Dataset Group: predictors, predictor backtest export jobs, forecasts, forecast export jobs Predictor: predictor backtest export jobs, forecasts, forecast export jobs Forecast: forecast export jobs DeleteResourceTree will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.delete_resource_tree(
        XAmzTarget3AmazonForecastServiceOperationsApi.AMAZON_FORECAST_DELETE_RESOURCE_TREE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourceTreeErrorBody
```

**Async**

```python
try:
    await async_client.operations.delete_resource_tree(
        XAmzTarget3AmazonForecastServiceOperationsApi.AMAZON_FORECAST_DELETE_RESOURCE_TREE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourceTreeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceOperationsApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteResourceTreeErrorBody](amazon_forecast/errors/delete_resource_tree_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_auto_predictor(x_amz_target: XAmzTarget2AmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a predictor created using the CreateAutoPredictor operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.describe_auto_predictor(
        XAmzTarget2AmazonForecastServiceOperationsApi.AMAZON_FORECAST_DESCRIBE_AUTO_PREDICTOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAutoPredictorErrorBody
```

**Async**

```python
try:
    await async_client.operations.describe_auto_predictor(
        XAmzTarget2AmazonForecastServiceOperationsApi.AMAZON_FORECAST_DESCRIBE_AUTO_PREDICTOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeAutoPredictorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceOperationsApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeAutoPredictorErrorBody](amazon_forecast/errors/describe_auto_predictor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_accuracy_metrics(x_amz_target: XAmzTarget4AmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see Predictor Metrics. This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (NumberOfBacktestWindows) is specified using the EvaluationParameters object, which is optionally included in the CreatePredictor request. If NumberOfBacktestWindows isn't specified, the number defaults to one. The parameters of the filling method determine which items contribute to the metrics. If you want all items to contribute, specify zero. If you want only those items that have complete data in the range being evaluated to contribute, specify nan. For more information, see FeaturizationMethod. Before you can get accuracy metrics, the Status of the predictor must be ACTIVE, signifying that training has completed. To get the status, use the DescribePredictor operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.get_accuracy_metrics(
        XAmzTarget4AmazonForecastServiceOperationsApi.AMAZON_FORECAST_GET_ACCURACY_METRICS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccuracyMetricsErrorBody
```

**Async**

```python
try:
    await async_client.operations.get_accuracy_metrics(
        XAmzTarget4AmazonForecastServiceOperationsApi.AMAZON_FORECAST_GET_ACCURACY_METRICS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccuracyMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonForecastServiceOperationsApiOrStr](amazon_forecast/models/enums/x_amz_target4_amazon_forecast_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[GetAccuracyMetricsErrorBody](amazon_forecast/errors/get_accuracy_metrics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_monitor_evaluations(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time. For information about monitoring see predictor-monitoring. For more information about retrieving monitoring results see Viewing Monitoring Results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.list_monitor_evaluations(XAmzTarget5.AMAZON_FORECAST_LIST_MONITOR_EVALUATIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorEvaluationsErrorBody
```

**Async**

```python
try:
    await async_client.operations.list_monitor_evaluations(XAmzTarget5.AMAZON_FORECAST_LIST_MONITOR_EVALUATIONS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMonitorEvaluationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](amazon_forecast/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListMonitorEvaluationsErrorBody](amazon_forecast/errors/list_monitor_evaluations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_what_if_analyses(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.list_what_if_analyses(XAmzTarget6.AMAZON_FORECAST_LIST_WHAT_IF_ANALYSES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWhatIfAnalysesErrorBody
```

**Async**

```python
try:
    await async_client.operations.list_what_if_analyses(XAmzTarget6.AMAZON_FORECAST_LIST_WHAT_IF_ANALYSES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWhatIfAnalysesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](amazon_forecast/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListWhatIfAnalysesErrorBody](amazon_forecast/errors/list_what_if_analyses_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resume_resource(x_amz_target: XAmzTargetAmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resumes a stopped monitor resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.resume_resource(XAmzTargetAmazonForecastServiceOperationsApi.AMAZON_FORECAST_RESUME_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResumeResourceErrorBody
```

**Async**

```python
try:
    await async_client.operations.resume_resource(
        XAmzTargetAmazonForecastServiceOperationsApi.AMAZON_FORECAST_RESUME_RESOURCE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResumeResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceOperationsApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ResumeResourceErrorBody](amazon_forecast/errors/resume_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PredictorBacktestExportJob

> Source: [PredictorBacktestExportJob](amazon_forecast/apis/predictor_backtest_export_job.py)

<details>
<summary><code>def create_predictor_backtest_export_job(x_amz_target: XAmzTargetAmazonForecastServicePredictorBacktestExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports backtest forecasts and accuracy metrics generated by the CreateAutoPredictor or CreatePredictor operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket. The export file names will match the following conventions: __.csv The component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribePredictorBacktestExportJob operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.predictor_backtest_export_job.create_predictor_backtest_export_job(
        XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi.AMAZON_FORECAST_CREATE_PREDICTOR_BACKTEST_EXPORT_JOB,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePredictorBacktestExportJobErrorBody
```

**Async**

```python
try:
    await async_client.predictor_backtest_export_job.create_predictor_backtest_export_job(
        XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi.AMAZON_FORECAST_CREATE_PREDICTOR_BACKTEST_EXPORT_JOB,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePredictorBacktestExportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServicePredictorBacktestExportJobApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_predictor_backtest_export_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreatePredictorBacktestExportJobErrorBody](amazon_forecast/errors/create_predictor_backtest_export_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_predictor_backtest_export_job(x_amz_target: XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a predictor backtest export job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.predictor_backtest_export_job.delete_predictor_backtest_export_job(
        XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi.AMAZON_FORECAST_DELETE_PREDICTOR_BACKTEST_EXPORT_JOB,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePredictorBacktestExportJobErrorBody
```

**Async**

```python
try:
    await async_client.predictor_backtest_export_job.delete_predictor_backtest_export_job(
        XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi.AMAZON_FORECAST_DELETE_PREDICTOR_BACKTEST_EXPORT_JOB,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePredictorBacktestExportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_predictor_backtest_export_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeletePredictorBacktestExportJobErrorBody](amazon_forecast/errors/delete_predictor_backtest_export_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_predictor_backtest_export_job(x_amz_target: XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a predictor backtest export job created using the CreatePredictorBacktestExportJob operation. In addition to listing the properties provided by the user in the CreatePredictorBacktestExportJob request, this operation lists the following properties: CreationTime LastModificationTime Status Message (if an error occurred)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.predictor_backtest_export_job.describe_predictor_backtest_export_job(
        XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi.AMAZON_FORECAST_DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribePredictorBacktestExportJobErrorBody
```

**Async**

```python
try:
    await async_client.predictor_backtest_export_job.describe_predictor_backtest_export_job(
        XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi.AMAZON_FORECAST_DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribePredictorBacktestExportJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_predictor_backtest_export_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribePredictorBacktestExportJobErrorBody](amazon_forecast/errors/describe_predictor_backtest_export_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_predictor_backtest_export_jobs(x_amz_target: XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of predictor backtest export jobs created using the CreatePredictorBacktestExportJob operation. This operation returns a summary for each backtest export job. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular backtest export job, use the ARN with the DescribePredictorBacktestExportJob operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.predictor_backtest_export_job.list_predictor_backtest_export_jobs(
        XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi.AMAZON_FORECAST_LIST_PREDICTOR_BACKTEST_EXPORT_JOBS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPredictorBacktestExportJobsErrorBody
```

**Async**

```python
try:
    await async_client.predictor_backtest_export_job.list_predictor_backtest_export_jobs(
        XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi.AMAZON_FORECAST_LIST_PREDICTOR_BACKTEST_EXPORT_JOBS,
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPredictorBacktestExportJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_predictor_backtest_export_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListPredictorBacktestExportJobsErrorBody](amazon_forecast/errors/list_predictor_backtest_export_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Predictors

> Source: [Predictors](amazon_forecast/apis/predictors.py)

<details>
<summary><code>def create_predictor(x_amz_target: XAmzTargetAmazonForecastServicePredictorsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor. Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.predictors.create_predictor(XAmzTargetAmazonForecastServicePredictorsApi.AMAZON_FORECAST_CREATE_PREDICTOR)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePredictorErrorBody
```

**Async**

```python
try:
    await async_client.predictors.create_predictor(
        XAmzTargetAmazonForecastServicePredictorsApi.AMAZON_FORECAST_CREATE_PREDICTOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePredictorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServicePredictorsApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_predictors_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreatePredictorErrorBody](amazon_forecast/errors/create_predictor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_predictor(x_amz_target: XAmzTarget1AmazonForecastServicePredictorsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.predictors.delete_predictor(XAmzTarget1AmazonForecastServicePredictorsApi.AMAZON_FORECAST_DELETE_PREDICTOR)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePredictorErrorBody
```

**Async**

```python
try:
    await async_client.predictors.delete_predictor(
        XAmzTarget1AmazonForecastServicePredictorsApi.AMAZON_FORECAST_DELETE_PREDICTOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePredictorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServicePredictorsApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_predictors_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeletePredictorErrorBody](amazon_forecast/errors/delete_predictor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_predictor(x_amz_target: XAmzTarget2AmazonForecastServicePredictorsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation. In addition to listing the properties provided in the CreatePredictor request, this operation lists the following properties: DatasetImportJobArns - The dataset import jobs used to import training data. AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.predictors.describe_predictor(
        XAmzTarget2AmazonForecastServicePredictorsApi.AMAZON_FORECAST_DESCRIBE_PREDICTOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribePredictorErrorBody
```

**Async**

```python
try:
    await async_client.predictors.describe_predictor(
        XAmzTarget2AmazonForecastServicePredictorsApi.AMAZON_FORECAST_DESCRIBE_PREDICTOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribePredictorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServicePredictorsApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_predictors_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribePredictorErrorBody](amazon_forecast/errors/describe_predictor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_predictors(x_amz_target: XAmzTarget3AmazonForecastServicePredictorsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor operations. You can filter the list using an array of Filter objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.predictors.list_predictors(XAmzTarget3AmazonForecastServicePredictorsApi.AMAZON_FORECAST_LIST_PREDICTORS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPredictorsErrorBody
```

**Async**

```python
try:
    await async_client.predictors.list_predictors(
        XAmzTarget3AmazonForecastServicePredictorsApi.AMAZON_FORECAST_LIST_PREDICTORS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPredictorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServicePredictorsApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_predictors_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListPredictorsErrorBody](amazon_forecast/errors/list_predictors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Resource

> Source: [Resource](amazon_forecast/apis/resource.py)

<details>
<summary><code>def stop_resource(x_amz_target: XAmzTargetAmazonForecastServiceResourceApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a resource. The resource undergoes the following states: CREATE_STOPPING and CREATE_STOPPED. You cannot resume a resource once it has been stopped. This operation can be applied to the following resources (and their corresponding child resources): Dataset Import Job Predictor Job Forecast Job Forecast Export Job Predictor Backtest Export Job Explainability Job Explainability Export Job

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resource.stop_resource(XAmzTargetAmazonForecastServiceResourceApi.AMAZON_FORECAST_STOP_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopResourceErrorBody
```

**Async**

```python
try:
    await async_client.resource.stop_resource(XAmzTargetAmazonForecastServiceResourceApi.AMAZON_FORECAST_STOP_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceResourceApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_resource_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[StopResourceErrorBody](amazon_forecast/errors/stop_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resource.tag_resource(XAmzTarget1AmazonForecastServiceResourceApi.AMAZON_FORECAST_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

**Async**

```python
try:
    await async_client.resource.tag_resource(XAmzTarget1AmazonForecastServiceResourceApi.AMAZON_FORECAST_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceResourceApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_resource_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[TagResourceErrorBody](amazon_forecast/errors/tag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(x_amz_target: XAmzTarget2AmazonForecastServiceResourceApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified tags from a resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resource.untag_resource(XAmzTarget2AmazonForecastServiceResourceApi.AMAZON_FORECAST_UNTAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

**Async**

```python
try:
    await async_client.resource.untag_resource(
        XAmzTarget2AmazonForecastServiceResourceApi.AMAZON_FORECAST_UNTAG_RESOURCE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceResourceApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_resource_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[UntagResourceErrorBody](amazon_forecast/errors/untag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](amazon_forecast/apis/tags.py)

<details>
<summary><code>def list_tags_for_resource(x_amz_target: XAmzTargetAmazonForecastServiceTagsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags for an Amazon Forecast resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.tags.list_tags_for_resource(XAmzTargetAmazonForecastServiceTagsApi.AMAZON_FORECAST_LIST_TAGS_FOR_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

**Async**

```python
try:
    await async_client.tags.list_tags_for_resource(
        XAmzTargetAmazonForecastServiceTagsApi.AMAZON_FORECAST_LIST_TAGS_FOR_RESOURCE
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
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceTagsApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_tags_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListTagsForResourceErrorBody](amazon_forecast/errors/list_tags_for_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource2(x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.tags.tag_resource2(XAmzTarget1AmazonForecastServiceResourceApi.AMAZON_FORECAST_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResource2ErrorBody
```

**Async**

```python
try:
    await async_client.tags.tag_resource2(XAmzTarget1AmazonForecastServiceResourceApi.AMAZON_FORECAST_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResource2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceResourceApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_resource_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[TagResource2ErrorBody](amazon_forecast/errors/tag_resource2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfAnalysis

> Source: [WhatIfAnalysis](amazon_forecast/apis/what_if_analysis.py)

<details>
<summary><code>def create_what_if_analysis(x_amz_target: XAmzTargetAmazonForecastServiceWhatIfAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series. For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals. You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other. Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For inst

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_analysis.create_what_if_analysis(
        XAmzTargetAmazonForecastServiceWhatIfAnalysisApi.AMAZON_FORECAST_CREATE_WHAT_IF_ANALYSIS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWhatIfAnalysisErrorBody
```

**Async**

```python
try:
    await async_client.what_if_analysis.create_what_if_analysis(
        XAmzTargetAmazonForecastServiceWhatIfAnalysisApi.AMAZON_FORECAST_CREATE_WHAT_IF_ANALYSIS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWhatIfAnalysisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceWhatIfAnalysisApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_what_if_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateWhatIfAnalysisErrorBody](amazon_forecast/errors/create_what_if_analysis_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_what_if_analysis(x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a what-if analysis created using the CreateWhatIfAnalysis operation. You can delete only what-if analyses that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfAnalysis operation. You can't delete a what-if analysis while any of its forecasts are being exported.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_analysis.delete_what_if_analysis(
        XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi.AMAZON_FORECAST_DELETE_WHAT_IF_ANALYSIS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWhatIfAnalysisErrorBody
```

**Async**

```python
try:
    await async_client.what_if_analysis.delete_what_if_analysis(
        XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi.AMAZON_FORECAST_DELETE_WHAT_IF_ANALYSIS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWhatIfAnalysisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceWhatIfAnalysisApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_what_if_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteWhatIfAnalysisErrorBody](amazon_forecast/errors/delete_what_if_analysis_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_what_if_analysis(x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the what-if analysis created using the CreateWhatIfAnalysis operation. In addition to listing the properties provided in the CreateWhatIfAnalysis request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_analysis.describe_what_if_analysis(
        XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi.AMAZON_FORECAST_DESCRIBE_WHAT_IF_ANALYSIS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeWhatIfAnalysisErrorBody
```

**Async**

```python
try:
    await async_client.what_if_analysis.describe_what_if_analysis(
        XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi.AMAZON_FORECAST_DESCRIBE_WHAT_IF_ANALYSIS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeWhatIfAnalysisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceWhatIfAnalysisApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_what_if_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeWhatIfAnalysisErrorBody](amazon_forecast/errors/describe_what_if_analysis_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfForecast

> Source: [WhatIfForecast](amazon_forecast/apis/what_if_forecast.py)

<details>
<summary><code>def create_what_if_forecast(x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_forecast.create_what_if_forecast(
        XAmzTargetAmazonForecastServiceWhatIfForecastApi.AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWhatIfForecastErrorBody
```

**Async**

```python
try:
    await async_client.what_if_forecast.create_what_if_forecast(
        XAmzTargetAmazonForecastServiceWhatIfForecastApi.AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWhatIfForecastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_what_if_forecast_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateWhatIfForecastErrorBody](amazon_forecast/errors/create_what_if_forecast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_what_if_forecast(x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_forecast.delete_what_if_forecast(
        XAmzTarget1AmazonForecastServiceWhatIfForecastApi.AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWhatIfForecastErrorBody
```

**Async**

```python
try:
    await async_client.what_if_forecast.delete_what_if_forecast(
        XAmzTarget1AmazonForecastServiceWhatIfForecastApi.AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWhatIfForecastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_what_if_forecast_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteWhatIfForecastErrorBody](amazon_forecast/errors/delete_what_if_forecast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_what_if_forecast(x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the properties provided in the CreateWhatIfForecast request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_forecast.describe_what_if_forecast(
        XAmzTarget2AmazonForecastServiceWhatIfForecastApi.AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeWhatIfForecastErrorBody
```

**Async**

```python
try:
    await async_client.what_if_forecast.describe_what_if_forecast(
        XAmzTarget2AmazonForecastServiceWhatIfForecastApi.AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeWhatIfForecastErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_what_if_forecast_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeWhatIfForecastErrorBody](amazon_forecast/errors/describe_what_if_forecast_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_what_if_forecasts(x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_forecast.list_what_if_forecasts(
        XAmzTarget3AmazonForecastServiceWhatIfForecastApi.AMAZON_FORECAST_LIST_WHAT_IF_FORECASTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWhatIfForecastsErrorBody
```

**Async**

```python
try:
    await async_client.what_if_forecast.list_what_if_forecasts(
        XAmzTarget3AmazonForecastServiceWhatIfForecastApi.AMAZON_FORECAST_LIST_WHAT_IF_FORECASTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWhatIfForecastsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_what_if_forecast_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListWhatIfForecastsErrorBody](amazon_forecast/errors/list_what_if_forecasts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfForecastExport

> Source: [WhatIfForecastExport](amazon_forecast/apis/what_if_forecast_export.py)

<details>
<summary><code>def create_what_if_forecast_export(x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions: ≈__ The component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeWhatIfForecastExport operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_forecast_export.create_what_if_forecast_export(
        XAmzTargetAmazonForecastServiceWhatIfForecastExportApi.AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWhatIfForecastExportErrorBody
```

**Async**

```python
try:
    await async_client.what_if_forecast_export.create_what_if_forecast_export(
        XAmzTargetAmazonForecastServiceWhatIfForecastExportApi.AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWhatIfForecastExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr](amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_what_if_forecast_export_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[CreateWhatIfForecastExportErrorBody](amazon_forecast/errors/create_what_if_forecast_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_what_if_forecast_export(x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecastExport operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_forecast_export.delete_what_if_forecast_export(
        XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi.AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWhatIfForecastExportErrorBody
```

**Async**

```python
try:
    await async_client.what_if_forecast_export.delete_what_if_forecast_export(
        XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi.AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWhatIfForecastExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr](amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_what_if_forecast_export_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DeleteWhatIfForecastExportErrorBody](amazon_forecast/errors/delete_what_if_forecast_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 409 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_what_if_forecast_export(x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the what-if forecast export created using the CreateWhatIfForecastExport operation. In addition to listing the properties provided in the CreateWhatIfForecastExport request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_forecast_export.describe_what_if_forecast_export(
        XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi.AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeWhatIfForecastExportErrorBody
```

**Async**

```python
try:
    await async_client.what_if_forecast_export.describe_what_if_forecast_export(
        XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi.AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST_EXPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeWhatIfForecastExportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr](amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_what_if_forecast_export_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[DescribeWhatIfForecastExportErrorBody](amazon_forecast/errors/describe_what_if_forecast_export_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_what_if_forecast_exports(x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the DescribeWhatIfForecastExport operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.what_if_forecast_export.list_what_if_forecast_exports(
        XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi.AMAZON_FORECAST_LIST_WHAT_IF_FORECAST_EXPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWhatIfForecastExportsErrorBody
```

**Async**

```python
try:
    await async_client.what_if_forecast_export.list_what_if_forecast_exports(
        XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi.AMAZON_FORECAST_LIST_WHAT_IF_FORECAST_EXPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWhatIfForecastExportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr](amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_what_if_forecast_export_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_forecast/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_forecast/core/exceptions.py)&#91;[ListWhatIfForecastExportsErrorBody](amazon_forecast/errors/list_what_if_forecast_exports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](amazon_forecast/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_forecast/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

