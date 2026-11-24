using System;
using System.Collections.Generic;
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
using Givebutter.Requests.Households;

namespace Givebutter.Api;

public sealed class Households
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Households(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a household
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsDestroyError"/> when the server returns an error response.</exception>
    public Task HouseholdsDestroy(HouseholdsDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households/{household}"),
            [new TemplateParam("household", request.Household)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            HouseholdsDestroyError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all households
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="HouseholdResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsIndexError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<HouseholdResource>> HouseholdsIndex(HouseholdsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households"),
            [],
            [
                new Param("headContactId", request.HeadContactId),
                new Param("contacts", request.Contacts),
                new Param("query", request.Query),
                new Param("sortBy", request.SortBy),
                new Param("sortByDesc", request.SortByDesc),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<HouseholdResource>>(),
            HouseholdsIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a household
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppHttpResourcesApiHouseholdResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsShowError"/> when the server returns an error response.</exception>
    public Task<AppHttpResourcesApiHouseholdResource> HouseholdsShow(HouseholdsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households/{household}"),
            [new TemplateParam("household", request.Household)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AppHttpResourcesApiHouseholdResource>(),
            HouseholdsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a household
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppHttpResourcesApiHouseholdResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsStoreError"/> when the server returns an error response.</exception>
    public Task<AppHttpResourcesApiHouseholdResource> HouseholdsStore(HouseholdsStoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AppHttpResourcesApiHouseholdResource>(),
            HouseholdsStoreError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a household
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppHttpResourcesApiHouseholdResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HouseholdsUpdateError"/> when the server returns an error response.</exception>
    public Task<AppHttpResourcesApiHouseholdResource> HouseholdsUpdate(HouseholdsUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/households/{household}"),
            [new TemplateParam("household", request.Household)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AppHttpResourcesApiHouseholdResource>(),
            HouseholdsUpdateError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
