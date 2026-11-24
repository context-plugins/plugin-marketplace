using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonRekognition.Core;
using AmazonRekognition.Core.Exceptions;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Core.Request;
using AmazonRekognition.Core.Response;
using AmazonRekognition.Errors;
using AmazonRekognition.Requests.MediaAnalysisJob;

namespace AmazonRekognition.Api;

public sealed class MediaAnalysisJob
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MediaAnalysisJob(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Media Analysis Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMediaAnalysisJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Retrieves the results for a given media analysis job. Takes a JobId returned by StartMediaAnalysisJob.
    /// </remarks>
    public Task GetMediaAnalysisJob(GetMediaAnalysisJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetMediaAnalysisJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetMediaAnalysisJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Media Analysis Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMediaAnalysisJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Returns a list of media analysis jobs. Results are sorted by CreationTimestamp in descending order.
    /// </remarks>
    public Task ListMediaAnalysisJobs(ListMediaAnalysisJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListMediaAnalysisJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListMediaAnalysisJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Media Analysis Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartMediaAnalysisJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see Rekognition feature availability changes. This change does not impact the availability of other Amazon Rekognition features. Initiates a new media analysis job. Accepts a manifest file in an Amazon S3 bucket. The output is a manifest file and a summary of the manifest stored in the Amazon S3 bucket.
    /// </remarks>
    public Task StartMediaAnalysisJob(StartMediaAnalysisJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartMediaAnalysisJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartMediaAnalysisJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
