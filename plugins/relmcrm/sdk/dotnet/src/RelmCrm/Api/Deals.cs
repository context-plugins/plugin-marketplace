using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using RelmCrm.Core;
using RelmCrm.Core.Authentication;
using RelmCrm.Core.ErrorResponse;
using RelmCrm.Core.Exceptions;
using RelmCrm.Core.Models;
using RelmCrm.Core.Request;
using RelmCrm.Core.Response;
using RelmCrm.Models;
using RelmCrm.Requests.Deals;

namespace RelmCrm.Api;

public sealed class Deals
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Deals(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a deal (title required)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Deal> CreateDeal(CreateDealRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/deals"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Deal>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Soft-delete a deal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deleted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Deleted> DeleteDeal(DeleteDealRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/deals/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Deleted>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a deal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Deal> GetDeal(GetDealRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/deals/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Deal>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List deals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DealList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<DealList> ListDeals(ListDealsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/deals"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("include_deleted", request.IncludeDeleted),
                new Param("q", request.Q),
                new Param("pipeline", request.Pipeline),
                new Param("pipeline_id", request.PipelineId),
                new Param("stage", request.Stage),
                new Param("company_id", request.CompanyId),
                new Param("primary_contact_id", request.PrimaryContactId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DealList>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore a deal
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Deal> RestoreDeal(RestoreDealRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/deals/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Deal>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a deal (incl. moving stage/pipeline)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Deal"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Deal> UpdateDeal(UpdateDealRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/deals/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Deal>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.BearerAuth, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
