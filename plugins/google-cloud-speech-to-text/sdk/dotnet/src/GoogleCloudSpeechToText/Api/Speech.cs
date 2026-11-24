using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudSpeechToText.Core;
using GoogleCloudSpeechToText.Core.Authentication;
using GoogleCloudSpeechToText.Core.Exceptions;
using GoogleCloudSpeechToText.Core.Models;
using GoogleCloudSpeechToText.Core.Request;
using GoogleCloudSpeechToText.Core.Response;
using GoogleCloudSpeechToText.Errors;
using GoogleCloudSpeechToText.Models;
using GoogleCloudSpeechToText.Requests.Speech;

namespace GoogleCloudSpeechToText.Api;

public sealed class Speech
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Speech(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Longrunningrecognize speech
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechSpeechLongrunningrecognizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an <c>Operation.error</c> or an <c>Operation.response</c> which contains a <c>LongRunningRecognizeResponse</c> message. For more information on asynchronous speech recognition, see the how-to.
    /// </remarks>
    public Task<Operation> SpeechSpeechLongrunningrecognize(SpeechSpeechLongrunningrecognizeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/speech:longrunningrecognize"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            SpeechSpeechLongrunningrecognizeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Recognize speech
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecognizeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpeechSpeechRecognizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Performs synchronous speech recognition: receive results after all audio has been sent and processed.
    /// </remarks>
    public Task<RecognizeResponse> SpeechSpeechRecognize(SpeechSpeechRecognizeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/speech:recognize"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecognizeResponse>(),
            SpeechSpeechRecognizeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
