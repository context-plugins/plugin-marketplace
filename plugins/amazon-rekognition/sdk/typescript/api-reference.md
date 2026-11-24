# Reference

> Source: [AmazonRekognitionClient](src/client.ts)

## CelebrityRecognitionApi

> Source: [CelebrityRecognitionApi](src/resources/celebrity-recognition-api.ts)

<details>
<summary><code>getCelebrityRecognition(request: CelebrityRecognitionApi.GetCelebrityRecognitionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CelebrityRecognitionApi.GetCelebrityRecognitionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by StartCelebrityRecognition. Celebrity recognition in a video is an asynchronous operation. Analysis is started by a call to StartCelebrityRecognition which returns a job identifier (JobId). When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartCelebrityRecognition. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetCelebrityDetection and pass the job identifier (JobId) from the initial call to StartCelebrityDetection. For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide. GetCelebrityRecognition returns detected celebrities and the time(s) they are detected in an array (Celebrities) of CelebrityRecognition objects. Each CelebrityRecognition contains information about the celebrity in a CelebrityDetail object and the time, Timestamp, the celebrity was detected. This CelebrityDetail object stores information about the

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.celebrityRecognitionApi.getCelebrityRecognition({
    xAmzTarget: XAmzTarget.RekognitionServiceGetCelebrityRecognition,
  });
} catch (err) {
  // TODO: Handle 'err' of type CelebrityRecognitionApi.GetCelebrityRecognitionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.celebrityRecognitionApi
  .getCelebrityRecognition({ xAmzTarget: XAmzTarget.RekognitionServiceGetCelebrityRecognition })
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

**Direct**: `await client.celebrityRecognitionApi.getCelebrityRecognition(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CelebrityRecognitionApi.GetCelebrityRecognitionError](src/resources/celebrity-recognition-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.celebrityRecognitionApi.getCelebrityRecognition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CelebrityRecognitionApi.GetCelebrityRecognitionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recognizeCelebrities(request: CelebrityRecognitionApi.RecognizeCelebritiesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CelebrityRecognitionApi.RecognizeCelebritiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of celebrities recognized in the input image. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64 faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded image

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.celebrityRecognitionApi.recognizeCelebrities({
    xAmzTarget: XAmzTarget2.RekognitionServiceRecognizeCelebrities,
  });
} catch (err) {
  // TODO: Handle 'err' of type CelebrityRecognitionApi.RecognizeCelebritiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.celebrityRecognitionApi
  .recognizeCelebrities({ xAmzTarget: XAmzTarget2.RekognitionServiceRecognizeCelebrities })
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

**Direct**: `await client.celebrityRecognitionApi.recognizeCelebrities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CelebrityRecognitionApi.RecognizeCelebritiesError](src/resources/celebrity-recognition-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.celebrityRecognitionApi.recognizeCelebrities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CelebrityRecognitionApi.RecognizeCelebritiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startCelebrityRecognition(request: CelebrityRecognitionApi.StartCelebrityRecognitionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CelebrityRecognitionApi.StartCelebrityRecognitionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous recognition of celebrities in a stored video. Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartCelebrityRecognition returns a job identifier (JobId) which you use to get the results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetCelebrityRecognition and pass the job identifier (JobId) from the initial call to StartCelebrityRecognition. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.celebrityRecognitionApi.startCelebrityRecognition({
    xAmzTarget: XAmzTarget1.RekognitionServiceStartCelebrityRecognition,
  });
} catch (err) {
  // TODO: Handle 'err' of type CelebrityRecognitionApi.StartCelebrityRecognitionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.celebrityRecognitionApi
  .startCelebrityRecognition({ xAmzTarget: XAmzTarget1.RekognitionServiceStartCelebrityRecognition })
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

**Direct**: `await client.celebrityRecognitionApi.startCelebrityRecognition(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CelebrityRecognitionApi.StartCelebrityRecognitionError](src/resources/celebrity-recognition-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.celebrityRecognitionApi.startCelebrityRecognition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CelebrityRecognitionApi.StartCelebrityRecognitionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ContentModeration

> Source: [ContentModeration](src/resources/content-moderation.ts)

<details>
<summary><code>detectModerationLabels(request: ContentModeration.DetectModerationLabelsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ContentModeration.DetectModerationLabelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion argument.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contentModeration.detectModerationLabels({
    xAmzTarget: XAmzTarget2AmazonRekognitionContentModerationApi.RekognitionServiceDetectModerationLabels,
  });
} catch (err) {
  // TODO: Handle 'err' of type ContentModeration.DetectModerationLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contentModeration
  .detectModerationLabels({
    xAmzTarget: XAmzTarget2AmazonRekognitionContentModerationApi.RekognitionServiceDetectModerationLabels,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionContentModerationApi](src/models/xamz-target2-amazon-rekognition-content-moderation-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contentModeration.detectModerationLabels(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ContentModeration.DetectModerationLabelsError](src/resources/content-moderation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contentModeration.detectModerationLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ContentModeration.DetectModerationLabelsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContentModeration(request: ContentModeration.GetContentModerationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ContentModeration.GetContentModerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video analysis started by StartContentModeration. For a list of moderation labels in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition Video inappropriate or offensive content detection in a stored video is an asynchronous operation. You start analysis by calling StartContentModeration which returns a job identifier (JobId). When analysis finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartContentModeration. To get the results of the content analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to StartContentModeration. For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers Guide. GetContentModeration returns detected inappropriate, unwanted, or offensive content moderation labels, and the time they are detected, in an array, ModerationLabels, of ContentModerationDetection objects. By default

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contentModeration.getContentModeration({
    xAmzTarget: XAmzTargetAmazonRekognitionContentModerationApi.RekognitionServiceGetContentModeration,
  });
} catch (err) {
  // TODO: Handle 'err' of type ContentModeration.GetContentModerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contentModeration
  .getContentModeration({
    xAmzTarget: XAmzTargetAmazonRekognitionContentModerationApi.RekognitionServiceGetContentModeration,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionContentModerationApi](src/models/xamz-target-amazon-rekognition-content-moderation-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contentModeration.getContentModeration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ContentModeration.GetContentModerationError](src/resources/content-moderation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contentModeration.getContentModeration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ContentModeration.GetContentModerationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startContentModeration(request: ContentModeration.StartContentModerationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ContentModeration.StartContentModerationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored video. For a list of moderation labels in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition Video can moderate content in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartContentModeration returns a job identifier (JobId) which you use to get the results of the analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the content analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to StartContentModeration. For more information, see Moderating content in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.contentModeration.startContentModeration({
    xAmzTarget: XAmzTarget1AmazonRekognitionContentModerationApi.RekognitionServiceStartContentModeration,
  });
} catch (err) {
  // TODO: Handle 'err' of type ContentModeration.StartContentModerationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.contentModeration
  .startContentModeration({
    xAmzTarget: XAmzTarget1AmazonRekognitionContentModerationApi.RekognitionServiceStartContentModeration,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionContentModerationApi](src/models/xamz-target1-amazon-rekognition-content-moderation-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.contentModeration.startContentModeration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ContentModeration.StartContentModerationError](src/resources/content-moderation.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.contentModeration.startContentModeration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ContentModeration.StartContentModerationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CustomLabels

> Source: [CustomLabels](src/resources/custom-labels.ts)

<details>
<summary><code>detectCustomLabels(request: CustomLabels.DetectCustomLabelsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, CustomLabels.DetectCustomLabelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel object provides the label name (Name), the level of confidence that the image contains the object (Confidence), and object location information, if it exists, for the label on the image (Geometry). To filter labels that are returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.customLabels.detectCustomLabels({
    xAmzTarget: XAmzTargetAmazonRekognitionCustomLabelsApi.RekognitionServiceDetectCustomLabels,
  });
} catch (err) {
  // TODO: Handle 'err' of type CustomLabels.DetectCustomLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customLabels
  .detectCustomLabels({
    xAmzTarget: XAmzTargetAmazonRekognitionCustomLabelsApi.RekognitionServiceDetectCustomLabels,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionCustomLabelsApi](src/models/xamz-target-amazon-rekognition-custom-labels-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customLabels.detectCustomLabels(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[CustomLabels.DetectCustomLabelsError](src/resources/custom-labels.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.customLabels.detectCustomLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, CustomLabels.DetectCustomLabelsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dataset

> Source: [Dataset](src/resources/dataset.ts)

<details>
<summary><code>createDataset(request: Dataset.CreateDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Dataset.CreateDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon Rekognition Custom Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an existing Amazon Rekognition Custom Labels dataset. To create a training dataset for a project, specify TRAIN for the value of DatasetType. To create the test dataset for a project, specify TEST for the value of DatasetType. The response from CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a while to complete. Use DescribeDataset to check the current status. The dataset created successfully if the value of Status is CREATE_COMPLETE. To check if any non-terminal errors occurred, call ListDatasetEntries and check for the presence of errors lists in the JSON Lines. Dataset creation fails if a terminal error occurs (Status = CREATE_FAILED). Currently, you can't access the terminal error information. For more information, see Creating dataset in the Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also requir

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.dataset.createDataset({
    xAmzTarget: XAmzTargetAmazonRekognitionDatasetApi.RekognitionServiceCreateDataset,
  });
} catch (err) {
  // TODO: Handle 'err' of type Dataset.CreateDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset
  .createDataset({ xAmzTarget: XAmzTargetAmazonRekognitionDatasetApi.RekognitionServiceCreateDataset })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionDatasetApi](src/models/xamz-target-amazon-rekognition-dataset-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.createDataset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Dataset.CreateDatasetError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.createDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Dataset.CreateDatasetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDataset(request: Dataset.DeleteDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Dataset.DeleteDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation requires permissions to perform the rekognition:DeleteDataset action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.dataset.deleteDataset({
    xAmzTarget: XAmzTarget1AmazonRekognitionDatasetApi.RekognitionServiceDeleteDataset,
  });
} catch (err) {
  // TODO: Handle 'err' of type Dataset.DeleteDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset
  .deleteDataset({ xAmzTarget: XAmzTarget1AmazonRekognitionDatasetApi.RekognitionServiceDeleteDataset })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionDatasetApi](src/models/xamz-target1-amazon-rekognition-dataset-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.deleteDataset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Dataset.DeleteDatasetError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.deleteDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Dataset.DeleteDatasetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDataset(request: Dataset.DescribeDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Dataset.DescribeDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom Labels dataset. You can get information such as the current status of a dataset and statistics about the images and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.dataset.describeDataset({
    xAmzTarget: XAmzTarget2AmazonRekognitionDatasetApi.RekognitionServiceDescribeDataset,
  });
} catch (err) {
  // TODO: Handle 'err' of type Dataset.DescribeDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dataset
  .describeDataset({ xAmzTarget: XAmzTarget2AmazonRekognitionDatasetApi.RekognitionServiceDescribeDataset })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionDatasetApi](src/models/xamz-target2-amazon-rekognition-dataset-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dataset.describeDataset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Dataset.DescribeDatasetError](src/resources/dataset.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dataset.describeDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Dataset.DescribeDatasetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FaceApi

> Source: [FaceApi](src/resources/face-api.ts)

<details>
<summary><code>associateFaces(request: FaceApi.AssociateFacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceApi.AssociateFacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId that are present in the FaceIds list is associated with the provided UserID. The number of FaceIds that can be used as input in a single request is limited to 100. Note that the total number of faces that can be associated with a single UserID is also limited to 100. Once a UserID has 100 faces associated with it, no additional faces can be added. If more API calls are made after the limit is reached, a ServiceQuotaExceededException will result. The UserMatchThreshold parameter specifies the minimum user match confidence required for the face to be associated with a UserID that has at least one FaceID already associated. This ensures that the FaceIds are associated with the right UserID. The value ranges from 0-100 and default value is 75. If successful, an array of AssociatedFace objects containing the associated FaceIds is returned. If a given face is already associated with the given UserID, it will be ignored and will not be returned in the response. If a given face is already associated to a different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceApi.associateFaces({
    xAmzTarget: XAmzTargetAmazonRekognitionFaceApi.RekognitionServiceAssociateFaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceApi.AssociateFacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceApi
  .associateFaces({ xAmzTarget: XAmzTargetAmazonRekognitionFaceApi.RekognitionServiceAssociateFaces })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionFaceApi](src/models/xamz-target-amazon-rekognition-face-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceApi.associateFaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceApi.AssociateFacesError](src/resources/face-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceApi.associateFaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceApi.AssociateFacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFaces(request: FaceApi.DeleteFacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceApi.DeleteFacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection. This operation requires permissions to perform the rekognition:DeleteFaces action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceApi.deleteFaces({
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceApi.RekognitionServiceDeleteFaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceApi.DeleteFacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceApi
  .deleteFaces({ xAmzTarget: XAmzTarget1AmazonRekognitionFaceApi.RekognitionServiceDeleteFaces })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionFaceApi](src/models/xamz-target1-amazon-rekognition-face-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceApi.deleteFaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceApi.DeleteFacesError](src/resources/face-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceApi.deleteFaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceApi.DeleteFacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disassociateFaces(request: FaceApi.DisassociateFacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceApi.DisassociateFacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the association between a Face supplied in an array of FaceIds and the User. If the User is not present already, then a ResourceNotFound exception is thrown. If successful, an array of faces that are disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will be ignored and not be returned in the response. If a given face is already associated with a different User or not found in the collection it will be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100 face IDs from a user at one time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceApi.disassociateFaces({
    xAmzTarget: XAmzTarget2AmazonRekognitionFaceApi.RekognitionServiceDisassociateFaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceApi.DisassociateFacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceApi
  .disassociateFaces({ xAmzTarget: XAmzTarget2AmazonRekognitionFaceApi.RekognitionServiceDisassociateFaces })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionFaceApi](src/models/xamz-target2-amazon-rekognition-face-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceApi.disassociateFaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceApi.DisassociateFacesError](src/resources/face-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceApi.disassociateFaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceApi.DisassociateFacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFaces(request: FaceApi.ListFacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceApi.ListFacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see Listing Faces in a Collection in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:ListFaces action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceApi.listFaces({ xAmzTarget: XAmzTarget3.RekognitionServiceListFaces });
} catch (err) {
  // TODO: Handle 'err' of type FaceApi.ListFacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceApi
  .listFaces({ xAmzTarget: XAmzTarget3.RekognitionServiceListFaces })
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

**Direct**: `await client.faceApi.listFaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceApi.ListFacesError](src/resources/face-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceApi.listFaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceApi.ListFacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchFaces(request: FaceApi.SearchFacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceApi.SearchFacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of the input face with faces in the specified collection. You can also search faces without indexing faces by using the SearchFacesByImage operation. The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a confidence value for each face match, indicating the confidence that the specific face matches the input face. For an example, see Searching for a face using its face ID in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:SearchFaces action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceApi.searchFaces({ xAmzTarget: XAmzTarget4.RekognitionServiceSearchFaces });
} catch (err) {
  // TODO: Handle 'err' of type FaceApi.SearchFacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceApi
  .searchFaces({ xAmzTarget: XAmzTarget4.RekognitionServiceSearchFaces })
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

**Direct**: `await client.faceApi.searchFaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceApi.SearchFacesError](src/resources/face-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceApi.searchFaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceApi.SearchFacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchFacesByImage(request: FaceApi.SearchFacesByImageRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceApi.SearchFacesByImageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection. To search for all faces in an input image, you might first call the IndexFaces operation, and then use the face IDs returned in subsequent calls to the SearchFaces operation. You can also call the DetectFaces operation and use the bounding boxes in the response to make face crops, which then you can pass in to the SearchFacesByImage operation. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a similarity indicating how similar the face is to the input face. In the response, the operation also returns the bo

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceApi.searchFacesByImage({ xAmzTarget: XAmzTarget5.RekognitionServiceSearchFacesByImage });
} catch (err) {
  // TODO: Handle 'err' of type FaceApi.SearchFacesByImageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceApi
  .searchFacesByImage({ xAmzTarget: XAmzTarget5.RekognitionServiceSearchFacesByImage })
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

**Direct**: `await client.faceApi.searchFacesByImage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceApi.SearchFacesByImageError](src/resources/face-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceApi.searchFacesByImage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceApi.SearchFacesByImageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FaceCollections

> Source: [FaceCollections](src/resources/face-collections.ts)

<details>
<summary><code>createCollection(request: FaceCollections.CreateCollectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceCollections.CreateCollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation. For example, you might create collections, one for each of your application users. A user can then index faces using the IndexFaces operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container. When you create a collection, it is associated with the latest version of the face model version. Collection names are case-sensitive. This operation requires permissions to perform the rekognition:CreateCollection action. If you want to tag your collection, you also require permission to perform the rekognition:TagResource operation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceCollections.createCollection({
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceCollectionsApi.RekognitionServiceCreateCollection,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceCollections.CreateCollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceCollections
  .createCollection({
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceCollectionsApi.RekognitionServiceCreateCollection,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionFaceCollectionsApi](src/models/xamz-target1-amazon-rekognition-face-collections-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceCollections.createCollection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceCollections.CreateCollectionError](src/resources/face-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceCollections.createCollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceCollections.CreateCollectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexFaces(request: FaceCollections.IndexFacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceCollections.IndexFacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection. If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. If you're using version 4 or later of the face model, image orientation information is not returned in the OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceCollections.indexFaces({
    xAmzTarget: XAmzTargetAmazonRekognitionFaceCollectionsApi.RekognitionServiceIndexFaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceCollections.IndexFacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceCollections
  .indexFaces({ xAmzTarget: XAmzTargetAmazonRekognitionFaceCollectionsApi.RekognitionServiceIndexFaces })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionFaceCollectionsApi](src/models/xamz-target-amazon-rekognition-face-collections-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceCollections.indexFaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceCollections.IndexFacesError](src/resources/face-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceCollections.indexFaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceCollections.IndexFacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCollections(request: FaceCollections.ListCollectionsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceCollections.ListCollectionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of collection IDs in your account. If the result is truncated, the response also provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example, see Listing collections in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:ListCollections action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceCollections.listCollections({
    xAmzTarget: XAmzTarget2AmazonRekognitionFaceCollectionsApi.RekognitionServiceListCollections,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceCollections.ListCollectionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceCollections
  .listCollections({
    xAmzTarget: XAmzTarget2AmazonRekognitionFaceCollectionsApi.RekognitionServiceListCollections,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionFaceCollectionsApi](src/models/xamz-target2-amazon-rekognition-face-collections-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceCollections.listCollections(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceCollections.ListCollectionsError](src/resources/face-collections.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceCollections.listCollections(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceCollections.ListCollectionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FaceLiveness

> Source: [FaceLiveness](src/resources/face-liveness.ts)

<details>
<summary><code>createFaceLivenessSession(request: FaceLiveness.CreateFaceLivenessSessionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceLiveness.CreateFaceLivenessSessionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the selfie-video. You can use the ChallengePreferences option in the Settings parameter to choose between the 'FaceMovementAndLightChallenge' or FaceMovementChallenge' settings. See the Shared Responsibility page for details on guidance for which setting to choose between these two settings depending on your use case and preferences. This parameter is optional and if no parameter is provided, then the 'FaceMovementAndLightChallenge' settings is applied by default.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceLiveness.createFaceLivenessSession({
    xAmzTarget: XAmzTargetAmazonRekognitionFaceLivenessApi.RekognitionServiceCreateFaceLivenessSession,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceLiveness.CreateFaceLivenessSessionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceLiveness
  .createFaceLivenessSession({
    xAmzTarget: XAmzTargetAmazonRekognitionFaceLivenessApi.RekognitionServiceCreateFaceLivenessSession,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionFaceLivenessApi](src/models/xamz-target-amazon-rekognition-face-liveness-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceLiveness.createFaceLivenessSession(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceLiveness.CreateFaceLivenessSessionError](src/resources/face-liveness.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceLiveness.createFaceLivenessSession(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceLiveness.CreateFaceLivenessSessionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFaceLivenessSessionResults(request: FaceLiveness.GetFaceLivenessSessionResultsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceLiveness.GetFaceLivenessSessionResultsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. The number of audit images returned by GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling CreateFaceLivenessSession. Reference images are always returned when possible. For a session that has completed, the response can also include a Feedback list describing conditions that were detected in the selfie-video, such as low lighting or an obstructed face, and Metadata about the client that streamed the session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceLiveness.getFaceLivenessSessionResults({
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceLivenessApi.RekognitionServiceGetFaceLivenessSessionResults,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceLiveness.GetFaceLivenessSessionResultsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceLiveness
  .getFaceLivenessSessionResults({
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceLivenessApi.RekognitionServiceGetFaceLivenessSessionResults,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionFaceLivenessApi](src/models/xamz-target1-amazon-rekognition-face-liveness-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceLiveness.getFaceLivenessSessionResults(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceLiveness.GetFaceLivenessSessionResultsError](src/resources/face-liveness.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceLiveness.getFaceLivenessSessionResults(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceLiveness.GetFaceLivenessSessionResultsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FaceSearch

> Source: [FaceSearch](src/resources/face-search.ts)

<details>
<summary><code>getFaceSearch(request: FaceSearch.GetFaceSearchRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceSearch.GetFaceSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the face search results for Amazon Rekognition Video face search started by StartFaceSearch. The search returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s) that faces are matched in the video. Face search in a video is an asynchronous operation. You start face search by calling to StartFaceSearch which returns a job identifier (JobId). When the search operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartFaceSearch. To get the search results, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide. The search results are retured in an array, Persons, of PersonMatch objects. EachPersonMatch element contains details about the matching faces in the input collection, person information (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceSearch.getFaceSearch({
    xAmzTarget: XAmzTargetAmazonRekognitionFaceSearchApi.RekognitionServiceGetFaceSearch,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceSearch.GetFaceSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceSearch
  .getFaceSearch({ xAmzTarget: XAmzTargetAmazonRekognitionFaceSearchApi.RekognitionServiceGetFaceSearch })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionFaceSearchApi](src/models/xamz-target-amazon-rekognition-face-search-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceSearch.getFaceSearch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceSearch.GetFaceSearchError](src/resources/face-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceSearch.getFaceSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceSearch.GetFaceSearchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchFacesByImage2(request: FaceSearch.SearchFacesByImage2Request, options?: RequestOptions): ApiPromise&lt;undefined, FaceSearch.SearchFacesByImage2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection. To search for all faces in an input image, you might first call the IndexFaces operation, and then use the face IDs returned in subsequent calls to the SearchFaces operation. You can also call the DetectFaces operation and use the bounding boxes in the response to make face crops, which then you can pass in to the SearchFacesByImage operation. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a similarity indicating how similar the face is to the input face. In the response, the operation also returns the bo

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceSearch.searchFacesByImage2({
    xAmzTarget: XAmzTarget2AmazonRekognitionFaceSearchApi.RekognitionServiceSearchFacesByImage,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceSearch.SearchFacesByImage2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceSearch
  .searchFacesByImage2({
    xAmzTarget: XAmzTarget2AmazonRekognitionFaceSearchApi.RekognitionServiceSearchFacesByImage,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionFaceSearchApi](src/models/xamz-target2-amazon-rekognition-face-search-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceSearch.searchFacesByImage2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceSearch.SearchFacesByImage2Error](src/resources/face-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceSearch.searchFacesByImage2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceSearch.SearchFacesByImage2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startFaceSearch(request: FaceSearch.StartFaceSearchRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FaceSearch.StartFaceSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartFaceSearch returns a job identifier (JobId) which you use to get the search results once the search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the search results, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching stored videos for faces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.faceSearch.startFaceSearch({
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceSearchApi.RekognitionServiceStartFaceSearch,
  });
} catch (err) {
  // TODO: Handle 'err' of type FaceSearch.StartFaceSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.faceSearch
  .startFaceSearch({
    xAmzTarget: XAmzTarget1AmazonRekognitionFaceSearchApi.RekognitionServiceStartFaceSearch,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionFaceSearchApi](src/models/xamz-target1-amazon-rekognition-face-search-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.faceSearch.startFaceSearch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FaceSearch.StartFaceSearchError](src/resources/face-search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.faceSearch.startFaceSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FaceSearch.StartFaceSearchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FacialAnalysis

> Source: [FacialAnalysis](src/resources/facial-analysis.ts)

<details>
<summary><code>compareFaces(request: FacialAnalysis.CompareFacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FacialAnalysis.CompareFacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use CompareFaces to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action. You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.facialAnalysis.compareFaces({
    xAmzTarget: XAmzTargetAmazonRekognitionFacialAnalysisApi.RekognitionServiceCompareFaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type FacialAnalysis.CompareFacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.facialAnalysis
  .compareFaces({ xAmzTarget: XAmzTargetAmazonRekognitionFacialAnalysisApi.RekognitionServiceCompareFaces })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionFacialAnalysisApi](src/models/xamz-target-amazon-rekognition-facial-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.facialAnalysis.compareFaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FacialAnalysis.CompareFacesError](src/resources/facial-analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.facialAnalysis.compareFaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FacialAnalysis.CompareFacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectFaces(request: FacialAnalysis.DetectFacesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, FacialAnalysis.DetectFacesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectFaces action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.facialAnalysis.detectFaces({
    xAmzTarget: XAmzTarget1AmazonRekognitionFacialAnalysisApi.RekognitionServiceDetectFaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type FacialAnalysis.DetectFacesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.facialAnalysis
  .detectFaces({ xAmzTarget: XAmzTarget1AmazonRekognitionFacialAnalysisApi.RekognitionServiceDetectFaces })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionFacialAnalysisApi](src/models/xamz-target1-amazon-rekognition-facial-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.facialAnalysis.detectFaces(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FacialAnalysis.DetectFacesError](src/resources/facial-analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.facialAnalysis.detectFaces(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FacialAnalysis.DetectFacesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ImageAnalysis

> Source: [ImageAnalysis](src/resources/image-analysis.ts)

<details>
<summary><code>detectLabels(request: ImageAnalysis.DetectLabelsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ImageAnalysis.DetectLabelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.imageAnalysis.detectLabels({
    xAmzTarget: XAmzTargetAmazonRekognitionImageAnalysisApi.RekognitionServiceDetectLabels,
  });
} catch (err) {
  // TODO: Handle 'err' of type ImageAnalysis.DetectLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.imageAnalysis
  .detectLabels({ xAmzTarget: XAmzTargetAmazonRekognitionImageAnalysisApi.RekognitionServiceDetectLabels })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionImageAnalysisApi](src/models/xamz-target-amazon-rekognition-image-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.imageAnalysis.detectLabels(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ImageAnalysis.DetectLabelsError](src/resources/image-analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.imageAnalysis.detectLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ImageAnalysis.DetectLabelsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MediaAnalysisJob

> Source: [MediaAnalysisJob](src/resources/media-analysis-job.ts)

<details>
<summary><code>getMediaAnalysisJob(request: MediaAnalysisJob.GetMediaAnalysisJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MediaAnalysisJob.GetMediaAnalysisJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Retrieves the results for a given media analysis job. Takes a JobId returned by StartMediaAnalysisJob.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.mediaAnalysisJob.getMediaAnalysisJob({
    xAmzTarget: XAmzTargetAmazonRekognitionMediaAnalysisJobApi.RekognitionServiceGetMediaAnalysisJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type MediaAnalysisJob.GetMediaAnalysisJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaAnalysisJob
  .getMediaAnalysisJob({
    xAmzTarget: XAmzTargetAmazonRekognitionMediaAnalysisJobApi.RekognitionServiceGetMediaAnalysisJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionMediaAnalysisJobApi](src/models/xamz-target-amazon-rekognition-media-analysis-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaAnalysisJob.getMediaAnalysisJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MediaAnalysisJob.GetMediaAnalysisJobError](src/resources/media-analysis-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mediaAnalysisJob.getMediaAnalysisJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MediaAnalysisJob.GetMediaAnalysisJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMediaAnalysisJobs(request: MediaAnalysisJob.ListMediaAnalysisJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MediaAnalysisJob.ListMediaAnalysisJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Returns a list of media analysis jobs. Results are sorted by CreationTimestamp in descending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.mediaAnalysisJob.listMediaAnalysisJobs({
    xAmzTarget: XAmzTarget1AmazonRekognitionMediaAnalysisJobApi.RekognitionServiceListMediaAnalysisJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type MediaAnalysisJob.ListMediaAnalysisJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaAnalysisJob
  .listMediaAnalysisJobs({
    xAmzTarget: XAmzTarget1AmazonRekognitionMediaAnalysisJobApi.RekognitionServiceListMediaAnalysisJobs,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionMediaAnalysisJobApi](src/models/xamz-target1-amazon-rekognition-media-analysis-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaAnalysisJob.listMediaAnalysisJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MediaAnalysisJob.ListMediaAnalysisJobsError](src/resources/media-analysis-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mediaAnalysisJob.listMediaAnalysisJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MediaAnalysisJob.ListMediaAnalysisJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startMediaAnalysisJob(request: MediaAnalysisJob.StartMediaAnalysisJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, MediaAnalysisJob.StartMediaAnalysisJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Initiates a new media analysis job. Accepts a manifest file in an Amazon S3 bucket. The output is a manifest file and a summary of the manifest stored in the Amazon S3 bucket.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.mediaAnalysisJob.startMediaAnalysisJob({
    xAmzTarget: XAmzTarget2AmazonRekognitionMediaAnalysisJobApi.RekognitionServiceStartMediaAnalysisJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type MediaAnalysisJob.StartMediaAnalysisJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaAnalysisJob
  .startMediaAnalysisJob({
    xAmzTarget: XAmzTarget2AmazonRekognitionMediaAnalysisJobApi.RekognitionServiceStartMediaAnalysisJob,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionMediaAnalysisJobApi](src/models/xamz-target2-amazon-rekognition-media-analysis-job-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaAnalysisJob.startMediaAnalysisJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[MediaAnalysisJob.StartMediaAnalysisJobError](src/resources/media-analysis-job.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.mediaAnalysisJob.startMediaAnalysisJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, MediaAnalysisJob.StartMediaAnalysisJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>compareFaces2(request: Operations.CompareFaces2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.CompareFaces2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use CompareFaces to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action. You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.compareFaces2({
    xAmzTarget: XAmzTargetAmazonRekognitionFacialAnalysisApi.RekognitionServiceCompareFaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.CompareFaces2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .compareFaces2({ xAmzTarget: XAmzTargetAmazonRekognitionFacialAnalysisApi.RekognitionServiceCompareFaces })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionFacialAnalysisApi](src/models/xamz-target-amazon-rekognition-facial-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.compareFaces2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.CompareFaces2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.compareFaces2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.CompareFaces2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>copyProjectVersion(request: Operations.CopyProjectVersionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.CopyProjectVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and destination projects can be in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. To copy a model version to a different AWS account, you need to create a resource-based policy known as a project policy. You attach the project policy to the source project by calling PutProjectPolicy. The project policy gives permission to copy the model version from a trusting AWS account to a trusted account. For more information creating and attaching a project policy, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. If you are copying a model version to a project in the same AWS account, you don't need to create a project policy. Copying project versions is supported only for Custom Labels models. To copy a model, the destination project, source project, and source model version must already exist. Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and che

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.copyProjectVersion({
    xAmzTarget: XAmzTarget1AmazonRekognitionOperationsApi.RekognitionServiceCopyProjectVersion,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.CopyProjectVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .copyProjectVersion({
    xAmzTarget: XAmzTarget1AmazonRekognitionOperationsApi.RekognitionServiceCopyProjectVersion,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionOperationsApi](src/models/xamz-target1-amazon-rekognition-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.copyProjectVersion(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.CopyProjectVersionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.copyProjectVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.CopyProjectVersionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCollection(request: Operations.DeleteCollectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DeleteCollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see Deleting a collection. This operation requires permissions to perform the rekognition:DeleteCollection action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.deleteCollection({ xAmzTarget: XAmzTarget11.RekognitionServiceDeleteCollection });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DeleteCollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .deleteCollection({ xAmzTarget: XAmzTarget11.RekognitionServiceDeleteCollection })
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

**Direct**: `await client.operations.deleteCollection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DeleteCollectionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.deleteCollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DeleteCollectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeCollection(request: Operations.DescribeCollectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DescribeCollectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the specified collection. You can use DescribeCollection to get information, such as the number of faces indexed into a collection and the version of the model used by the collection for face detection. For more information, see Describing a Collection in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.describeCollection({
    xAmzTarget: XAmzTarget12.RekognitionServiceDescribeCollection,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DescribeCollectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .describeCollection({ xAmzTarget: XAmzTarget12.RekognitionServiceDescribeCollection })
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

**Direct**: `await client.operations.describeCollection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DescribeCollectionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.describeCollection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DescribeCollectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectCustomLabels2(request: Operations.DetectCustomLabels2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectCustomLabels2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel object provides the label name (Name), the level of confidence that the image contains the object (Confidence), and object location information, if it exists, for the label on the image (Geometry). To filter labels that are returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectCustomLabels2({
    xAmzTarget: XAmzTarget2AmazonRekognitionOperationsApi.RekognitionServiceDetectCustomLabels,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectCustomLabels2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectCustomLabels2({
    xAmzTarget: XAmzTarget2AmazonRekognitionOperationsApi.RekognitionServiceDetectCustomLabels,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionOperationsApi](src/models/xamz-target2-amazon-rekognition-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectCustomLabels2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectCustomLabels2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectCustomLabels2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectCustomLabels2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectFaces2(request: Operations.DetectFaces2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectFaces2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectFaces action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectFaces2({
    xAmzTarget: XAmzTarget3AmazonRekognitionOperationsApi.RekognitionServiceDetectFaces,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectFaces2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectFaces2({ xAmzTarget: XAmzTarget3AmazonRekognitionOperationsApi.RekognitionServiceDetectFaces })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonRekognitionOperationsApi](src/models/xamz-target3-amazon-rekognition-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectFaces2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectFaces2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectFaces2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectFaces2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectLabels2(request: Operations.DetectLabels2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectLabels2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectLabels2({
    xAmzTarget: XAmzTarget4AmazonRekognitionOperationsApi.RekognitionServiceDetectLabels,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectLabels2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectLabels2({ xAmzTarget: XAmzTarget4AmazonRekognitionOperationsApi.RekognitionServiceDetectLabels })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonRekognitionOperationsApi](src/models/xamz-target4-amazon-rekognition-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectLabels2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectLabels2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectLabels2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectLabels2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectModerationLabels2(request: Operations.DetectModerationLabels2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectModerationLabels2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion argument.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectModerationLabels2({
    xAmzTarget: XAmzTarget5AmazonRekognitionOperationsApi.RekognitionServiceDetectModerationLabels,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectModerationLabels2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectModerationLabels2({
    xAmzTarget: XAmzTarget5AmazonRekognitionOperationsApi.RekognitionServiceDetectModerationLabels,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5AmazonRekognitionOperationsApi](src/models/xamz-target5-amazon-rekognition-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectModerationLabels2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectModerationLabels2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectModerationLabels2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectModerationLabels2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectProtectiveEquipment(request: Operations.DetectProtectiveEquipmentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectProtectiveEquipmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the following types of PPE. Face cover Hand cover Head cover You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG formatted file. DetectProtectiveEquipment detects PPE worn by up to 15 persons detected in an image. For each person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body part coverage). It also returns a bounding box (BoundingBox) for each detected person and each detected item of PPE. You can optionally request a summary of detected PPE items with the SummarizationAttributes input parameter. The summary provides the following information. The persons detected as wearing all of the types of PPE that you specify. The persons detected as not wearing all of the types PPE that you specify. The persons dete

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectProtectiveEquipment({
    xAmzTarget: XAmzTarget6.RekognitionServiceDetectProtectiveEquipment,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectProtectiveEquipmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectProtectiveEquipment({ xAmzTarget: XAmzTarget6.RekognitionServiceDetectProtectiveEquipment })
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

**Direct**: `await client.operations.detectProtectiveEquipment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectProtectiveEquipmentError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectProtectiveEquipment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectProtectiveEquipmentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectText(request: Operations.DetectTextRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectTextError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects text in the input image and converts it into machine-readable text. Pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection element provides information about a single word or line of text that was detected in the image. A word is one or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when there is a large gap between words, relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectText({ xAmzTarget: XAmzTarget7.RekognitionServiceDetectText });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectTextError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectText({ xAmzTarget: XAmzTarget7.RekognitionServiceDetectText })
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

**Direct**: `await client.operations.detectText(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectTextError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectTextError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>distributeDatasetEntries(request: Operations.DistributeDatasetEntriesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DistributeDatasetEntriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project. DistributeDatasetEntries moves 20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call CreateDataset. Distributing a dataset takes a while to complete. To check the status call DescribeDataset. The operation is complete when the Status field for the training dataset and the test dataset is UPDATE_COMPLETE. If the dataset split fails, the value of Status is UPDATE_FAILED. This operation requires permissions to perform the rekognition:DistributeDatasetEntries action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.distributeDatasetEntries({
    xAmzTarget: XAmzTarget8.RekognitionServiceDistributeDatasetEntries,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DistributeDatasetEntriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .distributeDatasetEntries({ xAmzTarget: XAmzTarget8.RekognitionServiceDistributeDatasetEntries })
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

**Direct**: `await client.operations.distributeDatasetEntries(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DistributeDatasetEntriesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.distributeDatasetEntries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DistributeDatasetEntriesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCelebrityInfo(request: Operations.GetCelebrityInfoRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.GetCelebrityInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the name and additional information about a celebrity based on their Amazon Rekognition ID. The additional information is returned as an array of URLs. If there is no additional information about the celebrity, this list is empty. For more information, see Getting information about a celebrity in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:GetCelebrityInfo action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.getCelebrityInfo({ xAmzTarget: XAmzTarget13.RekognitionServiceGetCelebrityInfo });
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetCelebrityInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getCelebrityInfo({ xAmzTarget: XAmzTarget13.RekognitionServiceGetCelebrityInfo })
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

**Direct**: `await client.operations.getCelebrityInfo(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.GetCelebrityInfoError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getCelebrityInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.GetCelebrityInfoError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFaceDetection(request: Operations.GetFaceDetectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.GetFaceDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets face detection results for a Amazon Rekognition Video analysis started by StartFaceDetection. Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling StartFaceDetection which returns a job identifier (JobId). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartFaceDetection. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job identifier (JobId) from the initial call to StartFaceDetection. GetFaceDetection returns an array of detected faces (Faces) sorted by the time the faces were detected. Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetFaceDetection and populate the NextToken request parameter with the token value returned from the previous

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.getFaceDetection({ xAmzTarget: XAmzTarget14.RekognitionServiceGetFaceDetection });
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetFaceDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getFaceDetection({ xAmzTarget: XAmzTarget14.RekognitionServiceGetFaceDetection })
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

**Direct**: `await client.operations.getFaceDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.GetFaceDetectionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getFaceDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.GetFaceDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPersonTracking(request: Operations.GetPersonTrackingRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.GetPersonTrackingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability. For more information, visit this blog post. Gets the path tracking results of a Amazon Rekognition Video analysis started by StartPersonTracking. The person path tracking operation is started by a call to StartPersonTracking which returns a job identifier (JobId). When the operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartPersonTracking. To get the results of the person path tracking operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job identifier (JobId) from the initial call to StartPersonTracking. GetPersonTracking returns an array, Persons, of tracked persons and the time(s) their paths were tracked in the video. GetPersonTracking only returns the default facial attributes (BoundingBox, Confidence, Landmarks, Pose, and Quality). The other facial attributes listed in the Face

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.getPersonTracking({ xAmzTarget: XAmzTarget16.RekognitionServiceGetPersonTracking });
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetPersonTrackingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getPersonTracking({ xAmzTarget: XAmzTarget16.RekognitionServiceGetPersonTracking })
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

**Direct**: `await client.operations.getPersonTracking(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.GetPersonTrackingError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getPersonTracking(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.GetPersonTrackingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSegmentDetection(request: Operations.GetSegmentDetectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.GetSegmentDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the segment detection results of a Amazon Rekognition Video analysis started by StartSegmentDetection. Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by calling StartSegmentDetection which returns a job identifier (JobId). When the segment detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartSegmentDetection. To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call of StartSegmentDetection. GetSegmentDetection returns detected segments in an array (Segments) of SegmentDetection objects. Segments is sorted by the segment types specified in the SegmentTypes input parameter of StartSegmentDetection. Each element of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment, the type of the segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out the type of seg

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.getSegmentDetection({
    xAmzTarget: XAmzTarget18.RekognitionServiceGetSegmentDetection,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.GetSegmentDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .getSegmentDetection({ xAmzTarget: XAmzTarget18.RekognitionServiceGetSegmentDetection })
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

**Direct**: `await client.operations.getSegmentDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.GetSegmentDetectionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.getSegmentDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.GetSegmentDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>indexFaces2(request: Operations.IndexFaces2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.IndexFaces2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection. If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. If you're using version 4 or later of the face model, image orientation information is not returned in the OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.indexFaces2({ xAmzTarget: XAmzTarget9.RekognitionServiceIndexFaces });
} catch (err) {
  // TODO: Handle 'err' of type Operations.IndexFaces2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .indexFaces2({ xAmzTarget: XAmzTarget9.RekognitionServiceIndexFaces })
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

**Direct**: `await client.operations.indexFaces2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.IndexFaces2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.indexFaces2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.IndexFaces2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDatasetEntries(request: Operations.ListDatasetEntriesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListDatasetEntriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images) within a dataset. An entry is a JSON Line that contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Creating a manifest file. JSON Lines in the response include information about non-terminal errors found in the dataset. Non terminal errors are reported in errors lists within each JSON Line. The same information is reported in the training and testing validation result manifests that Amazon Rekognition Custom Labels creates during model training. You can filter the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after a specific date. This operation requires permissions to perform the rekognition:ListDatasetEntries action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listDatasetEntries({
    xAmzTarget: XAmzTarget20.RekognitionServiceListDatasetEntries,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListDatasetEntriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listDatasetEntries({ xAmzTarget: XAmzTarget20.RekognitionServiceListDatasetEntries })
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

**Direct**: `await client.operations.listDatasetEntries(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListDatasetEntriesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listDatasetEntries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListDatasetEntriesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDatasetLabels(request: Operations.ListDatasetLabelsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListDatasetLabelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images in the Amazon Rekognition Custom Labels Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listDatasetLabels({ xAmzTarget: XAmzTarget22.RekognitionServiceListDatasetLabels });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListDatasetLabelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listDatasetLabels({ xAmzTarget: XAmzTarget22.RekognitionServiceListDatasetLabels })
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

**Direct**: `await client.operations.listDatasetLabels(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListDatasetLabelsError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listDatasetLabels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListDatasetLabelsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForResource(request: Operations.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels model. This operation requires permissions to perform the rekognition:ListTagsForResource action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.listTagsForResource({
    xAmzTarget: XAmzTarget23.RekognitionServiceListTagsForResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .listTagsForResource({ xAmzTarget: XAmzTarget23.RekognitionServiceListTagsForResource })
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

**Direct**: `await client.operations.listTagsForResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ListTagsForResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>recognizeCelebrities2(request: Operations.RecognizeCelebrities2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.RecognizeCelebrities2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of celebrities recognized in the input image. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64 faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded image

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.recognizeCelebrities2({
    xAmzTarget: XAmzTarget2.RekognitionServiceRecognizeCelebrities,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.RecognizeCelebrities2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .recognizeCelebrities2({ xAmzTarget: XAmzTarget2.RekognitionServiceRecognizeCelebrities })
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

**Direct**: `await client.operations.recognizeCelebrities2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.RecognizeCelebrities2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.recognizeCelebrities2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.RecognizeCelebrities2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startFaceDetection(request: Operations.StartFaceDetectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.StartFaceDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartFaceDetection returns a job identifier (JobId) that you use to get the results of the operation. When face detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job identifier (JobId) from the initial call to StartFaceDetection. For more information, see Detecting faces in a stored video in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.startFaceDetection({
    xAmzTarget: XAmzTarget15.RekognitionServiceStartFaceDetection,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartFaceDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .startFaceDetection({ xAmzTarget: XAmzTarget15.RekognitionServiceStartFaceDetection })
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

**Direct**: `await client.operations.startFaceDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.StartFaceDetectionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startFaceDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.StartFaceDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startPersonTracking(request: Operations.StartPersonTrackingRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.StartPersonTrackingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability. For more information, visit this blog post. Starts the asynchronous tracking of a person's path in a stored video. Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartPersonTracking returns a job identifier (JobId) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the person detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job identifier (JobId) from the initial call to StartPersonTracking.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.startPersonTracking({
    xAmzTarget: XAmzTarget17.RekognitionServiceStartPersonTracking,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartPersonTrackingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .startPersonTracking({ xAmzTarget: XAmzTarget17.RekognitionServiceStartPersonTracking })
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

**Direct**: `await client.operations.startPersonTracking(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.StartPersonTrackingError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startPersonTracking(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.StartPersonTrackingError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSegmentDetection(request: Operations.StartSegmentDetectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.StartSegmentDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of segment detection in a stored video. Amazon Rekognition Video can detect segments in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartSegmentDetection returns a job identifier (JobId) which you use to get the results of the operation. When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. You can use the Filters (StartSegmentDetectionFilters) input parameter to specify the minimum detection confidence returned in the response. Within Filters, use ShotFilter (StartShotDetectionFilter) to filter detected shots. Use TechnicalCueFilter (StartTechnicalCueDetectionFilter) to filter technical cues. To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call to StartSegmentDetection. For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.startSegmentDetection({
    xAmzTarget: XAmzTarget19.RekognitionServiceStartSegmentDetection,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.StartSegmentDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .startSegmentDetection({ xAmzTarget: XAmzTarget19.RekognitionServiceStartSegmentDetection })
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

**Direct**: `await client.operations.startSegmentDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.StartSegmentDetectionError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.startSegmentDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.StartSegmentDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: Operations.TagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels model. For more information, see Tagging AWS Resources. This operation requires permissions to perform the rekognition:TagResource action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.tagResource({ xAmzTarget: XAmzTarget24.RekognitionServiceTagResource });
} catch (err) {
  // TODO: Handle 'err' of type Operations.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .tagResource({ xAmzTarget: XAmzTarget24.RekognitionServiceTagResource })
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

**Direct**: `await client.operations.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.TagResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: Operations.UntagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model. This operation requires permissions to perform the rekognition:UntagResource action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.untagResource({ xAmzTarget: XAmzTarget25.RekognitionServiceUntagResource });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .untagResource({ xAmzTarget: XAmzTarget25.RekognitionServiceUntagResource })
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

**Direct**: `await client.operations.untagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UntagResourceError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UntagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDatasetEntries(request: Operations.UpdateDatasetEntriesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.UpdateDatasetEntriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in manifest files and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer Guide. If the source-ref field in the JSON line references an existing image, the existing image in the dataset is updated. If source-ref field doesn't reference an existing image, the image is added as a new image to the dataset. You specify the changes that you want to make in the Changes input parameter. There isn't a limit to the number JSON Lines that you can change, but the size of Changes must be less than 5MB. UpdateDatasetEntries returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the current status. The dataset updated successfully if the value of Status is UPDATE_COMPLETE. To check if any non-terminal errors occured, call ListDatasetEntries and check for the presence of errors lists in the J

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.updateDatasetEntries({
    xAmzTarget: XAmzTarget21.RekognitionServiceUpdateDatasetEntries,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.UpdateDatasetEntriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .updateDatasetEntries({ xAmzTarget: XAmzTarget21.RekognitionServiceUpdateDatasetEntries })
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

**Direct**: `await client.operations.updateDatasetEntries(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.UpdateDatasetEntriesError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.updateDatasetEntries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.UpdateDatasetEntriesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Project

> Source: [Project](src/resources/project.ts)

<details>
<summary><code>createProject(request: Project.CreateProjectRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Project.CreateProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a feature to create the project with, if no feature is specified then Custom Labels is used by default. For adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument. This operation requires permissions to perform the rekognition:CreateProject action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.project.createProject({
    xAmzTarget: XAmzTargetAmazonRekognitionProjectApi.RekognitionServiceCreateProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type Project.CreateProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.project
  .createProject({ xAmzTarget: XAmzTargetAmazonRekognitionProjectApi.RekognitionServiceCreateProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionProjectApi](src/models/xamz-target-amazon-rekognition-project-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.project.createProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Project.CreateProjectError](src/resources/project.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.project.createProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Project.CreateProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProject(request: Project.DeleteProjectRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Project.DeleteProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when the project no longer appears in the response. Be aware that deleting a given project will also delete any ProjectPolicies associated with that project. This operation requires permissions to perform the rekognition:DeleteProject action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.project.deleteProject({
    xAmzTarget: XAmzTarget1AmazonRekognitionProjectApi.RekognitionServiceDeleteProject,
  });
} catch (err) {
  // TODO: Handle 'err' of type Project.DeleteProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.project
  .deleteProject({ xAmzTarget: XAmzTarget1AmazonRekognitionProjectApi.RekognitionServiceDeleteProject })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionProjectApi](src/models/xamz-target1-amazon-rekognition-project-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.project.deleteProject(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Project.DeleteProjectError](src/resources/project.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.project.deleteProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Project.DeleteProjectError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeProjects(request: Project.DescribeProjectsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Project.DescribeProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about your Rekognition projects. This operation requires permissions to perform the rekognition:DescribeProjects action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.project.describeProjects({
    xAmzTarget: XAmzTarget2AmazonRekognitionProjectApi.RekognitionServiceDescribeProjects,
  });
} catch (err) {
  // TODO: Handle 'err' of type Project.DescribeProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.project
  .describeProjects({ xAmzTarget: XAmzTarget2AmazonRekognitionProjectApi.RekognitionServiceDescribeProjects })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionProjectApi](src/models/xamz-target2-amazon-rekognition-project-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.project.describeProjects(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Project.DescribeProjectsError](src/resources/project.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.project.describeProjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Project.DescribeProjectsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectPolicyApi

> Source: [ProjectPolicyApi](src/resources/project-policy-api.ts)

<details>
<summary><code>deleteProjectPolicy(request: ProjectPolicyApi.DeleteProjectPolicyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ProjectPolicyApi.DeleteProjectPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a project, call PutProjectPolicy. This operation requires permissions to perform the rekognition:DeleteProjectPolicy action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projectPolicyApi.deleteProjectPolicy({
    xAmzTarget: XAmzTargetAmazonRekognitionProjectPolicyApi.RekognitionServiceDeleteProjectPolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type ProjectPolicyApi.DeleteProjectPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectPolicyApi
  .deleteProjectPolicy({
    xAmzTarget: XAmzTargetAmazonRekognitionProjectPolicyApi.RekognitionServiceDeleteProjectPolicy,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionProjectPolicyApi](src/models/xamz-target-amazon-rekognition-project-policy-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectPolicyApi.deleteProjectPolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProjectPolicyApi.DeleteProjectPolicyError](src/resources/project-policy-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectPolicyApi.deleteProjectPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProjectPolicyApi.DeleteProjectPolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listProjectPolicies(request: ProjectPolicyApi.ListProjectPoliciesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ProjectPolicyApi.ListProjectPoliciesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a project, call DeleteProjectPolicy. This operation requires permissions to perform the rekognition:ListProjectPolicies action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projectPolicyApi.listProjectPolicies({
    xAmzTarget: XAmzTarget1AmazonRekognitionProjectPolicyApi.RekognitionServiceListProjectPolicies,
  });
} catch (err) {
  // TODO: Handle 'err' of type ProjectPolicyApi.ListProjectPoliciesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectPolicyApi
  .listProjectPolicies({
    xAmzTarget: XAmzTarget1AmazonRekognitionProjectPolicyApi.RekognitionServiceListProjectPolicies,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionProjectPolicyApi](src/models/xamz-target1-amazon-rekognition-project-policy-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectPolicyApi.listProjectPolicies(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProjectPolicyApi.ListProjectPoliciesError](src/resources/project-policy-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectPolicyApi.listProjectPolicies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProjectPolicyApi.ListProjectPoliciesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putProjectPolicy(request: ProjectPolicyApi.PutProjectPolicyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ProjectPolicyApi.PutProjectPolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project policy. You can attach multiple project policies to a project. You can also update an existing project policy by specifying the policy revision ID of the existing policy. To remove a project policy from a project, call DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy a model version by calling CopyProjectVersion. This operation requires permissions to perform the rekognition:PutProjectPolicy action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projectPolicyApi.putProjectPolicy({
    xAmzTarget: XAmzTarget2AmazonRekognitionProjectPolicyApi.RekognitionServicePutProjectPolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type ProjectPolicyApi.PutProjectPolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectPolicyApi
  .putProjectPolicy({
    xAmzTarget: XAmzTarget2AmazonRekognitionProjectPolicyApi.RekognitionServicePutProjectPolicy,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionProjectPolicyApi](src/models/xamz-target2-amazon-rekognition-project-policy-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectPolicyApi.putProjectPolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProjectPolicyApi.PutProjectPolicyError](src/resources/project-policy-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectPolicyApi.putProjectPolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProjectPolicyApi.PutProjectPolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectVersion

> Source: [ProjectVersion](src/resources/project-version.ts)

<details>
<summary><code>createProjectVersion(request: ProjectVersion.CreateProjectVersionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ProjectVersion.CreateProjectVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter) and begins training. Models and adapters are managed as part of a Rekognition project. The response from CreateProjectVersion is an Amazon Resource Name (ARN) for the project version. The FeatureConfig operation argument allows you to configure specific model or adapter settings. You can provide a description to the project version by using the VersionDescription argment. Training can take a while to complete. You can get the current status by calling DescribeProjectVersions. Training completed successfully if the value of the Status field is TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to get the training results and evaluate the model. This operation requires permissions to perform the rekognition:CreateProjectVersion action. The following applies only to projects with Amazon Rekognition Custom Labels as the chosen feature: You can train a model in a project that doesn't have associated datasets by specifying manifest files in the TrainingData and TestingData fields. If you open the console after training a model with manifest files, A

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projectVersion.createProjectVersion({
    xAmzTarget: XAmzTargetAmazonRekognitionProjectVersionApi.RekognitionServiceCreateProjectVersion,
  });
} catch (err) {
  // TODO: Handle 'err' of type ProjectVersion.CreateProjectVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectVersion
  .createProjectVersion({
    xAmzTarget: XAmzTargetAmazonRekognitionProjectVersionApi.RekognitionServiceCreateProjectVersion,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionProjectVersionApi](src/models/xamz-target-amazon-rekognition-project-version-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectVersion.createProjectVersion(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProjectVersion.CreateProjectVersionError](src/resources/project-version.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectVersion.createProjectVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProjectVersion.CreateProjectVersionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProjectVersion(request: ProjectVersion.DeleteProjectVersionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ProjectVersion.DeleteProjectVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a custom adapter. You can't delete a project version if it is running or if it is training. To check the status of a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call StopProjectVersion. If the project version is training, wait until it finishes. This operation requires permissions to perform the rekognition:DeleteProjectVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projectVersion.deleteProjectVersion({
    xAmzTarget: XAmzTarget1AmazonRekognitionProjectVersionApi.RekognitionServiceDeleteProjectVersion,
  });
} catch (err) {
  // TODO: Handle 'err' of type ProjectVersion.DeleteProjectVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectVersion
  .deleteProjectVersion({
    xAmzTarget: XAmzTarget1AmazonRekognitionProjectVersionApi.RekognitionServiceDeleteProjectVersion,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionProjectVersionApi](src/models/xamz-target1-amazon-rekognition-project-version-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectVersion.deleteProjectVersion(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProjectVersion.DeleteProjectVersionError](src/resources/project-version.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectVersion.deleteProjectVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProjectVersion.DeleteProjectVersionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeProjectVersions(request: ProjectVersion.DescribeProjectVersionsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ProjectVersion.DescribeProjectVersionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10 model or adapter versions in ProjectVersionArns. If you don't specify a value, descriptions for all model/adapter versions in the project are returned. This operation requires permissions to perform the rekognition:DescribeProjectVersions action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projectVersion.describeProjectVersions({
    xAmzTarget: XAmzTarget2AmazonRekognitionProjectVersionApi.RekognitionServiceDescribeProjectVersions,
  });
} catch (err) {
  // TODO: Handle 'err' of type ProjectVersion.DescribeProjectVersionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectVersion
  .describeProjectVersions({
    xAmzTarget: XAmzTarget2AmazonRekognitionProjectVersionApi.RekognitionServiceDescribeProjectVersions,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionProjectVersionApi](src/models/xamz-target2-amazon-rekognition-project-version-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectVersion.describeProjectVersions(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProjectVersion.DescribeProjectVersionsError](src/resources/project-version.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectVersion.describeProjectVersions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProjectVersion.DescribeProjectVersionsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startProjectVersion(request: ProjectVersion.StartProjectVersionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ProjectVersion.StartProjectVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use DescribeProjectVersions. Once the model is running, you can detect custom labels in new images by calling DetectCustomLabels. You are charged for the amount of time that the model is running. To stop a running model, call StopProjectVersion. This operation requires permissions to perform the rekognition:StartProjectVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projectVersion.startProjectVersion({
    xAmzTarget: XAmzTarget3AmazonRekognitionProjectVersionApi.RekognitionServiceStartProjectVersion,
  });
} catch (err) {
  // TODO: Handle 'err' of type ProjectVersion.StartProjectVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectVersion
  .startProjectVersion({
    xAmzTarget: XAmzTarget3AmazonRekognitionProjectVersionApi.RekognitionServiceStartProjectVersion,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonRekognitionProjectVersionApi](src/models/xamz-target3-amazon-rekognition-project-version-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectVersion.startProjectVersion(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProjectVersion.StartProjectVersionError](src/resources/project-version.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectVersion.startProjectVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProjectVersion.StartProjectVersionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopProjectVersion(request: ProjectVersion.StopProjectVersionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ProjectVersion.StopProjectVersionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The operation might take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom Labels projects. This operation requires permissions to perform the rekognition:StopProjectVersion action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.projectVersion.stopProjectVersion({
    xAmzTarget: XAmzTarget4AmazonRekognitionProjectVersionApi.RekognitionServiceStopProjectVersion,
  });
} catch (err) {
  // TODO: Handle 'err' of type ProjectVersion.StopProjectVersionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projectVersion
  .stopProjectVersion({
    xAmzTarget: XAmzTarget4AmazonRekognitionProjectVersionApi.RekognitionServiceStopProjectVersion,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonRekognitionProjectVersionApi](src/models/xamz-target4-amazon-rekognition-project-version-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projectVersion.stopProjectVersion(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ProjectVersion.StopProjectVersionError](src/resources/project-version.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projectVersion.stopProjectVersion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ProjectVersion.StopProjectVersionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StoredVideoAnalysis

> Source: [StoredVideoAnalysis](src/resources/stored-video-analysis.ts)

<details>
<summary><code>getLabelDetection(request: StoredVideoAnalysis.GetLabelDetectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StoredVideoAnalysis.GetLabelDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection. The label detection operation is started by a call to StartLabelDetection which returns a job identifier (JobId). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartlabelDetection. To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection. GetLabelDetection returns an array of detected labels (Labels) sorted by the time the labels were detected. You can also sort by the label name by specifying NAME for the SortBy input parameter. If there is no NAME specified, the default sort is by timestamp. You can select how results are aggregated by using the AggregateBy input parameter. The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which aggregates all instances of labels detected in a given segment. The returned Labels array may include the 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.storedVideoAnalysis.getLabelDetection({
    xAmzTarget: XAmzTargetAmazonRekognitionStoredVideoAnalysisApi.RekognitionServiceGetLabelDetection,
  });
} catch (err) {
  // TODO: Handle 'err' of type StoredVideoAnalysis.GetLabelDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storedVideoAnalysis
  .getLabelDetection({
    xAmzTarget: XAmzTargetAmazonRekognitionStoredVideoAnalysisApi.RekognitionServiceGetLabelDetection,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionStoredVideoAnalysisApi](src/models/xamz-target-amazon-rekognition-stored-video-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storedVideoAnalysis.getLabelDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StoredVideoAnalysis.GetLabelDetectionError](src/resources/stored-video-analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storedVideoAnalysis.getLabelDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StoredVideoAnalysis.GetLabelDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startLabelDetection(request: StoredVideoAnalysis.StartLabelDetectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StoredVideoAnalysis.StartLabelDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of labels in a stored video. Amazon Rekognition Video can detect labels in a video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like a person getting out of a car or a person skiing. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartLabelDetection returns a job identifier (JobId) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection. Optional Parameters StartLabelDetection has the GENERAL_LABELS Feature applied by default. This feature allows you to provide filtering criteria to the Settings parameter. Yo

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.storedVideoAnalysis.startLabelDetection({
    xAmzTarget: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi.RekognitionServiceStartLabelDetection,
  });
} catch (err) {
  // TODO: Handle 'err' of type StoredVideoAnalysis.StartLabelDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.storedVideoAnalysis
  .startLabelDetection({
    xAmzTarget: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi.RekognitionServiceStartLabelDetection,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi](src/models/xamz-target1-amazon-rekognition-stored-video-analysis-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.storedVideoAnalysis.startLabelDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StoredVideoAnalysis.StartLabelDetectionError](src/resources/stored-video-analysis.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.storedVideoAnalysis.startLabelDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StoredVideoAnalysis.StartLabelDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## StreamProcessorApi

> Source: [StreamProcessorApi](src/resources/stream-processor-api.ts)

<details>
<summary><code>createStreamProcessor(request: StreamProcessorApi.CreateStreamProcessorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StreamProcessorApi.CreateStreamProcessorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video. Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels. If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output) stream for receiving the output. You must use the FaceSearch option in Settings, specifying the collection that contains the faces you want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop processing. If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream (Input), Amazon S3 bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). Y

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.streamProcessorApi.createStreamProcessor({
    xAmzTarget: XAmzTargetAmazonRekognitionStreamProcessorApi.RekognitionServiceCreateStreamProcessor,
  });
} catch (err) {
  // TODO: Handle 'err' of type StreamProcessorApi.CreateStreamProcessorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.streamProcessorApi
  .createStreamProcessor({
    xAmzTarget: XAmzTargetAmazonRekognitionStreamProcessorApi.RekognitionServiceCreateStreamProcessor,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionStreamProcessorApi](src/models/xamz-target-amazon-rekognition-stream-processor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.streamProcessorApi.createStreamProcessor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StreamProcessorApi.CreateStreamProcessorError](src/resources/stream-processor-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.streamProcessorApi.createStreamProcessor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StreamProcessorApi.CreateStreamProcessorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteStreamProcessor(request: StreamProcessorApi.DeleteStreamProcessorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StreamProcessorApi.DeleteStreamProcessorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Deletes the stream processor identified by Name. You assign the value for Name when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name for a stream processor for a few seconds after calling DeleteStreamProcessor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.streamProcessorApi.deleteStreamProcessor({
    xAmzTarget: XAmzTarget1AmazonRekognitionStreamProcessorApi.RekognitionServiceDeleteStreamProcessor,
  });
} catch (err) {
  // TODO: Handle 'err' of type StreamProcessorApi.DeleteStreamProcessorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.streamProcessorApi
  .deleteStreamProcessor({
    xAmzTarget: XAmzTarget1AmazonRekognitionStreamProcessorApi.RekognitionServiceDeleteStreamProcessor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionStreamProcessorApi](src/models/xamz-target1-amazon-rekognition-stream-processor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.streamProcessorApi.deleteStreamProcessor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StreamProcessorApi.DeleteStreamProcessorError](src/resources/stream-processor-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.streamProcessorApi.deleteStreamProcessor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StreamProcessorApi.DeleteStreamProcessorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeStreamProcessor(request: StreamProcessorApi.DescribeStreamProcessorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StreamProcessorApi.DescribeStreamProcessorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Provides information about a stream processor created by CreateStreamProcessor. You can get information about the input and output streams, the input parameters for the face recognition being performed, and the current status of the stream processor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.streamProcessorApi.describeStreamProcessor({
    xAmzTarget: XAmzTarget2AmazonRekognitionStreamProcessorApi.RekognitionServiceDescribeStreamProcessor,
  });
} catch (err) {
  // TODO: Handle 'err' of type StreamProcessorApi.DescribeStreamProcessorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.streamProcessorApi
  .describeStreamProcessor({
    xAmzTarget: XAmzTarget2AmazonRekognitionStreamProcessorApi.RekognitionServiceDescribeStreamProcessor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionStreamProcessorApi](src/models/xamz-target2-amazon-rekognition-stream-processor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.streamProcessorApi.describeStreamProcessor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StreamProcessorApi.DescribeStreamProcessorError](src/resources/stream-processor-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.streamProcessorApi.describeStreamProcessor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StreamProcessorApi.DescribeStreamProcessorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listStreamProcessors(request: StreamProcessorApi.ListStreamProcessorsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StreamProcessorApi.ListStreamProcessorsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Gets a list of stream processors that you have created with CreateStreamProcessor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.streamProcessorApi.listStreamProcessors({
    xAmzTarget: XAmzTarget3AmazonRekognitionStreamProcessorApi.RekognitionServiceListStreamProcessors,
  });
} catch (err) {
  // TODO: Handle 'err' of type StreamProcessorApi.ListStreamProcessorsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.streamProcessorApi
  .listStreamProcessors({
    xAmzTarget: XAmzTarget3AmazonRekognitionStreamProcessorApi.RekognitionServiceListStreamProcessors,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonRekognitionStreamProcessorApi](src/models/xamz-target3-amazon-rekognition-stream-processor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.streamProcessorApi.listStreamProcessors(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StreamProcessorApi.ListStreamProcessorsError](src/resources/stream-processor-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.streamProcessorApi.listStreamProcessors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StreamProcessorApi.ListStreamProcessorsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startStreamProcessor(request: StreamProcessorApi.StartStreamProcessorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StreamProcessorApi.StartStreamProcessorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Starts processing a stream processor. You create a stream processor by calling CreateStreamProcessor. To tell StartStreamProcessor which stream processor to start, use the value of the Name field specified in the call to CreateStreamProcessor. If you are using a label detection stream processor to detect labels, you need to provide a Start selector and a Stop selector to determine the length of the stream processing time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.streamProcessorApi.startStreamProcessor({
    xAmzTarget: XAmzTarget4AmazonRekognitionStreamProcessorApi.RekognitionServiceStartStreamProcessor,
  });
} catch (err) {
  // TODO: Handle 'err' of type StreamProcessorApi.StartStreamProcessorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.streamProcessorApi
  .startStreamProcessor({
    xAmzTarget: XAmzTarget4AmazonRekognitionStreamProcessorApi.RekognitionServiceStartStreamProcessor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonRekognitionStreamProcessorApi](src/models/xamz-target4-amazon-rekognition-stream-processor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.streamProcessorApi.startStreamProcessor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StreamProcessorApi.StartStreamProcessorError](src/resources/stream-processor-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.streamProcessorApi.startStreamProcessor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StreamProcessorApi.StartStreamProcessorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopStreamProcessor(request: StreamProcessorApi.StopStreamProcessorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StreamProcessorApi.StopStreamProcessorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Stops a running stream processor that was created by CreateStreamProcessor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.streamProcessorApi.stopStreamProcessor({
    xAmzTarget: XAmzTarget5AmazonRekognitionStreamProcessorApi.RekognitionServiceStopStreamProcessor,
  });
} catch (err) {
  // TODO: Handle 'err' of type StreamProcessorApi.StopStreamProcessorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.streamProcessorApi
  .stopStreamProcessor({
    xAmzTarget: XAmzTarget5AmazonRekognitionStreamProcessorApi.RekognitionServiceStopStreamProcessor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget5AmazonRekognitionStreamProcessorApi](src/models/xamz-target5-amazon-rekognition-stream-processor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.streamProcessorApi.stopStreamProcessor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StreamProcessorApi.StopStreamProcessorError](src/resources/stream-processor-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.streamProcessorApi.stopStreamProcessor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StreamProcessorApi.StopStreamProcessorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStreamProcessor(request: StreamProcessorApi.UpdateStreamProcessorRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, StreamProcessorApi.UpdateStreamProcessorError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Allows you to update a stream processor. You can change some settings and regions of interest and delete certain parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.streamProcessorApi.updateStreamProcessor({
    xAmzTarget: XAmzTarget6AmazonRekognitionStreamProcessorApi.RekognitionServiceUpdateStreamProcessor,
  });
} catch (err) {
  // TODO: Handle 'err' of type StreamProcessorApi.UpdateStreamProcessorError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.streamProcessorApi
  .updateStreamProcessor({
    xAmzTarget: XAmzTarget6AmazonRekognitionStreamProcessorApi.RekognitionServiceUpdateStreamProcessor,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget6AmazonRekognitionStreamProcessorApi](src/models/xamz-target6-amazon-rekognition-stream-processor-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.streamProcessorApi.updateStreamProcessor(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[StreamProcessorApi.UpdateStreamProcessorError](src/resources/stream-processor-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.streamProcessorApi.updateStreamProcessor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, StreamProcessorApi.UpdateStreamProcessorError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TextDetectionApi

> Source: [TextDetectionApi](src/resources/text-detection-api.ts)

<details>
<summary><code>detectText2(request: TextDetectionApi.DetectText2Request, options?: RequestOptions): ApiPromise&lt;undefined, TextDetectionApi.DetectText2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects text in the input image and converts it into machine-readable text. Pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection element provides information about a single word or line of text that was detected in the image. A word is one or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when there is a large gap between words, relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.textDetectionApi.detectText2({
    xAmzTarget: XAmzTarget2AmazonRekognitionTextDetectionApi.RekognitionServiceDetectText,
  });
} catch (err) {
  // TODO: Handle 'err' of type TextDetectionApi.DetectText2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textDetectionApi
  .detectText2({ xAmzTarget: XAmzTarget2AmazonRekognitionTextDetectionApi.RekognitionServiceDetectText })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionTextDetectionApi](src/models/xamz-target2-amazon-rekognition-text-detection-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textDetectionApi.detectText2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TextDetectionApi.DetectText2Error](src/resources/text-detection-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textDetectionApi.detectText2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TextDetectionApi.DetectText2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTextDetection(request: TextDetectionApi.GetTextDetectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TextDetectionApi.GetTextDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the text detection results of a Amazon Rekognition Video analysis started by StartTextDetection. Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling StartTextDetection which returns a job identifier (JobId) When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartTextDetection. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and pass the job identifier (JobId) from the initial call of StartLabelDetection. GetTextDetection returns an array of detected text (TextDetections) sorted by the time the text was detected, up to 100 words per frame of video. Each element of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time the text was detected, bounding box information for where the text was located, and unique identifiers for words and their lines. Use MaxResults parameter to limit the number of text detections returned. If there are 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.textDetectionApi.getTextDetection({
    xAmzTarget: XAmzTargetAmazonRekognitionTextDetectionApi.RekognitionServiceGetTextDetection,
  });
} catch (err) {
  // TODO: Handle 'err' of type TextDetectionApi.GetTextDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textDetectionApi
  .getTextDetection({
    xAmzTarget: XAmzTargetAmazonRekognitionTextDetectionApi.RekognitionServiceGetTextDetection,
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionTextDetectionApi](src/models/xamz-target-amazon-rekognition-text-detection-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textDetectionApi.getTextDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TextDetectionApi.GetTextDetectionError](src/resources/text-detection-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textDetectionApi.getTextDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TextDetectionApi.GetTextDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTextDetection(request: TextDetectionApi.StartTextDetectionRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, TextDetectionApi.StartTextDetectionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of text in a stored video. Amazon Rekognition Video can detect text in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartTextDetection returns a job identifier (JobId) which you use to get the results of the operation. When text detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and pass the job identifier (JobId) from the initial call to StartTextDetection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.textDetectionApi.startTextDetection({
    xAmzTarget: XAmzTarget1AmazonRekognitionTextDetectionApi.RekognitionServiceStartTextDetection,
  });
} catch (err) {
  // TODO: Handle 'err' of type TextDetectionApi.StartTextDetectionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.textDetectionApi
  .startTextDetection({
    xAmzTarget: XAmzTarget1AmazonRekognitionTextDetectionApi.RekognitionServiceStartTextDetection,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionTextDetectionApi](src/models/xamz-target1-amazon-rekognition-text-detection-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.textDetectionApi.startTextDetection(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[TextDetectionApi.StartTextDetectionError](src/resources/text-detection-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.textDetectionApi.startTextDetection(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, TextDetectionApi.StartTextDetectionError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](src/resources/user-api.ts)

<details>
<summary><code>createUser(request: UserApi.CreateUserRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, UserApi.CreateUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter, which is a user provided ID which should be unique within the collection. The provided UserId will alias the system generated UUID to make the UserId more user friendly. Uses a ClientToken, an idempotency token that ensures a call to CreateUser completes only once. If the value is not supplied, the AWS SDK generates an idempotency token for the requests. This prevents retries after a network error results from making multiple CreateUser calls.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.userApi.createUser({
    xAmzTarget: XAmzTargetAmazonRekognitionUserApi.RekognitionServiceCreateUser,
  });
} catch (err) {
  // TODO: Handle 'err' of type UserApi.CreateUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi
  .createUser({ xAmzTarget: XAmzTargetAmazonRekognitionUserApi.RekognitionServiceCreateUser })
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
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonRekognitionUserApi](src/models/xamz-target-amazon-rekognition-user-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.createUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UserApi.CreateUserError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.createUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UserApi.CreateUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: UserApi.DeleteUserRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, UserApi.DeleteUserError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified UserID within the collection. Faces that are associated with the UserID are disassociated from the UserID before deleting the specified UserID. If the specified Collection or UserID is already deleted or not found, a ResourceNotFoundException will be thrown. If the action is successful with a 200 response, an empty HTTP body is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.userApi.deleteUser({
    xAmzTarget: XAmzTarget1AmazonRekognitionUserApi.RekognitionServiceDeleteUser,
  });
} catch (err) {
  // TODO: Handle 'err' of type UserApi.DeleteUserError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi
  .deleteUser({ xAmzTarget: XAmzTarget1AmazonRekognitionUserApi.RekognitionServiceDeleteUser })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonRekognitionUserApi](src/models/xamz-target1-amazon-rekognition-user-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.deleteUser(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UserApi.DeleteUserError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UserApi.DeleteUserError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUsers(request: UserApi.ListUsersRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, UserApi.ListUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata of the User such as UserID in the specified collection. Anonymous User (to reserve faces without any identity) is not returned as part of this request. The results are sorted by system generated primary key ID. If the response is truncated, NextToken is returned in the response that can be used in the subsequent request to retrieve the next set of identities.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.userApi.listUsers({
    xAmzTarget: XAmzTarget2AmazonRekognitionUserApi.RekognitionServiceListUsers,
  });
} catch (err) {
  // TODO: Handle 'err' of type UserApi.ListUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi
  .listUsers({ xAmzTarget: XAmzTarget2AmazonRekognitionUserApi.RekognitionServiceListUsers })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonRekognitionUserApi](src/models/xamz-target2-amazon-rekognition-user-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.listUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UserApi.ListUsersError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.listUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UserApi.ListUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchUsers(request: UserApi.SearchUsersRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, UserApi.SearchUsersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to find the closest UserID (with a highest similarity) to associate a face. The request must be provided with either FaceId or UserId. The operation returns an array of UserID that match the FaceId or UserId, ordered by similarity score with the highest similarity first.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.userApi.searchUsers({
    xAmzTarget: XAmzTarget3AmazonRekognitionUserApi.RekognitionServiceSearchUsers,
  });
} catch (err) {
  // TODO: Handle 'err' of type UserApi.SearchUsersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi
  .searchUsers({ xAmzTarget: XAmzTarget3AmazonRekognitionUserApi.RekognitionServiceSearchUsers })
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
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonRekognitionUserApi](src/models/xamz-target3-amazon-rekognition-user-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.searchUsers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UserApi.SearchUsersError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.searchUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UserApi.SearchUsersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchUsersByImage(request: UserApi.SearchUsersByImageRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, UserApi.SearchUsersByImageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then searches a specified collection for matching UserIDs. The operation returns an array of UserIDs that match the face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a bounding box for the face found in the input image. Information about faces detected in the supplied image, but not used for the search, is returned in an array of UnsearchedFace objects. If no valid face is detected in the image, the response will contain an empty UserMatches list and no SearchedFace object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.userApi.searchUsersByImage({
    xAmzTarget: XAmzTarget4AmazonRekognitionUserApi.RekognitionServiceSearchUsersByImage,
  });
} catch (err) {
  // TODO: Handle 'err' of type UserApi.SearchUsersByImageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userApi
  .searchUsersByImage({
    xAmzTarget: XAmzTarget4AmazonRekognitionUserApi.RekognitionServiceSearchUsersByImage,
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
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonRekognitionUserApi](src/models/xamz-target4-amazon-rekognition-user-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userApi.searchUsersByImage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[UserApi.SearchUsersByImageError](src/resources/user-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userApi.searchUsersByImage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, UserApi.SearchUsersByImageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonRekognitionError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

