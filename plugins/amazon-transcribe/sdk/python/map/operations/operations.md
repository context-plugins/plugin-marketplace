<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `amazon_transcribe/apis/operations.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.get_medical_scribe_stream

- **Route**: `GET /medical-scribe-stream/{SessionId}`
- **Auth**: `sigv4`
- **Server**: `default_amazon_transcribe_service_operations_api`
- **Signature**: `def get_medical_scribe_stream(session_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `session_id`
- **Params**: `session_id` — path `SessionId`
- **Returns (parsed)**: `GetMedicalScribeStreamResponse`
- **Returns (raw)**: `ApiResult[GetMedicalScribeStreamResponse, GetMedicalScribeStreamErrorBody]`
- **Error**: `GetMedicalScribeStreamErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ResourceNotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetMedicalScribeStreamResponse` | `amazon_transcribe/models/get_medical_scribe_stream_response.py` |
| `GetMedicalScribeStreamErrorBody` | `amazon_transcribe/errors/get_medical_scribe_stream_error.py` |
| `BadRequestException` | `amazon_transcribe/models/bad_request_exception.py` |
| `ResourceNotFoundException` | `amazon_transcribe/models/resource_not_found_exception.py` |
| `LimitExceededException` | `amazon_transcribe/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_transcribe/models/internal_failure_exception.py` |

### client.operations.list_tags_for_resource

- **Route**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Server**: `default_amazon_transcribe_service_operations_api`
- **Signature**: `def list_tags_for_resource(x_amz_target: XAmzTargetAmazonTranscribeServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceOperationsApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_operations_api.py` |
| `ListTagsForResourceErrorBody` | `amazon_transcribe/errors/list_tags_for_resource_error.py` |

### client.operations.start_call_analytics_stream_transcription

- **Route**: `POST /call-analytics-stream-transcription`
- **Auth**: `sigv4`
- **Server**: `default_amazon_transcribe_service_operations_api`
- **Signature**: `def start_call_analytics_stream_transcription(x_amzn_transcribe_sample_rate: int, x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr, *, x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode1OrStr | None = None, x_amzn_transcribe_vocabulary_name: str | None = None, x_amzn_transcribe_session_id: str | None = None, x_amzn_transcribe_vocabulary_filter_name: str | None = None, x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None, x_amzn_transcribe_language_model_name: str | None = None, x_amzn_transcribe_identify_language: bool | None = None, x_amzn_transcribe_language_options: str | None = None, x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguageOrStr | None = None, x_amzn_transcribe_vocabulary_names: str | None = None, x_amzn_transcribe_vocabulary_filter_names: str | None = None, x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None, x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None, x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None, x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None, x_amzn_transcribe_pii_entity_types: str | None = None, body: AudioStream | AudioStreamDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amzn_transcribe_sample_rate`, `x_amzn_transcribe_media_encoding`
- **Params**: `x_amzn_transcribe_sample_rate` — header `x-amzn-transcribe-sample-rate` · `x_amzn_transcribe_media_encoding` — header `x-amzn-transcribe-media-encoding` · `x_amzn_transcribe_language_code` — header `x-amzn-transcribe-language-code` · `x_amzn_transcribe_vocabulary_name` — header `x-amzn-transcribe-vocabulary-name` · `x_amzn_transcribe_session_id` — header `x-amzn-transcribe-session-id` · `x_amzn_transcribe_vocabulary_filter_name` — header `x-amzn-transcribe-vocabulary-filter-name` · `x_amzn_transcribe_vocabulary_filter_method` — header `x-amzn-transcribe-vocabulary-filter-method` · `x_amzn_transcribe_language_model_name` — header `x-amzn-transcribe-language-model-name` · `x_amzn_transcribe_identify_language` — header `x-amzn-transcribe-identify-language` · `x_amzn_transcribe_language_options` — header `x-amzn-transcribe-language-options` · `x_amzn_transcribe_preferred_language` — header `x-amzn-transcribe-preferred-language` · `x_amzn_transcribe_vocabulary_names` — header `x-amzn-transcribe-vocabulary-names` · `x_amzn_transcribe_vocabulary_filter_names` — header `x-amzn-transcribe-vocabulary-filter-names` · `x_amzn_transcribe_enable_partial_results_stabilization` — header `x-amzn-transcribe-enable-partial-results-stabilization` · `x_amzn_transcribe_partial_results_stability` — header `x-amzn-transcribe-partial-results-stability` · `x_amzn_transcribe_content_identification_type` — header `x-amzn-transcribe-content-identification-type` · `x_amzn_transcribe_content_redaction_type` — header `x-amzn-transcribe-content-redaction-type` · `x_amzn_transcribe_pii_entity_types` — header `x-amzn-transcribe-pii-entity-types` · `body` — JSON body
- **Returns (parsed)**: `StartCallAnalyticsStreamTranscriptionResponse`
- **Returns (raw)**: `ApiResult[StartCallAnalyticsStreamTranscriptionResponse, StartCallAnalyticsStreamTranscriptionErrorBody]`
- **Error**: `StartCallAnalyticsStreamTranscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `ServiceUnavailableException` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XAmznTranscribeMediaEncoding1OrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_media_encoding1.py` |
| `XAmznTranscribeLanguageCode1OrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_language_code1.py` |
| `XAmznTranscribeVocabularyFilterMethodOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_vocabulary_filter_method.py` |
| `XAmznTranscribePreferredLanguageOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_preferred_language.py` |
| `XAmznTranscribePartialResultsStabilityOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_partial_results_stability.py` |
| `XAmznTranscribeContentIdentificationTypeOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_content_identification_type.py` |
| `XAmznTranscribeContentRedactionTypeOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_content_redaction_type.py` |
| `AudioStream` | `amazon_transcribe/models/audio_stream.py` |
| `AudioStreamDict` | `amazon_transcribe/models/audio_stream.py` |
| `StartCallAnalyticsStreamTranscriptionResponse` | `amazon_transcribe/models/start_call_analytics_stream_transcription_response.py` |
| `StartCallAnalyticsStreamTranscriptionErrorBody` | `amazon_transcribe/errors/start_call_analytics_stream_transcription_error.py` |
| `BadRequestException` | `amazon_transcribe/models/bad_request_exception.py` |
| `ConflictException` | `amazon_transcribe/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_transcribe/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_transcribe/models/internal_failure_exception.py` |
| `ServiceUnavailableException` | `amazon_transcribe/models/service_unavailable_exception.py` |

### client.operations.start_medical_scribe_stream

- **Route**: `POST /medical-scribe-stream`
- **Auth**: `sigv4`
- **Server**: `default_amazon_transcribe_service_operations_api`
- **Signature**: `def start_medical_scribe_stream(x_amzn_transcribe_language_code: XAmznTranscribeLanguageCodeOrStr, x_amzn_transcribe_sample_rate: int, x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncodingOrStr, *, x_amzn_transcribe_session_id: str | None = None, body: MedicalScribeInputStream | MedicalScribeInputStreamDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amzn_transcribe_language_code`, `x_amzn_transcribe_sample_rate`, `x_amzn_transcribe_media_encoding`
- **Params**: `x_amzn_transcribe_language_code` — header `x-amzn-transcribe-language-code` · `x_amzn_transcribe_sample_rate` — header `x-amzn-transcribe-sample-rate` · `x_amzn_transcribe_media_encoding` — header `x-amzn-transcribe-media-encoding` · `x_amzn_transcribe_session_id` — header `x-amzn-transcribe-session-id` · `body` — JSON body
- **Returns (parsed)**: `StartMedicalScribeStreamResponse`
- **Returns (raw)**: `ApiResult[StartMedicalScribeStreamResponse, StartMedicalScribeStreamErrorBody]`
- **Error**: `StartMedicalScribeStreamErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `ServiceUnavailableException` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XAmznTranscribeLanguageCodeOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_language_code.py` |
| `XAmznTranscribeMediaEncodingOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_media_encoding.py` |
| `MedicalScribeInputStream` | `amazon_transcribe/models/medical_scribe_input_stream.py` |
| `MedicalScribeInputStreamDict` | `amazon_transcribe/models/medical_scribe_input_stream.py` |
| `StartMedicalScribeStreamResponse` | `amazon_transcribe/models/start_medical_scribe_stream_response.py` |
| `StartMedicalScribeStreamErrorBody` | `amazon_transcribe/errors/start_medical_scribe_stream_error.py` |
| `BadRequestException` | `amazon_transcribe/models/bad_request_exception.py` |
| `ConflictException` | `amazon_transcribe/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_transcribe/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_transcribe/models/internal_failure_exception.py` |
| `ServiceUnavailableException` | `amazon_transcribe/models/service_unavailable_exception.py` |

### client.operations.start_medical_stream_transcription

- **Route**: `POST /medical-stream-transcription`
- **Auth**: `sigv4`
- **Server**: `default_amazon_transcribe_service_operations_api`
- **Signature**: `def start_medical_stream_transcription(x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr, x_amzn_transcribe_sample_rate: int, x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr, x_amzn_transcribe_specialty: XAmznTranscribeSpecialtyOrStr, x_amzn_transcribe_type: XAmznTranscribeTypeOrStr, *, x_amzn_transcribe_vocabulary_name: str | None = None, x_amzn_transcribe_show_speaker_label: bool | None = None, x_amzn_transcribe_session_id: str | None = None, x_amzn_transcribe_enable_channel_identification: bool | None = None, x_amzn_transcribe_number_of_channels: int | None = None, x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationType1OrStr | None = None, body: AudioStream | AudioStreamDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amzn_transcribe_language_code`, `x_amzn_transcribe_sample_rate`, `x_amzn_transcribe_media_encoding`, `x_amzn_transcribe_specialty`, `x_amzn_transcribe_type`
- **Params**: `x_amzn_transcribe_language_code` — header `x-amzn-transcribe-language-code` · `x_amzn_transcribe_sample_rate` — header `x-amzn-transcribe-sample-rate` · `x_amzn_transcribe_media_encoding` — header `x-amzn-transcribe-media-encoding` · `x_amzn_transcribe_specialty` — header `x-amzn-transcribe-specialty` · `x_amzn_transcribe_type` — header `x-amzn-transcribe-type` · `x_amzn_transcribe_vocabulary_name` — header `x-amzn-transcribe-vocabulary-name` · `x_amzn_transcribe_show_speaker_label` — header `x-amzn-transcribe-show-speaker-label` · `x_amzn_transcribe_session_id` — header `x-amzn-transcribe-session-id` · `x_amzn_transcribe_enable_channel_identification` — header `x-amzn-transcribe-enable-channel-identification` · `x_amzn_transcribe_number_of_channels` — header `x-amzn-transcribe-number-of-channels` · `x_amzn_transcribe_content_identification_type` — header `x-amzn-transcribe-content-identification-type` · `body` — JSON body
- **Returns (parsed)**: `StartMedicalStreamTranscriptionResponse`
- **Returns (raw)**: `ApiResult[StartMedicalStreamTranscriptionResponse, StartMedicalStreamTranscriptionErrorBody]`
- **Error**: `StartMedicalStreamTranscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `ServiceUnavailableException` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XAmznTranscribeLanguageCode2OrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_language_code2.py` |
| `XAmznTranscribeMediaEncoding1OrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_media_encoding1.py` |
| `XAmznTranscribeSpecialtyOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_specialty.py` |
| `XAmznTranscribeTypeOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_type.py` |
| `XAmznTranscribeContentIdentificationType1OrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_content_identification_type1.py` |
| `AudioStream` | `amazon_transcribe/models/audio_stream.py` |
| `AudioStreamDict` | `amazon_transcribe/models/audio_stream.py` |
| `StartMedicalStreamTranscriptionResponse` | `amazon_transcribe/models/start_medical_stream_transcription_response.py` |
| `StartMedicalStreamTranscriptionErrorBody` | `amazon_transcribe/errors/start_medical_stream_transcription_error.py` |
| `BadRequestException` | `amazon_transcribe/models/bad_request_exception.py` |
| `ConflictException` | `amazon_transcribe/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_transcribe/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_transcribe/models/internal_failure_exception.py` |
| `ServiceUnavailableException` | `amazon_transcribe/models/service_unavailable_exception.py` |

### client.operations.start_stream_transcription

- **Route**: `POST /stream-transcription`
- **Auth**: `sigv4`
- **Server**: `default_amazon_transcribe_service_operations_api`
- **Signature**: `def start_stream_transcription(x_amzn_transcribe_sample_rate: int, x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr, *, x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr | None = None, x_amzn_transcribe_vocabulary_name: str | None = None, x_amzn_transcribe_session_id: str | None = None, x_amzn_transcribe_vocabulary_filter_name: str | None = None, x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None, x_amzn_transcribe_show_speaker_label: bool | None = None, x_amzn_transcribe_enable_channel_identification: bool | None = None, x_amzn_transcribe_number_of_channels: int | None = None, x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None, x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None, x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None, x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None, x_amzn_transcribe_pii_entity_types: str | None = None, x_amzn_transcribe_language_model_name: str | None = None, x_amzn_transcribe_identify_language: bool | None = None, x_amzn_transcribe_language_options: str | None = None, x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguage1OrStr | None = None, x_amzn_transcribe_identify_multiple_languages: bool | None = None, x_amzn_transcribe_vocabulary_names: str | None = None, x_amzn_transcribe_vocabulary_filter_names: str | None = None, x_amzn_transcribe_session_resume_window: int | None = None, x_amzn_transcribe_transcript_format: XAmznTranscribeTranscriptFormatOrStr | None = None, body: AudioStream | AudioStreamDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amzn_transcribe_sample_rate`, `x_amzn_transcribe_media_encoding`
- **Params**: `x_amzn_transcribe_sample_rate` — header `x-amzn-transcribe-sample-rate` · `x_amzn_transcribe_media_encoding` — header `x-amzn-transcribe-media-encoding` · `x_amzn_transcribe_language_code` — header `x-amzn-transcribe-language-code` · `x_amzn_transcribe_vocabulary_name` — header `x-amzn-transcribe-vocabulary-name` · `x_amzn_transcribe_session_id` — header `x-amzn-transcribe-session-id` · `x_amzn_transcribe_vocabulary_filter_name` — header `x-amzn-transcribe-vocabulary-filter-name` · `x_amzn_transcribe_vocabulary_filter_method` — header `x-amzn-transcribe-vocabulary-filter-method` · `x_amzn_transcribe_show_speaker_label` — header `x-amzn-transcribe-show-speaker-label` · `x_amzn_transcribe_enable_channel_identification` — header `x-amzn-transcribe-enable-channel-identification` · `x_amzn_transcribe_number_of_channels` — header `x-amzn-transcribe-number-of-channels` · `x_amzn_transcribe_enable_partial_results_stabilization` — header `x-amzn-transcribe-enable-partial-results-stabilization` · `x_amzn_transcribe_partial_results_stability` — header `x-amzn-transcribe-partial-results-stability` · `x_amzn_transcribe_content_identification_type` — header `x-amzn-transcribe-content-identification-type` · `x_amzn_transcribe_content_redaction_type` — header `x-amzn-transcribe-content-redaction-type` · `x_amzn_transcribe_pii_entity_types` — header `x-amzn-transcribe-pii-entity-types` · `x_amzn_transcribe_language_model_name` — header `x-amzn-transcribe-language-model-name` · `x_amzn_transcribe_identify_language` — header `x-amzn-transcribe-identify-language` · `x_amzn_transcribe_language_options` — header `x-amzn-transcribe-language-options` · `x_amzn_transcribe_preferred_language` — header `x-amzn-transcribe-preferred-language` · `x_amzn_transcribe_identify_multiple_languages` — header `x-amzn-transcribe-identify-multiple-languages` · `x_amzn_transcribe_vocabulary_names` — header `x-amzn-transcribe-vocabulary-names` · `x_amzn_transcribe_vocabulary_filter_names` — header `x-amzn-transcribe-vocabulary-filter-names` · `x_amzn_transcribe_session_resume_window` — header `x-amzn-transcribe-session-resume-window` · `x_amzn_transcribe_transcript_format` — header `x-amzn-transcribe-transcript-format` · `body` — JSON body
- **Returns (parsed)**: `StartStreamTranscriptionResponse`
- **Returns (raw)**: `ApiResult[StartStreamTranscriptionResponse, StartStreamTranscriptionErrorBody]`
- **Error**: `StartStreamTranscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `ConflictException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `ServiceUnavailableException` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `XAmznTranscribeMediaEncoding1OrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_media_encoding1.py` |
| `XAmznTranscribeLanguageCode2OrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_language_code2.py` |
| `XAmznTranscribeVocabularyFilterMethodOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_vocabulary_filter_method.py` |
| `XAmznTranscribePartialResultsStabilityOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_partial_results_stability.py` |
| `XAmznTranscribeContentIdentificationTypeOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_content_identification_type.py` |
| `XAmznTranscribeContentRedactionTypeOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_content_redaction_type.py` |
| `XAmznTranscribePreferredLanguage1OrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_preferred_language1.py` |
| `XAmznTranscribeTranscriptFormatOrStr` | `amazon_transcribe/models/enums/x_amzn_transcribe_transcript_format.py` |
| `AudioStream` | `amazon_transcribe/models/audio_stream.py` |
| `AudioStreamDict` | `amazon_transcribe/models/audio_stream.py` |
| `StartStreamTranscriptionResponse` | `amazon_transcribe/models/start_stream_transcription_response.py` |
| `StartStreamTranscriptionErrorBody` | `amazon_transcribe/errors/start_stream_transcription_error.py` |
| `BadRequestException` | `amazon_transcribe/models/bad_request_exception.py` |
| `ConflictException` | `amazon_transcribe/models/conflict_exception.py` |
| `LimitExceededException` | `amazon_transcribe/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_transcribe/models/internal_failure_exception.py` |
| `ServiceUnavailableException` | `amazon_transcribe/models/service_unavailable_exception.py` |

### client.operations.tag_resource

- **Route**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Server**: `default_amazon_transcribe_service_operations_api`
- **Signature**: `def tag_resource(x_amz_target: XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_operations_api.py` |
| `TagResourceErrorBody` | `amazon_transcribe/errors/tag_resource_error.py` |

### client.operations.untag_resource

- **Route**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Server**: `default_amazon_transcribe_service_operations_api`
- **Signature**: `def untag_resource(x_amz_target: XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_operations_api.py` |
| `UntagResourceErrorBody` | `amazon_transcribe/errors/untag_resource_error.py` |

