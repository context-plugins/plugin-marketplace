using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.RecurringPlans;

namespace Givebutter.Api;

public sealed class RecurringPlans
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal RecurringPlans(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List all recurring plans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PlansResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlansIndexError"/> when the server returns an error response.</exception>
    public Task<V1PlansResponse> PlansIndex(PlansIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/plans"),
            [],
            [new Param("contacts", request.Contacts)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PlansResponse>(),
            PlansIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a recurring plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecurringPlanResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlansShowError"/> when the server returns an error response.</exception>
    public Task<RecurringPlanResource> PlansShow(PlansShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/plans/{plan}"),
            [new TemplateParam("plan", request.Plan)],
            [
                new Param("first_name", request.FirstName),
                new Param("last_name", request.LastName),
                new Param("email", request.Email),
                new Param("amount", request.Amount),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RecurringPlanResource>(),
            PlansShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
