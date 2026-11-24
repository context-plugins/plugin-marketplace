<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AmazonTranscribe/Api/Operations.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMedicalScribeStream

- **Server group**: `DefaultAmazonTranscribeServiceOperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `GetMedicalScribeStream(GetMedicalScribeStreamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SessionId`
- **Returns**: `GetMedicalScribeStreamResponse`
- **Error**: `ApiException<GetMedicalScribeStreamError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMedicalScribeStreamRequest` | `src/AmazonTranscribe/Requests/Operations/GetMedicalScribeStreamRequest.cs` |
| `GetMedicalScribeStreamResponse` | `src/AmazonTranscribe/Models/GetMedicalScribeStreamResponse.cs` |
| `GetMedicalScribeStreamError` | `src/AmazonTranscribe/Errors/GetMedicalScribeStreamError.cs` |
| `BadRequestException` | `src/AmazonTranscribe/Models/BadRequestException.cs` |
| `ResourceNotFoundException` | `src/AmazonTranscribe/Models/ResourceNotFoundException.cs` |
| `LimitExceededException` | `src/AmazonTranscribe/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonTranscribe/Models/InternalFailureException.cs` |

### ListTagsForResource

- **Server group**: `DefaultAmazonTranscribeServiceOperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceOperationRequest` | `src/AmazonTranscribe/Requests/Operations/ListTagsForResourceOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceOperationsApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceOperationsApi.cs` |
| `ListTagsForResourceError` | `src/AmazonTranscribe/Errors/ListTagsForResourceError.cs` |

### StartCallAnalyticsStreamTranscription

- **Server group**: `DefaultAmazonTranscribeServiceOperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartCallAnalyticsStreamTranscription(StartCallAnalyticsStreamTranscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmznTranscribeSampleRate`, `XAmznTranscribeMediaEncoding`
- **Returns**: `StartCallAnalyticsStreamTranscriptionResponse`
- **Error**: `ApiException<StartCallAnalyticsStreamTranscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetServiceUnavailableException([NotNullWhen(true)] out ServiceUnavailableException? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartCallAnalyticsStreamTranscriptionRequest` | `src/AmazonTranscribe/Requests/Operations/StartCallAnalyticsStreamTranscriptionRequest.cs` |
| `XAmznTranscribeMediaEncoding1` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeMediaEncoding1.cs` |
| `XAmznTranscribeLanguageCode1` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeLanguageCode1.cs` |
| `XAmznTranscribeVocabularyFilterMethod` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeVocabularyFilterMethod.cs` |
| `XAmznTranscribePreferredLanguage` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribePreferredLanguage.cs` |
| `XAmznTranscribePartialResultsStability` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribePartialResultsStability.cs` |
| `XAmznTranscribeContentIdentificationType` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeContentIdentificationType.cs` |
| `XAmznTranscribeContentRedactionType` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeContentRedactionType.cs` |
| `AudioStream` | `src/AmazonTranscribe/Models/AudioStream.cs` |
| `StartCallAnalyticsStreamTranscriptionResponse` | `src/AmazonTranscribe/Models/StartCallAnalyticsStreamTranscriptionResponse.cs` |
| `StartCallAnalyticsStreamTranscriptionError` | `src/AmazonTranscribe/Errors/StartCallAnalyticsStreamTranscriptionError.cs` |
| `BadRequestException` | `src/AmazonTranscribe/Models/BadRequestException.cs` |
| `ConflictException` | `src/AmazonTranscribe/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonTranscribe/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonTranscribe/Models/InternalFailureException.cs` |
| `ServiceUnavailableException` | `src/AmazonTranscribe/Models/ServiceUnavailableException.cs` |

### StartMedicalScribeStream

- **Server group**: `DefaultAmazonTranscribeServiceOperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartMedicalScribeStream(StartMedicalScribeStreamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmznTranscribeLanguageCode`, `XAmznTranscribeSampleRate`, `XAmznTranscribeMediaEncoding`
- **Returns**: `StartMedicalScribeStreamResponse`
- **Error**: `ApiException<StartMedicalScribeStreamError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetServiceUnavailableException([NotNullWhen(true)] out ServiceUnavailableException? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartMedicalScribeStreamRequest` | `src/AmazonTranscribe/Requests/Operations/StartMedicalScribeStreamRequest.cs` |
| `XAmznTranscribeLanguageCode` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeLanguageCode.cs` |
| `XAmznTranscribeMediaEncoding` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeMediaEncoding.cs` |
| `MedicalScribeInputStream` | `src/AmazonTranscribe/Models/MedicalScribeInputStream.cs` |
| `StartMedicalScribeStreamResponse` | `src/AmazonTranscribe/Models/StartMedicalScribeStreamResponse.cs` |
| `StartMedicalScribeStreamError` | `src/AmazonTranscribe/Errors/StartMedicalScribeStreamError.cs` |
| `BadRequestException` | `src/AmazonTranscribe/Models/BadRequestException.cs` |
| `ConflictException` | `src/AmazonTranscribe/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonTranscribe/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonTranscribe/Models/InternalFailureException.cs` |
| `ServiceUnavailableException` | `src/AmazonTranscribe/Models/ServiceUnavailableException.cs` |

### StartMedicalStreamTranscription

- **Server group**: `DefaultAmazonTranscribeServiceOperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartMedicalStreamTranscription(StartMedicalStreamTranscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmznTranscribeLanguageCode`, `XAmznTranscribeSampleRate`, `XAmznTranscribeMediaEncoding`, `XAmznTranscribeSpecialty`, `XAmznTranscribeType`
- **Returns**: `StartMedicalStreamTranscriptionResponse`
- **Error**: `ApiException<StartMedicalStreamTranscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetServiceUnavailableException([NotNullWhen(true)] out ServiceUnavailableException? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartMedicalStreamTranscriptionRequest` | `src/AmazonTranscribe/Requests/Operations/StartMedicalStreamTranscriptionRequest.cs` |
| `XAmznTranscribeLanguageCode2` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeLanguageCode2.cs` |
| `XAmznTranscribeMediaEncoding1` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeMediaEncoding1.cs` |
| `XAmznTranscribeSpecialty` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeSpecialty.cs` |
| `XAmznTranscribeType` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeType.cs` |
| `XAmznTranscribeContentIdentificationType1` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeContentIdentificationType1.cs` |
| `AudioStream` | `src/AmazonTranscribe/Models/AudioStream.cs` |
| `StartMedicalStreamTranscriptionResponse` | `src/AmazonTranscribe/Models/StartMedicalStreamTranscriptionResponse.cs` |
| `StartMedicalStreamTranscriptionError` | `src/AmazonTranscribe/Errors/StartMedicalStreamTranscriptionError.cs` |
| `BadRequestException` | `src/AmazonTranscribe/Models/BadRequestException.cs` |
| `ConflictException` | `src/AmazonTranscribe/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonTranscribe/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonTranscribe/Models/InternalFailureException.cs` |
| `ServiceUnavailableException` | `src/AmazonTranscribe/Models/ServiceUnavailableException.cs` |

### StartStreamTranscription

- **Server group**: `DefaultAmazonTranscribeServiceOperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `StartStreamTranscription(StartStreamTranscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmznTranscribeSampleRate`, `XAmznTranscribeMediaEncoding`
- **Returns**: `StartStreamTranscriptionResponse`
- **Error**: `ApiException<StartStreamTranscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetBadRequestException([NotNullWhen(true)] out BadRequestException? value)` [400] · `TryGetConflictException([NotNullWhen(true)] out ConflictException? value)` [409] · `TryGetLimitExceededException([NotNullWhen(true)] out LimitExceededException? value)` [429] · `TryGetInternalFailureException([NotNullWhen(true)] out InternalFailureException? value)` [500] · `TryGetServiceUnavailableException([NotNullWhen(true)] out ServiceUnavailableException? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartStreamTranscriptionRequest` | `src/AmazonTranscribe/Requests/Operations/StartStreamTranscriptionRequest.cs` |
| `XAmznTranscribeMediaEncoding1` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeMediaEncoding1.cs` |
| `XAmznTranscribeLanguageCode2` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeLanguageCode2.cs` |
| `XAmznTranscribeVocabularyFilterMethod` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeVocabularyFilterMethod.cs` |
| `XAmznTranscribePartialResultsStability` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribePartialResultsStability.cs` |
| `XAmznTranscribeContentIdentificationType` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeContentIdentificationType.cs` |
| `XAmznTranscribeContentRedactionType` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeContentRedactionType.cs` |
| `XAmznTranscribePreferredLanguage1` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribePreferredLanguage1.cs` |
| `XAmznTranscribeTranscriptFormat` | `src/AmazonTranscribe/Models/Enums/XAmznTranscribeTranscriptFormat.cs` |
| `AudioStream` | `src/AmazonTranscribe/Models/AudioStream.cs` |
| `StartStreamTranscriptionResponse` | `src/AmazonTranscribe/Models/StartStreamTranscriptionResponse.cs` |
| `StartStreamTranscriptionError` | `src/AmazonTranscribe/Errors/StartStreamTranscriptionError.cs` |
| `BadRequestException` | `src/AmazonTranscribe/Models/BadRequestException.cs` |
| `ConflictException` | `src/AmazonTranscribe/Models/ConflictException.cs` |
| `LimitExceededException` | `src/AmazonTranscribe/Models/LimitExceededException.cs` |
| `InternalFailureException` | `src/AmazonTranscribe/Models/InternalFailureException.cs` |
| `ServiceUnavailableException` | `src/AmazonTranscribe/Models/ServiceUnavailableException.cs` |

### TagResource

- **Server group**: `DefaultAmazonTranscribeServiceOperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceOperationRequest` | `src/AmazonTranscribe/Requests/Operations/TagResourceOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceOperationsApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceOperationsApi.cs` |
| `TagResourceError` | `src/AmazonTranscribe/Errors/TagResourceError.cs` |

### UntagResource

- **Server group**: `DefaultAmazonTranscribeServiceOperationsApi`
- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceOperationRequest` | `src/AmazonTranscribe/Requests/Operations/UntagResourceOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceOperationsApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceOperationsApi.cs` |
| `UntagResourceError` | `src/AmazonTranscribe/Errors/UntagResourceError.cs` |

