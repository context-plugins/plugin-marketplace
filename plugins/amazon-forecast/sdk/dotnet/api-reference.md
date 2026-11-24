# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonForecastClient](src/AmazonForecast/AmazonForecastClient.cs)

## DatasetGroups

> Source: [DatasetGroups](src/AmazonForecast/Api/DatasetGroups.cs)

<details>
<summary><code>Task CreateDatasetGroup(CreateDatasetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetGroups.CreateDatasetGroup(new CreateDatasetGroupOperationRequest
    {
        XAmzTarget = XAmzTarget.AmazonForecastCreateDatasetGroup,
    });
}
catch (ApiException<CreateDatasetGroupError> ex)
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

<code>[CreateDatasetGroupOperationRequest](src/AmazonForecast/Requests/DatasetGroups/CreateDatasetGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateDatasetGroupError](src/AmazonForecast/Errors/CreateDatasetGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDatasetGroup(DeleteDatasetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetGroups.DeleteDatasetGroup(new DeleteDatasetGroupOperationRequest
    {
        XAmzTarget = XAmzTarget1.AmazonForecastDeleteDatasetGroup,
    });
}
catch (ApiException<DeleteDatasetGroupError> ex)
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

<code>[DeleteDatasetGroupOperationRequest](src/AmazonForecast/Requests/DatasetGroups/DeleteDatasetGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteDatasetGroupError](src/AmazonForecast/Errors/DeleteDatasetGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDatasetGroup(DescribeDatasetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetGroups.DescribeDatasetGroup(new DescribeDatasetGroupOperationRequest
    {
        XAmzTarget = XAmzTarget2.AmazonForecastDescribeDatasetGroup,
    });
}
catch (ApiException<DescribeDatasetGroupError> ex)
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

<code>[DescribeDatasetGroupOperationRequest](src/AmazonForecast/Requests/DatasetGroups/DescribeDatasetGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeDatasetGroupError](src/AmazonForecast/Errors/DescribeDatasetGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDatasetGroups(ListDatasetGroupsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetGroups.ListDatasetGroups(new ListDatasetGroupsOperationRequest
    {
        XAmzTarget = XAmzTarget3.AmazonForecastListDatasetGroups,
    });
}
catch (ApiException<ListDatasetGroupsError> ex)
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

<code>[ListDatasetGroupsOperationRequest](src/AmazonForecast/Requests/DatasetGroups/ListDatasetGroupsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListDatasetGroupsError](src/AmazonForecast/Errors/ListDatasetGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateDatasetGroup(UpdateDatasetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetGroups.UpdateDatasetGroup(new UpdateDatasetGroupOperationRequest
    {
        XAmzTarget = XAmzTarget4.AmazonForecastUpdateDatasetGroup,
    });
}
catch (ApiException<UpdateDatasetGroupError> ex)
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

<code>[UpdateDatasetGroupOperationRequest](src/AmazonForecast/Requests/DatasetGroups/UpdateDatasetGroupOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[UpdateDatasetGroupError](src/AmazonForecast/Errors/UpdateDatasetGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatasetImportJob

> Source: [DatasetImportJob](src/AmazonForecast/Api/DatasetImportJob.cs)

<details>
<summary><code>Task CreateDatasetImportJob(CreateDatasetImportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetImportJob.CreateDatasetImportJob(new CreateDatasetImportJobOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceDatasetImportJobApi.AmazonForecastCreateDatasetImportJob,
    });
}
catch (ApiException<CreateDatasetImportJobError> ex)
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

<code>[CreateDatasetImportJobOperationRequest](src/AmazonForecast/Requests/DatasetImportJob/CreateDatasetImportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateDatasetImportJobError](src/AmazonForecast/Errors/CreateDatasetImportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDatasetImportJob(DeleteDatasetImportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetImportJob.DeleteDatasetImportJob(new DeleteDatasetImportJobOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceDatasetImportJobApi.AmazonForecastDeleteDatasetImportJob,
    });
}
catch (ApiException<DeleteDatasetImportJobError> ex)
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

<code>[DeleteDatasetImportJobOperationRequest](src/AmazonForecast/Requests/DatasetImportJob/DeleteDatasetImportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteDatasetImportJobError](src/AmazonForecast/Errors/DeleteDatasetImportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDatasetImportJob(DescribeDatasetImportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetImportJob.DescribeDatasetImportJob(new DescribeDatasetImportJobOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceDatasetImportJobApi.AmazonForecastDescribeDatasetImportJob,
    });
}
catch (ApiException<DescribeDatasetImportJobError> ex)
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

<code>[DescribeDatasetImportJobOperationRequest](src/AmazonForecast/Requests/DatasetImportJob/DescribeDatasetImportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeDatasetImportJobError](src/AmazonForecast/Errors/DescribeDatasetImportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDatasetImportJobs(ListDatasetImportJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.DatasetImportJob.ListDatasetImportJobs(new ListDatasetImportJobsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceDatasetImportJobApi.AmazonForecastListDatasetImportJobs,
    });
}
catch (ApiException<ListDatasetImportJobsError> ex)
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

<code>[ListDatasetImportJobsOperationRequest](src/AmazonForecast/Requests/DatasetImportJob/ListDatasetImportJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListDatasetImportJobsError](src/AmazonForecast/Errors/ListDatasetImportJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Datasets

> Source: [Datasets](src/AmazonForecast/Api/Datasets.cs)

<details>
<summary><code>Task CreateDataset(CreateDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Datasets.CreateDataset(new CreateDatasetOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceDatasetsApi.AmazonForecastCreateDataset,
    });
}
catch (ApiException<CreateDatasetError> ex)
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

<code>[CreateDatasetOperationRequest](src/AmazonForecast/Requests/Datasets/CreateDatasetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateDatasetError](src/AmazonForecast/Errors/CreateDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDataset(DeleteDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Datasets.DeleteDataset(new DeleteDatasetOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceDatasetsApi.AmazonForecastDeleteDataset,
    });
}
catch (ApiException<DeleteDatasetError> ex)
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

<code>[DeleteDatasetOperationRequest](src/AmazonForecast/Requests/Datasets/DeleteDatasetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteDatasetError](src/AmazonForecast/Errors/DeleteDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDataset(DescribeDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Datasets.DescribeDataset(new DescribeDatasetOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceDatasetsApi.AmazonForecastDescribeDataset,
    });
}
catch (ApiException<DescribeDatasetError> ex)
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

<code>[DescribeDatasetOperationRequest](src/AmazonForecast/Requests/Datasets/DescribeDatasetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeDatasetError](src/AmazonForecast/Errors/DescribeDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDatasets(ListDatasetsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Datasets.ListDatasets(new ListDatasetsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceDatasetsApi.AmazonForecastListDatasets,
    });
}
catch (ApiException<ListDatasetsError> ex)
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

<code>[ListDatasetsOperationRequest](src/AmazonForecast/Requests/Datasets/ListDatasetsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListDatasetsError](src/AmazonForecast/Errors/ListDatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Explainability

> Source: [Explainability](src/AmazonForecast/Api/Explainability.cs)

<details>
<summary><code>Task CreateExplainability(CreateExplainabilityOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Explainability.CreateExplainability(new CreateExplainabilityOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceExplainabilityApi.AmazonForecastCreateExplainability,
    });
}
catch (ApiException<CreateExplainabilityError> ex)
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

<code>[CreateExplainabilityOperationRequest](src/AmazonForecast/Requests/Explainability/CreateExplainabilityOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateExplainabilityError](src/AmazonForecast/Errors/CreateExplainabilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteExplainability(DeleteExplainabilityOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Explainability.DeleteExplainability(new DeleteExplainabilityOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceExplainabilityApi.AmazonForecastDeleteExplainability,
    });
}
catch (ApiException<DeleteExplainabilityError> ex)
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

<code>[DeleteExplainabilityOperationRequest](src/AmazonForecast/Requests/Explainability/DeleteExplainabilityOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteExplainabilityError](src/AmazonForecast/Errors/DeleteExplainabilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeExplainability(DescribeExplainabilityOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Explainability.DescribeExplainability(new DescribeExplainabilityOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceExplainabilityApi.AmazonForecastDescribeExplainability,
    });
}
catch (ApiException<DescribeExplainabilityError> ex)
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

<code>[DescribeExplainabilityOperationRequest](src/AmazonForecast/Requests/Explainability/DescribeExplainabilityOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeExplainabilityError](src/AmazonForecast/Errors/DescribeExplainabilityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListExplainabilities(ListExplainabilitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Explainability.ListExplainabilities(new ListExplainabilitiesOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceExplainabilityApi.AmazonForecastListExplainabilities,
    });
}
catch (ApiException<ListExplainabilitiesError> ex)
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

<code>[ListExplainabilitiesOperationRequest](src/AmazonForecast/Requests/Explainability/ListExplainabilitiesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListExplainabilitiesError](src/AmazonForecast/Errors/ListExplainabilitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExplainabilityExport

> Source: [ExplainabilityExport](src/AmazonForecast/Api/ExplainabilityExport.cs)

<details>
<summary><code>Task CreateExplainabilityExport(CreateExplainabilityExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ExplainabilityExport.CreateExplainabilityExport(new CreateExplainabilityExportOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceExplainabilityExportApi.AmazonForecastCreateExplainabilityExport,
    });
}
catch (ApiException<CreateExplainabilityExportError> ex)
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

<code>[CreateExplainabilityExportOperationRequest](src/AmazonForecast/Requests/ExplainabilityExport/CreateExplainabilityExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateExplainabilityExportError](src/AmazonForecast/Errors/CreateExplainabilityExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteExplainabilityExport(DeleteExplainabilityExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ExplainabilityExport.DeleteExplainabilityExport(new DeleteExplainabilityExportOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceExplainabilityExportApi.AmazonForecastDeleteExplainabilityExport,
    });
}
catch (ApiException<DeleteExplainabilityExportError> ex)
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

<code>[DeleteExplainabilityExportOperationRequest](src/AmazonForecast/Requests/ExplainabilityExport/DeleteExplainabilityExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteExplainabilityExportError](src/AmazonForecast/Errors/DeleteExplainabilityExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeExplainabilityExport(DescribeExplainabilityExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ExplainabilityExport.DescribeExplainabilityExport(new DescribeExplainabilityExportOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceExplainabilityExportApi.AmazonForecastDescribeExplainabilityExport,
    });
}
catch (ApiException<DescribeExplainabilityExportError> ex)
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

<code>[DescribeExplainabilityExportOperationRequest](src/AmazonForecast/Requests/ExplainabilityExport/DescribeExplainabilityExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeExplainabilityExportError](src/AmazonForecast/Errors/DescribeExplainabilityExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListExplainabilityExports(ListExplainabilityExportsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ExplainabilityExport.ListExplainabilityExports(new ListExplainabilityExportsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceExplainabilityExportApi.AmazonForecastListExplainabilityExports,
    });
}
catch (ApiException<ListExplainabilityExportsError> ex)
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

<code>[ListExplainabilityExportsOperationRequest](src/AmazonForecast/Requests/ExplainabilityExport/ListExplainabilityExportsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListExplainabilityExportsError](src/AmazonForecast/Errors/ListExplainabilityExportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExportJobs

> Source: [ExportJobs](src/AmazonForecast/Api/ExportJobs.cs)

<details>
<summary><code>Task CreateForecastExportJob(CreateForecastExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ExportJobs.CreateForecastExportJob(new CreateForecastExportJobOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceExportJobsApi.AmazonForecastCreateForecastExportJob,
    });
}
catch (ApiException<CreateForecastExportJobError> ex)
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

<code>[CreateForecastExportJobOperationRequest](src/AmazonForecast/Requests/ExportJobs/CreateForecastExportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateForecastExportJobError](src/AmazonForecast/Errors/CreateForecastExportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ForecastExportJob

> Source: [ForecastExportJob](src/AmazonForecast/Api/ForecastExportJob.cs)

<details>
<summary><code>Task CreateForecastExportJob2(CreateForecastExportJob2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ForecastExportJob.CreateForecastExportJob2(new CreateForecastExportJob2Request
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceExportJobsApi.AmazonForecastCreateForecastExportJob,
    });
}
catch (ApiException<CreateForecastExportJob2Error> ex)
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

<code>[CreateForecastExportJob2Request](src/AmazonForecast/Requests/ForecastExportJob/CreateForecastExportJob2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateForecastExportJob2Error](src/AmazonForecast/Errors/CreateForecastExportJob2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteForecastExportJob(DeleteForecastExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ForecastExportJob.DeleteForecastExportJob(new DeleteForecastExportJobOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceForecastExportJobApi.AmazonForecastDeleteForecastExportJob,
    });
}
catch (ApiException<DeleteForecastExportJobError> ex)
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

<code>[DeleteForecastExportJobOperationRequest](src/AmazonForecast/Requests/ForecastExportJob/DeleteForecastExportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteForecastExportJobError](src/AmazonForecast/Errors/DeleteForecastExportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeForecastExportJob(DescribeForecastExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ForecastExportJob.DescribeForecastExportJob(new DescribeForecastExportJobOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceForecastExportJobApi.AmazonForecastDescribeForecastExportJob,
    });
}
catch (ApiException<DescribeForecastExportJobError> ex)
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

<code>[DescribeForecastExportJobOperationRequest](src/AmazonForecast/Requests/ForecastExportJob/DescribeForecastExportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeForecastExportJobError](src/AmazonForecast/Errors/DescribeForecastExportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListForecastExportJobs(ListForecastExportJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ForecastExportJob.ListForecastExportJobs(new ListForecastExportJobsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceForecastExportJobApi.AmazonForecastListForecastExportJobs,
    });
}
catch (ApiException<ListForecastExportJobsError> ex)
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

<code>[ListForecastExportJobsOperationRequest](src/AmazonForecast/Requests/ForecastExportJob/ListForecastExportJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListForecastExportJobsError](src/AmazonForecast/Errors/ListForecastExportJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Forecasts

> Source: [Forecasts](src/AmazonForecast/Api/Forecasts.cs)

<details>
<summary><code>Task CreateForecast(CreateForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Forecasts.CreateForecast(new CreateForecastOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceForecastsApi.AmazonForecastCreateForecast,
    });
}
catch (ApiException<CreateForecastError> ex)
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

<code>[CreateForecastOperationRequest](src/AmazonForecast/Requests/Forecasts/CreateForecastOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateForecastError](src/AmazonForecast/Errors/CreateForecastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteForecast(DeleteForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Forecasts.DeleteForecast(new DeleteForecastOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceForecastsApi.AmazonForecastDeleteForecast,
    });
}
catch (ApiException<DeleteForecastError> ex)
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

<code>[DeleteForecastOperationRequest](src/AmazonForecast/Requests/Forecasts/DeleteForecastOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteForecastError](src/AmazonForecast/Errors/DeleteForecastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeForecast(DescribeForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Forecasts.DescribeForecast(new DescribeForecastOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceForecastsApi.AmazonForecastDescribeForecast,
    });
}
catch (ApiException<DescribeForecastError> ex)
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

<code>[DescribeForecastOperationRequest](src/AmazonForecast/Requests/Forecasts/DescribeForecastOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeForecastError](src/AmazonForecast/Errors/DescribeForecastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListForecasts(ListForecastsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Forecasts.ListForecasts(new ListForecastsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceForecastsApi.AmazonForecastListForecasts,
    });
}
catch (ApiException<ListForecastsError> ex)
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

<code>[ListForecastsOperationRequest](src/AmazonForecast/Requests/Forecasts/ListForecastsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListForecastsError](src/AmazonForecast/Errors/ListForecastsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MonitorApi

> Source: [MonitorApi](src/AmazonForecast/Api/MonitorApi.cs)

<details>
<summary><code>Task CreateMonitor(CreateMonitorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.MonitorApi.CreateMonitor(new CreateMonitorOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceMonitorApi.AmazonForecastCreateMonitor,
    });
}
catch (ApiException<CreateMonitorError> ex)
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

<code>[CreateMonitorOperationRequest](src/AmazonForecast/Requests/MonitorApi/CreateMonitorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateMonitorError](src/AmazonForecast/Errors/CreateMonitorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMonitor(DeleteMonitorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.MonitorApi.DeleteMonitor(new DeleteMonitorOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceMonitorApi.AmazonForecastDeleteMonitor,
    });
}
catch (ApiException<DeleteMonitorError> ex)
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

<code>[DeleteMonitorOperationRequest](src/AmazonForecast/Requests/MonitorApi/DeleteMonitorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteMonitorError](src/AmazonForecast/Errors/DeleteMonitorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeMonitor(DescribeMonitorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.MonitorApi.DescribeMonitor(new DescribeMonitorOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceMonitorApi.AmazonForecastDescribeMonitor,
    });
}
catch (ApiException<DescribeMonitorError> ex)
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

<code>[DescribeMonitorOperationRequest](src/AmazonForecast/Requests/MonitorApi/DescribeMonitorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeMonitorError](src/AmazonForecast/Errors/DescribeMonitorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListMonitors(ListMonitorsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.MonitorApi.ListMonitors(new ListMonitorsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceMonitorApi.AmazonForecastListMonitors,
    });
}
catch (ApiException<ListMonitorsError> ex)
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

<code>[ListMonitorsOperationRequest](src/AmazonForecast/Requests/MonitorApi/ListMonitorsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListMonitorsError](src/AmazonForecast/Errors/ListMonitorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AmazonForecast/Api/Operations.cs)

<details>
<summary><code>Task CreateAutoPredictor(CreateAutoPredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.CreateAutoPredictor(new CreateAutoPredictorOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceOperationsApi.AmazonForecastCreateAutoPredictor,
    });
}
catch (ApiException<CreateAutoPredictorError> ex)
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

<code>[CreateAutoPredictorOperationRequest](src/AmazonForecast/Requests/Operations/CreateAutoPredictorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateAutoPredictorError](src/AmazonForecast/Errors/CreateAutoPredictorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteResourceTree(DeleteResourceTreeOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DeleteResourceTree(new DeleteResourceTreeOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceOperationsApi.AmazonForecastDeleteResourceTree,
    });
}
catch (ApiException<DeleteResourceTreeError> ex)
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

<code>[DeleteResourceTreeOperationRequest](src/AmazonForecast/Requests/Operations/DeleteResourceTreeOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteResourceTreeError](src/AmazonForecast/Errors/DeleteResourceTreeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeAutoPredictor(DescribeAutoPredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DescribeAutoPredictor(new DescribeAutoPredictorOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceOperationsApi.AmazonForecastDescribeAutoPredictor,
    });
}
catch (ApiException<DescribeAutoPredictorError> ex)
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

<code>[DescribeAutoPredictorOperationRequest](src/AmazonForecast/Requests/Operations/DescribeAutoPredictorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeAutoPredictorError](src/AmazonForecast/Errors/DescribeAutoPredictorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetAccuracyMetrics(GetAccuracyMetricsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.GetAccuracyMetrics(new GetAccuracyMetricsOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonForecastServiceOperationsApi.AmazonForecastGetAccuracyMetrics,
    });
}
catch (ApiException<GetAccuracyMetricsError> ex)
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

<code>[GetAccuracyMetricsOperationRequest](src/AmazonForecast/Requests/Operations/GetAccuracyMetricsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[GetAccuracyMetricsError](src/AmazonForecast/Errors/GetAccuracyMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListMonitorEvaluations(ListMonitorEvaluationsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ListMonitorEvaluations(new ListMonitorEvaluationsOperationRequest
    {
        XAmzTarget = XAmzTarget5.AmazonForecastListMonitorEvaluations,
    });
}
catch (ApiException<ListMonitorEvaluationsError> ex)
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

<code>[ListMonitorEvaluationsOperationRequest](src/AmazonForecast/Requests/Operations/ListMonitorEvaluationsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListMonitorEvaluationsError](src/AmazonForecast/Errors/ListMonitorEvaluationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListWhatIfAnalyses(ListWhatIfAnalysesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ListWhatIfAnalyses(new ListWhatIfAnalysesOperationRequest
    {
        XAmzTarget = XAmzTarget6.AmazonForecastListWhatIfAnalyses,
    });
}
catch (ApiException<ListWhatIfAnalysesError> ex)
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

<code>[ListWhatIfAnalysesOperationRequest](src/AmazonForecast/Requests/Operations/ListWhatIfAnalysesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListWhatIfAnalysesError](src/AmazonForecast/Errors/ListWhatIfAnalysesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ResumeResource(ResumeResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ResumeResource(new ResumeResourceOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceOperationsApi.AmazonForecastResumeResource,
    });
}
catch (ApiException<ResumeResourceError> ex)
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

<code>[ResumeResourceOperationRequest](src/AmazonForecast/Requests/Operations/ResumeResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ResumeResourceError](src/AmazonForecast/Errors/ResumeResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PredictorBacktestExportJob

> Source: [PredictorBacktestExportJob](src/AmazonForecast/Api/PredictorBacktestExportJob.cs)

<details>
<summary><code>Task CreatePredictorBacktestExportJob(CreatePredictorBacktestExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.PredictorBacktestExportJob.CreatePredictorBacktestExportJob(
        new CreatePredictorBacktestExportJobOperationRequest
        {
            XAmzTarget = XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastCreatePredictorBacktestExportJob,
        });
}
catch (ApiException<CreatePredictorBacktestExportJobError> ex)
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

<code>[CreatePredictorBacktestExportJobOperationRequest](src/AmazonForecast/Requests/PredictorBacktestExportJob/CreatePredictorBacktestExportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreatePredictorBacktestExportJobError](src/AmazonForecast/Errors/CreatePredictorBacktestExportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeletePredictorBacktestExportJob(DeletePredictorBacktestExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.PredictorBacktestExportJob.DeletePredictorBacktestExportJob(
        new DeletePredictorBacktestExportJobOperationRequest
        {
            XAmzTarget = XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastDeletePredictorBacktestExportJob,
        });
}
catch (ApiException<DeletePredictorBacktestExportJobError> ex)
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

<code>[DeletePredictorBacktestExportJobOperationRequest](src/AmazonForecast/Requests/PredictorBacktestExportJob/DeletePredictorBacktestExportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeletePredictorBacktestExportJobError](src/AmazonForecast/Errors/DeletePredictorBacktestExportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribePredictorBacktestExportJob(DescribePredictorBacktestExportJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.PredictorBacktestExportJob.DescribePredictorBacktestExportJob(
        new DescribePredictorBacktestExportJobOperationRequest
        {
            XAmzTarget = XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastDescribePredictorBacktestExportJob,
        });
}
catch (ApiException<DescribePredictorBacktestExportJobError> ex)
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

<code>[DescribePredictorBacktestExportJobOperationRequest](src/AmazonForecast/Requests/PredictorBacktestExportJob/DescribePredictorBacktestExportJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribePredictorBacktestExportJobError](src/AmazonForecast/Errors/DescribePredictorBacktestExportJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListPredictorBacktestExportJobs(ListPredictorBacktestExportJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.PredictorBacktestExportJob.ListPredictorBacktestExportJobs(
        new ListPredictorBacktestExportJobsOperationRequest
        {
            XAmzTarget = XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastListPredictorBacktestExportJobs,
        });
}
catch (ApiException<ListPredictorBacktestExportJobsError> ex)
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

<code>[ListPredictorBacktestExportJobsOperationRequest](src/AmazonForecast/Requests/PredictorBacktestExportJob/ListPredictorBacktestExportJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListPredictorBacktestExportJobsError](src/AmazonForecast/Errors/ListPredictorBacktestExportJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Predictors

> Source: [Predictors](src/AmazonForecast/Api/Predictors.cs)

<details>
<summary><code>Task CreatePredictor(CreatePredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Predictors.CreatePredictor(new CreatePredictorOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServicePredictorsApi.AmazonForecastCreatePredictor,
    });
}
catch (ApiException<CreatePredictorError> ex)
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

<code>[CreatePredictorOperationRequest](src/AmazonForecast/Requests/Predictors/CreatePredictorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreatePredictorError](src/AmazonForecast/Errors/CreatePredictorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeletePredictor(DeletePredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Predictors.DeletePredictor(new DeletePredictorOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServicePredictorsApi.AmazonForecastDeletePredictor,
    });
}
catch (ApiException<DeletePredictorError> ex)
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

<code>[DeletePredictorOperationRequest](src/AmazonForecast/Requests/Predictors/DeletePredictorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeletePredictorError](src/AmazonForecast/Errors/DeletePredictorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribePredictor(DescribePredictorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Predictors.DescribePredictor(new DescribePredictorOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServicePredictorsApi.AmazonForecastDescribePredictor,
    });
}
catch (ApiException<DescribePredictorError> ex)
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

<code>[DescribePredictorOperationRequest](src/AmazonForecast/Requests/Predictors/DescribePredictorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribePredictorError](src/AmazonForecast/Errors/DescribePredictorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListPredictors(ListPredictorsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Predictors.ListPredictors(new ListPredictorsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServicePredictorsApi.AmazonForecastListPredictors,
    });
}
catch (ApiException<ListPredictorsError> ex)
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

<code>[ListPredictorsOperationRequest](src/AmazonForecast/Requests/Predictors/ListPredictorsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListPredictorsError](src/AmazonForecast/Errors/ListPredictorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Resource

> Source: [Resource](src/AmazonForecast/Api/Resource.cs)

<details>
<summary><code>Task StopResource(StopResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Resource.StopResource(new StopResourceOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceResourceApi.AmazonForecastStopResource,
    });
}
catch (ApiException<StopResourceError> ex)
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

<code>[StopResourceOperationRequest](src/AmazonForecast/Requests/Resource/StopResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[StopResourceError](src/AmazonForecast/Errors/StopResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Resource.TagResource(new TagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceResourceApi.AmazonForecastTagResource,
    });
}
catch (ApiException<TagResourceError> ex)
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

<code>[TagResourceOperationRequest](src/AmazonForecast/Requests/Resource/TagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AmazonForecast/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Resource.UntagResource(new UntagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceResourceApi.AmazonForecastUntagResource,
    });
}
catch (ApiException<UntagResourceError> ex)
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

<code>[UntagResourceOperationRequest](src/AmazonForecast/Requests/Resource/UntagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AmazonForecast/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/AmazonForecast/Api/Tags.cs)

<details>
<summary><code>Task ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Tags.ListTagsForResource(new ListTagsForResourceOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceTagsApi.AmazonForecastListTagsForResource,
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

<code>[ListTagsForResourceOperationRequest](src/AmazonForecast/Requests/Tags/ListTagsForResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AmazonForecast/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TagResource2(TagResource2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Tags.TagResource2(new TagResource2Request
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceResourceApi.AmazonForecastTagResource,
    });
}
catch (ApiException<TagResource2Error> ex)
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

<code>[TagResource2Request](src/AmazonForecast/Requests/Tags/TagResource2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[TagResource2Error](src/AmazonForecast/Errors/TagResource2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfAnalysis

> Source: [WhatIfAnalysis](src/AmazonForecast/Api/WhatIfAnalysis.cs)

<details>
<summary><code>Task CreateWhatIfAnalysis(CreateWhatIfAnalysisOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfAnalysis.CreateWhatIfAnalysis(new CreateWhatIfAnalysisOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceWhatIfAnalysisApi.AmazonForecastCreateWhatIfAnalysis,
    });
}
catch (ApiException<CreateWhatIfAnalysisError> ex)
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

<code>[CreateWhatIfAnalysisOperationRequest](src/AmazonForecast/Requests/WhatIfAnalysis/CreateWhatIfAnalysisOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateWhatIfAnalysisError](src/AmazonForecast/Errors/CreateWhatIfAnalysisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWhatIfAnalysis(DeleteWhatIfAnalysisOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfAnalysis.DeleteWhatIfAnalysis(new DeleteWhatIfAnalysisOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi.AmazonForecastDeleteWhatIfAnalysis,
    });
}
catch (ApiException<DeleteWhatIfAnalysisError> ex)
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

<code>[DeleteWhatIfAnalysisOperationRequest](src/AmazonForecast/Requests/WhatIfAnalysis/DeleteWhatIfAnalysisOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteWhatIfAnalysisError](src/AmazonForecast/Errors/DeleteWhatIfAnalysisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeWhatIfAnalysis(DescribeWhatIfAnalysisOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfAnalysis.DescribeWhatIfAnalysis(new DescribeWhatIfAnalysisOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi.AmazonForecastDescribeWhatIfAnalysis,
    });
}
catch (ApiException<DescribeWhatIfAnalysisError> ex)
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

<code>[DescribeWhatIfAnalysisOperationRequest](src/AmazonForecast/Requests/WhatIfAnalysis/DescribeWhatIfAnalysisOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeWhatIfAnalysisError](src/AmazonForecast/Errors/DescribeWhatIfAnalysisError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfForecast

> Source: [WhatIfForecast](src/AmazonForecast/Api/WhatIfForecast.cs)

<details>
<summary><code>Task CreateWhatIfForecast(CreateWhatIfForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfForecast.CreateWhatIfForecast(new CreateWhatIfForecastOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceWhatIfForecastApi.AmazonForecastCreateWhatIfForecast,
    });
}
catch (ApiException<CreateWhatIfForecastError> ex)
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

<code>[CreateWhatIfForecastOperationRequest](src/AmazonForecast/Requests/WhatIfForecast/CreateWhatIfForecastOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateWhatIfForecastError](src/AmazonForecast/Errors/CreateWhatIfForecastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWhatIfForecast(DeleteWhatIfForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfForecast.DeleteWhatIfForecast(new DeleteWhatIfForecastOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceWhatIfForecastApi.AmazonForecastDeleteWhatIfForecast,
    });
}
catch (ApiException<DeleteWhatIfForecastError> ex)
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

<code>[DeleteWhatIfForecastOperationRequest](src/AmazonForecast/Requests/WhatIfForecast/DeleteWhatIfForecastOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteWhatIfForecastError](src/AmazonForecast/Errors/DeleteWhatIfForecastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeWhatIfForecast(DescribeWhatIfForecastOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfForecast.DescribeWhatIfForecast(new DescribeWhatIfForecastOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceWhatIfForecastApi.AmazonForecastDescribeWhatIfForecast,
    });
}
catch (ApiException<DescribeWhatIfForecastError> ex)
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

<code>[DescribeWhatIfForecastOperationRequest](src/AmazonForecast/Requests/WhatIfForecast/DescribeWhatIfForecastOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeWhatIfForecastError](src/AmazonForecast/Errors/DescribeWhatIfForecastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListWhatIfForecasts(ListWhatIfForecastsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfForecast.ListWhatIfForecasts(new ListWhatIfForecastsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceWhatIfForecastApi.AmazonForecastListWhatIfForecasts,
    });
}
catch (ApiException<ListWhatIfForecastsError> ex)
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

<code>[ListWhatIfForecastsOperationRequest](src/AmazonForecast/Requests/WhatIfForecast/ListWhatIfForecastsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListWhatIfForecastsError](src/AmazonForecast/Errors/ListWhatIfForecastsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfForecastExport

> Source: [WhatIfForecastExport](src/AmazonForecast/Api/WhatIfForecastExport.cs)

<details>
<summary><code>Task CreateWhatIfForecastExport(CreateWhatIfForecastExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfForecastExport.CreateWhatIfForecastExport(new CreateWhatIfForecastExportOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonForecastServiceWhatIfForecastExportApi.AmazonForecastCreateWhatIfForecastExport,
    });
}
catch (ApiException<CreateWhatIfForecastExportError> ex)
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

<code>[CreateWhatIfForecastExportOperationRequest](src/AmazonForecast/Requests/WhatIfForecastExport/CreateWhatIfForecastExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[CreateWhatIfForecastExportError](src/AmazonForecast/Errors/CreateWhatIfForecastExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWhatIfForecastExport(DeleteWhatIfForecastExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfForecastExport.DeleteWhatIfForecastExport(new DeleteWhatIfForecastExportOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastDeleteWhatIfForecastExport,
    });
}
catch (ApiException<DeleteWhatIfForecastExportError> ex)
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

<code>[DeleteWhatIfForecastExportOperationRequest](src/AmazonForecast/Requests/WhatIfForecastExport/DeleteWhatIfForecastExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DeleteWhatIfForecastExportError](src/AmazonForecast/Errors/DeleteWhatIfForecastExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeWhatIfForecastExport(DescribeWhatIfForecastExportOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfForecastExport.DescribeWhatIfForecastExport(new DescribeWhatIfForecastExportOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastDescribeWhatIfForecastExport,
    });
}
catch (ApiException<DescribeWhatIfForecastExportError> ex)
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

<code>[DescribeWhatIfForecastExportOperationRequest](src/AmazonForecast/Requests/WhatIfForecastExport/DescribeWhatIfForecastExportOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[DescribeWhatIfForecastExportError](src/AmazonForecast/Errors/DescribeWhatIfForecastExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListWhatIfForecastExports(ListWhatIfForecastExportsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WhatIfForecastExport.ListWhatIfForecastExports(new ListWhatIfForecastExportsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastListWhatIfForecastExports,
    });
}
catch (ApiException<ListWhatIfForecastExportsError> ex)
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

<code>[ListWhatIfForecastExportsOperationRequest](src/AmazonForecast/Requests/WhatIfForecastExport/ListWhatIfForecastExportsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonForecast/Core/Exceptions/ApiException.cs)&lt;[ListWhatIfForecastExportsError](src/AmazonForecast/Errors/ListWhatIfForecastExportsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

