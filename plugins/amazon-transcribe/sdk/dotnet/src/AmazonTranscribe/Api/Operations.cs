using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonTranscribe.Core;
using AmazonTranscribe.Core.Exceptions;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Core.Request;
using AmazonTranscribe.Core.Response;
using AmazonTranscribe.Errors;
using AmazonTranscribe.Models;
using AmazonTranscribe.Requests.Operations;

namespace AmazonTranscribe.Api;

public sealed class Operations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Operations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Medical Scribe Stream
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMedicalScribeStreamResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMedicalScribeStreamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides details about the specified Amazon Web Services HealthScribe streaming session. To view the status of the streaming session, check the StreamStatus field in the response. To get the details of post-stream analytics, including its status, check the PostStreamAnalyticsResult field in the response.
    /// </remarks>
    public Task<GetMedicalScribeStreamResponse> GetMedicalScribeStream(GetMedicalScribeStreamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonTranscribeServiceOperationsApi("/medical-scribe-stream/{SessionId}"),
            [new TemplateParam("SessionId", request.SessionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMedicalScribeStreamResponse>(),
            GetMedicalScribeStreamError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Tags For Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTagsForResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
    /// </remarks>
    public Task ListTagsForResource(ListTagsForResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonTranscribeServiceOperationsApi("/#ListTagsForResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTagsForResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Call Analytics Stream Transcription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartCallAnalyticsStreamTranscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartCallAnalyticsStreamTranscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the transcription results are streamed to your application. Use this operation for Call Analytics transcriptions. The following parameters are required: language-code or identify-language media-encoding sample-rate For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.
    /// </remarks>
    public Task<StartCallAnalyticsStreamTranscriptionResponse> StartCallAnalyticsStreamTranscription(StartCallAnalyticsStreamTranscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonTranscribeServiceOperationsApi("/call-analytics-stream-transcription"),
            [],
            [],
            [
                new HeaderParam("x-amzn-transcribe-sample-rate", request.XAmznTranscribeSampleRate),
                new HeaderParam("x-amzn-transcribe-media-encoding", request.XAmznTranscribeMediaEncoding),
                new HeaderParam("x-amzn-transcribe-language-code", request.XAmznTranscribeLanguageCode),
                new HeaderParam("x-amzn-transcribe-vocabulary-name", request.XAmznTranscribeVocabularyName),
                new HeaderParam("x-amzn-transcribe-session-id", request.XAmznTranscribeSessionId),
                new HeaderParam(
                    "x-amzn-transcribe-vocabulary-filter-name",
                    request.XAmznTranscribeVocabularyFilterName),
                new HeaderParam(
                    "x-amzn-transcribe-vocabulary-filter-method",
                    request.XAmznTranscribeVocabularyFilterMethod),
                new HeaderParam("x-amzn-transcribe-language-model-name", request.XAmznTranscribeLanguageModelName),
                new HeaderParam("x-amzn-transcribe-identify-language", request.XAmznTranscribeIdentifyLanguage),
                new HeaderParam("x-amzn-transcribe-language-options", request.XAmznTranscribeLanguageOptions),
                new HeaderParam("x-amzn-transcribe-preferred-language", request.XAmznTranscribePreferredLanguage),
                new HeaderParam("x-amzn-transcribe-vocabulary-names", request.XAmznTranscribeVocabularyNames),
                new HeaderParam(
                    "x-amzn-transcribe-vocabulary-filter-names",
                    request.XAmznTranscribeVocabularyFilterNames),
                new HeaderParam(
                    "x-amzn-transcribe-enable-partial-results-stabilization",
                    request.XAmznTranscribeEnablePartialResultsStabilization),
                new HeaderParam(
                    "x-amzn-transcribe-partial-results-stability",
                    request.XAmznTranscribePartialResultsStability),
                new HeaderParam(
                    "x-amzn-transcribe-content-identification-type",
                    request.XAmznTranscribeContentIdentificationType),
                new HeaderParam(
                    "x-amzn-transcribe-content-redaction-type",
                    request.XAmznTranscribeContentRedactionType),
                new HeaderParam("x-amzn-transcribe-pii-entity-types", request.XAmznTranscribePiiEntityTypes),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartCallAnalyticsStreamTranscriptionResponse>(),
            StartCallAnalyticsStreamTranscriptionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Medical Scribe Stream
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartMedicalScribeStreamResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartMedicalScribeStreamError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the transcription results are streamed to your application. When you start a stream, you first specify the stream configuration in a MedicalScribeConfigurationEvent. This event includes channel definitions, encryption settings, medical scribe context, and post-stream analytics settings, such as the output configuration for aggregated transcript and clinical note generation. These are additional streaming session configurations beyond those provided in your initial start request headers. Whether you are starting a new session or resuming an existing session, your first event must be a MedicalScribeConfigurationEvent. After you send a MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services HealthScribe responds with real-time transcription results. When you are finished, to start processing the results with the post-stream analytics, send a MedicalScribeSessionControlEvent with a Type of END_OF_SESSION and Amazon Web Services HealthScribe starts the analytics. You can pause or resume streaming. To pause streaming, complete the input stream without sending the M
    /// </remarks>
    public Task<StartMedicalScribeStreamResponse> StartMedicalScribeStream(StartMedicalScribeStreamRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonTranscribeServiceOperationsApi("/medical-scribe-stream"),
            [],
            [],
            [
                new HeaderParam("x-amzn-transcribe-language-code", request.XAmznTranscribeLanguageCode),
                new HeaderParam("x-amzn-transcribe-sample-rate", request.XAmznTranscribeSampleRate),
                new HeaderParam("x-amzn-transcribe-media-encoding", request.XAmznTranscribeMediaEncoding),
                new HeaderParam("x-amzn-transcribe-session-id", request.XAmznTranscribeSessionId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartMedicalScribeStreamResponse>(),
            StartMedicalScribeStreamError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Medical Stream Transcription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartMedicalStreamTranscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartMedicalStreamTranscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe Medical and the transcription results are streamed to your application. The following parameters are required: language-code media-encoding sample-rate For more information on streaming with Amazon Transcribe Medical, see Transcribing streaming audio.
    /// </remarks>
    public Task<StartMedicalStreamTranscriptionResponse> StartMedicalStreamTranscription(StartMedicalStreamTranscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonTranscribeServiceOperationsApi("/medical-stream-transcription"),
            [],
            [],
            [
                new HeaderParam("x-amzn-transcribe-language-code", request.XAmznTranscribeLanguageCode),
                new HeaderParam("x-amzn-transcribe-sample-rate", request.XAmznTranscribeSampleRate),
                new HeaderParam("x-amzn-transcribe-media-encoding", request.XAmznTranscribeMediaEncoding),
                new HeaderParam("x-amzn-transcribe-specialty", request.XAmznTranscribeSpecialty),
                new HeaderParam("x-amzn-transcribe-type", request.XAmznTranscribeType),
                new HeaderParam("x-amzn-transcribe-vocabulary-name", request.XAmznTranscribeVocabularyName),
                new HeaderParam("x-amzn-transcribe-show-speaker-label", request.XAmznTranscribeShowSpeakerLabel),
                new HeaderParam("x-amzn-transcribe-session-id", request.XAmznTranscribeSessionId),
                new HeaderParam(
                    "x-amzn-transcribe-enable-channel-identification",
                    request.XAmznTranscribeEnableChannelIdentification),
                new HeaderParam("x-amzn-transcribe-number-of-channels", request.XAmznTranscribeNumberOfChannels),
                new HeaderParam(
                    "x-amzn-transcribe-content-identification-type",
                    request.XAmznTranscribeContentIdentificationType),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartMedicalStreamTranscriptionResponse>(),
            StartMedicalStreamTranscriptionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Stream Transcription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartStreamTranscriptionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartStreamTranscriptionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the transcription results are streamed to your application. The following parameters are required: language-code or identify-language or identify-multiple-language media-encoding sample-rate For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.
    /// </remarks>
    public Task<StartStreamTranscriptionResponse> StartStreamTranscription(StartStreamTranscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonTranscribeServiceOperationsApi("/stream-transcription"),
            [],
            [],
            [
                new HeaderParam("x-amzn-transcribe-sample-rate", request.XAmznTranscribeSampleRate),
                new HeaderParam("x-amzn-transcribe-media-encoding", request.XAmznTranscribeMediaEncoding),
                new HeaderParam("x-amzn-transcribe-language-code", request.XAmznTranscribeLanguageCode),
                new HeaderParam("x-amzn-transcribe-vocabulary-name", request.XAmznTranscribeVocabularyName),
                new HeaderParam("x-amzn-transcribe-session-id", request.XAmznTranscribeSessionId),
                new HeaderParam(
                    "x-amzn-transcribe-vocabulary-filter-name",
                    request.XAmznTranscribeVocabularyFilterName),
                new HeaderParam(
                    "x-amzn-transcribe-vocabulary-filter-method",
                    request.XAmznTranscribeVocabularyFilterMethod),
                new HeaderParam("x-amzn-transcribe-show-speaker-label", request.XAmznTranscribeShowSpeakerLabel),
                new HeaderParam(
                    "x-amzn-transcribe-enable-channel-identification",
                    request.XAmznTranscribeEnableChannelIdentification),
                new HeaderParam("x-amzn-transcribe-number-of-channels", request.XAmznTranscribeNumberOfChannels),
                new HeaderParam(
                    "x-amzn-transcribe-enable-partial-results-stabilization",
                    request.XAmznTranscribeEnablePartialResultsStabilization),
                new HeaderParam(
                    "x-amzn-transcribe-partial-results-stability",
                    request.XAmznTranscribePartialResultsStability),
                new HeaderParam(
                    "x-amzn-transcribe-content-identification-type",
                    request.XAmznTranscribeContentIdentificationType),
                new HeaderParam(
                    "x-amzn-transcribe-content-redaction-type",
                    request.XAmznTranscribeContentRedactionType),
                new HeaderParam("x-amzn-transcribe-pii-entity-types", request.XAmznTranscribePiiEntityTypes),
                new HeaderParam("x-amzn-transcribe-language-model-name", request.XAmznTranscribeLanguageModelName),
                new HeaderParam("x-amzn-transcribe-identify-language", request.XAmznTranscribeIdentifyLanguage),
                new HeaderParam("x-amzn-transcribe-language-options", request.XAmznTranscribeLanguageOptions),
                new HeaderParam("x-amzn-transcribe-preferred-language", request.XAmznTranscribePreferredLanguage),
                new HeaderParam(
                    "x-amzn-transcribe-identify-multiple-languages",
                    request.XAmznTranscribeIdentifyMultipleLanguages),
                new HeaderParam("x-amzn-transcribe-vocabulary-names", request.XAmznTranscribeVocabularyNames),
                new HeaderParam(
                    "x-amzn-transcribe-vocabulary-filter-names",
                    request.XAmznTranscribeVocabularyFilterNames),
                new HeaderParam("x-amzn-transcribe-session-resume-window", request.XAmznTranscribeSessionResumeWindow),
                new HeaderParam("x-amzn-transcribe-transcript-format", request.XAmznTranscribeTranscriptFormat),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartStreamTranscriptionResponse>(),
            StartStreamTranscriptionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TagResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
    /// </remarks>
    public Task TagResource(TagResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonTranscribeServiceOperationsApi("/#TagResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            TagResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Untag Resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UntagResourceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in your request, you must also include ResourceArn and TagKeys.
    /// </remarks>
    public Task UntagResource(UntagResourceOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAmazonTranscribeServiceOperationsApi("/#UntagResource"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UntagResourceError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
