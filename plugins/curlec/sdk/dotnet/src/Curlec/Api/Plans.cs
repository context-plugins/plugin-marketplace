using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.Plans;

namespace Curlec.Api;

/// <summary>
/// Billing plan definitions for recurring subscriptions. A plan sets the billing period, interval, and per-cycle charge. Plans are reusable across multiple subscriptions and cannot be modified after creation.
/// </summary>
public sealed class Plans
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Plans(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Define a recurring billing plan with a fixed period, interval, and amount. Plans are reusable across multiple subscriptions. Once created, plan details cannot be modified.
    /// </remarks>
    public Task<Plan> CreatePlan(CreatePlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Plan>(),
            CreatePlanError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Plan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchPlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details of a specific billing plan.
    /// </remarks>
    public Task<Plan> FetchPlan(FetchPlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Plan>(),
            FetchPlanError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all plans
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlansResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPlansError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all billing plans. Supports pagination.
    /// </remarks>
    public Task<PlansResponse> ListPlans(ListPlansRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/plans"),
            [],
            [new Param("count", request.Count), new Param("skip", request.Skip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PlansResponse>(),
            ListPlansError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
