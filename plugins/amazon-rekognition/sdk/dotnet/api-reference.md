# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonRekognitionClient](src/AmazonRekognition/AmazonRekognitionClient.cs)

## CelebrityRecognitionApi

> Source: [CelebrityRecognitionApi](src/AmazonRekognition/Api/CelebrityRecognitionApi.cs)

<details>
<summary><code>Task GetCelebrityRecognition(GetCelebrityRecognitionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.CelebrityRecognitionApi.GetCelebrityRecognition(new GetCelebrityRecognitionOperationRequest
    {
        XAmzTarget = XAmzTarget.RekognitionServiceGetCelebrityRecognition,
    });
}
catch (ApiException<GetCelebrityRecognitionError> ex)
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

<code>[GetCelebrityRecognitionOperationRequest](src/AmazonRekognition/Requests/CelebrityRecognitionApi/GetCelebrityRecognitionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetCelebrityRecognitionError](src/AmazonRekognition/Errors/GetCelebrityRecognitionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RecognizeCelebrities(RecognizeCelebritiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.CelebrityRecognitionApi.RecognizeCelebrities(new RecognizeCelebritiesOperationRequest
    {
        XAmzTarget = XAmzTarget2.RekognitionServiceRecognizeCelebrities,
    });
}
catch (ApiException<RecognizeCelebritiesError> ex)
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

<code>[RecognizeCelebritiesOperationRequest](src/AmazonRekognition/Requests/CelebrityRecognitionApi/RecognizeCelebritiesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[RecognizeCelebritiesError](src/AmazonRekognition/Errors/RecognizeCelebritiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartCelebrityRecognition(StartCelebrityRecognitionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.CelebrityRecognitionApi.StartCelebrityRecognition(new StartCelebrityRecognitionOperationRequest
    {
        XAmzTarget = XAmzTarget1.RekognitionServiceStartCelebrityRecognition,
    });
}
catch (ApiException<StartCelebrityRecognitionError> ex)
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

<code>[StartCelebrityRecognitionOperationRequest](src/AmazonRekognition/Requests/CelebrityRecognitionApi/StartCelebrityRecognitionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartCelebrityRecognitionError](src/AmazonRekognition/Errors/StartCelebrityRecognitionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ContentModeration

> Source: [ContentModeration](src/AmazonRekognition/Api/ContentModeration.cs)

<details>
<summary><code>Task DetectModerationLabels(DetectModerationLabelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ContentModeration.DetectModerationLabels(new DetectModerationLabelsOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionContentModerationApi.RekognitionServiceDetectModerationLabels,
    });
}
catch (ApiException<DetectModerationLabelsError> ex)
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

<code>[DetectModerationLabelsOperationRequest](src/AmazonRekognition/Requests/ContentModeration/DetectModerationLabelsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectModerationLabelsError](src/AmazonRekognition/Errors/DetectModerationLabelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetContentModeration(GetContentModerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ContentModeration.GetContentModeration(new GetContentModerationOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionContentModerationApi.RekognitionServiceGetContentModeration,
    });
}
catch (ApiException<GetContentModerationError> ex)
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

<code>[GetContentModerationOperationRequest](src/AmazonRekognition/Requests/ContentModeration/GetContentModerationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetContentModerationError](src/AmazonRekognition/Errors/GetContentModerationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartContentModeration(StartContentModerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ContentModeration.StartContentModeration(new StartContentModerationOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionContentModerationApi.RekognitionServiceStartContentModeration,
    });
}
catch (ApiException<StartContentModerationError> ex)
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

<code>[StartContentModerationOperationRequest](src/AmazonRekognition/Requests/ContentModeration/StartContentModerationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartContentModerationError](src/AmazonRekognition/Errors/StartContentModerationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomLabels

> Source: [CustomLabels](src/AmazonRekognition/Api/CustomLabels.cs)

<details>
<summary><code>Task DetectCustomLabels(DetectCustomLabelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.CustomLabels.DetectCustomLabels(new DetectCustomLabelsOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionCustomLabelsApi.RekognitionServiceDetectCustomLabels,
    });
}
catch (ApiException<DetectCustomLabelsError> ex)
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

<code>[DetectCustomLabelsOperationRequest](src/AmazonRekognition/Requests/CustomLabels/DetectCustomLabelsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectCustomLabelsError](src/AmazonRekognition/Errors/DetectCustomLabelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Dataset

> Source: [Dataset](src/AmazonRekognition/Api/Dataset.cs)

<details>
<summary><code>Task CreateDataset(CreateDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Dataset.CreateDataset(new CreateDatasetOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionDatasetApi.RekognitionServiceCreateDataset,
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

<code>[CreateDatasetOperationRequest](src/AmazonRekognition/Requests/Dataset/CreateDatasetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CreateDatasetError](src/AmazonRekognition/Errors/CreateDatasetError.cs)&gt;</code>

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

This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation requires permissions to perform the rekognition:DeleteDataset action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Dataset.DeleteDataset(new DeleteDatasetOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionDatasetApi.RekognitionServiceDeleteDataset,
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

<code>[DeleteDatasetOperationRequest](src/AmazonRekognition/Requests/Dataset/DeleteDatasetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DeleteDatasetError](src/AmazonRekognition/Errors/DeleteDatasetError.cs)&gt;</code>

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

This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom Labels dataset. You can get information such as the current status of a dataset and statistics about the images and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Dataset.DescribeDataset(new DescribeDatasetOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionDatasetApi.RekognitionServiceDescribeDataset,
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

<code>[DescribeDatasetOperationRequest](src/AmazonRekognition/Requests/Dataset/DescribeDatasetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DescribeDatasetError](src/AmazonRekognition/Errors/DescribeDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FaceApi

> Source: [FaceApi](src/AmazonRekognition/Api/FaceApi.cs)

<details>
<summary><code>Task AssociateFaces(AssociateFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceApi.AssociateFaces(new AssociateFacesOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionFaceApi.RekognitionServiceAssociateFaces,
    });
}
catch (ApiException<AssociateFacesError> ex)
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

<code>[AssociateFacesOperationRequest](src/AmazonRekognition/Requests/FaceApi/AssociateFacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[AssociateFacesError](src/AmazonRekognition/Errors/AssociateFacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteFaces(DeleteFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceApi.DeleteFaces(new DeleteFacesOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionFaceApi.RekognitionServiceDeleteFaces,
    });
}
catch (ApiException<DeleteFacesError> ex)
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

<code>[DeleteFacesOperationRequest](src/AmazonRekognition/Requests/FaceApi/DeleteFacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DeleteFacesError](src/AmazonRekognition/Errors/DeleteFacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DisassociateFaces(DisassociateFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceApi.DisassociateFaces(new DisassociateFacesOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionFaceApi.RekognitionServiceDisassociateFaces,
    });
}
catch (ApiException<DisassociateFacesError> ex)
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

<code>[DisassociateFacesOperationRequest](src/AmazonRekognition/Requests/FaceApi/DisassociateFacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DisassociateFacesError](src/AmazonRekognition/Errors/DisassociateFacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListFaces(ListFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceApi.ListFaces(new ListFacesOperationRequest
    {
        XAmzTarget = XAmzTarget3.RekognitionServiceListFaces,
    });
}
catch (ApiException<ListFacesError> ex)
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

<code>[ListFacesOperationRequest](src/AmazonRekognition/Requests/FaceApi/ListFacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListFacesError](src/AmazonRekognition/Errors/ListFacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SearchFaces(SearchFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceApi.SearchFaces(new SearchFacesOperationRequest
    {
        XAmzTarget = XAmzTarget4.RekognitionServiceSearchFaces,
    });
}
catch (ApiException<SearchFacesError> ex)
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

<code>[SearchFacesOperationRequest](src/AmazonRekognition/Requests/FaceApi/SearchFacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[SearchFacesError](src/AmazonRekognition/Errors/SearchFacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SearchFacesByImage(SearchFacesByImageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceApi.SearchFacesByImage(new SearchFacesByImageOperationRequest
    {
        XAmzTarget = XAmzTarget5.RekognitionServiceSearchFacesByImage,
    });
}
catch (ApiException<SearchFacesByImageError> ex)
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

<code>[SearchFacesByImageOperationRequest](src/AmazonRekognition/Requests/FaceApi/SearchFacesByImageOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[SearchFacesByImageError](src/AmazonRekognition/Errors/SearchFacesByImageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FaceCollections

> Source: [FaceCollections](src/AmazonRekognition/Api/FaceCollections.cs)

<details>
<summary><code>Task CreateCollection(CreateCollectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceCollections.CreateCollection(new CreateCollectionOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionFaceCollectionsApi.RekognitionServiceCreateCollection,
    });
}
catch (ApiException<CreateCollectionError> ex)
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

<code>[CreateCollectionOperationRequest](src/AmazonRekognition/Requests/FaceCollections/CreateCollectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CreateCollectionError](src/AmazonRekognition/Errors/CreateCollectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task IndexFaces(IndexFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceCollections.IndexFaces(new IndexFacesOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionFaceCollectionsApi.RekognitionServiceIndexFaces,
    });
}
catch (ApiException<IndexFacesError> ex)
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

<code>[IndexFacesOperationRequest](src/AmazonRekognition/Requests/FaceCollections/IndexFacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[IndexFacesError](src/AmazonRekognition/Errors/IndexFacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListCollections(ListCollectionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceCollections.ListCollections(new ListCollectionsOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionFaceCollectionsApi.RekognitionServiceListCollections,
    });
}
catch (ApiException<ListCollectionsError> ex)
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

<code>[ListCollectionsOperationRequest](src/AmazonRekognition/Requests/FaceCollections/ListCollectionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListCollectionsError](src/AmazonRekognition/Errors/ListCollectionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FaceLiveness

> Source: [FaceLiveness](src/AmazonRekognition/Api/FaceLiveness.cs)

<details>
<summary><code>Task CreateFaceLivenessSession(CreateFaceLivenessSessionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceLiveness.CreateFaceLivenessSession(new CreateFaceLivenessSessionOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionFaceLivenessApi.RekognitionServiceCreateFaceLivenessSession,
    });
}
catch (ApiException<CreateFaceLivenessSessionError> ex)
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

<code>[CreateFaceLivenessSessionOperationRequest](src/AmazonRekognition/Requests/FaceLiveness/CreateFaceLivenessSessionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CreateFaceLivenessSessionError](src/AmazonRekognition/Errors/CreateFaceLivenessSessionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetFaceLivenessSessionResults(GetFaceLivenessSessionResultsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceLiveness.GetFaceLivenessSessionResults(new GetFaceLivenessSessionResultsOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionFaceLivenessApi.RekognitionServiceGetFaceLivenessSessionResults,
    });
}
catch (ApiException<GetFaceLivenessSessionResultsError> ex)
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

<code>[GetFaceLivenessSessionResultsOperationRequest](src/AmazonRekognition/Requests/FaceLiveness/GetFaceLivenessSessionResultsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetFaceLivenessSessionResultsError](src/AmazonRekognition/Errors/GetFaceLivenessSessionResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FaceSearch

> Source: [FaceSearch](src/AmazonRekognition/Api/FaceSearch.cs)

<details>
<summary><code>Task GetFaceSearch(GetFaceSearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceSearch.GetFaceSearch(new GetFaceSearchOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionFaceSearchApi.RekognitionServiceGetFaceSearch,
    });
}
catch (ApiException<GetFaceSearchError> ex)
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

<code>[GetFaceSearchOperationRequest](src/AmazonRekognition/Requests/FaceSearch/GetFaceSearchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetFaceSearchError](src/AmazonRekognition/Errors/GetFaceSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SearchFacesByImage2(SearchFacesByImage2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceSearch.SearchFacesByImage2(new SearchFacesByImage2Request
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionFaceSearchApi.RekognitionServiceSearchFacesByImage,
    });
}
catch (ApiException<SearchFacesByImage2Error> ex)
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

<code>[SearchFacesByImage2Request](src/AmazonRekognition/Requests/FaceSearch/SearchFacesByImage2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[SearchFacesByImage2Error](src/AmazonRekognition/Errors/SearchFacesByImage2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartFaceSearch(StartFaceSearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FaceSearch.StartFaceSearch(new StartFaceSearchOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionFaceSearchApi.RekognitionServiceStartFaceSearch,
    });
}
catch (ApiException<StartFaceSearchError> ex)
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

<code>[StartFaceSearchOperationRequest](src/AmazonRekognition/Requests/FaceSearch/StartFaceSearchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartFaceSearchError](src/AmazonRekognition/Errors/StartFaceSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FacialAnalysis

> Source: [FacialAnalysis](src/AmazonRekognition/Api/FacialAnalysis.cs)

<details>
<summary><code>Task CompareFaces(CompareFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FacialAnalysis.CompareFaces(new CompareFacesOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionFacialAnalysisApi.RekognitionServiceCompareFaces,
    });
}
catch (ApiException<CompareFacesError> ex)
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

<code>[CompareFacesOperationRequest](src/AmazonRekognition/Requests/FacialAnalysis/CompareFacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CompareFacesError](src/AmazonRekognition/Errors/CompareFacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectFaces(DetectFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.FacialAnalysis.DetectFaces(new DetectFacesOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionFacialAnalysisApi.RekognitionServiceDetectFaces,
    });
}
catch (ApiException<DetectFacesError> ex)
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

<code>[DetectFacesOperationRequest](src/AmazonRekognition/Requests/FacialAnalysis/DetectFacesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectFacesError](src/AmazonRekognition/Errors/DetectFacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ImageAnalysis

> Source: [ImageAnalysis](src/AmazonRekognition/Api/ImageAnalysis.cs)

<details>
<summary><code>Task DetectLabels(DetectLabelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ImageAnalysis.DetectLabels(new DetectLabelsOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionImageAnalysisApi.RekognitionServiceDetectLabels,
    });
}
catch (ApiException<DetectLabelsError> ex)
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

<code>[DetectLabelsOperationRequest](src/AmazonRekognition/Requests/ImageAnalysis/DetectLabelsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectLabelsError](src/AmazonRekognition/Errors/DetectLabelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MediaAnalysisJob

> Source: [MediaAnalysisJob](src/AmazonRekognition/Api/MediaAnalysisJob.cs)

<details>
<summary><code>Task GetMediaAnalysisJob(GetMediaAnalysisJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.MediaAnalysisJob.GetMediaAnalysisJob(new GetMediaAnalysisJobOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionMediaAnalysisJobApi.RekognitionServiceGetMediaAnalysisJob,
    });
}
catch (ApiException<GetMediaAnalysisJobError> ex)
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

<code>[GetMediaAnalysisJobOperationRequest](src/AmazonRekognition/Requests/MediaAnalysisJob/GetMediaAnalysisJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetMediaAnalysisJobError](src/AmazonRekognition/Errors/GetMediaAnalysisJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListMediaAnalysisJobs(ListMediaAnalysisJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.MediaAnalysisJob.ListMediaAnalysisJobs(new ListMediaAnalysisJobsOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionMediaAnalysisJobApi.RekognitionServiceListMediaAnalysisJobs,
    });
}
catch (ApiException<ListMediaAnalysisJobsError> ex)
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

<code>[ListMediaAnalysisJobsOperationRequest](src/AmazonRekognition/Requests/MediaAnalysisJob/ListMediaAnalysisJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListMediaAnalysisJobsError](src/AmazonRekognition/Errors/ListMediaAnalysisJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartMediaAnalysisJob(StartMediaAnalysisJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.MediaAnalysisJob.StartMediaAnalysisJob(new StartMediaAnalysisJobOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionMediaAnalysisJobApi.RekognitionServiceStartMediaAnalysisJob,
    });
}
catch (ApiException<StartMediaAnalysisJobError> ex)
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

<code>[StartMediaAnalysisJobOperationRequest](src/AmazonRekognition/Requests/MediaAnalysisJob/StartMediaAnalysisJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartMediaAnalysisJobError](src/AmazonRekognition/Errors/StartMediaAnalysisJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AmazonRekognition/Api/Operations.cs)

<details>
<summary><code>Task CompareFaces2(CompareFaces2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.CompareFaces2(new CompareFaces2Request
    {
        XAmzTarget = XAmzTargetAmazonRekognitionFacialAnalysisApi.RekognitionServiceCompareFaces,
    });
}
catch (ApiException<CompareFaces2Error> ex)
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

<code>[CompareFaces2Request](src/AmazonRekognition/Requests/Operations/CompareFaces2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CompareFaces2Error](src/AmazonRekognition/Errors/CompareFaces2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CopyProjectVersion(CopyProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.CopyProjectVersion(new CopyProjectVersionOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionOperationsApi.RekognitionServiceCopyProjectVersion,
    });
}
catch (ApiException<CopyProjectVersionError> ex)
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

<code>[CopyProjectVersionOperationRequest](src/AmazonRekognition/Requests/Operations/CopyProjectVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CopyProjectVersionError](src/AmazonRekognition/Errors/CopyProjectVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCollection(DeleteCollectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DeleteCollection(new DeleteCollectionOperationRequest
    {
        XAmzTarget = XAmzTarget11.RekognitionServiceDeleteCollection,
    });
}
catch (ApiException<DeleteCollectionError> ex)
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

<code>[DeleteCollectionOperationRequest](src/AmazonRekognition/Requests/Operations/DeleteCollectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DeleteCollectionError](src/AmazonRekognition/Errors/DeleteCollectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeCollection(DescribeCollectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DescribeCollection(new DescribeCollectionOperationRequest
    {
        XAmzTarget = XAmzTarget12.RekognitionServiceDescribeCollection,
    });
}
catch (ApiException<DescribeCollectionError> ex)
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

<code>[DescribeCollectionOperationRequest](src/AmazonRekognition/Requests/Operations/DescribeCollectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DescribeCollectionError](src/AmazonRekognition/Errors/DescribeCollectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectCustomLabels2(DetectCustomLabels2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectCustomLabels2(new DetectCustomLabels2Request
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionOperationsApi.RekognitionServiceDetectCustomLabels,
    });
}
catch (ApiException<DetectCustomLabels2Error> ex)
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

<code>[DetectCustomLabels2Request](src/AmazonRekognition/Requests/Operations/DetectCustomLabels2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectCustomLabels2Error](src/AmazonRekognition/Errors/DetectCustomLabels2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectFaces2(DetectFaces2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectFaces2(new DetectFaces2Request
    {
        XAmzTarget = XAmzTarget3AmazonRekognitionOperationsApi.RekognitionServiceDetectFaces,
    });
}
catch (ApiException<DetectFaces2Error> ex)
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

<code>[DetectFaces2Request](src/AmazonRekognition/Requests/Operations/DetectFaces2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectFaces2Error](src/AmazonRekognition/Errors/DetectFaces2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectLabels2(DetectLabels2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectLabels2(new DetectLabels2Request
    {
        XAmzTarget = XAmzTarget4AmazonRekognitionOperationsApi.RekognitionServiceDetectLabels,
    });
}
catch (ApiException<DetectLabels2Error> ex)
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

<code>[DetectLabels2Request](src/AmazonRekognition/Requests/Operations/DetectLabels2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectLabels2Error](src/AmazonRekognition/Errors/DetectLabels2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectModerationLabels2(DetectModerationLabels2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectModerationLabels2(new DetectModerationLabels2Request
    {
        XAmzTarget = XAmzTarget5AmazonRekognitionOperationsApi.RekognitionServiceDetectModerationLabels,
    });
}
catch (ApiException<DetectModerationLabels2Error> ex)
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

<code>[DetectModerationLabels2Request](src/AmazonRekognition/Requests/Operations/DetectModerationLabels2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectModerationLabels2Error](src/AmazonRekognition/Errors/DetectModerationLabels2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectProtectiveEquipment(DetectProtectiveEquipmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectProtectiveEquipment(new DetectProtectiveEquipmentOperationRequest
    {
        XAmzTarget = XAmzTarget6.RekognitionServiceDetectProtectiveEquipment,
    });
}
catch (ApiException<DetectProtectiveEquipmentError> ex)
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

<code>[DetectProtectiveEquipmentOperationRequest](src/AmazonRekognition/Requests/Operations/DetectProtectiveEquipmentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectProtectiveEquipmentError](src/AmazonRekognition/Errors/DetectProtectiveEquipmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectText(DetectTextOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectText(new DetectTextOperationRequest
    {
        XAmzTarget = XAmzTarget7.RekognitionServiceDetectText,
    });
}
catch (ApiException<DetectTextError> ex)
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

<code>[DetectTextOperationRequest](src/AmazonRekognition/Requests/Operations/DetectTextOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectTextError](src/AmazonRekognition/Errors/DetectTextError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DistributeDatasetEntries(DistributeDatasetEntriesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DistributeDatasetEntries(new DistributeDatasetEntriesOperationRequest
    {
        XAmzTarget = XAmzTarget8.RekognitionServiceDistributeDatasetEntries,
    });
}
catch (ApiException<DistributeDatasetEntriesError> ex)
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

<code>[DistributeDatasetEntriesOperationRequest](src/AmazonRekognition/Requests/Operations/DistributeDatasetEntriesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DistributeDatasetEntriesError](src/AmazonRekognition/Errors/DistributeDatasetEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetCelebrityInfo(GetCelebrityInfoOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.GetCelebrityInfo(new GetCelebrityInfoOperationRequest
    {
        XAmzTarget = XAmzTarget13.RekognitionServiceGetCelebrityInfo,
    });
}
catch (ApiException<GetCelebrityInfoError> ex)
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

<code>[GetCelebrityInfoOperationRequest](src/AmazonRekognition/Requests/Operations/GetCelebrityInfoOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetCelebrityInfoError](src/AmazonRekognition/Errors/GetCelebrityInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetFaceDetection(GetFaceDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.GetFaceDetection(new GetFaceDetectionOperationRequest
    {
        XAmzTarget = XAmzTarget14.RekognitionServiceGetFaceDetection,
    });
}
catch (ApiException<GetFaceDetectionError> ex)
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

<code>[GetFaceDetectionOperationRequest](src/AmazonRekognition/Requests/Operations/GetFaceDetectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetFaceDetectionError](src/AmazonRekognition/Errors/GetFaceDetectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetPersonTracking(GetPersonTrackingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.GetPersonTracking(new GetPersonTrackingOperationRequest
    {
        XAmzTarget = XAmzTarget16.RekognitionServiceGetPersonTracking,
    });
}
catch (ApiException<GetPersonTrackingError> ex)
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

<code>[GetPersonTrackingOperationRequest](src/AmazonRekognition/Requests/Operations/GetPersonTrackingOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetPersonTrackingError](src/AmazonRekognition/Errors/GetPersonTrackingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetSegmentDetection(GetSegmentDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.GetSegmentDetection(new GetSegmentDetectionOperationRequest
    {
        XAmzTarget = XAmzTarget18.RekognitionServiceGetSegmentDetection,
    });
}
catch (ApiException<GetSegmentDetectionError> ex)
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

<code>[GetSegmentDetectionOperationRequest](src/AmazonRekognition/Requests/Operations/GetSegmentDetectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetSegmentDetectionError](src/AmazonRekognition/Errors/GetSegmentDetectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task IndexFaces2(IndexFaces2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.IndexFaces2(new IndexFaces2Request
    {
        XAmzTarget = XAmzTarget9.RekognitionServiceIndexFaces,
    });
}
catch (ApiException<IndexFaces2Error> ex)
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

<code>[IndexFaces2Request](src/AmazonRekognition/Requests/Operations/IndexFaces2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[IndexFaces2Error](src/AmazonRekognition/Errors/IndexFaces2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDatasetEntries(ListDatasetEntriesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ListDatasetEntries(new ListDatasetEntriesOperationRequest
    {
        XAmzTarget = XAmzTarget20.RekognitionServiceListDatasetEntries,
    });
}
catch (ApiException<ListDatasetEntriesError> ex)
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

<code>[ListDatasetEntriesOperationRequest](src/AmazonRekognition/Requests/Operations/ListDatasetEntriesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListDatasetEntriesError](src/AmazonRekognition/Errors/ListDatasetEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDatasetLabels(ListDatasetLabelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ListDatasetLabels(new ListDatasetLabelsOperationRequest
    {
        XAmzTarget = XAmzTarget22.RekognitionServiceListDatasetLabels,
    });
}
catch (ApiException<ListDatasetLabelsError> ex)
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

<code>[ListDatasetLabelsOperationRequest](src/AmazonRekognition/Requests/Operations/ListDatasetLabelsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListDatasetLabelsError](src/AmazonRekognition/Errors/ListDatasetLabelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ListTagsForResource(new ListTagsForResourceOperationRequest
    {
        XAmzTarget = XAmzTarget23.RekognitionServiceListTagsForResource,
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

<code>[ListTagsForResourceOperationRequest](src/AmazonRekognition/Requests/Operations/ListTagsForResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AmazonRekognition/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RecognizeCelebrities2(RecognizeCelebrities2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.RecognizeCelebrities2(new RecognizeCelebrities2Request
    {
        XAmzTarget = XAmzTarget2.RekognitionServiceRecognizeCelebrities,
    });
}
catch (ApiException<RecognizeCelebrities2Error> ex)
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

<code>[RecognizeCelebrities2Request](src/AmazonRekognition/Requests/Operations/RecognizeCelebrities2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[RecognizeCelebrities2Error](src/AmazonRekognition/Errors/RecognizeCelebrities2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartFaceDetection(StartFaceDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.StartFaceDetection(new StartFaceDetectionOperationRequest
    {
        XAmzTarget = XAmzTarget15.RekognitionServiceStartFaceDetection,
    });
}
catch (ApiException<StartFaceDetectionError> ex)
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

<code>[StartFaceDetectionOperationRequest](src/AmazonRekognition/Requests/Operations/StartFaceDetectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartFaceDetectionError](src/AmazonRekognition/Errors/StartFaceDetectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartPersonTracking(StartPersonTrackingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.StartPersonTracking(new StartPersonTrackingOperationRequest
    {
        XAmzTarget = XAmzTarget17.RekognitionServiceStartPersonTracking,
    });
}
catch (ApiException<StartPersonTrackingError> ex)
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

<code>[StartPersonTrackingOperationRequest](src/AmazonRekognition/Requests/Operations/StartPersonTrackingOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartPersonTrackingError](src/AmazonRekognition/Errors/StartPersonTrackingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartSegmentDetection(StartSegmentDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.StartSegmentDetection(new StartSegmentDetectionOperationRequest
    {
        XAmzTarget = XAmzTarget19.RekognitionServiceStartSegmentDetection,
    });
}
catch (ApiException<StartSegmentDetectionError> ex)
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

<code>[StartSegmentDetectionOperationRequest](src/AmazonRekognition/Requests/Operations/StartSegmentDetectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartSegmentDetectionError](src/AmazonRekognition/Errors/StartSegmentDetectionError.cs)&gt;</code>

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

Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or Custom Labels model. For more information, see Tagging AWS Resources. This operation requires permissions to perform the rekognition:TagResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.TagResource(new TagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget24.RekognitionServiceTagResource,
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

<code>[TagResourceOperationRequest](src/AmazonRekognition/Requests/Operations/TagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AmazonRekognition/Errors/TagResourceError.cs)&gt;</code>

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

Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom Labels model. This operation requires permissions to perform the rekognition:UntagResource action.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.UntagResource(new UntagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget25.RekognitionServiceUntagResource,
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

<code>[UntagResourceOperationRequest](src/AmazonRekognition/Requests/Operations/UntagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AmazonRekognition/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateDatasetEntries(UpdateDatasetEntriesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.UpdateDatasetEntries(new UpdateDatasetEntriesOperationRequest
    {
        XAmzTarget = XAmzTarget21.RekognitionServiceUpdateDatasetEntries,
    });
}
catch (ApiException<UpdateDatasetEntriesError> ex)
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

<code>[UpdateDatasetEntriesOperationRequest](src/AmazonRekognition/Requests/Operations/UpdateDatasetEntriesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[UpdateDatasetEntriesError](src/AmazonRekognition/Errors/UpdateDatasetEntriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Project

> Source: [Project](src/AmazonRekognition/Api/Project.cs)

<details>
<summary><code>Task CreateProject(CreateProjectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Project.CreateProject(new CreateProjectOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionProjectApi.RekognitionServiceCreateProject,
    });
}
catch (ApiException<CreateProjectError> ex)
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

<code>[CreateProjectOperationRequest](src/AmazonRekognition/Requests/Project/CreateProjectOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CreateProjectError](src/AmazonRekognition/Errors/CreateProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteProject(DeleteProjectOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Project.DeleteProject(new DeleteProjectOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionProjectApi.RekognitionServiceDeleteProject,
    });
}
catch (ApiException<DeleteProjectError> ex)
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

<code>[DeleteProjectOperationRequest](src/AmazonRekognition/Requests/Project/DeleteProjectOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectError](src/AmazonRekognition/Errors/DeleteProjectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeProjects(DescribeProjectsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Project.DescribeProjects(new DescribeProjectsOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionProjectApi.RekognitionServiceDescribeProjects,
    });
}
catch (ApiException<DescribeProjectsError> ex)
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

<code>[DescribeProjectsOperationRequest](src/AmazonRekognition/Requests/Project/DescribeProjectsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DescribeProjectsError](src/AmazonRekognition/Errors/DescribeProjectsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectPolicyApi

> Source: [ProjectPolicyApi](src/AmazonRekognition/Api/ProjectPolicyApi.cs)

<details>
<summary><code>Task DeleteProjectPolicy(DeleteProjectPolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ProjectPolicyApi.DeleteProjectPolicy(new DeleteProjectPolicyOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionProjectPolicyApi.RekognitionServiceDeleteProjectPolicy,
    });
}
catch (ApiException<DeleteProjectPolicyError> ex)
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

<code>[DeleteProjectPolicyOperationRequest](src/AmazonRekognition/Requests/ProjectPolicyApi/DeleteProjectPolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectPolicyError](src/AmazonRekognition/Errors/DeleteProjectPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListProjectPolicies(ListProjectPoliciesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ProjectPolicyApi.ListProjectPolicies(new ListProjectPoliciesOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionProjectPolicyApi.RekognitionServiceListProjectPolicies,
    });
}
catch (ApiException<ListProjectPoliciesError> ex)
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

<code>[ListProjectPoliciesOperationRequest](src/AmazonRekognition/Requests/ProjectPolicyApi/ListProjectPoliciesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListProjectPoliciesError](src/AmazonRekognition/Errors/ListProjectPoliciesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutProjectPolicy(PutProjectPolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ProjectPolicyApi.PutProjectPolicy(new PutProjectPolicyOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionProjectPolicyApi.RekognitionServicePutProjectPolicy,
    });
}
catch (ApiException<PutProjectPolicyError> ex)
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

<code>[PutProjectPolicyOperationRequest](src/AmazonRekognition/Requests/ProjectPolicyApi/PutProjectPolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[PutProjectPolicyError](src/AmazonRekognition/Errors/PutProjectPolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectVersion

> Source: [ProjectVersion](src/AmazonRekognition/Api/ProjectVersion.cs)

<details>
<summary><code>Task CreateProjectVersion(CreateProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ProjectVersion.CreateProjectVersion(new CreateProjectVersionOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionProjectVersionApi.RekognitionServiceCreateProjectVersion,
    });
}
catch (ApiException<CreateProjectVersionError> ex)
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

<code>[CreateProjectVersionOperationRequest](src/AmazonRekognition/Requests/ProjectVersion/CreateProjectVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CreateProjectVersionError](src/AmazonRekognition/Errors/CreateProjectVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteProjectVersion(DeleteProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ProjectVersion.DeleteProjectVersion(new DeleteProjectVersionOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionProjectVersionApi.RekognitionServiceDeleteProjectVersion,
    });
}
catch (ApiException<DeleteProjectVersionError> ex)
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

<code>[DeleteProjectVersionOperationRequest](src/AmazonRekognition/Requests/ProjectVersion/DeleteProjectVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DeleteProjectVersionError](src/AmazonRekognition/Errors/DeleteProjectVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeProjectVersions(DescribeProjectVersionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ProjectVersion.DescribeProjectVersions(new DescribeProjectVersionsOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionProjectVersionApi.RekognitionServiceDescribeProjectVersions,
    });
}
catch (ApiException<DescribeProjectVersionsError> ex)
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

<code>[DescribeProjectVersionsOperationRequest](src/AmazonRekognition/Requests/ProjectVersion/DescribeProjectVersionsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DescribeProjectVersionsError](src/AmazonRekognition/Errors/DescribeProjectVersionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartProjectVersion(StartProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ProjectVersion.StartProjectVersion(new StartProjectVersionOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonRekognitionProjectVersionApi.RekognitionServiceStartProjectVersion,
    });
}
catch (ApiException<StartProjectVersionError> ex)
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

<code>[StartProjectVersionOperationRequest](src/AmazonRekognition/Requests/ProjectVersion/StartProjectVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartProjectVersionError](src/AmazonRekognition/Errors/StartProjectVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopProjectVersion(StopProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.ProjectVersion.StopProjectVersion(new StopProjectVersionOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonRekognitionProjectVersionApi.RekognitionServiceStopProjectVersion,
    });
}
catch (ApiException<StopProjectVersionError> ex)
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

<code>[StopProjectVersionOperationRequest](src/AmazonRekognition/Requests/ProjectVersion/StopProjectVersionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StopProjectVersionError](src/AmazonRekognition/Errors/StopProjectVersionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StoredVideoAnalysis

> Source: [StoredVideoAnalysis](src/AmazonRekognition/Api/StoredVideoAnalysis.cs)

<details>
<summary><code>Task GetLabelDetection(GetLabelDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StoredVideoAnalysis.GetLabelDetection(new GetLabelDetectionOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionStoredVideoAnalysisApi.RekognitionServiceGetLabelDetection,
    });
}
catch (ApiException<GetLabelDetectionError> ex)
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

<code>[GetLabelDetectionOperationRequest](src/AmazonRekognition/Requests/StoredVideoAnalysis/GetLabelDetectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetLabelDetectionError](src/AmazonRekognition/Errors/GetLabelDetectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartLabelDetection(StartLabelDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StoredVideoAnalysis.StartLabelDetection(new StartLabelDetectionOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi.RekognitionServiceStartLabelDetection,
    });
}
catch (ApiException<StartLabelDetectionError> ex)
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

<code>[StartLabelDetectionOperationRequest](src/AmazonRekognition/Requests/StoredVideoAnalysis/StartLabelDetectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartLabelDetectionError](src/AmazonRekognition/Errors/StartLabelDetectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StreamProcessorApi

> Source: [StreamProcessorApi](src/AmazonRekognition/Api/StreamProcessorApi.cs)

<details>
<summary><code>Task CreateStreamProcessor(CreateStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StreamProcessorApi.CreateStreamProcessor(new CreateStreamProcessorOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionStreamProcessorApi.RekognitionServiceCreateStreamProcessor,
    });
}
catch (ApiException<CreateStreamProcessorError> ex)
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

<code>[CreateStreamProcessorOperationRequest](src/AmazonRekognition/Requests/StreamProcessorApi/CreateStreamProcessorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CreateStreamProcessorError](src/AmazonRekognition/Errors/CreateStreamProcessorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteStreamProcessor(DeleteStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StreamProcessorApi.DeleteStreamProcessor(new DeleteStreamProcessorOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionStreamProcessorApi.RekognitionServiceDeleteStreamProcessor,
    });
}
catch (ApiException<DeleteStreamProcessorError> ex)
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

<code>[DeleteStreamProcessorOperationRequest](src/AmazonRekognition/Requests/StreamProcessorApi/DeleteStreamProcessorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DeleteStreamProcessorError](src/AmazonRekognition/Errors/DeleteStreamProcessorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeStreamProcessor(DescribeStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StreamProcessorApi.DescribeStreamProcessor(new DescribeStreamProcessorOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionStreamProcessorApi.RekognitionServiceDescribeStreamProcessor,
    });
}
catch (ApiException<DescribeStreamProcessorError> ex)
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

<code>[DescribeStreamProcessorOperationRequest](src/AmazonRekognition/Requests/StreamProcessorApi/DescribeStreamProcessorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DescribeStreamProcessorError](src/AmazonRekognition/Errors/DescribeStreamProcessorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListStreamProcessors(ListStreamProcessorsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StreamProcessorApi.ListStreamProcessors(new ListStreamProcessorsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonRekognitionStreamProcessorApi.RekognitionServiceListStreamProcessors,
    });
}
catch (ApiException<ListStreamProcessorsError> ex)
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

<code>[ListStreamProcessorsOperationRequest](src/AmazonRekognition/Requests/StreamProcessorApi/ListStreamProcessorsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListStreamProcessorsError](src/AmazonRekognition/Errors/ListStreamProcessorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartStreamProcessor(StartStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StreamProcessorApi.StartStreamProcessor(new StartStreamProcessorOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonRekognitionStreamProcessorApi.RekognitionServiceStartStreamProcessor,
    });
}
catch (ApiException<StartStreamProcessorError> ex)
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

<code>[StartStreamProcessorOperationRequest](src/AmazonRekognition/Requests/StreamProcessorApi/StartStreamProcessorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartStreamProcessorError](src/AmazonRekognition/Errors/StartStreamProcessorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopStreamProcessor(StopStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StreamProcessorApi.StopStreamProcessor(new StopStreamProcessorOperationRequest
    {
        XAmzTarget = XAmzTarget5AmazonRekognitionStreamProcessorApi.RekognitionServiceStopStreamProcessor,
    });
}
catch (ApiException<StopStreamProcessorError> ex)
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

<code>[StopStreamProcessorOperationRequest](src/AmazonRekognition/Requests/StreamProcessorApi/StopStreamProcessorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StopStreamProcessorError](src/AmazonRekognition/Errors/StopStreamProcessorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateStreamProcessor(UpdateStreamProcessorOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.StreamProcessorApi.UpdateStreamProcessor(new UpdateStreamProcessorOperationRequest
    {
        XAmzTarget = XAmzTarget6AmazonRekognitionStreamProcessorApi.RekognitionServiceUpdateStreamProcessor,
    });
}
catch (ApiException<UpdateStreamProcessorError> ex)
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

<code>[UpdateStreamProcessorOperationRequest](src/AmazonRekognition/Requests/StreamProcessorApi/UpdateStreamProcessorOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[UpdateStreamProcessorError](src/AmazonRekognition/Errors/UpdateStreamProcessorError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TextDetectionApi

> Source: [TextDetectionApi](src/AmazonRekognition/Api/TextDetectionApi.cs)

<details>
<summary><code>Task DetectText2(DetectText2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.TextDetectionApi.DetectText2(new DetectText2Request
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionTextDetectionApi.RekognitionServiceDetectText,
    });
}
catch (ApiException<DetectText2Error> ex)
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

<code>[DetectText2Request](src/AmazonRekognition/Requests/TextDetectionApi/DetectText2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DetectText2Error](src/AmazonRekognition/Errors/DetectText2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetTextDetection(GetTextDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.TextDetectionApi.GetTextDetection(new GetTextDetectionOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionTextDetectionApi.RekognitionServiceGetTextDetection,
    });
}
catch (ApiException<GetTextDetectionError> ex)
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

<code>[GetTextDetectionOperationRequest](src/AmazonRekognition/Requests/TextDetectionApi/GetTextDetectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[GetTextDetectionError](src/AmazonRekognition/Errors/GetTextDetectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartTextDetection(StartTextDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.TextDetectionApi.StartTextDetection(new StartTextDetectionOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionTextDetectionApi.RekognitionServiceStartTextDetection,
    });
}
catch (ApiException<StartTextDetectionError> ex)
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

<code>[StartTextDetectionOperationRequest](src/AmazonRekognition/Requests/TextDetectionApi/StartTextDetectionOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[StartTextDetectionError](src/AmazonRekognition/Errors/StartTextDetectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](src/AmazonRekognition/Api/UserApi.cs)

<details>
<summary><code>Task CreateUser(CreateUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.UserApi.CreateUser(new CreateUserOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonRekognitionUserApi.RekognitionServiceCreateUser,
    });
}
catch (ApiException<CreateUserError> ex)
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

<code>[CreateUserOperationRequest](src/AmazonRekognition/Requests/UserApi/CreateUserOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[CreateUserError](src/AmazonRekognition/Errors/CreateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteUser(DeleteUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.UserApi.DeleteUser(new DeleteUserOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonRekognitionUserApi.RekognitionServiceDeleteUser,
    });
}
catch (ApiException<DeleteUserError> ex)
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

<code>[DeleteUserOperationRequest](src/AmazonRekognition/Requests/UserApi/DeleteUserOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[DeleteUserError](src/AmazonRekognition/Errors/DeleteUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListUsers(ListUsersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.UserApi.ListUsers(new ListUsersOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonRekognitionUserApi.RekognitionServiceListUsers,
    });
}
catch (ApiException<ListUsersError> ex)
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

<code>[ListUsersOperationRequest](src/AmazonRekognition/Requests/UserApi/ListUsersOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[ListUsersError](src/AmazonRekognition/Errors/ListUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SearchUsers(SearchUsersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.UserApi.SearchUsers(new SearchUsersOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonRekognitionUserApi.RekognitionServiceSearchUsers,
    });
}
catch (ApiException<SearchUsersError> ex)
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

<code>[SearchUsersOperationRequest](src/AmazonRekognition/Requests/UserApi/SearchUsersOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[SearchUsersError](src/AmazonRekognition/Errors/SearchUsersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SearchUsersByImage(SearchUsersByImageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.UserApi.SearchUsersByImage(new SearchUsersByImageOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonRekognitionUserApi.RekognitionServiceSearchUsersByImage,
    });
}
catch (ApiException<SearchUsersByImageError> ex)
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

<code>[SearchUsersByImageOperationRequest](src/AmazonRekognition/Requests/UserApi/SearchUsersByImageOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonRekognition/Core/Exceptions/ApiException.cs)&lt;[SearchUsersByImageError](src/AmazonRekognition/Errors/SearchUsersByImageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

