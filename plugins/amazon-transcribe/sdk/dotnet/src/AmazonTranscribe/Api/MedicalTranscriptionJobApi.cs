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
using AmazonTranscribe.Requests.MedicalTranscriptionJobApi;

namespace AmazonTranscribe.Api;

public sealed class MedicalTranscriptionJobApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MedicalTranscriptionJobApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Medical Transcription Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMedicalTranscriptionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using MedicalTranscriptionJobName. Job names are case sensitive.
    /// </remarks>
    public Task DeleteMedicalTranscriptionJob(DeleteMedicalTranscriptionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteMedicalTranscriptionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteMedicalTranscriptionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Medical Transcription Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMedicalTranscriptionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides information about the specified medical transcription job. To view the status of the specified medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. To get a list of your medical transcription jobs, use the operation.
    /// </remarks>
    public Task GetMedicalTranscriptionJob(GetMedicalTranscriptionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetMedicalTranscriptionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetMedicalTranscriptionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Medical Transcription Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMedicalTranscriptionJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned. To get detailed information about a specific medical transcription job, use the operation.
    /// </remarks>
    public Task ListMedicalTranscriptionJobs(ListMedicalTranscriptionJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListMedicalTranscriptionJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListMedicalTranscriptionJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Medical Transcription Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartMedicalTranscriptionJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3
    /// </remarks>
    public Task StartMedicalTranscriptionJob(StartMedicalTranscriptionJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartMedicalTranscriptionJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartMedicalTranscriptionJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
