using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using StayingApi.Core;
using StayingApi.Core.Exceptions;
using StayingApi.Core.Models;
using StayingApi.Core.Request;
using StayingApi.Core.Response;
using StayingApi.Errors;
using StayingApi.Models.AnyOf;
using StayingApi.Requests.Jobs;

namespace StayingApi.Api;

/// <summary>
/// Async job polling
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
    /// Poll an async job (always 0 credits)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PollJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Poll until status is terminal (completed | failed). While pending/running the response carries a Retry-After header. Enforces jobs.user_id == caller; unknown/not-owned/expired → job_not_found (404).
    /// </remarks>
    public Task<JobResponse> PollJob(PollJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/jobs/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobResponse>(),
            PollJobError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
