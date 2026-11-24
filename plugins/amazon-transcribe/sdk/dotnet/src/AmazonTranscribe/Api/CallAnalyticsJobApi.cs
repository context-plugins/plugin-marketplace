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
using AmazonTranscribe.Requests.CallAnalyticsJobApi;

namespace AmazonTranscribe.Api;

public sealed class CallAnalyticsJobApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CallAnalyticsJobApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Call Analytics Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCallAnalyticsJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using CallAnalyticsJobName. Job names are case sensitive.
    /// </remarks>
    public Task DeleteCallAnalyticsJob(DeleteCallAnalyticsJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteCallAnalyticsJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCallAnalyticsJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Call Analytics Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCallAnalyticsJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides information about the specified Call Analytics job. To view the job's status, refer to CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get a list of your Call Analytics jobs, use the operation.
    /// </remarks>
    public Task GetCallAnalyticsJob(GetCallAnalyticsJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetCallAnalyticsJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetCallAnalyticsJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Call Analytics Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCallAnalyticsJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the operation.
    /// </remarks>
    public Task ListCallAnalyticsJobs(ListCallAnalyticsJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListCallAnalyticsJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListCallAnalyticsJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Call Analytics Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartCallAnalyticsJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your
    /// </remarks>
    public Task StartCallAnalyticsJob(StartCallAnalyticsJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartCallAnalyticsJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartCallAnalyticsJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
