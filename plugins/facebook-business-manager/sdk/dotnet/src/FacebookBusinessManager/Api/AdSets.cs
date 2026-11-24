using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Exceptions;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Request;
using FacebookBusinessManager.Core.Response;
using FacebookBusinessManager.Errors;
using FacebookBusinessManager.Models;
using FacebookBusinessManager.Requests.AdSets;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Manage ad sets within campaigns, including targeting, budgets, scheduling, and optimization goals.
/// </summary>
public sealed class AdSets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AdSets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Create an ad set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAdSetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal, and bid strategy.
    /// </remarks>
    public Task<CreateResponse> CreateAdSet(CreateAdSetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/adsets"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            CreateAdSetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Get an ad set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdSet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAdSetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific ad set including targeting, budget, scheduling, and optimization settings.
    /// </remarks>
    public Task<AdSet> GetAdSet(GetAdSetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{ad_set_id}"),
            [new TemplateParam("ad_set_id", request.AdSetId)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdSet>(),
            GetAdSetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager List ad sets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AdSetList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAdSetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and optimization configurations.
    /// </remarks>
    public Task<AdSetList> ListAdSets(ListAdSetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/adsets"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [new Param("fields", request.Fields), new Param("limit", request.Limit), new Param("after", request.After)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AdSetList>(),
            ListAdSetsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Update an ad set
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAdSetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization settings.
    /// </remarks>
    public Task<SuccessResponse> UpdateAdSet(UpdateAdSetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{ad_set_id}"),
            [new TemplateParam("ad_set_id", request.AdSetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessResponse>(),
            UpdateAdSetError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
