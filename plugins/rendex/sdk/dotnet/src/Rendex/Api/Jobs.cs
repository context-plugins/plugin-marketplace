using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Rendex.Core;
using Rendex.Core.Exceptions;
using Rendex.Core.Models;
using Rendex.Core.Request;
using Rendex.Core.Response;
using Rendex.Errors;
using Rendex.Models;
using Rendex.Requests.Jobs;

namespace Rendex.Api;

/// <summary>
/// Async job and batch status polling
/// </summary>
public sealed class Jobs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Jobs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Poll batch status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBatchStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current status of a batch capture request, including per-URL
    /// job statuses and progress.
    /// </remarks>
    public Task<BatchStatusResponse> GetBatchStatus(GetBatchStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/batches/{batchId}"),
            [new TemplateParam("batchId", request.BatchId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BatchStatusResponse>(),
            GetBatchStatusError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Poll async job status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current status of an async screenshot job. When status is <c>completed</c>,
    /// the response includes the image URL or base64 data.
    /// </remarks>
    public Task<JobStatusResponse> GetJobStatus(GetJobStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/jobs/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobStatusResponse>(),
            GetJobStatusError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
