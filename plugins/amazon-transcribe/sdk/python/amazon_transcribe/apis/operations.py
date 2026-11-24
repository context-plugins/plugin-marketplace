from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_medical_scribe_stream_error import (
    GetMedicalScribeStreamErrorBody,
    get_medical_scribe_stream_error_mapper,
)
from ..errors.list_tags_for_resource_error import ListTagsForResourceErrorBody, list_tags_for_resource_error_mapper
from ..errors.start_call_analytics_stream_transcription_error import (
    StartCallAnalyticsStreamTranscriptionErrorBody,
    start_call_analytics_stream_transcription_error_mapper,
)
from ..errors.start_medical_scribe_stream_error import (
    StartMedicalScribeStreamErrorBody,
    start_medical_scribe_stream_error_mapper,
)
from ..errors.start_medical_stream_transcription_error import (
    StartMedicalStreamTranscriptionErrorBody,
    start_medical_stream_transcription_error_mapper,
)
from ..errors.start_stream_transcription_error import (
    StartStreamTranscriptionErrorBody,
    start_stream_transcription_error_mapper,
)
from ..errors.tag_resource_error import TagResourceErrorBody, tag_resource_error_mapper
from ..errors.untag_resource_error import UntagResourceErrorBody, untag_resource_error_mapper
from ..models.audio_stream import AudioStream, AudioStreamDict
from ..models.enums.x_amz_target1_amazon_transcribe_service_operations_api import (
    XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_transcribe_service_operations_api import (
    XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr,
)
from ..models.enums.x_amz_target_amazon_transcribe_service_operations_api import (
    XAmzTargetAmazonTranscribeServiceOperationsApiOrStr,
)
from ..models.enums.x_amzn_transcribe_content_identification_type import XAmznTranscribeContentIdentificationTypeOrStr
from ..models.enums.x_amzn_transcribe_content_identification_type1 import XAmznTranscribeContentIdentificationType1OrStr
from ..models.enums.x_amzn_transcribe_content_redaction_type import XAmznTranscribeContentRedactionTypeOrStr
from ..models.enums.x_amzn_transcribe_language_code import XAmznTranscribeLanguageCodeOrStr
from ..models.enums.x_amzn_transcribe_language_code1 import XAmznTranscribeLanguageCode1OrStr
from ..models.enums.x_amzn_transcribe_language_code2 import XAmznTranscribeLanguageCode2OrStr
from ..models.enums.x_amzn_transcribe_media_encoding import XAmznTranscribeMediaEncodingOrStr
from ..models.enums.x_amzn_transcribe_media_encoding1 import XAmznTranscribeMediaEncoding1OrStr
from ..models.enums.x_amzn_transcribe_partial_results_stability import XAmznTranscribePartialResultsStabilityOrStr
from ..models.enums.x_amzn_transcribe_preferred_language import XAmznTranscribePreferredLanguageOrStr
from ..models.enums.x_amzn_transcribe_preferred_language1 import XAmznTranscribePreferredLanguage1OrStr
from ..models.enums.x_amzn_transcribe_specialty import XAmznTranscribeSpecialtyOrStr
from ..models.enums.x_amzn_transcribe_transcript_format import XAmznTranscribeTranscriptFormatOrStr
from ..models.enums.x_amzn_transcribe_type import XAmznTranscribeTypeOrStr
from ..models.enums.x_amzn_transcribe_vocabulary_filter_method import XAmznTranscribeVocabularyFilterMethodOrStr
from ..models.get_medical_scribe_stream_response import GetMedicalScribeStreamResponse
from ..models.medical_scribe_input_stream import MedicalScribeInputStream, MedicalScribeInputStreamDict
from ..models.start_call_analytics_stream_transcription_response import StartCallAnalyticsStreamTranscriptionResponse
from ..models.start_medical_scribe_stream_response import StartMedicalScribeStreamResponse
from ..models.start_medical_stream_transcription_response import StartMedicalStreamTranscriptionResponse
from ..models.start_stream_transcription_response import StartStreamTranscriptionResponse
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def get_medical_scribe_stream(
        self, session_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetMedicalScribeStreamResponse:
        """Provides details about the specified Amazon Web Services HealthScribe streaming session. To view the status
        of the streaming session, check the StreamStatus field in the response. To get the details of post-stream
        analytics, including its status, check the PostStreamAnalyticsResult field in the response.

        Args:
            session_id: The identifier of the HealthScribe streaming session you want information about.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ResourceNotFoundException
                ``error`` is ``BadRequestException | ResourceNotFoundException | LimitExceededException |
                InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_medical_scribe_stream(session_id, request_options=request_options))

    def list_tags_for_resource(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more
        about using tags with Amazon Transcribe, refer to Tagging resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options))

    def start_call_analytics_stream_transcription(
        self,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        *,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode1OrStr | None = None,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_vocabulary_filter_name: str | None = None,
        x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None,
        x_amzn_transcribe_language_model_name: str | None = None,
        x_amzn_transcribe_identify_language: bool | None = None,
        x_amzn_transcribe_language_options: str | None = None,
        x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguageOrStr | None = None,
        x_amzn_transcribe_vocabulary_names: str | None = None,
        x_amzn_transcribe_vocabulary_filter_names: str | None = None,
        x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None,
        x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None,
        x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None,
        x_amzn_transcribe_pii_entity_types: str | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartCallAnalyticsStreamTranscriptionResponse:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the
        transcription results are streamed to your application. Use this operation for Call Analytics transcriptions.
        The following parameters are required: language-code or identify-language media-encoding sample-rate For more
        information on streaming with Amazon Transcribe, see Transcribing streaming audio.

        Args:
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Low-quality audio, such as
                telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
                48,000 Hz. Note that the sample rate you specify must match that of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding of your input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. For a list of languages supported with real-time Call Analytics, refer to the Supported languages
                table.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If the language of the
                specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary
                is not applied to your transcription. For more information, see Custom vocabularies.
            x_amzn_transcribe_session_id: Specify a name for your Call Analytics transcription session. If you don't
                include this parameter in your request, Amazon Transcribe generates an ID and returns it in the
                response.
            x_amzn_transcribe_vocabulary_filter_name: Specify the name of the custom vocabulary filter that you want to
                use when processing your transcription. Note that vocabulary filter names are case sensitive. If the
                language of the specified custom vocabulary filter doesn't match the language identified in your media,
                the vocabulary filter is not applied to your transcription. For more information, see Using vocabulary
                filtering with unwanted words.
            x_amzn_transcribe_vocabulary_filter_method: Specify how you want your vocabulary filter applied to your
                transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words
                without changing them, choose tag.
            x_amzn_transcribe_language_model_name: Specify the name of the custom language model that you want to use
                when processing your transcription. Note that language model names are case sensitive. The language of
                the specified language model must match the language code you specify in your transcription request. If
                the languages don't match, the custom language model isn't applied. There are no errors or warnings
                associated with a language mismatch. For more information, see Custom language models.
            x_amzn_transcribe_identify_language: Enables automatic language identification for your Call Analytics
                transcription. If you include IdentifyLanguage, you must include a list of language codes, using
                LanguageOptions, that you think may be present in your audio stream. You must provide a minimum of two
                language selections. You can also include a preferred language using PreferredLanguage. Adding a
                preferred language can help Amazon Transcribe identify the language faster than if you omit this
                parameter. Note that you must include either LanguageCode or IdentifyLanguage in your request. If you
                include both parameters, your transcri
            x_amzn_transcribe_language_options: Specify two or more language codes that represent the languages you
                think may be present in your media. Including language options can improve the accuracy of language
                identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage.
                For a list of languages supported with Call Analytics streaming, refer to the Supported languages table.
                You can only include one language dialect per language per stream. For example, you cannot include en-US
                and en-AU in the same request.
            x_amzn_transcribe_preferred_language: Specify a preferred language from the subset of languages codes you
                specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
                LanguageOptions in your request.
            x_amzn_transcribe_vocabulary_names: Specify the names of the custom vocabularies that you want to use when
                processing your Call Analytics transcription. Note that vocabulary names are case sensitive. If the
                custom vocabulary's language doesn't match the identified media language, it won't be applied to the
                transcription. This parameter is only intended for use with the IdentifyLanguage parameter. If you're
                not including IdentifyLanguage in your request and want to use a custom vocabulary with your
                transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies.
            x_amzn_transcribe_vocabulary_filter_names: Specify the names of the custom vocabulary filters that you want
                to use when processing your Call Analytics transcription. Note that vocabulary filter names are case
                sensitive. These filters serve to customize the transcript output. This parameter is only intended for
                use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and
                want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter
                instead. For more information, see Using vocabulary filtering with unwanted words.
            x_amzn_transcribe_enable_partial_results_stabilization: Enables partial result stabilization for your
                transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
                For more information, see Partial-result stabilization.
            x_amzn_transcribe_partial_results_stability: Specify the level of stability to use when you enable partial
                results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy.
                High stability transcribes faster, but with slightly lower accuracy. For more information, see
                Partial-result stabilization.
            x_amzn_transcribe_content_identification_type: Labels all personally identifiable information (PII)
                identified in your transcript. Content identification is performed at the segment level; PII specified
                in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include
                PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and
                ContentRedactionType in the same request. If you set both, your request returns a BadRequestException.
                For more information, see Redacting or identifying personally identifiable information.
            x_amzn_transcribe_content_redaction_type: Redacts all personally identifiable information (PII) identified
                in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes
                is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
                request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the
                same request. If you set both, your request returns a BadRequestException. For more information, see
                Redacting or identifying personally identifiable information.
            x_amzn_transcribe_pii_entity_types: Specify which types of personally identifiable information (PII) you
                want to redact in your transcript. You can include as many types as you'd like, or you can select ALL.
                Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
                CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, or ALL. Note
                that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or
                ContentRedactionType. If you include ContentRedactionType or ContentIdentificationType in your request,
                but do not include PiiEnti
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                ServiceUnavailableException ``error`` is ``BadRequestException | ConflictException |
                LimitExceededException | InternalFailureException | ServiceUnavailableException | RawError``."""
        return unwrap(
            self._with_raw_response.start_call_analytics_stream_transcription(
                x_amzn_transcribe_sample_rate,
                x_amzn_transcribe_media_encoding,
                x_amzn_transcribe_language_code=x_amzn_transcribe_language_code,
                x_amzn_transcribe_vocabulary_name=x_amzn_transcribe_vocabulary_name,
                x_amzn_transcribe_session_id=x_amzn_transcribe_session_id,
                x_amzn_transcribe_vocabulary_filter_name=x_amzn_transcribe_vocabulary_filter_name,
                x_amzn_transcribe_vocabulary_filter_method=x_amzn_transcribe_vocabulary_filter_method,
                x_amzn_transcribe_language_model_name=x_amzn_transcribe_language_model_name,
                x_amzn_transcribe_identify_language=x_amzn_transcribe_identify_language,
                x_amzn_transcribe_language_options=x_amzn_transcribe_language_options,
                x_amzn_transcribe_preferred_language=x_amzn_transcribe_preferred_language,
                x_amzn_transcribe_vocabulary_names=x_amzn_transcribe_vocabulary_names,
                x_amzn_transcribe_vocabulary_filter_names=x_amzn_transcribe_vocabulary_filter_names,
                x_amzn_transcribe_enable_partial_results_stabilization=x_amzn_transcribe_enable_partial_results_stabilization,
                x_amzn_transcribe_partial_results_stability=x_amzn_transcribe_partial_results_stability,
                x_amzn_transcribe_content_identification_type=x_amzn_transcribe_content_identification_type,
                x_amzn_transcribe_content_redaction_type=x_amzn_transcribe_content_redaction_type,
                x_amzn_transcribe_pii_entity_types=x_amzn_transcribe_pii_entity_types,
                body=body,
                request_options=request_options,
            ),
        )

    def start_medical_scribe_stream(
        self,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCodeOrStr,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncodingOrStr,
        *,
        x_amzn_transcribe_session_id: str | None = None,
        body: MedicalScribeInputStream | MedicalScribeInputStreamDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartMedicalScribeStreamResponse:
        """Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the
        transcription results are streamed to your application. When you start a stream, you first specify the stream
        configuration in a MedicalScribeConfigurationEvent. This event includes channel definitions, encryption
        settings, medical scribe context, and post-stream analytics settings, such as the output configuration for
        aggregated transcript and clinical note generation. These are additional streaming session configurations beyond
        those provided in your initial start request headers. Whether you are starting a new session or resuming an
        existing session, your first event must be a MedicalScribeConfigurationEvent. After you send a
        MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services HealthScribe responds with
        real-time transcription results. When you are finished, to start processing the results with the post-stream
        analytics, send a MedicalScribeSessionControlEvent with a Type of END_OF_SESSION and Amazon Web Services
        HealthScribe starts the analytics. You can pause or resume streaming. To pause streaming, complete the input
        stream without sending the M

        Args:
            x_amzn_transcribe_language_code: Specify the language code for your HealthScribe streaming session.
            x_amzn_transcribe_sample_rate: Specify the sample rate of the input audio (in hertz). Amazon Web Services
                HealthScribe supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that
                of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding used for the input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_session_id: Specify an identifier for your streaming session (in UUID format). If you
                don't include a SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns
                it in the response.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                ServiceUnavailableException ``error`` is ``BadRequestException | ConflictException |
                LimitExceededException | InternalFailureException | ServiceUnavailableException | RawError``."""
        return unwrap(
            self._with_raw_response.start_medical_scribe_stream(
                x_amzn_transcribe_language_code,
                x_amzn_transcribe_sample_rate,
                x_amzn_transcribe_media_encoding,
                x_amzn_transcribe_session_id=x_amzn_transcribe_session_id,
                body=body,
                request_options=request_options,
            ),
        )

    def start_medical_stream_transcription(
        self,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        x_amzn_transcribe_specialty: XAmznTranscribeSpecialtyOrStr,
        x_amzn_transcribe_type: XAmznTranscribeTypeOrStr,
        *,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_show_speaker_label: bool | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_enable_channel_identification: bool | None = None,
        x_amzn_transcribe_number_of_channels: int | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationType1OrStr | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartMedicalStreamTranscriptionResponse:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe Medical and
        the transcription results are streamed to your application. The following parameters are required: language-code
        media-encoding sample-rate For more information on streaming with Amazon Transcribe Medical, see Transcribing
        streaming audio.

        Args:
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. Amazon Transcribe Medical only supports US English (en-US).
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Amazon Transcribe Medical
                supports a range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of
                your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding used for the input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_specialty: Specify the medical specialty contained in your audio.
            x_amzn_transcribe_type: Specify the type of input audio. For example, choose DICTATION for a provider
                dictating patient notes and CONVERSATION for a dialogue between a patient and a medical professional.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive.
            x_amzn_transcribe_show_speaker_label: Enables speaker partitioning (diarization) in your transcription
                output. Speaker partitioning labels the speech from individual speakers in your media file. For more
                information, see Partitioning speakers (diarization).
            x_amzn_transcribe_session_id: Specify a name for your transcription session. If you don't include this
                parameter in your request, Amazon Transcribe Medical generates an ID and returns it in the response.
            x_amzn_transcribe_enable_channel_identification: Enables channel identification in multi-channel audio.
                Channel identification transcribes the audio on each channel independently, then appends the output for
                each channel into one transcript. If you have multi-channel audio and do not enable channel
                identification, your audio is transcribed in a continuous manner and your transcript is not separated by
                channel. If you include EnableChannelIdentification in your request, you must also include
                NumberOfChannels. For more information, see Transcribing multi-channel audio.
            x_amzn_transcribe_number_of_channels: Specify the number of channels in your audio stream. This value must
                be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not
                include this parameter in your request. If you include NumberOfChannels in your request, you must also
                include EnableChannelIdentification.
            x_amzn_transcribe_content_identification_type: Labels all personal health information (PHI) identified in
                your transcript. Content identification is performed at the segment level; PHI is flagged upon complete
                transcription of an audio segment. For more information, see Identifying personal health information
                (PHI) in a transcription.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                ServiceUnavailableException ``error`` is ``BadRequestException | ConflictException |
                LimitExceededException | InternalFailureException | ServiceUnavailableException | RawError``."""
        return unwrap(
            self._with_raw_response.start_medical_stream_transcription(
                x_amzn_transcribe_language_code,
                x_amzn_transcribe_sample_rate,
                x_amzn_transcribe_media_encoding,
                x_amzn_transcribe_specialty,
                x_amzn_transcribe_type,
                x_amzn_transcribe_vocabulary_name=x_amzn_transcribe_vocabulary_name,
                x_amzn_transcribe_show_speaker_label=x_amzn_transcribe_show_speaker_label,
                x_amzn_transcribe_session_id=x_amzn_transcribe_session_id,
                x_amzn_transcribe_enable_channel_identification=x_amzn_transcribe_enable_channel_identification,
                x_amzn_transcribe_number_of_channels=x_amzn_transcribe_number_of_channels,
                x_amzn_transcribe_content_identification_type=x_amzn_transcribe_content_identification_type,
                body=body,
                request_options=request_options,
            ),
        )

    def start_stream_transcription(
        self,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        *,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr | None = None,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_vocabulary_filter_name: str | None = None,
        x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None,
        x_amzn_transcribe_show_speaker_label: bool | None = None,
        x_amzn_transcribe_enable_channel_identification: bool | None = None,
        x_amzn_transcribe_number_of_channels: int | None = None,
        x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None,
        x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None,
        x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None,
        x_amzn_transcribe_pii_entity_types: str | None = None,
        x_amzn_transcribe_language_model_name: str | None = None,
        x_amzn_transcribe_identify_language: bool | None = None,
        x_amzn_transcribe_language_options: str | None = None,
        x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguage1OrStr | None = None,
        x_amzn_transcribe_identify_multiple_languages: bool | None = None,
        x_amzn_transcribe_vocabulary_names: str | None = None,
        x_amzn_transcribe_vocabulary_filter_names: str | None = None,
        x_amzn_transcribe_session_resume_window: int | None = None,
        x_amzn_transcribe_transcript_format: XAmznTranscribeTranscriptFormatOrStr | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartStreamTranscriptionResponse:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the
        transcription results are streamed to your application. The following parameters are required: language-code or
        identify-language or identify-multiple-language media-encoding sample-rate For more information on streaming
        with Amazon Transcribe, see Transcribing streaming audio.

        Args:
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Low-quality audio, such as
                telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
                48,000 Hz. Note that the sample rate you specify must match that of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding of your input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. If you're unsure of the language spoken in your audio, consider using IdentifyLanguage to enable
                automatic language identification. For a list of languages supported with Amazon Transcribe streaming,
                refer to the Supported languages table.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If the language of the
                specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary
                is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage
                parameter. If you're including IdentifyLanguage in your request and want to use one or more custom
                vocabularies with your transcription, use the VocabularyNames parameter instead. For more information,
                see Custom vocabularies
            x_amzn_transcribe_session_id: Specify a name for your transcription session. If you don't include this
                parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
            x_amzn_transcribe_vocabulary_filter_name: Specify the name of the custom vocabulary filter that you want to
                use when processing your transcription. Note that vocabulary filter names are case sensitive. If the
                language of the specified custom vocabulary filter doesn't match the language identified in your media,
                the vocabulary filter is not applied to your transcription. This parameter is not intended for use with
                the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one
                or more vocabulary filters with your transcription, use the VocabularyFilterNames parameter instead. For
                more informatio
            x_amzn_transcribe_vocabulary_filter_method: Specify how you want your vocabulary filter applied to your
                transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words
                without changing them, choose tag.
            x_amzn_transcribe_show_speaker_label: Enables speaker partitioning (diarization) in your transcription
                output. Speaker partitioning labels the speech from individual speakers in your media file. For more
                information, see Partitioning speakers (diarization).
            x_amzn_transcribe_enable_channel_identification: Enables channel identification in multi-channel audio.
                Channel identification transcribes the audio on each channel independently, then appends the output for
                each channel into one transcript. If you have multi-channel audio and do not enable channel
                identification, your audio is transcribed in a continuous manner and your transcript is not separated by
                channel. If you include EnableChannelIdentification in your request, you must also include
                NumberOfChannels. For more information, see Transcribing multi-channel audio.
            x_amzn_transcribe_number_of_channels: Specify the number of channels in your audio stream. This value must
                be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not
                include this parameter in your request. If you include NumberOfChannels in your request, you must also
                include EnableChannelIdentification.
            x_amzn_transcribe_enable_partial_results_stabilization: Enables partial result stabilization for your
                transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
                For more information, see Partial-result stabilization.
            x_amzn_transcribe_partial_results_stability: Specify the level of stability to use when you enable partial
                results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy.
                High stability transcribes faster, but with slightly lower accuracy. For more information, see
                Partial-result stabilization.
            x_amzn_transcribe_content_identification_type: Labels all personally identifiable information (PII)
                identified in your transcript. Content identification is performed at the segment level; PII specified
                in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include
                PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and
                ContentRedactionType in the same request. If you set both, your request returns a BadRequestException.
                For more information, see Redacting or identifying personally identifiable information.
            x_amzn_transcribe_content_redaction_type: Redacts all personally identifiable information (PII) identified
                in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes
                is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
                request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the
                same request. If you set both, your request returns a BadRequestException. For more information, see
                Redacting or identifying personally identifiable information.
            x_amzn_transcribe_pii_entity_types: Specify which types of personally identifiable information (PII) you
                want to redact in your transcript. You can include as many types as you'd like, or you can select ALL.
                Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
                CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, AGE,
                DATE_TIME, LICENSE_PLATE, PASSPORT_NUMBER, PASSWORD, USERNAME, VEHICLE_IDENTIFICATION_NUMBER, or ALL.
                Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType
                or ContentRedactionType. If you in
            x_amzn_transcribe_language_model_name: Specify the name of the custom language model that you want to use
                when processing your transcription. Note that language model names are case sensitive. The language of
                the specified language model must match the language code you specify in your transcription request. If
                the languages don't match, the custom language model isn't applied. There are no errors or warnings
                associated with a language mismatch. For more information, see Custom language models.
            x_amzn_transcribe_identify_language: Enables automatic language identification for your transcription. If
                you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you
                think may be present in your audio stream. You can also include a preferred language using
                PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster
                than if you omit this parameter. If you have multi-channel audio that contains different languages on
                each channel, and you've enabled channel identification, automatic language identification identifies
                the dominant language on eac
            x_amzn_transcribe_language_options: Specify two or more language codes that represent the languages you
                think may be present in your media; including more than five is not recommended. Including language
                options can improve the accuracy of language identification. If you include LanguageOptions in your
                request, you must also include IdentifyLanguage or IdentifyMultipleLanguages. For a list of languages
                supported with Amazon Transcribe streaming, refer to the Supported languages table. You can only include
                one language dialect per language per stream. For example, you cannot include en-US and en-AU in the
                same request.
            x_amzn_transcribe_preferred_language: Specify a preferred language from the subset of languages codes you
                specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
                LanguageOptions in your request.
            x_amzn_transcribe_identify_multiple_languages: Enables automatic multi-language identification in your
                transcription job request. Use this parameter if your stream contains more than one language. If your
                stream contains only one language, use IdentifyLanguage instead. If you include
                IdentifyMultipleLanguages, you must include a list of language codes, using LanguageOptions, that you
                think may be present in your stream. If you want to apply a custom vocabulary or a custom vocabulary
                filter to your automatic multiple language identification request, include VocabularyNames or
                VocabularyFilterNames. Note that you must include one of Language
            x_amzn_transcribe_vocabulary_names: Specify the names of the custom vocabularies that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If none of the languages
                of the specified custom vocabularies match the language identified in your media, your job fails. This
                parameter is only intended for use with the IdentifyLanguage parameter. If you're not including
                IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the
                VocabularyName parameter instead. For more information, see Custom vocabularies.
            x_amzn_transcribe_vocabulary_filter_names: Specify the names of the custom vocabulary filters that you want
                to use when processing your transcription. Note that vocabulary filter names are case sensitive. If none
                of the languages of the specified custom vocabulary filters match the language identified in your media,
                your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're
                not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your
                transcription, use the VocabularyFilterName parameter instead. For more information, see Using
                vocabulary filtering with u
            x_amzn_transcribe_session_resume_window: Specify the time window, in minutes, during which your
                transcription session can be resumed, measured from the stream start time. This optional parameter
                accepts integer values from 1 to 300 (5 hours). For example, if your stream starts at 1 PM and you
                specify a SessionResumeWindow of 30 minutes, you can reconnect to the session as many times as you want
                until 1:30 PM.
            x_amzn_transcribe_transcript_format: Specify how numbers, dates, and other alphanumeric entities are
                rendered in your transcription results. WRITTEN renders these entities in their standard written form
                (for example, $50, 10:30 AM, and 101). SPOKEN renders these entities as words, exactly as they were
                spoken (for example, fifty dollars, ten thirty a m, and one oh one). If you don't specify a value,
                Amazon Transcribe uses WRITTEN by default.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                ServiceUnavailableException ``error`` is ``BadRequestException | ConflictException |
                LimitExceededException | InternalFailureException | ServiceUnavailableException | RawError``."""
        return unwrap(
            self._with_raw_response.start_stream_transcription(
                x_amzn_transcribe_sample_rate,
                x_amzn_transcribe_media_encoding,
                x_amzn_transcribe_language_code=x_amzn_transcribe_language_code,
                x_amzn_transcribe_vocabulary_name=x_amzn_transcribe_vocabulary_name,
                x_amzn_transcribe_session_id=x_amzn_transcribe_session_id,
                x_amzn_transcribe_vocabulary_filter_name=x_amzn_transcribe_vocabulary_filter_name,
                x_amzn_transcribe_vocabulary_filter_method=x_amzn_transcribe_vocabulary_filter_method,
                x_amzn_transcribe_show_speaker_label=x_amzn_transcribe_show_speaker_label,
                x_amzn_transcribe_enable_channel_identification=x_amzn_transcribe_enable_channel_identification,
                x_amzn_transcribe_number_of_channels=x_amzn_transcribe_number_of_channels,
                x_amzn_transcribe_enable_partial_results_stabilization=x_amzn_transcribe_enable_partial_results_stabilization,
                x_amzn_transcribe_partial_results_stability=x_amzn_transcribe_partial_results_stability,
                x_amzn_transcribe_content_identification_type=x_amzn_transcribe_content_identification_type,
                x_amzn_transcribe_content_redaction_type=x_amzn_transcribe_content_redaction_type,
                x_amzn_transcribe_pii_entity_types=x_amzn_transcribe_pii_entity_types,
                x_amzn_transcribe_language_model_name=x_amzn_transcribe_language_model_name,
                x_amzn_transcribe_identify_language=x_amzn_transcribe_identify_language,
                x_amzn_transcribe_language_options=x_amzn_transcribe_language_options,
                x_amzn_transcribe_preferred_language=x_amzn_transcribe_preferred_language,
                x_amzn_transcribe_identify_multiple_languages=x_amzn_transcribe_identify_multiple_languages,
                x_amzn_transcribe_vocabulary_names=x_amzn_transcribe_vocabulary_names,
                x_amzn_transcribe_vocabulary_filter_names=x_amzn_transcribe_vocabulary_filter_names,
                x_amzn_transcribe_session_resume_window=x_amzn_transcribe_session_resume_window,
                x_amzn_transcribe_transcript_format=x_amzn_transcribe_transcript_format,
                body=body,
                request_options=request_options,
            ),
        )

    def tag_resource(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more
        about using tags with Amazon Transcribe, refer to Tagging resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    def untag_resource(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in
        your request, you must also include ResourceArn and TagKeys.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def get_medical_scribe_stream(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetMedicalScribeStreamResponse:
        """Provides details about the specified Amazon Web Services HealthScribe streaming session. To view the status
        of the streaming session, check the StreamStatus field in the response. To get the details of post-stream
        analytics, including its status, check the PostStreamAnalyticsResult field in the response.

        Args:
            session_id: The identifier of the HealthScribe streaming session you want information about.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException ResourceNotFoundException
                ``error`` is ``BadRequestException | ResourceNotFoundException | LimitExceededException |
                InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_medical_scribe_stream(session_id, request_options=request_options)
        )

    async def list_tags_for_resource(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more
        about using tags with Amazon Transcribe, refer to Tagging resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException LimitExceededException NotFoundException ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_tags_for_resource(x_amz_target, request_options=request_options)
        )

    async def start_call_analytics_stream_transcription(
        self,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        *,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode1OrStr | None = None,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_vocabulary_filter_name: str | None = None,
        x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None,
        x_amzn_transcribe_language_model_name: str | None = None,
        x_amzn_transcribe_identify_language: bool | None = None,
        x_amzn_transcribe_language_options: str | None = None,
        x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguageOrStr | None = None,
        x_amzn_transcribe_vocabulary_names: str | None = None,
        x_amzn_transcribe_vocabulary_filter_names: str | None = None,
        x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None,
        x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None,
        x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None,
        x_amzn_transcribe_pii_entity_types: str | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartCallAnalyticsStreamTranscriptionResponse:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the
        transcription results are streamed to your application. Use this operation for Call Analytics transcriptions.
        The following parameters are required: language-code or identify-language media-encoding sample-rate For more
        information on streaming with Amazon Transcribe, see Transcribing streaming audio.

        Args:
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Low-quality audio, such as
                telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
                48,000 Hz. Note that the sample rate you specify must match that of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding of your input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. For a list of languages supported with real-time Call Analytics, refer to the Supported languages
                table.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If the language of the
                specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary
                is not applied to your transcription. For more information, see Custom vocabularies.
            x_amzn_transcribe_session_id: Specify a name for your Call Analytics transcription session. If you don't
                include this parameter in your request, Amazon Transcribe generates an ID and returns it in the
                response.
            x_amzn_transcribe_vocabulary_filter_name: Specify the name of the custom vocabulary filter that you want to
                use when processing your transcription. Note that vocabulary filter names are case sensitive. If the
                language of the specified custom vocabulary filter doesn't match the language identified in your media,
                the vocabulary filter is not applied to your transcription. For more information, see Using vocabulary
                filtering with unwanted words.
            x_amzn_transcribe_vocabulary_filter_method: Specify how you want your vocabulary filter applied to your
                transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words
                without changing them, choose tag.
            x_amzn_transcribe_language_model_name: Specify the name of the custom language model that you want to use
                when processing your transcription. Note that language model names are case sensitive. The language of
                the specified language model must match the language code you specify in your transcription request. If
                the languages don't match, the custom language model isn't applied. There are no errors or warnings
                associated with a language mismatch. For more information, see Custom language models.
            x_amzn_transcribe_identify_language: Enables automatic language identification for your Call Analytics
                transcription. If you include IdentifyLanguage, you must include a list of language codes, using
                LanguageOptions, that you think may be present in your audio stream. You must provide a minimum of two
                language selections. You can also include a preferred language using PreferredLanguage. Adding a
                preferred language can help Amazon Transcribe identify the language faster than if you omit this
                parameter. Note that you must include either LanguageCode or IdentifyLanguage in your request. If you
                include both parameters, your transcri
            x_amzn_transcribe_language_options: Specify two or more language codes that represent the languages you
                think may be present in your media. Including language options can improve the accuracy of language
                identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage.
                For a list of languages supported with Call Analytics streaming, refer to the Supported languages table.
                You can only include one language dialect per language per stream. For example, you cannot include en-US
                and en-AU in the same request.
            x_amzn_transcribe_preferred_language: Specify a preferred language from the subset of languages codes you
                specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
                LanguageOptions in your request.
            x_amzn_transcribe_vocabulary_names: Specify the names of the custom vocabularies that you want to use when
                processing your Call Analytics transcription. Note that vocabulary names are case sensitive. If the
                custom vocabulary's language doesn't match the identified media language, it won't be applied to the
                transcription. This parameter is only intended for use with the IdentifyLanguage parameter. If you're
                not including IdentifyLanguage in your request and want to use a custom vocabulary with your
                transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies.
            x_amzn_transcribe_vocabulary_filter_names: Specify the names of the custom vocabulary filters that you want
                to use when processing your Call Analytics transcription. Note that vocabulary filter names are case
                sensitive. These filters serve to customize the transcript output. This parameter is only intended for
                use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and
                want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter
                instead. For more information, see Using vocabulary filtering with unwanted words.
            x_amzn_transcribe_enable_partial_results_stabilization: Enables partial result stabilization for your
                transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
                For more information, see Partial-result stabilization.
            x_amzn_transcribe_partial_results_stability: Specify the level of stability to use when you enable partial
                results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy.
                High stability transcribes faster, but with slightly lower accuracy. For more information, see
                Partial-result stabilization.
            x_amzn_transcribe_content_identification_type: Labels all personally identifiable information (PII)
                identified in your transcript. Content identification is performed at the segment level; PII specified
                in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include
                PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and
                ContentRedactionType in the same request. If you set both, your request returns a BadRequestException.
                For more information, see Redacting or identifying personally identifiable information.
            x_amzn_transcribe_content_redaction_type: Redacts all personally identifiable information (PII) identified
                in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes
                is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
                request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the
                same request. If you set both, your request returns a BadRequestException. For more information, see
                Redacting or identifying personally identifiable information.
            x_amzn_transcribe_pii_entity_types: Specify which types of personally identifiable information (PII) you
                want to redact in your transcript. You can include as many types as you'd like, or you can select ALL.
                Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
                CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, or ALL. Note
                that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or
                ContentRedactionType. If you include ContentRedactionType or ContentIdentificationType in your request,
                but do not include PiiEnti
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                ServiceUnavailableException ``error`` is ``BadRequestException | ConflictException |
                LimitExceededException | InternalFailureException | ServiceUnavailableException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_call_analytics_stream_transcription(
                x_amzn_transcribe_sample_rate,
                x_amzn_transcribe_media_encoding,
                x_amzn_transcribe_language_code=x_amzn_transcribe_language_code,
                x_amzn_transcribe_vocabulary_name=x_amzn_transcribe_vocabulary_name,
                x_amzn_transcribe_session_id=x_amzn_transcribe_session_id,
                x_amzn_transcribe_vocabulary_filter_name=x_amzn_transcribe_vocabulary_filter_name,
                x_amzn_transcribe_vocabulary_filter_method=x_amzn_transcribe_vocabulary_filter_method,
                x_amzn_transcribe_language_model_name=x_amzn_transcribe_language_model_name,
                x_amzn_transcribe_identify_language=x_amzn_transcribe_identify_language,
                x_amzn_transcribe_language_options=x_amzn_transcribe_language_options,
                x_amzn_transcribe_preferred_language=x_amzn_transcribe_preferred_language,
                x_amzn_transcribe_vocabulary_names=x_amzn_transcribe_vocabulary_names,
                x_amzn_transcribe_vocabulary_filter_names=x_amzn_transcribe_vocabulary_filter_names,
                x_amzn_transcribe_enable_partial_results_stabilization=x_amzn_transcribe_enable_partial_results_stabilization,
                x_amzn_transcribe_partial_results_stability=x_amzn_transcribe_partial_results_stability,
                x_amzn_transcribe_content_identification_type=x_amzn_transcribe_content_identification_type,
                x_amzn_transcribe_content_redaction_type=x_amzn_transcribe_content_redaction_type,
                x_amzn_transcribe_pii_entity_types=x_amzn_transcribe_pii_entity_types,
                body=body,
                request_options=request_options,
            ),
        )

    async def start_medical_scribe_stream(
        self,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCodeOrStr,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncodingOrStr,
        *,
        x_amzn_transcribe_session_id: str | None = None,
        body: MedicalScribeInputStream | MedicalScribeInputStreamDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartMedicalScribeStreamResponse:
        """Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the
        transcription results are streamed to your application. When you start a stream, you first specify the stream
        configuration in a MedicalScribeConfigurationEvent. This event includes channel definitions, encryption
        settings, medical scribe context, and post-stream analytics settings, such as the output configuration for
        aggregated transcript and clinical note generation. These are additional streaming session configurations beyond
        those provided in your initial start request headers. Whether you are starting a new session or resuming an
        existing session, your first event must be a MedicalScribeConfigurationEvent. After you send a
        MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services HealthScribe responds with
        real-time transcription results. When you are finished, to start processing the results with the post-stream
        analytics, send a MedicalScribeSessionControlEvent with a Type of END_OF_SESSION and Amazon Web Services
        HealthScribe starts the analytics. You can pause or resume streaming. To pause streaming, complete the input
        stream without sending the M

        Args:
            x_amzn_transcribe_language_code: Specify the language code for your HealthScribe streaming session.
            x_amzn_transcribe_sample_rate: Specify the sample rate of the input audio (in hertz). Amazon Web Services
                HealthScribe supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that
                of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding used for the input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_session_id: Specify an identifier for your streaming session (in UUID format). If you
                don't include a SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns
                it in the response.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                ServiceUnavailableException ``error`` is ``BadRequestException | ConflictException |
                LimitExceededException | InternalFailureException | ServiceUnavailableException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_medical_scribe_stream(
                x_amzn_transcribe_language_code,
                x_amzn_transcribe_sample_rate,
                x_amzn_transcribe_media_encoding,
                x_amzn_transcribe_session_id=x_amzn_transcribe_session_id,
                body=body,
                request_options=request_options,
            ),
        )

    async def start_medical_stream_transcription(
        self,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        x_amzn_transcribe_specialty: XAmznTranscribeSpecialtyOrStr,
        x_amzn_transcribe_type: XAmznTranscribeTypeOrStr,
        *,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_show_speaker_label: bool | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_enable_channel_identification: bool | None = None,
        x_amzn_transcribe_number_of_channels: int | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationType1OrStr | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartMedicalStreamTranscriptionResponse:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe Medical and
        the transcription results are streamed to your application. The following parameters are required: language-code
        media-encoding sample-rate For more information on streaming with Amazon Transcribe Medical, see Transcribing
        streaming audio.

        Args:
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. Amazon Transcribe Medical only supports US English (en-US).
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Amazon Transcribe Medical
                supports a range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of
                your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding used for the input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_specialty: Specify the medical specialty contained in your audio.
            x_amzn_transcribe_type: Specify the type of input audio. For example, choose DICTATION for a provider
                dictating patient notes and CONVERSATION for a dialogue between a patient and a medical professional.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive.
            x_amzn_transcribe_show_speaker_label: Enables speaker partitioning (diarization) in your transcription
                output. Speaker partitioning labels the speech from individual speakers in your media file. For more
                information, see Partitioning speakers (diarization).
            x_amzn_transcribe_session_id: Specify a name for your transcription session. If you don't include this
                parameter in your request, Amazon Transcribe Medical generates an ID and returns it in the response.
            x_amzn_transcribe_enable_channel_identification: Enables channel identification in multi-channel audio.
                Channel identification transcribes the audio on each channel independently, then appends the output for
                each channel into one transcript. If you have multi-channel audio and do not enable channel
                identification, your audio is transcribed in a continuous manner and your transcript is not separated by
                channel. If you include EnableChannelIdentification in your request, you must also include
                NumberOfChannels. For more information, see Transcribing multi-channel audio.
            x_amzn_transcribe_number_of_channels: Specify the number of channels in your audio stream. This value must
                be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not
                include this parameter in your request. If you include NumberOfChannels in your request, you must also
                include EnableChannelIdentification.
            x_amzn_transcribe_content_identification_type: Labels all personal health information (PHI) identified in
                your transcript. Content identification is performed at the segment level; PHI is flagged upon complete
                transcription of an audio segment. For more information, see Identifying personal health information
                (PHI) in a transcription.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                ServiceUnavailableException ``error`` is ``BadRequestException | ConflictException |
                LimitExceededException | InternalFailureException | ServiceUnavailableException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_medical_stream_transcription(
                x_amzn_transcribe_language_code,
                x_amzn_transcribe_sample_rate,
                x_amzn_transcribe_media_encoding,
                x_amzn_transcribe_specialty,
                x_amzn_transcribe_type,
                x_amzn_transcribe_vocabulary_name=x_amzn_transcribe_vocabulary_name,
                x_amzn_transcribe_show_speaker_label=x_amzn_transcribe_show_speaker_label,
                x_amzn_transcribe_session_id=x_amzn_transcribe_session_id,
                x_amzn_transcribe_enable_channel_identification=x_amzn_transcribe_enable_channel_identification,
                x_amzn_transcribe_number_of_channels=x_amzn_transcribe_number_of_channels,
                x_amzn_transcribe_content_identification_type=x_amzn_transcribe_content_identification_type,
                body=body,
                request_options=request_options,
            ),
        )

    async def start_stream_transcription(
        self,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        *,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr | None = None,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_vocabulary_filter_name: str | None = None,
        x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None,
        x_amzn_transcribe_show_speaker_label: bool | None = None,
        x_amzn_transcribe_enable_channel_identification: bool | None = None,
        x_amzn_transcribe_number_of_channels: int | None = None,
        x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None,
        x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None,
        x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None,
        x_amzn_transcribe_pii_entity_types: str | None = None,
        x_amzn_transcribe_language_model_name: str | None = None,
        x_amzn_transcribe_identify_language: bool | None = None,
        x_amzn_transcribe_language_options: str | None = None,
        x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguage1OrStr | None = None,
        x_amzn_transcribe_identify_multiple_languages: bool | None = None,
        x_amzn_transcribe_vocabulary_names: str | None = None,
        x_amzn_transcribe_vocabulary_filter_names: str | None = None,
        x_amzn_transcribe_session_resume_window: int | None = None,
        x_amzn_transcribe_transcript_format: XAmznTranscribeTranscriptFormatOrStr | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartStreamTranscriptionResponse:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the
        transcription results are streamed to your application. The following parameters are required: language-code or
        identify-language or identify-multiple-language media-encoding sample-rate For more information on streaming
        with Amazon Transcribe, see Transcribing streaming audio.

        Args:
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Low-quality audio, such as
                telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
                48,000 Hz. Note that the sample rate you specify must match that of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding of your input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. If you're unsure of the language spoken in your audio, consider using IdentifyLanguage to enable
                automatic language identification. For a list of languages supported with Amazon Transcribe streaming,
                refer to the Supported languages table.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If the language of the
                specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary
                is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage
                parameter. If you're including IdentifyLanguage in your request and want to use one or more custom
                vocabularies with your transcription, use the VocabularyNames parameter instead. For more information,
                see Custom vocabularies
            x_amzn_transcribe_session_id: Specify a name for your transcription session. If you don't include this
                parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
            x_amzn_transcribe_vocabulary_filter_name: Specify the name of the custom vocabulary filter that you want to
                use when processing your transcription. Note that vocabulary filter names are case sensitive. If the
                language of the specified custom vocabulary filter doesn't match the language identified in your media,
                the vocabulary filter is not applied to your transcription. This parameter is not intended for use with
                the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one
                or more vocabulary filters with your transcription, use the VocabularyFilterNames parameter instead. For
                more informatio
            x_amzn_transcribe_vocabulary_filter_method: Specify how you want your vocabulary filter applied to your
                transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words
                without changing them, choose tag.
            x_amzn_transcribe_show_speaker_label: Enables speaker partitioning (diarization) in your transcription
                output. Speaker partitioning labels the speech from individual speakers in your media file. For more
                information, see Partitioning speakers (diarization).
            x_amzn_transcribe_enable_channel_identification: Enables channel identification in multi-channel audio.
                Channel identification transcribes the audio on each channel independently, then appends the output for
                each channel into one transcript. If you have multi-channel audio and do not enable channel
                identification, your audio is transcribed in a continuous manner and your transcript is not separated by
                channel. If you include EnableChannelIdentification in your request, you must also include
                NumberOfChannels. For more information, see Transcribing multi-channel audio.
            x_amzn_transcribe_number_of_channels: Specify the number of channels in your audio stream. This value must
                be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not
                include this parameter in your request. If you include NumberOfChannels in your request, you must also
                include EnableChannelIdentification.
            x_amzn_transcribe_enable_partial_results_stabilization: Enables partial result stabilization for your
                transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
                For more information, see Partial-result stabilization.
            x_amzn_transcribe_partial_results_stability: Specify the level of stability to use when you enable partial
                results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy.
                High stability transcribes faster, but with slightly lower accuracy. For more information, see
                Partial-result stabilization.
            x_amzn_transcribe_content_identification_type: Labels all personally identifiable information (PII)
                identified in your transcript. Content identification is performed at the segment level; PII specified
                in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include
                PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and
                ContentRedactionType in the same request. If you set both, your request returns a BadRequestException.
                For more information, see Redacting or identifying personally identifiable information.
            x_amzn_transcribe_content_redaction_type: Redacts all personally identifiable information (PII) identified
                in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes
                is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
                request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the
                same request. If you set both, your request returns a BadRequestException. For more information, see
                Redacting or identifying personally identifiable information.
            x_amzn_transcribe_pii_entity_types: Specify which types of personally identifiable information (PII) you
                want to redact in your transcript. You can include as many types as you'd like, or you can select ALL.
                Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
                CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, AGE,
                DATE_TIME, LICENSE_PLATE, PASSPORT_NUMBER, PASSWORD, USERNAME, VEHICLE_IDENTIFICATION_NUMBER, or ALL.
                Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType
                or ContentRedactionType. If you in
            x_amzn_transcribe_language_model_name: Specify the name of the custom language model that you want to use
                when processing your transcription. Note that language model names are case sensitive. The language of
                the specified language model must match the language code you specify in your transcription request. If
                the languages don't match, the custom language model isn't applied. There are no errors or warnings
                associated with a language mismatch. For more information, see Custom language models.
            x_amzn_transcribe_identify_language: Enables automatic language identification for your transcription. If
                you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you
                think may be present in your audio stream. You can also include a preferred language using
                PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster
                than if you omit this parameter. If you have multi-channel audio that contains different languages on
                each channel, and you've enabled channel identification, automatic language identification identifies
                the dominant language on eac
            x_amzn_transcribe_language_options: Specify two or more language codes that represent the languages you
                think may be present in your media; including more than five is not recommended. Including language
                options can improve the accuracy of language identification. If you include LanguageOptions in your
                request, you must also include IdentifyLanguage or IdentifyMultipleLanguages. For a list of languages
                supported with Amazon Transcribe streaming, refer to the Supported languages table. You can only include
                one language dialect per language per stream. For example, you cannot include en-US and en-AU in the
                same request.
            x_amzn_transcribe_preferred_language: Specify a preferred language from the subset of languages codes you
                specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
                LanguageOptions in your request.
            x_amzn_transcribe_identify_multiple_languages: Enables automatic multi-language identification in your
                transcription job request. Use this parameter if your stream contains more than one language. If your
                stream contains only one language, use IdentifyLanguage instead. If you include
                IdentifyMultipleLanguages, you must include a list of language codes, using LanguageOptions, that you
                think may be present in your stream. If you want to apply a custom vocabulary or a custom vocabulary
                filter to your automatic multiple language identification request, include VocabularyNames or
                VocabularyFilterNames. Note that you must include one of Language
            x_amzn_transcribe_vocabulary_names: Specify the names of the custom vocabularies that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If none of the languages
                of the specified custom vocabularies match the language identified in your media, your job fails. This
                parameter is only intended for use with the IdentifyLanguage parameter. If you're not including
                IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the
                VocabularyName parameter instead. For more information, see Custom vocabularies.
            x_amzn_transcribe_vocabulary_filter_names: Specify the names of the custom vocabulary filters that you want
                to use when processing your transcription. Note that vocabulary filter names are case sensitive. If none
                of the languages of the specified custom vocabulary filters match the language identified in your media,
                your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're
                not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your
                transcription, use the VocabularyFilterName parameter instead. For more information, see Using
                vocabulary filtering with u
            x_amzn_transcribe_session_resume_window: Specify the time window, in minutes, during which your
                transcription session can be resumed, measured from the stream start time. This optional parameter
                accepts integer values from 1 to 300 (5 hours). For example, if your stream starts at 1 PM and you
                specify a SessionResumeWindow of 30 minutes, you can reconnect to the session as many times as you want
                until 1:30 PM.
            x_amzn_transcribe_transcript_format: Specify how numbers, dates, and other alphanumeric entities are
                rendered in your transcription results. WRITTEN renders these entities in their standard written form
                (for example, $50, 10:30 AM, and 101). SPOKEN renders these entities as words, exactly as they were
                spoken (for example, fifty dollars, ten thirty a m, and one oh one). If you don't specify a value,
                Amazon Transcribe uses WRITTEN by default.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                ServiceUnavailableException ``error`` is ``BadRequestException | ConflictException |
                LimitExceededException | InternalFailureException | ServiceUnavailableException | RawError``."""
        return unwrap(
            await self._with_raw_response.start_stream_transcription(
                x_amzn_transcribe_sample_rate,
                x_amzn_transcribe_media_encoding,
                x_amzn_transcribe_language_code=x_amzn_transcribe_language_code,
                x_amzn_transcribe_vocabulary_name=x_amzn_transcribe_vocabulary_name,
                x_amzn_transcribe_session_id=x_amzn_transcribe_session_id,
                x_amzn_transcribe_vocabulary_filter_name=x_amzn_transcribe_vocabulary_filter_name,
                x_amzn_transcribe_vocabulary_filter_method=x_amzn_transcribe_vocabulary_filter_method,
                x_amzn_transcribe_show_speaker_label=x_amzn_transcribe_show_speaker_label,
                x_amzn_transcribe_enable_channel_identification=x_amzn_transcribe_enable_channel_identification,
                x_amzn_transcribe_number_of_channels=x_amzn_transcribe_number_of_channels,
                x_amzn_transcribe_enable_partial_results_stabilization=x_amzn_transcribe_enable_partial_results_stabilization,
                x_amzn_transcribe_partial_results_stability=x_amzn_transcribe_partial_results_stability,
                x_amzn_transcribe_content_identification_type=x_amzn_transcribe_content_identification_type,
                x_amzn_transcribe_content_redaction_type=x_amzn_transcribe_content_redaction_type,
                x_amzn_transcribe_pii_entity_types=x_amzn_transcribe_pii_entity_types,
                x_amzn_transcribe_language_model_name=x_amzn_transcribe_language_model_name,
                x_amzn_transcribe_identify_language=x_amzn_transcribe_identify_language,
                x_amzn_transcribe_language_options=x_amzn_transcribe_language_options,
                x_amzn_transcribe_preferred_language=x_amzn_transcribe_preferred_language,
                x_amzn_transcribe_identify_multiple_languages=x_amzn_transcribe_identify_multiple_languages,
                x_amzn_transcribe_vocabulary_names=x_amzn_transcribe_vocabulary_names,
                x_amzn_transcribe_vocabulary_filter_names=x_amzn_transcribe_vocabulary_filter_names,
                x_amzn_transcribe_session_resume_window=x_amzn_transcribe_session_resume_window,
                x_amzn_transcribe_transcript_format=x_amzn_transcribe_transcript_format,
                body=body,
                request_options=request_options,
            ),
        )

    async def tag_resource(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more
        about using tags with Amazon Transcribe, refer to Tagging resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tag_resource(x_amz_target, request_options=request_options))

    async def untag_resource(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in
        your request, you must also include ResourceArn and TagKeys.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConflictException InternalFailureException LimitExceededException
                NotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_resource(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_medical_scribe_stream(
        self, session_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMedicalScribeStreamResponse, GetMedicalScribeStreamErrorBody]:
        """Provides details about the specified Amazon Web Services HealthScribe streaming session. To view the status
        of the streaming session, check the StreamStatus field in the response. To get the details of post-stream
        analytics, including its status, check the PostStreamAnalyticsResult field in the response.

        Args:
            session_id: The identifier of the HealthScribe streaming session you want information about.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_transcribe_service_operations_api(
                "/medical-scribe-stream/{SessionId}"
            ),
            path_params=[param[str]("SessionId", session_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetMedicalScribeStreamResponse],
            error_mapper=get_medical_scribe_stream_error_mapper,
            request_options=request_options,
        )

    def list_tags_for_resource(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more
        about using tags with Amazon Transcribe, refer to Tagging resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/#ListTagsForResource"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    def start_call_analytics_stream_transcription(
        self,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        *,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode1OrStr | None = None,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_vocabulary_filter_name: str | None = None,
        x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None,
        x_amzn_transcribe_language_model_name: str | None = None,
        x_amzn_transcribe_identify_language: bool | None = None,
        x_amzn_transcribe_language_options: str | None = None,
        x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguageOrStr | None = None,
        x_amzn_transcribe_vocabulary_names: str | None = None,
        x_amzn_transcribe_vocabulary_filter_names: str | None = None,
        x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None,
        x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None,
        x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None,
        x_amzn_transcribe_pii_entity_types: str | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartCallAnalyticsStreamTranscriptionResponse, StartCallAnalyticsStreamTranscriptionErrorBody]:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the
        transcription results are streamed to your application. Use this operation for Call Analytics transcriptions.
        The following parameters are required: language-code or identify-language media-encoding sample-rate For more
        information on streaming with Amazon Transcribe, see Transcribing streaming audio.

        Args:
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Low-quality audio, such as
                telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
                48,000 Hz. Note that the sample rate you specify must match that of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding of your input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. For a list of languages supported with real-time Call Analytics, refer to the Supported languages
                table.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If the language of the
                specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary
                is not applied to your transcription. For more information, see Custom vocabularies.
            x_amzn_transcribe_session_id: Specify a name for your Call Analytics transcription session. If you don't
                include this parameter in your request, Amazon Transcribe generates an ID and returns it in the
                response.
            x_amzn_transcribe_vocabulary_filter_name: Specify the name of the custom vocabulary filter that you want to
                use when processing your transcription. Note that vocabulary filter names are case sensitive. If the
                language of the specified custom vocabulary filter doesn't match the language identified in your media,
                the vocabulary filter is not applied to your transcription. For more information, see Using vocabulary
                filtering with unwanted words.
            x_amzn_transcribe_vocabulary_filter_method: Specify how you want your vocabulary filter applied to your
                transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words
                without changing them, choose tag.
            x_amzn_transcribe_language_model_name: Specify the name of the custom language model that you want to use
                when processing your transcription. Note that language model names are case sensitive. The language of
                the specified language model must match the language code you specify in your transcription request. If
                the languages don't match, the custom language model isn't applied. There are no errors or warnings
                associated with a language mismatch. For more information, see Custom language models.
            x_amzn_transcribe_identify_language: Enables automatic language identification for your Call Analytics
                transcription. If you include IdentifyLanguage, you must include a list of language codes, using
                LanguageOptions, that you think may be present in your audio stream. You must provide a minimum of two
                language selections. You can also include a preferred language using PreferredLanguage. Adding a
                preferred language can help Amazon Transcribe identify the language faster than if you omit this
                parameter. Note that you must include either LanguageCode or IdentifyLanguage in your request. If you
                include both parameters, your transcri
            x_amzn_transcribe_language_options: Specify two or more language codes that represent the languages you
                think may be present in your media. Including language options can improve the accuracy of language
                identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage.
                For a list of languages supported with Call Analytics streaming, refer to the Supported languages table.
                You can only include one language dialect per language per stream. For example, you cannot include en-US
                and en-AU in the same request.
            x_amzn_transcribe_preferred_language: Specify a preferred language from the subset of languages codes you
                specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
                LanguageOptions in your request.
            x_amzn_transcribe_vocabulary_names: Specify the names of the custom vocabularies that you want to use when
                processing your Call Analytics transcription. Note that vocabulary names are case sensitive. If the
                custom vocabulary's language doesn't match the identified media language, it won't be applied to the
                transcription. This parameter is only intended for use with the IdentifyLanguage parameter. If you're
                not including IdentifyLanguage in your request and want to use a custom vocabulary with your
                transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies.
            x_amzn_transcribe_vocabulary_filter_names: Specify the names of the custom vocabulary filters that you want
                to use when processing your Call Analytics transcription. Note that vocabulary filter names are case
                sensitive. These filters serve to customize the transcript output. This parameter is only intended for
                use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and
                want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter
                instead. For more information, see Using vocabulary filtering with unwanted words.
            x_amzn_transcribe_enable_partial_results_stabilization: Enables partial result stabilization for your
                transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
                For more information, see Partial-result stabilization.
            x_amzn_transcribe_partial_results_stability: Specify the level of stability to use when you enable partial
                results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy.
                High stability transcribes faster, but with slightly lower accuracy. For more information, see
                Partial-result stabilization.
            x_amzn_transcribe_content_identification_type: Labels all personally identifiable information (PII)
                identified in your transcript. Content identification is performed at the segment level; PII specified
                in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include
                PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and
                ContentRedactionType in the same request. If you set both, your request returns a BadRequestException.
                For more information, see Redacting or identifying personally identifiable information.
            x_amzn_transcribe_content_redaction_type: Redacts all personally identifiable information (PII) identified
                in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes
                is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
                request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the
                same request. If you set both, your request returns a BadRequestException. For more information, see
                Redacting or identifying personally identifiable information.
            x_amzn_transcribe_pii_entity_types: Specify which types of personally identifiable information (PII) you
                want to redact in your transcript. You can include as many types as you'd like, or you can select ALL.
                Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
                CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, or ALL. Note
                that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or
                ContentRedactionType. If you include ContentRedactionType or ContentIdentificationType in your request,
                but do not include PiiEnti
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api(
                "/call-analytics-stream-transcription"
            ),
            headers=[
                param[int]("x-amzn-transcribe-sample-rate", x_amzn_transcribe_sample_rate),
                param[XAmznTranscribeMediaEncoding1OrStr](
                    "x-amzn-transcribe-media-encoding", x_amzn_transcribe_media_encoding
                ),
                param[XAmznTranscribeLanguageCode1OrStr | None](
                    "x-amzn-transcribe-language-code", x_amzn_transcribe_language_code
                ),
                param[str | None]("x-amzn-transcribe-vocabulary-name", x_amzn_transcribe_vocabulary_name),
                param[str | None]("x-amzn-transcribe-session-id", x_amzn_transcribe_session_id),
                param[str | None]("x-amzn-transcribe-vocabulary-filter-name", x_amzn_transcribe_vocabulary_filter_name),
                param[XAmznTranscribeVocabularyFilterMethodOrStr | None](
                    "x-amzn-transcribe-vocabulary-filter-method", x_amzn_transcribe_vocabulary_filter_method
                ),
                param[str | None]("x-amzn-transcribe-language-model-name", x_amzn_transcribe_language_model_name),
                param[bool | None]("x-amzn-transcribe-identify-language", x_amzn_transcribe_identify_language),
                param[str | None]("x-amzn-transcribe-language-options", x_amzn_transcribe_language_options),
                param[XAmznTranscribePreferredLanguageOrStr | None](
                    "x-amzn-transcribe-preferred-language", x_amzn_transcribe_preferred_language
                ),
                param[str | None]("x-amzn-transcribe-vocabulary-names", x_amzn_transcribe_vocabulary_names),
                param[str | None](
                    "x-amzn-transcribe-vocabulary-filter-names", x_amzn_transcribe_vocabulary_filter_names
                ),
                param[bool | None](
                    "x-amzn-transcribe-enable-partial-results-stabilization",
                    x_amzn_transcribe_enable_partial_results_stabilization,
                ),
                param[XAmznTranscribePartialResultsStabilityOrStr | None](
                    "x-amzn-transcribe-partial-results-stability", x_amzn_transcribe_partial_results_stability
                ),
                param[XAmznTranscribeContentIdentificationTypeOrStr | None](
                    "x-amzn-transcribe-content-identification-type", x_amzn_transcribe_content_identification_type
                ),
                param[XAmznTranscribeContentRedactionTypeOrStr | None](
                    "x-amzn-transcribe-content-redaction-type", x_amzn_transcribe_content_redaction_type
                ),
                param[str | None]("x-amzn-transcribe-pii-entity-types", x_amzn_transcribe_pii_entity_types),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AudioStream | AudioStreamDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartCallAnalyticsStreamTranscriptionResponse],
            error_mapper=start_call_analytics_stream_transcription_error_mapper,
            request_options=request_options,
        )

    def start_medical_scribe_stream(
        self,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCodeOrStr,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncodingOrStr,
        *,
        x_amzn_transcribe_session_id: str | None = None,
        body: MedicalScribeInputStream | MedicalScribeInputStreamDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartMedicalScribeStreamResponse, StartMedicalScribeStreamErrorBody]:
        """Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the
        transcription results are streamed to your application. When you start a stream, you first specify the stream
        configuration in a MedicalScribeConfigurationEvent. This event includes channel definitions, encryption
        settings, medical scribe context, and post-stream analytics settings, such as the output configuration for
        aggregated transcript and clinical note generation. These are additional streaming session configurations beyond
        those provided in your initial start request headers. Whether you are starting a new session or resuming an
        existing session, your first event must be a MedicalScribeConfigurationEvent. After you send a
        MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services HealthScribe responds with
        real-time transcription results. When you are finished, to start processing the results with the post-stream
        analytics, send a MedicalScribeSessionControlEvent with a Type of END_OF_SESSION and Amazon Web Services
        HealthScribe starts the analytics. You can pause or resume streaming. To pause streaming, complete the input
        stream without sending the M

        Args:
            x_amzn_transcribe_language_code: Specify the language code for your HealthScribe streaming session.
            x_amzn_transcribe_sample_rate: Specify the sample rate of the input audio (in hertz). Amazon Web Services
                HealthScribe supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that
                of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding used for the input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_session_id: Specify an identifier for your streaming session (in UUID format). If you
                don't include a SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns
                it in the response.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/medical-scribe-stream"),
            headers=[
                param[XAmznTranscribeLanguageCodeOrStr](
                    "x-amzn-transcribe-language-code", x_amzn_transcribe_language_code
                ),
                param[int]("x-amzn-transcribe-sample-rate", x_amzn_transcribe_sample_rate),
                param[XAmznTranscribeMediaEncodingOrStr](
                    "x-amzn-transcribe-media-encoding", x_amzn_transcribe_media_encoding
                ),
                param[str | None]("x-amzn-transcribe-session-id", x_amzn_transcribe_session_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MedicalScribeInputStream | MedicalScribeInputStreamDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartMedicalScribeStreamResponse],
            error_mapper=start_medical_scribe_stream_error_mapper,
            request_options=request_options,
        )

    def start_medical_stream_transcription(
        self,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        x_amzn_transcribe_specialty: XAmznTranscribeSpecialtyOrStr,
        x_amzn_transcribe_type: XAmznTranscribeTypeOrStr,
        *,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_show_speaker_label: bool | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_enable_channel_identification: bool | None = None,
        x_amzn_transcribe_number_of_channels: int | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationType1OrStr | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartMedicalStreamTranscriptionResponse, StartMedicalStreamTranscriptionErrorBody]:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe Medical and
        the transcription results are streamed to your application. The following parameters are required: language-code
        media-encoding sample-rate For more information on streaming with Amazon Transcribe Medical, see Transcribing
        streaming audio.

        Args:
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. Amazon Transcribe Medical only supports US English (en-US).
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Amazon Transcribe Medical
                supports a range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of
                your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding used for the input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_specialty: Specify the medical specialty contained in your audio.
            x_amzn_transcribe_type: Specify the type of input audio. For example, choose DICTATION for a provider
                dictating patient notes and CONVERSATION for a dialogue between a patient and a medical professional.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive.
            x_amzn_transcribe_show_speaker_label: Enables speaker partitioning (diarization) in your transcription
                output. Speaker partitioning labels the speech from individual speakers in your media file. For more
                information, see Partitioning speakers (diarization).
            x_amzn_transcribe_session_id: Specify a name for your transcription session. If you don't include this
                parameter in your request, Amazon Transcribe Medical generates an ID and returns it in the response.
            x_amzn_transcribe_enable_channel_identification: Enables channel identification in multi-channel audio.
                Channel identification transcribes the audio on each channel independently, then appends the output for
                each channel into one transcript. If you have multi-channel audio and do not enable channel
                identification, your audio is transcribed in a continuous manner and your transcript is not separated by
                channel. If you include EnableChannelIdentification in your request, you must also include
                NumberOfChannels. For more information, see Transcribing multi-channel audio.
            x_amzn_transcribe_number_of_channels: Specify the number of channels in your audio stream. This value must
                be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not
                include this parameter in your request. If you include NumberOfChannels in your request, you must also
                include EnableChannelIdentification.
            x_amzn_transcribe_content_identification_type: Labels all personal health information (PHI) identified in
                your transcript. Content identification is performed at the segment level; PHI is flagged upon complete
                transcription of an audio segment. For more information, see Identifying personal health information
                (PHI) in a transcription.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/medical-stream-transcription"),
            headers=[
                param[XAmznTranscribeLanguageCode2OrStr](
                    "x-amzn-transcribe-language-code", x_amzn_transcribe_language_code
                ),
                param[int]("x-amzn-transcribe-sample-rate", x_amzn_transcribe_sample_rate),
                param[XAmznTranscribeMediaEncoding1OrStr](
                    "x-amzn-transcribe-media-encoding", x_amzn_transcribe_media_encoding
                ),
                param[XAmznTranscribeSpecialtyOrStr]("x-amzn-transcribe-specialty", x_amzn_transcribe_specialty),
                param[XAmznTranscribeTypeOrStr]("x-amzn-transcribe-type", x_amzn_transcribe_type),
                param[str | None]("x-amzn-transcribe-vocabulary-name", x_amzn_transcribe_vocabulary_name),
                param[bool | None]("x-amzn-transcribe-show-speaker-label", x_amzn_transcribe_show_speaker_label),
                param[str | None]("x-amzn-transcribe-session-id", x_amzn_transcribe_session_id),
                param[bool | None](
                    "x-amzn-transcribe-enable-channel-identification", x_amzn_transcribe_enable_channel_identification
                ),
                param[int | None]("x-amzn-transcribe-number-of-channels", x_amzn_transcribe_number_of_channels),
                param[XAmznTranscribeContentIdentificationType1OrStr | None](
                    "x-amzn-transcribe-content-identification-type", x_amzn_transcribe_content_identification_type
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AudioStream | AudioStreamDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartMedicalStreamTranscriptionResponse],
            error_mapper=start_medical_stream_transcription_error_mapper,
            request_options=request_options,
        )

    def start_stream_transcription(
        self,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        *,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr | None = None,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_vocabulary_filter_name: str | None = None,
        x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None,
        x_amzn_transcribe_show_speaker_label: bool | None = None,
        x_amzn_transcribe_enable_channel_identification: bool | None = None,
        x_amzn_transcribe_number_of_channels: int | None = None,
        x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None,
        x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None,
        x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None,
        x_amzn_transcribe_pii_entity_types: str | None = None,
        x_amzn_transcribe_language_model_name: str | None = None,
        x_amzn_transcribe_identify_language: bool | None = None,
        x_amzn_transcribe_language_options: str | None = None,
        x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguage1OrStr | None = None,
        x_amzn_transcribe_identify_multiple_languages: bool | None = None,
        x_amzn_transcribe_vocabulary_names: str | None = None,
        x_amzn_transcribe_vocabulary_filter_names: str | None = None,
        x_amzn_transcribe_session_resume_window: int | None = None,
        x_amzn_transcribe_transcript_format: XAmznTranscribeTranscriptFormatOrStr | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartStreamTranscriptionResponse, StartStreamTranscriptionErrorBody]:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the
        transcription results are streamed to your application. The following parameters are required: language-code or
        identify-language or identify-multiple-language media-encoding sample-rate For more information on streaming
        with Amazon Transcribe, see Transcribing streaming audio.

        Args:
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Low-quality audio, such as
                telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
                48,000 Hz. Note that the sample rate you specify must match that of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding of your input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. If you're unsure of the language spoken in your audio, consider using IdentifyLanguage to enable
                automatic language identification. For a list of languages supported with Amazon Transcribe streaming,
                refer to the Supported languages table.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If the language of the
                specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary
                is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage
                parameter. If you're including IdentifyLanguage in your request and want to use one or more custom
                vocabularies with your transcription, use the VocabularyNames parameter instead. For more information,
                see Custom vocabularies
            x_amzn_transcribe_session_id: Specify a name for your transcription session. If you don't include this
                parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
            x_amzn_transcribe_vocabulary_filter_name: Specify the name of the custom vocabulary filter that you want to
                use when processing your transcription. Note that vocabulary filter names are case sensitive. If the
                language of the specified custom vocabulary filter doesn't match the language identified in your media,
                the vocabulary filter is not applied to your transcription. This parameter is not intended for use with
                the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one
                or more vocabulary filters with your transcription, use the VocabularyFilterNames parameter instead. For
                more informatio
            x_amzn_transcribe_vocabulary_filter_method: Specify how you want your vocabulary filter applied to your
                transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words
                without changing them, choose tag.
            x_amzn_transcribe_show_speaker_label: Enables speaker partitioning (diarization) in your transcription
                output. Speaker partitioning labels the speech from individual speakers in your media file. For more
                information, see Partitioning speakers (diarization).
            x_amzn_transcribe_enable_channel_identification: Enables channel identification in multi-channel audio.
                Channel identification transcribes the audio on each channel independently, then appends the output for
                each channel into one transcript. If you have multi-channel audio and do not enable channel
                identification, your audio is transcribed in a continuous manner and your transcript is not separated by
                channel. If you include EnableChannelIdentification in your request, you must also include
                NumberOfChannels. For more information, see Transcribing multi-channel audio.
            x_amzn_transcribe_number_of_channels: Specify the number of channels in your audio stream. This value must
                be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not
                include this parameter in your request. If you include NumberOfChannels in your request, you must also
                include EnableChannelIdentification.
            x_amzn_transcribe_enable_partial_results_stabilization: Enables partial result stabilization for your
                transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
                For more information, see Partial-result stabilization.
            x_amzn_transcribe_partial_results_stability: Specify the level of stability to use when you enable partial
                results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy.
                High stability transcribes faster, but with slightly lower accuracy. For more information, see
                Partial-result stabilization.
            x_amzn_transcribe_content_identification_type: Labels all personally identifiable information (PII)
                identified in your transcript. Content identification is performed at the segment level; PII specified
                in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include
                PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and
                ContentRedactionType in the same request. If you set both, your request returns a BadRequestException.
                For more information, see Redacting or identifying personally identifiable information.
            x_amzn_transcribe_content_redaction_type: Redacts all personally identifiable information (PII) identified
                in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes
                is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
                request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the
                same request. If you set both, your request returns a BadRequestException. For more information, see
                Redacting or identifying personally identifiable information.
            x_amzn_transcribe_pii_entity_types: Specify which types of personally identifiable information (PII) you
                want to redact in your transcript. You can include as many types as you'd like, or you can select ALL.
                Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
                CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, AGE,
                DATE_TIME, LICENSE_PLATE, PASSPORT_NUMBER, PASSWORD, USERNAME, VEHICLE_IDENTIFICATION_NUMBER, or ALL.
                Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType
                or ContentRedactionType. If you in
            x_amzn_transcribe_language_model_name: Specify the name of the custom language model that you want to use
                when processing your transcription. Note that language model names are case sensitive. The language of
                the specified language model must match the language code you specify in your transcription request. If
                the languages don't match, the custom language model isn't applied. There are no errors or warnings
                associated with a language mismatch. For more information, see Custom language models.
            x_amzn_transcribe_identify_language: Enables automatic language identification for your transcription. If
                you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you
                think may be present in your audio stream. You can also include a preferred language using
                PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster
                than if you omit this parameter. If you have multi-channel audio that contains different languages on
                each channel, and you've enabled channel identification, automatic language identification identifies
                the dominant language on eac
            x_amzn_transcribe_language_options: Specify two or more language codes that represent the languages you
                think may be present in your media; including more than five is not recommended. Including language
                options can improve the accuracy of language identification. If you include LanguageOptions in your
                request, you must also include IdentifyLanguage or IdentifyMultipleLanguages. For a list of languages
                supported with Amazon Transcribe streaming, refer to the Supported languages table. You can only include
                one language dialect per language per stream. For example, you cannot include en-US and en-AU in the
                same request.
            x_amzn_transcribe_preferred_language: Specify a preferred language from the subset of languages codes you
                specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
                LanguageOptions in your request.
            x_amzn_transcribe_identify_multiple_languages: Enables automatic multi-language identification in your
                transcription job request. Use this parameter if your stream contains more than one language. If your
                stream contains only one language, use IdentifyLanguage instead. If you include
                IdentifyMultipleLanguages, you must include a list of language codes, using LanguageOptions, that you
                think may be present in your stream. If you want to apply a custom vocabulary or a custom vocabulary
                filter to your automatic multiple language identification request, include VocabularyNames or
                VocabularyFilterNames. Note that you must include one of Language
            x_amzn_transcribe_vocabulary_names: Specify the names of the custom vocabularies that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If none of the languages
                of the specified custom vocabularies match the language identified in your media, your job fails. This
                parameter is only intended for use with the IdentifyLanguage parameter. If you're not including
                IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the
                VocabularyName parameter instead. For more information, see Custom vocabularies.
            x_amzn_transcribe_vocabulary_filter_names: Specify the names of the custom vocabulary filters that you want
                to use when processing your transcription. Note that vocabulary filter names are case sensitive. If none
                of the languages of the specified custom vocabulary filters match the language identified in your media,
                your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're
                not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your
                transcription, use the VocabularyFilterName parameter instead. For more information, see Using
                vocabulary filtering with u
            x_amzn_transcribe_session_resume_window: Specify the time window, in minutes, during which your
                transcription session can be resumed, measured from the stream start time. This optional parameter
                accepts integer values from 1 to 300 (5 hours). For example, if your stream starts at 1 PM and you
                specify a SessionResumeWindow of 30 minutes, you can reconnect to the session as many times as you want
                until 1:30 PM.
            x_amzn_transcribe_transcript_format: Specify how numbers, dates, and other alphanumeric entities are
                rendered in your transcription results. WRITTEN renders these entities in their standard written form
                (for example, $50, 10:30 AM, and 101). SPOKEN renders these entities as words, exactly as they were
                spoken (for example, fifty dollars, ten thirty a m, and one oh one). If you don't specify a value,
                Amazon Transcribe uses WRITTEN by default.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/stream-transcription"),
            headers=[
                param[int]("x-amzn-transcribe-sample-rate", x_amzn_transcribe_sample_rate),
                param[XAmznTranscribeMediaEncoding1OrStr](
                    "x-amzn-transcribe-media-encoding", x_amzn_transcribe_media_encoding
                ),
                param[XAmznTranscribeLanguageCode2OrStr | None](
                    "x-amzn-transcribe-language-code", x_amzn_transcribe_language_code
                ),
                param[str | None]("x-amzn-transcribe-vocabulary-name", x_amzn_transcribe_vocabulary_name),
                param[str | None]("x-amzn-transcribe-session-id", x_amzn_transcribe_session_id),
                param[str | None]("x-amzn-transcribe-vocabulary-filter-name", x_amzn_transcribe_vocabulary_filter_name),
                param[XAmznTranscribeVocabularyFilterMethodOrStr | None](
                    "x-amzn-transcribe-vocabulary-filter-method", x_amzn_transcribe_vocabulary_filter_method
                ),
                param[bool | None]("x-amzn-transcribe-show-speaker-label", x_amzn_transcribe_show_speaker_label),
                param[bool | None](
                    "x-amzn-transcribe-enable-channel-identification", x_amzn_transcribe_enable_channel_identification
                ),
                param[int | None]("x-amzn-transcribe-number-of-channels", x_amzn_transcribe_number_of_channels),
                param[bool | None](
                    "x-amzn-transcribe-enable-partial-results-stabilization",
                    x_amzn_transcribe_enable_partial_results_stabilization,
                ),
                param[XAmznTranscribePartialResultsStabilityOrStr | None](
                    "x-amzn-transcribe-partial-results-stability", x_amzn_transcribe_partial_results_stability
                ),
                param[XAmznTranscribeContentIdentificationTypeOrStr | None](
                    "x-amzn-transcribe-content-identification-type", x_amzn_transcribe_content_identification_type
                ),
                param[XAmznTranscribeContentRedactionTypeOrStr | None](
                    "x-amzn-transcribe-content-redaction-type", x_amzn_transcribe_content_redaction_type
                ),
                param[str | None]("x-amzn-transcribe-pii-entity-types", x_amzn_transcribe_pii_entity_types),
                param[str | None]("x-amzn-transcribe-language-model-name", x_amzn_transcribe_language_model_name),
                param[bool | None]("x-amzn-transcribe-identify-language", x_amzn_transcribe_identify_language),
                param[str | None]("x-amzn-transcribe-language-options", x_amzn_transcribe_language_options),
                param[XAmznTranscribePreferredLanguage1OrStr | None](
                    "x-amzn-transcribe-preferred-language", x_amzn_transcribe_preferred_language
                ),
                param[bool | None](
                    "x-amzn-transcribe-identify-multiple-languages", x_amzn_transcribe_identify_multiple_languages
                ),
                param[str | None]("x-amzn-transcribe-vocabulary-names", x_amzn_transcribe_vocabulary_names),
                param[str | None](
                    "x-amzn-transcribe-vocabulary-filter-names", x_amzn_transcribe_vocabulary_filter_names
                ),
                param[int | None]("x-amzn-transcribe-session-resume-window", x_amzn_transcribe_session_resume_window),
                param[XAmznTranscribeTranscriptFormatOrStr | None](
                    "x-amzn-transcribe-transcript-format", x_amzn_transcribe_transcript_format
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AudioStream | AudioStreamDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartStreamTranscriptionResponse],
            error_mapper=start_stream_transcription_error_mapper,
            request_options=request_options,
        )

    def tag_resource(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more
        about using tags with Amazon Transcribe, refer to Tagging resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/#TagResource"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    def untag_resource(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in
        your request, you must also include ResourceArn and TagKeys.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/#UntagResource"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_medical_scribe_stream(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetMedicalScribeStreamResponse, GetMedicalScribeStreamErrorBody]:
        """Provides details about the specified Amazon Web Services HealthScribe streaming session. To view the status
        of the streaming session, check the StreamStatus field in the response. To get the details of post-stream
        analytics, including its status, check the PostStreamAnalyticsResult field in the response.

        Args:
            session_id: The identifier of the HealthScribe streaming session you want information about.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_amazon_transcribe_service_operations_api(
                "/medical-scribe-stream/{SessionId}"
            ),
            path_params=[param[str]("SessionId", session_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetMedicalScribeStreamResponse],
            error_mapper=get_medical_scribe_stream_error_mapper,
            request_options=request_options,
        )

    async def list_tags_for_resource(
        self,
        x_amz_target: XAmzTargetAmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListTagsForResourceErrorBody]:
        """Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more
        about using tags with Amazon Transcribe, refer to Tagging resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/#ListTagsForResource"),
            headers=[
                param[XAmzTargetAmazonTranscribeServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_tags_for_resource_error_mapper,
            request_options=request_options,
        )

    async def start_call_analytics_stream_transcription(
        self,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        *,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode1OrStr | None = None,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_vocabulary_filter_name: str | None = None,
        x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None,
        x_amzn_transcribe_language_model_name: str | None = None,
        x_amzn_transcribe_identify_language: bool | None = None,
        x_amzn_transcribe_language_options: str | None = None,
        x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguageOrStr | None = None,
        x_amzn_transcribe_vocabulary_names: str | None = None,
        x_amzn_transcribe_vocabulary_filter_names: str | None = None,
        x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None,
        x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None,
        x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None,
        x_amzn_transcribe_pii_entity_types: str | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartCallAnalyticsStreamTranscriptionResponse, StartCallAnalyticsStreamTranscriptionErrorBody]:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the
        transcription results are streamed to your application. Use this operation for Call Analytics transcriptions.
        The following parameters are required: language-code or identify-language media-encoding sample-rate For more
        information on streaming with Amazon Transcribe, see Transcribing streaming audio.

        Args:
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Low-quality audio, such as
                telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
                48,000 Hz. Note that the sample rate you specify must match that of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding of your input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. For a list of languages supported with real-time Call Analytics, refer to the Supported languages
                table.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If the language of the
                specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary
                is not applied to your transcription. For more information, see Custom vocabularies.
            x_amzn_transcribe_session_id: Specify a name for your Call Analytics transcription session. If you don't
                include this parameter in your request, Amazon Transcribe generates an ID and returns it in the
                response.
            x_amzn_transcribe_vocabulary_filter_name: Specify the name of the custom vocabulary filter that you want to
                use when processing your transcription. Note that vocabulary filter names are case sensitive. If the
                language of the specified custom vocabulary filter doesn't match the language identified in your media,
                the vocabulary filter is not applied to your transcription. For more information, see Using vocabulary
                filtering with unwanted words.
            x_amzn_transcribe_vocabulary_filter_method: Specify how you want your vocabulary filter applied to your
                transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words
                without changing them, choose tag.
            x_amzn_transcribe_language_model_name: Specify the name of the custom language model that you want to use
                when processing your transcription. Note that language model names are case sensitive. The language of
                the specified language model must match the language code you specify in your transcription request. If
                the languages don't match, the custom language model isn't applied. There are no errors or warnings
                associated with a language mismatch. For more information, see Custom language models.
            x_amzn_transcribe_identify_language: Enables automatic language identification for your Call Analytics
                transcription. If you include IdentifyLanguage, you must include a list of language codes, using
                LanguageOptions, that you think may be present in your audio stream. You must provide a minimum of two
                language selections. You can also include a preferred language using PreferredLanguage. Adding a
                preferred language can help Amazon Transcribe identify the language faster than if you omit this
                parameter. Note that you must include either LanguageCode or IdentifyLanguage in your request. If you
                include both parameters, your transcri
            x_amzn_transcribe_language_options: Specify two or more language codes that represent the languages you
                think may be present in your media. Including language options can improve the accuracy of language
                identification. If you include LanguageOptions in your request, you must also include IdentifyLanguage.
                For a list of languages supported with Call Analytics streaming, refer to the Supported languages table.
                You can only include one language dialect per language per stream. For example, you cannot include en-US
                and en-AU in the same request.
            x_amzn_transcribe_preferred_language: Specify a preferred language from the subset of languages codes you
                specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
                LanguageOptions in your request.
            x_amzn_transcribe_vocabulary_names: Specify the names of the custom vocabularies that you want to use when
                processing your Call Analytics transcription. Note that vocabulary names are case sensitive. If the
                custom vocabulary's language doesn't match the identified media language, it won't be applied to the
                transcription. This parameter is only intended for use with the IdentifyLanguage parameter. If you're
                not including IdentifyLanguage in your request and want to use a custom vocabulary with your
                transcription, use the VocabularyName parameter instead. For more information, see Custom vocabularies.
            x_amzn_transcribe_vocabulary_filter_names: Specify the names of the custom vocabulary filters that you want
                to use when processing your Call Analytics transcription. Note that vocabulary filter names are case
                sensitive. These filters serve to customize the transcript output. This parameter is only intended for
                use with the IdentifyLanguage parameter. If you're not including IdentifyLanguage in your request and
                want to use a custom vocabulary filter with your transcription, use the VocabularyFilterName parameter
                instead. For more information, see Using vocabulary filtering with unwanted words.
            x_amzn_transcribe_enable_partial_results_stabilization: Enables partial result stabilization for your
                transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
                For more information, see Partial-result stabilization.
            x_amzn_transcribe_partial_results_stability: Specify the level of stability to use when you enable partial
                results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy.
                High stability transcribes faster, but with slightly lower accuracy. For more information, see
                Partial-result stabilization.
            x_amzn_transcribe_content_identification_type: Labels all personally identifiable information (PII)
                identified in your transcript. Content identification is performed at the segment level; PII specified
                in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include
                PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and
                ContentRedactionType in the same request. If you set both, your request returns a BadRequestException.
                For more information, see Redacting or identifying personally identifiable information.
            x_amzn_transcribe_content_redaction_type: Redacts all personally identifiable information (PII) identified
                in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes
                is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
                request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the
                same request. If you set both, your request returns a BadRequestException. For more information, see
                Redacting or identifying personally identifiable information.
            x_amzn_transcribe_pii_entity_types: Specify which types of personally identifiable information (PII) you
                want to redact in your transcript. You can include as many types as you'd like, or you can select ALL.
                Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
                CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, or ALL. Note
                that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType or
                ContentRedactionType. If you include ContentRedactionType or ContentIdentificationType in your request,
                but do not include PiiEnti
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api(
                "/call-analytics-stream-transcription"
            ),
            headers=[
                param[int]("x-amzn-transcribe-sample-rate", x_amzn_transcribe_sample_rate),
                param[XAmznTranscribeMediaEncoding1OrStr](
                    "x-amzn-transcribe-media-encoding", x_amzn_transcribe_media_encoding
                ),
                param[XAmznTranscribeLanguageCode1OrStr | None](
                    "x-amzn-transcribe-language-code", x_amzn_transcribe_language_code
                ),
                param[str | None]("x-amzn-transcribe-vocabulary-name", x_amzn_transcribe_vocabulary_name),
                param[str | None]("x-amzn-transcribe-session-id", x_amzn_transcribe_session_id),
                param[str | None]("x-amzn-transcribe-vocabulary-filter-name", x_amzn_transcribe_vocabulary_filter_name),
                param[XAmznTranscribeVocabularyFilterMethodOrStr | None](
                    "x-amzn-transcribe-vocabulary-filter-method", x_amzn_transcribe_vocabulary_filter_method
                ),
                param[str | None]("x-amzn-transcribe-language-model-name", x_amzn_transcribe_language_model_name),
                param[bool | None]("x-amzn-transcribe-identify-language", x_amzn_transcribe_identify_language),
                param[str | None]("x-amzn-transcribe-language-options", x_amzn_transcribe_language_options),
                param[XAmznTranscribePreferredLanguageOrStr | None](
                    "x-amzn-transcribe-preferred-language", x_amzn_transcribe_preferred_language
                ),
                param[str | None]("x-amzn-transcribe-vocabulary-names", x_amzn_transcribe_vocabulary_names),
                param[str | None](
                    "x-amzn-transcribe-vocabulary-filter-names", x_amzn_transcribe_vocabulary_filter_names
                ),
                param[bool | None](
                    "x-amzn-transcribe-enable-partial-results-stabilization",
                    x_amzn_transcribe_enable_partial_results_stabilization,
                ),
                param[XAmznTranscribePartialResultsStabilityOrStr | None](
                    "x-amzn-transcribe-partial-results-stability", x_amzn_transcribe_partial_results_stability
                ),
                param[XAmznTranscribeContentIdentificationTypeOrStr | None](
                    "x-amzn-transcribe-content-identification-type", x_amzn_transcribe_content_identification_type
                ),
                param[XAmznTranscribeContentRedactionTypeOrStr | None](
                    "x-amzn-transcribe-content-redaction-type", x_amzn_transcribe_content_redaction_type
                ),
                param[str | None]("x-amzn-transcribe-pii-entity-types", x_amzn_transcribe_pii_entity_types),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AudioStream | AudioStreamDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartCallAnalyticsStreamTranscriptionResponse],
            error_mapper=start_call_analytics_stream_transcription_error_mapper,
            request_options=request_options,
        )

    async def start_medical_scribe_stream(
        self,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCodeOrStr,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncodingOrStr,
        *,
        x_amzn_transcribe_session_id: str | None = None,
        body: MedicalScribeInputStream | MedicalScribeInputStreamDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartMedicalScribeStreamResponse, StartMedicalScribeStreamErrorBody]:
        """Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the
        transcription results are streamed to your application. When you start a stream, you first specify the stream
        configuration in a MedicalScribeConfigurationEvent. This event includes channel definitions, encryption
        settings, medical scribe context, and post-stream analytics settings, such as the output configuration for
        aggregated transcript and clinical note generation. These are additional streaming session configurations beyond
        those provided in your initial start request headers. Whether you are starting a new session or resuming an
        existing session, your first event must be a MedicalScribeConfigurationEvent. After you send a
        MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services HealthScribe responds with
        real-time transcription results. When you are finished, to start processing the results with the post-stream
        analytics, send a MedicalScribeSessionControlEvent with a Type of END_OF_SESSION and Amazon Web Services
        HealthScribe starts the analytics. You can pause or resume streaming. To pause streaming, complete the input
        stream without sending the M

        Args:
            x_amzn_transcribe_language_code: Specify the language code for your HealthScribe streaming session.
            x_amzn_transcribe_sample_rate: Specify the sample rate of the input audio (in hertz). Amazon Web Services
                HealthScribe supports a range from 16,000 Hz to 48,000 Hz. The sample rate you specify must match that
                of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding used for the input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_session_id: Specify an identifier for your streaming session (in UUID format). If you
                don't include a SessionId in your request, Amazon Web Services HealthScribe generates an ID and returns
                it in the response.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/medical-scribe-stream"),
            headers=[
                param[XAmznTranscribeLanguageCodeOrStr](
                    "x-amzn-transcribe-language-code", x_amzn_transcribe_language_code
                ),
                param[int]("x-amzn-transcribe-sample-rate", x_amzn_transcribe_sample_rate),
                param[XAmznTranscribeMediaEncodingOrStr](
                    "x-amzn-transcribe-media-encoding", x_amzn_transcribe_media_encoding
                ),
                param[str | None]("x-amzn-transcribe-session-id", x_amzn_transcribe_session_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[MedicalScribeInputStream | MedicalScribeInputStreamDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartMedicalScribeStreamResponse],
            error_mapper=start_medical_scribe_stream_error_mapper,
            request_options=request_options,
        )

    async def start_medical_stream_transcription(
        self,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        x_amzn_transcribe_specialty: XAmznTranscribeSpecialtyOrStr,
        x_amzn_transcribe_type: XAmznTranscribeTypeOrStr,
        *,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_show_speaker_label: bool | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_enable_channel_identification: bool | None = None,
        x_amzn_transcribe_number_of_channels: int | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationType1OrStr | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartMedicalStreamTranscriptionResponse, StartMedicalStreamTranscriptionErrorBody]:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe Medical and
        the transcription results are streamed to your application. The following parameters are required: language-code
        media-encoding sample-rate For more information on streaming with Amazon Transcribe Medical, see Transcribing
        streaming audio.

        Args:
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. Amazon Transcribe Medical only supports US English (en-US).
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Amazon Transcribe Medical
                supports a range from 16,000 Hz to 48,000 Hz. Note that the sample rate you specify must match that of
                your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding used for the input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_specialty: Specify the medical specialty contained in your audio.
            x_amzn_transcribe_type: Specify the type of input audio. For example, choose DICTATION for a provider
                dictating patient notes and CONVERSATION for a dialogue between a patient and a medical professional.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive.
            x_amzn_transcribe_show_speaker_label: Enables speaker partitioning (diarization) in your transcription
                output. Speaker partitioning labels the speech from individual speakers in your media file. For more
                information, see Partitioning speakers (diarization).
            x_amzn_transcribe_session_id: Specify a name for your transcription session. If you don't include this
                parameter in your request, Amazon Transcribe Medical generates an ID and returns it in the response.
            x_amzn_transcribe_enable_channel_identification: Enables channel identification in multi-channel audio.
                Channel identification transcribes the audio on each channel independently, then appends the output for
                each channel into one transcript. If you have multi-channel audio and do not enable channel
                identification, your audio is transcribed in a continuous manner and your transcript is not separated by
                channel. If you include EnableChannelIdentification in your request, you must also include
                NumberOfChannels. For more information, see Transcribing multi-channel audio.
            x_amzn_transcribe_number_of_channels: Specify the number of channels in your audio stream. This value must
                be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not
                include this parameter in your request. If you include NumberOfChannels in your request, you must also
                include EnableChannelIdentification.
            x_amzn_transcribe_content_identification_type: Labels all personal health information (PHI) identified in
                your transcript. Content identification is performed at the segment level; PHI is flagged upon complete
                transcription of an audio segment. For more information, see Identifying personal health information
                (PHI) in a transcription.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/medical-stream-transcription"),
            headers=[
                param[XAmznTranscribeLanguageCode2OrStr](
                    "x-amzn-transcribe-language-code", x_amzn_transcribe_language_code
                ),
                param[int]("x-amzn-transcribe-sample-rate", x_amzn_transcribe_sample_rate),
                param[XAmznTranscribeMediaEncoding1OrStr](
                    "x-amzn-transcribe-media-encoding", x_amzn_transcribe_media_encoding
                ),
                param[XAmznTranscribeSpecialtyOrStr]("x-amzn-transcribe-specialty", x_amzn_transcribe_specialty),
                param[XAmznTranscribeTypeOrStr]("x-amzn-transcribe-type", x_amzn_transcribe_type),
                param[str | None]("x-amzn-transcribe-vocabulary-name", x_amzn_transcribe_vocabulary_name),
                param[bool | None]("x-amzn-transcribe-show-speaker-label", x_amzn_transcribe_show_speaker_label),
                param[str | None]("x-amzn-transcribe-session-id", x_amzn_transcribe_session_id),
                param[bool | None](
                    "x-amzn-transcribe-enable-channel-identification", x_amzn_transcribe_enable_channel_identification
                ),
                param[int | None]("x-amzn-transcribe-number-of-channels", x_amzn_transcribe_number_of_channels),
                param[XAmznTranscribeContentIdentificationType1OrStr | None](
                    "x-amzn-transcribe-content-identification-type", x_amzn_transcribe_content_identification_type
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AudioStream | AudioStreamDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartMedicalStreamTranscriptionResponse],
            error_mapper=start_medical_stream_transcription_error_mapper,
            request_options=request_options,
        )

    async def start_stream_transcription(
        self,
        x_amzn_transcribe_sample_rate: int,
        x_amzn_transcribe_media_encoding: XAmznTranscribeMediaEncoding1OrStr,
        *,
        x_amzn_transcribe_language_code: XAmznTranscribeLanguageCode2OrStr | None = None,
        x_amzn_transcribe_vocabulary_name: str | None = None,
        x_amzn_transcribe_session_id: str | None = None,
        x_amzn_transcribe_vocabulary_filter_name: str | None = None,
        x_amzn_transcribe_vocabulary_filter_method: XAmznTranscribeVocabularyFilterMethodOrStr | None = None,
        x_amzn_transcribe_show_speaker_label: bool | None = None,
        x_amzn_transcribe_enable_channel_identification: bool | None = None,
        x_amzn_transcribe_number_of_channels: int | None = None,
        x_amzn_transcribe_enable_partial_results_stabilization: bool | None = None,
        x_amzn_transcribe_partial_results_stability: XAmznTranscribePartialResultsStabilityOrStr | None = None,
        x_amzn_transcribe_content_identification_type: XAmznTranscribeContentIdentificationTypeOrStr | None = None,
        x_amzn_transcribe_content_redaction_type: XAmznTranscribeContentRedactionTypeOrStr | None = None,
        x_amzn_transcribe_pii_entity_types: str | None = None,
        x_amzn_transcribe_language_model_name: str | None = None,
        x_amzn_transcribe_identify_language: bool | None = None,
        x_amzn_transcribe_language_options: str | None = None,
        x_amzn_transcribe_preferred_language: XAmznTranscribePreferredLanguage1OrStr | None = None,
        x_amzn_transcribe_identify_multiple_languages: bool | None = None,
        x_amzn_transcribe_vocabulary_names: str | None = None,
        x_amzn_transcribe_vocabulary_filter_names: str | None = None,
        x_amzn_transcribe_session_resume_window: int | None = None,
        x_amzn_transcribe_transcript_format: XAmznTranscribeTranscriptFormatOrStr | None = None,
        body: AudioStream | AudioStreamDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartStreamTranscriptionResponse, StartStreamTranscriptionErrorBody]:
        """Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the
        transcription results are streamed to your application. The following parameters are required: language-code or
        identify-language or identify-multiple-language media-encoding sample-rate For more information on streaming
        with Amazon Transcribe, see Transcribing streaming audio.

        Args:
            x_amzn_transcribe_sample_rate: The sample rate of the input audio (in hertz). Low-quality audio, such as
                telephone audio, is typically around 8,000 Hz. High-quality audio typically ranges from 16,000 Hz to
                48,000 Hz. Note that the sample rate you specify must match that of your audio.
            x_amzn_transcribe_media_encoding: Specify the encoding of your input audio. Supported formats are: FLAC
                OPUS-encoded audio in an Ogg container PCM (only signed 16-bit little-endian audio formats, which does
                not include WAV) For more information, see Media formats.
            x_amzn_transcribe_language_code: Specify the language code that represents the language spoken in your
                audio. If you're unsure of the language spoken in your audio, consider using IdentifyLanguage to enable
                automatic language identification. For a list of languages supported with Amazon Transcribe streaming,
                refer to the Supported languages table.
            x_amzn_transcribe_vocabulary_name: Specify the name of the custom vocabulary that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If the language of the
                specified custom vocabulary doesn't match the language identified in your media, the custom vocabulary
                is not applied to your transcription. This parameter is not intended for use with the IdentifyLanguage
                parameter. If you're including IdentifyLanguage in your request and want to use one or more custom
                vocabularies with your transcription, use the VocabularyNames parameter instead. For more information,
                see Custom vocabularies
            x_amzn_transcribe_session_id: Specify a name for your transcription session. If you don't include this
                parameter in your request, Amazon Transcribe generates an ID and returns it in the response.
            x_amzn_transcribe_vocabulary_filter_name: Specify the name of the custom vocabulary filter that you want to
                use when processing your transcription. Note that vocabulary filter names are case sensitive. If the
                language of the specified custom vocabulary filter doesn't match the language identified in your media,
                the vocabulary filter is not applied to your transcription. This parameter is not intended for use with
                the IdentifyLanguage parameter. If you're including IdentifyLanguage in your request and want to use one
                or more vocabulary filters with your transcription, use the VocabularyFilterNames parameter instead. For
                more informatio
            x_amzn_transcribe_vocabulary_filter_method: Specify how you want your vocabulary filter applied to your
                transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words
                without changing them, choose tag.
            x_amzn_transcribe_show_speaker_label: Enables speaker partitioning (diarization) in your transcription
                output. Speaker partitioning labels the speech from individual speakers in your media file. For more
                information, see Partitioning speakers (diarization).
            x_amzn_transcribe_enable_channel_identification: Enables channel identification in multi-channel audio.
                Channel identification transcribes the audio on each channel independently, then appends the output for
                each channel into one transcript. If you have multi-channel audio and do not enable channel
                identification, your audio is transcribed in a continuous manner and your transcript is not separated by
                channel. If you include EnableChannelIdentification in your request, you must also include
                NumberOfChannels. For more information, see Transcribing multi-channel audio.
            x_amzn_transcribe_number_of_channels: Specify the number of channels in your audio stream. This value must
                be 2, as only two channels are supported. If your audio doesn't contain multiple channels, do not
                include this parameter in your request. If you include NumberOfChannels in your request, you must also
                include EnableChannelIdentification.
            x_amzn_transcribe_enable_partial_results_stabilization: Enables partial result stabilization for your
                transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.
                For more information, see Partial-result stabilization.
            x_amzn_transcribe_partial_results_stability: Specify the level of stability to use when you enable partial
                results stabilization (EnablePartialResultsStabilization). Low stability provides the highest accuracy.
                High stability transcribes faster, but with slightly lower accuracy. For more information, see
                Partial-result stabilization.
            x_amzn_transcribe_content_identification_type: Labels all personally identifiable information (PII)
                identified in your transcript. Content identification is performed at the segment level; PII specified
                in PiiEntityTypes is flagged upon complete transcription of an audio segment. If you don't include
                PiiEntityTypes in your request, all PII is identified. You can’t set ContentIdentificationType and
                ContentRedactionType in the same request. If you set both, your request returns a BadRequestException.
                For more information, see Redacting or identifying personally identifiable information.
            x_amzn_transcribe_content_redaction_type: Redacts all personally identifiable information (PII) identified
                in your transcript. Content redaction is performed at the segment level; PII specified in PiiEntityTypes
                is redacted upon complete transcription of an audio segment. If you don't include PiiEntityTypes in your
                request, all PII is redacted. You can’t set ContentRedactionType and ContentIdentificationType in the
                same request. If you set both, your request returns a BadRequestException. For more information, see
                Redacting or identifying personally identifiable information.
            x_amzn_transcribe_pii_entity_types: Specify which types of personally identifiable information (PII) you
                want to redact in your transcript. You can include as many types as you'd like, or you can select ALL.
                Values must be comma-separated and can include: ADDRESS, BANK_ACCOUNT_NUMBER, BANK_ROUTING,
                CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, CREDIT_DEBIT_NUMBER, EMAIL, NAME, PHONE, PIN, SSN, AGE,
                DATE_TIME, LICENSE_PLATE, PASSPORT_NUMBER, PASSWORD, USERNAME, VEHICLE_IDENTIFICATION_NUMBER, or ALL.
                Note that if you include PiiEntityTypes in your request, you must also include ContentIdentificationType
                or ContentRedactionType. If you in
            x_amzn_transcribe_language_model_name: Specify the name of the custom language model that you want to use
                when processing your transcription. Note that language model names are case sensitive. The language of
                the specified language model must match the language code you specify in your transcription request. If
                the languages don't match, the custom language model isn't applied. There are no errors or warnings
                associated with a language mismatch. For more information, see Custom language models.
            x_amzn_transcribe_identify_language: Enables automatic language identification for your transcription. If
                you include IdentifyLanguage, you must include a list of language codes, using LanguageOptions, that you
                think may be present in your audio stream. You can also include a preferred language using
                PreferredLanguage. Adding a preferred language can help Amazon Transcribe identify the language faster
                than if you omit this parameter. If you have multi-channel audio that contains different languages on
                each channel, and you've enabled channel identification, automatic language identification identifies
                the dominant language on eac
            x_amzn_transcribe_language_options: Specify two or more language codes that represent the languages you
                think may be present in your media; including more than five is not recommended. Including language
                options can improve the accuracy of language identification. If you include LanguageOptions in your
                request, you must also include IdentifyLanguage or IdentifyMultipleLanguages. For a list of languages
                supported with Amazon Transcribe streaming, refer to the Supported languages table. You can only include
                one language dialect per language per stream. For example, you cannot include en-US and en-AU in the
                same request.
            x_amzn_transcribe_preferred_language: Specify a preferred language from the subset of languages codes you
                specified in LanguageOptions. You can only use this parameter if you've included IdentifyLanguage and
                LanguageOptions in your request.
            x_amzn_transcribe_identify_multiple_languages: Enables automatic multi-language identification in your
                transcription job request. Use this parameter if your stream contains more than one language. If your
                stream contains only one language, use IdentifyLanguage instead. If you include
                IdentifyMultipleLanguages, you must include a list of language codes, using LanguageOptions, that you
                think may be present in your stream. If you want to apply a custom vocabulary or a custom vocabulary
                filter to your automatic multiple language identification request, include VocabularyNames or
                VocabularyFilterNames. Note that you must include one of Language
            x_amzn_transcribe_vocabulary_names: Specify the names of the custom vocabularies that you want to use when
                processing your transcription. Note that vocabulary names are case sensitive. If none of the languages
                of the specified custom vocabularies match the language identified in your media, your job fails. This
                parameter is only intended for use with the IdentifyLanguage parameter. If you're not including
                IdentifyLanguage in your request and want to use a custom vocabulary with your transcription, use the
                VocabularyName parameter instead. For more information, see Custom vocabularies.
            x_amzn_transcribe_vocabulary_filter_names: Specify the names of the custom vocabulary filters that you want
                to use when processing your transcription. Note that vocabulary filter names are case sensitive. If none
                of the languages of the specified custom vocabulary filters match the language identified in your media,
                your job fails. This parameter is only intended for use with the IdentifyLanguage parameter. If you're
                not including IdentifyLanguage in your request and want to use a custom vocabulary filter with your
                transcription, use the VocabularyFilterName parameter instead. For more information, see Using
                vocabulary filtering with u
            x_amzn_transcribe_session_resume_window: Specify the time window, in minutes, during which your
                transcription session can be resumed, measured from the stream start time. This optional parameter
                accepts integer values from 1 to 300 (5 hours). For example, if your stream starts at 1 PM and you
                specify a SessionResumeWindow of 30 minutes, you can reconnect to the session as many times as you want
                until 1:30 PM.
            x_amzn_transcribe_transcript_format: Specify how numbers, dates, and other alphanumeric entities are
                rendered in your transcription results. WRITTEN renders these entities in their standard written form
                (for example, $50, 10:30 AM, and 101). SPOKEN renders these entities as words, exactly as they were
                spoken (for example, fifty dollars, ten thirty a m, and one oh one). If you don't specify a value,
                Amazon Transcribe uses WRITTEN by default.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/stream-transcription"),
            headers=[
                param[int]("x-amzn-transcribe-sample-rate", x_amzn_transcribe_sample_rate),
                param[XAmznTranscribeMediaEncoding1OrStr](
                    "x-amzn-transcribe-media-encoding", x_amzn_transcribe_media_encoding
                ),
                param[XAmznTranscribeLanguageCode2OrStr | None](
                    "x-amzn-transcribe-language-code", x_amzn_transcribe_language_code
                ),
                param[str | None]("x-amzn-transcribe-vocabulary-name", x_amzn_transcribe_vocabulary_name),
                param[str | None]("x-amzn-transcribe-session-id", x_amzn_transcribe_session_id),
                param[str | None]("x-amzn-transcribe-vocabulary-filter-name", x_amzn_transcribe_vocabulary_filter_name),
                param[XAmznTranscribeVocabularyFilterMethodOrStr | None](
                    "x-amzn-transcribe-vocabulary-filter-method", x_amzn_transcribe_vocabulary_filter_method
                ),
                param[bool | None]("x-amzn-transcribe-show-speaker-label", x_amzn_transcribe_show_speaker_label),
                param[bool | None](
                    "x-amzn-transcribe-enable-channel-identification", x_amzn_transcribe_enable_channel_identification
                ),
                param[int | None]("x-amzn-transcribe-number-of-channels", x_amzn_transcribe_number_of_channels),
                param[bool | None](
                    "x-amzn-transcribe-enable-partial-results-stabilization",
                    x_amzn_transcribe_enable_partial_results_stabilization,
                ),
                param[XAmznTranscribePartialResultsStabilityOrStr | None](
                    "x-amzn-transcribe-partial-results-stability", x_amzn_transcribe_partial_results_stability
                ),
                param[XAmznTranscribeContentIdentificationTypeOrStr | None](
                    "x-amzn-transcribe-content-identification-type", x_amzn_transcribe_content_identification_type
                ),
                param[XAmznTranscribeContentRedactionTypeOrStr | None](
                    "x-amzn-transcribe-content-redaction-type", x_amzn_transcribe_content_redaction_type
                ),
                param[str | None]("x-amzn-transcribe-pii-entity-types", x_amzn_transcribe_pii_entity_types),
                param[str | None]("x-amzn-transcribe-language-model-name", x_amzn_transcribe_language_model_name),
                param[bool | None]("x-amzn-transcribe-identify-language", x_amzn_transcribe_identify_language),
                param[str | None]("x-amzn-transcribe-language-options", x_amzn_transcribe_language_options),
                param[XAmznTranscribePreferredLanguage1OrStr | None](
                    "x-amzn-transcribe-preferred-language", x_amzn_transcribe_preferred_language
                ),
                param[bool | None](
                    "x-amzn-transcribe-identify-multiple-languages", x_amzn_transcribe_identify_multiple_languages
                ),
                param[str | None]("x-amzn-transcribe-vocabulary-names", x_amzn_transcribe_vocabulary_names),
                param[str | None](
                    "x-amzn-transcribe-vocabulary-filter-names", x_amzn_transcribe_vocabulary_filter_names
                ),
                param[int | None]("x-amzn-transcribe-session-resume-window", x_amzn_transcribe_session_resume_window),
                param[XAmznTranscribeTranscriptFormatOrStr | None](
                    "x-amzn-transcribe-transcript-format", x_amzn_transcribe_transcript_format
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AudioStream | AudioStreamDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartStreamTranscriptionResponse],
            error_mapper=start_stream_transcription_error_mapper,
            request_options=request_options,
        )

    async def tag_resource(
        self,
        x_amz_target: XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagResourceErrorBody]:
        """Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more
        about using tags with Amazon Transcribe, refer to Tagging resources.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/#TagResource"),
            headers=[
                param[XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_resource_error_mapper,
            request_options=request_options,
        )

    async def untag_resource(
        self,
        x_amz_target: XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagResourceErrorBody]:
        """Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in
        your request, you must also include ResourceArn and TagKeys.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_transcribe_service_operations_api("/#UntagResource"),
            headers=[
                param[XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_resource_error_mapper,
            request_options=request_options,
        )
