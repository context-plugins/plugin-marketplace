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
using AmazonTranscribe.Requests.MedicalScribeJobApi;

namespace AmazonTranscribe.Api;

public sealed class MedicalScribeJobApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MedicalScribeJobApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Medical Scribe Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMedicalScribeJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using MedicalScribeJobName. Job names are case sensitive.
    /// </remarks>
    public Task DeleteMedicalScribeJob(DeleteMedicalScribeJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteMedicalScribeJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteMedicalScribeJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Medical Scribe Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMedicalScribeJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides information about the specified Medical Scribe job. To view the status of the specified medical transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the operation.
    /// </remarks>
    public Task GetMedicalScribeJob(GetMedicalScribeJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetMedicalScribeJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetMedicalScribeJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Medical Scribe Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMedicalScribeJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the operation.
    /// </remarks>
    public Task ListMedicalScribeJobs(ListMedicalScribeJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListMedicalScribeJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListMedicalScribeJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Medical Scribe Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartMedicalScribeJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media, write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBu
    /// </remarks>
    public Task StartMedicalScribeJob(StartMedicalScribeJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartMedicalScribeJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartMedicalScribeJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
