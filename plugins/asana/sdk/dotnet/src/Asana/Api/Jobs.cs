using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.Jobs;

namespace Asana.Api;

/// <summary>
/// Jobs represent processes that handle asynchronous work. A job created when an endpoint requests an action that will be handled asynchronously, such as project or task duplication.
/// <para>
/// Only the creator of the duplication process can access the duplication status of the new object.
/// </para>
/// <para>
/// *Note*: With any work that is handled asynchronously (e.g., project instantation from a template, duplicating a task or project, etc.), the *intermittent states* of newly-created objects may not be consistent. That is, object properties may return different values each time when polled until the job <c>status</c> has returned a <c>succeeded</c> value.
/// </para>
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
    /// Get a job by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full record for a job.
    /// </remarks>
    public Task<JobsResponse> GetJob(GetJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/jobs/{job_gid}"),
            [new TemplateParam("job_gid", request.JobGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JobsResponse>(),
            GetJobError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
