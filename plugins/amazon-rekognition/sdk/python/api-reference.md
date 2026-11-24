# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AmazonRekognitionClient](amazon_rekognition/client.py)

## CelebrityRecognitionApi

> Source: [CelebrityRecognitionApi](amazon_rekognition/apis/celebrity_recognition_api.py)

<details>
<summary><code>def get_celebrity_recognition(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by StartCelebrityRecognition. Celebrity recognition in a video is an asynchronous operation. Analysis is started by a call to StartCelebrityRecognition which returns a job identifier (JobId). When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartCelebrityRecognition. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetCelebrityDetection and pass the job identifier (JobId) from the initial call to StartCelebrityDetection. For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide. GetCelebrityRecognition returns detected celebrities and the time(s) they are detected in an array (Celebrities) of CelebrityRecognition objects. Each CelebrityRecognition contains information about the celebrity in a CelebrityDetail object and the time, Timestamp, the celebrity was detected. This CelebrityDetail object stores information about the

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.celebrity_recognition_api.get_celebrity_recognition(XAmzTarget.REKOGNITION_SERVICE_GET_CELEBRITY_RECOGNITION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCelebrityRecognitionErrorBody
```

**Async**

```python
try:
    await async_client.celebrity_recognition_api.get_celebrity_recognition(
        XAmzTarget.REKOGNITION_SERVICE_GET_CELEBRITY_RECOGNITION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCelebrityRecognitionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](amazon_rekognition/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetCelebrityRecognitionErrorBody](amazon_rekognition/errors/get_celebrity_recognition_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recognize_celebrities(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of celebrities recognized in the input image. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64 faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded image

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.celebrity_recognition_api.recognize_celebrities(XAmzTarget2.REKOGNITION_SERVICE_RECOGNIZE_CELEBRITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizeCelebritiesErrorBody
```

**Async**

```python
try:
    await async_client.celebrity_recognition_api.recognize_celebrities(
        XAmzTarget2.REKOGNITION_SERVICE_RECOGNIZE_CELEBRITIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizeCelebritiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](amazon_rekognition/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[RecognizeCelebritiesErrorBody](amazon_rekognition/errors/recognize_celebrities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_celebrity_recognition(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous recognition of celebrities in a stored video. Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartCelebrityRecognition returns a job identifier (JobId) which you use to get the results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetCelebrityRecognition and pass the job identifier (JobId) from the initial call to StartCelebrityRecognition. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.celebrity_recognition_api.start_celebrity_recognition(
        XAmzTarget1.REKOGNITION_SERVICE_START_CELEBRITY_RECOGNITION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartCelebrityRecognitionErrorBody
```

**Async**

```python
try:
    await async_client.celebrity_recognition_api.start_celebrity_recognition(
        XAmzTarget1.REKOGNITION_SERVICE_START_CELEBRITY_RECOGNITION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartCelebrityRecognitionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](amazon_rekognition/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartCelebrityRecognitionErrorBody](amazon_rekognition/errors/start_celebrity_recognition_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContentModeration

> Source: [ContentModeration](amazon_rekognition/apis/content_moderation.py)

<details>
<summary><code>def detect_moderation_labels(x_amz_target: XAmzTarget2AmazonRekognitionContentModerationApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion argument.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.content_moderation.detect_moderation_labels(
        XAmzTarget2AmazonRekognitionContentModerationApi.REKOGNITION_SERVICE_DETECT_MODERATION_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectModerationLabelsErrorBody
```

**Async**

```python
try:
    await async_client.content_moderation.detect_moderation_labels(
        XAmzTarget2AmazonRekognitionContentModerationApi.REKOGNITION_SERVICE_DETECT_MODERATION_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectModerationLabelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionContentModerationApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_content_moderation_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectModerationLabelsErrorBody](amazon_rekognition/errors/detect_moderation_labels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_content_moderation(x_amz_target: XAmzTargetAmazonRekognitionContentModerationApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video analysis started by StartContentModeration. For a list of moderation labels in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition Video inappropriate or offensive content detection in a stored video is an asynchronous operation. You start analysis by calling StartContentModeration which returns a job identifier (JobId). When analysis finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartContentModeration. To get the results of the content analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to StartContentModeration. For more information, see Working with Stored Videos in the Amazon Rekognition Devlopers Guide. GetContentModeration returns detected inappropriate, unwanted, or offensive content moderation labels, and the time they are detected, in an array, ModerationLabels, of ContentModerationDetection objects. By default

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.content_moderation.get_content_moderation(
        XAmzTargetAmazonRekognitionContentModerationApi.REKOGNITION_SERVICE_GET_CONTENT_MODERATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContentModerationErrorBody
```

**Async**

```python
try:
    await async_client.content_moderation.get_content_moderation(
        XAmzTargetAmazonRekognitionContentModerationApi.REKOGNITION_SERVICE_GET_CONTENT_MODERATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContentModerationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionContentModerationApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_content_moderation_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetContentModerationErrorBody](amazon_rekognition/errors/get_content_moderation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_content_moderation(x_amz_target: XAmzTarget1AmazonRekognitionContentModerationApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of inappropriate, unwanted, or offensive content in a stored video. For a list of moderation labels in Amazon Rekognition, see Using the image and video moderation APIs. Amazon Rekognition Video can moderate content in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartContentModeration returns a job identifier (JobId) which you use to get the results of the analysis. When content analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the content analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetContentModeration and pass the job identifier (JobId) from the initial call to StartContentModeration. For more information, see Moderating content in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.content_moderation.start_content_moderation(
        XAmzTarget1AmazonRekognitionContentModerationApi.REKOGNITION_SERVICE_START_CONTENT_MODERATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartContentModerationErrorBody
```

**Async**

```python
try:
    await async_client.content_moderation.start_content_moderation(
        XAmzTarget1AmazonRekognitionContentModerationApi.REKOGNITION_SERVICE_START_CONTENT_MODERATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartContentModerationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionContentModerationApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_content_moderation_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartContentModerationErrorBody](amazon_rekognition/errors/start_content_moderation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomLabels

> Source: [CustomLabels](amazon_rekognition/apis/custom_labels.py)

<details>
<summary><code>def detect_custom_labels(x_amz_target: XAmzTargetAmazonRekognitionCustomLabelsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel object provides the label name (Name), the level of confidence that the image contains the object (Confidence), and object location information, if it exists, for the label on the image (Geometry). To filter labels that are returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.custom_labels.detect_custom_labels(
        XAmzTargetAmazonRekognitionCustomLabelsApi.REKOGNITION_SERVICE_DETECT_CUSTOM_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectCustomLabelsErrorBody
```

**Async**

```python
try:
    await async_client.custom_labels.detect_custom_labels(
        XAmzTargetAmazonRekognitionCustomLabelsApi.REKOGNITION_SERVICE_DETECT_CUSTOM_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectCustomLabelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionCustomLabelsApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_custom_labels_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectCustomLabelsErrorBody](amazon_rekognition/errors/detect_custom_labels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Dataset

> Source: [Dataset](amazon_rekognition/apis/dataset.py)

<details>
<summary><code>def create_dataset(x_amz_target: XAmzTargetAmazonRekognitionDatasetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon Rekognition Custom Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an existing Amazon Rekognition Custom Labels dataset. To create a training dataset for a project, specify TRAIN for the value of DatasetType. To create the test dataset for a project, specify TEST for the value of DatasetType. The response from CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a while to complete. Use DescribeDataset to check the current status. The dataset created successfully if the value of Status is CREATE_COMPLETE. To check if any non-terminal errors occurred, call ListDatasetEntries and check for the presence of errors lists in the JSON Lines. Dataset creation fails if a terminal error occurs (Status = CREATE_FAILED). Currently, you can't access the terminal error information. For more information, see Creating dataset in the Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also requir

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset.create_dataset(XAmzTargetAmazonRekognitionDatasetApi.REKOGNITION_SERVICE_CREATE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetErrorBody
```

**Async**

```python
try:
    await async_client.dataset.create_dataset(XAmzTargetAmazonRekognitionDatasetApi.REKOGNITION_SERVICE_CREATE_DATASET)
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
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionDatasetApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_dataset_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CreateDatasetErrorBody](amazon_rekognition/errors/create_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_dataset(x_amz_target: XAmzTarget1AmazonRekognitionDatasetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation requires permissions to perform the rekognition:DeleteDataset action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset.delete_dataset(XAmzTarget1AmazonRekognitionDatasetApi.REKOGNITION_SERVICE_DELETE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDatasetErrorBody
```

**Async**

```python
try:
    await async_client.dataset.delete_dataset(XAmzTarget1AmazonRekognitionDatasetApi.REKOGNITION_SERVICE_DELETE_DATASET)
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
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionDatasetApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_dataset_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DeleteDatasetErrorBody](amazon_rekognition/errors/delete_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_dataset(x_amz_target: XAmzTarget2AmazonRekognitionDatasetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom Labels dataset. You can get information such as the current status of a dataset and statistics about the images and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.dataset.describe_dataset(XAmzTarget2AmazonRekognitionDatasetApi.REKOGNITION_SERVICE_DESCRIBE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetErrorBody
```

**Async**

```python
try:
    await async_client.dataset.describe_dataset(
        XAmzTarget2AmazonRekognitionDatasetApi.REKOGNITION_SERVICE_DESCRIBE_DATASET
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
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionDatasetApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_dataset_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DescribeDatasetErrorBody](amazon_rekognition/errors/describe_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FaceApi

> Source: [FaceApi](amazon_rekognition/apis/face_api.py)

<details>
<summary><code>def associate_faces(x_amz_target: XAmzTargetAmazonRekognitionFaceApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId that are present in the FaceIds list is associated with the provided UserID. The number of FaceIds that can be used as input in a single request is limited to 100. Note that the total number of faces that can be associated with a single UserID is also limited to 100. Once a UserID has 100 faces associated with it, no additional faces can be added. If more API calls are made after the limit is reached, a ServiceQuotaExceededException will result. The UserMatchThreshold parameter specifies the minimum user match confidence required for the face to be associated with a UserID that has at least one FaceID already associated. This ensures that the FaceIds are associated with the right UserID. The value ranges from 0-100 and default value is 75. If successful, an array of AssociatedFace objects containing the associated FaceIds is returned. If a given face is already associated with the given UserID, it will be ignored and will not be returned in the response. If a given face is already associated to a different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_api.associate_faces(XAmzTargetAmazonRekognitionFaceApi.REKOGNITION_SERVICE_ASSOCIATE_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateFacesErrorBody
```

**Async**

```python
try:
    await async_client.face_api.associate_faces(XAmzTargetAmazonRekognitionFaceApi.REKOGNITION_SERVICE_ASSOCIATE_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AssociateFacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionFaceApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_face_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[AssociateFacesErrorBody](amazon_rekognition/errors/associate_faces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_faces(x_amz_target: XAmzTarget1AmazonRekognitionFaceApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection. This operation requires permissions to perform the rekognition:DeleteFaces action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_api.delete_faces(XAmzTarget1AmazonRekognitionFaceApi.REKOGNITION_SERVICE_DELETE_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFacesErrorBody
```

**Async**

```python
try:
    await async_client.face_api.delete_faces(XAmzTarget1AmazonRekognitionFaceApi.REKOGNITION_SERVICE_DELETE_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionFaceApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_face_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DeleteFacesErrorBody](amazon_rekognition/errors/delete_faces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disassociate_faces(x_amz_target: XAmzTarget2AmazonRekognitionFaceApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the association between a Face supplied in an array of FaceIds and the User. If the User is not present already, then a ResourceNotFound exception is thrown. If successful, an array of faces that are disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will be ignored and not be returned in the response. If a given face is already associated with a different User or not found in the collection it will be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100 face IDs from a user at one time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_api.disassociate_faces(XAmzTarget2AmazonRekognitionFaceApi.REKOGNITION_SERVICE_DISASSOCIATE_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateFacesErrorBody
```

**Async**

```python
try:
    await async_client.face_api.disassociate_faces(
        XAmzTarget2AmazonRekognitionFaceApi.REKOGNITION_SERVICE_DISASSOCIATE_FACES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisassociateFacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionFaceApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_face_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DisassociateFacesErrorBody](amazon_rekognition/errors/disassociate_faces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_faces(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see Listing Faces in a Collection in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:ListFaces action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_api.list_faces(XAmzTarget3.REKOGNITION_SERVICE_LIST_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFacesErrorBody
```

**Async**

```python
try:
    await async_client.face_api.list_faces(XAmzTarget3.REKOGNITION_SERVICE_LIST_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](amazon_rekognition/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListFacesErrorBody](amazon_rekognition/errors/list_faces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_faces(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of the input face with faces in the specified collection. You can also search faces without indexing faces by using the SearchFacesByImage operation. The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a confidence value for each face match, indicating the confidence that the specific face matches the input face. For an example, see Searching for a face using its face ID in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:SearchFaces action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_api.search_faces(XAmzTarget4.REKOGNITION_SERVICE_SEARCH_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchFacesErrorBody
```

**Async**

```python
try:
    await async_client.face_api.search_faces(XAmzTarget4.REKOGNITION_SERVICE_SEARCH_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchFacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](amazon_rekognition/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[SearchFacesErrorBody](amazon_rekognition/errors/search_faces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_faces_by_image(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection. To search for all faces in an input image, you might first call the IndexFaces operation, and then use the face IDs returned in subsequent calls to the SearchFaces operation. You can also call the DetectFaces operation and use the bounding boxes in the response to make face crops, which then you can pass in to the SearchFacesByImage operation. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a similarity indicating how similar the face is to the input face. In the response, the operation also returns the bo

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_api.search_faces_by_image(XAmzTarget5.REKOGNITION_SERVICE_SEARCH_FACES_BY_IMAGE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchFacesByImageErrorBody
```

**Async**

```python
try:
    await async_client.face_api.search_faces_by_image(XAmzTarget5.REKOGNITION_SERVICE_SEARCH_FACES_BY_IMAGE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchFacesByImageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](amazon_rekognition/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[SearchFacesByImageErrorBody](amazon_rekognition/errors/search_faces_by_image_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FaceCollections

> Source: [FaceCollections](amazon_rekognition/apis/face_collections.py)

<details>
<summary><code>def create_collection(x_amz_target: XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation. For example, you might create collections, one for each of your application users. A user can then index faces using the IndexFaces operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container. When you create a collection, it is associated with the latest version of the face model version. Collection names are case-sensitive. This operation requires permissions to perform the rekognition:CreateCollection action. If you want to tag your collection, you also require permission to perform the rekognition:TagResource operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_collections.create_collection(
        XAmzTarget1AmazonRekognitionFaceCollectionsApi.REKOGNITION_SERVICE_CREATE_COLLECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCollectionErrorBody
```

**Async**

```python
try:
    await async_client.face_collections.create_collection(
        XAmzTarget1AmazonRekognitionFaceCollectionsApi.REKOGNITION_SERVICE_CREATE_COLLECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCollectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_face_collections_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CreateCollectionErrorBody](amazon_rekognition/errors/create_collection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index_faces(x_amz_target: XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection. If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. If you're using version 4 or later of the face model, image orientation information is not returned in the OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_collections.index_faces(XAmzTargetAmazonRekognitionFaceCollectionsApi.REKOGNITION_SERVICE_INDEX_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IndexFacesErrorBody
```

**Async**

```python
try:
    await async_client.face_collections.index_faces(
        XAmzTargetAmazonRekognitionFaceCollectionsApi.REKOGNITION_SERVICE_INDEX_FACES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IndexFacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_face_collections_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[IndexFacesErrorBody](amazon_rekognition/errors/index_faces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_collections(x_amz_target: XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of collection IDs in your account. If the result is truncated, the response also provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example, see Listing collections in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:ListCollections action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_collections.list_collections(
        XAmzTarget2AmazonRekognitionFaceCollectionsApi.REKOGNITION_SERVICE_LIST_COLLECTIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCollectionsErrorBody
```

**Async**

```python
try:
    await async_client.face_collections.list_collections(
        XAmzTarget2AmazonRekognitionFaceCollectionsApi.REKOGNITION_SERVICE_LIST_COLLECTIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCollectionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_face_collections_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListCollectionsErrorBody](amazon_rekognition/errors/list_collections_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FaceLiveness

> Source: [FaceLiveness](amazon_rekognition/apis/face_liveness.py)

<details>
<summary><code>def create_face_liveness_session(x_amz_target: XAmzTargetAmazonRekognitionFaceLivenessApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the selfie-video. You can use the ChallengePreferences option in the Settings parameter to choose between the 'FaceMovementAndLightChallenge' or FaceMovementChallenge' settings. See the Shared Responsibility page for details on guidance for which setting to choose between these two settings depending on your use case and preferences. This parameter is optional and if no parameter is provided, then the 'FaceMovementAndLightChallenge' settings is applied by default.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_liveness.create_face_liveness_session(
        XAmzTargetAmazonRekognitionFaceLivenessApi.REKOGNITION_SERVICE_CREATE_FACE_LIVENESS_SESSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFaceLivenessSessionErrorBody
```

**Async**

```python
try:
    await async_client.face_liveness.create_face_liveness_session(
        XAmzTargetAmazonRekognitionFaceLivenessApi.REKOGNITION_SERVICE_CREATE_FACE_LIVENESS_SESSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFaceLivenessSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionFaceLivenessApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_face_liveness_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CreateFaceLivenessSessionErrorBody](amazon_rekognition/errors/create_face_liveness_session_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_face_liveness_session_results(x_amz_target: XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. The number of audit images returned by GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling CreateFaceLivenessSession. Reference images are always returned when possible. For a session that has completed, the response can also include a Feedback list describing conditions that were detected in the selfie-video, such as low lighting or an obstructed face, and Metadata about the client that streamed the session.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_liveness.get_face_liveness_session_results(
        XAmzTarget1AmazonRekognitionFaceLivenessApi.REKOGNITION_SERVICE_GET_FACE_LIVENESS_SESSION_RESULTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFaceLivenessSessionResultsErrorBody
```

**Async**

```python
try:
    await async_client.face_liveness.get_face_liveness_session_results(
        XAmzTarget1AmazonRekognitionFaceLivenessApi.REKOGNITION_SERVICE_GET_FACE_LIVENESS_SESSION_RESULTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFaceLivenessSessionResultsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_face_liveness_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetFaceLivenessSessionResultsErrorBody](amazon_rekognition/errors/get_face_liveness_session_results_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FaceSearch

> Source: [FaceSearch](amazon_rekognition/apis/face_search.py)

<details>
<summary><code>def get_face_search(x_amz_target: XAmzTargetAmazonRekognitionFaceSearchApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the face search results for Amazon Rekognition Video face search started by StartFaceSearch. The search returns faces in a collection that match the faces of persons detected in a video. It also includes the time(s) that faces are matched in the video. Face search in a video is an asynchronous operation. You start face search by calling to StartFaceSearch which returns a job identifier (JobId). When the search operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartFaceSearch. To get the search results, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide. The search results are retured in an array, Persons, of PersonMatch objects. EachPersonMatch element contains details about the matching faces in the input collection, person information (facial attributes, bounding boxes, and person identifer) for the matched person, and the time the person

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_search.get_face_search(XAmzTargetAmazonRekognitionFaceSearchApi.REKOGNITION_SERVICE_GET_FACE_SEARCH)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFaceSearchErrorBody
```

**Async**

```python
try:
    await async_client.face_search.get_face_search(
        XAmzTargetAmazonRekognitionFaceSearchApi.REKOGNITION_SERVICE_GET_FACE_SEARCH
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFaceSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionFaceSearchApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_face_search_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetFaceSearchErrorBody](amazon_rekognition/errors/get_face_search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_faces_by_image2(x_amz_target: XAmzTarget2AmazonRekognitionFaceSearchApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. The operation compares the features of the input face with faces in the specified collection. To search for all faces in an input image, you might first call the IndexFaces operation, and then use the face IDs returned in subsequent calls to the SearchFaces operation. You can also call the DetectFaces operation and use the bounding boxes in the response to make face crops, which then you can pass in to the SearchFacesByImage operation. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. The response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match found. Along with the metadata, the response also includes a similarity indicating how similar the face is to the input face. In the response, the operation also returns the bo

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_search.search_faces_by_image2(
        XAmzTarget2AmazonRekognitionFaceSearchApi.REKOGNITION_SERVICE_SEARCH_FACES_BY_IMAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchFacesByImage2ErrorBody
```

**Async**

```python
try:
    await async_client.face_search.search_faces_by_image2(
        XAmzTarget2AmazonRekognitionFaceSearchApi.REKOGNITION_SERVICE_SEARCH_FACES_BY_IMAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchFacesByImage2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionFaceSearchApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_face_search_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[SearchFacesByImage2ErrorBody](amazon_rekognition/errors/search_faces_by_image2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_face_search(x_amz_target: XAmzTarget1AmazonRekognitionFaceSearchApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartFaceSearch returns a job identifier (JobId) which you use to get the search results once the search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the search results, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching stored videos for faces.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.face_search.start_face_search(
        XAmzTarget1AmazonRekognitionFaceSearchApi.REKOGNITION_SERVICE_START_FACE_SEARCH
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartFaceSearchErrorBody
```

**Async**

```python
try:
    await async_client.face_search.start_face_search(
        XAmzTarget1AmazonRekognitionFaceSearchApi.REKOGNITION_SERVICE_START_FACE_SEARCH
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartFaceSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionFaceSearchApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_face_search_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartFaceSearchErrorBody](amazon_rekognition/errors/start_face_search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FacialAnalysis

> Source: [FacialAnalysis](amazon_rekognition/apis/facial_analysis.py)

<details>
<summary><code>def compare_faces(x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use CompareFaces to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action. You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.facial_analysis.compare_faces(XAmzTargetAmazonRekognitionFacialAnalysisApi.REKOGNITION_SERVICE_COMPARE_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompareFacesErrorBody
```

**Async**

```python
try:
    await async_client.facial_analysis.compare_faces(
        XAmzTargetAmazonRekognitionFacialAnalysisApi.REKOGNITION_SERVICE_COMPARE_FACES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompareFacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_facial_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CompareFacesErrorBody](amazon_rekognition/errors/compare_faces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_faces(x_amz_target: XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectFaces action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.facial_analysis.detect_faces(XAmzTarget1AmazonRekognitionFacialAnalysisApi.REKOGNITION_SERVICE_DETECT_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectFacesErrorBody
```

**Async**

```python
try:
    await async_client.facial_analysis.detect_faces(
        XAmzTarget1AmazonRekognitionFacialAnalysisApi.REKOGNITION_SERVICE_DETECT_FACES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectFacesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_facial_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectFacesErrorBody](amazon_rekognition/errors/detect_faces_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ImageAnalysis

> Source: [ImageAnalysis](amazon_rekognition/apis/image_analysis.py)

<details>
<summary><code>def detect_labels(x_amz_target: XAmzTargetAmazonRekognitionImageAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.image_analysis.detect_labels(XAmzTargetAmazonRekognitionImageAnalysisApi.REKOGNITION_SERVICE_DETECT_LABELS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectLabelsErrorBody
```

**Async**

```python
try:
    await async_client.image_analysis.detect_labels(
        XAmzTargetAmazonRekognitionImageAnalysisApi.REKOGNITION_SERVICE_DETECT_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectLabelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionImageAnalysisApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_image_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectLabelsErrorBody](amazon_rekognition/errors/detect_labels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MediaAnalysisJob

> Source: [MediaAnalysisJob](amazon_rekognition/apis/media_analysis_job.py)

<details>
<summary><code>def get_media_analysis_job(x_amz_target: XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Retrieves the results for a given media analysis job. Takes a JobId returned by StartMediaAnalysisJob.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.media_analysis_job.get_media_analysis_job(
        XAmzTargetAmazonRekognitionMediaAnalysisJobApi.REKOGNITION_SERVICE_GET_MEDIA_ANALYSIS_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMediaAnalysisJobErrorBody
```

**Async**

```python
try:
    await async_client.media_analysis_job.get_media_analysis_job(
        XAmzTargetAmazonRekognitionMediaAnalysisJobApi.REKOGNITION_SERVICE_GET_MEDIA_ANALYSIS_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMediaAnalysisJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_media_analysis_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetMediaAnalysisJobErrorBody](amazon_rekognition/errors/get_media_analysis_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_media_analysis_jobs(x_amz_target: XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Returns a list of media analysis jobs. Results are sorted by CreationTimestamp in descending order.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.media_analysis_job.list_media_analysis_jobs(
        XAmzTarget1AmazonRekognitionMediaAnalysisJobApi.REKOGNITION_SERVICE_LIST_MEDIA_ANALYSIS_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMediaAnalysisJobsErrorBody
```

**Async**

```python
try:
    await async_client.media_analysis_job.list_media_analysis_jobs(
        XAmzTarget1AmazonRekognitionMediaAnalysisJobApi.REKOGNITION_SERVICE_LIST_MEDIA_ANALYSIS_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMediaAnalysisJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_media_analysis_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListMediaAnalysisJobsErrorBody](amazon_rekognition/errors/list_media_analysis_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_media_analysis_job(x_amz_target: XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Initiates a new media analysis job. Accepts a manifest file in an Amazon S3 bucket. The output is a manifest file and a summary of the manifest stored in the Amazon S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.media_analysis_job.start_media_analysis_job(
        XAmzTarget2AmazonRekognitionMediaAnalysisJobApi.REKOGNITION_SERVICE_START_MEDIA_ANALYSIS_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartMediaAnalysisJobErrorBody
```

**Async**

```python
try:
    await async_client.media_analysis_job.start_media_analysis_job(
        XAmzTarget2AmazonRekognitionMediaAnalysisJobApi.REKOGNITION_SERVICE_START_MEDIA_ANALYSIS_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartMediaAnalysisJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_media_analysis_job_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartMediaAnalysisJobErrorBody](amazon_rekognition/errors/start_media_analysis_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](amazon_rekognition/apis/operations.py)

<details>
<summary><code>def compare_faces2(x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use CompareFaces to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action. You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.compare_faces2(XAmzTargetAmazonRekognitionFacialAnalysisApi.REKOGNITION_SERVICE_COMPARE_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompareFaces2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.compare_faces2(
        XAmzTargetAmazonRekognitionFacialAnalysisApi.REKOGNITION_SERVICE_COMPARE_FACES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompareFaces2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_facial_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CompareFaces2ErrorBody](amazon_rekognition/errors/compare_faces2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def copy_project_version(x_amz_target: XAmzTarget1AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and destination projects can be in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. To copy a model version to a different AWS account, you need to create a resource-based policy known as a project policy. You attach the project policy to the source project by calling PutProjectPolicy. The project policy gives permission to copy the model version from a trusting AWS account to a trusted account. For more information creating and attaching a project policy, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. If you are copying a model version to a project in the same AWS account, you don't need to create a project policy. Copying project versions is supported only for Custom Labels models. To copy a model, the destination project, source project, and source model version must already exist. Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and che

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.copy_project_version(
        XAmzTarget1AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_COPY_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CopyProjectVersionErrorBody
```

**Async**

```python
try:
    await async_client.operations.copy_project_version(
        XAmzTarget1AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_COPY_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CopyProjectVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionOperationsApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CopyProjectVersionErrorBody](amazon_rekognition/errors/copy_project_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_collection(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see Deleting a collection. This operation requires permissions to perform the rekognition:DeleteCollection action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.delete_collection(XAmzTarget11.REKOGNITION_SERVICE_DELETE_COLLECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCollectionErrorBody
```

**Async**

```python
try:
    await async_client.operations.delete_collection(XAmzTarget11.REKOGNITION_SERVICE_DELETE_COLLECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCollectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11OrStr](amazon_rekognition/models/enums/x_amz_target11.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DeleteCollectionErrorBody](amazon_rekognition/errors/delete_collection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_collection(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Describes the specified collection. You can use DescribeCollection to get information, such as the number of faces indexed into a collection and the version of the model used by the collection for face detection. For more information, see Describing a Collection in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.describe_collection(XAmzTarget12.REKOGNITION_SERVICE_DESCRIBE_COLLECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCollectionErrorBody
```

**Async**

```python
try:
    await async_client.operations.describe_collection(XAmzTarget12.REKOGNITION_SERVICE_DESCRIBE_COLLECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCollectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12OrStr](amazon_rekognition/models/enums/x_amz_target12.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DescribeCollectionErrorBody](amazon_rekognition/errors/describe_collection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_custom_labels2(x_amz_target: XAmzTarget2AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the ProjectVersionArn input parameter. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. For each object that the model version detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each CustomLabel object provides the label name (Name), the level of confidence that the image contains the object (Confidence), and object location information, if it exists, for the label on the image (Geometry). To filter labels that are returned, specify a value for MinConfidence. DetectCustomLabelsLabels only returns labels with a confidence that's higher than the specified value. The value of MinConfidence maps to the assumed threshold values created during training. For more information, see Assumed threshold in the Amazon Rekognition Cu

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_custom_labels2(
        XAmzTarget2AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_DETECT_CUSTOM_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectCustomLabels2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_custom_labels2(
        XAmzTarget2AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_DETECT_CUSTOM_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectCustomLabels2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionOperationsApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectCustomLabels2ErrorBody](amazon_rekognition/errors/detect_custom_labels2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_faces2(x_amz_target: XAmzTarget3AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectFaces action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_faces2(XAmzTarget3AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_DETECT_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectFaces2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_faces2(
        XAmzTarget3AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_DETECT_FACES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectFaces2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonRekognitionOperationsApiOrStr](amazon_rekognition/models/enums/x_amz_target3_amazon_rekognition_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectFaces2ErrorBody](amazon_rekognition/errors/detect_faces2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_labels2(x_amz_target: XAmzTarget4AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_labels2(XAmzTarget4AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_DETECT_LABELS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectLabels2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_labels2(
        XAmzTarget4AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_DETECT_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectLabels2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonRekognitionOperationsApiOrStr](amazon_rekognition/models/enums/x_amz_target4_amazon_rekognition_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectLabels2ErrorBody](amazon_rekognition/errors/detect_labels2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_moderation_labels2(x_amz_target: XAmzTarget5AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion argument.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_moderation_labels2(
        XAmzTarget5AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_DETECT_MODERATION_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectModerationLabels2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_moderation_labels2(
        XAmzTarget5AmazonRekognitionOperationsApi.REKOGNITION_SERVICE_DETECT_MODERATION_LABELS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectModerationLabels2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AmazonRekognitionOperationsApiOrStr](amazon_rekognition/models/enums/x_amz_target5_amazon_rekognition_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectModerationLabels2ErrorBody](amazon_rekognition/errors/detect_moderation_labels2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 402, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_protective_equipment(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the following types of PPE. Face cover Hand cover Head cover You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG formatted file. DetectProtectiveEquipment detects PPE worn by up to 15 persons detected in an image. For each person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body part coverage). It also returns a bounding box (BoundingBox) for each detected person and each detected item of PPE. You can optionally request a summary of detected PPE items with the SummarizationAttributes input parameter. The summary provides the following information. The persons detected as wearing all of the types of PPE that you specify. The persons detected as not wearing all of the types PPE that you specify. The persons dete

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_protective_equipment(XAmzTarget6.REKOGNITION_SERVICE_DETECT_PROTECTIVE_EQUIPMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectProtectiveEquipmentErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_protective_equipment(
        XAmzTarget6.REKOGNITION_SERVICE_DETECT_PROTECTIVE_EQUIPMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectProtectiveEquipmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](amazon_rekognition/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectProtectiveEquipmentErrorBody](amazon_rekognition/errors/detect_protective_equipment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_text(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects text in the input image and converts it into machine-readable text. Pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection element provides information about a single word or line of text that was detected in the image. A word is one or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when there is a large gap between words, relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_text(XAmzTarget7.REKOGNITION_SERVICE_DETECT_TEXT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectTextErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_text(XAmzTarget7.REKOGNITION_SERVICE_DETECT_TEXT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectTextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](amazon_rekognition/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectTextErrorBody](amazon_rekognition/errors/detect_text_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def distribute_dataset_entries(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project. DistributeDatasetEntries moves 20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call CreateDataset. Distributing a dataset takes a while to complete. To check the status call DescribeDataset. The operation is complete when the Status field for the training dataset and the test dataset is UPDATE_COMPLETE. If the dataset split fails, the value of Status is UPDATE_FAILED. This operation requires permissions to perform the rekognition:DistributeDatasetEntries action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.distribute_dataset_entries(XAmzTarget8.REKOGNITION_SERVICE_DISTRIBUTE_DATASET_ENTRIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DistributeDatasetEntriesErrorBody
```

**Async**

```python
try:
    await async_client.operations.distribute_dataset_entries(XAmzTarget8.REKOGNITION_SERVICE_DISTRIBUTE_DATASET_ENTRIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DistributeDatasetEntriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](amazon_rekognition/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DistributeDatasetEntriesErrorBody](amazon_rekognition/errors/distribute_dataset_entries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_celebrity_info(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the name and additional information about a celebrity based on their Amazon Rekognition ID. The additional information is returned as an array of URLs. If there is no additional information about the celebrity, this list is empty. For more information, see Getting information about a celebrity in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:GetCelebrityInfo action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.get_celebrity_info(XAmzTarget13.REKOGNITION_SERVICE_GET_CELEBRITY_INFO)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCelebrityInfoErrorBody
```

**Async**

```python
try:
    await async_client.operations.get_celebrity_info(XAmzTarget13.REKOGNITION_SERVICE_GET_CELEBRITY_INFO)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCelebrityInfoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13OrStr](amazon_rekognition/models/enums/x_amz_target13.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetCelebrityInfoErrorBody](amazon_rekognition/errors/get_celebrity_info_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_face_detection(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets face detection results for a Amazon Rekognition Video analysis started by StartFaceDetection. Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling StartFaceDetection which returns a job identifier (JobId). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartFaceDetection. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job identifier (JobId) from the initial call to StartFaceDetection. GetFaceDetection returns an array of detected faces (Faces) sorted by the time the faces were detected. Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetFaceDetection and populate the NextToken request parameter with the token value returned from the previous

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.get_face_detection(XAmzTarget14.REKOGNITION_SERVICE_GET_FACE_DETECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFaceDetectionErrorBody
```

**Async**

```python
try:
    await async_client.operations.get_face_detection(XAmzTarget14.REKOGNITION_SERVICE_GET_FACE_DETECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFaceDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14OrStr](amazon_rekognition/models/enums/x_amz_target14.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetFaceDetectionErrorBody](amazon_rekognition/errors/get_face_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_person_tracking(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability. For more information, visit this blog post. Gets the path tracking results of a Amazon Rekognition Video analysis started by StartPersonTracking. The person path tracking operation is started by a call to StartPersonTracking which returns a job identifier (JobId). When the operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartPersonTracking. To get the results of the person path tracking operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job identifier (JobId) from the initial call to StartPersonTracking. GetPersonTracking returns an array, Persons, of tracked persons and the time(s) their paths were tracked in the video. GetPersonTracking only returns the default facial attributes (BoundingBox, Confidence, Landmarks, Pose, and Quality). The other facial attributes listed in the Face

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.get_person_tracking(XAmzTarget16.REKOGNITION_SERVICE_GET_PERSON_TRACKING)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPersonTrackingErrorBody
```

**Async**

```python
try:
    await async_client.operations.get_person_tracking(XAmzTarget16.REKOGNITION_SERVICE_GET_PERSON_TRACKING)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPersonTrackingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget16OrStr](amazon_rekognition/models/enums/x_amz_target16.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetPersonTrackingErrorBody](amazon_rekognition/errors/get_person_tracking_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_segment_detection(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the segment detection results of a Amazon Rekognition Video analysis started by StartSegmentDetection. Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by calling StartSegmentDetection which returns a job identifier (JobId). When the segment detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartSegmentDetection. To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call of StartSegmentDetection. GetSegmentDetection returns detected segments in an array (Segments) of SegmentDetection objects. Segments is sorted by the segment types specified in the SegmentTypes input parameter of StartSegmentDetection. Each element of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment, the type of the segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out the type of seg

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.get_segment_detection(XAmzTarget18.REKOGNITION_SERVICE_GET_SEGMENT_DETECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSegmentDetectionErrorBody
```

**Async**

```python
try:
    await async_client.operations.get_segment_detection(XAmzTarget18.REKOGNITION_SERVICE_GET_SEGMENT_DETECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSegmentDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget18OrStr](amazon_rekognition/models/enums/x_amz_target18.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetSegmentDetectionErrorBody](amazon_rekognition/errors/get_segment_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def index_faces2(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection. If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. If you're using version 4 or later of the face model, image orientation information is not returned in the OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.index_faces2(XAmzTarget9.REKOGNITION_SERVICE_INDEX_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IndexFaces2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.index_faces2(XAmzTarget9.REKOGNITION_SERVICE_INDEX_FACES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IndexFaces2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](amazon_rekognition/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[IndexFaces2ErrorBody](amazon_rekognition/errors/index_faces2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_dataset_entries(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images) within a dataset. An entry is a JSON Line that contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Creating a manifest file. JSON Lines in the response include information about non-terminal errors found in the dataset. Non terminal errors are reported in errors lists within each JSON Line. The same information is reported in the training and testing validation result manifests that Amazon Rekognition Custom Labels creates during model training. You can filter the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after a specific date. This operation requires permissions to perform the rekognition:ListDatasetEntries action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.list_dataset_entries(XAmzTarget20.REKOGNITION_SERVICE_LIST_DATASET_ENTRIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetEntriesErrorBody
```

**Async**

```python
try:
    await async_client.operations.list_dataset_entries(XAmzTarget20.REKOGNITION_SERVICE_LIST_DATASET_ENTRIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetEntriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget20OrStr](amazon_rekognition/models/enums/x_amz_target20.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListDatasetEntriesErrorBody](amazon_rekognition/errors/list_dataset_entries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_dataset_labels(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images in the Amazon Rekognition Custom Labels Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.list_dataset_labels(XAmzTarget22.REKOGNITION_SERVICE_LIST_DATASET_LABELS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetLabelsErrorBody
```

**Async**

```python
try:
    await async_client.operations.list_dataset_labels(XAmzTarget22.REKOGNITION_SERVICE_LIST_DATASET_LABELS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetLabelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget22OrStr](amazon_rekognition/models/enums/x_amz_target22.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListDatasetLabelsErrorBody](amazon_rekognition/errors/list_dataset_labels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_resource(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels model. This operation requires permissions to perform the rekognition:ListTagsForResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.list_tags_for_resource(XAmzTarget23.REKOGNITION_SERVICE_LIST_TAGS_FOR_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

**Async**

```python
try:
    await async_client.operations.list_tags_for_resource(XAmzTarget23.REKOGNITION_SERVICE_LIST_TAGS_FOR_RESOURCE)
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
| <code>x_amz_target</code> | <code>[XAmzTarget23OrStr](amazon_rekognition/models/enums/x_amz_target23.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListTagsForResourceErrorBody](amazon_rekognition/errors/list_tags_for_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def recognize_celebrities2(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of celebrities recognized in the input image. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64 faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded image

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.recognize_celebrities2(XAmzTarget2.REKOGNITION_SERVICE_RECOGNIZE_CELEBRITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizeCelebrities2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.recognize_celebrities2(XAmzTarget2.REKOGNITION_SERVICE_RECOGNIZE_CELEBRITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecognizeCelebrities2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](amazon_rekognition/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[RecognizeCelebrities2ErrorBody](amazon_rekognition/errors/recognize_celebrities2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_face_detection(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartFaceDetection returns a job identifier (JobId) that you use to get the results of the operation. When face detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job identifier (JobId) from the initial call to StartFaceDetection. For more information, see Detecting faces in a stored video in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.start_face_detection(XAmzTarget15.REKOGNITION_SERVICE_START_FACE_DETECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartFaceDetectionErrorBody
```

**Async**

```python
try:
    await async_client.operations.start_face_detection(XAmzTarget15.REKOGNITION_SERVICE_START_FACE_DETECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartFaceDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget15OrStr](amazon_rekognition/models/enums/x_amz_target15.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartFaceDetectionErrorBody](amazon_rekognition/errors/start_face_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_person_tracking(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition People Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability. For more information, visit this blog post. Starts the asynchronous tracking of a person's path in a stored video. Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartPersonTracking returns a job identifier (JobId) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the person detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking and pass the job identifier (JobId) from the initial call to StartPersonTracking.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.start_person_tracking(XAmzTarget17.REKOGNITION_SERVICE_START_PERSON_TRACKING)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartPersonTrackingErrorBody
```

**Async**

```python
try:
    await async_client.operations.start_person_tracking(XAmzTarget17.REKOGNITION_SERVICE_START_PERSON_TRACKING)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartPersonTrackingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget17OrStr](amazon_rekognition/models/enums/x_amz_target17.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartPersonTrackingErrorBody](amazon_rekognition/errors/start_person_tracking_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_segment_detection(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of segment detection in a stored video. Amazon Rekognition Video can detect segments in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartSegmentDetection returns a job identifier (JobId) which you use to get the results of the operation. When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. You can use the Filters (StartSegmentDetectionFilters) input parameter to specify the minimum detection confidence returned in the response. Within Filters, use ShotFilter (StartShotDetectionFilter) to filter detected shots. Use TechnicalCueFilter (StartTechnicalCueDetectionFilter) to filter technical cues. To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call to StartSegmentDetection. For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.start_segment_detection(XAmzTarget19.REKOGNITION_SERVICE_START_SEGMENT_DETECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSegmentDetectionErrorBody
```

**Async**

```python
try:
    await async_client.operations.start_segment_detection(XAmzTarget19.REKOGNITION_SERVICE_START_SEGMENT_DETECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSegmentDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget19OrStr](amazon_rekognition/models/enums/x_amz_target19.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartSegmentDetectionErrorBody](amazon_rekognition/errors/start_segment_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels model. For more information, see Tagging AWS Resources. This operation requires permissions to perform the rekognition:TagResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.tag_resource(XAmzTarget24.REKOGNITION_SERVICE_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

**Async**

```python
try:
    await async_client.operations.tag_resource(XAmzTarget24.REKOGNITION_SERVICE_TAG_RESOURCE)
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
| <code>x_amz_target</code> | <code>[XAmzTarget24OrStr](amazon_rekognition/models/enums/x_amz_target24.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[TagResourceErrorBody](amazon_rekognition/errors/tag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model. This operation requires permissions to perform the rekognition:UntagResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.untag_resource(XAmzTarget25.REKOGNITION_SERVICE_UNTAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

**Async**

```python
try:
    await async_client.operations.untag_resource(XAmzTarget25.REKOGNITION_SERVICE_UNTAG_RESOURCE)
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
| <code>x_amz_target</code> | <code>[XAmzTarget25OrStr](amazon_rekognition/models/enums/x_amz_target25.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[UntagResourceErrorBody](amazon_rekognition/errors/untag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_dataset_entries(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in manifest files and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer Guide. If the source-ref field in the JSON line references an existing image, the existing image in the dataset is updated. If source-ref field doesn't reference an existing image, the image is added as a new image to the dataset. You specify the changes that you want to make in the Changes input parameter. There isn't a limit to the number JSON Lines that you can change, but the size of Changes must be less than 5MB. UpdateDatasetEntries returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the current status. The dataset updated successfully if the value of Status is UPDATE_COMPLETE. To check if any non-terminal errors occured, call ListDatasetEntries and check for the presence of errors lists in the J

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.update_dataset_entries(XAmzTarget21.REKOGNITION_SERVICE_UPDATE_DATASET_ENTRIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDatasetEntriesErrorBody
```

**Async**

```python
try:
    await async_client.operations.update_dataset_entries(XAmzTarget21.REKOGNITION_SERVICE_UPDATE_DATASET_ENTRIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDatasetEntriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget21OrStr](amazon_rekognition/models/enums/x_amz_target21.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[UpdateDatasetEntriesErrorBody](amazon_rekognition/errors/update_dataset_entries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Project

> Source: [Project](amazon_rekognition/apis/project.py)

<details>
<summary><code>def create_project(x_amz_target: XAmzTargetAmazonRekognitionProjectApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a feature to create the project with, if no feature is specified then Custom Labels is used by default. For adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument. This operation requires permissions to perform the rekognition:CreateProject action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project.create_project(XAmzTargetAmazonRekognitionProjectApi.REKOGNITION_SERVICE_CREATE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectErrorBody
```

**Async**

```python
try:
    await async_client.project.create_project(XAmzTargetAmazonRekognitionProjectApi.REKOGNITION_SERVICE_CREATE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionProjectApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_project_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CreateProjectErrorBody](amazon_rekognition/errors/create_project_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_project(x_amz_target: XAmzTarget1AmazonRekognitionProjectApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when the project no longer appears in the response. Be aware that deleting a given project will also delete any ProjectPolicies associated with that project. This operation requires permissions to perform the rekognition:DeleteProject action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project.delete_project(XAmzTarget1AmazonRekognitionProjectApi.REKOGNITION_SERVICE_DELETE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectErrorBody
```

**Async**

```python
try:
    await async_client.project.delete_project(XAmzTarget1AmazonRekognitionProjectApi.REKOGNITION_SERVICE_DELETE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionProjectApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_project_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DeleteProjectErrorBody](amazon_rekognition/errors/delete_project_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_projects(x_amz_target: XAmzTarget2AmazonRekognitionProjectApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about your Rekognition projects. This operation requires permissions to perform the rekognition:DescribeProjects action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project.describe_projects(XAmzTarget2AmazonRekognitionProjectApi.REKOGNITION_SERVICE_DESCRIBE_PROJECTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeProjectsErrorBody
```

**Async**

```python
try:
    await async_client.project.describe_projects(
        XAmzTarget2AmazonRekognitionProjectApi.REKOGNITION_SERVICE_DESCRIBE_PROJECTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionProjectApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_project_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DescribeProjectsErrorBody](amazon_rekognition/errors/describe_projects_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectPolicyApi

> Source: [ProjectPolicyApi](amazon_rekognition/apis/project_policy_api.py)

<details>
<summary><code>def delete_project_policy(x_amz_target: XAmzTargetAmazonRekognitionProjectPolicyApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing project policy. To get a list of project policies attached to a project, call ListProjectPolicies. To attach a project policy to a project, call PutProjectPolicy. This operation requires permissions to perform the rekognition:DeleteProjectPolicy action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project_policy_api.delete_project_policy(
        XAmzTargetAmazonRekognitionProjectPolicyApi.REKOGNITION_SERVICE_DELETE_PROJECT_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectPolicyErrorBody
```

**Async**

```python
try:
    await async_client.project_policy_api.delete_project_policy(
        XAmzTargetAmazonRekognitionProjectPolicyApi.REKOGNITION_SERVICE_DELETE_PROJECT_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionProjectPolicyApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_project_policy_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DeleteProjectPolicyErrorBody](amazon_rekognition/errors/delete_project_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_project_policies(x_amz_target: XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Gets a list of the project policies attached to a project. To attach a project policy to a project, call PutProjectPolicy. To remove a project policy from a project, call DeleteProjectPolicy. This operation requires permissions to perform the rekognition:ListProjectPolicies action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project_policy_api.list_project_policies(
        XAmzTarget1AmazonRekognitionProjectPolicyApi.REKOGNITION_SERVICE_LIST_PROJECT_POLICIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectPoliciesErrorBody
```

**Async**

```python
try:
    await async_client.project_policy_api.list_project_policies(
        XAmzTarget1AmazonRekognitionProjectPolicyApi.REKOGNITION_SERVICE_LIST_PROJECT_POLICIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectPoliciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionProjectPolicyApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_project_policy_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListProjectPoliciesErrorBody](amazon_rekognition/errors/list_project_policies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_project_policy(x_amz_target: XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Attaches a project policy to a Amazon Rekognition Custom Labels project in a trusting AWS account. A project policy specifies that a trusted AWS account can copy a model version from a trusting AWS account to a project in the trusted AWS account. To copy a model version you use the CopyProjectVersion operation. Only applies to Custom Labels projects. For more information about the format of a project policy document, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. The response from PutProjectPolicy is a revision ID for the project policy. You can attach multiple project policies to a project. You can also update an existing project policy by specifying the policy revision ID of the existing policy. To remove a project policy from a project, call DeleteProjectPolicy. To get a list of project policies attached to a project, call ListProjectPolicies. You copy a model version by calling CopyProjectVersion. This operation requires permissions to perform the rekognition:PutProjectPolicy action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project_policy_api.put_project_policy(
        XAmzTarget2AmazonRekognitionProjectPolicyApi.REKOGNITION_SERVICE_PUT_PROJECT_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutProjectPolicyErrorBody
```

**Async**

```python
try:
    await async_client.project_policy_api.put_project_policy(
        XAmzTarget2AmazonRekognitionProjectPolicyApi.REKOGNITION_SERVICE_PUT_PROJECT_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutProjectPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionProjectPolicyApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_project_policy_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[PutProjectPolicyErrorBody](amazon_rekognition/errors/put_project_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectVersion

> Source: [ProjectVersion](amazon_rekognition/apis/project_version.py)

<details>
<summary><code>def create_project_version(x_amz_target: XAmzTargetAmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter) and begins training. Models and adapters are managed as part of a Rekognition project. The response from CreateProjectVersion is an Amazon Resource Name (ARN) for the project version. The FeatureConfig operation argument allows you to configure specific model or adapter settings. You can provide a description to the project version by using the VersionDescription argment. Training can take a while to complete. You can get the current status by calling DescribeProjectVersions. Training completed successfully if the value of the Status field is TRAINING_COMPLETED. Once training has successfully completed, call DescribeProjectVersions to get the training results and evaluate the model. This operation requires permissions to perform the rekognition:CreateProjectVersion action. The following applies only to projects with Amazon Rekognition Custom Labels as the chosen feature: You can train a model in a project that doesn't have associated datasets by specifying manifest files in the TrainingData and TestingData fields. If you open the console after training a model with manifest files, A

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project_version.create_project_version(
        XAmzTargetAmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_CREATE_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectVersionErrorBody
```

**Async**

```python
try:
    await async_client.project_version.create_project_version(
        XAmzTargetAmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_CREATE_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionProjectVersionApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_project_version_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CreateProjectVersionErrorBody](amazon_rekognition/errors/create_project_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_project_version(x_amz_target: XAmzTarget1AmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a custom adapter. You can't delete a project version if it is running or if it is training. To check the status of a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call StopProjectVersion. If the project version is training, wait until it finishes. This operation requires permissions to perform the rekognition:DeleteProjectVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project_version.delete_project_version(
        XAmzTarget1AmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_DELETE_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectVersionErrorBody
```

**Async**

```python
try:
    await async_client.project_version.delete_project_version(
        XAmzTarget1AmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_DELETE_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionProjectVersionApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_project_version_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DeleteProjectVersionErrorBody](amazon_rekognition/errors/delete_project_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_project_versions(x_amz_target: XAmzTarget2AmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists and describes the versions of an Amazon Rekognition project. You can specify up to 10 model or adapter versions in ProjectVersionArns. If you don't specify a value, descriptions for all model/adapter versions in the project are returned. This operation requires permissions to perform the rekognition:DescribeProjectVersions action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project_version.describe_project_versions(
        XAmzTarget2AmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_DESCRIBE_PROJECT_VERSIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeProjectVersionsErrorBody
```

**Async**

```python
try:
    await async_client.project_version.describe_project_versions(
        XAmzTarget2AmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_DESCRIBE_PROJECT_VERSIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeProjectVersionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionProjectVersionApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_project_version_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DescribeProjectVersionsErrorBody](amazon_rekognition/errors/describe_project_versions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_project_version(x_amz_target: XAmzTarget3AmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use DescribeProjectVersions. Once the model is running, you can detect custom labels in new images by calling DetectCustomLabels. You are charged for the amount of time that the model is running. To stop a running model, call StopProjectVersion. This operation requires permissions to perform the rekognition:StartProjectVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project_version.start_project_version(
        XAmzTarget3AmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_START_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartProjectVersionErrorBody
```

**Async**

```python
try:
    await async_client.project_version.start_project_version(
        XAmzTarget3AmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_START_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartProjectVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonRekognitionProjectVersionApiOrStr](amazon_rekognition/models/enums/x_amz_target3_amazon_rekognition_project_version_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartProjectVersionErrorBody](amazon_rekognition/errors/start_project_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_project_version(x_amz_target: XAmzTarget4AmazonRekognitionProjectVersionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The operation might take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom Labels projects. This operation requires permissions to perform the rekognition:StopProjectVersion action.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.project_version.stop_project_version(
        XAmzTarget4AmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_STOP_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopProjectVersionErrorBody
```

**Async**

```python
try:
    await async_client.project_version.stop_project_version(
        XAmzTarget4AmazonRekognitionProjectVersionApi.REKOGNITION_SERVICE_STOP_PROJECT_VERSION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopProjectVersionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonRekognitionProjectVersionApiOrStr](amazon_rekognition/models/enums/x_amz_target4_amazon_rekognition_project_version_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StopProjectVersionErrorBody](amazon_rekognition/errors/stop_project_version_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## StoredVideoAnalysis

> Source: [StoredVideoAnalysis](amazon_rekognition/apis/stored_video_analysis.py)

<details>
<summary><code>def get_label_detection(x_amz_target: XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection. The label detection operation is started by a call to StartLabelDetection which returns a job identifier (JobId). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartlabelDetection. To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection. GetLabelDetection returns an array of detected labels (Labels) sorted by the time the labels were detected. You can also sort by the label name by specifying NAME for the SortBy input parameter. If there is no NAME specified, the default sort is by timestamp. You can select how results are aggregated by using the AggregateBy input parameter. The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which aggregates all instances of labels detected in a given segment. The returned Labels array may include the

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stored_video_analysis.get_label_detection(
        XAmzTargetAmazonRekognitionStoredVideoAnalysisApi.REKOGNITION_SERVICE_GET_LABEL_DETECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLabelDetectionErrorBody
```

**Async**

```python
try:
    await async_client.stored_video_analysis.get_label_detection(
        XAmzTargetAmazonRekognitionStoredVideoAnalysisApi.REKOGNITION_SERVICE_GET_LABEL_DETECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetLabelDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_stored_video_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetLabelDetectionErrorBody](amazon_rekognition/errors/get_label_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_label_detection(x_amz_target: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of labels in a stored video. Amazon Rekognition Video can detect labels in a video. Labels are instances of real-world entities. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities like a person getting out of a car or a person skiing. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartLabelDetection returns a job identifier (JobId) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection. Optional Parameters StartLabelDetection has the GENERAL_LABELS Feature applied by default. This feature allows you to provide filtering criteria to the Settings parameter. Yo

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stored_video_analysis.start_label_detection(
        XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi.REKOGNITION_SERVICE_START_LABEL_DETECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartLabelDetectionErrorBody
```

**Async**

```python
try:
    await async_client.stored_video_analysis.start_label_detection(
        XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi.REKOGNITION_SERVICE_START_LABEL_DETECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartLabelDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_stored_video_analysis_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartLabelDetectionErrorBody](amazon_rekognition/errors/start_label_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## StreamProcessorApi

> Source: [StreamProcessorApi](amazon_rekognition/apis/stream_processor_api.py)

<details>
<summary><code>def create_stream_processor(x_amz_target: XAmzTargetAmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video. Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels. If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output) stream for receiving the output. You must use the FaceSearch option in Settings, specifying the collection that contains the faces you want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop processing. If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream (Input), Amazon S3 bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). Y

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stream_processor_api.create_stream_processor(
        XAmzTargetAmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_CREATE_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStreamProcessorErrorBody
```

**Async**

```python
try:
    await async_client.stream_processor_api.create_stream_processor(
        XAmzTargetAmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_CREATE_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateStreamProcessorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionStreamProcessorApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_stream_processor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CreateStreamProcessorErrorBody](amazon_rekognition/errors/create_stream_processor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_stream_processor(x_amz_target: XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Deletes the stream processor identified by Name. You assign the value for Name when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name for a stream processor for a few seconds after calling DeleteStreamProcessor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stream_processor_api.delete_stream_processor(
        XAmzTarget1AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_DELETE_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStreamProcessorErrorBody
```

**Async**

```python
try:
    await async_client.stream_processor_api.delete_stream_processor(
        XAmzTarget1AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_DELETE_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteStreamProcessorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionStreamProcessorApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_stream_processor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DeleteStreamProcessorErrorBody](amazon_rekognition/errors/delete_stream_processor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_stream_processor(x_amz_target: XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Provides information about a stream processor created by CreateStreamProcessor. You can get information about the input and output streams, the input parameters for the face recognition being performed, and the current status of the stream processor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stream_processor_api.describe_stream_processor(
        XAmzTarget2AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_DESCRIBE_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStreamProcessorErrorBody
```

**Async**

```python
try:
    await async_client.stream_processor_api.describe_stream_processor(
        XAmzTarget2AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_DESCRIBE_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeStreamProcessorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionStreamProcessorApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_stream_processor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DescribeStreamProcessorErrorBody](amazon_rekognition/errors/describe_stream_processor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_stream_processors(x_amz_target: XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Gets a list of stream processors that you have created with CreateStreamProcessor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stream_processor_api.list_stream_processors(
        XAmzTarget3AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_LIST_STREAM_PROCESSORS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStreamProcessorsErrorBody
```

**Async**

```python
try:
    await async_client.stream_processor_api.list_stream_processors(
        XAmzTarget3AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_LIST_STREAM_PROCESSORS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListStreamProcessorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonRekognitionStreamProcessorApiOrStr](amazon_rekognition/models/enums/x_amz_target3_amazon_rekognition_stream_processor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListStreamProcessorsErrorBody](amazon_rekognition/errors/list_stream_processors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_stream_processor(x_amz_target: XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Starts processing a stream processor. You create a stream processor by calling CreateStreamProcessor. To tell StartStreamProcessor which stream processor to start, use the value of the Name field specified in the call to CreateStreamProcessor. If you are using a label detection stream processor to detect labels, you need to provide a Start selector and a Stop selector to determine the length of the stream processing time.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stream_processor_api.start_stream_processor(
        XAmzTarget4AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_START_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartStreamProcessorErrorBody
```

**Async**

```python
try:
    await async_client.stream_processor_api.start_stream_processor(
        XAmzTarget4AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_START_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartStreamProcessorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonRekognitionStreamProcessorApiOrStr](amazon_rekognition/models/enums/x_amz_target4_amazon_rekognition_stream_processor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartStreamProcessorErrorBody](amazon_rekognition/errors/start_stream_processor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_stream_processor(x_amz_target: XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Stops a running stream processor that was created by CreateStreamProcessor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stream_processor_api.stop_stream_processor(
        XAmzTarget5AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_STOP_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopStreamProcessorErrorBody
```

**Async**

```python
try:
    await async_client.stream_processor_api.stop_stream_processor(
        XAmzTarget5AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_STOP_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopStreamProcessorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AmazonRekognitionStreamProcessorApiOrStr](amazon_rekognition/models/enums/x_amz_target5_amazon_rekognition_stream_processor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StopStreamProcessorErrorBody](amazon_rekognition/errors/stop_stream_processor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_stream_processor(x_amz_target: XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Allows you to update a stream processor. You can change some settings and regions of interest and delete certain parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.stream_processor_api.update_stream_processor(
        XAmzTarget6AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_UPDATE_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStreamProcessorErrorBody
```

**Async**

```python
try:
    await async_client.stream_processor_api.update_stream_processor(
        XAmzTarget6AmazonRekognitionStreamProcessorApi.REKOGNITION_SERVICE_UPDATE_STREAM_PROCESSOR
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateStreamProcessorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6AmazonRekognitionStreamProcessorApiOrStr](amazon_rekognition/models/enums/x_amz_target6_amazon_rekognition_stream_processor_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[UpdateStreamProcessorErrorBody](amazon_rekognition/errors/update_stream_processor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TextDetectionApi

> Source: [TextDetectionApi](amazon_rekognition/apis/text_detection_api.py)

<details>
<summary><code>def detect_text2(x_amz_target: XAmzTarget2AmazonRekognitionTextDetectionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects text in the input image and converts it into machine-readable text. Pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The image must be either a .png or .jpeg formatted file. The DetectText operation returns text in an array of TextDetection elements, TextDetections. Each TextDetection element provides information about a single word or line of text that was detected in the image. A word is one or more script characters that are not separated by spaces. DetectText can detect up to 100 words in an image. A line is a string of equally spaced words. A line isn't necessarily a complete sentence. For example, a driver's license number is detected as a line. A line ends when there is no aligned text after it. Also, a line ends when there is a large gap between words, relative to the length of the words. This means, depending on the gap between words, Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.text_detection_api.detect_text2(XAmzTarget2AmazonRekognitionTextDetectionApi.REKOGNITION_SERVICE_DETECT_TEXT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectText2ErrorBody
```

**Async**

```python
try:
    await async_client.text_detection_api.detect_text2(
        XAmzTarget2AmazonRekognitionTextDetectionApi.REKOGNITION_SERVICE_DETECT_TEXT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectText2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionTextDetectionApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_text_detection_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DetectText2ErrorBody](amazon_rekognition/errors/detect_text2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_text_detection(x_amz_target: XAmzTargetAmazonRekognitionTextDetectionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the text detection results of a Amazon Rekognition Video analysis started by StartTextDetection. Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling StartTextDetection which returns a job identifier (JobId) When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartTextDetection. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and pass the job identifier (JobId) from the initial call of StartLabelDetection. GetTextDetection returns an array of detected text (TextDetections) sorted by the time the text was detected, up to 100 words per frame of video. Each element of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time the text was detected, bounding box information for where the text was located, and unique identifiers for words and their lines. Use MaxResults parameter to limit the number of text detections returned. If there are

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.text_detection_api.get_text_detection(
        XAmzTargetAmazonRekognitionTextDetectionApi.REKOGNITION_SERVICE_GET_TEXT_DETECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTextDetectionErrorBody
```

**Async**

```python
try:
    await async_client.text_detection_api.get_text_detection(
        XAmzTargetAmazonRekognitionTextDetectionApi.REKOGNITION_SERVICE_GET_TEXT_DETECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTextDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionTextDetectionApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_text_detection_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[GetTextDetectionErrorBody](amazon_rekognition/errors/get_text_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_text_detection(x_amz_target: XAmzTarget1AmazonRekognitionTextDetectionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts asynchronous detection of text in a stored video. Amazon Rekognition Video can detect text in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartTextDetection returns a job identifier (JobId) which you use to get the results of the operation. When text detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetTextDetection and pass the job identifier (JobId) from the initial call to StartTextDetection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.text_detection_api.start_text_detection(
        XAmzTarget1AmazonRekognitionTextDetectionApi.REKOGNITION_SERVICE_START_TEXT_DETECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTextDetectionErrorBody
```

**Async**

```python
try:
    await async_client.text_detection_api.start_text_detection(
        XAmzTarget1AmazonRekognitionTextDetectionApi.REKOGNITION_SERVICE_START_TEXT_DETECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTextDetectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionTextDetectionApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_text_detection_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[StartTextDetectionErrorBody](amazon_rekognition/errors/start_text_detection_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](amazon_rekognition/apis/user_api.py)

<details>
<summary><code>def create_user(x_amz_target: XAmzTargetAmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter, which is a user provided ID which should be unique within the collection. The provided UserId will alias the system generated UUID to make the UserId more user friendly. Uses a ClientToken, an idempotency token that ensures a call to CreateUser completes only once. If the value is not supplied, the AWS SDK generates an idempotency token for the requests. This prevents retries after a network error results from making multiple CreateUser calls.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.user_api.create_user(XAmzTargetAmazonRekognitionUserApi.REKOGNITION_SERVICE_CREATE_USER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserErrorBody
```

**Async**

```python
try:
    await async_client.user_api.create_user(XAmzTargetAmazonRekognitionUserApi.REKOGNITION_SERVICE_CREATE_USER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonRekognitionUserApiOrStr](amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_user_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[CreateUserErrorBody](amazon_rekognition/errors/create_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_user(x_amz_target: XAmzTarget1AmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified UserID within the collection. Faces that are associated with the UserID are disassociated from the UserID before deleting the specified UserID. If the specified Collection or UserID is already deleted or not found, a ResourceNotFoundException will be thrown. If the action is successful with a 200 response, an empty HTTP body is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.user_api.delete_user(XAmzTarget1AmazonRekognitionUserApi.REKOGNITION_SERVICE_DELETE_USER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
```

**Async**

```python
try:
    await async_client.user_api.delete_user(XAmzTarget1AmazonRekognitionUserApi.REKOGNITION_SERVICE_DELETE_USER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonRekognitionUserApiOrStr](amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_user_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[DeleteUserErrorBody](amazon_rekognition/errors/delete_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_users(x_amz_target: XAmzTarget2AmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata of the User such as UserID in the specified collection. Anonymous User (to reserve faces without any identity) is not returned as part of this request. The results are sorted by system generated primary key ID. If the response is truncated, NextToken is returned in the response that can be used in the subsequent request to retrieve the next set of identities.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.user_api.list_users(XAmzTarget2AmazonRekognitionUserApi.REKOGNITION_SERVICE_LIST_USERS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
```

**Async**

```python
try:
    await async_client.user_api.list_users(XAmzTarget2AmazonRekognitionUserApi.REKOGNITION_SERVICE_LIST_USERS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonRekognitionUserApiOrStr](amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_user_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[ListUsersErrorBody](amazon_rekognition/errors/list_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_users(x_amz_target: XAmzTarget3AmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to find the closest UserID (with a highest similarity) to associate a face. The request must be provided with either FaceId or UserId. The operation returns an array of UserID that match the FaceId or UserId, ordered by similarity score with the highest similarity first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.user_api.search_users(XAmzTarget3AmazonRekognitionUserApi.REKOGNITION_SERVICE_SEARCH_USERS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchUsersErrorBody
```

**Async**

```python
try:
    await async_client.user_api.search_users(XAmzTarget3AmazonRekognitionUserApi.REKOGNITION_SERVICE_SEARCH_USERS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonRekognitionUserApiOrStr](amazon_rekognition/models/enums/x_amz_target3_amazon_rekognition_user_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[SearchUsersErrorBody](amazon_rekognition/errors/search_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_users_by_image(x_amz_target: XAmzTarget4AmazonRekognitionUserApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then searches a specified collection for matching UserIDs. The operation returns an array of UserIDs that match the face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a bounding box for the face found in the input image. Information about faces detected in the supplied image, but not used for the search, is returned in an array of UnsearchedFace objects. If no valid face is detected in the image, the response will contain an empty UserMatches list and no SearchedFace object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.user_api.search_users_by_image(XAmzTarget4AmazonRekognitionUserApi.REKOGNITION_SERVICE_SEARCH_USERS_BY_IMAGE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchUsersByImageErrorBody
```

**Async**

```python
try:
    await async_client.user_api.search_users_by_image(
        XAmzTarget4AmazonRekognitionUserApi.REKOGNITION_SERVICE_SEARCH_USERS_BY_IMAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchUsersByImageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonRekognitionUserApiOrStr](amazon_rekognition/models/enums/x_amz_target4_amazon_rekognition_user_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_rekognition/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_rekognition/core/exceptions.py)&#91;[SearchUsersByImageErrorBody](amazon_rekognition/errors/search_users_by_image_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_rekognition/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_rekognition/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

