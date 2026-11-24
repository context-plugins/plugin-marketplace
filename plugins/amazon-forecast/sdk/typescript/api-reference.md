# Reference

> Source: [AmazonForecastClient](src/client.ts)

## DatasetGroups

> Source: [DatasetGroups](src/resources/dataset-groups.ts)

<details>
<summary><code>createDatasetGroup(request: DatasetGroups.CreateDatasetGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetGroups.CreateDatasetGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the UpdateDatasetGroup operation. After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see Dataset groups. To get a list of all your datasets groups, use the ListDatasetGroups operation. The Status of a dataset group must be ACTIVE before you can use the dataset group to create a predictor. To get the status, use the DescribeDatasetGroup operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetGroups.createDatasetGroup({ xAmzTarget: XAmzTarget.AmazonForecastCreateDatasetGroup });
} catch (err) {
  // TODO: Handle 'err' of type DatasetGroups.CreateDatasetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetGroups
  .createDatasetGroup({ xAmzTarget: XAmzTarget.AmazonForecastCreateDatasetGroup })
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

**Direct**: `await client.datasetGroups.createDatasetGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetGroups.CreateDatasetGroupError](src/resources/dataset-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetGroups.createDatasetGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetGroups.CreateDatasetGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDatasetGroup(request: DatasetGroups.DeleteDatasetGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetGroups.DeleteDatasetGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete dataset groups that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the status, use the DescribeDatasetGroup operation. This operation deletes only the dataset group, not the datasets in the group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetGroups.deleteDatasetGroup({ xAmzTarget: XAmzTarget1.AmazonForecastDeleteDatasetGroup });
} catch (err) {
  // TODO: Handle 'err' of type DatasetGroups.DeleteDatasetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetGroups
  .deleteDatasetGroup({ xAmzTarget: XAmzTarget1.AmazonForecastDeleteDatasetGroup })
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

**Direct**: `await client.datasetGroups.deleteDatasetGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetGroups.DeleteDatasetGroupError](src/resources/dataset-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetGroups.deleteDatasetGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetGroups.DeleteDatasetGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDatasetGroup(request: DatasetGroups.DescribeDatasetGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetGroups.DescribeDatasetGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the parameters provided in the CreateDatasetGroup request, this operation includes the following properties: DatasetArns - The datasets belonging to the group. CreationTime LastModificationTime Status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetGroups.describeDatasetGroup({
    xAmzTarget: XAmzTarget2.AmazonForecastDescribeDatasetGroup,
  });
} catch (err) {
  // TODO: Handle 'err' of type DatasetGroups.DescribeDatasetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetGroups
  .describeDatasetGroup({ xAmzTarget: XAmzTarget2.AmazonForecastDescribeDatasetGroup })
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

**Direct**: `await client.datasetGroups.describeDatasetGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetGroups.DescribeDatasetGroupError](src/resources/dataset-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetGroups.describeDatasetGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetGroups.DescribeDatasetGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDatasetGroups(request: DatasetGroups.ListDatasetGroupsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetGroups.ListDatasetGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the DescribeDatasetGroup operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetGroups.listDatasetGroups({ xAmzTarget: XAmzTarget3.AmazonForecastListDatasetGroups });
} catch (err) {
  // TODO: Handle 'err' of type DatasetGroups.ListDatasetGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetGroups
  .listDatasetGroups({ xAmzTarget: XAmzTarget3.AmazonForecastListDatasetGroups })
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

**Direct**: `await client.datasetGroups.listDatasetGroups(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetGroups.ListDatasetGroupsError](src/resources/dataset-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetGroups.listDatasetGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetGroups.ListDatasetGroupsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDatasetGroup(request: DatasetGroups.UpdateDatasetGroupRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetGroups.UpdateDatasetGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset group must be ACTIVE before you can use the dataset group to create a predictor. Use the DescribeDatasetGroup operation to get the status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetGroups.updateDatasetGroup({ xAmzTarget: XAmzTarget4.AmazonForecastUpdateDatasetGroup });
} catch (err) {
  // TODO: Handle 'err' of type DatasetGroups.UpdateDatasetGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetGroups
  .updateDatasetGroup({ xAmzTarget: XAmzTarget4.AmazonForecastUpdateDatasetGroup })
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

**Direct**: `await client.datasetGroups.updateDatasetGroup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetGroups.UpdateDatasetGroupError](src/resources/dataset-groups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetGroups.updateDatasetGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetGroups.UpdateDatasetGroupError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DatasetImportJob

> Source: [DatasetImportJob](src/resources/dataset-import-job.ts)

<details>
<summary><code>createDatasetImportJob(request: DatasetImportJob.CreateDatasetImportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetImportJob.CreateDatasetImportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to. You must specify a DataSource object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import. To get a list of all your dataset import jobs, filtered by specified

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetImportJob.createDatasetImportJob({
    xAmzTarget: XAmzTargetAmazonForecastServiceDatasetImportJobApi.AmazonForecastCreateDatasetImportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type DatasetImportJob.CreateDatasetImportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetImportJob
  .createDatasetImportJob({
    xAmzTarget: XAmzTargetAmazonForecastServiceDatasetImportJobApi.AmazonForecastCreateDatasetImportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceDatasetImportJobApi](src/models/xamz-target-amazon-forecast-service-dataset-import-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasetImportJob.createDatasetImportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetImportJob.CreateDatasetImportJobError](src/resources/dataset-import-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetImportJob.createDatasetImportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetImportJob.CreateDatasetImportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDatasetImportJob(request: DatasetImportJob.DeleteDatasetImportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetImportJob.DeleteDatasetImportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetImportJob.deleteDatasetImportJob({
    xAmzTarget: XAmzTarget1AmazonForecastServiceDatasetImportJobApi.AmazonForecastDeleteDatasetImportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type DatasetImportJob.DeleteDatasetImportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetImportJob
  .deleteDatasetImportJob({
    xAmzTarget: XAmzTarget1AmazonForecastServiceDatasetImportJobApi.AmazonForecastDeleteDatasetImportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceDatasetImportJobApi](src/models/xamz-target1-amazon-forecast-service-dataset-import-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasetImportJob.deleteDatasetImportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetImportJob.DeleteDatasetImportJobError](src/resources/dataset-import-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetImportJob.deleteDatasetImportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetImportJob.DeleteDatasetImportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDatasetImportJob(request: DatasetImportJob.DescribeDatasetImportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetImportJob.DescribeDatasetImportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the parameters provided in the CreateDatasetImportJob request, this operation includes the following properties: CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information about the error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetImportJob.describeDatasetImportJob({
    xAmzTarget: XAmzTarget2AmazonForecastServiceDatasetImportJobApi.AmazonForecastDescribeDatasetImportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type DatasetImportJob.DescribeDatasetImportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetImportJob
  .describeDatasetImportJob({
    xAmzTarget: XAmzTarget2AmazonForecastServiceDatasetImportJobApi.AmazonForecastDescribeDatasetImportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceDatasetImportJobApi](src/models/xamz-target2-amazon-forecast-service-dataset-import-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasetImportJob.describeDatasetImportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetImportJob.DescribeDatasetImportJobError](src/resources/dataset-import-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetImportJob.describeDatasetImportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetImportJob.DescribeDatasetImportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDatasetImportJobs(request: DatasetImportJob.ListDatasetImportJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, DatasetImportJob.ListDatasetImportJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can filter the list by providing an array of Filter objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasetImportJob.listDatasetImportJobs({
    xAmzTarget: XAmzTarget3AmazonForecastServiceDatasetImportJobApi.AmazonForecastListDatasetImportJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type DatasetImportJob.ListDatasetImportJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasetImportJob
  .listDatasetImportJobs({
    xAmzTarget: XAmzTarget3AmazonForecastServiceDatasetImportJobApi.AmazonForecastListDatasetImportJobs,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceDatasetImportJobApi](src/models/xamz-target3-amazon-forecast-service-dataset-import-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasetImportJob.listDatasetImportJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[DatasetImportJob.ListDatasetImportJobsError](src/resources/dataset-import-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasetImportJob.listDatasetImportJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, DatasetImportJob.ListDatasetImportJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Datasets

> Source: [Datasets](src/resources/datasets.ts)

<details>
<summary><code>createDataset(request: Datasets.CreateDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Datasets.CreateDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following: DataFrequency - How frequently your historical time-series data is collected. Domain and DatasetType - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields. Schema - A schema specifies the fields in the dataset, including the field name and data type. After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see Importing datasets. To get a list of all your datasets, use the ListDatasets operation. For example Forecast datasets, see the Amazon Forecast Sample GitHub repository. The Status of a dataset must be ACTIVE before you can import training data. Use the DescribeDataset operation to get the status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasets.createDataset({
    xAmzTarget: XAmzTargetAmazonForecastServiceDatasetsApi.AmazonForecastCreateDataset,
  });
} catch (err) {
  // TODO: Handle 'err' of type Datasets.CreateDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .createDataset({ xAmzTarget: XAmzTargetAmazonForecastServiceDatasetsApi.AmazonForecastCreateDataset })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceDatasetsApi](src/models/xamz-target-amazon-forecast-service-datasets-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.createDataset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Datasets.CreateDatasetError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.createDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Datasets.CreateDatasetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDataset(request: Datasets.DeleteDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Datasets.DeleteDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can only delete datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the DescribeDataset operation. Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the UpdateDatasetGroup operation, omitting the deleted dataset's ARN.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasets.deleteDataset({
    xAmzTarget: XAmzTarget1AmazonForecastServiceDatasetsApi.AmazonForecastDeleteDataset,
  });
} catch (err) {
  // TODO: Handle 'err' of type Datasets.DeleteDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .deleteDataset({ xAmzTarget: XAmzTarget1AmazonForecastServiceDatasetsApi.AmazonForecastDeleteDataset })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceDatasetsApi](src/models/xamz-target1-amazon-forecast-service-datasets-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.deleteDataset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Datasets.DeleteDatasetError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.deleteDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Datasets.DeleteDatasetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDataset(request: Datasets.DescribeDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Datasets.DescribeDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the parameters specified in the CreateDataset request, this operation includes the following dataset properties: CreationTime LastModificationTime Status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasets.describeDataset({
    xAmzTarget: XAmzTarget2AmazonForecastServiceDatasetsApi.AmazonForecastDescribeDataset,
  });
} catch (err) {
  // TODO: Handle 'err' of type Datasets.DescribeDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .describeDataset({ xAmzTarget: XAmzTarget2AmazonForecastServiceDatasetsApi.AmazonForecastDescribeDataset })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceDatasetsApi](src/models/xamz-target2-amazon-forecast-service-datasets-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.describeDataset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Datasets.DescribeDatasetError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.describeDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Datasets.DescribeDatasetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDatasets(request: Datasets.ListDatasetsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Datasets.ListDatasetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the DescribeDataset operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.datasets.listDatasets({
    xAmzTarget: XAmzTarget3AmazonForecastServiceDatasetsApi.AmazonForecastListDatasets,
  });
} catch (err) {
  // TODO: Handle 'err' of type Datasets.ListDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.datasets
  .listDatasets({ xAmzTarget: XAmzTarget3AmazonForecastServiceDatasetsApi.AmazonForecastListDatasets })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceDatasetsApi](src/models/xamz-target3-amazon-forecast-service-datasets-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.datasets.listDatasets(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Datasets.ListDatasetsError](src/resources/datasets.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.datasets.listDatasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Datasets.ListDatasetsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Explainability

> Source: [Explainability](src/resources/explainability.ts)

<details>
<summary><code>createExplainability(request: Explainability.CreateExplainabilityRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Explainability.CreateExplainabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Explainability is only available for Forecasts and Predictors generated from an AutoPredictor (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative impact of each attribute and determine whether they increase or decrease forecast values. To enable Forecast Explainability, your predictor must include at least one of the following: related time series, item metadata, or additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time series and time points, provide a Forecast ARN. CreateExplainability with a Predictor ARN You can only have one Explainability resource per predictor. If you already enabled ExplainPredictor in CreateAutoPredictor, that predictor already has an Explainability resource. The following parameters are required when providing a Predictor ARN: ExplainabilityName - A

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.explainability.createExplainability({
    xAmzTarget: XAmzTargetAmazonForecastServiceExplainabilityApi.AmazonForecastCreateExplainability,
  });
} catch (err) {
  // TODO: Handle 'err' of type Explainability.CreateExplainabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explainability
  .createExplainability({
    xAmzTarget: XAmzTargetAmazonForecastServiceExplainabilityApi.AmazonForecastCreateExplainability,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceExplainabilityApi](src/models/xamz-target-amazon-forecast-service-explainability-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explainability.createExplainability(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Explainability.CreateExplainabilityError](src/resources/explainability.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explainability.createExplainability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Explainability.CreateExplainabilityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteExplainability(request: Explainability.DeleteExplainabilityRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Explainability.DeleteExplainabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeExplainability operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.explainability.deleteExplainability({
    xAmzTarget: XAmzTarget1AmazonForecastServiceExplainabilityApi.AmazonForecastDeleteExplainability,
  });
} catch (err) {
  // TODO: Handle 'err' of type Explainability.DeleteExplainabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explainability
  .deleteExplainability({
    xAmzTarget: XAmzTarget1AmazonForecastServiceExplainabilityApi.AmazonForecastDeleteExplainability,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceExplainabilityApi](src/models/xamz-target1-amazon-forecast-service-explainability-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explainability.deleteExplainability(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Explainability.DeleteExplainabilityError](src/resources/explainability.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explainability.deleteExplainability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Explainability.DeleteExplainabilityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeExplainability(request: Explainability.DescribeExplainabilityRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Explainability.DescribeExplainabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes an Explainability resource created using the CreateExplainability operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.explainability.describeExplainability({
    xAmzTarget: XAmzTarget2AmazonForecastServiceExplainabilityApi.AmazonForecastDescribeExplainability,
  });
} catch (err) {
  // TODO: Handle 'err' of type Explainability.DescribeExplainabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explainability
  .describeExplainability({
    xAmzTarget: XAmzTarget2AmazonForecastServiceExplainabilityApi.AmazonForecastDescribeExplainability,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceExplainabilityApi](src/models/xamz-target2-amazon-forecast-service-explainability-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explainability.describeExplainability(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Explainability.DescribeExplainabilityError](src/resources/explainability.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explainability.describeExplainability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Explainability.DescribeExplainabilityError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExplainabilities(request: Explainability.ListExplainabilitiesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Explainability.ListExplainabilitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Explainability resources created using the CreateExplainability operation. This operation returns a summary for each Explainability. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability resource, use the ARN with the DescribeExplainability operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.explainability.listExplainabilities({
    xAmzTarget: XAmzTarget3AmazonForecastServiceExplainabilityApi.AmazonForecastListExplainabilities,
  });
} catch (err) {
  // TODO: Handle 'err' of type Explainability.ListExplainabilitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explainability
  .listExplainabilities({
    xAmzTarget: XAmzTarget3AmazonForecastServiceExplainabilityApi.AmazonForecastListExplainabilities,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceExplainabilityApi](src/models/xamz-target3-amazon-forecast-service-explainability-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explainability.listExplainabilities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Explainability.ListExplainabilitiesError](src/resources/explainability.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explainability.listExplainabilities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Explainability.ListExplainabilitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExplainabilityExport

> Source: [ExplainabilityExport](src/resources/explainability-export.ts)

<details>
<summary><code>createExplainabilityExport(request: ExplainabilityExport.CreateExplainabilityExportRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ExplainabilityExport.CreateExplainabilityExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribeExplainabilityExport operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.explainabilityExport.createExplainabilityExport({
    xAmzTarget:
      XAmzTargetAmazonForecastServiceExplainabilityExportApi.AmazonForecastCreateExplainabilityExport,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExplainabilityExport.CreateExplainabilityExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explainabilityExport
  .createExplainabilityExport({
    xAmzTarget:
      XAmzTargetAmazonForecastServiceExplainabilityExportApi.AmazonForecastCreateExplainabilityExport,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceExplainabilityExportApi](src/models/xamz-target-amazon-forecast-service-explainability-export-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explainabilityExport.createExplainabilityExport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExplainabilityExport.CreateExplainabilityExportError](src/resources/explainability-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explainabilityExport.createExplainabilityExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExplainabilityExport.CreateExplainabilityExportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteExplainabilityExport(request: ExplainabilityExport.DeleteExplainabilityExportRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ExplainabilityExport.DeleteExplainabilityExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an Explainability export.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.explainabilityExport.deleteExplainabilityExport({
    xAmzTarget:
      XAmzTarget1AmazonForecastServiceExplainabilityExportApi.AmazonForecastDeleteExplainabilityExport,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExplainabilityExport.DeleteExplainabilityExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explainabilityExport
  .deleteExplainabilityExport({
    xAmzTarget:
      XAmzTarget1AmazonForecastServiceExplainabilityExportApi.AmazonForecastDeleteExplainabilityExport,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceExplainabilityExportApi](src/models/xamz-target1-amazon-forecast-service-explainability-export-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explainabilityExport.deleteExplainabilityExport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExplainabilityExport.DeleteExplainabilityExportError](src/resources/explainability-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explainabilityExport.deleteExplainabilityExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExplainabilityExport.DeleteExplainabilityExportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeExplainabilityExport(request: ExplainabilityExport.DescribeExplainabilityExportRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ExplainabilityExport.DescribeExplainabilityExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes an Explainability export created using the CreateExplainabilityExport operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.explainabilityExport.describeExplainabilityExport({
    xAmzTarget:
      XAmzTarget2AmazonForecastServiceExplainabilityExportApi.AmazonForecastDescribeExplainabilityExport,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExplainabilityExport.DescribeExplainabilityExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explainabilityExport
  .describeExplainabilityExport({
    xAmzTarget:
      XAmzTarget2AmazonForecastServiceExplainabilityExportApi.AmazonForecastDescribeExplainabilityExport,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceExplainabilityExportApi](src/models/xamz-target2-amazon-forecast-service-explainability-export-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explainabilityExport.describeExplainabilityExport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExplainabilityExport.DescribeExplainabilityExportError](src/resources/explainability-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explainabilityExport.describeExplainabilityExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExplainabilityExport.DescribeExplainabilityExportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listExplainabilityExports(request: ExplainabilityExport.ListExplainabilityExportsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ExplainabilityExport.ListExplainabilityExportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This operation returns a summary for each Explainability export. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the DescribeExplainability operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.explainabilityExport.listExplainabilityExports({
    xAmzTarget:
      XAmzTarget3AmazonForecastServiceExplainabilityExportApi.AmazonForecastListExplainabilityExports,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExplainabilityExport.ListExplainabilityExportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.explainabilityExport
  .listExplainabilityExports({
    xAmzTarget:
      XAmzTarget3AmazonForecastServiceExplainabilityExportApi.AmazonForecastListExplainabilityExports,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceExplainabilityExportApi](src/models/xamz-target3-amazon-forecast-service-explainability-export-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.explainabilityExport.listExplainabilityExports(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExplainabilityExport.ListExplainabilityExportsError](src/resources/explainability-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.explainabilityExport.listExplainabilityExports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExplainabilityExport.ListExplainabilityExportsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ExportJobs

> Source: [ExportJobs](src/resources/export-jobs.ts)

<details>
<summary><code>createForecastExportJob(request: ExportJobs.CreateForecastExportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ExportJobs.CreateForecastExportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions: __ where the component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeForecastExportJob operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.exportJobs.createForecastExportJob({
    xAmzTarget: XAmzTargetAmazonForecastServiceExportJobsApi.AmazonForecastCreateForecastExportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type ExportJobs.CreateForecastExportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.exportJobs
  .createForecastExportJob({
    xAmzTarget: XAmzTargetAmazonForecastServiceExportJobsApi.AmazonForecastCreateForecastExportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceExportJobsApi](src/models/xamz-target-amazon-forecast-service-export-jobs-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.exportJobs.createForecastExportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ExportJobs.CreateForecastExportJobError](src/resources/export-jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.exportJobs.createForecastExportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ExportJobs.CreateForecastExportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ForecastExportJob

> Source: [ForecastExportJob](src/resources/forecast-export-job.ts)

<details>
<summary><code>createForecastExportJob2(request: ForecastExportJob.CreateForecastExportJob2Request, options?: RequestOptions): ApiPromise&lt;undefined, ForecastExportJob.CreateForecastExportJob2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions: __ where the component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeForecastExportJob operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.forecastExportJob.createForecastExportJob2({
    xAmzTarget: XAmzTargetAmazonForecastServiceExportJobsApi.AmazonForecastCreateForecastExportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type ForecastExportJob.CreateForecastExportJob2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecastExportJob
  .createForecastExportJob2({
    xAmzTarget: XAmzTargetAmazonForecastServiceExportJobsApi.AmazonForecastCreateForecastExportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceExportJobsApi](src/models/xamz-target-amazon-forecast-service-export-jobs-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecastExportJob.createForecastExportJob2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForecastExportJob.CreateForecastExportJob2Error](src/resources/forecast-export-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecastExportJob.createForecastExportJob2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForecastExportJob.CreateForecastExportJob2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteForecastExportJob(request: ForecastExportJob.DeleteForecastExportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ForecastExportJob.DeleteForecastExportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a forecast export job created using the CreateForecastExportJob operation. You can delete only export jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecastExportJob operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.forecastExportJob.deleteForecastExportJob({
    xAmzTarget: XAmzTarget1AmazonForecastServiceForecastExportJobApi.AmazonForecastDeleteForecastExportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type ForecastExportJob.DeleteForecastExportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecastExportJob
  .deleteForecastExportJob({
    xAmzTarget: XAmzTarget1AmazonForecastServiceForecastExportJobApi.AmazonForecastDeleteForecastExportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceForecastExportJobApi](src/models/xamz-target1-amazon-forecast-service-forecast-export-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecastExportJob.deleteForecastExportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForecastExportJob.DeleteForecastExportJobError](src/resources/forecast-export-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecastExportJob.deleteForecastExportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForecastExportJob.DeleteForecastExportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeForecastExportJob(request: ForecastExportJob.DescribeForecastExportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ForecastExportJob.DescribeForecastExportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a forecast export job created using the CreateForecastExportJob operation. In addition to listing the properties provided by the user in the CreateForecastExportJob request, this operation lists the following properties: CreationTime LastModificationTime Status Message - If an error occurred, information about the error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.forecastExportJob.describeForecastExportJob({
    xAmzTarget: XAmzTarget2AmazonForecastServiceForecastExportJobApi.AmazonForecastDescribeForecastExportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type ForecastExportJob.DescribeForecastExportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecastExportJob
  .describeForecastExportJob({
    xAmzTarget: XAmzTarget2AmazonForecastServiceForecastExportJobApi.AmazonForecastDescribeForecastExportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceForecastExportJobApi](src/models/xamz-target2-amazon-forecast-service-forecast-export-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecastExportJob.describeForecastExportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForecastExportJob.DescribeForecastExportJobError](src/resources/forecast-export-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecastExportJob.describeForecastExportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForecastExportJob.DescribeForecastExportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listForecastExportJobs(request: ForecastExportJob.ListForecastExportJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ForecastExportJob.ListForecastExportJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For each forecast export job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the DescribeForecastExportJob operation. You can filter the list using an array of Filter objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.forecastExportJob.listForecastExportJobs({
    xAmzTarget: XAmzTarget3AmazonForecastServiceForecastExportJobApi.AmazonForecastListForecastExportJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type ForecastExportJob.ListForecastExportJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecastExportJob
  .listForecastExportJobs({
    xAmzTarget: XAmzTarget3AmazonForecastServiceForecastExportJobApi.AmazonForecastListForecastExportJobs,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceForecastExportJobApi](src/models/xamz-target3-amazon-forecast-service-forecast-export-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecastExportJob.listForecastExportJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ForecastExportJob.ListForecastExportJobsError](src/resources/forecast-export-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecastExportJob.listForecastExportJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ForecastExportJob.ListForecastExportJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Forecasts

> Source: [Forecasts](src/resources/forecasts.ts)

<details>
<summary><code>createForecast(request: Forecasts.CreateForecastRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Forecasts.CreateForecastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a forecast for each item in the TARGET_TIME_SERIES dataset that was used to train the predictor. This is known as inference. To retrieve the forecast for a single item at low latency, use the operation. To export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the CreateForecastExportJob operation. The range of the forecast is determined by the ForecastHorizon value, which you specify in the CreatePredictor request. When you query a forecast, you can request a specific date range within the forecast. To get a list of all your forecasts, use the ListForecasts operation. The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was used to create the predictor. For more information, see howitworks-forecast. The Status of the forecast must be ACTIVE before you can query or export the forecast. Use the DescribeForecast operation to get the status. By default, a forecast includes predictions for every item (item_id) in the dataset group that was used to train the predictor. However, you can use the TimeSeriesSelector object to generate a forecast on a subset of time series. Forecast creation is skipped for any 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.forecasts.createForecast({
    xAmzTarget: XAmzTargetAmazonForecastServiceForecastsApi.AmazonForecastCreateForecast,
  });
} catch (err) {
  // TODO: Handle 'err' of type Forecasts.CreateForecastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecasts
  .createForecast({ xAmzTarget: XAmzTargetAmazonForecastServiceForecastsApi.AmazonForecastCreateForecast })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceForecastsApi](src/models/xamz-target-amazon-forecast-service-forecasts-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecasts.createForecast(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Forecasts.CreateForecastError](src/resources/forecasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecasts.createForecast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Forecasts.CreateForecastError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteForecast(request: Forecasts.DeleteForecastRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Forecasts.DeleteForecastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a forecast created using the CreateForecast operation. You can delete only forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecast operation. You can't delete a forecast while it is being exported. After a forecast is deleted, you can no longer query the forecast.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.forecasts.deleteForecast({
    xAmzTarget: XAmzTarget1AmazonForecastServiceForecastsApi.AmazonForecastDeleteForecast,
  });
} catch (err) {
  // TODO: Handle 'err' of type Forecasts.DeleteForecastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecasts
  .deleteForecast({ xAmzTarget: XAmzTarget1AmazonForecastServiceForecastsApi.AmazonForecastDeleteForecast })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceForecastsApi](src/models/xamz-target1-amazon-forecast-service-forecasts-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecasts.deleteForecast(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Forecasts.DeleteForecastError](src/resources/forecasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecasts.deleteForecast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Forecasts.DeleteForecastError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeForecast(request: Forecasts.DescribeForecastRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Forecasts.DescribeForecastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a forecast created using the CreateForecast operation. In addition to listing the properties provided in the CreateForecast request, this operation lists the following properties: DatasetGroupArn - The dataset group that provided the training data. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.forecasts.describeForecast({
    xAmzTarget: XAmzTarget2AmazonForecastServiceForecastsApi.AmazonForecastDescribeForecast,
  });
} catch (err) {
  // TODO: Handle 'err' of type Forecasts.DescribeForecastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecasts
  .describeForecast({
    xAmzTarget: XAmzTarget2AmazonForecastServiceForecastsApi.AmazonForecastDescribeForecast,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceForecastsApi](src/models/xamz-target2-amazon-forecast-service-forecasts-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecasts.describeForecast(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Forecasts.DescribeForecastError](src/resources/forecasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecasts.describeForecast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Forecasts.DescribeForecastError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listForecasts(request: Forecasts.ListForecastsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Forecasts.ListForecastsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of forecasts created using the CreateForecast operation. For each forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the DescribeForecast operation. You can filter the list using an array of Filter objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.forecasts.listForecasts({
    xAmzTarget: XAmzTarget3AmazonForecastServiceForecastsApi.AmazonForecastListForecasts,
  });
} catch (err) {
  // TODO: Handle 'err' of type Forecasts.ListForecastsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.forecasts
  .listForecasts({ xAmzTarget: XAmzTarget3AmazonForecastServiceForecastsApi.AmazonForecastListForecasts })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceForecastsApi](src/models/xamz-target3-amazon-forecast-service-forecasts-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.forecasts.listForecasts(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Forecasts.ListForecastsError](src/resources/forecasts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.forecasts.listForecasts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Forecasts.ListForecastsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Monitor

> Source: [Monitor](src/resources/monitor.ts)

<details>
<summary><code>createMonitor(request: Monitor.CreateMonitorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Monitor.CreateMonitorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see Predictor Monitoring.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.monitor.createMonitor({
    xAmzTarget: XAmzTargetAmazonForecastServiceMonitorApi.AmazonForecastCreateMonitor,
  });
} catch (err) {
  // TODO: Handle 'err' of type Monitor.CreateMonitorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .createMonitor({ xAmzTarget: XAmzTargetAmazonForecastServiceMonitorApi.AmazonForecastCreateMonitor })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceMonitorApi](src/models/xamz-target-amazon-forecast-service-monitor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.createMonitor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Monitor.CreateMonitorError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.createMonitor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Monitor.CreateMonitorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMonitor(request: Monitor.DeleteMonitorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Monitor.DeleteMonitorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE, ACTIVE_STOPPED, CREATE_FAILED, or CREATE_STOPPED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.monitor.deleteMonitor({
    xAmzTarget: XAmzTarget1AmazonForecastServiceMonitorApi.AmazonForecastDeleteMonitor,
  });
} catch (err) {
  // TODO: Handle 'err' of type Monitor.DeleteMonitorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .deleteMonitor({ xAmzTarget: XAmzTarget1AmazonForecastServiceMonitorApi.AmazonForecastDeleteMonitor })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceMonitorApi](src/models/xamz-target1-amazon-forecast-service-monitor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.deleteMonitor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Monitor.DeleteMonitorError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.deleteMonitor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Monitor.DeleteMonitorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeMonitor(request: Monitor.DescribeMonitorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Monitor.DescribeMonitorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a monitor resource. In addition to listing the properties provided in the CreateMonitor request, this operation lists the following properties: Baseline CreationTime LastEvaluationTime LastEvaluationState LastModificationTime Message Status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.monitor.describeMonitor({
    xAmzTarget: XAmzTarget2AmazonForecastServiceMonitorApi.AmazonForecastDescribeMonitor,
  });
} catch (err) {
  // TODO: Handle 'err' of type Monitor.DescribeMonitorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .describeMonitor({ xAmzTarget: XAmzTarget2AmazonForecastServiceMonitorApi.AmazonForecastDescribeMonitor })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceMonitorApi](src/models/xamz-target2-amazon-forecast-service-monitor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.describeMonitor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Monitor.DescribeMonitorError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.describeMonitor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Monitor.DescribeMonitorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitors(request: Monitor.ListMonitorsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Monitor.ListMonitorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the DescribeMonitor operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.monitor.listMonitors({
    xAmzTarget: XAmzTarget3AmazonForecastServiceMonitorApi.AmazonForecastListMonitors,
  });
} catch (err) {
  // TODO: Handle 'err' of type Monitor.ListMonitorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.monitor
  .listMonitors({ xAmzTarget: XAmzTarget3AmazonForecastServiceMonitorApi.AmazonForecastListMonitors })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceMonitorApi](src/models/xamz-target3-amazon-forecast-service-monitor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.monitor.listMonitors(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Monitor.ListMonitorsError](src/resources/monitor.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.monitor.listMonitors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Monitor.ListMonitorsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>createAutoPredictor(request: Operations.CreateAutoPredictorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.CreateAutoPredictorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an Amazon Forecast predictor. Amazon Forecast creates predictors with AutoPredictor, which involves applying the optimal combination of algorithms to each time series in your datasets. You can use CreateAutoPredictor to create new predictors or upgrade/retrain existing predictors. Creating new predictors The following parameters are required when creating a new predictor: PredictorName - A unique name for the predictor. DatasetGroupArn - The ARN of the dataset group used to train the predictor. ForecastFrequency - The granularity of your forecasts (hourly, daily, weekly, etc). ForecastHorizon - The number of time-steps that the model predicts. The forecast horizon is also called the prediction length. When creating a new predictor, do not specify a value for ReferencePredictorArn. Upgrading and retraining predictors The following parameters are required when retraining or upgrading a predictor: PredictorName - A unique name for the predictor. ReferencePredictorArn - The ARN of the predictor to retrain or upgrade. When upgrading or retraining a predictor, only specify values for the ReferencePredictorArn and PredictorName.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.createAutoPredictor({
    xAmzTarget: XAmzTarget1AmazonForecastServiceOperationsApi.AmazonForecastCreateAutoPredictor,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.CreateAutoPredictorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .createAutoPredictor({
    xAmzTarget: XAmzTarget1AmazonForecastServiceOperationsApi.AmazonForecastCreateAutoPredictor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceOperationsApi](src/models/xamz-target1-amazon-forecast-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.createAutoPredictor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.CreateAutoPredictorError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.createAutoPredictor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.CreateAutoPredictorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResourceTree(request: Operations.DeleteResourceTreeRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DeleteResourceTreeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an entire resource tree. This operation will delete the parent resource and its child resources. Child resources are resources that were created from another resource. For example, when a forecast is generated from a predictor, the forecast is the child resource and the predictor is the parent resource. Amazon Forecast resources possess the following parent-child resource hierarchies: Dataset: dataset import jobs Dataset Group: predictors, predictor backtest export jobs, forecasts, forecast export jobs Predictor: predictor backtest export jobs, forecasts, forecast export jobs Forecast: forecast export jobs DeleteResourceTree will only delete Amazon Forecast resources, and will not delete datasets or exported files stored in Amazon S3.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.deleteResourceTree({
    xAmzTarget: XAmzTarget3AmazonForecastServiceOperationsApi.AmazonForecastDeleteResourceTree,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DeleteResourceTreeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .deleteResourceTree({
    xAmzTarget: XAmzTarget3AmazonForecastServiceOperationsApi.AmazonForecastDeleteResourceTree,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceOperationsApi](src/models/xamz-target3-amazon-forecast-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.deleteResourceTree(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DeleteResourceTreeError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.deleteResourceTree(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DeleteResourceTreeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeAutoPredictor(request: Operations.DescribeAutoPredictorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DescribeAutoPredictorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a predictor created using the CreateAutoPredictor operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.describeAutoPredictor({
    xAmzTarget: XAmzTarget2AmazonForecastServiceOperationsApi.AmazonForecastDescribeAutoPredictor,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DescribeAutoPredictorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .describeAutoPredictor({
    xAmzTarget: XAmzTarget2AmazonForecastServiceOperationsApi.AmazonForecastDescribeAutoPredictor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceOperationsApi](src/models/xamz-target2-amazon-forecast-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.describeAutoPredictor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DescribeAutoPredictorError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.describeAutoPredictor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DescribeAutoPredictorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccuracyMetrics(request: Operations.GetAccuracyMetricsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.GetAccuracyMetricsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides metrics on the accuracy of the models that were trained by the CreatePredictor operation. Use metrics to see how well the model performed and to decide whether to use the predictor to generate a forecast. For more information, see Predictor Metrics. This operation generates metrics for each backtest window that was evaluated. The number of backtest windows (NumberOfBacktestWindows) is specified using the EvaluationParameters object, which is optionally included in the CreatePredictor request. If NumberOfBacktestWindows isn't specified, the number defaults to one. The parameters of the filling method determine which items contribute to the metrics. If you want all items to contribute, specify zero. If you want only those items that have complete data in the range being evaluated to contribute, specify nan. For more information, see FeaturizationMethod. Before you can get accuracy metrics, the Status of the predictor must be ACTIVE, signifying that training has completed. To get the status, use the DescribePredictor operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.getAccuracyMetrics({
    xAmzTarget: XAmzTarget4AmazonForecastServiceOperationsApi.AmazonForecastGetAccuracyMetrics,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetAccuracyMetricsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getAccuracyMetrics({
    xAmzTarget: XAmzTarget4AmazonForecastServiceOperationsApi.AmazonForecastGetAccuracyMetrics,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonForecastServiceOperationsApi](src/models/xamz-target4-amazon-forecast-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.getAccuracyMetrics(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.GetAccuracyMetricsError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getAccuracyMetrics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.GetAccuracyMetricsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMonitorEvaluations(request: Operations.ListMonitorEvaluationsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListMonitorEvaluationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time. For information about monitoring see predictor-monitoring. For more information about retrieving monitoring results see Viewing Monitoring Results.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listMonitorEvaluations({
    xAmzTarget: XAmzTarget5.AmazonForecastListMonitorEvaluations,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListMonitorEvaluationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listMonitorEvaluations({ xAmzTarget: XAmzTarget5.AmazonForecastListMonitorEvaluations })
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

**Direct**: `await client.operations.listMonitorEvaluations(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListMonitorEvaluationsError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listMonitorEvaluations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListMonitorEvaluationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWhatIfAnalyses(request: Operations.ListWhatIfAnalysesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListWhatIfAnalysesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of what-if analyses created using the CreateWhatIfAnalysis operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the DescribeWhatIfAnalysis operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listWhatIfAnalyses({ xAmzTarget: XAmzTarget6.AmazonForecastListWhatIfAnalyses });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListWhatIfAnalysesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listWhatIfAnalyses({ xAmzTarget: XAmzTarget6.AmazonForecastListWhatIfAnalyses })
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

**Direct**: `await client.operations.listWhatIfAnalyses(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListWhatIfAnalysesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listWhatIfAnalyses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListWhatIfAnalysesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resumeResource(request: Operations.ResumeResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ResumeResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resumes a stopped monitor resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.resumeResource({
    xAmzTarget: XAmzTargetAmazonForecastServiceOperationsApi.AmazonForecastResumeResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ResumeResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .resumeResource({ xAmzTarget: XAmzTargetAmazonForecastServiceOperationsApi.AmazonForecastResumeResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceOperationsApi](src/models/xamz-target-amazon-forecast-service-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.resumeResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ResumeResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.resumeResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ResumeResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PredictorBacktestExportJob

> Source: [PredictorBacktestExportJob](src/resources/predictor-backtest-export-job.ts)

<details>
<summary><code>createPredictorBacktestExportJob(request: PredictorBacktestExportJob.CreatePredictorBacktestExportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, PredictorBacktestExportJob.CreatePredictorBacktestExportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports backtest forecasts and accuracy metrics generated by the CreateAutoPredictor or CreatePredictor operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket. The export file names will match the following conventions: __.csv The component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribePredictorBacktestExportJob operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.predictorBacktestExportJob.createPredictorBacktestExportJob({
    xAmzTarget:
      XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastCreatePredictorBacktestExportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type PredictorBacktestExportJob.CreatePredictorBacktestExportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.predictorBacktestExportJob
  .createPredictorBacktestExportJob({
    xAmzTarget:
      XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastCreatePredictorBacktestExportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi](src/models/xamz-target-amazon-forecast-service-predictor-backtest-export-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.predictorBacktestExportJob.createPredictorBacktestExportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PredictorBacktestExportJob.CreatePredictorBacktestExportJobError](src/resources/predictor-backtest-export-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.predictorBacktestExportJob.createPredictorBacktestExportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PredictorBacktestExportJob.CreatePredictorBacktestExportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePredictorBacktestExportJob(request: PredictorBacktestExportJob.DeletePredictorBacktestExportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, PredictorBacktestExportJob.DeletePredictorBacktestExportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a predictor backtest export job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.predictorBacktestExportJob.deletePredictorBacktestExportJob({
    xAmzTarget:
      XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastDeletePredictorBacktestExportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type PredictorBacktestExportJob.DeletePredictorBacktestExportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.predictorBacktestExportJob
  .deletePredictorBacktestExportJob({
    xAmzTarget:
      XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastDeletePredictorBacktestExportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi](src/models/xamz-target1-amazon-forecast-service-predictor-backtest-export-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.predictorBacktestExportJob.deletePredictorBacktestExportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PredictorBacktestExportJob.DeletePredictorBacktestExportJobError](src/resources/predictor-backtest-export-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.predictorBacktestExportJob.deletePredictorBacktestExportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PredictorBacktestExportJob.DeletePredictorBacktestExportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describePredictorBacktestExportJob(request: PredictorBacktestExportJob.DescribePredictorBacktestExportJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, PredictorBacktestExportJob.DescribePredictorBacktestExportJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes a predictor backtest export job created using the CreatePredictorBacktestExportJob operation. In addition to listing the properties provided by the user in the CreatePredictorBacktestExportJob request, this operation lists the following properties: CreationTime LastModificationTime Status Message (if an error occurred)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.predictorBacktestExportJob.describePredictorBacktestExportJob({
    xAmzTarget:
      XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastDescribePredictorBacktestExportJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type PredictorBacktestExportJob.DescribePredictorBacktestExportJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.predictorBacktestExportJob
  .describePredictorBacktestExportJob({
    xAmzTarget:
      XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastDescribePredictorBacktestExportJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi](src/models/xamz-target2-amazon-forecast-service-predictor-backtest-export-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.predictorBacktestExportJob.describePredictorBacktestExportJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PredictorBacktestExportJob.DescribePredictorBacktestExportJobError](src/resources/predictor-backtest-export-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.predictorBacktestExportJob.describePredictorBacktestExportJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PredictorBacktestExportJob.DescribePredictorBacktestExportJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPredictorBacktestExportJobs(request: PredictorBacktestExportJob.ListPredictorBacktestExportJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, PredictorBacktestExportJob.ListPredictorBacktestExportJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of predictor backtest export jobs created using the CreatePredictorBacktestExportJob operation. This operation returns a summary for each backtest export job. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular backtest export job, use the ARN with the DescribePredictorBacktestExportJob operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.predictorBacktestExportJob.listPredictorBacktestExportJobs({
    xAmzTarget:
      XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastListPredictorBacktestExportJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type PredictorBacktestExportJob.ListPredictorBacktestExportJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.predictorBacktestExportJob
  .listPredictorBacktestExportJobs({
    xAmzTarget:
      XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi.AmazonForecastListPredictorBacktestExportJobs,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi](src/models/xamz-target3-amazon-forecast-service-predictor-backtest-export-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.predictorBacktestExportJob.listPredictorBacktestExportJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[PredictorBacktestExportJob.ListPredictorBacktestExportJobsError](src/resources/predictor-backtest-export-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.predictorBacktestExportJob.listPredictorBacktestExportJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, PredictorBacktestExportJob.ListPredictorBacktestExportJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Predictors

> Source: [Predictors](src/resources/predictors.ts)

<details>
<summary><code>createPredictor(request: Predictors.CreatePredictorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Predictors.CreatePredictorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation creates a legacy predictor that does not include all the predictor functionalities provided by Amazon Forecast. To create a predictor that is compatible with all aspects of Forecast, use CreateAutoPredictor. Creates an Amazon Forecast predictor. In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can override algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets in the specified dataset group. You can then generate a forecast using the CreateForecast operation. To see the evaluation metrics, use the GetAccuracyMetrics operation. You can specify a featurization configuration to fill and aggregate the data fields in the TARGET_TIME_SERIES dataset to improve model training. For more information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor verifies that the DataFrequency specified when the dataset was created matches the ForecastFrequency. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast also verifies the delimiter and

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.predictors.createPredictor({
    xAmzTarget: XAmzTargetAmazonForecastServicePredictorsApi.AmazonForecastCreatePredictor,
  });
} catch (err) {
  // TODO: Handle 'err' of type Predictors.CreatePredictorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.predictors
  .createPredictor({ xAmzTarget: XAmzTargetAmazonForecastServicePredictorsApi.AmazonForecastCreatePredictor })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServicePredictorsApi](src/models/xamz-target-amazon-forecast-service-predictors-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.predictors.createPredictor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Predictors.CreatePredictorError](src/resources/predictors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.predictors.createPredictor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Predictors.CreatePredictorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePredictor(request: Predictors.DeletePredictorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Predictors.DeletePredictorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribePredictor operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.predictors.deletePredictor({
    xAmzTarget: XAmzTarget1AmazonForecastServicePredictorsApi.AmazonForecastDeletePredictor,
  });
} catch (err) {
  // TODO: Handle 'err' of type Predictors.DeletePredictorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.predictors
  .deletePredictor({
    xAmzTarget: XAmzTarget1AmazonForecastServicePredictorsApi.AmazonForecastDeletePredictor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServicePredictorsApi](src/models/xamz-target1-amazon-forecast-service-predictors-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.predictors.deletePredictor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Predictors.DeletePredictorError](src/resources/predictors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.predictors.deletePredictor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Predictors.DeletePredictorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describePredictor(request: Predictors.DescribePredictorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Predictors.DescribePredictorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation is only valid for legacy predictors created with CreatePredictor. If you are not using a legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the CreatePredictor operation. In addition to listing the properties provided in the CreatePredictor request, this operation lists the following properties: DatasetImportJobArns - The dataset import jobs used to import training data. AutoMLAlgorithmArns - If AutoML is performed, the algorithms that were evaluated. CreationTime LastModificationTime Status Message - If an error occurred, information about the error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.predictors.describePredictor({
    xAmzTarget: XAmzTarget2AmazonForecastServicePredictorsApi.AmazonForecastDescribePredictor,
  });
} catch (err) {
  // TODO: Handle 'err' of type Predictors.DescribePredictorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.predictors
  .describePredictor({
    xAmzTarget: XAmzTarget2AmazonForecastServicePredictorsApi.AmazonForecastDescribePredictor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServicePredictorsApi](src/models/xamz-target2-amazon-forecast-service-predictors-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.predictors.describePredictor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Predictors.DescribePredictorError](src/resources/predictors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.predictors.describePredictor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Predictors.DescribePredictorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPredictors(request: Predictors.ListPredictorsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Predictors.ListPredictorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor operations. For each predictor, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeAutoPredictor and DescribePredictor operations. You can filter the list using an array of Filter objects.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.predictors.listPredictors({
    xAmzTarget: XAmzTarget3AmazonForecastServicePredictorsApi.AmazonForecastListPredictors,
  });
} catch (err) {
  // TODO: Handle 'err' of type Predictors.ListPredictorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.predictors
  .listPredictors({ xAmzTarget: XAmzTarget3AmazonForecastServicePredictorsApi.AmazonForecastListPredictors })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServicePredictorsApi](src/models/xamz-target3-amazon-forecast-service-predictors-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.predictors.listPredictors(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Predictors.ListPredictorsError](src/resources/predictors.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.predictors.listPredictors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Predictors.ListPredictorsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Resource

> Source: [Resource](src/resources/resource.ts)

<details>
<summary><code>stopResource(request: Resource.StopResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Resource.StopResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a resource. The resource undergoes the following states: CREATE_STOPPING and CREATE_STOPPED. You cannot resume a resource once it has been stopped. This operation can be applied to the following resources (and their corresponding child resources): Dataset Import Job Predictor Job Forecast Job Forecast Export Job Predictor Backtest Export Job Explainability Job Explainability Export Job

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resource.stopResource({
    xAmzTarget: XAmzTargetAmazonForecastServiceResourceApi.AmazonForecastStopResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Resource.StopResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resource
  .stopResource({ xAmzTarget: XAmzTargetAmazonForecastServiceResourceApi.AmazonForecastStopResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceResourceApi](src/models/xamz-target-amazon-forecast-service-resource-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resource.stopResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Resource.StopResourceError](src/resources/resource.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resource.stopResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Resource.StopResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: Resource.TagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Resource.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resource.tagResource({
    xAmzTarget: XAmzTarget1AmazonForecastServiceResourceApi.AmazonForecastTagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Resource.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resource
  .tagResource({ xAmzTarget: XAmzTarget1AmazonForecastServiceResourceApi.AmazonForecastTagResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceResourceApi](src/models/xamz-target1-amazon-forecast-service-resource-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resource.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Resource.TagResourceError](src/resources/resource.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resource.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Resource.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: Resource.UntagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Resource.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified tags from a resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.resource.untagResource({
    xAmzTarget: XAmzTarget2AmazonForecastServiceResourceApi.AmazonForecastUntagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Resource.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.resource
  .untagResource({ xAmzTarget: XAmzTarget2AmazonForecastServiceResourceApi.AmazonForecastUntagResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceResourceApi](src/models/xamz-target2-amazon-forecast-service-resource-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.resource.untagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Resource.UntagResourceError](src/resources/resource.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.resource.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Resource.UntagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>listTagsForResource(request: Tags.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Tags.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the tags for an Amazon Forecast resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tags.listTagsForResource({
    xAmzTarget: XAmzTargetAmazonForecastServiceTagsApi.AmazonForecastListTagsForResource,
  });
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
const result = await client.tags
  .listTagsForResource({
    xAmzTarget: XAmzTargetAmazonForecastServiceTagsApi.AmazonForecastListTagsForResource,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceTagsApi](src/models/xamz-target-amazon-forecast-service-tags-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listTagsForResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tags.ListTagsForResourceError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tags.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource2(request: Tags.TagResource2Request, options?: RequestOptions): ApiPromise&lt;undefined, Tags.TagResource2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.tags.tagResource2({
    xAmzTarget: XAmzTarget1AmazonForecastServiceResourceApi.AmazonForecastTagResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Tags.TagResource2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags
  .tagResource2({ xAmzTarget: XAmzTarget1AmazonForecastServiceResourceApi.AmazonForecastTagResource })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceResourceApi](src/models/xamz-target1-amazon-forecast-service-resource-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.tagResource2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Tags.TagResource2Error](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.tagResource2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Tags.TagResource2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfAnalysis

> Source: [WhatIfAnalysis](src/resources/what-if-analysis.ts)

<details>
<summary><code>createWhatIfAnalysis(request: WhatIfAnalysis.CreateWhatIfAnalysisRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfAnalysis.CreateWhatIfAnalysisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to remember that the purpose of a what-if analysis is to understand how a forecast can change given different modifications to the baseline time series. For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales tactics might affect your goals. You could create a scenario where everything is given a 25% markdown, and another where everything is given a fixed dollar markdown. You could create a scenario where the sale lasts for one week and another where the sale lasts for one month. With a what-if analysis, you can compare many different scenarios against each other. Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For inst

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfAnalysis.createWhatIfAnalysis({
    xAmzTarget: XAmzTargetAmazonForecastServiceWhatIfAnalysisApi.AmazonForecastCreateWhatIfAnalysis,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfAnalysis.CreateWhatIfAnalysisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfAnalysis
  .createWhatIfAnalysis({
    xAmzTarget: XAmzTargetAmazonForecastServiceWhatIfAnalysisApi.AmazonForecastCreateWhatIfAnalysis,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceWhatIfAnalysisApi](src/models/xamz-target-amazon-forecast-service-what-if-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfAnalysis.createWhatIfAnalysis(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfAnalysis.CreateWhatIfAnalysisError](src/resources/what-if-analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfAnalysis.createWhatIfAnalysis(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfAnalysis.CreateWhatIfAnalysisError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWhatIfAnalysis(request: WhatIfAnalysis.DeleteWhatIfAnalysisRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfAnalysis.DeleteWhatIfAnalysisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a what-if analysis created using the CreateWhatIfAnalysis operation. You can delete only what-if analyses that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfAnalysis operation. You can't delete a what-if analysis while any of its forecasts are being exported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfAnalysis.deleteWhatIfAnalysis({
    xAmzTarget: XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi.AmazonForecastDeleteWhatIfAnalysis,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfAnalysis.DeleteWhatIfAnalysisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfAnalysis
  .deleteWhatIfAnalysis({
    xAmzTarget: XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi.AmazonForecastDeleteWhatIfAnalysis,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi](src/models/xamz-target1-amazon-forecast-service-what-if-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfAnalysis.deleteWhatIfAnalysis(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfAnalysis.DeleteWhatIfAnalysisError](src/resources/what-if-analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfAnalysis.deleteWhatIfAnalysis(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfAnalysis.DeleteWhatIfAnalysisError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeWhatIfAnalysis(request: WhatIfAnalysis.DescribeWhatIfAnalysisRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfAnalysis.DescribeWhatIfAnalysisError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the what-if analysis created using the CreateWhatIfAnalysis operation. In addition to listing the properties provided in the CreateWhatIfAnalysis request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfAnalysis.describeWhatIfAnalysis({
    xAmzTarget: XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi.AmazonForecastDescribeWhatIfAnalysis,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfAnalysis.DescribeWhatIfAnalysisError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfAnalysis
  .describeWhatIfAnalysis({
    xAmzTarget: XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi.AmazonForecastDescribeWhatIfAnalysis,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi](src/models/xamz-target2-amazon-forecast-service-what-if-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfAnalysis.describeWhatIfAnalysis(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfAnalysis.DescribeWhatIfAnalysisError](src/resources/what-if-analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfAnalysis.describeWhatIfAnalysis(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfAnalysis.DescribeWhatIfAnalysisError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfForecast

> Source: [WhatIfForecast](src/resources/what-if-forecast.ts)

<details>
<summary><code>createWhatIfForecast(request: WhatIfForecast.CreateWhatIfForecastRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfForecast.CreateWhatIfForecastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfForecast.createWhatIfForecast({
    xAmzTarget: XAmzTargetAmazonForecastServiceWhatIfForecastApi.AmazonForecastCreateWhatIfForecast,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfForecast.CreateWhatIfForecastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfForecast
  .createWhatIfForecast({
    xAmzTarget: XAmzTargetAmazonForecastServiceWhatIfForecastApi.AmazonForecastCreateWhatIfForecast,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceWhatIfForecastApi](src/models/xamz-target-amazon-forecast-service-what-if-forecast-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfForecast.createWhatIfForecast(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfForecast.CreateWhatIfForecastError](src/resources/what-if-forecast.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfForecast.createWhatIfForecast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfForecast.CreateWhatIfForecastError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWhatIfForecast(request: WhatIfForecast.DeleteWhatIfForecastRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfForecast.DeleteWhatIfForecastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete only what-if forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecast operation. You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfForecast.deleteWhatIfForecast({
    xAmzTarget: XAmzTarget1AmazonForecastServiceWhatIfForecastApi.AmazonForecastDeleteWhatIfForecast,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfForecast.DeleteWhatIfForecastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfForecast
  .deleteWhatIfForecast({
    xAmzTarget: XAmzTarget1AmazonForecastServiceWhatIfForecastApi.AmazonForecastDeleteWhatIfForecast,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceWhatIfForecastApi](src/models/xamz-target1-amazon-forecast-service-what-if-forecast-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfForecast.deleteWhatIfForecast(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfForecast.DeleteWhatIfForecastError](src/resources/what-if-forecast.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfForecast.deleteWhatIfForecast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfForecast.DeleteWhatIfForecastError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeWhatIfForecast(request: WhatIfForecast.DescribeWhatIfForecastRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfForecast.DescribeWhatIfForecastError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to listing the properties provided in the CreateWhatIfForecast request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfForecast.describeWhatIfForecast({
    xAmzTarget: XAmzTarget2AmazonForecastServiceWhatIfForecastApi.AmazonForecastDescribeWhatIfForecast,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfForecast.DescribeWhatIfForecastError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfForecast
  .describeWhatIfForecast({
    xAmzTarget: XAmzTarget2AmazonForecastServiceWhatIfForecastApi.AmazonForecastDescribeWhatIfForecast,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceWhatIfForecastApi](src/models/xamz-target2-amazon-forecast-service-what-if-forecast-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfForecast.describeWhatIfForecast(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfForecast.DescribeWhatIfForecastError](src/resources/what-if-forecast.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfForecast.describeWhatIfForecast(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfForecast.DescribeWhatIfForecastError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWhatIfForecasts(request: WhatIfForecast.ListWhatIfForecastsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfForecast.ListWhatIfForecastsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the DescribeWhatIfForecast operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfForecast.listWhatIfForecasts({
    xAmzTarget: XAmzTarget3AmazonForecastServiceWhatIfForecastApi.AmazonForecastListWhatIfForecasts,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfForecast.ListWhatIfForecastsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfForecast
  .listWhatIfForecasts({
    xAmzTarget: XAmzTarget3AmazonForecastServiceWhatIfForecastApi.AmazonForecastListWhatIfForecasts,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceWhatIfForecastApi](src/models/xamz-target3-amazon-forecast-service-what-if-forecast-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfForecast.listWhatIfForecasts(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfForecast.ListWhatIfForecastsError](src/resources/what-if-forecast.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfForecast.listWhatIfForecasts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfForecast.ListWhatIfForecastsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WhatIfForecastExport

> Source: [WhatIfForecastExport](src/resources/what-if-forecast-export.ts)

<details>
<summary><code>createWhatIfForecastExport(request: WhatIfForecastExport.CreateWhatIfForecastExportRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfForecastExport.CreateWhatIfForecastExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions: ≈__ The component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeWhatIfForecastExport operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfForecastExport.createWhatIfForecastExport({
    xAmzTarget:
      XAmzTargetAmazonForecastServiceWhatIfForecastExportApi.AmazonForecastCreateWhatIfForecastExport,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfForecastExport.CreateWhatIfForecastExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfForecastExport
  .createWhatIfForecastExport({
    xAmzTarget:
      XAmzTargetAmazonForecastServiceWhatIfForecastExportApi.AmazonForecastCreateWhatIfForecastExport,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonForecastServiceWhatIfForecastExportApi](src/models/xamz-target-amazon-forecast-service-what-if-forecast-export-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfForecastExport.createWhatIfForecastExport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfForecastExport.CreateWhatIfForecastExportError](src/resources/what-if-forecast-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfForecastExport.createWhatIfForecastExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfForecastExport.CreateWhatIfForecastExportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWhatIfForecastExport(request: WhatIfForecastExport.DeleteWhatIfForecastExportRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfForecastExport.DeleteWhatIfForecastExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecastExport operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfForecastExport.deleteWhatIfForecastExport({
    xAmzTarget:
      XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastDeleteWhatIfForecastExport,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfForecastExport.DeleteWhatIfForecastExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfForecastExport
  .deleteWhatIfForecastExport({
    xAmzTarget:
      XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastDeleteWhatIfForecastExport,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi](src/models/xamz-target1-amazon-forecast-service-what-if-forecast-export-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfForecastExport.deleteWhatIfForecastExport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfForecastExport.DeleteWhatIfForecastExportError](src/resources/what-if-forecast-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfForecastExport.deleteWhatIfForecastExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfForecastExport.DeleteWhatIfForecastExportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeWhatIfForecastExport(request: WhatIfForecastExport.DescribeWhatIfForecastExportRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfForecastExport.DescribeWhatIfForecastExportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the what-if forecast export created using the CreateWhatIfForecastExport operation. In addition to listing the properties provided in the CreateWhatIfForecastExport request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfForecastExport.describeWhatIfForecastExport({
    xAmzTarget:
      XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastDescribeWhatIfForecastExport,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfForecastExport.DescribeWhatIfForecastExportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfForecastExport
  .describeWhatIfForecastExport({
    xAmzTarget:
      XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastDescribeWhatIfForecastExport,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi](src/models/xamz-target2-amazon-forecast-service-what-if-forecast-export-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfForecastExport.describeWhatIfForecastExport(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfForecastExport.DescribeWhatIfForecastExportError](src/resources/what-if-forecast-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfForecastExport.describeWhatIfForecastExport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfForecastExport.DescribeWhatIfForecastExportError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWhatIfForecastExports(request: WhatIfForecastExport.ListWhatIfForecastExportsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, WhatIfForecastExport.ListWhatIfForecastExportsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the DescribeWhatIfForecastExport operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.whatIfForecastExport.listWhatIfForecastExports({
    xAmzTarget:
      XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastListWhatIfForecastExports,
  });
} catch (err) {
  // TODO: Handle 'err' of type WhatIfForecastExport.ListWhatIfForecastExportsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.whatIfForecastExport
  .listWhatIfForecastExports({
    xAmzTarget:
      XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi.AmazonForecastListWhatIfForecastExports,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi](src/models/xamz-target3-amazon-forecast-service-what-if-forecast-export-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.whatIfForecastExport.listWhatIfForecastExports(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WhatIfForecastExport.ListWhatIfForecastExportsError](src/resources/what-if-forecast-export.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.whatIfForecastExport.listWhatIfForecastExports(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WhatIfForecastExport.ListWhatIfForecastExportsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonForecastError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

