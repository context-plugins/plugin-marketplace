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
using AmazonTranscribe.Requests.TranscriptionJobs;

namespace AmazonTranscribe.Api;

public sealed class TranscriptionJobs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TranscriptionJobs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Transcription Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTranscriptionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a transcription job. To use this operation, specify the name of the job you want to delete using TranscriptionJobName. Job names are case sensitive.
    /// </remarks>
    public Task DeleteTranscriptionJob(DeleteTranscriptionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteTranscriptionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteTranscriptionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Transcription Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTranscriptionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides information about the specified transcription job. To view the status of the specified transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the operation.
    /// </remarks>
    public Task GetTranscriptionJob(GetTranscriptionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetTranscriptionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetTranscriptionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Transcription Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTranscriptionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned. To get detailed information about a specific transcription job, use the operation.
    /// </remarks>
    public Task ListTranscriptionJobs(ListTranscriptionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListTranscriptionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListTranscriptionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Transcription Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartTranscriptionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.
    /// </remarks>
    public Task StartTranscriptionJob(StartTranscriptionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartTranscriptionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartTranscriptionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
