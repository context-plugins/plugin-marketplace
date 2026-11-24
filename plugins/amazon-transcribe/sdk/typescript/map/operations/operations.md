<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `src/resources/operations.ts` · 8 operations · Request and error types: namespace `Operations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `amazon-transcribe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMedicalScribeStream

- **Server**: `defaultAmazonTranscribeServiceOperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getMedicalScribeStream(request: Operations.GetMedicalScribeStreamRequest, options?: RequestOptions): ApiPromise<GetMedicalScribeStreamResponse, Operations.GetMedicalScribeStreamError>`
- **Wire**: `GET /medical-scribe-stream/{SessionId}`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetMedicalScribeStreamResponse`
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Operations.GetMedicalScribeStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"resourceNotFoundException"` [404] `ResourceNotFoundException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.GetMedicalScribeStreamRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `SessionId` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetMedicalScribeStreamResponse` | `getMedicalScribeStreamResponseSchema` | `src/models/get-medical-scribe-stream-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `ResourceNotFoundException` | `resourceNotFoundExceptionSchema` | `src/models/resource-not-found-exception.ts` |

### listTagsForResource

- **Server**: `defaultAmazonTranscribeServiceOperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTagsForResource(request: Operations.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.ListTagsForResourceError>`
- **Wire**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Operations.ListTagsForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.ListTagsForResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTargetAmazonTranscribeServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTargetAmazonTranscribeServiceOperationsApi` | `xAmzTargetAmazonTranscribeServiceOperationsApiSchema` | `src/models/xamz-target-amazon-transcribe-service-operations-api.ts` |

### startCallAnalyticsStreamTranscription

- **Server**: `defaultAmazonTranscribeServiceOperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startCallAnalyticsStreamTranscription(request: Operations.StartCallAnalyticsStreamTranscriptionRequest, options?: RequestOptions): ApiPromise<StartCallAnalyticsStreamTranscriptionResponse, Operations.StartCallAnalyticsStreamTranscriptionError>`
- **Wire**: `POST /call-analytics-stream-transcription`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartCallAnalyticsStreamTranscriptionResponse`
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Operations.StartCallAnalyticsStreamTranscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"serviceUnavailableException"` [503] `ServiceUnavailableException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.StartCallAnalyticsStreamTranscriptionRequest` (19):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmznTranscribeSampleRate` | `header` | `x-amzn-transcribe-sample-rate` | `number` | yes |
| `xAmznTranscribeMediaEncoding` | `header` | `x-amzn-transcribe-media-encoding` | `XAmznTranscribeMediaEncoding1` | yes |
| `xAmznTranscribeLanguageCode` | `header` | `x-amzn-transcribe-language-code` | `XAmznTranscribeLanguageCode1` | no |
| `xAmznTranscribeVocabularyName` | `header` | `x-amzn-transcribe-vocabulary-name` | `string` | no |
| `xAmznTranscribeSessionId` | `header` | `x-amzn-transcribe-session-id` | `string` | no |
| `xAmznTranscribeVocabularyFilterName` | `header` | `x-amzn-transcribe-vocabulary-filter-name` | `string` | no |
| `xAmznTranscribeVocabularyFilterMethod` | `header` | `x-amzn-transcribe-vocabulary-filter-method` | `XAmznTranscribeVocabularyFilterMethod` | no |
| `xAmznTranscribeLanguageModelName` | `header` | `x-amzn-transcribe-language-model-name` | `string` | no |
| `xAmznTranscribeIdentifyLanguage` | `header` | `x-amzn-transcribe-identify-language` | `boolean` | no |
| `xAmznTranscribeLanguageOptions` | `header` | `x-amzn-transcribe-language-options` | `string` | no |
| `xAmznTranscribePreferredLanguage` | `header` | `x-amzn-transcribe-preferred-language` | `XAmznTranscribePreferredLanguage` | no |
| `xAmznTranscribeVocabularyNames` | `header` | `x-amzn-transcribe-vocabulary-names` | `string` | no |
| `xAmznTranscribeVocabularyFilterNames` | `header` | `x-amzn-transcribe-vocabulary-filter-names` | `string` | no |
| `xAmznTranscribeEnablePartialResultsStabilization` | `header` | `x-amzn-transcribe-enable-partial-results-stabilization` | `boolean` | no |
| `xAmznTranscribePartialResultsStability` | `header` | `x-amzn-transcribe-partial-results-stability` | `XAmznTranscribePartialResultsStability` | no |
| `xAmznTranscribeContentIdentificationType` | `header` | `x-amzn-transcribe-content-identification-type` | `XAmznTranscribeContentIdentificationType` | no |
| `xAmznTranscribeContentRedactionType` | `header` | `x-amzn-transcribe-content-redaction-type` | `XAmznTranscribeContentRedactionType` | no |
| `xAmznTranscribePiiEntityTypes` | `header` | `x-amzn-transcribe-pii-entity-types` | `string` | no |
| `body` | `body` | — | `AudioStream` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmznTranscribeMediaEncoding1` | `xAmznTranscribeMediaEncoding1Schema` | `src/models/xamzn-transcribe-media-encoding1.ts` |
| `XAmznTranscribeLanguageCode1` | `xAmznTranscribeLanguageCode1Schema` | `src/models/xamzn-transcribe-language-code1.ts` |
| `XAmznTranscribeVocabularyFilterMethod` | `xAmznTranscribeVocabularyFilterMethodSchema` | `src/models/xamzn-transcribe-vocabulary-filter-method.ts` |
| `XAmznTranscribePreferredLanguage` | `xAmznTranscribePreferredLanguageSchema` | `src/models/xamzn-transcribe-preferred-language.ts` |
| `XAmznTranscribePartialResultsStability` | `xAmznTranscribePartialResultsStabilitySchema` | `src/models/xamzn-transcribe-partial-results-stability.ts` |
| `XAmznTranscribeContentIdentificationType` | `xAmznTranscribeContentIdentificationTypeSchema` | `src/models/xamzn-transcribe-content-identification-type.ts` |
| `XAmznTranscribeContentRedactionType` | `xAmznTranscribeContentRedactionTypeSchema` | `src/models/xamzn-transcribe-content-redaction-type.ts` |
| `AudioStream` | `audioStreamSchema` | `src/models/audio-stream.ts` |
| `StartCallAnalyticsStreamTranscriptionResponse` | `startCallAnalyticsStreamTranscriptionResponseSchema` | `src/models/start-call-analytics-stream-transcription-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `ServiceUnavailableException` | `serviceUnavailableExceptionSchema` | `src/models/service-unavailable-exception.ts` |

### startMedicalScribeStream

- **Server**: `defaultAmazonTranscribeServiceOperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startMedicalScribeStream(request: Operations.StartMedicalScribeStreamRequest, options?: RequestOptions): ApiPromise<StartMedicalScribeStreamResponse, Operations.StartMedicalScribeStreamError>`
- **Wire**: `POST /medical-scribe-stream`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartMedicalScribeStreamResponse`
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Operations.StartMedicalScribeStreamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"serviceUnavailableException"` [503] `ServiceUnavailableException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.StartMedicalScribeStreamRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmznTranscribeLanguageCode` | `header` | `x-amzn-transcribe-language-code` | `XAmznTranscribeLanguageCode` | yes |
| `xAmznTranscribeSampleRate` | `header` | `x-amzn-transcribe-sample-rate` | `number` | yes |
| `xAmznTranscribeMediaEncoding` | `header` | `x-amzn-transcribe-media-encoding` | `XAmznTranscribeMediaEncoding` | yes |
| `xAmznTranscribeSessionId` | `header` | `x-amzn-transcribe-session-id` | `string` | no |
| `body` | `body` | — | `MedicalScribeInputStream` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmznTranscribeLanguageCode` | `xAmznTranscribeLanguageCodeSchema` | `src/models/xamzn-transcribe-language-code.ts` |
| `XAmznTranscribeMediaEncoding` | `xAmznTranscribeMediaEncodingSchema` | `src/models/xamzn-transcribe-media-encoding.ts` |
| `MedicalScribeInputStream` | `medicalScribeInputStreamSchema` | `src/models/medical-scribe-input-stream.ts` |
| `StartMedicalScribeStreamResponse` | `startMedicalScribeStreamResponseSchema` | `src/models/start-medical-scribe-stream-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `ServiceUnavailableException` | `serviceUnavailableExceptionSchema` | `src/models/service-unavailable-exception.ts` |

### startMedicalStreamTranscription

- **Server**: `defaultAmazonTranscribeServiceOperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startMedicalStreamTranscription(request: Operations.StartMedicalStreamTranscriptionRequest, options?: RequestOptions): ApiPromise<StartMedicalStreamTranscriptionResponse, Operations.StartMedicalStreamTranscriptionError>`
- **Wire**: `POST /medical-stream-transcription`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartMedicalStreamTranscriptionResponse`
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Operations.StartMedicalStreamTranscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"serviceUnavailableException"` [503] `ServiceUnavailableException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.StartMedicalStreamTranscriptionRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmznTranscribeLanguageCode` | `header` | `x-amzn-transcribe-language-code` | `XAmznTranscribeLanguageCode2` | yes |
| `xAmznTranscribeSampleRate` | `header` | `x-amzn-transcribe-sample-rate` | `number` | yes |
| `xAmznTranscribeMediaEncoding` | `header` | `x-amzn-transcribe-media-encoding` | `XAmznTranscribeMediaEncoding1` | yes |
| `xAmznTranscribeSpecialty` | `header` | `x-amzn-transcribe-specialty` | `XAmznTranscribeSpecialty` | yes |
| `xAmznTranscribeType` | `header` | `x-amzn-transcribe-type` | `XAmznTranscribeType` | yes |
| `xAmznTranscribeVocabularyName` | `header` | `x-amzn-transcribe-vocabulary-name` | `string` | no |
| `xAmznTranscribeShowSpeakerLabel` | `header` | `x-amzn-transcribe-show-speaker-label` | `boolean` | no |
| `xAmznTranscribeSessionId` | `header` | `x-amzn-transcribe-session-id` | `string` | no |
| `xAmznTranscribeEnableChannelIdentification` | `header` | `x-amzn-transcribe-enable-channel-identification` | `boolean` | no |
| `xAmznTranscribeNumberOfChannels` | `header` | `x-amzn-transcribe-number-of-channels` | `number` | no |
| `xAmznTranscribeContentIdentificationType` | `header` | `x-amzn-transcribe-content-identification-type` | `XAmznTranscribeContentIdentificationType1` | no |
| `body` | `body` | — | `AudioStream` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmznTranscribeLanguageCode2` | `xAmznTranscribeLanguageCode2Schema` | `src/models/xamzn-transcribe-language-code2.ts` |
| `XAmznTranscribeMediaEncoding1` | `xAmznTranscribeMediaEncoding1Schema` | `src/models/xamzn-transcribe-media-encoding1.ts` |
| `XAmznTranscribeSpecialty` | `xAmznTranscribeSpecialtySchema` | `src/models/xamzn-transcribe-specialty.ts` |
| `XAmznTranscribeType` | `xAmznTranscribeTypeSchema` | `src/models/xamzn-transcribe-type.ts` |
| `XAmznTranscribeContentIdentificationType1` | `xAmznTranscribeContentIdentificationType1Schema` | `src/models/xamzn-transcribe-content-identification-type1.ts` |
| `AudioStream` | `audioStreamSchema` | `src/models/audio-stream.ts` |
| `StartMedicalStreamTranscriptionResponse` | `startMedicalStreamTranscriptionResponseSchema` | `src/models/start-medical-stream-transcription-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `ServiceUnavailableException` | `serviceUnavailableExceptionSchema` | `src/models/service-unavailable-exception.ts` |

### startStreamTranscription

- **Server**: `defaultAmazonTranscribeServiceOperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `startStreamTranscription(request: Operations.StartStreamTranscriptionRequest, options?: RequestOptions): ApiPromise<StartStreamTranscriptionResponse, Operations.StartStreamTranscriptionError>`
- **Wire**: `POST /stream-transcription`
- **Auth**: `sigv4`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StartStreamTranscriptionResponse`
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Operations.StartStreamTranscriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"badRequestException"` [400] `BadRequestException` · `"conflictException"` [409] `ConflictException` · `"internalFailureException"` [500] `InternalFailureException` · `"limitExceededException"` [429] `LimitExceededException` · `"serviceUnavailableException"` [503] `ServiceUnavailableException` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.StartStreamTranscriptionRequest` (25):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmznTranscribeSampleRate` | `header` | `x-amzn-transcribe-sample-rate` | `number` | yes |
| `xAmznTranscribeMediaEncoding` | `header` | `x-amzn-transcribe-media-encoding` | `XAmznTranscribeMediaEncoding1` | yes |
| `xAmznTranscribeLanguageCode` | `header` | `x-amzn-transcribe-language-code` | `XAmznTranscribeLanguageCode2` | no |
| `xAmznTranscribeVocabularyName` | `header` | `x-amzn-transcribe-vocabulary-name` | `string` | no |
| `xAmznTranscribeSessionId` | `header` | `x-amzn-transcribe-session-id` | `string` | no |
| `xAmznTranscribeVocabularyFilterName` | `header` | `x-amzn-transcribe-vocabulary-filter-name` | `string` | no |
| `xAmznTranscribeVocabularyFilterMethod` | `header` | `x-amzn-transcribe-vocabulary-filter-method` | `XAmznTranscribeVocabularyFilterMethod` | no |
| `xAmznTranscribeShowSpeakerLabel` | `header` | `x-amzn-transcribe-show-speaker-label` | `boolean` | no |
| `xAmznTranscribeEnableChannelIdentification` | `header` | `x-amzn-transcribe-enable-channel-identification` | `boolean` | no |
| `xAmznTranscribeNumberOfChannels` | `header` | `x-amzn-transcribe-number-of-channels` | `number` | no |
| `xAmznTranscribeEnablePartialResultsStabilization` | `header` | `x-amzn-transcribe-enable-partial-results-stabilization` | `boolean` | no |
| `xAmznTranscribePartialResultsStability` | `header` | `x-amzn-transcribe-partial-results-stability` | `XAmznTranscribePartialResultsStability` | no |
| `xAmznTranscribeContentIdentificationType` | `header` | `x-amzn-transcribe-content-identification-type` | `XAmznTranscribeContentIdentificationType` | no |
| `xAmznTranscribeContentRedactionType` | `header` | `x-amzn-transcribe-content-redaction-type` | `XAmznTranscribeContentRedactionType` | no |
| `xAmznTranscribePiiEntityTypes` | `header` | `x-amzn-transcribe-pii-entity-types` | `string` | no |
| `xAmznTranscribeLanguageModelName` | `header` | `x-amzn-transcribe-language-model-name` | `string` | no |
| `xAmznTranscribeIdentifyLanguage` | `header` | `x-amzn-transcribe-identify-language` | `boolean` | no |
| `xAmznTranscribeLanguageOptions` | `header` | `x-amzn-transcribe-language-options` | `string` | no |
| `xAmznTranscribePreferredLanguage` | `header` | `x-amzn-transcribe-preferred-language` | `XAmznTranscribePreferredLanguage1` | no |
| `xAmznTranscribeIdentifyMultipleLanguages` | `header` | `x-amzn-transcribe-identify-multiple-languages` | `boolean` | no |
| `xAmznTranscribeVocabularyNames` | `header` | `x-amzn-transcribe-vocabulary-names` | `string` | no |
| `xAmznTranscribeVocabularyFilterNames` | `header` | `x-amzn-transcribe-vocabulary-filter-names` | `string` | no |
| `xAmznTranscribeSessionResumeWindow` | `header` | `x-amzn-transcribe-session-resume-window` | `number` | no |
| `xAmznTranscribeTranscriptFormat` | `header` | `x-amzn-transcribe-transcript-format` | `XAmznTranscribeTranscriptFormat` | no |
| `body` | `body` | — | `AudioStream` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmznTranscribeMediaEncoding1` | `xAmznTranscribeMediaEncoding1Schema` | `src/models/xamzn-transcribe-media-encoding1.ts` |
| `XAmznTranscribeLanguageCode2` | `xAmznTranscribeLanguageCode2Schema` | `src/models/xamzn-transcribe-language-code2.ts` |
| `XAmznTranscribeVocabularyFilterMethod` | `xAmznTranscribeVocabularyFilterMethodSchema` | `src/models/xamzn-transcribe-vocabulary-filter-method.ts` |
| `XAmznTranscribePartialResultsStability` | `xAmznTranscribePartialResultsStabilitySchema` | `src/models/xamzn-transcribe-partial-results-stability.ts` |
| `XAmznTranscribeContentIdentificationType` | `xAmznTranscribeContentIdentificationTypeSchema` | `src/models/xamzn-transcribe-content-identification-type.ts` |
| `XAmznTranscribeContentRedactionType` | `xAmznTranscribeContentRedactionTypeSchema` | `src/models/xamzn-transcribe-content-redaction-type.ts` |
| `XAmznTranscribePreferredLanguage1` | `xAmznTranscribePreferredLanguage1Schema` | `src/models/xamzn-transcribe-preferred-language1.ts` |
| `XAmznTranscribeTranscriptFormat` | `xAmznTranscribeTranscriptFormatSchema` | `src/models/xamzn-transcribe-transcript-format.ts` |
| `AudioStream` | `audioStreamSchema` | `src/models/audio-stream.ts` |
| `StartStreamTranscriptionResponse` | `startStreamTranscriptionResponseSchema` | `src/models/start-stream-transcription-response.ts` |
| `BadRequestException` | `badRequestExceptionSchema` | `src/models/bad-request-exception.ts` |
| `ConflictException` | `conflictExceptionSchema` | `src/models/conflict-exception.ts` |
| `InternalFailureException` | `internalFailureExceptionSchema` | `src/models/internal-failure-exception.ts` |
| `LimitExceededException` | `limitExceededExceptionSchema` | `src/models/limit-exceeded-exception.ts` |
| `ServiceUnavailableException` | `serviceUnavailableExceptionSchema` | `src/models/service-unavailable-exception.ts` |

### tagResource

- **Server**: `defaultAmazonTranscribeServiceOperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `tagResource(request: Operations.TagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.TagResourceError>`
- **Wire**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Operations.TagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.TagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget1AmazonTranscribeServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget1AmazonTranscribeServiceOperationsApi` | `xAmzTarget1AmazonTranscribeServiceOperationsApiSchema` | `src/models/xamz-target1-amazon-transcribe-service-operations-api.ts` |

### untagResource

- **Server**: `defaultAmazonTranscribeServiceOperationsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `untagResource(request: Operations.UntagResourceRequestParams, options?: RequestOptions): ApiPromise<undefined, Operations.UntagResourceError>`
- **Wire**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AmazonTranscribeError` with `kind: "api"`, an instance of `Operations.UntagResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error500"` [500] no body · `"error429"` [429] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Operations.UntagResourceRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xAmzTarget` | `header` | `X-Amz-Target` | `XAmzTarget2AmazonTranscribeServiceOperationsApi` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XAmzTarget2AmazonTranscribeServiceOperationsApi` | `xAmzTarget2AmazonTranscribeServiceOperationsApiSchema` | `src/models/xamz-target2-amazon-transcribe-service-operations-api.ts` |

